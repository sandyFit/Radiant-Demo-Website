import React from 'react';
import { renderDescription } from '../../utils/functions';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

const QuestionCard = ({ question, answer, isOpen, onToggle }) => {
    
    return (
        <article className={`border-b-2 border-indigo-50 flex flex-col w-full 2xl-sm:w-[45vw] 3xl:w-[40vw] 
            overflow-hidden relative cursor-pointer before:absolute before:left-0 before:top-0 before:block 
            before:h-full before:w-full before:border-2 before:border-indigo-500 before:rounded-md 
            before:bg-indigo-500 before:transition-transform before:-translate-y-full hover:before:translate-y-0 
            title-questions
            ${isOpen ? 'active' : ''}`}>

            <div className="flex justify-between items-center px-4 py-5 z-[1]"
                onClick={onToggle}>
                <h4 className="text-current">
                    {question}
                </h4>
                <button className={`item text-current font-[900] ${isOpen ? 'activeIcon rotate-icon' : 'inactiveIcon'}`}>
                    {isOpen ? <HiChevronUp className='text-[1rem] xl:text-[2rem]' /> 
                        : <HiChevronDown className='text-[1rem] xl:text-[2rem]' />}
                </button>
            </div>

            {isOpen && (
                <div className="text-[.78rem] base:text-[.9rem] xl:text-[1rem] 2xl-sm:text-[.8rem] 3xl:text-[1rem]
                    content z-[1]">
                    <p className="px-5 pb-12 text-current font-[400]">
                        {renderDescription(answer)}
                    </p>
                </div>
            )}
        </article>
    )
}

export default QuestionCard;

