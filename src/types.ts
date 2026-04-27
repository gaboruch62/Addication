import { ReactNode } from "react";

export interface NavLink {
  name: string;
  href: string;
}

export interface CBTKeyword {
  title: string;
  content: string;
}

export interface PsychologicalQuestion {
  q: string;
  options: { text: string; points: number }[];
  explanation: string;
}

export interface Book {
  title: string;
  author: string;
  desc: string;
  icon: ReactNode;
  cover: string;
  buyUrl: string;
}

export interface AddictionTypeItem {
  title: string;
  desc: string;
}

export interface SymptomBox {
  icon: ReactNode;
  title: string;
  list: string[];
}

export interface MythFact {
  m: string;
  f: string;
}

export interface PreventionItem {
  icon: ReactNode;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

export interface RecoveryStep {
  id: string;
  icon: ReactNode;
  title: string;
  desc: string;
  details: string;
  link: string;
  linkText: string;
  color: string;
  hasSearch?: boolean;
}

export interface SupportGroup {
  name: string;
  city: string;
  country: string;
  coords: [number, number];
}

export interface FAQItem {
  q: string;
  a: string;
}
