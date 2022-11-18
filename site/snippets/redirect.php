 <?php if($site->find('home')->redirect()->toBool() === true): ?>
 <?php if (!$kirby->user()) go('https://memoreview.net/') ?>
 <?php endif ?>
