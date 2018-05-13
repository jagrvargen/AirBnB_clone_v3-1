// Listens on each Amenity <input> field.
// If the checkbox is checked, the amenity is added to an object called 'selected'
// If the amenity is unchecked, it is removed from 'selected'
// The <H4> Amenity tag is updated dynamically when boxes are checked/unchecked
$(document).ready(function () {
  let amenity_ids = [];
  let amenity_names = [];
  $('input').on('click', function (event) {
    if ($(this).prop('checked')) {
      amenity_names.push($(this).attr('data-name'));
      amenity_ids.push($(this).attr('data-id'));
      let txt = amenity_names.join(', ');
      if (txt.length > 25) {
	$('.amenities h4').text(txt.substr(0,25) + '...');
      } else {
	$('.amenities h4').text(txt);
      }
      } else {
      let name_index = amenity_names.indexOf($(this).attr('data-name'));
      let id_index = amenity_ids.indexOf($(this).attr('data-id'));
      amenity_names.splice(name_index, 1);
      amenity_ids.splice(id_index, 1);
      let txt = amenity_names.join(', ');
      if (txt.length > 25) {
        $('.amenities h4').text(txt.substr(0,25) + '....');
      } else {
        $('.amenities h4').text(txt);
      }
      }
  })
});

// Toggles the API status circle in upper-right hand part of webpage
// Red is API status is OK, grey if not.
$(document).ready(function () {
    let url = 'http://0.0.0.0:5001/api/v1/status/';
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            if (data.status === 'OK')
                $('div#api_status').css('background', '#FF545F');
        },
    })
});

// Loops through all Places and displays them on web page
$(document).ready(function () {
    let url = 'http://0.0.0.0:5001/api/v1/places_search/';
    $.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify({}),
        headers: {'Content-Type': 'application/json'},
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                html = '<article>\n<div class="title">\n<h2>' + data[i].name + '</h2>' +
                       '<div class="price_by_night">' + data[i].price_by_night + '</div></div>' +
                       '<div class="information"><div class="max_guest">' +
                       '<i class="fa fa-users fa-3x" aria-hidden="true"></i>' +
                       '<br />' + data[i].max_guest + '</div>' +
                       '<div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i>' +
                       '<br />' + data[i].number_rooms + '</div>' +
                       '<div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i>' +
                       '<br />' + data[i].number_bathrooms + '</div></div>' +
                       '<div class="description">' + data[i].description + '</div></article>'
                $('section.places').append(html)
            }
        },
    })
});
