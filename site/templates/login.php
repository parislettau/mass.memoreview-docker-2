<?php snippet('submission/header') ?>


<main>



  <div class="intro">
    <h1><?= $page->title()->html() ?></h1>
  </div>

  <article>
    <div class="text">
      <?php if ($error) : ?>
        <div class="alert"><?= $error ?></div>
      <?php endif ?>

      <form class="registration-form" method="post" action="<?= $page->url() ?>">
        <div class="form-element">

          <input type="hidden" name="csrf" value="<?= csrf() ?>">
        </div>
        <?php if ($status === 'inactive') : ?>
          <div class="form-element">

            <label for="email">Email</label>
            <input id="email" name="email" required type="email" value="<?= esc($email, 'attr') ?>">
            <p><small>An authentication code will be sent to your email.</small></p>

          </div>
        <?php endif ?>

        <?php if ($status === 'pending') : ?>
          <div class="form-element">

            <label for="name">Login Code</label>
            <input id="code" name="code" placeholder="000 000" required type="text">
            <p><small>If your email address is registered, the requested code was sent via email.</small></p>
          </div>
        <?php endif ?>


        <input class="form-button" type="submit" name="login" value="Log in">


      </form>
    </div>
  </article>
</main>
<?php snippet('submission/footer') ?>