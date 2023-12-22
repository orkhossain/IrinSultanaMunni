import React, { useEffect } from 'react'
import './style.css'

const CustomCursor = () => {
  const cursor = React.useRef(null)
  const cursorCircle = React.useRef(null)
  const mouse = { x: -100, y: -100 }
  const pos = { x: 0, y: 0 }
  const speed = 0.1

  const updateCoordinates = (e: { clientX: number; clientY: number }) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateCoordinates)

    return () => {
      window.removeEventListener('mousemove', updateCoordinates)
    }
  }, [])

  const getAngle = (diffX: number, diffY: number) => {
    return (Math.atan2(diffY, diffX) * 180) / Math.PI
  }

  const getSqueeze = (diffX: number, diffY: number) => {
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

    if (cursor.current) {
      cursor.current.style.transform = translate
    }

    if (cursorCircle.current) {
      cursorCircle.current.style.transform = `${rotate} ${scale}`
    }
  }

  useEffect(() => {
    const loop = () => {
      updateCursor()
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)

    const cursorModifiers = document.querySelectorAll('[cursor-class]')

    cursorModifiers.forEach(cursorModifier => {
      cursorModifier.addEventListener('mouseenter', function () {
        const className = this.getAttribute('cursor-class')
        if (cursor.current) {
          cursor.current.classList.add(className)
        }
      })

      cursorModifier.addEventListener('mouseleave', function () {
        const className = this.getAttribute('cursor-class')
        if (cursor.current) {
          cursor.current.classList.remove(className)
        }
      })
    })

    return () => {
      cancelAnimationFrame(loop)
    }
  }, [])

  return (
    <div id="cursor" className="cursor" ref={cursor}>
      <div className="cursor__circle" ref={cursorCircle}></div>
    </div>
  )
}

export default CustomCursor
