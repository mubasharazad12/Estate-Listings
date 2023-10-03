import { CardObject } from "../shared/types/types";

type CardProps = {
    card :  CardObject;
}
    
function Card ({card} : CardProps)  { 
    const {title, numberOf, percentage, icon} = card;
    return ( 
        <div className=" group card flex justify-center items-center cursor-pointer">
            <div className="flex flex-col text-neutral-100"> 
                <span className=" pt-2 text-xs"> {title} </span>
                <span className=" pt-1 text-2xl font-bold "> {numberOf} </span>
                <span className="pt-6 flex "> <span className="fill-neutral-100"> <box-icon name='up-arrow-alt'></box-icon> </span> {percentage} &nbsp;  Since last month</span>
            </div>
            <span className='pr-1 w-7 fill-neutral-100 group-hover:fill-primary-900 ease-in-out duration-300'> {icon}</span> 

        </div>
     );
}
 
export default Card;