$('document').ready(function () {
  let amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    $('.amenities h4').empty();
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
     $('.amenities h4').text(Object.values(amenities).join(', '));
  });
});

$.get('http://localhost:5001/api/v1/status', function (query, status) {
        if (query.status === 'OK') {
          $('div#api_status').addClass('available')
          console.log("working");
        }
      })