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
  "effective communication",
  "customer service",
  "teamwork",
  "time management",
  "decision making under pressure",
  "adaptability",
  "Organizational skills",
  "Patience and empathy",
  "Multitasking",
  "Financial awareness",
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
