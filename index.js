const urlList = document.querySelector("#what");
const urlForm = document.getElementById("url-form");

console.log(urlList, urlForm);

// Fetch all URLs and display them in the list
fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((videoURLs) => {
        videoURLs.forEach((videoURL) => {
            const li = document.createElement("li");
            li.textContent = videoURL.videoURL;
            urlList.appendChild(li);
            console.log(videoURLs, videoURL);
        });
    });

// // Handle form submission to add a new URL
// urlForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const vidURL = urlForm.elements.vidURL.value;
//     fetch("http://localhost:3000/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ vidURL }),
//     })
//         .then((response) => response.json())
//         .then((videoURL) => {
//             const li = document.createElement("li");
//             li.textContent = videoURL;
//             urlList.appendChild(li);
//             urlForm.reset();
//         });
// });
