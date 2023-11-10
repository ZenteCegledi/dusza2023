import Sidebar from './sidebar/sidebar';
import AddUser from './contents/add-user';

export default function Webmaster() {
  return (
    <div className='flex justify-start'>
      <Sidebar />
      <AddUser />
    </div>
  );
}
