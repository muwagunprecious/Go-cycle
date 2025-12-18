'use client'
import { useState } from "react"
import { PlusIcon, SearchIcon, FilterIcon, MoreVerticalIcon, Edit3Icon, TrashIcon, BatteryIcon, UploadCloudIcon, XIcon } from "lucide-react"
import { categories, lagosLGAs } from "@/assets/assets"
import Image from "next/image"
import toast from "react-hot-toast"

export default function SellerProducts() {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
    const [products, setProducts] = useState([
        { id: 1, name: "Classic Car Battery 12V", category: "Car Battery", brand: "Luminous", capacity: "65Ah", condition: "Used", price: 35000, quantity: 12, status: "Active" },
        { id: 2, name: "Deep Cycle Inverter Battery", category: "Inverter Battery", brand: "Quanta", capacity: "200Ah", condition: "Used", price: 95000, quantity: 5, status: "Active" },
        { id: 3, name: "Lithium Scrap Battery", category: "Scrap/Recyclable", brand: "N/A", capacity: "N/A", condition: "Scrap", price: 1500, quantity: 50, status: "Active" },
    ])

    const deleteProduct = (id) => {
        if (confirm("Confirm deletion of this listing?")) {
            setProducts(products.filter(p => p.id !== id))
            toast.success("Listing removed")
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My <span className="text-[#05DF72]">Inventory</span></h1>
                    <p className="text-slate-500 mt-1">Manage your battery listings and stock levels.</p>
                </div>
                <button onClick={() => setIsUploadModalOpen(true)} className="btn-primary">
                    <PlusIcon size={18} />
                    List New Battery
                </button>
            </div>

            <div className="card bg-white">
                <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full max-w-md">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search listings..."
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72] transition-all text-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Product</th>
                                <th className="px-6 py-4 font-semibold">Specs</th>
                                <th className="px-6 py-4 font-semibold">Price & Stock</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                                                <BatteryIcon size={20} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900">{product.name}</span>
                                                <span className="text-xs text-slate-400 uppercase tracking-tighter">{product.category}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-xs space-y-1">
                                            <p><span className="text-slate-400">Brand:</span> <span className="text-slate-700 font-medium">{product.brand}</span></p>
                                            <p><span className="text-slate-400">Cap:</span> <span className="text-slate-700 font-medium">{product.capacity}</span></p>
                                            <p><span className="text-slate-400">Cond:</span> <span className="text-slate-700 font-medium">{product.condition}</span></p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900 text-sm">₦{product.price.toLocaleString()}</span>
                                            <span className="text-xs text-slate-400">{product.quantity} units avail.</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="status-badge status-completed">{product.status}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-500 transition-colors">
                                                <Edit3Icon size={18} />
                                            </button>
                                            <button onClick={() => deleteProduct(product.id)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-500 transition-colors">
                                                <TrashIcon size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Upload Modal Mock */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold text-slate-900">List New Battery</h2>
                            <button onClick={() => setIsUploadModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                                <XIcon size={24} />
                            </button>
                        </div>
                        <form className="p-8 space-y-6" onSubmit={(e) => {
                            e.preventDefault()
                            toast.success("Listing published successfully!")
                            setIsUploadModalOpen(false)
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Battery Type</label>
                                    <select className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72]">
                                        {categories.map(c => <option key={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Brand</label>
                                    <input placeholder="e.g. Luminous" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Capacity (Ah / Voltage)</label>
                                    <input placeholder="e.g. 200Ah / 12V" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Condition</label>
                                    <select className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72]">
                                        <option>New</option>
                                        <option>Used</option>
                                        <option>Scrap</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Quantity Available</label>
                                    <input type="number" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Price per unit (₦)</label>
                                    <input type="number" className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72]" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-slate-700">Pickup Location (Lagos LGA)</label>
                                    <select className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72]">
                                        {lagosLGAs.map(lga => <option key={lga}>{lga}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Product Images</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-slate-400 hover:border-[#05DF72] hover:text-[#05DF72] cursor-pointer transition-colors">
                                    <UploadCloudIcon size={40} className="mb-2" />
                                    <p className="text-sm font-medium">Click to upload or drag & drop</p>
                                    <p className="text-[10px]">PNG, JPG up to 5MB</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Environmental Notes (Optional)</label>
                                <textarea placeholder="Describe recycling history or eco-impact..." rows={3} className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:border-[#05DF72] resize-none" />
                            </div>

                            <div className="flex gap-4 pt-4 sticky bottom-0 bg-white">
                                <button type="button" onClick={() => setIsUploadModalOpen(false)} className="flex-1 py-4 border border-slate-200 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition-colors">Cancel</button>
                                <button type="submit" className="flex-1 py-4 btn-primary">Publish Listing</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
