export const info = {
  baseUrl: "https://alextho.com",
  name: "Alex Ho",
  jobDescription: "Web Developer",
  about: `I'm a sophomore computer science undergraduate based in Ithaca, New York.
   I have previously worked with Python, SQL, SQLite3, Flask, SQLAlchemy, Docker, AWS, GitHub 
   (for backend implementations). 
   Additionally,  I have used Google Cloud (App Engine, Compute Engine for virtual machines), 
   Heroku (for hosting the summer coding project I completed), Java, Java MVC, Spring Boot, and Thymeleaf.
   In my free time, I enjoy playing the guitar, violin, exercising. Feel free to reach out!
  `,

  experience: [
    {
      name: "Springfield Genius Academy",
      location: "Springfield, New Jersey, United States",
      startDate: "Jun 2022",
      endDate: "Aug 2022",
      description: [
        "• Developed daily lesson plans for students to foster a learning environment for each child.",
        "• Taught children elementary and middle school level mathematics and English in a classroom environment to promote learning and development.",
        "• Responsibly monitored children during field trips and after school activities",
      ],
    },
  ],

  education: [
    {
      name: "Cornell University, College of Arts and Sciences",
      location: "Ithaca, New York, United States",
      startDate: "Aug 2022",
      endDate: "May 2026",
      description: [
        "• Bachelor of Arts, Computer Science Major, Business Minor",
        "• Courses: Discrete Structures, Object-Oriented Programming and Data Structures, Intro.to Computing using Python, Multivariable Calculus, Linear Algebra for Engineers, Intro.to Business Management",
      ],
    },
    {
      name: "John P. Stevens High School",
      location: "Edison, New Jersey, United States",
      startDate: "Sep 2018",
      endDate: "Jun 2022",
      description: [
        "• GPA: 4.07/4.33 (Unweighted) | SAT: 1560",
        "• Dual Enrollment (Middlesex College): Intro to Comp Sci Using Java, Computer Applications and Systems",
      ],
    },
  ],

  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=100085804996924",
    twitter: "https://twitter.com/Bugle61917458",
    github: "https://github.com/Alex2539x",
    email: "alex2539x@gmail.com",
    linkedin: "https://www.linkedin.com/in/alex-ho-057819243/",
  },

  projects: [
    {
      title: "Death Master File Searcher",
      isFeatured: true,
      thumbnail: "/assets/images/dmf-logo.png",
      githubUrl: "https://github.com/Alex2539x/dmf-demo-heroku",
      liveUrl: "https://dmf-ssa-demo-c9d79b7083e9.herokuapp.com/",
    },
    {
      title: "CU Bucket (Backend Implementation)",
      isFeatured: true,
      thumbnail: "/assets/images/cu-bucket-logo.png",
      githubUrl: "https://github.com/Alex2539x/cu-bucket-T23",
    },
  ],
};
