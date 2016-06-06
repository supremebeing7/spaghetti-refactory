---
layout: post
title: Merging and reverse merging in Ruby on Rails
date: '2016-06-06T08:00:00.000-08:00'
author: Mark J. Lehman
tags:
- ruby
- rails
---

I've known about [`merge`](http://docs.ruby-lang.org/en/2.0.0/Hash.html#method-i-merge) in Ruby for awhile.

    song = { do_you_like: "piña coladas" }
    song.merge({ getting_caught: "in the rain" })
    # => {
    do_you_like: "piña coladas",
    getting_caught: "in the rain"
    }

But I just found a cool, helpful method that Rails (or specifically, ActiveSupport) adds called [`reverse_merge`](http://apidock.com/rails/Hash/reverse_merge).

It does... exactly what it sounds like.

    song = { if_you_are_not: "into yoga" }
    { if_you_have: "half a brain" }.reverse_merge(song)
    # => {
      if_you_are_not: "into yoga",
      if_you_have: "half a brain"
    }

Kinda like [`Array#unshift`](http://ruby-doc.org/core-2.0.0/Array.html#method-i-unshift).