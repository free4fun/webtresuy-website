import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MdNightlight, MdWbSunny } from "react-icons/md"
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid mismatch between SSR and hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? (<MdWbSunny className="h-5 w-5" /> ) : ( <MdNightlight className="h-5 w-5" /> )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
