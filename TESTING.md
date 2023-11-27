# Testing

Return back to the [README.md](README.md) file.

## Code Validation

Use the space to discuss code validation for any of your own code files (where applicable).
You are not required to validate external libraries/frameworks, such as imported Bootstrap, Materialize, Font Awesome, etc.

**IMPORTANT**: You must provide a screenshot for each file you validate.

**PRO TIP**: Always validate the live site pages, not your local code. There could be subtle/hidden differences.

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL                                                                                                               | Screenshot                                            | Notes                              |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2FJohnnySonTrinh.github.io%2Fa-gamers-portfolio-site%2Findex.html) | ![screenshot](documentation/html-validation-home.png) | Section lacks header h2-h6 warning |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File      | Jigsaw URL                                                                                                                   | Screenshot                                            | Notes           |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2FJohnnySonTrinh.github.io%2Fa-gamers-portfolio-site) | ![screenshot](documentation/css-validation-style.png) | Pass: No Errors |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser                                                                                               | Home                                                  | About                                                  | Contact                                                  | etc                                                  | Notes                 |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------- | --------------------- |
| ![Chrome](https://raw.githubusercontent.com/TravelTimN/markdown-builder/main/assets/img/chrome.png)   | ![screenshot](documentation/browser-chrome-home.png)  | ![screenshot](documentation/browser-chrome-about.png)  | ![screenshot](documentation/browser-chrome-contact.png)  | ![screenshot](documentation/browser-chrome-etc.png)  | Works as expected     |
| ![Firefox](https://raw.githubusercontent.com/TravelTimN/markdown-builder/main/assets/img/firefox.png) | ![screenshot](documentation/browser-firefox-home.png) | ![screenshot](documentation/browser-firefox-about.png) | ![screenshot](documentation/browser-firefox-contact.png) | ![screenshot](documentation/browser-firefox-etc.png) | Works as expected     |
| ![Edge](https://raw.githubusercontent.com/TravelTimN/markdown-builder/main/assets/img/edge.png)       | ![screenshot](documentation/browser-edge-home.png)    | ![screenshot](documentation/browser-edge-about.png)    | ![screenshot](documentation/browser-chrome-edge.png)     | ![screenshot](documentation/browser-edge-etc.png)    | Works as expected     |
| ![Safari](https://raw.githubusercontent.com/TravelTimN/markdown-builder/main/assets/img/safari.png)   | ![screenshot](documentation/browser-safari-home.png)  | ![screenshot](documentation/browser-safari-about.png)  | ![screenshot](documentation/browser-safari-contact.png)  | ![screenshot](documentation/browser-safari-etc.png)  | Minor CSS differences |
| ![Brave](https://raw.githubusercontent.com/TravelTimN/markdown-builder/main/assets/img/brave.png)     | ![screenshot](documentation/browser-brave-home.png)   | ![screenshot](documentation/browser-brave-about.png)   | ![screenshot](documentation/browser-brave-contact.png)   | ![screenshot](documentation/browser-brave-etc.png)   | Works as expected     |
| ![Opera](https://raw.githubusercontent.com/TravelTimN/markdown-builder/main/assets/img/opera.png)     | ![screenshot](documentation/browser-opera-home.png)   | ![screenshot](documentation/browser-opera-about.png)   | ![screenshot](documentation/browser-opera-contact.png)   | ![screenshot](documentation/browser-opera-etc.png)   | Minor differences     |
| repeat for any other tested browsers                                                                  | x                                                     | x                                                      | x                                                        | x                                                    | x                     |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device                               | Home                                                     | About                                                     | Contact                                                     | etc                                                     | Notes                               |
| ------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------- |
| Mobile (DevTools)                    | ![screenshot](documentation/responsive-mobile-home.png)  | ![screenshot](documentation/responsive-mobile-about.png)  | ![screenshot](documentation/responsive-mobile-contact.png)  | ![screenshot](documentation/responsive-mobile-etc.png)  | Works as expected                   |
| Tablet (DevTools)                    | ![screenshot](documentation/responsive-tablet-home.png)  | ![screenshot](documentation/responsive-tablet-about.png)  | ![screenshot](documentation/responsive-tablet-contact.png)  | ![screenshot](documentation/responsive-tablet-etc.png)  | Works as expected                   |
| Desktop                              | ![screenshot](documentation/responsive-desktop-home.png) | ![screenshot](documentation/responsive-desktop-about.png) | ![screenshot](documentation/responsive-desktop-contact.png) | ![screenshot](documentation/responsive-desktop-etc.png) | Works as expected                   |
| XL Monitor                           | ![screenshot](documentation/responsive-xl-home.png)      | ![screenshot](documentation/responsive-xl-about.png)      | ![screenshot](documentation/responsive-xl-contact.png)      | ![screenshot](documentation/responsive-xl-etc.png)      | Scaling starts to have minor issues |
| 4K Monitor                           | ![screenshot](documentation/responsive-4k-home.png)      | ![screenshot](documentation/responsive-4k-about.png)      | ![screenshot](documentation/responsive-4k-contact.png)      | ![screenshot](documentation/responsive-4k-etc.png)      | Noticeable scaling issues           |
| Google Pixel 7 Pro                   | ![screenshot](documentation/responsive-pixel-home.png)   | ![screenshot](documentation/responsive-pixel-about.png)   | ![screenshot](documentation/responsive-pixel-contact.png)   | ![screenshot](documentation/responsive-pixel-etc.png)   | Works as expected                   |
| iPhone 14                            | ![screenshot](documentation/responsive-iphone-home.png)  | ![screenshot](documentation/responsive-iphone-about.png)  | ![screenshot](documentation/responsive-iphone-contact.png)  | ![screenshot](documentation/responsive-iphone-etc.png)  | Works as expected                   |
| repeat for any other tested browsers | x                                                        | x                                                         | x                                                           | x                                                       | x                                   |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page    | Mobile                                                     | Desktop                                                     | Notes                                   |
| ------- | ---------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------- |
| Home    | ![screenshot](documentation/lighthouse-home-mobile.png)    | ![screenshot](documentation/lighthouse-home-desktop.png)    | Some minor warnings                     |
| About   | ![screenshot](documentation/lighthouse-about-mobile.png)   | ![screenshot](documentation/lighthouse-about-desktop.png)   | Some minor warnings                     |
| Gallery | ![screenshot](documentation/lighthouse-gallery-mobile.png) | ![screenshot](documentation/lighthouse-gallery-desktop.png) | Slow response time due to large images  |
| x       | x                                                          | x                                                           | repeat for any other tested pages/sizes |
