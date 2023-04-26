import React, { useEffect, useRef, useState } from 'react';
import "./WrongPage.scss";



export default function WrongPage() {

  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text); // or do whatever you want with the text
  }
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className=" div__margin">
    <form onSubmit={handleSubmit}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        style={{ height: 'auto' }}
      />
      <button type="submit">Submit</button>
      <div style={{ whiteSpace: 'pre-wrap' }}>{text}</div>
    </form>
    </div>
  )
};

