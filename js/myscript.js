var mainCtrl = function($scope){

	$scope.user = {lastName: '', firstName: '',gender: '',age: ''};
	$scope.address = {zip: '', pref:'',add1: '', add2: ''};
	$scope.email = {email:''}
	$scope.infomation = {mail:''}

	$scope.ajaxzip3Check = function(){
		$('.zip input').val(function(i, v){
			return v.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
				return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
			});
		})

		$scope.address.zip = $('.zip input').val()
		AjaxZip3.zip2addr($('.zip input')[0],'','pref','add1')
		if($('.pref input').val()){
			$scope.address.pref = $('.pref input').val();
		}

		if($('.add1 input').val()){
			$scope.address.add1 = $('.add1 input').val();
		}
	}

	$scope.addressCheck = function(){
		if($('.pref input').val()){
			$scope.address.pref = $('.pref input').val();
		}

		if($('.add1 input').val()){
			$scope.address.add1 = $('.add1 input').val();
		}
	}

}
