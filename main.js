// Initialize Animate on Scroll
AOS.init();

// Waypoints

['CC2020', 'sanders', 'steyer', 'warren', 'buttigieg', 'biden'].forEach(function(id) {
  new Waypoint({
    element: document.getElementById(id),
    handler: function() {
      selectNav('#'+id)
    }
  })
})

// -------------------------------------------
// Show the selected nav link

function selectNav(id) {
  const navLinks = document.querySelectorAll('.nav-list a')
  navLinks.forEach(function(link) {
    if (link.getAttribute('href') === id) {
      link.classList.add('selected')
    } else {
      link.classList.remove('selected')
    }
  })
}

// Get a reference to the body
const body = document.querySelector('body')
// Listen for clicks
body.addEventListener('click', function(e) {
  // If a link has external class ignore it
  if (e.target.matches('.external')) {
    return
  }

  // Prevent the default behavior
  e.preventDefault()

  // Prepare to scroll
  // Get the href from the target
  const href = e.target.closest('a').href
  if (href) {
    // Select the current link
    selectNav(href)
    // Scroll to the id that matches the href
    const id = href.split('#')[1]
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
  } 
})
