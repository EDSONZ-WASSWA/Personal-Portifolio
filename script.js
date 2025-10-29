// Dynamic Greeting based on time of day
function updateGreeting() {
  const greetingElement = document.getElementById("greeting")
  if (greetingElement) {
    const hour = new Date().getHours()
    let greeting

    if (hour < 12) {
      greeting = "Good morning  Get to know Edson"
    } else if (hour < 18) {
      greeting = "Good afternoon  Get to know Edson"
    } else {
      greeting = "Good evening Get to know Edson"
    }

    greetingElement.textContent = greeting
  }
}

// Animated Counter for Stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const duration = 2000 // 2 seconds
    const increment = target / (duration / 16) // 60fps
    let current = 0

    const updateCounter = () => {
      current += increment
      if (current < target) {
        counter.textContent = Math.floor(current)
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target
      }
    }

    // Start animation when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(counter)
  })
}

// Animate Skill Progress Bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = entry.target.getAttribute("data-progress")
          entry.target.style.width = progress + "%"
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  skillBars.forEach((bar) => observer.observe(bar))
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// Contact Form Handling
function handleContactForm() {
  const form = document.getElementById("contactForm")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Show loading state
      const btnText = form.querySelector(".btn-text")
      const btnLoading = form.querySelector(".btn-loading")
      const submitBtn = form.querySelector('button[type="submit"]')

      btnText.classList.add("d-none")
      btnLoading.classList.remove("d-none")
      submitBtn.disabled = true

      // Simulate form submission (replace with actual API call)
      const  serviceID = "service_tssclif";
      const templateID = "template_iujadn6";
      const publicKey = "79R-JeygVnDEDvi0y";
            const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      };


      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
          const formMessage = document.getElementById("formMessage");
          formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`;
          formMessage.className = "form-message success";

          form.reset();
          setTimeout(() => {
            formMessage.style.display = "none";
          }, 5000);
        })
        .catch((error) => {
          const formMessage = document.getElementById("formMessage");
          formMessage.textContent = `Oops! Something went wrong. Please try again later.`;
          formMessage.className = "form-message error";
          console.error("EmailJS error:", error);
        })
        
    })
  }
}

// Active Navigation Link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })
}

// Smooth Scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Add fade-in animation to elements on scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Add animation to cards and sections
  const animatedElements = document.querySelectorAll(".project-card, .skill-card, .soft-skill-card, .contact-item")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Initialize all functions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  updateGreeting()
  animateCounters()
  animateSkillBars()
  handleNavbarScroll()
  handleContactForm()
  setActiveNavLink()
  initSmoothScroll()
  initScrollAnimations()

  // Log to console for debugging
  console.log("[v0] Portfolio website initialized successfully")
})

// Update greeting every minute
setInterval(updateGreeting, 60000)
