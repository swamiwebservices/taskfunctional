import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function TaskHeader(props) {
   // debugger;
  
    useEffect(() => {
        console.log(props);
    },[]);
    return (
        <Container className='p-2' >
            <Row>
                <Col md={8}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                         <Breadcrumb.Item active>{props.breadcrumtext}</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col md={4} className="d-flex justify-content-end"   style={{disply:'flex', justifyContent:'right'}}  >
                    {!props.showform ? <Button variant="primary" onClick={() => {
                        props.setShowform(1);
                        props.setAddedit(0);
                         props.setBreadcrumtext("Add Task");
                    }}>Add Task</Button> :<Button variant="secondary" onClick={() =>{
                        props.setShowform(0);
                        props.setBreadcrumtext("List");
                    }
                    }>Back</Button>}
                    </Col>
            </Row>
        </Container>
    )
}

export default TaskHeader