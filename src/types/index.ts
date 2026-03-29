export interface ImpactProject {
  id: string;
  category: 'youth' | 'governance' | 'media';
  categoryLabel: string;
  title: string;
  description: string;
  metric: string;
  partners: string;
}

export interface SpeakingTopic {
  number: string;
  title: string;
}

export interface SignatureTalk {
  numeral: string;
  title: string;
  abstract: string;
}

export interface Resource {
  id: string;
  type: 'pdf' | 'article' | 'video' | 'media';
  typeLabel: string;
  title: string;
  summary: string;
  link: string;
  tags: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Position {
  title: string;
  organization: string;
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Partner {
  name: string;
}

export interface StatItem {
  icon: string;
  number: string;
  label: string;
}
