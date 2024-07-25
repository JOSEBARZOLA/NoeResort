import React, {createContext, useEffect, useState} from 'react';
//data
import{roomData} from '../data';
//create context
export const RoomContext = createContext()

const RoomProvider = ({children}) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kids');
  const [total, setTotal] = useState(0);
  
  useEffect(()=>{
setTotal(Number(adults[0]) + Number(kids[0]));
  });
  console.log(total);
  return (
  <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids}}>{children}</RoomContext.Provider>);
};

export default RoomProvider;
