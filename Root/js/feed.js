(function() {
	var app = angular.module('feed', []);
	
	app.controller('feedController', function($scope) {
		
		this.feeds = [];
		
		this.feed = {
			'id': 0,
			'type': '',
			'value': ''
		};
		
		this.strings = {
			'feed_required': 'Please enter the URL/text feed',
			'feed': 'Text feed or URL feed',
			'post': 'Post'
		};
		$scope.feeds = [];
		 var data = [];
		this.validateFeed = function() {
					$scope.feeds.push(this.feed.value);	
		};
		$scope.remove = function(index) {
				data.push($scope.feeds.splice(index, 1)[0]);
			};
			$scope.date = new Date();
	});	
	app.directive('animate', function(){
    return function(scope, elm, attrs) {
        setTimeout(function(){
            elm.addClass('show');
        });
    };
}).directive('remove', function(){
    return function(scope, elm, attrs) {
        elm.bind('click', function(e){
            e.preventDefault();
            elm.removeClass('show');
            setTimeout(function(){
                scope.$apply(function(){
                    scope.$eval(attrs.remove);
                });
            }, 200);                    
        });
    };
});


})();