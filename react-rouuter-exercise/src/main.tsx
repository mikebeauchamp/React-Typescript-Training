import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Layout from './components/Layout.tsx'
import Blog from './pages/Blog.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path="/blog/:category/:id"
                    element={
                        <Layout>
                            <Blog />
                        </Layout>
                    }
                />
                <Route
                    path="/blog/:category"
                    element={
                        <Layout>
                            <Blog />
                        </Layout>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <Layout>
                            <Blog />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
