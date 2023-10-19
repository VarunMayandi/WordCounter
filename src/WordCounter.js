
import React, { useState } from 'react';
import './WordCounter.css'; 

const WordCounter = () => {
  const [paragraph, setParagraph] = useState('');

  const countWords = () => {
    const words = paragraph.split(/\s+/);
    return words.length-1;
  };

  return (
    <div className="WordCounter">
      <textarea
        placeholder="Enter your paragraph here..."
        value={paragraph}
        onChange={(e) => setParagraph(e.target.value)}
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
};

export default WordCounter;
