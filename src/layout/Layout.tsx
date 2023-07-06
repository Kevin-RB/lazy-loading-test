import Navbar from '../components/Navbar'
import { Suspense } from 'react'
import { Loader } from '../components/loader'

type layout = {
    children: React.ReactNode
}

const Layout: React.FC<layout> = ({ children }) => {
    return (
        <section className="bg-slate-700 text-white min-h-screen">
            <Navbar />
            <main className='pt-10'>
                <Suspense fallback={<Loader/>}>
                    {children}
                </Suspense>
            </main>
        </section>
    )
}

export default Layout