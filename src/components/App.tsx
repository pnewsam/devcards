import { useState, useMemo } from "react";
import { javascriptDeck } from "@/data/javascriptCards";
import { dataStructuresDeck } from "@/data/dataStructuresCards";
import { leetcodeDeck } from "@/data/leetcodeCards";
import type { Card, Deck } from "@/models/Card";
import { FlashcardsPages } from "./FlashcardsPages";

const deckBySubject: Record<string, Deck> = {
  javascript: javascriptDeck,
  datastructures: dataStructuresDeck,
  leetcode: leetcodeDeck,
};
export default function App() {
  const [deck, setDeck] = useState(javascriptDeck);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...Object.keys(javascriptDeck),
    ...Object.keys(dataStructuresDeck),
    ...Object.keys(leetcodeDeck),
  ]);

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
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 bottom-0 z-10 w-52 bg-zinc-900 bg-opacity-90 text-white p-4 shadow-lg print:hidden">
        <nav className="flex flex-col h-full">
          <h1 className="text-xl font-bold mb-6">Flashcards App</h1>
          <select
            className="bg-zinc-700 bg-opacity-90 text-white px-3 py-2 rounded mb-4"
            onChange={(e) => {
              setDeck(
                deckBySubject[e.target.value as keyof typeof deckBySubject]
              );
            }}
          >
            <option value="javascript">JavaScript</option>
            <option value="datastructures">Data Structures</option>
            <option value="leetcode">Leetcode</option>
          </select>

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
      <main className="ml-52 px-8 print:ml-0 print:px-0">
        <FlashcardsPages cards={Object.values(filteredDeck).flat()} />
      </main>
    </div>
  );
}
