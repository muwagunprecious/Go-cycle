'use client'
import { BellIcon, CheckCircleIcon, INFO_ICON, AlertTriangleIcon, PackageIcon, UserCheckIcon } from "lucide-react"
import { useState } from "react"

const INFO_ICON_LUCIDE = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
)

export default function AdminNotifications() {
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'Welcome', title: 'New User Registration', message: 'A new user (John Doe) has joined the platform as a Buyer.', time: '2 mins ago', status: 'unread', icon: UserCheckIcon, color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 2, type: 'Approval', title: 'Vendor Application', message: 'EcoVolt Solutions has submitted their legal documents for verification.', time: '1 hour ago', status: 'unread', icon: CheckCircleIcon, color: 'text-[#05DF72]', bg: 'bg-green-50' },
        { id: 3, type: 'Transaction', title: 'New Order: ORD-7721', message: 'Payment confirmed for Order ORD-7721. Awaiting pickup approval.', time: '3 hours ago', status: 'read', icon: PackageIcon, color: 'text-purple-500', bg: 'bg-purple-50' },
        { id: 4, type: 'Pickup', title: 'Pickup Rescheduled', message: 'Vendor PowerCell Ltd requested a pickup delay for order ORD-8812.', time: 'Yesterday', status: 'read', icon: AlertTriangleIcon, color: 'text-orange-500', bg: 'bg-orange-50' },
    ])

    const markAllRead = () => {
        setNotifications(notifications.map(n => ({ ...n, status: 'read' })))
    }

    return (
        <div className="p-6 max-w-5xl">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">System <span className="text-[#05DF72]">Notifications</span></h1>
                    <p className="text-slate-500 mt-1">Stay updated with platform activities and logistics alerts.</p>
                </div>
                <button onClick={markAllRead} className="text-sm font-bold text-[#05DF72] hover:underline">
                    Mark all as read
                </button>
            </div>

            <div className="space-y-4">
                {notifications.map((note) => (
                    <div key={note.id} className={`card p-5 flex gap-5 items-start transition-all hover:border-[#05DF72]/30 ${note.status === 'unread' ? 'border-l-4 border-l-[#05DF72] bg-white' : 'bg-slate-50/50'}`}>
                        <div className={`${note.bg} ${note.color} p-3 rounded-2xl shrink-0`}>
                            <note.icon size={22} />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className={`font-bold ${note.status === 'unread' ? 'text-slate-900' : 'text-slate-600'}`}>{note.title}</h3>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{note.time}</span>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{note.message}</p>
                            <div className="flex items-center gap-3 mt-4">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${note.status === 'unread' ? 'bg-[#05DF72] text-white' : 'bg-slate-200 text-slate-500'}`}>
                                    {note.status}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Type: {note.type}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center p-10 border-2 border-dashed border-slate-100 rounded-[2rem]">
                <BellIcon className="mx-auto text-slate-200 mb-4" size={48} />
                <p className="text-slate-400 font-medium">No more notifications for today.</p>
            </div>
        </div>
    )
}
