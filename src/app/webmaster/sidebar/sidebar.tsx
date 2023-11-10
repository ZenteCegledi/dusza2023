import Content from './content';

export default function Sidebar() {
  return (
    <>
      <div className='drawer lg:drawer-open w-fit z-50'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Oldalsáv
        </label>
        <Content />
      </div>
    </>
  );
}
