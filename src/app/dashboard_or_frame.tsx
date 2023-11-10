import Sidebar from './sidebar';
import SidebarOpener from './sidebarOpener';




export default function AdminFrame() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        


          <SidebarOpener/>
        </div> 
        <Sidebar/>
      </div>
    </>
  )
}
