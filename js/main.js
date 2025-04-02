/**
 * Main JavaScript file for Prashant Gupta's Portfolio Website
 * Author: Manus AI
 * Date: April 2, 2025
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive elements
    initNavbar();
    initParticles();
    initTypingEffect();
    initSkillBars();
    initProjectModals();
    initContactForm();
    initThemeToggle();
    initScrollAnimation();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
    
    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // Reset hamburger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        });
    });
    
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Particles.js background in hero section
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    } else {
        console.warn('particles.js not loaded');
    }
}

// Typing effect in hero section
function initTypingEffect() {
    const dynamicText = document.querySelector('.dynamic-text');
    const phrases = ['Software Developer', 'Full Stack Developer', 'React Developer', 'Node.js Developer', 'Python Developer'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Remove a character
            dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Add a character
            dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // If word is complete
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at end of word
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next word
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing effect
    if (dynamicText) {
        setTimeout(type, 1000);
    }
}

// Animate skill bars on scroll
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (barPosition < screenPosition) {
                bar.style.width = `${percent}%`;
            }
        });
    }
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
}

// Project modals
function initProjectModals() {
    const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    // Project details data
    const projectDetails = {
        'Smart Attendance Based System': {
            title: 'Smart Attendance Based System',
            date: 'Oct 2019 - Dec 2019',
            description: `
                <p>A comprehensive Smart Attendance System that combines face recognition technology with IoT and RFID cards to automate and streamline the attendance process across various sectors such as companies, schools, and institutions.</p>
                
                <h4>Key Features:</h4>
                <ul>
                    <li>Face Recognition: Implemented advanced algorithms using machine learning models to accurately identify and verify individuals in real-time, ensuring reliable attendance tracking and eliminating the possibility of proxy attendance.</li>
                    <li>IoT Integration: Integrated various IoT devices for real-time data transmission, allowing seamless communication between face recognition cameras, RFID readers, and the central attendance management system.</li>
                    <li>RFID Card System: Designed and deployed an RFID card system to complement face recognition by providing an additional layer of identification, particularly useful in environments with high security or where facial recognition might be challenging.</li>
                    <li>Real-time Monitoring: Created a dashboard for administrators to monitor attendance in real-time and generate various reports.</li>
                </ul>
                
                <h4>Technologies Used:</h4>
                <p>Face Recognition Algorithms, IoT Devices, RFID Technology, Machine Learning Models, Real-time Data Transmission</p>
                
                <h4>Outcomes:</h4>
                <p>The system successfully automated the attendance process, reducing manual effort and increasing accuracy. It also eliminated the possibility of proxy attendance through its dual verification system.</p>
            `,
            tech: ['Face Recognition', 'IoT', 'RFID', 'Machine Learning']
        },
        'Interactive Dashboard': {
            title: 'Interactive Dashboard',
            date: 'Apr 2024 - Present',
            description: `
                <p>Designed and developed a comprehensive interactive dashboard using REACT and FastAPI to provide real-time data visualization and analytics to users. The dashboard features Docker-containerized backend services and RabbitMQ for real-time data streaming.</p>
                
                <h4>Key Features:</h4>
                <ul>
                    <li>Real-time Data Visualization: Created interactive charts and graphs that update in real-time as new data becomes available.</li>
                    <li>Containerized Backend: Implemented Docker-containerized backend services to enhance scalability, portability, and streamlined deployment.</li>
                    <li>Message Queuing: Developed and deployed real-time data streaming functionality utilizing RabbitMQ, facilitating instantaneous updates and notifications on the dashboard.</li>
                    <li>Efficient Data Processing: Engineered message queues and consumers for streamlined processing and distribution of data streams, enhancing system performance and scalability.</li>
                </ul>
                
                <h4>Technologies Used:</h4>
                <p>React, FastAPI, Docker, RabbitMQ, Data Visualization Libraries</p>
                
                <h4>Outcomes:</h4>
                <p>The dashboard provides users with real-time insights and analytics, enabling faster and more informed decision-making. The containerized architecture ensures easy deployment and scaling as needed.</p>
            `,
            tech: ['React', 'FastAPI', 'Docker', 'RabbitMQ']
        }
    };
    
    // Open modal with project details
    projectDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectTitle = this.closest('.project-info').querySelector('h3').textContent;
            const project = projectDetails[projectTitle];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalBody.innerHTML = project.description;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
}

// Contact form validation and submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    
    // Create a submission status element
    const formContainer = document.querySelector('.contact-form');
    const submissionStatus = document.createElement('div');
    submissionStatus.className = 'submission-status';
    formContainer.appendChild(submissionStatus);
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset errors and status
            nameError.textContent = '';
            emailError.textContent = '';
            subjectError.textContent = '';
            messageError.textContent = '';
            submissionStatus.textContent = '';
            submissionStatus.className = 'submission-status';
            
            let isValid = true;
            
            // Validate name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Validate subject
            if (subjectInput.value.trim() === '') {
                subjectError.textContent = 'Subject is required';
                isValid = false;
            }
            
            // Validate message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                isValid = false;
            }
            
            // If form is valid, handle form submission
            if (isValid) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // In a real application, this would use fetch or XMLHttpRequest to send data to a server
                // For demonstration, we'll simulate a network request with setTimeout
                submissionStatus.textContent = 'Sending your message...';
                submissionStatus.className = 'submission-status sending';
                
                setTimeout(() => {
                    // Simulate successful submission
                    submissionStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                    submissionStatus.className = 'submission-status success';
                    
                    // Reset form and button
                    contactForm.reset();
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    
                    // Clear status after 5 seconds
                    setTimeout(() => {
                        submissionStatus.textContent = '';
                    }, 5000);
                }, 1500);
                
                // Log form data to console (for demonstration purposes)
                console.log('Form submitted with data:', {
                    name: nameInput.value,
                    email: emailInput.value,
                    subject: subjectInput.value,
                    message: messageInput.value
                });
            }
        });
    }
}

// Dark/Light mode toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Scroll animations
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .education-card, .contact-item');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item, .skill-category, .project-card, .education-card, .contact-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item.animate, .skill-category.animate, .project-card.animate, .education-card.animate, .contact-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .timeline-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .timeline-item:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .skill-category:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .skill-category:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .skill-category:nth-child(4) {
            transition-delay: 0.6s;
        }
        
        .project-card:nth-child(2) {
            transition-delay: 0.3s;
        }
        
        .contact-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .contact-item:nth-child(3) {
            transition-delay: 0.4s;
        }
    `;
    document.head.appendChild(style);
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});
