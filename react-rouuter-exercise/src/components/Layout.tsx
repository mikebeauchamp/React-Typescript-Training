import Nav from './Nav'

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Nav />
            {/* main tag is for the main content of the page. it should contain the primary content of the page */}
            <main>{children}</main>
        </>
    )
}

export default Layout
