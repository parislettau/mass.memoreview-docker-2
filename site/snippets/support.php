<div class="support-wrapper">
  <!-- <a class="support-trigger pill" style="background: white;">
    Support us
  </a> -->
  <div class="subscribe">


    <a class="support-trigger pill" style="background: white;">
      Subscribe
    </a>

  </div>

</div>
<script>
  $('.mce-EMAIL').focus(function() {
    $(this).attr('placeholder', 'type your email and hit enter...')
  }).blur(function() {
    $(this).attr('placeholder', 'Subscribe')
  })
</script>

<section class="support-pane" style="display:none">
  <div class="support-header">
    <ul style="list-style: none">
      <li style="float: left">Support us</li>
      <li style="float: right"><span class="support-close"><span class="close-text">(close)</span>
          <svg class="close-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 0 L0 22" stroke="white" />
            <path d="M0 0 L22 22" stroke="white" />
          </svg></span></li>
    </ul>
  </div>
  <div class="support-text">
    <div>
      <?php
      $support = $site->find('home')->support()->text()->kirbytext()
      ?>
      <?= $support ?>
    </div>
  </div>
  <div class="support-donate">
    <!-- <a class="support-donate-button" href="https://www.patreon.com/memoreview" target="_blank">Support Memo</a> -->
    <span class="support-donate-button" href="#">Subscribe for free</span>
  </div>
</section>


<script>
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
</script>