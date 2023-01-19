// New Post
async function newFormHandler(event) {
  event.preventDefault();

  // Get the post title and content
  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert(response.statusText);
  }
}

// Event Listener for the submit button
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
