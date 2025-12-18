'use client'
import { dummyAdminDashboardData } from "@/assets/assets"
import Loading from "@/components/Loading"
import OrdersAreaChart from "@/components/OrdersAreaChart"
import { CircleDollarSignIcon, ShoppingBasketIcon, StoreIcon, TagsIcon, TruckIcon, PackageCheckIcon, PercentIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function AdminDashboard() {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₦'

    const [loading, setLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState({
        products: 0,
        revenue: 0,
        orders: 0,
        stores: 0,
        pickedOrders: 0,
        unpackedOrders: 0,
        adminCommission: 0,
        allOrders: [],
    })

    const dashboardCardsData = [
        { title: 'Total Sellers', value: dashboardData.stores, icon: StoreIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Total Products', value: dashboardData.products, icon: ShoppingBasketIcon, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Total Orders', value: dashboardData.orders, icon: TagsIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
        { title: 'Total Sales', value: currency + Number(dashboardData.revenue).toLocaleString(), icon: CircleDollarSignIcon, color: 'text-green-600', bg: 'bg-green-50' },
        { title: 'Picked Orders', value: dashboardData.pickedOrders, icon: PackageCheckIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Commission (Mock)', value: currency + Number(dashboardData.adminCommission).toLocaleString(), icon: PercentIcon, color: 'text-rose-600', bg: 'bg-rose-50' },
    ]

    const fetchDashboardData = async () => {
        setDashboardData(dummyAdminDashboardData)
        setLoading(false)
    }

    useEffect(() => {
        fetchDashboardData()
    }, [])

    if (loading) return <Loading />

    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Admin <span className="text-[#05DF72]">Overview</span></h1>
                <p className="text-slate-500 mt-1">Platform performance and logistics tracker.</p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
                {
                    dashboardCardsData.map((card, index) => (
                        <div key={index} className="card p-6 flex items-center justify-between group">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-slate-500">{card.title}</p>
                                <b className="text-2xl font-bold text-slate-800">{card.value}</b>
                            </div>
                            <div className={`${card.bg} ${card.color} p-4 rounded-2xl transition-transform group-hover:scale-110`}>
                                <card.icon size={28} />
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Charts and Lists */}
            <div className="grid grid-cols-1 gap-8 mt-12">
                <div className="card p-8 bg-white shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Sales Performance</h2>
                            <p className="text-sm text-slate-500">Revenue trends over the last 30 days.</p>
                        </div>
                        <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none">
                            <option>Last 30 Days</option>
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    <OrdersAreaChart allOrders={dashboardData.allOrders} />
                </div>
            </div>
        </div>
    )
}
