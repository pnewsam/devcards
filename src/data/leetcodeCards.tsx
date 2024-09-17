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
    tags: [],
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
    tags: [],
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
  {
    id: 88,
    question: "88. Merge Sorted Array",
    questionDescription:
      "Merge two sorted arrays nums1 and nums2 into nums1. nums1 has extra space at the end to accommodate nums2. The final array should be sorted in non-decreasing order.",
    subject: "Leetcode",
    category: "Easy",
    tags: ["Top Interview 150"],
    answer: (
      <>
        <CodeSnippet
          code={`class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
	a, b, write_index = m-1, n-1, m + n - 1

	while b >= 0:
		if a >= 0 and nums1[a] > nums2[b]:
			nums1[write_index] = nums1[a]
			a -= 1
		else:
			nums1[write_index] = nums2[b]
			b -= 1

		write_index -= 1`}
          language="python"
        />
        <Note>
          Notes: Start from the end of the array and work backwards. This way we
          don't overwrite any values in nums1.
        </Note>
      </>
    ),
  },
  {
    id: 27,
    question: "27. Remove Element",
    questionDescription:
      "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed. Return the number of elements in nums which are not equal to val. Example 1: Input: nums = [3,2,2,3], val = 3 Output: 2, nums = [2,2,_,_]",
    subject: "Leetcode",
    category: "Easy",
    tags: ["Top Interview 150"],
    answer: (
      <>
        <CodeSnippet
          code={`class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0
        for num in nums:
            if num != val:
                nums[k] = num
                k += 1
        return k`}
          language="python"
        />
      </>
    ),
  },
  {
    id: 125,
    question: "125. Valid Palindrome",
    questionDescription:
      "A phrase is a palindrome if, after converting all uppercase letters to lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise.",
    subject: "Leetcode",
    category: "Easy",
    tags: ["Top Interview 150"],
    answer: (
      <CodeSnippet
        code={`def isPalindrome(self, s):
    l, r = 0, len(s)-1
    while l < r:
        while l < r and not s[l].isalnum():
            l += 1
        while l <r and not s[r].isalnum():
            r -= 1
        if s[l].lower() != s[r].lower():
            return False
        l +=1; r -= 1
    return True`}
        language="python"
      />
    ),
  },
];

const mediumCards: Card[] = [
  {
    id: 1657,
    subject: "Leetcode",
    category: "Medium",
    question: "1657. Determine if Two Strings Are Close",
    tags: [],
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
    tags: [],
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
