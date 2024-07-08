import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/hooks/use-theme"
import { Moon, Sun } from "lucide-react"


export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div >
      <Switch
        className="data-[state=checked]:bg-muted-foreground/20"
        onCheckedChange={(isTrue) => setTheme(isTrue ? "light" : "dark")}
        iconFalse={<Moon className="text-secondary-foreground/60" />}
        thumbIcon={theme === "dark" ? <Moon /> : <Sun />}
        iconTrue={<Sun className="text-yellow-600" />}
        defaultChecked={theme === "light"}
      />
    </div>
  )
}
