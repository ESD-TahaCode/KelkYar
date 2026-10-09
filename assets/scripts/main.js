  
    (() => {
      'use strict';
      const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)], clamp = (v, a, b) => Math.min(b, Math.max(a, v));
      const mem = {}, store = { get(k) { try { let v = localStorage.getItem(k); if (v !== null) return v } catch (e) { } return mem[k] ?? null }, set(k, v) { mem[k] = v; try { localStorage.setItem(k, v) } catch (e) { } } };
      const I18N = {
        fa: {
          brand: 'کلک‌یار', tagline: 'همراه خوشنویسیِ تو', tab_editor: 'ویرایشگر اعراب', tab_logo: 'ساخت لوگو', tab_fonts: 'گالری فونت', tab_library: 'کتابخانه متن',
          ed_ph: 'متن خود را اینجا بنویس…', ed_font: 'فونت', ed_size: 'اندازه', ed_hint: 'روی یک حرف بزن تا انتخاب شود، بعد اعراب دلخواه را اضافه کن.', ed_marks: 'اعراب‌ها', ed_letter: 'حرف انتخاب‌شده', ed_prev: 'قبلی', ed_next: 'بعدی', ed_kash_add: '+ کشیده', ed_kash_del: '− کشیده', ed_move: 'جابه‌جایی اعراب', ed_x: 'افقی', ed_y: 'عمودی', ed_reset: 'بازنشانی', ed_nomark: 'این حرف هنوز اعرابی ندارد.', ed_nosel: 'هنوز حرفی انتخاب نشده.', ed_arrows: 'کلیدهای جهت‌دار صفحه‌کلید هم کار می‌کنند (با Shift گام بزرگ‌تر).', ed_clear: 'پاک‌کردن همه اعراب', ed_copy: 'کپی متن', ed_copied: 'کپی شد ✓', ed_notletter: 'اعراب را فقط روی حرف می‌شود گذاشت.',
          lg_text: 'نام', lg_sub: 'زیرنویس', lg_tpl: 'مدل لوگو', lg_theme: 'تم لوگو', lg_bg: 'زمینه', lg_fg: 'متن', lg_ac: 'تأکید', lg_font: 'فونت', lg_size: 'اندازه', lg_dl: 'دانلود PNG', lg_transparent: 'PNG شفاف', lg_use: 'گرفتن متن از ویرایشگر',
          tpl_badge: 'نشان گرد', tpl_seal: 'مُهر', tpl_line: 'خط‌دار', tpl_frame: 'قاب', tpl_stack: 'عمودی', lt_lapis: 'لاجورد', lt_turquoise: 'فیروزه', lt_pomegranate: 'انار', lt_gold: 'زر', lt_stone: 'سنگ', lt_night: 'شب',
          gl_hint: 'متن ویرایشگر در همه فونت‌ها. روی هر کارت بزنی، همان فونت انتخاب می‌شود.', foot: 'نسخه پایه کلک‌یار', m_fatha: 'فتحه', m_damma: 'ضمه', m_kasra: 'کسره', m_sukun: 'سکون', m_shadda: 'تشدید', m_fathatan: 'تنوین نصب', m_dammatan: 'تنوین رفع', m_kasratan: 'تنوین جر', m_maddah: 'مد', m_dagger: 'الف خنجری', m_hamzaA: 'همزه بالا', m_hamzaB: 'همزه پایین',
          lib_title: 'متن‌های آماده', kly_title: 'پروژه کلک‌یار', kly_hint: 'همه تنظیمات ویرایشگر و لوگو داخل فایل .kly ذخیره می‌شوند.', kly_export: 'ذخیره پروژه .kly', kly_import: 'باز کردن پروژه .kly'
        },
        ar: { brand: 'كلك يار', tagline: 'رفيقك في فنّ الخط', tab_editor: 'محرّر التشكيل', tab_logo: 'صانع الشعار', tab_fonts: 'معرض الخطوط', tab_library: 'مكتبة النصوص', ed_ph: 'اكتب نصّك هنا…', ed_font: 'الخط', ed_size: 'الحجم', ed_hint: 'اضغط على حرف لتحديده، ثم أضف الحركة التي تريدها.', ed_marks: 'الحركات', ed_letter: 'الحرف المحدّد', ed_prev: 'السابق', ed_next: 'التالي', ed_kash_add: '+ تطويل', ed_kash_del: '− تطويل', ed_move: 'تحريك الحركة', ed_x: 'أفقي', ed_y: 'عمودي', ed_reset: 'إعادة ضبط', ed_nomark: 'لا توجد حركات على هذا الحرف بعد.', ed_nosel: 'لم يتم تحديد أي حرف بعد.', ed_arrows: 'مفاتيح الأسهم في لوحة المفاتيح تعمل أيضًا.', ed_clear: 'مسح كل الحركات', ed_copy: 'نسخ النص', ed_copied: 'تم النسخ ✓', ed_notletter: 'يمكن وضع الحركات على الحروف فقط.', lg_text: 'الاسم', lg_sub: 'عنوان فرعي', lg_tpl: 'نمط الشعار', lg_theme: 'سمة الشعار', lg_bg: 'الخلفية', lg_fg: 'النص', lg_ac: 'التمييز', lg_font: 'الخط', lg_size: 'الحجم', lg_dl: 'تنزيل PNG', lg_transparent: 'PNG شفاف', lg_use: 'أخذ النص من المحرّر', tpl_badge: 'شارة دائرية', tpl_seal: 'ختم', tpl_line: 'بخط تحتي', tpl_frame: 'إطار', tpl_stack: 'عمودي', lt_lapis: 'لازورد', lt_turquoise: 'فيروز', lt_pomegranate: 'رمّان', lt_gold: 'ذهب', lt_stone: 'حجر', lt_night: 'ليل', gl_hint: 'نصّ المحرّر بكل الخطوط. اضغط على أي بطاقة لاختيار خطّها.', foot: 'النسخة الأساسية من كلك يار', m_fatha: 'فتحة', m_damma: 'ضمّة', m_kasra: 'كسرة', m_sukun: 'سكون', m_shadda: 'شدّة', m_fathatan: 'تنوين فتح', m_dammatan: 'تنوين ضم', m_kasratan: 'تنوين كسر', m_maddah: 'مدّة', m_dagger: 'ألف خنجرية', m_hamzaA: 'همزة فوق', m_hamzaB: 'همزة تحت', lib_title: 'النصوص الجاهزة', kly_title: 'مشروع كلك يار', kly_hint: 'يتم حفظ كل إعدادات المحرر والشعار داخل ملف .kly.', kly_export: 'حفظ مشروع .kly', kly_import: 'فتح مشروع .kly' },
        en: { brand: 'Kelkyar', tagline: 'Your calligraphy companion', tab_editor: 'Diacritics editor', tab_logo: 'Logo maker', tab_fonts: 'Font gallery', tab_library: 'Text library', ed_ph: 'Type your text here…', ed_font: 'Font', ed_size: 'Size', ed_hint: 'Tap a letter to select it, then add the mark you want.', ed_marks: 'Marks', ed_letter: 'Selected letter', ed_prev: 'Prev', ed_next: 'Next', ed_kash_add: '+ Kashida', ed_kash_del: '− Kashida', ed_move: 'Move the mark', ed_x: 'Horizontal', ed_y: 'Vertical', ed_reset: 'Reset', ed_nomark: 'This letter has no marks yet.', ed_nosel: 'No letter selected yet.', ed_arrows: 'Keyboard arrow keys work too.', ed_clear: 'Clear all marks', ed_copy: 'Copy text', ed_copied: 'Copied ✓', ed_notletter: 'Marks can only be placed on letters.', lg_text: 'Name', lg_sub: 'Subtitle', lg_tpl: 'Logo style', lg_theme: 'Logo theme', lg_bg: 'Background', lg_fg: 'Accent', lg_ac: 'Accent', lg_font: 'Font', lg_size: 'Size', lg_dl: 'Download PNG', lg_transparent: 'Transparent PNG', lg_use: 'Use editor text', tpl_badge: 'Round badge', tpl_seal: 'Seal', tpl_line: 'Underline', tpl_frame: 'Frame', tpl_stack: 'Stacked', lt_lapis: 'Lapis', lt_turquoise: 'Turquoise', lt_pomegranate: 'Pomegranate', lt_gold: 'Gold', lt_stone: 'Stone', lt_night: 'Night', gl_hint: 'Your editor text in every font. Tap a card to pick that font.', foot: 'Kelkyar base version', m_fatha: 'Fatha', m_damma: 'Damma', m_kasra: 'Kasra', m_sukun: 'Sukun', m_shadda: 'Shadda', m_fathatan: 'Fathatan', m_dammatan: 'Dammatan', m_kasratan: 'Kasratan', m_maddah: 'Maddah', m_dagger: 'Dagger alif', m_hamzaA: 'Hamza above', m_hamzaB: 'Hamza below', lib_title: 'Ready texts', kly_title: 'Kelkyar project', kly_hint: 'All editor and logo settings are saved inside the .kly file.', kly_export: 'Save .kly project', kly_import: 'Open .kly project' }
      };
      let lang = store.get('kelkyar:lang') || 'fa', theme = store.get('kelkyar:theme') || 'lapis', activeTab = 'editor'; if (!I18N[lang]) lang = 'fa';
      const t = k => (I18N[lang] && I18N[lang][k]) || I18N.fa[k] || k;
      const FONTS = [
        ['nastaliq', 'Noto Nastaliq Urdu', 2.6, 'نستعلیق', 'Nastaliq'], ['naskh', 'Amiri', 1.9, 'نسخ (امیری)', 'Naskh (Amiri)'], ['sch', 'Scheherazade New', 2, 'نسخ (شهرزاد)', 'Naskh (Scheherazade)'], ['ruqaa', 'Aref Ruqaa', 2, 'رقعه', 'Ruqaa'], ['kufi', 'Reem Kufi', 1.9, 'کوفی', 'Kufi'], ['katibeh', 'Katibeh', 1.9, 'کتیبه', 'Katibeh'], ['mirza', 'Mirza', 2, 'میرزا', 'Mirza'], ['lalezar', 'Lalezar', 1.9, 'تایپوگرافی (لاله‌زار)', 'Typography (Lalezar)'], ['rakkas', 'Rakkas', 1.9, 'تایپوگرافی (رکّاص)', 'Typography (Rakkas)'], ['cairo', 'Cairo', 1.8, 'قاهره', 'Cairo'], ['tajawal', 'Tajawal', 1.8, 'تجوّل', 'Tajawal'], ['changa', 'Changa', 1.9, 'چانگا', 'Changa'], ['elmessiri', 'El Messiri', 1.9, 'المسیری', 'El Messiri'], ['harmattan', 'Harmattan', 1.9, 'هارماتان', 'Harmattan'], ['lateef', 'Lateef', 2.1, 'لطیف', 'Lateef'], ['markazi', 'Markazi Text', 1.9, 'مرکزی', 'Markazi Text'], ['naskharabic', 'Noto Naskh Arabic', 2, 'نسخ عربی', 'Noto Naskh Arabic'], ['kufiarabic', 'Noto Kufi Arabic', 1.9, 'کوفی عربی', 'Noto Kufi Arabic'], ['sansarabic', 'Noto Sans Arabic', 1.8, 'سن‌سریف عربی', 'Noto Sans Arabic'], ['ibmplexarabic', 'IBM Plex Sans Arabic', 1.8, 'IBM Plex Sans Arabic', 'IBM Plex Sans Arabic'], ['readex', 'Readex Pro', 1.8, 'ریدکس پرو', 'Readex Pro'], ['mada', 'Mada', 1.8, 'مادا', 'Mada'], ['lemonada', 'Lemonada', 1.9, 'لیمونادا', 'Lemonada'], ['arefruqaa-ink', 'Aref Ruqaa Ink', 2, 'رقعه جوهری', 'Aref Ruqaa Ink'], ['gulzar', 'Gulzar', 2.5, 'نستعلیق گلزار', 'Gulzar Nastaliq'], ['vazir', 'Vazirmatn', 1.8, 'وزیرمتن', 'Vazirmatn'], ['kufam', 'Kufam', 1.9, 'کوفام', 'Kufam'], ['marhey', 'Marhey', 1.9, 'مرحی (بازیگوش)', 'Marhey'], ['alexandria', 'Alexandria', 1.8, 'اسکندریه', 'Alexandria'], ['rubik', 'Rubik', 1.7, 'روبیک', 'Rubik'], ['baloo', 'Baloo Bhaijaan 2', 2, 'بالو', 'Baloo Bhaijaan'], ['blaka', 'Blaka', 2, 'بلاکا', 'Blaka'], ['blakaink', 'Blaka Ink', 2, 'بلاکا جوهری', 'Blaka Ink'], ['jomhuria', 'Jomhuria', 1.6, 'جمهوریه (فشرده)', 'Jomhuria'], ['playpen', 'Playpen Sans Arabic', 1.9, 'دست‌نویس (پلی‌پن)', 'Playpen'], ['zain', 'Zain', 1.8, 'زین', 'Zain'], ['almarai', 'Almarai', 1.8, 'المرعی', 'Almarai'], ['reemfun', 'Reem Kufi Fun', 1.9, 'کوفی بازیگوش', 'Reem Kufi Fun'], ['reemink', 'Reem Kufi Ink', 1.9, 'کوفی جوهری', 'Reem Kufi Ink']];
      const fontById = id => { let f = FONTS.find(x => x[0] === id) || FONTS[0]; return { id: f[0], family: f[1], lh: f[2], fa: f[3], en: f[4] } };
      const MARKS = [['\u064E', 'fatha'], ['\u064F', 'damma'], ['\u0650', 'kasra'], ['\u0652', 'sukun'], ['\u0651', 'shadda'], ['\u064B', 'fathatan'], ['\u064C', 'dammatan'], ['\u064D', 'kasratan'], ['\u0653', 'maddah'], ['\u0670', 'dagger'], ['\u0654', 'hamzaA'], ['\u0655', 'hamzaB']];
      const LETTER_RE = /[\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06FA-\u06FF\u0750-\u077F]/, MARK_RE = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/, TATWEEL = '\u0640', SHADDA = '\u0651';
      const DEFAULT_TEXT = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';
      const S = { clusters: [], sel: -1, am: 0, font: 'nastaliq', size: 60, logo: { text: 'کلک‌یار', sub: 'Calligraphy', tpl: 'badge', theme: 'lapis', bg: '#1f3b82', fg: '#f3efe3', ac: '#e8b84a', font: 'nastaliq', size: 85 } };
      const LOGO_THEMES = [['lapis', '#1f3b82', '#f3efe3', '#e8b84a'], ['turquoise', '#0f6b73', '#eefaf7', '#f2c879'], ['pomegranate', '#7b1e3a', '#fbeee9', '#f0b429'], ['gold', '#ead7a1', '#3b2a0f', '#8a5a14'], ['stone', '#e9ecef', '#1d2733', '#4b6bb5'], ['night', '#11161d', '#f4f4f0', '#c9a45c'], ['emerald', '#0b5d46', '#f1f8ee', '#e9c46a'], ['sunset', '#c2410c', '#fff7ed', '#fde68a'], ['rose', '#fbe4e8', '#5b1330', '#c0365a'], ['indigo', '#241b5c', '#ece9ff', '#ffb86b']], TEMPLATES = ['badge', 'seal', 'line', 'frame', 'stack'];
      const READY = [
        ['بسم الله الرحمن الرحیم', 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ'], ['یا مهدی ادرکنی', 'یَا مَهْدِی اَدْرِکْنِی'], ['اللهم عجل لولیک الفرج', 'اللَّهُمَّ عَجِّلْ لِوَلِیِّکَ الْفَرَجَ'], ['یا صاحب الزمان', 'یَا صَاحِبَ الزَّمَانِ'], ['السلام علیک یا اباعبدالله', 'السَّلَامُ عَلَیْکَ یَا أَبَا عَبْدِاللَّهِ'], ['صلوات', 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَآلِ مُحَمَّدٍ'], ['الحمدلله', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِینَ'], ['سبحان الله', 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ']];
      function parse(text) { let old = S.clusters, out = []; for (const ch of text) { let last = out[out.length - 1]; if (MARK_RE.test(ch) && last && last.ch !== '\n') last.marks.push({ c: ch, dx: 0, dy: 0 }); else out.push({ ch, marks: [] }) } out.forEach((cl, i) => { let o = old[i]; if (o && o.ch === cl.ch && o.marks.length === cl.marks.length && o.marks.every((m, j) => m.c === cl.marks[j].c)) cl.marks = o.marks }); return out }
      const serialize = () => S.clusters.map(c => c.ch + c.marks.map(m => m.c).join('')).join(''), oneLine = () => serialize().replace(/\s+/g, ' ').trim(), curCl = () => S.clusters[S.sel], curMark = () => { let c = curCl(); return c && c.marks[S.am] };
      function renderStage() { let st = $('#stage'), f = fontById(S.font); st.style.fontFamily = `"${f.family}",serif`; st.style.fontSize = S.size + 'px'; st.style.lineHeight = f.lh; st.textContent = ''; let frag = document.createDocumentFragment(); S.clusters.forEach((cl, i) => { if (cl.ch === '\n') { frag.append(document.createElement('br')); return } let sp = document.createElement('span'); sp.className = 'cl' + (i === S.sel ? ' sel' : ''); sp.dataset.i = i; sp.append(cl.ch); cl.marks.forEach(m => { let mk = document.createElement('span'); mk.className = 'mk'; mk.textContent = m.c; mk.style.position = 'relative'; mk.style.left = m.dx + 'em'; mk.style.top = (-m.dy) + 'em'; sp.append(mk) }); frag.append(sp) }); st.append(frag) }
      function setSliders() { let m = curMark(); $('#mx').value = m ? m.dx : 0; $('#my').value = m ? m.dy : 0 }
      function renderControls() { let c = curCl(), has = !!c && c.ch !== '\n'; if (has) S.am = clamp(S.am, 0, Math.max(0, c.marks.length - 1)); let g = $('#marksGrid'); g.textContent = ''; MARKS.forEach(m => { let b = document.createElement('button'); b.type = 'button'; b.className = 'mbtn' + (has && c.marks.some(x => x.c === m[0]) ? ' on' : ''); b.title = t('m_' + m[1]); b.innerHTML = `<span class="g">${TATWEEL + m[0]}</span><span class="n">${t('m_' + m[1])}</span>`; b.onclick = () => toggleMark(m[0]); g.append(b) }); $('#selLetter').textContent = has ? c.ch : '–'; let chips = $('#chips'); chips.textContent = ''; if (has) c.marks.forEach((m, j) => { let b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (j === S.am ? ' on' : ''); b.textContent = TATWEEL + m.c; b.onclick = () => { S.am = j; renderControls() }; chips.append(b) }); $('#selMsg').textContent = !has ? t('ed_nosel') : (c.marks.length ? '' : t('ed_nomark')); $('#movePanel').classList.toggle('off', !(has && c.marks.length)); setSliders() }
      function refresh() { renderStage(); renderControls() }
      function syncTA() { $('#ta').value = serialize() }
      function toggleMark(c) { let cl = curCl(); if (!cl || cl.ch === '\n') return toast(t('ed_nosel')); if (!LETTER_RE.test(cl.ch) && cl.ch !== TATWEEL) return toast(t('ed_notletter')); let i = cl.marks.findIndex(m => m.c === c); if (i >= 0) cl.marks.splice(i, 1); else { let nm = { c, dx: 0, dy: 0 }; cl.marks.push(nm); cl.marks.sort((a, b) => (b.c === SHADDA) - (a.c === SHADDA)); S.am = cl.marks.indexOf(nm) } syncTA(); refresh() }
      function nudge(dx, dy) { let m = curMark(); if (!m) return; m.dx = clamp(+(m.dx + dx).toFixed(3), -1, 1); m.dy = clamp(+(m.dy + dy).toFixed(3), -1, 1); renderStage(); setSliders() }
      function moveSel(d) { let i = S.sel < 0 ? (d > 0 ? -1 : S.clusters.length) : S.sel; do { i += d } while (S.clusters[i] && S.clusters[i].ch === '\n'); if (i < 0 || i >= S.clusters.length) return; S.sel = i; S.am = 0; refresh() }
      function kashida(add) { if (S.sel < 0) return toast(t('ed_nosel')); if (add) S.clusters.splice(S.sel + 1, 0, { ch: TATWEEL, marks: [] }); else if (S.clusters[S.sel + 1]?.ch === TATWEEL) S.clusters.splice(S.sel + 1, 1); syncTA(); refresh() }
      function fillFonts() { [['#fontSel', S.font], ['#lgFont', S.logo.font]].forEach(([sel, val]) => { let el = $(sel); el.textContent = ''; FONTS.forEach(f => { let o = document.createElement('option'); o.value = f[0]; o.textContent = lang === 'fa' ? f[3] : f[4]; el.append(o) }); el.value = val }) }
      function applyI18n() { $$('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n)); $$('[data-i18n-ph]').forEach(e => e.placeholder = t(e.dataset.i18nPh)); $('#stage').dataset.ph = t('ed_ph'); document.title = t('brand') + ' – ' + t('tagline') }
      function renderDots() { const s = $('#themeSelect'); if (s) { s.value = theme; } }
      function setTheme(id) { theme = id; document.documentElement.dataset.theme = id; store.set('kelkyar:theme', id); renderDots() }
      function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'en' ? 'ltr' : 'rtl'; store.set('kelkyar:lang', l); renderAll() }
      function renderGallery() { let g = $('#gallery'); g.textContent = ''; let sample = oneLine().slice(0, 40) || 'کلک‌یار'; FONTS.forEach(f => { let b = document.createElement('button'); b.type = 'button'; b.className = 'fcard' + (f[0] === S.font ? ' on' : ''); let s = document.createElement('span'); s.className = 's'; s.style.fontFamily = `"${f[1]}",serif`; s.style.lineHeight = f[2] > 2.2 ? 2.2 : 1.7; s.textContent = sample; let n = document.createElement('span'); n.className = 'n'; n.textContent = lang === 'fa' ? f[3] : f[4]; b.append(s, n); b.onclick = () => { S.font = f[0]; $('#fontSel').value = f[0]; showTab('editor'); renderStage() }; g.append(b) }) }
      function renderTemplates() { let w = $('#tplBtns'); w.textContent = ''; TEMPLATES.forEach(id => { let b = document.createElement('button'); b.type = 'button'; b.textContent = t('tpl_' + id); b.className = id === S.logo.tpl ? 'on' : ''; b.onclick = () => { S.logo.tpl = id; renderTemplates(); drawLogo() }; w.append(b) }) }
      function renderLogoThemes() { let w = $('#lgThemes'); w.textContent = ''; LOGO_THEMES.forEach(th => { let b = document.createElement('button'); b.type = 'button'; b.className = 'sw' + (S.logo.theme === th[0] ? ' on' : ''); b.style.background = th[1]; b.style.color = th[2]; b.style.borderColor = th[3]; b.textContent = 'ک'; b.title = lang === 'fa' ? t('lt_' + th[0]) : th[0]; b.onclick = () => { Object.assign(S.logo, { theme: th[0], bg: th[1], fg: th[2], ac: th[3] }); syncColors(); renderLogoThemes(); drawLogo() }; w.append(b) }) }
      function syncColors() { $('#cBg').value = S.logo.bg; $('#cFg').value = S.logo.fg; $('#cAc').value = S.logo.ac }
      function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath() }
      function fitSize(ctx, text, weight, fam, maxW, maxH, k, cap = 380) { ctx.font = `${weight} 200px "${fam}"`; let m = ctx.measureText(text), w = m.width || 1, h = (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) || 200; return Math.min(cap, 200 * Math.min(maxW / w, maxH / h)) * k }
      function putText(ctx, text, font, x, y, color) { ctx.font = font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = color; ctx.fillText(text, x, y) }
      let drawToken = 0;
      async function drawLogo() {
        let tok = ++drawToken, L = S.logo, f = fontById(L.font), c = $('#logoCanvas'), ctx = c.getContext('2d'), name = L.text.trim() || 'ک', sub = L.sub.trim(); try { await document.fonts.load(`400 100px "${f.family}"`) } catch (e) { } if (tok !== drawToken) return; let W = c.width, H = c.height, cx = W / 2, cy = H / 2, k = L.size / 100; ctx.clearRect(0, 0, W, H); const main = (y, mw, mh) => putText(ctx, name, `400 ${fitSize(ctx, name, 400, f.family, mw, mh, k)}px "${f.family}"`, cx, y, L.fg), subT = y => sub && putText(ctx, sub, `600 ${fitSize(ctx, sub, 600, 'Vazirmatn', 520, 60, 1, 40)}px "Vazirmatn"`, cx, y, L.ac), panel = r => { ctx.fillStyle = L.bg; roundRect(ctx, 0, 0, W, H, r); ctx.fill() }, line = (x1, x2, y, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke() };
        switch (L.tpl) { case 'badge': ctx.fillStyle = L.bg; ctx.beginPath(); ctx.arc(cx, cy, 330, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = L.ac; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(cx, cy, 300, 0, Math.PI * 2); ctx.stroke(); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, 283, 0, Math.PI * 2); ctx.stroke(); main(sub ? cy - 45 : cy, 430, 250); subT(cy + 160); break; case 'seal': ctx.fillStyle = L.bg; roundRect(ctx, cx - 280, 70, 560, 560, 36); ctx.fill(); ctx.strokeStyle = L.ac; ctx.lineWidth = 6; roundRect(ctx, cx - 254, 96, 508, 508, 18); ctx.stroke(); main(sub ? cy - 45 : cy, 400, 290); subT(cy + 195); break; case 'line': panel(48); main(sub ? cy - 60 : cy - 30, 800, 300); line(cx - 300, cx - 30, cy + 170, 5, L.ac); line(cx + 30, cx + 300, cy + 170, 5, L.ac); subT(cy + 250); break; case 'frame': panel(24); ctx.strokeStyle = L.ac; ctx.lineWidth = 6; ctx.strokeRect(40, 40, W - 80, H - 80); ctx.globalAlpha = .6; ctx.strokeStyle = L.fg; ctx.lineWidth = 2; ctx.strokeRect(62, 62, W - 124, H - 124); ctx.globalAlpha = 1; main(sub ? cy - 45 : cy, 700, 300); subT(cy + 190); break; case 'stack': panel(48); ctx.fillStyle = L.ac;[-34, 0, 34].forEach(dx => { ctx.beginPath(); ctx.arc(cx + dx, 110, 8, 0, Math.PI * 2); ctx.fill() }); main(cy - 20, 780, 300); line(cx - 90, cx + 90, cy + 190, 4, L.ac); subT(cy + 255) }
      }
      function downloadLogo(transparent = false) { let c = $('#logoCanvas'), ctx = c.getContext('2d'); if (transparent) { let copy = document.createElement('canvas'); copy.width = c.width; copy.height = c.height; let x = copy.getContext('2d'); x.drawImage(c, 0, 0);/* remove only the exact background color by using canvas redraw */let img = x.getImageData(0, 0, c.width, c.height), bg = S.logo.bg.toLowerCase(); let rgb = /^#([0-9a-f]{6})$/i.exec(bg); if (rgb) { let n = parseInt(rgb[1], 16), r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255; for (let i = 0; i < img.data.length; i += 4) { if (Math.abs(img.data[i] - r) < 4 && Math.abs(img.data[i + 1] - g) < 4 && Math.abs(img.data[i + 2] - b) < 4) img.data[i + 3] = 0 } x.putImageData(img, 0, 0) } c = copy } c.toBlob(b => { if (!b) return; let a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = transparent ? 'kelkyar-logo-transparent.png' : 'kelkyar-logo.png'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1500) }) }
      function toast(msg) { let e = $('#toast'); e.textContent = msg; e.classList.add('show'); clearTimeout(window.__toast); window.__toast = setTimeout(() => e.classList.remove('show'), 1800) }
      function copyText() { let txt = serialize(), fallback = () => { let a = $('#ta'); a.select(); try { document.execCommand('copy') } catch (e) { } toast(t('ed_copied')) }; if (navigator.clipboard?.writeText) navigator.clipboard.writeText(txt).then(() => toast(t('ed_copied')), fallback); else fallback() }
      function showTab(id) { activeTab = id; $$('.tab').forEach(b => b.classList.toggle('active', b.dataset.tab === id)); $$('.panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + id)); if (id === 'logo') drawLogo(); if (id === 'fonts') renderGallery(); if (id === 'library') renderLibrary() }
      function projectData() { return { format: 'kly', version: 1, app: 'Kelkyar', savedAt: new Date().toISOString(), editor: { clusters: S.clusters, font: S.font, size: S.size, sel: S.sel, am: S.am }, logo: structuredClone(S.logo), theme, lang } }
      function exportKly() { let blob = new Blob([JSON.stringify(projectData(), null, 2)], { type: 'application/vnd.kelkyar+json' }), a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'kelkyar-project.kly'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1500) }
      function validProject(p) { return p && p.format === 'kly' && p.version === 1 && p.editor && Array.isArray(p.editor.clusters) && p.logo && typeof p.logo === 'object' }
      function importKly(file) { let r = new FileReader(); r.onload = () => { try { let p = JSON.parse(r.result); if (!validProject(p)) throw Error(); S.clusters = p.editor.clusters.map(c => ({ ch: String(c.ch || ''), marks: Array.isArray(c.marks) ? c.marks.map(m => ({ c: String(m.c || ''), dx: clamp(Number(m.dx) || 0, -1, 1), dy: clamp(Number(m.dy) || 0, -1, 1) })) : [] })); S.font = FONTS.some(f => f[0] === p.editor.font) ? p.editor.font : 'nastaliq'; S.size = clamp(Number(p.editor.size) || 60, 28, 120); S.sel = Number.isInteger(p.editor.sel) ? p.editor.sel : -1; S.am = Number.isInteger(p.editor.am) ? p.editor.am : 0; Object.assign(S.logo, p.logo); theme = ['lapis', 'teal', 'plum', 'sand', 'night', 'emerald'].includes(p.theme) ? p.theme : theme; lang = I18N[p.lang] ? p.lang : lang; document.documentElement.dataset.theme = theme; $('#ta').value = serialize(); $('#sizeR').value = S.size; $('#lgText').value = S.logo.text; $('#lgSub').value = S.logo.sub; $('#lgSize').value = S.logo.size; syncColors(); setLang(lang); toast('KLY ✓') } catch (e) { toast('فایل KLY معتبر نیست') } }; r.readAsText(file) }
      function renderLibrary() { let g = $('#readyGrid'); g.textContent = ''; READY.forEach(([title, text]) => { let b = document.createElement('button'); b.className = 'ready'; b.type = 'button'; b.innerHTML = `<strong>${title}</strong><span>${text}</span>`; b.onclick = () => { S.clusters = parse(text); S.sel = -1; S.am = 0; syncTA(); showTab('editor'); refresh() }; g.append(b) }) }
      function renderAll() { applyI18n(); fillFonts(); renderDots(); refresh(); renderTemplates(); renderLogoThemes(); syncColors(); if (activeTab === 'logo') drawLogo(); if (activeTab === 'fonts') renderGallery(); if (activeTab === 'library') renderLibrary() }
      function bind() {
        $('#tabs').onclick = e => { let b = e.target.closest('.tab'); if (b) showTab(b.dataset.tab) }; $('#themeSelect').onchange = e => setTheme(e.target.value); $('#langSel').onchange = e => setLang(e.target.value);
        $('#ta').oninput = e => { S.clusters = parse(e.target.value); if (S.sel >= S.clusters.length) S.sel = -1; refresh() }; $('#stage').onclick = e => { let sp = e.target.closest('.cl'); $('#stage').focus(); if (sp) { S.sel = +sp.dataset.i; S.am = 0; refresh() } };
        $('#stage').onkeydown = e => { let step = e.shiftKey ? .1 : .03, map = { ArrowRight: [step, 0], ArrowLeft: [-step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] }; if (map[e.key] && curMark()) { e.preventDefault(); nudge(...map[e.key]) } };
        $('#fontSel').onchange = e => { S.font = e.target.value; renderStage() }; $('#sizeR').oninput = e => { S.size = +e.target.value; renderStage() }; $('#prevB').onclick = () => moveSel(-1); $('#nextB').onclick = () => moveSel(1); $('#kAdd').onclick = () => kashida(true); $('#kDel').onclick = () => kashida(false);
        $('#mx').oninput = e => { let m = curMark(); if (m) { m.dx = +e.target.value; renderStage() } }; $('#my').oninput = e => { let m = curMark(); if (m) { m.dy = +e.target.value; renderStage() } }; $('#resetM').onclick = () => { let m = curMark(); if (m) { m.dx = m.dy = 0; renderStage(); setSliders() } }; $$('.pad [data-n]').forEach(b => b.onclick = () => { let [x, y] = b.dataset.n.split(',').map(Number); nudge(x * .03, y * .03) });
        $('#clearB').onclick = () => { S.clusters.forEach(c => c.marks = []); syncTA(); refresh() }; $('#copyB').onclick = copyText; $('#saveKly').onclick = exportKly; $('#openKly').onclick = () => $('#klyFile').click(); $('#libSave').onclick = exportKly; $('#libOpen').onclick = () => $('#klyFile').click(); $('#klyFile').onchange = e => { if (e.target.files[0]) importKly(e.target.files[0]); e.target.value = '' };
        $('#lgText').oninput = e => { S.logo.text = e.target.value; drawLogo() }; $('#lgSub').oninput = e => { S.logo.sub = e.target.value; drawLogo() }; $('#lgFont').onchange = e => { S.logo.font = e.target.value; drawLogo() }; $('#lgSize').oninput = e => { S.logo.size = +e.target.value; drawLogo() };
        [['#cBg', 'bg'], ['#cFg', 'fg'], ['#cAc', 'ac']].forEach(([s, k]) => $(s).oninput = e => { S.logo[k] = e.target.value; S.logo.theme = ''; renderLogoThemes(); drawLogo() }); $('#lgUse').onclick = () => { S.logo.text = oneLine() || S.logo.text; $('#lgText').value = S.logo.text; drawLogo() }; $('#lgDl').onclick = () => downloadLogo(false); $('#lgTransparent').onclick = () => downloadLogo(true)
      }
      function init() { if (!['lapis', 'teal', 'plum', 'sand', 'night', 'emerald'].includes(theme)) theme = 'lapis'; document.documentElement.dataset.theme = theme; $('#langSel').value = lang; $('#themeSelect').value = theme; $('#ta').value = DEFAULT_TEXT; S.clusters = parse(DEFAULT_TEXT); $('#sizeR').value = S.size; $('#lgText').value = S.logo.text; $('#lgSub').value = S.logo.sub; $('#lgSize').value = S.logo.size; syncColors(); bind(); renderAll() }
      init();
    })();
  

  
    (function () {
      const splash = document.getElementById("splash");
      let seen = false; try { seen = sessionStorage.getItem("kelkyar:splash") === "1" } catch (e) { }
      if (seen) { splash.classList.add("hide"); splash.style.display = "none"; return }
      document.body.style.overflow = "hidden";
      let step = 1, timer = null;
      function finish() {
        clearTimeout(timer);
        splash.classList.add("hide"); document.body.style.overflow = "";
        try { sessionStorage.setItem("kelkyar:splash", "1") } catch (e) { }
        setTimeout(() => { splash.style.display = "none" }, 800);
      }
      function goToStep(n) {
        clearTimeout(timer); step = Number(n);
        document.querySelectorAll(".splash-step").forEach(s => s.classList.remove("active"));
        document.querySelectorAll(".splash-dots .dot").forEach(d => d.classList.remove("active"));
        const st = document.querySelector('.splash-step[data-step="' + step + '"]'), dt = document.querySelector('.splash-dots .dot[data-dot="' + step + '"]');
        if (st) st.classList.add("active"); if (dt) dt.classList.add("active");
        document.querySelectorAll(".splash-auto").forEach(x => x.remove());
        if (step < 4) {
          const bar = document.createElement("div"); bar.className = "splash-auto"; bar.innerHTML = "<span></span>";
          st?.appendChild(bar);
          requestAnimationFrame(() => bar.querySelector("span").style.width = "100%");
          timer = setTimeout(() => goToStep(step + 1), 3000);
        }
      }
      document.querySelectorAll(".next-btn").forEach(b => b.addEventListener("click", () => goToStep(b.dataset.next)));
      document.querySelectorAll(".prev-btn").forEach(b => b.addEventListener("click", () => goToStep(b.dataset.prev)));
      document.getElementById("enterBtn").addEventListener("click", finish);
      document.getElementById("splashSkip").addEventListener("click", finish);
      goToStep(1);
    })();
  

  
    (function () {
      const $ = q => document.querySelector(q), st = $('#stage'), fg = $('#stFg'), bg = $('#stBg');
      let align = 'right';
      function paint() {
        st.style.color = fg.value; st.style.background = bg.value; st.style.textAlign = align;
        document.querySelectorAll('#stAlign button').forEach(b => b.classList.toggle('on', b.dataset.a === align))
      }
      fg.oninput = bg.oninput = paint;
      document.querySelectorAll('#stAlign button').forEach(b => b.onclick = () => { align = b.dataset.a; paint() });
      $('#stReset').onclick = () => {
        st.style.color = st.style.background = ''; fg.value = '#16203a'; bg.value = '#ffffff'; align = 'right'; st.style.textAlign = '';
        document.querySelectorAll('#stAlign button').forEach(b => b.classList.remove('on'))
      };
      $('#stPng').onclick = async () => {
        const text = ($('#ta').value || '').replace(/\r/g, ''), lines = text.split('\n'), fam = st.style.fontFamily || 'serif',
          fs = (parseFloat(st.style.fontSize) || 60) * 1.8, lh = parseFloat(st.style.lineHeight) || 1.9, pad = fs * .8, W = 1400;
        try { await document.fonts.load('400 ' + fs + 'px ' + fam, text) } catch (e) { }
        const H = Math.max(pad * 2 + lines.length * fs * lh, 400), c = document.createElement('canvas'); c.width = W; c.height = H;
        const x = c.getContext('2d'); x.fillStyle = bg.value; x.fillRect(0, 0, W, H);
        x.fillStyle = fg.value; x.font = '400 ' + fs + 'px ' + fam; x.direction = 'rtl'; x.textBaseline = 'middle';
        const K = window.__kk || { tx: 0, ty: 0 }, pos = (align === 'center' ? W / 2 : align === 'left' ? pad : W - pad) + K.tx * 1.8; x.textAlign = align;
        lines.forEach((l, i) => x.fillText(l, pos, pad + fs * lh * (i + .5) + K.ty * 1.8));
        c.toBlob(b => { if (!b) return; const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'kelkyar-text.png'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1500) });
      };
      paint();
    })();
  

  
    (function () {
      const st = document.querySelector('#stage'), mv = document.querySelector('#stMove');
      let on = false, tx = 0, ty = 0, d = null, moved = false;
      window.__kk = { get tx() { return tx }, get ty() { return ty } };
      const apply = () => { st.style.setProperty('--tx', tx + 'px'); st.style.setProperty('--ty', ty + 'px') };
      mv.onclick = () => { on = !on; mv.classList.toggle('on', on); st.classList.toggle('moving', on) };
      document.querySelector('#stPos').onclick = () => { tx = ty = 0; apply() };
      st.addEventListener('pointerdown', e => { if (!on) return; e.preventDefault(); d = { x: e.clientX - tx, y: e.clientY - ty }; moved = false; st.setPointerCapture(e.pointerId) });
      st.addEventListener('pointermove', e => { if (!d) return; tx = e.clientX - d.x; ty = e.clientY - d.y; moved = true; apply() });
      const end = () => { d = null }; st.addEventListener('pointerup', end); st.addEventListener('pointercancel', end);
      st.addEventListener('click', e => { if (on || moved) { e.stopPropagation(); moved = false } }, true);
    })();
  
  
    (function () {

      /*
==================================================
BASIC
==================================================
*/
      const c = document.getElementById("c");
      const x = c.getContext("2d");
      const $ = (id) => document.getElementById(id);

      let currentBg = "dark";
      let isExporting = false;
      let fontRequestID = 0;

      // ===== IMAGE STATE =====
      let userImg = null;
      let userImgSrc = "";
      let imgX = 360;
      let imgY = 320;
      let imgSize = 180;

      // ===== TEXT POSITION =====
      let textX = 360;
      let textY = 450;

      // ===== SHAPE =====
      let showShape = false;
      let shapeX = 360;
      let shapeY = 280;
      let shapeW = 160;
      let shapeH = 160;

      // ===== DRAG STATE =====
      let dragTarget = null; // "img" | "text" | "shape" | null
      let selectedElement = "text";
      const lockedElements = { text: false, img: false, shape: false };
      const studioExtraLayers = [];
      let studioActiveExtra = null;
      let studioLayerSeq = 0;
      let studioLayerMode = false;
      let studioLayerOrder = [];
      let studioBaseLayers = null;

      function ensureStudioLayerMode() {
        if (studioLayerMode) return;
        studioBaseLayers = {
          base_img: { id: 'base_img', type: 'img', name: 'تصویر', x: imgX, y: imgY, size: +$('imgSize').value || imgSize || 180, shape: $('imgShape').value || 'none', locked: !!lockedElements.img },
          base_shape: { id: 'base_shape', type: 'shape', name: 'شکل اصلی', shapeType: $('shapeType').value || 'circle', fill: $('shapeFill').value || '#1e1e2e', stroke: $('shapeStroke').value || '#ffffff', fillEnabled: $('shapeFillEnabled').checked, line: +$('shapeLine').value || 4, rot: +$('shapeRot').value || 0, opacity: +$('shapeOpacity').value || 100, w: +$('shapeW').value || shapeW || 160, h: +$('shapeH').value || shapeH || 160, x: shapeX, y: shapeY, visible: !!$('shapeToggle').checked, locked: !!lockedElements.shape },
          base_text: { id: 'base_text', type: 'text', name: 'متن اصلی', text: $('text').value || 'متن شما', font: $('font').value || 'Vazirmatn', size: +$('size').value || 72, color: $('color').value || '#ffffff', rotate: +$('rotate').value || 0, shadow: $('shadow').checked, stroke: $('stroke').checked, glow: $('glow').checked, x: textX, y: textY, locked: !!lockedElements.text }
        };
        studioLayerOrder = ['base_img', 'base_shape', 'base_text'];
        studioLayerMode = true;
      }
      function getStudioLayer(id) { return studioBaseLayers?.[id] || studioExtraLayers.find(L => L.id === id) || null; }
      function syncSelectedBase() {
        if (!studioLayerMode || studioActiveExtra || !studioBaseLayers) return;
        if (selectedElement === 'text') { const L = studioBaseLayers.base_text; Object.assign(L, { text: $('text').value || 'متن شما', font: $('font').value || 'Vazirmatn', size: +$('size').value || 72, color: $('color').value || '#ffffff', rotate: +$('rotate').value || 0, shadow: $('shadow').checked, stroke: $('stroke').checked, glow: $('glow').checked, x: textX, y: textY, locked: !!lockedElements.text }); }
        if (selectedElement === 'shape') { const L = studioBaseLayers.base_shape; Object.assign(L, { shapeType: $('shapeType').value || 'circle', fill: $('shapeFill').value || '#1e1e2e', stroke: $('shapeStroke').value || '#ffffff', fillEnabled: $('shapeFillEnabled').checked, line: +$('shapeLine').value || 4, rot: +$('shapeRot').value || 0, opacity: +$('shapeOpacity').value || 100, w: +$('shapeW').value || 160, h: +$('shapeH').value || 160, x: shapeX, y: shapeY, visible: !!$('shapeToggle').checked, locked: !!lockedElements.shape }); }
        if (selectedElement === 'img') { Object.assign(studioBaseLayers.base_img, { x: imgX, y: imgY, size: +$('imgSize').value || imgSize || 180, shape: $('imgShape').value || 'none', locked: !!lockedElements.img }); }
      }

      function syncActiveExtra() {
        if (!studioActiveExtra) return;
        const L = studioActiveExtra;
        if (L.type === 'text') Object.assign(L, { text: $('text').value, font: $('font').value, size: +$('size').value, color: $('color').value, rotate: +$('rotate').value, shadow: $('shadow').checked, stroke: $('stroke').checked, glow: $('glow').checked, x: textX, y: textY, locked: !!lockedElements.text });
        if (L.type === 'shape') Object.assign(L, { shapeType: $('shapeType').value, fill: $('shapeFill').value, stroke: $('shapeStroke').value, fillEnabled: $('shapeFillEnabled').checked, line: +$('shapeLine').value, rot: +$('shapeRot').value, opacity: +$('shapeOpacity').value, w: +$('shapeW').value, h: +$('shapeH').value, x: shapeX, y: shapeY, locked: !!lockedElements.shape });
      }
      function loadExtraLayer(L) {
        studioActiveExtra = L; selectedElement = L.type;
        if (L.type === 'text') { $('text').value = L.text; $('font').value = L.font; $('size').value = L.size; $('color').value = L.color; $('rotate').value = L.rotate; $('shadow').checked = L.shadow; $('stroke').checked = L.stroke; $('glow').checked = L.glow; textX = L.x; textY = L.y; }
        if (L.type === 'shape') { $('shapeToggle').checked = true; $('shapeType').value = L.shapeType; $('shapeFill').value = L.fill; $('shapeStroke').value = L.stroke; $('shapeFillEnabled').checked = L.fillEnabled; $('shapeLine').value = L.line; $('shapeRot').value = L.rot; $('shapeOpacity').value = L.opacity; $('shapeW').value = L.w; $('shapeH').value = L.h; shapeX = L.x; shapeY = L.y; }
        lockedElements.text = lockedElements.img = lockedElements.shape = false; lockedElements[L.type] = !!L.locked; renderStudioLayers(); safeDraw();
      }
      function addExtraLayer(type) {
        syncActiveExtra(); ensureStudioLayerMode(); syncSelectedBase(); const id = 'layer_' + (++studioLayerSeq);
        if (type === 'text') { studioExtraLayers.push({ id, type, name: 'متن جدید', text: 'متن جدید', font: $('font').value, size: +$('size').value, color: $('color').value, rotate: 0, shadow: true, stroke: false, glow: false, x: c.width / 2, y: c.height / 2, locked: false }); }
        else { studioExtraLayers.push({ id, type, name: 'شکل جدید', shapeType: 'circle', fill: '#1e1e2e', stroke: '#ffffff', fillEnabled: true, line: 4, rot: 0, opacity: 100, w: 180, h: 180, x: c.width / 2, y: c.height / 2, locked: false }); }
        studioLayerOrder.push(id); loadExtraLayer(studioExtraLayers[studioExtraLayers.length - 1]); studioLastSnapshot = null; draw();
      }

      let dragHistoryStart = null;
      let dragOffsetX = 0;
      let dragOffsetY = 0;

      /*
==================================================
LOGO
==================================================
*/
      const logoImg = new Image();

      logoImg.onload = () => draw();

      /*
==================================================
FONT WEIGHTS
==================================================
*/
      const heavyFonts = new Set([
        "Vazirmatn",
        "Cairo", "Changa",
        "Noto Nastaliq Urdu", "Gulzar", "Jameel Noori Nastaleeq",
        "IranNastaliq", "AlviLahoriNastaleeq", "JameelNooriNastaleeqExtra", "PDMSJauhar",
        "Mirza", "Aref Ruqaa", "Rakkas", "Lateef", "Katibeh",
        "Noto Naskh Arabic", "Noto Serif Arabic", "Noto Sans Arabic", "Noto Kufi Arabic", "IBM Plex Sans Arabic", "Marhey", "Zain",
      ]);

      function getFontWeight(font) {
        return heavyFonts.has(font) ? 800 : 700;
      }

      /*
==================================================
FONT PRELOADER
==================================================
*/
      /* ===== OFFLINE FONT CACHE ===== */
      const FONT_DB = 'kelkyar-font-cache-v1';
      function fontDb() { return new Promise((res, rej) => { const r = indexedDB.open(FONT_DB, 1); r.onupgradeneeded = () => r.result.createObjectStore('fonts'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error) }) }
      async function getCachedFont(name) { try { const db = await fontDb(); return await new Promise((res, rej) => { const q = db.transaction('fonts').objectStore('fonts').get(name); q.onsuccess = () => res(q.result || null); q.onerror = () => rej(q.error) }) } catch (e) { return null } }
      async function cacheFont(name, buf) { try { const db = await fontDb(); await new Promise((res, rej) => { const q = db.transaction('fonts', 'readwrite').objectStore('fonts').put(buf, name); q.onsuccess = () => res(); q.onerror = () => rej(q.error) }) } catch (e) { } }
      async function cacheGoogleFont(name) {
        const hit = await getCachedFont(name); if (hit) { try { const ff = new FontFace(name, hit); await ff.load(); document.fonts.add(ff); return true } catch (e) { } }
        if (!navigator.onLine) return false;
        try { const links = [...document.querySelectorAll('link[href*="fonts.googleapis.com/css"]')]; for (const link of links) { const css = await fetch(link.href).then(r => r.text()); const safe = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); const block = new RegExp('font-family:\s*["\']' + safe + '["\']\s*;[^}]*src:[^}]*url\(([^)]+)\)', 'i').exec(css); if (block) { const url = block[1].replace(/["\']/g, ''); const buf = await fetch(url).then(r => r.arrayBuffer()); await cacheFont(name, buf); const ff = new FontFace(name, buf); await ff.load(); document.fonts.add(ff); return true } } } catch (e) { console.warn('offline font cache:', e) } return false;
      }

      async function prepareFont(fontName, size, text) {
        const preloader = $("fontPreloaderText");
        const weight = getFontWeight(fontName);

        preloader.textContent = text || "متن شما";
        preloader.style.fontFamily = `"${fontName}", sans-serif`;
        preloader.style.fontSize = `${size}px`;
        preloader.style.fontWeight = weight;

        void preloader.offsetWidth;

        await cacheGoogleFont(fontName);
        try {
          await document.fonts.load(
            `${weight} ${size}px "${fontName}"`,
            text || "متن شما",
          );
        } catch (error) {
          console.warn("Font load warning:", fontName, error);
        }

        try {
          document.fonts.check(
            `${weight} ${size}px "${fontName}"`,
            text || "متن شما",
          );
        } catch (error) {
          console.warn("Font check warning:", error);
        }

        if (document.fonts.ready) {
          await document.fonts.ready;
        }

        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));
      }

      /*
==================================================
DRAW
==================================================
*/
      function renderStudioLayer(L) {
        if (!L) return;
        x.save();
        if (L.type === 'img') {
          if (userImg && userImg.complete && userImg.naturalWidth > 0) {
            const s = Number(L.size) || 180, shape = L.shape || 'none', aspect = userImg.naturalWidth / userImg.naturalHeight;
            let dw = s, dh = s; if (aspect > 1) dh = s / aspect; else dw = s * aspect;
            x.globalAlpha = 1; x.beginPath();
            if (shape === 'circle') { x.arc(L.x, L.y, s / 2, 0, Math.PI * 2); x.clip(); }
            else if (shape === 'rounded') { const r = s * .18, left = L.x - s / 2, top = L.y - s / 2; x.moveTo(left + r, top); x.arcTo(left + s, top, left + s, top + s, r); x.arcTo(left + s, top + s, left, top + s, r); x.arcTo(left, top + s, left, top, r); x.arcTo(left, top, left + s, top, r); x.closePath(); x.clip(); }
            else if (shape === 'square') { x.rect(L.x - s / 2, L.y - s / 2, s, s); x.clip(); }
            else if (shape === 'hex') { for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i - Math.PI / 6, px = L.x + s / 2 * Math.cos(a), py = L.y + s / 2 * Math.sin(a); i ? x.lineTo(px, py) : x.moveTo(px, py); } x.closePath(); x.clip(); }
            x.drawImage(userImg, L.x - dw / 2, L.y - dh / 2, dw, dh);
          }
        } else if (L.type === 'shape') {
          if (L.visible === false && L.id === 'base_shape') { x.restore(); return; }
          x.translate(L.x, L.y); x.rotate((L.rot || 0) * Math.PI / 180); x.globalAlpha = (L.opacity ?? 100) / 100; x.beginPath();
          if (L.shapeType === 'circle') x.ellipse(0, 0, L.w / 2, L.h / 2, 0, 0, Math.PI * 2);
          else if (L.shapeType === 'rounded') { const r = Math.min(L.w, L.h) * .18; x.roundRect(-L.w / 2, -L.h / 2, L.w, L.h, r); }
          else if (L.shapeType === 'hex') { for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i - Math.PI / 6, px = L.w / 2 * Math.cos(a), py = L.h / 2 * Math.sin(a); i ? x.lineTo(px, py) : x.moveTo(px, py); } x.closePath(); }
          else x.rect(-L.w / 2, -L.h / 2, L.w, L.h);
          if (L.fillEnabled) { x.fillStyle = L.fill || '#1e1e2e'; x.fill(); } x.strokeStyle = L.stroke || '#fff'; x.lineWidth = L.line || 4; x.stroke();
        } else if (L.type === 'text') {
          x.translate(L.x, L.y); x.rotate((L.rotate || 0) * Math.PI / 180); x.font = `${getFontWeight(L.font || 'Vazirmatn')} ${L.size || 72}px "${L.font || 'Vazirmatn'}", Vazirmatn, Tahoma, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
          if (L.glow) { x.shadowColor = L.color || '#fff'; x.shadowBlur = 30; x.fillStyle = L.color || '#fff'; x.fillText(L.text || '', 0, 0); }
          if (L.shadow) { x.shadowColor = 'rgba(0,0,0,.7)'; x.shadowBlur = 20; x.shadowOffsetX = 6; x.shadowOffsetY = 10; }
          if (L.stroke) { x.lineWidth = Math.max(4, (L.size || 72) * .07); x.strokeStyle = '#0a0a0a'; x.strokeText(L.text || '', 0, 0); }
          x.fillStyle = L.color || '#fff'; x.fillText(L.text || '', 0, 0);
        }
        x.restore();
      }

      function draw() {
        x.clearRect(0, 0, c.width, c.height);

        /* BACKGROUND */
        if (currentBg === "clean") {
          x.clearRect(0, 0, c.width, c.height);
        } else if (
          currentBg === "logo" &&
          logoImg.complete &&
          logoImg.naturalWidth > 0
        ) {
          x.fillStyle = "#08080c";
          x.fillRect(0, 0, c.width, c.height);

          const scale =
            Math.min(c.width / logoImg.width, c.height / logoImg.height) * 0.9;
          const w = logoImg.width * scale;
          const h = logoImg.height * scale;

          x.globalAlpha = 0.9;
          x.drawImage(logoImg, (c.width - w) / 2, (c.height - h) / 2 - 8, w, h);
          x.globalAlpha = 1;

          x.fillStyle = "rgba(0,0,0,.2)";
          x.fillRect(0, 0, c.width, c.height);
        } else if (currentBg === "gradient") {
          const g = x.createLinearGradient(0, 0, c.width, c.height);
          g.addColorStop(0, "#0c0c14");
          g.addColorStop(0.5, "#12182a");
          g.addColorStop(1, "#0e0a14");
          x.fillStyle = g;
          x.fillRect(0, 0, c.width, c.height);
        } else {
          const g = x.createLinearGradient(0, 0, 0, c.height);
          g.addColorStop(0, "#121218");
          g.addColorStop(1, "#0a0a0e");
          x.fillStyle = g;
          x.fillRect(0, 0, c.width, c.height);
        }

        if (studioLayerMode) {
          syncActiveExtra(); syncSelectedBase();
          studioLayerOrder.forEach(id => renderStudioLayer(getStudioLayer(id)));
          if (!isExporting && currentBg !== "clean") { x.font = '500 16px "Vazirmatn", sans-serif'; x.fillStyle = "rgba(160,160,170,.6)"; x.textAlign = "center"; x.textBaseline = "alphabetic"; x.fillText($("sub").value, c.width / 2, c.height - 60); }
          return;
        }

        /* ===== DRAW USER IMAGE WITH SHAPE ===== */
        if (userImg && userImg.complete && userImg.naturalWidth > 0) {
          const shape = $("imgShape").value || "none";
          const s = Number($("imgSize").value) || 180;
          imgSize = s;
          if ($("imgSizeVal")) $("imgSizeVal").textContent = `(${s})`;

          x.save();
          x.beginPath();

          if (shape === "circle") {
            x.arc(imgX, imgY, s / 2, 0, Math.PI * 2);
            x.closePath();
            x.clip();
          } else if (shape === "rounded") {
            const r = s * 0.18;
            const left = imgX - s / 2;
            const top = imgY - s / 2;
            x.moveTo(left + r, top);
            x.arcTo(left + s, top, left + s, top + s, r);
            x.arcTo(left + s, top + s, left, top + s, r);
            x.arcTo(left, top + s, left, top, r);
            x.arcTo(left, top, left + s, top, r);
            x.closePath();
            x.clip();
          } else if (shape === "square") {
            x.rect(imgX - s / 2, imgY - s / 2, s, s);
            x.clip();
          } else if (shape === "hex") {
            const r = s / 2;
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i - Math.PI / 6;
              const px = imgX + r * Math.cos(angle);
              const py = imgY + r * Math.sin(angle);
              if (i === 0) x.moveTo(px, py);
              else x.lineTo(px, py);
            }
            x.closePath();
            x.clip();
          }

          // Draw image centered on imgX, imgY
          const aspect = userImg.naturalWidth / userImg.naturalHeight;
          let dw = s, dh = s;
          if (aspect > 1) {
            dh = s / aspect;
          } else {
            dw = s * aspect;
          }
          x.drawImage(userImg, imgX - dw / 2, imgY - dh / 2, dw, dh);

          x.restore();

          // Optional border for shapes
          if (shape !== "none") {
            x.save();
            x.beginPath();
            if (shape === "circle") {
              x.arc(imgX, imgY, s / 2, 0, Math.PI * 2);
            } else if (shape === "rounded") {
              const r = s * 0.18;
              const left = imgX - s / 2;
              const top = imgY - s / 2;
              x.moveTo(left + r, top);
              x.arcTo(left + s, top, left + s, top + s, r);
              x.arcTo(left + s, top + s, left, top + s, r);
              x.arcTo(left, top + s, left, top, r);
              x.arcTo(left, top, left + s, top, r);
              x.closePath();
            } else if (shape === "square") {
              x.rect(imgX - s / 2, imgY - s / 2, s, s);
            } else if (shape === "hex") {
              const r = s / 2;
              for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i - Math.PI / 6;
                const px = imgX + r * Math.cos(angle);
                const py = imgY + r * Math.sin(angle);
                if (i === 0) x.moveTo(px, py);
                else x.lineTo(px, py);
              }
              x.closePath();
            }
            x.strokeStyle = "rgba(255,255,255,0.55)";
            x.lineWidth = 3;
            x.stroke();
            x.restore();
          }
        }

        /* VALUES */
        const text = $("text").value || "متن شما";
        const size = Number($("size").value) || 72;
        const font = $("font").value || "Vazirmatn";
        const rot = Number($("rotate").value) || 0;

        $("rotVal").textContent = `(${rot}°)`;
        if ($("sizeVal")) {
          $("sizeVal").textContent = `(${size})`;
        }

        /* ===== SHAPE (circle / square / rounded / hex) ===== */
        if ($("shapeToggle") && $("shapeToggle").checked && studioActiveExtra?.type !== "shape") {
          showShape = true;
          shapeW = Number($("shapeW").value) || 160;
          shapeH = Number($("shapeH").value) || 160;
          if ($("shapeWVal")) $("shapeWVal").textContent = `(${shapeW})`;
          if ($("shapeHVal")) $("shapeHVal").textContent = `(${shapeH})`;

          const type = $("shapeType").value || "circle";
          const fillColor = $("shapeFill").value || "#1e1e2e";
          const strokeColor = $("shapeStroke").value || "#ffffff";
          const doFill = $("shapeFillEnabled") && $("shapeFillEnabled").checked;
          const lineW = Number($("shapeLine").value) || 4;
          const shapeRot = Number($("shapeRot").value) || 0;
          const opacity = (Number($("shapeOpacity").value) || 100) / 100;

          if ($("shapeLineVal")) $("shapeLineVal").textContent = `(${lineW})`;
          if ($("shapeRotVal")) $("shapeRotVal").textContent = `(${shapeRot}°)`;
          if ($("shapeOpacityVal")) $("shapeOpacityVal").textContent = `(${Math.round(opacity * 100)}%)`;

          x.save();
          x.translate(shapeX, shapeY);
          x.rotate((shapeRot * Math.PI) / 180);
          x.globalAlpha = opacity;
          x.beginPath();

          if (type === "circle") {
            x.ellipse(0, 0, shapeW / 2, shapeH / 2, 0, 0, Math.PI * 2);
          } else if (type === "square") {
            x.rect(-shapeW / 2, -shapeH / 2, shapeW, shapeH);
          } else if (type === "rounded") {
            const r = Math.min(shapeW, shapeH) * 0.18;
            const left = -shapeW / 2;
            const top = -shapeH / 2;
            x.moveTo(left + r, top);
            x.arcTo(left + shapeW, top, left + shapeW, top + shapeH, r);
            x.arcTo(left + shapeW, top + shapeH, left, top + shapeH, r);
            x.arcTo(left, top + shapeH, left, top, r);
            x.arcTo(left, top, left + shapeW, top, r);
            x.closePath();
          } else if (type === "hex") {
            const hw = shapeW / 2;
            const hh = shapeH / 2;
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i - Math.PI / 6;
              const px = hw * Math.cos(angle);
              const py = hh * Math.sin(angle);
              if (i === 0) x.moveTo(px, py);
              else x.lineTo(px, py);
            }
            x.closePath();
          }

          if (doFill) {
            x.fillStyle = fillColor;
            x.fill();
          }
          x.strokeStyle = strokeColor;
          x.lineWidth = lineW;
          x.stroke();
          x.restore();
        } else {
          showShape = false;
        }

        /* CANVAS TEXT - now uses textX / textY */
        if (studioActiveExtra?.type !== "text") {
          x.save();
          x.translate(textX, textY);
          x.rotate((rot * Math.PI) / 180);

          const weight = getFontWeight(font);
          x.font = `${weight} ${size}px "${font}", Vazirmatn, Tahoma, sans-serif`;
          x.measureText(text);
          x.textAlign = "center";
          x.textBaseline = "middle";

          x.shadowColor = "transparent";
          x.shadowBlur = 0;
          x.shadowOffsetX = 0;
          x.shadowOffsetY = 0;

          /* GLOW */
          if ($("glow").checked) {
            x.shadowColor = $("color").value;
            x.shadowBlur = 30;
            x.fillStyle = $("color").value;
            x.fillText(text, 0, 0);
          }

          /* SHADOW */
          if ($("shadow").checked) {
            x.shadowColor = "rgba(0,0,0,.7)";
            x.shadowBlur = 20;
            x.shadowOffsetX = 6;
            x.shadowOffsetY = 10;
          }

          /* STROKE */
          if ($("stroke").checked) {
            x.lineWidth = Math.max(4, size * 0.07);
            x.strokeStyle = "#0a0a0a";
            x.strokeText(text, 0, 0);
          }

          /* FILL */
          x.fillStyle = $("color").value;
          x.fillText(text, 0, 0);
          x.restore();
        }

        /* SUBTITLE */
        if (!isExporting && currentBg !== "clean") {
          x.font = '500 16px "Vazirmatn", sans-serif';
          x.fillStyle = "rgba(160,160,170,.6)";
          x.textAlign = "center";
          x.textBaseline = "alphabetic";
          x.fillText($("sub").value, c.width / 2, c.height - 60);
        }

        /* EXTRA LAYERS: array order is bottom-to-top, like Photoshop */
        syncActiveExtra();
        studioExtraLayers.forEach(L => {
          x.save();
          if (L.type === 'shape') {
            x.translate(L.x, L.y); x.rotate((L.rot || 0) * Math.PI / 180); x.globalAlpha = (L.opacity ?? 100) / 100; x.beginPath();
            if (L.shapeType === 'circle') x.ellipse(0, 0, L.w / 2, L.h / 2, 0, 0, Math.PI * 2);
            else if (L.shapeType === 'rounded') { const r = Math.min(L.w, L.h) * .18; x.roundRect(-L.w / 2, -L.h / 2, L.w, L.h, r); }
            else if (L.shapeType === 'hex') { for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i - Math.PI / 6, px = L.w / 2 * Math.cos(a), py = L.h / 2 * Math.sin(a); i ? x.lineTo(px, py) : x.moveTo(px, py); } x.closePath(); }
            else x.rect(-L.w / 2, -L.h / 2, L.w, L.h);
            if (L.fillEnabled) { x.fillStyle = L.fill; x.fill(); } x.strokeStyle = L.stroke || '#fff'; x.lineWidth = L.line || 4; x.stroke();
          } else {
            x.translate(L.x, L.y); x.rotate((L.rotate || 0) * Math.PI / 180); x.font = `${getFontWeight(L.font)} ${L.size}px "${L.font}", Vazirmatn, Tahoma, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
            if (L.shadow) { x.shadowColor = 'rgba(0,0,0,.7)'; x.shadowBlur = 20; x.shadowOffsetX = 6; x.shadowOffsetY = 10; }
            if (L.stroke) { x.lineWidth = Math.max(4, L.size * .07); x.strokeStyle = '#0a0a0a'; x.strokeText(L.text, 0, 0); }
            x.fillStyle = L.color; x.fillText(L.text, 0, 0);
          }
          x.restore();
        });
      }

      /*
==================================================
SAFE DRAW
==================================================
*/
      async function safeDraw() {
        const request = ++fontRequestID;
        const font = $("font").value || "Vazirmatn";
        const size = Number($("size").value) || 72;
        const text = $("text").value || "متن شما";

        await prepareFont(font, size, text);

        if (request !== fontRequestID) {
          return;
        }

        draw();
      }

      /*
==================================================
FONT CHANGE
==================================================
*/
      $("font").addEventListener("change", safeDraw);
      $("font").addEventListener("input", safeDraw);

      /*
==================================================
NORMAL INPUTS
==================================================
*/
      $("text").addEventListener("input", async () => {
        await safeDraw();
      });

      $("size").addEventListener("input", () => {
        safeDraw();
      });

      $("color").addEventListener("input", draw);
      $("rotate").addEventListener("input", draw);
      $("shadow").addEventListener("change", draw);
      $("stroke").addEventListener("change", draw);
      $("glow").addEventListener("change", draw);
      $("sub").addEventListener("input", draw);

      /*
==================================================
COLOR PRESETS
==================================================
*/
      document.querySelectorAll("[data-color]").forEach((button) => {
        button.onclick = () => {
          $("color").value = button.dataset.color;
          draw();
        };
      });

      /*
==================================================
BACKGROUND
==================================================
*/
      document.querySelectorAll("[data-bg]").forEach((button) => {
        button.onclick = () => {
          currentBg = button.dataset.bg;
          document.querySelectorAll(".bg-btn").forEach((element) => {
            element.classList.remove("active");
          });
          button.classList.add("active");
          draw();
        };
      });

      /*
==================================================
CLEAR
==================================================
*/
      $("clear").onclick = () => {
        $("text").value = "";
        $("sub").value = "";
        userImg = null;
        userImgSrc = "";
        $("imgFile").value = "";
        if ($("removeImg")) $("removeImg").style.display = "none";
        draw();
      };

      /*
==================================================
RANDOM
==================================================
*/
      $("random").onclick = async () => {
        const colors = [
          "#ffffff", "#f5e6c8", "#ffd56a", "#f9a8d4", "#93c5fd", "#6ee7b7",
        ];
        const fonts = [
          "Aref Ruqaa",
          "Aref Ruqaa Ink",
          "Badeen Display",
          "Baloo Bhaijaan 2",
          "Cairo",
          "Cairo Play",
          "Changa",
          "El Messiri",
          "Fustat",
          "Gulzar",
          "Harmattan",
          "IBM Plex Sans Arabic",
          "Jomhuria",
          "Katibeh",
          "Lalezar",
          "Lateef",
          "Lemonada",
          "Mada",
          "Marhey",
          "Markazi Text",
          "Mirza",
          "Noto Kufi Arabic",
          "Noto Naskh Arabic",
          "Noto Nastaliq Urdu",
          "Noto Sans Arabic",
          "Noto Serif Arabic",
          "Qahiri",
          "Rakkas",
          "Readex Pro",
          "Reem Kufi",
          "Reem Kufi Fun",
          "Ruwudu",
          "Rubik",
          "Scheherazade New",
          "Tajawal",
          "Vazirmatn",
          "Zain",
          "Amiri",
          "Almarai",
          "Kufam",
          "Changa One",
          "Noto Sans Arabic UI",
          "Noto Sans Arabic SemiCondensed",
          "Noto Serif Arabic SemiCondensed",
          "Mitr",
          "Noto Sans",
          "Noto Serif",
          "Roboto",
          "Poppins",
          "Montserrat",
          "Oswald",
          "Bebas Neue",
          "Archivo Black",
          "Playfair Display",
          "Cormorant Garamond",
          "DM Serif Display",
          "Space Grotesk"
        ];

        $("color").value = colors[Math.floor(Math.random() * colors.length)];
        $("font").value = fonts[Math.floor(Math.random() * fonts.length)];
        $("size").value = 56 + Math.floor(Math.random() * 80);
        $("rotate").value = -12 + Math.floor(Math.random() * 25);
        $("shadow").checked = Math.random() > 0.3;
        $("stroke").checked = Math.random() > 0.55;
        $("glow").checked = Math.random() > 0.6;

        await safeDraw();
      };

      /*
==================================================
PRESETS
==================================================
*/
      document.querySelectorAll("[data-preset]").forEach((button) => {
        button.onclick = async () => {
          const p = button.dataset.preset;

          if (p === "poster") {
            $("size").value = 84;
            $("rotate").value = -4;
            $("shadow").checked = true;
            $("stroke").checked = true;
            $("glow").checked = false;
            $("font").value = "Vazirmatn";
            $("color").value = "#ffffff";
          }
          if (p === "minimal") {
            $("size").value = 60;
            $("rotate").value = 0;
            $("shadow").checked = false;
            $("stroke").checked = false;
            $("glow").checked = false;
            $("font").value = "Vazirmatn";
            $("color").value = "#f0f0f4";
          }
          if (p === "bold") {
            $("size").value = 100;
            $("rotate").value = 2;
            $("shadow").checked = true;
            $("stroke").checked = true;
            $("glow").checked = false;
            $("font").value = "Lalezar";
            $("color").value = "#ffd56a";
          }
          if (p === "elegant") {
            $("size").value = 70;
            $("rotate").value = -2;
            $("shadow").checked = true;
            $("stroke").checked = false;
            $("glow").checked = false;
            $("font").value = "Amiri";
            $("color").value = "#f5e6c8";
          }
          if (p === "neon") {
            $("size").value = 76;
            $("rotate").value = 0;
            $("shadow").checked = false;
            $("stroke").checked = false;
            $("glow").checked = true;
            $("font").value = "Rubik";
            $("color").value = "#93c5fd";
          }
          if (p === "nastaliq") {
            $("size").value = 78;
            $("rotate").value = -2;
            $("shadow").checked = true;
            $("stroke").checked = false;
            $("glow").checked = false;
            $("font").value = "IranNastaliq";
            $("color").value = "#f5e6c8";
          }

          await safeDraw();
        };
      });

      /*
==================================================
CUSTOM FONT
==================================================
*/
      $("fontFile").addEventListener("change", async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const rawName = file.name
          .replace(/\.[^/.]+$/, "")
          .replace(/[^a-zA-Z0-9_-]/g, "_");
        const name = `Custom_${rawName}_${Date.now()}`;

        try {
          const buffer = await file.arrayBuffer();
          const font = new FontFace(name, buffer);
          await font.load();
          document.fonts.add(font);

          let group = $("font").querySelector('optgroup[data-custom="true"]');
          if (!group) {
            group = document.createElement("optgroup");
            group.label = "✦ فونت‌های شخصی";
            group.dataset.custom = "true";
            $("font").insertBefore(group, $("font").firstChild);
          }

          const option = document.createElement("option");
          option.value = name;
          option.textContent = `${rawName} (شخصی)`;
          group.appendChild(option);

          $("font").value = name;
          $("customFontLabel").textContent = "✓ " + rawName;

          await safeDraw();
        } catch (error) {
          console.error("Custom font error:", error);
          alert("خطا در بارگذاری فونت");
        }
      });

      /*
==================================================
IMAGE UPLOAD + CONTROLS
==================================================
*/
      $("imgFile").addEventListener("change", (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
          userImg = img;
          userImgSrc = url;
          imgX = c.width / 2;
          imgY = c.height / 2 - 40;
          $("removeImg").style.display = "inline-block";
          draw();
        };
        img.src = url;
      });

      $("removeImg").onclick = () => {
        userImg = null;
        userImgSrc = "";
        $("imgFile").value = "";
        $("removeImg").style.display = "none";
        draw();
      };

      $("imgSize").addEventListener("input", () => {
        draw();
      });

      $("imgShape").addEventListener("change", () => {
        draw();
      });

      // ===== DRAG SUPPORT (image + text + shape) =====
      function getPos(e) {
        const rect = c.getBoundingClientRect();
        const scaleX = c.width / rect.width;
        const scaleY = c.height / rect.height;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
          x: (clientX - rect.left) * scaleX,
          y: (clientY - rect.top) * scaleY
        };
      }

      function hitImg(px, py) {
        if (!userImg) return false;
        const half = imgSize / 2;
        return px >= imgX - half && px <= imgX + half &&
          py >= imgY - half && py <= imgY + half;
      }

      function hitShape(px, py) {
        if (!$("shapeToggle") || !$("shapeToggle").checked) return false;
        const hw = (Number($("shapeW").value) || 160) / 2 + 12;
        const hh = (Number($("shapeH").value) || 160) / 2 + 12;
        return px >= shapeX - hw && px <= shapeX + hw &&
          py >= shapeY - hh && py <= shapeY + hh;
      }

      function hitText(px, py) {
        const size = Number($("size").value) || 72;
        const halfW = Math.max(80, size * 1.8);
        const halfH = size * 0.7;
        return px >= textX - halfW && px <= textX + halfW &&
          py >= textY - halfH && py <= textY + halfH;
      }

      function startDrag(pos) {
        if (studioLayerMode) {
          syncActiveExtra(); syncSelectedBase();
          for (let i = studioLayerOrder.length - 1; i >= 0; i--) {
            const id = studioLayerOrder[i], L = getStudioLayer(id); if (!L) continue;
            if (id === 'base_shape' && L.visible === false) continue;
            let hw = 60, hh = 35;
            if (L.type === 'shape') { hw = (L.w || 160) / 2 + 12; hh = (L.h || 160) / 2 + 12; }
            else if (L.type === 'img') { hw = (L.size || 180) / 2; hh = (L.size || 180) / 2; if (!userImg) continue; }
            else { hw = Math.max(80, (L.size || 72) * 1.8); hh = Math.max(30, (L.size || 72) * .8); }
            if (pos.x < L.x - hw || pos.x > L.x + hw || pos.y < L.y - hh || pos.y > L.y + hh) continue;
            if (L.locked) { if (id.startsWith('layer_')) loadExtraLayer(L); else { studioActiveExtra = null; selectedElement = L.type; renderStudioLayers(); } return false; }
            if (id.startsWith('layer_')) loadExtraLayer(L);
            else {
              studioActiveExtra = null; selectedElement = L.type; lockedElements.text = lockedElements.img = lockedElements.shape = false; lockedElements[L.type] = !!L.locked;
              if (L.type === 'text') { $('text').value = L.text; $('font').value = L.font; $('size').value = L.size; $('color').value = L.color; $('rotate').value = L.rotate; $('shadow').checked = L.shadow; $('stroke').checked = L.stroke; $('glow').checked = L.glow; textX = L.x; textY = L.y; }
              if (L.type === 'shape') { $('shapeToggle').checked = !!L.visible; $('shapeType').value = L.shapeType; $('shapeFill').value = L.fill; $('shapeStroke').value = L.stroke; $('shapeFillEnabled').checked = L.fillEnabled; $('shapeLine').value = L.line; $('shapeRot').value = L.rot; $('shapeOpacity').value = L.opacity; $('shapeW').value = L.w; $('shapeH').value = L.h; shapeX = L.x; shapeY = L.y; }
              if (L.type === 'img') { imgX = L.x; imgY = L.y; $('imgSize').value = L.size; $('imgShape').value = L.shape; }
              renderStudioLayers();
            }
            dragHistoryStart = studioSnapshot(); dragTarget = 'stack:' + id; dragOffsetX = pos.x - L.x; dragOffsetY = pos.y - L.y; return true;
          }
          dragTarget = null; return false;
        }

        // Pick the topmost extra layer first, then drag that exact layer.
        for (let i = studioExtraLayers.length - 1; i >= 0; i--) {
          const L = studioExtraLayers[i];
          const hw = L.type === 'text' ? Math.max(70, (L.size || 60) * 2) : Math.max(24, (L.w || 120) / 2 + 8);
          const hh = L.type === 'text' ? Math.max(28, (L.size || 60) * .8) : Math.max(24, (L.h || 120) / 2 + 8);
          if (pos.x >= L.x - hw && pos.x <= L.x + hw && pos.y >= L.y - hh && pos.y <= L.y + hh) {
            if (L.locked) { studioActiveExtra = L; renderStudioLayers(); return false; }
            syncActiveExtra(); loadExtraLayer(L); dragHistoryStart = studioSnapshot(); dragTarget = 'extra:' + L.id; dragOffsetX = pos.x - L.x; dragOffsetY = pos.y - L.y; return true;
          }
        }
        // Base image, shape, then text.
        if (hitImg(pos.x, pos.y) && !lockedElements.img) {
          selectedElement = "img"; renderStudioLayers();
          dragHistoryStart = studioSnapshot();
          dragTarget = "img";
          dragOffsetX = pos.x - imgX;
          dragOffsetY = pos.y - imgY;
          return true;
        }
        if (hitShape(pos.x, pos.y) && !lockedElements.shape) {
          selectedElement = "shape"; renderStudioLayers();
          dragHistoryStart = studioSnapshot();
          dragTarget = "shape";
          dragOffsetX = pos.x - shapeX;
          dragOffsetY = pos.y - shapeY;
          return true;
        }
        if (hitText(pos.x, pos.y) && !lockedElements.text) {
          selectedElement = "text"; renderStudioLayers();
          dragHistoryStart = studioSnapshot();
          dragTarget = "text";
          dragOffsetX = pos.x - textX;
          dragOffsetY = pos.y - textY;
          return true;
        }
        dragTarget = null;
        return false;
      }

      function moveDrag(pos) {
        if (!dragTarget) return;
        if (dragTarget && dragTarget.startsWith("stack:")) {
          const id = dragTarget.slice(6), L = getStudioLayer(id); if (L) { L.x = pos.x - dragOffsetX; L.y = pos.y - dragOffsetY; if (id === 'base_img') { imgX = L.x; imgY = L.y; } if (id === 'base_shape') { shapeX = L.x; shapeY = L.y; } if (id === 'base_text') { textX = L.x; textY = L.y; } if (studioActiveExtra?.id === L.id) { if (L.type === 'text') { textX = L.x; textY = L.y } else if (L.type === 'shape') { shapeX = L.x; shapeY = L.y } } }
        } else if (dragTarget && dragTarget.startsWith("extra:")) {
          const L = studioExtraLayers.find(v => v.id === dragTarget.slice(6)); if (L) { L.x = pos.x - dragOffsetX; L.y = pos.y - dragOffsetY; if (studioActiveExtra?.id === L.id) { if (L.type === 'text') { textX = L.x; textY = L.y } else { shapeX = L.x; shapeY = L.y } } }
        } else if (dragTarget === "img") {
          imgX = pos.x - dragOffsetX;
          imgY = pos.y - dragOffsetY;
        } else if (dragTarget === "shape") {
          shapeX = pos.x - dragOffsetX;
          shapeY = pos.y - dragOffsetY;
        } else if (dragTarget === "text") {
          textX = pos.x - dragOffsetX;
          textY = pos.y - dragOffsetY;
        }
        draw();
      }

      c.addEventListener("mousedown", (e) => {
        const pos = getPos(e);
        if (startDrag(pos)) {
          c.style.cursor = "grabbing";
        }
      });

      c.addEventListener("mousemove", (e) => {
        const pos = getPos(e);
        if (dragTarget) {
          moveDrag(pos);
        } else {
          if (hitImg(pos.x, pos.y) || hitShape(pos.x, pos.y) || hitText(pos.x, pos.y)) {
            c.style.cursor = "grab";
          } else {
            c.style.cursor = "default";
          }
        }
      });

      c.addEventListener("mouseup", () => {
        if (dragTarget && dragHistoryStart) { studioPushSnapshot(studioSnapshot()); }
        dragHistoryStart = null; dragTarget = null;
        c.style.cursor = "default";
      });

      c.addEventListener("mouseleave", () => {
        if (dragTarget && dragHistoryStart) { studioPushSnapshot(studioSnapshot()); }
        dragHistoryStart = null; dragTarget = null;
        c.style.cursor = "default";
      });

      // Touch
      c.addEventListener("touchstart", (e) => {
        const pos = getPos(e);
        if (startDrag(pos)) {
          e.preventDefault();
        }
      }, { passive: false });

      c.addEventListener("touchmove", (e) => {
        if (!dragTarget) return;
        const pos = getPos(e);
        moveDrag(pos);
        e.preventDefault();
      }, { passive: false });

      c.addEventListener("touchend", () => {
        if (dragTarget && dragHistoryStart) { studioPushSnapshot(studioSnapshot()); }
        dragHistoryStart = null; dragTarget = null;
      });

      // Shape controls
      if ($("shapeToggle")) {
        $("shapeToggle").addEventListener("change", () => draw());
      }
      if ($("shapeW")) $("shapeW").addEventListener("input", () => draw());
      if ($("shapeH")) $("shapeH").addEventListener("input", () => draw());
      if ($("shapeLine")) $("shapeLine").addEventListener("input", () => draw());
      if ($("shapeRot")) $("shapeRot").addEventListener("input", () => draw());
      if ($("shapeOpacity")) $("shapeOpacity").addEventListener("input", () => draw());
      if ($("shapeType")) {
        $("shapeType").addEventListener("change", () => draw());
      }
      if ($("shapeFill")) {
        $("shapeFill").addEventListener("input", () => draw());
      }
      if ($("shapeStroke")) {
        $("shapeStroke").addEventListener("input", () => draw());
      }
      if ($("shapeFillEnabled")) {
        $("shapeFillEnabled").addEventListener("change", () => draw());
      }
      document.querySelectorAll("[data-shape-fill]").forEach((btn) => {
        btn.onclick = () => {
          $("shapeFill").value = btn.dataset.shapeFill;
          draw();
        };
      });
      document.querySelectorAll("[data-shape-stroke]").forEach((btn) => {
        btn.onclick = () => {
          $("shapeStroke").value = btn.dataset.shapeStroke;
          draw();
        };
      });

      /*
==================================================
STUDIO HISTORY + LAYERS
==================================================
*/
      const studioHistory = [];
      const studioFuture = [];
      let studioLastSnapshot = null;
      let studioRestoring = false;

      const studioControlIds = [
        "text", "sub", "font", "size", "color", "rotate", "shadow", "stroke", "glow",
        "imgSize", "imgShape", "shapeToggle", "shapeW", "shapeH", "shapeType", "shapeFill",
        "shapeStroke", "shapeFillEnabled", "shapeLine", "shapeRot", "shapeOpacity"
      ];

      function studioSnapshot() {
        const controls = {};
        studioControlIds.forEach(id => {
          const el = $(id);
          if (!el) return;
          controls[id] = el.type === "checkbox" ? el.checked : el.value;
        });
        return {
          controls, currentBg, canvasW: c.width, canvasH: c.height,
          textX, textY, imgX, imgY, imgSize, shapeX, shapeY, shapeW, shapeH, showShape,
          userImg: !!userImg, userImgSrc, selectedElement, locked: { ...lockedElements }, extraLayers: structuredClone(studioExtraLayers), activeExtra: studioActiveExtra?.id || null, layerMode: studioLayerMode, layerOrder: studioLayerOrder.slice(), baseLayers: studioBaseLayers ? structuredClone(studioBaseLayers) : null
        };
      }

      function studioSame(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

      function studioPushSnapshot(snapshot) {
        if (!snapshot || studioRestoring) return;
        if (studioLastSnapshot && !studioSame(studioLastSnapshot, snapshot)) {
          studioHistory.push(studioLastSnapshot);
          if (studioHistory.length > 40) studioHistory.shift();
          studioFuture.length = 0;
        }
        studioLastSnapshot = snapshot;
        updateStudioHistoryButtons();
      }

      async function studioRestore(state) {
        if (!state) return;
        studioRestoring = true;
        Object.entries(state.controls || {}).forEach(([id, val]) => {
          const el = $(id); if (!el) return;
          if (el.type === "checkbox") el.checked = !!val; else el.value = val;
        });
        c.width = state.canvasW || 720; c.height = state.canvasH || 900;
        textX = state.textX; textY = state.textY; imgX = state.imgX; imgY = state.imgY;
        imgSize = state.imgSize; shapeX = state.shapeX; shapeY = state.shapeY;
        shapeW = state.shapeW; shapeH = state.shapeH; showShape = !!state.showShape;
        currentBg = state.currentBg || "dark"; selectedElement = state.selectedElement || "text";
        Object.assign(lockedElements, state.locked || { text: false, img: false, shape: false });
        studioExtraLayers.length = 0; (state.extraLayers || []).forEach(L => studioExtraLayers.push(L)); studioLayerMode = !!state.layerMode; studioLayerOrder = (state.layerOrder || []).slice(); studioBaseLayers = state.baseLayers ? structuredClone(state.baseLayers) : null; if (studioLayerMode && !studioLayerOrder.length) studioLayerOrder = ['base_img', 'base_shape', 'base_text', ...studioExtraLayers.map(L => L.id)]; studioActiveExtra = state.activeExtra ? studioExtraLayers.find(L => L.id === state.activeExtra) || null : null;
        if (state.userImg && state.userImgSrc) {
          userImgSrc = state.userImgSrc;
          const im = new Image();
          im.onload = () => { userImg = im; if ($("removeImg")) $("removeImg").style.display = "inline-block"; draw(); };
          im.src = state.userImgSrc;
        } else { userImg = null; userImgSrc = ""; if ($("removeImg")) $("removeImg").style.display = "none"; }
        document.querySelectorAll(".bg-btn").forEach(b => b.classList.toggle("active", b.dataset.bg === currentBg));
        studioRestoring = false;
        studioLastSnapshot = studioSnapshot();
        renderStudioLayers(); updateStudioSizeButtons(); updateStudioHistoryButtons();
        await safeDraw();
      }

      function updateStudioHistoryButtons() {
        const u = $("studioUndo"), r = $("studioRedo");
        if (u) u.disabled = studioHistory.length === 0;
        if (r) r.disabled = studioFuture.length === 0;
      }

      function renderStudioLayers() {
        const box = $('studioLayers'); if (!box) return;
        syncActiveExtra(); syncSelectedBase();
        const rows = [];
        if (studioLayerMode && studioBaseLayers) {
          studioLayerOrder.forEach(id => { const L = getStudioLayer(id); if (L) rows.push({ id, name: L.name || (L.type === 'text' ? 'متن' : 'شکل'), type: L.type, locked: !!L.locked, base: !id.startsWith('layer_') }); });
        } else {
          rows.push({ id: 'text', name: 'متن اصلی', type: 'text', locked: !!lockedElements.text, base: true }, { id: 'img', name: 'تصویر', type: 'img', locked: !!lockedElements.img, base: true }, { id: 'shape', name: 'شکل', type: 'shape', locked: !!lockedElements.shape, base: true });
          studioExtraLayers.forEach(L => rows.push({ id: L.id, name: L.name, type: L.type, locked: !!L.locked, base: false }));
        }
        const activeId = studioActiveExtra?.id || (studioLayerMode ? ({ text: 'base_text', shape: 'base_shape', img: 'base_img' }[selectedElement]) : selectedElement);
        box.innerHTML = rows.slice().reverse().map(R => `<div class="studio-layer ${activeId === R.id ? 'on' : ''}" data-layer="${R.id}"><span class="layer-type">${R.type === 'text' ? 'T' : R.type === 'img' ? '▧' : '◆'}</span><span class="layer-name">${R.name}</span><button class="layer-order" type="button" data-move="${R.id}" data-dir="up" title="بالاتر">↑</button><button class="layer-order" type="button" data-move="${R.id}" data-dir="down" title="پایین‌تر">↓</button><button class="layer-lock" type="button" data-lock="${R.id}" title="قفل/باز کردن">${R.locked ? '🔒' : '🔓'}</button>${R.base ? '' : '<button class="layer-delete" type="button" data-delete="' + R.id + '">✕</button>'}</div>`).join('');
        box.querySelectorAll('.studio-layer').forEach(el => el.onclick = e => {
          if (e.target.closest('button')) return; const id = el.dataset.layer;
          if (studioLayerMode) {
            const L = getStudioLayer(id); if (!L) return;
            if (id.startsWith('layer_')) loadExtraLayer(L);
            else {
              syncActiveExtra(); studioActiveExtra = null; selectedElement = L.type; lockedElements.text = lockedElements.img = lockedElements.shape = false; lockedElements[L.type] = !!L.locked;
              if (L.type === 'text') { $('text').value = L.text; $('font').value = L.font; $('size').value = L.size; $('color').value = L.color; $('rotate').value = L.rotate; $('shadow').checked = L.shadow; $('stroke').checked = L.stroke; $('glow').checked = L.glow; textX = L.x; textY = L.y; }
              if (L.type === 'shape') { $('shapeToggle').checked = !!L.visible; $('shapeType').value = L.shapeType; $('shapeFill').value = L.fill; $('shapeStroke').value = L.stroke; $('shapeFillEnabled').checked = L.fillEnabled; $('shapeLine').value = L.line; $('shapeRot').value = L.rot; $('shapeOpacity').value = L.opacity; $('shapeW').value = L.w; $('shapeH').value = L.h; shapeX = L.x; shapeY = L.y; }
              if (L.type === 'img') { imgX = L.x; imgY = L.y; $('imgSize').value = L.size; $('imgShape').value = L.shape; }
              renderStudioLayers(); draw();
            }
          } else if (id.startsWith('layer_')) { const L = studioExtraLayers.find(v => v.id === id); if (L) loadExtraLayer(L) }
          else { syncActiveExtra(); studioActiveExtra = null; selectedElement = id; lockedElements.text = lockedElements.img = lockedElements.shape = false; draw(); renderStudioLayers(); }
        });
        box.querySelectorAll('[data-move]').forEach(btn => btn.onclick = e => {
          e.stopPropagation(); const id = btn.dataset.move; const order = studioLayerMode ? studioLayerOrder : studioExtraLayers.map(L => L.id); const i = order.indexOf(id); if (i < 0) return; const j = btn.dataset.dir === 'up' ? Math.min(order.length - 1, i + 1) : Math.max(0, i - 1); if (i === j) return;
          const before = studioSnapshot();
          if (studioLayerMode) { const [moved] = studioLayerOrder.splice(i, 1); studioLayerOrder.splice(j, 0, moved); }
          else { const [moved] = studioExtraLayers.splice(i, 1); studioExtraLayers.splice(j, 0, moved); }
          studioPushSnapshot(before); studioLastSnapshot = studioSnapshot(); renderStudioLayers(); draw();
        });
        box.querySelectorAll('[data-lock]').forEach(btn => btn.onclick = e => {
          e.stopPropagation(); const id = btn.dataset.lock; const L = studioLayerMode ? getStudioLayer(id) : null;
          if (L) { L.locked = !L.locked; if (id === 'base_text') lockedElements.text = L.locked; if (id === 'base_shape') lockedElements.shape = L.locked; if (id === 'base_img') lockedElements.img = L.locked; }
          else if (id.startsWith('layer_')) { const E = studioExtraLayers.find(v => v.id === id); if (E) E.locked = !E.locked } else lockedElements[id] = !lockedElements[id];
          renderStudioLayers(); draw();
        });
        box.querySelectorAll('[data-delete]').forEach(btn => btn.onclick = e => {
          e.stopPropagation(); const id = btn.dataset.delete; const i = studioExtraLayers.findIndex(L => L.id === id); if (i >= 0) studioExtraLayers.splice(i, 1); studioLayerOrder = studioLayerOrder.filter(v => v !== id); if (studioActiveExtra?.id === id) { studioActiveExtra = null; selectedElement = 'text'; } renderStudioLayers(); draw();
        });
      }

      function updateStudioSizeButtons() {
        const map = { story: [1080, 1920], post: [1080, 1080], wallpaper: [1920, 1080], poster: [1080, 1350] };
        document.querySelectorAll("[data-studio-size]").forEach(b => b.classList.toggle("on", b.dataset.studioSize === studioCurrentSize));
      }
      let studioCurrentSize = "story";

      $("studioUndo")?.addEventListener("click", async () => {
        if (!studioHistory.length) return;
        const current = studioSnapshot(); studioFuture.push(current);
        await studioRestore(studioHistory.pop());
      });
      $("studioRedo")?.addEventListener("click", async () => {
        if (!studioFuture.length) return;
        const current = studioSnapshot(); studioHistory.push(current);
        await studioRestore(studioFuture.pop());
      });

      studioControlIds.forEach(id => {
        const el = $(id); if (!el) return;
        const remember = () => { if (!studioRestoring) studioPushSnapshot(studioSnapshot()); renderStudioLayers(); };
        el.addEventListener("input", remember); el.addEventListener("change", remember);
      });

      document.querySelectorAll("[data-studio-size]").forEach(btn => btn.onclick = () => {
        const sizes = { story: [1080, 1920], post: [1080, 1080], wallpaper: [1920, 1080], poster: [1080, 1350] };
        const size = sizes[btn.dataset.studioSize]; if (!size) return;
        const before = studioSnapshot();
        c.width = size[0]; c.height = size[1];
        textX = c.width / 2; textY = c.height / 2; imgX = c.width / 2; imgY = c.height / 2 - 60; shapeX = c.width / 2; shapeY = c.height / 2;
        studioCurrentSize = btn.dataset.studioSize; updateStudioSizeButtons(); draw();
        studioLastSnapshot = before; studioPushSnapshot(studioSnapshot());
      });

      /*
==================================================
STUDIO QUICK ACTIONS
==================================================
*/
      const studioGrid = $("#studioGrid");
      const studioGridBtn = $("#studioGridBtn");
      const studioCenter = $("#studioCenter");
      const studioSquare = $("#studioSquare");
      if (studioGridBtn) studioGridBtn.onclick = () => {
        studioGrid.classList.toggle("on");
        studioGridBtn.classList.toggle("on", studioGrid.classList.contains("on"));
      };
      if (studioCenter) studioCenter.onclick = () => {
        const before = studioSnapshot();
        textX = c.width / 2; textY = c.height / 2;
        imgX = c.width / 2; imgY = c.height / 2 - 40;
        shapeX = c.width / 2; shapeY = c.height / 2;
        draw();
        studioLastSnapshot = before; studioPushSnapshot(studioSnapshot());
      };
      if (studioSquare) {
        let studioSquareMode = false;
        studioSquare.onclick = () => {
          const before = studioSnapshot();
          studioSquareMode = !studioSquareMode;
          c.width = 720; c.height = studioSquareMode ? 720 : 900;
          textX = c.width / 2; textY = c.height / 2;
          imgX = c.width / 2; imgY = c.height / 2 - 40;
          shapeX = c.width / 2; shapeY = c.height / 2;
          studioSquare.textContent = studioSquareMode ? "↕ عمودی" : "□ مربع";
          draw();
          studioLastSnapshot = before; studioPushSnapshot(studioSnapshot());
        };
      }

      $("addTextLayer")?.addEventListener("click", () => addExtraLayer('text'));
      $("addShapeLayer")?.addEventListener("click", () => addExtraLayer('shape'));
      document.querySelectorAll('[data-ready-text]').forEach(b => b.onclick = () => { $('text').value = b.dataset.readyText; safeDraw(); });
      renderStudioLayers();
      studioLastSnapshot = studioSnapshot();
      updateStudioHistoryButtons();
      updateStudioSizeButtons();

      /*
==================================================
SAVE PNG
==================================================
*/
      $("save").onclick = async () => {
        isExporting = true;
        await safeDraw();
        draw();

        setTimeout(() => {
          const a = document.createElement("a");
          a.download = "kalak-yar-" + Date.now() + ".png";
          a.href = c.toDataURL("image/png", 1);
          a.click();
          isExporting = false;
          draw();
        }, 100);
      };

      /*
==================================================
INITIAL
==================================================
*/
      async function init() {
        if (document.fonts.ready) {
          try {
            await document.fonts.ready;
          } catch (error) {
            console.warn(error);
          }
        }
        await safeDraw();
      }


      let started = false; document.querySelector('[data-tab="studio"]').addEventListener("click", () => { if (!started) { started = true; init() } else { safeDraw() } });
    })();
  