import { StaticImageData } from "next/image"

import image1 from "../../../../public/imgs/products/body.jpg"
import image2 from "../../../../public/imgs/products/helmet.jpg"
import image3 from "../../../../public/imgs/products/eyes.png"
import image4 from "../../../../public/imgs/products/gloves.png"
import image5 from "../../../../public/imgs/products/shoes.jpg"

export type Product = {
    id: string,
    name: string,
    src: StaticImageData,
    category: string
}

const products : Product[] = [
    {
        id: "1",
        name: "body protection",
        src: image1,
        category: "body"
    },
    {
        id: "2",
        name: "head protection",
        src: image2,
        category: "head"
    },
    {
        id: "3",
        name: "head protection",
        src: image2,
        category: "head"
    },
    {
        id: "4",
        name: "body protection",
        src: image1,
        category: "body"
    },
    {
        id: "5",
        name: "body protection",
        src: image1,
        category: "body"
    },
    {
        id: "6",
        name: "body protection",
        src: image1,
        category: "body"
    },
    {
        id: "7",
        name: "body protection",
        src: image1,
        category: "body"
    },
    {
        id: "8",
        name: "body protection",
        src: image1,
        category: "body"
    },
    {
        id: "9",
        name: "body protection",
        src: image1,
        category: "body"
    },
    {
        id: "10",
        name: "eyes protection",
        src: image3,
        category: "eyes"
    },
    {
        id: "11",
        name: "eyes protection",
        src: image3,
        category: "eyes"
    },
    {
        id: "12",
        name: "eyes protection",
        src: image3,
        category: "eyes"
    },
    {
        id: "13",
        name: "feet protection",
        src: image5,
        category: "feet"
    },
    {
        id: "14",
        name: "feet protection",
        src: image5,
        category: "feet"
    },
    {
        id: "15",
        name: "feet protection",
        src: image5,
        category: "feet"
    },
    {
        id: "16",
        name: "hands protection",
        src: image4,
        category: "hands"
    },
    {
        id: "17",
        name: "hands protection",
        src: image4,
        category: "hands"
    },
    {
        id: "18",
        name: "hands protection",
        src: image4,
        category: "hands"
    }
]

export default products;