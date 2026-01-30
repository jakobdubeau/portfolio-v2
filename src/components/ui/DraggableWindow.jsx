"use client"
import Draggable from "react-draggable"
import { useRef } from "react"
import useSound from "use-sound"
import { useAudio } from "@/context/SoundContext"

export default function DraggableWindow({
    title = "window",
    onClose,
    children,
}) {
    const nodeRef = useRef(null)
    const { muted } = useAudio()
    const [play] = useSound("/sfx/click_general.mp3", { volume: 0.2 })
    
    return (
        <div className="fixed inset-0 pointer-events-none">
            <Draggable
                handle=".titlebar"
                nodeRef={nodeRef}
                bounds="parent"
            >
                <div ref={nodeRef} className="fixed pointer-events-auto top-30 left-30 shadow-md hover:shadow-lg border rounded-lg bg-neutral-950 border-white/20">
                    <div className="titlebar cursor-grab active:cursor-grabbing flex items-center justify-between px-3 py-2 text-stone-300 font-medium select-none">
                        <span>[{title}]</span>
                        <button
                            onClick={() => {
                                onClose()
                                !muted && play()
                            }}
                            className="text-stone-400 hover:text-neutral-200 duration-200 transition-all cursor-pointer"
                            aria-label="Close"
                        >
                            [x]
                        </button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </Draggable>
        </div>
    )
}