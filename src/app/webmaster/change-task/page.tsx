import Link from 'next/link';

export default function ChangeTask() {
  return (
    <div className='w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-lg bg-gray-900'>
      <h1 className='text-3xl font-semibold text-center text-white-700 pb-5 px-5'>
        Feladat szerkesztése
      </h1>
      <form className='space-y-4'>
        <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='pb-5'>
          <label className='label'>
            <span className='text-base label-text'>
              Szavak (vesszővel elválasztva)
            </span>
          </label>
          <input
            type='text'
            placeholder=''
            className='w-full input input-bordered'
            required
          />
        </div>

        <div className='pb-5'>
          <label className='label'>
            <span className='text-base label-text'>Osztály</span>
          </label>
          <select className='select select-bordered w-full'>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>

        <div className='pt-2'>
          <button className='btn w-full bg-green-900 hover:bg-green-700  '>
            Feladat módosítása
          </button>
        </div>
      </form>
    </div>
  );
}
