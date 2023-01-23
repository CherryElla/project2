
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
            location.reload(true)
        break;
        default:
            // TODO: Display any errors in submission
            console.log(response);
            break;
    }
}

// Requesting  feedView html with data from server side  with a fetch
async function getFeed () {
    let response = await fetch("/api/post/feed", {
        method: "GET"
    })
    if(response.status == 200) {
        // Getting data back and storing it in feedHTML
        let feedHTML = await response.text()
        console.log(feedHTML)
        console.log(response)
    }
}


const postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", sendPostData);

// Upload post clicked, user prompt to choose file, then rendered to modal window
function displayImg(event) {
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

