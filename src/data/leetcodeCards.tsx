import type { Card, Deck } from "@/models/Card";
import { CodeSnippet } from "@/components/CodeSnippet";
import { Note } from "@/components/Note";
import groupBy from "lodash/groupBy";

const easyCards = [
  {
    id: 206,
    question: "206. Reverse Linked List",
    questionDescription:
      "Given the head of a singly linked list, reverse the list, and return the reversed list. Example 1: Input: head = [1,2,3,4,5] Output: [5,4,3,2,1]",
    subject: "Leetcode",
    category: "Easy",
    answer: (
      <>
        <CodeSnippet
          code={`class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        prev = None
        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next
        return prev`}
          language="javascript"
        />
        <Note>Notes: Remember to cache next before overwriting it.</Note>
      </>
    ),
  },
  {
    id: 136,
    question: "136. Single Number",
    questionDescription:
      "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. Example 1: Input: nums = [2,2,1] Output: 1",
    subject: "Leetcode",
    category: "Easy",
    answer: (
      <>
        <CodeSnippet
          code={`class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        xor = 0
        for num in nums:
            xor ^= num
        return xor`}
          language="python"
        />
        <Note>
          Notes: XOR against itself will always result in 00s. XOR against 00
          will always result in the number itself.
        </Note>
      </>
    ),
  },
];

const mediumCards: Card[] = [
  {
    id: 1657,
    subject: "Leetcode",
    category: "Medium",
    question: "1657. Determine if Two Strings Are Close",
    questionDescription:
      "Given two strings word1 and word2, return true if you can make word1 equal to word2 with one or more operations. In one operation, you can swap any two characters (unlimited occurrences) in word1.",
    answer: (
      <CodeSnippet
        className="text-[7px]"
        code={`class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        freq1 = [0] * 26
        freq2 = [0] * 26

        for ch in word1:
            freq1[ord(ch) - ord('a')] += 1

        for ch in word2:
            freq2[ord(ch) - ord('a')] += 1

        for i in range(26):
            if (freq1[i] == 0 and freq2[i] != 0) or (freq1[i] != 0 and freq2[i] == 0):
                return False

        freq1.sort()
        freq2.sort()

        for i in range(26):
            if freq1[i] != freq2[i]:
                return False

        return True`}
        language="python"
      />
    ),
  },
  {
    id: 215,
    subject: "Leetcode",
    category: "Medium",
    question: "215. Kth Largest Element in an Array",
    questionDescription:
      "Given an integer array nums and an integer k, return the kth largest element in the array. Example 1: Input: nums = [3,2,1,5,6,4], k = 2 Output: 5",
    answer: (
      <>
        <CodeSnippet
          className="text-[8px]"
          code={`class Solution:
    def findKthLargest(self, nums, k):
        if not nums: return
        pivot = random.choice(nums)
        left =  [x for x in nums if x > pivot]
        mid  =  [x for x in nums if x == pivot]
        right = [x for x in nums if x < pivot]
        
        L, M = len(left), len(mid)
        
        if k <= L:
            return self.findKthLargest(left, k)
        elif k > L + M:
            return self.findKthLargest(right, k - L - M)
        else:
            return mid[0]`}
          language="python"
        />
        <Note>
          Notes: This is a quickselect algorithm. It uses the same idea as
          quicksort.
        </Note>
      </>
    ),
  },
];

const leetcodeCards = [...easyCards, ...mediumCards];

export const leetcodeDeck = groupBy(leetcodeCards, "category") as Deck;
