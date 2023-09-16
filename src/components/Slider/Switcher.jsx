import { useEffect, useState} from "react"

const Switcher = (props) => {

    const [auto, setAutoSlide] = useState(false)
    const [switchMode, setSwitchMode] = useState('switch')

    useEffect(() => {
        let step = props.start
        if (!auto) return;
        const interval = setInterval(() => {
            if(step == props.limit) 
                step = 0; 
            props.changeSlide(++step)
        }, 1000);
        
        return () => {
          clearInterval(interval);
        };
      }, [auto]);

    return(
        <div className="switcher">
            <label htmlFor='toogle'>Режим автоматического переключения слайдов</label>
            <input id="toogle" type="checkbox" name="checkboxName" className="checkbox"/>
            <div onClick={() => {
                setSwitchMode(!auto ? 'switch switchOn' : 'switch'); 
                setAutoSlide(!auto);
                }} className={switchMode} ></div>
        </div>
    )
}

export default Switcher