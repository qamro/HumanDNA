import './style.css';
import { QUESTIONS, HUMAN_TYPES } from './data.js';
import {
  buildPreviewStrand,
  buildLiveStrand,
  fillLiveBlock,
  buildResultStrand,
  buildTraitCards,
  buildBreakdown,
} from './dna.js';

// ============================================================
//  STATE
// ============================================================
let currentQuestion = 0;
let answers = [];
let isTransitioning = false;

// ============================================================
//  SCREEN MANAGEMENT
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active', 'exit');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}

// ============================================================
//  LANDING SCREEN
// ============================================================
function initLanding() {
  const previewStrand = document.getElementById('preview-strand');
  if (previewStrand) buildPreviewStrand(previewStrand);

  document.getElementById('btn-start')?.addEventListener('click', startQuiz);
}

// ============================================================
//  QUIZ
// ============================================================
function startQuiz() {
  currentQuestion = 0;
  answers = [];
  showScreen('screen-questions');

  // Init live strand
  const liveStrand = document.getElementById('live-strand');
  if (liveStrand) buildLiveStrand(liveStrand, QUESTIONS.length);

  renderQuestion(0);
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  if (!q) return;

  const card = document.getElementById('q-card');
  const numEl = document.getElementById('q-number');
  const textEl = document.getElementById('q-text');
  const optionsEl = document.getElementById('q-options');
  const progressFill = document.getElementById('progress-fill');
  const progressLabel = document.getElementById('progress-label');

  // Reset card animation
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'card-enter 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';

  // Update content
  numEl.textContent = String(index + 1).padStart(2, '0');
  textEl.textContent = q.text;

  // Progress
  const pct = ((index) / QUESTIONS.length) * 100;
  progressFill.style.width = pct + '%';
  progressLabel.textContent = `${index + 1} / ${QUESTIONS.length}`;

  // Options
  optionsEl.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-option';
    btn.innerHTML = `
      <span class="q-option-letter">${letters[i]}</span>
      <span>${opt.label}</span>
    `;
    btn.style.animationDelay = `${i * 0.07}s`;
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(8px)';
    btn.style.transition = `opacity 0.3s ease ${i * 0.07}s, transform 0.3s ease ${i * 0.07}s, background 0.2s, border-color 0.2s, color 0.2s`;

    btn.addEventListener('click', () => selectAnswer(opt, index, btn));
    optionsEl.appendChild(btn);

    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      });
    });
  });
}

function selectAnswer(opt, questionIndex, btnEl) {
  if (isTransitioning) return;
  isTransitioning = true;

  // Visual feedback
  btnEl.classList.add('selected');

  // Store answer
  answers[questionIndex] = {
    trait: opt.trait,
    label: opt.label,
    color: opt.color,
    icon: opt.icon,
  };

  // Fill live DNA block
  fillLiveBlock(questionIndex, opt.trait);

  // Short pause, then proceed
  setTimeout(() => {
    isTransitioning = false;
    if (questionIndex < QUESTIONS.length - 1) {
      currentQuestion++;
      renderQuestion(currentQuestion);
    } else {
      // All done — go to analyzing
      goToAnalyzing();
    }
  }, 320);
}

// ============================================================
//  ANALYZING
// ============================================================
function goToAnalyzing() {
  showScreen('screen-analyzing');

  const steps = document.querySelectorAll('.a-step');
  steps.forEach(s => s.classList.remove('active', 'done'));

  let stepIndex = 0;
  const interval = setInterval(() => {
    if (stepIndex > 0) {
      steps[stepIndex - 1]?.classList.remove('active');
      steps[stepIndex - 1]?.classList.add('done');
    }
    if (stepIndex < steps.length) {
      steps[stepIndex]?.classList.add('active');
      stepIndex++;
    } else {
      clearInterval(interval);
      setTimeout(showResult, 600);
    }
  }, 700);
}

// ============================================================
//  RESULT
// ============================================================
function showResult() {
  showScreen('screen-result');

  // Pick human type based on answers
  const humanType = pickHumanType(answers);

  // Type title
  const typeEl = document.getElementById('result-type');
  const words = humanType.name.split(' ');
  typeEl.innerHTML = words.map((w, i) =>
    i === words.length - 1
      ? `<span class="type-accent">${w}</span>`
      : `${w} `
  ).join('');

  // Tagline
  document.getElementById('result-tagline').textContent = humanType.tagline;

  // DNA strand
  buildResultStrand(
    document.getElementById('dna-strand-result'),
    document.getElementById('dna-strand-labels'),
    answers
  );

  // Traits
  buildTraitCards(document.getElementById('result-traits'), humanType.traits);

  // Breakdown
  buildBreakdown(document.getElementById('result-breakdown'), QUESTIONS, answers);
}

function pickHumanType(answers) {
  // Seed-based selection for determinism per session
  const traitString = answers.map(a => a.trait).join('');
  let hash = 0;
  for (let i = 0; i < traitString.length; i++) {
    hash = (hash * 31 + traitString.charCodeAt(i)) & 0xffffffff;
  }
  const types = HUMAN_TYPES.default_types;
  const index = Math.abs(hash) % types.length;
  return types[index];
}

// ============================================================
//  SHARE
// ============================================================
document.getElementById('btn-share')?.addEventListener('click', () => {
  const typeEl = document.getElementById('result-type');
  const typeName = typeEl?.textContent || 'Human DNA';
  const shareText = `I just discovered I'm "${typeName}" on HUMANDNA. What kind of human are you? 🧬`;

  if (navigator.share) {
    navigator.share({
      title: 'HUMANDNA — My Personality Strand',
      text: shareText,
      url: window.location.href,
    }).catch(() => {});
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareText + ' ' + window.location.href).then(() => {
      showToast();
    }).catch(() => {
      showToast();
    });
  }
});

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
//  RESTART & HOME NAVIGATION
// ============================================================
function goHome() {
  showScreen('screen-landing');
}

document.getElementById('btn-restart')?.addEventListener('click', goHome);
document.getElementById('nav-logo-home')?.addEventListener('click', goHome);
document.getElementById('q-logo-home')?.addEventListener('click', goHome);

// ============================================================
//  KEYBOARD SUPPORT
// ============================================================
document.addEventListener('keydown', (e) => {
  const screen = document.querySelector('.screen.active');
  if (!screen) return;

  if (screen.id === 'screen-landing' && e.key === 'Enter') {
    startQuiz();
  }

  if (screen.id === 'screen-questions') {
    const keys = { 'a': 0, 'b': 1, 'c': 2, 'd': 3,
                   '1': 0, '2': 1, '3': 2, '4': 3 };
    const idx = keys[e.key.toLowerCase()];
    if (idx !== undefined) {
      const options = document.querySelectorAll('.q-option');
      if (options[idx]) options[idx].click();
    }
  }
});

// ============================================================
//  INIT
// ============================================================
initLanding();
showScreen('screen-landing');
