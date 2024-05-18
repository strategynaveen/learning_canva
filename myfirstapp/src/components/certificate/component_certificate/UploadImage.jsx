import React from 'react';
import upload_img from '../../../assets/certificate_img/upload_img/web.png';

const UploadImage = () =>{

    const uploadCustomeimg = () =>{
        alert('hi'); 
        document.getElementById('image').click();
    }

    return (
        <>
        <div className='w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-sm text-white mb-3'>
            <label htmlFor="" className='text-center cursor-pointer' onClick={uploadCustomeimg}>Upload Image</label>
            <input type="file" id='image' className='hidden'/>
        </div>
        <div className='h-full overflow-x-auto flex justify-start items-start '>
            <div className='grid grid-cols-3 gap-2'>
                {
                    [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66].map((img,i)=>
                    <div className='w-full h-[100px] overflow-hidden rounded-sm cursor-pointer '>
                        <img src={upload_img} alt="" className='h-full w-full object-fit '/>
                    </div>
                    )
                }
            </div>
        </div>
        </>
    )

}

export default UploadImage;