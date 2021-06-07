import React, {Fragment, useEffect, useState} from "react";
import logo from "./logo.svg";
import './App.css';
import { Button} from "@material-ui/core";
import Navbar from "./component/Navbar";
import MyCard from "./component/MyCard";
import {getMatches} from "./Api/Api";
import { Container, Grid, Typography } from "@material-ui/core";

function App() {
const [matches, setMatches]= useState([]);


useEffect(() => {
  getMatches()
  .then((data)=>{ setMatches(data.matches)
    console.log(data.matches);
})
   .catch(error => alert("Could not load data"));
}, []);

return(
<div className="App">
<Navbar/>
<Typography variant="h2"  style={{marginTop: 20} }   > 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓕𝓮𝓮𝓵𝓼𝓒𝓻𝓲𝓬𝓴𝓮𝓽 </Typography>


<Grid container>
<Grid sm="2"> </Grid>
<Grid sm="8">
{ matches.map((match) => (
   <Fragment>
      { match.type=="Twenty20" ? (
         <MyCard key={match.unique_id} match={match} />
         ) : (

      " "
         )}
   </Fragment>


   
))}
</Grid>
</Grid>
</div>
);
}

export default App;