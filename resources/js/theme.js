// Day/Night button functionality
const darkButton = document.getElementById('darklight');
toggleElements = []; // list of elements to style
// get single elements
toggleElements.push(
    document.body,
    document.getElementById('navBar'),
    document.querySelector('h1'),
    );
// get secondary headings
const headings2 = document.querySelectorAll('h2');
headings2.forEach(heading => {
    toggleElements.push(heading);        
});
// get anchors within paragraphs and lists
const anchors = document.querySelectorAll('p a, li a');
anchors.forEach(anchor => {
    toggleElements.push(anchor);        
});
// get python logo
const python = document.getElementById('python');
if (python != null) toggleElements.push(python);    // if python logo exists (page = about)
// get project cards
const projects = document.getElementsByClassName('projectCard');
for (let i=0; i < projects.length; i++) {
    toggleElements.push(projects[i]);
}
// get navbar links
const navButtons = document.getElementsByClassName('navButton');
for (let i=0; i < navButtons.length; i++) {
    toggleElements.push(navButtons[i]);
}
// get toolbar links
const toolButtons = document.getElementsByClassName('toolButton');
for (let i=0; i < toolButtons.length; i++) {
    toggleElements.push(toolButtons[i]);
}

const toggleTheme = () => {
    // toggle theme for all elements in array
    for (let i=0; i < toggleElements.length; i++) {
        toggleElements[i].classList.toggle('light');
    }
}

// check theme settings on load
const theme = localStorage.getItem('theme');

if (theme === null) {
    localStorage.setItem('theme', 'dark');
} else if (theme === 'light') {
    toggleTheme();
    document.getElementById('darklight').innerHTML = '<i class="fas fa-sun"></i>';
}

darkButton.onclick = () => {
    toggleTheme();

    if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
        document.getElementById('darklight').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        document.getElementById('darklight').innerHTML = '<i class="fa fa-moon"></i>';
    }
};