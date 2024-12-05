document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is loaded!");
});
const downloadBtn = document.getElementById(".btndownloadBtn");
const downloadLink = document.getElementById("downloadLink");

// Add a click event listener to the button
downloadBtn.addEventListener("click", function() {
    // Trigger a click event on the hidden link to start the download
    downloadLink.click();
});