# webf.love — сайт компанії

## Стан на 17.08.2026

✅ **САЙТ ПЕРЕНЕСЕНО З LOVABLE НА НАШ VERCEL, ПРАЦЮЄ НА https://webf.love**

- ✅ Відео Тісто розвернуто на 180° — вихідник `public/projects/tisto-hero.webm` був знятий догори ногами. Перекодовано ffmpeg (`hflip,vflip`), VP8 збережено, 960×720, аудіо в оригіналі не було.
- ✅ Картки проєктів тягнуться на всю висоту ряду (раніше картка з однорядковим описом виходила коротшою).
- ✅ `vercel.json` зі SPA-rewrite. Vercel спершу шукає реальний файл, тому 12 префендерених блог-сторінок лишаються статичними, а `/projects/tisto` не дає 404.
- ✅ Домен `webf.love` у Vercel-проєкті `webflow-clarity-08`, сертифікат видано (`vercel certs issue`), HTTP→HTTPS редірект 308 працює.
- ✅ Перевірено на проді: усі роути 200, блог статичний (3205b проти 2519b у SPA-фолбека), відео 3 062 902 б, картки по 539px.
- ✅ Комміти `5bae168` + `756a33a` запушені в **обидва** репо — `Lilly0990` і `hellowebflove-cpu`.

## Наступний крок

- [ ] **Додати DNS-запис для www** (Бро, у Cloudflare): `A` · Name `www` · Content `76.76.21.21` · Proxy **DNS only**. Домен `www.webf.love` у Vercel уже доданий і чекає запису. Раніше www не існував узагалі, тому це не регресія, а покращення.
- [ ] Через день-два, коли переконаємось у стабільності — вимкнути хостинг у Lovable і прибрати TXT `_lovable.webf.love` (поки це наша страховка на відкат).
- [ ] Окремий борг, не пов'язаний з переносом: у домені **немає MX**, пошта на `@webf.love` не приймається, і без SPF/DMARC листи від домену можна підробляти.
- [ ] `blogent.webf.love` (CNAME на Google Blogger) віддає HTTP 500 — зламаний ще до переносу, розібратись окремо.

## Флоу додавання проєкту (перевірено 17.08.2026)

**CMS немає — усе хардкод у TypeScript, деплой руками.** Git-інтеграції у Vercel-проєкті НЕ налаштовано: усі деплої робились через CLI, тому push у GitHub прод НЕ оновлює. Потрібен `vercel deploy --prod`.

**Два незалежних джерела даних, 15 із 18 записів дублюються в обох:**
- `src/data/projects.ts` — 18 детальних кейсів, інтерфейс `Project`. Живлять блок на головній ([Projects.tsx](src/components/Projects.tsx)) і сторінки `/projects/:id` ([ProjectPage.tsx](src/pages/ProjectPage.tsx))
- `src/data/portfolio.ts` — 70 плоских записів `PortfolioItem` (title/tagline/url/stack/year/category). Живить лише `/portfolio` ([Portfolio.tsx](src/pages/Portfolio.tsx)), фільтрується по `stack`, не по категорії

**Щоб додати новий проєкт, потрібно 4 ручних кроки** (sitemap і SEO тепер автоматичні):
1. Обʼєкт у `src/data/projects.ts`. Обовʼязкові поля: `id` (він же URL-слаг), `title`, `description`, `category`, `highlights`, `fullDescription`, `challenge`, `solution`, `results`, `technologies`, `gallery`, `year`, `duration`. Решта опційні. Бажано `introText` — саме з нього формується meta description, інакше візьметься `fullDescription`
2. Медіа руками в `public/projects/` (preview + hero-відео/картинка + галерея). `previewImage` йде і в OG-картинку
3. Якщо категорія нова — додати її в хардкод-масив `categories` (кінець `projects.ts`), інакше кнопки фільтра для неї не буде. У `portfolio.ts` категорії, навпаки, генеруються автоматично з даних
4. Запис у `src/data/portfolio.ts` — інакше проєкт не зʼявиться на `/portfolio`

Далі `npm run build` + `vercel deploy --prod` — sitemap, prerender і meta-теги підхопляться самі.

**Полагоджено 17.08.2026 (комміт `d5ab419`):**
- ✅ `ProjectPage.tsx` тепер рендерить `SEOHead`. Раніше всі 18 кейсів успадковували site-wide title/description/OG з `index.html` — тобто комерційні сторінки були єдиними без власних мета-тегів
- ✅ Кожен кейс **prerender-иться** у `dist/projects/<id>/index.html` за тим самим механізмом, що й блог. Це принципово: соцмережі не виконують JS, тому одного Helmet для OG-шарингу не досить
- ✅ Значення SEO живуть у `src/data/projectSeo.ts` і використовуються **і** prerender-ом у `vite.config.ts`, **і** клієнтським рендером — щоб не розʼїхались
- ✅ Записи проєктів у sitemap генеруються з `projects.ts` (було 5 із 18 руками). Додано `/portfolio`, якого не було взагалі. Разом 41 URL

**Додано 17.08.2026: кейс «Rodonit Agro»** (комміт `18211c1`) — 19-й у `projects.ts`, 71-й у `portfolio.ts`. Пройдено весь флоу: медіа зняті браузером із живого сайту, факти — заміром із сайту плюс `Desktop\rodonit-agro-redesign\CLAUDE.md`, sitemap і мета-теги підхопились автоматично.
- 🔴 **Категорія пишеться ПО-РІЗНОМУ у двох файлах:** у `projects.ts` це `"E-commerce"` (з дефісом, як у масиві `categories`), у `portfolio.ts` — `"eCommerce"` (без дефіса, як у решти 70 записів). Вжити однакове написання нельзя: у першому файлі зламається кнопка фільтра, у другому з'явиться дубль-категорія
- Превʼю знімати при **viewport 1200×750 @2×**: тоді кадр закінчується рівно на hero. При 1440×900 у кадр залазить обрізаний початок наступної секції й картка виглядає неохайно
- Текстові поля тримати в обсязі решти: `introText` ~150-200, `fullDescription` ~230, `challenge` ~470, `solution` ~540, `backgroundText` ~460 символів
- ⚠️ **`challenge` в усіх 18 кейсах описує потребу клієнта, а не стан, у якому нам дісталась робота** — про поломки попередніх виконавців не пишуть ніде. Рішення Бро: тримати цей тон
- Мертві поля, які нікуди не рендеряться: `duration`, `logo`, `fullDescription` (останнє все ж потрібне — з нього бере опис `projectSeo.ts`, якщо немає `introText`)

**Зміни 17.08.2026, вечір** (комміти `ae9385b`, `6863e24`):
- Прибрано з головної три кейси — **GS Studio, Betbazar, Hey Canopy**. У `portfolio.ts` вони лишились, тобто на `/portfolio` присутні. Їхні `/projects/*` URL віддавали 200 із заглушкою «Project Not Found» (soft-404, бо SPA-rewrite ловить усе), тому додано **301 на `/portfolio`** у `vercel.json`. Redirects на Vercel застосовуються ДО rewrites, тому SPA-фолбек не зачеплено
- Уніфіковано `stack` у `portfolio.ts`: шість записів `"Figma + Claude Code"` / `"Claude Code + Figma"` → `"Claude Code"`. Стало 54 Webflow / 14 Claude Code / 3 WordPress. З `isAIAssisted` у [Portfolio.tsx](src/pages/Portfolio.tsx) прибрано перевірку на figma
- Відео Rodonit перезняте повільнішим: крок скролу 11px замість 30px, 240 кадрів, 8 секунд, 329 px/с замість 900. Вага 1.32 МБ
- ⚠️ **`Intexbeta` не з'являється у фільтрі E-commerce на головній, бо його немає в `projects.ts`** — він існує лише як рядок у `portfolio.ts`. Фільтр на головній працює з кейсами, а на `/portfolio` фільтрація взагалі по `stack`, не по категорії. Щоб він там був, потрібен повноцінний кейс

**Лишилися борги:**
- Три проєкти показують стокові Unsplash-картинки замість власних скріншотів — вони ж ідуть в OG
- Невідомий `id` дає не HTTP 404, а UI-заглушку «Project Not Found» — для Google це soft-404
- Дублювання: 15 із 18 кейсів вписані руками і в `projects.ts`, і в `portfolio.ts`. Можна було б генерувати portfolio-записи з projects, лишивши в `portfolio.ts` тільки ті 55, що не мають кейсу
- `npm run preview` віддає prerendered сторінки лише з trailing slash (`/projects/tisto/`); на Vercel коректно працює і без нього — не сприймати як поломку

## Технічні деталі

- Стек: Vite + React + TypeScript + Tailwind + shadcn/ui, походження — Lovable (проєкт `f2cd5ba9-da2c-4299-abb2-094822fe47e8`)
- Дев: `npm run dev` → порт **8080** (не 5173). Прод-білд локально: `npm run preview` → 4173
- **Vercel:** акаунт `hello.webf.love@gmail.com`, скоуп `hellowebflove-1429s-projects`, проєкт `webflow-clarity-08`. Логін CLI — device-flow, підтвердження коду в браузері
- **Два репо:** `hellowebflove-cpu/webflow-clarity-08` (канонічний, звʼязаний з Lovable — push віддзеркалюється туди) і `Lilly0990/webflow-clarity-08` (дзеркало, воно ж `origin`; тут ще remote `canonical`). Для пушу в origin: `gh auth switch --user Lilly0990`, потім повернути `hellowebflove-cpu`
- **DNS Cloudflare:** A `webf.love` → `76.76.21.21`, DNS only. НЕ ЧІПАТИ два TXT `google-site-verification` — це верифікація Search Console
- Дані проєктів: [src/data/projects.ts](src/data/projects.ts) — картка Тісто ~рядок 599, поле `heroVideo`
- Картка: [src/components/ProjectCard.tsx](src/components/ProjectCard.tsx) · сітка: [src/components/Projects.tsx](src/components/Projects.tsx)
- Те саме відео і в картці на головній, і в hero на `/projects/tisto` — фікс файлу лікує обидва місця
- ffmpeg встановлено через winget (`Gyan.FFmpeg`), бінарі в `~/AppData/Local/Microsoft/WinGet/Links/`
- Бекап токена Vercel `devicemarkt` (на випадок повернення до тих проєктів) — у скретчпаді сесії `c0c49594`
