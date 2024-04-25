import { url } from "inspector";
import Image from "next/image";
import backgroundimage from "home.svg";
import backgroundImage from "eva_chevron-down-fill.svg";
import Backgroundimage from "material-symbols-calendar-month-rounded.svg";

export default function Home() {
  return (
<main>
    <div className="bg-fixed bg-contain "style={{
      backgroundImage:`url('/swimming pool.svg')`,
       height:`100%`,
      width:`100%`,
      backgroundRepeat:`no-repeat`,
      padding:`34px`


      
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
<div className=" w-1/4 bg-white grid grid-col-1 gap-2 ">

<p className="font-bold">Check In:</p>
<div className="w-full border border-slate-300 bg-white text-sm flex flex-row gap-2 text-slate-400  py-1 rounded-sm">
<input type="date" name="date" className="align-item-start"/>
</div>
</div>
<div className=" w-1/4 bg-white grid grid-col-1 gap-2 ">

<p className=" font-bold ">Check Out:</p>
<div className="w-full border border-slate-300 bg-white text-sm flex flex-row gap-2 text-slate-400  py-1 rounded-sm">
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
<div className="h-30  bg-white rounded-sm p-2" style={{
    width:`350px`,
    height:`350px`,
    border:`none`,
}}>
    <img src="pool.png" alt="photo" className="bg-contain w-full"/>
    <p className="font-bold text-sm p-2 ">kigali New Dawn city</p>
    <div className="flex flex-row gap-2 1/4 text-sm text-slate-400 py-2">
    <img src="vector.svg" alt="icon" className="align-left"/>
        <label>6 Rooms</label>
        <img src="vector(1).svg" alt="icon" className="align-left"/>
        <label>1O ffice</label>
        <img src="vector(3).svg" alt="icon" className="align-left"/>
        <label>2 bahts</label>
        <img src="vector(5).svg" alt="icon" className="align-left"/>
        <label>1 kichten</label></div>
        <div className="flex flex-row 1/3    bg-white rounded-md w-20 h-10">
<div className="flex flex-row text-sm border-2 border-grey-500 w-40 rounded-md ">            
<button className="flex  bg-blue-500 ">
    <img src="mdi_like.svg" alt="icon"/>260
</button> 
<button className="px-3"><img src="mdi_dislike.svg" alt="icon"/></button>
</div>
<button className="text-white font-sans text-sm py-2 px-3 rounded-md bg-orange-500 align-right">Book now</button>
    </div>
</div>
 </div>

</main>
  
  );
}

