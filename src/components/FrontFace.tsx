import { Flashcard } from "./Flashcard";
import type { Card } from "@/models/Card";

const tagColorsBySubject = {
  Leetcode: "bg-blue-100 border border-blue-500 text-blue-500",
  Javascript: "bg-yellow-100 border border-yellow-500 text-yellow-500",
  "Data Structures": "bg-green-100 border border-green-500 text-green-500",
  Algorithms: "bg-red-100 border border-red-500 text-red-500",
};

const tagColorsByCategory = {
  Easy: "bg-green-100 border border-green-500 text-green-500",
  Medium: "bg-yellow-100 border border-yellow-500 text-yellow-500",
  Hard: "bg-red-100 border border-red-500 text-red-500",
  "Memory Leaks": "bg-red-100 border border-red-500 text-red-500",
  "Event Listeners": "bg-blue-100 border border-blue-500 text-blue-500",
  Closures: "bg-purple-100 border border-purple-500 text-purple-500",
  Heaps: "bg-orange-100 border border-orange-500 text-orange-500",
};

const tagColorsByTag = {
  "Top Interview 150": "bg-zinc-100 border border-zinc-500 text-zinc-500",
};


export const FrontFace = ({ card }: { card: Card }) => {
  return (
    <Flashcard id={card.id} className="p-8">
      <div className="flex flex-col items-center justify-center h-full">
        {card.category && (
          <div className="flex flex-wrap gap-2 mb-2">
            <span
              key={card.subject}
              className={`${
                tagColorsBySubject[
                  card.subject as keyof typeof tagColorsBySubject
                ]
              } px-1 py-[2px] text-xs rounded-md`}
            >
              {card.subject}
            </span>
            <span
              key={card.category}
              className={`${
                tagColorsByCategory[
                  card.category as keyof typeof tagColorsByCategory
                ]
              } px-1 py-[2px] text-xs rounded-md`}
            >
              {card.category}
            </span>
            {(card.tags || []).map((tag) => (
              <span
                key={tag}
                className={`${
                  tagColorsByTag[tag as keyof typeof tagColorsByTag]
                } px-1 py-[2px] text-xs rounded-md`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-center text-2xl font-medium mb-2">
          {card.question}
        </h1>
        {card.questionDescription && (
          <p className="text-center text-sm text-gray-500">
            {card.questionDescription}
          </p>
        )}
      </div>
    </Flashcard>
  );
};