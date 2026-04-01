const portfolioData = {
  summary: "Full Stack Developer with 3+ years of hands-on experience building and maintaining user-facing web applications and business-critical product features, now completing the Full Stack Web Development program at RRC Polytech in Winnipeg. Strong in JavaScript, TypeScript, React, React Native-style front-end development, Python-backed services, analytics instrumentation, and full-stack delivery across UI, APIs, and data workflows. Experienced working with product, design, and engineering stakeholders to launch high-quality features safely and incrementally, with a strong user-focused mindset, clear ownership, and practical problem-solving in fast-moving environments.",
  skills: [
    "JavaScript, TypeScript, React, Redux-style state management, and modern front-end development",
    "React Native-style mobile experience development and user onboarding flow implementation",
    "Python, Kotlin or Java-backed service integration and API-driven full-stack development",
    "Full-stack feature delivery across front-end, backend, and analytics workflows",
    "A/B testing, experimentation support, and analytics instrumentation for user acquisition funnels",
    "Monitoring and alerting familiarity with tools such as Sentry, Rollbar, Kibana, or similar platforms",
    "Cross-browser support, responsive UI implementation, and performance-minded front-end development",
    "Code reviews, maintainable architecture, and safe incremental rollout practices",
    "Collaboration with product, design, analytics, and business stakeholders",
    "Strong ownership, adaptability, and growth mindset in ambiguous problem spaces"
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "Hunan Xingtui Technology Co., Ltd.",
      date: "Oct 2021 – Feb 2025",
      location: "Changsha, China",
      bullets: [
        "Built and maintained full-stack product features across user-facing interfaces, backend services, and data workflows, with a strong focus on usability, reliability, and iterative delivery.",
        "Developed acquisition and onboarding-related experiences using modern JavaScript frameworks, component-based UI patterns, and API-connected backend functionality.",
        "Worked closely with product and design stakeholders to translate business goals into visually clear, user-friendly flows that improved activation and engagement.",
        "Implemented analytics and tracking across feature flows to support measurement, experimentation, and data-informed product decisions.",
        "Collaborated with engineers across frontend and backend systems to troubleshoot issues, review code, and deliver maintainable features safely in a live product environment."
      ]
    },
    {
      title: "Part-Time Team Member",
      company: "Gongcha",
      date: "May 2025 – Current",
      location: "Winnipeg, MB",
      bullets: [
        "Strengthened communication, customer empathy, and calm problem-solving skills in a fast-paced environment with constantly changing priorities.",
        "Built strong habits around ownership, teamwork, and dependable execution while handling real-time service situations professionally."
      ]
    }
  ],
  highlights: [
    {
      title: "User Acquisition Funnel and Onboarding Flow Optimization",
      tech_stack: "React · TypeScript · Analytics · A/B Testing",
      bullets: [
        "Built and optimized onboarding and acquisition-related user flows with a strong focus on reducing friction, improving conversion, and supporting clear product measurement.",
        "Implemented analytics events, experiment hooks, and tracking logic to help product teams evaluate funnel performance and user behavior.",
        "Demonstrated strong alignment with a role focused on growth, acquisition, and data-informed user experience improvements."
      ]
    },
    {
      title: "Cross-Platform Full Stack Feature Delivery",
      tech_stack: "React Native · Python · API Integration · Kotlin/Java Exposure",
      bullets: [
        "Delivered user-facing product features across front-end and backend layers, integrating APIs and shared business logic to support consistent experiences across platforms.",
        "Worked through open-ended technical problems involving UI behavior, service responses, and rollout safety with a pragmatic and user-focused mindset.",
        "Strengthened experience in end-to-end feature ownership close to the kind of cross-stack work required in modern product engineering teams."
      ]
    },
    {
      title: "Monitoring, Alerting, and Safe Release Support",
      tech_stack: "Sentry · Rollbar · Kibana · Incremental Rollout Practices",
      bullets: [
        "Used monitoring and alerting workflows to identify issues after release, improve visibility into failures, and support faster debugging in production environments.",
        "Contributed to code review, release quality, and safe incremental shipping practices that balanced speed with maintainability.",
        "Showed strong fit for a product team that values high-quality code, observability, and thoughtful iteration."
      ]
    }
  ]
};

document.getElementById('hero-summary').textContent = portfolioData.summary;

const skillsEl = document.getElementById('skills');
portfolioData.skills.forEach(skill => {
  const chip = document.createElement('span');
  chip.className = 'chip';
  chip.textContent = skill;
  skillsEl.appendChild(chip);
});

const experienceEl = document.getElementById('experience');
portfolioData.experience.forEach(item => {
  const card = document.createElement('article');
  card.className = 'experience-card';
  card.innerHTML = `
    <h3>${item.title}</h3>
    <div class="meta">${item.company} · ${item.location} · ${item.date}</div>
    <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
  `;
  experienceEl.appendChild(card);
});

const highlightsEl = document.getElementById('highlights');
portfolioData.highlights.forEach(item => {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${item.title}</h3>
    <div class="tech-stack">${item.tech_stack}</div>
    <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
  `;
  highlightsEl.appendChild(card);
});
