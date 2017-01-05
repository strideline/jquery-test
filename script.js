var container = $('#container');

var h1Tag = $('<h1>Ayyyy, lmao.</h1>');

h1Tag.addClass('red');

container.append(h1Tag);

$('#container button').click(function(e) {
  // var elem = $(event.target);
  // elem.css({
  //   'background-color': '#eeeeee',
  //   'font-size': '36px',
  //   'padding': '20px'
  // });
  $('body').css('background-color', '#e2e2e2')
});

$('body').hover(function(e){
  $(event.target).fadeOut();
})