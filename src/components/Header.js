import React, {useState, useEffect} from 'react';
//logo
import LogoWhite from '../assets/img/logo-white.png';
import LogoDark from '../assets/img/logo-dark.png';

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(()=> {
  window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  });
  });
  return(
   <header 
   className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
  } fixed z-50 w-full transition-all duration-500`}
  >
    <div className='container mx-auto flex  flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
{/* logo */}
<a >
{header ? (
<img className='w-[165px]' src={LogoDark} />)
: 
(<img className='w-[165px]' src={LogoWhite}/>
)}
</a>
{/*nav */}
<nav className={`${header ? 'text-primary' : ' text-white'
  } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
    <a href='/' className='hover:text-pink-600 transition'>Home</a>
    <a href='/' className='hover:text-pink-600 transition'>Habitaciones</a>
    <a href='/' className='hover:text-pink-600 transition'>Contacto</a>
  </nav>

  
    </div>
  </header>
  );
};

export default Header;
