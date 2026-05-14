'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroThreeEffect() {
    const mountRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const mount = mountRef.current
        const shouldReduceMotion =
            window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ??
            false

        if (!mount || shouldReduceMotion) return

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
        renderer.setSize(mount.clientWidth, mount.clientHeight)
        renderer.domElement.style.width = '100%'
        renderer.domElement.style.height = '100%'
        mount.appendChild(renderer.domElement)

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            45,
            mount.clientWidth / mount.clientHeight,
            0.1,
            100
        )
        camera.position.z = 18

        const count = 120
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const colorA = new THREE.Color('#f8fff3')
        const colorB = new THREE.Color('#b9d4a9')

        for (let i = 0; i < count; i += 1) {
            const radius = 4 + Math.random() * 7
            const angle = Math.random() * Math.PI * 2
            const depth = (Math.random() - 0.5) * 6
            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = Math.sin(angle) * radius * 0.55
            positions[i * 3 + 2] = depth

            const mixed = colorA.clone().lerp(colorB, Math.random())
            colors[i * 3] = mixed.r
            colors[i * 3 + 1] = mixed.g
            colors[i * 3 + 2] = mixed.b
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        )
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const material = new THREE.PointsMaterial({
            size: 0.075,
            transparent: true,
            opacity: 0.72,
            vertexColors: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        })

        const points = new THREE.Points(geometry, material)
        points.position.x = 4.5
        points.position.y = -0.2
        scene.add(points)

        let frameId = 0
        const clock = new THREE.Clock()

        const render = () => {
            const elapsed = clock.getElapsedTime()
            points.rotation.z = elapsed * 0.035
            points.rotation.y = Math.sin(elapsed * 0.25) * 0.14
            points.position.y = Math.sin(elapsed * 0.45) * 0.18
            renderer.render(scene, camera)
            frameId = requestAnimationFrame(render)
        }

        const resize = () => {
            if (!mount) return
            camera.aspect = mount.clientWidth / mount.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(mount.clientWidth, mount.clientHeight)
        }

        window.addEventListener('resize', resize)
        render()

        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('resize', resize)
            geometry.dispose()
            material.dispose()
            renderer.dispose()
            renderer.domElement.remove()
        }
    }, [])

    return (
        <div
            ref={mountRef}
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                pointerEvents: 'none',
                mixBlendMode: 'screen',
                opacity: 0.82,
            }}
        />
    )
}
