import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import { Container } from '@mui/system';

export default function StudentEnrolmentForm() {
    const paperStyle = { padding: '50px 20px', width: 800, margin: "20px auto" }
    const [name, setName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [students, setStudents] = React.useState([])

    const handleClick=(e)=> {
        e.preventDefault()
        const student ={name , address}
        console.log(student)

        fetch("http://localhost:8080/student/addNewStudentWithLocation",{
            method:"POST",headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=> {
            console.log("New Student is added")
        })
    }
    React.useEffect(()=>{
        fetch("http://localhost:8080/student/getAllStudent")
        .then(response=>response.json())
        .then((result)=>{ setStudents(result) })
    },[])
    return (
        <Container>
            <Paper elevation={5} style={paperStyle}>
                <h1 style={{ color: 'blue' }}><u>Add Student</u></h1>
                <form>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: 'fullWidth' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth value={address} onChange={(e) => setAddress(e.target.value)} />
                        <Button variant="contained" onClick={handleClick}>Submit</Button>
                    </Box>
                </form>
                {name} 
                {address}
            </Paper>
            <Paper elevation={5} style={paperStyle}>
                <h1 style={{color:'blue'}}><u>Student Records</u></h1>
                {students.map(student=>(
                    <Paper elevation={3} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.mapkey}>
                        Id:{student.id}<br/>
                        Name:{student.name}<br/>
                        Address:{student.address}
                    </Paper>
                ) )}
            </Paper>
        </Container>
    );
}
