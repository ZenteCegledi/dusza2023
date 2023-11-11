import Sidebar from './sidebar';

export default function WebmasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex justify-start'>
      <div className='drawer lg:drawer-open w-fit z-50'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Oldalsáv
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
        <div className='drawer-content flex flex-col items-center justify-center'>
        <div className='relative flex flex-col justify-center h-screen overflow-hidden'>
            {children}
            </div>
        </div>
      </div>
    </div>
  );
}
