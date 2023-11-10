import Image from 'next/image'
import {UsersPlus} from "@untitled-ui/icons-react";


export default function Home() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            <ActivityHeart />
            Open drawer
          </label> */}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here*/}
            <li><a>Dashboard</a></li>
            <li><a>Versenyző hozzáadása</a></li>
            <li><a>Versenyző hozzáadása</a></li>
            <li><a>Versenyző hozzáadása</a></li>
            <li><a>Versenyző hozzáadása</a></li>
            <li><a>Versenyző hozzáadása</a></li>
            <li><a><UsersPlus/> Versenyző hozzáadása</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
