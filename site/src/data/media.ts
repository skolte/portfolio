export interface MediaAppearance {
  title: string
  outlet: string
  type: 'Video Interview' | 'Panel' | 'Podcast' | 'Article' | 'Conference Talk'
  date: string
  description: string
  url?: string
  youtubeId?: string
  tags: string[]
}

export const mediaAppearances: MediaAppearance[] = [
  {
    title: 'CureFest Interview — AI & Pediatric Cancer Advocacy',
    outlet: 'CureFest / YouTube',
    type: 'Video Interview',
    date: '2024',
    description: 'Interviewed at CureFest about the intersection of AI technology and pediatric cancer advocacy. Discussed how technology and data can be used to improve outcomes for children with cancer, support families, and advance research equity.',
    url: 'https://www.youtube.com/watch?v=tCGMoLharlI',
    youtubeId: 'tCGMoLharlI',
    tags: ['Pediatric Cancer', 'AI for Good', 'Healthcare', 'CareBORN'],
  },
  {
    title: 'Unlocking AI for Impact: Real-World Applications in Nonprofits',
    outlet: 'CAC2 Summit — Coalition Against Childhood Cancer',
    type: 'Conference Talk',
    date: 'June 2024',
    description: 'Co-presented with Geoff Still (CEO, Pediatric Brain Tumor Foundation) at the CAC2 annual summit in Washington D.C. Covered real-world AI applications for nonprofits: donor engagement automation, HIPAA-aware AI layers, grant proposal generation, and compliance risk flagging.',
    tags: ['Nonprofit AI', 'Pediatric Cancer', 'CAC2', 'Washington D.C.'],
  },
  {
    title: 'AI for Nonprofit Organizations — Panel Discussion',
    outlet: 'AWS Nonprofit AI Panel',
    type: 'Panel',
    date: '2024',
    description: 'Participated as a panelist on AI adoption for mission-driven organizations. Discussed practical starting points for nonprofits exploring AI, data readiness requirements, privacy considerations, and vendor evaluation frameworks.',
    tags: ['AWS', 'Nonprofit', 'AI Adoption', 'Panel'],
  },
]
