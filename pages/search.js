//@ts-nocheck
import Head from 'next/head'
//import styles from '../styles/Home.module.css'

import Jumbotron from '../components/jumbotron'
import Articel from '../components/articel'
import Pagination from '../components/pagination'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import Menu from '../data-dummy/menu.json'
export default function Search({ props }) {
  return (
    
     

<Layout Layoutprops = {props.menu}>


  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Search page
    </h3>
    <from action = "">
        <div className= "from-group">
            <label htmlfor="">isikan kata kunci disini</label>
            <input type="text" className="from-control"/>
        </div>
    </from>
    
    </div>

    <Sidebar />

  </div>

</Layout>
   

  
  )
}
Search.getInitialProps = () => {
    return {
      props : {
        menu : Menu
        
      }
    }
  }