import { Edit03, FilterFunnel01, Trash01 } from '@untitled-ui/icons-react';
import Link from 'next/link';

export default function ManageUsers() {
  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Felhasználók kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <button
                className='btn bg-blue-800 hover:bg-blue-600 mr-3'
                id='filterButton'
              >
                Szűrés jogkörre <FilterFunnel01 />
              </button>

              <Link href='./' className='btn bg-green-800 hover:bg-green-700'>
                Felhasználó hozzáadása
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
            <th>Felhasználónév</th>
            <th>Jogosultsági kör</th>
            <th>Csapat</th>
            <th>Osztály</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          <tr className='hover:bg-gray-700'>
            <th>1</th>
            <td>Kovács Gábor</td>
            <td>@kovacsg</td>
            <td>Versenyző</td>
            <td>Bug Bontó Brigád</td>
            <td>9.B</td>
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
            <td>Zsoltár Péter</td>
            <td>@zsoltarpeti</td>
            <td>Tanár</td>
            <td>-</td>
            <td>-</td>
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
            <th>3</th>
            <td>Markovics Márton</td>
            <td>@mmarci</td>
            <td>Zsűritag</td>
            <td>-</td>
            <td>-</td>
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
