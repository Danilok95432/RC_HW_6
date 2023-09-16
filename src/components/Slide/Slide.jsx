import Image from './Image'
import Description from './Description'

const Slide = (props) => {
    return(
        <div className="slide">
            <Image src={props.content.images[0]}/>
            <Description description={props.content.description}/>
        </div>
    )
}

export default Slide