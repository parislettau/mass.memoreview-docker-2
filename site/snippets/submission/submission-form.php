<!-- <script src="https://cdn.ckeditor.com/ckeditor5/27.0.0/classic/ckeditor.js"></script> -->
<form class="registration-form" action="<?= $page->url() ?>" method="POST" enctype="multipart/form-data">
  <div class="form-element">
    <label for="author">Name<abbr title="required"> •</abbr></label>
    <input type="text" id="author" name="author" value="<?= $data['author'] ?? $kirby->user()->name() ?>" required />
  </div>

  <div class="form-element">
    <label for="email">Email <abbr title="required"> •</abbr></label>
    <input type="email" name="email" id="email" value="<?= $data['email'] ?? $kirby->user()->email() ?>" required />
  </div>

  <div class="form-element">
    <label for="file">Upload your review as a .docx file
      <span class="help">(max. file size 2MB)</span><abbr title="required"> •</abbr>
    </label>
    <input name="file[]" type="file" required multiple>
  </div>

  <!-- <div class="form-element">
    <label for="title">Exhibition title <abbr title="required"> •</abbr></label>
    <input placeholder='e.g. "Awesome quote from my review" ' type="text" id="title" name="title" value="<?= $data['title'] ?? null ?>" required />
  </div> -->

  <div class="form-element">
    <label for="school">School</label>
    <select class="form-element" id="school" name="school" value="<?= $data['school'] ?? null ?>">
      <option value="RMIT">RMIT</option>
      <option value="MADA">MADA</option>
      <option value="Victorian College of the Arts">VCA</option>
    </select>
  </div>

  <div class="form-element">
    <label for="University">Department / Discipline</label>
    <select class="form-element" id="department" name="department" value="<?= $data['department'] ?? null ?>">
      <option value="Bachelor of Fine Art">Bachelor of Fine Art (MADA) </option>
      <option value="Bachelor of Fine Art (Honours)">Bachelor of Fine Art (Honours) MADA</option>
      <option value="Drawing and Printmaking">Drawing and Printmaking (VCA)</option>
      <option value="Honours">Honours (VCA)</option>
      <option value="Painting">Painting (VCA)</option>
      <option value="Photography">Photography (VCA)</option>
      <option value="Sculpture">Sculpture (VCA)</option>
      <option value="Fashion">Fashion (RMIT)</option>
      <option value="Art">Art (RMIT)</option>
    </select>
  </div>


  <!-- <div class="form-element">
    <label for="date">Date to be published<abbr title="required"> •</abbr></label>
    <input placeholder="yyyy-mm-dd" type="date" id="date" name="date" value="<?= $data['date'] ?? null ?>">
  </div> -->

  <div class="form-element">
    <label for="opened">Exhibition open<abbr title="required"> •</abbr></label>
    <input placeholder="yyyy-mm-dd" type="date" id="opened" name="opened" value="<?= $data['opened'] ?? null ?>">
  </div>

  <div class="form-element">
    <label for="closed">Exhibition close<abbr title="required"> •</abbr></label>
    <input placeholder="yyyy-mm-dd" type="date" id="closed" name="closed" value="<?= $data['closed'] ?? null ?>">
  </div>

  <!-- <div class="form-element">
    <label for="text">Review text (copy-paste your review text here as well as uploading the doc or docx file)</label>
    <textarea name="text" class="form-element" id="editor"><?= $data['text'] ?? null ?></textarea>
  </div>  -->
  <div class="form-element">
    <label for="artists">Artists mentioned (comma separated names)<abbr title="required"> •</abbr></label>
    <input placeholder='e.g. Hana Earles, Ruth Maddison' type="text" id="artists" name="artists" value="<?= $data['artists'] ?? null ?>" required />
  </div>

  <div class="form-element">
    <label for="bio">Bio (max. 350 characters)</label>
    <textarea name="bio" class="form-element" id="" maxlength="350" placeholder='e.g. Full Name is a writer from Naarm/Melbourne.'><?= $data['bio'] ?? null ?></textarea>
  </div>
  <!-- 
  <div class="form-element">
    <label for="quote">Please include a pull quote from your review to feature on social media.</label>
    <textarea rows="4" name="quote" class="form-element" id="" placeholder='e.g. "Awesome quote from my review" '><?= $data['quote'] ?? null ?></textarea>
  </div> -->

  <div class="form-element">
    <label for="socials">Please include Instagram handles of artists to be tagged, and suggested hashtags</label>
    <textarea rows="4" name="socials" class="form-element" id="" placeholder='e.g. @gerturdecontemporary @memo_review #ContemporaryArt'><?= $data['socials'] ?? null ?></textarea>
  </div>

  <div class="honey">
    <label for="message">If you are a human, leave this field empty</label>
    <input type="website" name="website" id="website" value="<?= isset($data['website']) ? esc($data['website']) : null ?>" />
  </div>

  <div class="">
    <input type="checkbox" id="images" name="images" value="">
    <label for="images"> I have/will upload <strong>images</strong> + document including <strong>captions</strong> to this <a href="https://www.dropbox.com/request/4C88WGNs5SCUIp6kIU14" target="_blank" style="text-decoration:underline">Dropbox link</a><abbr title="required" required> •</abbr></label><br><br>
  </div>

  <div class="">
    <input type="checkbox" id="images" name="images" value="" required>
    <label for="images"> I have clearly indicated in the review text where each image should appear</a><abbr title="required"> •</abbr></label><br><br>
  </div>

  <div class="">
    <input type="checkbox" id="licensing-provisions" name="licensing-provisions" value="Licensing Provisions" required>
    <label for="images">I agree to the <a href="https://memoreview.net/license" target="_blank">Publishing License Agreement</a> </a><abbr title="required"> •</abbr></label><br><br>
  </div>

  <input class="form-button" type="submit" name="submit" value="Submit" />

</form>
<!-- 
  <script>
    ClassicEditor
      .create(document.querySelector('#editor'), {

        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            // 'imageUpload',
            'blockQuote',
            'insertTable'
            // 'mediaEmbed',
            // 'undo',
            // 'redo'
          ]
        },
        language: 'en',
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
            'imageStyle:side'
          ]
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
          ]
        },
        licenseKey: '',


      })
      .then(editor => {
        window.editor = editor;








      })
      .catch(error => {
        console.error('Oops, something went wrong!');
        console.error('Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:');
        console.warn('Build id: xhh2pt7rfmf2-nohdljl880ze');
        console.error(error);
      });
  </script> -->