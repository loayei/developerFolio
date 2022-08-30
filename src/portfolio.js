/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "0x NoTomato",
  title: "Hi all, I'm Loayei",
  subTitle: emoji(
    "A passionate Blockchain Software Developer 🚀 with an experience in building Mobile and Web applications with React/Javascript/Next.js and Solidity."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/loayei",
  gmail: "loayei@gmail.com",
  twitter: "https://twitter.com/loayei",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, Fullerton",
      logo: require("./assets/images/CSUF.svg"),
      subHeader: "Masters of Science in Computer Science",
      duration: "Fall 2022"
    },
    {
      schoolName: "California State University, Fullerton",
      logo: require("./assets/images/CSUF.svg"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "August 2017 - May 2021",
      desc:
        "Ranked top 10% in the program. Took courses on Software Engineering, Blockchain, Operating Systems, Algorithms, Data Structures, and Computer Networks."
    }
  ]
};

// Skills Section

const skillsSection = {
  title: "What I am",
  subTitle: "Computer Enthusiast 💻 and Blockchain Developer 📈",
  skills: [emoji(""), emoji(""), emoji("")],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient  stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", // Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Cloud Developer",
      company: "IBM",
      companylogo: require("./assets/images/IBM.svg"),
      date: "July 2022 – Present",
      desc: "",
      descBullets: ""
    },
    {
      role: "Treasurer / Master of Coin",
      company: "TuffyVerse",
      companylogo: require("./assets/images/TuffyLogo.webp"),
      date: "March 2021 – Present",
      desc:
        "A group of Crypto advocates live in our own Metaverse, TuffyVerse. Originally, Blockchain Club at California State University, Fullerton.",
      descBullets: [
        "Responsible for the managing the TuffyVerse group's finances, including the creation of a new cryptocurrency, TUFFYTOKEN",
        "www.tuffyverse.com"
      ]
    },
    {
      role: "Backend Developer",
      company: "Paramount",
      companylogo: require("./assets/images/paramount.avif"),
      date: "August 2017 – July 2022",
      desc:
        "Worked on the Video Technology team to develop services and infrastructure to stream videos across multiple regions and availability zones",
      descBullets: [
        "Setup and maintained infrastructure both on-prem and in the major public clouds including AWS, GCP and Azure",
        " Worked on the Super Bowl team to improve failover technologies at the application and infrastructure levels",
        "Worked on the micro flock team to develop an in-house tool for on-demand video editing in Go",
        "Worked on the bakery team to develop an in-house video encoding tool in Go"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md*/

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements, Certifications and Hackathons 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Hackathons attended",

  achievementsCards: [
    {
      title: "Avalanche Devcon",
      subtitle: "Accepted to the Avalanche Summit Hackathon, Barcelona, Spain",
      image: require("./assets/images/Avalanche.png"),
      footerLink: [
        {
          name: "Website",
          url: "https://hackathon.avalanchesummit.com/home"
        }
      ]
    },
    {
      title: "Near Academy",
      subtitle: "Completed Near Academy Certification",
      image: require("./assets/images/a4.jpg"),
      footerLink: [
        {
          name: "Website",
          url: "https://near.academy"
        }
      ]
    },
    {
      title: "Encode Club BootCamp",
      subtitle: "Solana / RUST Bootcamp",
      image: require("./assets/images/encode.jpg"),
      footerLink: [
        {
          name: "Website",
          url: "https://encode.club"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "loayei", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
