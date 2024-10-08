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
  const {adults, setAdults} = useContext(RoomContext);

  return ( <Menu as='div' className='w-full h-full bg-white relative'>
    {/* btn */}
    <Menu.Button className='w-full h-full flex items-center justify-between px-8'>{adults}
    <BsChevronDown className='text-base flex item-center text-accent-hover'/>
    </Menu.Button>
    {/* items */}
<Menu.Items as='ul' className='bg-white absolute  w-full flex flex-col z-40'>

    {lis.map((li, index)=> {
    return ( 
    <Menu.Item 
    onClick={()=>setAdults(li.name)}

    as='li' className='border-b last-of-type:border-b-0 h-12 hover:bg-pink-600 
    hover:text-white w-full flex justify-center items-center cursor-pointer' key={index}>
      

      {li.name}
    </Menu.Item>
    );
    
    })}
</Menu.Items>
  </Menu>
); 
};

export default AdultsDropdown;
