'use client'
import { PackageIcon, ShoppingCartIcon, CreditCardIcon, ArrowRightIcon, ShieldCheckIcon, MapPinIcon, GhostIcon, SparklesIcon, PhoneIcon } from "lucide-react"
import Loading from "@/components/Loading"
import { useState, useEffect } from "react"
import { productDummyData } from "@/assets/assets"
import Link from "next/link"
import { useSelector } from "react-redux"
import ProductCard from "@/components/ProductCard"

export default function BuyerDashboard() {
    const { user } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(true)
    const [activeOrder, setActiveOrder] = useState(null)

    useEffect(() => {
        const saved = localStorage.getItem('active_order')
        if (saved) {
            setActiveOrder(JSON.parse(saved))
        }
        setTimeout(() => setLoading(false), 800)
    }, [])

    if (loading) return <Loading />

    // LGA Based Recommendations
    const nearbyProducts = productDummyData.filter(p => !user?.lga || p.store?.address?.includes(user.lga)).slice(0, 3)

    const stats = [
        { label: 'Purchases', value: '₦125k+', icon: CreditCardIcon, color: 'text-[#05DF72]', bg: 'bg-[#05DF72]/10' },
        { label: 'Active', value: activeOrder ? '1' : '0', icon: PackageIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Saved Carbon', value: '12.5 kg', icon: SparklesIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
    ]

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-[#05DF72] mb-2 font-black uppercase tracking-widest text-[10px]">
                        <ShieldCheckIcon size={16} /> Eco-Member Gold
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 leading-tight">Welcome back, <span className="text-[#05DF72]">{user?.name?.split(' ')[0] || 'Guest'}</span></h1>
                    <p className="text-slate-400 font-bold text-sm mt-1">Impact score: 450 • {user?.lga || 'Lagos'} Region</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-3 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="w-10 h-10 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                        <MapPinIcon size={18} />
                    </div>
                    <div className="pr-6">
                        <p className="text-[10px] font-black uppercase text-slate-400">Primary Location</p>
                        <p className="text-xs font-black text-slate-900">{user?.lga || 'Lagos Main City'}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-[2.5rem] p-8 flex items-center gap-6 shadow-2xl shadow-slate-200/40 border border-slate-100 group hover:border-[#05DF72]/30 transition-all">
                        <div className={`${stat.bg} ${stat.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                            <stat.icon size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-black text-slate-900 leading-none">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
                {/* Status Column */}
                <div className="xl:col-span-3 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Live Tracking</h2>
                        <div className="w-2 h-2 rounded-full bg-[#05DF72] animate-ping"></div>
                    </div>

                    {activeOrder ? (
                        <Link href={`/buyer/track/${activeOrder.id}`} className="block">
                            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#05DF72]/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-[#05DF72] text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">{activeOrder.id}</span>
                                            <p className="text-xs font-bold text-slate-400">{activeOrder.product}</p>
                                        </div>
                                        <ArrowRightIcon className="text-white group-hover:translate-x-2 transition-transform" />
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                                        <div className="flex-1">
                                            <p className="text-[10px] font-black text-[#05DF72] uppercase tracking-widest mb-2">Current Milsetone</p>
                                            <h3 className="text-2xl font-black mb-4">{activeOrder.status}</h3>
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#05DF72] w-1/3 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-md">
                                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Verify Delivery</p>
                                            <p className="text-xl font-black text-white tracking-[0.2em]">{activeOrder.deliveryCode || 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <div className="bg-white rounded-[3rem] p-20 text-center border border-dashed border-slate-200">
                            <GhostIcon className="mx-auto text-slate-200 mb-6" size={64} />
                            <h3 className="text-lg font-black text-slate-900 mb-2">No active logistics</h3>
                            <p className="text-sm font-bold text-slate-400 mb-8 max-w-xs mx-auto">Build your sustainable power system by exploring our marketplace.</p>
                            <Link href="/shop" className="btn-primary !px-10">Shop Batteries</Link>
                        </div>
                    )}

                    {/* Related Products */}
                    <div className="pt-4">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Nearby Opportunities</h2>
                            <p className="text-[10px] font-black uppercase text-[#05DF72] bg-[#05DF72]/5 px-3 py-1 rounded-full">LGA: {user?.lga || 'Lagos'}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {nearbyProducts.map(p => <ProductCard key={p.id} product={p} />)}
                        </div>
                    </div>
                </div>

                {/* Profile & History Column */}
                <div className="xl:col-span-2 space-y-10">
                    <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl">
                        <div className="flex items-center gap-6 mb-10">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-slate-100 flex items-center justify-center font-black text-2xl text-[#05DF72]">
                                {user?.name?.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900">{user?.name}</h3>
                                <p className="text-xs font-bold text-slate-400">{user?.email}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <PhoneIcon size={16} className="text-[#05DF72]" />
                                    <span className="text-sm font-bold text-slate-900">{user?.whatsapp || 'No WhatsApp Set'}</span>
                                </div>
                                <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#05DF72]">Update</button>
                            </div>
                            <div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <MapPinIcon size={16} className="text-[#05DF72]" />
                                    <span className="text-sm font-bold text-slate-900">{user?.lga || 'Lagos State'}</span>
                                </div>
                                <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#05DF72]">Change</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[3rem] p-10 text-white">
                        <h2 className="text-xl font-black uppercase tracking-tighter mb-8">Circular Impact</h2>
                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-[#05DF72]/10 rounded-2xl flex items-center justify-center text-[#05DF72]">
                                    <SparklesIcon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest">12.5 kg Hazardous Waste</h4>
                                    <p className="text-[10px] font-bold text-white/40">Prevented from entering local landfills</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
