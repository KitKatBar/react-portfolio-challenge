# React Portfolio Challenge - Go, Plus Ultra!
  
## Description

A portfolio of work can showcase your skills and talents to employers looking to fill a part-time or full-time position. An effective portfolio highlights your strongest work as well as the thought processes behind it. Being a web developer means being part of a community. You’ll need a place to share your projects not only if you're applying for jobs or working as a freelancer but also so that you can share your work with fellow developers and collaborate on future projects.

After learning all these new technologies and completing various other projects, I have reworked my professional portfolio using React.  This application is a single-page application that has a static header and footer and renders each page of the portfolio based on which navigation link is currently clicked on.  React is a JavaScript library for developing and creating interactive UIs, which made it painless to create.  CSS was also used to design the display and layout of the website.
        
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

        
## Installation

No installation is required! This code has been deployed to Netlify so that you can view it on your own device. To do so, please visit the following link: https://kitkatbar-react-portfolio.netlify.app/

## Usage

Please refer to the following image showing the functionality of the application.  When the page is first loaded, you should see a header, the site icon, a navigation bar with the links to 'About Me', 'Portfolio', 'Contact' and 'Resume'.  By default, the 'About Me' page is loaded into the content section of the website and the text is also displayed in a different color to indicate which page is being rendered.  Additionally, there will be a footer below the site which has icons linking to my various social media accounts.  Hovering over each icon will give a little enlarging animation. Clicking on one of the icons will bring you to my social media page where you can find me. For email, clicking on the icon will open up whichever mail application you are using and autofill the recipient to my email address. For phone, clicking on the icon will open up your phone application, but I am currently not giving out my number so please don't call me randomly (you can't even if you tried). You can also resize the page and all the contents will be adjusted accordingly.

![image showing layout of the about me page for larger devices](https://github.com/KitKatBar/react-portfolio-challenge/blob/main/src/assets/images/about-me-large.png?raw=true)

![image showing layout of the about me page for smaller devices](https://github.com/KitKatBar/react-portfolio-challenge/blob/main/src/assets/images/about-me-small.png?raw=true)

Clicking on the 'Portfolio' button with render the portfolio section.  You will see various projects that I have worked on in the past. Hovering over each project will give a little highlight and an enlarging animation. Clicking on one of the projects will bring you to the application's deployed website. Additionally, you will see a GitHub icon in the top right for each of the projects.  It will already look animated because it is contained within the same element as the project contents, but you can actually hover over it, which will produce another highlight effect. Clicking on the GitHub icon will take you to that respective project's GitHub repository.

![image showing layout of the portfolio page](https://github.com/KitKatBar/react-portfolio-challenge/blob/main/src/assets/images/portfolio.png?raw=true)

Clicking on the 'Contact' button will render the contact section.  You will see a contact form with the fields of 'Name', 'Email' and 'Message'.  This form uses validation to ensure that the form is correctly filled out before submission.  If the user moves their cursor out of any field without filling it out, an error message telling them to fill out the form will display.  If the user enters an invalid e-mail address, an error message telling them to enter a valid e-mail will display.  Attempting to submit the form without correctly passing any of these validations will also display an error message.  Once the user has correctly filled out the form and hit submit, a message thanking them for their response will display.  The form will then reset and the user can fill out another from if they choose to.  Currently, there is no actual e-mail being sent as it is not set-up (and also because it was not required) so that will be implemented in a future update using emailJS.

![image showing layout of the contact page](https://github.com/KitKatBar/react-portfolio-challenge/blob/main/src/assets/images/contact.png?raw=true)

![image showing the message that is displayed if the form is not filled out](https://github.com/KitKatBar/react-portfolio-challenge/blob/main/src/assets/images/contact-fill-form.png?raw=true)

![image showing the message that is displayed if the email is not valid](https://github.com/KitKatBar/react-portfolio-challenge/blob/main/src/assets/images/contact-invalid-email.png?raw=true)

![image showing the message that is displayed if the form is successfully submitted](https://github.com/KitKatBar/react-portfolio-challenge/blob/main/src/assets/images/contact-success.png?raw=true)

Clicking on the 'Resume' button will render the resume section.  You will see an icon that you can click on to download a PDF version of my resume.  Additionally, you will see several boxes listing my various skills and proficiencies that I have learned over the course of my software development career.  These skillsets include front-end, back-end and working with other technologies.  I have categorized most of them as best as possible and made sure they were evenly distributed so that the layout display of the page is smoother.

![image showing layout of the resume page](https://github.com/KitKatBar/react-portfolio-challenge/blob/main/src/assets/images/resume.png?raw=true)
        
## Credits

Video tutorial on how to add an animated background in React: https://www.youtube.com/watch?v=LSRNmhLS76o

Animated background: https://wallpaperwaifu.com/anime/hu-tao-genshin-impact-4k-live-wallpaper/

Icons that I used: https://genshin-impact.fandom.com/wiki/Chat/Gallery

Hover effects that I used for the navigation bar: https://css-tricks.com/css-link-hover-effects/

Color palettes that matches the theme:
https://www.hoyolab.com/article/19311996
https://www.pinterest.com/pin/1086212003856676928/
https://www.pinterest.com/pin/1086212003856676925/

Other sites and resources that were helpful:
https://www.w3schools.com/
https://developer.mozilla.org/en-US/docs/Web/CSS/
https://stackoverflow.com/
https://www.tutorialspoint.com/index.htm
https://www.geeksforgeeks.org/

Any other sites that I used for reference that I forgot (oops!).

Google Images for providing all the images and icons I needed to design my portfolio.

Canva for letting me create a custom logo for free!

Our instructor Drew Hoang for introducing us to React this week which has provided us with an easy to use JavaScript library and framework that creates interactive UIs. He provides good metaphors for how to do exercises and also makes speed-run videos that are very insightful for providing information and for reviewing class material.

Our TA Kyle Vance for his continued guidance during class and taking the time to explain new concepts. He continues to provide direction for students and is straight to the point in his explainations.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project was built using the MIT License. Please refer to the LICENSE in the repo for more information.
          
## How to Contribute

You can contribute to this project by providing any additional Hu Tao assets!  Having a header and footer that matches with the theme of the background will make the website look a lot more aesthetically pleasing.  Additionally, having matching custom assets for the containers holding the projects, contact form or skillsets will also contribute greatly!

## Questions

This project was created by KitKatBar.
    
Click on [this link](https://github.com/KitKatBar) to see more of my other works!

Have additional questions about this project?  You can reach out to me with any inquiries at: katriel_chiu@msn.com
