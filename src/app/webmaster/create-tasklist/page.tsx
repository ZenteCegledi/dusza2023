import Link from 'next/link'

export default function CreateTasklist() {
  return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-lg bg-gray-900">
            <h1 className="text-3xl font-semibold text-center text-white-700 pb-3 px-5">Feladatsor létrehozása</h1>
            <form className="space-y-4">
            <hr className=" h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className='pb-5'>
                    <label className="label">
                        <span className="text-base label-text">Feladatsor neve</span>
                    </label>
                    <input
                      type='text'
                      placeholder=''
                      className='w-full input input-bordered'
                      required
                    />
                </div>

                <div className='pb-2'>
                    <label className="label">
                        <span className="text-base label-text">Osztály</span>
                    </label>
                    <select className="select select-bordered w-full">
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                </div>
                <hr className=" h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">barack, szőlő, körte, szilva</span>
                  <input type="checkbox" className="checkbox checkbox-info" />
                </label>
                <label className="cursor-pointer label">
                  <span className="label-text">egér, billentyűzet, kamera, nyomtató</span>
                  <input type="checkbox" className="checkbox checkbox-info" />
                </label>
              </div>
              <hr className=" h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className='pt-1'>Kiválasztott feladatok száma: X</div>
                <div className='pt-1'>
                  {/* Létrehozás csak abban az esetben, ha a kiválasztott feladatok száma osztható 3-mal és nagyobb mint 0! */}
                    <button className="btn w-full bg-green-900 hover:bg-green-700  ">Feladatsor létrehozása</button>
                </div>
            </form>
        </div>
    </div>
        </div> 
      </div>

  )
}