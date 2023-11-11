import Link from 'next/link'

export default function AdminFrame() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-lg bg-gray-900">
            <h1 className="text-3xl font-semibold text-center text-white-700 pb-5">Feladatok feltöltése</h1>
            <form className="space-y-4">
            <hr className=" h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Feladatok feltöltése (<Link href='./' target='_blank' className='text-blue-300'>minta</Link>)</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered " />
                </div>

                <div className='pt-2'>
                    <button className="btn w-full bg-green-900 hover:bg-green-700  ">Feladatok feltöltése</button>
                </div>
            </form>
        </div>
    </div>
        </div> 
      </div>
    </>
  )
}