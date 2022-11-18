<?php

return function ($kirby, $page, $site) {
    

    // if the form has been submitted…
    if ($kirby->request()->is('POST') && get('submit')) {

        // initialize variables
        $alert      = [];
        $attachments = [];
        $file = [];

        // check the honeypot and exit if is has been filled in
        if(empty(get('website')) === false) {
            go($page->url());
            exit;
        }

        $data = [
            'title'    => get('title'),
            'author'    => get('author'),
            'artists'    => get('artists'),
            'email'   => get('email'),
            // 'date' => get('date'),
            'venue' => get('venue'),
            'opened' => get('opened'),
            'closed' => get('closed'),
            'socials' => get('socials'),
            'bio' => get('bio'),
            'text'   => get('text')
            
        ];

        $rules = [
            'author'  => ['required'],
            // 'images'  => ['required'],
            'email' => ['required', 'email'],
            'title'    => ['required'],
            'artists'    => ['required'],
            // 'date' => ['required'],
            'venue' => ['required'],
            'bio'   => ['required', 'min' => 1, 'max' => 350],
            'text'   => ['required'],
        ];

        $messages = [
            'author'  => 'Please enter your <a href="#author">author</a>.',
            'email' => 'Please enter a valid <a href="#email">email address</a>.',
            'bio' => 'Please check you have included your bio (maximum 350 characters).',
            'title'    => 'Please enter the title of the exhibition reviewed. If there is no title, please indicate.',
            'artists'    => 'Please enter at least one artist name.',
            'date' => 'The publish date appears to be missing.',
            'venue' => 'Plesae enter the venue or state "no venue" if none.',
        ];

        // some of the data is invalid
        if ($invalid = invalid($data, $rules, $messages)) {
            $alert = $invalid;
        } 

        //  // authenticate as almighty
        //  $kirby->impersonate('kirby');

        //  // get the uploads
        //  $uploads = $kirby->request()->files()->get('file');

        //  // we want no more than 3 files
        //  if (count($uploads) > 3) {
        //      $alert[] = 'You may only upload up to 3 files.';
        //  }

        //  // loop through uploads and check if they are valid
        //  foreach ($uploads as $upload) {
        //      // make sure the user uploads at least one file
        //      if ($upload['error'] === 4) {
        //          $alert[] = 'You have to attach at least one file';
        //      //  make sure there are no other errors  
        //      } elseif ($upload['error'] !== 0) {
        //          $alert[] = 'The file could not be uploaded';
        //      // make sure the file is not larger than 2MB…    
        //      } elseif ($upload['size'] > 2000000)  {
        //          $alert[] = $upload['name'] . ' is larger than 2 MB';
        //      // …and the file is a PDF
        //      } elseif ($upload['type'] !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        //          $alert[] = $upload['name'] . ' is not a docx';
        //      // all valid, try to rename the temporary file
        //      } else {
        //          $name     = $upload['tmp_name'];
        //          $tmpName  = pathinfo($name);
        //          // sanitize the original filename
        //          $filename = $tmpName['dirname']. '/'. F::safeName($upload['name']);
         
        //          if (rename($upload['tmp_name'], $filename)) {
        //              $name = $filename;
        //          }
        //          // add the files to the attachments array
        //          $attachments[] = $name;
        //      }  
        //  }
        
        
                // the data is fine, let's send the email with attachments
            if (empty($alert)) {
                try {
                    $kirby->email([
                        'template' => 'email',
                        'from'     => 'mailer@memoreview.net',
                        'replyTo'  => 'editor@memoreview.net',
                        'fromName' => 'Memo Review',
                        'cc'       => $data['email'],
                        'to'       => 'paris.lettau@gmail.com',
                        'bcc'       => [
                            'paris.lettau@gmail.com',
                            'chelshopper@gmail.com',
                            'ameliacwinata@gmail.com',
                            'gilessimonfielke@gmail.com',
                            'dave@greenant.net'
                        ],
                        'subject'     => '[MEMO OPEN] ' . esc($data['author']) . ' submitted a review of ' . esc($data['title']) . ' at ' . esc($data['venue']),
                        'data'        => [
                            'message'      => "A new review has been submitted",
                            'author'      => esc($data['author']),
                            'title'    => get('title'),
                            'artists'    => get('artists'),
                            'email'   => get('email'),
                            'date' => get('date'),
                            'venue' => get('venue'),
                            'opened' => get('opened'),
                            'closed' => get('closed'),
                            'socials' => get('socials'),
                            'bio' => get('bio'),
                            'text'   => get('text'),
                            'slug'     => $site->url() . "/panel/pages/memo-open+" . str::slug($data['title']) . "-at-" . str::slug($data['venue']) . "-by-" .  str::slug($data['author'])
                        ],
                        // 'attachments' => $attachments
                    ]);
                } catch (Exception $error) {
                    // we only display a general error message, for debugging use `$error->getMessage()`
                    $alert[] = $error;
                }

                 // everything is ok, let's try to create a new registration
                if (empty($alert)) {
                    try {
                        // we store registrations as subpages of the current page
                        $registration = $site->find('memo-open')->createChild([
                            'slug'     => str::slug($data['title']) . "-at-" . str::slug($data['venue']) . "-by-" .  str::slug($data['author']),
                            'template' => 'review',
                            'content'  => $data
                        ]);
                        
                        
                    } catch (Exception $e) {
                        $alert = ['Your submission failed: ' . $e->getMessage()];
                    }
                 }

                //  if (empty($alert)) {
                //     try {

                //         $name = crc32($upload['name'].microtime()). '_' . $upload['name'];

                //         $file = page('storage')->createFile([
                //         'source'   => $upload['tmp_name'],
                //         'filename' => $name,
                //         'template' => 'upload',
                //         'content' => [
                //             'date' => date('Y-m-d h:m')
                //         ]
                //         ]);
                //         $success = 'Your file upload was successful';

                //     } catch (Exception $e) {
                //         $alert = ['Your submission failed: ' . $e->getMessage()];
                //     }
                // }
            }

            if (empty($alert) === true) {
                   // store reference and name in the session for use on the success page
                   $kirby->session()->set([
                    'venue' => esc($data['venue']),
                    'name'  => esc($data['author'])
                ]);
                // redirect to the success page
                go('success');
            }
        }

    // return data to template
    return [
        'alert' => $alert ?? null,
        'data'  => $data ?? false,
    ];
};