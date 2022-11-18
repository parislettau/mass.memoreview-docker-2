<?php
$oldTag = Kirby\Text\KirbyTag::$types['image'];
Kirby::plugin('your/plugin', [
    'tags' => [
        'image' => [
            'attr' => array_merge(
                $oldTag['attr'],
                [
                    'srcset'
                ]),

            'html' => function($tag) use ($oldTag)  {

                
                
                // gets srcset array from config
                $presets = option('thumbs.srcsets.default');

                $file = $tag->file($tag->value());
                $srcset = $tag->srcset ? explode(',', "400, 800, 1200"): $presets ;
                // $srcset = explode(',', "320, 600, 900, 1200");  
                $result = $oldTag['html']($tag);

                if (! $file === true || is_null($srcset) === true) {
                    return $result;
                }

                $pattern = '/<img.*?>/i';

                // build a new image tag with the srcset
                $image = Html::img($tag->src, [
                    'width'  => $tag->width,
                    'height' => $tag->height,
                    'class'  => $tag->imgclass,
                    'title'  => $tag->title,
                    // 'loading'=>"lazy",
                    'alt'    => $tag->alt ?? ' ',
                    'srcset' => $file->srcset($srcset),
                ]);

                // replace the old image tag
                $result = preg_replace($pattern, $image , $result);

                return $result;
            }
        ]
    ]
]);

