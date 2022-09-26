import React, { useState ,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function TaskForm(props) {
    const [task, setTask] = useState({
        id:(props.loadData.id == 0) ?   props.totalTask :props.loadData.id ,
        name:props?.loadData?.name,
        detail:props?.loadData?.detail,
        status:props?.loadData?.status
    });
    

    useEffect(() => {

        // setTask({
        //     id:(props.loadData.id == 0) ?   props.totalTask :props.loadData.id ,
        //     name:props.loadData.name,
        //     detail:props.loadData.detail,
        //     status:props.loadData.status 
        // })
        if(props.addedit==0){
            setTask({
            id:props.totalTask ,
            name:'',
            detail:'',
            status:'' 
        })
        }
      },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert('The name you entered was:');
      //  const formData = new FormData(e.target);
       // const formDataObj = Object.fromEntries(formData.entries());
        //formDataObj
        let id=   (e.target.id.value==0) ?  props.totalTask : e.target.id.value;
        let name= e.target.name.value
        let detail= e.target.detail.value
        let status= e.target.status.value
        setTask({
            id: id,
            name:name,
            detail:detail,
            status:status 
        })
        //console.log(e.target.name.value);
        //alert(id);
        console.log(task)
        props.addTodo(task);
        props.setShowform(false);
      }
      const changeHandler = (event) => {
        const { name, value } = event.target;
    
        setTask({
          ...task,
          [name]: value,
        });
      };
    return (
        <Container className='p-2' >
            <Row>
                <Col md={12}>
                  <Form name="frmname" onSubmit={handleSubmit}>
                  
                  <Form.Control type="hidden" name="id" value={task.id} onChange={changeHandler}  />
                        <Form.Group className="mb-3" controlId="frmname.name">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control type="text" name="name" value={task.name}  placeholder="Enter Task Name" onChange={changeHandler} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="frmname.detail">
                            <Form.Label>Task Detail</Form.Label>
                            <Form.Control as="textarea"  name="detail" value={task.detail} rows={3}  onChange={changeHandler} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="frmname.status">
                            <Form.Label>Task Status</Form.Label>
                            <Form.Select  name="status" value={task.status}   onChange={changeHandler}>
                                <option value="">Select Status</option>
                                <option value="Complete"   >Complete</option>
                                <option value="Incomplete" >Incomplete</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button> {' '}
                        <Button variant="secondary" onClick={() =>{
                        props.setShowform(0);
                        props.setBreadcrumtext("List");
                    }
                    }>Back</Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default TaskForm
