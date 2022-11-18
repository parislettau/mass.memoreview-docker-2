<?php
# https://forum.getkirby.com/t/send-kirby-emails-with-gmail-smtp-and-oauth2/22021
# see below before 'retun' also for:
use League\OAuth2\Client\Provider\Google;
use PHPMailer\PHPMailer\OAuth;

return [
  // As a security measure, you cannot install the Panel on a public server by default. To allow this, you can enable the panel.install option
  // 'panel' =>[
  //   'install' => true
  // ],
  // It's recommended to remove this setting after the installation on your remote server is complete.
  // 'url' => 'https://mass-memoreview-docker.memoreview.net/',

  # https://getkirby.com/docs/reference/system/options/panel
  'panel' => [
    'install' => true
  ],
  // Login methods
  'auth' => [
    'methods'   => ['password', 'password-reset'],
    'challenge' => [
      'timeout' => 5 * 60, // 5 minutes
      'email' => [
        'from'     => 'mailer@memoreview.net',
        'fromName' => 'Memo Review',
        'subject'  => 'Login code'
      ]
    ]
  ],

  'smartypants' => true,

  // // srcset 
  // 'thumbs' => [
  //   'srcsets' => [
  //     'default' => [
  //       '320w' => ['width' => 320, 'quality' => 80],
  //       '800w' => ['width' => 800, 'quality' => 80],
  //       '1024w' => ['width' => 1024, 'quality' => 80],
  //       '1440w' => ['width' => 1440, 'quality' => 80],
  //       '2048w' => ['width' => 2048, 'quality' => 80]
  //     ]
  //   ]
  // ],
  # https://getkirby.com/docs/cookbook/performance/responsive-images
  'thumbs' => [
    'srcsets' => [
      'default' => [
        '300w'  => ['width' => 300],
        '600w'  => ['width' => 600],
        '900w'  => ['width' => 900],
        '1200w' => ['width' => 1200],
        '1800w' => ['width' => 1800]
      ],
      'avif' => [
        '300w'  => ['width' => 300, 'format' => 'avif'],
        '600w'  => ['width' => 600, 'format' => 'avif'],
        '900w'  => ['width' => 900, 'format' => 'avif'],
        '1200w' => ['width' => 1200, 'format' => 'avif'],
        '1800w' => ['width' => 1800, 'format' => 'avif']
      ],
      'webp' => [
        '300w'  => ['width' => 300, 'format' => 'webp'],
        '600w'  => ['width' => 600, 'format' => 'webp'],
        '900w'  => ['width' => 900, 'format' => 'webp'],
        '1200w' => ['width' => 1200, 'format' => 'webp'],
        '1800w' => ['width' => 1800, 'format' => 'webp']
      ],
    ]
  ],
  // // srcset - webp
  // 'thumbs' => [
  //   'format' => 'webp',
  //   'quality' => 80,
  //   'srcsets' => [
  //     'default' => [
  //       '320w' => ['width' => 320],
  //       '800w' => ['width' => 800],
  //       '1024w' => ['width' => 1024],
  //       '1440w' => ['width' => 1440],
  //       '2048w' => ['width' => 2048]
  //     ]
  //   ]
  // ],

  // routes
  'routes' => [
    [
      'pattern' => 'logout',
      'action'  => function () {

        if ($user = kirby()->user()) {
          $user->logout();
        }

        go('login');
      }
    ],

    //Redirect from blog to reviews
    [
      'pattern' => ['blog/(:any)'],
      'action'  => function ($uid) {
        go('reviews/' . $uid);
      }
    ]

  ],
  // USERKIT  
  [
    'pattern' => 'logout',
    'action'  => function () {
      $kirby   = kirby();
      if ($user = $kirby->user()) {
        $user->logout();
      }
      go('login');
    }
  ],
  [
    'pattern' => 'token/([a-f0-9]{32})',
    'action'  => function ($token) {
      $kirby   = kirby();
      $kirby->impersonate('kirby');
      if ($user = $kirby->user()) {
        $user->logout();
      }
      if ($user = $kirby->users()->findBy('token', $token)) {
        $user->update([
          'token'    => '',
          'password' => $user->changePassword($token),
        ]);
        if ($user->login($token)) {
          go('/account/password');
        } else {
          go('error');
        }
      } else {
        go('error');
      }
    }
  ],


  //Matomo Credentials
  'sylvainjule.matomo.url'        => 'https:/stats.greenant.net',
  'sylvainjule.matomo.id'         => '18',
  'sylvainjule.matomo.token'      => 'c2f3e1535240b36974cfa3f11ebad811',

  // REDIRECTS
  'routes' => [
    // redirect for spelling mistake in review
    [
      'pattern' => '/reviews/bachelor-of-fine-art-mada-by-victoria-lozides',
      'action'  => function () {
        go('/reviews/bachelor-of-fine-art-mada-by-victoria-loizides');
      }
    ],
    // logout user function
    [
      'pattern' => 'logout',
      'action'  => function () {

        if ($user = kirby()->user()) {
          $user->logout();
        }

        go('login');
      }
    ],

    //Redirect from blog to reviews
    [
      'pattern' => ['reviews/(:any)'],
      'action'  => function ($uid) {
        go('2020/' . $uid);
      }
    ]
  ],


  // home page
  'home' => '2021',


  // DEBUG OPTIONS
  'debug'  => true,

  // Emails
  #added dave
  'omz13.feeds.cacheTTL' => 60,
  'omz13.feeds.firehose' => 'articles',

  # end added dave

  // greenant
  //   'email' => [
  //     'transport' => [
  //       'type' => 'smtp',
  //       'host' => 'mail.greenant.net',
  //       'port' => 587,
  //       'security' => 'tls',
  //       'auth' => true,
  //       'username' => 'mailer@memoreview.net',
  //       'password' => 'zp8x78sUSzzt',
  //     ]
  //   ]
  // ];

  # https://forum.getkirby.com/t/send-kirby-emails-with-gmail-smtp-and-oauth2/22021
  # see above before 'retun' also for:
  //     use League\OAuth2\Client\Provider\Google;
  //      use PHPMailer\PHPMailer\OAuth;
  'email' => [
    'transport' => [
      'type' => 'smtp',
      'host' => 'smtp.gmail.com',
      'port' => 587,
      'security' => true,
      'auth' => true,
    ],
    'beforeSend' => function ($mailer) {
      $mailer->AuthType = 'XOAUTH2';
      // if the kirby3-dotenv plugin is installed, 
      // env() reads your credentials from a .env file
      $email = env('EMAIL');
      $clientId = env('GMAIL_CLIENT_ID');
      $clientSecret = env('GMAIL_CLIENT_SECRET');
      $refreshToken = env('GMAIL_REFRESH_TOKEN');

      $provider = new Google(
        [
          'clientId' => $clientId,
          'clientSecret' => $clientSecret,
        ]
      );

      $mailer->setOAuth(
        new OAuth(
          [
            'provider' => $provider,
            'clientId' => $clientId,
            'clientSecret' => $clientSecret,
            'refreshToken' => $refreshToken,
            'userName' => $email,
          ]
        )
      );

      return $mailer;
    },
  ],
];
