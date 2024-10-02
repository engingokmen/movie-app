import React, { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
