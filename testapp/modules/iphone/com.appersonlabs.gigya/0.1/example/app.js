var win = Ti.UI.createWindow({
	backgroundColor:'white',
  layout: 'vertical'
});
var label = Ti.UI.createLabel({
  top: 20
});
win.add(label);

var module = require('com.appersonlabs.gigya');
Ti.API.info("module is => " + module);

// INITIALIZATION

module.APIKey = '3_prG9bc47yYdLvDyytRV5rOl3Hp2SOxEJvoBnVg84Vy2lMQ8qIAftpyplXxtfqDUM';

// AUTHENTICATION

var showLoginProvidersButton = Ti.UI.createButton({
  title: 'Show Login Providers'
});
showLoginProvidersButton.addEventListener('click', function(e) {
  label.text = '';
  module.showLoginProvidersDialog({
/*    providers: ['facebook', 'google'], */
    success: function(e) {
      label.text = 'logged in as ' + e.user.firstName + ' ' + e.user.lastName;
      Ti.API.info("success: showLoginProvidersDialog: "+JSON.stringify(e));
    },
    failure: function(e) {
      label.text = 'login failure: ' + e.error;
      Ti.API.info("failure: showLoginProvidersDialog: "+JSON.stringify(e));
    }
  });
});
win.add(showLoginProvidersButton);

var loginToProviderButton = Ti.UI.createButton({
  title: 'Login to Google'
});
loginToProviderButton.addEventListener('click', function(e) {
  label.text = '';
  module.loginToProvider({
    name: 'google',
    success: function(e) {
      label.text = 'logged in as ' + e.user.firstName + ' ' + e.user.lastName;
      Ti.API.info("success: showLoginProvidersDialog: "+JSON.stringify(e));
    },
    failure: function(e) {
      label.text = 'login failure: ' + e.error;
      Ti.API.info("failure: showLoginProvidersDialog: "+JSON.stringify(e));
    }
  });
});
win.add(loginToProviderButton);


var logoutButton = Ti.UI.createButton({
  title: 'Logout'
});
logoutButton.addEventListener('click', function(e) {
  label.text = '';
  module.logout({
    success: function(e) {
      label.text = 'logout success';
    },
    failure: function(e) {
      label.text = 'logout failure: ' + JSON.stringify(e);
    }
  });
});
win.add(logoutButton);

var sessionButton = Ti.UI.createButton({
  title: 'Show Session'
});
sessionButton.addEventListener('click', function(e) {
  var session = module.session;
  label.text = session ? "token="+session.token+"; isValid="+session.isValid : "null";
});
win.add(sessionButton);


// CONNNECTIONS

var addConnectionProvidersButton = Ti.UI.createButton({
  title: 'Add Connection Providers'
});
addConnectionProvidersButton.addEventListener('click', function(e) {
  if (module.session && module.session.isValid) {
    module.showAddConnectionProvidersDialog({
      providers: ['facebook', 'twitter'],
      success: function(e) {
        label.text = "added connection provider: "+JSON.stringify(e);
      },
      failure: function(e) {
        label.text = "failed to add connection provider: "+JSON.stringify(e);
      }
    });
  }
});
win.add(addConnectionProvidersButton);


// REQUESTS

var sendGetFriendsInfoRequestButton = Ti.UI.createButton({
  title: 'Get Friends Info'
});
sendGetFriendsInfoRequestButton.addEventListener('click', function(e) {
  var req = module.requestForMethod("socialize.getFriendsInfo");
  
  // non-blocking call
  req.sendAsync({
    success: function(e) {
      label.text = JSON.stringify(e);
    },
    failure: function(e) {
      label.text = JSON.stringify(e);
    }
  });
  
  /*
  // blocking call
  var resp = req.sendSync();
  Ti.API.info(JSON.stringify(resp));
  */
});
win.add(sendGetFriendsInfoRequestButton);

// AUTH EVENTS

// These are optional. I use them to set up the UI to show logged in/out state.

function updateUI(loggedIn) {
  showLoginProvidersButton.enabled = !loggedIn;
  loginToProviderButton.enabled = !loggedIn;
  logoutButton.enabled = loggedIn;
  addConnectionProvidersButton.enabled = loggedIn;
  sendGetFriendsInfoRequestButton.enabled = loggedIn;
}

module.addEventListener('login', function(e) {
  if (e.user) {
    updateUI(true);
  }
});

module.addEventListener('logout', function(e) {
  updateUI(false);
});

win.addEventListener('open', function(e) {
  var session = module.session;
  updateUI(session && session.isValid);
});

win.open();
