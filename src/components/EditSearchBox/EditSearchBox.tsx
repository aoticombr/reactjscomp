import React, {useState}  from 'react';

import "./EditSearchBox.css";
import Form from 'react-bootstrap/Form';
import {Container,  Row, Table, Col,Alert, Button, Modal  } from 'react-bootstrap';
//import {Container,Button,Table, Row, Col, Alert} from 'react-bootstrap';

const EditSearchBox = (props:any) => {
    const [showSearch, setshowSearch] = useState(false);
    const [limit, setLimit]   = useState('50');
    const [pesq, setPesq]   = useState('');
    const [isLoading, setIsLoading]   = useState(false);
    const [_dados, set_Dados]   = useState([]);
    //
   // const [id, setID]       = useState(props?.valueID);
   // const [desc, setDESC]   = useState(props?.valueDESC);
    //
    function ShowModel(value:any) {  
        
          setshowSearch(value);
         
    }
    async function procurar(event:any){
        event.preventDefault();
        let _filtros = [];                 
        //filtros por data
        _filtros.push({campo:props.descricao,tipo:'=%',valor:pesq});                   
        //filtros limite de dados
        const filtros = {filtros:_filtros, limit:limit};  
        const ws = new props.classSearch();          
        await ws.getLista(filtros)
          .then((res:any)=>{            
            set_Dados(res);
             
        })
    }
    async function selecionar(value:any){
      
       if (props?.onChangeID) props?.onChangeID(value.id);
       if (props?.onChangeDESC) props?.onChangeDESC(value.desc);
       //setshowSearch(false);
       ShowModel(false);
    }
    
    function RenderLine(props: any) {
      const coluns = [];
      for (let index = 0; index < props.coluns_data.length; index++) {
        coluns.push(
          <td key={index}>
            {props.row[props.coluns_data[index]]}
          </td>
        );
      }
    
      return (
        <tr key={props.row.id}>
          <td>
            <Button variant="success" onClick={() => props.selecionar({ id: props.row.id, desc: props.row[props.descricao] })}>
              Selecionar
            </Button>
          </td>
          {coluns}
        </tr>
      );
    }
    //=========================
    function RenderTable(props: any) {
      const coluns = [];
      for (let index = 0; index < props.coluns_title.length; index++) {   
        coluns.push(        
        <th>{props.coluns_title[index]}</th> 
        );
      }
          return (
              <Table striped bordered hover>
                  <thead>
                      <tr>
                        <th width="100">Selecionar</th>                        
                        {coluns}  
                      </tr>
                  </thead>
                  <tbody>
                      {props.dados.map((item:any)=> <RenderLine key={item.id} row={item}/>)}
                  </tbody>
              </Table>
          )
    }
    //==============================
    function RenderEmptyRow(){
          return (
              
              <Alert variant="danger">
              Nenhum Dado Encontrado.
            </Alert>
          )
    }

  return (
    <div className="EditSearchBox">
      <Form.Group>
      <Row>
      <Form.Label>{props?.titulo}</Form.Label> 
      </Row>
       
      <Row>
        <Col xs={12} md={10}>
          <Form.Control
                          disabled={true}
                          type={props?.type}
                          placeholder={props?.placeholder}
                          value={props?.valueDESC}
          />
        </Col>
        <Col xs={12} md={2}>
          <Button 
             disabled={props?.disabled}
             variant="secondary" 
             onClick={() => {ShowModel(true)}}
          >
                            Procurar
          </Button>
        </Col>
      </Row>
      
      
      </Form.Group>
      
      <Modal 
      show={showSearch} 
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={() => {ShowModel(false)}}
      keyboard={false}
      animation={false}
    //  id={_row_now.id}
      >
      <Modal.Header closeButton>
        <Modal.Title>{props?.modaltitle}</Modal.Title>
        
      </Modal.Header>
      <Modal.Body>
      
          <Row>
              <Row>
              <h3>Filtros</h3>
              </Row>
              <Row>
                <Col xs={12} md={3}>
                  <Form.Group>
                    <Form.Label>Limit:</Form.Label>
                    <Form.Select 
                    aria-label="Default select example"
                    size="lg"
                    onChange={value => setLimit(value.target.value)} 
                    >                                 
                    <option value="50">50</option>
                    <option value="100">100</option>
                    </Form.Select>
                  </Form.Group>  
                </Col>                            
                <Col xs={12} md={5}>
                  <Form.Group>
                    <Form.Label>Conteudo:</Form.Label> 
                    <Form.Control 
                        type="text"
                        size="lg"
                        placeholder="Digite aqui o dado desejado" 
                        onChange={value => setPesq(value.target.value)} 
                        value={pesq}
                    />
                  </Form.Group>                              
                </Col>
                <Col xs={12} md={2}>
                  <Form.Group>    
                    <Form.Label>.        .</Form.Label>                                 
                    <Button variant="warning" onClick={procurar}>Procurar</Button>
                  </Form.Group>                              
                </Col> 
                <Col xs={12} md={2}>
                  <Form.Group>   
                    <Form.Label>.        .</Form.Label>                                   
                    <Button variant="secondary" onClick={() => {ShowModel(false)}} > Cancelar </Button>
                  </Form.Group>                              
                </Col> 
              </Row>  
          </Row>
          
        {!isLoading &&  <RenderTable dados={_dados} />  }
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>                
    </div>
  );
};
//onChange={e => setId(e.target.value)}
export default EditSearchBox;
