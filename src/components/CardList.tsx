import Card from "./Card"

const CardList = () => {

    

    const cards = [
        { title:"Total Property" },
         
     ]

    //  const cardsList = cards.map((card,index) => <Card card={card} key={index} />);
    return ( 
        <>
            <div className="flex flex-wrap m-5 gap-10" >
                    {/* {cardsList} */}
                    <Card test={cards}/>
            </div>
        </>
     );
}
 
export default CardList;

// { title:"Total Orders" , numberOf: '150,89' , percentage: "2.62", icon: "<box-icon name='moon' ></box-icon>" }