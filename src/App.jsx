import React, { use } from 'react'
import './App.css'
import { useState } from 'react'
const App = () => {
  const [text, setText] = useState("");
  const [characterCount,setCharacterCount] = useState(0);
  const [wordCount,setWordCount] = useState(0);
  const [sentenceCount,setSentenceCount] = useState(0);


  const handleTextChange =(e) => {
    const inputText = e.target.value;
    setText(inputText);

    //Calculate character count
    const characters = inputText.replace(/\s+/g, '');
    setCharacterCount(characters.length);

    //Calculate word count
    const words = inputText.trim().split(/\s+/).filter(word=>word.length>0);
    setWordCount(words.length);

    //Calculate sentence count
    const sentences = inputText
    .split(/[\n.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
    setSentenceCount(sentences.length);
  }

  const clearAll = () =>{
    setText("");
    setCharacterCount(0);
    setWordCount(0);
    setSentenceCount(0);
  }


  return (
    <div className="Container">
      <h1>Text Counter</h1>
      <div className="Container-middle">
        <div className="right">
          <textarea
            className="text-input"
            rows="6" value={text} onChange={handleTextChange}
            placeholder="Type your text here..."
          />
          <div className="button-div">
            <button className="clear-button" onClick={clearAll}>Clear</button>
          </div>
        </div>

        <div className="left">
          <div className="Container-middle-para">
            <h1>Results</h1>
          </div>
          <div className="flex-container">
            <div> <p><strong>Characters:</strong>{characterCount}</p></div>
            <div> <p><strong>Words:</strong>{wordCount}</p></div>
            <div> <p><strong>Sentences:</strong>{sentenceCount}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
