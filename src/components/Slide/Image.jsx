const Image = (props) => {
    return(
        props.src ?
        <img className="img" src={props.src} alt="" />
        :
        <span>wait</span>
    )
}

export default Image