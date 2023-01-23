
// Sending the post form data to the server
async function sendPostData() {
    let postForm = document.getElementById("postForm");
    let formData = new FormData(postForm);
    formData.forEach((v, k) => {
        console.log(v, k);
    });
    let response = await fetch("/api/post/create", {
        method: "POST",
        body: formData,
    });
    switch (response.status) {
        case 200:
            // TODO: Remove Modal and refresh post list

            let post = await response.json();
            console.log(post);
            await postDataRequest()
        break;
        default:
            // TODO: Display any errors in submission
            console.log(response);
            break;
    }
}
// Requesting TESTPOSTS array from server side demo.js with a fetch
async function postDataRequest () {
    let response = await fetch("/api/post/postdata", {
        method: "GET"
    })
    if(response.status == 200) {
        // Getting TESTPOSTS back and storing it in same name variable
        let TESTPOSTS = await response.json()
        console.log(TESTPOSTS)
    }
}

const postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", sendPostData);

function displayImg(event) {
    // When upload image button clicked the user will be propted to select
    // an image from their local and it will be rendered to window modal
    let imgTag = $("#tempImg");
    let read = new FileReader();
    let file = event.target.files[0];

    read.onload = function (event) {
        let imageSource = event.target.result;
        imgTag.attr("src", imageSource);
    };
    read.readAsDataURL(file);
}

$(document).ready(function () {
    $("input.chooseFile").on("change", displayImg);
});

