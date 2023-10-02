import { CardObject } from "../shared/types/types";
import Card from "./Card"




const CardList = () => {

    const cards: CardObject[] = [
        { para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero ut corporis cupiditate. Magnam minima aperiam assumenda rerum molestias nihil quod commodi. Molestiae odio provident laudantium rem illo harum quam?" ,  heading: "John" },
        { para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero ut corporis cupiditate. Magnam minima aperiam assumenda rerum molestias nihil quod commodi. Molestiae odio provident laudantium rem illo harum quam?" ,  heading: "Ali"},
        { para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero ut corporis cupiditate. Magnam minima aperiam assumenda rerum molestias nihil quod commodi. Molestiae odio provident laudantium rem illo harum quam?" ,  heading: "Smith"},
        { para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero ut corporis cupiditate. Magnam minima aperiam assumenda rerum molestias nihil quod commodi. Molestiae odio provident laudantium rem illo harum quam?" ,  heading: "Smith"},
     ]

    //  const cards2 = {
    //     0 : { para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero ut corporis cupiditate. Magnam minima aperiam assumenda rerum molestias nihil quod commodi. Molestiae odio provident laudantium rem illo harum quam?" ,  heading: "John" },
    //     1:  { para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero ut corporis cupiditate. Magnam minima aperiam assumenda rerum molestias nihil quod commodi. Molestiae odio provident laudantium rem illo harum quam?" ,  heading: "Ali"}
        
    //  }
    //  console.log(Object.values(cards2).map());

     const cardsList = cards.map((card,index) => <Card card={card}  key={index} />);
     console.log(cardsList, 'cardlist:');
    return ( 
        <>
            <div className="flex flex-wrap m-5 gap-10" >
                    {cardsList}
                    {/* <Card cards={cards}/> */}
            </div>
        </>
     );
}
 
export default CardList;

// { title:"Total Orders" , numberOf: '150,89' , percentage: "2.62", icon: "<box-icon name='moon' ></box-icon>" }