import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ConfirmModal from './ConfirmModal'
import Badge from 'react-bootstrap/Badge';


function TaskList({ taskList,editTodo,removeTodo ,setAddedit,setBreadcrumtext}) {
    const [show, setShow] = useState(false);
    const [msgTask, setMsgTask] = useState({});

    const showDialog = (task) => {
       // alert(task.id);
        setShow(true);
        setMsgTask(task)
    }
    useEffect(() => {
     //   console.log(props);
    },[]);
   
    return (
        <Container className='p-2'>
            <Row>
                <Col md={12}>
                    <Table striped bordered hover >
                        <thead>
                            <tr  className="text-bg-primary">
                                <th>#</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                taskList.map((task, index) => (

                                      <tr key={task.id} 
                                      >
                                        <td>{task.id}</td>
                                        <td>{task.name}</td>
                                        <td>22-08-2022</td>
                                        <td > <Badge pill  bg={task.status === 'Complete' ? 'success' : 'danger' }>{task.status}</Badge></td>
                                        <td className='text-center'>  
                                            <Button variant="outline-success" onClick={() => {
                                                setAddedit(1);
                                                editTodo(task.id);
                                                setBreadcrumtext("Edit Task");
                                            }}>Edit</Button>{'  '}
                                            <Button variant="outline-danger"   onClick={() => showDialog(task)} >✕</Button>
                                         </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <ConfirmModal show={show} setShow={setShow} removeTodo={removeTodo} taskId={msgTask.id}   msg={`Are you sure to delete this task "${msgTask.name}"`} />
        </Container>
    )
}

export default TaskList