import Card from "../components/Card";

const Homepage = () => {
    return ( 
        <>
            <section className="m-5 p-3 bg-slate-400  shadow-md border border-border rounded-lg	">
                <h1>Overview</h1>
                <div className="flex flex-wrap m-5 gap-10" >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <section className="flex px-5">
                <table className="table-fixed border-collapse border w-full">
                <caption className="caption-top text-left p-5">
                    Table heading
                </caption>
                    <thead>
                        <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider" >Song</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider"  >Artist</th>
                        <th  className="px-5 py-3 border-b-2 border-gray-200 text-left bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider" >Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">Malcolm Lockyer</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">1961</td>
                        </tr>
                        <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">Witchy Woman</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">The Eagles</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">1972</td>
                        </tr>
                        <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">Shining Star</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">Earth, Wind, and Fire</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">1975</td>
                        </tr>
                    </tbody>
                    <caption className="caption-bottom px-5 py-5 border-b border-gray-200">
                        Table captioon @ if require or pagination
                    </caption> 
                </table>
            </section>
        </>
     );
}
 
export default Homepage;