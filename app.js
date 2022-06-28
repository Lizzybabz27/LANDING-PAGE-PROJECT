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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


/**
 * declaration of global variables

 */
// an array from the sections in the HTML is created
    const sections = Array.from(document.querySelectorAll('section'));


// i called the id navbar__list which is the unordered list (ul)
    const navlist = document.querySelector('#navbar__list');


//function to create Link Anchor 
// i created a function and loop through each element in the array

function createAnchor(){
for (let i = 0; i < sections.length; i++){
  
    // get the data set from each element in the array and also the ID
        sectionName = sections[i].getAttribute('data-nav');
        theID = sections[i].getAttribute('id');
   
    // i created a list of LI element and used the anchor tag inorder to easily scroll through the pages
        listedItems = document.createElement('li');
        listedItems.innerHTML = `<a class = "menu__link" id = 'scroll'> ${sectionName} </a>`;


    // Appending the list as the ul child
        navlist.appendChild(listedItems);
  }
}

// running the function
// the createAnchor function is then called to execution
    createAnchor();


//function to get the view port and to add your-active-class  to the section visible in the viewport
// for the viewport, i had to call the sections again as an array
const rect = Array.from(document.querySelectorAll("section"));

// loop through each sections
    for (let rects of rect){
        const box = rects.getBoundingClientRect().top;
         console.log(box);
//   create an addEventlistener that will display active in the class when a particular section is in the viewport.
          document.addEventListener('scroll', function(){
          console.log(window.innerHeight);
    if (rects.getBoundingClientRect().top >= -400 && rects.getBoundingClientRect().top <=150){
          const list = rects.classList;
          list.add('active');  
    }


    else {const list = rects.classList;
          list.remove('active');}
})} 



// i called the 'li' element in an Array and added class to each li element 
      const li = Array.from(document.querySelectorAll('li'));
          li[0].classList.add('li1');
          li[1].classList.add('li2');
          li[2].classList.add('li3');
          li[3].classList.add('li4');


// By Using the eventlistener, when any of the Li element is clicked, 
// it would scroll to the section
    const section1 =document.querySelector('#section1');
    const li1 = document.querySelector('.li1');
    console.log(li1);


li1.addEventListener('click', function(){
    section1.scrollIntoView ({block: 'start', behavior: 'smooth'});
    });

    const section2 =document.querySelector('#section2');
    const li2 = document.querySelector('.li2');
    console.log(li2)

li2.addEventListener('click', function(){
    section2.scrollIntoView ({block: 'start', behavior: 'smooth'});
    });

    const section3 =document.querySelector('#section3');
    const li3 = document.querySelector('.li3');
    console.log(li1);

li3.addEventListener('click', function(){
    section3.scrollIntoView ({block: 'start', behavior: 'smooth'});
    });

    const section4 =document.querySelector('#section4');
    const li4 = document.querySelector('.li4');
    console.log(li4);

li4.addEventListener('click', function(){
    section4.scrollIntoView ({block: 'start', behavior: 'smooth'});
    });


// I called the section element and the li element in an Array
    const recta = Array.from(document.querySelectorAll("section"));
    const navvi = Array.from(document.querySelectorAll('li'));



// The eventlistener listens for for scroll. 
  document.addEventListener('scroll', function(){

    if (recta[3].getBoundingClientRect().top >= -400 && 
        recta[3].getBoundingClientRect().top <=150){
        navvi[3].classList.add('show');
        }
    else {navvi[3].classList.remove('show');}
        }) 



      const trectss = Array.from(document.querySelectorAll("section"));
      const thenavigat = Array.from(document.querySelectorAll('li'));



  document.addEventListener('scroll', function(){

    if (recta[2].getBoundingClientRect().top >= -400 && recta[2].getBoundingClientRect().top <=150){
        navvi[2].classList.add('show');
        }
    else {navvi[2].classList.remove('show');}
        }) 


      const trectsss = Array.from(document.querySelectorAll("section"));
      const navvigat = Array.from(document.querySelectorAll('li'));



  document.addEventListener('scroll', function(){

    if (recta[1].getBoundingClientRect().top >= -400 && recta[1].getBoundingClientRect().top <=150){
        navvi[1].classList.add('show');
        }
    else {navvi[1].classList.remove('show');}
        }) 



       const finale = Array.from(document.querySelectorAll("section"));
       const navigat = Array.from(document.querySelectorAll('li'));



  document.addEventListener('scroll', function(){



    if (recta[0].getBoundingClientRect().top >= -400 && recta[0].getBoundingClientRect().top <=150){
        navvi[0].classList.add('show');
        }
    else {navvi[0].classList.remove('show');}
        }
        ) 