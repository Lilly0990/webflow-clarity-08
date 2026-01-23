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
            {/* Logos */}
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-4">
                <img
                  src="/images/logo-webflove.png"
                  alt="webf.love"
                  className="h-8 md:h-10 w-auto"
                />
                <span className="text-xl text-muted-foreground font-light">×</span>
                <img
                  src="/images/glow-team-logo.png"
                  alt="Glow Team"
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">AI WORKSHOP</p>
                <p>2025</p>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
              Практичний<br />
              <span className="gradient-text">AI Workshop</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Як реально використовувати AI для створення веб-продуктів.
              Без магії, без bullshit.
            </p>
          </header>

          {/* Для кого */}
          <section className="mb-20 animate-fade-in">
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Для кого</p>
              <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                <h2 className="text-2xl md:text-3xl font-bold">Дизайнери та маркетологи</h2>
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
            </div>
          </section>

          {/* Програма */}
          <section className="mb-20 animate-fade-in">
            <div className="border-t border-border pt-8 mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Програма</p>
            </div>

            {/* Topic 1 */}
            <div className="border-t border-border py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">01</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Lovable vs Claude Code</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Яка, блядь, різниця? Чому Lovable жере токени на кожен чих, а Claude Code — ні.
                    Як їх юзати разом, а не битись головою об стіну окремо з кожним.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="border-t border-border py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">02</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Налаштування середовища</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Термінал, GitHub, базова конфігурація. Нудно, але без цього нікуди.
                    Один раз налаштував — далі просто працюєш.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="border-t border-border py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">03</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">PRD + Plan Mode</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Тут магія. Показую різницю між "зроби мені лендінг" і нормально сформульованим запитом.
                    Два термінали поруч, однакова задача, результат — небо і земля.
                    Plan mode — це не опція, це must have.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="border-t border-border py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">04</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Як писати промпти</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Забудьте про ChatGPT-generated промпти на три сторінки. AI розуміє прості речі, розбиті на кроки.
                    І так, я тепер промпчу голосом — розкажу чому.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="border-t border-border py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">05</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Каркас проєкту</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Збираємо скелет букінг-сервісу. Supabase для бази, GitHub для коду, Lovable + Claude Code для роботи.
                    Все зв'язуємо, щоб воно реально працювало.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="border-t border-border py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">06</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Авторизація</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Робимо логін для адмінки. Без цього ваш MVP — просто іграшка.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic 7 */}
            <div className="border-t border-border py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">07</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Паралельна робота</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Два термінали одночасно. В одному — адмінка, в іншому — лендінг по референсу.
                    Поки один думає, другий працює. Ефективність × 2.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic 8 */}
            <div className="border-t border-border py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">08</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Документація</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Як правильно зберігати документацію проєкту. Що фіксувати, де тримати, як не втратити контекст через тиждень.
                    Бо без документації ваш проєкт — чорна скринька навіть для вас самих.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic 9 */}
            <div className="border-t border-border border-b py-8 group hover:bg-card/50 transition-colors -mx-6 px-6 rounded-lg">
              <div className="grid md:grid-cols-[120px_1fr] gap-4">
                <span className="text-4xl font-bold text-primary/40">09</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Деплой + передача</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Як за 5 хвилин викинути проєкт на домен.
                    Як передати клієнту так, щоб він не здогадався, що це зробила AI (якщо вам це важливо).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Бонус */}
          <section className="mb-20 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Бонус
                </span>
                <span className="text-muted-foreground text-sm">якщо встигнемо або окремо</span>
              </div>

              <div className="space-y-8">
                <div className="border-b border-border pb-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Figma MCP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Підключаємо Claude Code напряму до Figma. Він читає макет, ти кажеш "зверстай" — і воно верстає.
                    Pixel-perfect, без ручної роботи.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">n8n MCP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Автоматизації через промпти. Замість того, щоб клікати в інтерфейсі n8n — просто кажеш, що треба зробити.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Author */}
          <section className="animate-fade-in">
            <div className="border-t border-border pt-12">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Ведучий</p>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/team/vlad-workshop.png"
                    alt="Vladyslav Rulikovskij"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Vladyslav Rulikovskij</h3>
                  <p className="text-primary">Founder @ webf.love</p>
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
