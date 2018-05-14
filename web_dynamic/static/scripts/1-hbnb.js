// This script listens on each Amenity <input> field.
// If the checkbox is checked, the amenity is added to an object called 'selected'
// If the amenity is unchecked, it is removed from 'selected'
// The <H4> Amenity tag is updated dynamically when boxes are checked/unchecked
$(document).ready(function () {
  let amenityIds = [];
  let amenityNames = [];
  $('input').on('click', function (event) {
    if ($(this).prop('checked')) {
      amenityNames.push($(this).attr('data-name'));
      amenityIds.push($(this).attr('data-id'));
      let txt = amenityNames.join(', ');
      if (txt.length > 25) {
        $('.amenities h4').text(txt.substr(0, 25) + '...');
      } else {
        $('.amenities h4').text(txt);
      }
    } else {
      let nameIndex = amenityNames.indexOf($(this).attr('data-name'));
      let idIndex = amenityIds.indexOf($(this).attr('data-id'));
      amenityNames.splice(nameIndex, 1);
      amenityIds.splice(idIndex, 1);
      let txt = amenityNames.join(', ');
      if (txt.length > 25) {
        $('.amenities h4').text(txt.substr(0, 25) + '....');
      } else {
        $('.amenities h4').text(txt);
      }
    }
  });
});
