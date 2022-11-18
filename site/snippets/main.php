<main class="home">
  <div class="home-articles">
    <div class="filter-container">
      <a class="filter-trigger pill">
        Filter
      </a>
    </div>
    <!--  CONTENT-->

    <div class="home_articles-list" id="articles">

      <?php
      // if ($page->depth() > 1) {
      //   $collection = $page->parent()->children()->listed()->sortBy(function ($page) {
      //     return $page->num();
      //   }, 'desc');
      // } else {
      //   $collection = $page->children()->listed()->sortBy(function ($page) {
      //     return $page->num();
      //   }, 'desc');
      // }
      if ($page->depth() > 1) {
        $collection = $page->parent()->children()->listed()->shuffle();
      } else {
        $collection = $page->children()->listed()->shuffle();
      }
      ?>

      <?php foreach ($collection as $review) : ?>

        <?php
        $image = $review->thumbnail()->toFile();
        ?>

        <!--      ARTICLE ITEMS WITH FILTER TAGS-->
        <div class="article element-item h2" data-tags="

      <?php foreach ($review->artists()->split(',') as $tag) : ?>
      <?= str::slug($tag) ?>
      <?php endforeach ?>

      <?php foreach ($review->university()->split(',') as $tag) : ?>
      <?= str::slug($tag) ?>
      <?php endforeach ?>

      <?php foreach ($review->school()->split(',') as $tag) : ?>
      <?= str::slug($tag) ?>
      <?php endforeach ?>
      
      <?php foreach ($review->author()->split(',') as $tag) : ?>
      <?= str::slug($tag) ?>
      <?php endforeach ?>
      
      <?php foreach ($review->department()->split(',') as $tag) : ?>
      <?= str::slug($tag) ?>
      <?php endforeach ?>
      
      <?php foreach ($review->year_level()->split(',') as $tag) : ?>
      <?= str::slug($tag) ?>
      <?php endforeach ?>

      ">


          <a class="content-pane-trigger flex-block" href="<?= $review->url() ?>" data-issue="<?= $review->num() ?>">
            <!-- <div class="flex-block-image" style="background-image:url('<?= $image->url() ?>')"> -->
            <div class="flex-block-image">
              <?php $cropped = $image->crop(500, 350) ?>
              <img src="<?= $image->placeholderUri(5 / 4) ?>" data-src="<?= $cropped->url() ?>" data-lazyload alt="<?= $image->alt() ?>" />
            </div>
            <div class="flex-block-text">
              <?php if ($review->department()->isNotEmpty()) : ?><?= $review->department() ?>,
            <?php endif ?> <?php if ($review->year_level()->isNotEmpty()) : ?><?= $review->year_level() ?>,
          <?php endif ?> <?= $review->school() ?> by <?= $review->author() ?>
            </div>
          </a>
        </div>
      <?php endforeach ?>
    </div>

  </div>
</main>