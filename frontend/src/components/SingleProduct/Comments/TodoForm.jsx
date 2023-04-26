import React,{useState,useRef,useEffect} from 'react'
import './todo.scss';
export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("");
    const textareaRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
       if(value){
        addTodo(value);
        setValue("");
    }
    }

    useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [value]);

  return (
    <form className='todoform' onSubmit={handleSubmit} >
        <textarea type="text" rows="2" value={value} ref={textareaRef} onChange={(e) => {setValue(e.target.value)}} placeholder='Write Your Review here...'/>
        <button type='submit'>Submit</button>
    </form>
  )
}
