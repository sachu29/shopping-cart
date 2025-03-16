import React from 'react'
import DropdownComponent from '../components/DropdownComponent';
import CardComponent from '../components/CardComponent'
const Main = ({searchQuery, cardData}) => {
    
    return (
        <main className='container mx-auto p-4'>
            <div className='p-4 text-white bg-gradient-to-r from-black via-brown-300 to-red-600 border rounded-lg mb-6 '>
                <p className='font-bold'>Lorem Ipsum</p>
                <p>Slash Sales begins in June. Get up to 80% Discount on all products <span className='font-bold '>Read More</span></p>
            </div>

            <div className="mb-6">
                <DropdownComponent />
            </div>
            
            <div className="row">
                <div className="grid grid-cols-4 gap-4">
                    <CardComponent searchQuery={searchQuery} cardData={cardData} />
                   

                </div>
            </div>
        </main>
    )
}

export default Main