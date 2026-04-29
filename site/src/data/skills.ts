export interface SkillCategory {
  title: string
  description: string
  keyPoints: string[]
  tools: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Agentic AI & Orchestration',
    description: 'Multi-agent AI systems operating under real-world constraints with orchestration across workflows involving ambiguity, state, and external data.',
    keyPoints: [
      'Design and build multi-agent systems with LangGraph and LangChain',
      'Stateful agent memory and workflow orchestration',
      'Full observability through logs, traces, and cost tracking',
      'Failure handling and retry strategies across agent chains',
      'Latency and cost optimization (achieved 30% LLM inference cost reduction)',
      'Specialized agents for validation, tone, accuracy, and Q&A',
    ],
    tools: 'LangGraph, LangChain, LangSmith, LangFuse, MCP, OpenAI API, Anthropic Claude API, Amazon Bedrock, CrewAI',
  },
  {
    title: 'Healthcare Data & Compliance',
    description: 'Healthcare data work requiring discipline and governance. Built HIPAA-aligned systems handling FHIR, EHR, HL7, and clinical literature.',
    keyPoints: [
      'HIPAA-aligned data pipelines integrating structured and unstructured data',
      'PII detection and redaction before LLM calls',
      'RBAC policy enforcement middleware',
      'Immutable audit logging and chain-of-custody trails',
      'Data minimization patterns across fragmented sources',
      'Human-in-the-loop gates on high-stakes outputs',
    ],
    tools: 'Amazon Q Business, FHIR R4, HL7, pgvector, PostgreSQL, DynamoDB, AWS Lambda, LangGraph, Claude API, PubMed API, ScienceDirect, Virtuous CRM API',
  },
  {
    title: 'Cloud & Infrastructure (AWS-Focused)',
    description: 'AWS experience spanning healthcare nonprofits, federal defense, and AI platform deployment. Architect and build, not just configure.',
    keyPoints: [
      'ECS Fargate for containerized AI services',
      'ALB for load balancing and health checks',
      'Amplify for frontend CI/CD',
      'Cognito for authentication',
      'DynamoDB for operational data',
      'PostgreSQL on RDS for vector search',
      'Lambda for event-driven workflows',
      'Athena for analytics queries',
      'SNS/SQS for event-driven architecture',
      'CloudFormation and CDK for infrastructure as code',
      'Multi-AZ high-availability architecture',
    ],
    tools: 'ECS Fargate, ALB, Amplify, App Runner, Cognito, S3, DynamoDB, PostgreSQL (RDS), Lambda, Athena, SNS, SQS, CloudWatch, CloudFront, ECR, API Gateway, CloudFormation, CDK, Secrets Manager, AWS GovCloud',
  },
  {
    title: 'Backend Engineering',
    description: 'Python-primary with deep .NET experience and TypeScript/Node.js for Lambda and servers.',
    keyPoints: [
      'FastAPI microservices with async/await and REST APIs',
      'Real-time SSE streaming for AI observability',
      'Pydantic v2 for schema validation',
      'asyncio for concurrent request handling',
      'Async/sync boundary bridging with executors',
      'ASP.NET Core for federal clients',
      'Custom DLLs and SDKs for hardware integrations',
      'GraphQL and AppSync for multi-user systems',
    ],
    tools: 'Python, FastAPI, TypeScript, Node.js, Express, C#, ASP.NET Core, Pydantic v2, REST, GraphQL, AppSync, WebSockets, SSE',
  },
  {
    title: 'Data Engineering & CRM Systems',
    description: 'Production data pipelines that run in operations and feed decisions.',
    keyPoints: [
      'Multi-platform financial reconciliation',
      'CRM analytics with Virtuous and custom systems',
      'Playwright browser automation for data extraction',
      'Bank reconciliation and GL entry verification',
      'Large-scale biomedical research ingestion',
      'PubMed API integration and deduplication',
      'Full-text PDF extraction and normalization',
    ],
    tools: 'Python, Pandas, SQLite, PostgreSQL, pgvector, DynamoDB, Playwright, Virtuous CRM API, PubMed API, Consensus AI, Streamlit dashboards',
  },
  {
    title: 'Frontend',
    description: 'Production-standard frontend interfaces. React with TypeScript primary, Streamlit for internal/operational.',
    keyPoints: [
      'Real-time SSE event stream rendering',
      'Multi-step progress visualization with timers',
      'Per-agent pipeline visualization and observability panels',
      'Interactive document viewers and timeline UX',
      'Collaborative notes and task management',
      'Dark theme support',
      'AppContext with useReducer and localStorage',
    ],
    tools: 'React 18, TypeScript, Vite, Tailwind CSS, Streamlit, Angular, Material Design, Headless UI, Lucide Icons, SSE, CSS custom properties',
  },
  {
    title: 'Compliance & Security Frameworks',
    description: 'Operational experience from systems where non-compliance had real consequences.',
    keyPoints: [
      'FedRAMP Moderate and NIST 800-53 for federal systems',
      'HIPAA-aligned architecture for healthcare',
      'PCI-DSS for fintech systems',
      'SAML 2.0, OAuth 2.0, LDAP, CAC SSO',
      'Zero-trust architectures for DoD systems',
      'LLM compliance middleware design',
      'AI governance and ethics frameworks',
      'NIST AI Risk Management Framework',
    ],
    tools: 'FedRAMP Moderate, NIST 800-53, ISO 9001, HIPAA, HITRUST principles, PCI-DSS, SOC 2, NIST AI RMF, CMMC 2.0, GDPR',
  },
  {
    title: 'Leadership & Strategy',
    description: 'Led engineering organizations, consulting practices, and nonprofit technology functions.',
    keyPoints: [
      'Built and scaled 30+ person engineering organizations',
      'Established career ladders and performance frameworks',
      'Technology roadmapping and strategy',
      'AI governance and ethics leadership',
      'Stakeholder communication across technical and non-technical audiences',
      'Technical due diligence and vendor evaluation',
      'Build vs. buy decisions',
      'Mentoring and structured roadmaps',
    ],
    tools: 'Team leadership, technology strategy, OKR planning, vendor management',
  },
]
