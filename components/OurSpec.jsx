import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'

const OurSpecs = () => {

    return (
        <div className='px-6 my-28 max-w-7xl mx-auto'>
            <div className="text-center mb-16">
                <Title visibleButton={false} title='Why Choose GoCycle?' description="Revolutionizing battery recycling and resale with a focus on sustainability and trust." />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    ourSpecsData.map((spec, index) => {
                        return (
                            <div className='card p-10 flex flex-col items-center justify-center text-center group border-none' key={index}>
                                <div className='mb-6 p-5 bg-slate-50 text-[#05DF72] rounded-3xl group-hover:bg-[#05DF72] group-hover:text-white transition-all duration-500 shadow-sm'>
                                    <spec.icon size={32} />
                                </div>
                                <h3 className='text-xl font-bold text-slate-800 tracking-tight'>{spec.title}</h3>
                                <p className='text-sm text-slate-500 mt-4 leading-relaxed'>{spec.description}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default OurSpecs
