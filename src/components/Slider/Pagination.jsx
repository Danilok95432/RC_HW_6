import { useEffect } from "react"

const Pagination = (props) => {

    const dots = [];

    const createPagination = () => {
        for (let i = 0; i < props.count; i++) {
            dots.push(
                i == props.currentItem ?
                <span className="circle active" key={`dot-${i}`} number={i}></span>
                :
                <span onClick={() => props.changeSlide(i)} className="circle" key={`dot-${i}`} number={i}></span>
            );
        }
        return dots;
    }


    return(
        <div className="pagination">
            {
                createPagination()
            }
        </div>
    )
}

export default Pagination