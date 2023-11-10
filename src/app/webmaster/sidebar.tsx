import {Users01, ImageIndentLeft, PieChart01, UsersPlus, User01, Flag01, Hourglass01, UserPlus01, File02, File04, FilePlus03, Edit03, LogOut01, Home02} from "@untitled-ui/icons-react";


export default function Sidebar() {
  return (
    <>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here*/}
            <a className="btn btn-ghost normal-case text-xl">((SiteName))</a>
            <b className='pt-5 pb-2'>Webmester</b>
            <li><a><PieChart01/>Kezelőfelület</a></li>
            <li><a><Edit03/>Webhely beállítása</a></li>
            <li><a><ImageIndentLeft/>Bemutatkozó oldal szereksztése</a></li>
            <li><a><User01/>Felhasználók kezelése</a></li>
            <li className='pl-5'><a><UserPlus01/>Felhasználó hozzáadása</a></li>
            <li><a><Users01/>Csapatok kezelése</a></li>
            <li className='pl-5'><a><UsersPlus/>Csapat hozzáadása</a></li>
            <b className='pt-4 pb-2'>Tanár</b>
            <li><a><File04/> Feladatok kezelése</a></li>
            <li className='pl-5'><a><FilePlus03/>Feladat hozzáadása</a></li>
            <li><a><File02/> Feladatsorok kezelése</a></li>
            <b className='pt-4 pb-2'>Zsűritag</b>
            <li><a><Flag01/>Versenyek kezelése</a></li>
            <li className='pl-5'><a><Hourglass01/>((Aktuális verseny))</a></li>
            <li><a><UserPlus01/>Versenyző hozzáadása</a></li>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            {/* <li className="absolute inset-x-0 bottom-0 h-16 pt-10"><a><LogOut01/>Kijelentkezés</a></li> */}
            <li><a><Home02/>Bemutatkozó oldal</a></li>
            <li><a><LogOut01/>Kijelentkezés</a></li>
          </ul>
        </div>
    </>
  )
}
