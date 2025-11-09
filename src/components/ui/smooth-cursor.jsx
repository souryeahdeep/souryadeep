import { useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"
import cursor from "/cursor.png"
import pointer from "/pointer.png"
// 👇 You can use two images if you want different looks
const NormalCursor = () => (
  <img
    src="/cursor.png"
    alt="cursor"
    width={40}
    height={40}
    style={{
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    }}
  />
)

const PointerCursor = () => (
  <img
    src="/pointer.png"
    alt="cursor pointer"
    width={40}
    height={40}
    style={{
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    }}
  />
)

export function SmoothCursor({
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}) {
  const [isMoving, setIsMoving] = useState(false)
  const [isPointer, setIsPointer] = useState(false) // 👈 detect pointer mode
  const lastMousePos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())

  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  })

  useEffect(() => {
    const updateVelocity = (currentPos) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastUpdateTime.current
      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        }
      }
      lastUpdateTime.current = currentTime
      lastMousePos.current = currentPos
    }

    const smoothMouseMove = (e) => {
      const currentPos = { x: e.clientX, y: e.clientY }
      updateVelocity(currentPos)

      // detect if hovering a clickable element
      const target = e.target
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.onclick ||
        window.getComputedStyle(target).cursor === "pointer"
      setIsPointer(isClickable)

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
      )

      cursorX.set(currentPos.x)
      cursorY.set(currentPos.y)

      if (speed > 0.1) {
        scale.set(0.95)
        setIsMoving(true)
        const timeout = setTimeout(() => {
          scale.set(1)
          setIsMoving(false)
        }, 150)
        return () => clearTimeout(timeout)
      }
    }

    let rafId
    const throttledMouseMove = (e) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e)
        rafId = 0
      })
    }

    document.body.style.cursor = "none"
    window.addEventListener("mousemove", throttledMouseMove)

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      document.body.style.cursor = "auto"
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY, scale])

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        scale: scale,
        zIndex: 100,
        pointerEvents: "none",
        willChange: "transform",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      {isPointer ? <PointerCursor /> : <NormalCursor />}
    </motion.div>
  )
}
