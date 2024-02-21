import React, { Children, FC, ReactNode, useRef, useState } from 'react'

type ScrollableContentT = {
    children:ReactNode
}
const ScrollableContent:FC<ScrollableContentT> = ({children}) => {
    const containerRef = useRef< HTMLInputElement>(null);
    const [dragStart, setDragStart] = useState<number | null>(null);
    // beacuse of link child we must first disable links and then enable drag
    const lockScroll = useRef(true)
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        lockScroll.current = false
        setDragStart(event.clientX);
        // beacuse of link child we must first disable links and then enable drag
        if(containerRef.current && containerRef.current?.firstElementChild) {
            (containerRef.current?.firstElementChild as HTMLDivElement).style.pointerEvents = "auto"
            containerRef.current.style.cursor = "auto"
        }
    };

    const handleMouseMove = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(lockScroll.current) return
        if(containerRef.current && containerRef.current?.firstElementChild) {
            (containerRef.current?.firstElementChild as HTMLDivElement).style.pointerEvents = "none"
            containerRef.current.style.cursor = "pointer"
        }
        if (dragStart !== null) {
            const container = containerRef.current
            if(container){
                container.scrollLeft += dragStart - event.clientX
                setDragStart(event.clientX);
            }
        }
    };

    const handleMouseUp = () => {
        lockScroll.current = true
        setDragStart(null);
        if(containerRef.current && containerRef.current?.firstElementChild) {
            (containerRef.current?.firstElementChild as HTMLDivElement).style.pointerEvents = "auto"
            containerRef.current.style.cursor = "auto"
        }
    };

    return (
        <div ref={containerRef} className='overflow-x-auto no-scrollbar' onMouseDown={(e) => handleMouseDown(e)} onMouseLeave={handleMouseUp} onMouseMove={(e) => handleMouseMove(e)} onMouseUp={handleMouseUp}>
            {children}
        </div>
    )
}

export default ScrollableContent