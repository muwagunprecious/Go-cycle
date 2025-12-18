import gs_logo from "./gs_logo.jpg"
import happy_store from "./happy_store.webp"
import upload_area from "./upload_area.svg"
import gocycle from "./gocycle.png"
import hero_product_img1 from "./battery 2.png"
import hero_product_img2 from "./battery 2.png"
import product_img1 from "./battery 2.jpg"
import product_img2 from "./battery 3.jpg"
import product_img3 from "./battery 4.jpg"
import product_img4 from "./battery 5.jpg"
import product_img5 from "./battery 6.jpg"
import product_img6 from "./battery 7.jpg"
import product_img7 from "./battery 8.jpg"
import product_img8 from "./battery 9.jpg"
import product_img9 from "./battery 10.jpg"
import product_img10 from "./battery 11.jpg"
import product_img11 from "./battery 12.jpg"
import product_img12 from "./battery 13.jpg"
import { BatteryIcon, RecycleIcon, ShieldCheckIcon, TruckIcon } from "lucide-react";
import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"

export const assets = {
    upload_area, gocycle,
    hero_product_img1, hero_product_img2, gs_logo,
    product_img1, product_img2, product_img3, product_img4, product_img5, product_img6,
    product_img7, product_img8, product_img9, product_img10, product_img11, product_img12,
}

export const categories = ["Car Battery", "Inverter Battery", "Lithium-Ion", "UPS Battery", "Solar Battery", "Scrap/Recyclable"];

export const lagosLGAs = [
    "Ikeja", "Surulere", "Alimosho", "Kosofe", "Eti-Osa", "Agege", "Mushin",
    "Shomolu", "Apapa", "Badagry", "Epe", "Ikorodu", "Lagos Island",
    "Lagos Mainland", "Ifako-Ijaiye", "Ajeromi-Ifelodun", "Amuwo-Odofin",
    "Oshodi-Isolo", "Ojo", "Ibeju-Lekki"
];

export const dummyRatingsData = [
    { id: "rat_1", rating: 4.2, review: "Great battery life, works perfectly for my car setup. Very happy with the recycling service too!", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_1", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Car Battery 12V', category: 'Car Battery', id: 'prod_1' } },
    { id: "rat_2", rating: 5.0, review: "Excellent condition for a used battery. Picked up on time. Highly recommended.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_2", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Inverter Battery', category: 'Inverter Battery', id: 'prod_1' } },
]

export const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "EcoVolt Solutions",
    description: "EcoVolt Solutions is a leading vendor of sustainable energy storage. We specialize in refurbishing and recycling batteries to promote a circular economy in Lagos.",
    username: "ecovolt",
    address: "45 Ikeja Industrial Estate, Ikeja, Lagos",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "contact@ecovolt.com",
    contact: "+234 801 234 5678",
    createdAt: "2025-09-04T09:04:16.189Z",
    updatedAt: "2025-09-04T09:04:44.273Z",
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Adebayo Kola",
        email: "adebayo@ecovolt.com",
        image: gs_logo,
    }
}

export const productDummyData = [
    {
        id: "prod_1",
        name: "Classic Car Battery 12V",
        description: "Reliable 12V car battery for standard sedans. Tested for performance and durability. Part of our green initiative.",
        mrp: 50000,
        price: 35000,
        images: [product_img1, product_img2],
        category: "Car Battery",
        storeId: "store_1",
        inStock: true,
        condition: "Used",
        capacity: "65Ah",
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_2",
        name: "Deep Cycle Inverter Battery",
        description: "High-capacity deep cycle battery for solar and inverter setups. Excellent backup power for homes.",
        mrp: 120000,
        price: 95000,
        images: [product_img2],
        storeId: "store_1",
        inStock: true,
        condition: "Used",
        capacity: "200Ah",
        store: dummyStoreData,
        category: "Inverter Battery",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_3",
        name: "Lithium Scrap Battery Pack",
        description: "Damaged lithium packs suitable for material recovery and recycling. Price per KG.",
        mrp: 2000,
        price: 1500,
        images: [product_img3],
        storeId: "store_1",
        inStock: true,
        condition: "Scrap",
        capacity: "N/A",
        store: dummyStoreData,
        category: "Scrap/Recyclable",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
    }
];

export const ourSpecsData = [
    { title: "Eco-Friendly", description: "Every purchase supports battery recycling and reduces landfill waste.", icon: RecycleIcon, accent: '#05DF72' },
    { title: "Fast Pickup", description: "Schedule a collection in minutes. We handle the logistics.", icon: TruckIcon, accent: '#FF8904' },
    { title: "Verified Sellers", description: "All vendors are vetted for quality and environmental standards.", icon: ShieldCheckIcon, accent: '#A684FF' }
]

export const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "Emeka Obi",
    email: "emeka@example.com",
    street: "12 Admiralty Way",
    city: "Lekki Phase 1",
    state: "Lagos",
    zip: "101233",
    country: "Nigeria",
    phone: "08091234567",
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
}

export const couponDummyData = [
    { code: "RECYCLE20", description: "20% Off for your first recycling purchase", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:31.183Z" },
]

export const dummyUserData = {
    id: "user_1",
    name: "Emeka Obi",
    email: "emeka@example.com",
    image: profile_pic1,
    role: "BUYER",
    cart: {}
}

export const orderDummyData = [
    {
        id: "ord_101",
        total: 35000,
        status: "PICKED",
        userId: "user_1",
        storeId: "store_1",
        addressId: "addr_1",
        isPaid: true,
        paymentMethod: "Bank Transfer",
        createdAt: "2025-08-22T09:15:03.929Z",
        updatedAt: "2025-08-22T09:15:50.723Z",
        orderItems: [
            { orderId: "ord_101", productId: "prod_1", quantity: 1, price: 35000, product: productDummyData[0], },
        ],
        address: addressDummyData,
        user: dummyUserData
    }
]

export const storesDummyData = [
    {
        id: "store_1",
        userId: "user_1",
        name: "EcoVolt Solutions",
        description: "Specializing in used and scrap batteries.",
        username: "ecovolt",
        address: "Ikeja, Lagos",
        status: "approved",
        isActive: true,
        logo: happy_store,
        email: "adebayo@ecovolt.com",
        contact: "+234 801 234 5678",
        createdAt: "2025-08-22T08:22:16.189Z",
        updatedAt: "2025-08-22T08:22:44.273Z",
        user: dummyUserData,
    }
]

export const dummyUsers = [
    {
        id: "user_admin",
        name: "Admin Superuser",
        email: "admin@gocycle.com",
        whatsapp: "+234 900 000 0001",
        role: "ADMIN",
        status: "active",
        image: profile_pic1
    },
    {
        id: "user_buyer_1",
        name: "Emeka Obi",
        email: "emeka@example.com",
        whatsapp: "+234 809 123 4567",
        role: "BUYER",
        status: "active",
        lga: "Lekki Phase 1",
        image: profile_pic1,
        cart: {}
    },
    {
        id: "user_seller_1",
        name: "Adebayo Kola",
        email: "adebayo@ecovolt.com",
        whatsapp: "+234 801 234 5678",
        role: "SELLER",
        status: "active",
        businessName: "EcoVolt Solutions",
        lga: "Ikeja",
        image: profile_pic2
    },
    {
        id: "user_delivery_1",
        name: "Chidi Logistics",
        email: "chidi@deliver.com",
        whatsapp: "+234 700 888 9999",
        role: "DELIVERY",
        status: "active",
        image: profile_pic3
    }
];

export const dummyNotifications = [
    {
        id: "notif_1",
        userId: "user_admin",
        title: "New Vendor Application",
        message: "EcoVolt Solutions has applied to be a seller.",
        type: "SYSTEM",
        status: "unread",
        createdAt: new Date().toISOString()
    },
    {
        id: "notif_2",
        userId: "user_seller_1",
        title: "Product Approved",
        message: "Your 'Classic Car Battery 12V' listing is now live.",
        type: "SUCCESS",
        status: "unread",
        createdAt: new Date().toISOString()
    },
    {
        id: "notif_3",
        userId: "user_buyer_1",
        title: "Order Confirmed",
        message: "Your order ORD-101 has been confirmed by the seller.",
        type: "ORDER",
        status: "unread",
        createdAt: new Date().toISOString()
    }
];

export const dummyAdminDashboardData = {
    "orders": 124,
    "stores": 45,
    "products": 312,
    "revenue": 2450000,
    "pickedOrders": 89,
    "unpackedOrders": 15,
    "adminCommission": 245000,
    "allOrders": orderDummyData,
    "users": dummyUsers
}

export const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 12,
    "totalEarnings": 450000,
    "totalProducts": 8,
    "pendingPickups": 3
}

