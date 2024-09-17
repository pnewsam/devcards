import React from "react";
import { ChunkedFlashcards } from "./ChunkedFlashcards";
import type { Card } from "../models/Card";
import { useFilterStore } from "@/stores/filters";

export const FlashcardsPages = ({ cards = [] }: { cards: Card[] }) => {
  const { categoryFilters, tagFilters, cardIdFilters } = useFilterStore();

  const filteredCards = React.useMemo(() => {
    if (
      categoryFilters.length === 0 &&
      tagFilters.length === 0 &&
      cardIdFilters.length === 0
    )
      return cards;

    return cards.filter((card) => {
      if (cardIdFilters.length > 0) {
        return cardIdFilters.includes(card.id.toString());
      }
      const categoryMatch =
        categoryFilters.length === 0 || categoryFilters.includes(card.category);
      const tagMatch =
        tagFilters.length === 0 ||
        card.tags.some((tag) => tagFilters.includes(tag));
      return categoryMatch && tagMatch;
    });
  }, [cards, categoryFilters, tagFilters, cardIdFilters]);

  return <ChunkedFlashcards cards={filteredCards} />;
};
