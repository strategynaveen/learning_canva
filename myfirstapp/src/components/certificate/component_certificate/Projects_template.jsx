import React from 'react';
import { Link } from 'react-router-dom';
import upload_img from '../../../assets/certificate_img/upload_img/web.png';


const Projects_template = () =>{

    return(
        <>
        <div className='grid grid-cols-3 gap-2'>
                {
                    [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66].map((img,i)=>
                    <Link key={i} className='w-full h-[90px] overflow-hidden rounded-sm'>
                        <img src={upload_img} alt="" className='h-full w-full object-fit '/>

                    </Link>
                    
                    )
                }
            </div>
            </>
    );
}

export default Projects_template;