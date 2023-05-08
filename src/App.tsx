import { useState } from 'react'
import { CollardGreens } from './CollardGreens'

function App() {
    const [force, setForce] = useState(0)

    const handleClick = (): void => {
        setForce(force + 1)
    }

    return (
        <div className="flex items-center justify-center text-white h-screen">
            <div className="relative z-10">
                <div className="mt-1.5 inline-block rounded-lg outline-none bg-green-700 cursor-pointer">
                    <span
                        className="font-bold uppercase flex -translate-y-1.5 items-center rounded-lg px-5 py-3 text-center text-white bg-green-500 duration-300 active:-translate-y-1 active:"
                        onClick={() => handleClick()}
                    >
                       Fly 💸 
                    </span>
                </div>
            </div>
            {force !== 0 && <CollardGreens key={force} />}
        </div>
    )
}

export default App
