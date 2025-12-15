function Popup({ title, pesan, cancel, confirm }){
    return(
        <div className="fixed inset-0 bg-black/50 z-40">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div id="toast-warning" className="w-full  z-2 max-w-md p-4 mb-4 text-sm text-black text-fg-warning rounded-2xl bg-white" role="alert">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            <span className="sr-only">Info</span>    
                            <h3 className="font-semibold text-xl">{title}</h3>
                        </div>
                    </div>
                <div className="mt-2 mb-4">
                    {pesan}
                </div>
                    <div className="flex items-left gap-2.5">
                        <button onClick={cancel} type="button" className="inline-flex items-center rounded-lg bg-[#DC2626] hover:bg-red-700 box-border text-white border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                            Batal
                        </button>
                        <button onClick={confirm} type="button" data-dismiss-target="#toast-warning" className="inline-flex hover:bg-[#3a6bd4] text-white rounded-lg  items-center text-fg-warning-subtle bg-[#487BEA] box-border border border-warning hover:bg-warning-strong hover:border-warning-strong hover:text-white focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup