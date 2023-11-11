import { fetchSettings } from '@/app/utils/settings';

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await fetchSettings();

  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl' href='/'>
            {settings.name}
          </a>
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
      {children}
    </div>
  );
}
