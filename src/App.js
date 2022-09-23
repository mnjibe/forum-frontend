import Header from './components/Header';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import  AppBar  from '@mui/material/AppBar';
import  Toolbar  from '@mui/material/Toolbar';
import 'fontsource-roboto';
import  Typography  from '@mui/material/Typography';
import { makeStyles, ThemeProvider, createMUITheme} from '@mui/material/styles';
import {blue} from '@mui/material/colors';



function App() {
  return (
    <div> 
      <h2> Forum </h2> 
      <AppBar color = 'transparent'>
        <Toolbar> 
        <ButtonGroup className = 'App-button'> 
            <Button 
            variant = 'outlined'
            size = 'small'>  
            Log In
            </Button>
            <Button 
            variant = 'contained'
            size = 'small'
            color = 'primary'>
              Sign Up
            </Button>
      </ButtonGroup>
        </Toolbar>
      </AppBar>  
    </div> 
  )
}
export default App;
