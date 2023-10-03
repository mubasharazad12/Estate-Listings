import { CardObject } from "../shared/types/types";
import Card from "./Card"




const CardList = () => {

    const cards: CardObject[] = [
        { title:"Total Orders" , numberOf: 1508 , percentage: 23.62, icon: <box-icon size="lg" name='list-ul'></box-icon>},
        { title:"Property List" , numberOf: 500 , percentage: 1.62, icon: <box-icon size="lg" name='buildings' type='solid' ></box-icon>  },
        { title:"Cusotmers" , numberOf: 9089 , percentage: 3.62, icon: <box-icon size="lg"  name='user-detail' type='solid' ></box-icon> },
        { title:"Reviews" , numberOf: 11089 , percentage: 4.62, icon:  <box-icon size="lg" name='like' type='solid' ></box-icon> },
     ]

    //  const cards2 = {
    //     0 : { para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero ut corporis cupiditate. Magnam minima aperiam assumenda rerum molestias nihil quod commodi. Molestiae odio provident laudantium rem illo harum quam?" ,  heading: "John" },
    //     1:  { para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero ut corporis cupiditate. Magnam minima aperiam assumenda rerum molestias nihil quod commodi. Molestiae odio provident laudantium rem illo harum quam?" ,  heading: "Ali"}
        
    //  }
    // get values from objects of objects(key,value pair)
    // console.log(Object.values(cards2).map());

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