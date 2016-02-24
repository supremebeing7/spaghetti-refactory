---
layout: post
title: Parents, Children and other Familial Functions in jQuery
date: '2016-02-25T08:30:00.000-08:00'
author: Mark J. Lehman
tags:
- jquery
- javascript
- front end
---

A couple cool tricks I found when trying to find and select elements using jQuery. (By the way, I use the term "trick" very loosely, since these come directly from the [jQuery docs](https://api.jquery.com/child-selector/)):

Selecting an element that is nested directly under another element, I used to find the parent element, then find the element within, like so:

    $('.parent').find('.child');

Turns out there's a simpler way:
    
    $('.parent > .child');
    
And if you want to get really funky, you can go even more levels down:

    $('.parent > .child > .grandchild');

You can also select multiple child elements by putting them comma separated:

    $('.parent > .child > .grandchild');
    
Or, to combine the two tricks into one:

    $('.parent > .child, .niece, .nephew');

The third "trick" I learned (again, "trick" because this one is also direct [from the docs](https://api.jquery.com/siblings/)), is selecting siblings. Which, incidentally, is done by using a very obscurely-named function called `siblings()`:

    <!-- HTML -->
    <div class="danny-tanner">
        <div class="dj">...</div>
        <h3 class="steph">...</div>
        <p class="michelle">...</div>
    </div>
    
    // JS
    $('.dj').siblings();
    // [<h3 class="steph">...</div>, <p class="michelle">...</div>]
    
In case my contrived example doesn't make sense (in which case, you obviously are not a "Full House" fan), calling `siblings()` on an element will retrieve all other elements with the same parent. So, for the above example, when getting `siblings()` of the `div` with class `dj`, it finds the parent element (`'.danny-tanner'`) then retrieves all children.