import { Edit03, FilePlus02, FilterFunnel01, Trash01 } from '@untitled-ui/icons-react';
import Link from 'next/link';

export default function ManageTasks() {
  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              {/* Adott tanár csak a saját feladatait kezelheti! */}
              <h1 className='text-3xl '>Feladatok kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
            <button
                className='btn bg-blue-800 hover:bg-blue-600 mr-3'
                id='filterButton'
              >
                Szűrés <FilterFunnel01 />
              </button>
              <Link href='./' className='btn bg-green-800 hover:bg-green-700'>
                Új feladatok hozzáadása <FilePlus02 />
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
            <th>Feladat szavai</th>
            <th>Osztály</th>
            <th>Feltöltő tanár</th>
            <th>Feladatsor</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          <tr className='hover:bg-gray-700'>
            <th>1</th>
            <td>egér, billentyűzet, nyomtató, kamera</td>
            <td>6</td>
            <td>Fülöp Márta Marianna</td>
            <td>
              <span className='text-gray-500'>Nincs hozzárendelve</span>
            </td>
            <td><button className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3'>
                <Edit03 />
              </button>
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                <Trash01 />
              </button></td>
          </tr>
          <tr className='hover:bg-gray-700'>
            <th>2</th>
            <td>alma, körte, szilva, ananász</td>
            <td>5</td>
            <td>Dorogházi Donát</td>
            <td>
            Dusza 2023
            </td>
            <td><button className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3'>
                <Edit03 />
              </button>
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                <Trash01 />
              </button></td>
          </tr>
          <tr className='hover:bg-gray-700'>
            <th>3</th>
            <td>logaritmus, hatványozás, analízis, trigonometria</td>
            <td>8</td>
            <td>Dorogházi Donát</td>
            <td>
              Dusza 2023
            </td>
            <td><button className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3'>
                <Edit03 />
              </button>
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                <Trash01 />
              </button></td>
          </tr>

          {/* <br /> */}
        </tbody>
      </table>
    </div>
  );
}
