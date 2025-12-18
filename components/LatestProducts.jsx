'use client'
import React, { useState, useMemo } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import { lagosLGAs } from '@/assets/assets'
import { MapPinIcon, FilterIcon } from 'lucide-react'

const LatestProducts = () => {
    const products = useSelector(state => state.product.list)
    const [selectedLGA, setSelectedLGA] = useState('All')

    const filteredProducts = useMemo(() => {
        let list = products.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        if (selectedLGA !== 'All') {
            // Mock filtering: In a real app, products would have an LGA field.
            // We'll simulate by filtering based on some dummy logic or just showing how it works.
            // For now, let's assume some products are in specific LGAs or just filter for demo.
            return list.filter((_, index) => index % 2 === 0) // Just to show dynamic UI update
        }
        return list
    }, [products, selectedLGA])

    const displayQuantity = 8

    return (
        <div className='px-6 my-32 max-w-7xl mx-auto'>
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                <div className="flex-1">
                    <Title title='Marketplace <span className="text-[#05DF72]">Arrivals</span>' description="Browse our newest verified listings from trusted eco-vendors across Lagos." href='/shop' />
                </div>

                <div className="flex items-center gap-4 bg-white p-3 px-6 rounded-[2rem] shadow-sm border border-slate-100 w-full md:w-auto">
                    <div className="flex items-center gap-2 text-slate-400 shrink-0 border-r border-slate-100 pr-4 mr-2">
                        <MapPinIcon size={18} />
                        <span className="text-sm font-bold text-slate-900">Lagos</span>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                        <FilterIcon size={16} className="text-slate-400" />
                        <select
                            value={selectedLGA}
                            onChange={(e) => setSelectedLGA(e.target.value)}
                            className="bg-transparent text-sm font-medium text-slate-700 outline-none w-full min-w-[150px] cursor-pointer"
                        >
                            <option value="All">All Local Governments</option>
                            {lagosLGAs.map(lga => (
                                <option key={lga} value={lga}>{lga}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {filteredProducts.slice(0, displayQuantity).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-slate-50 rounded-3xl mt-12 border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-medium">No batteries listed in {selectedLGA} yet.</p>
                </div>
            )}
        </div>
    )
}

export default LatestProducts

