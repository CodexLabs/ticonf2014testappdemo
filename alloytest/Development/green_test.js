var win = Ti.UI.createWindow({
	backgroundColor:'blue',
    layout: 'vertical'
});

var label = Ti.UI.createLabel({
    top: 20,
    text:'yay!!!'
});

win.add(label);
win.open();