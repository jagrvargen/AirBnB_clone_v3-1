// This script listens on each Amenity <input> field.
// If the checkbox is checked, the amenity is added to an object called 'selected'
// If the amenity is unchecked, it is removed from 'selected'
// The <H4> Amenity tag is updated dynamically when boxes are checked/unchecked

$(document).ready(function () {
    let selected_ids = [];
    let selected_names = [];
    $('.amenities li input').click( function() {
        selected_ids.push($('.amenities li input').attr('data-id'));
        selected_names.push($('.amenities li input').attr('data-name'));
        $('.amenities h4').text(selected_names);
    });
});
