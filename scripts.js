document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is loaded!");
});
document.querySelectorAll('.downloadBtn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const SCR part1 report (1).pdf = button.getAttribute('data-file'); // Get file path from data attribute
        const link =SCR part1 report (1).pdf; // Set file path
        link.download = SCR part1 report (1).pdf.split('/').pop(); // Use the file name from the path
        link.click(); // Programmatically click the link
    });
});
