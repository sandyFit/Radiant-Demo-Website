import React, { useState } from 'react'
import QuestionCard from '../../components/cards/QuestionCard';
import questions from '../../data/questions';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import { useAnimateImage } from '../../utils/globalContext';

const Faqs = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleToggleAccordion = index => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    }


    const imgRef = useAnimateImage();

    return (
        <section className='relative h-auto pt-28 xl:pt-32 bg-slate-300 pb-24 xl:pb-36'>
            <header className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6
                px-6 md:px-8 base:px-12 lg-sm:px-16 lg-xl:px-20 xl:px-24 2xl:px-32 3xl:px-40">
                <div className="w-full flex justify-start items-center text-mayus-dark relative gap-6">
                    <span className='inline-flex'>
                        <TextShimmerEffect text={`(05) Faqs`} />
                    </span>
                </div>
            </header>

            <section className="w-full flex flex-col justify-center items-center relative">
                <section className="w-full relative hue-effect flex flex-col justify-center items-center">
                    <h2 className='hidden xl:block text-center title-h2 lg:w-[80%] pt-2 lg:pt-4'>
                        Got Questions?
                        <span className='app-title ml-0 xl:ml-4'>
                            We have Answers!
                        </span>
                    </h2>

                    <h2 className='block xl:hidden text-left title-h2 w-[85%] base:w-[80%] pt-2 lg:pt-4'>
                        Got Questions? <br />
                        <span className='app-title ml-0'>
                            We have Answers!
                        </span>
                    </h2>

                    <p className='text-left xl:text-center text-p1 mt-4 xl:mt-10 w-[85%] base:w-[80%] 2xl:w-[70%]'>
                        Find answers to commonly asked questions about dental care below.
                    </p>
                </section>

                <section className="flex flex-col 2xl-sm:flex-row w-full justify-between px-6 md:px-8 base:px-12 
                    lg-sm:px-16 lg-xl:px-20 2xl-sm:px-24 2xl:px-32 3xl:px-40 pt-6 xl:pt-16 gap-4">
                    <figure className="hidden 2xl-sm:flex w-[85vw] h-[85vw] base:w-[80vw] base:h-[80vw] 
                        xl:w-[35vw] xl:h-[35vw] rounded-[10px] xl:rounded-xl bg-indigo-600">
                        <img ref={imgRef}
                            src="/people/asian-girl.jpg"
                            alt="A happy Asian girl displaying her beautiful smile following a dental procedure."
                            className='w-full h-full object-cover bg-center rounded-[10px] xl:rounded-xl'
                        />
                    </figure>

                    <section className="flex flex-col justify-start items-start">
                        {questions.map((question, index) => (
                            <QuestionCard
                                key={index}
                                question={question.question}
                                answer={question.answer}
                                isOpen={index === openQuestionIndex}
                                onToggle={() => handleToggleAccordion(index)}
                            />
                        ))}
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Faqs;
