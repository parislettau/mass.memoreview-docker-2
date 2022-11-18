<?php

return function ($site) {
    return $site->find('2021')->children()->listed();
};