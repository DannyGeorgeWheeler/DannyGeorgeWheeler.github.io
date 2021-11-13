// Day/Night button functionality
const darkButton = document.getElementById('darklight');
toggleElements = []; // list of elements to style
// get single elements
toggleElements.push(
    document.body,                                  // body
    document.getElementById('navBar'),              // navigation bar
    document.querySelector('h1'),                   // main headings
    );
// get anchors within paragraphs
const anchors = document.querySelectorAll("p a");
anchors.forEach(anchor => {
    toggleElements.push(anchor);        
});
// get project cards
const projects = document.getElementsByClassName('projectCard');
for (let i=0; i < projects.length; i++) {
    toggleElements.push(projects[i]);
}

const toggleTheme = () => {
    console.log('the toggle');
    // toggle theme for all elements in array
    for (let i=0; i < toggleElements.length; i++) {
        toggleElements[i].classList.toggle('light');
    }
}

// check theme settings on load
const theme = localStorage.getItem('theme');

if (theme === null) {
    console.log('null on load')
    localStorage.setItem('theme', 'dark');
} else if (theme === 'light') {
    console.log('light on load');
    toggleTheme();
} else {
    console.log('dark on load');
}

darkButton.onclick = () => {
    toggleTheme();

    if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    console.log(localStorage.getItem('theme'));
};