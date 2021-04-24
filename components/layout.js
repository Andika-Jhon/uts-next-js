import Header from './header'
import Footer from './footer'
export default function Layout({children, Layoutprops}){
    return(
        <>
        <Header menu = {Layoutprops}/>
        <main className="container">
            {children}
        </main>

        <Footer />
        </>
    )
}