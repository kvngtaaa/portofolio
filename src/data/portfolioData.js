export const portfolioData = {
  personal: {
    name: "KEVIN GENTA ALEXANDER",
    shortName: "Kevin Genta",
    role: "Full-Stack Developer & Certified System Analyst",
    tagline: "Certified System Analyst and Full-Stack Developer focused on building reliable web systems.",
    location: "Bandung, Indonesia",
    fullLocation: "Bandung, West Java, Indonesia",
    status: "Open to full-time roles",
    email: "kevingenta17@gmail.com",
    linkedin: "https://linkedin.com/in/kevingenta",
    linkedinDisplay: "linkedin.com/in/kevingenta",
    github: "https://github.com/kvngtaaa",
    githubDisplay: "github.com/kvngtaaa",
    whatsapp: "https://wa.me/6287811062003",
    whatsappDisplay: "+62 878-1106-2003",
    cvPath: "/CV_Kevin_Genta_Alexander.pdf",
    summary:
      "Certified System Analyst (BNSP) and Full-Stack Developer experienced in designing, building, testing, and optimizing scalable web systems with Laravel, React.js, PHP, and MySQL. Focused on system architecture, API integration, and database security, with hands-on experience in Smart Farming and IoT solutions that connect microcontrollers to AI-assisted (LLM/RAG) decision support platforms.",
    metrics: [
      {
        value: "4",
        label: "Professional Roles & Projects",
        sub: "2024 — 2026"
      },
      {
        value: "2+",
        label: "Years of Experience",
        sub: "Jul 2024 — Present"
      },
      {
        value: "1",
        label: "BNSP Certification",
        sub: "Certified System Analyst"
      },
      {
        value: "3.60 & 3.50",
        label: "Academic GPA",
        sub: "Diploma Cum Laude & Bachelor"
      }
    ]
  },

  experiences: [
    {
      id: "aga",
      title: "Asisten Generatif Agrikultur (AGA)",
      role: "Full-Stack Developer",
      projectType: "Thesis Project",
      period: "Jan 2026 — Aug 2026",
      location: "Bandung, Indonesia",
      featured: true,
      tagline:
        "Full-stack smart farming decision support platform combining real-time environmental monitoring with LLM and RAG agronomic recommendations.",
      points: [
        "Solely designed and built an end-to-end full-stack smart farming platform, from robust backend architecture to responsive front-end dashboard.",
        "Engineered multi-land management, daily agricultural logbooks, and continuous environmental telemetry monitoring.",
        "Integrated LLM + RAG pipelines to generate precise agricultural guidance grounded on specific land parameters and curated agronomic knowledge documents.",
        "Architected an optimized MySQL database schema and built secure, high-throughput RESTful APIs."
      ],
      stack: ["Laravel", "React.js", "Tailwind CSS", "MySQL", "LLM / RAG", "RESTful API"],
      links: {
        demo: "#",
        repo: "#"
      }
    },
    {
      id: "agrinova",
      title: "AgriNova Solutions",
      role: "Full-Stack Developer",
      projectType: "Independent Project",
      period: "Dec 2025 — Mar 2026",
      location: "Bandung, Indonesia",
      featured: true,
      tagline:
        "Front-end smart farming ecosystem integrating ESP32 sensor hardware telemetry with real-time AI agronomy guidance.",
      points: [
        "Architected and implemented a high-performance, modular front-end architecture for smart farming operations.",
        "Integrated live ESP32 sensor streams (soil moisture, pH levels, temperature, humidity) into real-time interactive dashboards.",
        "Developed dynamic decision-support interfaces powered by LLM models that adapt recommendations according to live sensor payloads.",
        "Collaborated closely across cross-functional hardware and software teams to guarantee uninterrupted telemetry pipelines."
      ],
      stack: ["ESP32", "IoT", "LLM", "React.js", "Tailwind CSS", "WebSockets", "REST API"],
      links: {
        demo: "#",
        repo: "#"
      }
    },
    {
      id: "trigobalindo",
      title: "PT Trigobalindo Id",
      role: "Full-Stack Developer",
      projectType: "Corporate Web Project",
      period: "Aug 2025 — Oct 2025",
      location: "Bekasi, Indonesia",
      featured: false,
      tagline:
        "Responsive corporate web presence designed and engineered from scratch to amplify digital brand authority.",
      points: [
        "Designed, engineered, and deployed a modern, responsive corporate profile website from initial concept to live production.",
        "Translated executive business requirements and corporate brand identity into an intuitive, conversion-focused user interface.",
        "Managed the complete software development lifecycle independently from design briefs, UI prototyping, code implementation, to Vercel cloud deployment."
      ],
      stack: ["React.js", "Tailwind CSS", "Node.js", "Vercel", "UI/UX Design"],
      links: {
        demo: "#",
        repo: "#"
      }
    },
    {
      id: "transtrack",
      title: "Transtrack.id",
      role: "Quality Assurance",
      projectType: "Enterprise Fleet Telematics",
      period: "Jul 2024 — Aug 2025",
      location: "Bandung, Indonesia",
      featured: false,
      tagline:
        "Rigorous quality assurance, test case execution, and defect lifecycle management for mission-critical logistics software.",
      points: [
        "Conducted comprehensive manual and automated end-to-end testing across mission-critical web applications for fleet telematics and supply chain management.",
        "Authored structured test scenarios, documented reproducible issue reports, and tracked bug resolution cycles through Jira before production deployment.",
        "Collaborated actively with software engineers to enforce code quality, regression testing standards, and seamless UI/UX consistency."
      ],
      stack: ["Manual Testing", "Automated QA", "Jira", "Postman", "Regression Testing", "Fleet Telematics"],
      links: {
        demo: "#",
        repo: "#"
      }
    }
  ],

  technicalHighlights: [
    {
      title: "Service Layer & Dependency Injection",
      desc: "Decoupled domain business logic in Laravel using dedicated service classes and dependency injection for testability and maintainability."
    },
    {
      title: "IoT & Microcontroller Sensor Processing",
      desc: "Engineered robust RESTful ingestion endpoints handling telemetry payloads from ESP32 nodes (soil moisture, pH, ambient temperature, humidity)."
    },
    {
      title: "LLM & RAG Agronomy Intelligence",
      desc: "Connected vector-embedded knowledge bases with conversational LLMs to generate contextual farming decision support."
    },
    {
      title: "Database Query Optimization",
      desc: "Structured indexing, relation constraints, and query tuning across MySQL, PostgreSQL, and MongoDB to minimize API response latency."
    },
    {
      title: "Containerization & Environment Parity",
      desc: "Containerized development and deployment runtimes with Docker and Docker Compose for consistent multi-platform execution."
    }
  ],

  education: [
    {
      institution: "Universitas Telkom",
      location: "Bandung, Indonesia",
      degree: "Bachelor of Information Systems",
      period: "Aug 2024 — Aug 2026",
      gpa: "3.50 / 4.00",
      status: "Graduated",
      details:
        "Specializing in Enterprise Architecture, System Analysis, Database Management, and Artificial Intelligence Integration."
    },
    {
      institution: "Universitas Telkom",
      location: "Bandung, Indonesia",
      degree: "Diploma in Information Systems",
      period: "Aug 2021 — Aug 2024",
      gpa: "3.60 / 4.00",
      status: "Graduated with Cum Laude Honors",
      details:
        "Core foundation in Full-Stack Web Development, Relational Database Modeling, and Software Quality Assurance methodologies."
    }
  ],

  certificates: [
    {
      id: "bnsp-system-analyst",
      title: "Certified System Analyst",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2025",
      badge: "Official BNSP Certification",
      status: "Verified Credential",
      desc:
        "Official national professional certification certifying proficiency in system requirements analysis, enterprise IT architecture design, process workflow modeling, and aligning strategic business objectives with scalable, secure technical implementations.",
      competencies: [
        "System Requirements Analysis (SRS)",
        "IT Architecture & UML Modeling",
        "Business Process Alignment",
        "Database Schemata Verification",
        "System Scalability & Security Governance"
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "backend",
        name: "Backend Engineering",
        items: ["PHP", "Laravel", "Node.js", "Express.js", "Python"]
      },
      {
        id: "frontend",
        name: "Frontend Development",
        items: ["JavaScript", "React.js", "Alpine.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Blade"]
      },
      {
        id: "database",
        name: "Database Systems",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
      },
      {
        id: "api-integration",
        name: "API & Integration",
        items: ["RESTful API", "IoT Integration", "Sensor Payload Processing"]
      },
      {
        id: "ai-emerging",
        name: "AI & Emerging Tech",
        items: ["LLM", "RAG", "AI Integration", "IoT", "ESP32"]
      },
      {
        id: "tools",
        name: "Tools & DevOps",
        items: ["Git", "Docker", "Docker Compose", "Postman", "Visual Paradigm"]
      }
    ],
    softSkills: [
      "Adaptability",
      "Teamwork",
      "Communication",
      "Problem Solving",
      "Attention to Detail",
      "Time Management"
    ]
  }
};
