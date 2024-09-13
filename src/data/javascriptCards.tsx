import { CodeSnippet } from "@/components/CodeSnippet";
import type { Card, Deck } from "@/models/Card";
import groupBy from "lodash/groupBy";

export const javascriptCards: Card[] = [
  {
    id: 1,
    subject: "Javascript",
    category: "Memory Leaks",
    question: "Common Sources of Memory Leaks in Javascript",
    answer: (
      <div className="prose prose-sm">
        <p>What are some common sources of memory leaks in Javascript?</p>
        <ol className="text-xs">
          <li>
            <b>Unintended References</b>: Objects kept in memory due to
            unnecessary references.
          </li>
          <li>
            <b>Closures</b>: Capturing variables from outer scope, keeping them
            in memory longer than needed.
          </li>
          <li>
            <b>Event Listeners</b>: Not removing event listeners when no longer
            needed.
          </li>
          <li>
            <b>Timers and Intervals</b>: Not clearing timers or intervals,
            preventing garbage collection.
          </li>
          <li>
            <b>DOM References</b>: Keeping unnecessary DOM element references,
            preventing garbage collection.
          </li>
          <li>
            <b>Circular References</b>: Complex circular references can
            sometimes cause memory issues.
          </li>
          <li>
            <b>Cache Mismanagement</b>: Improper caching in long-running
            applications leading to memory bloat.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 2,
    question: "Unintended Reference",
    subject: "Javascript",
    category: "Memory Leaks",
    answer: (
      <div className="prose prose-sm">
        <p>Unintended Reference</p>
        <CodeSnippet
          code={`let leak = { bigData: new Array(1000000) };

function causeLeak() {
  someGlobalObject.reference = leak;
}

causeLeak();
  // Even after causeLeak() finishes, 'leak' is still referenced globally`}
          language="javascript"
        />
      </div>
    ),
  },
  {
    id: 3,
    question: "Closures",
    subject: "Javascript",
    category: "Memory Leaks",
    answer: (
      <div className="prose prose-sm">
        <p>Closures</p>
        <CodeSnippet
          code={`function outer() {
  let largeData = new Array(1000000);
  return function inner() {
    // This inner function captures largeData
    console.log(largeData.length);
  }
}

let closure = outer(); // largeData is now kept in memory`}
          language="javascript"
        />
      </div>
    ),
  },
  {
    id: 4,
    question: "Event Listeners",
    subject: "Javascript",
    category: "Memory Leaks",
    answer: (
      <div className="prose prose-sm">
        <p>Event Listeners</p>
        <CodeSnippet
          code={`function addHandler() {
  let element = document.getElementById('button');
  element.addEventListener('click', () => {
    // This listener keeps a reference to the element
  });
}

// If addHandler is called multiple times without removing listeners,
// it can cause a leak`}
          language="javascript"
        />
      </div>
    ),
  },
  {
    id: 5,
    question: "Closures",
    subject: "Javascript",
    category: "Memory Leaks",
    answer: (
      <div className="prose prose-sm">
        <p>Closures</p>
        <CodeSnippet
          code={`function outer() {
  let largeData = new Array(1000000);
  return function inner() {
    // This inner function captures largeData
    console.log(largeData.length);
  }
}

let closure = outer(); // largeData is now kept in memory`}
          language="javascript"
        />
      </div>
    ),
  },
  {
    id: 6,
    question: "Timers and Intervals",
    subject: "Javascript",
    category: "Memory Leaks",
    answer: (
      <div className="prose prose-sm">
        <p>Timers and Intervals</p>
        <CodeSnippet
          code={`function startTimer() {
  let largeObject = { /* ... */ };
  setInterval(() => {
    console.log(largeObject);
  }, 1000);
}

// The interval keeps largeObject in memory indefinitely`}
          language="javascript"
        />
      </div>
    ),
  },
  {
    id: 7,
    question: "DOM References",
    subject: "Javascript",
    category: "Memory Leaks",
    answer: (
      <div className="prose prose-sm">
        <p>DOM References</p>
        <CodeSnippet
          code={`let elements = {
  button: document.getElementById('button')
};

function removeButton() {
  document.body.removeChild(document.getElementById('button'));
  // The reference in 'elements' still prevents garbage collection
}`}
          language="javascript"
        />
      </div>
    ),
  },
  {
    id: 8,
    question: "Circular References",
    subject: "Javascript",
    category: "Memory Leaks",
    answer: (
      <div className="prose prose-sm">
        <p>Circular References</p>
        <CodeSnippet
          code={`function createCircularReference() {
  let obj = {};
  obj.self = obj;
  return obj;
}

let circularReference = createCircularReference();
// Even after the function returns, the circular reference prevents garbage collection`}
          language="javascript"
        />
      </div>
    ),
  },
  {
    id: 9,
    question: "Cache Mismanagement",
    subject: "javascript",
    category: "Memory Leaks",
    answer: (
      <div className="prose prose-sm">
        <p>Cache Mismanagement</p>
        <CodeSnippet
          code={`let cache = {};

function addToCache(key, value) {
  cache[key] = value;
}

// If addToCache is called repeatedly without removing old keys,
// the cache can grow indefinitely`}
          language="javascript"
        />
      </div>
    ),
  },
];

export const javascriptDeck: Deck = groupBy(javascriptCards, "category");
