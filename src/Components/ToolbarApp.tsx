import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { AppBar, Badge, IconButton, MenuItem, Toolbar, Typography, Button, Hidden, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, ListItem, List, ListItemText } from "@material-ui/core";
import { Facebook, Instagram, Menu, Email, WhatsApp } from "@material-ui/icons";


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
      color: "#FFFFFF",
      marginRight: theme.spacing(2),
    },
    title: {
    },
    toolbar: {
      marginTop: -1,
      background: "#1d4494",
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
      alignItems: 'center',
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      [theme.breakpoints.down('xs')]: {
        flexDirection: "column",
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
      },
      boxShadow: "15px 0 25px 0 rgb(200 219 239 / 30%)",
    },
    logo: {
      maxWidth: "inherit",
      maxHeight: 164,
      [theme.breakpoints.down('sm')]: {
        maxHeight: 128,
      },
      padding: 4,
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
      color: "#FFFFFF",
    },
    subTitle:{
      color: "#FFFFFF",
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
      paddingTop: 180,
      paddingBottom: 180,
//      background: "#3c1e62",
      background: "#1d4494",
      '&::before': {
        content: '""',
        backgroundImage: "url(/statics/imagens/f1.png)",
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
        bottom: 0,
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
    }
  })
);

function ToolbarContact() {

  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
        <img src="/statics/imagens/logo.png" className={classes.logo} />
        <Hidden smUp>
          <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
        </Hidden>
        <Hidden xsDown>
          <div>
            <Button className={classes.optionsButtons} color="inherit">Inicio</Button>
            <Button className={classes.optionsButtons} color="inherit">Servicios</Button>
            <Button className={classes.optionsButtons} color="inherit">Contacto</Button>
          </div>
        </Hidden>
      </Toolbar>
  );
}

export default ToolbarContact;