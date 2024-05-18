import React from 'react';
import template1 from '../../../assets/certificate_img/template_img/template1.jpeg';

const TemplateDesign = () =>{
    return(
        <>
            {
                [1,2,3,4].map((item,key)=><div>
                    <img src={template1} alt="" />
                </div>)
            }
        </>
    );
}

export default TemplateDesign;