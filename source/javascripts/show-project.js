console.log("show-project.js");

// Define projects and project image elements
const projects = document.querySelectorAll(".project");
const skills = document.querySelector(".skills");
const projectDetails = document.querySelector(".project-details");

const allProjects = projectDetails.cloneNode(true);
projectDetails.style.display = "none";
// Check if a project is hovered
projects.forEach((project) => {
  projectDetails.style.display = "none";

  project.addEventListener("click", (event) => {
    removeActiveOnSkills();
    removeStylesOnProjects();

    // add background color to project name
    const projectColor = event.target.getAttribute("data-color");
    project.style.transition = "all 0.5s ease-in-out";
    project.style.backgroundColor = projectColor;

    // display the project details
    const projectName = event.target.innerText;
    const display = allProjects.querySelector(`.${projectName}`);
    projectDetails.innerHTML = display.innerHTML;
    projectDetails.style.display = "block";


    // add active class to skills for this project
    const tools = display.getAttribute("data-tools").split(",");
    tools.forEach((tool) => {
      const tool_trimed = tool.replace(/\s/g, '')
      const skill = skills.querySelector(`.skill-list.${tool_trimed}`);
      if (skill) {
        skill.classList.add("active")
      }
    })
  });

});

function removeActiveOnSkills() {
  const actives = skills.querySelectorAll(".skill-list.active");
  if (actives) {
    actives.forEach((active) => {
      active.classList.remove("active");
    });
  }
}

function removeStylesOnProjects() {
  projects.forEach((project) => {
    project.style.backgroundColor = "";
  });
}