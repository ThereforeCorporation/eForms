//this sample changes a logo when a certain selection is done
if (data.select === "1") {
  instance.htmlElement.innerHTML =
    "<img src='https://storage.googleapis.com/therefore_hr/Canon-Therefore.jpg' width=50% height=50%>";
} else if (data.select === "2") {
  instance.htmlElement.innerHTML =
    "<img src='https://storage.googleapis.com/therefore_hr/therefore%20logo.png' width=50% height=50%>";
}
