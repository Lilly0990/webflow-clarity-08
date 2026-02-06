import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import SlideLightbox from "@/components/SlideLightbox";
import TerminalMock from "@/components/TerminalMock";
import { ChevronDown, ExternalLink, ClipboardList } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const Workshop = () => {
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [isWindowsSetupOpen, setIsWindowsSetupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      <article className="container-custom pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <header className="mb-20 animate-fade-in">
            {/* Header info - mobile on top */}
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 mb-16">
              <div className="flex items-center gap-4">
                <img
                  src="/images/logo-webflove.png"
                  alt="webf.love"
                  className="h-8 md:h-10 w-auto"
                />
                <span className="text-xl text-muted-foreground font-light">×</span>
                <img
                  src="/images/glow.svg"
                  alt="Glow Team"
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              <div className="text-left md:text-right text-sm text-muted-foreground">
                <p className="font-medium text-foreground">WORKSHOP</p>
                <p>Glow Team · 2026</p>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
              <span className="gradient-text">Claude Code</span><br />
              Workshop
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
              Як я будую веб-продукти за допомогою Claude Code.
              Без магії, без bullshit.
            </p>

            <p className="text-lg text-muted-foreground/80 max-w-2xl">
              Зробимо сервіс оренди авто — лендінг з вибором дат, списком машин та простим букінгом.
            </p>
          </header>

          {/* Для кого */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Для кого</p>

              {/* Avatars */}
              <div className="flex items-center mb-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-card overflow-hidden">
                    <img src="/images/1111.png" alt="" className="w-full h-full object-cover scale-[1.4]" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-card overflow-hidden">
                    <img src="/images/1111.png" alt="" className="w-full h-full object-cover scale-[1.4]" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-card overflow-hidden">
                    <img src="/images/1111.png" alt="" className="w-full h-full object-cover scale-[1.4]" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-card overflow-hidden">
                    <img src="/images/1111.png" alt="" className="w-full h-full object-cover scale-[1.4]" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-card overflow-hidden">
                    <img src="/images/1111.png" alt="" className="w-full h-full object-cover scale-[1.4]" />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">Дизайнери та маркетологи</h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Які вже спробували AI-інструменти — витратили всі токени,
                  отримали купу галюцинацій і забили.
                </p>
                <p>
                  <span className="text-foreground">Мета</span> — показати, як AI дійсно
                  може допомагати у реальній роботі.
                </p>
              </div>
            </div>
          </section>

          {/* Про мене */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Photo + LinkedIn */}
                <div className="flex flex-col items-center md:items-start shrink-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-3">
                    <img
                      src="/images/my-photo.png"
                      alt="Vlad Rulikovskiy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rulikovskyi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Vlad Rulikovskiy</h3>
                  <p className="text-primary text-sm mb-4">Фаундер webf.love — Webflow Development Studio</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    7 років у розробці, до цього 1.5 роки в дизайні. Керував командою з 15 людей.
                    Студія спеціалізується на Webflow-розробці і з недавнього часу на AI Assistant Development.
                  </p>
                  <div>
                    <p className="text-xs text-muted-foreground/50 mb-3 uppercase tracking-wider">Проєкти наших клієнтів</p>
                    <p className="text-sm text-muted-foreground">
                      Fedoriv, EnglishDom, Sister's Aroma, Venbest, Done та 30+ інших українських компаній
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Слайдер презентації — hidden until ready */}
          {/* <section className="mb-20 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Презентація</p>
              <SlideLightbox slides={[
                "/images/slides/creation_2316578013.png",
                "/images/slides/creation_2316749199.png",
                "/images/slides/creation_2316818913.png",
                "/images/slides/creation_2316841289.png",
                "/images/slides/creation_2316860926.png",
                "/images/slides/creation_2316992302.png",
              ]} />
            </div>
          </section> */}

          {/* Програма */}
          <section className="mb-20 animate-fade-in">
            <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">Програма</p>

            <div className="space-y-4">
              {/* Topic 1 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">01</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Що вміє Claude Code</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Один інструмент — замість десяти. Ось для чого я використовую його щодня.
                </p>

                <div className="text-muted-foreground leading-relaxed space-y-3 mb-6">
                  <p>
                    Claude Code — це AI від Anthropic, заточений під розробку. Не чат-бот, не універсальний помічник — а інструмент, який працює з кодом напряму.
                  </p>
                  <p>
                    Більшість популярних AI-сервісів для створення сайтів і додатків (<img src="/images/stack/lovable.png" alt="Lovable" className="w-4 h-4 inline-block align-middle mr-0.5" />Lovable, Cursor, Windsurf та інші) працюють на базі моделей Claude від Anthropic. Claude Code — це прямий доступ до тієї самої моделі, без посередників і обмежень інтерфейсу.
                  </p>
                </div>

                {/* Три режими роботи */}
                <div className="bg-muted/20 border border-border/50 rounded-xl p-5 mb-4">
                  <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">Три режими роботи</p>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li><span className="text-foreground">Terminal (Claude Code)</span> — повний доступ до файлів на комп'ютері, може заходити на сайти, робити перевірки, підключатися до Google. Максимальний контроль.</li>
                    <li><span className="text-foreground">Web (claude.ai)</span> — для роботи з контентом: тексти, редагування, брейншторм</li>
                    <li><span className="text-foreground">Desktop (Claude Desktop)</span> — для підключення через MCP: Figma, n8n, інші інтеграції</li>
                  </ul>
                </div>

                <Accordion type="multiple" className="space-y-4">
                  <AccordionItem value="research" className="bg-muted/20 border border-border/50 rounded-xl overflow-hidden border-b-0">
                    <AccordionTrigger className="px-5 py-4 text-sm text-muted-foreground uppercase tracking-wider hover:no-underline">
                      Досліджую
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      <ul className="space-y-2 text-muted-foreground leading-relaxed px-5">
                        <li><span className="text-foreground">Research</span> — шукаю технології, порівнюю рішення, аналізую документацію</li>
                        <li><span className="text-foreground">Аналіз конкурентів</span> — розбираю сайти, фічі, підходи</li>
                        <li><span className="text-foreground">Генерація ідей</span> — брейнштормлю концепції, структуру, UX</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="build" className="bg-muted/20 border border-border/50 rounded-xl overflow-hidden border-b-0">
                    <AccordionTrigger className="px-5 py-4 text-sm text-muted-foreground uppercase tracking-wider hover:no-underline">
                      Будую
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      <ul className="space-y-2 text-muted-foreground leading-relaxed px-5">
                        <li><span className="text-foreground">Верстка сайтів</span> — пишу фронтенд на React, Tailwind, TypeScript</li>
                        <li><span className="text-foreground">Бази даних</span> — Supabase: таблиці, RLS, міграції, Edge Functions</li>
                        <li><span className="text-foreground">Git і деплой</span> — коміти, PR, деплой на продакшн</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="design" className="bg-muted/20 border border-border/50 rounded-xl overflow-hidden border-b-0">
                    <AccordionTrigger className="px-5 py-4 text-sm text-muted-foreground uppercase tracking-wider hover:no-underline">
                      Дизайню
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      <ul className="space-y-2 text-muted-foreground leading-relaxed px-5">
                        <li><span className="text-foreground">Figma MCP</span> — бачить макет, стилі, кольори, шрифти і відступи</li>
                        <li><span className="text-foreground">Контент</span> — тексти, мета-теги, SEO, Open Graph</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="automate" className="bg-muted/20 border border-border/50 rounded-xl overflow-hidden border-b-0">
                    <AccordionTrigger className="px-5 py-4 text-sm text-muted-foreground uppercase tracking-wider hover:no-underline">
                      Автоматизую
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      <ul className="space-y-2 text-muted-foreground leading-relaxed px-5">
                        <li><span className="text-foreground">n8n</span> — створюю workflows промптами замість ручних налаштувань</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="support" className="bg-muted/20 border border-border/50 rounded-xl overflow-hidden border-b-0">
                    <AccordionTrigger className="px-5 py-4 text-sm text-muted-foreground uppercase tracking-wider hover:no-underline">
                      Підтримую
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      <ul className="space-y-2 text-muted-foreground leading-relaxed px-5">
                        <li><span className="text-foreground">Дебаг</span> — знайти і пофіксити баг за хвилини замість годин</li>
                        <li><span className="text-foreground">Code review</span> — перевірка коду, рефакторинг, оптимізація</li>
                        <li><span className="text-foreground">Документація</span> — PRD, CLAUDE.md, технічні специфікації</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Topic 2 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">02</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Налаштування середовища</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Термінал, GitHub, базова конфігурація. Нудно, але без цього нікуди.
                  Один раз налаштував — далі просто працюєш.
                </p>

                {/* Collapsible Setup Guide */}
                <div className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setIsSetupOpen(!isSetupOpen)}
                    className="w-full flex items-center justify-between p-4 md:p-5 bg-muted/30 hover:bg-muted/50 transition-colors text-left"
                  >
                    <span className="font-medium">Гайд для Mac</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                        isSetupOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isSetupOpen && (
                    <div className="p-4 md:p-6 space-y-8 border-t border-border">
                      {/* Step 0 - Open Terminal */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">0. Відкрий Terminal</h4>
                        <p className="text-muted-foreground mb-3">
                          Відкрий пошук на Mac (іконка лупи у верхньому правому куті або Spotlight),
                          введи "Terminal" і відкрий програму. В терміналі ми будемо виконувати всі команди далі.
                        </p>
                        <TerminalMock
                          title="Terminal — zsh"
                          minHeight="200px"
                          lines={[
                            { text: "Last login: Mon Feb  3 10:30:00 on ttys000" },
                            { text: "yourname@MacBook ~ %" },
                          ]}
                        />
                        <div className="mt-4 bg-primary/5 border-l-2 border-primary/40 rounded-r-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            Приблизно так виглядає термінал коли ти його відкриваєш. Тепер можеш копіювати команди нижче і вставляти їх сюди.
                          </p>
                        </div>
                      </div>

                      {/* Step 1 - Homebrew */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">1. Встановлення Homebrew</h4>
                        <p className="text-muted-foreground mb-3">
                          <span className="text-foreground">Homebrew</span> — це як App Store для програмістів на Mac.
                          Замість шукати програми по інтернету і качати .dmg файли, ти просто пишеш одну команду — і все встановлюється.
                        </p>
                        <CodeBlock
                          code={`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}
                        />
                        <div className="mt-3 mb-3 bg-primary/5 border-l-2 border-primary/40 rounded-r-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            Копіюєш, вставляєш в термінал, натискаєш Enter.
                          </p>
                        </div>
                        <p className="text-sm bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg p-3 mb-3">
                          ⏱️ Час очікування: <span className="text-red-300">3-6 хвилин</span>. Не закривай термінал, просто чекай.
                        </p>
                        <p className="text-sm text-muted-foreground/80 mb-3">
                          Коли завершиться, побачиш:
                        </p>
                        <TerminalMock
                          title="Terminal — Homebrew Installation"
                          lines={[
                            { text: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"', type: "command" },
                            { text: "" },
                            { text: "==> Checking for `sudo` access (which may request your password)...", type: "info" },
                            { text: "Password: ********" },
                            { text: "" },
                            { text: "==> This script will install:", type: "info" },
                            { text: "/opt/homebrew/bin/brew" },
                            { text: "/opt/homebrew/share/doc/homebrew" },
                            { text: "/opt/homebrew/share/man/man1/brew.1" },
                            { text: "/opt/homebrew/share/zsh/site-functions/_brew" },
                            { text: "/opt/homebrew/etc/bash_completion.d/brew" },
                            { text: "" },
                            { text: "==> The Xcode Command Line Tools will be installed.", type: "info" },
                            { text: "" },
                            { text: "Press RETURN/ENTER to continue or any other key to abort:" },
                            { text: "" },
                            { text: "==> Downloading Command Line Tools for Xcode...", type: "info" },
                            { text: "==> Installing Command Line Tools for Xcode...", type: "info" },
                            { text: "==> /usr/bin/sudo /usr/sbin/softwareupdate -i Command Line Tools...", type: "info" },
                            { text: "" },
                            { text: "==> Downloading and installing Homebrew...", type: "info" },
                            { text: "==> Installation successful!", type: "success" },
                            { text: "" },
                            { text: "==> Next steps:", type: "warning" },
                            { text: "- Run these commands in your terminal to add Homebrew to your PATH:", type: "warning" },
                            { text: "" },
                            { text: '    echo >> ~/.zprofile' },
                            { text: '    echo \'eval "$(/opt/homebrew/bin/brew shellenv)"\' >> ~/.zprofile' },
                            { text: '    eval "$(/opt/homebrew/bin/brew shellenv)"' },
                          ]}
                        />
                      </div>

                      {/* Step 1.5 - Add Homebrew to PATH */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">1.1 Додавання Homebrew в систему</h4>
                        <p className="text-muted-foreground mb-3">
                          Після встановлення Homebrew покаже команди які треба виконати. Залежно від версії Mac ця команда може трохи відрізнятися — копіюй саме те, що показує твій термінал. На більшості MacBook це буде виглядати так:
                        </p>
                        <CodeBlock
                          code={`echo >> ~/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"`}
                        />
                        <div className="mt-3 mb-3 bg-primary/5 border-l-2 border-primary/40 rounded-r-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            Копіюєш все разом, вставляєш, натискаєш Enter. Термінал нічого не відповість — це нормально.
                          </p>
                        </div>
                        <TerminalMock
                          title="Terminal"
                          lines={[
                            { text: 'echo >> ~/.zprofile', type: "command" },
                            { text: 'echo \'eval "$(/opt/homebrew/bin/brew shellenv)"\' >> ~/.zprofile', type: "command" },
                            { text: 'eval "$(/opt/homebrew/bin/brew shellenv)"', type: "command" },
                            { text: "yourname@MacBook ~ %" },
                          ]}
                        />
                        <p className="text-sm text-muted-foreground/80 bg-muted/50 rounded-lg p-3 mt-3">
                          ⚠️ Тепер закрий термінал і відкрий заново.
                        </p>
                      </div>

                      {/* Step 2 - Check Homebrew */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">1.2 Перевірка Homebrew</h4>
                        <p className="text-muted-foreground mb-3">
                          Перевіряємо, чи Homebrew працює. Якщо бачиш версію — все ок.
                        </p>
                        <CodeBlock
                          code="brew --version"
                        />
                        <TerminalMock
                          title="Terminal"
                          lines={[
                            { text: "brew --version", type: "command" },
                            { text: "Homebrew 4.4.15", type: "success" },
                          ]}
                        />
                      </div>

                      {/* Step 3 - Node.js */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">2. Встановлення Node.js</h4>
                        <p className="text-muted-foreground mb-3">
                          Node.js потрібен для запуску веб-проєктів.
                        </p>
                        <CodeBlock
                          code="brew install node"
                        />
                        <p className="text-sm text-muted-foreground/80 bg-muted/50 rounded-lg p-3 mt-3">
                          ⚠️ Перезапусти Terminal після встановлення Node.js
                        </p>
                      </div>

                      {/* Step 4 - Check Node.js */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">2.1 Перевірка Node.js</h4>
                        <p className="text-muted-foreground mb-3">
                          Перевіряємо, чи Node.js встановився. <span className="text-foreground">npm</span> — це менеджер пакетів,
                          який йде разом з Node.js. Через нього встановлюються бібліотеки для проєктів.
                        </p>
                        <CodeBlock
                          code={`node --version
npm --version`}
                        />
                        <TerminalMock
                          title="Terminal"
                          lines={[
                            { text: "node --version", type: "command" },
                            { text: "v22.12.0", type: "success" },
                            { text: "npm --version", type: "command" },
                            { text: "10.9.0", type: "success" },
                          ]}
                        />
                      </div>

                      {/* Step 5 - Claude Code */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">3. Встановлення Claude Code</h4>
                        <p className="text-muted-foreground mb-3">
                          Claude Code — AI-помічник в терміналі, за допомогою якого будемо робити магію.
                          Він бачить твій код, може його редагувати, запускати команди, працювати з Git,
                          переходити на сайти і працювати з документами на твоєму комп'ютері, до яких ти даси доступ.
                        </p>
                        <CodeBlock
                          code="curl -fsSL https://claude.ai/install.sh | bash"
                        />
                        <CodeBlock
                          code={`echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc`}
                        />
                        <CodeBlock
                          code="claude --version"
                        />
                        <div className="mt-3 mb-3 bg-primary/5 border-l-2 border-primary/40 rounded-r-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            По черзі вставляєш ці три команди в термінал. На фіналі маєш побачити:
                          </p>
                        </div>
                        <TerminalMock
                          title="Terminal"
                          lines={[
                            { text: "claude --version", type: "command" },
                            { text: "1.0.17 (Claude Code)", type: "success" },
                          ]}
                        />
                      </div>

                      {/* Step 6 - Launch Claude Code */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">3.1 Запуск Claude Code</h4>
                        <p className="text-muted-foreground mb-3">
                          Відкриваєш термінал, пишеш claude і натискаєш Enter.
                        </p>
                        <CodeBlock
                          code="claude"
                        />
                        <TerminalMock
                          title="Terminal"
                          minHeight="380px"
                          lines={[
                            { text: "claude", type: "command" },
                            { text: "" },
                            { text: "  ╭───────────────────────────────────────────────╮" },
                            { text: "  │  ✻ Welcome to the Claude Code research preview! │" },
                            { text: "  ╰───────────────────────────────────────────────╯" },
                            { text: "" },
                            { text: "   ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗", type: "orange" },
                            { text: "  ██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝", type: "orange" },
                            { text: "  ██║     ██║     ███████║██║   ██║██║  ██║█████╗  ", type: "orange" },
                            { text: "  ██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝  ", type: "orange" },
                            { text: "  ╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗", type: "orange" },
                            { text: "   ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝", type: "orange" },
                            { text: "   ██████╗ ██████╗ ██████╗ ███████╗", type: "orange" },
                            { text: "  ██╔════╝██╔═══██╗██╔══██╗██╔════╝", type: "orange" },
                            { text: "  ██║     ██║   ██║██║  ██║█████╗  ", type: "orange" },
                            { text: "  ██║     ██║   ██║██║  ██║██╔══╝  ", type: "orange" },
                            { text: "  ╚██████╗╚██████╔╝██████╔╝███████╗", type: "orange" },
                            { text: "   ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝", type: "orange" },
                            { text: "" },
                            { text: "  🎉 Login successful. Press Enter to continue", type: "success" },
                          ]}
                        />
                        <div className="mt-4 bg-primary/5 border-l-2 border-primary/40 rounded-r-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            Якщо бачиш щось схоже — вітаю, тепер ти майже хакер. Ти встановив Claude Code на свій комп'ютер. Далі треба під'єднати акаунт.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Windows Guide */}
                <div className="border border-border rounded-xl overflow-hidden mt-4">
                  <button
                    onClick={() => setIsWindowsSetupOpen(!isWindowsSetupOpen)}
                    className="w-full flex items-center justify-between p-4 md:p-5 bg-muted/30 hover:bg-muted/50 transition-colors text-left"
                  >
                    <span className="font-medium">Гайд для Windows</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                        isWindowsSetupOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isWindowsSetupOpen && (
                    <div className="p-4 md:p-6 space-y-8 border-t border-border">
                      {/* Step 0 - Open PowerShell */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">0. Відкрий PowerShell</h4>
                        <p className="text-muted-foreground mb-3">
                          Натисни клавішу Windows, введи "PowerShell", клікни правою кнопкою і вибери "Запустити від імені адміністратора".
                        </p>
                        <TerminalMock
                          title="Windows PowerShell"
                          minHeight="120px"
                          lines={[
                            { text: "Windows PowerShell" },
                            { text: "Copyright (C) Microsoft Corporation. All rights reserved." },
                            { text: "" },
                            { text: "PS C:\\Users\\YourName>" },
                          ]}
                        />
                      </div>

                      {/* Step 1 - Install Node.js */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">1. Встановлення Node.js</h4>
                        <p className="text-muted-foreground mb-3">
                          Перейди на <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nodejs.org</a>, завантаж LTS версію і встанови. Або через winget:
                        </p>
                        <CodeBlock
                          code="winget install OpenJS.NodeJS.LTS"
                        />
                        <p className="text-sm text-muted-foreground/80 bg-muted/50 rounded-lg p-3 mt-3">
                          ⚠️ Після встановлення закрий і відкрий PowerShell заново.
                        </p>
                      </div>

                      {/* Step 1.1 - Check Node.js */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">1.1 Перевірка Node.js</h4>
                        <p className="text-muted-foreground mb-3">
                          Перевіряємо чи встановився:
                        </p>
                        <CodeBlock
                          code={`node --version
npm --version`}
                        />
                        <TerminalMock
                          title="Windows PowerShell"
                          lines={[
                            { text: "node --version", type: "command" },
                            { text: "v22.12.0", type: "success" },
                            { text: "npm --version", type: "command" },
                            { text: "10.9.0", type: "success" },
                          ]}
                        />
                      </div>

                      {/* Step 2 - Install Claude Code */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">2. Встановлення Claude Code</h4>
                        <p className="text-muted-foreground mb-3">
                          Claude Code — AI-помічник в терміналі, за допомогою якого будемо робити магію.
                        </p>
                        <CodeBlock
                          code="npm install -g @anthropic-ai/claude-code"
                        />
                        <div className="mt-3 mb-3 bg-primary/5 border-l-2 border-primary/40 rounded-r-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            Чекаєш поки встановиться. Може зайняти 1-2 хвилини.
                          </p>
                        </div>
                      </div>

                      {/* Step 2.1 - Launch Claude Code */}
                      <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                        <h4 className="text-lg font-medium mb-2">2.1 Запуск Claude Code</h4>
                        <p className="text-muted-foreground mb-3">
                          Пишеш claude і натискаєш Enter.
                        </p>
                        <CodeBlock
                          code="claude"
                        />
                        <TerminalMock
                          title="Windows PowerShell"
                          minHeight="380px"
                          lines={[
                            { text: "claude", type: "command" },
                            { text: "" },
                            { text: "  ╭───────────────────────────────────────────────╮" },
                            { text: "  │  ✻ Welcome to the Claude Code research preview! │" },
                            { text: "  ╰───────────────────────────────────────────────╯" },
                            { text: "" },
                            { text: "   ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗", type: "orange" },
                            { text: "  ██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝", type: "orange" },
                            { text: "  ██║     ██║     ███████║██║   ██║██║  ██║█████╗  ", type: "orange" },
                            { text: "  ██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝  ", type: "orange" },
                            { text: "  ╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗", type: "orange" },
                            { text: "   ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝", type: "orange" },
                            { text: "   ██████╗ ██████╗ ██████╗ ███████╗", type: "orange" },
                            { text: "  ██╔════╝██╔═══██╗██╔══██╗██╔════╝", type: "orange" },
                            { text: "  ██║     ██║   ██║██║  ██║█████╗  ", type: "orange" },
                            { text: "  ██║     ██║   ██║██║  ██║██╔══╝  ", type: "orange" },
                            { text: "  ╚██████╗╚██████╔╝██████╔╝███████╗", type: "orange" },
                            { text: "   ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝", type: "orange" },
                            { text: "" },
                            { text: "  🎉 Login successful. Press Enter to continue", type: "success" },
                          ]}
                        />
                        <div className="mt-4 bg-primary/5 border-l-2 border-primary/40 rounded-r-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            Якщо бачиш щось схоже — вітаю, тепер ти майже хакер. Ти встановив Claude Code на свій комп'ютер. Далі треба під'єднати акаунт.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Topic 3 — Мій стек */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">03</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Мій стек</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Сервіси, які я використовую щодня разом з Claude Code. Кожен робить свою роботу — разом вони закривають весь цикл.
                </p>

                <div className="space-y-2">
                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                    <img src="/images/stack/claude.png" alt="Claude" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">Claude Code</p>
                      <p className="text-sm text-muted-foreground">Мозок всього: пишу код, досліджую, дебажу. Три режими — Terminal, Web, Desktop</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>

                  <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                    <img src="/images/stack/lovable.png" alt="Lovable" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">Lovable</p>
                      <p className="text-sm text-muted-foreground">Швидкий паблішинг. Створив проєкт — він вже на живому домені (категорично не використовую для розробки)</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>

                  <a href="https://desktop.github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                    <img src="/images/stack/github.png" alt="GitHub" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">GitHub + GitHub Desktop</p>
                      <p className="text-sm text-muted-foreground">Зв'язує все разом. Всі зміни зберігаються локально і синхронізуються</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>

                  <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                    <img src="/images/stack/supabase.png" alt="Supabase" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">Supabase</p>
                      <p className="text-sm text-muted-foreground">База даних, CMS, аутентифікація, особисті кабінети</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>

                  <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                    <img src="/images/stack/vscode.png" alt="VS Code" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">VS Code (Terminal)</p>
                      <p className="text-sm text-muted-foreground">Редактор коду, в якому живе Claude Code через термінал</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>

                  <a href="https://withaqua.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                    <img src="/images/stack/aqua.png" alt="Aqua Voice" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">Aqua Voice</p>
                      <p className="text-sm text-muted-foreground">Транскрибація голосу — промпчу голосом, а не клавіатурою</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>

                  <a href="https://teampaper.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                    <img src="/images/stack/teampaper.png" alt="Team Paper" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">Team Paper</p>
                      <p className="text-sm text-muted-foreground">Скріншотер — швидко даю скріншоти і текст AI</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>
                </div>

                {/* Інтеграції (MCP) */}
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">Інтеграції (MCP)</p>
                  <div className="space-y-2">
                    <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                      <img src="/images/stack/figma.png" alt="Figma" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">Figma</p>
                        <p className="text-sm text-muted-foreground">Дизайн макетів — Claude Code бачить стилі, кольори, відступи через MCP</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>

                    <a href="https://n8n.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-muted/20 border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors group">
                      <img src="/images/stack/n8n.png" alt="n8n" className="w-7 h-7 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">n8n</p>
                        <p className="text-sm text-muted-foreground">Автоматизації промптами замість ручних налаштувань</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Topic 4 — PRD + Plan Mode */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">04</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">PRD + Plan Mode</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Plan Mode — один з основних режимів роботи з Claude Code. 80% роботи відбувається саме тут —
                  обговорюєш задачу, аналізуєш, плануєш. І тільки 20% — AI реалізує. Це як мітинг з командою:
                  зайшла нова задача, треба проговорити що робимо, хто потрібен, на які етапи розбити.
                </p>

                <div className="space-y-4">
                  {/* Крок 1 */}
                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 1 — Аналіз в Plan Mode</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Кидаємо лінку на сервіс оренди авто і просимо розібрати:
                    </p>
                    <CodeBlock
                      code={`Проаналізуй сервіс оренди авто [лінка].

Що мене цікавить:
- які основні фічі є на сайті
- як працює процес букінгу
- яка структура сторінок
- що зроблено добре, що можна покращити`}
                    />
                  </div>

                  {/* Крок 2 */}
                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 2 — PRD</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      PRD (Product Requirements Document) — документ, що описує що будуємо, для кого і як це працює. Просимо створити:
                    </p>
                    <CodeBlock
                      code={`На базі аналізу створи PRD для нашого сервісу оренди авто.

PRD має включати:
- опис продукту (що це, для кого)
- список фіч (MVP)
- структуру сторінок
- стек технологій (React, Supabase, Tailwind)
- ролі користувачів (клієнт, адмін)`}
                    />
                  </div>
                </div>
              </div>

              {/* Topic 5 — Сетап проєкту */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">05</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Сетап проєкту</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Як я починаю будь-який новий проєкт — від нуля до робочого середовища за 10 хвилин.
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 1</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Створюємо проєкт в <img src="/images/stack/lovable.png" alt="Lovable" className="w-4 h-4 inline-block align-middle mr-0.5" />Lovable</span> — новий проєкт, базовий шаблон, одразу живий URL
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 2</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Підв'язуємо до <img src="/images/stack/github.png" alt="GitHub" className="w-4 h-4 inline-block align-middle mr-0.5" />GitHub</span> — з'єднуємо Lovable з GitHub репозиторієм
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 3</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Клонуємо локально</span> — через <img src="/images/stack/github.png" alt="GitHub Desktop" className="w-4 h-4 inline-block align-middle mr-0.5" />GitHub Desktop скачуємо проєкт на комп'ютер
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 4</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Відкриваємо в <img src="/images/stack/claude.png" alt="Claude Code" className="w-4 h-4 inline-block align-middle mr-0.5" />Claude Code</span> — заходимо в папку проєкту, запускаємо claude і починаємо працювати
                    </p>
                  </div>
                </div>
              </div>

              {/* Topic 6 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">06</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Як я пишу промпти</h3>
                <h4 className="text-lg font-semibold text-foreground mb-6">
                  AI розуміє прості запити — якщо вони послідовні і структуровані. Одна задача = один промпт.
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  ChatGPT-generated промпти для розробки — часто шкодять більше ніж допомагають. Вони додають деталі, які ти не зрозумієш навіщо вони там, і нагружають проєкт зайвим кодом.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Покажу, чому останнім часом я промпчу голосом через <img src="/images/stack/aqua.png" alt="Aqua Voice" className="w-4 h-4 inline-block align-middle mr-0.5" />Aqua Voice
                </p>
              </div>

              {/* Topic 7 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">07</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Каркас проєкту + паралельна робота</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Відкриваємо три термінали і працюємо одночасно. Кожен планує свою частину проєкту.
                </p>

                <Tabs defaultValue="terminal-1">
                  <TabsList className="w-full bg-muted/30 border border-border/50 rounded-xl p-1 h-auto">
                    <TabsTrigger value="terminal-1" className="flex-1 rounded-lg data-[state=active]:bg-background/80 py-2 text-xs uppercase tracking-wider">Структура</TabsTrigger>
                    <TabsTrigger value="terminal-2" className="flex-1 rounded-lg data-[state=active]:bg-background/80 py-2 text-xs uppercase tracking-wider">Функціонал</TabsTrigger>
                    <TabsTrigger value="terminal-3" className="flex-1 rounded-lg data-[state=active]:bg-background/80 py-2 text-xs uppercase tracking-wider">База даних</TabsTrigger>
                  </TabsList>

                  <TabsContent value="terminal-1">
                    <CodeBlock
                      label="Термінал 1 — Структура лендінгу"
                      code={`Прочитай PRD проєкту і на його основі спроєктуй структуру лендінгу.

Які блоки потрібні:
- hero секція з заголовком і CTA
- каталог авто з фільтрацією
- букінг-форма з вибором дат
- секція контактів і FAQ

Створи план компонентів і їх розташування на сторінці.`}
                    />
                  </TabsContent>

                  <TabsContent value="terminal-2">
                    <CodeBlock
                      label="Термінал 2 — Функціонал MVP"
                      code={`Прочитай PRD проєкту і спроєктуй функціонал MVP.

Що має працювати:
- вибір дат оренди (початок, кінець)
- фільтрація машин (клас, ціна, наявність)
- процес бронювання (вибір авто → форма → підтвердження)
- базова валідація форм

Опиши логіку кожного кроку і які дані потрібні.`}
                    />
                  </TabsContent>

                  <TabsContent value="terminal-3">
                    <CodeBlock
                      label="Термінал 3 — База даних"
                      code={`Прочитай PRD проєкту і спроєктуй базу даних в Supabase.

Потрібні таблиці:
- cars (марка, модель, ціна за день, фото, наявність)
- bookings (авто, дати, статус, контакти клієнта)
- users (email, роль: клієнт або адмін)

Опиши поля, типи даних, зв'язки між таблицями і базові RLS політики.`}
                    />
                  </TabsContent>
                </Tabs>
              </div>

              {/* Interlude — Vibe Coding */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 text-center">
                <img
                  src="/images/photo_2026-01-15_12-28-38.jpg"
                  alt="Slot Machines vs. Vibe Coding"
                  className="rounded-xl mx-auto mb-6 max-w-md w-full"
                />
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  Але не забуваємо, що vibe coding — це завжди рулетка. Особливо коли це стосується дизайну.
                </p>
              </div>

              {/* Topic 8 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">08</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Дизайн-референс</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Шукаємо референс, на який будемо орієнтуватись. Не малюємо з нуля — знаходимо те, що подобається, і показуємо Claude Code.
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 1</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Шукаємо референс</span> — знаходимо сайт або скріншот з дизайном, який подобається
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 2</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Показуємо <img src="/images/stack/claude.png" alt="Claude Code" className="w-4 h-4 inline-block align-middle mr-0.5" />Claude Code</span> — даємо посилання або скріншот через <img src="/images/stack/teampaper.png" alt="Team Paper" className="w-4 h-4 inline-block align-middle mr-0.5" />Team Paper і просимо зверстати в такому стилі
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 3</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium"><img src="/images/stack/figma.png" alt="Figma" className="w-4 h-4 inline-block align-middle mr-0.5" />Figma MCP</span> — якщо є макет у Figma, підключаємо через MCP і Claude Code бачить стилі, кольори, відступи
                    </p>
                  </div>
                </div>
              </div>

              {/* Topic 9 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">09</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Збираємо продукт</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Допилюємо основний функціонал — від вітрини до бронювання. Все підключене до <img src="/images/stack/supabase.png" alt="Supabase" className="w-4 h-4 inline-block align-middle mr-0.5" />Supabase.
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 1</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Вітрина авто</span> — список машин з фото, ціною, характеристиками. Дані з <img src="/images/stack/supabase.png" alt="Supabase" className="w-4 h-4 inline-block align-middle mr-0.5" />Supabase
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 2</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Сторінка авто</span> — окрема сторінка для кожної машини з деталями і кнопкою бронювання
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 3</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Booking</span> — форма бронювання: вибір дат, контакти, підтвердження
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 4</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Зв'язка з базою</span> — всі дані зберігаються і читаються з <img src="/images/stack/supabase.png" alt="Supabase" className="w-4 h-4 inline-block align-middle mr-0.5" />Supabase
                    </p>
                  </div>
                </div>
              </div>

              {/* Topic 10 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">10</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Деплой + документація</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Публікуємо проєкт на живий домен і фіксуємо все, щоб можна було повернутись до проєкту через тиждень і не загубитись.
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 1</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Деплой через <img src="/images/stack/lovable.png" alt="Lovable" className="w-4 h-4 inline-block align-middle mr-0.5" />Lovable</span> — один клік, проєкт вже на живому URL
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 2</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Кастомний домен</span> — підключаємо свій домен, якщо потрібно
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 3</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">CLAUDE.md</span> — створюємо файл, який зберігає контекст проєкту для <img src="/images/stack/claude.png" alt="Claude Code" className="w-4 h-4 inline-block align-middle mr-0.5" />Claude Code
                    </p>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground/50 mb-2 uppercase tracking-wider">Крок 4</p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Документація</span> — фіксуємо архітектурні рішення, структуру бази, доступи
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Topic 11 — Підсумки */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">11</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Підсумки + Q&A</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Коротко — що ми зробили за сьогодні і що далі.
              </p>

              <div className="bg-muted/20 border border-border/50 rounded-xl p-5 mb-6">
                <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">Що зробили</p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li><span className="text-foreground">Налаштували середовище і стек</span></li>
                  <li><span className="text-foreground">Написали PRD і спланували проєкт</span></li>
                  <li><span className="text-foreground">Зібрали каркас в трьох терміналах паралельно</span></li>
                  <li><span className="text-foreground">Підібрали дизайн і зверстали</span></li>
                  <li><span className="text-foreground">Зібрали продукт з базою даних</span></li>
                  <li><span className="text-foreground">Задеплоїли на живий домен</span></li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground">
                Далі — відповіді на питання.
              </p>
            </div>
          </section>

          {/* Домашнє завдання */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <ClipboardList className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Домашнє завдання</h3>
                  <p className="text-muted-foreground">Зробити самостійно до наступного воркшопу:</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5 shrink-0">1.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">Обрати свій проєкт</span> — придумати або взяти реальну задачу (лендінг для бізнесу, портфоліо, невеликий сервіс)
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5 shrink-0">2.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">Написати PRD</span> — через Plan Mode в <img src="/images/stack/claude.png" alt="Claude Code" className="w-4 h-4 inline-block align-middle mr-0.5" />Claude Code: що це, для кого, які фічі, який стек
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5 shrink-0">3.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">Зібрати каркас</span> — створити проєкт в <img src="/images/stack/lovable.png" alt="Lovable" className="w-4 h-4 inline-block align-middle mr-0.5" />Lovable, підключити <img src="/images/stack/github.png" alt="GitHub" className="w-4 h-4 inline-block align-middle mr-0.5" />GitHub, клонувати, відкрити в <img src="/images/stack/claude.png" alt="Claude Code" className="w-4 h-4 inline-block align-middle mr-0.5" />Claude Code
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5 shrink-0">4.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">Зверстати головну сторінку</span> — знайти референс і зверстати hero + 2-3 секції
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5 shrink-0">5.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">Підключити <img src="/images/stack/supabase.png" alt="Supabase" className="w-4 h-4 inline-block align-middle mr-0.5" />Supabase</span> — створити проєкт, підключити до коду, створити хоча б одну таблицю
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed border-t border-border/50 pt-6">
                На наступному воркшопі розберемо результати і продовжимо з авторизацією та адмінпанеллю.
              </p>
            </div>
          </section>

          {/* Next Workshop */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-sm text-primary/60 mb-4 uppercase tracking-wider">Наступний воркшоп</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Частина 2: Авторизація + Адмінпанель</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Розберемо домашні завдання, реалізуємо авторизацію через <img src="/images/stack/supabase.png" alt="Supabase" className="w-4 h-4 inline-block align-middle mr-0.5" />Supabase
                і побудуємо адмінпанель для управління контентом проєкту.
              </p>
            </div>
          </section>

          {/* Додаткові теми */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Додаткові теми для воркшопів</p>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium"><img src="/images/stack/figma.png" alt="Figma" className="w-4 h-4 inline-block align-middle mr-0.5" />Figma MCP</span> — підключення Figma до Claude Code для роботи з дизайном напряму
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">N8n MCP</span> — автоматизація воркфлоу через n8n і Claude
                </p>
              </div>
            </div>
          </section>

          {/* Author */}
          <section className="animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/my-photo.png"
                    alt="Vlad Rulikovskiy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Vlad Rulikovskiy</h3>
                  <p className="text-primary text-sm mb-3">Building, breaking AI</p>
                  <a
                    href="https://www.linkedin.com/in/rulikovskyi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Workshop;
