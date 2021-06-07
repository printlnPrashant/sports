import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Grow, Typography } from '@material-ui/core'
import { DragHandle } from '@material-ui/icons';
// import { Image } from '@material-ui/icons'
import React, { Fragment, useState } from 'react'
import { getMatchDetail } from '../Api/Api';
import image from '../img/VS.png';
const MyCard =({match}) => {

 const[detail,setDetail] = useState({});  
 
 const [open, setOpen] = useState(false);

const handleClick = (id) => {

    getMatchDetail(id)
    .then((data) => {
        console.log("MATCH DATA",data);
    setDetail(data);
    handleOpen();
})
    .catch(error=> console.log(error));

};


const getMatchCart= () => { 
   return (
<Card  style={{marginTop: 20 }}>
<CardContent>
 <Grid   container  justify="center" alignItems="center" spacing="4"> 
<Grid item> 
<Typography variant="h5"> {match["team-1"]} </Typography>
</Grid>
<Grid item> 
<img style={{width:85 }}
     src= {image} />

</Grid>
<Grid item> 
<Typography variant="h5"> {match["team-2"]} </Typography>
</Grid>
    </Grid> 
    </CardContent>
    <CardActions>
       
<Grid container justify="center" >

<Button 
onClick= {()=> {
  handleClick(match.unique_id);
}}
item variant="contained" color="primary">
            Show Details
             </Button>

             <Button  style={{ marginLeft: 5}}
              item variant="contained" color="primary">
          Starting time {new Date(match.dateTimeGMT).toLocaleString()}
             </Button>

</Grid>
    </CardActions>
</Card> 


   );



};

const handleClose = () => {
setOpen(false);

}

const handleOpen =() => {
setOpen(true);

}

const getDialog =() => (
    <Dialog open={open} onClose={handleClose}>
 <DialogTitle id="alert-dialog-title"> {"Match Detail.."} </DialogTitle>
   <DialogContent> 
     <DialogContentText id="alert-dialog-description"> 
      <Typography>{detail.stat} </Typography>
      <Typography>
          Match 
          <span style={{fontStyle: "italic", fontWeight: "bold"}}> 
     {detail.matchStarted ? "Started" : "Still not Started"}  {" "} 
          </span>
      </Typography>
 
     <Typography>
         score
         <span style={{fontStyle: "italic", fontWeight: "bold"}}>
          
          {detail.score}


         </span>
         
         
         
         </Typography>    



      
      </DialogContentText>  
   </DialogContent>

   <DialogActions>
 <Button onClick={handleClose} color="primary" autoFoucus> 
 Close
 </Button>
   </DialogActions>
    </Dialog>
);

return <Fragment>
{getMatchCart()}
{getDialog()}

</Fragment>;

};

export default MyCard;