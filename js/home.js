// JavaScript Document

$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = '90px';
  this.style.height = (this.scrollHeight) + 'px';
});

