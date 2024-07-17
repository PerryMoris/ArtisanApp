import  React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Art from '../assets/art.jpg'
import { useNavigate } from 'react-router-dom';



export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
   
    const handlesubmit = () =>{
        if(username === "cwaysi" && password === "admin"){
           
            navigate("/")
        }
       
    }

    return (
        <div className='logincontainer'>
            <img className='logoimage' src={Art} />
            <h3>Log into your account</h3>
            <form onSubmit={handlesubmit} className='formcontainer'>
            <TextField 
            id="outlined-basic" 
            label="Username" 
            variant="outlined" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <TextField 
            id="outlined-basic" 
            label="Password" 
            type="password" 
            variant="outlined" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
           <Button type='submit' id="outlined-basic"  variant='contained' color='success'>Login</Button>
           <Button>I don't have an account, sign-up</Button>
          
           </form>
        </div>
    )
}