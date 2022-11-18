 <!-- <?php if ($site->find('home')->toggle()->toBool() === true) : ?>
   <div class="marquee">
     <div class="marquee__inner headline" aria-hidden="true" style="">
       <?php
        $marquee = $site->find('home')->marquee()->text()
        ?>
       <div class="headline"><span><?= $marquee ?></span></div>
       <div class="headline"><span><?= $marquee ?></span></div>
       <div class="headline"><span><?= $marquee ?></span></div>
       <div class="headline"><span><?= $marquee ?></span></div>
     </div>
   </div>
 <?php else : ?>
   <div style="height: var(--large);"></div>
 <?php endif ?> -->




 <?php if ($page->depth() > 1) : ?>
   <!-- first compute marquee string length -->
   <?php
    $reviews = $page->parent()->children()->shuffle();
    $marquee = "";

    foreach ($reviews as $review) {
      $pos = strpos($review->text(), '.');
      $first = substr($review->text(), 0, $pos);
      $author = $review->author();
      $marquee .= $first . " — " . $author . ". ";
    }

    $length = strlen($marquee) / 7.5;
    ?>
   <div class="marquee" style="--marquee-speed: <?= $length ?>s">
     <div class="marquee__inner" aria-hidden="true" style="">

       <?php foreach ($page->parent()->children()->shuffle() as $review) : ?>
         <?php
          $text = html_entity_decode(strip_tags($review->text()->KirbyText()));
          $pos = strpos($text, '.');
          $str = substr($text, 0, $pos);
          $first = str_replace("*", "", $str);
          ?>

         <div class="">
           <a style="text-decoration:none; color:var(--home)" class=" content-pane-trigger" href="<?= $review->url() ?>" data-issue="<?= $review->num() ?>">
             <span class="headline"><?= $first ?>.” — <?= $review->author() ?>. &nbsp;</span>
           </a>
         </div>

       <?php endforeach ?>

     </div>
   </div>

 <?php else : ?>

   <!-- first compute marquee string length -->
   <?php
    $reviews = $page->children()->shuffle();
    $marquee = "";

    foreach ($reviews as $review) {
      $pos = strpos($review->text(), '.');
      $first = substr($review->text(), 0, $pos);
      $author = $review->author();
      $marquee .= $first . " — " . $author . ". ";
    }

    $length = strlen($marquee) / 7.5;
    ?>
   <div class="marquee" style="--marquee-speed: <?= $length ?>s">
     <div class="marquee__inner" aria-hidden="true" style="">

       <?php foreach ($page->children()->shuffle() as $review) : ?>
         <?php
          $text = html_entity_decode(strip_tags($review->text()->KirbyText()));
          $pos = strpos($text, '.');
          $str = substr($text, 0, $pos);
          $first = str_replace("*", "", $str);
          ?>

         <div class="">
           <a style="text-decoration:none; color:var(--home)" class=" content-pane-trigger" href="<?= $review->url() ?>" data-issue="<?= $review->num() ?>">
             <span class="headline"><?= $first ?>.” — <?= $review->author() ?>. &nbsp;</span>
           </a>
         </div>



       <?php endforeach ?>

     <?php endif ?>
     </div>
   </div>