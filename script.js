$(document).ready(function() {
  var search =$("#btnSubmit");
  search.click(function(){
  var userChoice = $("#country").val();

   
var worldCapitals = 
    {"United States" : {capital: "Washington D.C.", animal: "Bald Eagle", language: "English", population: "315,000,000"},
     "United Kingdom":  {capital: "London", animal: "Lion", language: "English", population: "64,000,000"},
     "China" : {capital: "Beijing", animal: "Panda", language: "Chinese", population: "1,300,000,000"}, 
     "Bangladesh" : {capital: "Dhaka", animal: "Bengal Tiger", language: "Bengali", population: "156,000,000"}
    };
    
    var info = worldCapitals[userChoice];
    
     $('#results').append($('<li></li>')
      .text(
                  "Capital:" + info["capital"] + " || National Animal:" + info["animal"] + " || National Language:" + info["language"] + " || population:" + info["population"]
       
       ));
          
          
  });
});
