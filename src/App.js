import React from 'react'
import './App.css';
import "typeface-roboto";
import city from './city.jpg'

import Button from '@material-ui/core/Button';
import { AppBar , Container , Toolbar , IconButton , Typography , Box , Paper , Grid , Card , CardMedia , CardContent , CardActions, DialogTitle , DialogContent , DialogContentText} from '@material-ui/core';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LayerIcon from '@material-ui/icons/Layers';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow:1
    },
    menuButton: {
        marginRight:theme.spacing(1)
    },
    title: {
        flexGrow:1
    },
    mainFeatutesPost:{
        position:'relative',
        color:theme.palette.common.white,
        marginBottom:theme.spacing(4),
        backgroundSize:'cover',
        backgroundRepead:'no-repeat',
        backgroundPosition:'center'
    },
    overlay:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        background: "rgba(0,0,0,0.3)"
    },
    mainFeatutesPostContent:{
        position:'relative',
        padding:theme.spacing(6),
        marginTop:theme.spacing(3)
    },
    cardMedia:{
        paddingTop: '56.25%',
    },
    cardContent:{
        flexGrow:1
    },
    cardGrid:{
        marginTop:theme.spacing(4)
    }
}));


const cards = [1,2,3,4,5,6,7,8,9];


function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents")
    const handleChange = (event , newValue) => {
        setValue(newValue)
    }
    
    const [open, setOpen] = React.useState(false)
    
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    
            // https://source.unsplash.com/random
  return (
      <>
      
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton adge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Web Developer Blog</Typography>
                    
                   <Box mr={3}>
                        <Button color="inherit" variant="outlined" onClick={handleClickOpen}> log in </Button>
                       
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                            <DialogTitle id="form-dialog-title">log in</DialogTitle>
                            <DialogContent>
                                <DialogContentText>log in to see videos</DialogContentText>
                                <TextField margin="dense" id="name" label="email adress" fullWidth type="email" />
                                <TextField margin="dense" id="pass" label="password" fullWidth type="password" />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">cancel</Button>
                                <Button onClick={handleClose} color="primary">log in</Button>
                            </DialogActions>
                       </Dialog>
                        
                    </Box>  
                    
                    
                        <Button color="secondary" variant="contained">sign out</Button>
                </Toolbar>
            </Container>
        </AppBar>
        
        <main>
            <Paper className={classes.mainFeatutesPost} 
            style={{ backgroundImage: `url(${city})` }}>

                <Container fixed>
                <div className={classes.overlay}></div>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeatutesPostContent}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Web Developer Blog
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui culpa alias explicabo sint, aspernatur corporis, dolorum.
                                </Typography>
                                <Button variant="contained" color="secondary">lern more</Button>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                        
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            
            <div className={classes.mainContent}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" gutterBottom color="textPrimary">web dev blog</Typography>
                    <Typography variant="h5" align="center" gutterBottom color="textSecondary" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minima exercitationem dolore odit inventore voluptatum ullam voluptate ipsa nulla doloremque.
                    </Typography>
                    
            <div className={classes.mainButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary">start now</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary">learn more</Button>
                    </Grid>
                </Grid>
            </div>
            
                </Container>
            </div>
            
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} md={4} sm={6}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={city} title="Image title"/>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>Blog post</Typography>
                                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium.</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">view</Button>
                                    
                                    <Button size="small" color="primary">edit</Button>
                                    
                                    <LayerIcon />
                                    <PlayCircleFilledIcon />
                                    
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            
        </main>
        
        <footer style={{marginTop:'20px'}}>
            <Typography variant="h6" align="center" gutterBottom>footer</Typography>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                
            </BottomNavigation>
            <Typography align="center" color="textSecondary" component="p" variant="subtitle1"> Web Developer Blog</Typography>
        </footer>
      </>
  );
}

export default App;
