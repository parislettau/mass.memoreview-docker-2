<section class="menu-pane" style="display:none;">
  <span class="menu-pane-close">
    <span class="close-text">(close)</span>
    <svg class="close-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 0 L0 22" stroke="white" />
      <path d="M0 0 L22 22" stroke="white" />
    </svg>
  </span>
  <div class="menu-pane-inner">

    <div class="menu-pane-top">
      <div class="menu-pane-information">
        <div class="text">
          <p>Information</p><br>
          <?php
          $information = $site->find('home')->information()->text()->kirbytext()
          ?>
          <?= $information ?>


        </div>
        <div class="links">
          <div class="socials">
            <a class="pill social transparent" href="https://www.facebook.com/memoreview" target="_blank">FB</a>
            <a class="pill social transparent" href="https://www.instagram.com/memo_review/" target="_blank">IG</a>
            <a class="pill social transparent" href="https://twitter.com/memoreview" target="_blank">TW</a>
          </div>
          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup" class="pill transparent" style="width:100%;">
            <form style="width:100%" action="https://memoreview.us14.list-manage.com/subscribe/post?u=1acdc99d7e618a81c191a1c1c&amp;id=47006e625d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">

                <style>
                  ::-webkit-input-placeholder {
                    opacity: 1;
                  }

                  :-ms-input-placeholder {
                    opacity: 1;
                  }

                  ::placeholder {
                    opacity: 1;
                  }

                  :-ms-input-placeholder {
                    opacity: 1;
                  }

                  ::-ms-input-placeholder {
                    opacity: 1;
                  }
                </style>
                <div class="mc-field-group">
                  <input type="email" value="" name="EMAIL" class="required email mce-EMAIL" id="mce-EMAIL" placeholder="Subscribe" style="all:unset;width:100%" onclick="help()">
                </div>

              </div>
            </form>
          </div>
          <!--End mc_embed_signup-->

        </div>

      </div>
      <div class="menu-pane-contributors">
        <div class="contributors-inners">
          <p>Contributors</p>
          <br>
          <?php
          $contributors = $site->find('home')->contributors()->text()->kirbytext()
          ?>
          <?= $contributors ?>
        </div>
      </div>
    </div>
    <div class="menu-pane-links">
      <div class="socials">
        <a class="pill social" href="https://www.facebook.com/memoreview" target="_blank">FB</a>
        <a class="pill social" href="https://www.instagram.com/memo_review/" target="_blank">IG</a>
        <a class="pill social" href="https://twitter.com/memoreview" target="_blank">TW</a>
      </div>

      <!-- Begin Mailchimp Signup Form -->
      <div id="mc_embed_signup" class="pill" style="width:100%">
        <form style="width:100%" action="https://memoreview.us14.list-manage.com/subscribe/post?u=1acdc99d7e618a81c191a1c1c&amp;id=47006e625d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <input type="email" value="" name="EMAIL" class="required email mce-EMAIL" id="mce-EMAIL" placeholder="Subscribe" style="all:unset;width:100%" onclick="help()">
            </div>

          </div>
        </form>
      </div>
      <!--End mc_embed_signup-->

    </div>

    <div class="menu-pane-bottom">
      <div class="menu-pane-acknowledgement">
        The editors acknowledge the Traditional Custodians of the unceded land and waters on which we work. We offer our respects to Elders and Ancestors of the Kulin Nations, and Aboriginal and Torres Strait Islander First Nations Elders, past and present.
      </div>
    </div>


  </div>
</section>