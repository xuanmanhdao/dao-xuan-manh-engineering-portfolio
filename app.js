(() => {
  "use strict";
  const data = window.PORTFOLIO;
  if (!data) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeStorage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch {} }
  };
  const state = {
    lang: safeStorage.get("dxm-lang") === "en" ? "en" : "vi",
    theme: safeStorage.get("dxm-theme-v2") === "dark" ? "dark" : "light",
    skillTab: "core",
    openProject: null
  };
  const ui = () => data.ui[state.lang];
  const choose = (obj) => obj?.[state.lang] ?? obj?.en ?? "";
  const tags = (items) => '<div class="chips">' + items.map(item => '<span class="chip">' + escapeHTML(item) + '</span>').join("") + '</div>';

  function renderTranslations() {
    document.documentElement.lang = state.lang;
    $$("[data-i18n]").forEach(node => {
      const key = node.getAttribute("data-i18n");
      if (ui()[key] !== undefined) node.innerHTML = ui()[key];
    });
    $$("[data-lang]").forEach(button => {
      const pressed = button.dataset.lang === state.lang;
      button.classList.toggle("active", pressed);
      button.setAttribute("aria-pressed", String(pressed));
    });
    $("#dialog-close").setAttribute("aria-label", ui().caseClose);
    $("#menu-toggle").setAttribute("aria-label", state.lang === "vi" ? "Mở menu" : "Open menu");
  }

  function renderExperience() {
    const formatBullet = (detail) => {
      const colon = detail.indexOf(":");
      return colon > 0 && colon < 35
        ? `<strong>${escapeHTML(detail.slice(0, colon + 1))}</strong>${escapeHTML(detail.slice(colon + 1))}`
        : escapeHTML(detail);
    };
    $("#experience-list").innerHTML = data.experiences.map((item, index) => `
      <article class="experience-item">
        <div class="experience-date">
          ${escapeHTML(choose(item.date))}
          ${index === 0 ? '<small>' + escapeHTML(choose(item.dateDetail)) + '</small>' : ''}
        </div>
        <div>
          <div class="experience-heading"><h3>${escapeHTML(choose(item.role))}</h3><span class="experience-company">${escapeHTML(state.lang === "vi" && item.companyVi ? item.companyVi : item.company)}</span></div>
          <p class="experience-desc">${escapeHTML(choose(item.description))}</p>
          ${item.details ? '<ul class="experience-bullets">' + choose(item.details).map(detail => '<li>' + formatBullet(detail) + '</li>').join("") + '</ul>' : ''}
          ${tags(item.tags)}
        </div>
      </article>`).join("");
  }

  function renderArchitecture() {
    const host = $("#architecture-grid");
    if (!host) return;
    host.innerHTML = (data.architecture ?? []).map(pattern => `
      <article class="architecture-card">
        <span class="architecture-card-index">${escapeHTML(pattern.label)}</span>
        <h3>${escapeHTML(choose(pattern.title))}</h3>
        <p class="architecture-card-summary">${escapeHTML(choose(pattern.summary))}</p>
        <dl class="architecture-card-details">
          <div><dt>${escapeHTML(ui().architecturePractice)}</dt><dd>${escapeHTML(choose(pattern.practice))}</dd></div>
          <div><dt>${escapeHTML(ui().architectureContext)}</dt><dd>${escapeHTML(choose(pattern.context))}</dd></div>
        </dl>
      </article>`).join("");
  }

  function caseButton(project, label = ui().caseButton) {
    return `<button type="button" class="case-trigger" data-project="${project.number}" aria-haspopup="dialog">${escapeHTML(label)} <span class="arrow-diag" aria-hidden="true"></span></button>`;
  }
  const asSeconds = n => n.toFixed(3).replace(".", state.lang === "vi" ? "," : ".");
  const asPercent = n => n.toFixed(1).replace(".", state.lang === "vi" ? "," : ".");
  const asNumber = (n, decimals = 3) => n.toFixed(decimals).replace(".", state.lang === "vi" ? "," : ".");
  function displayMeasurement(value, metric) {
    const displayValue = metric.displayUnit === "s" ? value / 1000 : value;
    return `${asNumber(displayValue, metric.displayUnit === "MiB" ? 1 : 3)} ${metric.displayUnit}`;
  }
  function percentImprovement(metric) {
    return (metric.before - metric.after) / metric.before * 100;
  }
  function renderMeasurements() {
    let heroOutcome = $("#hero-observed-outcome");
    if (!heroOutcome) {
      heroOutcome = document.createElement("div");
      heroOutcome.id = "hero-observed-outcome";
      heroOutcome.className = "hero-observed-outcome";
      $(".hero-actions").before(heroOutcome);
    }
    heroOutcome.innerHTML = `<span>${escapeHTML(ui().outcomeKicker)}</span>
      <p>${escapeHTML(ui().outcomeHeroText)}</p>`;
    let host = $("#measurement-overview");
    if (!host) {
      host = document.createElement("div");
      host.id = "measurement-overview";
      host.className = "measurement-overview";
      $("#featured-project").before(host);
    }
    host.innerHTML = `
      <div class="outcome-summary">
        <div class="outcome-heading"><span>${escapeHTML(ui().outcomeKicker)}</span><h3>${escapeHTML(ui().outcomeTitle)}</h3><p>${escapeHTML(ui().outcomeIntro)}</p></div>
        <div class="outcome-stages">
          <div class="outcome-stage"><span>${escapeHTML(ui().outcomeBefore)}</span><strong>TIMEOUT</strong><small>${escapeHTML(ui().outcomeBeforeCaption)}</small></div>
          <span class="outcome-stage-arrow" aria-hidden="true">→</span>
          <div class="outcome-stage outcome-after"><span>${escapeHTML(ui().outcomeTypical)}</span><strong>&lt; 1 s</strong><small>${escapeHTML(ui().outcomeTypicalCaption)}</small></div>
          <div class="outcome-stage outcome-after"><span>${escapeHTML(ui().outcomeExceptional)}</span><strong>&lt; 2 s</strong><small>${escapeHTML(ui().outcomeExceptionalCaption)}</small></div>
        </div>
      </div>
      <div class="measurement-head">
        <div><span class="measurement-private">${escapeHTML(ui().measurementPrivate)}</span>
          <h3>${escapeHTML(ui().measurementTitle)}</h3>
          <p>${escapeHTML(ui().measurementIntro)}</p></div>
        <a href="#featured-project" class="measurement-jump">${escapeHTML(ui().measurementJump)} <span aria-hidden="true">↓</span></a>
      </div>
      <div class="measurement-grid">${data.measurementStudies.map(study => {
        const primary = study.metrics[0];
        const otherRows = study.metrics.slice(1);
        return `<article class="measurement-study">
          <div class="study-head"><span class="study-number">${escapeHTML(study.number)}</span></div>
          <h4>${escapeHTML(choose(study.title))}</h4>
          <p class="study-intro">${escapeHTML(choose(study.description))}</p>
          <div class="study-metric-name">${escapeHTML(choose(primary.title))}</div>
          <div class="study-comparison"><div><span>${escapeHTML(ui().benchmarkBefore)}</span><strong>${escapeHTML(displayMeasurement(primary.before, primary))}</strong></div>
            <span class="study-arrow" aria-hidden="true">→</span>
            <div><span>${escapeHTML(ui().benchmarkAfter)}</span><strong>${escapeHTML(displayMeasurement(primary.after, primary))}</strong></div></div>
          <div class="study-result"><strong>−${asNumber(percentImprovement(primary), 2)}%</strong><span>${escapeHTML(ui().measurementPrimaryReduction)}</span></div>
          <details class="study-detail"><summary>${escapeHTML(ui().measurementDetails)}</summary>
            ${otherRows.length ? `<div class="study-additional"><strong>${escapeHTML(ui().measurementOther)}</strong><div class="study-table-wrap"><table><thead><tr><th scope="col">${escapeHTML(ui().measurementScenario)}</th><th scope="col">${escapeHTML(ui().benchmarkBefore)}</th><th scope="col">${escapeHTML(ui().benchmarkAfter)}</th><th scope="col">${escapeHTML(ui().measurementReduction)}</th></tr></thead>
              <tbody>${otherRows.map(metric=>`<tr><th scope="row">${escapeHTML(choose(metric.title))}</th><td>${escapeHTML(displayMeasurement(metric.before,metric))}</td><td>${escapeHTML(displayMeasurement(metric.after,metric))}</td><td>−${asNumber(percentImprovement(metric),2)}%</td></tr>`).join("")}</tbody></table></div></div>` : ""}
            <div class="study-detail-section"><strong>${escapeHTML(ui().measurementSolution)}</strong><p>${escapeHTML(choose(study.solution))}</p></div>
            <div class="study-detail-section"><strong>${escapeHTML(ui().measurementVerification)}</strong><p>${escapeHTML(choose(study.verification))}</p></div>
          </details>
        </article>`;
      }).join("")}</div>`;

    // Keep the verified measurements available without putting a long SQL
    // appendix between the reader and the project descriptions.
    let archive = $("#measurement-archive");
    const previouslyOpen = archive?.open ?? false;
    if (!archive) {
      archive = document.createElement("details");
      archive.id = "measurement-archive";
      archive.className = "measurement-archive";
      $("#project-grid").after(archive);
    }
    archive.innerHTML = `<summary>${escapeHTML(ui().measurementArchiveSummary)}<span aria-hidden="true">+</span></summary><div class="measurement-archive-body"></div>`;
    const appendix = archive.querySelector(".measurement-archive-body");
    for (const selector of [".measurement-head", ".measurement-grid"]) {
      const element = host.querySelector(selector);
      if (element) appendix.append(element);
    }
    archive.open = previouslyOpen;
  }
  function measuredChange(evidence) {
    const reduction = evidence.beforeSeconds - evidence.afterSeconds;
    return {reduction,percent:reduction / evidence.beforeSeconds * 100};
  }
  function renderCompactEvidence(project) {
    const evidence = project.evidence;
    if (!evidence) return "";
    if (evidence.type === "reportedOutcome") {
      return `<div class="compact-outcome" aria-label="${escapeHTML(ui().outcomeTitle)}">
        <div class="evidence-eyebrow">${escapeHTML(ui().outcomeKicker)}</div>
        <div class="compact-outcome-flow"><div><span>${escapeHTML(ui().outcomeBefore)}</span><strong>TIMEOUT</strong></div>
          <span aria-hidden="true">→</span><div><span>${escapeHTML(ui().outcomeTypical)}</span><strong>&lt; 1 s</strong></div></div>
        <div class="compact-outcome-special">${escapeHTML(ui().outcomeExceptional)}: <strong>&lt; 2 s</strong></div>
        <p>${escapeHTML(choose(evidence.description))}</p>
      </div>`;
    }
    if (evidence.type === "timing") {
      const change = measuredChange(evidence);
      return `<div class="compact-benchmark" aria-label="${escapeHTML(ui().benchmarkTitle)}">
        <div class="evidence-eyebrow">${escapeHTML(ui().featuredEvidence)}</div>
        <div class="compact-comparison">
          <div><span>${escapeHTML(ui().benchmarkBefore)}</span><strong>${asSeconds(evidence.beforeSeconds)} <small>s</small></strong></div>
          <div class="compare-arrow" aria-hidden="true">→</div>
          <div><span>${escapeHTML(ui().benchmarkAfter)}</span><strong>${asSeconds(evidence.afterSeconds)} <small>s</small></strong></div>
        </div>
        <div class="compact-result"><strong>−${asSeconds(change.reduction)} s</strong><strong>−${asPercent(change.percent)}%</strong></div>
      </div>`;
    }
    return `<div class="project-metric"><strong>${escapeHTML(state.lang === "en" && evidence.valueEn ? evidence.valueEn : evidence.value)}</strong><span>${escapeHTML(choose(evidence.label))}</span></div>`;
  }
  function renderCaseEvidence(project) {
    const evidence = project.evidence;
    if (!evidence) return "";
    if (evidence.type === "reportedOutcome") {
      return `<section class="case-evidence">
        <div class="evidence-kicker">${escapeHTML(ui().outcomeKicker)}</div>
        <h3>${escapeHTML(ui().outcomeTitle)}</h3>
        <div class="outcome-stages case-outcome-stages">
          <div class="outcome-stage"><span>${escapeHTML(ui().outcomeBefore)}</span><strong>TIMEOUT</strong></div>
          <span class="outcome-stage-arrow" aria-hidden="true">→</span>
          <div class="outcome-stage outcome-after"><span>${escapeHTML(ui().outcomeTypical)}</span><strong>&lt; 1 s</strong></div>
          <div class="outcome-stage outcome-after"><span>${escapeHTML(ui().outcomeExceptional)}</span><strong>&lt; 2 s</strong></div>
        </div>
        <div class="measurement-context"><p>${escapeHTML(choose(evidence.description))}</p></div>
      </section>`;
    }
    if (evidence.type !== "timing") {
      const extra = project.number === "06" ? `<div class="cli-evidence"><span>${state.lang === "vi" ? "Ví dụ lệnh CLI" : "CLI command example"}</span><code>java -jar postgres-db-tool-all.jar backup --register=objects.txt --output=./backups --config=pgtool.properties</code></div>` : "";
      return `<section class="case-evidence"><div class="evidence-kicker">${escapeHTML(ui().evidenceHeading)}</div><h3>${escapeHTML(ui().technicalResult)}</h3><div class="technical-evidence"><div class="technical-evidence-value">${escapeHTML(state.lang === "en" && evidence.valueEn ? evidence.valueEn : evidence.value)}</div><div><strong>${escapeHTML(choose(evidence.label))}</strong><p>${escapeHTML(choose(evidence.description))}</p></div></div>${extra}</section>`;
    }
    const change = measuredChange(evidence);
    const cells = [
      [ui().benchmarkBefore,asSeconds(evidence.beforeSeconds)+" s"],
      [ui().benchmarkAfter,asSeconds(evidence.afterSeconds)+" s"],
      [ui().benchmarkDelta,"−"+asSeconds(change.reduction)+" s"],
      [ui().benchmarkPercent,"−"+asPercent(change.percent)+"%"]
    ];
    return `<section class="case-evidence measured-evidence" aria-label="${escapeHTML(ui().benchmarkTitle)}">
      <div class="evidence-kicker">${escapeHTML(ui().evidenceHeading)}</div>
      <h3>${escapeHTML(ui().benchmarkTitle)}</h3>
      <div class="benchmark-grid">${cells.map((cell,index)=>`<div class="benchmark-cell ${index===1 ? "after" : ""}"><span>${escapeHTML(cell[0])}</span><strong>${escapeHTML(cell[1])}</strong></div>`).join("")}</div>
      <div class="measurement-context"><p>${escapeHTML(choose(evidence.description))}</p></div>
    </section>`;
  }
  function renderProjects() {
    const featured = data.projects[0];
    $("#featured-project").innerHTML = `<article class="featured-inner">
      <div class="featured-content">
        <div class="project-number">${ui().featuredTitle} / ${featured.number}</div>
        <h3>${escapeHTML(choose(featured.title))}</h3>
        <div class="project-tag">${escapeHTML(choose(featured.category))}</div>
        <p>${escapeHTML(choose(featured.summary))}</p>
        <div class="featured-foot">${caseButton(featured)} ${tags(featured.technologies.slice(0,5))}</div>
      </div>
      <aside class="featured-evidence">
        ${renderCompactEvidence(featured)}
        <div class="feature-contributions"><span class="evidence-eyebrow">${escapeHTML(ui().caseContributionHeading.toUpperCase())}</span><ul>${choose(featured.contribution).slice(0,3).map(item => '<li>' + escapeHTML(item) + '</li>').join("")}</ul></div>
      </aside>
    </article>`;
    $("#project-grid").innerHTML = data.projects.slice(1).map(project => `<article class="project-card">
      <div class="project-number">PROJECT ${project.number}</div>
      <h3>${escapeHTML(choose(project.title))}</h3>
      <div class="project-tag">${escapeHTML(choose(project.category))}</div>
      <p class="project-copy">${escapeHTML(choose(project.summary))}</p>
      ${renderCompactEvidence(project)}
      <div class="project-proof"><span>${state.lang === "vi" ? "PHẦN VIỆC THỰC TẾ" : "MY CONTRIBUTION"}</span><p>${escapeHTML(choose(project.contribution)[0])}</p></div>
      ${tags(project.technologies.slice(0,3))}
      <div class="card-bottom">${caseButton(project)}<span class="arrow-diag" aria-hidden="true">↗</span></div>
    </article>`).join("");
  }

  function renderSkills() {
    $("#skill-tabs").innerHTML = data.skillTabs.map(tab => `<button type="button" role="tab" id="tab-${tab.id}" aria-controls="skill-panel" aria-selected="${tab.id === state.skillTab}" tabindex="${tab.id === state.skillTab ? 0 : -1}" data-tab="${tab.id}" class="${tab.id === state.skillTab ? "active" : ""}">${escapeHTML(ui()[tab.label])}</button>`).join("");
    const selected = data.skillTabs.find(tab => tab.id === state.skillTab) ?? data.skillTabs[0];
    $("#skill-panel").setAttribute("aria-labelledby", "tab-" + selected.id);
    $("#skill-panel").innerHTML = selected.groups.map(group => `<article class="skill-group"><div class="skill-group-heading"><h3>${escapeHTML(choose(group.title))}</h3><span class="skill-tier">${escapeHTML(ui()[selected.tier])}</span></div><div class="skill-tags">${group.items.map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div></article>`).join("");
  }
  function renderPrinciples() {
    $("#principles-grid").innerHTML = data.principles.map((principle, index) => `<article class="principle"><div class="principle-index">0${index + 1} / 06</div><h3>${escapeHTML(choose(principle).title)}</h3><p>${escapeHTML(choose(principle).text)}</p></article>`).join("");
  }
  function renderRoadmap() {
    $("#roadmap").innerHTML = data.roadmap.map(step => `<article class="roadmap-card ${step.active ? "active" : ""}"><div class="roadmap-phase">${escapeHTML(state.lang === "vi" ? step.phaseVi : step.phase)}</div><h3>${escapeHTML(choose(step.title))}</h3><p>${escapeHTML(choose(step.text))}</p><ul>${choose(step.items).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></article>`).join("");
  }

  function conceptArchitecture() {
    return `<div class="concept-flow" role="img" aria-label="${escapeHTML(ui().caseArchitecture)}">
      <div class="concept-row"><div class="concept-node">WEB CLIENT</div><div class="concept-node">MOBILE CLIENT</div></div>
      <div class="concept-arrow">↓</div>
      <div class="concept-row"><div class="concept-node focus">API LAYER</div></div>
      <div class="concept-arrow">↓</div>
      <div class="concept-row"><div class="concept-node">APPLICATION SERVICES</div><div class="concept-node">AUTHORIZATION</div></div>
      <div class="concept-arrow">↓</div>
      <div class="concept-row"><div class="concept-node">BUSINESS WORKFLOW</div><div class="concept-node">REPORTING / READ MODELS</div></div>
      <div class="concept-arrow">↓</div>
      <div class="concept-row"><div class="concept-node focus">POSTGRESQL</div></div>
    </div>`;
  }

  const caseSections = [
    ["overview", "caseOverview"],
    ["businessFlows", "caseBusinessFlows"],
    ["approach", "caseApproach"],
    ["contribution", "caseContribution"]
  ];
  const caseDeepSections = [
    ["challenge", "caseChallenge"],
    ["consideration", "caseConsideration"],
    ["learning", "caseLearning"]
  ];
  function openCase(number) {
    const project = data.projects.find(p => p.number === number);
    if (!project) return;
    state.openProject = number;
    const renderSection = ([key, label], index) => {
      const value = choose(project[key]);
      const body = Array.isArray(value) ? "<ul>" + value.map(line => "<li>" + escapeHTML(line) + "</li>").join("") + "</ul>" : "<p>" + escapeHTML(value) + "</p>";
      const architecture = project.architecture && key === "approach" ? `<div class="case-section"><span class="case-section-label">03B / ${escapeHTML(ui().caseArchitecture.toUpperCase())}</span><h3>${escapeHTML(ui().caseArchitecture)}</h3>${conceptArchitecture()}</div>` : "";
      return `<section class="case-section"><span class="case-section-label">0${index + 1} / ${escapeHTML(ui()[label].toUpperCase())}</span><h3>${escapeHTML(ui()[label])}</h3>${body}</section>${architecture}`;
    };
    const sections = caseSections.filter(([key]) => project[key]).map(renderSection).join("");
    const deep = caseDeepSections.filter(([key]) => project[key]).map((section,index) => renderSection(section,index+caseSections.length)).join("");
    $("#case-dialog-content").innerHTML = `<div class="dialog-project-number">CASE ${project.number} / ${escapeHTML(choose(project.category))}</div>
      <h2 class="dialog-title" id="dialog-title">${escapeHTML(choose(project.title))}</h2>
      <p class="dialog-lead">${escapeHTML(choose(project.summary))}</p>
      <div class="dialog-meta">${project.technologies.map(t => `<span class="chip">${escapeHTML(t)}</span>`).join("")}</div>
      ${renderCaseEvidence(project)}
      ${sections}
      ${deep ? `<details class="case-deep-dive"><summary>${escapeHTML(ui().caseDeepDive)}<span aria-hidden="true">+</span></summary>${deep}</details>` : ""}
      <button type="button" class="dialog-close-bottom" data-close-case>← ${escapeHTML(ui().caseClose)}</button>`;
    const dialog = $("#case-dialog");
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    const close = $("#dialog-close");
    close.focus();
  }
  function closeCase() {
    const dialog = $("#case-dialog");
    if (dialog.open) dialog.close();
    document.body.style.overflow = "";
    state.openProject = null;
  }

  function render() {
    renderTranslations();
    renderExperience();
    renderArchitecture();
    renderMeasurements();
    renderProjects();
    renderSkills();
    renderPrinciples();
    renderRoadmap();
    if (state.openProject) openCase(state.openProject);
  }
  function setLanguage(language) {
    if (!["vi", "en"].includes(language)) return;
    state.lang = language;
    safeStorage.set("dxm-lang", language);
    render();
  }
  function setTheme(theme) {
    state.theme = theme;
    document.body.classList.toggle("theme-light", theme === "light");
    document.body.classList.toggle("theme-dark", theme !== "light");
    $("#theme-toggle").setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
    safeStorage.set("dxm-theme-v2", theme);
  }
  function toast(message) {
    const element = $("#toast");
    element.textContent = message;
    element.classList.add("visible");
    clearTimeout(toast.timeout);
    toast.timeout = setTimeout(() => element.classList.remove("visible"), 2900);
  }
  function closeMenu() {
    $("#nav-links").classList.remove("open");
    $("#menu-toggle").setAttribute("aria-expanded", "false");
  }

  $$("[data-lang]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  $("#theme-toggle").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
  $("#menu-toggle").addEventListener("click", () => {
    const expanded = $("#nav-links").classList.toggle("open");
    $("#menu-toggle").setAttribute("aria-expanded", String(expanded));
  });
  $$(".nav-links a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("click", event => {
    const projectButton = event.target.closest("[data-project]");
    if (projectButton) openCase(projectButton.dataset.project);
    const tab = event.target.closest("[data-tab]");
    if (tab) { state.skillTab = tab.dataset.tab; renderSkills(); }
    if (event.target.closest("[data-close-case]")) closeCase();
  });
  $("#dialog-close").addEventListener("click", closeCase);
  $("#case-dialog").addEventListener("close", () => { document.body.style.overflow = ""; state.openProject = null; });
  $("#case-dialog").addEventListener("click", e => { if (e.target === e.currentTarget) closeCase(); });
  $("#skill-tabs").addEventListener("keydown", e => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const tabs = data.skillTabs.map(tab => tab.id);
    let index = tabs.indexOf(state.skillTab);
    if (e.key === "ArrowLeft") index = (index + tabs.length - 1) % tabs.length;
    else if (e.key === "ArrowRight") index = (index + 1) % tabs.length;
    else index = e.key === "Home" ? 0 : tabs.length - 1;
    state.skillTab = tabs[index];
    renderSkills();
    $("#tab-" + state.skillTab).focus();
  });
  $("#copy-intro").addEventListener("click", async () => {
    const intro = state.lang === "vi"
      ? "Đào Xuân Mạnh — Kỹ sư Java Backend cao cấp tại Hà Nội, có hơn 3 năm kinh nghiệm Java Backend và khoảng 6 tháng Data Engineering. Kinh nghiệm trong Fintech, Banking, Java/Spring Boot, PostgreSQL performance và enterprise integration. Định hướng phát triển lên Solution Architect."
      : "Dao Xuan Manh — Senior Java Backend Engineer based in Hanoi, with 3+ years of backend experience and approximately six months in data engineering. Experience across fintech, banking, Java/Spring Boot, PostgreSQL performance and enterprise integration. Building toward Solution Architecture.";
    try {
      await navigator.clipboard.writeText(intro);
      toast(ui().copySuccess);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = intro;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      toast(copied ? ui().copySuccess : ui().copyFailure);
    }
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        $$(".nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, {rootMargin:"-24% 0px -62% 0px",threshold:0});
    $$("main section[id]").forEach(section => observer.observe(section));
  }
  window.addEventListener("resize", () => { if (innerWidth > 960) closeMenu(); });
  $("#year").textContent = String(new Date().getFullYear());
  render();
  setTheme(state.theme);
})();
