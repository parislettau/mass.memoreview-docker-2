<?php

$data = $pages->find('reviews')->children()->published()->flip();
$json = [];

foreach($data as $article) {

  $json[] = [
    'url'   => (string)$article->url(),
    'title' => (string)$article->title(),
    'date'  => (string)$article->date(),
    'author'  => (string)$article->author(),
    'section'  => (string)$article->section(),
    'image'  => (string)$article->images()->sortBy('sort', 'asc')->first()->url(),
    'venue'  => (string)$article->venue()
  ];

}

echo json_encode($json);

