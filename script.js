document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const href = this.getAttribute("href");

            // Check if the href is for the home page
            if (href === "index.html") {
                window.location.href = href;
                return; // Exit function early to prevent animation
            }

            const nextPage = document.createElement("div");
            nextPage.classList.add("page-transition");

            document.body.appendChild(nextPage);

            setTimeout(function() {
                window.location.href = href;
            }, 500); // Adjust the delay to match the animation duration
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll(".typing-animation");

    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = "";

        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            const span = document.createElement("span");
            span.textContent = char;
            span.style.animationDelay = `${i * 0.9}s`;
            element.appendChild(span);
        }
    });
});


// JavaScript to hide navigation links on mobile
window.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('header nav');

    function toggleNavLinks() {
        if (window.innerWidth < 768) {
            navLinks.style.display = 'none'; // Hide navigation links
        } else {
            navLinks.style.display = 'block'; // Show navigation links
        }
    }

    // Toggle navigation links on page load
    toggleNavLinks();

    // Toggle navigation links when window is resized
    window.addEventListener('resize', toggleNavLinks);
});

// JavaScript to dynamically add a button inside the header, at the top of the .container div
window.addEventListener('DOMContentLoaded', function() {
    const containerDiv = document.querySelector('header .container');
    const navToggleBtn = document.createElement('button');
    navToggleBtn.id = 'nav-toggle';
    navToggleBtn.classList.add('menu'); // Add the same class as the logo image
    navToggleBtn.innerHTML = '&#9776;'; // Add button content

    // Insert the button as the first child of the .container div
    containerDiv.insertBefore(navToggleBtn, containerDiv.firstChild);

    // JavaScript to toggle navigation links and show button in portrait view
    function toggleNavLinks() {
        const nav = document.querySelector('header nav');
        if (window.innerWidth < 768) {
            nav.style.display = 'none'; // Hide navigation links
            navToggleBtn.style.display = 'block'; // Show button
        } else {
            nav.style.display = 'block'; // Show navigation links
            navToggleBtn.style.display = 'none'; // Hide button
        }
    }

    // Toggle navigation links and button on page load
    toggleNavLinks();
    createMenuContainer();
    // Toggle navigation links and button when window is resized
    window.addEventListener('resize', toggleNavLinks);
});
document.getElementById("nav-toggle").addEventListener("click", function() {
    var menuContainer = document.getElementById("menuContainer");
    if (menuContainer.style.display === "block") {
      menuContainer.style.display = "none";
    } else {
      menuContainer.style.display = "block";
    }
  });


  function createMenuContainer() {
    const header = document.querySelector('header');
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';
    menuContainer.className = 'menuContainer';
  
    const links = [
      { text: 'About', href: './sources/about.html' },
      { text: 'Project', href: './sources/projects.html' },
      { text: 'Contact', href: './sources/contacts.html' }
    ];
  
    links.forEach(linkData => {
      const link = document.createElement('a');
      link.href = linkData.href;
      link.textContent = linkData.text;
      menuContainer.appendChild(link);
    });
  
    header.appendChild(menuContainer);
  }


  
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-animation');
    const text = typingElement.textContent; // Get the text content of the element
    typingElement.textContent = ''; // Clear the text content to start the typing animation
    let index = 0;
    const speed = 100; // Speed of typing in milliseconds

    function typeWriter() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

