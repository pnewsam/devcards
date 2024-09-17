import type { Card } from "@/models/Card";
import  chunk  from "lodash/chunk";
import React from "react";
import { Page } from "@/components/Page";
import { FrontFace } from "@/components/FrontFace";
import { Flashcard } from "@/components/Flashcard";

const emptyCard = {
  id: 0,
  subject: "",
  category: "",
  question: "",
  tags: [],
  answer: <div></div>,
};


export const ChunkedFlashcards = ({ cards = [] }: { cards: Card[] }) => {
  const chunkedCards = chunk(cards, 3);

  console.log({ chunkedCards });

  return (
    <>
      {chunkedCards.map((chunk: Card[], index: number) => {
        if (chunk.length == 2) chunk = [...chunk, emptyCard];
        if (chunk.length == 1) chunk = [...chunk, emptyCard, emptyCard];
        if (chunk.length == 0) chunk = [emptyCard, emptyCard, emptyCard];

        return (
          <React.Fragment key={index}>
            <Page className="flex flex-col items-center justify-center overflow-hidden">
              {chunk.map((card: Card, cardIndex: number) => (
                <FrontFace key={cardIndex} card={card} />
              ))}
            </Page>
            <Page className="flex flex-col items-center justify-center overflow-hidden">
              {chunk.map((card: Card, cardIndex: number) => (
                <Flashcard key={cardIndex} id={card.id}>
                  {card.answer}
                </Flashcard>
              ))}
            </Page>
          </React.Fragment>
        );
      })}
    </>
  );
};
