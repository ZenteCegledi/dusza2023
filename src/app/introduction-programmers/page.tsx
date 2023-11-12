import { Home02, LogIn02, LogOut01 } from '@untitled-ui/icons-react';
import Link from 'next/link';


export default function IntroductionProgramming() {
  return (
    <div className='bg-base-100 flex justify-center'>
      <div className='overflow-x-auto p-3 bg-base-200 w-full container'>
        <table className='table table-auto'>
          <tbody>
            <tr>
              <td>
                <h1 className='text-3xl '>A programozók bemutatása</h1>
              </td>
              <td className='text-right'>
                <Link href='../' className='btn bg-blue-600 hover:bg-blue-500 mx-1'>
                  Főoldal <Home02 />
                </Link>
                <Link href='../login' className='btn bg-green-800 hover:bg-green-700 mx-1'>
                  Bejelentkezés <LogIn02 />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='px-5 pt-3 bg-gray-800 rounded-xl pb-5'>
          <div className='text-xl font-mono rounded-lg p-5 bg-gray-700 mb-5'>Iskola: <b>Bolyai János Műszaki Technikum és Kollégium</b> (Budapest)</div>
          <table className="table">
            <tbody>
            <tr>
              <td><div className="avatar">
                <div className="w-48 rounded-xl">
                      <img src="/zente.jpg" alt="Ceglédi Zente Holló" />
                    </div>
              </div></td>
              <td><div className='text-gray-300 font-mono font-bold text-3xl pb-2'>Ceglédi Zente Holló</div>
              <div className='pb-2 text-xl'>Fő programozási nyelv: <span className='font-bold font-mono text-2xl'>Python</span></div>
              <div className='pb-3 text-xl'>Fő tevékenységei a projekten:<span className='font-bold font-mono text-2xl'> UI, Frontend</span></div>
              <div className='text-xl'>
              Három és fél éve kezdtem el programozással foglalkozni, azóta sok nyelvet kipróbáltam, de leginkább a Python tetszett meg. <br />Szabadidőm nagyrészét versenyprogramozással, matematikával és olvasással töltöm.
              </div>
              </td>
            </tr>
<tr>
              <td><div className="avatar">
                <div className="w-48 rounded-xl">
                      <img src="/zoli.jpg" alt="Császár Zoltán" />
                    </div>
              </div></td>
              <td><div className='text-gray-300 font-mono font-bold text-3xl pb-2'>Császár Zoltán</div>
              <div className='pb-2 text-xl'>Fő programozási nyelv: <span className='font-bold font-mono text-2xl'>ReactJS</span></div>
              <div className='pb-3 text-xl'>Fő tevékenységei a projekten:<span className='font-bold font-mono text-2xl'> Frontend Logic</span></div>
              <div className='text-xl'>
              Hét éve foglalkozok programozással, elsődlegesen jelenleg Reacttel TypeScripttel és Node-dal szoktam dolgozni. <br />Szabadidőmben gyakran foglalkozok elektronikával is.
              </div>
              </td>
            </tr>
            <tr>
              <td><div className="avatar">
                <div className="w-48 rounded-xl">
                      <img src="/aron.jpg" alt="Demeter Áron" />
                    </div>
              </div></td>
              <td><div className='text-gray-300 font-mono font-bold text-3xl pb-2'>Demeter Áron</div>
              <div className='pb-2 text-xl'>Fő programozási nyelv: <span className='font-bold font-mono text-2xl'>Rust</span></div>
              <div className='pb-3 text-xl'>Fő tevékenységei a projekten:<span className='font-bold font-mono text-2xl'> Database Design, Backend</span></div>
              <div className='text-xl'>
              6 éve programozok programozni, ennek a nagyrészét Python és Rust programozással töltöttem. <br />Szabadidőm nagyrészét videójátékozással és mikrovezérlők programozásával töltöm.
              </div>
              </td>
            </tr>
            <tr>
              <td><div className="avatar">
                <div className="w-48 rounded-xl">
                      <img src="/zsombor.jpg" alt="Fekete Zsombor" />
                    </div>
              </div></td>
              <td><div className='text-gray-300 font-mono font-bold text-3xl pb-2'>Fekete Zsombor <span className='font-normal text-2xl'>(póttag)</span></div>
              <div className='pb-2 text-xl'>Fő programozási nyelv: <span className='font-bold font-mono text-2xl'>C#</span></div>
              <div className='pb-3 text-xl'>Fő tevékenységei a projekten:<span className='font-bold font-mono text-2xl'> Tesztelés</span></div>
              <div className='text-xl'>
              2 éve tanulok programozni, most leginkább C#-al foglalkozok. <br />Szeretek számítógépen játszani, leginkább történet alapú és logikai játékokat. <br />Gyakran szoktam sportolni.
              </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
