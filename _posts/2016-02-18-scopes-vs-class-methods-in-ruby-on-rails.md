---
layout: post
title: Scopes vs class methods in Ruby on Rails
date: '2016-02-18T19:19:00.000-08:00'
author: Mark J. Lehman
tags:
- ruby
- ruby on rails
- rails
- activerecord
---

***When I first started writing this, the rails guides didn't make this distinction. I'm excited to say I made [my first contribution to Rails by adding this to the docs](https://github.com/rails/rails/pull/23606). Bangarang!***

Before I learned about [`scopes` in ActiveRecord](http://guides.rubyonrails.org/active_record_querying.html#scopes), I regularly used class methods for ActiveRecord querying. When I learned `scopes` and how to use them, I thought, "Well, that's nice syntactic sugar." But turns out there's more to it than that.

Class methods and scopes accomplish basically the same purpose, except in one particular case: conditionals.

Say that you have the following class methods on a `User` class:


    def self.created_before(time)
      where("created_at < ?", time) if time.present?
    end

    def self.active
      where(active: true)
    end

If you wanted to get active users created before 2 days ago, you could chain them together into something like this (in Rails):

    User.created_before(2.days.ago).active

No problem, right? But what if you didn't pass in a time?

    User.created_before('').active

Now, `created_before` returns `nil` because `time` isn't present, and when it gets to the next method in the chain, it gives you a `NoMethodError` on `NilClass`. This is where `scopes` are way cooler - they always return an `ActiveRecord::Relation` object, so they are always chainable. So, the same queries in scope form...

    scope :created_before, ->(time) { where("created_at < ?", time) if time.present? }
    scope :active, -> { where(active: true) }

...throws no error on the same method chain...

    User.created_before('').active

It's a small difference, but an important one.

*Kudos to [plataformatec](http://blog.plataformatec.com.br/2013/02/active-record-scopes-vs-class-methods/) for a great writeup on the subject.*

N.B. Also, a colleague of mine asked if class methods can be called on a relation? For example, `user.posts.class_method`. Answer: Yes, indeed! Just like `scopes`, class methods can be called on a relation. Another tick mark in the "things they have in common" column.

