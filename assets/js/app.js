// клиентская логика: язык, тема, вкладки, сетка инструментов, база знаний

function mainCatalogSize() {
  return typeof TOOLS !== 'undefined' ? TOOLS.length : 0;
}

function randomPoolSize() {
  if (typeof toolsDB !== 'undefined' && toolsDB.length) return toolsDB.length;
  return mainCatalogSize();
}

function initialsFromName(name) {
  if (!name || typeof name !== 'string') return '??';
  const parts = name.split(/[\s\/|]+/).map((s) => s.trim()).filter(Boolean);
  let pair = '';
  if (parts.length >= 2) {
    const a = parts[0].replace(/[^a-zA-ZА-Яа-яЁё0-9]/g, '');
    const b = parts[1].replace(/[^a-zA-ZА-Яа-яЁё0-9]/g, '');
    if (a.length && b.length) pair = (a[0] + b[0]).toUpperCase();
  }
  if (!pair) {
    const clean = name.replace(/[^a-zA-ZА-Яа-яЁё0-9]/g, '');
    if (clean.length >= 2) pair = clean.slice(0, 2).toUpperCase();
    else if (clean.length === 1) pair = (clean + clean).toUpperCase();
    else pair = '??';
  }
  return pair.slice(0, 2);
}

const State = {
  lang:         localStorage.getItem('oa_lang') || null,
  theme:        localStorage.getItem('oa_theme') || 'dark',
  activeFilter: 'all',
  searchVal:    '',
  todHistory:   [],
  todLoaded:    false,
  infoLoaded:   false,
};

const Lang = {
  set(lang, fromSettings = false) {
    State.lang = lang;
    localStorage.setItem('oa_lang', lang);
    document.getElementById('langScreen').classList.add('hidden');
    this.apply();
    if (fromSettings) {
      document.getElementById('btnLangRu').classList.toggle('active', lang === 'ru');
      document.getElementById('btnLangEn').classList.toggle('active', lang === 'en');
    }
    Tools.render();
    Info.render();
    Nav.updatePills();
    Nav.applyHash();
    refreshProjectStats();
  },

  apply() {
    const t = I18N[State.lang] || I18N.ru;
    document.querySelectorAll('[data-key]').forEach((el) => {
      const key = el.dataset.key;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    const si = document.getElementById('searchInput');
    if (si) si.placeholder = t.searchPlaceholder;

    this._setText('settTitle',     t.settTitle);
    this._setText('settLangLabel', t.settLangLabel);
    this._setText('settThemeLabel',t.settThemeLabel);
    this._setText('suppTitle',     t.suppTitle);
    this._setText('suppSub',       t.suppSub);
    this._setText('suppOr',        t.suppOr);
    this._setHtml('suppCheck',     t.suppCheck);
    this._setText('walletCopyHint',t.walletCopy);
    this._setText('madeBy',        t.madeBy);
    this._setText('suppBtnLabel',  t.suppBtnLabel);
    this._setText('settBtnLabel',  t.settBtnLabel);
  },

  t(key) {
    return (I18N[State.lang] || I18N.ru)[key] || key;
  },

  _setText(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.textContent = val;
  },
  _setHtml(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.innerHTML = val;
  },
};

const Theme = {
  set(theme) {
    State.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('oa_theme', theme);
    document.getElementById('btnDark')?.classList.toggle('active', theme === 'dark');
    document.getElementById('btnLight')?.classList.toggle('active', theme === 'light');
  },
};

const TAB_IDS = ['tools', 'tod', 'info', 'practice', 'resources', 'author'];

const Nav = {
  init() {
    document.querySelectorAll('.nav-tab').forEach((tab) => {
      tab.addEventListener('click', () => this.switchTo(tab.dataset.tab));
    });
  },

  switchTo(id) {
    document.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));

    const tab = document.querySelector(`.nav-tab[data-tab="${id}"]`);
    const page = document.getElementById(`tab-${id}`);
    if (tab) tab.classList.add('active');
    if (page) page.classList.add('active');

    if (id === 'tod' && !State.todLoaded) {
      State.todLoaded = true;
      Random.load();
    }
    if (id === 'info' && !State.infoLoaded) {
      State.infoLoaded = true;
      Info.render();
    }

    if (typeof history !== 'undefined' && history.replaceState && TAB_IDS.includes(id)) {
      try {
        history.replaceState(null, '', '#' + id);
      } catch (e) { /* старые браузеры / file:// */ }
    }
  },

  applyHash() {
    const id = window.location.hash.replace(/^#/, '');
    if (TAB_IDS.includes(id)) this.switchTo(id);
  },

  updatePills() {
    const lang = State.lang || 'ru';
    document.querySelectorAll('.pill[data-cat]').forEach((pill) => {
      const cat = CATEGORIES.find((c) => c.key === pill.dataset.cat);
      if (cat) pill.textContent = cat.label[lang] || cat.label.ru;
    });
  },
};

const Tools = {
  init() {
    this._buildPills();
    document.getElementById('searchInput').addEventListener('input', (e) => {
      State.searchVal = e.target.value.toLowerCase().trim();
      this.render();
    });
  },

  _buildPills() {
    const container = document.getElementById('pillsContainer');
    if (!container) return;
    container.innerHTML = '';
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement('button');
      btn.className = `pill${cat.key === 'all' ? ' active' : ''}`;
      btn.dataset.cat = cat.key;
      btn.textContent = cat.label[State.lang || 'ru'] || cat.label.ru;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.pill').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        State.activeFilter = cat.key;
        this.render();
      });
      container.appendChild(btn);
    });
  },

  _getTypeBadgeClass(type) {
    const map = { CLI: 'cli', Web: 'web', 'Web API': 'api', Desktop: 'desktop', Extension: 'api', API: 'api' };
    return 'type-badge-' + (map[type] || 'web');
  },

  render() {
    const lang = State.lang || 'ru';
    const t = I18N[lang] || I18N.ru;
    const grid = document.getElementById('toolsGrid');

    const visible = TOOLS.filter((tool) => {
      const matchCat = State.activeFilter === 'all' || tool.cat === State.activeFilter;
      const sv = State.searchVal;
      const matchSearch = !sv ||
        tool.name.toLowerCase().includes(sv) ||
        tool.tags.some((g) => g.includes(sv)) ||
        (tool.desc[lang] || '').toLowerCase().includes(sv);
      return matchCat && matchSearch;
    });

    const n = visible.length;
    const total = mainCatalogSize();
    const countEl = document.getElementById('countLabel');
    if (countEl) {
      const narrow =
        State.activeFilter !== 'all' ||
        Boolean(State.searchVal) ||
        n < total;
      if (narrow) {
        countEl.textContent = Lang.t('countChipPartial')
          .replace('{n}', String(n))
          .replace('{total}', String(total));
      } else {
        countEl.textContent = Lang.t('countChipFull').replace('{total}', String(total));
      }
    }

    grid.innerHTML = '';

    if (!visible.length) {
      grid.innerHTML = `<div class="empty-state">${t.emptyState} «<em>${State.searchVal}</em>»</div>`;
      return;
    }

    visible.forEach((tool, i) => {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.style.animationDelay = `${i * 0.04}s`;

      let host = '';
      try { host = new URL(tool.url).hostname.replace('www.', ''); } catch { host = tool.url; }

      const abbr = initialsFromName(tool.name);
      const desc = tool.desc[lang] || tool.desc.ru;
      const typeCls = this._getTypeBadgeClass(tool.type);

      card.innerHTML = `
        <div class="card-top">
          <div class="card-icon">${abbr}</div>
          <a class="card-link-btn" href="${tool.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            ${host}
          </a>
        </div>
        <div class="card-name">${tool.name}</div>
        <div class="card-tags">${tool.tags.slice(0,3).map((g) => `<span class="tag">${g}</span>`).join('')}</div>
        <div class="card-desc">${desc}</div>
        <div class="card-foot">
          <span class="type-badge ${typeCls}">${tool.type}</span>
          <div class="cat-dot"></div>
        </div>`;

      card.addEventListener('click', () => Modal.openTool(tool));
      grid.appendChild(card);
    });
  },
};

const Random = {
  load() {
    const nameEl = document.getElementById('todName');
    const urlEl  = document.getElementById('todUrl');
    const descEl = document.getElementById('todDesc');
    const linkEl = document.getElementById('todLink');
    const btn    = document.getElementById('todRefresh');

    btn.disabled = true;
    nameEl.innerHTML = `<div class="dots"><span></span><span></span><span></span></div>`;
    descEl.innerHTML = `<div class="dots"><span></span><span></span><span></span></div>`;
    urlEl.textContent = '';

    const pool = typeof toolsDB !== 'undefined' ? toolsDB : TOOLS;
    const available = pool.filter((_, i) => !State.todHistory.includes(i));
    const source = available.length ? available : pool;
    const pick = source[Math.floor(Math.random() * source.length)];
    const idx = pool.indexOf(pick);
    State.todHistory.push(idx);
    if (State.todHistory.length > pool.length) State.todHistory = State.todHistory.slice(-10);

    setTimeout(() => {
      const lang = State.lang || 'ru';
      nameEl.textContent = pick.name;
      urlEl.textContent  = pick.url;
      if (typeof pick.desc === 'object') {
        descEl.textContent = pick.desc[lang] || pick.desc.ru;
      } else {
        descEl.textContent = (lang === 'en' && pick.descEn) ? pick.descEn : pick.desc;
      }
      linkEl.href = pick.url;
      btn.disabled = false;
      this._renderHistory(pool);
    }, 380);
  },

  _renderHistory(pool) {
    const t = I18N[State.lang] || I18N.ru;
    const list = document.getElementById('todHistList');
    const shown = [...State.todHistory].reverse().slice(1, 8);

    list.innerHTML = shown.map((i) => {
      const tool = pool[i];
      if (!tool) return '';
      const abbr = initialsFromName(tool.name);
      return `<div class="tod-hist-item" onclick="Modal.openFromDB(${i})">
        <div class="tod-hist-icon">${abbr}</div>
        <div class="tod-hist-name">${tool.name}</div>
        <span class="tod-hist-cat">${tool.cat || 'osint'}</span>
      </div>`;
    }).join('') || `<div style="color:var(--text-muted);font-size:12px;padding:8px 0;font-family:'Space Mono',monospace">${t.histEmpty}</div>`;
  },
};

const Info = {
  render() {
    const lang = State.lang || 'ru';
    const topics = INFO_TOPICS[lang] || INFO_TOPICS.ru;
    const list = document.getElementById('infoList');
    list.innerHTML = '';

    topics.forEach((topic, i) => {
      const num = String(i + 1).padStart(2, '0');
      const card = document.createElement('div');
      card.className = 'info-card';
      card.style.animationDelay = `${i * 0.06}s`;
      card.innerHTML = `
        <div class="info-card-top">
          <div class="info-icon">${num}</div>
          <div class="info-meta">
            <div class="info-title">${topic.title}</div>
            <div class="info-sub">${topic.sub}</div>
          </div>
          <span class="info-badge">${topic.badge}</span>
          <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        <div class="info-body" id="ib-${i}"></div>`;

      card.addEventListener('click', () => this._toggle(card, i, topic));
      list.appendChild(card);
    });
  },

  _toggle(card, i, topic) {
    const open = card.classList.contains('open');
    document.querySelectorAll('.info-card.open').forEach((c) => c.classList.remove('open'));
    if (open) return;
    card.classList.add('open');
    const body = document.getElementById(`ib-${i}`);
    if (!body.innerHTML) body.innerHTML = `<div class="info-body-inner">${topic.body}</div>`;
  },
};

const Modal = {
  open(title, url, tags, desc, link) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalUrl').textContent   = url;
    document.getElementById('modalLink').href          = link || url;
    document.getElementById('modalTags').innerHTML     = tags;
    document.getElementById('modalDesc').textContent   = desc;
    document.getElementById('modalOverlay').classList.add('open');
  },

  openTool(tool) {
    const lang = State.lang || 'ru';
    const desc = typeof tool.desc === 'object'
      ? (tool.desc[lang] || tool.desc.ru)
      : ((lang === 'en' && tool.descEn) ? tool.descEn : tool.desc);
    const rawTags = Array.isArray(tool.tags) ? tool.tags : [];
    const tags = rawTags.map((g) => `<span class="tag">${g}</span>`).join('');
    this.open(tool.name, tool.url, tags, desc, tool.url);
  },

  openFromDB(idx) {
    const pool = typeof toolsDB !== 'undefined' ? toolsDB : TOOLS;
    const tool = pool[idx];
    if (!tool) return;
    this.openTool(tool);
  },

  openChallenge(n) {
    const t = I18N[State.lang] || I18N.ru;
    const c = {
      1: { title: t.chal1Name, desc: t.chal1Desc },
      2: { title: t.chal2Name, desc: t.chal2Desc },
      3: { title: t.chal3Name, desc: t.chal3Desc },
    };
    const ch = c[n];
    this.open(ch.title, '—', '', ch.desc, '#');
  },

  close() {
    document.getElementById('modalOverlay').classList.remove('open');
  },

  init() {
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.close();
    });
    document.getElementById('modalClose').addEventListener('click', () => this.close());
  },
};

const Settings = {
  open() {
    document.getElementById('settingsOverlay').classList.add('open');
    const cur = document.documentElement.getAttribute('data-theme');
    document.getElementById('btnDark')?.classList.toggle('active', cur === 'dark');
    document.getElementById('btnLight')?.classList.toggle('active', cur === 'light');
    document.getElementById('btnLangRu')?.classList.toggle('active', State.lang === 'ru');
    document.getElementById('btnLangEn')?.classList.toggle('active', State.lang === 'en');
  },
  close() {
    document.getElementById('settingsOverlay').classList.remove('open');
  },
};

const Support = {
  open()  { document.getElementById('supportOverlay').classList.add('open'); },
  close() { document.getElementById('supportOverlay').classList.remove('open'); },

  copyWallet(el, addr) {
    navigator.clipboard.writeText(addr).then(() => {
      const hint = document.getElementById('walletCopyHint');
      const t = I18N[State.lang] || I18N.ru;
      if (hint) hint.textContent = t.walletCopied;
      el.style.borderColor = 'var(--accent)';
      setTimeout(() => {
        if (hint) hint.textContent = t.walletCopy;
        el.style.borderColor = '';
      }, 2000);
    });
  },
};

window.setLang        = (l, fs) => Lang.set(l, fs);
window.setTheme       = (t)     => Theme.set(t);
window.openSettings   = ()      => Settings.open();
window.closeSettings  = ()      => Settings.close();
window.openSupport    = ()      => Support.open();
window.closeSupport   = ()      => Support.close();
window.copyWallet     = (el, a) => Support.copyWallet(el, a);
window.openChal       = (n)     => Modal.openChallenge(n);

function updateTodPoolNote() {
  const el = document.getElementById('todPoolNote');
  if (!el) return;
  const main = mainCatalogSize();
  const pool = randomPoolSize();
  const tpl = Lang.t('todPoolNote');
  el.textContent = tpl.replace('{pool}', String(pool)).replace('{main}', String(main));
}

function refreshProjectStats() {
  const nMain = mainCatalogSize();
  const nPool = randomPoolSize();
  let nCats = 0;
  if (typeof CATEGORIES !== 'undefined') {
    nCats = CATEGORIES.filter((c) => c.key !== 'all').length;
  }
  let nTopics = 0;
  if (typeof INFO_TOPICS !== 'undefined' && INFO_TOPICS.ru) {
    nTopics = INFO_TOPICS.ru.length;
  }
  const stc = document.getElementById('statCatalog');
  const std = document.getElementById('statDb');
  const sc = document.getElementById('statCats');
  const sm = document.getElementById('statTopics');
  if (stc) stc.textContent = String(nMain);
  if (std) std.textContent = String(nPool);
  if (sc) sc.textContent = String(nCats);
  if (sm) sm.textContent = String(nTopics);

  const badgeMain = document.getElementById('toolsCount');
  if (badgeMain) badgeMain.textContent = String(nMain);

  const badgePool = document.getElementById('randomPoolBadge');
  if (badgePool) {
    badgePool.textContent = String(nPool);
    badgePool.title = Lang.t('randomPoolBadgeTitle');
  }

  updateTodPoolNote();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    Modal.close();
    Settings.close();
    Support.close();
  }
});

document.getElementById('settingsOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) Settings.close();
});
document.getElementById('supportOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) Support.close();
});

document.getElementById('todRefresh')?.addEventListener('click', () => Random.load());

(function () {
  Theme.set(State.theme);
  Nav.init();
  Modal.init();
  Tools.init();

  if (State.lang) {
    document.getElementById('langScreen').classList.add('hidden');
    Lang.apply();
    Tools.render();
  }
  Nav.applyHash();
  refreshProjectStats();
})();
