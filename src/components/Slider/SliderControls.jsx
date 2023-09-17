import '../../assets/scss/Slider.scss'

const SliderControls = (props) => {

    let step = props.currentItem

    return(
        <>
            <button id='prev' className='prev-btn' onClick={
                () => props.changeSlide(--step)
                }></button>
            <button id='next' className='next-btn' onClick={
                () => props.changeSlide(++step)
                }></button>
        </>
    )
}

export default SliderControls