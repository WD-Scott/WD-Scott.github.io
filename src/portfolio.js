// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Wyatt Scott",
  title: "Hi, I'm Wyatt",
  subTitle:
    "ML Engineer and model developer building NLP and LLM systems. Currently at S&P Global.",
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
  title: "What I Build",
  subTitle: "",
  skills: [
    "- Fine-tune and deploy large language models for text generation, classification, and retrieval-augmented generation (RAG).",
    "- Build end-to-end ML pipelines: data processing, distributed training, evaluation, and production serving with containerized microservices.",
    "- Design NLP systems using transformer architectures, with experience spanning sequence modeling, attention mechanisms, and prompt engineering."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch",
      imageSrc: "pytorch-icon.svg"
    },
    {
      skillName: "Hugging Face",
      imageSrc: "huggingface-icon.svg"
    },
    {
      skillName: "TensorFlow",
      imageSrc: "tensorflow-icon.svg"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "scikit-learn",
      imageSrc: "scikit-learn-icon.svg"
    },
    {
      skillName: "Pandas",
      imageSrc: "pandas-icon.svg"
    },
    {
      skillName: "NumPy",
      imageSrc: "numpy-icon.svg"
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
    }
  ]
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Analyst (Quantitative Modeling)",
      company: "S&P Global \n\n Ratings",
      date: "Nov. 2024 – Present",
      descBullets: [
        "Build and validate quantitative models for credit risk analysis using Python and statistical methods.",
        "Develop internal tools and dashboards that surface model outputs to analysts and stakeholders.",
        "Author technical specifications and model documentation to ensure reproducibility and regulatory compliance."
      ]
    },
    {
      role: "Lead Editor & Automation Engineer",
      company: "S&P Global \n\n Market Intelligence",
      date: "March 2022 – Oct. 2024",
      descBullets: [
        "Built Python automation tools and GUIs that eliminated manual workflows, saving 100+ analyst hours per quarter.",
        "Managed data pipelines and editorial workflows supporting 70 analysts and 1,500+ annual deliverables."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "UVA School of \n\n Data Science",
      date: "May 2024 – Aug. 2024",
      descBullets: [
        "Mentored graduate students on machine learning implementations, statistical modeling, and Python programming.",
        "Evaluated technical assignments covering supervised/unsupervised learning, deep learning, and data engineering."
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

// Achievement Section
const achievementSection = {
  title: "Featured Projects",
  subtitle: "Select ML and NLP projects. More on GitHub.",

  achievementsCards: [
    // Add project cards here as projects are completed. Example:
    // {
    //   title: "Project Name",
    //   subtitle: "Brief description: what it does, techniques used, results. 2-3 sentences.",
    //   image: require("./assets/images/project-thumb.png"),
    //   imageAlt: "Project screenshot",
    //   footerLink: [
    //     { name: "GitHub", url: "https://github.com/WD-Scott/repo" },
    //     { name: "Live Demo", url: "https://..." }
    //   ]
    // }
  ],
  display: false // Set true once 2-3 projects are ready to showcase
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

// Publications Section
const publicationsSection = {
  title: "Publications & Writing",
  subtitle: "",
  display: true,
  publications: [
    {
      title:
        "Words of War: Exploring the Presidential Rhetorical Arsenal with Deep Learning.",
      subtitle:
        "Arxiv, Computer Science — Machine Learning (12 December 2024).",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "Read on Arxiv",
          url: "https://arxiv.org/abs/2412.08868#"
        }
      ]
    },
    {
      title: "Power of AI - Tech and Commodities.",
      subtitle: "S&P Global's Daily Update (22 November 2023).",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "Read on LinkedIn",
          url: "https://www.linkedin.com/pulse/daily-update-power-ai-tech-commodities-spglobal-4bmmc?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3B%2FqRFgWhYQlyMlDNqmhd9%2Fg%3D%3D"
        }
      ]
    },
    {
      title: "Sourcing Battery Metals Amid the Energy Transition.",
      subtitle: "S&P Global's Daily Update (3 April 2023).",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "Read on LinkedIn",
          url: "https://www.linkedin.com/pulse/daily-update-sourcing-battery-metals-amid-energy-transition/"
        }
      ]
    },
    {
      title:
        "The U.S. Fight Against Climate Change Has to Start at Its Center: The Midwest.",
      subtitle: "Slate Magazine (18 February 2021).",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "Read on Slate",
          url: "https://slate.com/technology/2020/11/climate-change-midwest-agriculture-emissions.html"
        }
      ]
    },
    {
      title:
        "Great Power Resource Competition in a Changing Climate: New America's Natural Security Index",
      subtitle: "New America (23 October 2019).",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "Read on New America",
          url: "https://www.newamerica.org/resource-security/reports/great-power-resource-competition-changing-climate/"
        }
      ]
    }
  ]
};

const contactInfo = {
  title: "Let's Connect",
  subtitle:
    "Open to ML Engineering and NLP/LLM roles. Always happy to discuss interesting problems in AI.",
  email_address: "wyatt.d.scott28@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  achievementSection,
  publicationsSection,
  contactInfo,
  isHireable,
  resumeSection
};
