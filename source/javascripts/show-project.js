// console.log("show-project.js");

// // define projects
// const projects = document.querySelectorAll(".project");
// const projectImage = document.querySelector(".project-image");
// console.log(projects);

// // check if one project is hovered
// projects.forEach((project) => {

//   project.addEventListener("mouseover", (event) => {
//     console.log("mouseover");
//     console.log(project.innerHTML);
//     const projectName = project.innerHTML;

//     projectImage.classList.add("move-image");
//     projectImage.innerHTML = `<img src="../images/projects/${projectName}/00.png" alt="project image"/>`;
//   });
//   project.addEventListener("mouseout", (event) => {

//       projectImage.innerHTML = "";
//   });
// });

console.log("show-project.js");

// Define projects and project image elements
const projects = document.querySelectorAll(".project");
const projectImage = document.querySelector(".project-image");

// Store the currently displayed project image
let currentProjectImage = null;

// Check if a project is hovered
projects.forEach((project) => {
  project.addEventListener("mouseover", (event) => {
    console.log("mouseover");
    console.log(project.innerHTML);
    const projectName = project.innerHTML.replace(/\s+/g, '');

    // Create a new image element and set its source
    const newImage = document.createElement("img");
    newImage.src = `../images/projects/${projectName}/00.png`;
    console.log("*" + projectName +"*");

    newImage.alt = "project image";
    newImage.classList.add("fade-in");

    // Remove the fade-out class from the project image to reset the animation
    projectImage.classList.remove("fade-out");

    // Remove the current project image if exists
    if (currentProjectImage) {
      projectImage.removeChild(currentProjectImage);
      // remove background color from projectImage
      projectImage.style.backgroundColor = "";
    }

    //add arrow to project innerhtml
    project.innerHTML = '<i class="fas fa-arrow-right"></i>'+ '  ' + project.innerHTML;
    // add background color to projectImage
    projectImage.style.backgroundColor = project.id;
    // Append the new image to the project image container
    projectImage.appendChild(newImage);

    // Update the current project image
    currentProjectImage = newImage;
  });

  project.addEventListener("mouseout", (event) => {

    // remove arrow i tag from project innerhtml
    project.innerHTML = project.innerHTML.slice(30);
    // Add the fade-out class to initiate the fade-out transition
    projectImage.classList.add("fade-out");

    // Remove the current project image after the fade-out animation ends
    currentProjectImage.addEventListener("animationend", () => {
      projectImage.removeChild(currentProjectImage);
      currentProjectImage = null;
      // remove background color from projectImage
      projectImage.style.backgroundColor = "";
    });
  });
});
