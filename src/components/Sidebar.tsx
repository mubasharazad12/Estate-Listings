import logo from '../assets/Logo.png'
import 'boxicons'

const Sidebar = () => {


    return ( 
        <>
            <aside className="flex bg-gray-100 w-20 sm:w-56 min-h-screen text-black shadow-2xl">
               
                <nav className='truncate'>
                    <div className="flex items-center w-20 sm:w-36 flex-col sm:flex-row sm:m-10 mt-10 bg-ne" >   
                        <img width={200} src={logo}alt="" />
                        {/* <span>logo name</span> */}
                      
                    </div>
                  
    
                    <hr className="w-20  sm:w-56 h-[1px] bg-gray-200 border-none mt-10 "/>
                    <ul className="mt-16 sm:ml-16 ml-8 space-y-16 text-gray-700 font-display font-semibold ">
                        <li>
                            <a className="flex hover:fill-teal-700 ease-in-out duration-300 text-primary" href="#"> 
                                <span className='pr-1 '> <box-icon type='solid' name='dashboard'></box-icon></span> 
                                <span className='hidden sm:block'>Dashboard</span>  
                            </a>
                        </li>
                        <li className="flex">
                            <span className='pr-1'> <box-icon  name='objects-vertical-bottom' type='solid' ></box-icon></span>
                            <a href="#">Order List</a>
                        </li>
                        <li className="flex">
                            <span className='pr-1'> <box-icon name='buildings' type='solid' ></box-icon></span>    
                            <a href="#">Property List</a>
                        </li >
                        <li  className="flex">
                            <span className='pr-1'> <box-icon  name='user-detail' type='solid' ></box-icon></span>
                            <a href="#">Customer List</a>
                        </li>
                        <li  className="flex">
                            <span className='pr-1'> <box-icon name='like' type='solid' ></box-icon></span>
                            <a href="#">Reviews</a>
                        </li>
                        <li className="absolute bottom-0 pb-10 flex">
            
                            <span className='pr-1'> <box-icon type='solid' name='dashboard'></box-icon></span>
                            <a className='hidden sm:block' href="#">Logout</a>
                        </li>
                        
                    </ul>
                </nav>
            </aside>
        </>
     );
}
 
export default Sidebar;
