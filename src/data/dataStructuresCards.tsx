import type { Card, Deck } from "@/models/Card";
import groupBy from "lodash/groupBy";

export const dataStructuresCards: Card[] = [
  {
    id: 1,
    subject: "Data Structures",
    category: "Heaps",
    tags: [],
    question: "Heap - Definition",
    answer: (
      <div className="prose prose-sm">
        <p>
          A heap is a specialized tree-based data structure satisfying the heap
          property: the root node always contains the minimum (min heap) or
          maximum (max heap) value.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: "Heap - Explanation",
    subject: "Data Structures",
    category: "Heaps",
    tags: [],
    answer: (
      <div className="prose prose-sm">
        <p>
          A typical binary heap is a tree stored as a contiguous array. The tree
          is always complete, because it is filled from left to right -- meaning
          that the array is always contiguous.
        </p>
        <img src="P1N6_HeapTree.svg" alt="Heap Tree" />
        <p>
          Remember that the elements are{" "}
          <strong>not guaranteed to be ordered</strong> -- and it is different
          therefore from a <strong>sorted array</strong>. The only guarantee is
          that the root node is the minimum (min heap) or maximum (max heap)
          value.
        </p>
        <img src="P1N6_HeapTreeVariant.svg" alt="Heap Tree Variant" />
        <p>
          Heaps are optimized for{" "}
          <mark>fast operations against the root node</mark>: insertions (of new
          minimum), deletions (of minimum), and reads (of minimum).
        </p>
        <p>
          Contiguity of the array is maintained. When an element is deleted, it
          is replaced by the last element, which is then bubbled down to its
          correct place.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    question: "Heap - Implementation",
    subject: "Data Structures",
    category: "Heaps",
    tags: [],
    answer: (
      <div className="prose prose-sm">
        <p>Implementation requirements:</p>
        <ul>
          <li>
            <code>insert(element)</code>
          </li>
          <li>
            <code>extract_min()</code> (for min-heap) or{" "}
            <code>extract_max()</code> (for max-heap)
          </li>
          <li>
            <code>heapify()</code>
          </li>
          <li>
            <code>build_heap(array)</code>
          </li>
        </ul>
        <p>Implementation focus:</p>
        <ul>
          <li>Implement both min-heap and max-heap</li>
          <li>Array-based implementation</li>
          <li>Use heap to implement a priority queue</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    question: "Heap - Use Cases",
    subject: "Data Structures",
    category: "Heaps",
    tags: [],
    answer: (
      <div className="prose prose-sm">
        <p>Common use-cases for a min or max heap are:</p>
        <ul>
          <li>
            <mark>
              <strong>Priority queues</strong>: Where it is necessary only to
              access the highest priority item at any given time. Priority
              queues are commonly used in task scheduling.
            </mark>
          </li>
          <li>
            <strong>Dijkstra's shortest path algorithm</strong>: Where it is
            necessary to find the shortest path (minimum priority) from one node
            to all other nodes.
          </li>
          <li>
            <strong>Huffman coding</strong>: Where the most frequent elements
            get the shortest codes.
          </li>
          <li>
            <strong>Median finding algorithms</strong>: Where a min heap (less
            half) and max heap (greater half) are used in conjunction to track
            the middle two elements.
          </li>
          <li>
            <strong>Heap sort</strong>: Where a min heap is created (O(n) time)
            and then extracted from repeatedly (O(logn) time) to sort a list.
          </li>
        </ul>
        <p>
          It is worth noting that the "heap" referred to in program memory
          management - which is simply a contiguous block of memory allocated to
          a program - is distinct from the "heap" data structure described here.
          However, some memory allocators the memory <strong>within</strong>
          the heap employ min heaps to do so -- tracking the smallest available
          block of memory as the minimum.
        </p>
      </div>
    ),
  },
];

export const dataStructuresDeck = groupBy(
  dataStructuresCards,
  "category"
) as Deck;
