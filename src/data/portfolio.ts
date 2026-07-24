export type JourneyItem = {
  period: string;
  title: string;
  description: string;
};

type ProjectAction = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  status: string;
  summary: string;
  visualLabel: string;
  problem: string;
  approach: string;
  learned: string;
  technologies: string[];
  actions: ProjectAction[];
};

type Experience = {
  role: string;
  organization: string;
  period: string;
  impact: string;
  technologies: string[];
};

type TextCard = {
  index?: string;
  title: string;
  description?: string;
  note?: string;
};

type TechnologyGroup = {
  category: string;
  items: string[];
};

type Book = {
  initials: string;
  title: string;
  author: string;
  takeaway: string;
};

type Article = {
  category: string;
  title: string;
  date: string;
  preview: string;
  readingTime: string;
};

export const journey: JourneyItem[] = [
  {
    period: "Early curiosity",
    title: "Games made technology feel alive",
    description:
      "I first became interested in software through games: systems with rules, feedback, imagination, and the feeling that a decision could change what happened next.",
  },
  {
    period: "Foundation",
    title: "Mathematics sharpened the questions",
    description:
      "Mathematics gave me a language for patterns and structure. More importantly, it taught me to slow down and understand why something works before trying to use it.",
  },
  {
    period: "Study",
    title: "Computer Science turned curiosity into craft",
    description:
      "Studying computer science helped me connect abstract ideas to working systems and made software feel less like magic and more like a tool I could reason about.",
  },
  {
    period: "Discovery",
    title: "Artificial Intelligence widened the horizon",
    description:
      "AI made me interested in systems that can work with messy information, reveal patterns, and support better decisions without pretending the world is simple.",
  },
  {
    period: "Focus",
    title: "Natural Language Processing became especially compelling",
    description:
      "NLP sits close to how people search, write, ask, explain, and understand. That makes it a rich place to build products around real human behavior.",
  },
  {
    period: "Direction",
    title: "Entrepreneurship shifted the question",
    description:
      "Entrepreneurship changed the question from \"Can I build this?\" to \"Is this a problem worth solving, and do I understand it well enough yet?\"",
  },
  {
    period: "Now",
    title: "Building meaningful products",
    description:
      "The work now is to combine learning, engineering, writing, and product judgment into software that makes difficult problems clearer.",
  },
];

export const projects: Project[] = [
  {
    name: "SUBs_TRACKt",
    status: "Active",
    summary: "A commitment intelligence platform for understanding recurring financial obligations before they consume future income.",
    visualLabel: "Commitment awareness",
    problem:
      "People can usually name a few subscriptions, but miss the wider pattern: memberships, renewals, service fees, donations, trials, installments, and quiet obligations that keep claiming future income.",
    approach:
      "I am exploring how trusted evidence, confirmation flows, and careful classification can turn scattered financial signals into a dashboard people can actually trust.",
    learned:
      "SUBs_TRACKt is teaching me that the real product is not subscription tracking. It is helping people see commitments early enough to make better decisions.",
    technologies: ["Product discovery", "NLP", "AI-assisted workflows", "Email evidence", "Dashboard design"],
    actions: [
      { label: "Read Case Study", href: "#projects" },
      { label: "View Project", href: "#contact" },
    ],
  },
  {
    name: "Housing Leads",
    status: "Prototype",
    summary: "An early exploration into making housing opportunities easier to trust and evaluate.",
    visualLabel: "Trust and discovery",
    problem:
      "Finding reliable accommodation can be fragmented and stressful, especially when listings are hard to verify and important details are scattered.",
    approach:
      "I used the prototype to think through trust, clearer information, and how a better search flow might reduce uncertainty before someone makes a decision.",
    learned:
      "This project changed how I build. I learned that understanding the problem deeply is usually harder, and more valuable, than writing the first version of the software.",
    technologies: ["Problem discovery", "Prototype design", "Information architecture"],
    actions: [
      { label: "Read Case Study", href: "#projects" },
      { label: "GitHub", href: "https://github.com/bilegyr06?tab=repositories" },
    ],
  },
  {
    name: "NLP Research Project",
    status: "Completed",
    summary: "An experimental summarization system combining multiple NLP techniques.",
    visualLabel: "Language experiments",
    problem:
      "Summarization looks simple until a system starts removing the parts that gave the original text its meaning, tone, or usefulness.",
    approach:
      "I experimented with different summarization techniques and compared how each one affected context, readability, and the shape of the final output.",
    learned:
      "The work strengthened my interest in NLP because language systems force you to test assumptions. A technically correct output can still fail the reader.",
    technologies: ["Python", "NLP", "Summarization", "Experimentation"],
    actions: [
      { label: "Read Case Study", href: "#projects" },
      { label: "GitHub", href: "https://github.com/bilegyr06?tab=repositories" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Data Intern",
    organization: "Octave Analytics",
    period: "Internship",
    impact:
      "Worked with messy real-world data and learned how much useful analysis depends on careful cleaning, repeatable preparation, and reliable handoffs before a dashboard is ever built.",
    technologies: ["Python", "Pandas", "ETL", "Power BI", "Data cleaning"],
  },
];

export const buildCapabilities: TextCard[] = [
  {
    index: "01",
    title: "AI Applications",
    description: "Products that use intelligent systems to make information easier to understand, organize, and act on.",
  },
  {
    index: "02",
    title: "NLP Systems",
    description: "Language-focused tools for summarization, extraction, search, and interfaces built around human text.",
  },
  {
    index: "03",
    title: "Product Prototypes",
    description: "Early versions of products built to test whether the problem, workflow, and user value are real.",
  },
  {
    index: "04",
    title: "Backend APIs",
    description: "Clear service layers that make product ideas dependable, maintainable, and easier to extend.",
  },
  {
    index: "05",
    title: "Data Pipelines",
    description: "Pipelines and data preparation workflows that support analysis and product decisions.",
  },
];

export const thinkingCapabilities: TextCard[] = [
  {
    index: "01",
    title: "Product Discovery",
    description: "Starting with the problem, the user, and the evidence before deciding what the software should become.",
  },
  {
    index: "02",
    title: "Research",
    description: "Reading, comparing ideas, and looking for the assumptions underneath a problem.",
  },
  {
    index: "03",
    title: "Technical Writing",
    description: "Explaining concepts clearly enough that the gaps in my own understanding become visible.",
  },
  {
    index: "04",
    title: "Learning",
    description: "Building from first principles and staying with difficult material long enough for it to become usable.",
  },
  {
    index: "05",
    title: "Systems Thinking",
    description: "Looking at incentives, workflows, constraints, and consequences rather than only the interface in front of me.",
  },
];

export const technologyGroups: TechnologyGroup[] = [
  { category: "Frontend", items: ["React", "TypeScript", "HTML", "CSS", "Responsive UI"] },
  { category: "Backend", items: ["Python", "FastAPI", "APIs", "Authentication"] },
  { category: "AI / ML", items: ["NLP", "scikit-learn", "spaCy", "NLTK", "Summarization"] },
  { category: "Data", items: ["Pandas", "ETL", "Data cleaning", "Power BI"] },
  { category: "Tools", items: ["Git", "GitHub", "Vite", "Product notes", "Research docs"] },
];

export const learning: TextCard[] = [
  { title: "Software Architecture", note: "Designing systems that stay understandable as they grow." },
  { title: "Advanced React", note: "Building interfaces with stronger composition, data flow, and accessibility habits." },
  { title: "FastAPI", note: "Creating backend services that are clear, typed, and product-ready." },
  { title: "NLP Systems", note: "Moving from isolated experiments toward useful language-driven product workflows." },
  { title: "Product Engineering", note: "Connecting technical decisions to user value, tradeoffs, and product direction." },
  { title: "Building SUBs_TRACKt", note: "Learning through a real product centered on commitment awareness." },
];

export const books: Book[] = [
  {
    initials: "AI",
    title: "Artificial Intelligence",
    author: "Current technical reading",
    takeaway: "Strengthening the foundations behind the intelligent systems I want to build.",
  },
  {
    initials: "TH",
    title: "Theology and Philosophy Notes",
    author: "Ongoing study",
    takeaway: "Reading that quietly shapes how I think about meaning, discipline, integrity, and human questions.",
  },
  {
    initials: "PE",
    title: "Product and Entrepreneurship",
    author: "Ongoing reading",
    takeaway: "Ideas that push me to think beyond implementation and toward durable value.",
  },
];

export const articles: Article[] = [
  {
    category: "Product Thinking",
    title: "Why understanding the problem comes before writing code",
    date: "Draft",
    preview: "A future essay on how Housing Leads changed the way I approach software projects.",
    readingTime: "4 min read",
  },
  {
    category: "AI",
    title: "Commitment awareness is not subscription tracking",
    date: "Draft",
    preview: "Notes from building SUBs_TRACKt and thinking about financial obligations as future commitments.",
    readingTime: "5 min read",
  },
  {
    category: "Learning",
    title: "What NLP keeps teaching me about useful software",
    date: "Draft",
    preview: "A reflection on language systems, experimentation, and building interfaces around text.",
    readingTime: "6 min read",
  },
];

export const interests = ["Formula One", "Books", "Theology", "Philosophy", "Football Manager", "Cars", "Gaming"];
