const today = new Date();
const thisYear = today.getFullYear();

//console.log(today);
//console.log(thisYear);
const footer = document.querySelector("footer"); //Select element del pie pg used querySelector
const copyright = document.createElement("p"); // create  element parrafo
copyright.innerHTML = "&copy anamaria maldonado " + `${thisYear}`; // show up text
footer.appendChild(copyright);

/*create a new secton skill */
var skills = [
  "Effective Communication",
  "Customer Service",
  "Teamwork",
  "Time Management",
  "Decision Making Under Pressure",
  "Adaptability",
  "Organizational Skills",
  "Patience and Empathy",
  "Multitasking",
  "Financial Awareness",
  "Operational Analysis",
  "Time Studies",
  "Organizational Planning",
  "Market Research and Marketing",
  "Marketing Mix Strategies",
  "Organizational Planning",
  "Creation of Organizational Manuals",
];
const skillSection = document.getElementById("skills"); // select section id=skill
const skillsList = skillSection.querySelector("ul"); // find element  "ul" in skillSection

for (i = 0; i < skills.length; i++) {
  const skill = document.createElement("li"); // create a new list(li) element, agregando c/skill a la lista
  let skillsText = skills[i];
  skill.innerText = skillsText;
  skillsList.appendChild(skill); // colocarlo al final de la lista
}

/* crear button para esconder skills */
const btnToggle = document.querySelector(".btn-toggle"); //select the button
const skillList = skillSection.querySelector("#skills ul"); //select list skills
btnToggle.addEventListener("click", () => {
  if (skillList.style.display === "none") {
    //hide list
    btnToggle.textContent = "hide list";
    skillList.style.display = "block";
  } else {
    btnToggle.textContent = "show list";
    skillList.style.display = "none"; //show list
  }
});

/*software skills */
var skills2 = ["C++", "JavaScript", "HTML", "Git", "GitHub", "CSS"];

const skillSection2 = document.getElementById("skills2");
const skillsList2 = skillSection2.querySelector("ul");

for (let i = 0; i < skills2.length; i++) {
  const skill2 = document.createElement("li");
  let skillsText2 = skills2[i];
  skill2.innerText = skillsText2;
  skillsList2.appendChild(skill2);
}

const btnToggle2 = document.querySelector(".btn-toggle2");
btnToggle2.addEventListener("click", () => {
  if (skillsList2.style.display === "none") {
    btnToggle2.textContent = "software Skills (in process)";
    skillsList2.style.display = "block";
  } else {
    btnToggle2.textContent = "software Skills (in process)";
    skillsList2.style.display = "none";
  }
});

/*lesson 4.3 */
/* Handle Message Form Submit */
const messageForm = document.querySelector('form[name="leave_message"]');
const messageFormButton = messageForm.querySelector('button[type="submit"]');
const messageSection = document.getElementById("Message"); // Obtain the #messages section by id
const messageList = messageSection.querySelector("ul"); // Query the messageSection to find ul element

messageForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission y pg reload
  /* Obtain values from form */
  const elements = event.target.elements;
  const name = elements.UserName.value;
  const email = elements.UserEmail.value;
  const userMessage = elements.UserMessage.value;
  /* Create a new listItem to display  msm */
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<strong>${name}</strong> <a href="mailto:${email}">${email} &nbsp</a>: ${userMessage}`;

  /* create a remove button */
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  //add event listener for delate msm  clic botón "remove"
  removeButton.addEventListener("click", (ev) => {
    const entry = removeButton.parentNode;
    entry.remove();
    /* hide the msm section */
    if (messageList.children.length === 0) {
      messageSection.style.display = "none"; //hide
    }
  });

  /* create a edit button */
  const editButton = document.createElement("button");
  editButton.innerHTML = "edit";
  editButton.type = "button";
  editButton.addEventListener("click", () => {
    const newText = window.prompt("enter the new message");
    if (newText !== null) {
      const editedMessage = document.createElement("li");
      editedMessage.innerHTML = `<strong>${name}</strong> <a href="mailto:${email}">${email} &nbsp</a>: ${newText}`;
      // Create a new remove button for the edited msm
      const newRemoveButton = document.createElement("button");
      newRemoveButton.innerText = "remove";
      newRemoveButton.type = "button";
      newRemoveButton.addEventListener("click", (ev) => {
        const entry = newRemoveButton.parentNode;
        entry.remove();
        if (messageList.children.length === 0) {
          messageSection.style.display = "none";
        }
      });
      // create a new edit button for edited msm
      const NewEditedButton = document.createElement("button"); // replace current edit button with new one
      NewEditedButton.innerText = "edit";
      NewEditedButton.type = "button";
      NewEditedButton.addEventListener("click", () => {
        const newText = window.prompt("enter the new message"); // Similar edited logic as the original
        if (newText !== null) {
          entry.replaceWith(editedMessage); // create the edited message
        }
      });
      editedMessage.appendChild(newRemoveButton);
      editedMessage.appendChild(NewEditedButton);
      const entry = editButton.parentNode; // Replace the original message with the edited message
      entry.replaceWith(editedMessage);
    }
  });

  newMessage.appendChild(removeButton); //append removeButton to newMessage element
  newMessage.appendChild(editButton);
  messageForm.reset(); //clear the form fields
  messageList.appendChild(newMessage); //add new msm to the list
  messageSection.style.display = "block"; //show list msm
  console.log(name, email, userMessage); // Log values to the console
});

/*lesson 6-1*/

/*Fetch GitHub Repositories*/
/*var githubRequest = new XMLHttpRequest(); //create a XMLHttp request
githubRequest.open("GET", "https://api.github.com/users/acmv19/repos"); //open or call request
githubRequest.send(); //send the request
//Handle Response from Server

githubRequest.addEventListener("load", function (event) {
  var repositories = JSON.parse(this.response); // parsing JSON data
  console.log(repositories);

  //Display Repositories in List

  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  for (i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    var anchorTag = document.createElement("a");
    anchorTag.href = repositories[i].html_url;
    anchorTag.innerText =
      repositories[i]["name"] + " :  " + repositories[i]["description"];
    project.appendChild(anchorTag);
    projectList.appendChild(project);
  }
});*/

/*lesson 6-2 */
/*the Fetch API */
fetch("https://api.github.com/users/acmv19/repos")
  .then(function (response) {
    console.log("data");
    console.log(response);
    return response.json();
  })
  .then(function (repositories) {
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    for (i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      var anchorTag = document.createElement("a");
      anchorTag.href = repositories[i].html_url;
      anchorTag.innerText =
        repositories[i]["name"] + " :  " + repositories[i]["description"];
      project.appendChild(anchorTag);
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("look like there was a problem", error);
  });
