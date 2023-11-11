import { Home02, LogOut01 } from '@untitled-ui/icons-react';
import Link from 'next/link';

export default function Leaderboard() {
  return (
    <div className='overflow-x-auto p-3 bg-base-200 w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>((versenyNeve)) verseny eredményei</h1>
            </td>
            <td className='text-right'>
              <Link href="" className='btn bg-blue-600 hover:bg-blue-500'>Főoldal <Home02/></Link>
            </td>
            
          </tr>
        </tbody>
      </table>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700' />
      <table className='table bg-gray-800'>
        <thead>
          <tr>
            <th>Helyezés</th>
            <th>Csapat neve</th>
            <th>Megszerzett pont</th>
            <th>Felhasznált idő</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          <tr className='hover:bg-gray-700'>
            <th>1</th>
            <td>Bug Bontó Brigád</td>
            <td>45</td>
            <td>3:54</td>
            <td> {/* A kizárás gombot csak akkor jelenítsük meg, ha a felhasználó admin. */}
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                Kizárás <LogOut01 />
              </button></td>
          </tr>
          <tr className='hover:bg-gray-700'>
            <th>2</th>
            <td>VarLé</td>
            <td>32</td>
            <td>7:22</td>
            <td>
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                Kizárás <LogOut01 />
              </button></td>
          </tr>
          {/* A holtverseny lekezelése fontos! */}
        </tbody>
      </table>
    </div>
  );
}
