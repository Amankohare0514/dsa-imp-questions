// pages/index.js
import React from 'react';

function Topten() {
  const questions = [
    { id: 1, text: 'Reverse a Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/' },
    { id: 2, text: 'Search in Rotated Sorted Array', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' },
    { id: 3, text: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
    { id: 4, text: 'find the duplicate number', link: 'https://leetcode.com/problems/find-the-duplicate-number/' },
    { id: 5, text: 'best time to buy and sell stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
    { id: 6, text: 'middle of the linked list', link: 'https://leetcode.com/problems/middle-of-the-linked-list/description/' },
    { id: 7, text: 'spiral matrix', link: 'https://leetcode.com/problems/spiral-matrix/' },
    { id: 8, text: 'Nth node from end of linked list', link: 'https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1' },
    { id: 9, text: 'chocolate distribution problem', link: 'https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1' },
    { id: 10, text: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Top 10 Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map(question => (
          <div key={question.id} className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl text-black dark:text-white font-semibold mb-2">{question.id}- {question.text}</h3>
              <a href={question.link} target='_blank' className="text-blue-500 hover:underline">Question link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Topten