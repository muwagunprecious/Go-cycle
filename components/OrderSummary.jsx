'use client'
import { PlusIcon, SquarePenIcon, XIcon, ShieldCheckIcon, WalletIcon, TruckIcon } from 'lucide-react';
import React, { useState } from 'react'
import AddressModal from './AddressModal';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import CheckoutModal from './CheckoutModal';

const OrderSummary = ({ totalPrice, items }) => {

    const currency = '₦';

    const router = useRouter();

    const addressList = useSelector(state => state.address.list);

    const [paymentMethod, setPaymentMethod] = useState('Pay Now');
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [couponCodeInput, setCouponCodeInput] = useState('');
    const [coupon, setCoupon] = useState('');
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const handleCouponCode = async (event) => {
        event.preventDefault();
        toast.error("Invalid coupon code for this region.")
    }

    const openCheckout = () => {
        if (!selectedAddress && addressList.length === 0) {
            toast.error("Please add a delivery address first.")
            return
        }
        setIsCheckoutOpen(true)
    }

    return (
        <div className='w-full max-w-lg lg:max-w-[400px] card !p-8 border-2 border-slate-100 shadow-xl shadow-slate-200/50'>
            <div className='flex items-center gap-2 text-[#05DF72] mb-6'>
                <ShieldCheckIcon size={20} />
                <h2 className='text-lg font-black uppercase tracking-wider'>Payment Summary</h2>
            </div>

            <div className="space-y-4 mb-8">
                <p className='text-slate-400 text-[10px] font-black uppercase tracking-widest pl-1'>Payment Method</p>
                <div className="grid grid-cols-1 gap-2">
                    <button
                        onClick={() => setPaymentMethod('Pay Now')}
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${paymentMethod === 'Pay Now' ? 'border-[#05DF72] bg-[#05DF72]/5' : 'border-slate-100'}`}
                    >
                        <div className="flex items-center gap-3">
                            <WalletIcon size={18} className={paymentMethod === 'Pay Now' ? 'text-[#05DF72]' : 'text-slate-400'} />
                            <span className={`text-sm font-bold ${paymentMethod === 'Pay Now' ? 'text-slate-900' : 'text-slate-500'}`}>Pay Now</span>
                        </div>
                        {paymentMethod === 'Pay Now' && <div className="w-2 h-2 bg-[#05DF72] rounded-full"></div>}
                    </button>

                    <button
                        onClick={() => setPaymentMethod('Pay on Delivery')}
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${paymentMethod === 'Pay on Delivery' ? 'border-[#05DF72] bg-[#05DF72]/5' : 'border-slate-100'}`}
                    >
                        <div className="flex items-center gap-3">
                            <TruckIcon size={18} className={paymentMethod === 'Pay on Delivery' ? 'text-[#05DF72]' : 'text-slate-400'} />
                            <span className={`text-sm font-bold ${paymentMethod === 'Pay on Delivery' ? 'text-slate-900' : 'text-slate-500'}`}>Pay on Delivery</span>
                        </div>
                        {paymentMethod === 'Pay on Delivery' && <div className="w-2 h-2 bg-[#05DF72] rounded-full"></div>}
                    </button>
                </div>
            </div>

            <div className='my-8 pt-8 border-t border-slate-100'>
                <p className='text-slate-400 text-[10px] font-black uppercase tracking-widest pl-1 mb-4'>Shipping Address</p>
                {
                    selectedAddress ? (
                        <div className='flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100'>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-800">{selectedAddress.name}</p>
                                <p className="text-xs text-slate-500 mt-1">{selectedAddress.city}, {selectedAddress.state}</p>
                            </div>
                            <button onClick={() => setSelectedAddress(null)} className='p-2 hover:bg-slate-200 rounded-full transition-colors'>
                                <SquarePenIcon className='text-slate-400' size={18} />
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {
                                addressList.length > 0 && (
                                    <select className='w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#05DF72]/20 text-sm font-medium' onChange={(e) => setSelectedAddress(addressList[e.target.value])} >
                                        <option value="">Select an address...</option>
                                        {
                                            addressList.map((address, index) => (
                                                <option key={index} value={index}>{address.name} - {address.city}</option>
                                            ))
                                        }
                                    </select>
                                )
                            }
                            <button className='flex items-center gap-2 text-[#05DF72] text-[10px] font-black uppercase tracking-widest bg-[#05DF72]/5 px-4 py-2 rounded-lg hover:bg-[#05DF72]/10 transition-colors' onClick={() => setShowAddressModal(true)} >
                                <PlusIcon size={14} /> Add New Address
                            </button>
                        </div>
                    )
                }
            </div>

            <div className='pb-6 border-b border-slate-100'>
                <div className='space-y-3'>
                    <div className='flex justify-between text-xs font-bold text-slate-400 uppercase tracking-tighter'>
                        <span>Subtotal:</span>
                        <span className="text-slate-900">{currency}{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className='flex justify-between text-xs font-bold text-slate-400 uppercase tracking-tighter'>
                        <span>Shipping:</span>
                        <span className="text-[#05DF72]">Lagos Standard Free</span>
                    </div>
                </div>

                <form onSubmit={handleCouponCode} className='flex gap-3 mt-6'>
                    <input onChange={(e) => setCouponCodeInput(e.target.value)} value={couponCodeInput} type="text" placeholder='Coupon Code' className='bg-slate-50 p-4 rounded-2xl w-full outline-none text-xs font-medium' />
                    <button className='bg-slate-900 text-white px-6 rounded-2xl font-bold text-xs hover:bg-slate-800 active:scale-95 transition-all'>Apply</button>
                </form>
            </div>

            <div className='flex justify-between py-8'>
                <p className="font-black text-slate-900 uppercase text-sm">Grand Total:</p>
                <p className='font-black text-2xl text-slate-900 tracking-tighter'>{currency}{totalPrice.toLocaleString()}</p>
            </div>

            <button onClick={openCheckout} className='w-full btn-primary !py-5 shadow-2xl shadow-[#05DF72]/30'>
                Place Order Securely
            </button>

            {showAddressModal && <AddressModal setShowAddressModal={setShowAddressModal} />}

            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                product={items?.[0] || { name: 'Cart Order', price: totalPrice }}
                paymentMethod={paymentMethod}
            />

        </div>
    )
}

export default OrderSummary
