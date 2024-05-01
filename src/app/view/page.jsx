



export default function Home() {



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
 <div className="w-full bg-red-50 gap-17 p-5 h-50 flex border  flex-row gap-4"></div>
 

</main>
  
  );
}

