export interface ExperienceRole {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  details?: string
}

export const experienceRoles: ExperienceRole[] = [
  {
    title: 'AI Product Builder',
    company: 'LegalZoom',
    period: 'Jan 2026 – Present',
    description: 'Building AI-native internal tools that automate complex legal and marketing workflows. Full-stack engineer designing and shipping end-to-end applications using Claude API, React, Node.js, and modern web tooling.',
    highlights: [
      'Architected and shipped USPTO Office Action Response Tool for trademark attorneys — reduces manual research time by automating PDF parsing, refusal classification, and AI-powered DuPont factor analysis',
      'Designed and built Marketing Brief Builder as Step 1 of 14-step AI-native Marketing Acceleration Suite (MAS); conversational agent interface exports structured briefs to Google Docs',
      'Built Email Review Agent automating template QA against brand standards; reduces manual review cycle for marketing team',
      'Developed conversational AI assistant for email design iteration and brand-aware design recommendations',
      'Designed full architecture for LZLS Trademark Intake Application covering form design, data modeling, and workflow routing',
      'Built specimen collection tool for trademark use-based applications with automated compliance checks',
      'Developed Figma plugin for side-by-side design version comparison, addressing design review workflow pain points',
      'Built URL validation web application for bulk QA across web properties',
      'Direct collaboration with attorneys, paralegals, CMO-level stakeholders, and cross-functional teams',
    ],
  },
  {
    title: 'Senior Director of Technology and Artificial Intelligence',
    company: 'Pediatric Brain Tumor Foundation',
    period: 'Aug 2025 – Present',
    description: 'Leading AI platform strategy and hands-on engineering for systems supporting pediatric brain tumor patients, families, and nonprofit operations.',
    highlights: [
      'Designed and deployed production AI-powered patient navigation system (Amazon Q Business) with HIPAA-aligned guardrails',
      'Built multi-agent workflows using LangGraph for patient navigation and resource discovery',
      'Developed family engagement analytics platform over 18,452 records tracking $2.1M+ in assistance',
      'Architected HIPAA-aligned data pipelines integrating clinical, nonprofit, and operational data sources',
      'Reduced LLM inference cost by 30% through prompt and retrieval optimization',
      'Established full LLM observability stack with prompt tracking, token consumption, cost attribution',
      'Architected AWS infrastructure (ECS Fargate, Lambda, Amplify, Cognito, PostgreSQL, DynamoDB)',
      'Launched AI Workflows for Nonprofits paid training series on Teachable; free webinar April 2026',
    ],
  },
  {
    title: 'AI Platform Architect, Agentic Systems and Governance',
    company: 'RN Global Corp',
    period: 'Dec 2024 – Jul 2025',
    description: 'Independent AI consulting practice working with clients on agentic AI systems and compliance architecture.',
    highlights: [
      'Designed multi-agent systems using LangGraph with supervisor patterns and stateful orchestration',
      'Integrated LLM compliance controller middleware for PII/PHI detection, redaction, audit logging',
      'Built multi-agent insurance claims pipeline routed through compliance layer (Trussed.AI)',
      'Built PubMed and Consensus AI biomedical research ingestion system (First Ascent BioMedical)',
      'Designed six-layer multi-agent platform for pediatric cancer family support (CareBORN)',
      'Implemented LLM evaluation pipelines with human-in-the-loop validation gates',
    ],
  },
  {
    title: 'Fractional Head of Engineering',
    company: 'The WiTT Group',
    period: 'Jun 2023 – Oct 2024',
    description: 'Consulting engagement on healthcare and fintech SaaS platforms for cancer care institutions.',
    highlights: [
      'Architected multi-tenant cloud platform for patient financial assistance workflows',
      'Built HIPAA-compliant AI-driven engagement systems for patient communication',
      'Designed event-driven backend using SNS/SQS for asynchronous workflows',
      'Implemented PCI-compliant payment systems with Stripe',
      'Improved agile delivery velocity by 30% through sprint restructuring',
      'Delivered platform MVP in 120 days',
    ],
  },
  {
    title: 'Chief Technology Officer',
    company: 'SIMS Software',
    period: 'Oct 2018 – Feb 2025',
    description: 'Led architecture, engineering, and delivery of mission-critical SaaS platform for federal agencies.',
    highlights: [
      'Scaled platform to support 1M+ secure daily transactions with 99.99% uptime',
      'Led transformation of legacy monolith to cloud-native microservices (40% throughput improvement, 40% latency reduction)',
      'Built SIMS Dashboards analytics platform for national security users',
      'Embedded FedRAMP Moderate, NIST 800-53, ISO 9001 controls across SDLC',
      'Built and scaled 30+ person engineering organization with career frameworks',
      'Reduced production defect rate by 35% through AI-assisted code review and DevSecOps',
    ],
  },
  {
    title: 'Director of Engineering',
    company: 'SIMS Software',
    period: 'Oct 2015 – Sep 2018',
    description: 'Led engineering organization and modernization initiatives.',
    highlights: [
      'Led cloud migration of legacy defense systems to distributed architectures',
      'Introduced DevOps, CI/CD pipelines, and infrastructure as code',
      'Built analytics and decision-support systems for compliance workflows',
      'Established engineering quality and architecture standards',
    ],
  },
  {
    title: 'Senior Software Engineer → Software Engineer',
    company: 'SIMS Software',
    period: 'Oct 2005 – Sep 2015',
    description: 'Built enterprise applications for federal defense clients.',
    highlights: [
      'Built security clearance and personnel compliance applications',
      'Modernized legacy systems using .NET, C#, and JavaScript',
      'Created internal automation tools and developer productivity frameworks',
      'Progressed to tech lead across multiple product lines',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Rodopi Software',
    period: 'Jan 2004 – Sep 2005',
    description: 'Backend services and billing systems for fintech infrastructure.',
    highlights: [
      'Built backend services for fintech platform',
      'Developed billing systems for subscription and transaction processing',
    ],
  },
]

export const speaking = [
  {
    event: 'AWS re:Invent',
    topic: 'AI for Nonprofits with AWS — AI-assisted developer workflows',
    year: 2024,
  },
  {
    event: 'CAC2 Annual Summit',
    topic: 'Practical applications of generative AI for nonprofit operations',
    year: 2024,
  },
  {
    event: 'PBTF Foundation Partner Network',
    topic: 'AI adoption workshop for national network of pediatric cancer foundations',
    year: 2025,
  },
  {
    event: 'AI Workflows for Nonprofits (Teachable)',
    topic: 'Paid training series for nonprofits; free launch webinar',
    year: 2026,
  },
]
