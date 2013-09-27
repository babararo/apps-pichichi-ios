
		
        $('#reload').click(function() {
			$('#loading').show();
            $('#error').hide();
   			setTimeout("app.onDeviceReady()",1000);
		});
		
		var connection = checkConnection();
		
		if(connection == "Unknown connection" || connection == "No network connection") {
			$('#loading').hide();
            $('#error').show();
            navigator.notification.vibrate();
            setTimeout(function() { navigator.splashscreen.hide(); }, 3000);
		}else{
			navigator.splashscreen.show();
        	myRand = parseInt(Math.random()*99999999);  // cache buster
        	document.location.href='http://www.pajarosis.com/apps/pichichi/data/?rand=' + myRand;
        	//setTimeout("document.location.href='http://www.pajarosis.com/apps/pichichi/data/?rand=' + myRand",5000);
		}
 

function checkConnection()
{
	var networkState = navigator.connection.type;
	var states = {};
	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI]     = 'WiFi connection';
	states[Connection.CELL_2G]  = 'Cell 2G connection';
	states[Connection.CELL_3G]  = 'Cell 3G connection';
	states[Connection.CELL_4G]  = 'Cell 4G connection';
	states[Connection.NONE]     = 'No network connection';
	return states[networkState];
}

function onChanged() {
	var deviceWidth = window.innerWidth;
	var deviceHeight = window.innerHeight;
   	var orientation = (window.orientation == -90 || window.orientation == 90) ? "landscape" : "portrait";
  	$("body").css( "width", deviceWidth ); 
}

