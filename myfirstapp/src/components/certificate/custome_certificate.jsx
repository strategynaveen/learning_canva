import { useEffect, useState } from 'react'; 
import Navbar from './Navbar_certificate';

// import SideNavbar from './Side_Navbar';

// side navbar icons imports
import { BsGrid1X2 } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { MdKeyboardArrowLeft, MdOutlineCloudUpload } from "react-icons/md";
import { TfiText } from "react-icons/tfi";
import { RxTransparencyGrid } from "react-icons/rx";
import { FaRegFolderClosed } from "react-icons/fa6";
import upload_img from '../../assets/certificate_img/upload_img/web.png';


// template design certificate 
import TemplateDesign from './component_certificate/TemplateDesign.jsx';
import UploadImage from './component_certificate/UploadImage.jsx';
import Projects_template from './component_certificate/Projects_template.jsx';
import Createcomponent from './component_certificate/Createcomponent.jsx';
const custome_certificate = () =>{

    const [state,setState] = useState('');
    const [current_component,setCurrentComponent] = useState('');
    const [show,setShow] = useState({
        status:true,
        name:''
    });
    const [bimage,setImage] = useState('');
    const [color,setColor] = useState('');
    const [rotate,setRotate] = useState(0);

    const seElements = (type,name)=>{
        setState(type);
        setShow({
            status:false,
            name
        })
    }


    const moveElement = () =>{
        console.log("move");
    }

    const resizeElement = () =>{
        console.log("Resize element");
    }

    const rotateElement = () =>{
        console.log('reSize Element');
    }

    // shape function
    const createShape = (type,shapename)=>{
        const style = {
            id:Components.length+1,
            name:type,
            shapename,
            left:10,
            top:10,
            right:10,
            opacity:1,
            width:200,
            height:150,
            rotate,
            z_index:2,
            color:'#3c3e3d',
            setCurrentComponent:(a)=>setCurrentComponent(a),
            removeBackground:()=>setImage(''),
            moveElement,
            resizeElement,
            rotateElement,
        }

        setComponents([...Components,style])
    }

    const [Components,setComponents] = useState([{
        name:'main_frame',
        type:'rect',
        id:Math.floor((Math.random() * 100)+1),
        height:450,
        width:650,
        z_index:1,
        color:'white',
        image:'',
        setCurrentComponent:(a)=>setCurrentComponent(a)
    }]);

    const removeComponent = (id)=>{
        const temp = Components.filter(c=>c.id!==id);
        setCurrentComponent('');
        setComponents(temp);
    }

    useEffect(()=>{
        console.log("useeffect color value is:\t"+color);
        if (current_component) {
            const index = Components.findIndex(c=>c.id===current_component.id);
            const temp = Components.filter(c=>c.id!==current_component.id);
            if(current_component.name==='main_frame' && bimage){
                console.log("background image");
                console.log(bimage.upload_img);
                Components[index].image=bimage.upload_img || current_component.image
            }
            Components[index].color=color || current_component.color
            // setComponents
            console.log("selected color is:\t"+Components[index].color);
            setComponents([...temp,Components[index]]);
        }

    },[color,bimage]);

    // remove background function 
    const removeBackground = () =>{
        console.log("remove background");
        const com = Components.find(c=>c.id===current_component.id);
        const temp = Components.filter(c=>c.id!==current_component.id);
        com.image='';
        setImage('');
        setComponents([...temp,com])
    }

    return(
        <>
        <div className='min-w-screen h-screen '>
            <Navbar />
            <div className='flex h-full w-100 bg-black'>
                <div className='flex flex-col w-[88px]  bg-[#181918] z-50 h-full text-gray-500 '>
                    {/* <SideNavbar /> */}
                    <div onClick={() => seElements('design','design')} className={`${show.name==='design'?'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsGrid1X2/></span>
                        <span className='text-xs font-medium'>Design</span>
                    </div>

                    <div onClick={() => seElements('shape','shapes')} className={`${show.name==='shapes'?'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><FaShapes /></span>
                        <span className='text-xs font-medium'>Shapes</span>
                    </div>


                    <div onClick={() => seElements('image','uploadImage')} className={` ${show.name==='uploadImage'?'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><MdOutlineCloudUpload/></span>
                        <span className='text-xs font-medium'>Upload</span>
                    </div>


                    <div onClick={() => seElements('text','text')} className={` ${show.name==='text'?'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><TfiText/></span>
                        <span className='text-xs font-medium'>Text</span>
                    </div>
                    
                    <div onClick={() => seElements('project','projects')} className={` ${show.name==='projects'?'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><FaRegFolderClosed/></span>
                        <span className='text-xs font-medium'>Project</span>
                    </div>

                    <div onClick={() => seElements('initImage','images')} className={` ${show.name==='images'?'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><IoMdImages/></span>
                        <span className='text-xs font-medium'>Images</span>
                    </div>

                    <div onClick={() => seElements('background','background')} className={` ${show.name==='background'?'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><RxTransparencyGrid/></span>
                        <span className='text-xs font-medium px-1'>Background</span>
                    </div>
                </div>

                <div className='h-full w-[calc(100%-75px)]'>
                    <div className={`${show.status?'p-0 -left-[350px]':'px-8 left-[74px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                        <div onClick={()=>setShow({name:'',status:true})} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full '>< MdKeyboardArrowLeft /></div>
                        {state==='design'?( 
                            <div className='grid grid-cols-2 gap-2'>
                               <TemplateDesign />
                            </div>
                        ):state ==='shape' ? (
                            <div className='grid grid-cols-3 gap-2'>
                                <div onClick={()=>createShape('shape','rect')} className='h-[99px] bg-[#3c3e3d] cursor-pointer '></div>
                                <div onClick={()=>createShape('shape','circle')} className='h-[90px] bg-[#3c3e3d] cursor-pointer rounded-full'></div>
                                <div onClick={()=>createShape('shape','triangle')} className='h-[90px] bg-[#3c3e3d] cursor-pointer' style={{clipPath:'polygon(50% 0,100% 100%,0 100%)'}}></div>
                                <div onClick={()=>createShape('shape','ovel')} className='h-[58px] bg-[#3c3e3d] cursor-pointer rounded-full'></div>
                                
                            </div>
                        ):state ==='image'?(
                            <UploadImage />
                        ):state==='text'?(
                            <div className='grid grid-cols-1 gap-2'>
                                <div className='bg-[#3c3e3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>
                                    <h2>Add a Text</h2>
                                </div>
                            </div>
                        ):state==='project'?(
                            <Projects_template />
                        ):state==='initImage'?(
                            <Projects_template />
                        ):state==='background' &&(
                            <div className='h-full overflow-x-auto flex justify-start items-start '>
                            <div className='grid grid-cols-3 gap-2'>
                                {
                                    [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66].map((img,i)=>
                                    <div onClick={()=>setImage({upload_img})} className='w-full h-[100px] overflow-hidden rounded-sm cursor-pointer '>
                                        <img src={upload_img} alt="" className='h-full w-full object-fit '/>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                        )}
                    </div>
                    <div className='w-full h-full '>
                        <div className={`flex justify-center relative items-center h-full ${!current_component?'w-full':'w-[calc(100%-250px)] overflow-hidden'}`}>
                            <div className='m-w-[650px] m-h-[480px] flex justify-center items-center overflow-hidden'>
                                <div className='w-auto relative h-auto overflow-hidden' id='main_design'>
                                    {
                                        Components.map((c,i)=><Createcomponent key={i} info={c} current_component={current_component} removeComponent={removeComponent} />)
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            current_component && 
                            <div className='w-[200px] h-full text-gray-300 bg-[#252627] px-3 py-2 absolute right-0 top-[58px]'>
                                <div className='flex gap-3 flex-col items-start h-full px-3 justify-start'>
                                    <div className='flex gap-4 justify-start items-start'>
                                        <span>Color :</span>
                                        <label className='w-[30px] h-[30px] cursor-pointer rounded-sm' htmlFor="Color" style={{background:`${current_component.color && current_component.color!='#fff'? current_component.color:'gray'}`}}></label>
                                        {/* <input type="color"  className='invisible' id="color" onChange={()=>setColor(e.target.value)}/> */}
                                        <input type="color" name="invisible" id="color" onChange={(e)=>setColor(e.target.value)} />
                                    </div>
                                    {
                                        (current_component.name==='main_frame' && bimage)&&
                                        <button className='w-full px-[2px] py-[3px] bg-slate-600 text-white rounded-sm text-sm' onClick={removeBackground}>Remove Background</button>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>

               
            </div>
        </div>
       
        
       
        </>
       
    );
}

export default custome_certificate;