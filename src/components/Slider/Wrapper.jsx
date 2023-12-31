import { useEffect, useState } from 'react'
import '../../assets/scss/Slider.scss'
import '../Slide/Slide'
import Slide from '../Slide/Slide'
import Preloader from '../Slide/Preloader'

const Wrapper = (props) => {

    const [firstPoint, setFirstPoint] = useState(null)
    let step = props.currentItem

    const touchStart = (e) => {
        setFirstPoint(e.touches[0].clientX)
    }

    const touchEnd = (e) => {
        let endPoint = e.changedTouches[0].clientX
        let det = endPoint - firstPoint
        if(det > 0)
        {
            props.changeSlide(--step)
        }
        else{
            props.changeSlide(++step)
        }
    }

    return(
        <div className="wrapper" 
        style={{ transform: `translateX(-${props.currentItem * 100}%)` }}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        >
            {
               props.products.length === 0 ?
               <Preloader />
               :
               props.products.map( product => {
                return <Slide key={product.id} content={product} />
                })
            }
        </div>
    )
}

export default Wrapper