export default function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100 bg-amber-300">
            <div className="navbar-center hidden lg:flex justify-center	">
                <ul className="menu menu-horizontal px-1 w-screen flex justify-center	">
                    <li><a className="text-base font-bold">ALL CATEGOIRES</a></li>
                    <li><a className="text-base font-bold text-orange-700 text-opacity-45">TODAY DEALS</a></li>
                    <li><a className="text-base font-bold">ELECTRONICS</a></li>
                    <li><a className="text-base font-bold">CLOTHINGS</a></li>
                    <li><a className="text-base font-bold">COMPUTERS</a></li>
                    <li><a className="text-base font-bold">FURNTURES</a></li>
                    <li><a className="text-base font-bold">MORE & BABY</a></li>
                    <li><a className="text-base font-bold">BOOKS & MORE</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
