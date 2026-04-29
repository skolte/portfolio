export interface TeachingSession {
  title: string
  series: string
  audience: string
  description: string
  topics: string[]
  sessions?: number
  year: string
  icon: string
  tag: string
}

export interface Talk {
  title: string
  event: string
  location: string
  date: string
  description: string
  coPresenter?: string
  type: 'Panel' | 'Workshop' | 'Keynote' | 'Breakout'
  link?: string
}

export const teachingSeries: TeachingSession[] = [
  {
    title: 'Kids Python Series',
    series: 'Kids Python Series',
    audience: 'Children & Teens (Ages 10–17)',
    description: 'A 10-session hands-on Python curriculum designed to make programming approachable and fun for young learners. Each session built on the last, moving from variables and loops to mini-projects kids could share with family.',
    topics: [
      'Python fundamentals: variables, data types, and operators',
      'Control flow: conditionals and loops',
      'Functions and reusable code',
      'Working with lists and dictionaries',
      'File I/O and simple data storage',
      'Introduction to APIs and web data',
      'Building a simple calculator and quiz game',
      'Introduction to turtle graphics and visual programming',
      'Mini-project: personal webpage generator',
      'Final showcase: student demos and Q&A',
    ],
    sessions: 10,
    year: '2023–2024',
    icon: '🐍',
    tag: 'Youth Education',
  },
  {
    title: 'AI for Nonprofit Leaders',
    series: 'AI Literacy Series',
    audience: 'Nonprofit Executive Directors & Board Members',
    description: 'A practical webinar series helping nonprofit leaders understand what AI can actually do for their organization — without needing a technical background. Focused on real use cases: donor outreach, grant writing, compliance, and impact reporting.',
    topics: [
      'What AI actually is (and what it isn\'t) — demystifying the hype',
      'AI tools your team can use today without a data scientist',
      'Automating donor outreach and personalized messaging',
      'Using AI for grant proposal drafting and research',
      'Protecting donor and client data when using AI tools',
      'Building an AI readiness roadmap for your organization',
      'Vendor evaluation: questions to ask before buying AI tools',
    ],
    year: '2023–2024',
    icon: '🌱',
    tag: 'Nonprofit',
  },
  {
    title: 'AI for Non-Technical Professionals',
    series: 'AI Literacy Series',
    audience: 'Business Professionals, Operations, HR, Marketing',
    description: 'A course designed for professionals who work with technology but don\'t write code. Covers how to collaborate with AI tools, prompt engineering basics, and how to evaluate AI outputs critically in a professional context.',
    topics: [
      'How large language models work — mental models without math',
      'Prompt engineering: getting better outputs from ChatGPT and Claude',
      'AI for writing, summarization, and research workflows',
      'Understanding AI limitations: hallucination, bias, and reliability',
      'Privacy and security considerations for workplace AI use',
      'Building an AI-augmented workflow in your current role',
      'Evaluating AI tools before adoption: a framework',
    ],
    year: '2024',
    icon: '💼',
    tag: 'Professional Development',
  },
  {
    title: 'AI for Teens',
    series: 'AI Literacy Series',
    audience: 'High School Students (Ages 14–18)',
    description: 'A series that takes teens beyond using AI tools to understanding them — how they work, where they fail, and how to build with them. Designed to spark curiosity and give teens a head start on AI literacy before college.',
    topics: [
      'What is AI? From rule-based systems to neural networks',
      'How ChatGPT actually works — tokens, context, and prediction',
      'Prompt engineering: talking to AI like a professional',
      'AI bias and fairness: real examples that matter',
      'Building a simple AI project with Python',
      'AI in careers: what jobs look like in an AI-augmented world',
      'Ethics of AI: questions every builder should ask',
    ],
    year: '2024',
    icon: '🎓',
    tag: 'Teen Education',
  },
]

export const talks: Talk[] = [
  {
    title: 'Unlocking AI for Impact: Real-World Applications in Nonprofits',
    event: 'CAC2 Summit (Coalition Against Childhood Cancer)',
    location: 'Washington, D.C.',
    date: 'June 2024',
    description: 'Co-led a breakout session with Geoff Still, CEO of the Pediatric Brain Tumor Foundation. Shared how AI is helping nonprofits automate donor outreach, personalize messaging, draft grant proposals, and flag compliance risks — with a special focus on protecting patient privacy in HIPAA-aware AI systems.',
    coPresenter: 'Geoff Still, CEO — Pediatric Brain Tumor Foundation',
    type: 'Breakout',
  },
  {
    title: 'AI for Nonprofit Organizations: Where to Start',
    event: 'AWS Nonprofit AI Panel',
    location: 'Virtual',
    date: '2024',
    description: 'Panelist discussion on practical AI adoption strategies for nonprofit organizations, covering data readiness, vendor selection, and ethical considerations for mission-driven AI deployment.',
    type: 'Panel',
  },
]
