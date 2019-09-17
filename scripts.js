var greetings = "Hello World!";
var message = "<p>" + greetings + " is the phrase often used by web developers in simple websites and programs.</p>";

function helloWorld() {
  document.getElementById('functionOne').innerHTML = message;
}


function printImageAccess() {
    var imageArray = ["normal_vision.PNG", "deuteranomalia_vision.PNG", "protanopia_vision.PNG", "tritanopia_vision.PNG"];
    var imageContainer = document.getElementById("vision_images");

    imageContainer.innerHTML += "<img class = 'vision_image' src = '" + imageArray[0] + "' alt = 'How an average person sees color' id = 'vision_image" + 1 + "' />";
    imageContainer.innerHTML += "<img class = 'vision_image' src = '" + imageArray[1] + "' alt = 'How a person with deuteranomlia colorblindness sees color' id = 'vision_image" + 2 + "' />";
    imageContainer.innerHTML += "<img class = 'vision_image' src = '" + imageArray[2] + "' alt = 'How a person with protanopia colorblindness sees color' id = 'vision_image" + 3 + "' />";
    imageContainer.innerHTML += "<img class = 'vision_image' src = '" + imageArray[3] + "' alt = 'How a person with tritanopia colorblindness sees color' id = 'vision_image" + 4 + "' />";
}

printImageAccess();