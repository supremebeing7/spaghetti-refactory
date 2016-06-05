---
layout: post
title: A Brief History of Bashing Yourself
date: '2016-06-02T08:30:00.000-08:00'
author: Mark J. Lehman
tags:
- bash
- command line
---

The bash shell comes with built in history saving that is really great... except for when it's not. Luckily, the only time it's not great is when I didn't know how it worked!

Here's what I learned that helped:
Each shell window has a separate history that is stored in memory and only accessible within that shell window. When the shell session exits (window is closed), then that session's history is copied to the global `~/.bash_history` file.

The part that trolled me is when I would run commands in one window, open a new tab and try to push the up arrow key to find the command I had just run, except I would ***never find it***.

(Thanks [StackExchange](http://unix.stackexchange.com/questions/145250/where-is-bashs-history-stored) for the knowledge bomb.)