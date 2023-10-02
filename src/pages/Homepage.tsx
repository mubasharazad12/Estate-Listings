import Card from "../components/Card";

const Homepage = () => {
    
    return ( 
        <>
            <section className="m-5 p-3 flex justify-center">
     
                <div className="flex flex-wrap m-5 gap-10" >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <section className="flex px-12 ">
            <div className="flex flex-col w-full max-w-[1920px] mx-auto">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg divide-y divide-primary-100 ">
                        <div className="py-3 px-4 flex justify-between items-center">
                        <div>Table Heading</div>
                        <div className="relative max-w-xs ">
                        
                            <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-100 dark:border-gray-700 dark:text-gray-400" placeholder="Search for items" />
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                            <svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            </div>
                        </div>
                        </div>
                        <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-primary-100 dark:divide-primary-100 ">
                            <thead className="bg-gray-50 dark:bg-primary-100">
                            <tr>
                                <th scope="col" className="py-3 px-4 pr-0">
                                <div className="flex items-center h-5">
                                    <input id="hs-table-pagination-checkbox-all" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                  
                                </div>
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-primary-100 dark:divide-primary-100">
                            <tr>
                                <td className="py-3 pl-4">
                                <div className="flex items-center h-5">
                                    <input id="hs-table-pagination-checkbox-1" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                    
                                </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black-100">John Brown</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">45</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">New York No. 1 Lake Park</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a className=" hover:text-primary-600" href="#">Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className="py-3 pl-4">
                                <div className="flex items-center h-5">
                                    <input id="hs-table-pagination-checkbox-2" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                    
                                </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black-100">Jim Green</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">27</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">London No. 1 Lake Park</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a className=" hover:text-primary-600" href="#">Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className="py-3 pl-4">
                                <div className="flex items-center h-5">
                                    <input id="hs-table-pagination-checkbox-3" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                    
                                </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black-100">Joe Black</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">31</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">Sidney No. 1 Lake Park</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a className=" hover:text-primary-600" href="#">Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className="py-3 pl-4">
                                <div className="flex items-center h-5">
                                    <input id="hs-table-pagination-checkbox-4" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                    
                                </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black-100">Edward King</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">16</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">LA No. 1 Lake Park</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a className=" hover:text-primary-600" href="#">Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className="py-3 pl-4">
                                <div className="flex items-center h-5">
                                    <input id="hs-table-pagination-checkbox-5" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                    
                                </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black-100">Jim Red</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">45</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black-100">Melbourne No. 1 Lake Park</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a className=" hover:text-primary-600" href="#">Delete</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="py-1 px-4">
                        <nav className="flex items-center space-x-2 justify-end">
                            <a className="text-gray-400 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
                            <a className="w-10 h-10 text-gray-400 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
                            <a className="w-10 h-10 text-gray-400 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
                            <a className="text-gray-400 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
                            <span className="sr-only">Next</span>
                            <span aria-hidden="true">»</span>
                            </a>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
     );
}
 
export default Homepage;