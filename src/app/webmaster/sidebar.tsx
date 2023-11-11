import {
  Users01,
  ImageIndentLeft,
  PieChart01,
  UsersPlus,
  User01,
  Flag01,
  Hourglass01,
  UserPlus01,
  File02,
  File04,
  FilePlus03,
  Edit03,
  LogOut01,
  Home02,
} from '@untitled-ui/icons-react';
import { fetchSettings } from '@/app/utils/fetchers/settings';
import { fetchCurrentCompetitions } from '@/app/utils/fetchers/competitions';
import Link from 'next/link';

export default async function Sidebar() {
  const settings = await fetchSettings();
  const currentCompetitions = await fetchCurrentCompetitions();

  return (
    <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
      <a className='btn btn-ghost normal-case text-xl'>{settings.name}</a>
      <b className='pt-5 pb-2'>Webmester</b>
      <li>
        <a>
          <PieChart01 />
          Kezelőfelület
        </a>
      </li>
      <li>
        <Link href='change-site'>
          <Edit03 />
          Webhely beállítása
        </Link>
      </li>
      <li>
        <Link href='./introduction-page-settings'>
          <ImageIndentLeft />
          Bemutatkozó oldal szereksztése
        </Link>
      </li>
      <li>
        <Link href='/webmaster/manage-users'>
          <User01 />
          Felhasználók kezelése
        </Link>
      </li>
      <li className='pl-5'>
        <Link href='/webmaster/add-user'>
          <UserPlus01 />
          Felhasználó hozzáadása
        </Link>
      </li>
      <li>
        <Link href='./manage-teams'>
          <Users01 />
          Csapatok kezelése
        </Link>
      </li>
      <li className='pl-5'>
        <Link href='/webmaster/add-team'>
          <UsersPlus />
          Csapat hozzáadása
        </Link>
      </li>
      <b className='pt-4 pb-2'>Tanár</b>
      <li>
        <Link href='./manage-tasks'>
          <File04 />
          Feladatok kezelése
        </Link>
      </li>
      <li className='pl-5'>
        <Link href="./add-tasks">
          <FilePlus03 />
          Feladat hozzáadása
        </Link>
      </li>
      <li>
        <Link href='./manage-tasklists'>
          <File02 /> Feladatsorok kezelése
        </Link>
      </li>
      <b className='pt-4 pb-2'>Zsűritag</b>
      <li>
        <a>
          <Flag01 />
          Versenyek kezelése
        </a>
      </li>
      <li className='pl-5'>
        {currentCompetitions.map((competition) => (
          <a key={competition.id}>
            <Hourglass01 />
            {competition.name}
          </a>
        ))}
      </li>
      <li>
        <a>
          <UserPlus01 />
          Versenyző hozzáadása
        </a>
      </li>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
      {/* <li className="absolute inset-x-0 bottom-0 h-16 pt-10"><a><LogOut01/>Kijelentkezés</a></li> */}
      <li>
        <a>
          <Home02 />
          Bemutatkozó oldal
        </a>
      </li>
      <li>
        <a>
          <LogOut01 />
          Kijelentkezés
        </a>
      </li>
    </ul>
  );
}