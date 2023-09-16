import '../../assets/css/Slider.css'

const SliderControls = (props) => {

    let step = props.currentItem

    return(
        <>
            <button id='prev' onClick={
                () => props.changeSlide(--step)
                }></button>
            <button id='next' onClick={
                () => props.changeSlide(++step)
                }></button>
        </>
    )
}

export default SliderControls