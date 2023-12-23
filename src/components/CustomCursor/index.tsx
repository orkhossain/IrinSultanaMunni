import React, { useEffect, useRef } from 'react'
import './style.css'

const CustomCursor: React.FC = () => {
  const cursor = useRef<HTMLDivElement>(null)
  const cursorCircle = useRef<HTMLDivElement>(null)
  const mouse = { x: -100, y: -100 }
  const pos = { x: 0, y: 0 }
  const speed = 0.1
  const loopRef = useRef<number | null>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateCoordinates = (e: MouseEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateCoordinates)

    return () => {
      window.removeEventListener('mousemove', updateCoordinates)
      loopRef.current && cancelAnimationFrame(loopRef.current)
    }
  }, [updateCoordinates])

  const getAngle = (diffX: number, diffY: number): number => {
    return (Math.atan2(diffY, diffX) * 180) / Math.PI
  }

  const getSqueeze = (diffX: number, diffY: number): number => {
    const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
    const maxSqueeze = 0.15
    const accelerator = 1500
    return Math.min(distance / accelerator, maxSqueeze)
  }

  const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x)
    const diffY = Math.round(mouse.y - pos.y)

    pos.x += diffX * speed
    pos.y += diffY * speed

    const angle = getAngle(diffX, diffY)
    const squeeze = getSqueeze(diffX, diffY)

    const scale = `scale(${1 + squeeze}, ${1 - squeeze})`
    const rotate = `rotate(${angle}deg)`
    const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`

    cursor.current?.style.setProperty('transform', translate)
    cursorCircle.current?.style.setProperty('transform', `${rotate} ${scale}`)

    loopRef.current = requestAnimationFrame(updateCursor)
  }

  useEffect(() => {
    loopRef.current = requestAnimationFrame(updateCursor)

    const cursorModifiers =
      document.querySelectorAll<HTMLDivElement>('[cursor-class]')

    cursorModifiers.forEach(cursorModifier => {
      cursorModifier.addEventListener('mouseenter', () => {
        const className = cursorModifier.getAttribute('cursor-class')
        cursor.current?.classList.add(className || '')
      })

      cursorModifier.addEventListener('mouseleave', () => {
        const className = cursorModifier.getAttribute('cursor-class')
        cursor.current?.classList.remove(className || '')
      })
    })

    return () => {
      loopRef.current && cancelAnimationFrame(loopRef.current)
    }
  }, [])

  return (
    <div id="cursor" className="cursor" ref={cursor}>
      <div className="cursor__circle" ref={cursorCircle}></div>
    </div>
  )
}

export default CustomCursor
