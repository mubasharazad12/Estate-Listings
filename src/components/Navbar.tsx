import ProfleImg from '../assets/profile.jpeg'

const Navbar = () => {
  return ( 
    <>
      <header className="flex justify-between w-full flex-wrap p-8 shadow-1xl  shadow-shadow sticky top-0  z-10  bg-secondary h-28 items-center  bg-gradient-to-l from-gradient ">
          <h1 className="font-normal text-3xl">Dashboard</h1>
          <ul className="flex justify-center items-center gap-2">
            <li className='flex justify-center items-center gap-2 '>
              <span className='pt-3'>  <box-icon name='moon' ></box-icon>  </span>
              <input
                  className="toogleSwtich"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault" />
              </li>
            <li><img className='w-8 h-8 rounded-full' src={ProfleImg} alt="profile" /></li>
            <li> <span>Profile name</span> </li>
            
          </ul>

      </header>
    </>
   );
}
 
export default Navbar;
