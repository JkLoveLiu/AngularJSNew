ionicApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    // 解决Android里，tabs上浮，位于上面的情况
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    $stateProvider
        .state('index', {
            cache: false,
            url: '/index',
            templateUrl: './templates/routerTemplates/indexTemplate.html'
        })
        .state('home', {
            cache: true,
            url: '/home',
            templateUrl: './templates/routerTemplates/homeTemplate.html'
        })
        .state('myInfo_account', {
            url: '/myInfo_account',
            templateUrl: './templates/routerTemplates/myInfoAccountTemplate.html'
        })
        .state('IONotes', {
            url: '/IONotes',
            templateUrl: './templates/routerTemplates/IONotesTemplate.html'
        })
        .state('aboutMy', {
            url: '/aboutMy',
            templateUrl: './templates/routerTemplates/aboutMyTemplate.html'
        })
        .state('notPage', {
            url: '/notPage',
            templateUrl: './templates/routerTemplates/pageNotWrite.html',
        })
        .state('search', {
            url: '/search',
            templateUrl: './templates/routerTemplates/searchTemplate.html',
        })
    $urlRouterProvider.otherwise('/index');

})
