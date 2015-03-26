$(function(){
	$('#search_button').button();

	$('#reg_a').on('click',function(){
		$('#reg').dialog({
			title:'知问注册',
			buttons:{
				'提交':function(){
					alert('hi');
				},
				'取消':function(){
					$(this).dialog('close');
				}
			},
			show:'scale',
			hide:'puff',
			autoOpen:'false',
		});
	});
	$('#login_a').on('click',function(){
		$('#log').dialog({
			title:'知问登录',
			buttons:{
				'确定':function(){
					alert('hi');
				},
				'取消':function(){
					$(this).dialog('close');
				}
			},
			show:'scale',
			hide:'puff',
			autoOpen:'false',
		});
	});
	
	$('#log input[type=radio]').button();
	$(document).tooltip({
		position:{
			my:'left center',
			at:'right+5 center'
		}
	});
	$('#email').autocomplete({
		source: function(request,response){
			var hosts=['qq.com','163.com','gmail.com'],
				term=request.term,
				name=term,
				host='',
				ix=term.indexOf('@'),
				result=[];
			if(ix>-1){//当有@的时候，重新分配用户名和域名
				name=term.slice(0,ix);
				host=term.slice(ix+1);
			}
			if(name){
				var findedHosts=[];//如果没有输入@和后面的域名，全部提示
				if(host){
					findedHosts=$.grep(hosts,function(value,index){
						return value.indexOf(host)>-1
					});
				}else{
					findedHosts=hosts;
				}
				var findedResult=$.map(findedHosts,function(value,index){
					return name + '@' +value;
				});
				result= findedResult;
			}
			response(result);
		},
		position:{
			my:'left center',
			at:'right+100 center'
		},
	});
	$('#birth').datepicker({
		dateFormat:'yy-mm-dd',
		//dayNames:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		//dayNamesShort:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesMin:['日','一','二','三','四','五','六'],
		showWeek:true,
		changeMonth:true,
		changeYear:true,
		showButtonPanel:'true',
		currentText:'Today',
		maxDate:0,
		//minDate:0,
		hideIfNoPrevNext:true,
		yearRange:'1990:2015',
	});
});