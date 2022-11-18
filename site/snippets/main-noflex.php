 <section class="ticker">
   <h3>The Mass MeMO Graduate Show presents writings by blah blah on blah blah universities in Melbourne. </h3>
 </section>
 <main>

   <div class="__wrap_left">
     <h2 class="logo">MeMO</h2>
   </div>
   <div class="__wrap_right">
     <ul>
       <?php
          $collection = $site->find('reviews')->children();
        ?>

       <?php foreach ($collection as $review): ?>
       <li>
         <a class="content-pane-trigger block" href="<?= $review->url() ?>">
           <h2>
             <span class="block_title">
               <img class="lazy" data-src="<?= $review->images()->sortBy('sort', 'asc')->first()->url(  ) ?>" src="<?= $review->images()->sortBy('sort', 'asc')->first()->url(  ) ?>" data-was-processed="true">
               <?= $review->section() ?>, <?= $review->venue() ?> by <?= $review->author() ?>
             </span>
           </h2>
         </a>
       </li>
       <?php endforeach ?>
     </ul>
   </div>
 </main>
