function PopUP({title, pesan, cancel, confirm}){
    return(
        <>
        <div id="toast-warning" className="w-full max-w-md p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft border border-warning-subtle" role="alert">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <svg className="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                    <span className="sr-only">Info</span>
                    <h3 className="font-semibold">{title}</h3>
                </div>
            </div>
            <div className="mt-2 mb-4">
                {pesan}
            </div>
            <div className="flex items-center space-x-3">
                <button type="button" onClick={confirm} className="inline-flex items-center text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                    Kirim
                </button>
                <button type="button" onClick={cancel} data-dismiss-target="#toast-warning" className="inline-flex items-center text-fg-warning-subtle bg-transparent box-border border border-warning hover:bg-warning-strong hover:border-warning-strong hover:text-white focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                    Batal
                </button>
            </div>
        </div>
        </>
    )
}

export default PopUP

/* 
    

<div id="toast-warning" class="w-full max-w-md p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft border border-warning-subtle" role="alert">
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            <svg class="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="sr-only">Info</span>
            <h3 class="font-semibold">{title}</h3>
        </div>
  </div>
  <div class="mt-2 mb-4">
    {pesan}
  </div>
    <div class="flex items-center space-x-3">
        <button type="button" class="inline-flex items-center text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
            Kirim
        </button>
        <button type="button" data-dismiss-target="#toast-warning" class="inline-flex items-center text-fg-warning-subtle bg-transparent box-border border border-warning hover:bg-warning-strong hover:border-warning-strong hover:text-white focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
           Batal
        </button>
    </div>
</div>


# dua

<div className=" fixed inset-0 bg-black/40 flex justify-center h-screen z-2 items-center">
            <div id="toast-illustration" className="w-full flex items-center justify-center h-45 bg-white text-black space-y-4 max-w-sm p-3 text-body bg-neutral-primary-soft rounded-2xl shadow-xs" role="alert">
                <div className="flex items-start">
                    <div className="ms-4 text-sm font-normal text-body">
                        <span className="mb-4 text-lg font-medium text-heading">{title}</span>
                        <div className="mb-3">{pesan}</div> 
                        <div className="grid grid-cols-2 gap-3">
                            <button type="button" onClick={cancel} className="w-full text-body bg-[#DC2626] hover:bg-neutral-tertiary-medium hover:text-heading hover:bg-red-700 shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Batal</button>
                            <button type="button" onClick={confirm} className="w-full bg-[#487BEA] inline-flex items-center justify-center hover:bg-brand-strong  hover:bg-[#2e56ad]  shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Kirim</button> 
                        </div>    
                    </div>
                </div>
            </div>
        </div>
*/