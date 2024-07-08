import { getPathRoot } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const useActivePath = () => {
  const [active, setActive] = useState("")
  const location = useLocation()
  useEffect(() => {
    const result = getPathRoot(location.pathname)
    setActive(result || "/")
  }, [location])

  return { active }

};

export { useActivePath };