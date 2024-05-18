import React from 'react';


const Createcomponent = ({info,current_component,removeComponent}) =>{

    const randValue = Math.floor(Math.random()*100);
    let html='';
    console.log("component element");
    console.log(info);
    console.log(current_component)

    if (info.name==='main_frame') {
        html=<div onClick={()=>info.setCurrentComponent(info)} className='hover:border-[2px] hover:border-indigo-500 shadow-md' style={{width:info.width+'px',height:info.height+'px',background:info.color,zIndex:info.z_index}}>
            {
                info.image && <img src={info.image} className='w-full h-full ' alt="image" />
            }
        </div>
    }

    if (info.name==="shape" && info.shapename==="rect") {
        console.log("rectangle shape is selected ");
        html=<div id={randValue} onClick={()=>info.setCurrentComponent(info)} 
        className='absolute group hover:border-[2px] hover:border-indigo-500' 
        style={{
            width:info.width+'px',
            height:info.height+'px',
            background:info.color,
            opacity:info.opacity,
            left:info.left+'px',
            right:info.right+'px',
            top:info.top+'px',
            zIndex:info.z_index,
            transform:info.rotate?`rotate(${info.rotate})`:`rotate(0deg)`,
        }}>
            {
                current_component.id===info.id && <div  onClick={()=>removeComponent(info.id)}
                className='py-3 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-sm'>

                </div>
            }
        </div>
    }
    console.log(html);
    console.log("selected rectangle");
    return html;

}

export default Createcomponent;