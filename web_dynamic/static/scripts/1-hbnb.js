/*$(document).ready(function () {
    let amenities = [];
    $('input=[type=checkbox]').change (function () {
        let name = $(this).attr('data-name');
        if ($(this).is(':checked')) {
            amenities.push(name);
        } else {
            amenities = amenities.filter(amen => amen != name);
        }
        $('.amenities h4').text(amenities.join(', '))
    });
});*/

$('document').ready(function () {
    let amenities = {};
    $('INPUT[type="checkbox"]').change(function () {
      $('.amenities h4').empty();
      if ($(this).is(':checked')) {
        amenities[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete amenities[$(this).attr('data-id')];
      }
      $('.amenities H4').text(Object.values(amenities).join(', '));
    });
  });
