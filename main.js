/* =====================================================================
   ██  ВСЁ, ЧТО НУЖНО МЕНЯТЬ — ЗДЕСЬ, В БЛОКЕ CONFIG  ██
   ===================================================================== */
const CONFIG = {

  /* --- ПАРОЛЬ --- */
  password: '1234',                                   // <= впиши свой
  hint: 'День, когда мы начали нашу историю',
  wrongAnswers: [                                     // подсказки при ошибке
    'Ну же, вспомни…',
    'Почти. Попробуй ещё раз',
    'Этот день ты точно помнишь ♡'
  ],

  /* --- ПИСЬМО (Этап 2) --- */
  letter: {
    date: 'написано сердцем',
    salut: 'Привет, любимая',
    body: 'Я собрал это место из наших дней — из смеха, из фотографий, из мелочей, которые помню только я.\n\nЗдесь нет ничего случайного. Каждая карточка, каждый цветок и каждое слово оказались тут потому, что я думал о тебе.\n\nОткрой. Дальше всё — про нас.',
    sign: 'твой'
  },

  /* --- КОМПЛИМЕНТЫ В СЕРДЦАХ (Этап 3) --- */
  compliments: [
    'У тебя самая красивая улыбка',
    'Обожаю твой смех',
    'Ты — моё вдохновение',
    'С тобой каждый день особенный',
    'Твои глаза сводят меня с ума',
    'Ты делаешь меня счастливее',
    'Самая нежная на свете',
    'Моя любимая девочка',
    'Ценю каждую минуту с тобой',
    'Ты — мой космос'
  ],

  /* --- НАША ИСТОРИЯ (Этап 4) --- */
  memories: [
    { src:'assets/photos/We1.jpg', cap:'Тот самый день', text:'Помнишь этот момент? Я тогда понял, что хочу видеть твою улыбку каждый день.' },
    { src:'assets/photos/We2.jpg', cap:'Только мы',      text:'В твоих глазах я нахожу спокойствие, а в твоих объятиях — дом.' },
    { src:'assets/photos/We3.jpg', cap:'Твой смех',      text:'Я готов делать глупости каждую секунду, лишь бы снова его услышать.' },
    { src:'assets/photos/We4.jpg', cap:'Незабываемо',    text:'Даже если бы у меня была машина времени, я бы возвращался сюда снова и снова.' },
    { src:'assets/photos/We5.jpg', cap:'Моя любовь',     text:'С каждой новой фотографией я влюбляюсь в тебя всё сильнее.' }
  ],

  /* --- МОЯ МУЗА (Этап 5) --- */
  muse: [
    { src:'assets/photos/Aur1.jpg', text:'Даже в самой огромной толпе или на лугу, полном цветов, мои глаза всегда будут искать только тебя.' },
    { src:'assets/photos/Aur2.jpg', text:'Твоя красота естественна, как природа. Ты расцветаешь с каждым днём всё ярче.' },
    { src:'assets/photos/Aur3.jpg', text:'Если бы цветы умели завидовать, они бы завидовали твоему очарованию.' },
    { src:'assets/photos/Aur4.jpg', text:'Каждая деталь в тебе — искусство. Ты моя главная муза и вдохновение.' },
    { src:'assets/photos/Aur5.jpg', text:'Я готов собирать для тебя букеты каждый день, но ни один из них не сравнится с тобой.' }
  ],

  /* --- ФИНАЛЬНЫЙ ЗАМОК (Этап 6) --- */
  quiz: [
    { q:'Какая деталь была самой запоминающейся на нашем первом свидании?',
      a:['Твой неловкий смех','То, как ты смотрела на меня','Смешная история с официантом','Погода в тот вечер'], correct:1 },
    { q:'Какое качество я ценю в тебе больше всего?',
      a:['Твою искренность','Твоё умение готовить','Твою пунктуальность','Твой музыкальный вкус'], correct:0 },
    { q:'Что я готов делать для тебя каждый день?',
      a:['Покупать цветы','Смотреть твои любимые сериалы','Делать тебя самой счастливой','Носить на руках'], correct:2 }
  ],
  quizNudges: ['Не то… но я всё равно тебя люблю','Ещё попытка ♡','Подумай сердцем'],

  finale: {
    photo: 'assets/photos/Final.jpg',
    caption: 'мы',
    text: 'Любимая,\n\nкаждая фотография, каждое воспоминание и каждая улыбка в этом месте — лишь крошечная часть того, что ты значишь для меня.\n\nТы — моя опора, моё вдохновение и моя лучшая история. Я собрал всё это, чтобы ещё раз напомнить: ты невероятная.\n\nСпасибо, что ты есть. Я тебя люблю.'
  },

  /* --- АССЕТЫ --- */
  flowers: [
    'assets/flowers/flower1-Photoroom.png','assets/flowers/flower2-Photoroom.png',
    'assets/flowers/flower3-Photoroom.png','assets/flowers/flower4-Photoroom.png',
    'assets/flowers/flower5-Photoroom.png','assets/flowers/flower6-Photoroom.png',
    'assets/flowers/flower7-Photoroom.png','assets/flowers/flower8-Photoroom.png',
    'assets/flowers/flower9-Photoroom.png'
  ],
  hearts: ['assets/ui/heart1.svg','assets/ui/heart2.svg','assets/ui/heart3.svg','assets/ui/heart4.svg'],
  music: 'assets/audio/music.mp3',   // необязательно: если файла нет — кнопка просто спрячется

  scratchThreshold: 0.68             // сколько нужно стереть (0.68 = 68%)
};

/* =====================================================================
   УТИЛИТЫ
   ===================================================================== */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const isTouch = matchMedia('(hover:none)').matches;
const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
const isMobile = () => innerWidth < 720;

const store = {
  get: k => { try { return localStorage.getItem('ls_' + k) === '1'; } catch { return false; } },
  set: k => { try { localStorage.setItem('ls_' + k, '1'); } catch {} },
  num: (k, v) => {
    try {
      if (v === undefined) return +(localStorage.getItem('ls_' + k) || 0);
      localStorage.setItem('ls_' + k, v);
    } catch { return 0; }
  },
  clear: () => { try { Object.keys(localStorage).filter(k => k.startsWith('ls_')).forEach(k => localStorage.removeItem(k)); } catch {} }
};

let currentScreen = 'preload';
function showScreen(name) {
  const next = $('#screen-' + name);
  const prev = $('#screen-' + currentScreen);
  if (!next || name === currentScreen) return;
  if (prev) {
    prev.classList.remove('is-active');
    prev.classList.add('is-leaving');
    setTimeout(() => prev.classList.remove('is-leaving'), 460);
  }
  next.classList.remove('is-leaving');
  next.classList.add('is-active');
  currentScreen = name;
}

function flash() { const f = $('#flash'); f.classList.remove('fire'); void f.offsetWidth; f.classList.add('fire'); }

/* печатная машинка. Возвращает { stop, skip, done } — по тапу текст допечатывается сразу */
function typeWriter(el, text, speed, done) {
  let i = 0, halted = false, finished = false, t;
  const caret = '<span class="caret"></span>';
  const render = () => { el.innerHTML = text.slice(0, i).replace(/\n/g, '<br>') + caret; };
  const finish = () => {
    if (finished) return;
    finished = true; halted = true; clearTimeout(t);
    el.innerHTML = text.replace(/\n/g, '<br>');
    done && done();
  };
  const step = () => {
    if (halted) return;
    if (i < text.length) {
      i++; render();
      const ch = text[i - 1];
      t = setTimeout(step, ch === '\n' ? speed * 8 : (ch === ',' || ch === '.' ? speed * 5 : speed));
    } else finish();
  };
  render(); t = setTimeout(step, 260);
  return {
    stop: () => { halted = true; clearTimeout(t); },
    skip: finish,
    isDone: () => finished
  };
}

/* мягкий 3D-наклон карточек за курсором */
function initTilt() {
  if (isTouch) return;
  $$('.tilt').forEach(el => {
    let raf = null;
    el.addEventListener('pointermove', e => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.classList.add('tilting');
        el.style.setProperty('--ry', ((px - .5) * 12).toFixed(2) + 'deg');
        el.style.setProperty('--rx', ((.5 - py) * 12).toFixed(2) + 'deg');
        el.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        el.style.setProperty('--my', (py * 100).toFixed(1) + '%');
      });
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('tilting');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--rx', '0deg');
    });
  });
}

/* частицы */
function burst(x, y, n, colorFn) {
  const layer = $('#fx-layer');
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.className = 'pop-particle';
    const a = rnd(0, Math.PI * 2), d = rnd(30, 110);
    p.style.left = x + 'px'; p.style.top = y + 'px';
    p.style.setProperty('--px', Math.cos(a) * d + 'px');
    p.style.setProperty('--py', Math.sin(a) * d + 'px');
    const s = rnd(4, 9); p.style.width = s + 'px'; p.style.height = s + 'px';
    if (colorFn) p.style.background = colorFn();
    layer.appendChild(p);
    setTimeout(() => p.remove(), 800);
  }
}

/* =====================================================================
   ПРЕЛОАДЕР
   ===================================================================== */
function preload() {
  const list = [...CONFIG.flowers, ...CONFIG.hearts,
    ...CONFIG.memories.map(m => m.src), ...CONFIG.muse.map(m => m.src), CONFIG.finale.photo];
  const fill = $('#preload-fill');
  let loaded = 0;
  return new Promise(resolve => {
    const tick = () => {
      loaded++;
      fill.style.width = Math.round(loaded / list.length * 100) + '%';
      if (loaded >= list.length) setTimeout(resolve, 520);
    };
    // страховка: не ждём вечно, если какой-то файл не открылся
    const guard = setTimeout(resolve, 9000);
    list.forEach(src => {
      const img = new Image();
      img.onload = img.onerror = tick;
      img.src = src;
    });
    Promise.resolve().then(() => { if (!list.length) { clearTimeout(guard); resolve(); } });
  });
}

/* =====================================================================
   ЭТАП 1: ПОЛЕ ЦВЕТОВ (3D) + ПАРОЛЬ
   ===================================================================== */
const field = $('#flower-field');
let flowerCount = 0;

function growField() {
  const w = innerWidth, h = innerHeight;
  const cx = w / 2, cy = h / 2;
  const maxR = Math.hypot(cx, cy) * 1.08;
  const dense = isMobile() ? 58 : 74;               // шаг спирали (чем больше — тем меньше цветов)
  let total = Math.ceil(Math.pow(maxR / dense, 2));
  total = clamp(total, 40, isMobile() ? 92 : 165);  // жёсткий потолок ради плавности
  flowerCount = total;

  const GOLD = 137.507764 * Math.PI / 180;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < total; i++) {
    const r = dense * Math.sqrt(i);
    const a = i * GOLD;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const depth = (i % 3) - 1;                       // -1 / 0 / 1 — три плана глубины
    const z = depth * 90;
    const size = (isMobile() ? rnd(86, 124) : rnd(132, 196)) * (1 + depth * .06);

    const el = document.createElement('div');
    el.className = 'fl';
    el.style.width = size + 'px';
    el.style.setProperty('--x', (x - size / 2) + 'px');
    el.style.setProperty('--y', (y - size / 2) + 'px');
    el.style.setProperty('--z', z + 'px');
    el.style.setProperty('--r', rnd(0, 360).toFixed(1) + 'deg');
    el.style.setProperty('--o', depth < 0 ? .72 : 1);
    el.style.setProperty('--i', i);
    el.style.setProperty('--bx', rnd(-70, 70) + 'vw');
    el.style.setProperty('--by', rnd(-60, -10) + 'vh');
    el.style.animationDelay = (i * (reduced ? 0 : 9)) + 'ms';
    if (depth < 0) el.style.filter = 'blur(2px)';
    if (depth > 0) el.style.filter = 'blur(.6px)';

    const img = document.createElement('img');
    img.src = CONFIG.flowers[i % CONFIG.flowers.length];
    img.alt = '';
    el.appendChild(img);
    frag.appendChild(el);
  }
  field.appendChild(frag);

  // поле дышит за курсором — даёт настоящий объём
  if (!isTouch && !reduced) {
    let raf = null;
    addEventListener('pointermove', e => {
      if (currentScreen !== 'login' || raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const dx = (e.clientX / innerWidth - .5), dy = (e.clientY / innerHeight - .5);
        field.style.transform = `rotateY(${(dx * 7).toFixed(2)}deg) rotateX(${(-dy * 7).toFixed(2)}deg) translate3d(${-dx * 26}px,${-dy * 26}px,0)`;
      });
    }, { passive: true });
  }

  const ready = reduced ? 400 : total * 9 + 950;
  setTimeout(() => $('.login-wrap').classList.add('show'), ready);
}

function initLogin() {
  $('#hint-text').textContent = CONFIG.hint;
  $('#hint-btn').addEventListener('click', () => $('#hint-text').classList.remove('blurred'));

  const input = $('#password-input'), err = $('#error-msg'), card = $('#login-card');
  let tries = 0;

  const check = () => {
    const val = input.value.trim().toLowerCase();
    if (val === String(CONFIG.password).trim().toLowerCase()) {
      err.classList.remove('show');
      store.set('unlocked');
      $$('.fl', field).forEach(f => { f.style.animationDelay = ''; });
      field.classList.add('blow');
      $('.login-wrap').classList.remove('show');
      setTimeout(() => { field.innerHTML = ''; startEnvelope(); }, 1150);
    } else {
      err.textContent = CONFIG.wrongAnswers[tries % CONFIG.wrongAnswers.length];
      err.classList.add('show');
      tries++;
      card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
      input.select();
    }
  };

  $('#login-btn').addEventListener('click', check);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
}

/* =====================================================================
   ЭТАП 2: КОНВЕРТ + ПИСЬМО
   ===================================================================== */
let letterTypeCancel = null;

function startEnvelope() {
  showScreen('envelope');
  const env = $('#envelope');
  setTimeout(() => { env.classList.add('land'); $('#env-shadow').classList.add('land'); }, 120);
  setTimeout(() => $('#env-hint').classList.add('show'), 1750);
}

function initEnvelope() {
  const env = $('#envelope'), seal = $('#wax-seal');
  $('#letter-date').textContent = CONFIG.letter.date;
  $('#letter-salut').textContent = CONFIG.letter.salut;
  $('#letter-sign').textContent = CONFIG.letter.sign;

  let opening = false;
  seal.addEventListener('click', () => {
    if (opening) return;
    opening = true;

    const r = seal.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 16,
      () => `radial-gradient(circle,#fff,${pick(['#e6bd74', '#c08e38', '#d63b6e'])})`);

    $('#env-hint').classList.remove('show');
    env.classList.add('cracked');
    setTimeout(() => env.classList.add('opened'), 520);
    setTimeout(() => env.classList.add('note-out'), 1380);
    setTimeout(() => {
      env.classList.add('note-fade');
      $('#env-scene').classList.add('gone');
      $('#letter').classList.add('show');
    }, 2180);

    setTimeout(() => {
      letterTypeCancel = typeWriter($('#letter-body'), CONFIG.letter.body, reduced ? 2 : 22, () => {
        $('#letter-sign').classList.add('show');
        setTimeout(() => $('#letter-btn').classList.add('show'), 420);
      });
    }, 3000);
  });

  // тап по бумаге допечатывает письмо целиком — не заставляем ждать
  $('.letter-paper').addEventListener('click', e => {
    if (e.target.closest('#letter-btn')) return;
    letterTypeCancel && letterTypeCancel.skip();
  });

  // «нырок» в письмо: бумага разворачивается на весь экран и становится миром
  $('#letter-btn').addEventListener('click', () => {
    const letter = $('#letter');
    const r = letter.getBoundingClientRect();
    const dive = Math.max(innerWidth / r.width, innerHeight / r.height) * 1.35;
    letter.style.setProperty('--dive', dive.toFixed(2));
    letter.classList.add('dive');
    letterTypeCancel && letterTypeCancel.stop();
    setTimeout(() => { flash(); }, 780);
    setTimeout(() => { enterMain(); letter.remove(); $('#env-stage').remove(); }, 1150);
  });
}

/* =====================================================================
   ЭТАП 3: ГЛАВНОЕ МЕНЮ + ЛЕТАЮЩИЕ СЕРДЦА
   ===================================================================== */
const heartsLayer = $('#hearts-layer');
let heartTimer = null, heartsAlive = 0;
const MAX_HEARTS = isMobile() ? 8 : 14;

function spawnHeart() {
  if (heartsAlive >= MAX_HEARTS || currentScreen !== 'main') return;

  const depth = Math.random();                       // 0 — далеко, 1 — близко
  const size = 26 + depth * 34;
  const dur = 22 - depth * 9;

  const rise = document.createElement('div');
  rise.className = 'heart-rise ' + (depth < .3 ? 'far' : depth < .6 ? 'mid' : '');
  rise.style.setProperty('--x', rnd(3, 92) + '%');
  rise.style.setProperty('--size', size + 'px');
  rise.style.setProperty('--dur', dur + 's');
  rise.style.setProperty('--drift', rnd(-80, 80) + 'px');
  rise.style.setProperty('--op', (.45 + depth * .55).toFixed(2));
  rise.style.setProperty('--sway', rnd(2.4, 4.6) + 's');

  const sway = document.createElement('div');
  sway.className = 'heart-sway';
  const img = document.createElement('img');
  img.src = pick(CONFIG.hearts); img.alt = '';
  sway.appendChild(img); rise.appendChild(sway);

  let popped = false;
  const kill = () => { if (!rise.isConnected) return; rise.remove(); heartsAlive--; };

  rise.addEventListener('click', e => {
    e.stopPropagation();
    if (popped) return;
    popped = true;

    const r = rise.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    burst(cx, cy, 10);

    const b = document.createElement('div');
    b.className = 'bubble';
    b.textContent = pick(CONFIG.compliments);
    b.style.left = clamp(cx, 90, innerWidth - 90) + 'px';
    b.style.top = cy + 'px';
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 4300);

    img.style.transition = 'transform .28s ease-out, opacity .28s ease-out';
    img.style.transform = 'scale(2.4)';
    img.style.opacity = '0';
    setTimeout(kill, 300);
    setTimeout(spawnHeart, 700);
  });

  heartsLayer.appendChild(rise);
  heartsAlive++;
  setTimeout(kill, dur * 1000 + 200);
}

function startHearts() {
  if (heartTimer) return;
  for (let i = 0; i < MAX_HEARTS; i++) setTimeout(spawnHeart, i * 700);
  heartTimer = setInterval(spawnHeart, 1600);
}

function enterMain() {
  showScreen('main');
  startHearts();
  refreshProgress();
}

/* прогресс глав и замок */
function refreshProgress() {
  const h = store.get('history'), m = store.get('muse');
  $('#card-history').classList.toggle('done', h);
  $('#card-muse').classList.toggle('done', m);
  const fin = $('#card-finale');
  if (h && m) { fin.classList.remove('choice-locked'); fin.classList.add('choice-unlocked'); }
  else { fin.classList.add('choice-locked'); fin.classList.remove('choice-unlocked'); }
}

function initMenu() {
  $('#card-history').addEventListener('click', openHistory);
  $('#card-muse').addEventListener('click', openMuse);
  $('#card-finale').addEventListener('click', () => {
    if ($('#card-finale').classList.contains('choice-locked')) return;
    openQuiz();
  });
  $$('.choice').forEach(c => c.addEventListener('keydown', e => { if (e.key === 'Enter') c.click(); }));

  $$('.back-btn').forEach(b => b.addEventListener('click', () => {
    const from = b.dataset.back;
    if (from === 'history' && historyState.reading) { closeMemory(); return; }
    if (from === 'muse' && $('#muse-modal').classList.contains('show')) { closeMuse(); return; }
    if (from === 'history') teardownHistory();
    if (from === 'muse') teardownMuse();
    enterMain();
  }));
}

/* =====================================================================
   ЭТАП 4: НАША ИСТОРИЯ — 3D-колода со стирающимся стеклом
   ===================================================================== */
const deck = $('#deck');
const historyState = { cards: [], idx: 0, base: 0, reading: false, cancel: null };

function cardSize() {
  const w = clamp(innerWidth * (isMobile() ? .62 : .24), 210, 320);
  return { w, h: w * 1.28 };
}

function openHistory() {
  showScreen('history');
  buildDeck();
  $('#deck-hint').classList.add('show');
}

function buildDeck() {
  teardownHistory();
  const { w, h } = cardSize();
  $('.deck-stage').style.setProperty('--cw', w + 'px');
  $('.deck-stage').style.setProperty('--ch', h + 'px');
  deck.style.width = w + 'px'; deck.style.height = h + 'px';

  let base = store.num('histIdx');
  if (base >= CONFIG.memories.length || base < 0) base = 0;
  historyState.base = base;

  CONFIG.memories.slice(base).forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'card3d';
    card.innerHTML =
      `<img class="photo" src="${m.src}" alt="">` +
      `<canvas></canvas>` +
      `<div class="gloss"></div>` +
      `<div class="cap">${m.cap}</div>`;
    card.style.setProperty('--fx', (i % 2 ? 1 : -1) * 120 + 'vw');
    card.addEventListener('click', () => {
      const top = historyState.cards[historyState.idx];
      if (top && top.el === card && top.opened && !historyState.reading) reopenMemory(top);
    });
    deck.appendChild(card);
    historyState.cards.push({ el: card, data: m, ready: false, opened: false });
  });

  historyState.idx = 0;
  layoutDeck();
  setTimeout(armTopCard, 700);
  updateHistoryCounter();
}

function layoutDeck() {
  historyState.cards.forEach((c, i) => {
    const d = i - historyState.idx;
    if (d < 0) return;
    const dir = d % 2 ? 1 : -1;
    const spread = isMobile() ? 10 : 22;
    c.el.style.zIndex = 100 - d;
    c.el.style.transform =
      `translate3d(${dir * d * spread}px, ${-d * 12}px, ${-d * 76}px) rotateZ(${dir * d * 2.4}deg) rotateY(${dir * d * -3}deg)`;
    c.el.style.opacity = d > 3 ? 0 : 1 - d * .13;
    c.el.style.filter = d > 0 ? `blur(${Math.min(d * .8, 2.2)}px) brightness(${1 - d * .04})` : 'none';
    c.el.style.pointerEvents = d === 0 ? 'auto' : 'none';
  });
}

function updateHistoryCounter() {
  const n = historyState.base + historyState.idx;
  $('#history-counter').innerHTML = `<b>${n}</b> / ${CONFIG.memories.length}`;
}

/* --- стираемое «запотевшее стекло» на canvas --- */
function armTopCard() {
  const c = historyState.cards[historyState.idx];
  if (!c || c.ready) return;
  c.ready = true;

  const canvas = c.el.querySelector('canvas');
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const cw = canvas.offsetWidth, ch = canvas.offsetHeight;
  canvas.width = cw * dpr; canvas.height = ch * dpr;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.scale(dpr, dpr);

  // матовое стекло с розово-перламутровым отливом
  const g = ctx.createLinearGradient(0, 0, cw, ch);
  g.addColorStop(0, '#f3eef2'); g.addColorStop(.45, '#fbe6ee'); g.addColorStop(1, '#e8dcea');
  ctx.fillStyle = g; ctx.fillRect(0, 0, cw, ch);

  // «пыльца»
  for (let i = 0; i < 380; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * .5})`;
    ctx.beginPath(); ctx.arc(Math.random() * cw, Math.random() * ch, Math.random() * 1.6, 0, 7); ctx.fill();
  }
  ctx.fillStyle = 'rgba(210,150,180,.75)';
  ctx.font = `${Math.round(cw * .12)}px Caveat, cursive`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('сотри меня', cw / 2, ch / 2);

  let drawing = false, last = null, checking = false, doneFlag = false;

  const pos = e => {
    const r = canvas.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (cw / r.width), y: (e.clientY - r.top) * (ch / r.height) };
  };

  const erase = p => {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = cw * .19;
    if (last) { ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(p.x, p.y, cw * .095, 0, 7); ctx.fill();
    last = p;
  };

  const measure = () => {
    if (checking || doneFlag) return;
    checking = true;
    setTimeout(() => {
      checking = false;
      const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let clear = 0, total = 0;
      for (let i = 3; i < d.length; i += 4 * 17) { total++; if (d[i] < 60) clear++; }
      if (clear / total > CONFIG.scratchThreshold) { doneFlag = true; revealMemory(c, canvas); }
    }, 130);
  };

  canvas.addEventListener('pointerdown', e => {
    drawing = true; last = null; canvas.setPointerCapture(e.pointerId);
    $('#deck-hint').classList.remove('show'); erase(pos(e));
  });
  canvas.addEventListener('pointermove', e => { if (drawing) { erase(pos(e)); measure(); } });
  canvas.addEventListener('pointerup', () => { drawing = false; last = null; measure(); });
  canvas.addEventListener('pointercancel', () => { drawing = false; last = null; });
}

function revealMemory(c, canvas) {
  flash();
  c.el.classList.add('revealed');
  canvas.style.transition = 'opacity .55s ease';
  canvas.style.opacity = '0';
  canvas.style.pointerEvents = 'none';

  c.opened = true;
  historyState.reading = true;
  $('#screen-history').classList.add('reading');

  setTimeout(() => {
    $('#memory-title').textContent = c.data.cap;
    $('#memory-panel').classList.add('show');
    $('#memory-save').classList.remove('show');
    historyState.cancel = typeWriter($('#memory-text'), c.data.text, reduced ? 2 : 26,
      () => $('#memory-save').classList.add('show'));
  }, 520);
}

/* если она закрыла панель кнопкой «назад» — карточку можно открыть снова кликом */
function reopenMemory(c) {
  historyState.reading = true;
  $('#screen-history').classList.add('reading');
  $('#memory-title').textContent = c.data.cap;
  $('#memory-text').textContent = c.data.text;
  $('#memory-panel').classList.add('show');
  $('#memory-save').classList.add('show');
}

function closeMemory() {
  historyState.cancel && historyState.cancel.stop();
  historyState.reading = false;
  $('#screen-history').classList.remove('reading');
  $('#memory-panel').classList.remove('show');
}

$('#memory-text').addEventListener('click', () => { historyState.cancel && historyState.cancel.skip(); });

$('#memory-save').addEventListener('click', () => {
  const c = historyState.cards[historyState.idx];
  closeMemory();
  if (!c) return;
  c.el.classList.add('fly');
  setTimeout(() => c.el.remove(), 900);

  historyState.idx++;
  updateHistoryCounter();
  store.num('histIdx', historyState.base + historyState.idx);

  if (historyState.idx >= historyState.cards.length) {
    store.set('history');
    store.num('histIdx', 0);                      // чтобы главу можно было пройти заново
    setTimeout(() => { teardownHistory(); enterMain(); }, 950);
  } else {
    layoutDeck();
    setTimeout(() => { armTopCard(); $('#deck-hint').classList.add('show'); }, 640);
  }
});

function teardownHistory() {
  closeMemory();
  deck.innerHTML = '';
  historyState.cards = []; historyState.idx = 0; historyState.base = 0;
  $('#deck-hint').classList.remove('show');
}

/* =====================================================================
   ЭТАП 5: МОЯ МУЗА — параллакс-луг 2.5D + гироскоп
   ===================================================================== */
const meadow = {
  layers: [],            // {el, speed, items:[{el, bx, by, r, near}]}
  photos: [],
  found: 0,
  tx: 0, ty: 0, cx: 0, cy: 0,     // цель и текущее смещение параллакса
  px: -9999, py: -9999,           // курсор
  raf: null, hintTimer: null, active: false
};

function openMuse() {
  showScreen('muse');
  buildMeadow();
  meadow.active = true;
  loopMeadow();
  $('#meadow-hint').textContent = isTouch ? 'наклоняй телефон и ищи фото' : 'двигай мышкой — цветы расступаются';
  $('#meadow-hint').classList.add('show');
  setTimeout(() => $('#meadow-hint').classList.remove('show'), 4200);
  armMuseHint();
  requestGyro();
}

function buildMeadow() {
  teardownMuse();
  const mob = isMobile();
  const cfg = [
    { el: $('#m-far'),  n: mob ? 26 : 46, min: 86,  max: 148, speed: .012, near: false },
    { el: $('#m-mid'),  n: mob ? 20 : 34, min: 118, max: 192, speed: .034, near: false },
    { el: $('#m-near'), n: mob ? 12 : 20, min: 190, max: 285, speed: .07,  near: true }
  ];

  cfg.forEach(c => {
    const items = [];
    for (let i = 0; i < c.n; i++) {
      items.push(makeFlower(c.el, rnd(-6, 106), rnd(-6, 106), rnd(c.min, c.max), c.near, items));
    }
    meadow.layers.push({ el: c.el, speed: c.speed, items });
  });

  // фотографии в среднем слое + «прикрывающие» цветы в ближнем
  let base = store.num('museFound');
  if (base >= CONFIG.muse.length || base < 0) base = 0;
  meadow.found = base;
  syncMuseCounter();

  const rest = CONFIG.muse.slice(base);
  const spots = scatterSpots(rest.length);
  rest.forEach((data, i) => {
    const p = document.createElement('div');
    p.className = 'hide-photo';
    p.style.left = spots[i].x + '%';
    p.style.top = spots[i].y + '%';
    p.style.transform = `translate(-50%,-50%) rotate(${rnd(-22, 22).toFixed(1)}deg)`;
    p.innerHTML = `<img src="${data.src}" alt="">`;
    $('#m-mid').appendChild(p);

    p.addEventListener('pointerenter', () => {
      if (!p.classList.contains('found')) p.style.transform = p.style.transform.replace(/ scale\([^)]*\)/, '') + ' scale(1.8)';
    });
    p.addEventListener('pointerleave', () => { p.style.transform = p.style.transform.replace(/ scale\([^)]*\)/, ''); });
    p.addEventListener('click', e => { e.stopPropagation(); if (!p.classList.contains('found')) openMuseModal(p, data); });

    meadow.photos.push({ el: p, data, found: false });

    // два крупных цветка сверху — фото интригующе выглядывает
    const near = meadow.layers[2];
    for (let f = 0; f < 2; f++) {
      near.items.push(makeFlower(near.el,
        spots[i].x + rnd(-7, 7), spots[i].y + rnd(-7, 7), rnd(200, 280), true, null));
    }
  });

  cacheMeadowPositions();
}

function makeFlower(layer, x, y, size, near, siblings) {
  const el = document.createElement('div');
  el.className = 'mf';
  el.style.width = size + 'px';
  el.style.left = x + '%';
  el.style.top = y + '%';
  const r = rnd(0, 360);
  el.innerHTML = `<img src="${pick(CONFIG.flowers)}" alt="">`;
  const item = { el, r, bx: 0, by: 0, near, px: 0, py: 0 };
  el.style.transform = `translate(-50%,-50%) rotate(${r.toFixed(1)}deg)`;
  layer.appendChild(el);
  return item;
}

/* раскидываем фото так, чтобы они не слипались */
function scatterSpots(n) {
  const spots = [];
  let guard = 0;
  while (spots.length < n && guard++ < 900) {
    const p = { x: rnd(14, 86), y: rnd(16, 84) };
    if (spots.every(s => Math.hypot(s.x - p.x, s.y - p.y) > 26)) spots.push(p);
  }
  while (spots.length < n) spots.push({ x: rnd(14, 86), y: rnd(16, 84) });
  return spots;
}

/* кэшируем экранные координаты — чтобы не дёргать layout в каждом кадре */
function cacheMeadowPositions() {
  meadow.layers.forEach(l => l.items.forEach(it => {
    const r = it.el.getBoundingClientRect();
    it.px = r.left + r.width / 2 + meadow.cx * l.speed * 400;
    it.py = r.top + r.height / 2 + meadow.cy * l.speed * 400;
  }));
}

function loopMeadow() {
  if (!meadow.active) return;
  meadow.cx += (meadow.tx - meadow.cx) * .07;
  meadow.cy += (meadow.ty - meadow.cy) * .07;

  meadow.layers.forEach(l => {
    const dx = -meadow.cx * l.speed * 400, dy = -meadow.cy * l.speed * 400;
    l.el.style.transform = `translate3d(${dx.toFixed(1)}px,${dy.toFixed(1)}px,0)`;

    if (l.speed > .05 && !isTouch) {                 // расталкивание только в ближнем слое
      const R = 160;
      l.items.forEach(it => {
        const fx = it.px + dx, fy = it.py + dy;
        const ddx = fx - meadow.px, ddy = fy - meadow.py;
        const dist = Math.hypot(ddx, ddy);
        if (dist < R && dist > 0.01) {
          if (!it.pushed) { it.el.style.transition = 'none'; it.pushed = true; }
          const f = (R - dist) / R;
          it.el.style.transform =
            `translate(calc(-50% + ${(ddx / dist * f * 78).toFixed(1)}px), calc(-50% + ${(ddy / dist * f * 78).toFixed(1)}px)) rotate(${it.r.toFixed(1)}deg) scale(${(1 - f * .12).toFixed(3)})`;
        } else if (it.pushed) {
          it.pushed = false;
          it.el.style.transition = '';
          it.el.style.transform = `translate(-50%,-50%) rotate(${it.r.toFixed(1)}deg)`;
        }
      });
    }
  });

  meadow.raf = requestAnimationFrame(loopMeadow);
}

function setMeadowTarget(nx, ny) { meadow.tx = clamp(nx, -1, 1); meadow.ty = clamp(ny, -1, 1); }

addEventListener('pointermove', e => {
  if (currentScreen !== 'muse') return;
  meadow.px = e.clientX; meadow.py = e.clientY;
  setMeadowTarget(e.clientX / innerWidth - .5, e.clientY / innerHeight - .5);
}, { passive: true });

/* гироскоп (на iOS требует разрешения по тапу) */
let gyroOn = false;
function onOrient(e) {
  if (currentScreen !== 'muse') return;
  setMeadowTarget(clamp((e.gamma || 0) / 34, -1, 1), clamp(((e.beta || 0) - 45) / 34, -1, 1));
}
function requestGyro() {
  if (gyroOn || !isTouch || typeof DeviceOrientationEvent === 'undefined') return;
  const attach = () => { addEventListener('deviceorientation', onOrient); gyroOn = true; };
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    const once = () => {
      DeviceOrientationEvent.requestPermission().then(s => { if (s === 'granted') attach(); }).catch(() => {});
      document.removeEventListener('touchend', once);
    };
    document.addEventListener('touchend', once, { once: true });
  } else attach();
}

/* подсказка, если долго не может найти */
function armMuseHint() {
  clearTimeout(meadow.hintTimer);
  meadow.hintTimer = setTimeout(() => {
    const left = meadow.photos.filter(p => !p.found);
    if (!left.length || currentScreen !== 'muse') return;
    left[0].el.classList.add('glow');
    setTimeout(() => left[0].el.classList.remove('glow'), 6000);
    armMuseHint();
  }, 14000);
}

function openMuseModal(el, data) {
  meadow.current = el;
  $('#muse-img').src = data.src;
  $('#muse-text').textContent = data.text;
  $('#muse-modal').classList.add('show');
}

function closeMuse() {
  $('#muse-modal').classList.remove('show');
  const el = meadow.current;
  if (!el) return;
  meadow.current = null;

  const rec = meadow.photos.find(p => p.el === el);
  if (!rec || rec.found) return;
  rec.found = true;
  el.classList.add('found');
  meadow.found++;
  syncMuseCounter();
  store.num('museFound', meadow.found);

  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, 12);

  if (meadow.found >= CONFIG.muse.length) {
    store.set('muse');
    store.num('museFound', 0);                    // главу можно пройти заново
    setTimeout(() => { teardownMuse(); enterMain(); }, 900);
  } else armMuseHint();
}
$('#muse-close').addEventListener('click', closeMuse);

function syncMuseCounter() {
  const total = CONFIG.muse.length;
  $('#found-count').textContent = meadow.found;
  $('#ring-fill').style.strokeDashoffset = (97.4 * (1 - meadow.found / total)).toFixed(1);
}

function teardownMuse() {
  meadow.active = false;
  cancelAnimationFrame(meadow.raf);
  clearTimeout(meadow.hintTimer);
  $('#m-far').innerHTML = ''; $('#m-mid').innerHTML = ''; $('#m-near').innerHTML = '';
  meadow.layers = []; meadow.photos = []; meadow.found = 0;
  meadow.cx = meadow.cy = meadow.tx = meadow.ty = 0;
  $('#found-count').textContent = '0';
  $('#ring-fill').style.strokeDashoffset = '97.4';
  $('#muse-modal').classList.remove('show');
}

/* =====================================================================
   ЭТАП 6: ТЕСТ
   ===================================================================== */
let qIdx = 0;

function openQuiz() {
  qIdx = 0;
  showScreen('quiz');
  $('#quiz-dots').innerHTML = CONFIG.quiz.map(() => '<i class="qdot"></i>').join('');
  renderQuestion();
}

function renderQuestion() {
  const q = CONFIG.quiz[qIdx];
  $('#quiz-question').textContent = q.q;
  $('#quiz-nudge').classList.remove('show');

  $$('.qdot').forEach((d, i) => {
    d.classList.toggle('active', i === qIdx);
    d.classList.toggle('done', i < qIdx);
  });

  const box = $('#quiz-options');
  box.innerHTML = '';
  q.a.forEach((text, i) => {
    const b = document.createElement('button');
    b.className = 'qbtn';
    b.type = 'button';
    b.textContent = text;
    b.style.animationDelay = (i * 70 + 90) + 'ms';
    b.addEventListener('click', () => answer(b, i, q.correct));
    box.appendChild(b);
  });
}

function answer(btn, i, correct) {
  const all = $$('.qbtn');
  if (i === correct) {
    all.forEach(b => b.style.pointerEvents = 'none');
    btn.classList.add('correct');
    const r = btn.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 14,
      () => `radial-gradient(circle,#fff,${pick(['#e6bd74', '#f7e6c4'])})`);
    setTimeout(() => {
      qIdx++;
      if (qIdx < CONFIG.quiz.length) renderQuestion();
      else launchFinale();
    }, 900);
  } else {
    btn.classList.add('wrong');
    $('#quiz-nudge').textContent = pick(CONFIG.quizNudges);
    $('#quiz-nudge').classList.add('show');
    setTimeout(() => btn.classList.remove('wrong'), 700);
  }
}

/* =====================================================================
   ЭТАП 7: ФИНАЛ
   ===================================================================== */
function launchFinale() {
  flash();
  setTimeout(() => {
    showScreen('finale');
    $('#finale-img').src = CONFIG.finale.photo;
    $('#frame-cap').textContent = CONFIG.finale.caption;
    store.set('finale');
    requestAnimationFrame(() => $('#screen-finale').classList.add('show'));
    petals(reduced ? 0 : 34);
    setTimeout(() => {
      const t = typeWriter($('#finale-text'), CONFIG.finale.text, reduced ? 2 : 22, () => {
        $('#replay-btn').classList.remove('is-hidden');
        requestAnimationFrame(() => $('#replay-btn').classList.add('show'));
        petals(reduced ? 0 : 22);
      });
      $('#finale-text').addEventListener('click', () => t.skip());
    }, 900);
  }, 520);
}

function petals(n) {
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      const p = document.createElement('i');
      p.className = 'petal';
      const s = rnd(7, 15);
      p.style.width = s + 'px'; p.style.height = s * 1.25 + 'px';
      p.style.left = rnd(0, 100) + 'vw';
      p.style.setProperty('--fx', rnd(-90, 90) + 'px');
      p.style.setProperty('--fdur', rnd(5, 11) + 's');
      p.style.opacity = rnd(.4, .9);
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 12000);
    }, i * 220);
  }
}

$('#replay-btn').addEventListener('click', () => { store.clear(); location.reload(); });

/* =====================================================================
   МУЗЫКА (кнопка исчезает, если файла нет)
   ===================================================================== */
function initMusic() {
  const btn = $('#music-btn');
  const audio = new Audio();
  audio.loop = true; audio.volume = 0; audio.preload = 'auto';
  let ok = false, on = false;

  const ready = () => { if (ok) return; ok = true; btn.classList.remove('is-hidden'); btn.classList.add('muted'); };
  audio.addEventListener('canplay', ready);
  audio.addEventListener('loadeddata', ready);
  audio.addEventListener('error', () => { ok = false; btn.classList.add('is-hidden'); });
  audio.src = CONFIG.music;

  const fade = to => {
    const step = () => {
      audio.volume = clamp(audio.volume + (to > audio.volume ? .02 : -.02), 0, .45);
      if (Math.abs(audio.volume - to) > .02) requestAnimationFrame(step);
      else if (to === 0) audio.pause();
    };
    step();
  };

  btn.addEventListener('click', () => {
    if (!ok) return;
    on = !on;
    btn.classList.toggle('muted', !on);
    if (on) { audio.play().catch(() => {}); fade(.35); } else fade(0);
  });
}

/* =====================================================================
   СТАРТ
   ===================================================================== */
addEventListener('resize', () => {
  if (currentScreen === 'muse') cacheMeadowPositions();
  if (currentScreen === 'history' && historyState.cards.length) {
    const { w, h } = cardSize();
    $('.deck-stage').style.setProperty('--cw', w + 'px');
    $('.deck-stage').style.setProperty('--ch', h + 'px');
    deck.style.width = w + 'px'; deck.style.height = h + 'px';
  }
});

(async function boot() {
  if (location.search.includes('reset')) store.clear();

  initLogin();
  initEnvelope();
  initMenu();
  initMusic();
  initTilt();

  $('#muse-total').textContent = CONFIG.muse.length;
  $('#history-counter').innerHTML = `<b>0</b> / ${CONFIG.memories.length}`;

  await preload();

  if (store.get('unlocked')) {           // уже входила — сразу в меню
    $('#screen-preload').classList.remove('is-active');
    currentScreen = 'preload';
    enterMain();
  } else {
    showScreen('login');
    growField();
  }
})();
