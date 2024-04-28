// import { url } from "inspector";
// import Image from "next/image";
// import backgroundimage from "home.svg";
// import backgroundImage from "eva_chevron-down-fill.svg";
// import Backgroundimage from "material-symbols-calendar-month-rounded.svg";
"use client";
import Component from "./component/component";
import {useState} from "react";



export default function Home() {
  const book=[{
    id:1,
    name:'Kigali new Dawn city',
    rooms:'rooms',
    baths:'bath',
    kitchen:'kitchen',
    office:'office',
    likes:0,
    dislike:0,
    
  },
  {
    id:1,
    name:'Kigali new Dawn city',
    rooms:'rooms',
    baths:'bath',
    kitchen:'kitchen',
    office:'office',
    likes:0,
    dislike:0,
  },
  {
    id:1,
    name:'Kigali new Dawn city',
    rooms:'rooms',
    baths:'bath',
    kitchen:'kitchen',
    office:'office',
    likes:0,
    dislike:0,
  },
  {
    id:1,
    name:'Kigali new Dawn city',
    rooms:'rooms',
    baths:'bath',
    kitchen:'kitchen',
    office:'office',
    likes:0,
    dislike:0,
  }];
  const[name,setName]=useState(book.name);
  const[div,setDiv]=useState(book);
  const[unlike,setUnlike]=useState(0);
  
  const[Office,setOffice]=useState(0);
  const[Bath,setBath]=useState(0);
  const[rooms,setRooms]=useState(0);
  const[kitchen,setKitchen]=useState(0);
  const bookn=(e)=>{
    e.preventDefault();
    console.log('before',book)
    setCandidates([...book,{bath:bath,office:office,rooms:rooms,kitchen:kitchen}]);
    setBath('');
    setKitchen('');
    setOffice('');
    setRooms('');
    console.log('after',book)
  
  }
  const booking=(book)=>{
    setDiv(book);
  }


  return (
<main>
    <div className=" bg-cover w-full"style={{
      backgroundImage:`url('/swimming pool.svg')`,
       height:`400px`,
      width:``,
      backgroundRepeat:`no-repeat`,
      


      
      }}>

      


  <p className="font-sans text-white text-xl font-bold p-20">Barefoot</p>




  
  <div className=" flex flex-row  gap-10 text-black font-sans h-15 w-5/6   bg-white 
  rounded-md mx-20 p-3 ">
    
<div className=" w-1/4 text-sm font-sans grid grid-col gap-2">
<p className="font-bold">Type</p>
<select className="w-full border border-slate-300 bg-white text-sm  text-slate-400  py-1 rounded-sm">
  <option value="1">Motel</option>
  <option value="2">Hotel</option>
  <option value="3">bar</option>
  <option value="4">restaurant</option>
</select>
</div>
<div className=" w-1/4 bg-white grid grid-col-1 gap-2">

<p className="font-bold">Location</p>
<select className="w-full border border-slate-300 bg-white text-sm  text-slate-400  py-1 rounded-sm">

  <option value="1">Kigali city</option>
  <option value="2">Bujumbura</option>
  <option value="3">brazaville</option>
  <option value="4">paris</option>
  <option value="5">mombasa city</option>
  <option value="6">nairobi city</option>
</select>
</div>
<div className=" w-1/4 bg-white grid grid-col-1 gap-2  ">

<p className="font-bold">Check In:</p>
<div className="w-full border border-slate-300 bg-white text-sm flex flex-row gap-2 text-slate-400 px-4 py-1 rounded-sm">
<input type="date" name="date" className="align-item-start"/>
</div>
</div>
<div className=" w-1/4 bg-white grid grid-col-1 gap-2 ">

<p className=" font-bold ">Check Out:</p>
<div className="w-full border border-slate-300 bg-white text-sm flex flex-row gap-2 px-4 text-slate-400  py-1 rounded-sm">
<input type="date" name="date" className="align-item-start"/>
</div>
</div>

<button className="bg-orange-600 p-4 rounded-md w-1/4 font-bold text-white">Search</button>
  </div>
 </div>
 <div className="  bg-red-50 mb-100 p-5"style={{       
        width:`100%`,
        height:`400px`,
        border:`none`,
}}>
 <div className="w-full bg-red-50 gap-10 p-5 h-800 flex flex-row gap-10">
      {book.map((hotel)=>{
  return(
  <Component hotel={()=>{booking(hotel)}} name={book.name} kitchen={book.kitchen} room={book.rooms} bath={book.bath}
  office={book.office}/>
  
  )
})}
 
  </div>
 </div>

</main>
  
  );
}

