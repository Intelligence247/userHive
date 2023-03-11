import React from 'react'
import Smallstructure from './Smallstructure'

const Small = () => {
    let smallArr = [
        {
            title: 'Small',
            desc: 'Best for partnering with a single product team',
            desc2: '4 User insight packages each month',
            li1: 'interviews with 4 users',
            li2: 'Expert analysis of each interview',
            li3: 'Monthly team call to review and consolidate understanding',
            li4: 'Summary shared as an interview snapshot',
            price: '€1199 per month'
        }, {
            title: 'Medium',
            desc: 'Best for partnering with a multiple product teams',
            desc2: '8 User insight packages each month',
            li1: 'interviews with 8 users',
            li2: 'Expert analysis of each interview',
            li3: 'Monthly team call to review and consolidate understanding',
            li4: 'Summary shared as an interview snapshot',
            price: '€2149 per month'
        },
        {
            title: 'Large',
            desc: 'Looking for even more of the good stuff?',
            desc2: 'We can work on a custom engagement, just reach out.',
        },
    ]


    return (
        <div className="smallwrapper flex bg-[#131415] gap-8 px-8 mx-2 py-6 flex-col lg:flex-row">
            {smallArr.map((s,i) => (
                <Smallstructure
                    key={i}
                    title={s.title}
                    desc={s.desc}
                    desc2={s.desc2}
                    li1={s.li1}
                    li2={s.li2}
                    li3={s.li3}
                    li4={s.li4}
                    price={s.price}

                />
            ))}
        </div>
        // 

    )
}

export default Small