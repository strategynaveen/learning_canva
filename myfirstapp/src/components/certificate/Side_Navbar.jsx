import {React,useState} from 'react';
import { BsGrid1X2 } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { MdOutlineCloudUpload } from "react-icons/md";
import { TfiText } from "react-icons/tfi";
import { RxTransparencyGrid } from "react-icons/rx";
import { FaRegFolderClosed } from "react-icons/fa6";
const Side_Navbar = () =>{

    return(
    <>
        <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
            <span className='text-2xl'><BsGrid1X2/></span>
            <span className='text-xs font-medium'>Design</span>
        </div>

        <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
            <span className='text-2xl'><FaShapes /></span>
            <span className='text-xs font-medium'>Shapes</span>
        </div>


        <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
            <span className='text-2xl'><MdOutlineCloudUpload/></span>
            <span className='text-xs font-medium'>Upload</span>
        </div>


        <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
            <span className='text-2xl'><TfiText/></span>
            <span className='text-xs font-medium'>Test</span>
        </div>
        
        <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
            <span className='text-2xl'><FaRegFolderClosed/></span>
            <span className='text-xs font-medium'>Project</span>
        </div>

        <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
            <span className='text-2xl'><IoMdImages/></span>
            <span className='text-xs font-medium'>Images</span>
        </div>

        <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
            <span className='text-2xl'><RxTransparencyGrid/></span>
            <span className='text-xs font-medium'>Background</span>
        </div>
    </>
    );
    
}

export default Side_Navbar;