export default function Navbar() {
  return (
    <>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl'>((SiteName))</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a>Korábbi versenyek</a>
            </li>
            <li>
              <details>
                <summary>Üdvözlünk, ((NÉV))</summary>
                <ul className='p-2 bg-base-100'>
                  <li>
                    <a>Kijelentkezés</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
