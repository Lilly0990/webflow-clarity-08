# Telegram Bot для блогу webf.love (n8n)

> Публікація блог-постів через Telegram-бот замість IDE.
> Ідея натхнена статтею Максима Ширко про заміну адмінок Telegram-ботами.

## Проблема

Блог-пости захардкоджені в `src/lib/markdown.ts` як TypeScript масив. Додавання нового поста:

1. Відкрити IDE
2. Написати текст (~800-1500 слів)
3. Заповнити 25+ мета-полів (SEO, OG, FAQ, keywords, takeaways)
4. Закомітити
5. Задеплоїти

**Час: ~2-3 години на пост.**

## Рішення

```
Telegram → n8n → Claude API → GitHub → Deploy
```

**Час: ~5 хвилин на пост.**

Пишеш 1 речення в Telegram → AI генерує повний пост з усіма мета-полями → preview → ok → на сайті.

---

## Архітектура Flow

```
Telegram Trigger
    ↓
IF node (новий пост / редагування / статус)
    ↓
AI Agent (Claude Sonnet)
    ↓
Code node (валідація JSON, форматування)
    ↓
Telegram preview (повний пост у форматі повідомлення)
    ↓
Wait for response
    ↓
IF (ok → publish / правки → назад до AI)
    ↓
GitHub API (commit до repo)
    ↓
Telegram confirmation ("Пост опубліковано: [url]")
```

### Ноди детально

1. **Telegram Trigger** — отримує повідомлення від бота
2. **IF node** — визначає тип запиту:
   - `/new <тема>` — генерація нового поста
   - `/edit <slug> <що змінити>` — редагування існуючого
   - `/list` — список всіх постів
   - `/status` — статус останнього поста
3. **AI Agent (Claude)** — генерує/редагує пост (промпти нижче)
4. **Code node** — парсить JSON відповідь, валідує поля, форматує
5. **Telegram preview** — надсилає preview з title, description, перші 300 символів контенту
6. **Wait** — чекає відповідь користувача (ok / правки)
7. **IF** — якщо "ok" → publish, якщо текст → правки через AI
8. **GitHub API** — комітить зміни в `src/lib/markdown.ts`
9. **Telegram confirmation** — підтвердження з URL

---

## Сервіси та ключі

| Сервіс | Для чого | Вартість | Ключ |
|--------|----------|----------|------|
| Telegram Bot API | Інтерфейс бота | $0 | BotFather → token |
| Claude API (Sonnet) | Генерація контенту | ~$0.01-0.05/пост | Anthropic API key |
| GitHub API | Коміт в репо | $0 | Personal Access Token |
| n8n | Оркестрація | $0 (self-hosted) / $20/міс (cloud) | — |

### Створення Telegram бота

1. Відкрити @BotFather в Telegram
2. `/newbot` → назвати `webf_love_blog_bot`
3. Зберегти token
4. Встановити команди: `/setcommands`
   ```
   new - Створити новий пост
   edit - Редагувати пост
   list - Список постів
   status - Статус останнього поста
   ```

### GitHub Personal Access Token

1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Repository: `webf.love`
3. Permissions: Contents (Read and Write)

---

## Структура BlogPost

Поточна структура з `src/lib/markdown.ts`:

```typescript
interface BlogPostMeta {
  // Основне
  title: string;              // "Why Webflow Is Fast"
  slug: string;               // "webflow-is-fast"
  description: string;        // Короткий опис для картки
  author: string;             // "vlad-rulikovskiy"
  publishedAt: string;        // "2025-11-26"
  updatedAt: string;          // "2025-11-26"
  status: 'draft' | 'published';

  // SEO
  metaTitle: string;          // Title для <title> тега
  metaDescription: string;    // Meta description
  canonicalUrl: string;       // "/blog/webflow-is-fast"
  keywords: string[];         // ["webflow", "development"]

  // Open Graph
  ogImage: string;            // "/images/team/post-N.png"
  ogImageAlt: string;
  twitterCard: string;        // "summary_large_image"

  // Категоризація
  category: string;           // "Development"
  tags: string[];             // ["webflow", "performance"]
  language: 'en' | 'uk';

  // Зображення
  featuredImage: string;      // "/images/team/post-N.png"
  featuredImageAlt: string;

  // Мета
  readingTime: number;        // Авто-розрахунок
  schemaType: string;         // "BlogPosting"

  // Розширені компоненти (optional)
  keyTakeaways?: string[];    // 4-5 ключових висновків
  faq?: FAQItem[];            // 3-5 питань-відповідей
  pricingTable?: PricingPlan[]; // Таблиця цін (рідко)
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPost {
  meta: BlogPostMeta;
  content: string;            // Markdown контент
  htmlContent: string;        // Генерується автоматично
}
```

### Поточні категорії

```typescript
['All', 'Development', 'Design', 'Business']
```

### Автор

Завжди `"vlad-rulikovskiy"` (поки один автор).

---

## Промпти для AI

### System Prompt — Генерація нового поста

```
Ти — копірайтер для webf.love, агентства Webflow-розробки.

Тон:
- Прямий, впевнений, без води
- Як досвідчений фахівець, який знає свою справу
- Короткі речення. Чіткі аргументи.
- Без "у сучасному світі" та подібних кліше
- Виділення ключових фраз **жирним**
- Англійська мова (якщо не вказано інше)

Структура поста:
1. Hook — одне жирне речення-тезис
2. Проблема — чому це важливо
3. 3-5 секцій з H2 заголовками
4. Списки (буллети) для структурованої інформації
5. "The Bottom Line" — фінальний абзац-висновок

Формат відповіді — суворий JSON:
{
  "meta": {
    "title": "...",
    "slug": "...",
    "description": "...",
    "author": "vlad-rulikovskiy",
    "publishedAt": "YYYY-MM-DD",
    "updatedAt": "YYYY-MM-DD",
    "status": "draft",
    "metaTitle": "... | webf.love",
    "metaDescription": "...",
    "canonicalUrl": "/blog/SLUG",
    "keywords": ["keyword1", "keyword2", ...],
    "ogImage": "/images/team/post-N.png",
    "ogImageAlt": "...",
    "twitterCard": "summary_large_image",
    "category": "Development | Design | Business",
    "tags": ["tag1", "tag2", ...],
    "language": "en",
    "featuredImage": "/images/team/post-N.png",
    "featuredImageAlt": "...",
    "readingTime": N,
    "schemaType": "BlogPosting",
    "keyTakeaways": [
      "Takeaway 1",
      "Takeaway 2",
      "Takeaway 3",
      "Takeaway 4"
    ],
    "faq": [
      {"question": "...", "answer": "..."},
      {"question": "...", "answer": "..."},
      {"question": "...", "answer": "..."},
      {"question": "...", "answer": "..."}
    ]
  },
  "content": "Markdown контент поста..."
}

Правила:
- slug: lowercase, тільки a-z0-9 та дефіси
- description: 150-160 символів
- metaDescription: 150-160 символів
- keywords: 5-7 штук, релевантні до теми
- tags: 4-6 штук
- keyTakeaways: 4-5 рядків
- faq: 3-5 пар question/answer
- content: 800-1500 слів, Markdown формат
- readingTime: розрахувати з кількості слів (200 слів/хв)
- canonicalUrl: "/blog/" + slug
- ogImage та featuredImage: "/images/team/post-N.png" (де N = номер поста)
```

### User Prompt — Генерація

```
Створи блог-пост на тему: {user_message}

Кількість існуючих постів: {posts_count} (для номера зображення)
Дата: {today_date}
```

### System Prompt — Редагування поста

```
Ти редагуєш існуючий блог-пост для webf.love.

Отримуєш:
1. Поточний JSON поста
2. Запит на зміну від користувача

Повертаєш: оновлений повний JSON у тому самому форматі.

Правила:
- Змінюй тільки те, що просять
- Зберігай структуру та всі поля
- Оновлюй updatedAt на сьогоднішню дату
- Якщо змінюється контент — перерахуй readingTime
- Якщо змінюється title — оновлюй slug, metaTitle, canonicalUrl
```

### User Prompt — Редагування

```
Поточний пост:
{current_post_json}

Зміни: {user_edit_request}
```

---

## n8n Flow — Налаштування

### Крок 1: Telegram Trigger

- Type: Telegram Trigger
- Event: Message
- Bot Token: `{{ $env.TELEGRAM_BOT_TOKEN }}`

### Крок 2: Router (IF node)

```javascript
// Визначаємо тип команди
const text = $input.first().json.message.text;

if (text.startsWith('/new ')) {
  return { command: 'new', topic: text.replace('/new ', '') };
}
if (text.startsWith('/edit ')) {
  const parts = text.replace('/edit ', '').split(' ');
  const slug = parts[0];
  const editRequest = parts.slice(1).join(' ');
  return { command: 'edit', slug, editRequest };
}
if (text === '/list') {
  return { command: 'list' };
}
// Якщо це відповідь на preview (ok / правки)
if (text.toLowerCase() === 'ok') {
  return { command: 'approve' };
}
// Інакше — це правки до preview
return { command: 'revise', feedback: text };
```

### Крок 3: AI Agent (Claude)

- Model: claude-sonnet-4-5-20250929
- System prompt: (промпт генерації або редагування, залежно від команди)
- User message: топік або запит на редагування
- Temperature: 0.7

### Крок 4: Code Node (валідація)

```javascript
// Парсимо JSON відповідь від Claude
const response = $input.first().json;
let post;

try {
  post = JSON.parse(response.text);
} catch (e) {
  // Спробувати витягти JSON з markdown code block
  const match = response.text.match(/```json\n([\s\S]*?)\n```/);
  if (match) {
    post = JSON.parse(match[1]);
  } else {
    throw new Error('Invalid JSON response from AI');
  }
}

// Валідація обов'язкових полів
const required = ['title', 'slug', 'description', 'content'];
for (const field of required) {
  if (!post.meta?.[field] && field !== 'content') {
    throw new Error(`Missing required field: meta.${field}`);
  }
  if (field === 'content' && !post.content) {
    throw new Error('Missing content');
  }
}

// Нормалізація slug
post.meta.slug = post.meta.slug
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

// canonicalUrl
post.meta.canonicalUrl = `/blog/${post.meta.slug}`;

return { post };
```

### Крок 5: Telegram Preview

```javascript
const post = $input.first().json.post;
const meta = post.meta;

const preview = `
📝 *Новий пост*

*${meta.title}*

📂 ${meta.category} | ⏱ ${meta.readingTime} хв
🏷 ${meta.tags.join(', ')}

📋 *Description:*
${meta.description}

🔑 *Key Takeaways:*
${meta.keyTakeaways.map(t => `• ${t}`).join('\n')}

❓ *FAQ:*
${meta.faq.map(f => `Q: ${f.question}`).join('\n')}

📄 *Контент (перші 500 символів):*
${post.content.substring(0, 500)}...

---
Відповідь "ok" — публікувати
Або напиши правки
`.trim();

return { preview, chatId: $input.first().json.message.chat.id };
```

### Крок 6: Wait for Response

- Type: Wait
- Resume: On webhook call (Telegram response)
- Timeout: 30 хвилин

### Крок 7: GitHub Commit

```javascript
// Формуємо код для вставки в markdown.ts
const post = $input.first().json.post;

// Серіалізуємо пост у TypeScript формат
const postCode = JSON.stringify(post, null, 2)
  .replace(/"([^"]+)":/g, '$1:')  // Прибираємо лапки з ключів
  .replace(/"/g, "'");             // Одинарні лапки для значень

// GitHub API: отримати поточний файл, додати пост, закомітити
```

GitHub API calls:
1. `GET /repos/{owner}/{repo}/contents/src/lib/markdown.ts` — отримати поточний файл
2. Додати новий пост у масив `blogPosts`
3. `PUT /repos/{owner}/{repo}/contents/src/lib/markdown.ts` — закомітити зміни

---

## Критичні файли проекту

| Файл | Призначення |
|------|-------------|
| `src/lib/markdown.ts` | BlogPostMeta interface, blogPosts array, markdown→HTML конвертер |
| `src/pages/Blog.tsx` | Сторінка списку блог-постів |
| `src/pages/BlogArticle.tsx` | Сторінка окремої статті |
| `src/components/blog/AuthorCard.tsx` | Картка автора |
| `src/components/blog/BlogCard.tsx` | Картка поста в списку |
| `src/components/blog/FAQAccordion.tsx` | FAQ секція |
| `src/components/blog/KeyTakeaways.tsx` | Ключові висновки |
| `src/components/blog/TableOfContents.tsx` | Зміст статті |
| `src/components/blog/PricingTable.tsx` | Таблиця цін |
| `src/components/blog/BlogBreadcrumbs.tsx` | Хлібні крихти |

---

## Майбутні покращення

- [ ] Винести блог-пости з hardcode в окремі JSON-файли (`/content/blog/*.json`)
- [ ] Автогенерація OG-зображень (Canvas API або Cloudflare Workers)
- [ ] Переклад на українську (додати другий AI крок)
- [ ] Публікація в LinkedIn/Twitter через бота
- [ ] Планування публікацій (scheduled posts)
- [ ] Аналітика постів через Telegram (перегляди, час на сторінці)

---

## Quick Start

1. Створити Telegram бота через @BotFather
2. Отримати Claude API key на console.anthropic.com
3. Створити GitHub PAT з доступом до репо
4. Імпортувати flow в n8n (або створити вручну за схемою вище)
5. Додати credentials в n8n: Telegram, Anthropic, GitHub
6. Активувати flow
7. Надіслати `/new Чому Webflow краще за WordPress у 2026` в Telegram
8. Отримати preview → "ok" → пост на сайті
