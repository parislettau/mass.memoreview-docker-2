<?php

use Kirby\Cms\Auth\Status;
use Kirby\Exception\PermissionException;
use Kirby\Toolkit\V;

return function ($kirby) {
  $error = null;

  // get authentication status
  $status = $kirby->auth()->status();

  // user is already logged in, send them elsewhere
  if ($status->status() === 'active') {
    go('/submission');
  }

  // form is submitted
  if (get('login') && $kirby->request()->is('POST')) {
    // check CSRF token
    if (csrf(get('csrf')) === true) {

      // if we get an email address, we send an authentication challenge
      if (get('email')) {
        $email = get('email');
        if (V::email($email)) {
          try {
            $status = $kirby->auth()->createChallenge($email, false, 'login');
          } catch (PermissionException $e) {
            $error = $e->getMessage();
          }
        } else {
          $error = 'Please provide a valid email address';
        }

        // if we get a code, we validate the code
      } elseif (get('code')) {
        $code = get('code');
        try {
          // if successful, the user will be logged in
          // `verifyChallenge()` either returns a user or throws an exception
          $user = $kirby->auth()->verifyChallenge($code);
          // if the user is logged-in, redirect them
          if ($user) {
            go('/submission');
          }
        } catch (Exception $e) {
          $error = $e->getMessage();
          // set new status object with inactive status
          $status = new Status([
            'kirby' => $kirby,
            'status' => 'inactive'
          ]);
        }
      }
    } else {
      $error = 'Invalid CSRF token';
    }
  }

  return [
    'email'  => $email ?? '',
    'error'  => $error,
    'status' => $status->status(),
  ];
};
