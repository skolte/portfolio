export interface AboutSection {
  title: string
  content: string[]
}

export const aboutHero: AboutSection = {
  title: 'About Me',
  content: [
    'I\'m Sandeep Kolte — Senior Director of Technology and AI with 20+ years building mission-critical systems for defense, healthcare, and nonprofits.',
    'My career has taken me from building national security platforms for the Pentagon and White House to founding a pediatric cancer support organization. Along the way, I\'ve learned that the most important thing technology can do is give humans more time and capacity to do work that actually matters.',
    'That belief shapes everything I build and teach.',
  ],
}

export const aboutCareBORN: AboutSection = {
  title: 'The Work That Matters Most',
  content: [
    'When my son Neev was diagnosed with a pediatric brain tumor, our family entered a world most people don\'t know exists until they have to. Navigating the medical system, insurance, financial aid, clinical trial searches — all while managing fear and uncertainty — is overwhelming even for someone with technical knowledge and resources.',
    'Families without those advantages face the same crisis with far less support.',
    'That experience led me to found CareBORN — a HIPAA-compliant platform connecting pediatric cancer families with clinical resources, financial aid navigation, clinical trial matching, and peer support. And to establish the Neev Kolte & Brave Ronil Foundation, supporting pediatric brain tumor research and families.',
    'AI in CareBORN doesn\'t replace the human connection families need — it amplifies the capacity of the people providing support. When an AI system handles the first pass of a financial aid application, a social worker can spend that time with the family, not the paperwork.',
  ],
}

export const aboutBeyondIntent: AboutSection = {
  title: 'Beyond Intent',
  content: [
    'I also founded Beyond Intent — an organization that has supported more than 170 first-generation college students and raised over $500,000 toward their education. Beyond Intent reflects another part of what drives me: the belief that access changes lives.',
    'In different ways, both organizations are about the same thing — reducing the gap between potential and access, whether that gap is in education, support, or care.',
  ],
}

export const aboutDrives: AboutSection = {
  title: 'What Drives Me',
  content: [
    'What drives me beyond any title is the belief that technology should create more capacity for human beings, not more burden. The best systems do not just automate tasks. They give people back time, clarity, dignity, and better options.',
    'I am also someone who believes in teaching what I know. I have run the Kids Python Series for children learning to code, led AI adoption sessions for nonprofits, and spoken at AWS re:Invent and CAC2. If a system cannot be explained simply for non-technical audiences, it is not finished.',
  ],
}

export const education = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'San Diego State University',
  },
  {
    degree: 'Bachelor of Engineering, Computer Engineering',
    school: 'Pune University, India',
  },
]

export const certifications = [
  { name: 'Generative AI with LLMs', org: 'Coursera / DeepLearning.AI & AWS' },
  { name: 'Multi AI Agent Systems with CrewAI', org: 'Coursera / DeepLearning.AI' },
  { name: 'Building Multiple Agents with Bedrock', org: 'Educative.io' },
  { name: 'Ingesting FHIR Data with Healthcare API', org: 'Coursera / Google Cloud' },
  { name: 'Introduction to Clinical Data', org: 'Coursera / Stanford' },
  { name: 'Streaming Data Pipeline with Kafka', org: 'Educative.io' },
]
