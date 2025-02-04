import React from 'react'
import { NotebookPen } from 'lucide-react';


const Header = () => {
    return (
        <>
            <div className='flex items-center p-8 bg-blue-200'>
                <div>
                    <NotebookPen size={48} className='ml-20' /> 
                </div>
                <div className='ml-160 text-3xl font-bold'>
                    Welcome To Blogs Valley!
                </div>
            </div>
        </>
    )
}

export default Header