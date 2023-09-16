import { useEffect, useState} from "react"
import SliderControls from "./SliderControls"
import Wrapper from "./Wrapper"
import '../../assets/css/Slider.css'
import Pagination from "./Pagination"
import Switcher from "./Switcher"


const Slider = (props) => {

    const [items, setItems] = useState([])
    const [currentProduct, setProduct] = useState(0)


    let start = currentProduct
    let limit = 10

    const changeSlide = (index) => {
        setProduct(index)
    }

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${limit}`)
            .then((res) => res.json())
            .then((json) => {
                setItems(json.products)
            })
    }, [])

    useEffect(() => {
        let step = items.length
        if(currentProduct == -1){
            step = items.length - 1 
            setProduct(step)
        }
        if(currentProduct == items.length)
        {
            step = 0
            setProduct(step)
        }
    }, [currentProduct])


    return(
        <div className="slider">
            <Switcher changeSlide={changeSlide} start={start} limit={limit}/>
            <Wrapper changeSlide={changeSlide} products={items} currentItem={currentProduct}/>
            <SliderControls changeSlide={changeSlide} currentItem={currentProduct}/>
            <Pagination count={items.length} currentItem={currentProduct} changeSlide={changeSlide} />
        </div>
    )
}

export default Slider