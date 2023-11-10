import Navbar from '../navbar';

export default function Countdown() {
  return (
    <>
      <Navbar />
      <div className='text-4xl h-30 flex items-center justify-center pt-40 bg-base-100'>
        A ((VersenyNeve)) verseny hamarosan kezdődik!
      </div>
      <div className=' flex items-center justify-center pt-20 bg-base-100'>
        <div className='grid grid-flow-col gap-5 text-center auto-cols-max'>
          <div className='flex flex-col'>
            <span className='countdown font-mono text-5xl'>15</span>
            nap
          </div>
          <div className='flex flex-col'>
            <span className='countdown font-mono text-5xl'>10</span>
            óra
          </div>
          <div className='flex flex-col'>
            <span className='countdown font-mono text-5xl'>24</span>
            perc
          </div>
          <div className='flex flex-col'>
            <span className='countdown font-mono text-5xl'>36</span>
            másodperc
          </div>
        </div>
      </div>
    </>
  );
}
