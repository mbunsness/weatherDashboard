



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
 
    for (i = 0; i < data.list.length; i = i + 8){ //for loop for the 3 hr weather API (multiples of 8 *3 = 24 to get daily)
        console.log(data.list[i].main.temp);
        console.log(i);
        
    }
});
});

