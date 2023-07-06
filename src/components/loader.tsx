import PrinterLogo from '../assets/printer.svg'

export function Loader() {
    return (
        <div className='flex flex-col gap-4'>
            <img src={PrinterLogo} className='h-10' />
            <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 rounded-full animate-pulse dark:bg-blue-400"></div>
                <div className="w-3 h-3 rounded-full animate-pulse dark:bg-blue-400"></div>
                <div className="w-3 h-3 rounded-full animate-pulse dark:bg-blue-400"></div>
            </div>
        </div >
    )
}