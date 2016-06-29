$(document).ready(function() {
  $('a[href*="http://"]:not([href*="http://spaghettirefactory.blogspot.com"])').attr('rel', 'nofollow');
  $('a[href*="http://"]:not([href*="http://spaghettirefactory.blogspot.com"])').attr('target', '_blank');
  $('a[href*="https://"]:not([href*="https://spaghettirefactory.blogspot.com"])').attr('rel', 'nofollow');
  $('a[href*="https://"]:not([href*="https://spaghettirefactory.blogspot.com"])').attr('target', '_blank');
  $('a[href*="http://"]:not([href*="http://supremebeing7.github.io"])').attr('rel', 'nofollow');
  $('a[href*="http://"]:not([href*="http://supremebeing7.github.io"])').attr('target', '_blank');
  $('a[href*="https://"]:not([href*="https://supremebeing7.github.io"])').attr('rel', 'nofollow');
  $('a[href*="https://"]:not([href*="https://supremebeing7.github.io"])').attr('target', '_blank');
  var pre = document.getElementsByTagName('pre'),
      pl = pre.length;

  for (var i = 0; i < pl; i++) {
    pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
    var num = pre[i].innerHTML.split(/\n/).length;
    for (var j = 0; j < num; j++) {
      var line_num = pre[i].getElementsByTagName('span')[0];
      line_num.innerHTML += '<span>' + (j + 1) + '</span>';
    }
  }
});