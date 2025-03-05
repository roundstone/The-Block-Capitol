import { useInView } from "framer-motion";
import { RefObject } from "react";

export const useIsInView = (ref: RefObject<Element | null>) => {
    return useInView(ref, { once: true });
};