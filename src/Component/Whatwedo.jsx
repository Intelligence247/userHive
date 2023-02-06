import React from 'react'
import Whatwedostructure from './Whatwedostructure'

const Whatwedo = () => {
    const objectArr = [
        {
            img: '/media/arrow.svg',
            title: 'Continuous discovery',
            desc: 'We do users interviews with your customers or prospectives each week, so your team get constant input to their decisions. If a new question pops up, you will start getting answers from customers in less than a week.',

        },
        {
            img: '/media/vite.svg',
            title: 'Partnership',
            desc: 'We don\'t deliver a report and walk away. We work hand in hand with your team, meeting regularly to understand the newest changes in direction and burning questions that need answering',

        },
        {
            img: '/media/userhivelogo.svg',
            title: 'No hurdles',
            desc: 'Know how much it\'ll cost before you even email us. Pay with your credit card, or we can send an invoice. Pause the engagement with as little as an email. We want it to be as easy as possible to work with us.',

        },
        {
            img: '/media/menu.svg',
            title: 'Build customer empathy',
            desc: 'Empathy with your customers doesn\'t happen in a day. Our work creates an ever-deepening understanding of your customers within your product teams. We produce artefacts that your teams will refer to and share again and again.',
        },
    ]
    return (
        <div className="wrapper flex gap-8 mt-10 px-8 flex-col lg:flex-row bg-[#131415] py-20 w-[100%]">
            {
                objectArr.map((obj) => (
                    <Whatwedostructure
                        img={obj.img}
                        title={obj.title}
                        desc={obj.desc}
                    />

                ))}


        </div>
    )
}

export default Whatwedo