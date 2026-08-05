import { useEffect, useState } from "react";
import {
  articles,
  books,
  buildCapabilities,
  experiences,
  interests,
  journey,
  learning,
  projects,
  technologyGroups,
} from "./data/portfolio";
import { Badge } from "./components/Badge";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { TagList } from "./components/TagList";
import { Timeline } from "./components/Timeline";
import heroPortrait from "./assets/hero-portrait.jpg";
import { IconList } from "./components/IconList";
import GmailIcon from "@iconify-react/simple-icons/gmail";
import GitHubIcon from "@iconify-react/simple-icons/github";
import LinkedInIcon from "@iconify-react/simple-icons/linkedin";

const navItems = [
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("portfolio-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <>      
      <Header brandName="Ayodeji Ajayi" brandHref="#top" navItems={navItems} isDark = {isDark} onToggleTheme={toggleTheme} />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content reveal">
            <p className="eyebrow">Software engineering, AI, and product thinking</p>
            <h1 id="hero-title">
              Understanding Problems.
            </h1>
            <h2 className="hero__subtitle">Building Software.</h2>
            <p className="hero__summary">
              I'm Ayodeji Ajayi. 
              I build software, enjoy reading, playing football manager and I spend a lot of time thinking about products, AI, and interesting problems worth solving.
            </p>
            <div className="button-row" aria-label="Primary actions">
              <a className="button button--primary" href="#projects">
                View Projects
              </a>
              <a className="button button--secondary" href="mailto:ayodejioluwatobi2@gmail.com">
                Start a Conversation
              </a>
            </div>
          </div>
          <div className="hero__media reveal reveal--delay">
            <img src={heroPortrait} alt="Portrait of Ayodeji Ajayi" />
          </div>
        </section>

        <Section
          id="journey"
          eyebrow="My Journey"
          title="Following curiosity from games to AI, entrepreneurship, and thoughtful software."
          intro="This isn't a timeline of achievements. It's the story of how one question led to another, and how each step shaped the way I think about solving problems."
        >
          <Timeline items={journey} />
        </Section>

        <Section
          id="projects"
          eyebrow="Featured Projects"
          title="Projects that show my thought process."
          intro="I frame each project around the problem, the approach, and what I learned from it. The technology matters, but it comes after the reasoning."
        >
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.name}>
                <div className="project-card__visual" aria-hidden="true">
                  <span>{project.visualLabel}</span>
                </div>
                <div className="project-card__content">
                  <div>
                    <Badge>{project.status}</Badge>
                    <h3>{project.name}</h3>
                    <p className="muted">{project.summary}</p>
                  </div>
                  <dl className="project-story">
                    <div>
                      <dt>Problem</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>Approach</dt>
                      <dd>{project.approach}</dd>
                    </div>
                    <div>
                      <dt>Outcome</dt>
                      <dd>{project.learned}</dd>
                    </div>
                  </dl>
                  <TagList tags={project.technologies} />
                  <div className="button-row">
                    {project.actions.map((action) => (
                      <a className="text-link" href={action.href} key={action.label}>
                        {action.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Practical work I've done"
          intro="Experience I've built up working with companies"
        >
          <div className="stack">
            {experiences.map((experience) => (
              <Card className="experience-card" key={`${experience.role}-${experience.organization}`}>
                <div>
                  <p className="eyebrow">{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <p className="muted">{experience.organization}</p>
                </div>
                <p>{experience.impact}</p>
                <TagList tags={experience.technologies} />
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="build"
          eyebrow="What I Build"
          title="Capabilities before tools."
          intro="The work I enjoy most starts with a meaningful problem and ends with a product, system, or experiment that makes the problem clearer."
        >
          <div className="card-grid">
            {buildCapabilities.map((capability) => (
              <Card key={capability.title}>
                <span className="card-number">{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="technologies"
          eyebrow="Technologies I Use"
          title="Tools that support the work."
          intro="Tools only matter when they help turn ideas into reliable systems."
        >
          <div className="technology-grid">
            {technologyGroups.map((group) => (
              <Card key={group.category}>
                <h3>{group.category}</h3>
                <IconList tags={group.items} />
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="learning"
          eyebrow="Currently Learning"
          title="A public marker of current growth."
          intro="These are areas I am actively sharpening because they connect to the kind of products and systems I want to build."
        >
          <div className="learning-list">
            {learning.map((item) => (
              <Card key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="reading"
          eyebrow="Currently Reading"
          title="Books that shape the way I think."
          intro="I include reading here because ideas from books often show up later in the way I make engineering decisions."
        >
          <div className="book-grid">
            {books.map((book) => (
              <Card className="book-card" key={book.title}>
                <div className="book-cover" aria-hidden="true">
                  {book.initials}
                </div>
                <div>
                  <h3>{book.title}</h3>
                  <p className="muted">{book.author}</p>
                  <p>{book.takeaway}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="writing"
          eyebrow="Writing / Thoughts"
          title="A home for ideas in progress."
          intro="The writing section is designed for future essays on AI, entrepreneurship, books, theology, philosophy, and product thinking."
        >
          <div className="article-grid">
            {articles.map((article) => (
              <Card className="article-card" key={article.title}>
                <p className="eyebrow">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.preview}</p>
                <span className="muted">
                  {article.date} · {article.readingTime}
                </span>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="beyond"
          eyebrow="Beyond Software"
          title="What keeps me curious outside the work."
          intro="These are the things that keep me curious and entertained outside my editor."
        >
          <div className="interest-row">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Open to thoughtful conversations."
          intro="I am interested in conversations around AI, NLP, entrepreneurship, product building, learning, research, and difficult problems worth understanding."
        >
          <div className="contact-panel">
            <a
              className="contact-link"
              href="mailto:ayodejioluwatobi2@gmail.com"
              aria-label="Email Ayodeji Ajayi"
            >
              <GmailIcon className="tag-list__icon" aria-hidden="true" focusable="false" />
            </a>
            <a
              className="contact-link"
              href="https://github.com/bilegyr06?tab=repositories"
              aria-label="View GitHub profile"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="tag-list__icon" aria-hidden="true" focusable="false" />
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/ayodeji-ajayi-83006a287/"
              aria-label="View LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="tag-list__icon" aria-hidden="true" focusable="false" />
            </a>
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
