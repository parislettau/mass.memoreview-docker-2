<script src="https://unpkg.com/loadeer" defer init></script>
<section class="content-pane <?php if ($page->template() == 'review') : ?>show<?php endif ?>" style="<?php if ($page->template() == 'review') : ?><?php else : ?><?php endif ?>">
   <span class="content-pane-close">
      <span class="close-text">(close)</span>
      <svg class="close-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M22 0 L0 22" stroke="var(--home)" />
         <path d="M0 0 L22 22" stroke="var(--home)" />
      </svg>
   </span>
   <h2 id="issue-number"><?= $page->num() ?></h2>
   <style>
   </style>

   <div class="content-pane-text" id="content-pane-text">
      <?php if ($page->template() == 'review') : ?>

         <div class="content-pane-text-inner">
            <article>
               <div class="text-block" data-content-type="<?= $page->template() ?>" data-title="<?= $page->title() ?>" data-author="<?= $page->author() ?>">
                  <div class="text-block-title">
                     <h2><?php if ($page->department()->isNotEmpty()) : ?><?= $page->department() ?>,
                     <?php endif ?> <?php if ($page->school()->isNotEmpty()) : ?><?= $page->school() ?>
                  <?php endif ?></h2>
                     <h2>By <?= $page->author() ?></h2>
                  </div>
                  <div class="text-block-text">
                     <div class="text-block-meta">
                        <?= $page->date()->toDate('d F Y') ?>
                        <ul style="margin-top:var(--body)">
                           <?php foreach ($page->artists() as $tag) : ?>
                              <li style="list-style:none;"><?= $tag ?></li>
                           <?php endforeach ?>
                        </ul>
                     </div>
                     <?= $page->text()->kirbytext() ?>
                     <div class="bio">
                        <?= $page->bio()->kirbytext() ?>
                     </div>
                  </div>

               </div>
            </article>
         </div>
      <?php endif ?>
   </div>
   <div class="subscribe">


      <a class="support-trigger pill" style="background: white;">
         Subscribe
      </a>

   </div>
   </div>
</section>