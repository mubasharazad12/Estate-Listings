

const Navbar = () => {
  return ( 
    <>
      <header className="flex justify-between w-full flex-wrap p-5 bg-red-300 ">
          <h1>Dashboard</h1>
          <ul className="flex gap-2">
            <li> <a href="#">Notifications</a> </li>
            <li> <a href="#">Settings</a> </li>
            <li> <a href="#">Profile</a> </li>
          </ul>

      </header>
    </>
   );
}
 
export default Navbar;
