import {url} from "inspector";
//  import backgroundImage from "unsplash_tYaccl19A3Q.svg";



export default function signin(){
   
        return(
<main className=" bg-fixed bg-cover bg-red-50 p-60"style={{       
        width:`100%`,
        height:`100%`,
        border:`none`,
        padding:`50px`,

        
}}>
        <div className="flex ml-90 border"style={{width:`fit-content`,}}>
        <div className=" flex flex-col text-black font-sans h-50 w-3/4 p-10 bg-contain bg-white ">
                <div className=" flex flex-col  gap-4 ">
        <p className="font-bold font-sans text-md text-black">Sign In</p>
<p className="font-sans text-sm text-slate-300 ">Don't have an account?
    <a href="/signup"className="text-orange-500 text-decoration-none font-bold text-sm">Sign Up</a></p>

    <p className="text-sm font-sans text-black">Email adress</p>
    <input type="text" placeholder="Enter your Email adress"  className="border border-grey-50 text-slate-300 text-sm px-4 py-1 rounded-md "/>

    <p className="text-sm font-sans text-black">Password</p>
<div className="flex flex-row border border-grey-100 text-sm text-slate-300 px-2 py-1 rounded-md">
<input type="password" placeholder="password"/>
<img src="entypo_eye(1).svg" alt="eye" className="bg-contain align-item-right" /></div>
<div className="flex flex-row gap-2">
<input type="checkbox" name="Remember me?" value="Remember me?"/><label className="text-sm text-slate-300">
        Remember me?</label> 
         <a href="#" className="text-decoration-none font-sans text-sm gap-3 align-content-right">Forget password?</a> 
        </div>
        <a href="/book" className="bg-orange-600 px-12 py-2 rounded-sm font-bold text-sm text-white">Sign In</a>
<div className="flex flex-row text-orange-600 text-xs border-2 font-bold border-orange-600  px-12 gap-2 py-1 rounded-sm bg-white">
    <img src="flat-color-icons_google.svg" alt="google" className="align-content-right "/>
<button>Sign in with Google</button>
</div>
<button className="text-orange-600 text-xs border-2 font-bold  border-orange-600 px-12 py-2  rounded-sm bg-white">Sign In with Facebook</button>
</div></div>
<div className= " flex flex-col h-70 py-60  px-70 bg-cover"style={{
        backgroundImage:`url('sign.png')`,
        backgroundRepeat:`no-repeat`,
        alignContent:`center`,
        width:`400px`,
       
}}>

                </div>
        </div>
    
</main>
        );
}
