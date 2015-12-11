(function() {
  angular.module('starter')
    .run(['$ionicPlatform', function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }

        if(window.plugins && window.plugins.jPushPlugin) {
          window.plugins.jPushPlugin.init();
        }

        console.log(alert(JSON.stringify(window.cordova)));
        console.log(alert(JSON.stringify(window.cordova.plugins)));
        console.log(alert(window.cordova.plugins.Keyboard));

        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    }]);
})();