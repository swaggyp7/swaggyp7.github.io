async function loadData() {
  const [resumeResponse, coverResponse] = await Promise.all([
    fetch('./resume_data.json'),
    fetch('./cover_letter_data.json')
  ]);

  const resume = await resumeResponse.json();
  const cover = await coverResponse.json();

  document.getElementById('hero-title').textContent = 'Affirm-focused full stack portfolio';
  document.getElementById('hero-summary').textContent = resume.summary;
  document.getElementById('company-name').textContent = cover.company;
  document.getElementById('highlights-title').textContent = resume.highlight_section_title;

  const skillsEl = document.getElementById('skills');
  resume.skills.forEach(skill => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = skill;
    skillsEl.appendChild(chip);
  });

  const experienceEl = document.getElementById('experience');
  resume.experience.forEach(item => {
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
  resume.highlights.forEach(item => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${item.title}</h3>
      <div class="tech-stack">${item.tech_stack}</div>
      <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    `;
    highlightsEl.appendChild(card);
  });

  const letterEl = document.getElementById('cover-letter');
  cover.content_paragraphs.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    letterEl.appendChild(p);
  });
}

loadData().catch(error => {
  console.error(error);
  document.getElementById('hero-title').textContent = 'Unable to load generated portfolio';
  document.getElementById('hero-summary').textContent = 'The JSON files could not be loaded. Please check the repository contents.';
});
