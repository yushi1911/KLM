document.addEventListener('chkunpaid', function(event) {
	
				var unpaidorder = document.getElementById("item3mobileH");
				//模拟首页点击
				console.log(unpaidorder)
				mui.trigger(unpaidorder, 'tap');
				
				//切换选项卡高亮
//				var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
//				if (defaultTab !== current) {
//					current.classList.remove('mui-active');
//					defaultTab.classList.add('mui-active');
//				}
			});