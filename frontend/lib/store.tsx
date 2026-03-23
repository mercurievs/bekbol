"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type StoreState = {
    favorites: string[];
    cart: string[];
    toggleFavorite: (id: string) => void;
    addToCart: (id: string) => void;
    removeFromCart: (id: string) => void;
    isFavorite: (id: string) => boolean;
    isInCart: (id: string) => boolean;
};

const StoreContext = createContext<StoreState | null>(null);

const FAVORITES_KEY = "bekbol_favorites";
const CART_KEY = "bekbol_cart";

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [cart, setCart] = useState<string[]>([]);

    useEffect(() => {
        const favRaw = localStorage.getItem(FAVORITES_KEY);
        const cartRaw = localStorage.getItem(CART_KEY);
        if (favRaw) {
            setFavorites(JSON.parse(favRaw));
        }
        if (cartRaw) {
            setCart(JSON.parse(cartRaw));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }, [cart]);

    const value = useMemo<StoreState>(() => {
        const toggleFavorite = (id: string) => {
            setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
        };

        const addToCart = (id: string) => {
            setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));
        };

        const removeFromCart = (id: string) => {
            setCart((prev) => prev.filter((item) => item !== id));
        };

        const isFavorite = (id: string) => favorites.includes(id);
        const isInCart = (id: string) => cart.includes(id);

        return { favorites, cart, toggleFavorite, addToCart, removeFromCart, isFavorite, isInCart };
    }, [favorites, cart]);

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error("useStore must be used within StoreProvider");
    }
    return context;
}
