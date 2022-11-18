<form class="application-form" method="post" action="<?= $page->url() ?>" enctype="multipart/form-data">
    <div class="honey">
        <label for="website">Website <abbr title="required">*</abbr></label>
        <input type="website" id="website" name="website">
    </div>
    <div class="form-element">
        <label for="name">
            Name <abbr title="required">*</abbr>
        </label>
        <input type="text" id="name" name="name" value="<?= $data['name'] ?? null ?>" required>
        <?= isset($alert['name']) ? '<span class="alert error">' . html($alert['name']) . '</span>' : '' ?>
    </div>
    <div class="form-element">
        <label for="email">
            Email <abbr title="required">*</abbr>
        </label>
        <input type="email" id="email" name="email" value="<?= $data['email'] ?? null ?>" required>
    </div>
    <div class="form-element">
        <label for="reference">
            Job reference number <abbr title="required">*</abbr>
        </label>
        <input type="text" id="reference" name="reference" value="<?= $data['reference'] ?? get('reference') ?? null ?>" required>
    </div>
    <div class="form-element">
        <label for="message">
            Message <abbr title="required">*</abbr>
        </label>
        <textarea id="message" name="message" required><?= $data['message']?? null ?></textarea>
    </div>
    <div class="form-element">
      <label for="file">Upload your documents
        <span class="help">Max. 3 PDF files (max. file size 2MB each)</span>
      </label>
      <input name="file[]" type="file" required multiple>
    </div>
    <input type="submit" name="submit" value="Submit">
</form>