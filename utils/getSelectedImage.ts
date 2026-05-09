import { imageMapping } from "@/utils/imageMapping";
import { StaticImageData } from "next/image";


export const getSelectedImage = (selected: string[], abu: StaticImageData) => {
  if (selected.length === 0) return abu
  const key = selected.sort().join('-')
  if (key in imageMapping) {
    return imageMapping[key as keyof typeof imageMapping]
  }
  return abu
}