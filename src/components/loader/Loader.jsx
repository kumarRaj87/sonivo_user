import React from 'react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-[70vh] w-full">
            <div className="w-12 h-12 border-4 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}

export default Loader