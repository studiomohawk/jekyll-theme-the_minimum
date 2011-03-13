* Theme Name: the\_minimum
* Description: A minimumlist theme for [jekyll](https://github.com/mojombo/jekyll).
* Author: Yuya Saito @ [\_layout](http://www.layouts-the.me/)
* Version: 1.5.1

## About the\_minimum

* Using HTML5 and CSS3 for clean semantic code
* Using Responsive web design which means design adapts screen size
* Main stylesheet(style.less) is written with LESS(**You need less installed**)
* Rakefile to minify css (rake juicer:css).
  
  If you need to optimize change master.css to master.min at \_includes/system\_head.html  
  If you ever change anything, **you have to type** command rake juicer:css to
  rebuild minified css.  
  I'm trying to figure out how to regex strings in html via rake so that you
  don't have to do this manually, if you know how please help me. Thanks.

  **Default is NOT linking to minified CSS, you should minifiy css to reduce
  http requests**

## This theme is free but some strings are attached

* Install less: sudo gem install less
* Edit \_config.yml - open the file and edit where you need
* Then you can start using it for free

## How to use this?

* If you don't know how to use Jekyll go [Jekyll page](https://github.com/mojombo/jekyll)
* Most of things you can do with this theme is presented at \_posts/001-post-example.markdown
* If you want to use image in your article, theme includes [jekyll-postfiles](https://github.com/indirect/jekyll-postfiles) plugin go visit the page to learn how to use it
* If you want add styles, you should edit style.less. if you need to add stylesheet then remember to put stylesheet file name in master.css
* If you need to know what is LESS then go to [http://lesscss.org/](http://lesscss.org/)
* If you have questions, you can do so at [issue page](https://github.com/studiomohawk/jekyll-theme-the_minimum/issues)

## Code I didn't write

### Jekyll related

* [Jekyll](https://github.com/mojombo/jekyll): MIT license
* [Category page generator](http://recursive-design.com/blog/2010/12/08/jekyll-plugins-for-categories-projects-and-sitemaps/): MIT License
* [less\_converter.rb](https://github.com/tatey/jekyll_plugins/blob/master/less_converter.rb): MIT License
* [jekyll-postfiles](https://github.com/indirect/jekyll-postfiles): ???(Some
  kind of open source since it's in github)
 
### HTML, CSS, JavaScript

* [Modernizr](http://www.modernizr.com/): MIT/BSD license
* [jQuery](http://jquery.com/): MIT/GPL license
* [Less Freamework 3](http://lessframework.com/): Creative Commons Attribution License
* [HTML5 Boilerplate](http://html5boilerplate.com/): [The Unlicense](http://unlicense.org) (aka: public domain)
