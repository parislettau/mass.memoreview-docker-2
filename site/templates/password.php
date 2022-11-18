<?php if (!$kirby->user()) go('/login') ?>
<?php snippet('submission/header') ?>

<main class="main" role="main">
<article class="event">

    <header class="event-header intro">
    <?php if(isset($success)): ?>
  <h1 class="center">🎉 Successfully updated 🎉</h1>
  <div class="alert success">
    <p><?= $success ?></p>
  </div>
  <?php else: ?>
  <h1 class="center"><?= $page->title() ?></h1>
  </header>
  <?php if(isset($error)): ?>
  <div class="alert error">
  	<p><?= $error ?></p>
  </div>
  <?php endif ?>
  <div class="registration">
	<form method="POST">

		<div class="form-element">
			<label for="password">New password <abbr title="required">•</abbr></label>
			<input type="password" id="password" name="password" required>
		</div>

    <div class="form-element">
    	<label for="validate">Retype your password <abbr title="required">•</abbr></label>
    	<input type="password" id="validate" name="validate" required>
    </div>

    <div class="submit">
      <button class="form-button" type="submit" name="update" value="update">Change password</button>
      <p><abbr title="required">•</abbr> Required fields.</p>
    </div>

  </form>
  </div>
  <div class="otherlink"><a href="<?= url('account') ?>">Back to account</a></div>

	<?php endif ?>
  </article>
</main>

<?php snippet('submission/footer') ?>