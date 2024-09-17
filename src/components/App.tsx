import { Sidebar } from "./Sidebar";
import { FlashcardsPages } from "./FlashcardsPages";
import type { Card, Deck } from "@/models/Card";
import { dataStructuresDeck } from "@/data/dataStructuresCards";
import { javascriptDeck } from "@/data/javascriptCards";
import { leetcodeDeck } from "@/data/leetcodeCards";

const deckBySubject = (subject: string) => {
  switch (subject) {
    case "data-structures":
      return dataStructuresDeck;
    case "javascript":
      return javascriptDeck;
    case "leetcode":
      return leetcodeDeck;
  }
};
export const App = ({ subject }: { subject: string }) => {
  const deck = deckBySubject(subject);
  const cards = deck ? Object.values(deck).flat() : [];

  return (
    <div className="flex flex-col h-screen bg-zinc-100">
      <Sidebar subject={subject} />
      <div className="ml-52 px-8 print:ml-0 print:px-0">
        <FlashcardsPages cards={cards} />
      </div>
    </div>
  );
};
