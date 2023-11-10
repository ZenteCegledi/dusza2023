import Image from 'next/image'
import {Users02, Users01, ImageIndentLeft, PieChart01, User02, UserPlus02, UsersPlus, User01, Flag01, Flag02, Flag03, Flag04, Flag06, Flag05, Hourglass01, Hourglass02, Hourglass03, UserPlus01, File01, PlusCircle, File02, File03, File04, FilePlus01, FilePlus03, GitBranch01, LogOut01, LogOut02, Edit01, Edit02, Edit03} from "@untitled-ui/icons-react";
import Sidebar from './sidebar';



export default function dashboardContent() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}
