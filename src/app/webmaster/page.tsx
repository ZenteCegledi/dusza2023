import Sidebar from './sidebar/sidebar';
import AddUser from './contents/add-user';
import AddTeam from './contents/add-team';
import ManageUsers from './contents/manage-users';

export default function Webmaster() {
  return (
    <div className='flex justify-start'>
      <Sidebar />
      <ManageUsers/>
    </div>
  );
}
