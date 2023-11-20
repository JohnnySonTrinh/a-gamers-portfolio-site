# [A GAMERS PORTFOLIO SITE](https://johnnysontrinh.github.io/a-gamers-portfolio-site)

![Preview of my website](./documentation/preview.png "Website Preview")

## User Experience

### User Requirements and Expectations

#### User Goals

- Visually appealing, including images.
- Easily navigated around.
- Quality and valuable content.
- Easily found contact details.

#### Site Owner's Goals

- Showcase professional gaming credentials and coaching services to attract clients seeking personal coaching in Valorant.
- Provide detailed information about coaching methods, success stories, and available sessions.
- Establish credibility through sharing testimonials and experiences from previous clients.
- Improve online visibility and attract traffic from potential clients and gaming enthusiasts.

#### Requirements

- Responsive design for a seamless experience on desktop, tablet, and mobile devices.
- Upfront and clear information about the services and value proposition of the gaming portfolio.
- A straightforward method for users to reach out via contact forms or social media.
- A design that captures the dynamic and immersive world of gaming and Valorant!

#### Expectations

- All external links, especially to social media channels, open in new tabs to facilitate easy return navigation.
- Every internal link, from navigation menus to call-to-action buttons, functions correctly guiding users without error.
- the quality and performance of the website should be consistent across all devices and screen sizes.
- All content, from biographical details to service offerings, should be current, precise and accurate.

## Wireframes

For wireframing and viual structuring of my website's layout and design, I chose to utilize [Balsamiq](http://balsamiq.com/wireframes/ "Balsamic"). This tool allowed me to meticulously plan for a user-centric interface, ensuring that the experiance remains consistent and accessible on various devices. My goal throughout the design process was to prioritize ease of use and maintain a cohesive aesthetic from one to the next.

The wireframes are below:

### [Desktop Wireframe](documentation/wireframe-desktop.png "Desktop Wireframe")

### [Tablet Wireframe](documentation/wireframe-tablet.png "Tablet Wireframe")

### [Mobile Wireframe](documentation/wireframe-mobile.png "Mobile Wireframe")

## UX

### Colors Scheme

I used [coolors.co](https://coolors.co/0d6efd-000000-212529-6c757d-ffffff "Coolors") to generate my colour palette.

![screenshot](documentation/coolors.png)

I've used CSS ':root' variables to easily update the global colour scheme by changing only one value instead of everywhere in the CSS file.

```css
:root {
  /* Primary color shades */
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  /* Secondary color shades */
  --clr-secondary: rgb(24, 5, 47);
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(210, 22%, 49%);
  /* White/black color shades */
  --clr-white: #fff;
  --clr-black: #222;
  /* Primary and secondary font families */
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  /* Commonly used CSS properties for consistency */
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.5rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --max-width: 1170px;
}
```

### Typography

- [Roboto](https://fonts.google.com/specimen/Roboto) was used for the primary headers and titles.

- [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans) was used for all other secondary text.

- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the social media icons in the footer.
