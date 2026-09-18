/* =====================================================================
   ██  ВСЁ, ЧТО НУЖНО МЕНЯТЬ — ЗДЕСЬ, В БЛОКЕ CONFIG  ██
   ===================================================================== */
const CONFIG = {

  /* --- ПАРОЛЬ --- */
  password: '25.05.2025',                                   // <= впиши свой
  hint: 'День, когда началось наше общее счастье',
  wrongAnswers: [                                     // подсказки при ошибке
    'Кис, ты почти права…',
    'Попробуй еще раз, любимая',
    'Ты точно запонила этот день ♡'
  ],

  /* --- ПИСЬМО (Этап 2) --- */
  letter: {
    date: 'написано сердцем',
    salut: 'Привет, любовь моя',
    body: 'Недавно ты попросила меня скинуть 10 моих самых любимых фотографий с тобой и вот мы здесь.\n\nВсё что ты тут увидишь - самое ценное для меня, я люблю каждое мгновение жизни с тобой, а фото, которые тут представленны - одни из самых лучших.\n\nОткрывай. Дальше всё — про тебя и нас.',
    sign: 'пузатый Владос'
  },

  /* --- КОМПЛИМЕНТЫ В СЕРДЦАХ (Этап 3) --- */
  compliments: [
    'Смотрю на тебя и замирает дыхание',
    'Обожаю видеть твою улыбку',
    'Ты — моя душа',
    'Ты делаешь каждый мой день незабываемым',
    'Лучшее для меня - это ты',
    'Теперь мечтаю посещать Москву каждый день',
    'Самая красивая на свете',
    'Моя киса',
    'Время с тобой пролетает как мгновение',
    'Люблю быть твоим песиком'
  ],

  /* --- НАША ИСТОРИЯ (Этап 4) --- */
  memories: [
    { src:'assets/photos/We3.jpg', cap:'Начало новой жизни', text:'Обожаю смотреть на эту флотографию. Она стала для меня символом начала нашей новой главы отношений. Тогда мы начали ездить в Москву, что объединяло нас еще крепче. Воспоминания с ней для меня - бесценны.' },
    { src:'assets/photos/We2.jpg', cap:'Только мы',      text:'Сначала можно подумать, что эта фотография как многие другие у тебя в зеркале, но для меня она запомнилась очень ярко. Начало апреля - начало новых чувств к тебе, которые я раньше никогда не испытывал.' },
    { src:'assets/photos/We1.jpg', cap:'Наша годовщина',      text:'Фото, сделанное на фотоаппарат. Это был год наших отношений и, знаешь, я никогда не забуду этот день. Несмотря на непогоду всё получилось даже лучше, чем я тогда планировал и тот день подарил мне незабываемые эмоции. Как мы гуляли, ели клубнику в шоколаде и невероятно круто проводили время.' },
    { src:'assets/photos/We4.jpg', cap:'Первая поездка на сапах',    text:'В этот день мы впервые поехали вместе кататься на сапах. Это было лучшее начало лета для меня - я, ты и никого посередине большой реки. Тот день приблизил меня к тебе еще больше. Моей мечтой всегда было съездить с тобой покупаться и она сбылась. Один из многих, но особенный день, когда я был счастлив.' },
    { src:'assets/photos/We5.jpg', cap:'Совместная жизнь',     text:'Люблю эту фотографию за то, что ты прекрасна, а еще она мне напоминает наши две недели в Нижнем. Жить с тобой - это рай. За это время я понял, что ты лучший человек в домашнем быту. Ты хозяйственная, всегда поможешь, а просыпаться от твоих поцелуев - это невероятно. Моя главная мечта - жить с тобой всю жизнь.' }
  ],

  /* --- МОЯ МУЗА (Этап 5) --- */
  muse: [
    { src:'assets/photos/Aur3.jpg', text:'На этой фотографии запечатлена девушка всей моей жизни. На ней ты идеальна, ракурс и освещение, работа оператора. Всё сложилось в пользу того, что я не могу не смотреть на эту фотографию. А еще, это последний раз, когда мы катались на сапах этим летом и этот день мне запомнился)' },
    { src:'assets/photos/Aur5.jpg', text:'Твой день рождения. Ты была такой счастливой и радостной. А как ты знаешь - самое главное для меня это твое счастье. Я буду долго вспоминать твой день рождения, ведь оно получилось на 5 сплюсом, а люблю я эту фотографию, потому что ты на ней самая счастливая.' },
    { src:'assets/photos/Aur4.jpg', text:'Выпускной. Когда я увидел эту фотку - моя челюсть не выдержала. Ты выбрала самое красивое платье, которое я видел и когда ты в нем пришла, я не мог оторвать глаз. Меня не интересовало никакое выступление или прогулка после, только - ты и твое платье. Ты сделала этот выпускной лучшим в моей жизни.' },
    { src:'assets/photos/Aur1.jpg', text:'Спонтанная фотка, сделанная мной в Нижнем. Мы тогда ехали на курсы и твой лук был великолепен. Вечером мы пошли в Министерство завтраков, где впервые вместе побывали в хорошем ресторане.' },
    { src:'assets/photos/Aur2.jpg', text:'Недавняя фотография тебя со цветами. Я был и сейчас очень рад, что они тебе понравились. Одно из любимых моих занятий - выбирать и дарить тебе цветочки.' }
  ],

  /* --- ФИНАЛЬНЫЙ ЗАМОК (Этап 6) --- */
  quiz: [
    { q:'Где ты разрешила мне любить тебя до скончания веков?',
      a:['В ресторане Министерство завтраков','В кино на Человеке пауке','На лавочке около Вышки','Призрак оперы'], correct:2 },
    { q:'Какой подарок для меня самый ценный?',
      a:['Книжка по программированию','Скандик, оформленный тобой','Проводить время вместе','Ты'], correct:3 },
    { q:'Что мне больше всего нравится делать для того, чтобы ты была счастлива?',
      a:['Покупать цветы','Проявлять заботу','Делать комплименты','Носить на руках'],
      correct:[0,1,2,3] }   // МАССИВ = вопрос с множественным выбором: дальше пустит, только когда отмечены ВСЕ эти варианты
  ],
  quizNudges: ['Почти… но ты всё равно у меня самая лучшая','Кис, ёще попыточку ♡','Рурр, ты точно знаешь ответ'],

  /* тексты для вопроса с множественным выбором */
  quizMultiHint:    'Отметь всё, что считаешь верным',
  quizMultiConfirm: 'Проверить',
  quizMultiNudges:  ['Жена моя, может тут что-то еще?','Ты уже близко, котость','Почти попала, попробуй ещё ♡'],

  finale: {
    photo: 'assets/photos/Final.jpg',
    caption: 'ми ♡',
    text: 'Котость,\n\nкаждая фотография, которую ты тут увидела, лишь частичка всех воспоминаний, которые я о тебе храню. И эти благодаря этим фотографиям я погружаюсь в мысли и вспоминаю, как нам было хорошо, но знаю, что впереди будет еще лучше.\n\nТы - самая невероятная девушка, которую я встречал. Ты умная, добрая, заботливая и много много самых крутых комплиментов, но все равно ты будешь круче всех их вместе взятых.\n\nСпасибо, что ты есть в моей жизни. Каждый день ты делаешь меня счастливым и я надеюсь, что и я делаю тебя. Впереди будет еще очень много приключений и я готов так о них рассказывать каждый раз. Люблю тебя, рад что ты приехала ♡'
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
/* на телефоне берём уменьшенные копии: файл легче и, главное,
   декодируется в 2.3 раза меньше пикселей — это и есть основная нагрузка */
const LIGHT = isMobile();
const flowerSrc = f => LIGHT ? f.replace('assets/flowers/', 'assets/flowers/sm/') : f;

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
  // Критично для первого экрана — только цветы и сердца (~200 КБ).
  // Фотографии (≈2.4 МБ) грузим фоном: до главы «Наша история» она дойдёт
  // заведомо позже, а ждать их на старте — минуты на мобильном интернете.
  const critical = [...CONFIG.flowers.map(flowerSrc), ...CONFIG.hearts];
  const deferred = [...CONFIG.memories.map(m => m.src), ...CONFIG.muse.map(m => m.src), CONFIG.finale.photo];

  const fill = $('#preload-fill');
  let loaded = 0;

  return new Promise(resolve => {
    const done = () => {
      resolve();
      // фоновая догрузка, по одной, чтобы не душить канал
      let i = 0;
      const next = () => {
        if (i >= deferred.length) return;
        const img = new Image();
        img.onload = img.onerror = next;
        img.src = deferred[i++];
      };
      next(); next();
    };

    const tick = () => {
      loaded++;
      fill.style.width = Math.round(loaded / critical.length * 100) + '%';
      if (loaded >= critical.length) setTimeout(done, 380);
    };

    const guard = setTimeout(done, 6000);            // не ждём вечно
    if (!critical.length) { clearTimeout(guard); done(); return; }
    critical.forEach(src => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = img.onerror = tick;
      img.src = src;
    });
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
  const mob = isMobile();
  const dense = mob ? 72 : 74;                      // шаг спирали (чем больше — тем меньше цветов)
  let total = Math.ceil(Math.pow(maxR / dense, 2));
  total = clamp(total, 36, mob ? 56 : 165);         // на телефоне меньше слоёв, но крупнее цветы
  flowerCount = total;

  const GOLD = 137.507764 * Math.PI / 180;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < total; i++) {
    const r = dense * Math.sqrt(i);
    const a = i * GOLD;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const depth = (i % 3) - 1;                       // -1 / 0 / 1 — три плана глубины
    const z = mob ? 0 : depth * 90;                  // без пальцевого параллакса 3D не нужен
    const size = (mob ? rnd(126, 182) : rnd(132, 196)) * (1 + depth * .06);

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
    el.style.animationDelay = (i * (reduced ? 0 : (mob ? 14 : 9))) + 'ms';
    // blur/drop-shadow — самое дорогое на телефоне: там глубину даём размером и прозрачностью
    if (!mob) {
      if (depth < 0) el.style.filter = 'blur(2px)';
      if (depth > 0) el.style.filter = 'blur(.6px)';
    } else if (depth < 0) {
      el.style.setProperty('--o', .6);
    }

    const img = document.createElement('img');
    img.src = flowerSrc(CONFIG.flowers[i % CONFIG.flowers.length]);
    img.alt = ''; img.decoding = 'async';
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

  const ready = reduced ? 400 : total * (mob ? 14 : 9) + 950;
  setTimeout(() => $('.login-wrap').classList.add('show'), ready);
  // после расцветания слои статичны — снимаем will-change, освобождаем память GPU
  setTimeout(() => field.classList.add('bloomed'), ready + 600);
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
    historyState.cards.push({ el: card, data: m, ready: false, opened: false, touched: false });
  });

  // КРИТИЧНО: закрашиваем все карточки синхронно, в этом же кадре.
  // Иначе браузер успевает показать фото до того, как ляжет защитный слой.
  historyState.cards.forEach(paintCover);

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

/* --- защитный слой: рисуется сразу при сборке колоды, на каждой карточке --- */
function paintCover(c, withLabel) {
  const canvas = c.el.querySelector('canvas');
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const cw = canvas.offsetWidth || parseFloat(getComputedStyle(canvas).width);
  const ch = canvas.offsetHeight || parseFloat(getComputedStyle(canvas).height);
  if (!cw || !ch) return false;

  canvas.width = Math.round(cw * dpr);
  canvas.height = Math.round(ch * dpr);
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.globalCompositeOperation = 'source-over';

  // матовое стекло с розово-перламутровым отливом
  const g = ctx.createLinearGradient(0, 0, cw, ch);
  g.addColorStop(0, '#f3eef2'); g.addColorStop(.45, '#fbe6ee'); g.addColorStop(1, '#e8dcea');
  ctx.fillStyle = g; ctx.fillRect(0, 0, cw, ch);

  // «пыльца»
  for (let i = 0; i < 380; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * .5})`;
    ctx.beginPath(); ctx.arc(Math.random() * cw, Math.random() * ch, Math.random() * 1.6, 0, 7); ctx.fill();
  }

  if (withLabel !== false) {
    ctx.fillStyle = 'rgba(210,150,180,.75)';
    ctx.font = `${Math.round(cw * .12)}px Caveat, cursive`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('сотри меня', cw / 2, ch / 2);
  }

  c.painted = true;
  c.el.classList.add('armed');          // только теперь показываем фото ПОД слоем
  return true;
}

/* --- навешиваем стирание на верхнюю карточку --- */
function armTopCard() {
  const c = historyState.cards[historyState.idx];
  if (!c || c.ready) return;
  if (!c.painted && !paintCover(c)) return;
  c.ready = true;

  const canvas = c.el.querySelector('canvas');
  const cw = canvas.width / Math.min(devicePixelRatio || 1, 2);
  const ch = canvas.height / Math.min(devicePixelRatio || 1, 2);
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

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
    drawing = true; last = null; c.touched = true; canvas.setPointerCapture(e.pointerId);
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
  meadowToast(isTouch ? 'веди пальцем — цветы расступятся' : 'двигай мышкой — цветы расступаются', 4600);
  armMuseHint();
  requestGyro();
}

function buildMeadow() {
  teardownMuse();
  const mob = isMobile();
  const cfg = [
    { el: $('#m-far'),  n: mob ? 28 : 46, min: 76,  max: 128, speed: .008, near: false },
    { el: $('#m-mid'),  n: mob ? 22 : 34, min: 104, max: 168, speed: .034, near: false },
    { el: $('#m-near'), n: mob ? 11 : 20, min: mob ? 150 : 190, max: mob ? 210 : 285, speed: .11, near: true }
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
    p.addEventListener('click', e => {
      e.stopPropagation();
      if (meadow.dragMoved) return;                  // это был свайп, а не тап по фото
      if (!p.classList.contains('found')) openMuseModal(p, data);
    });

    meadow.photos.push({ el: p, data, found: false });

    // два крупных цветка сверху — фото интригующе выглядывает
    const near = meadow.layers[2];
    for (let f = 0; f < 2; f++) {
      near.items.push(makeFlower(near.el,
        spots[i].x + rnd(-7, 7), spots[i].y + rnd(-7, 7),
        mob ? rnd(150, 200) : rnd(200, 280), true, null));
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
  el.innerHTML = `<img src="${flowerSrc(pick(CONFIG.flowers))}" alt="" decoding="async">`;
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

  const parting = !isTouch || meadow.touchActive;   // пальцем — пока ведёт по экрану

  // ограничиваем сдвиг запасом слоя (inset:-16%), иначе на телефоне при
  // сильном свайпе из-под слоя выглядывает пустой край
  const capX = innerWidth * .15, capY = innerHeight * .15;

  meadow.layers.forEach(l => {
    const dx = clamp(-meadow.cx * l.speed * PARALLAX, -capX, capX);
    const dy = clamp(-meadow.cy * l.speed * PARALLAX, -capY, capY);
    l.el.style.transform = `translate3d(${dx.toFixed(1)}px,${dy.toFixed(1)}px,0)`;

    if (l.speed > .05) {                             // расталкивание только в ближнем слое
      const R = isTouch ? 130 : 160;
      l.items.forEach(it => {
        let inside = false, ddx = 0, ddy = 0, dist = 0;
        if (parting) {
          ddx = (it.px + dx) - meadow.px;
          ddy = (it.py + dy) - meadow.py;
          dist = Math.hypot(ddx, ddy);
          inside = dist < R && dist > 0.01;
        }
        if (inside) {
          if (!it.pushed) { it.el.style.transition = 'none'; it.pushed = true; }
          const f = (R - dist) / R;
          it.el.style.transform =
            `translate(calc(-50% + ${(ddx / dist * f * 78).toFixed(1)}px), calc(-50% + ${(ddy / dist * f * 78).toFixed(1)}px)) rotate(${it.r.toFixed(1)}deg) scale(${(1 - f * .12).toFixed(3)})`;
        } else if (it.pushed) {
          // важно: сброс живёт ВНЕ проверки parting, иначе после отпускания
          // пальца цветы так и остаются раздвинутыми
          it.pushed = false;
          it.el.style.transition = '';
          it.el.style.transform = `translate(-50%,-50%) rotate(${it.r.toFixed(1)}deg)`;
        }
      });
    }
  });

  // «горячо/холодно»: фото под пальцем начинает светиться — искать становится приятно
  if (parting) {
    meadow.photos.forEach(ph => {
      if (ph.found) return;
      const r = ph.el.getBoundingClientRect();
      const d = Math.hypot(r.left + r.width / 2 - meadow.px, r.top + r.height / 2 - meadow.py);
      const near = d < (isTouch ? 120 : 150);
      if (near !== ph.near) { ph.near = near; ph.el.classList.toggle('near', near); }
    });
  }

  meadow.raf = requestAnimationFrame(loopMeadow);
}

const PARALLAX = 900;                                // размах параллакса в px
function setMeadowTarget(nx, ny) { meadow.tx = clamp(nx, -1, 1); meadow.ty = clamp(ny, -1, 1); }

/* ---- мышь: поле ведёт за курсором ---- */
addEventListener('pointermove', e => {
  if (currentScreen !== 'muse' || isTouch) return;
  meadow.px = e.clientX; meadow.py = e.clientY;
  setMeadowTarget(e.clientX / innerWidth - .5, e.clientY / innerHeight - .5);
}, { passive: true });

/* ---- палец: тянем луг и раздвигаем цветы ---- */
function initMeadowTouch() {
  const el = $('#meadow');
  let sx = 0, sy = 0, btx = 0, bty = 0, dragging = false, releaseT = null;

  el.addEventListener('pointerdown', e => {
    if (currentScreen !== 'muse') return;
    dragging = true; meadow.dragMoved = false; meadow.touchActive = true;
    clearTimeout(releaseT);
    sx = e.clientX; sy = e.clientY; btx = meadow.tx; bty = meadow.ty;
    meadow.px = e.clientX; meadow.py = e.clientY;
    $('#meadow-hint').classList.remove('show');
  });

  el.addEventListener('pointermove', e => {
    if (!dragging) return;
    meadow.px = e.clientX; meadow.py = e.clientY;
    const ddx = e.clientX - sx, ddy = e.clientY - sy;
    if (Math.abs(ddx) > 10 || Math.abs(ddy) > 10) meadow.dragMoved = true;
    if (!gyroOn) setMeadowTarget(btx - ddx / innerWidth * 2.4, bty - ddy / innerHeight * 2.4);
  });

  const end = () => {
    dragging = false;
    clearTimeout(releaseT);
    releaseT = setTimeout(() => {                    // цветы плавно смыкаются обратно
      meadow.touchActive = false;
      meadow.px = meadow.py = -9999;
      meadow.photos.forEach(ph => { ph.near = false; ph.el.classList.remove('near'); });
    }, 700);
    setTimeout(() => { meadow.dragMoved = false; }, 60);
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
  el.addEventListener('pointerleave', end);
}

/* ---------------- ГИРОСКОП ----------------
   iOS 13+ разрешает спрашивать доступ ТОЛЬКО из обработчика реального
   нажатия и ТОЛЬКО на https. Поэтому — отдельная видимая кнопка,
   а не скрытый вызов при входе на экран. Не сработало — остаётся палец. */
let gyroOn = false, gyroPossible = false, gyroBase = null;

function onOrient(e) {
  if (currentScreen !== 'muse') return;
  const g = e.gamma, b = e.beta;
  if (g === null || g === undefined || b === null || b === undefined) return;
  if (!gyroBase) gyroBase = { g, b };               // первое положение = нейтраль
  setMeadowTarget(clamp((g - gyroBase.g) / 26, -1, 1), clamp((b - gyroBase.b) / 26, -1, 1));
}

function enableGyro() {
  if (gyroOn) return;
  addEventListener('deviceorientation', onOrient);
  gyroOn = true;
  $('#gyro-btn') && $('#gyro-btn').classList.add('is-hidden');
}

function meadowToast(text, ms) {
  const h = $('#meadow-hint');
  h.textContent = text;
  h.classList.add('show');
  clearTimeout(meadow.toastT);
  meadow.toastT = setTimeout(() => h.classList.remove('show'), ms || 3600);
}

function initGyro() {
  const btn = $('#gyro-btn');
  if (!btn) return;
  if (!isTouch || typeof DeviceOrientationEvent === 'undefined') { btn.remove(); return; }

  // iOS: нужен явный запрос разрешения по нажатию
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    gyroPossible = true;
    btn.addEventListener('click', () => {
      DeviceOrientationEvent.requestPermission()
        .then(st => {
          if (st === 'granted') { enableGyro(); meadowToast('Наклоняй телефон — цветы расступятся'); }
          else { gyroPossible = false; btn.classList.add('is-hidden'); meadowToast('Хорошо, ищи пальцем — веди по экрану'); }
        })
        .catch(() => {                               // не https или API недоступен
          gyroPossible = false; btn.classList.add('is-hidden');
          meadowToast('Ищи пальцем — веди по экрану');
        });
    });
    return;
  }

  // Android и прочие: разрешение не нужно, но события может и не быть —
  // проверяем, приходят ли реальные значения, и только тогда включаем
  let got = false;
  const probe = e => { if (e.gamma !== null && e.gamma !== undefined) got = true; };
  addEventListener('deviceorientation', probe);
  setTimeout(() => {
    removeEventListener('deviceorientation', probe);
    if (got) { gyroPossible = true; enableGyro(); }
    btn.remove();
  }, 1200);
}

function requestGyro() {
  gyroBase = null;
  const btn = $('#gyro-btn');
  if (btn && gyroPossible && !gyroOn) btn.classList.remove('is-hidden');
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
  meadow.touchActive = false; meadow.px = meadow.py = -9999;
  gyroBase = null; clearTimeout(meadow.toastT);
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
  if (Array.isArray(q.correct)) { renderMultiQuestion(q, box); return; }   // вопрос с несколькими ответами
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

/* --- вопрос с множественным выбором ---------------------------------------
   q.correct — массив индексов. Варианты работают как галочки (нажал — отметил,
   нажал ещё раз — снял). Кнопка «Подтвердить» пропускает дальше ТОЛЬКО если
   отмеченный набор в точности совпадает с q.correct: не хватает хотя бы одного
   правильного (или отмечен лишний) — остаётся на месте и получает подсказку. */
function renderMultiQuestion(q, box) {
  const need = new Set(q.correct);
  const chosen = new Set();
  const at = qIdx;                                   // защита от «призрачного» перехода, если она вышла и зашла заново

  const hint = document.createElement('p');
  hint.className = 'quiz-hint';
  hint.textContent = CONFIG.quizMultiHint;
  box.appendChild(hint);

  const confirm = document.createElement('button');
  confirm.className = 'btn btn-primary qconfirm';
  confirm.type = 'button';
  confirm.disabled = true;                           // пока ничего не отмечено — нечего подтверждать
  confirm.innerHTML = `<span>${CONFIG.quizMultiConfirm}</span><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

  const nudge = $('#quiz-nudge');
  const options = q.a.map((text, i) => {
    const b = document.createElement('button');
    b.className = 'qbtn multi';
    b.type = 'button';
    b.textContent = text;
    b.setAttribute('aria-pressed', 'false');
    b.style.animationDelay = (i * 70 + 90) + 'ms';
    b.addEventListener('click', () => {
      if (chosen.has(i)) chosen.delete(i); else chosen.add(i);
      b.classList.toggle('selected', chosen.has(i));
      b.setAttribute('aria-pressed', String(chosen.has(i)));
      confirm.disabled = chosen.size === 0;
      nudge.classList.remove('show');
    });
    box.appendChild(b);
    return b;
  });
  box.appendChild(confirm);

  confirm.addEventListener('click', () => {
    const complete = chosen.size === need.size && [...need].every(i => chosen.has(i));

    if (!complete) {                                 // не всё выбрано — никуда не пускаем
      nudge.textContent = pick(CONFIG.quizMultiNudges);
      nudge.classList.add('show');
      confirm.classList.remove('nope'); void confirm.offsetWidth; confirm.classList.add('nope');
      setTimeout(() => confirm.classList.remove('nope'), 600);
      return;
    }

    // всё верно: блокируем ввод и зажигаем выбранные варианты по очереди
    confirm.disabled = true;
    nudge.classList.remove('show');
    options.forEach((b, k) => {
      b.style.pointerEvents = 'none';
      b.classList.remove('selected');
      b.classList.add('correct');
      setTimeout(() => {
        const r = b.getBoundingClientRect();
        burst(r.left + r.width / 2, r.top + r.height / 2, 10,
          () => `radial-gradient(circle,#fff,${pick(['#e6bd74', '#f7e6c4'])})`);
      }, k * 110);
    });

    setTimeout(() => {
      if (qIdx !== at || currentScreen !== 'quiz') return;
      qIdx++;
      if (qIdx < CONFIG.quiz.length) renderQuestion();
      else launchFinale();
    }, 1300);
  });
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
    // перерисовываем защитный слой у тех карточек, которые ещё не начали стирать
    requestAnimationFrame(() => {
      historyState.cards.forEach(c => { if (!c.touched && !c.opened) paintCover(c); });
    });
  }
});

(async function boot() {
  if (location.search.includes('reset')) store.clear();

  initLogin();
  initEnvelope();
  initMenu();
  initMusic();
  initTilt();
  initGyro();
  initMeadowTouch();

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
