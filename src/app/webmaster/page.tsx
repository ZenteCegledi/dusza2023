import Sidebar from './sidebar/sidebar';
import AddUser from './contents/add-user';
import AddTeam from './contents/add-team';

export default function Webmaster() {
  return (
    <div className='flex justify-start'>
      <Sidebar />
      <AddUser />
      <AddTeam />
    </div>
  );
}
