Hi <?= $user->nameOrEmail() ?>,<br>
<br>
You recently requested a login code for Memo Review.<br>
The following login code will be valid for <?= $timeout ?> minutes:<br>
<br>
<?= $code ?><br>
<br>
If you did not request a login code, please ignore this email or contact your administrator if you have questions.<br>
For security, please DO NOT forward this email.