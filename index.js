document.addEventListener("DOMContentLoaded",() => {
  document.querySelector('.greeting-text').classList.add('typing-animation');
});

const projectsBtn = document.querySelector('.projects-btn');
const aboutMeBtn = document.querySelector('.about-me-btn');
const aboutContainer = document.querySelector('.about-container');
const personContainer = document.querySelector('.person-container');
const mainContainer = document.querySelector('.main-container');
const skillsContainer = document.querySelector('.skills-bar-container');
const projectContainers = document.querySelectorAll('.projects-container');

aboutMeBtn.classList.add('clicked');

projectsBtn.addEventListener('click', () => {
  aboutContainer.style.display = 'none';
  personContainer.style.display = 'none';
  skillsContainer.style.display = 'none';
  projectContainers.forEach(container => {
    container.style.display = 'block';
  });
  mainContainer.style.flexDirection = 'column';
  projectsBtn.classList.add('clicked');
  aboutMeBtn.classList.remove('clicked');
  document.querySelector('.greeting-text').classList.remove('typing-animation');
  document.querySelector('.greeting-text').style.border = 'none';
});

aboutMeBtn.addEventListener('click', () => {
  projectContainers.forEach(container => {
    container.style.display = 'none';
  });
  mainContainer.style.flexDirection = 'row';
  aboutContainer.style.display = 'block';
  personContainer.style.display = 'block';
  skillsContainer.style.display = 'flex';
  aboutMeBtn.classList.add('clicked');
  projectsBtn.classList.remove('clicked');
});