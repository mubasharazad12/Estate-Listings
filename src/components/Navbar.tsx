

const Navbar = () => {
  return ( 
    <>
      <header className="flex justify-center items-center m-5">
        
        <div className="flex-1 w-5">
          <h1>Heading</h1>
        </div>
        <nav className="flex-1 w-32">
          <ul className="flex justify-center items-center">
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">contact</a> </li>
          </ul>
        </nav>
      </header>
    </>
   );
}
 
export default Navbar;
