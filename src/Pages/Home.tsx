import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { AppBar, Badge, IconButton, MenuItem, Toolbar, Typography, Button, Hidden, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import { Facebook, Instagram, Menu, Email, WhatsApp, LocalShipping, KeyboardArrowRight } from "@material-ui/icons";
import Footer from '../Components/Footer';
import Copyright from '../Components/Copyright';
import ToolbarApp from '../Components/ToolbarApp';
import ToolbarContact from '../Components/ToolbarContact';
import CategoryItem from '../Components/CategoryItem';
import Category, { CategoriesExamples } from '../Models/Category';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#efefef",
//      background: "#3e205d",
      flexGrow: 1,
    },
    infoBar: {
      background: "#1d4494",
      padding: 0,
      color: "#FFFFFF",
      [theme.breakpoints.down('xs')]: {
        display: "flex",
        flexDirection: "column",
      },
      [theme.breakpoints.up('sm')]: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
      },
    },
    emailInfo:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    emailIcon: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
    },
    toolbar: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      minHeight: 128,
      alignItems: 'center',
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      boxShadow: "15px 0 25px 0 rgb(200 219 239 / 30%)",
    },
    logo: {
      width: "-webkit-fill-available",
      padding: "30px 0px",
      maxWidth: 250,
      paddingRight: 0
    },
    logoLG: {
      maxWidth: 550,
      width: "-webkit-fill-available",
      margin: 30
    },
    imgPromotion: {
      width: "100%",
    },
    space: {
      flexGrow: 1,
    },
    optionsButtons: {
      fontWeight: 700,
      color: "#b80959",
    },
    subTitle:{
      color: "#da1866",
      fontFamily: "\"Nunito\", Arial, \"Helvetica Neue\", Helvetica, sans-serif",
      margin: ".5em 0",
      lineHeight: "1.5em",
      letterSpacing: "0.02em",
      paddingBottom: 50,
    },
    content: {
      paddingTop: 50,
      background: "#FFFFFF",
      textAlign: "center",
      paddingBottom: 100,
    },
    grid: {
      width: "100%",
      margin: 0,
    },
    card: {
      borderRadius: 24,
      transition: "transform .25s, background .5s",
      '&:hover': {
        transform: "scale(1.07)",
        background: "#1d449426"
      },
    },
    media: {
      height: 240,
      backgroundSize: "contain",
      margin: theme.spacing(2)
    },
    opcionName: {
      fontSize: 24,
      lineHeight: "1.3em",
      fontWeight: 700,
      color: "#273f5b",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
    explained: {
      position: "relative",
      paddingTop: 120,
      paddingBottom: 120,
//      background: "#3c1e62",
      background: "#1d4494",
      '&::before': {
        content: '""',
        backgroundImage: "url(/statics/imagens/f1.png)",
        //backgroundImage: "url(/statics/imagens/02-triangle.svg)",
        top: -1,
        height: 170,
        position: "absolute",
        width: "100%",
        backgroundSize: "cover",
        left: 0,
      },
      '&::after': {
        content: '""',
        backgroundImage: "url(/statics/imagens/f2.png)",
        //backgroundImage: "url(/statics/imagens/01-triangle.svg)",
        bottom: -1,
        height: 170,
        position: "absolute",
        width: "100%",
        backgroundSize: "cover",
        left: 0,
      }
    },
    explainedText: {
      color: "#FFFFFF",
      margin: ".5em 0",
      lineHeight: "1.5em",
      letterSpacing: "0.02em",
      paddingBottom: 50,
    },
    foother: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px 0px",
    },
    footherText: {
      fontSize: 14,
      marginBottom: theme.spacing(1),
      color: "#6987ab",
      display: "block",
    },
    service: {
      background: "#FFFFFF",
      padding: theme.spacing(2),
      textAlign: "center",
      color: "#4b5d73"
    },
    pasos: {
      padding: theme.spacing(1),
      color: "#da1866"
    },
    
    add: {
      flex: 1,
      color: "#FFFFFF",
      boxShadow: 'none',
      textTransform: 'none',
      border: '1px solid',
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
      margin: 12,
    },
    whatsApp: {
      flex: 1,
      margin: 12,
      color: "#FFFFFF",
      boxShadow: 'none',
      textTransform: 'none',
      border: '1px solid',
      backgroundColor: '#4db45a',
      borderColor: '#4db45a',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#54c562',
        borderColor: '#54c562',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#58ce66',
        borderColor: '#58ce66',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem #54c562b0',
      },
    },
    innerPasos: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: 400,
      margin: "auto",
    },
    imgPasos: {
      width: "100%",
      maxWidth: 300,
    }
  })
);

function Home() {

  const classes = useStyles();

  const opciones: Category[] = CategoriesExamples;
  return (
    <div className={classes.root}>
      <ToolbarContact />

      <ToolbarApp />

      <img
        src="https://scontent.fcpc1-1.fna.fbcdn.net/v/t31.18172-8/p180x540/18278513_1837152093215408_2988644870205431137_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGLcfR6uR3q_1pGSZiGjPkaRFtMCg8L5_BEW0wKDwvn8JFqED4CY-Q7eVrKIfJcACow8v4fkXO5sD4xWlsNXKCq&_nc_ohc=eBVoyy3J5kUAX8yR10t&_nc_ht=scontent.fcpc1-1.fna&oh=f00f6beca0ede944465e5260b456f487&oe=61636825"
        className={classes.imgPromotion}
      />

      <div className={classes.content}>
        <Typography className={classes.subTitle} variant="h5" >
          ¡HACEMOS DELIVERY PARA EVENTOS!
        </Typography>
        <Grid
          className={classes.grid}
          spacing={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {opciones.map(opcion => {
            return (
              <Grid item xs={9} sm={5} md={3} lg={3}>
                <CategoryItem {...opcion} />
              </Grid>
            )
          })}
        </Grid>

        <div className={classes.explained}>
          <img src="/statics/imagens/logo.png" className={classes.logoLG} />
          <Typography variant="h4" className={classes.explainedText} >
            ARMAMOS TODO EN SOLO 10 MINUTOS,<br />
            que comience la diversión!
          </Typography>
          <Typography variant="h5" className={classes.explainedText} >
            Te dejamos todo listo para usar, WHATSAPPEANOS!
          </Typography>
          <Typography variant="h6" className={classes.explainedText} >
            ¿Qué te gustaría alquilar? ¡Reservalo hoy mismo!
          </Typography>
        </div>
      </div>

      <div className={classes.service}>
        <Typography variant="h5" >
          EL SERVICIO MAS ÁGIL<br />
          Mirá que simple
        </Typography>
        <Typography variant="h4" className={classes.pasos}>
          Elejí que querés y escribinos
        </Typography>
        {/* 
        <div className={classes.innerPasos}>
          <Button
            variant="outlined"
            className={classes.add}
            startIcon={<LocalShipping />}>
            Agregar
          </Button>
          <KeyboardArrowRight />
          <Button
            variant="outlined"
            className={classes.whatsApp}
            startIcon={<WhatsApp />}>
            Whatsapp
          </Button>
        </div>
 */}
        <img
          src="/statics/imagens/message.png"
          className={classes.imgPasos}
        />
        <Typography variant="h4" className={classes.pasos}>
          Haces la reserva y te lo llevamos
        </Typography>
        <img
            src="/statics/imagens/reservation.png"
            className={classes.imgPasos}
        />
        <Typography variant="h4" className={classes.pasos}>
          Lo retiramos sin cargo cuando termines
        </Typography>
        <img
          src="/statics/imagens/shipping-free.png"
          className={classes.imgPasos}
        />
      </div>


      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;