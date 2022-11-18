<?php snippet('submission/header') ?>

<main class="main" role="main">
	<article class="event">
		<header class="event-header intro">
			<h1 class="center"><?= $page->title() ?></h1>
		</header>
		<?php if ((empty($success) === false)) : ?>
			<div class="alert success">
				<p><?= $success ?></p>
			</div>
		<?php else : ?>
			<?php if ((empty($error) === false)) : ?>
				<div class="alert error">
					<p><?= $error ?></p>
				</div>

			<?php endif ?>
			<div class="registration">
				<form method="POST">

					<div class="field form-element">
						<label for="name">Full name <abbr title="required">•</abbr></label>

						<input type="text" id="name" name="name" value="<?= esc($data['name'] ?? '', 'attr') ?>" required>
						<?= isset($alert['name']) ? '<span class="alert error">' . esc($alert['name']) . '</span>' : '' ?>
					</div>

					<div class="field form-element">
						<label for="email">Email <abbr title="required">•</abbr></label>
						<input type="email" id="email" name="email" value="<?= esc($data['email'] ?? '', 'attr') ?>" required>
						<?= isset($alert['email']) ? '<span class="alert error">' . esc($alert['email']) . '</span>' : '' ?>
					</div>

					<div class="field form-element">
						<label for="password">Password <abbr title="required">•</abbr></label>
						<input type="password" id="password" name="password" autocomplete="on" required>
						<small class="help">Minimum 8 characters.</small>
					</div>

					<div class="field form-element">
						<label for="validate">Retype your password <abbr title="required">•</abbr></label>
						<input type="password" id="validate" name="validate" autocomplete="on" required>
					</div>
					<style>
						.honeypot {
							position: fixed;
							left: 9999px
						}
					</style>
					<div class="field honeypot" syle="">
						<label for="website">Web site</label>
						<input type="text" id="website" name="website">
					</div>


					<input class="form-button" type="submit" name="registration" value="Create Account" />

					<p><abbr title="required">•</abbr> Required fields.</p>
			</div>

			</form>

			<div class="otherlink form-element">You are a member? <a href="<?= url('login') ?>">Sign in</a></div>

		<?php endif ?>
		</div>
	</article>
</main>

<?php snippet('submission/footer') ?>