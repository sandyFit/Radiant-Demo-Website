import React from 'react'

const Button = ({text}) => {
    return (
        <button className=" group relative overflow-hidden rounded-[8px] uppercase">
            <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[142%] 
                    group-hover:skew-y-[15deg]">
                    {text}
                </div>
                <div className="absolute translate-y-[142%] skew-y-[15deg] transition duration-500 group-hover:translate-y-0 
                group-hover:skew-y-0">
                    {text}
                </div>
            </span>
        </button>
    )
}

export default Button;
