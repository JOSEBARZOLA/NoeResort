import React, {useContext} from 'react';
//context
import { RoomContext } from '../context/RoomContext';
//components
import Room from '../components/Room';

const Rooms = () => {
 const {rooms} = useContext(RoomContext);

  return <section className='py-24'>
  <div className='container mx-auto lg:px-0'>
    <div className='text-center'>
      <div className='font-tertiary uppercase text-[20px] tracking-[50px] mb-4'>Anita APART</div>
      <h2 className='font-primary text-[45px] mb-4'>Room & Suites</h2>
    </div>
{/* grid */}
<div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:max-0'>
  {rooms.map((room) => {
    return <Room room={room} key={room.id}/>;
  })}
</div>
  </div>
  </section>;
};

export default Rooms;