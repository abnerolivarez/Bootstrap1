
// Stop the video when the modal is closed
const videoModal1 = document.getElementById('videoModalProject1');
const videoIframe1 = document.getElementById('project1Video');


const videoModal2 = document.getElementById('videoModalProject2');
const videoIframe2 = document.getElementById('project2Video');

const videoModal3 = document.getElementById('videoModalProject3');
const videoIframe3 = document.getElementById('project3Video');

const videoModal4 = document.getElementById('videoModalProject4');
const videoIframe4 = document.getElementById('project4Video');

// Add separate event listeners for each modal
videoModal1.addEventListener('hidden.bs.modal', function () {
    // Reset the src attribute to stop the video
    videoIframe1.src = videoIframe1.src;
});

videoModal2.addEventListener('hidden.bs.modal', function () {
    videoIframe2.src = videoIframe2.src;
});

videoModal3.addEventListener('hidden.bs.modal', function () {
    videoIframe3.src = videoIframe3.src;
});

videoModal4.addEventListener('hidden.bs.modal', function () {
    videoIframe4.src = videoIframe4.src;
});

