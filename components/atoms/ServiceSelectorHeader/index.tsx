import ServiceSelectorValue from "@/components/atoms/ServiceSelectorValue";
import { useState } from 'react'

export default function ServiceSelectorHeader() {
 const [isButtonClick, setIsButtonClick] = useState('work')

    const WorkWhenClick = {
        backgroundColor: isButtonClick === 'aiform' ? 'white' : 'black',
        color: isButtonClick === 'aiform' ? 'black' : 'white'
    }
    const StudiesWhenClick = {
        backgroundColor: isButtonClick === 'manualform' ? 'white' : 'black',
        color: isButtonClick === 'manualform' ? 'black' : 'white'
    }

    return ( 
        <div className="flex justify-center items-center mt-32" translate="no">
            <section className="justify-center w-90 md:w-160" id="experience">
                <h1 className="mb-4 text-gray-300 text-xl tracking-widest">Rekomendasi AI</h1>

                <section className="flex">
                    <div className="flex justify-around cursor-pointer mb-3 rounded-md h-8 items-center w-80" style={WorkWhenClick}
                    onClick={() => setIsButtonClick('aiform')}
                    >
                        <div className="cursor-pointer">
                            <button
                                className="">Rekomendasi Ai</button>
                        </div>
                    </div>
                    <div className="flex justify-around cursor-pointer mb-3 rounded-md h-8 items-center w-80" style={StudiesWhenClick}
                    onClick={() => setIsButtonClick('manualform')}
                    >
                        <div className="">
                            <button
                                className="">Manual Form</button>

                        </div>
                    </div>
                </section>
                <ServiceSelectorValue setActiveTab={isButtonClick} />
            </section>
        </div>
    )
}