'use client'
import { useState } from "react"
import { SearchIcon, CalendarIcon, TruckIcon, CheckCircle2Icon, AlertCircleIcon, XIcon } from "lucide-react"
import toast from "react-hot-toast"

export default function SellerOrders() {
    const [orders, setOrders] = useState([
        { id: "ORD-9901", buyer: "John Smith", amount: "₦190,000", status: "Approved", date: "2023-12-17", pickup: "2023-12-19", items: "Inverter Battery (x2)" },
        { id: "ORD-7721", buyer: "Emeka Obi", amount: "₦35,000", status: "Picked", date: "2023-12-15", pickup: "2023-12-16", items: "Car Battery 12V (x1)" },
        { id: "ORD-1102", buyer: "Sarah Usman", amount: "₦15,000", status: "Pending", date: "2023-12-18", pickup: "2023-12-21", items: "Lithium Scrap (10kg)" },
    ])

    const updateStatus = (id, newStatus) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o))
        toast.success(`Order ${newStatus.toLowerCase()}`)
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Incoming <span className="text-[#05DF72]">Orders</span></h1>
                <p className="text-slate-500 mt-1">Manage pickups and track your sales progress.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {orders.map((order) => (
                    <div key={order.id} className="card p-6 bg-white flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group">
                        <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${order.status === 'Pending' ? 'bg-orange-50 text-orange-500' : 'bg-green-50 text-green-500'}`}>
                                {order.status === 'Pending' ? <AlertCircleIcon /> : <CheckCircle2Icon />}
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-slate-900">{order.id}</span>
                                    <span className={`status-badge ${order.status === 'Pending' ? 'status-pending' : (order.status === 'Picked' ? 'status-picked' : 'status-approved')}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-sm font-medium text-slate-600 line-clamp-1">{order.items}</p>
                                <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
                                    <div className="flex items-center gap-1">
                                        <CalendarIcon size={14} />
                                        Ordered: {order.date}
                                    </div>
                                    <div className="flex items-center gap-1 text-[#05DF72] font-semibold">
                                        <TruckIcon size={14} />
                                        Pickup: {order.pickup}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                            <span className="text-xl font-bold text-slate-900">{order.amount}</span>
                            <div className="flex gap-2 w-full md:w-auto mt-2">
                                {order.status === 'Pending' && (
                                    <>
                                        <button onClick={() => updateStatus(order.id, 'Approved')} className="flex-1 md:flex-none btn-primary !py-2 !px-4 text-sm">Accept Order</button>
                                        <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50">Reschedule</button>
                                    </>
                                )}
                                {order.status === 'Approved' && (
                                    <button onClick={() => updateStatus(order.id, 'Picked')} className="flex-1 md:flex-none bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">Mark as Picked</button>
                                )}
                                {order.status === 'Picked' && (
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Awaiting Delivery Hub</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {orders.length === 0 && (
                <div className="p-20 text-center card bg-slate-50 border-dashed">
                    <p className="text-slate-400">No incoming orders yet.</p>
                </div>
            )}
        </div>
    )
}
