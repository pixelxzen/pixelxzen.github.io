/* 紫苏子ACG · 个人网站 — 交互层
   中英切换 / 复制微信号 / 滚动入场 */

document.body.classList.add('js');

const EN = {
  'meta.title': 'ZisuziACG · Frame by frame, step by step',
  'brand': 'ZisuziACG',
  'nav.road': 'Road',
  'nav.built': 'Built',
  'nav.help': 'Work with me',
  'nav.talk': 'Say hi',
  'nav.wx': 'WeChat',

  'hero.eyebrow': 'ANIMATION DIRECTOR · FULL-STACK DEVELOPER',
  'hero.h1': 'Frame by frame,<br>I pave the <em>road</em>',
  'hero.lead': 'Twenty years of design and moving image — from pencil to code. Now I set the direction, draw the frames, write the engine, and let a team of AI hold the brush. One person, one crew.',
  'hero.t1': 'Direct', 'hero.t1s': 'Tell one story well',
  'hero.t2': 'Build',  'hero.t2s': 'Turn an idea into a tool',
  'hero.t3': 'Teach',  'hero.t3s': 'Let AI do the labour',
  'hero.cta1': 'Add me on WeChat',
  'hero.cta2': 'See the open source',

  'p.name': 'ZisuziACG',
  'p.role': 'Animation director · Full-stack developer',
  'p.l1': 'GitHub stars · Phantom-Motion',
  'p.l2': 'public repositories',
  'p.l3': 'WeChat MP / GitHub: 紫苏子ACG · pixelxzen',

  's.u1': 'yrs', 's.l1': 'Design & moving image',
  's.u2': '',    's.l2': 'Open repositories',
  's.l3': 'GitHub stars',
  's.u4': '',    's.l4': 'One-person crew',

  'road.mark': 'STEP ONE · THE ROAD',
  'road.h2': 'You have to walk it yourself to know where it goes',
  'road.p1': 'Twenty years of design and image-making — from print to motion, from storyboard to engine.',
  'road.p2': 'Then I changed the method: I set direction, standards and acceptance, and let a team of AI do the writing.',
  'road.p3': 'Every frame, every commit — all testing one thing: how far one person can walk.',
  'road.quote': 'Frame by frame, I pave the road.',

  'day.title': 'A Day\u2019s Work',
  'day.sub': 'One person · a short film, start to finish',
  'day.a': 'Storyboard', 'day.b': 'Frames', 'day.c': 'Motion', 'day.d': 'Commit',
  'day.note': 'Script, boards, generation, voice, edit, release — done by one person.',

  'built.mark': 'STEP TWO · WHAT I BUILT',
  'built.h2': 'What I have forged',

  'ph.tag': 'SIGNATURE',
  'ph.name': 'Phantom-Motion',
  'ph.tagline': 'Let the frame move itself.',
  'ph.desc': 'An interactive dynamic-visual storytelling generator. Give it a thought; it returns frames that breathe. Its limits are the limits of your imagination.',
  'ph.stars': 'GitHub stars',
  'ph.k1': 'Language', 'ph.k2': 'Form', 'ph.v2': 'Generative', 'ph.k3': 'License', 'ph.v3': 'Open source',

  'mp.tag': 'SECOND WORK',
  'mp.name': 'AI Magazine Photographer',
  'mp.tagline': 'Teach AI to shoot like a magazine photographer.',
  'mp.desc': 'Twenty years of a photographer\u2019s eye, written into prompts and workflows an AI can follow.',

  'gh.k1': 'Composition', 'gh.k2': 'Lighting', 'gh.k3': 'Grading', 'gh.k4': 'Narrative',

  'more.h': 'On the shelf · more open source',
  'shelf.1': 'Local-first design generator · 19 skills · 71 design systems',
  'shelf.2': 'Interactive exam paper for AI trainers',
  'shelf.3': 'Isometric parametric keycap 3D type design tool',
  'shelf.4': 'A workbench for chat logs',
  'shelf.5': 'One command turns footage into a finished cut',
  'shelf.6': 'Illustrations generated for articles',
  'more.asof': 'Star counts as of 2026-10-05. 27 public repositories in total — see GitHub.',

  'help.mark': 'STEP THREE · WORK WITH ME',
  'help.h2': 'What you can entrust to me',
  'cv.tag': 'SIGNATURE',
  'cv.title': 'AI adoption consulting',
  'cv.lead': 'You want AI in your business but don\u2019t know where to start — or you already hit the pits and want fewer detours.',
  'cv.k1': 'Choose', 'cv.v1': 'Which models and tools actually fit the work',
  'cv.k2': 'Deploy', 'cv.v2': 'Hand one repetitive job to AI, end to end',
  'cv.k3': 'Avoid',  'cv.v3': 'The pits I fell into, you can skip',
  'cv.form': 'One-to-one online · corporate training available',
  'cv.price': 'Ask for a quote',
  'cv.cta': 'Add WeChat, book a call',
  'co.title': 'Image & code',
  'co.lead': 'A brand needs a film, or a team needs a tool that runs.',
  'co.k1': 'Direct', 'co.v1': 'Animation and shorts, concept to delivery',
  'co.k2': 'Build',  'co.v2': 'Tools and sites shaped around your process',
  'co.k3': 'Ship together', 'co.v3': 'Open source, built and pushed as one',
  'co.price': 'Quoted per project',
  'co.cta': 'Message me about a project',

  'talk.mark': 'STEP FOUR · LET\u2019S TALK',
  'talk.h2': 'The steps are laid. Come up and say hi.',
  'ct.wx': 'WeChat',
  'ct.qrph': 'QR code pending',
  'ct.copy': 'copy',
  'ct.note': 'Please mention what it\u2019s about',
  'ct.mp': 'WeChat MP',
  'ct.mpnote': 'Animation notes · AI practice · open source',
  'ct.else': 'Elsewhere',
  'ct.ph': 'Signature work',
  'ct.repos': 'All work',
};

const ZH = {};
const zhNodes = document.querySelectorAll('[data-i18n]');
zhNodes.forEach(n => { const k = n.dataset.i18n; if (!(k in ZH)) ZH[k] = n.textContent; });
document.querySelectorAll('[data-i18n-html]').forEach(n => { const k = n.dataset.i18nHtml; ZH[k] = n.innerHTML; });

// 中文里需要保留的 <i> 单位（EN 版去掉）
const applyLang = (lang) => {
  const dict = lang === 'en' ? EN : ZH;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  document.body.classList.toggle('is-en', lang === 'en');
  document.querySelectorAll('[data-i18n]').forEach(n => {
    const v = dict[n.dataset.i18n];
    if (v === undefined) return;
    if (lang === 'zh') {
      const unit = n.querySelector('i');
      n.textContent = v;
      if (unit && n.dataset.i18n.startsWith('s.')) n.appendChild(unit);
    } else {
      n.textContent = v;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(n => {
    const v = dict[n.dataset.i18nHtml];
    if (v !== undefined) n.innerHTML = v;
  });
  document.getElementById('lang').textContent = lang === 'en' ? '中文' : 'EN';
  try { localStorage.setItem('zs-lang', lang); } catch (e) {}
};

let lang = 'zh';
try { lang = localStorage.getItem('zs-lang') || 'zh'; } catch (e) {}
if (lang === 'en') applyLang('en');

document.getElementById('lang').addEventListener('click', () => {
  lang = (document.body.classList.contains('is-en')) ? 'zh' : 'en';
  applyLang(lang);
});

/* 复制微信号 */
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}
document.querySelectorAll('.copy-wx').forEach(btn => {
  btn.addEventListener('click', async () => {
    const id = btn.dataset.wx;
    if (!id || id.startsWith('REPLACE_')) { showToast('微信号待填写 · WeChat ID not set yet'); return; }
    try {
      await navigator.clipboard.writeText(id);
      showToast('已复制微信号 ' + id);
    } catch (e) {
      showToast('微信号：' + id);
    }
  });
});

/* 滚动入场 */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.sec, .stats, .work, .shelf, .svc, .ct').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
  io.observe(el);
});
