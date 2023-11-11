import { Edit03, FilePlus02, Trash01 } from '@untitled-ui/icons-react';
import Link from 'next/link';

export default function ManageTaskLists() {
  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Feladatsorok kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <Link href='./' className='btn bg-green-800 hover:bg-green-700'>
                Feladatsor hozzáadása <FilePlus02 />
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
            <th>Feladatsor neve</th>
            <th>Verseny</th>
            <th>Feladatok száma</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          <tr className='hover:bg-gray-700'>
            <th>1</th>
            <td>2023-mas versenyek feladatsora</td>
            <td>Dusza 2023</td>
            <td>9</td>
            <td><button className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3'>
                <Edit03 />
              </button>
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                <Trash01 />
              </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
