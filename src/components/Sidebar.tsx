import logo from '../assets/Logo.png'
import 'boxicons'

const Sidebar = () => {
    return ( 
        <>
            <aside className="flex bg-gray-100 w-20 sm:w-56 min-h-screen text-black shadow-2xl">
               
                <nav className='truncate'>
                    <div className="flex items-center w-20 sm:w-36 flex-col sm:flex-row sm:m-10 mt-10">   
                        <img width={200} src={logo}alt="" />
                        {/* <span>logo name</span> */}
                       
                    </div>
                    <hr className="w-20  sm:w-56 h-[1px] bg-gray-200 border-none mt-10 "/>
                    <ul className="ml-20 mt-16 space-y-16 text-purple-800  ">
                        <li className="">
                            <a href="#">Home</a>
                            <box-icon type='solid' name='balloon'></box-icon>
                            <abbr></abbr>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="absolute bottom-0 pb-10">
                            <a href="#">logout</a>
                        </li>
                        
                    </ul>
                </nav>
            </aside>
        </>
     );
}
 
export default Sidebar;
