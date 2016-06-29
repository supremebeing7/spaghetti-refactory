---
layout: post
title: Easy CSS Transitions For Business and Pleasure
date: '2016-02-29T08:30:00.000-08:00'
author: Mark J. Lehman
tags:
- css
- transitions
- front end
---

CSS transitions are my new best friend. Check out how easy it is to add a fade transition to two different properties:

      h1.transitions-demo {
        color: black;
        background: white;
        transition: color 1s, background 3s ease-in-out;
        -moz-transition: color 1s, background 3s ease-in-out;
        -webkit-transition: color 1s, background 3s ease-in-out;

        &:hover {
            color: white;
            background: red;
        }
      }

For a demo, hover over this:

<h1 class="transitions-demo">HOVER!</h1>

Here's a short explanation of what this is doing.
* The base styling has the text color of black, and the background white.
* The hover text color is white and the hover background is red.
* All three `transition` lines are doing the same thing, just for different browsers (`moz` is for Mozilla Firefox, `webkit` is for Chrome because Chrome uses the webkit driver).
* The `transition` just defines how long and how gradual the change from the normal to the hover state should take. So, for the text color, it should transition gradually over 1 second, whereas for the background color, it should take 3 seconds.
* `ease-in-out` means the transition will start slowly and end slowly, giving it a smoother feel. You can also define other transition timing - see [W3 Schools writeup](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) for options.

_Thanks to [bavotasan](http://bavotasan.com/2011/a-simple-fade-with-css3/) for this one._
