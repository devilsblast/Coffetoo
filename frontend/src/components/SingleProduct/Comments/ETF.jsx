import React, { useState , useEffect,useRef} from 'react'
import './todo.scss';
export const ETF = ({editTodo, task}) => {

    const [value, setValue] = useState(task.attributes.description);
    const textareaRef = useRef(null);
    
    const handleSubmit = (e) => {
        // prevent default action
          e.preventDefault();
          if (value) {
            // add todo
            editTodo(value,task.id);
            // clear form after submission
            setValue('');
          }
        };
        useEffect(() => {
          const textarea = textareaRef.current;
          if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
          }
        }, [value]);

  return (
    <form className='todoform' onSubmit={handleSubmit} >
    <textarea className='eta' type="text" rows="2" value={value} ref={textareaRef} onChange={(e) => setValue(e.target.value)}  placeholder='Update Task' />
    <button type="submit" className='todo-btn'>Update</button>
  </form>
  )
}
