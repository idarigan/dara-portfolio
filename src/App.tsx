import {
  Navbar,
  ThemeProvider,
  ThemeChanger,
  I18nProvider,
  LanguageChanger,
  useI18n,
  Card,
  Badge,
  Button,
  Avatar,
  Tabs,
  ScrollReveal,
  SocialMedia,
  AuroraBlobs,
  Particles,
  NoiseOverlay,
  useScrollReveal,
} from "dara-ui";
import type { NavLink } from "dara-ui";
import { translations } from "./translations";

/* =============================================
  DATA
  ============================================= */
const SOCIAL_LINKS = [
  { platform: "github", url: "https://github.com/idarigan" },
  { platform: "twitter", url: "https://x.com/daracoder" },
  { platform: "bluesky", url: "https://bsky.app/profile/idarigan" },
];

const PROJECTS = [
  {
    id: "202601",
    titleKey: "projects.p1.title",
    descKey: "projects.p1.desc",
    tagKeys: ["projects.p1.tags.0", "projects.p1.tags.1"],
    color: "primary" as const,
  },
  {
    id: "202602",
    titleKey: "projects.p2.title",
    descKey: "projects.p2.desc",
    tagKeys: ["projects.p2.tags.0", "projects.p2.tags.1", "projects.p2.tags.2"],
    color: "secondary" as const,
  },
  {
    id: "202603",
    titleKey: "projects.p3.title",
    descKey: "projects.p3.desc",
    tagKeys: ["projects.p3.tags.0", "projects.p3.tags.1"],
    color: "accent" as const,
  },
];

const SKILLS = [
  "TypeScript",
  "React.js/Vite",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
];

/* =============================================
  SECTIONS
  ============================================= */
function HeroSection() {
  const { t } = useI18n();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-3xl w-full text-center">
        <ScrollReveal animation="fade-up">
          <span className="section-label block mb-4">{t("hero.role")}</span>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={80}>
          <h1 className="font-heading text-5xl md:text-7xl mb-6 tracking-tight leading-[1.1] text-[var(--color-text-secondary)]">
            {t("hero.greetingPrefix")}{" "}
            <span className="font-bold text-gradient-hero">
              {t("hero.name")}
            </span>
            {t("hero.greetingSuffix") && <> {t("hero.greetingSuffix")}</>}
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={160}>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
            {t("hero.tagline")}
          </p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={240}>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant="primary"
              glow="primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero.viewWork")}
            </Button>
            <Button
              variant="glass"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero.contactMe")}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
            {t("about.title")}
          </h2>
        </ScrollReveal>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex justify-center md:justify-start">
            <Avatar
              size="xl"
              fallbackText={t("about.initials")}
              glow="primary"
              bordered
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("about.bio1")}
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("about.bio2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { t } = useI18n();
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            {t("projects.title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={i * 120}>
              <Card float glow={project.color} className="h-full">
                <div className="flex flex-col gap-3 h-full">
                  <h3 className="font-heading text-xl font-bold">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                    {t(project.descKey)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tagKeys.map((tagKey) => (
                      <Badge key={tagKey} variant="secondary" size="sm" outline>
                        {t(tagKey)}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Button variant="outline" size="sm" fullWidth>
                      {t("projects.viewRepo")}
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { t } = useI18n();
  return (
    <section id="skills" className="my-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            {t("skills.title")}
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap gap-3 justify-center">
          {SKILLS.map((skill, i) => (
            <ScrollReveal key={skill} animation="zoom-in" delay={i * 60}>
              <Badge variant="primary" size="lg" glow>
                {skill}
              </Badge>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal animation="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
            {t("contact.subtitle")}
          </p>
          <Card variant="solid" padding="lg" glow="primary">
            <div className="flex flex-col gap-4 items-center">
              <span className="font-mono text-sm text-[var(--color-text-tertiary)]">
                {t("contact.emailLabel")}
              </span>
              <a
                href="mailto:idarigan@outlook.com"
                className="font-heading text-xl md:text-2xl font-bold text-[var(--color-primary)] hover:underline transition-colors"
                dir="ltr"
              >
                idarigan@outlook.com
              </a>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                <Button variant="primary" glow="primary">
                  {t("contact.sendMessage")}
                </Button>
                <Button
                  variant="glass"
                  onClick={() => {
                    window.location.href = "mailto:idarigan@outlook.com";
                  }}
                >
                  {t("contact.sendDirectEmail")}
                </Button>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-[var(--color-border-primary)] py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-tertiary)]">
          {t("footer.copyright")}
        </p>
        <p className="text-sm text-[var(--color-text-tertiary)]">
          {t("footer.builtWith")}
        </p>
      </div>
    </footer>
  );
}

/* =============================================
  APP CONTENT
  ============================================= */
function AppContent() {
  const { t } = useI18n();

  const navLinks: NavLink[] = [
    { label: t("nav.home"), href: "#home", active: true },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <>
      <NoiseOverlay />
      <AuroraBlobs />
      <Particles />

      <Navbar
        brand={
          <span
            className="font-heading font-bold text-lg tracking-tight"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("brand")}
          </span>
        }
        links={navLinks}
        showSearch={false}
        showLanguageChanger
        languageChanger={<LanguageChanger iconOnly size="sm" />}
        languageChangerMobile={
          <LanguageChanger iconOnly size="sm" openUpward />
        }
        showThemeChanger
        themeChanger={<ThemeChanger iconOnly size="sm" />}
        themeChangerMobile={<ThemeChanger iconOnly size="sm" openUpward />}
      />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />

      <SocialMedia
        links={SOCIAL_LINKS}
        position="left"
        size="md"
        showLabels={false}
        verticalOffset="50%"
      />
    </>
  );
}

function App() {
  return (
    <I18nProvider translations={translations} defaultLanguage="en">
      <ThemeProvider defaultTheme="nightfall">
        <AppContent />
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
