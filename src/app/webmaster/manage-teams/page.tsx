import { Edit03, Trash01, UsersPlus } from '@untitled-ui/icons-react';
import Link from 'next/link';

export default function ManageTeams() {
  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Csapatok kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <Link href='./' className='btn bg-green-800 hover:bg-green-700'>
                Csapat hozzáadása <UsersPlus />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700' />
      <table className='table bg-gray-800'>
        <thead>
          <tr>
            <th>#</th>
            <th>Név</th>
            <th>Leírás</th>
            <th>Csapattagok</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          <tr className='hover:bg-gray-700'>
            <th>1</th>
            <td>Bug Bontó Brigád</td>
            <td>A legeslegjobb programozás csapat, akik részt vesznek a Duszán.</td>
            <td>Ceglédi Zente Holló,<br />Császár Zoltán,<br />Demeter Áron,<br />Fekete Zsombor</td>
            <td>
              <button className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3'>
                <Edit03 />
              </button>
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                <Trash01 />
              </button>
            </td>
          </tr>
          <tr className='hover:bg-gray-700'>
            <th>2</th>
            <td>VarLé</td>
            <td>Tavalyi országos harmadik csapat, tagjai a 12.C osztályt képviselik!</td>
            <td>Lénárt Dániel Péter,<br />Várnai Dávid,<br />Várszegi Barnabás Adrián</td>
            <td>
              <button className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3'>
                <Edit03 />
              </button>
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                <Trash01 />
              </button>
            </td>
          </tr>

          {/* <br /> */}
        </tbody>
      </table>
    </div>
  );
}
