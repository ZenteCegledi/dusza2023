import { BarChart09, Hand, Home01, Home02, LogIn02 } from "@untitled-ui/icons-react";

export default function Login() {
  return (
    <>
      <div className="mx-auto bg-base-100">
    <div className="flex flex-col items-center relative flex flex-col justify-center h-screen overflow-hidden">
        <h1 className="text-6xl font-bold pb-12 pt-10">((SiteName))</h1>
        <p className="text-3xl">((Szlogen))</p>
        <div className="mt-10 mb-20">
            <a className="btn bg-blue-600 hover:bg-blue-800 pl-10 pr-10 mr-5" href="./login"><LogIn02/>Bejelentkezés</a>
            <a className="btn bg-neutral-700 hover:bg-neutral-800 ml-5 pl-4 pr-4 text-white"><Home02/> Bemutatkozó oldal</a>
        </div>
    </div>
</div>
    </>
  );
}
