
const Sidebar = () => {
    return ( 
        <>
            <aside className="flex bg-black w-20 sm:w-56 min-h-screen text-slate-50 ">
               
                <nav>
                    <div className="flex items-center w-20 sm:w-36 flex-col sm:flex-row">   
                        <img width={200} src="https://cdn.pixabay.com/photo/2023/06/10/14/33/real-estate-8054148_1280.png" alt="" />
                        <span>logo name</span>
                    </div>
                    <hr className="w-20  sm:w-56 h-[1px] bg-red-400 border-none mt-10 "/>
                    <ul className="ml-20 mt-16 space-y-16 text-purple-800  ">
                        <li className="">
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
