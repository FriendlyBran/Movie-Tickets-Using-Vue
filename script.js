
// Vue
var app = new Vue({
    el: "#app",
    data: {

    }
})
// Vue object




// Get movie/now playing
var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=247fff16fe4facefa700609d4292f178");

xhr.send(data);