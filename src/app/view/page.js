



export default function Home() {



  return (
<main>
    <div className=" bg-cover w-full"style={{
      backgroundImage:`url('/swimming pool.svg')`,
       height:`400px`,
      width:``,
      backgroundRepeat:`no-repeat`,
      


      
      }}>

      

<div className="flex flex-row  w-full p-20">
  <p className="font-sans text-white text-xl font-bold ">Barefoot</p>
  <div className="flex justify-end ">
<img src="Ellipse 47.svg" alt="profile" className="h-20 w-20 ml-40 p-0 "/>
</div>

  </div>



  
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
 <div className="w-full bg-red-50 gap-17 p-5 h-auto flex ">
 <div className=" w-full flex flex-row gap-20 h-50 p-10">
<div style={{height:`400px`,width:`400px`,}}>
  <img src="Rectangle 2834.svg" alt="photo" className="bg-contain" />
</div>
<div className="justify-right p-4 mt-10">
  <p className="font-bold text-md p-0 m-0">Kigali New</p>
  <p className="font-bold text-md p-0 m-0">Dawn City</p>
  <p className="py-4 text-sm text-grey-400">this is how the you hotel<br/>
   you choosen look like and<br/>
   you're in the right way to choose<br/>
   thanks for everything!!!
  </p>
  <div className="flex flex-grow gap-8">
    <input type="button" value="Edit" className="rounded-sm  py-2 px-10 text-white font-bold"
    style={{backgroundColor:`#008000`,}}/>
    <input type="button" value="Cancel" className="rounded-sm bg-red-500 py-2 px-6 text-white font-bold"
    style={{backgroundColor:`#FF0202`,}}
    />
  </div>
</div>
 </div>
 </div>
</main>
  
  );
}

