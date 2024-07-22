
import { useState } from 'react'
import { db } from "./data/db"
import Header from './components/Header-Menu'
import Filtro from './components/Filtros'
import Anuncio from './components/Anuncio'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  return (
    <>
      <Header/>

      <Container xl = 'true'>
            <Row className="my-3"> 
                <Col md={6} sm={12} className="bg-light p-3">
                  <Filtro/>
                  {data.map((info)=>(
              <Anuncio
                key={info.id}
                guitar = {info}
                setCart ={setCart}
            />
           ))
           }
                </Col>
                <Col md={6} className="bg-secondary text-white p-3 d-none d-md-block"> {/* Segunda mitad */}
                  
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default App