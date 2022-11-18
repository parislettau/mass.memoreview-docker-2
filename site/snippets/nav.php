<nav>
    <ul class="nav">
        <li class="nav_logo h2">
            <a href="https://memoreview.net/" style="text-decoration:none;color:inherit"><span class="no-mobile">MASS </span>MEMO</a>
        </li>

        <?php foreach ($site->children()->listed()->flip() as $year) : ?>
            <li class="nav_page h2">
                <a <?php e($year->isOpen(), 'aria-current ') ?> href="<?= $year->url() ?>"><?= $year->title() ?></a>
            </li>
        <?php endforeach ?>

        <li class="nav_menu">
            <h2 class="menu-pane-trigger">?</h2>
        </li>
    </ul>
</nav>