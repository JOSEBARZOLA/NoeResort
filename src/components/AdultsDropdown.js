import React, { useContext } from 'react';
//room context
import { RoomContext } from '../context/RoomContext';
//headless ui menu
import { Menu } from '@headlessui/react';
//icons
import { BsChevronDown } from 'react-icons/bs';

const lis = [
{name: '1 adult'},
{name: '2 adults'},
{name: '3 adults'},
{name: '4 adults'},
];

const AdultsDropdown = () => {
  return ( <Menu as='div' className='w-full h-full bg-white relative'>
    {/* btn */}
    <Menu.Button className='w-full h-full flex item-center justify-between px-8'>Adults
    <BsChevronDown className='text-base text-accent-hover'/>
    </Menu.Button>
    {/* items */}
<Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
    {lis.map((li, index)=> {
    return ( <Menu.Item as='li' className='border-b last-of-type:border-b-0 h-12 hover:bg-accent 
    hover:text-white w-full flex justify-center item-center cursor-pointer' key={index}>
      

      {li.name}
    </Menu.Item>
    );
    
    })}
</Menu.Items>
  </Menu>
); 
};

export default AdultsDropdown;
