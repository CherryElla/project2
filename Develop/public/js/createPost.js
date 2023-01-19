const uploadImg = document
    .querySelector(".uploadBtn")
    .addEventListener("click", uploadHandler);


function uploadHandler () {
    // When upload image button clicked the user will be propted to select
    // an image from their local and it will be rendered to window modal

}

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });