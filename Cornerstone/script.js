const CURRICULUM = {
    algebra2: {
        label: "Algebra II",
        lost: [
            { title: "Order of operations & real number properties", sub: "Prerequisite: Pre-Algebra", week: "Week 1", phase: "gap" },
            { title: "Solving linear equations & inequalities", sub: "Prerequisite: Algebra I, Unit 1", week: "Week 1–2", phase: "gap" },
            { title: "Graphing lines & slope-intercept form", sub: "Prerequisite: Algebra I, Unit 3", week: "Week 2", phase: "gap" },
            { title: "Systems of equations", sub: "Prerequisite: Algebra I, Unit 4", week: "Week 3", phase: "gap" },
            { title: "Exponent rules & polynomial operations", sub: "Prerequisite: Algebra I, Unit 5", week: "Week 3–4", phase: "next" },
            { title: "Factoring quadratics", sub: "Current unit foundation", week: "Week 4", phase: "next" },
        ],
        gaps: [
            { title: "Graphing lines & slope-intercept form", sub: "Prerequisite: Algebra I, Unit 3", week: "Week 1", phase: "gap" },
            { title: "Systems of equations", sub: "Prerequisite: Algebra I, Unit 4", week: "Week 1–2", phase: "gap" },
            { title: "Exponent rules & polynomial operations", sub: "Prerequisite: Algebra I, Unit 5", week: "Week 2", phase: "gap" },
            { title: "Factoring quadratics (GCF, trinomials)", sub: "Current unit foundation", week: "Week 3", phase: "next" },
            { title: "Quadratic formula & discriminant", sub: "Current unit — Week 4", week: "Week 3–4", phase: "next" },
        ],
        shaky: [
            { title: "Factoring quadratics (difference of squares)", sub: "Quick refresher needed", week: "Week 1", phase: "gap" },
            { title: "Completing the square", sub: "Builds on factoring — current unit", week: "Week 1–2", phase: "next" },
            { title: "Quadratic formula & discriminant", sub: "Current unit — you're close!", week: "Week 2", phase: "next" },
        ],
        tip: {
            lost: "Start with linear equations before anything else — every Algebra II concept builds on them. Aim for 20 minutes a day.",
            gaps: "Focus on systems of equations first; it directly unlocks the matrix unit you're heading into.",
            shaky: "You're in great shape. A 30-minute review of factoring will make the rest of the unit click."
        }
    },
    precalc: {
        label: "Pre-Calculus",
        lost: [
            { title: "Solving quadratic equations", sub: "Prerequisite: Algebra II, Unit 2", week: "Week 1", phase: "gap" },
            { title: "Functions, domain & range", sub: "Prerequisite: Algebra II, Unit 4", week: "Week 1–2", phase: "gap" },
            { title: "Transformations of functions", sub: "Prerequisite: Algebra II, Unit 4", week: "Week 2", phase: "gap" },
            { title: "Exponential & logarithmic functions", sub: "Prerequisite: Algebra II, Unit 6", week: "Week 3", phase: "gap" },
            { title: "Introduction to trigonometry (SOH-CAH-TOA)", sub: "Current unit foundation", week: "Week 3–4", phase: "next" },
            { title: "Unit circle & radian measure", sub: "Current unit", week: "Week 4", phase: "next" },
        ],
        gaps: [
            { title: "Transformations of functions", sub: "Prerequisite: Algebra II, Unit 4", week: "Week 1", phase: "gap" },
            { title: "Exponential & logarithmic functions", sub: "Prerequisite: Algebra II, Unit 6", week: "Week 1–2", phase: "gap" },
            { title: "Right triangle trigonometry", sub: "Current unit foundation", week: "Week 2–3", phase: "gap" },
            { title: "Unit circle & radian measure", sub: "Current unit", week: "Week 3", phase: "next" },
            { title: "Graphing sine & cosine", sub: "Current unit — coming up", week: "Week 4", phase: "next" },
        ],
        shaky: [
            { title: "Converting degrees ↔ radians", sub: "Quick refresher", week: "Week 1", phase: "gap" },
            { title: "Unit circle — key angles", sub: "Current unit", week: "Week 1–2", phase: "next" },
            { title: "Graphing sine & cosine", sub: "Current unit — almost there", week: "Week 2", phase: "next" },
        ],
        tip: {
            lost: "Rebuild comfort with functions (domain/range) first — it's the language every Pre-Calc topic is written in.",
            gaps: "Log functions and transformations are the two biggest blockers for trig. Clear those first.",
            shaky: "You just need the unit circle down cold. 10 minutes of daily memorization will get you there in a week."
        }
    },
    biology: {
        label: "Biology",
        lost: [
            { title: "Cell structure: prokaryotes vs. eukaryotes", sub: "Prerequisite: Life Science (8th grade)", week: "Week 1", phase: "gap" },
            { title: "Macromolecules: proteins, lipids, nucleic acids", sub: "Prerequisite: 8th grade chemistry", week: "Week 1–2", phase: "gap" },
            { title: "Cell membrane & transport (diffusion, osmosis)", sub: "Prerequisite: 9th Biology, Unit 1", week: "Week 2", phase: "gap" },
            { title: "Cellular respiration overview (ATP)", sub: "Prerequisite: 9th Biology, Unit 2", week: "Week 3", phase: "gap" },
            { title: "Photosynthesis — light & dark reactions", sub: "Current unit foundation", week: "Week 3–4", phase: "next" },
            { title: "Enzyme structure & function", sub: "Current unit", week: "Week 4", phase: "next" },
        ],
        gaps: [
            { title: "Cell membrane & transport", sub: "Prerequisite: Unit 1", week: "Week 1", phase: "gap" },
            { title: "Cellular respiration (glycolysis → ATP)", sub: "Prerequisite: Unit 2", week: "Week 1–2", phase: "gap" },
            { title: "Photosynthesis overview", sub: "Current unit foundation", week: "Week 2–3", phase: "gap" },
            { title: "Enzyme kinetics & inhibitors", sub: "Current unit", week: "Week 3", phase: "next" },
            { title: "DNA replication basics", sub: "Coming next unit", week: "Week 4", phase: "next" },
        ],
        shaky: [
            { title: "Electron transport chain (ETC)", sub: "Cellular respiration — last unit", week: "Week 1", phase: "gap" },
            { title: "Calvin cycle steps", sub: "Current unit photosynthesis", week: "Week 1–2", phase: "next" },
            { title: "Enzyme activation energy & inhibitors", sub: "Current unit", week: "Week 2", phase: "next" },
        ],
        tip: {
            lost: "Start with cell structure — it's the vocabulary for everything else. Draw and label a cell from memory each day.",
            gaps: "Cellular respiration and photosynthesis are mirror processes. Study them side-by-side for a faster click.",
            shaky: "The Calvin cycle is 95% of what you need. Make a flowchart: G3P → RuBP → G3P."
        }
    },
    chemistry: {
        label: "Chemistry",
        lost: [
            { title: "Atomic structure: protons, neutrons, electrons", sub: "Prerequisite: 8th Physical Science", week: "Week 1", phase: "gap" },
            { title: "Periodic table trends (electronegativity, atomic radius)", sub: "Prerequisite: 8th Physical Science", week: "Week 1–2", phase: "gap" },
            { title: "Ionic vs. covalent bonding", sub: "Prerequisite: Chemistry, Unit 1", week: "Week 2", phase: "gap" },
            { title: "Writing & balancing chemical equations", sub: "Prerequisite: Chemistry, Unit 2", week: "Week 3", phase: "gap" },
            { title: "Mole concept & molar mass", sub: "Current unit foundation", week: "Week 3–4", phase: "next" },
            { title: "Stoichiometry: mole ratios & limiting reagent", sub: "Current unit", week: "Week 4", phase: "next" },
        ],
        gaps: [
            { title: "Ionic vs. covalent bonding", sub: "Prerequisite: Unit 1", week: "Week 1", phase: "gap" },
            { title: "Balancing chemical equations", sub: "Prerequisite: Unit 2", week: "Week 1–2", phase: "gap" },
            { title: "Mole concept & Avogadro's number", sub: "Current unit foundation", week: "Week 2", phase: "gap" },
            { title: "Molar mass calculations", sub: "Current unit", week: "Week 3", phase: "next" },
            { title: "Limiting reagent & percent yield", sub: "Current unit — coming up", week: "Week 3–4", phase: "next" },
        ],
        shaky: [
            { title: "Balancing equations with polyatomic ions", sub: "Quick review needed", week: "Week 1", phase: "gap" },
            { title: "Molar mass & gram–mole conversions", sub: "Current unit", week: "Week 1–2", phase: "next" },
            { title: "Percent yield calculations", sub: "Current unit", week: "Week 2", phase: "next" },
        ],
        tip: {
            lost: "Master balancing equations before stoichiometry — the mole concept only makes sense once equations click.",
            gaps: "The mole concept is pure ratio math. Once you internalize 6.02×10²³, stoichiometry becomes straightforward.",
            shaky: "Practice 5 limiting reagent problems. That's the whole current unit — you've basically got it."
        }
    },
    usgov: {
        label: "U.S. Government",
        lost: [
            { title: "Constitutional principles: separation of powers", sub: "Prerequisite: U.S. History", week: "Week 1", phase: "gap" },
            { title: "The three branches: roles & powers", sub: "Prerequisite: 8th Civics", week: "Week 1–2", phase: "gap" },
            { title: "The Bill of Rights (Amendments 1–10)", sub: "Prerequisite: 8th Civics", week: "Week 2", phase: "gap" },
            { title: "Federalism: national vs. state powers", sub: "Current unit foundation", week: "Week 3", phase: "gap" },
            { title: "How a bill becomes a law", sub: "Current unit", week: "Week 3–4", phase: "next" },
            { title: "Congressional committees & lobbying", sub: "Current unit", week: "Week 4", phase: "next" },
        ],
        gaps: [
            { title: "Federalism: concurrent & reserved powers", sub: "Current unit foundation", week: "Week 1", phase: "gap" },
            { title: "Landmark Supreme Court cases (Marbury, McCulloch)", sub: "Current unit context", week: "Week 1–2", phase: "gap" },
            { title: "How a bill becomes a law", sub: "Current unit", week: "Week 2", phase: "gap" },
            { title: "Congressional committees & filibuster", sub: "Current unit — week 4", week: "Week 3", phase: "next" },
            { title: "Executive orders & presidential power", sub: "Next unit preview", week: "Week 4", phase: "next" },
        ],
        shaky: [
            { title: "Enumerated vs. implied powers (Elastic Clause)", sub: "Quick review", week: "Week 1", phase: "gap" },
            { title: "The cloture vote & filibuster mechanics", sub: "Current unit", week: "Week 1–2", phase: "next" },
            { title: "Presidential veto & congressional override", sub: "Current unit", week: "Week 2", phase: "next" },
        ],
        tip: {
            lost: "Separation of powers is the skeleton. Get that framework clear first and everything else hangs on it naturally.",
            gaps: "Landmark cases (Marbury, McCulloch) are the fastest way to understand federalism in action — they show, not just tell.",
            shaky: "You're essentially caught up. Review the elastic clause and you'll be ahead of most of the class."
        }
    },
    english10: {
        label: "English 10 — Literary Analysis",
        lost: [
            { title: "Literary elements: plot, setting, characterization", sub: "Prerequisite: 8th/9th ELA", week: "Week 1", phase: "gap" },
            { title: "Point of view & narrative perspective", sub: "Prerequisite: 9th English", week: "Week 1–2", phase: "gap" },
            { title: "Theme vs. topic: identifying central themes", sub: "Prerequisite: 9th English", week: "Week 2", phase: "gap" },
            { title: "Textual evidence & in-text citation (MLA)", sub: "Prerequisite: 9th English, Unit 4", week: "Week 3", phase: "gap" },
            { title: "Building a literary analysis paragraph (PEEL)", sub: "Current unit foundation", week: "Week 3–4", phase: "next" },
            { title: "Comparative essay structure (thesis + two texts)", sub: "Current unit", week: "Week 4", phase: "next" },
        ],
        gaps: [
            { title: "Theme identification & textual evidence", sub: "Prerequisite: 9th English", week: "Week 1", phase: "gap" },
            { title: "In-text citation & MLA format", sub: "Prerequisite: 9th English, Unit 4", week: "Week 1–2", phase: "gap" },
            { title: "PEEL analysis paragraph structure", sub: "Current unit foundation", week: "Week 2", phase: "gap" },
            { title: "Crafting a strong literary thesis", sub: "Current unit", week: "Week 3", phase: "next" },
            { title: "Comparative essay: intro & transitions", sub: "Current unit", week: "Week 3–4", phase: "next" },
        ],
        shaky: [
            { title: "Writing a specific, arguable literary thesis", sub: "Current unit — one concept to nail", week: "Week 1", phase: "gap" },
            { title: "Integrating quotes smoothly (signal phrases)", sub: "Current unit", week: "Week 1–2", phase: "next" },
            { title: "Counter-argument paragraph", sub: "Current unit — coming up", week: "Week 2", phase: "next" },
        ],
        tip: {
            lost: "Literary analysis is a skill, not innate talent. Start by writing one PEEL paragraph per day — structure builds everything.",
            gaps: "Your thesis is the engine. Practice writing three thesis statements per text; pick the sharpest one.",
            shaky: "You're nearly there. Master signal phrases for quotes and your essays will immediately sound more polished."
        }
    }
};

function selectProg(el) {
    document.querySelectorAll('.prog-row').forEach(r => r.classList.remove('selected'));
    el.classList.add('selected');
    validateForm();
}
function validateForm() {
    const name = document.getElementById('inp-name').value.trim();
    const course = document.getElementById('inp-course').value;
    const grade = document.getElementById('inp-grade').value;
    const prog = document.querySelector('input[name=prog]:checked');
    document.getElementById('gen-btn').disabled = !(name && course && grade && prog);
}
document.getElementById('inp-name').addEventListener('input', validateForm);
document.getElementById('inp-course').addEventListener('change', validateForm);
document.getElementById('inp-grade').addEventListener('change', validateForm);

function generateRoadmap() {
    const name = document.getElementById('inp-name').value.trim();
    const grade = document.getElementById('inp-grade').value;
    const courseKey = document.getElementById('inp-course').value;
    const prog = document.querySelector('input[name=prog]:checked').value;
    const data = CURRICULUM[courseKey];

    document.getElementById('r-name').textContent = name;
    document.getElementById('r-meta').textContent = grade + ' · ' + data.label;

    const badgeEl = document.getElementById('r-badge');
    const badges = { lost: ['Needs foundation work', 'badge-coral'], gaps: ['Some gaps to close', 'badge-amber'], shaky: ['Almost caught up', 'badge-teal'] };
    badgeEl.textContent = badges[prog][0];
    badgeEl.className = 'badge ' + badges[prog][1];

    const milestones = data[prog];
    const gaps = milestones.filter(m => m.phase === 'gap');
    const nexts = milestones.filter(m => m.phase === 'next');

    const doneCount = prog === 'shaky' ? 2 : prog === 'gaps' ? 1 : 0;
    let done = 0;

    function renderList(items, containerId, startDone) {
        const el = document.getElementById(containerId);
        el.innerHTML = '';
        items.forEach((m, i) => {
            const isDone = (i < startDone);
            const isLocked = false;
            const div = document.createElement('div');
            div.className = 'milestone' + (isDone ? ' done' : '');
            if (isDone) done++;
            const weekClass = m.phase === 'gap' ? 'week-now' : 'week-soon';
            div.innerHTML = `
        <div class="check">
          <svg class="checkmark" viewBox="0 0 10 8"><polyline points="1 4 3.5 6.5 9 1"/></svg>
          <span class="lock-icon">🔒</span>
        </div>
        <div class="m-content">
          <div class="m-title">${m.title}</div>
          <div class="m-sub">${m.sub}</div>
        </div>
        <span class="m-week ${weekClass}">${m.week}</span>`;
            if (!isDone) {
                div.addEventListener('click', () => {
                    div.classList.toggle('done');
                    updateProgress(milestones.length);
                });
            }
            el.appendChild(div);
        });
    }

    renderList(gaps, 'gaps-list', doneCount > 0 ? 1 : 0);
    renderList(nexts, 'next-list', 0);

    const total = milestones.length;
    const initDone = doneCount > 0 ? 1 : 0;
    const pct = Math.round((initDone / total) * 100);
    document.getElementById('pb-pct').textContent = pct + '%';
    document.getElementById('pb-fill').style.width = pct + '%';

    document.getElementById('tip-box').innerHTML = `<strong>Your focus tip:</strong> ${data.tip[prog]}`;

    document.getElementById('s-diag').classList.remove('active');
    document.getElementById('s-roadmap').classList.add('active');

    setTimeout(() => {
        const fill = document.getElementById('pb-fill');
        fill.style.width = pct + '%';
    }, 100);
}

function updateProgress(total) {
    const checked = document.querySelectorAll('.milestone.done').length;
    const pct = Math.round((checked / total) * 100);
    document.getElementById('pb-pct').textContent = pct + '%';
    document.getElementById('pb-fill').style.width = pct + '%';
}

function goBack() {
    document.getElementById('s-roadmap').classList.remove('active');
    document.getElementById('s-diag').classList.add('active');
}