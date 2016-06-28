---
layout: post
title: Staying Class-y with Instance Variables in Ruby
date: '2016-06-30T08:00:00.000-08:00'
author: Mark J. Lehman
tags:
- ruby
---

I was recently writing a [time logging gem](https://github.com/supremebeing7/time_log_robot) and was trying to figure out how to have data read/write accessible in a class without having to explicitly pass it through method arguments or save anything to a database.

I knew about class variables (`@@some_variable`), but for some reason, I always felt a little dirty writing those. Probably because their evils are [written](https://www.sitepoint.com/class-variables-a-ruby-gotcha/) [about](http://4thmouse.com/index.php/2011/03/20/why-class-variables-in-ruby-are-a-bad-idea/) [a lot](http://archive.oreilly.com/pub/a/ruby/excerpts/ruby-best-practices/worst-practices.html). Although, the main evil of class variables seems to be that they can troll you when using inheritance, and since I wasn't using that at all, I should not need to feel dirty.

Anyway, during my Googling for a different solution, I came across [John Nunemaker's excellent write-up](http://www.railstips.org/blog/archives/2006/11/18/class-and-instance-variables-in-ruby/) of Class Level Instance Variables, and that approach has worked like a charm so far.

We all know how to define instance variables in a class:

    class Widget
      attr_accessor :thingy

      def initialize(thingy)
        @thingy = thingy
      end
    end

    @widget = Widget.new('cool')
    @widget.thingy # => 'cool'

Turns out, class level instance variables are just as simple. We just have to define them as accessible attrs within the singleton class:

    class Widget
      class << self
        attr_accessor :thingy

        def set_thingy(thingy)
          @thingy = thingy
        end
      end
    end

    Widget.set_thingy('sweeter!')
    Widget.thingy # => 'sweeter!'
    Widget.thingy = 'Sweetest!!!'
    Widget.thingy # => 'Sweetest!!!'

And now I can mutate, add to, or do whatever I please with `thingy` in any other methods in the class.

This is particularly useful for my gem. It attempts to connect to the JIRA API to log work time, but each attempt I want to add to either a `successes` or an `errors` array, then pass both of those arrays into a separate `Reporter` class to print them to the console.

[Here is my class in action with a few class level instance vars.](https://github.com/supremebeing7/time_log_robot/blob/96aca233e7725033eb53de4f964bd11cf6fae2c7/lib/time_log_robot/jira/work_logger.rb)