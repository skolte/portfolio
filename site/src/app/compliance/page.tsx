'use client'

import Link from 'next/link'

export default function CompliancePage() {
  const sections = [
    {
      title: 'Regulatory Frameworks & Standards',
      icon: '🔒',
      items: [
        'FedRAMP & NIST: Designed cloud platforms meeting FedRAMP High and NIST 800-53/171 for defense clients',
        'HIPAA/HITRUST: Built compliant healthcare platforms handling EHR/FHIR data',
        'PCI-DSS: Secured fintech applications with Stripe integrations and donor management',
        'AI Compliance: Built LLM compliance middleware for PII redaction and audit logging',
        'Global Standards: Implemented GDPR, ISO 27001/9001, and UK Cyber Essentials',
      ],
    },
    {
      title: 'Secure-by-Design Engineering',
      icon: '🛡️',
      items: [
        'Zero-Trust Architectures: For DoD systems and healthcare AI platforms',
        'LLM Security: Built PII redaction and audit trails for insurance claims automation',
        'Insider Threat: Predictive monitoring for defense and financial systems',
        'Access Control: RBAC with attribute-based policies for multi-tenant SaaS',
        'Audit Systems: End-to-end logging meeting HIPAA 6-year retention requirements',
      ],
    },
    {
      title: 'DevSecOps & Cloud Compliance',
      icon: '⚙️',
      items: [
        'AI Pipeline Security: Containerized LLM deployments with vulnerability scanning',
        'Cloud Guardrails: AWS GuardDuty, CloudTrail, and custom compliance rulesets',
        'Infrastructure as Code: Terraform modules enforcing NIST/FedRAMP baselines',
        'Runtime Protection: Kubernetes policies for AI workloads and microservices',
        'Compliance Automation: CI/CD gates for SAST/DAST in GitHub Actions',
      ],
    },
    {
      title: 'Ethical AI & Responsible Innovation',
      icon: '🤖',
      items: [
        'Auditable AI: Designed compliance layers for insurance and healthcare LLMs',
        'Bias Mitigation: Fairness frameworks for healthcare eligibility systems',
        'RLHF Governance: Human oversight for sensitive decision-making',
        'Explainability: Model interpretability in clinical support tools',
        'Data Provenance: Tracking for training data in regulated domains',
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">🔐 Compliance, Privacy & Security</h1>
        <p className="text-lg text-slate-600">
          I architect solutions that meet rigorous standards like FedRAMP, HIPAA, NIST, PCI, and ISO while enabling innovation across defense, healthcare, fintech, and AI systems.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="border-l-4 border-indigo-600 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-slate-700 leading-relaxed">
                  <strong>{item.split(':')[0]}:</strong> {item.split(':').slice(1).join(':')}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200">
        <h3 className="text-xl font-bold text-slate-900 mb-3">Key Compliance Frameworks</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['FedRAMP Moderate', 'NIST 800-53', 'ISO 9001', 'HIPAA', 'HITRUST', 'PCI-DSS', 'SOC 2', 'GDPR'].map((fw) => (
            <div key={fw} className="px-4 py-2 bg-white rounded border border-indigo-200 text-sm font-medium text-slate-700 text-center">
              {fw}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-8 bg-slate-50 rounded-lg border border-slate-200 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Let's Build Secure, Compliant Systems</h3>
        <p className="text-slate-600 mb-6">That don't compromise innovation.</p>
        <Link href="/contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
