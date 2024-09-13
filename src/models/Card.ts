export type Card = {
  id: number;
  subject: string; // javascript, datastructures, leetcode
  category: string; // category within subject
  question: string;
  questionDescription?: string;
  answer: React.ReactNode;
};

export type Deck = Record<Card["category"], Card[]>;
