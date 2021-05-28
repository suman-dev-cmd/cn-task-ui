import logo from './logo.svg';
import './App.css';
import {Typography,AppBar,Button,Card,CardContent,CardActions,CardMedia,CssBaseline,Grid,Container,Toolbar} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './Style'
function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}> 
          <Container maxWidth="sm">
              <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                Photo Album
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Hello every one this is photo album site .You can choose any of photo what is the best choice.
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                      <Button variant="contained" color="primary">
                          See My Photos
                      </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                        Secondary Action
                    </Button>
                  </Grid>
                </Grid>
              </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              [1,2,3,4,5,6,7,8,9].map(obj=>(
                <Grid item key={obj} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia 
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                          Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use the section to describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">View</Button>
                      <Button size="small" color="primary">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
            
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterButtom>@suman.jana 2021</Typography>
      </footer>
    </>
  );
}

export default App;
