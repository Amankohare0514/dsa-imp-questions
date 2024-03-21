import React from 'react';

function Strings() {
  const questions = [
    { id: 1, text: 'Valid Parentheses', link: 'https://leetcode.com/problems/valid-parentheses/description/' },
    { id: 2, text: 'Longest Common Prefix', link: 'https://leetcode.com/problems/longest-common-prefix/description/' },
    { id: 3, text: 'Valid Palindrome II', link: 'https://leetcode.com/problems/valid-palindrome-ii/description/' },
    { id: 4, text: 'Integer to Roman', link: 'https://leetcode.com/problems/integer-to-roman/description/' },
    { id: 5, text: 'Reverse Words in a String', link: 'https://leetcode.com/problems/reverse-words-in-a-string/description/' },
    { id: 6, text: 'Group Anagrams', link: 'https://leetcode.com/problems/group-anagrams/description/' },
    { id: 7, text: 'Basic Calculator II', link: 'https://leetcode.com/problems/basic-calculator-ii/description/' },
    { id: 8, text: 'Integer to English Words', link: 'https://leetcode.com/problems/integer-to-english-words/description/' },
    { id: 9, text: 'Generate Parentheses', link: 'https://leetcode.com/problems/generate-parentheses/description/'},
    { id: 10, text: 'Distinct Subsequences', link: 'https://leetcode.com/problems/distinct-subsequences/description/' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Top 10 Strings Questions</h1>
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
export default Strings