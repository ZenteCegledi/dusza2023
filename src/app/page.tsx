import StudentNavbar from "./studentNavbar";


export default function Home() {
  return (
    <>
    <StudentNavbar/>
    <div className="text-4xl h-30 flex items-center justify-center pt-40 bg-base-100">A ((VersenyNeve)) verseny hamarosan kezdődik!</div>
<div className=" flex items-center justify-center pt-20 bg-base-100">
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    nap
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    óra
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    perc
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":36}}></span>
    </span>
    másodperc
  </div>

</div>
</div>
    </>
  )
}
