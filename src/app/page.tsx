import Sidebar from './sidebar';
import SidebarOpener from './sidebarOpener';




export default function Home() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-lg bg-gray-900">
            <h1 className="text-3xl font-semibold text-center text-white-700 pb-5 pt-4 px-8">Csapat létrehozása</h1>
            <form className="space-y-4">
            <hr className=" h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
              <div>
                    <label className="label">
                        <span className="text-base label-text">Név</span>
                    </label>
                    <input type="text" placeholder="Csapat neve" className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Leírás</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full h-24" placeholder="A csapat leírása"></textarea>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Versenyzők hozzárendelése (nem kötelező)</span>
                    </label>
                    <input type="text" placeholder="Keresés" className="w-full input input-bordered" />
                </div>
                {/* Hozzárendelt tanulók megjelenítése */}
                <div className='pt-3'>
                  <b>Versenyzők</b>
                  <ul className='px-3 pt-2 [&>*]:py-1'>
                    <li>Ceglédi Zente Holló (@ceglediz)</li>
                    <li>Császár Zoltán (@zoli06)</li>
                    <li>Demeter Áron (@coffeelink)</li>
                  </ul>
                  </div>
                <div className='pt-5'>
                    <button className="btn w-full bg-green-900 hover:bg-green-700">Csapat hozzáadása</button>
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
