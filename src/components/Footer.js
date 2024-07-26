import React from 'react';
//logo
import LogoWhite from '../assets/img/logo-white.svg'

const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className='container mx-auto text-white flex justify-between '> 
{/*logo */}
<a href='/'>
<img src={LogoWhite} alt=''/>
</a>
Copyright Jose Barzola&copy; 2024. All right reserved.
    </div>
  </footer>;
};

export default Footer;
