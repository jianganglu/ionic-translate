angular.module('starter')
.filter('T', function T($translate) {
    return function(key) {
        if(key) {
            return $translate.instant(key);
        }
        return key;
    }
})
.filter('map', function() {
    var filter = function(input) {
        return input + '...';
    };
    return filter;
});



