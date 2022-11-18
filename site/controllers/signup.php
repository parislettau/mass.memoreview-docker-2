<?php

return function ($kirby, $site) {
  $success = [];
  $error = [];
  if ($kirby->user()) go('/submission');


  if ($kirby->request()->is('POST') and get('registration')) {

    if (!empty(get('website'))) {
      go('login');
      exit;
    }

    try {
      $password = esc(get('password'));
      $validate = esc(get('validate'));

      if (v::same($password, $validate)) {

        $kirby->impersonate('kirby');
        $user = $kirby->users()->create([
          'name'      => esc(get('name')),
          'email'      => esc(get('email')),
          'language'  => 'en',
          'role'      => 'writer',
          'password'  => esc(get('password')),
          'content'   => [
            'name'      => esc(get('name')),
            // 'phone'      => esc(get('phone')),
            'email'      => esc(get('email')),
            // 'address'      => esc(get('address')),
            // 'country'      => esc(get('country')),
            // 'address'      => esc(get('address')),
            // 'state'     => esc(get('state')),
            // 'postcode'      => esc(get('postcode')),
            // 'instagram'  => esc(get('instagram')),
            // 'twitter'  => esc(get('twitter')),
          ],
        ]);

        // $data = [
        //   'text'    => get('bio'),
        //   'name'    => get('name'),
        //   'email'    => get('email'),
        //   'title'    => get('name'),
        // ];

        // // we store registrations as subpages of the current page
        // $registration = $site->find('authors')->createChild([
        //   'slug'     => str::slug($data['name']),
        //   'template' => 'author',
        //   'content'  => $data
        // ]);

        $success = '<center>🍾 Account created for “' . $user->name() . '”.</center> <form style="margin-top:1rem" action="/login"><input class="form-element form-button" type="submit" value="login" /></form>';
      } else {

        $error = 'Please note, passwords must be identical!';
      }
    } catch (Exception $e) {

      $error = $e->getMessage();
    }

    try {
      // first a confirmation email
      $kirby->email([
        'template' => 'confirmation',
        'from'     => 'mailer@memoreview.net',
        'to'  => 'editor@memoreview.net',
        'fromName' => 'Memo Review',
        'subject'     => '[MASS MEMO] Author account created for ' . esc($data['name']),
        'data'        => [
          'message'      => esc($data['name']) . " just created an account.",
        ]
      ]);
    } catch (Exception $e) {
      // we only display a general error message, for debugging use `$error->getMessage()`
      $alert = ['Your submission failed: ' . $e->getMessage()];
    }

    return compact('error', 'success');
  }
};
