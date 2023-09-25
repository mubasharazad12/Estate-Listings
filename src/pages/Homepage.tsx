import Card from "../components/Card";

const Homepage = () => {
    return ( 
        <>
            <section className="m-5 p-3 bg-slate-400 ">
                <h1>Overview</h1>
                <div className="flex flex-wrap m-5 gap-10" >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <section>
            <table className="table-auto">
                <thead>
                    <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    </tr>
                    <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    </tr>
                    <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    </tr>
                </tbody>
            </table>
            </section>
        </>
     );
}
 
export default Homepage;