	/*
  INDEX Berlin
  Copyright (C) 2019 by Systemantics, Bureau for Informatics

  Systemantics GmbH
  Hausbroicher Str. 218
  47877 Willich
  GERMANY

  Web:    www.systemantics.net
  Email:  hello@systemantics.net

  Permission granted to use the files associated with this
  website only on your webserver.

  Changes to these files are PROHIBITED due to license restrictions.
*/



const pageDuration = 150;

// Detect touch device
var isTouch = 'ontouchstart' in document,
	noTouch = !isTouch;

function isMobile() {
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
		return true
	}else{
		return false
	}
}

function CustomMarker(latlng, map, args) {
	this.latlng = new google.maps.LatLng(latlng.lat, latlng.lng);
	this.args = args;
	this.setMap(map);
}

if (typeof google !== 'undefined') {
	CustomMarker.prototype = new google.maps.OverlayView();

	CustomMarker.prototype.draw = function() {
		let self = this;
		let div = this.div;

		if (!div) {
			div = this.div = document.createElement('div');
			// if (self.args.title !== false) {
			// 	div.setAttribute('title', self.args.title);
			// }

			// div.appendChild(document.createTextNode(self.args.number));

			if (self.args.href !== false) {
				div.setAttribute('data-id', self.args.id);
			}

			if(self.args.label > 1 && $('.header__link--active').data('header') == 'exhibitions'){
				var span = document.createElement("span");
				span.append(self.args.label);
				div.appendChild(span);
			}

			if(self.args.href){
				div.setAttribute('data-href', self.args.href);
			}

			let addclass;

			if (self.args.href !== false) {
				if($('.js-content-right').find('.filter').length){
					div.setAttribute('data-onlyright', true);
				}

				addclass = 'custom-map-marker js-reader';

			} else {
				addclass = 'custom-map-marker';
			}

			if (self.args.isopen){
				addclass = addclass + ' custom-map-marker--open';
			}

			div.className = addclass;

			div.style.position = 'absolute';
			div.style.background = self.args.style;

			google.maps.event.addDomListener(div, "click", function(event) {
				google.maps.event.trigger(self, "click");
			});

			let panes = this.getPanes();
			panes.overlayImage.appendChild(div);
		}

		let point = this.getProjection().fromLatLngToDivPixel(this.latlng);
		if (point) {
			div.style.left = point.x - 13 + 'px';
			div.style.top = point.y - 13 + 'px';
		}
	};

	CustomMarker.prototype.remove = function() {
		if (this.div) {
			this.div.parentNode.removeChild(this.div);
			this.div = null;
		}
	};

	CustomMarker.prototype.getPosition = function() {
		return this.latlng;
	};
}

//$styleGray = [{"elementType": "geometry", "stylers": [{"color": "#f5f5f5"} ] }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"elementType": "labels.text.stroke", "stylers": [{"color": "#f5f5f5"} ] }, {"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"} ] }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#eeeeee"} ] }, {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"} ] }, {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#ffffff"} ] }, {"featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#dadada"} ] }, {"featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"} ] }, {"featureType": "transit.station", "elementType": "geometry", "stylers": [{"color": "#eeeeee"} ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#c9c9c9"} ] }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] } ];
//$mapStyle = [{"elementType": "geometry", "stylers": [{"color": "#212121"} ] }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"elementType": "labels.text.stroke", "stylers": [{"color": "#212121"} ] }, {"featureType": "administrative", "elementType": "geometry", "stylers": [{"color": "#757575"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "administrative.land_parcel", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"} ] }, {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#181818"} ] }, {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{"color": "#1b1b1b"} ] }, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#2c2c2c"} ] }, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#8a8a8a"} ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#373737"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#3c3c3c"} ] }, {"featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{"color": "#4e4e4e"} ] }, {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"} ] }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"} ] } ];
$mapStyle = [ { "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#dadada" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#c9c9c9" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] } ];

function ZoomControl(controlDiv, map) {

	if($(map.__gm.Na).closest('.main__column--map').length){
		// Creating divs & styles for custom zoom control
		if(isMobile()){
			controlDiv.style.paddingLeft = '10px';
		}else{
			controlDiv.style.paddingLeft = '20px';
		}

		// Set CSS for the control wrapper
		var controlWrapper = document.createElement('div');
		controlWrapper.style.backgroundColor = 'black';
		controlWrapper.style.borderRadius = '50%';
		controlWrapper.style.marginBottom = '10px';
		controlWrapper.style.cursor = 'pointer';
		controlWrapper.style.width = '40px';
		controlWrapper.style.height = '40px';
		controlDiv.appendChild(controlWrapper);

		// Set CSS for the zoomIn
		var locateButton = document.createElement('div');
		locateButton.className = 'custom__button custom__button-locate';
		locateButton.style.width = '40px';
		locateButton.style.height = '40px';
		controlWrapper.appendChild(locateButton);

		google.maps.event.addDomListener(locateButton, 'click', function() {

			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				new google.maps.Marker({
					position: pos,
					map: map,
					icon: '/elements/map_position.svg',
				});

				map.setCenter(pos);
			});
		});

	}else{
		// Creating divs & styles for custom zoom control
		controlDiv.style.paddingLeft = '10px';
	}

	// Set CSS for the control wrapper
	var controlWrapper = document.createElement('div');
	controlWrapper.style.backgroundColor = 'black';
	controlWrapper.style.borderRadius = '4px';
	controlWrapper.style.cursor = 'pointer';
	controlWrapper.style.width = '40px';
	controlWrapper.style.height = '80px';
	controlDiv.appendChild(controlWrapper);

	// Set CSS for the zoomIn
	var zoomInButton = document.createElement('div');
	zoomInButton.className = 'custom__button custom__button-zoomin';
	zoomInButton.style.width = '40px';
	zoomInButton.style.height = '40px';
	controlWrapper.appendChild(zoomInButton);

	// Set CSS for the zoomOut
	var zoomOutButton = document.createElement('div');
	zoomOutButton.className = 'custom__button custom__button-zoomout';
	zoomOutButton.style.width = '40px';
	zoomOutButton.style.height = '40px';
	controlWrapper.appendChild(zoomOutButton);

	// Setup the click event listener - zoomIn
	google.maps.event.addDomListener(zoomInButton, 'click', function() {
		map.setZoom(map.getZoom() + 1);
	});

	// Setup the click event listener - zoomOut
	google.maps.event.addDomListener(zoomOutButton, 'click', function() {
		map.setZoom(map.getZoom() - 1);
	});
}

function initMaps(){
	$('.js-map:not(.js-map--initialized)').each(function (i) {
		$(this).addClass('js-map--initialized');

		let mapContainer = $(this),
			map,
			pos = {
				lat: 52.520008,
				lng: 13.404954
			},
			center,
			venues,
			bb;

		if($(this).closest('.main__column--map').length){
			venues = [];
			$('.js-content-left .js-mapitem').each(function(){
				let event = $(this),
					url = event.data('href').replace('/list/', '/map/');

				let cluster = event.data('latitude') + '_' + event.data('longitude');

				let findKey = venues.filter(x => x.key === cluster)
				if(findKey.length){
					findKey[0].count = findKey[0].count + 1;
				}else{

                    if(event.data('latitude') && event.data('longitude')){
                        let venue = {
                            'i': event.data('id'),
                            // 't': $aItem->title,
                            // 'n': false,
                            'p': {
                                lat: parseFloat(event.data('latitude')),
                                lng: parseFloat(event.data('longitude')),
                            },
                            'u': url,
                            's': '#000',
                            // 'b': false,
                            'c': event.data('isopen'),
                            'key': cluster,
                            'count': 1,
                            'venueurl': event.data('venue'),
                            'type': event.data('type'),
                        }

                        venues.push(venue);
                    }
				}
			});

		}else{
			venues = mapContainer.data('marker');
		}

		if (typeof venues != 'undefined' && venues.length != 0) {
			// Get center
			bb = {
					east: -9999,
					north: 9999,
					south: -9999,
					west: 9999
				};
			for (let i in venues) {
				let aVenue = venues[i];
				if (aVenue.p.lat < bb.north) {
					bb.north = aVenue.p.lat;
				}
				if (aVenue.p.lat > bb.south) {
					bb.south = aVenue.p.lat;
				}
				if (aVenue.p.lng < bb.west) {
					bb.west = aVenue.p.lng;
				}
				if (aVenue.p.lng > bb.east) {
					bb.east = aVenue.p.lng;
				}
			}
			center = {
				lat: (bb.north + bb.south) / 2,
				lng: (bb.east + bb.west) / 2
			};
		} else {

			venues = false;
			center = pos;
		}

		map = new google.maps.Map(this, {
			center: center,
			zoom: 15,
			minZoom: 10,
			maxZoom: 18,
			scrollwheel: false,
			mapTypeControl: false,
			scaleControl: typeof mapContainer.data('zoom') != 'undefined' ? mapContainer.data('zoom') : false,
			streetViewControl: false,
			draggable: typeof mapContainer.data('zoom') != 'undefined' ? mapContainer.data('zoom') : false,
			panControl: false,
			//zoomControl: typeof mapContainer.data('zoom') != 'undefined' ? mapContainer.data('zoom') : false,
			zoomControl: false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.LEFT_CENTER
			},
			fullscreenControl: false,
			styles: $mapStyle,
			clickableIcons: false,
            gestureHandling: 'cooperative',
		});

		if (typeof bb != 'undefined') {
			//set min zoom
			google.maps.event.addListener(map, 'zoom_changed', function() {
				zoomChangeBoundsListener =
					google.maps.event.addListener(map, 'bounds_changed', function(event) {
						if (this.getZoom() > 17 && this.initialZoom == true) {
							// Change max/min zoom here
							this.setZoom(17);
							this.initialZoom = false;
						}
					google.maps.event.removeListener(zoomChangeBoundsListener);
				});
			});
			map.initialZoom = true;

			if($(this).closest('.article__map--full').length){
				map.fitBounds(bb);
			}
		}

		let infoWindow = new google.maps.InfoWindow({
			pixelOffset: new google.maps.Size(0,-10)
		});

		if (!venues) {
			// Add single marker
			let number = mapContainer.data('number');
			if (typeof number != 'undefined') {
				new CustomMarker(pos, map, {
					title: false,
					number: number,
					href: false,
					style: mapContainer.data('style')
				});
			} else {

				//Hide default marker

				// Default marker
				// new google.maps.Marker({
				// 	position: pos,
				// 	map: map,
				// 	style: 0
				// });
			}
		} else {

			for (let i in venues) {

				let aVenue = venues[i];
				let marker = new CustomMarker(aVenue.p, map, {
					id: aVenue.i,
					title: aVenue.t,
					label: aVenue.count,
					href: aVenue.u,
					style: aVenue.s,
					isopen: aVenue.c,
					venueurl: aVenue.venueurl,
					type: aVenue.type
				});

				google.maps.event.addListener(marker, 'click', (function() {
					return function() {

						if($(marker.div).closest('.main__column--map').length){
							if($(marker.div).hasClass('custom-map-marker--selected')){
								$(marker.div).removeClass('custom-map-marker--selected');

								$('.main__columns').removeClass('main__columns--article-show');
							}else{

								$('.custom-map-marker').removeClass('custom-map-marker--selected');

								$(marker.div).addClass('custom-map-marker--selected');

								$('.main__columns').addClass('main__columns--article-show');

								let url = $(marker.div).data('href');

								getContent(url, $(marker.div));
							}

							let content = '<div class="tooltip__content"><div class="tooltip__content-number">'+aVenue.n+'</div><div class="tooltip__content-text">'+aVenue.t+'</div></div>';

							if(aVenue.b){
								content = aVenue.b+content;
							}

							if(aVenue.u){
								content = '<a href="'+aVenue.u+'" style="display: block">'+content+'</a>';
							}

							map.panTo(marker.getPosition());
						}
					}
				})(marker, aVenue.t));
			}
		}

		var zoomControlDiv = document.createElement('div');
		var zoomControl = new ZoomControl(zoomControlDiv, map);

		map.controls[google.maps.ControlPosition.LEFT_CENTER].push(zoomControlDiv);

		google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
			if($('.custom-map-marker[data-href="'+location.pathname+'"]').length && $('.main__columns').hasClass('main__columns--show-map')){
				$('.custom-map-marker[data-href="'+location.pathname+'"]').trigger('click');
			}
		});

		$(this).on('click', function(e){
			if(!$(e.target).hasClass('custom-map-marker') && !$(e.target).closest('.gm-style-iw').length){
				infoWindow.close();
			}
		});
	});
}

function calcRoute() {
	var tourStart = $('.tourplan__item').eq(0);
	tourStart = new google.maps.LatLng(tourStart.data('lat'), tourStart.data('lng'));

	var tourEnd = $('.tourplan__item').last();
	tourEnd = new google.maps.LatLng(tourEnd.data('lat'), tourEnd.data('lng'));

	var wayPoints = [];
	let wayPointsExtern = [];
	$('.tourplan__item').each(function(i){

		if(i != 0 && i != $('.tourplan__item').length - 1){

			var point = {};

			point.location = new google.maps.LatLng($(this).data('lat'), $(this).data('lng'));
			point.stopover = true;
			var wp = {};

			wayPoints.push(point);
		}

		wayPointsExtern.push([$(this).data('lat'), $(this).data('lng')]);

	});

	var request = {
		origin: tourStart,
		destination: tourEnd,
		waypoints: wayPoints,
		travelMode: 'WALKING',
		optimizeWaypoints: false
	};

	directionsService.route(request, function(response, status) {
		if (status == 'OK') {
			directionsRenderer.setDirections(response);
		}
	});

	wayPointsExtern = $('.js-extern-google-maps').data('url') + wayPointsExtern.join('/') + '/data=!4m2!4m1!3e2';
	$('.js-extern-google-maps').attr('href', wayPointsExtern);

}

function checkFilterEmpty(){
	if(!$('.js-filter-item-delete').length){
		$('.filter-mobile-selected').removeClass('filter-mobile-selected--active');
	}
};

function updateSliderRange(){
	let handle = $('.ui-slider-handle');

	if(handle.length){
		let container = $('.filter-date-slider'),
			range = $('.filter-date-slider-range');

		let left = parseInt(handle.eq(0).css('left')),
			right = container.width() - parseInt(handle.eq(1).css('left'));

		range.css({
			'left': left,
			'right': right
		});
	}
}

function formatDate(value){
	return jQuery.format.date(new Date( value * 1000), 'ddd MMMM d, yyyy');
}

function updateHeaderDate(startdate, enddate){
	let headerFilterDate = $('.header__filter-item--date-range');
	if(!headerFilterDate.length){
		filteritem = $('<div class="header__filter-item header__filter-item--date-range js-header__filter-date-remove"><span></span><span class="header__filter-item-delete">✕</span></div>');

		filteritem.clone().appendTo($('.header__filter-items'));
		filteritem.clone().appendTo($('.filter-mobile-selected-wrap'));
	}

	let headerDateFilter = 'From: ' + jQuery.format.date(new Date( startdate * 1000), 'MMMM d, yyyy') + ' To ' + jQuery.format.date(new Date( enddate * 1000), 'MMMM d, yyyy');
	$('.header__filter-item--date-range span').eq(0).text(headerDateFilter);

	$('.filter-date')
		.data('startdate', jQuery.format.date(new Date( startdate * 1000), 'yyyy-MM-dd'))
		.data('enddate', jQuery.format.date(new Date( enddate * 1000), 'yyyy-MM-dd'));
}

function removeURLParameter(url, parameter) {
	//prefer to use l.search if you have a location/link object
	var urlparts= url.split('?');
	if (urlparts.length>=2) {

		var prefix= encodeURIComponent(parameter)+'=';
		var pars= urlparts[1].split(/[&;]/g);

		//reverse iteration as may be destructive
		for (var i= pars.length; i-- > 0;) {
			//idiom for string.startsWith
			if (pars[i].lastIndexOf(prefix, 0) !== -1) {
				pars.splice(i, 1);
			}
		}

		url= urlparts[0]+'?'+pars.join('&');

		return url;
	} else {
		return url;
	}
}

function updateFilterUrls(content){
	//update filter urls
	$('.js-content-filter .filter__item').each(function(i, s){
		let newFilterItem = content.find('.js-content-filter .filter__item').eq(i);

		//update filter urls
		$(s).attr('href', newFilterItem.attr('href'));

		//update filter class
		$(s).removeAttr('class');
		$(s).attr('class', newFilterItem.attr('class'));
	});

	//disable filter groups
	if(!$('.filter-date').hasClass('filter__group-items--disable') && content.find('.filter-date').hasClass('filter__group-items--disable')){
		$('.filter-date').addClass('filter__group-items--disable');
	}else if($('.filter-date').hasClass('filter__group-items--disable') && !content.find('.filter-date').hasClass('filter__group-items--disable')){
		$('.filter-date').removeClass('filter__group-items--disable');
	}

	if(!$('.js-filter__group-date .filter__group-items').hasClass('filter__group-items--disable') && content.find('.js-filter__group-date .filter__group-items').hasClass('filter__group-items--disable')){
		$('.js-filter__group-date .filter__group-items').addClass('filter__group-items--disable');
	}else if($('.js-filter__group-date .filter__group-items').hasClass('filter__group-items--disable') && !content.find('.js-filter__group-date .filter__group-items').hasClass('filter__group-items--disable')){
		$('.js-filter__group-date .filter__group-items').removeClass('filter__group-items--disable');
	}

	//update header filters
	$('.header__filter-items').empty();
	content.find('.header__filter-items').children().appendTo($('.header__filter-items'));

	let itemLayer = $('.js-content-item');
	if(itemLayer.length){
		itemLayer.fadeOut(pageDuration, function(){
			itemLayer.remove();
		});
	}

	if(content.find('.filter-mobile-selected').hasClass('filter-mobile-selected--active')){
		$('.filter-mobile-selected').addClass('filter-mobile-selected--active');
	}else{
		$('.filter-mobile-selected').removeClass('filter-mobile-selected--active');
	}

	$('.filter-mobile-results').text(content.find('.filter-mobile-results').text());
	$('.filter-mobile-selected-pin').html(content.find('.filter-mobile-selected-pin').html());
	$('.filter-mobile-selected-placeholder').html(content.find('.filter-mobile-selected-placeholder').html());

	let mobileFilterButton = $('.mobile-header__second-inner .js-header-filter-button');

	mobileFilterButton.attr('src', content.find('.mobile-header__second-inner .js-header-filter-button').attr('src'));
	mobileFilterButton.attr('data-count', content.find('.mobile-header__second-inner .js-header-filter-button').attr('data-count'));

	if($('.filter-mobile-selected').find('.header__filter-item').length){
		mobileFilterButton.addClass('with-counter');
	}else{
		mobileFilterButton.removeClass('with-counter');
	}

}

function dateFilter(){
	let el = $('.filter-date'),
		slider = $('.js-filter-date-slider');

	let url = location.search;

	url = removeURLParameter(url, 'startdate');
	url = removeURLParameter(url, 'enddate');

	if(!url){
		url = '?';
	}else if(url != '?'){
		url = url + '&';
	}

	if(slider.data('min') != el.data('startdate') || slider.data('max') != el.data('enddate')){
		url = url + 'startdate=' + el.data('startdate') + '&enddate=' + el.data('enddate');
	}

	url = location.pathname + url;

	$.get(url, function(htmlIn){
		var content = $("<div/>").append(htmlIn.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""));

		window.history.pushState(null, null, url);

		updateFilterUrls(content);

		$('.article__map').find('.map').removeClass('js-map--initialized').empty();

		let listLayer = $('.js-content-left .js-content-replace');
		listLayer.fadeOut(pageDuration, function(){
			listLayer.empty();

			let newItems = $('.js-content-left').find('.custom__scroller-inner .js-content-replace').append(content.find('.js-content-left .js-content-replace').children());

			newItems.fadeIn(pageDuration);

			initMaps();
		});

		// $('.filter__group:not(.js-filter__group-date)').remove();
		// content.find('.filter__group:not(.js-filter__group-date)').prependTo($('.js-content-right').find('.filter'));

		checkClearAll();
	});
}

function checkClearAll(){

	let filterClear = $('.filter-clear');
	if(filterClear.length){

		if($('.header__second .header__filter-item').length){
			filterClear.addClass('filter-clear--visibile');
		}else{
			filterClear.removeClass('filter-clear--visibile');
		}
	}

}
var directionsService,
	directionsRenderer;

function initSlideshow() {
	if ($('.js-carousel').length) {

		if (isMobile()) {
			isDraggable = true;
		} else {
			isDraggable = false;
		}

		$('.js-carousel').flickity({
			setGallerySize: true,
			adaptiveHeight: true,
			prevNextButtons: true,
			pageDots: true,
			groupCells: 1,
			cellAlign: 'left',
			draggable: isDraggable,
			wrapAround: true,
			accessibility: false,
			arrowShape: {
			  x0: 10,
			  x1: 60, y1: 50,
			  x2: 65, y2: 45,
			  x3: 20
			}
		});
	}
}
initSlideshow();

function pinHeader(){
	let sTop = $('.js-content-left .js-scroll').scrollTop(),
		el = $('.js-mobile-pined');

	if($('.main__columns').hasClass('main__columns--article-show')){
		return;
	}

	if(isMobile() && el.length){
		if(sTop > 20){
			el.addClass('wrap-header__third--top');
		}else{
			el.removeClass('wrap-header__third--top');
		}
	}
}

function updateDateSlider(event, ui){
	let container = $(event.target).closest('.filter-date');

	for (var i = 0; i < $(event.target).find('.ui-slider-handle').length; ++i) {
		if(i == 0){
			dateFrom = formatDate(ui.values[i]);
			container.find('.js-filter-date-from').text(dateFrom);
		}else{
			dateTo = formatDate(ui.values[i]);
			container.find('.js-filter-date-to').text(dateTo);
		}
	}

	let startdate = jQuery.format.date(new Date( ui.values[0] * 1000), 'yyyy-MM-dd'),
		enddate = jQuery.format.date(new Date( ui.values[1] * 1000), 'yyyy-MM-dd');

	$('.js-date-change').each(function(){
		let item = $(this);

		if(item.data('startdate') == startdate && item.data('enddate') == enddate){
			item.addClass('filter__item--selected');
		}else{
			item.removeClass('filter__item--selected');
		}
	});

	updateHeaderDate(ui.values[0], ui.values[1]);
	updateSliderRange();
}

function updateTourOrder(){

	let items = $('.tourplan__items').find('.tourplan__item');
	let size = items.length;
	let ids = [];
	items.each(function(i, e){
		let item = $(e),
			alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

		item.find('.tourplan__item-number').text(alphabet[i]);

		ids.push(item.data('id'));
	});

	let url;

	if(items.length){
		url = '/my_tour/update?ids=' + ids.join(';');
		$.post(url, function(data){});
	}
}

function getScrollbarWidth() {
	// Creating invisible container
	const outer = document.createElement('div');
	outer.style.visibility = 'hidden';
	outer.style.overflow = 'scroll'; // forcing scrollbar to appear
	outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
	document.body.appendChild(outer);

	// Creating inner element and placing it in the container
	const inner = document.createElement('div');
	outer.appendChild(inner);

	// Calculating difference between container's full width and the child width
	const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

	// Removing temporary elements from the DOM
	outer.parentNode.removeChild(outer);

	return scrollbarWidth;
}


function initFunctions(){

	if(!isMobile()){
		let lastSection;

		let scrollbar = $('.js-scroll').mCustomScrollbar({
			callbacks:{
				onScroll: function(){

					let jump = $(this).find('.header__jump'),
						currentTop = Math.abs(this.mcs.top);

					if(jump.length){
						if(jump.offset().top <= 100){
							jump.addClass('header__jump--pin');
						}else{
							jump.removeClass('header__jump--pin');
						}

						$('.events__wrap .events').each(function(i, s){
							let section = $(this),
								sectionTop = section.offset().top + currentTop - 200,
								sectionBottom = sectionTop + section.outerHeight();

							if(currentTop <= 200){

								if(i == 0){
									if(lastSection != section.data('section')){
										$('.js-jump-item').removeClass('header__jump-item--active');
										$('.js-jump-item[data-section="'+ section.data('section') +'"]').addClass('header__jump-item--active');

										lastSection = section.data('section');
									}
								}

							}else{
								if(sectionTop <= currentTop && sectionBottom >= currentTop){
									if(lastSection != section.data('section')){
										$('.js-jump-item').removeClass('header__jump-item--active');
										$('.js-jump-item[data-section="'+ section.data('section') +'"]').addClass('header__jump-item--active');

										lastSection = section.data('section');
									}
								}
							}
						});
					}
				}
			}
		});

		$(document).on('click', '.js-jump-item', function(){
			let el = $(this),
				section = $('.events[data-section="'+ el.data('section') +'"]');

			if(el.closest('li').index() == 0){
				section = 0;
			}else{
                section = section.offset().top - scrollbar[0].mcs.top - 200;
            }

			$('.js-content-left .js-scroll').mCustomScrollbar('scrollTo', section, {
				//scrollInertia: 300
			});
		});
	}else{
		$(document).on('click', '.js-jump-item', function(){
			let el = $(this),
				scrollPosition = $('.js-content-left .js-scroll'),
				section = $('.events[data-section="'+ el.data('section') +'"]'),
				top = scrollPosition.scrollTop() + section.offset().top - (parseInt(section.css('padding-top')) == 100 ? 172 : 122 );

			if(el.closest('li').index() == 0){
				top = 0;
			}

			scrollPosition.animate({
				scrollTop: top,
			}, 1000);
		});
	}

	$("<style type='text/css'>.fx-margin{margin-right:" + getScrollbarWidth() + "px;}</style>").appendTo($("head"));

	$('.js-map-tourplan').each(function (i) {
		directionsService = new google.maps.DirectionsService();
		directionsRenderer = new google.maps.DirectionsRenderer();

		map = new google.maps.Map(this, {
			center: pos = {
				lat: 52.5234051,
				lng: 13.4113999
			},
			zoom: 12,
			scrollwheel: false,
			mapTypeControl: false,
			// scaleControl: typeof mapContainer.data('zoom') != 'undefined' ? mapContainer.data('zoom') : false,
			streetViewControl: false,
			// draggable: typeof mapContainer.data('zoom') != 'undefined' ? mapContainer.data('zoom') : false,
			panControl: false,
			zoomControl: false,
			// zoomControl: typeof mapContainer.data('zoom') != 'undefined' ? mapContainer.data('zoom') : false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.LEFT_CENTER
			},
			fullscreenControl: false,
			styles: $mapStyle,
		});

		var zoomControlDiv = document.createElement('div');
		var zoomControl = new ZoomControl(zoomControlDiv, map);

		map.controls[google.maps.ControlPosition.LEFT_CENTER].push(zoomControlDiv);

		directionsRenderer.setMap(map);

		calcRoute();
	});

	$('.js-filter-date-slider:not(.js-filter-date-initialized)').each(function(){
		var item = $(this),
			container = item.closest('.filter-date'),
			currentMin = container.find('.filter-date-value-start').val(),
			currentMax = container.find('.filter-date-value-end').val(),
			timeoutSlide,
			minValue =  new Date(item.data('min')).getTime() / 1000;
			maxValue = new Date(item.data('max')).getTime() / 1000;

		currentMin = new Date(currentMin).getTime() / 1000;
		currentMax = new Date(currentMax).getTime() / 1000;

		item.slider({
			min: minValue,
			max: maxValue,
			step: 1,
			values: [currentMin, currentMax],
			slide: function(event, ui) {
				updateDateSlider(event, ui);
			},
			stop: function(event, ui){
				updateDateSlider(event, ui);
				dateFilter();
			},
			create: function(event, ui){

				let	startDate = $('.filter-date-value-start').val(),
					endDate = $('.filter-date-value-end').val(),
					valueStart = new Date(startDate).getTime() / 1000,
					valueEnd = new Date(endDate).getTime() / 1000;

				$('.js-filter-date-from').text(formatDate(valueStart));
				$('.js-filter-date-to').text(formatDate(valueEnd));

				if($('.js-date-is-updated').length){
					updateHeaderDate(valueStart, valueEnd);
				}

				updateSliderRange();
			}
		});

		item.addClass('js-filter-date-initialized');
	});

	$('.js-tourplan-sortable').sortable({
		handle: ".tourplan__item-handel",
		axix: 'y',
		update: function(e, ui){
			calcRoute();

			updateTourOrder();
		},
	});

	let lastSection;
	$('.js-scroll').on('scroll', function(e){
		pinHeader();
		mobilePinFilter();

		let header = $('.js-content-left .wrap-header__third');
		if($(this).closest('.main__column').hasClass('js-content-left')){
			let scrollPosition = $(this).scrollTop(),
				jump = $('.header__jump');

			if(jump.length){
				$('.events__wrap .events').each(function(){
					let section = $(this),
						sectionTop =  section.offset().top + scrollPosition - header.height(),
						sectionBottom = sectionTop + section.outerHeight();

					if(sectionTop <= scrollPosition && sectionBottom >= scrollPosition){
						if(lastSection != section.data('section')){
							$('.js-jump-item').removeClass('header__jump-item--active');
							$('.js-jump-item[data-section="'+ section.data('section') +'"]').addClass('header__jump-item--active');

							lastSection = section.data('section');
						}
					}
				});
			}
		}
	});

	initSlideshow();
	setMinHeight();
	initMaps();
}
initFunctions();

function mobilePinFilter(){

	let mobileFilter = $('.js-mobile-filter-pin');
	if(mobileFilter.length){
		let sTop = $('.js-content-filter .js-scroll').scrollTop(),
			topPosition = $('.header-mobile').height(),
			pinPosition = mobileFilter.offset().top + sTop - topPosition,
			pinItem = $('.filter-mobile-selected-pin');

		if(pinPosition <= sTop){
			mobileFilter.addClass('filter-mobile-selected--pin');
			pinItem.css('top', pinPosition);
		}else{
			mobileFilter.removeClass('filter-mobile-selected--pin');
			pinItem.css('top', '');
		}
	}
}

function closeTour(){
	let tour = $('.js-content-tour');

	tour.fadeOut(pageDuration, function(){
		tour.remove();
	});

	$('.js-header-tour').removeClass('button-style-1--active');
}

function replaceContent(columnClass, content){

	let newId = content.find(columnClass).data('id'),
		oldContent = $(columnClass).find('.js-content-replace');

	oldContent.fadeOut(pageDuration, function(){
		oldContent.empty();

		if(isMobile()){
			$(columnClass).find('.js-scroll').scrollTop(0);
		}else{
			$(columnClass).find('.js-scroll').mCustomScrollbar('scrollTo', 0, {
				scrollInertia: 0
			});
		}

		$(columnClass).find('.custom__scroller-inner .js-content-replace').append(content.find(columnClass).find('.js-content-replace').children());
		$(columnClass).find('.js-content-replace').fadeIn(pageDuration);
		$(columnClass).data('id', newId);

		if(columnClass == '.js-content-left'){
			//update map
			$('.article__map').find('.map').removeClass('js-map--initialized').empty();
		}

		setTimeout(function(){
			initFunctions();
		});

	});
}

function getContent(url, el){
	$.get(url, function(htmlIn){
		var content = $("<div/>").append(htmlIn.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""));

		if(!el.data('favitem')){
			window.history.pushState(null, null, url);
			document.title = content.find('title')[0].text;
		}

		//check for overlayer
		if(content.find('.overlayer').length){

			content.find('.overlayer').hide().appendTo($('body'));

			$('html').addClass('with-overlayer');

			setTimeout(function(){
				$('.overlayer').fadeIn(pageDuration);
			});

		}else if(el.hasClass('js-header-tour')){

			if(!$('.js-content-tour').length){
				content.find('.js-content-tour').hide().appendTo($('.main__columns'));

				$('.js-content-tour').fadeIn(pageDuration);

				if(!isMobile()){
					$('.js-scroll').mCustomScrollbar();
				}

				initFunctions();
			}

			let itemLayer = $('.js-content-item, .js-content-filter');
			if(itemLayer.length){
				itemLayer.fadeOut(pageDuration, function(){
					itemLayer.remove();
				});
			}

			$('.custom-map-marker').removeClass('custom-map-marker--selected');

		}else if(content.find('.js-content-item').length){

			//Detail pages
			let itemLayer = $('.js-content-item');

			if(itemLayer.length){

				if(content.find('.js-content-item').data('id') != $('.js-content-item').data('id')){
					replaceContent('.js-content-item', content);
				}

			}else{

				content.find('.js-content-item').hide().appendTo($('.main__columns'));
				$('.js-content-item').fadeIn(pageDuration);

				initFunctions();
			}

		}else if(el.hasClass('filter-clear')){

			$('.filter-clear').removeClass('filter-clear--visibile');
			replaceContent('.js-content-left', content);
			updateFilterUrls(content);
			resetDatefilter();
			mobilePinFilter();

			//change filter button url
			$('.js-header-filter-button').attr('href', url);

		}else if(el.hasClass('filter__item') || el.hasClass('header__filter-item')){

			//Filtering
			let list = $('.js-content-left');

			replaceContent('.js-content-left', content);

			updateFilterUrls(content);

			checkClearAll();
			mobilePinFilter();

			//change filter button url
			$('.js-header-filter-button').attr('href', url);

		}else if(content.find('.js-content-filter').length){

			if(el.data('forceleft')){
				replaceContent('.js-content-left', content);

				$('.header__filter-button').addClass('button-style-1--active');

				updateFilterUrls(content);

				$('.mobile-header__second-button .js-header-filter-button').addClass('with-counter').data('count', 1);
			}

			//Filter
			let filterLayer = $('.js-content-filter');

			if(!filterLayer.length){
				content.find('.js-content-filter').hide().appendTo($('.main__columns'));
				$('.js-content-filter').fadeIn(pageDuration);

				initFunctions();
			}

			let itemLayer = $('.js-content-item, .js-content-tour');
			if(itemLayer.length){
				itemLayer.fadeOut(pageDuration, function(){
					itemLayer.remove();
				});
			}

		}else{

			//header links
			if(el.hasClass('js-link-header')){

				$('body').data({
					'baseurl': url,
					'basetitle': content.find('title')[0].text,
				});

				$('.header__second').removeClass('header__second--map-is-active');

				//header second replace
				let headerChars = $('.artists__chars'),
					headerFilter = $('.header__filter');

				if(headerFilter.length && !content.find('.header__filter').length){
					headerFilter.fadeOut(pageDuration, function(){
						headerFilter.remove();
					});
				}else if(!headerFilter.length && content.find('.header__filter').length){

					if(headerChars.length){
						headerChars.fadeOut(pageDuration, function(){
							headerChars.remove();
						});
					}

					setTimeout(function(){
						let headerFilterAdd = content.find('.header__filter').hide().appendTo($('.header__second'));

						headerFilterAdd.fadeIn(pageDuration);
					}, pageDuration);
				}

				if(headerChars.length && !content.find('.artists__chars').length){
					headerChars.fadeOut(pageDuration, function(){
						headerChars.remove();
					});
				}else if(!headerChars.length && content.find('.artists__chars').length){

					if(headerFilter.length){
						headerFilter.fadeOut(pageDuration, function(){
							headerFilter.remove();
						});
					}

					setTimeout(function(){
						let headerCharAdd = content.find('.artists__chars').hide().appendTo($('.header__second'));

						headerCharAdd.fadeIn(pageDuration);
					}, pageDuration);
				}

				if($('.js-content-left').data('id') == 'favourites'){
					$('.js-content-left .header__switch, .main__column--map .header__switch').remove();
					content.find('.main__column--map .header__switch').appendTo($('.main__column--map .header__third'));
					content.find('.js-content-left .header__switch').appendTo($('.js-content-left .header__third'));
				}else{

					let switches = ['.main__column--map','.js-content-left'];
					$.each(switches, function(i, s){
						let headerSwitch = $(s).find('.header__switch');

						if(headerSwitch.length && !content.find(s).find('.header__switch').length){
							headerSwitch.fadeOut(pageDuration, function(){
								headerSwitch.remove();
							});
						}else if(!headerSwitch.length && content.find(s).length){

							setTimeout(function(){
								let headerSwitchAdd = content.find(s).find('.header__switch').hide().appendTo($(s).find('.header__third'));

								headerSwitchAdd.fadeIn(pageDuration);
							}, pageDuration);
						}
					});
				}

				//header search
				let headerSearch = $('.js-content-left .header__search');
				if(headerSearch.length && !content.find('.js-content-left .header__search').length){
					headerSearch.fadeOut(pageDuration, function(){
						headerSearch.remove();
					});
				}else if(!headerSearch.length && content.find('.js-content-left .header__search').length){
					setTimeout(function(){
						let headerSearchAdd = content.find('.js-content-left .header__search').hide().appendTo($('.js-content-left .header__third'));

						headerSearchAdd.fadeIn(pageDuration);
					}, pageDuration);
				}

				//close detailpage
				let detalLayer = $('.js-content-item, .js-content-tour');
				if(detalLayer.length){
					detalLayer.fadeOut(pageDuration, function(){
						detalLayer.remove();
					});
				}

				if(el.closest('.header__link').length){
					$('.header__link').removeClass('header__link--active');
					el.closest('.header__link').addClass('header__link--active');
				}

				//update map
				let map = $('.main__column--map .js-map');
				if(map.length && !content.find('.js-map').length){
					map.fadeOut(pageDuration, function(){
						map.remove();

						let newMap = content.find('.main__column--map .js-map').hide().appendTo($('.main__column--map .article__map'));

						newMap.fadeIn(pageDuration);
					});
				}else if((!$('.main__column--map .js-map').length || !$('.main__column--map').length) && content.find('.js-map').length){
					let addMap;

					if(!$('.main__column--map').length){
						addMap = content.find('.main__column--map').prependTo($('.main__columns'));

					}else{
						addMap = content.find('.main__column--map .js-map').appendTo($('.main__column--map .article__map'));
					}

					// addMap.fadeIn(pageDuration);
				}

				$('.main__columns').removeClass('main__columns--show-map');

				let contentLeft = $('.js-content-left');
				if(contentLeft.data('id') != content.find('.js-content-left').data('id')){
					replaceContent('.js-content-left', content);
				}

				let contentRight = $('.js-content-right');
				if(contentRight.data('id') != content.find('.js-content-right').data('id')){
					//rempace classes
					contentRight.removeAttr('class');
					contentRight.attr('class', content.find('.js-content-right').attr('class'));

					replaceContent('.js-content-right', content);
				}

				let jumpMenu = $('.header__jump');
				if(jumpMenu.length && !content.find('.header__jump').length){
					jumpMenu.fadeOut(pageDuration, function(){
						jumpMenu.remove();
					});
				}else if(!jumpMenu.length && content.find('.header__jump').length){
					let el = content.find('.header__jump').hide().appendTo($('.js-content-left .header__third'));

					setTimeout(function(){
						el.fadeIn(pageDuration);
					}, pageDuration);
				}

				$('.js-header-filter-button').attr('href', content.find('.js-header-filter-button').attr('href'));

				let otherLayer = $('.js-content-filter');
				if(otherLayer.length){
					otherLayer.fadeOut(pageDuration, function(){
						otherLayer.remove();
					});
				}

			}else if(el.hasClass('js-header-fav')){

				$('.js-content-left .header__switch, .main__column--map .header__switch').remove();
				content.find('.main__column--map .header__switch').appendTo($('.main__column--map .header__third'));
				content.find('.js-content-left .header__switch').appendTo($('.js-content-left .header__third'));

				if($('.js-content-left').data('id') != 'favourites'){
					replaceContent('.js-content-left', content);
				}

				if($('.js-content-right').data('id') != 'favourites'){
					replaceContent('.js-content-right', content);
				}

				let otherLayer = $('.js-content-filter, .js-content-item, .js-content-tour');
				if(otherLayer.length){
					otherLayer.fadeOut(pageDuration, function(){
						otherLayer.remove();
					});
				}

				let hideElements = $('.header__search, .header__filter, .artists__chars, .header__jump');
				if(hideElements.length){
					hideElements.fadeOut(pageDuration, function(){
						hideElements.remove();
					});
				}

				$('.header__link').removeClass('header__link--active');
				$('.main__columns').removeClass('main__columns--show-map');
			}else{

				if(el.hasClass('landing-layer__button')){
					return;
				}

				let jumpMenu = $('.header__jump');
				if(jumpMenu.length && !content.find('.header__jump').length){
					jumpMenu.fadeOut(pageDuration, function(){
						jumpMenu.remove();
					});
				}

				let contentLeft = $('.js-content-left');
				if(contentLeft.data('id') != content.find('.js-content-left').data('id')){
					replaceContent('.js-content-left', content);
				}

				if($('.header__links .header__link--active').length && !contentLeft.find('.header__links .header__link--active').length){
					$('.header__links .header__link--active').removeClass('header__link--active');
				}

				$('.js-header-filter-button').attr('href', content.find('.js-header-filter-button').attr('href'));
			}
		}

		setColumnHeight();
	});
}

function resetSearch(){
	$('.js-search-group').removeClass('search-group-hide');
	$('.js-search-item').show();
}

function resetDatefilter(){
	let slider = $('.js-filter-date-slider'),
		valueStart = new Date(slider.data('min')).getTime() / 1000,
		valueEnd = new Date(slider.data('max')).getTime() / 1000;

	slider.slider('values', [valueStart, valueEnd]);

	$('.js-filter-date-from').text(formatDate(valueStart));
	$('.js-filter-date-to').text(formatDate(valueEnd));

	updateSliderRange();
}

function setMinHeight() {
	$('.js-min-height').each(function(){
		let item = $(this),
			ratio = item.data('ratio'),
			itemWidth = item.width(),
			itemHeight = item.height(),
			height;

		if (item.data('initheight')) {
			height =  item.data('initheight');
		} else {
			height = itemHeight
			item.data('initheight', itemHeight);
		}

		if (itemWidth / height > ratio) {
			item.css('min-height', itemWidth / ratio);
			item.find('.homeitem__text').addClass('homeitem__text--centered');
		} else {
			item.find('.homeitem__text').removeClass('homeitem__text--centered');
		}
	});
}
setMinHeight();

function updateTourLayer(){

	let url = '/my_tour';

	$.get(url, function(htmlIn){
		var content = $("<div/>").append(htmlIn.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""));

		$('.main__column--tour').find('.js-content-replace').remove();
		content.find('.main__column--tour .js-content-replace').appendTo($('.main__column--tour .custom__scroller-inner'));

		initFunctions();
	});
}

function setColumnHeight(){
	if(isMobile()){
		$('.main__column').css('height', window.innerHeight);
	}else{
		$('.main__column').css('height', '');
	}
}
setColumnHeight();

$(window).on('resize', function () {
	setMinHeight();
	setColumnHeight();
});

$(function() {

	$('html').addClass(isTouch ? 'is-touch' : 'no-touch');

	FastClick.attach(document.body);

	// New JS here

	$(document).on('click', '.js-search-button', function(){
		var conatiner = $(this).closest('.navigation__item');

		conatiner.addClass('navigation__item--search-active');

		conatiner.find('.search__form-input').focus();
	});

	$(document).on('blur', '.search__form-input', function(){

		var value = $(this).val();

		if(!value.length){
			$(this).closest('.navigation__item').removeClass('navigation__item--search-active');
		}
	});

	$(document).on('click', '.js-search-clear', function(){
		$('.search-form__input').val('');
		$('.search-form__input').blur();
		$('.main__column--events').removeClass('search-active');

		resetSearch();
	});

	$(document).on('click', '.js-date-change', function(){
		let el = $(this),
			slider = $('.js-filter-date-slider');

		if(el.data('startdate') && el.data('enddate')){
			let valueStart, valueEnd;

			if(el.hasClass('filter__item--selected')){

				let resetDate = $('.js-filter-date-slider');

				valueStart = new Date(resetDate.data('min')).getTime() / 1000;
				valueEnd = new Date(resetDate.data('max')).getTime() / 1000;

			}else{
				valueStart = new Date(el.data('startdate')).getTime() / 1000;
				valueEnd = new Date(el.data('enddate')).getTime() / 1000;
			}

			slider.slider('values', [valueStart, valueEnd]);

			$('.js-filter-date-from').text(formatDate(valueStart));
			$('.js-filter-date-to').text(formatDate(valueEnd));

			updateHeaderDate(valueStart, valueEnd);
			updateSliderRange();

			dateFilter();

			$('.js-date-change').removeClass('filter__item--selected');
			el.addClass('filter__item--selected');
		};
	});

	$(document).on('click', '.js-scroll-to-char', function(){
		let el = $(this),
			group = $('[data-group-char="'+ el.data('char') +'"]');

		if(group.length){
			if(isMobile()){
				$('html, body').animate({
					scrollTop: group.offset().top - $('header').height() - 200,
				});
			}else{
				position = group.position().top - $('header').height() - 200;
				$('.custom__scroller--left').mCustomScrollbar('scrollTo', position);
			}
		}
	});

	$(document).on('click', '.landing-layer', function(){
		$('html').addClass('landing-layer-animate');

		url = $('.js-default-url').attr('href');
		window.history.pushState(null, null, url);

		setTimeout(function(){
			$('html').removeClass('width-landing-layer landing-layer-animate');
		}, 300);
	});

	$(document).on('click', '.js-mobile-menu-button', function(){
		$('html').addClass('show-menu');
	});

	$(document).on('click', '.js-mobile-menu-close', function(){
		$('html').removeClass('show-menu');
	});

	$(document).on('click', '.js-filter-item-delete', function(){
		$(this).remove();

		checkFilterEmpty();
	});

	// $(document).on('click', '.js-filter-clear', function(){
	// 	// $('.js-filter-item-delete').remove();

	// 	// checkFilterEmpty();
	// 	location.href = location.pathname;
	// });

	$(document).on('click', '.js-search-button', function(){
		let container = $(this).closest('.header__search');

		container.addClass('header__search--active');
		container.find('.search-form__input').focus();
		$('.main__column--events').addClass('search-active');
	});

	$(document).on('blur', '.search-form__input', function(){
		let value = $(this).val();

		if(!value.length){
			$(this).closest('.header__search').removeClass('header__search--active');
		}

		$('.main__column--events').removeClass('search-active');
	});

	$(document).on('keyup', '.search-form__input', function(){
		let el = $(this),
			list = $('.js-search-items'),
			value = el.val().toLowerCase();

		list.children().filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});

        if(value.length){
            $('html').addClass('search-is-active');
        }else{
            $('html').removeClass('search-is-active');
        }

		$('.js-search-items').each(function(){
			let group = $(this).closest('.js-search-group'),
				items = $(this).find('.js-search-item:visible');

			if(items.length){
				group.removeClass('search-group-hide');
			}else{
				group.addClass('search-group-hide');
			}
		});
	});

	$(document).on('click', '.mobile-header__second-arrow', function(){
		let container = $(this).closest('.mobile-header__second');

		if(container.hasClass('mobile-header__second--open')){
			container.removeClass('mobile-header__second--open');

			container.css('height', '');
		}else{
			container.addClass('mobile-header__second--open');

			container.css('height', container.find('.mobile-header__second-inner').innerHeight() + 'px');

		}
	});

	$(document).on('click', '.js-button-tour, .js-button-fav', function(e){
		e.preventDefault();

		let button = $(this),
			id = button.data('fav-id'),
			item = button.closest('.event'),
			url = button.attr('href'),
			type = button.hasClass('js-button-fav') ? 'fav' : 'tour',
			itemscount = 0;

		$.ajax({
			url: url,
			xhrFields: {
				withCredentials: true
			},
			success: function(data){

				if(data){
					if(data.tourlimit){
						alert(data.tourlimit);
						return;
					}

					itemscount = data.itemscount;
				}

				if(button.hasClass('event__button--selected')){
					// button.removeClass('event__button--selected');
					url = url.replace('/remove/', '/add/');

					//remove
					if(button.hasClass('js-button-fav')){
						let button = $('.js-header-fav');

						button.attr('data-count', itemscount);
						button.addClass('button-changing');
						setTimeout(function() {
							button.removeClass('button-changing');
							setTimeout(function() {
								button.addClass('button-changing');
								setTimeout(function() {
									button.removeClass('button-changing');
								}, 100);
							}, 100);
						}, 100);

						if(button.attr('data-count') == 0){
							button.removeClass('with-counter');
							$('.main__columns').addClass('main__columns--no-items');
						}

						//Todo remove marker from google markers - update cluster
						if($('.js-content-left').data('id') == 'favourites'){
							$('.article__map').find('.map').removeClass('js-map--initialized').empty();
							$(initMaps);
						}

					}else{
						let button = $('.js-header-tour');

						button.attr('data-count', itemscount);
						button.addClass('button-changing');
						setTimeout(function() {
							button.removeClass('button-changing');
							setTimeout(function() {
								button.addClass('button-changing');
								setTimeout(function() {
									button.removeClass('button-changing');
								}, 100);
							}, 100);
						}, 100);

						if(button.attr('data-count') == 0){
							button.removeClass('with-counter');
						}
					}

				}else{
					// button.addClass('event__button--selected');
					url = url.replace('/add/', '/remove/');

					//add

					if(button.hasClass('js-button-fav')){
						let button = $('.js-header-fav');

						button.attr('data-count', itemscount);
						button.addClass('with-counter');
						button.addClass('button-changing');
						setTimeout(function() {
							button.removeClass('button-changing');
							setTimeout(function() {
								button.addClass('button-changing');
								setTimeout(function() {
									button.removeClass('button-changing');
								}, 100);
							}, 100);
						}, 100);

					}else{
						let button = $('.js-header-tour');

						button.attr('data-count', itemscount);
						button.addClass('with-counter');
						button.addClass('button-changing');
						setTimeout(function() {
							button.removeClass('button-changing');
							setTimeout(function() {
								button.addClass('button-changing');
								setTimeout(function() {
									button.removeClass('button-changing');
								}, 100);
							}, 100);
						}, 100);
					}
				}

				// button.attr('href', url);
				if(button.hasClass('js-button-' + type)){
					let buttonsById = $('.js-button-' + type + '[data-'+ type +'-id="' + button.data(type + '-id') + '"]');

					buttonsById.attr('href', url);

					if(button.hasClass('event__button--selected')){
						buttonsById.removeClass('event__button--selected');

						buttonsById.each(function(){
							let button = $(this),
								event = button.closest('.event');

							if(event.hasClass('js-removable') && type == 'fav'){
								event.remove();

								//close right column
								if(!$('.js-column-close').data('fav')){
									$('.js-column-close').trigger('click');
								}
							}
						});

						$('.events').each(function(){
							let group = $(this);

							if(!group.find('.event').length){
								group.remove();
							}
						});

					}else{
						buttonsById.addClass('event__button--selected');
					}

					let tourLayer = $('.main__column--tour');
					if(type == 'tour' && tourLayer.length){
						setTimeout(function(){
							updateTourLayer();
						}, 100);
					}
				}

				if($('.tourplan').length){
					calcRoute();
				}
			}
		});
	});

	$(document).on('click', '.js-button-tour-delete', function(e){
		e.preventDefault();

		$('.js-button-tour-delete').addClass('js-button-tour-delete--disable');

		let el = $(this),
			item = el.closest('.tourplan__item'),
			button = $('.js-button-tour[data-tour-id="'+ item.data('id') +'"]'),
			url = el.attr('href');

		if(button.length){
			button.removeClass('event__button--selected');
			button.attr('href', button.attr('href').replace('/remove/', '/add/'));
		}

		let headerTourButton = $('.js-header-tour'),
			setTourSize = parseInt(headerTourButton.attr('data-count')) - 1;

		headerTourButton.attr('data-count', setTourSize);

		$.get(url, function(html){});

		item.remove();

		updateTourOrder();

		if(setTourSize == 0){

			$('.js-header-tour').removeClass('with-counter');

			updateTourLayer();
			return;

		}else if(setTourSize <= 1){
			$('.tourplan__items').addClass('tourplan__items--single');
		}else{
			$('.tourplan__items').removeClass('tourplan__items--single');
		}

		setTimeout(function(){
			$('.js-button-tour-delete').removeClass('js-button-tour-delete--disable');
		}, 150);

		calcRoute();
	});

	$(document).on('click', '.js-header__filter-date-remove', function(){
		url = location.search;

		url = removeURLParameter(url, 'startdate');
		url = removeURLParameter(url, 'enddate');

		url = location.pathname + url;

		resetDatefilter();

		getContent(url, $(this));
	});

	$(document).on('mouseenter', '.article__button, .event__button', function(){
		let button = $(this);

		if(button.hasClass('js-button-fav') || button.hasClass('js-button-tour')){
			if(button.hasClass('event__button--selected')){
				button.addClass('article__button--hover');
			}
		}
	});

	$(document).on('mouseleave', '.article__button, .event__button', function(){
		let button = $(this);

		if(button.hasClass('js-button-fav') || button.hasClass('js-button-tour')){
			button.removeClass('article__button--hover');
		}
	});

	// var lastScroll;
	// $(window).on('scroll', function(){
	// 	let sTop = $(window).scrollTop(),
	// 		el = $('.js-mobile-pined');

	// 	if(sTop <= 0){
	// 		$('html').css('background-color', '#000');
	// 	}else{
	// 		$('html').css('background-color', '');
	// 	}
	// });

	$(document).on('click', '.js-link', function(e){
		e.preventDefault();

		let el = $(this),
			url;

		if($(e.target).hasClass('js-button-tour') ||
			$(e.target).closest('.js-button-tour').length ||
			$(e.target).hasClass('js-button-fav') ||
			$(e.target).closest('.js-button-fav').length){

			return;
		}

		if(el.hasClass('header__filter-button') || el.hasClass('js-header-fav')){
			$('.button-style-1--active').removeClass('button-style-1--active');
			el.addClass('button-style-1--active');

		}else if(el.hasClass('js-header-tour')){
			$('.header__filter-button').removeClass('button-style-1--active');
			el.addClass('button-style-1--active');

		}else if(!el.closest('.event').data('favitem') && !el.hasClass('filter__item')){

			//$('.button-style-1--active').removeClass('button-style-1--active');
		}

		if(el.hasClass('js-link-header')){
			let buttons = $('.js-header-tour, .js-header-fav, .js-header-filter-button');
			buttons.removeClass('button-style-1--active');

			$('.header__link').removeClass('header__link--active');
			el.closest('.header__link').addClass('header__link--active');
		}

		if($(e.target).is('a')){
			url = $(e.target).attr('href');
		}else{
			url = $(this).data('href');
		}

		let getLink = $('<a href="'+ url +'"></a>');

		if(getLink[0].hostname != location.hostname || url.substr(-3) == 'ics'){

			this.blur();
			window.open(url);
			e.preventDefault();

		}else{
			getContent(url, el);
		}
	});

	let missingContent = $('.js-load-content');
	if(missingContent.length){
		let url = missingContent.data('href');

		$.get(url, function(htmlIn){
			var content = $("<div/>").append(htmlIn.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""));

			content.find('.main__columns').children().appendTo($('.main__columns'));

			$('body').data({
				'baseurl': url,
				'basetitle': content.find('title')[0].text,
			});

			initFunctions();
		});
	}else{

		if(location.pathname == '/my_tour'){

			$('body').data({
				'baseurl': '/exhibitions/list/',
				'basetitle': 'Exhibitions',
			});

		}else{

			if(location.pathname == '/preview' || location.pathname == '/'){
				$('body').data({
					'baseurl': '/exhibitions/list/',
					'basetitle': 'Exhibitions',
				});
			}else{
				$('body').data({
					'baseurl': location.href,
					'basetitle': document.title,
				});
			}
		}
	}

	$(document).on('click', '.js-switch', function(){
		let button = $(this),
			url = button.data('url');

		if(button.data('switch') == 'map'){
			$('.main__columns').addClass('main__columns--show-map');
			$('.header__second').addClass('header__second--map-is-active');
		}else{
			$('.main__columns').removeClass('main__columns--show-map');
			$('.header__second').removeClass('header__second--map-is-active');
		}

		if(!button.data('nohistory')){
			window.history.pushState(null, null, url);
		}

		// let hideLayer = $('.js-content-item');
		// if(hideLayer.length){
		// 	hideLayer.fadeOut(pageDuration, function(){
		// 		hideLayer.remove();
		// 	});
		// }

		$('.custom-map-marker--selected').removeClass('custom-map-marker--selected');

		$('.header__filter-button:not(.js-header-filter-button)').removeClass('button-style-1--active');
	});

	$(document).on('click', '.js-overlayer-link', function(e){

		e.preventDefault();

		let url = $(this).attr('href'),
			overlayerMain = $('.overlayer__main'),
			overlayerTimer = new Date();

		overlayerMain.fadeOut(pageDuration, function(){
			overlayerMain.remove();
		});

		window.history.pushState(null, null, url);

		$.get(url, function(htmlIn){
			var content = $("<div/>").append(htmlIn.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""));

			$('.overlayer').scrollTop(0);

			content.find('.overlayer__main').hide().appendTo($('.overlayer__content'));

			$('.overlayer__menu-items').empty();
			content.find('.overlayer__menu-items').children().appendTo($('.overlayer__menu-items'));

			$('.header__first-current').text(content.find('.header__first-current').text());

			$('.js-script').each(function(){
				let script = $(this);

				if(script.data('src')){
					$("<script type='text/javascript' src='"+script.data('src')+"'></script>").insertAfter(script);
					script.remove();
				}else if(script.data('function')){
					$("<script type='text/javascript'>"+script.data('function')+"</script>").insertAfter(script);
					script.remove();
				}

			});

			let overlayerTimerEnd = new Date(),
				overlayerTimerDif = overlayerTimerEnd - overlayerTimer,
				overlayerDuration = Math.max(0, pageDuration - overlayerTimerDif)

			setTimeout(function(){
				$('.overlayer__main').fadeIn(pageDuration);
			}, overlayerDuration);
		});
	});

	$(document).on('click', '.js-overlayer-close', function(){
		let el = $(this),
			overlayer = el.closest('.overlayer');

		$('html').removeClass('with-overlayer');

		window.history.pushState(null, null, $('body').data('baseurl'));
		document.title = $('body').data('basetitle');

		$('.header__first-current').text('Exhibitions');

		overlayer.fadeOut(pageDuration, function(){
			overlayer.remove();
		});
	});

	$(document).on('click', '.js-column-close', function(){
		//$('.main__columns').removeClass('main__columns--content-show');
		let button = $(this),
			column =  button.closest('.main__column');

		if(column.data('id') == 'favourites' && isMobile() && !button.data('fav')){
			// location.href = button.data('url');
			return;
		}

		if(column.hasClass('js-content-filter')){
			$('.js-header-filter-button').removeClass('button-style-1--active');
		}

		if(column.hasClass('js-content-tour')){
			$('.main__columns').removeClass('main__columns--article-show');
			$('.header__first-current').text('Exhbitions');
		}

		if(button.data('remove')){
			window.history.pushState(null, null, $('body').data('baseurl'));
			document.title = $('body').data('basetitle');

			closeTour();
        }else if(button.data('fav') && isMobile()){

            location.href = button.data('url');

		}else if(button.data('fav')){

			$('.js-header-fav').removeClass('button-style-1--active');
			getContent(button.data('url'), $('.js-default-url'));
			return;

		}else{
			column.fadeOut(pageDuration, function(){
				column.remove();
			});

			//on close fav, no update url
			if($('.js-content-left').data('id') != 'favourites' && column.data('id') != 'filter'){

				let url = $(this).data('url');
				if(button.hasClass('js-column-article') && $('.js-content-filter').length){
					url = url + 'filter';
				}

				window.history.pushState(null, null, url);

				if($('.js-content-left').data('id') != 'favourites'){
				   document.title = $('body').data('basetitle');
				}
			}

			$('.main__columns').removeClass('main__columns--article-show main__columns--filter');
			$('.custom-map-marker').removeClass('custom-map-marker--selected');
		}

		if(button.data('close') == 'exhibitions'){
			$('.header__first-current').text(button.data('title'));
		}

		let favlayer = $('.js-fav-bg');
		if(favlayer.length){
			favlayer.show();
		}
	});

	var activeAfterPageLoad = false;
	// Keep up to date with history changes
	window.addEventListener('popstate', function(e) {
		if(location.hash){
			return false;
		}

		if(activeAfterPageLoad != false){
			location.reload();
		}

	}, false);

	$(document).on('click', '.js-entry-accordion', function(){
		let el = $(this),
			block = el.closest('.entry__accordion'),
			accordion = block.find('.entry__accordion-content');

		if(block.hasClass('entry__accordion--active')){
			accordion.slideUp(300);
			block.removeClass('entry__accordion--active');
		}else{
			accordion.slideDown(300);
			block.addClass('entry__accordion--active');
		}
	});

    if($('.js-select-entry').length){
        $('.js-select-entry').select2({
            placeholder: 'Venue*:',
        });
    }

	$(document).on('click', '.js-entry__repeat', function(){
		let button = $(this),
			item = button.closest('.entry__wrap');

		if(button.hasClass('entry__repeat-add')){
			$('.repeater-empty-item .entry__wrap').clone().insertAfter(item);

			item.find('.entry__repeat-icon')
				.removeClass('entry__repeat-add')
				.addClass('entry__repeat-remove');

		}else{
			item.remove();
		}
	});

    if($('.js-entry-form').length){
        $('.js-entry-form').ajaxForm({
            success: function (response, status, xhr, $form) {

                if(response.ok){

                    let container = $form.closest('.entry');
                    $form.remove();
                    container.html(response.thanks);

                }else{
                    if(response.missing){
                        $.each(response.missing, function(i, s){
                            let name;

                            if(s == 'artists'){
                                name = s + '[]';
                            }else{
                                name = s;
                            }

                            $form.find('[name="'+name+'"]').closest('.entry__wrap').addClass('entry__wrap--error');
                        });
                    }
                }
            },
        });
    }

	$(document).on('keyup', '.entry__input, .entry__textarea', function(){
		$(this).closest('.entry__wrap').removeClass('entry__wrap--error');
	});

	$(document).on('change', '.entry__accordion-input, .entry__select', function(){
		$(this).closest('.entry__wrap').removeClass('entry__wrap--error');
	});

    if($('.js-datepicker').length){
        $('.js-datepicker').datepicker({
            format: 'yyyy-mm-dd',
            language: 'en',
            todayHighlight: true,
            autoclose: true
        });
    }

    if($('.js-timepicker').length){
        $('.js-timepicker').timepicker({
            timeFormat: 'h:mm p',
            interval: 30,
        });
    }

	let dropzone = $('.js-dropzone');
	if(dropzone.length){

		Dropzone.autoDiscover = false

		dropzone.each(function(){
			md = new Dropzone(this, {
				addRemoveLinks: true,
				maxFiles: 3,
				url: "/file/post/",
				thumbnailWidth: 160,
				thumbnailHeight: 160,
				clickable: ".entry__dropzone-add",
				previewTemplate: $('.repeater-empty-item .dropzone-template')[0].innerHTML,
				maxFilesize: 5,
				accept: function(file, done) {
					if(file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/gif'){
						done();
					}
				},
				uploadprogress: function(e, i){
				   $(e.previewElement).closest('.entry__dropzone-item').find('.entry__dropzone-progress span').css('width', i + '%');
				},
				complete: function(file){
					let el = $(file.previewElement);

					if(file.status == 'success'){
						let response = jQuery.parseJSON(file.xhr.response);

						if(response.ok){
							el.find('.dz-remove').text('').appendTo(el.find('.entry__dropzone-image'));
							el.find('.js-dropzone-image').val(response.file);
						}
					}
				},
				error: function(file){
					this.removeFile(file);
				}
			});
		});
	}

    $(document).on('change', '.js-newsletter-checkbox', function(){
        let boxes = $('.js-newsletter-checkbox'),
            checkedBoxes = $('.js-newsletter-checkbox:checked');

        if(boxes.length == checkedBoxes.length){
            $('.js-newsletter-submit').prop('disabled', false);
        }else{
            $('.js-newsletter-submit').prop('disabled', true);
        }
    });

	$(window).on('load', function(){
		setTimeout(function(){
			activeAfterPageLoad = true;
		});
	});

	$(document)
		.on('click', 'a', function (e) {

			if($(this).closest('.js-link').length || $(this).hasClass('js-link') || $(this).hasClass('js-overlayer') || $(this).hasClass('js-button-tour') || $(this).hasClass('js-button-fav') || $(this).hasClass('js-button-tour-delete') || $(this).closest('#CybotCookiebotDialog').length){
				//Do nothing
			}else if ((this.hostname != location.hostname && $(this).attr('href').substr(0,7) != 'mailto:') || $(this).hasClass('open-in-new-tab')) {
				this.blur();
				window.open(this.href);
				e.preventDefault();
			}
		});
});
