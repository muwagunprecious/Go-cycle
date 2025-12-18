'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold text-slate-800 tracking-tight' dangerouslySetInnerHTML={{ __html: title }}></h2>
            <Link href={href} className='flex items-center gap-5 text-sm text-slate-600 mt-3'>
                <p className='max-w-xl text-center font-medium leading-relaxed'>{description}</p>
                {visibleButton && (
                    <button className='text-[#05DF72] flex items-center gap-2 group font-bold'>
                        View more
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                )}
            </Link>
        </div>
    )
}

export default Title
