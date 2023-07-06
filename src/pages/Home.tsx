import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <header className="font-bold text-4xl mb-10">React lazy loading test!</header>
            <main>
                <Link to={'content'}>
                    <button className='bg-violet-500 px-4 py-2 font-semibold rounded ring-2 ring-violet-500 ring-offset-2 ring-offset-slate-700	hover:ring-offset-blue-400 hover:bg-violet-600'>
                        Content page
                    </button>
                </Link>
            </main>
        </>
    )
}

export default Home