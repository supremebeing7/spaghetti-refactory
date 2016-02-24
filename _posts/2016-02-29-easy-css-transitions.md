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
        transition: visibility 1s, opacity 1s ease-in-out;
        -moz-transition: visibility 1s, opacity .25s ease-in-out;
        -webkit-transition: visibility 1s, opacity .25s ease-in-out;

        &:hover {
            color: white;
            background: black;
        }
      }

For a demo, hover over this:

<h1 class="transitions-demo">HOVER!</h1>

_Thanks to [bavotasan](http://bavotasan.com/2011/a-simple-fade-with-css3/) for this one._