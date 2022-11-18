  history.scrollRestoration = 'manual'

  // ========================================================================================
  // OPEN PANE FUNCTION
  // ========================================================================================
  //  function openPane(url, push) {
  //    $('.content-pane').addClass('show');
  //
  //    $.get(url, function (html) {
  //      var $html = $('.content-pane-text').append(html)
  //      var title = $html.find('title').text()
  //      if (push) history.pushState({
  //        pane: true
  //      }, title, url)
  //      document.title = title
  //      $('.content-pane-text').html($html.find('.content-pane-text').html())
  //      afterLoadPane()
  //    })
  //
  //    setTimeout(function () {
  //      $('body').addClass('content-pane-open')
  //    }, 750)
  //  }

  function openPane(url, push) {
    $('.content-pane').addClass('show');

    $.get(url, function (html) {
      var $html = $('<div />').append(html)
      var title = $html.find('title').text()
      if (push) history.pushState({
        pane: true
      }, title, url)
      document.title = title
      $('.content-pane-text').html($html.find('.content-pane-text').html())
      afterLoadPane()
    })

    setTimeout(function () {
      $('body').addClass('content-pane-open')
    }, 750)
  }

  // ========================================================================================
  // CLOSE PANE 
  // ========================================================================================

  function closePane(push) {
    $('.content-pane').removeClass('show')
    $('body').removeClass('content-pane-open')
    document.title = 'Memo Review'
    $(window).trigger('pane-closed')
    setTimeout(function () {
      $('.content-pane-text').html('')
    }, 750)
    if (push) history.pushState(null, document.title, window.home)
  }

  // ========================================================================================
  // LOAD IMAGES 
  // ========================================================================================
  function loadImages() {
    $('img, .img, .score-block__image').imagesLoaded({
        background: true
      })
      .progress(function (instance, image) {
        $(image.element || image.img).addClass('loaded');
      })
  }

  // ========================================================================================
  // DOCUMENT READY FUNCTIONS
  // ========================================================================================
  $(document).ready(function () {

    $('.video').fitVids();

    window.addEventListener('popstate', function (event) {
      if (event.state && event.state.pane) {
        openPane(document.location.href, false)
      } else {
        closePane()
      }
    })

    window.scroll({
      behavior: 'smooth'
    });

    setTimeout(function () {
      $('body').addClass('ready');
    }, 500);

    setTimeout(function () {
      $('body').addClass('ready');
    }, 250);

    // ========================================================================================
    // OPEN PANE TRIGGER
    // ========================================================================================
    $('body').on('click', 'a.content-pane-trigger', function (event) {
      event.preventDefault()
      var url = this.href

      openPane(url, true)
    })

    // ========================================================================================
    // CLOSE PANE TRIGGER
    // ========================================================================================
    $('.content-pane-close').on('click', function () {
      closePane(true)
    })


    // ========================================================================================
    // AFTER PANE LOAD TRIGGER
    // ========================================================================================
    window.afterLoadPane = function () {
      icPrevent()
    }

    icPrevent()

    $('body').on('complete.ic', function (event, el, data, status, xhr, reqId) {
      var title = $('.content-pane').html(xhr.responseText).find('title').text()
      document.title = title
    })
  })


  function icPrevent() {
    $('a[ic-get-from]').on('click', function (event) {
      event.preventDefault()
    })
  }
