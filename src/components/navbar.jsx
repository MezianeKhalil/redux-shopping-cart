import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className="py-4 px-2 md:px-4 lg:px-16 shadow-sm fixed bg-white z-99 top-0 w-full">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Link className="text-lg text-gray-900" to="/">Shopping Cart</Link>
                    <div>
                        <Link className="block w-10 relative" to="/cart">
                            <span id="cart" className="absolute bottom-2 -left-2 bg-blue-600 text-white p-0.5 text-xs text-center w-5 h-5 rounded-full">0</span>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
