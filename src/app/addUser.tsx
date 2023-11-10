import Sidebar from './sidebar';
import SidebarOpener from './sidebarOpener';




export default function AdminFrame() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-lg bg-gray-900">
            <h1 className="text-3xl font-semibold text-center text-white-700 pb-5">Felhasználó létrehozása</h1>
            <form className="space-y-4">
            <hr className=" h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className="pb-5">
                    <label className="label">
                        <span className="text-base label-text">Versenyzők feltöltése (<a href='' className='text-blue-300'>minta</a>)</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">vagy</span>
              </div>
              <div>
                    <label className="label">
                        <span className="text-base label-text">Név</span>
                    </label>
                    <input type="text" placeholder="Teljes név" className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Jelszó</span>
                    </label>
                    <input type="password" placeholder="Jelszó" className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Szerepkör</span>
                    </label>
                    <select className="select select-bordered w-full">
                    <option disabled selected>Szerepkör kiválasztása</option>
                    <option>Versenyző</option>
                    <option>Tanár</option>
                    <option>Zsűritag</option>
                  </select>
                </div>
                {/* Megjelenítés csak akkor, ha versenyző van kiválasztva! */}
                <div>
                    <label className="label">
                        <span className="text-base label-text">Évfolyam és osztály</span>
                    </label>
                    <input type="text" placeholder="Évfolyam és osztály jele"
                        className="w-full input input-bordered" />
                </div>
                <div className='pt-5'>
                    <button className="btn w-full bg-green-900 hover:bg-green-700  ">Bejelentkezés</button>
                </div>
            </form>
        </div>
    </div>

          <SidebarOpener/>
        </div> 
        <Sidebar/>
      </div>
    </>
  )
}
