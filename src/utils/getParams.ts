import { getAttrNameFromSelector } from "@/utils/getAttrNameFromSelector";

export const getParams = (element: HTMLElement, dataAttrSelector: string) => {
    return JSON.parse(
        element.getAttribute(
            getAttrNameFromSelector(dataAttrSelector)
        )
    )
};