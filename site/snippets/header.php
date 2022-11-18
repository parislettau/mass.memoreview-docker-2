<!DOCTYPE html>
<html lang="en" class="">

<head>
   <!--DESCRIPTION-->
   <title><?= $site->title() ?> | <?= $page->title() ?></title>
   <meta charset="UTF-8">
   <meta name="Description" content="MASS MeMO presents coverage of the annual university graduate art exhibitions at the Victorian College of the Arts, Monash University and RMIT in Melbourne.">
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"><!-- Ensures optimal rendering on mobile devices. -->

   <script>
      window.home = '<?= $site->url() ?>'
   </script>

   <?php if ($page->template() == 'review') :  ?>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="<?= $page->title() ?>" />
      <meta property="og:url" content="<?= $page->url() ?>" />
      <meta property="og:image" content="<?= $page->thumbnail()->toFile()->url() ?>" />
      <meta property="og:description" content="<?= $page->description() ?>">
   <?php endif ?>

   <!-- Matomo -->
   <script type="text/javascript">
      var _paq = window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
         var u = "//stats.greenant.net/";
         _paq.push(['setTrackerUrl', u + 'piwik.php']);
         _paq.push(['setSiteId', '18']);
         var d = document,
            g = d.createElement('script'),
            s = d.getElementsByTagName('script')[0];
         g.type = 'text/javascript';
         g.async = true;
         g.src = u + 'piwik.js';
         s.parentNode.insertBefore(g, s);
      })();
   </script>
   <!-- End Matomo Code -->


   <!--   ANALYTICS-->
   <script>
      window.ga = window.ga || function() {
         (ga.q = ga.q || []).push(arguments)
      };
      ga.l = +new Date;
      ga('create', 'UA-59400013-2', 'auto');

      // Replace the following lines with the plugins you want to use.
      ga('require', 'cleanUrlTracker');
      ga('require', 'eventTracker');
      ga('require', 'impressionTracker');
      ga('require', 'maxScrollTracker');
      ga('require', 'outboundFormTracker');
      ga('require', 'mediaQueryTracker');
      ga('require', 'outboundLinkTracker');
      ga('require', 'pageVisibilityTracker');
      ga('require', 'socialWidgetTracker');
      ga('require', 'urlChangeTracker');
      ga('send', 'pageview');
   </script>
   <script async src="https://www.google-analytics.com/analytics.js"></script>
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">



   <!--   CSS-->
   <?= css([
      'assets/css/memo.css',
   ]) ?>

   <!--   JAVASCRIPT-->
   <!-- <script src="jquery-3.6.0.min.js"></script> -->
   <?= js([
      'assets/js/jquery-3.4.1.min.js',
      'assets/js/memo.js',
      'assets/js/fitvids.min.js',
      'assets/js/autosize.min.js',
      // 'assets/js/jquery-ui.min.js',
      'assets/js/autotrack.js',
   ]) ?>
   <!-- <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script> -->
   <script src="https://unpkg.com/loadeer" defer init></script>
</head>


<body class="<?php if ($page->template() == 'review') : ?>content-pane-open<?php endif ?>">