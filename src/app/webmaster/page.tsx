import Sidebar from './sidebar';
import DashboardContent from './content';

export default function Webmaster() {
  return (
    <>
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
          <DashboardContent />
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open drawer
          </label>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
