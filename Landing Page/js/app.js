/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
let navbarUL = document.getElementById("navbar__list");
let buildNum = 1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
const secBuilder = function(buildNum) {
    const main = document.querySelector("main");
    main.innerHTML += `<section class="section${buildNum}" id="section${buildNum}" data-nav="Section ${buildNum}">
    <div class="landing__container">
        <h2>Section ${buildNum}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
            eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
            in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
            porttitor tortor, eget elementum tortor mollis non.</p>
    </div>`;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
const navBuilder = function(buildNum) {
    navbarUL.innerHTML += `<li id="li${buildNum}"> <a href="#section${buildNum}" class="menu__link" data-nav="Section ${buildNum}">section ${buildNum}</a></li>`;
}


const create = function() {
    navBuilder(buildNum);
    secBuilder(buildNum);
    buildNum++
}

create();
create();
create();
create();
// Add class 'active' to section when near top of viewport
const sections = document.querySelectorAll("section");

window.onscroll = function() {
    sections.forEach(sec => {
        if (
            sec.getBoundingClientRect().top >= -100 &&
            sec.getBoundingClientRect().top <= 300
        ) {
            sec.classList.add("active")
        } else {
            sec.classList.remove("active");
        }
    });
};
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click



// Set sections as active