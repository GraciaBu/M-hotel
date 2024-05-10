import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-fixed bg-cover h-full"style={{
      backgroundImage:`url('/home.svg')`,
       height:`100%`,
      width:`100%`,
      backgroundRepeat:`no-repeat`,
      padding:`34px`


      
      }}>

      
<nav className="flex flex-row    py-7 ">
        <p className="font-bold font-sans text-white h-9 ml-5"> 
          M-hotel
          </p>
          <a href="/signin" className="bg-orange-500 text-white font-sans  w-1/7
           rounded-md py-2 px-5  ml-auto mr-10 font-bold text-decoration-none">Sign In</a>

  </nav>

  


<div className="my-20 mx-20 ">
<p className="font-extrabold font-sans text-white  text-5xl ">Best affordable</p>
   <p className="font-extrabold font-sans text-white  text-5xl ">accomodations ever!</p>
</div>
  <div className="my-12 mx-20">
  <p className="text-white   font-sm text-2xl">For sure you have made the right choice to</p>
  <p className=" text-white  text-2xl font-sm "> save your reservation here!</p>
  </div>
  
  <div className=" flex flex-row  gap-10 text-black font-sans h-15 w-5/6   bg-white 
  rounded-md mx-20 p-5 ">
    
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
  
  
  </main>
  );
}

