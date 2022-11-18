  <?php
  if ($page->depth() > 1) {
    $pluck = $page->parent()->index();
  } else {
    $pluck = $page->index();
  }
  ?>

  <section class="filter-pane" style="display:none;">
    <span class="filter-close">
      <span class="close-text">(close)</span>
      <svg class="close-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 0 L0 22" stroke="white" />
        <path d="M0 0 L22 22" stroke="white" />
      </svg>
    </span>
    <div class="filter-pane-inner">
      <div class="tag-filter" style="position:sticky;top:0;">
        <a class="tag-all active" href="#" style="display:flex">
          <svg class="checked" width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.5" cy="8.5" r="8" fill="white" stroke="white" />
          </svg>
          <svg class="unchecked" width="19" height="19" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.5" cy="8.5" r="8" stroke="white" />
          </svg>
          <span class="check-circle" data-filter="*">All</span>
        </a>
      </div>


      <!--  UNIVERSITY-->
      <div class="tag-filter">
        <?php $tags = $pluck->pluck('school', ',', true) ?>
        <?php sort($tags); ?>
        <?php foreach ($tags as $tag) : ?>
          <a class="tag" href="#" style="">
            <svg class="checked" width="19" height="19" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 8.5C16.5 12.9183 12.9183 16.5 8.5 16.5C4.08172 16.5 0.5 12.9183 0.5 8.5C0.5 4.08172 4.08172 0.5 8.5 0.5C12.9183 0.5 16.5 4.08172 16.5 8.5Z" stroke="white" />
              <path d="M5.5 8L8.5 11L18 1.5" stroke="white" />
            </svg>
            <svg class="unchecked" width="19" height="19" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.5" cy="8.5" r="8" stroke="white" />
            </svg>
            <span class="check-circle" data-filter="<?= str::slug($tag) ?>"><?= $tag ?></span>
          </a>
        <?php endforeach ?>
      </div>

      <!--  DEPARTMENT-->
      <div class="tag-filter">
        <?php $tags = $pluck->pluck('department', ',', true) ?>
        <?php sort($tags); ?>
        <?php foreach ($tags as $tag) : ?>
          <a class="tag" href="#" style="">
            <svg class="checked" width="19" height="19" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 8.5C16.5 12.9183 12.9183 16.5 8.5 16.5C4.08172 16.5 0.5 12.9183 0.5 8.5C0.5 4.08172 4.08172 0.5 8.5 0.5C12.9183 0.5 16.5 4.08172 16.5 8.5Z" stroke="white" />
              <path d="M5.5 8L8.5 11L18 1.5" stroke="white" />
            </svg>
            <svg class="unchecked" width="19" height="19" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.5" cy="8.5" r="8" stroke="white" />
            </svg>
            <span class="check-circle" data-filter="<?= str::slug($tag) ?>"><?= $tag ?></span>
          </a>
        <?php endforeach ?>
      </div>

      <!--     Writers-->
      <div style="margin-top:var(--small);">
        <div class="tag-filter artists-trigger" style="display:flex;flex-direction:row;border-bottom:1px solid white;justify-content:space-between; margin-bottom: 6px;">
          <div class="">Writers</div>
          <div class="artists-trigger-icon"></div>
        </div>

        <div class="filters filters-artists" style="list-style:none;display:none">
          <!--  ARTISTS-->
          <div class="tag-filter">
            <?php $tags = $pluck->pluck('author', ',', true) ?>
            <?php sort($tags); ?>
            <?php foreach ($tags as $tag) : ?>
              <a class="tag" href="#" style=""><span class="underline" data-filter="<?= str::slug($tag) ?>"><?= $tag ?></span></a>
            <?php endforeach ?>
          </div>

        </div>
      </div>
      <!--     ARTISTS-->
      <div style="margin-top:var(--small);">
        <div class="tag-filter artists-trigger" style="display:flex;flex-direction:row;border-bottom:1px solid white;justify-content:space-between;margin-bottom: 6px;">
          <div class="">Artists</div>
          <div class="artists-trigger-icon"></div>
        </div>

        <div class="filters filters-artists" style="list-style:none;display:none;">
          <!--  ARTISTS-->
          <div class="tag-filter">
            <?php $tags = $pluck->pluck('artists', ',', true) ?>
            <?php sort($tags); ?>
            <?php foreach ($tags as $tag) : ?>
              <a class="tag" href="#" style="display:block"><span class="underline" data-filter="<?= str::slug($tag) ?>"><?= $tag ?></span></a>
            <?php endforeach ?>
          </div>

        </div>
      </div>
    </div>

    <!--  ALL-->


    <script>
      $(document).ready(function() {
        $(".artists-trigger").click(function() {
          $(this).parent().find(".filters-artists").slideToggle("fast");
          $(this).find(".artists-trigger-icon").toggleClass("rotate").slide
        });
      });
    </script>



    <script>
      $(document).ready(function() {



        //FUNCTION TO SHOW ALL TAGS AND REMOVE ALL FILTERS
        $('.tag-all').on('click', function(event) {
          event.preventDefault();

          // Check this
          $(this).addClass('active');

          //Uncheck not this
          $('body').find('a').not(this).removeClass('active');

          // Then show all articles
          $('[data-tags]').show();
        })



        $('.tag').on('click', function(event) {
          event.preventDefault();

          // Check this
          $(this).toggleClass('active');
          $('.tag-all').removeClass('active')

          //Uncheck not this
          //          $(this).parent().find('a').not(this).removeClass('active');

          $('body').find('a').not(this).removeClass('active');

          // Then filter
          dofilter();
        })

        function dofilter() {
          var active = $('a.active').find('span').map(function() {
            return $(this).attr('data-filter')
          }).toArray()

          if (active.length) {

            $('[data-tags]').each(function() {
              var tags = $(this).attr('data-tags').split(' ').filter(function(t) {
                return t
              })
              console.log(matches)
              var matches = tags.filter(function(t) {
                return active.includes(t)
              })
              if (matches.length === active.length) {
                $(this).show()
              } else {
                $(this).hide()
              }
            })
          } else {
            $('[data-tags]').show()
          }
        }
      });
    </script>
  </section>