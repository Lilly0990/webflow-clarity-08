import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Workshop = () => {
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
                <p className="font-semibold text-foreground">AI WORKSHOP</p>
                <p>2026</p>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
              Практичний<br />
              <span className="gradient-text">AI Workshop</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
              Як реально використовувати AI для створення веб-продуктів.
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
                  <strong className="text-foreground">Мета</strong> — показати, як AI дійсно
                  може допомагати у реальній роботі.
                </p>
              </div>
            </div>
          </section>

          {/* Програма */}
          <section className="mb-20 animate-fade-in">
            <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">Програма</p>

            <div className="space-y-4">
              {/* Topic 1 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">01</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Lovable vs Claude Code</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Яка, блядь, різниця? Чому Lovable жере токени на кожен чих, а Claude Code — ні.
                  Як їх юзати разом, а не битись головою об стіну окремо з кожним.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Чому Claude Code дає набагато більше контролю над проєктом: доступ до терміналу,
                  робота з будь-якими файлами, інтеграція з GitHub, MCP-сервери, паралельні сесії.
                  Повний контроль замість чорної скриньки.
                </p>
              </div>

              {/* Topic 2 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">02</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Налаштування середовища</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Термінал, GitHub, базова конфігурація. Нудно, але без цього нікуди.
                  Один раз налаштував — далі просто працюєш.
                </p>
              </div>

              {/* Topic 3 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">03</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">PRD + Plan Mode</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Тут магія. Показую різницю між "зроби мені лендінг" і нормально сформульованим запитом.
                  Два термінали поруч, однакова задача, результат — небо і земля.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Чому Plan Mode критичний для будь-якого проєкту: AI спочатку аналізує задачу,
                  продумує архітектуру, і тільки потім пише код. Замість хаотичних правок —
                  структурований план. Plan mode — це не опція, це must have.
                </p>
              </div>

              {/* Topic 4 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">04</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Як писати промпти</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Забудьте про ChatGPT-generated промпти на три сторінки. AI розуміє прості речі, розбиті на кроки.
                  І так, я тепер промпчу голосом — розкажу чому.
                </p>
              </div>

              {/* Topic 5 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">05</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Каркас проєкту</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Збираємо скелет букінг-сервісу. Supabase для бази, GitHub для коду, Lovable + Claude Code для роботи.
                  Все зв'язуємо, щоб воно реально працювало.
                </p>
              </div>

              {/* Topic 6 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">06</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Авторизація</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Робимо просту авторизацію і створюємо адмінські доступи через Supabase.
                  Без цього ваш MVP — просто іграшка.
                </p>
              </div>

              {/* Topic 7 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">07</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Паралельна робота</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Два термінали одночасно. В одному — адмінка, в іншому — лендінг по референсу.
                  Поки один думає, другий працює. Ефективність × 2.
                </p>
              </div>

              {/* Topic 8 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">08</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Документація</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Як правильно зберігати документацію проєкту. Що фіксувати, де тримати, як не втратити контекст через тиждень.
                  Бо без документації ваш проєкт — чорна скринька навіть для вас самих.
                </p>
              </div>

              {/* Topic 9 */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-bold text-primary/40 block mb-3">09</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Деплой + передача</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Як швидко деплоїти проєкт на домен. Які варіанти передачі проєкту клієнту:
                  репозиторій, доступи до хостингу, документація.
                </p>
              </div>
            </div>
          </section>

          {/* Бонус */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Додатково
                </span>
                <span className="text-muted-foreground text-sm">теми для наступних воркшопів</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Figma MCP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Підключаємо Claude Code напряму до Figma. Він читає макет, ти кажеш "зверстай" — і воно верстає.
                    Pixel-perfect, без ручної роботи.
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">n8n MCP</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Як розгорнути n8n локально, підключити до Claude Code через MCP і створювати
                    автоматизації не складними налаштуваннями в інтерфейсі, а зрозумілими промптами.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Кажеш "зроби мені workflow, який буде відправляти email коли хтось заповнює форму" —
                    і воно робить.
                  </p>
                </div>
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
