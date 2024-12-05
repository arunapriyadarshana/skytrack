import { useContext } from "react";
import { UpdateCountContext } from "@/context/UpdateCountContext";

export const useCountContext = () => {
  const context = useContext(UpdateCountContext);
  if (!context) {
    throw new Error("useCountContext must be used within a CountProvider");
  }
  return context;
};
