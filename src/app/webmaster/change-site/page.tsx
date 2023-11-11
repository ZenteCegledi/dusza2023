import Link from 'next/link'

export default function ChangeSiteSettings() {
  return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-lg bg-gray-900">
            <h1 className="text-3xl font-semibold text-center text-white-700 p-3">Webhely beállítása</h1>
            <form className="space-y-4">
            <hr className=" h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div>
            <label className='label'>
              <span className='text-base label-text'>Weboldal neve</span>
            </label>
            <input
              type='text'
              placeholder='VersenyPortál'
              className='w-full input input-bordered'
              required
            />
          </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Weboldal logója</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered " />
                </div>
              <div>
            <label className='label'>
              <span className='text-base label-text'>Weboldal szlogenje</span>
            </label>
            <textarea
              className='textarea textarea-bordered w-full h-16'
              placeholder='A versenyek webhelye'
              required

            ></textarea>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Weboldal leírása</span>
            </label>
            <textarea
              className='textarea textarea-bordered w-full h-40'
              placeholder='Ezen az oldalon versenyeket bonyolíthatsz le, amelyeken különböző csapatok vehetnek részt.'
              required

            ></textarea>
          </div>

                <div className='pt-2'>
                    <button className="btn w-full bg-blue-900 hover:bg-blue-700  ">Beállítások mentése</button>
                </div>
            </form>
        </div>
    </div>
        </div> 
      </div>
  )
}