/*-------- Conference Signs Config File ---------*/

/*--- Name of the Conference Room ---*/
//var ROOM_NAME = 'BEBOP';
//var ROOM_NAME = 'MILLENNIUM FALCON';
//var ROOM_NAME = 'PLANET EXPRESS';
var ROOM_NAME = 'VOYAGER (MAIN)';
//var ROOM_NAME = 'VOYAGER (SMALL)';
//var ROOM_NAME = 'WALLACE';
//var ROOM_NAME = 'GROMIT';

/*--- Google calendar ID of the desired resource ---*/
switch (ROOM_NAME) {
	case 'BEBOP':
		var CALENDAR_ID = 'sparkfun.com_2d35393739393837302d333238@resource.calendar.google.com';
		break;
	case 'MILLENNIUM FALCON':
		var CALENDAR_ID = 'sparkfun.com_33313339323938342d333330@resource.calendar.google.com';
		break;
	case 'PLANET EXPRESS':
		var CALENDAR_ID = 'sparkfun.com_2d3333323334343834323331@resource.calendar.google.com';
		break;
	case 'VOYAGER (MAIN)':
		var CALENDAR_ID = 'sparkfun.com_39333432353633312d343931@resource.calendar.google.com';
		break;
	case 'VOYAGER (SMALL)':
		var CALENDAR_ID = 'sparkfun.com_2d3234333337323933383731@resource.calendar.google.com';
		break;
	case 'WALLACE':
		var CALENDAR_ID = 'sparkfun.com_3233323639303538363638@resource.calendar.google.com';
		break;
	case 'GROMIT':
		var CALENDAR_ID = 'sparkfun.com_3232363838323834373032@resource.calendar.google.com';
		break;
}

/*--- Path to a background image for the sign ---*/
switch (ROOM_NAME) {
	case 'BEBOP':
		var BACKGROUND_IMG = 'http://www.inetres.com/gp/anime/bebop/09/bebop_09_17.jpg';
		break;
	case 'MILLENNIUM FALCON':
		var BACKGROUND_IMG = 'http://www.gunjap.net/site/wp-content/uploads/2015/11/DSC_0626_zps6x61oybs.jpgoriginal.jpg';
		break;
	case 'PLANET EXPRESS':
		var BACKGROUND_IMG = 'http://net.archbold.k12.oh.us/ahs/web_class/Spring_13/Futurama_Miller/images/page3.Planet%20Express.jpg';
		break;
	case 'VOYAGER (MAIN)':
		var BACKGROUND_IMG = 'http://www.syfy.com/sites/syfy/files/wire/legacy/voyagermain.jpeg';
		break;
	case 'VOYAGER (SMALL)':
		var BACKGROUND_IMG = 'http://www.syfy.com/sites/syfy/files/wire/legacy/voyagermain.jpeg';
		break;
	case 'WALLACE':
		var BACKGROUND_IMG = 'https://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/wallace-580442.jpg';
		break;
	case 'GROMIT':
		var BACKGROUND_IMG = 'http://wallace-and-gromit-2015.s3.amazonaws.com/styles/retina_to_desktop/s3/film_ACS_dtop_1.jpg';
		break;
}

