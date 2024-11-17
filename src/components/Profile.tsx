import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {

  const[bannerUrl,SetBannerUrl] = useState("https://via.placeholder.com/1500x400")

  const [profileUrl,setProfileUrl] = useState("https://via.placeholder.com/100x100")

  const handleBannerChange = (event:any)=>{
    const file = event.target.files[0];

    if(file){
      SetBannerUrl(URL.createObjectURL(file))
    }
   };


   const handleProfileChange = (e:any)=>{

    const file1= e.target.files[0];

    if(file1){
      setProfileUrl(URL.createObjectURL(file1))
    }

   };




  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img src={bannerUrl} alt="background image"  className="w-full h-60 object-cover"/>
      
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">

        <label htmlFor="banner-upload" className="cursor-pointer">
          <FaCamera size={24}/>
        </label>
        </button>
       
        <input type="file" id="banner-upload" accept="image/*" className="hidden"  onChange={handleBannerChange} /> 
      </div>


      {/* Channel logo*/}

      <div className="flex items-center ml-4 mt-[2rem]">
        <img src={profileUrl} alt="Channel logo" className="w-40 h-40 oject-cover rounded-full border-gray relative" />

        
        <button className="absoulte -ml-[6rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
          <FaCamera size={24}/>
          </label>
          
         
          <input type="file" id="profile-upload" accept="imgae/*" className="hidden" onChange={handleProfileChange} />
        </button>

       {/* channel detail */}

       <div className="ml-4 mt-4"> 
        <h1 className="text-2xl font-bold ml-[4rem] ">Aditya</h1>
        <p className="ml-[4rem]">1M views</p>
        <p className="mt-2 ml-[4rem]">
          This is a short description of the youtube channel. Is gives an overview of the content and what viewers can expect.
        </p>
        <button className="ml-[4rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
       </div>
      </div>
    </div>
  )
}

export default Profile;