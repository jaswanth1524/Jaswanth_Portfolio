// Example:  Add a subtle hover effect to the skills
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = '#ddd';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '#eee';
    });
});
