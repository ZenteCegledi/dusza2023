import Image from 'next/image'
import {Users02, Users01, ImageIndentLeft, PieChart01, User02, UserPlus02, UsersPlus, User01, Flag01, Flag02, Flag03, Flag04, Flag06, Flag05, Hourglass01, Hourglass02, Hourglass03, UserPlus01, File01, PlusCircle, File02, File03, File04, FilePlus01, FilePlus03, GitBranch01, LogOut01, LogOut02, Edit01, Edit02, Edit03} from "@untitled-ui/icons-react";
import Sidebar from './sidebar';
import DashboardContent from './DashboardContent';




export default function Home() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        <DashboardContent/>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div> 
        <Sidebar/>
      </div>
    </>
  )
}
