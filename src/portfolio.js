// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Wyatt Scott",
  title: "Hi there, I'm Wyatt...",
  subTitle:
    "I'm a Data Scientist passionate about machine learning, automation, and geopolitics, among myriad other things.",
  resumeLink:
    "https://drive.google.com/file/d/1AXgGh33CQqiEeE3HVvmp57UpFdl626fb/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/WD-Scott",
  linkedin: "https://www.linkedin.com/in/wyatt--scott/",
  gmail: "wyatt.d.scott28@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Tech Skills",
  subTitle: "",
  skills: [
    "- Develop interactive user-interfaces for workflow automation tools and ML models.",
    "- Build, test, validate, and deploy predictive models.",
    "- Review code and work in teams to achieve goals."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fa fa-registered"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Virginia",
      subHeader: "M.S. | Data Science",
      duration: "January 2023 - August 2024",
      desc: "GPA: 4.00"
    },
    {
      schoolName: "Misericordia University",
      subHeader: "B.S. | Government, Law, and National Security",
      duration: "September 2014 - May 2018",
      desc: "GPA: 3.96"
    },
    {
      schoolName: "American University",
      subHeader: "B.S. (minor) | U.S. Foreign Policy",
      duration: "January 2017 - May 2017",
      desc: "GPA: 3.96"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "", //Insert stack or technology you have experience in
      progressPercentage: "" //Insert relative proficiency in percentage
    },
    {
      Stack: "",
      progressPercentage: ""
    },
    {
      Stack: "",
      progressPercentage: ""
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges; change username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Editor",
      company: "S&P Global \n Market Intelligence",
      date: "July 2023 – Present",
      descBullets: [
        "Develop Python code and GUIs to automate repetitive tasks.",
        "Contributing author — S&P Global’s Daily Update.",
        "Support 70 analysts and over 1,500 deliverables each year."
      ]
    },
    {
      role: "Research Editor",
      company: "S&P Global \n Market Intelligence",
      date: "March 2022 – June 2023",
      descBullets: [
        "Managed multiple, simultaneous editorial and research workflows.",
        "Analyzed and reviewed data and forecasts for client-facing content."
      ]
    },
    {
      role: "Graduate TA and Grader",
      company: "UVA School of \n Data Science",
      date: "May 2024 – August 2024",
      descBullets: [
        "Supported graduate students with coding assignments.",
        "Evaluated and graded lab reports."
      ]
    },
    {
      role: "Nonresident Fellow",
      company: "Center for \n Climate & Security",
      date: "March 2022 – July 2022",
      descBullets: [
        "Co-wrote a report on climate change, security, and NATO.",
        "Built bespoke datasets to meet client needs."
      ]
    },
    {
      role: "Senior Research Associate",
      company: "New America \n Resource Security",
      date: "June 2021 – February 2022",
      descBullets: [
        "Led a scenario-based project in collaboration with DARPA’s World Modelers Program to test a conflict causality model, CauseMos."
      ]
    },
    {
      role: "Research Associate",
      company: "New America \n Resource Security",
      date: "June 2019 – May 2021",
      descBullets: [
        "Developed a multivariate index measuring the U.S. and China’s global influence.",
        "Collected and analyzed national security and commodities data."
      ]
    },
    {
      role: "Research Assistant",
      company: "New America \n Resource Security",
      date: "June 2018 – May 2019",
      descBullets: [
        "Provided research support and planned events.",
        "Wrote articles on commodities trade and U.S.-China competition."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      //image: require(""),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require(""),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: "Achievements And Certifications",
  subtitle: "",

  achievementsCards: [
    {
      title: "Associate Data Scientist",
      subtitle:
        "Demonstrated proficiency in data management, EDA, modeling, programming, statistical experimentation, and communication and visualization.",
      image: require("./assets/images/dcamp.png"),
      imageAlt: "DataCamp",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.datacamp.com/certificate/DSA0019507682420"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1V1-xr6Im8qJUkdWcp3ogzHupILAfZJ-J/view?usp=sharing"
        }
      ]
    },
    {
      title: "Dean's Scholar Award",
      subtitle:
        "Recognized for a high level of academic achievement, community engagement, and potential contribution to my academic field of study.",
      image: require("./assets/images/AU_logo.jpg"),
      imageAlt: "American University",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1U-AD-RWpB9TPrBuz0Co9g56Ubo4diw5N/view?usp=sharing"
        },
        {
          name: "American University",
          url: "https://www.american.edu/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: "",

  talks: [
    {
      title: "",
      subtitle: "C",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: "Podcast",
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact:",
  number: "(484) 925-8722",
  email_address: "wyatt.d.scott28@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  twitterDetails,
  isHireable,
  resumeSection
};
