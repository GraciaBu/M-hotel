import image from "next/image";
import react from "react";
import{useState} from "react";

export default function Component({name,rooms,office,bath,kitchen,}){
    const[likes,setLikes]=useState(0);
    const[unlike,setUnlike]=useState(0);
   

  return(
    
      <main>
        <div className="mt-10">
          
    <div className="h-30  bg-white rounded-sm " style={{
        width:`310px`,
        height:`320px`,
        border:`none`,
    }}>
        <img src="pool.png" alt="photo" className="bg-contain w-full"/>
        <p className="font-bold text-sm p-2 ">{name}</p>
        <div className="flex flex-row mx-1 gap-1  py-2 text-sm text-slate-400">
          
    
        <img src="rooms.svg" alt="icon" className="align-left"/>
            <p  className="flex h-5" > {rooms} rooms</p>
            {/* <img src="offices.svg" alt="icon" className="align-left"/> */}
            <p  className="flex  h-5" >{office} offices</p>
            {/* <img src="baths.svg" alt="icon" className="align-left"/> */}
            <p  className="flex  h-5" >{bath} bath</p>
            {/* <img src="kitchen.svg" alt="icon" className="align-left"/> */}
            <p  className="flex  h-5" >{kitchen} kitchen</p></div>
            <div className="flex flex-row mx-5">
            <div className="flex flex-row ltr">
    <button className="flex flex-row bg-white px-3 gap-2 rounded-s-lg" style={{
      width:`3.5rem`,
      border:`1px lightgray solid`,
      height:`2rem`,
    }} onClick={()=>setLikes(likes+1)}>
        <img src="mdi_like.svg" alt="icon"/><p className="flex flex-row">{likes}</p>
    </button></div>
    <div className=" flex "> 
    <button className=" w-15 px-4 bg-white rounded-r-md border border-gray-300 flex flex-row"onClick={()=>setUnlike(unlike+1)}>
      <img src="mdi_dislike.svg" alt="icon" className="rounded-s-lg"/><p>{unlike}</p></button>
    
        </div>
        <a href="/view" className="px-6 py-1 bg-orange-500 rounded-md text-white ml-12 font-sans">view</a>
        </div>
       
    </div>
    </div>
    </main>
    
    ); 
    
}
