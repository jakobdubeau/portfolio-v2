"use client"

import { createContext, useContext, useState, useEffect } from "react"

// create context object (empty channel)
const SoundContext = createContext({
    muted: false,
    toggleMuted: () => {},
})

// convenience wrapper
export function useAudio() {
    return useContext(SoundContext)
}

// create state and give muted, setMuted
// call useSound to get current value
// whatever is wrapped inside SoundProvider will have access (children)
export function SoundProvider({ children }) {
    const [muted, setMuted] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem("muted")

        if (saved !== null) {
            setMuted(saved === "true")
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("muted", String(muted))
    }, [muted])

    const toggleMuted = () => {
        setMuted(mute => !mute)
    }

    return (
        <SoundContext.Provider value={{ muted, toggleMuted }}>
            {children}
        </SoundContext.Provider>
    )
}