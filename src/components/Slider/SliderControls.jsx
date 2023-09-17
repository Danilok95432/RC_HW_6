import '../../assets/scss/Slider.scss'

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