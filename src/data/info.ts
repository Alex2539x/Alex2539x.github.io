export const info = {
  baseUrl: "https://alextho.com",
  name: "Alex Ho",
  jobDescription: "Software Development Engineer",
  about: `I'm a senior computer science undergraduate based in Ithaca, New York. 
   I'm experienced with Python, Java, C++, C, JavaScript, HTML, CSS, SQL, and OCaml.<br>
   During my internship at BNY this summer (2025), I developed a cloud-based Snowflake 
   Streamlit and Native App full-stack project using Python and SnowSQL. 
   More details on this below!<br>
   Some of the other technologies I've worked previously with are SQL, SQLite3, Flask, 
   SQLAlchemy, Docker, AWS, the OpenAI API.<br> 
   I've also utilized many of Google Cloud's services (App Engine, Compute Engine 
   for virtual machines), Heroku (hosting), Java MVC, Spring Boot, and Thymeleaf
   to implement and host dynamic apps.<br>
   In my free time, I enjoy playing my violin, playing my guitar, and exercising.<br> 
   Feel free to reach out!
  `,

  experience: [
    {
      name: "BNY Software Development Engineer Intern",
      location: "Pittsburgh, Pennsylvania, United States",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      description: [
        "• Designed a full stack Snowflake Native App that automated custody-data sharing: built the backend in Snowflake SQL & Snowpark, surfaced a multi-step wizard UI with Snowflake Streamlit, and wired Cortex AISQL + Cortex Search (RAG) to generate context-aware SQL and instant document retrieval.",
        "• Integrated advanced Snowflake Cortex services - Search, Analyst, and AISQL - so users could chat with the semantic model, lock cross-step inputs, and query gigabyte-scale tables in real time; deployed secure references and privilege grants for five ED5 tables, a FNV positions table, chunking tables (for parsing information), and two Snowflake Cortex search services.",
        "• Collaborated closely with mentor manager and cross-functional engineers, driving weekly demos, code reviews, and patch releases that guide the project from concept to a highly-functional, convenient Native App sharable within the company internal marketplace.",
      ],
    },
    {
      name: "SafeQual Intern",
      location: "Plainview, New York, United States",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      description: [
        "• Utilized the OpenAI API to create unique and detailed queries for generating effective responses and developed Python scripts to automatically organize these responses into clusters based on calculated centroid distances.",
        "• Researched and implemented various machine learning techniques, including vector similarity, clustering, embeddings, text generation, and retrieval augmented generation (RAG).",
        "• Created and optimized multiple scripts to improve and augment incident reports through a combination of semantic search and inference, leveraging OpenAI's API capabilities to enhance the accuracy and context of generated responses.",
      ],
    },
    {
      name: "Springfield Genius Academy",
      location: "Springfield, New Jersey, United States",
      startDate: "Jun 2022",
      endDate: "Aug 2022",
      description: [
        "• Developed daily lesson plans for students to foster a learning environment for each child.",
        "• Taught children elementary and middle school level mathematics and English in a classroom environment to promote learning and development.",
        "• Responsibly monitored children during field trips and after school activities.",
      ],
    }
  ],

  education: [
    {
      name: "Cornell University, College of Arts and Sciences",
      location: "Ithaca, New York, United States",
      startDate: "Aug 2022",
      endDate: "May 2026",
      description: [
        "• Bachelor of Arts, Computer Science Major, Business Minor",
        "• Courses: Intro to AI, Discrete Structures, Object-Oriented Programming \
        and Data Structures, Data Structures and Functional Programming, \
        Multivariable Calculus, Linear Algebra for Engineers, Intro to Business Management",
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

  skills: [
    {
      name: "Languages",
      description: [
        "Python, Java, C++, C, JavaScript, HTML, CSS, SQL, SnowSQL, SQLite3, OCaml"
      ],
      tools: "Snowflake DB, Streamlit, Google Cloud, GitHub, Heroku, IntelliJ IDEA, VS Code, Ubuntu, Windows OS, Microsoft Office",
    },
    {
      name: "Tools",
      description: [
        "Snowflake DB, Streamlit, Google Cloud, GitHub, Heroku, IntelliJ IDEA, VS Code, Ubuntu, Windows OS, Microsoft Office",
      ],
    }
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
      title: "BNY Client Shard Mapping Streamlit Native App (Snowflake)",
      isFeatured: true,
      thumbnail: "/assets/images/bny-project.png",
      // githubUrl: "https://github.com/Alex2539x/safequal-report-enhancement", // TODO: PLACEHOLDER
    },
    {
      title: "SafeQual Incident Report Enhancement System",
      isFeatured: true,
      thumbnail: "/assets/images/safequal-project.png",
      githubUrl: "https://github.com/Alex2539x/safequal-report-enhancement",
    },
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
