import {url} from "inspector";
//  import backgroundImage from "";

import ReactDOM from "react-dom/client";


export default function signin(){
   
        return(
<main className=" bg-fixed bg-cover  bg-red-50"style={{       
        width:`100%`,
        height:`90%`,
        border:`none`,
        padding:`5px`,
        
}}>
        <div className="  flex w-4/6 h-45 justify-center m-3">
        <div className=" text-black text-sm font-sans h-45 text-grey-300 px-5 py-5 w-2.5/6 bg-white my-7">
    <div className="m-3  grid grid-cols-1 gap-1">       
<p className="font-bold font-sans text-black">Sign Up</p>
<p className="font-sans text-sm text-slate-300 ">Already registered?
    <a href="/signin"className="text-orange-500 text-decoration-none font-bold text-sm">Sign in</a></p>
    <p className="text-sm font-sans">Firstname</p>
    <input type="text" placeholder="Enter Firstname"  className="border border-grey-50 text-slate-300 text-sm px-4  rounded-md "/>

    <p className="text-sm font-sans">Lastname</p>
    <input type="text" placeholder="Enter Lastname"  className="border border-grey-100 text-slate-300 text-sm px-4  rounded-md "/>

    <p className="text-sm font-sans">Email</p>
    <input type="text" placeholder="Enter adress"  className="border border-grey-100 text-slate-300 text-sm px-4  rounded-md "/>

    <p className="text-sm font-sans">Username</p>
    <input type="text" placeholder="Enter Username"  className="border border-grey-100 text-sm text-slate-300 px-4  rounded-md "/>

    <p className="text-sm font-sans">Gender</p>
    <div className="flex flex-row">
    <input type="radio" name="Male" value="Male"  className=" border-grey-50 "/>
    <label className="text-sm text-slate-300">Male</label>
    <input type="radio" name="Female" value="Female"   className=" border-grey-50 ml-10"/>
    <label className="text-sm text-slate-300">Male</label></div>
<p>Password</p>
<div className="flex flex-row border border-grey-100 text-sm text-slate-300 px-2 py-1 rounded-md">
<input type="password" placeholder="password"/>
<img src="entypo_eye(1).svg" alt="eye" className="bg-contain align-item-right" /></div>
 <p>Confirm Password</p>
 <div className="flex flex-row border border-grey-100 text-sm text-slate-300 px-2 py-1 rounded-md ">
 <input type="password" placeholder=" confirm password"/>
 <img src="entypo_eye(1).svg" alt="eye" className="bg-contain align-item-right"/></div>
<p className="text-xsm text-slate-300 p-3">Agree with Terms and Conditions</p>

<button className="bg-orange-600 px-12 py-1 rounded-sm text-xs font-bold text-white">Sign Up</button>
<div className="flex flex-row text-orange-600 text-xs border-2 font-bold border-orange-600  px-12 py-1 rounded-sm bg-white">
    <img src="flat-color-icons_google.svg" alt="google" className="align-content-right"/>
<button>Sign Up with Facebook</button>
</div>
<button className="text-orange-600 text-sm border-2 border-orange-600 font-bold px-12 py-1 rounded-sm bg-white">Sign Up with</button>
    </div>
    </div>           
<div className= " flex flex-col   h-45 w-3/6 my-7 bg-contain "style={{
        backgroundImage:`url('unsplash_tYaccl19A3Q.svg')`,
        backgroundRepeat:`no-repeat`,
       
}}>

                </div>
                
        </div>
    
</main>
        );
}