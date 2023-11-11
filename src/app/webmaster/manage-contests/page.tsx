import { Award01, Award05, BarChart01, BarChart02, Edit03, Trash01 } from '@untitled-ui/icons-react';
import Link from 'next/link';

export default function ManageTeams() {
  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Versenyek kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <Link href='./' className='btn bg-green-800 hover:bg-green-700'>
                 <Award05 /> Verseny hozzáadása
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700' />
      <div className='pr-6'>
      <table className='table bg-gray-800'>
        <thead>
          <tr>
            <th>#</th>
            <th>Név</th>
            <th>Leírás</th>
            <th>Időpont</th>
            <th>Feladatsor</th>
            <th>Résztvevő csapatok</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          <tr className='hover:bg-gray-700'>
            <th>1</th>
            <td>Dusza 2023 Web</td>
            <td>Dusza Árpád Webprogramozói Emlékverseny
            </td>
            <td>2023. 11. 15. 12:20<br/><span className='text-gray-400'>Kezdésig:<br/>4n 12ó 43p 16mp</span></td>
            <td>Dusza 2023 Feladatok</td>
            <td>Bug Bontó Brigád,<br/>Spaceship Operátorok,<br/>VarLé 2.0</td>
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
            <td>Dusza 2022 Web</td>
            <td>Dusza Árpád Webprogramozói Emlékverseny
            </td>
            <td>2022. 11. 15. 12:20<br/><span className='text-yellow-600'>Jelenleg zajlik!</span></td>
            <td>Dusza 2022 Feladatok</td>
            <td>GitEgylet<br/>VarLé</td>
            <td>

              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                <Trash01 />
              </button>
            </td>
          </tr>
          <tr className='hover:bg-gray-700'>
            <th>3</th>
            <td>Dusza 2021 Web</td>
            <td>Dusza Árpád Webprogramozói Emlékverseny
            </td>
            <td>2021. 11. 15. 12:20<br/><span className='text-green-600'>Véget ért!</span></td>
            <td>Dusza 2021 Feladatok</td>
            <td>Peti és a többiek<br/>Hurka fejűek</td>
            <td>
              <button className='btn bg-green-900 hover:bg-green-700 mr-2 px-3'>
                <BarChart02 />
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
    </div>

  );
}
