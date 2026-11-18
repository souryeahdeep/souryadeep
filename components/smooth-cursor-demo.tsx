import { SmoothCursor } from "@/components/ui/smooth-cursor"

export function SmoothCursorDemo() {
  return (
    <>
      <span className="hidden md:block"></span>
      <span className="block md:hidden">
        SmoothCursor is disabled on touch devices
      </span>
      
    </>
  )
}
