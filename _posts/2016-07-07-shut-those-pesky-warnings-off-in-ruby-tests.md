---
layout: post
title: Shut Those Pesky Warnings Off in Ruby Tests
date: '2016-07-07T08:00:00.000-08:00'
author: Mark J. Lehman
tags:
- ruby
- rspec
- minitest
- testing
---

Here's a simple fix for a minor annoyance in your Ruby environment.

I have some tests that rely on an external gem, and that gem has some deprecation warnings that have been fixed on master but not released in a new version yet. Since my app is in production, I don't want to use an unreleased (and possibly buggy) version of a gem just to get rid of some deprecation warnings.

Even so, I get tired of seeing 50+ lines of warnings every time I run my test suite.

Niftily enough, there's an envar I can set on each spec run that will silence these warnings:

    RUBYOPT="-W0" rspec

(Tested working on my machine running Ruby 2.2.x, and according to [this StackOverflow post](http://stackoverflow.com/questions/5591509/suppress-ruby-warnings-when-running-specs/28098594#28098594), it also works on 2.1.x, 2.14.x, and 2.3.x.)

Great, it works! But... how?

In my Googling, I found little info about `RUBYOPT`. [One documentation page](http://www.tutorialspoint.com/ruby/ruby_environment_variables.htm) defined it thus:
<blockquote> Command-line options passed to Ruby interpreter. Ignored in taint mode (Where $SAFE is greater than 0).</blockquote>

Okay... Kind of helpful. So, it seems to me that whatever is stored in `RUBYOPT` gets run as a flag on the Ruby program (in my case, `rspec`).

More digging found some [official Ruby documentation about flags](http://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/options.html), but did not include `-W0`. However, [this helpful StackOverflow post](http://stackoverflow.com/a/14863810/3477163) tells the story. It appears that `-W` works the same as `-w` in that it enables verbose mode. The difference is that the capital `-W` can then be further configured for exactly how verbose we want the logs to be.

* `-W0` don't show any warnings.
* `-W1` show some warnings, but not Kernel warnings.
* `-W2` show all warnings (`-W3` and upward seem to do the same thing)

Enjoy some quieter logs! (Or louder, if that's your thing.)
