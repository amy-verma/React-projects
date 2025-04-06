import Accordian from "./accordian"
import data from "../data.json"

const Faq=()=>{
    console.log(data.faqs)
    return(
        <div>
            <h1>FAQ'S</h1>
           {
         data.faqs.map((obj,index)=>{
            return <Accordian key={index} qna={obj}/>
         })
           }
        </div>
    )
}
export default Faq