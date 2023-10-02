import logo from '../assets/Logo.png'
import 'boxicons'

const Sidebar = () => {


    return ( 
        <>
            <aside className="flex fixed bg-secondary w-20 sm:w-56 min-h-screen text-black shadow-2xl shadow-shadow  bg-gradient-to-r from-gradient">
               
                <nav className='truncate'>
                    <div className="flex items-center w-20 sm:w-36 flex-col sm:flex-row sm:pt-5 sm:pb-0 pb-4 mx-auto pt-10" >   
                        <img width={135} src={logo}alt="" />
                        {/* <span>logo name</span> */}
                      
                    </div>
                  
    
                    <hr className="w-20  sm:w-56 h-[1px] bg-border border-none  "/>
                    <ul className="text-gray-700 font-display font-semibold">
                        <li className='pt-8 sm:pl-12 pl-6 pb-8 border-b border-border border-l-4 border-l-primary '>
                            <a className="flex hover:fill-primary hover:text-primary  ease-in-out duration-300 " href="#"> 
                                <span className='pr-1 '> <box-icon type='solid' name='dashboard'></box-icon></span> 
                                <span className='hidden sm:block'>Dashboard</span>  
                            </a>
                        </li>
                        <li className='pt-8 sm:pl-12 pl-6 pb-8 border-b border-border border-l-4 border-l-primary'>
                            <a className="flex hover:fill-primary hover:text-primary  ease-in-out duration-300" href="#"> 
                            <span className='pr-1'> <box-icon name='buildings' type='solid' ></box-icon></span>    
                                <span className='hidden sm:block'>Property List</span>  
                            </a>
                        </li>
                        <li className='pt-8 sm:pl-12 pl-6 pb-8 border-b border-border border-l-4 border-l-primary'>
                            <a className="flex hover:fill-primary hover:text-primary  ease-in-out duration-300" href="#"> 
                            <span className='pr-1'> <box-icon  name='user-detail' type='solid' ></box-icon></span>
                                <span className='hidden sm:block'>Customer List</span>  
                            </a>
                        </li>
                        <li className='pt-8 sm:pl-12 pl-6 pb-8 border-b border-border border-l-4 border-l-primary'>
                            <a className="flex hover:fill-primary hover:text-primary  ease-in-out duration-300" href="#"> 
                            <span className='pr-1'> <box-icon name='like' type='solid' ></box-icon></span>
                                <span className='hidden sm:block'>Reviews</span>  
                            </a>
                        </li>
                        <li className=' absolute bottom-0 flex pt-8 sm:pl-12 pl-6 pb-8 border-b border-border border-l-4 border-l-primary'>
                            <a className="flex hover:fill-primary hover:text-primary  ease-in-out duration-300" href="#"> 
                            <span className='pr-1'> <box-icon name='log-out' type='solid' ></box-icon></span>
                                <span className='hidden sm:block'>Logout</span>  
                            </a>
                        </li>

                      
                        {/* <li className="absolute bottom-0 pb-10 flex">
            
                            <span className='pr-1'> <box-icon type='solid' name='dashboard'></box-icon></span>
                            <a className='hidden sm:block' href="#">Logout</a>
                        </li> */}
                        
                    </ul>
                </nav>
            </aside>
        </>
     );
}
 
export default Sidebar;
