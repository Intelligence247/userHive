import React from 'react'

const Smallstructure = (props) => {
    return (
        <div className="sizes bg-[#2c2c30] py-8 rounded-[10px] px-9 justify-between lg:w-[32%] text-[1.1rem]">
            <h1 className='font-bold text-[2rem]'>{props.title}</h1>
            <p>{props.desc}</p>
            <p className='mt-10'>{props.desc2}</p>
            <ul className='ml-7 list-disc'>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
                <li>{props.li4}</li>
            </ul>

            <div className="price mt-10 text-[2rem] font-bold">{props.price}</div>
            <p className='bg-[#5e5df0] w-max text-white rounded-[20px] px-6 py-2 m-auto'>Let's go</p>
        </div>
    )
}

export default Smallstructure