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
import {white} from '@mui/material/colors';
import  TextField  from '@mui/material/TextField';
import  InputBase  from '@mui/material/InputBase';
import  Input  from '@mui/material/Input';
import  SearchIcon from '@mui/icons-material/Search';

const SearchBar = (placeholder, onChange) => {
  return (
    <div>
      <SearchIcon /> 
      <Input
          placeholder={placeholder} 
          onChange={onChange} 
          />
    </div>
  )
}

function App() {
  return (
    <div>  
      <Header />
    </div> 
  )
}
export default App;
