---
layout: post
title: Fun with iframes and JavaScript
date: '2016-02-11T08:00:00.000-08:00'
author: Mark J. Lehman
tags:
- iframe
- javascript
---

Using an `iframe` can be pretty helpful, in certain circumstances. Sadly, it can also be a nightmarish hellscape, sometimes in the same circumstances. When an `iframe` has an external source, it severely restricts what can be done with it, Javascript-wise. This is particularly annoying when using an embedded form such as one from Hubspot or Podio, where they give a script to insert into the page and it generates an `iframe` on the fly. There are very limited ways to interact with that `iframe`, and there's pretty much no ability to interact with the contents at all.

Real world example: I have an `iframe` form from an external site, such as one I just mentioned. It's a lengthy form, and when it submits, it shows a "Thank you for submitting" message. The problem is, since it's an `iframe`, it doesn't refresh the container page on submission, so it remains scrolled to the bottom. I want the page to scroll back to the top.

Normally, this would be a simple click handler on the submit button, which would fire a

    window.scrollTo(0,0);

or, with jQuery

    $('html').scrollTop(0);

Unfortunately, click handlers don't work with an external embedded `iframe`, so that won't do. Luckily, there's a fun hacky way to make this work. An `iframe` has an `on('load')` callback it fires, so we can hook into that. In this particular instance, we know that the first `iframe` load will show the form, and the second will either show errors or show a thank you message. Either way, on the second load, we want to scroll to the top.

    $(document).ready(function() {
      var $iframe = $('iframe.iframe-class-name');
      $iframe.on('load', function() {
        $iframe.on('load', function() {
          window.scrollTo(0,0);
        });
      });
    });

Effectively, we're ignoring the first load, nesting the second load callback inside the first, and scrolling the window when the second one fires.

*Thanks to [scryptmouse](https://github.com/scryptmouse) for this cool trick - it saved me from pulling out any more hair in frustration.*