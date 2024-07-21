import React from 'react'

const Button = ({text}) => {
    return (
        <button className=" group relative overflow-hidden rounded-[8px] uppercase pt-1">
            <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0  transition duration-500 group-hover:-translate-y-[85%] ">
                    {text}
                </div>
                <div className="absolute translate-y-[85%]  transition duration-500 group-hover:translate-y-0 ">
                    {text}
                </div>
            </span>
        </button>
    )
}

export default Button;
