import { Award01, Award02, Award03, Award04, Award05, CpuChip01 } from '@untitled-ui/icons-react'
import Link from 'next/link'

export default function Introduction() {
  return (
    <div className='bg-base-100'>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">((SiteName))</a>
    <div className='pl-5'>Csapatod: ((Csapatnév))</div>
    <div className='pl-10'>Csapattársaid: ((CsapattársUser1)), stb.</div>
  </div>
  <div className="flex-none">
    <button className="btn bg-green-800 hover:bg-green-700">
      <Award03 /> A versenyig: 23ó 12p 35mp
    </button>
  </div>
</div>
      <div className="drawer lg:drawer-open bg-base-100 container mx-auto p-5 px-10 mt-20 container bg-zinc-700 rounded-xl pb-12">
        <h1 className='text-5xl pb-14 pt-8'>((Cím))</h1>
        <div className='text-2xl'>((Oldal tartalma))</div>
      </div>
      </div>
  )
}