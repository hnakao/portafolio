
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Hiroshi Nakao",
  title: "Hola, mi nombre es Hiroshi",
  subTitle: emoji("Me gusta crear y aprender nuevas cosas, por eso amo la proramación. Tengo experiencia desarrollando Webs con TypeScript / Angular / Nodejs y otras geniales librerías y frameworks."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/hnakao",
  linkedin: "https://www.linkedin.com/in/hiroshi-nakao-fombellida/",
  gmail: "hnakao11@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Lo que puedo hacer",
  subTitle: "Full Stack Developer, me gusta hacer cosas geniales y aprender cada día algo nuevo",
  skills: [
    emoji("⚡ Desarrollo de software personalizado."),
    emoji("⚡ Sistemas corporativos."),
    emoji("⚡ Desarrollo de aplicación de cliente para su propio servicio de información o de terceros.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "NestJS",
    //   fontAwesomeClassname: "fab fa-cat"
    // },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Universidad de las Ciencias Informáticas (UCI)",
      logo: require("./assets/images/uciLogo.png"),
      subHeader: "Ingeniero en Ciencias de la Computación",
      duration: "Septiembre 2007 - Julio 2012",
      // desc: "",
      // descBullets: [
      //   "",
      //   ""
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   ]
    // }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Chaskify",
      companylogo: require("./assets/images/chaskify.png"),
      date: "Diciembre 2017 – Enero 2019",
      desc: "Desarrollo de App para clientes de Chaskify",
      descBullets: [
        "App desarrollada con Phonegap Android/iOS",
        "Desarrollo y mantenimiento de API",
        "Desarrollo de Saas CrystalCourier",
        "Desarrollo Frontend con Angular para sistema de entrega Ride Hash"
      ]
    },
    {
      role: "Desarrollador Backend",
      company: "Pixofia",
      companylogo: require("./assets/images/pixofia.png"),
      date: "Febrero 2019 – Julio 2019",
      desc: "App para integrar los servicios de Correos de Chile con Shopify"
    },
    {
      role: "Full Stack Developer",
      company: "SolDev",
      companylogo: require("./assets/images/soldev.png"),
      date: "Agosto 2019 – Actualidad",
      desc: ""
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "hnakao", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Certificaciones 🏆 "),
  // subtitle: "Logros y certificaciones, algunas de las cosas que he hecho!",

  achivementsCards: [
    {
      title: "Javascript Course",
      subtitle: "Covers all basic features of JavaScript programming, including ways to make your website more interactive, create change website content, validate forms, create cookies, and so much more.",
      image: require("./assets/images/soloLearnJs.png"),
      footerLink: [
        { name: "Certificado", url: "https://www.sololearn.com/Certificate/1024-17691487/pdf/" },
      ]
    },
    {
      title: "Python Course",
      subtitle: "A high-level programming language, with applications in numerous areas, including web programming, scripting, scientific computing, and artificial intelligence.",
      image: require("./assets/images/soloLearnPy.png"),
      footerLink: [
        { name: "Certificado", url: "https://www.sololearn.com/Certificate/1073-17691487/pdf/" },
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "Con Amor por desarrollar cosas interesantes, me encanta escribir y enseñar a otros lo que he aprendido.",

  blogs: [
    {
      url: "https://codejuniors.net/4-metodologias-de-desarrollo-de-software/",
      title: "4 Metodologías de Desarrollo de Software que debes conocer",
      description: "Si quieres lograr eficacia, una alta calidad y sacarle el máximo provecho a tu presupuesto, aquí te traigo una lista de las Metodologías de Desarrollo de Software más usadas."
    },
    {
      url: "https://codejuniors.net/instalar-y-configurar-postgresql-y-pgadmin4/",
      title: "Cómo instalar y configurar PostgreSQL y pgAdmin4 en Linux",
      description: "PostgreSQL es un sistema de gestión de bases de datos relacionales que proporciona una implementación del lenguaje de consulta SQL."
    }
  ]
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ]
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Hablamos? ☎️"),
  subtitle: "Podemos discutir sobre un proyecto o puedes solo saludar? Es bienvenido cualquier tema.",
  number: "+53 58592842",
  email_address: "hnakao11@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "hnakao11"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
