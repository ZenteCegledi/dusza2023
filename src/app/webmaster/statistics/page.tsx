'use client';

export default function Statistics() {

  return (
      <table className="table table-auto">
        <tr>
          <td>
          <div className='p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        <h1 className='text-3xl font-semibold text-center text-white-700 pb-5 pt-4 px-8 mb-5'>
          Tanárok aktivitása
        </h1>
          <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <canvas id="tasksNumber" width="400" height="400"></canvas>
            </div>
          </td>
          <td>
          <div className='p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        <h1 className='text-2xl font-semibold text-center text-white-700 pb-5 pt-4 px-8'>
          Feladatok száma évfolyamonként
        </h1>
          <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mb-5' />
          <canvas id="tasksNumber" width="400" height="400"></canvas>
            </div>
          </td>
        </tr>
      </table>
  );
}
