import { error } from '@sveltejs/kit';

const rooms = new Map([
    ["1", {
        name: "Superior Room",
        price: "N100,000",
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        ],
        features: [
            "Free Wifi",
            "Kitchenette",
            "Queen-sized bed",
        ]
    }], ["2", {
        name: "2 bedroom suite",
        price: "N150,000",
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        ],
        features: [
            "Free Wifi",
            "Kitchenette",
            "Queen-sized bed 2",
            "Bathrooms 2",
        ]
    }], ["3", {
        name: "3 bedroom suite",
        price: "N200,000",
        images: [
            "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        ],
        features: [
            "Free Wifi",
            "Kitchenette",
            "Queen-sized bed 2",
            "Bathrooms 3",
        ]
    }], ["4", {
        name: "4 bedroom Flat",
        price: "N300,000",
        images: [],
        features: [
            "Free Wifi",
            "Kitchen",
            "Queen-sized bed 4",
            "Bathrooms 4",
            "Living room 2",
        ]
    }]
])

export function load({ params }) {
    const slug = params.slug;
    if (rooms.has(slug)) {
        return {
            room: rooms.get(slug)
        };
    }
    throw error(404, 'Not found');
}