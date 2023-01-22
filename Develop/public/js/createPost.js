



async function sendPostData () {
    let postForm = document.getElementById("postForm")
    let fileInput = document.getElementById("selectFile")
    let formData = new FormData(postForm)
    formData.append("image", fileInput.files[0])
    let response = await fetch ("/api/post/create", {
        method: "POST",
        body: formData
    }) 
    switch (response.status) {
        case 200:
            // TODO: Remove Modal and refresh post list
            console.log('GREAT')
            break;
        default:
            // TODO: Display any errors in submission
            console.log(response)
            break;
    }

}

const postBtn = document.getElementById("postBtn")
postBtn.addEventListener("click", sendPostData)



function displayImg (event) {
    // When upload image button clicked the user will be propted to select
    // an image from their local and it will be rendered to window modal
    let imgTag = $("#tempImg");
    let read = new FileReader();
    let file = event.target.files[0];

    read.onload = function (event) {
        let imageSource = event.target.result;
        imgTag.attr("src", imageSource)

    };
    read.readAsDataURL(file);

}

$(document).ready(function(){

    $('input.chooseFile').on('change', displayImg);
   
});