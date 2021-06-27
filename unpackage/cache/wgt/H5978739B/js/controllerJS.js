ionicApp.controller('ionicCtrl', function ($scope, $http) {

})
// index的控制器
ionicApp.controller('indexCtrl', function ($scope) {
    $scope.slideInterval = '2000';
    $scope.myActiveSlide = 0;
})
// 首页的控制器
ionicApp.controller('homeCtrl', function ($scope, $http, $interval, $timeout) {
    // 获取新闻，黄金，美元的汇率,中部新闻轮播图,底部资讯信息
    $http({
        method: 'GET',
        url: './data/data.json'
    }).then(function successCallback(res) {
        $scope.dataNews = res.data.news;
        $scope.exchangeRateUSD = res.data.exchangeRate.USD;
        $scope.exchangeRateAU = res.data.exchangeRate.AU;
        $scope.homeNewsImg = res.data.newsImg;
        $scope.newsFooterInfo = res.data.newsFooter;
    }, function errorCallback(response) {
        console.log(response)
    });
    // 手写轮播图
    $scope.homeInterval = $interval(function () {
        $scope.news_content_move = {
            "transform": "translateY(-46px)",
            "transition": "1s"
        }
        $timeout(function () {
            $scope.dataNews.push($scope.dataNews[0])
            $scope.dataNews.splice(0, 1)
            $scope.news_content_move = {
                "transform": "translateY(0)"
            }
        }, 1500)
    }, 3000)

    // 首页的下拉刷新
    $scope.doRefreshHome = function () {
        $http({
            method: 'GET',
            url: './data/data.json'
        }).then(function successCallback(newRes) {
            $scope.dataNews = newRes.data.news;
            $scope.exchangeRateUSD = newRes.data.exchangeRate.USD;
            $scope.exchangeRateAU = newRes.data.exchangeRate.AU;
            $scope.homeNewsImg = newRes.data.newsImg;
        }).finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
        })
    }
})
// 我的的控制器
ionicApp.controller('myInfoCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: './data/data.json'
    }).then(function successCallback(newRes) {
        $scope.appVersion = newRes.data.appVersion;
    }).finally(function () {
        $scope.$broadcast('scroll.refreshComplete');
    })
    $scope.doRefreshMyInfo = function () {
        $http({
            method: 'GET',
            url: './data/data.json'
        }).then(function successCallback(newRes) {
            $scope.appVersion = newRes.data.appVersion;
        }).finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
        })
    }
})
// 关于我们的控制器
ionicApp.controller('aboutMyCtrl', function ($scope, $http) {
    // 版本信息获取appVersion
    $http({
        method: 'GET',
        url: './data/data.json'
    }).then(function successCallback(res) {
        $scope.myAppVersion = res.data.appVersion;
    }, function errorCallback(response) {
        console.log(response)
    });
})
// 我的账户的控制器
ionicApp.controller('myAccountCtrl', function ($scope, $http) {
    // 获取银行卡信息
    $http({
        method: 'GET',
        url: './data/data.json'
    }).then(function successCallback(res) {
        $scope.bankCardInfo = res.data.bankCard;
    }, function errorCallback(response) {
        console.log(response)
    });
    // 判断银行卡的类型
    $scope.cardImg = function (num) {
        switch (num) {
            case 1:
                return "colorIcon color-card-a";
            case  2 :
                return "colorIcon color-card-b";
            case  3 :
                return "colorIcon color-card-c";
        }
    }
    // 隐藏部分银行卡号
    $scope.bankCardIDHide = function (cardID) {
        let showCardID = cardID.substr(0, 4)
        showCardID += " **** **** "
        showCardID += cardID.substr(-4)
        return showCardID;
    }
    // 我的账户页的下拉刷新
    $scope.doRefreshMyAccount = function () {
        $http({
            method: 'GET',
            url: './data/data.json'
        }).then(function successCallback(newBankCardInfo) {
            $scope.bankCardInfo = newBankCardInfo.data.bankCard;
        }).finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
        })
    }
})
// 交易记录的控制器
ionicApp.controller('myNotesCtrl', function ($scope, $http) {
    // 获取银行卡信息
    $http({
        method: 'GET',
        url: './data/TransactionData.json'
    }).then(function successCallback(res) {
        $scope.tradingInfo = res.data
    }, function errorCallback(response) {
        console.log(response)
    });
// 判断是信用卡还是借记卡
    $scope.decideCardType = function (cardType) {
        switch (cardType) {
            case 1:
                return "信用卡";
            case 2:
                return "借记卡"
        }
    }
    // 是否显示汉字人民币
    $scope.showTextRmb = function (cardType) {
        switch (cardType) {
            case 1:
                return;
            case 2:
                return "  (人民币)"
        }
    }
    // 是否显示英文RMB
    $scope.showRMB = function (cardType) {
        switch (cardType) {
            case 1:
                return "RMB ";
            case 2:
                return;
        }
    }
    $scope.lastCardID = function (cardId) {
        return cardId.substr(-4);
    }
    // 收支记录页的下拉刷新
    $scope.doRefreshIoNotes = function () {
        $http({
            method: 'GET',
            url: './data/TransactionData.json'
        }).then(function successCallback(newTradingInfo) {
            $scope.tradingInfo = newTradingInfo.data
        }).finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
        })
    }
})
