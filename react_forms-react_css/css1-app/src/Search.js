import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./test.json";
var data = require("./test.json");
export default function ComboBox(props) {


  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={resto}
      sx={{ width: 300,border:"2px solid white",color:"white"}}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

const resto = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },

 
];
