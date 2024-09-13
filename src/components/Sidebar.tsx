import { useState, useMemo } from "react";

import type { Card, Deck } from "@/models/Card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { javascriptDeck } from "@/data/javascriptCards";
import { dataStructuresDeck } from "@/data/dataStructuresCards";
import { leetcodeDeck } from "@/data/leetcodeCards";

const deckBySubject: Record<string, Deck> = {
  javascript: javascriptDeck,
  "data-structures": dataStructuresDeck,
  leetcode: leetcodeDeck,
};

const getDeckBySubject = (subject: string) => {
  const deck = deckBySubject[subject];
  if (!deck) {
    return [];
  }
  return deck;
};

export const Sidebar = ({ subject }: { subject: string }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const deck = useMemo(() => {
    return getDeckBySubject(subject);
  }, [subject]);

  const allCategories = useMemo(() => {
    return Object.keys(deck);
  }, [deck]);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((c) => c !== category));
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  const filteredDeck = useMemo(() => {
    return Object.fromEntries(
      Object.entries(deck).filter(([category]) =>
        selectedCategories.includes(category)
      )
    );
  }, [deck, selectedCategories]);

  return (
    <div className="fixed top-0 left-0 bottom-0 z-10 w-52 bg-zinc-900 bg-opacity-90 text-white p-4 shadow-lg print:hidden">
      <nav className="flex flex-col h-full">
        <h1 className="text-xl font-bold mb-1">DevCards</h1>
        <p className="text-sm mb-4">Flash cards for developers</p>
        <ScrollArea className="h-[100px] rounded border p-4 mb-4 shadow-inner">
          <ul className="flex flex-col gap-1 text-xs">
            <li>
              <a href="/javascript">JavaScript</a>
            </li>
            <li>
              <a href="/data-structures">Data Structures</a>
            </li>
            <li>
              <a href="/leetcode">Leetcode</a>
            </li>
          </ul>
        </ScrollArea>
        <div className="flex flex-col gap-4">
          {allCategories.map((category) => (
            <div key={category}>
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-medium leading-5 mb-2">
                  {category}
                </h2>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => {
                    toggleCategory(category);
                  }}
                />
              </div>

              <ul className="flex flex-col gap-2 text-sm text-zinc-400">
                {deck[category].map((card: Card) => (
                  <li
                    key={card.id}
                    className="flex items-center justify-between gap-2"
                  >
                    <a className="hover:text-zinc-200" href={`#${card.id}`}>
                      {card.question}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
