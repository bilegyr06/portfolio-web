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
import { Section } from "./components/Section";
import { TagList } from "./components/TagList";
import { Timeline } from "./components/Timeline";

const navItems = [
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ayodeji Ajayi home">
          Ayodeji Ajayi
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content reveal">
            <p className="eyebrow">Software engineering, AI, and product thinking</p>
            <h1 id="hero-title">
              I build from curiosity, then shape that curiosity into useful products.
            </h1>
            <p className="hero__summary">
              I am Ayodeji Ajayi, an entrepreneurial software engineer interested in Artificial Intelligence, Natural
              Language Processing, and the patient work of understanding a problem before deciding what to build.
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
            <img src="/images/photo_2025-01-08_12-31-24.jpg" alt="Portrait of Ayodeji Ajayi" />
          </div>
        </section>

        <Section
          id="journey"
          eyebrow="My Journey"
          title="A path shaped by curiosity, learning, and a growing interest in meaningful products."
          intro="This is not a list of achievements. It is the progression of questions that kept becoming more interesting."
        >
          <Timeline items={journey} />
        </Section>

        <Section
          id="projects"
          eyebrow="Featured Projects"
          title="Projects as evidence of thinking."
          intro="Each project is framed around the problem, the approach, and what it taught me. The technology matters, but it comes after the reasoning."
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
                      <dd>{project.outcome}</dd>
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
          title="Practical work, viewed through impact."
          intro="Experience belongs here when it explains responsibility, judgment, and growth."
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
          intro="This section stays intentionally quiet. The tools are useful because they help turn ideas into reliable systems."
        >
          <div className="technology-grid">
            {technologyGroups.map((group) => (
              <Card key={group.category}>
                <h3>{group.category}</h3>
                <TagList tags={group.items} />
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
          intro="Reading belongs on this portfolio because ideas often become better engineering decisions later."
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
          title="The interests around the work."
          intro="A quieter section for the things that keep curiosity alive outside the editor."
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
            <a className="button button--primary" href="mailto:ayodejioluwatobi2@gmail.com">
              Email Me
            </a>
            <a className="button button--secondary" href="https://github.com/bilegyr06?tab=repositories">
              GitHub
            </a>
            <a className="button button--secondary" href="https://www.linkedin.com/in/ayodeji-ajayi-83006a287/">
              LinkedIn
            </a>
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
