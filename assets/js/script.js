
var cities = [];
function cityHistory(){
    cities = JSON.parse(localStorage.getItem("cities"));
    $("#memoryCity").empty();
    $(cities).each(function (i) {
      var memoryBtn = $("<button>").text(cities[i]).addClass("cityBtn");
      $("#memoryCity").append(memoryBtn).append("<br />");
    })
}
if (localStorage.getItem("cities") !== null) {
    cityHistory();
  }


$("#citySearchBtn").on("click", function (){
    event.preventDefault();
    var city = $("#cityInput").val();
 
    var searchURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&cnt=41&appid=ef5c7505816b17e601081a4d49eab811";
   
$.ajax({
    url: searchURL,
    method: "GET",
})
.then(function (data){
    console.log(data);
   // this is where we output the data for the cards we can use the index too append data to the cards
    for (i = 0; i < data.list.length; i = i + 8){ //for loop for the 3 hr weather API (multiples of 8 *3 = 24 to get daily)
        console.log(data.list[i].main.temp);
        console.log(i);    
    }
    
});
});

