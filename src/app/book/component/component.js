import image from "next/image";
import react from "react";
import{useState} from "react";

export default function Component({name,rooms,office,bath,kitchen,unlike,}){
    const[likes,setLikes]=useState(0);
  return(
    
      <main>
    <div className="h-30  bg-white rounded-sm" style={{
        width:`300px`,
        height:`300px`,
        border:`none`,
    }}>
        <img src="pool.png" alt="photo" className="bg-contain w-full"/>
        <p className="font-bold text-sm p-2 ">Kigali new Dawn city{name}</p>
        <div className="flex flex-row mx-1  1/4 py-1 text-sm text-slate-400">
          
    
        <img src="vector.svg" alt="icon" className="align-left"/>
            <input type="text" className="flex w-14 h-5"value={rooms} />
            <img src="vector(1).svg" alt="icon" className="align-left"/>
            <input type="text" className="flex w-14 h-5"value={office} />
            <img src="vector(3).svg" alt="icon" className="align-left"/>
            <input type="text" className="flex w-14 h-5"value={bath} />
            <img src="vector(5).svg" alt="icon" className="align-left"/>
            <input type="text" className="flex w-14 h-5"value={kitchen} /></div>
            <div className="flex flex-row mx-5">
            <div className="flex flex-row ltr">
    <button className="flex flex-row bg-white px-2 gap-2 rounded-s-lg" style={{
      width:`3rem`,
      border:`1px lightgray solid`,
      height:`2rem`,
    }} onClick={()=>setLikes(likes+1)}>
        <img src="mdi_like.svg" alt="icon"/><p>{likes}</p>
    </button></div>
    <div className=" flex "> 
    <button className=" w-15 px-3 bg-white rounded-r-md border border-gray-300 flex flex-row">
      <img src="mdi_dislike.svg" alt="icon" className="rounded-s-lg"/></button>
    
        </div>
        <button className="px-4 py-1 bg-orange-500 rounded-md text-white ml-12 font-sans">Book now</button>
        </div>
       
    </div>
    </main>
    
    ); 
    
}