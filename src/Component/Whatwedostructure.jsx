import React from 'react'

const Whatwedostructure = (props) => {
    return (
        <div className="whatwedo flex flex-col  lg:w-[24%] w-[100%] gap-2 hover:bg-[#2c2c30] px-3 py-5 cursor-pointer hover:rounded-[10px]">
            <p className='w-10 h-10 bg-[#6968f7] rounded-[50%] grid place-items-center'>
                <img src={props.img} alt="" className='w-6   ' />
            </p>
            <p className='font-[700] text-[1.1rem] '>{props.title}</p>
            <p className='text-[1rem] text-[#e0e0e0]'>{props.desc}</p>
        </div>
    )
}

export default Whatwedostructure