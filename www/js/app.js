// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Dougras',
    lastText: 'Eu sou Dougras',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Dougras OFICIAL',
    lastText: 'Você nao é o Dougras',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.series', {
        url: '/series',
        views: {
            'menuContent': {
                templateUrl: 'templates/series.html',
                controller: 'SeriesCtrl'
            }
        }
    })

    .state('app.scraps', {
        url: '/scraps',
        views: {
            'menuContent': {
                templateUrl: 'templates/scraps.html',
                controller: 'ScrapsCtrl'
            }
        }
    })

    .state('app.movies', {
        url: '/movies',
        views: {
            'menuContent': {
                templateUrl: 'templates/movies.html',
                controller: 'MoviesCtrl'
            }
        }
    })

    .state('app.news', {
        url: '/news',
        views: {
            'menuContent': {
                templateUrl: 'templates/news.html',
                controller: 'NewsCtrl'
            }
        }
    })

    .state('app.apps', {
        url: '/apps',
        views: {
            'menuContent': {
                templateUrl: 'templates/apps.html',
                controller: 'AppsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/news');
});
