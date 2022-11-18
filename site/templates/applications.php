<?php if (!$kirby->user()) go('/login') ?>
<?php snippet('submission/header') ?>
<main>
  <article class="event">
    <header class="event-header intro">
      <h1><?= $page->title() ?></h1>
    </header>
    <div class="text">
      <?= $page->text()->kt() ?>
    </div>
    <div class="registration">
      <?php
      // if the form input does not validate, show a list of alerts
      
      if($alerts): ?>
      <div class="alert">
        <ul>
          <?php foreach($alerts as $message): ?>
          <li><?= kirbytext($message) ?></li>
          <?php endforeach ?>
        </ul>
      </div>
      <?php endif ?>
      <?php snippet('application/application-form', compact('data')); ?> 
    </div>
  </article>
</main>

<?php snippet('submission/footer') ?>