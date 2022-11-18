<?php

return function ($kirby) {
	$success = null;
	$failed = null;
	$data = array();

	if (!$kirby->user()) go('login');

	$error = null;

	if ($kirby->request()->is('POST') and get('update')) {

		$data = [
			'name'  => get('name'),
			'email' => get('email'),
			'bio' => get('bio'),
		];

		$rules = [
			'name'  => array('required'),
			'email' => array('required', 'email'),
			'bio' => array('required'),
		];

		$messages = [
			'name'  => 'Please, enter a valid name.',
			'email' => 'Please, enter a valid email address.',
			'bio' => 'Something went wrong with your bio. Please try again. If the problem persists, please contact editor@memoreview.net.',
		];

		if ($invalid = invalid($data, $rules, $messages)) {
			$error = $invalid;
		} else {

			try {

				$kirby->user()->update([
					'name'  => $kirby->user()->changeName($data['name']),
					'email' => $kirby->user()->changeEmail($data['email']),
					'bio' => $kirby->user()->update([
						'bio' => 'bio',
					]),
				]);

				$success = 'Your information has been successfully updated.';
				// $data = array();

			} catch (Exception $e) {

				$failed = $e->getMessage();
			}
		}
	}

	return compact('error', 'data', 'success', 'failed');
};
