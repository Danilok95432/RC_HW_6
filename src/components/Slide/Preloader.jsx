import React from "react"
import preloader from '../../assets/preloader.svg'

const Preloader = (props) =>{
    return(
        <div className="preloader">
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader