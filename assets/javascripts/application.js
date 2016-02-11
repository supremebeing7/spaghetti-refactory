$(document).ready(function() {
  console.log('application loaded');
  $('a[href*="http://"]:not([href*="http://spaghettirefactory.blogspot.com"])').attr('rel', 'nofollow');
  $('a[href*="http://"]:not([href*="http://spaghettirefactory.blogspot.com"])').attr('target', '_blank');
  $('a[href*="https://"]:not([href*="https://spaghettirefactory.blogspot.com"])').attr('rel', 'nofollow');
  $('a[href*="https://"]:not([href*="https://spaghettirefactory.blogspot.com"])').attr('target', '_blank');
  $('a[href*="http://"]:not([href*="http://supremebeing7.github.io"])').attr('rel', 'nofollow');
  $('a[href*="http://"]:not([href*="http://supremebeing7.github.io"])').attr('target', '_blank');
  $('a[href*="https://"]:not([href*="https://supremebeing7.github.io"])').attr('rel', 'nofollow');
  $('a[href*="https://"]:not([href*="https://supremebeing7.github.io"])').attr('target', '_blank');
});