import React from 'react';
import hi from "../assets/video/hi.mp4";
import useFetch from '../../hooks/useFetch';

function About() {

    const {loading, error, dataser} = useFetch('http://localhost:1337/api/abouts?populate=*');

  return (
    <div className='div__margin'>
        <video  src={"http://localhost:1337" + dataser?.data[0]?.attributes?.video?.data[0]?.attributes?.url} controls/>
           
      
    </div>
  )
}

export default About