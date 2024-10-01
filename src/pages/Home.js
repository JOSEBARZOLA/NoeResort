import React from 'react';
//components 
import Rooms from '../components/Rooms';
import BookForm from '../components/BookForm';
import HeroSlider from '../components/HeroSlider';


const Home = () => {
  return(
   <>
   <HeroSlider/>
   <div className='container mx-auto relative'>
    <div className='bg-pink-400/20 mt-4 p-4 lg:shadow-2xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30'>
    {/* <BookForm /> */} {/*quitar llave para descomentar  */}
    </div>
   </div>
  <Rooms/>
  </>);
};

export default Home;
