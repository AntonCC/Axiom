import Product1 from '../../imgs/lb2.jpg'
import Product2 from '../../imgs/product2.jpg'

// switchSide false means img is on right side of desktop view
export const productInfo = [
  {
    id: 1,
    switchSide: false,
    title: "Axiom G1",
    subTitle: "TrueSound Technology",
    description: "For the best sound experience, turn to the Axiom G1. With all new and upgraded drivers, the sound quality is unmatched.",
    activePrice: "$149.99",
    listPrice: "$199.99",
    productImg: Product1,
    quantity: 1
  },
  {
    id: 2,
    switchSide: true,
    title: "Axiom C4",
    subTitle: "Quality That Speaks For Itself",
    description: "Experience the award winning Axiom quality, without breaking the bank. The Axiom C4 is now being offered at it's lowest price ever.",
    activePrice: "$129.99",
    listPrice: "$179.99",
    productImg: Product2,
    quantity: 1
  }
]