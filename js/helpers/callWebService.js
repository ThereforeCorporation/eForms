//calls a web service to load data for the form and keeps i in a hidden data field

//check if the data is loaded already / do not call the Web Service again
var jsonData = data.hiddenTest;
var htmlObj = document.getElementById("html_contain");

//url to load data from
var url =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
if (data.callWebService === true && jsonData === undefined) {
  //load the data
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        htmlObj.innerHTML = "something wrong";
      }
    })
    .then((jsonres) => {
      //save the data to the hidden component for future use
      data.hiddenTest = jsonres;
      if (jsonres.active) {
        // do more with the data, f.ex. populate
      }
    });
}
