function App() {
  return (
    <>
      <div>
        <div className="bg-[#fcb814] h-7" />
        <div className="py-4 text-center text-6xl">MYCRS</div>
        <div className="bg-[#fcb814] h-16" />
        <div className="p-2 md:px-40 xl:p-12 px">
          <div className="bg-[#B2B2B2] rounded-xl flex flex-col mt-4 text-center p-6">
            <div className="text-3xl font-semibold text-black">
              BORANG <br /> PERMOHONAN
            </div>
            <div className="p-4">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  No.Kad Pengenalan Pemohon
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Contoh : 999999009999"
                  />
                </div>
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Nama Pemohon
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Nama seperti dalam kad pengenalan"
                  />
                </div>
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  No. Telefon
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Contoh : 010XXXXXXX"
                  />
                </div>
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Daerah Kediaman
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Daerah"
                  />
                </div>
              </div>
              <div className="pt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Poskod
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Poskod"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 px-12 mt-4 md:px-52">
                <button
                  type="button"
                  className=" outline-black rounded-md bg-[#fcb814] px-2.5 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Padam
                </button>
                <button
                  type="button"
                  className="rounded-md bg-[#fcb814] px-2.5 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Hantar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
