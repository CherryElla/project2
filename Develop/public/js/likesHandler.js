// Getting all like buttons
let likesBtns = document.querySelectorAll(".likeBtn");
// For each like button clicked event listen and store like button's 
// attribute and create likeData object to send
for (let btn of likesBtns) {
    btn.addEventListener("click", async () => {
        console.log("working");
        let likePostId = btn.getAttribute("data-post-id");
        let likeData = {
            post_id: parseInt(likePostId),
        };
        console.log(likePostId);
        // Use the endpoint the server defined and will listen out for
        // with particular header, method, and body
        // Body will hold the stringified post_id attatched 
        // to the like button that was clicked
        let response = await fetch("/api/post/like", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(likeData),
        });
        switch (response.status) {
            case 200:
                // get element that displays the likes
                let eachBtn = document.querySelector("#like-" + likePostId);
                // then get element's value it's displaying as a number
                let number = parseInt(eachBtn.innerHTML);
                // Increment by one and display
                number++;
                eachBtn.innerHTML = number;
                break;
        }
    });
}

// Event listener on the heart button 
let heart = document.querySelector(".heartbtn");
heart.addEventListener("click", () => {
    console.log("you clicked heart");
});
