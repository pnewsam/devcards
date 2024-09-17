import React from "react";
import { ChunkedFlashcards } from "./ChunkedFlashcards";
import type { Card } from "../models/Card";
import { useFilterStore } from "@/stores/filters";

export const FlashcardsPages = ({ cards = [] }: { cards: Card[] }) => {
  const categoryFilters = useFilterStore((state) => state.categoryFilters);
  const tagFilters = useFilterStore((state) => state.tagFilters);
  const cardIdFilters = useFilterStore((state) => state.cardIdFilters);

  const filteredCards = React.useMemo(() => {
    if (
      categoryFilters.length === 0 &&
      tagFilters.length === 0 &&
      cardIdFilters.length === 0
    )
      return cards;

    const catFilters = categoryFilters.filter((filter) =>
      cards.some((card) => card.category === filter)
    );
    const tFilters = tagFilters.filter((filter) =>
      cards.some((card) => card.tags.includes(filter))
    );
    const idFilters = cardIdFilters.filter((filter) =>
      cards.some((card) => card.id.toString() === filter)
    );

    return cards.filter((card) => {
      if (idFilters.length > 0) {
        return idFilters.includes(card.id.toString());
      }

      const categoryMatch =
        catFilters.length === 0 || catFilters.includes(card.category);
      const tagMatch =
        tFilters.length === 0 ||
        card.tags.some((tag) => tFilters.includes(tag));

      return categoryMatch && tagMatch;
    });
  }, [cards, categoryFilters, tagFilters, cardIdFilters]);

  return <ChunkedFlashcards cards={filteredCards} />;
};
