export interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  href: string
  keywords?: string[]
}

export const searchIndex: SearchResult[] = [
  // Pages
  {
    id: 'home',
    title: 'Home',
    description: 'AI Systems Builder, Healthcare & Compliance Expert',
    category: 'Page',
    href: '/',
    keywords: ['home', 'portfolio', 'sandeep kolte'],
  },
  {
    id: 'skills',
    title: 'Skills & Expertise',
    description: 'Technical depth across AI, healthcare, cloud, backend, data engineering, frontend, compliance, and leadership',
    category: 'Page',
    href: '/skills',
    keywords: ['skills', 'expertise', 'agentic ai', 'healthcare', 'aws', 'python', 'typescript'],
  },
  {
    id: 'experience',
    title: 'Experience',
    description: '20+ years building production systems for regulated industries',
    category: 'Page',
    href: '/experience',
    keywords: ['experience', 'work history', 'pbtf', 'sims', 'careborn', 'langgraph'],
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'Portfolio projects including AI Incident Triage, PLA, and more',
    category: 'Page',
    href: '/projects',
    keywords: ['projects', 'portfolio', 'ai incident triage', 'pla', 'careborn'],
  },
  {
    id: 'certificates',
    title: 'Certificates',
    description: '29 professional certifications in AI, healthcare, software, data science, and cloud',
    category: 'Page',
    href: '/certificates',
    keywords: ['certificates', 'certifications', 'credentials', 'coursera', 'deeplearning.ai'],
  },
  {
    id: 'compliance',
    title: 'Compliance & Security',
    description: 'FedRAMP, HIPAA, NIST, PCI-DSS, and AI compliance frameworks',
    category: 'Page',
    href: '/compliance',
    keywords: ['compliance', 'security', 'fedramp', 'hipaa', 'nist', 'pci-dss', 'zero-trust'],
  },
  {
    id: 'engineering',
    title: 'Engineering & Design Thinking',
    description: 'System design philosophy, architecture decisions, and production lessons',
    category: 'Page',
    href: '/engineering',
    keywords: ['engineering', 'design', 'architecture', 'production', 'langgraph', 'multi-agent'],
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Engineering insights from building real systems',
    category: 'Page',
    href: '/blog',
    keywords: ['blog', 'writing', 'articles', 'insights'],
  },
  {
    id: 'about',
    title: 'About',
    description: 'Background, mission, and story',
    category: 'Page',
    href: '/about',
    keywords: ['about', 'background', 'mission', 'careborn', 'pedagogy'],
  },
  {
    id: 'teaching',
    title: 'Teaching & Speaking',
    description: 'Talks, workshops, and educational programs',
    category: 'Page',
    href: '/teaching',
    keywords: ['teaching', 'speaking', 'talks', 'workshops', 'aws', 'education'],
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch',
    category: 'Page',
    href: '/contact',
    keywords: ['contact', 'email', 'reach out', 'inquiry'],
  },

  // Skills
  {
    id: 'skill-agentic-ai',
    title: 'Agentic AI & Orchestration',
    description: 'Multi-agent AI systems with LangGraph, LangChain, cost tracking, and observability',
    category: 'Skill',
    href: '/skills#agentic-ai',
    keywords: ['agentic', 'ai', 'langgraph', 'langchain', 'multi-agent', 'orchestration', 'agents'],
  },
  {
    id: 'skill-healthcare',
    title: 'Healthcare Data & Compliance',
    description: 'HIPAA-aligned systems, FHIR, EHR, PII redaction, audit logging',
    category: 'Skill',
    href: '/skills#healthcare',
    keywords: ['healthcare', 'hipaa', 'fhir', 'ehr', 'compliance', 'pii', 'medical data'],
  },
  {
    id: 'skill-aws',
    title: 'Cloud & Infrastructure (AWS)',
    description: 'ECS Fargate, Lambda, Amplify, RDS, DynamoDB, and multi-AZ architecture',
    category: 'Skill',
    href: '/skills#aws',
    keywords: ['aws', 'cloud', 'infrastructure', 'ecs', 'lambda', 'amplify', 'fargate', 'cloudformation'],
  },
  {
    id: 'skill-backend',
    title: 'Backend Engineering',
    description: 'FastAPI, Python, TypeScript, Node.js, GraphQL, and REST APIs',
    category: 'Skill',
    href: '/skills#backend',
    keywords: ['backend', 'fastapi', 'python', 'typescript', 'nodejs', 'graphql', 'rest'],
  },
  {
    id: 'skill-data',
    title: 'Data Engineering & CRM',
    description: 'Data pipelines, Virtuous CRM, PubMed API, Playwright automation',
    category: 'Skill',
    href: '/skills#data',
    keywords: ['data', 'engineering', 'crm', 'pipelines', 'pandas', 'postgresql', 'playwright'],
  },
  {
    id: 'skill-frontend',
    title: 'Frontend',
    description: 'React, TypeScript, Tailwind CSS, real-time UI, dark mode',
    category: 'Skill',
    href: '/skills#frontend',
    keywords: ['frontend', 'react', 'typescript', 'tailwind', 'ui', 'ux', 'streamlit'],
  },
  {
    id: 'skill-compliance-frameworks',
    title: 'Compliance & Security Frameworks',
    description: 'FedRAMP, NIST, HIPAA, PCI-DSS, ISO, GDPR',
    category: 'Skill',
    href: '/skills#compliance',
    keywords: ['compliance', 'security', 'fedramp', 'nist', 'hipaa', 'pci', 'iso'],
  },
  {
    id: 'skill-leadership',
    title: 'Leadership & Strategy',
    description: 'Engineering teams, technology strategy, AI governance, vendor management',
    category: 'Skill',
    href: '/skills#leadership',
    keywords: ['leadership', 'strategy', 'team', 'management', 'cto', 'governance'],
  },

  // Experience roles
  {
    id: 'exp-pbtf',
    title: 'Senior Director of Technology at PBTF',
    description: 'Leading AI platform and technology strategy for pediatric brain tumor foundation',
    category: 'Experience',
    href: '/experience',
    keywords: ['pbtf', 'pediatric brain tumor', 'amazon q', 'director', 'current'],
  },
  {
    id: 'exp-rn-global',
    title: 'AI Platform Architect at RN Global Corp',
    description: 'Agentic AI systems and compliance architecture consulting',
    category: 'Experience',
    href: '/experience',
    keywords: ['rn global', 'consultant', 'trussed.ai', 'careborn', 'first ascent'],
  },
  {
    id: 'exp-witt',
    title: 'Fractional Head of Engineering at The WiTT Group',
    description: 'Healthcare and fintech SaaS platforms for cancer care institutions',
    category: 'Experience',
    href: '/experience',
    keywords: ['witt', 'healthcare', 'fintech', 'miami cancer institute'],
  },
  {
    id: 'exp-sims',
    title: 'Chief Technology Officer at SIMS Software',
    description: 'Mission-critical SaaS for federal agencies, 99.99% uptime, 1M+ transactions',
    category: 'Experience',
    href: '/experience',
    keywords: ['sims', 'cto', 'federal', 'defense', 'pentagon', 'fedramp'],
  },

  // High-level topics
  {
    id: 'topic-llm',
    title: 'LLM Systems & AI',
    description: 'Multi-agent orchestration, cost optimization, observability, compliance',
    category: 'Topic',
    href: '/skills#agentic-ai',
    keywords: ['llm', 'large language models', 'gpt', 'claude', 'ai', 'openai', 'anthropic'],
  },
  {
    id: 'topic-healthcare-ai',
    title: 'Healthcare AI & Compliance',
    description: 'HIPAA-aligned systems, clinical data, medical AI applications',
    category: 'Topic',
    href: '/compliance',
    keywords: ['healthcare', 'medical', 'clinical', 'hipaa', 'hitech', 'patients'],
  },
  {
    id: 'topic-defense',
    title: 'Defense & Federal Systems',
    description: 'FedRAMP, NIST 800-53, clearance workflows, high-security systems',
    category: 'Topic',
    href: '/compliance',
    keywords: ['defense', 'federal', 'fedramp', 'nist', 'dod', 'security clearance'],
  },
  {
    id: 'topic-nonprofits',
    title: 'Nonprofit Technology',
    description: 'AI adoption for nonprofits, fundraising, program management, impact measurement',
    category: 'Topic',
    href: '/teaching',
    keywords: ['nonprofit', 'ngo', 'foundation', 'careborn', 'fundraising', 'mission'],
  },
]

export function searchPortfolio(query: string): SearchResult[] {
  if (!query.trim()) return []

  const lowerQuery = query.toLowerCase().trim()
  return searchIndex.filter((item) => {
    const searchText = `${item.title} ${item.description} ${(item.keywords || []).join(' ')}`.toLowerCase()
    return searchText.includes(lowerQuery)
  })
}
