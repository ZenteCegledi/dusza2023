import {
  Award01,
  Award05,
  BarChart01,
  BarChart02,
  Edit03,
  LogIn02,
  Trash01,
} from '@untitled-ui/icons-react';
import Link from 'next/link';
import { fetchCurrentCompetitions } from '../utils/fetchers/competitions';

export default async function Contests() {
  const currentCompetitions = await fetchCurrentCompetitions();

  return (
    <div className='overflow-x-auto p-3 bg-base-200 rounded-lg w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Zajló versenyek</h1>
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
              <th>Belépés</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className='hover:bg-gray-700'>
            <th>1</th>
            <td>Dusza 2023 Web</td>
            <td>Dusza Árpád Webprogramozói Emlékverseny
            </td>
            <td>2023. 11. 15. 12:20<br/><span className='text-gray-400'>Kezdésig:<br/>4n 12ó 43p 16mp</span></td>
            <button className='btn bg-green-900 hover:bg-green-700 px-3'>
                <LogIn02 />
              </button>
          </tr> */}
            {!currentCompetitions.length && (
              <tr>
                <td colSpan={5} className='text-center'>
                  Nincs verseny
                </td>
              </tr>
            )}
            {currentCompetitions.map((competition, index) => (
              <tr className='hover:bg-gray-700' key={index}>
                <th>{index + 1}</th>
                <td>{competition.name}</td>
                <td>{competition.description}</td>
                <td>{new Date(competition.start.toLocaleString()).toLocaleString()}</td>
                <td>
                  <Link href={`/contest/${competition.id}`}>
                    <button className='btn bg-green-900 hover:bg-green-700 px-3'>
                      <LogIn02 />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
