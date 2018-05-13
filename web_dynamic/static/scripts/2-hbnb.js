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
// Red is API status is OK, grey if now.
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
