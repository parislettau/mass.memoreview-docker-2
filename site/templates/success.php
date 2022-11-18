<?php snippet('submission/header') ?>

<main>
  <article class="event">
      <header class="event-header intro">
        <h1><?= $page->title() ?></h1>
      </header>
      <div class="text" style="text-align:center">
        <?= $page->text()->kt() ?>
      </div>
</article>
</main>

<?php snippet('submission/footer') ?>
