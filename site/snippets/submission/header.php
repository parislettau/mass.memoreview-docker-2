<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title() ?> | <?= $page->title() ?></title>

  <?= css(['assets/css/index.css', '@auto']) ?>

  <?= js([
    'assets/js/ckeditor.js',
    ]) ?>

</head>
<body>
<header class="header">
      <a class="logo" href="<?= $site->url() ?>">MeMO</a>

      <nav id="menu" class="menu">
      
         
      <?php if($user = $kirby->user()): ?>

      <a<?php e($pages->find('submission')->isOpen(), ' class="active"') ?>  href="<?= url('submission') ?>">Submit</a>



  
      <!-- <a<?php e($pages->find('submission')->isOpen(), ' class="active"') ?>  href="<?= url('memo-open') ?>">Memo Open</a>
      <a href="<?= url('memo-open') ?>">Submit Review</a> -->


      <a<?php e($pages->find('account')->isOpen(), ' class="active"') ?>  href="<?= url('account') ?>">Account</a>
      <a href="<?= url('logout') ?>">Logout</a>

      <?php else: ?>

      <a<?php e($pages->find('login')->isOpen(), ' class="active"') ?>  href="<?= url('login') ?>">Sign in</a>

      <a<?php e($pages->find('account/signup')->isOpen(), ' class="active"') ?>  href="<?= url('account/signup') ?>">Sign up</a>

      <!-- <a<?php e($pages->find('account/registrationbyemail')->isOpen(), ' class="active"') ?>  href="<?= url('account/registrationbyemail') ?>">Activate by email</a> -->
      <?php endif ?>
  
      </nav>
    </header>
  <div class="page">
    

