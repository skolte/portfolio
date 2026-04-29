'use client'

import { useState } from 'react'

interface Certificate {
  id: number
  title: string
  platform: string
  summary: string
  skills: string
}

interface Category {
  title: string
  icon: string
  count: number
  certs: Certificate[]
}

const categories: Category[] = [
  {
    title: 'AI & Multi-Agent Systems',
    icon: '🤖',
    count: 6,
    certs: [
      {
        id: 1,
        title: 'Generative AI with Large Language Models',
        platform: 'Coursera (DeepLearning.AI & AWS)',
        summary: 'Comprehensive understanding of generative AI and LLMs, covering the entire lifecycle from data gathering to deployment. Includes hands-on labs with AWS.',
        skills: 'Transformer architecture, fine-tuning, RLHF, AWS integration',
      },
      {
        id: 2,
        title: 'Building Multiple Agents Using CrewAI and Bedrock',
        platform: 'Educative.io',
        summary: 'Design and deploy CrewAI agents using Amazon Bedrock with foundational models and vector stores.',
        skills: 'Multi-agent systems, Amazon Bedrock, vector DBs',
      },
      {
        id: 3,
        title: 'Exploring OpenAI API',
        platform: 'Educative.io',
        summary: 'Applied GPT-3.5 for summarization, email generation, coding, and image creation.',
        skills: 'GPT-3.5, prompt engineering',
      },
      {
        id: 4,
        title: 'Mental Health Counseling Chatbot Using Django/OpenAI',
        platform: 'Educative.io',
        summary: 'Built an NLP-powered mental health chatbot with real-time support.',
        skills: 'OpenAI API, Django, chatbot development',
      },
      {
        id: 5,
        title: 'Multi AI Agent Systems with CrewAI',
        platform: 'Coursera (DeepLearning.AI)',
        summary: 'Coordinated multiple AI agents for collaborative workflows.',
        skills: 'Agent orchestration, task delegation',
      },
      {
        id: 6,
        title: 'Building Your Own Database Agent',
        platform: 'Coursera (DeepLearning.AI)',
        summary: 'Created GPT-based agents for autonomous database interactions.',
        skills: 'LLMs, RAG systems, database querying',
      },
    ],
  },
  {
    title: 'Healthcare & Clinical Data',
    icon: '🧠',
    count: 3,
    certs: [
      {
        id: 1,
        title: 'Ingesting FHIR Data with Healthcare API',
        platform: 'Coursera (Google Cloud)',
        summary: 'Ingested and analyzed FHIR data using Google Cloud\'s Healthcare API.',
        skills: 'FHIR standards, healthcare data pipelines',
      },
      {
        id: 2,
        title: 'Introduction to Clinical Data',
        platform: 'Coursera (Stanford)',
        summary: 'Medical data types (EMR, claims) and preprocessing for ML.',
        skills: 'Clinical informatics, data engineering',
      },
      {
        id: 3,
        title: 'Introduction to Healthcare',
        platform: 'Coursera (Stanford)',
        summary: 'Healthcare systems, payment models, and global comparisons.',
        skills: 'Health economics, system analysis',
      },
    ],
  },
  {
    title: 'Software Development',
    icon: '⚙️',
    count: 6,
    certs: [
      {
        id: 1,
        title: 'REST API with FastAPI for User Management',
        platform: 'Educative.io',
        summary: 'Built secure REST APIs with FastAPI and SQLAlchemy.',
        skills: 'FastAPI, authentication, database modeling',
      },
      {
        id: 2,
        title: 'Node and GraphQL',
        platform: 'Educative.io',
        summary: 'Developed GraphQL APIs with Node.js.',
        skills: 'GraphQL schemas, API security',
      },
      {
        id: 3,
        title: 'Agile Planning for Software Products',
        platform: 'Coursera (Alberta)',
        summary: 'Agile methodologies (Scrum/Kanban) for software projects.',
        skills: 'Sprint planning, backlog grooming',
      },
      {
        id: 4,
        title: 'Client Needs and Software Requirements',
        platform: 'Coursera (Alberta)',
        summary: 'Requirements gathering and documentation strategies.',
        skills: 'User stories, stakeholder analysis',
      },
      {
        id: 5,
        title: 'Software Processes and Agile Practices',
        platform: 'Coursera (Alberta)',
        summary: 'Modern SDLC models and iterative methodologies.',
        skills: 'Agile workflows, team roles',
      },
      {
        id: 6,
        title: 'Introduction to Software Product Management',
        platform: 'Coursera (Alberta)',
        summary: 'Product manager\'s role in software delivery.',
        skills: 'Roadmapping, stakeholder management',
      },
    ],
  },
  {
    title: 'Python & Data Science',
    icon: '🐍',
    count: 11,
    certs: [
      {
        id: 1,
        title: 'Programming for Everybody (Python)',
        platform: 'Coursera (Michigan)',
        summary: 'Python syntax, loops, functions, and variables.',
        skills: 'Python fundamentals',
      },
      {
        id: 2,
        title: 'Python Data Structures',
        platform: 'Coursera (Michigan)',
        summary: 'Lists, dictionaries, tuples, and strings.',
        skills: 'Data management',
      },
      {
        id: 3,
        title: 'Using Python to Access Web Data',
        platform: 'Coursera (Michigan)',
        summary: 'Web scraping and API interactions.',
        skills: 'BeautifulSoup, requests',
      },
      {
        id: 4,
        title: 'Using Databases with Python',
        platform: 'Coursera (Michigan)',
        summary: 'SQL integration with Python.',
        skills: 'SQLite, PostgreSQL',
      },
      {
        id: 5,
        title: 'Data Science Capstone',
        platform: 'Coursera (Michigan)',
        summary: 'End-to-end data processing project.',
        skills: 'Data pipelines, visualization',
      },
      {
        id: 6,
        title: 'Data Scientist\'s Toolbox',
        platform: 'Coursera (JHU)',
        summary: 'R, Git, and reproducible research.',
        skills: 'Version control, RStudio',
      },
      {
        id: 7,
        title: 'Exploratory Data Analysis',
        platform: 'Coursera (JHU)',
        summary: 'Visualization techniques for complex data.',
        skills: 'ggplot2, EDA',
      },
      {
        id: 8,
        title: 'R Programming',
        platform: 'Coursera (JHU)',
        summary: 'Foundation of programming in R.',
        skills: 'R syntax, functions',
      },
      {
        id: 9,
        title: 'Statistical Inference',
        platform: 'Coursera (JHU)',
        summary: 'Hypothesis testing and confidence intervals.',
        skills: 'Statistical analysis',
      },
      {
        id: 10,
        title: 'Reproducible Research',
        platform: 'Coursera (JHU)',
        summary: 'Replicable analysis with R Markdown.',
        skills: 'Literate programming',
      },
      {
        id: 11,
        title: 'Getting and Cleaning Data',
        platform: 'Coursera (JHU)',
        summary: 'Acquiring and preprocessing messy data.',
        skills: 'Data wrangling',
      },
    ],
  },
  {
    title: 'Cloud & Real-time Systems',
    icon: '☁️',
    count: 3,
    certs: [
      {
        id: 1,
        title: 'Streaming Data Pipeline With Kafka',
        platform: 'Educative.io',
        summary: 'Real-time streaming with Apache Kafka.',
        skills: 'Kafka architecture, Zookeeper',
      },
      {
        id: 2,
        title: 'Event Streaming with Kafka Visualization',
        platform: 'Educative.io',
        summary: 'IoT dashboards with Kafka and Python.',
        skills: 'Real-time visualization',
      },
      {
        id: 3,
        title: 'AWS Database Options',
        platform: 'Educative.io',
        summary: 'Compared DynamoDB, RDS, and Aurora.',
        skills: 'AWS database services',
      },
    ],
  },
]

export default function CertificatesPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggleCategory = (title: string) => {
    setExpanded(expanded === title ? null : title)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">📜 Professional Certifications</h1>
        <p className="text-lg text-slate-600">
          29 professional certifications across AI, healthcare, software engineering, and data science. Completed by April 2025.
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.title} className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleCategory(category.title)}
              className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-slate-900">{category.title}</h2>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-500">{category.count} certificates</span>
                <span className="text-slate-400">{expanded === category.title ? '−' : '+'}</span>
              </div>
            </button>

            {expanded === category.title && (
              <div className="divide-y divide-slate-200">
                {category.certs.map((cert) => (
                  <div key={`${category.title}-${cert.id}`} className="px-6 py-5 last:pb-6">
                    <h3 className="text-slate-900 font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Platform:</strong> {cert.platform}
                    </p>
                    <p className="text-sm text-slate-600 mb-3">{cert.summary}</p>
                    <p className="text-xs text-slate-500">
                      <strong>Skills:</strong> {cert.skills}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
