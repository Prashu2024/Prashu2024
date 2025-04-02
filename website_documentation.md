# Prashant Gupta's Personal Portfolio Website Documentation

## Overview
This documentation provides information about your personal portfolio website, including its features, structure, and instructions for future updates.

## Website URL
Your website is deployed and accessible at: [https://wteffxsr.manus.space](https://wteffxsr.manus.space)

## Features Implemented

### 1. Modern Design
- Professional color scheme with primary blue (#2563eb), secondary green (#10b981), and accent amber (#f59e0b)
- Clean typography using Montserrat for headings and Open Sans for body text
- Responsive layout that works on all devices (mobile, tablet, desktop)

### 2. Interactive Elements
- **Particle.js Background**: Dynamic, interactive particle network in the hero section
- **Typing Animation**: Rotating text showing different roles (Software Developer, Full Stack Developer, etc.)
- **Animated Skill Bars**: Progress bars that animate on scroll to show skill proficiency
- **Project Modals**: Detailed project information displayed in modal popups
- **Experience Timeline**: Vertical timeline showing work history with animation effects
- **Dark/Light Mode Toggle**: User preference toggle for viewing experience
- **Smooth Scroll Navigation**: Enhanced navigation between sections
- **Contact Form with Validation**: Interactive form with real-time validation

### 3. Content Sections
- Hero section with your name, title, and call-to-action buttons
- About Me section with professional summary
- Work Experience section with detailed timeline
- Technical Skills section with animated skill bars
- Projects section with interactive cards
- Education section with your academic background
- Contact section with form and contact information
- Footer with copyright information and navigation links

## Website Structure

```
website/
├── index.html          # Main HTML file with website structure
├── css/
│   └── styles.css      # CSS styling for the website
├── js/
│   └── main.js         # JavaScript for interactive elements
└── images/             # Directory for website images (currently empty)
```

## Technologies Used
- HTML5 for structure
- CSS3 with custom properties for styling
- Vanilla JavaScript for interactivity
- Particles.js for background animation
- Font Awesome for icons
- Google Fonts for typography

## How to Update the Website

### Updating Content

#### To update your personal information:
1. Edit the relevant sections in `index.html`
2. For contact information, update both the About section and Contact section

#### To add a new project:
1. In `index.html`, locate the Projects section
2. Copy an existing project card structure and modify the content
3. Add the project details to the `projectDetails` object in `main.js`

#### To update your skills:
1. Locate the Skills section in `index.html`
2. Modify the skill items and their percentages

### Updating Styling

#### To change the color scheme:
1. Open `css/styles.css`
2. Modify the CSS variables at the top of the file:
   ```css
   :root {
       --primary-color: #2563eb;
       --secondary-color: #10b981;
       --accent-color: #f59e0b;
       /* other variables */
   }
   ```

#### To change fonts:
1. Update the Google Fonts link in the `<head>` section of `index.html`
2. Modify the font variables in `css/styles.css`:
   ```css
   :root {
       --heading-font: 'Montserrat', sans-serif;
       --body-font: 'Open Sans', sans-serif;
       --code-font: 'Fira Code', monospace;
   }
   ```

### Adding Images
1. Place new images in the `images/` directory
2. Reference them in HTML using relative paths: `<img src="images/your-image.jpg">`
3. For your profile picture, replace the placeholder in the About section

### Modifying Interactive Elements

#### To change the typing animation text:
1. Open `main.js`
2. Locate the `initTypingEffect()` function
3. Modify the `phrases` array with your desired text

#### To adjust the particles background:
1. Open `main.js`
2. Locate the `initParticles()` function
3. Modify the configuration parameters to change density, color, speed, etc.

## Backup and Version Control
For future development, it's recommended to:
1. Set up a Git repository to track changes
2. Regularly backup your website files
3. Document any significant changes you make

## Support
If you need assistance with your website in the future, you can:
1. Refer to this documentation
2. Consult web development resources for HTML, CSS, and JavaScript
3. Contact a web developer for professional assistance

## License and Attribution
- Font Awesome: [https://fontawesome.com/license](https://fontawesome.com/license)
- Particles.js: [https://github.com/VincentGarreau/particles.js/](https://github.com/VincentGarreau/particles.js/)
- Google Fonts: [https://fonts.google.com/about](https://fonts.google.com/about)
