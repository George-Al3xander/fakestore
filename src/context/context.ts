import { createContext } from "react";
import { typeCartContext } from "../types/types";


export const CartContext = createContext<typeCartContext | undefined>(undefined)