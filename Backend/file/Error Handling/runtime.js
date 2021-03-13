var windowObject;
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function openPopup() {
  windowObject = window.openObject("http://www.bbc.com/", "BBC_WindowName", strWindowFeatures);
}