import { TRAIT_COLORS } from './data.js';

/**
 * Build the animated preview DNA strand on the landing page
 */
export function buildPreviewStrand(container) {
  const colors = [
    "#7c3aed","#f43f5e","#3b82f6","#10b981",
    "#f59e0b","#ec4899","#06b6d4","#7c3aed",
    "#f43f5e","#10b981"
  ];

  // 3 rows x 10 blocks
  for (let row = 0; row < 3; row++) {
    const rowEl = document.createElement('div');
    rowEl.className = 'dna-row';

    for (let i = 0; i < 10; i++) {
      const block = document.createElement('div');
      block.className = 'dna-block preview';
      const c = colors[(i + row * 3) % colors.length];
      block.style.background = hexToRgba(c, 0.25);
      block.style.border = `1px solid ${hexToRgba(c, 0.5)}`;
      block.style.animationDelay = `${(i * 0.15 + row * 0.4)}s`;

      if (i < 9) {
        rowEl.appendChild(block);
        const conn = document.createElement('div');
        conn.className = 'dna-connector';
        rowEl.appendChild(conn);
      } else {
        rowEl.appendChild(block);
      }
    }
    container.appendChild(rowEl);
  }
}

/**
 * Build the live strand (5 empty blocks, fill as user answers)
 */
export function buildLiveStrand(container, totalQuestions) {
  container.innerHTML = '';
  for (let i = 0; i < totalQuestions; i++) {
    const block = document.createElement('div');
    block.className = 'dna-live-block empty';
    block.id = `live-block-${i}`;
    container.appendChild(block);

    if (i < totalQuestions - 1) {
      const conn = document.createElement('div');
      conn.style.flex = '1';
      conn.style.height = '2px';
      conn.style.background = 'rgba(255,255,255,0.05)';
      container.appendChild(conn);
    }
  }
}

/**
 * Fill a live block when an answer is chosen
 */
export function fillLiveBlock(index, trait) {
  const block = document.getElementById(`live-block-${index}`);
  if (!block) return;
  const color = TRAIT_COLORS[trait]?.bg || '#7c3aed';
  block.classList.remove('empty');
  block.classList.add('filled');
  block.style.background = color;
  block.style.boxShadow = `0 0 12px ${hexToRgba(color, 0.5)}`;
}

/**
 * Build the final DNA result strand
 */
export function buildResultStrand(strandContainer, labelsContainer, answers) {
  strandContainer.innerHTML = '';
  labelsContainer.innerHTML = '';

  answers.forEach((answer, i) => {
    const traitData = TRAIT_COLORS[answer.trait] || { bg: '#7c3aed', icon: '✦' };
    const color = traitData.bg;

    // Block
    const block = document.createElement('div');
    block.className = 'dna-result-block';
    block.style.background = hexToRgba(color, 0.18);
    block.style.border = `1px solid ${hexToRgba(color, 0.5)}`;
    block.style.boxShadow = `0 0 20px ${hexToRgba(color, 0.15)}`;
    block.title = answer.trait;

    const icon = document.createElement('span');
    icon.className = 'block-icon';
    icon.textContent = traitData.icon;
    block.appendChild(icon);

    // Animate in
    block.style.opacity = '0';
    block.style.transform = 'scale(0.5)';
    block.style.transition = `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1}s`;

    strandContainer.appendChild(block);

    // Connector between blocks
    if (i < answers.length - 1) {
      const conn = document.createElement('div');
      conn.className = 'dna-connector-result';
      strandContainer.appendChild(conn);
    }

    // Label
    const label = document.createElement('div');
    label.className = 'dna-label-item';
    label.textContent = answer.trait.toUpperCase();
    labelsContainer.appendChild(label);

    // Add connector spacer in labels row too
    if (i < answers.length - 1) {
      const spacer = document.createElement('div');
      spacer.style.flex = '1';
      spacer.style.minWidth = '8px';
      spacer.style.maxWidth = '24px';
      labelsContainer.appendChild(spacer);
    }

    // Trigger animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        block.style.opacity = '1';
        block.style.transform = 'scale(1)';
      });
    });
  });
}

/**
 * Build trait cards in result screen
 */
export function buildTraitCards(container, traits) {
  container.innerHTML = '';
  traits.forEach((trait, i) => {
    const card = document.createElement('div');
    card.className = 'trait-card';
    card.style.setProperty('--trait-color', trait.color);
    card.style.transitionDelay = `${i * 0.1}s`;

    // Top accent line
    card.style.cssText += `
      --trait-color: ${trait.color};
    `;
    card.innerHTML = `
      <style>
        .trait-card:nth-child(${i+1})::before { background: ${trait.color}; }
      </style>
      <span class="trait-card-label">${trait.label}</span>
      <span class="trait-card-value">${trait.value}%</span>
      <div class="trait-bar">
        <div class="trait-bar-fill" style="width: 0%; background: ${trait.color};" data-target="${trait.value}"></div>
      </div>
    `;
    container.appendChild(card);
  });

  // Animate bars
  setTimeout(() => {
    container.querySelectorAll('.trait-bar-fill').forEach(bar => {
      const target = bar.getAttribute('data-target');
      bar.style.width = target + '%';
    });
  }, 400);
}

/**
 * Build the breakdown section
 */
export function buildBreakdown(container, questions, answers) {
  container.innerHTML = '';
  questions.forEach((q, i) => {
    const row = document.createElement('div');
    row.className = 'breakdown-row';
    row.innerHTML = `
      <span class="breakdown-q">${q.text}</span>
      <span class="breakdown-a">${answers[i]?.label || '—'}</span>
    `;
    container.appendChild(row);
  });
}

// -------- UTILS --------
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}
