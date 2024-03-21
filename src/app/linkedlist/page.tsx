import React from 'react';

function LinkedList() {
  const questions = [
    { id: 1, text: 'Middle of the Linked List', link: 'https://leetcode.com/problems/middle-of-the-linked-list/description/' },
    { id: 2, text: 'Remove Duplicates from Sorted List', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/' },
    { id: 3, text: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/description/' },
    { id: 4, text: 'Add Two Numbers', link: 'https://leetcode.com/problems/add-two-numbers/description/' },
    { id: 5, text: 'Reverse Linked List', link: 'Reverse Linked List' },
    { id: 6, text: 'Remove Nth Node From End of List', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/' },
    { id: 7, text: 'Remove Duplicates from Sorted List II', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/' },
    { id: 8, text: 'Merge k Sorted Lists', link: 'https://leetcode.com/problems/merge-k-sorted-lists/description/' },
    { id: 9, text: 'Sort List', link: 'https://leetcode.com/problems/sort-list/description/' },
    { id: 10, text: 'Remove Linked List Elements', link: 'Remove Linked List Elements' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Top 10 LinkedList Questions</h1>
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
export default LinkedList