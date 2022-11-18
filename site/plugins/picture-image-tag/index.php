<?php
# Read Me
// add following to config.php:
// 'thumbs' => [
//     'driver' => 'im',
//     // 'format' => 'webp',
//     'srcsets' => [
//       'default' => [
//         '320w' => ['width' => 320, 'quality' => 80],
//         // '800w' => ['width' => 800, 'quality' => 80],
//         // '1024w' => ['width' => 1024, 'quality' => 80],
//         '1440w' => ['width' => 1440, 'quality' => 80],
//         '2048w' => ['width' => 2048, 'quality' => 80]
//       ]
//     ]
//   ],

$oldTag = Kirby\Text\KirbyTag::$types['image'];
Kirby::plugin('Paris-Lettau/picture-image-tag', [
    'tags' => [
        'image' => [
            'attr' => $oldTag['attr'],

            'html' => function ($tag) use ($oldTag) {

                $file = $tag->file($tag->value());
                $result = $oldTag['html']($tag);

                $pattern = '/<figure.*?>/i';

                // build a new image tag with the srcset
                $image = Html::img($tag->src, [
                    'loading' => "lazy",
                    'alt'    => '',

                ]);

                // replace the old image tag
                $result = preg_replace($pattern, $image, $result);

                $webp = "<source srcset='" . $file->srcset([
                    '400w'  => ['width' => 400, 'format' => 'webp'],
                    '800w'  => ['width' => 800, 'format' => 'webp'],
                    '1200w' => ['width' => 1200, 'format' => 'webp'],
                    // '2400w' => ['width' => 1200, 'format' => 'webp']
                ]) . "'" . "type='image/webp'>";

                if (is_array($tag->caption)) {
                    $oldcaption = implode(', ', $tag->caption ?? ' ');
                } else {
                    $oldcaption = $tag->caption;
                };

                $caption = "<figcaption>" . $oldcaption  . "</figcaption>";

                $picture = "<figure><picture>" . $webp . $image .  "</picture>" . $caption . "</figure>";

                return $picture;
            }
        ]
    ]
]);
