import { StaticImageData } from "next/image"
import image1 from "../../../public/imgs/yellow-one-slider.webp"
import image2 from "../../../public/imgs/yellow-two-slider.webp"
import image3 from "../../../public/imgs/red-slider.webp"
import image4 from "../../../public/imgs/black-slider.webp"
import image5 from "../../../public/imgs/blue-slider.webp"
export type SliderProduct = {
    id: string,
    name: string,
    src: StaticImageData,
    category: string
}

const sliderProducts : SliderProduct[] = [
    {
        id: "1",
        name: "كمبرسورات استيراد بمختلف القدرات",
        src: image1,
        category: "category 2"
    },
    {
        id: "2",
        name: "كمبرسورات استيراد بمختلف القدرات",
        src: image2,
        category: "category 1"
    },
    {
        id: "3",
        name: "مجففات هواء جديدة ماركة Chicago من مجموعة Atlas copco",
        src: image3,
        category: "category 1"
    },
    {
        id: "4",
        name: "بوستر 40 بار من Chicago",
        src: image4,
        category: "category 2"
    },
    {
        id: "5",
        name: "فلاتر خط جميع المقاسات إيطالى وصينى",
        src: image5,
        category: "category 2"
    }
]

export default sliderProducts;