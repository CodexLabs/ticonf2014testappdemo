var win = Ti.UI.createWindow({
  backgroundColor: 'blue',
  layout: 'vertical',
});

var label = Ti.UI.createLabel({
  top: 35,
  text: 'label',
  color: 'blue'
});
win.add(label);

var button = Ti.UI.createButton({
  title: 'show alert',
});
button.addEventListener('click', function(e) {
  alert('lookout');
});
win.add(button);

win.open();