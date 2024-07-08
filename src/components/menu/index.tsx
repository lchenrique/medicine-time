/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn, getPathRoot } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { EllipsisIcon } from "lucide-react";

type MenuItems = {
  key: string,
  label: ReactNode,
  path: string
  disabled?: boolean
}

export interface IMenuProps {
  items: MenuItems[]
  activeKey?: string[]
  className?: string
}


const Menu = ({ items, activeKey, className }: IMenuProps) => {
  const [data] = useState(items)
  const [active, setActive] = useState<string[] | null>()
  const [position, setPosition] = useState("")
  const [width, setWidth] = useState("")
  const [widthMenu] = useState("")
  const dedectRef = useRef<any>()
  const navigate = useNavigate()

  const widthF = (e: any) => `calc(${e.offsetWidth}px - 2rem)`
  const leftF = (e: any) => `calc(${e.offsetLeft}px + 1rem)`

  const handleMenuChange = (key: string, path: string) => {
    setActive([key])
    // setPosition(leftF(e.currentTarget))
    // setWidth(widthF(e.currentTarget))

    navigate(path)
  }

  const handleMenuHover = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setPosition(leftF(e.currentTarget))
    setWidth(widthF(e.currentTarget))
  }

  const updateActiveBorder = () => {

    const activeMenuItem = document.getElementsByClassName("menu-item-active")
    Array.from(activeMenuItem).forEach((item) => {
      if (item.getAttribute("data-active") === "true") {
        setPosition(leftF(item))
        setWidth(widthF(item))
      }
    })

  }

  useEffect(() => {
    if (activeKey) {
      setActive(activeKey)
    }

    return () => {
      setActive(null)
    }
  }, [activeKey])

  useEffect(() => {
    updateActiveBorder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  useEffect(() => {
    const handleResize = () => {
      const menuItems = document.getElementsByClassName("item-container")
      const menuRight = dedectRef?.current.getClientRects().item(0)?.left

      for (let i = 0; i < menuItems.length; i++) {
        if (menuRight && (menuItems[i] as any).getClientRects().item(0)?.right >= menuRight + .1) {
          dedectRef.current.classList.remove("opacity-0")
          menuItems[i].classList.add("opacity-0")
          menuItems[i].classList.add("pointer-events-none")
        }
        else if (menuRight &&  menuRight > (menuItems[i] as any).getClientRects().item(0)?.width ) {
          menuItems[i].classList.remove("pointer-events-none")
          menuItems[i].classList.remove("opacity-0")
          dedectRef.current.classList.add("opacity-0")
        }
      }
    
    }

    window.addEventListener("resize", handleResize)

    handleResize()
  }, [data])

  return (


    <ul
      id="menu"
      onMouseLeave={updateActiveBorder}
      className="menu flex items-center h-full relative overflow-hidden 0 pr-16"
      style={{width: widthMenu || ""}}
      >

      {data.map(({ label, key, path, disabled }, i, arr) => {
        const result = getPathRoot(path) || "/"

        const isActive = active?.length ? active?.includes(result) : active?.includes(result)

        return <div  data-key={key} key={key} data-active={isActive} className="item-container  h-full w-full flex items-center">
            {(i >= 1 && i < arr.length ) && <div className="h-7 bg-border w-[1.5px]" />}
          <li
            key={i}
            data-disabled={disabled}
            onMouseEnter={(e) => !disabled && handleMenuHover(e)}
            onClick={() => !disabled && handleMenuChange(key, path)}
            data-active={isActive}
            className={cn(
              "menu-item px-4",
              { [`menu-item-active`]: isActive },
              className)}>

            {label}
          </li>
        
        </div>
      })}
      <div style={{ left: position, width }} className="bg-gradient-to-r from-auxiliary to-primary dark:to-primary-foreground  h-[2px] bottom-0 absolute transition-all" />

      <div ref={dedectRef} className="absolute cursor-pointer h-full w-16   -right-0 z-[999] top-0 text-muted-foreground hover:text-primary dark:hover:text-primary-foreground" >
        <div className="absolute bg-background left-2 top-1/2 -translate-y-1/2"><EllipsisIcon className="text-inherit" /> </div>
      </div>
    </ul>



  );
};

export { Menu };