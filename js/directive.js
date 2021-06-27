ionicApp.directive('headerDiv', function () {
    return {
        templateUrl: './templates/directiveTemplate/headerDiv.html',
        replace: false,
        transclude: true
    }
})
ionicApp.directive('homeContentHead',function () {
    return {
        templateUrl: './templates/directiveTemplate/homeContentHead.html',
        replace: false,
        transclude: true
    }
})
ionicApp.directive('homeContentBody',function () {
    return {
        templateUrl: './templates/directiveTemplate/homeContentBody.html',
        replace: false,
        transclude: true
    }
})
ionicApp.directive('myInfoTemplate',function () {
    return {
        templateUrl: './templates/directiveTemplate/myInfoTemplate.html',
        replace: false,
        transclude: true
    }
})
