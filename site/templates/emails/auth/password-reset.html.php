Hi <?= $user->nameOrEmail() ?>,

You recently requested a password reset code for the Kirby Panel.
The following password reset code will be valid for <?= $timeout ?> minutes:

<?= $code ?>

If you did not request a password reset code, please ignore this email or contact your administrator if you have questions.
For security, please DO NOT forward this email.