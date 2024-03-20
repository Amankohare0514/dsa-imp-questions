import React from 'react';

function Array() {
  const questions = [
    { id: 1, text: 'Find the Duplicate Number', link: 'https://leetcode.com/problems/find-the-duplicate-number/description/' },
    { id: 2, text: 'Remove Duplicates from Sorted Array', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/' },
    { id: 3, text: 'Set Matrix Zeroes', link: 'https://leetcode.com/problems/set-matrix-zeroes/description/' },
    { id: 4, text: 'Move Zeroes', link: 'https://leetcode.com/problems/move-zeroes/description/' },
    { id: 5, text: 'best time to buy and sell stock II', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/' },
    { id: 6, text: '3 Some', link: 'https://leetcode.com/problems/3sum/' },
    { id: 7, text: 'Spiral Matrix', link: 'https://leetcode.com/problems/spiral-matrix/' },
    { id: 8, text: 'Insert Delete GetRandom O(1) - Duplicates allowed', link: 'https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/' },
    { id: 9, text: 'Game of life', link: 'https://leetcode.com/problems/game-of-life/' },
    { id: 10, text: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Top 10 Array Questions</h1>
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
export default Array