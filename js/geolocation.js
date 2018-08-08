function translatePoint(position){
    var currentLon = position.coords.longitude;
    var currentLat = position.coords.latitude;
    var gpsPoint = new BMap.Point(currentLon,currentLat);
    BMap.Convertor.translate(gpsPoint,2,initMap); //坐标转换
}
function initMap(point){
    map = new BMap.Map("allmap"); //创建地图
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.centerAndZoom(point,15);
    map.addOverlay(new BMap.Marker(point));
 
}
//--------------------------------------------------------------------

function geoInf( position ) {
		var geoLocation = document.getElementById("Geolocation")
		var addr = position.address;
		var str = "";
		str += "地址："+position.addresses+"\n";//获取地址信息
		str += "坐标类型："+position.coordsType+"\n";
		var timeflag = position.timestamp;//获取到地理位置信息的时间戳；一个毫秒数；
		str += "时间戳："+timeflag+"\n";
		var codns = position.coords;//获取地理坐标信息；
		var lat = codns.latitude;//获取到当前位置的纬度；
		str += "纬度："+lat+"\n";
		var longt = codns.longitude;//获取到当前位置的经度
		str += "经度："+longt+"\n";
		var alt = codns.altitude;//获取到当前位置的海拔信息；
		str += "海拔："+alt+"\n";
		var accu = codns.accuracy;//地理坐标信息精确度信息；
		str += "精确度："+accu+"\n";
		var altAcc = codns.altitudeAccuracy;//获取海拔信息的精确度；
		str += "海拔精确度："+altAcc+"\n";
		var head = codns.heading;//获取设备的移动方向；
		str += "移动方向："+head+"\n";
		var sped = codns.speed;//获取设备的移动速度；
		str += "移动速度："+sped;
		console.log(JSON.stringify(position));	
		var currentgeolocation = JSON.stringify(position)
		return currentgeolocation;
	}
	function getGeocode(){
		mui.toast("获取定位位置信息中");
		plus.geolocation.getCurrentPosition( geoInf, function ( e ) {
			mui.toast( "获取定位位置信息失败："+e.message );
		},{geocode:true});
		
	}
	
//	mui.plusReady(function(){
//	    mui.toast("获取定位位置信息中");
//		plus.geolocation.getCurrentPosition( geoInf, function ( e ) {
//			mui.toast( "获取定位位置信息失败："+e.message );
//		},{geocode:true});
//	});