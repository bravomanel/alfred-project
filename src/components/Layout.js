import Header from "./Header";
import Disclaimer from "./Disclaimer";

function Layout(props) {
   return (

      <section>
         <Header />


         <main >{props.children}</main>

         <Disclaimer />
      </section>
   )
}

export default Layout;