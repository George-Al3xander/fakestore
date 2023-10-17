import { createContext } from "react";
import { typeProduct } from "../types/types";


export const CartContext = createContext<{cart: typeProduct[], setCart: any} | undefined>(undefined)