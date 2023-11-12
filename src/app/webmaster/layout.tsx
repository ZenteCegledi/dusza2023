import { List } from '@untitled-ui/icons-react';
import Sidebar from './sidebar';

export default function WebmasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='lg:flex lg:justify-start '>
      <div className='drawer lg:drawer-open w-fit z-50'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <label
          htmlFor='my-drawer-2'
          className='btn btn-base-100 drawer-button lg:hidden w-screen'
        >
          <List /> Menü
        </label>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <Sidebar />
        </div>
      </div>
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content overflow-auto p-6'>
          <div className='relative justify-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
