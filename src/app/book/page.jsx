// import { url } from "inspector";
// import Image from "next/image";
// import backgroundimage from "home.svg";
// import backgroundImage from "eva_chevron-down-fill.svg";
// import Backgroundimage from "material-symbols-calendar-month-rounded.svg";
"use client";
import Component from "./component/component";
import {useState} from "react";



export default function Home() {

  const data=[
  {
    id:1,
    name:'Kigali new Dawn city',
    rooms:'2',
    baths:'2',
    kitchen:'2',
    office:'2',
    likes:0,
    dislike:0,
  },
  {
    id:2,
    name:' Dawn city',
    rooms:'2',
    baths:'2',
    kitchen:'2',
    office:'2',
    likes:0,
    dislike:0,
  },
  {
    id:3,
    name:'Selena',
    rooms:'2',
    baths:'2',
    kitchen:'2',
    office:'2',
    likes:0,
    dislike:0,
  }
];
  const[accomodation,setAccomodation]=useState({
    name:"",
    rooms:"",
    baths:"",
    price:"",
    kitchen:"",
    office:"",
    description:"",
    
  });
  const[accomodations,setAccomodations]=useState(data);
  const handleInputChange = (e) => {

    const name = e.target.name;
        const value = e.target.value;
     
        setAccomodation((prevFormData) => ({
          ...prevFormData,
          [name]: value,

        }
        ));
        console.log('value',value);
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data',accomodations);
        console.log('accomodation',accomodation);
        setAccomodations(prevData => [...prevData, accomodation]);
        setAccomodation({
    name: "",
    rooms:"",
    baths:"",
    price:"",
    kitchen:"",
    office:"",
    description:"",
          
        });
     console.log('accomodations',accomodations); 
     setShowForm(false);
    };
  
  
  const[name,setName]=useState(data.name);
  const[div,setDiv]=useState(data);
  
  
  const[Office,setOffice]=useState(0);
  const[Bath,setBath]=useState(0);
  const[rooms,setRooms]=useState(0);
  const[kitchen,setKitchen]=useState(0);
  const bookn=(e)=>{
    e.preventDefault();
    console.log('before',accomodations)
    setDiv([...bookn,{bath:Bath,office:Office,rooms:rooms,kitchen:kitchen}]);
    setBath('');
    kitchen('');
    Office('');
    setRooms('');
  
  }
  const booking=(book)=>{
    setDiv(data);
  }
const[showForm,setShowForm]=useState(false);


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
<select className="w-full border border-slate-300 bg-white text-sm  text-slate-400  p-2 rounded-sm">
  <option value="1">Motel</option>
  <option value="2">Hotel</option>
  <option value="3">bar</option>
  <option value="4">restaurant</option>
</select>
</div>
<div className=" w-1/4 bg-white grid grid-col-1 gap-2">

<p className="font-bold">Location</p>
<select className="w-full border border-slate-300 bg-white text-sm  text-slate-400  p-2 rounded-sm">

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
<div className="w-full border border-slate-300 bg-white text-sm flex flex-row gap-2 text-slate-400 px-4 p-2 rounded-sm">
<input type="date" name="date" className="align-item-start"/>
</div>
</div>
<div className=" w-1/4 bg-white grid grid-col-1 gap-2 ">

<p className=" font-bold ">Check Out:</p>
<div className="w-full border border-slate-300 bg-white text-sm flex flex-row gap-2 px-4 text-slate-400  p-2 rounded-sm">
<input type="date" name="date" className="align-item-start"/>
</div>
</div>

<button className="bg-orange-600 p-4 rounded-md w-1/4 font-bold text-white">Search</button>
  </div>
 </div>

 <div className="w-full bg-red-50  p-5   border gap-7">
  <div className="flex justify-end">
 
 <button className="bg-orange-600 py-2 px-11 rounded-md w-1/4  text-white " onClick={()=>setShowForm(true)}>add accomodation</button>
 </div>
 {showForm&&( <div className="w-50 p-5">
  <form className="bg-white font-sans text-sm p-7 "style={{
    height:`555px`,
    width:`450px`,
  }} onSubmit={handleSubmit}>
<p className="font-bold text-lg p-3">Create Accomodation</p>
<div className="p-2"><p className="p-2">Type</p>
<select className="w-full border border-slate-300 bg-white text-sm  text-slate-400  p-1 rounded-md">

  <option value="1">Motel</option>
  <option value="2">Hotel</option>
  <option value="3">bar</option>
  <option value="4">restaurant</option>
</select></div>
<div className="p-2 "><p className="p-2">Name</p>
<input type="text" placeholder="Enter your name"
value={accomodation.name}
onChange={handleInputChange}
name="name"
className="rounded-md w-full border text-grey-300 border-grey-400 p-1 "/>
</div>
<div className="p-2"><p className="p-2">Description</p>
<input type="text" placeholder="Enter your description"
value={accomodation.description}
name="description"
onChange={handleInputChange}
className="rounded-md w-full border text-grey-300 border-grey-400 p-1 "/>
</div>
<div className="p-2"><p className="p-2 text-sm">PRICE IN DOLLARS</p>
<input type="text" placeholder="PRICE IN DOLLARS"
value={accomodation.price}
onChange={handleInputChange}
name="price"
className="rounded-md w-full border text-grey-300 border-grey-400 p-1 "/>
</div>
<div className="flex flex-row w-1/10 w-20 gap-2">
  <div className="">
    <p className="p-2">rooms</p>
    <div className="rounded-md border flex  border-grey-400 py-5 px-10 w-10">
      <input type="text" placeholder="rooms"
    name="rooms"
    value={accomodation.rooms}
    onChange={handleInputChange}
    className="outline-none border-none justify-center mr-10 bg-transparent text-grey-300"/></div>

  </div>
  <div className="">
    <p className="p-2">baths</p>
    <div className="rounded-md border flex  border-grey-400 py-5 px-10 w-10">

    <input type="text" placeholder="baths"
    name="baths"
    value={accomodation.baths}
    onChange={handleInputChange}
    className=" text-grey-300 outline-none border-none bg-transparent"/></div>
    
  </div>
  <div className="">
    <p className="p-2">kitchen</p>
    <div className="rounded-md border flex  border-grey-400 py-5 px-10 w-10">

    <input type="text" placeholder="kitchen"
    name="kitchen" 
    value={accomodation.kitchen}
    onChange={handleInputChange}
    className=" text-grey-300 outline-none mr-30 border-none bg-transparent"/></div>
    
  </div>
  <div className="">
    <p className="p-2">office</p>
    <div className="rounded-md border flex  border-grey-400 py-5 px-10 w-10">

    <input type="text" 
    name="office"
    placeholder="office"
    value={accomodation.office}
    onChange={handleInputChange}
    className=" text-grey-300 outline-none  border-none bg-transparent"/></div>
    
  </div>
  
</div>

<div className="flex flex-row gap-20 px-10 py-2">
  <input type="submit"  className="bg-orange-600 text-white rounded-sm font-bold py-2 px-6" value="save"
  onChange={handleInputChange}
  />
  <div className="flex">
  <button className="font-bold text-white rounded-sm py-2 px-6  justify-right"
  style={{backgroundColor:`#FF0202`,}}
  onClick={()=>setShowForm(false)}
  >cancel</button></div></div>
  </form>
 </div>)}


 <p className="p-4 font-sans text-slate-400">4 hotels found</p>
<div className="grid grid-cols-4 gap-7 ">

     {accomodations.map((hotel,i)=>{
  return(
<div key={i}>
  <Component hotel={()=>{booking(hotel)}} name={hotel.name} kitchen={hotel.kitchen} rooms={hotel.rooms} bath={hotel.baths}
  office={hotel.office}/></div>
  
  )
})}
 </div>
  </div>

</main>
  
  );
}

