
function sendPost () {
    let img = $("input.chooseFile").value
    console.log(img)

}





function displayImg (event) {
    // When upload image button clicked the user will be propted to select
    // an image from their local and it will be rendered to window modal
    let imgDiv = $("div#tempImg");
    let read = new FileReader();
    let file = event.target.files[0];

    read.onload = function (event) {
        let imageSource = event.target.result;
        imgDiv.html('<img src="' + imageSource + '"alt="dog photo">')

    };
    read.readAsDataURL(file);

}

$(document).ready(function(){

    $('input.chooseFile').on('change', displayImg);
   
});