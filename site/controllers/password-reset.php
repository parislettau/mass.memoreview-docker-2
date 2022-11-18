<?php

return function ($kirby) {

  // don't show the login screen to already logged in users
  if ($kirby->user()) {
    go('/submission');
  }

  $error = false;

  // handle the form submission
  if ($kirby->request()->is('POST') && get('login')) {

    // try to log the user in with the provided credentials
    try {
      // $kirby->auth()->login(get('email'), get('password'));
      $kirby->auth()->createChallenge(get('email'), false, 'login');

      // redirect to the homepage if the login was successful
      go('/submission');
    } catch (Exception $e) {
      $error = true;
    }
  }

  return [
    'error' => $error
  ];
};
