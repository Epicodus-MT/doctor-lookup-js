var apiKey = require('../.env').apiKey;

function DoctorFinder() {

}

// DoctorFinder.prototype.getDoctors = function(location, getCount) {
//   $.get('https://doctorindex...').then(function(response) {
//     getCount(location, response.proximity);
//     console.log(JSON.stringify(response));
//   }).fail(function(error) {
//     $('.portland-doctors').text(error.responseJSON.message);
//   });
// };

DoctorFinder.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
     console.log(result);
     var list = $('#doctor-list');
     result['data'].forEach(function(item) {
       var profile = item['profile'];
       list.append('<li>'
       + profile['first_name']
       + ' '
       + profile['last_name']
       + ', '
       + profile['title']
       + '</li>');
     });
   })
  .fail(function(error){
     console.log("fail");
   });
};

exports.doctorModule = DoctorFinder;
