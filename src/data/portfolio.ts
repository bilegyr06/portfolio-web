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
  outcome: string;
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
    description: "I became interested in software through interactive systems that responded to decisions, rules, and imagination.",
  },
  {
    period: "Foundation",
    title: "Mathematics sharpened the questions",
    description: "Math gave me a language for patterns, structure, and the discipline of slowing down before reaching for an answer.",
  },
  {
    period: "Study",
    title: "Computer Science turned curiosity into craft",
    description: "Studying computing helped me connect ideas to systems and understand how software can become a reliable tool.",
  },
  {
    period: "Discovery",
    title: "Artificial Intelligence widened the horizon",
    description: "AI made me more interested in systems that can reason with messy information and support human decisions.",
  },
  {
    period: "Focus",
    title: "Natural Language Processing became especially compelling",
    description: "NLP sits close to how people search, write, ask, explain, and understand, which makes it a rich area for useful products.",
  },
  {
    period: "Direction",
    title: "Entrepreneurship shifted the question",
    description: "I started caring less about building impressive things and more about discovering problems worth solving well.",
  },
  {
    period: "Now",
    title: "Building meaningful products",
    description: "The work now is to combine learning, engineering, and product judgment into software that clarifies real problems.",
  },
];

export const projects: Project[] = [
  {
    name: "SUBs_TRACKt",
    status: "Active",
    summary: "A commitment intelligence platform for understanding recurring financial obligations before they consume future income.",
    visualLabel: "Commitment awareness",
    problem:
      "People often know individual subscriptions, but miss the larger pattern of memberships, renewals, fees, donations, and installment commitments.",
    approach:
      "Identify likely commitments from trusted evidence, ask users to confirm them, then turn scattered obligations into a clear dashboard.",
    outcome:
      "The project is shaping my thinking around trust, financial visibility, and product decisions that make future consequences easier to see.",
    technologies: ["Product discovery", "AI-assisted workflows", "Email evidence", "Dashboard design"],
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
    problem: "Reliable accommodation search can be fragmented, uncertain, and difficult to verify before making decisions.",
    approach: "Use the prototype to understand how trust, transparency, and clearer information could improve the search process.",
    outcome:
      "This project changed how I build. It taught me to spend more time understanding the problem before rushing into implementation.",
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
    problem: "Automatic summarization can lose context, readability, or both when it compresses longer material.",
    approach: "Experiment with combining summarization approaches and compare how different techniques affect the final output.",
    outcome:
      "The work strengthened my interest in NLP and reinforced the value of experimentation when working with language systems.",
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
      "Worked with real-world datasets and learned how much the quality of analysis depends on careful, reliable preparation before a dashboard is ever built.",
    technologies: ["Python", "Pandas", "ETL", "Power BI", "Data cleaning"],
  },
];

export const buildCapabilities: TextCard[] = [
  {
    index: "01",
    title: "AI Applications",
    description: "Products that use intelligent systems to make information easier to understand, organize, or act on.",
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
    title: "Data Systems",
    description: "Pipelines and data preparation workflows that support analysis and product decisions.",
  },
  {
    index: "06",
    title: "Problem Discovery",
    description: "Research and observation that help define the right thing to build before implementation starts.",
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
    takeaway: "Strengthening the foundations behind the systems I want to build.",
  },
  {
    initials: "TH",
    title: "Theology and Philosophy Notes",
    author: "Ongoing study",
    takeaway: "Reading that shapes how I think about meaning, discipline, and human questions.",
  },
  {
    initials: "PE",
    title: "Product and Entrepreneurship",
    author: "Ongoing reading",
    takeaway: "Ideas that help me think beyond implementation and toward durable value.",
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
