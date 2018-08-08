
		function LSinit (){
			var LSformat = {"coordsType":" ","address":{"country":" ","province":" ","city":" 市","district":" ","street":" ","streetNum":" ","poiName":" ","cityCode":" "},"addresses":" ","coords":{"latitude":39.835319,"longitude":116.262363,"accuracy":49,"altitude":0,"heading":null,"speed":0,"altitudeAccuracy":0},"timestamp":1533006259537}
			var SCformat = []
			var UIformat = []
			var lSinit = localStorage.getItem("GEOlocation");
			var SCinit = localStorage.getItem("ShopCart");
			var UIinit = localStorage.getItem("UserInfo");
			if(!lSinit){localStorage.setItem("GEOlocation",JSON.stringify(LSformat))};
			if(!SCinit){localStorage.setItem("ShopCart",JSON.stringify(SCformat))}
			if(!SCinit){localStorage.setItem("UserInfo",JSON.stringify(UIformat))}
			
		}
