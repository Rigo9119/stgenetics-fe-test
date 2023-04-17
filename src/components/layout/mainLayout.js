import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
        </>
    )
}

export default MainLayout
