import { useState, useMemo } from "react";
import type { Card, Deck } from "@/models/Card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { javascriptDeck } from "@/data/javascriptCards";
import { dataStructuresDeck } from "@/data/dataStructuresCards";
import { leetcodeDeck } from "@/data/leetcodeCards";
import { useFilterStore } from "@/stores/filters";

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
  const {
    categoryFilters,
    tagFilters,
    cardIdFilters,
    setCategoryFilters,
    setTagFilters,
    setCardIdFilters,
  } = useFilterStore();

  console.log({ cardIdFilters });

  const deck = useMemo(() => {
    return getDeckBySubject(subject);
  }, [subject]);

  const allCategories = useMemo(() => {
    return Object.keys(deck);
  }, [deck]);

  const allTags = useMemo(() => {
    return Array.from(
      new Set(
        Object.values(deck).flatMap((cards) =>
          cards.flatMap((card) => card.tags)
        )
      )
    );
  }, [deck]);

  const handleCategoryFilterToggle = (filter: string) => {
    const next = categoryFilters.includes(filter)
      ? categoryFilters.filter((f) => f !== filter)
      : [...categoryFilters, filter];
    setCategoryFilters(next);
  };

  const handleTagFilterToggle = (filter: string) => {
    const next = tagFilters.includes(filter)
      ? tagFilters.filter((f) => f !== filter)
      : [...tagFilters, filter];
    setTagFilters(next);
  };

  const handleCardIdFilterToggle = (cardId: number) => {
    const next = cardIdFilters.includes(cardId.toString())
      ? cardIdFilters.filter((f) => f !== cardId.toString())
      : [...cardIdFilters, cardId.toString()];
    console.log({ next });
    setCardIdFilters(next);
  };

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
        <div className="mb-4">
          <h2 className="text-sm font-semibold mb-2">Filters</h2>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                className={`text-xs px-2 py-1 rounded ${
                  categoryFilters.includes(category)
                    ? "bg-blue-500"
                    : "bg-zinc-700"
                }`}
                onClick={() => {
                  handleCategoryFilterToggle(category);
                }}
              >
                {category}
              </button>
            ))}
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`text-xs px-2 py-1 rounded ${
                  tagFilters.includes(tag) ? "bg-green-500" : "bg-zinc-700"
                }`}
                onClick={() => {
                  handleTagFilterToggle(tag);
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {Object.entries(deck).map(([category, cards]) => (
            <div key={category}>
              <h2 className="text-lg font-medium leading-5 mb-2">{category}</h2>
              <ul className="flex flex-col gap-2 text-sm text-zinc-400">
                {(cards as Card[]).map((card: Card) => (
                  <li
                    key={card.id}
                    className="flex items-center justify-between gap-2"
                  >
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cardIdFilters.includes(card.id.toString())}
                        onChange={() => {
                          handleCardIdFilterToggle(card.id);
                        }}
                        className="form-checkbox h-3 w-3 text-blue-500"
                      />
                      <a className="hover:text-zinc-200" href={`#${card.id}`}>
                        {card.question}
                      </a>
                    </label>
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
