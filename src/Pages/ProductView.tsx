import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { AppBar, Badge, IconButton, MenuItem, Toolbar, Typography, Button, Hidden, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, List, ListItem } from "@material-ui/core";
import { Facebook, Instagram, Menu, Email, WhatsApp, LocalShipping } from "@material-ui/icons";
import Footer from '../Components/Footer';
import Copyright from '../Components/Copyright';
import ToolbarApp from '../Components/ToolbarApp';
import ToolbarContact from '../Components/ToolbarContact';
import ProductItem from '../Components/ProductItem';
import Product, { ProductsExamples } from '../Models/Product';
import { useParams } from 'react-router';
import PriceFormat from '../Tools/PriceFormat';


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
      textAlign: "center",
      color: "#da1866",
      fontFamily: "\"Nunito\", Arial, \"Helvetica Neue\", Helvetica, sans-serif",
      margin: ".5em 0",
      lineHeight: "1.5em",
      letterSpacing: "0.02em",
      paddingBottom: 50,
    },
    content: {
      paddingTop: 50,
//      background: "#FFFFFF",
      paddingBottom: 100,
    },
    grid: {
      width: "100%",
      margin: 0,
    },
    card: {
      borderRadius: 4,
      background: "#FFFFFF",
      margin: theme.spacing(3),
    },
    cardContent: {
      padding: theme.spacing(3),
      border: "1px solid rgba(0,0,0,.1)",
      borderRadius: 4,
      margin: theme.spacing(3),
    },
    media: {
      width: "auto",
      maxWidth: "calc(100% - 60px)",
      padding: 30,
      borderRadius: 4,
      maxHeight: 500,
      backgroundSize: "auto",
      margin: "auto",
      display: "block",
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
    },
    price: {
      fontSize: 20,
      lineHeight: "1.3em",
      fontWeight: 700,
      color: "#273f5b",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
    add: {
      color: "#FFFFFF",
      marginTop: theme.spacing(3),
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
    },
    caracteristicas: {
      display: "list-item",
      listStyleType: '"✓"',
      paddingInlineStart: "1ch",
    }
  })
);

function ProductView() {
  const {
    name
  } = useParams<{name: string}>();
  
  const classes = useStyles();

  const product:  Product | undefined = ProductsExamples.filter(opt => opt.name == name)[0];

  return (
    <div className={classes.root}>
      <ToolbarContact />

      <ToolbarApp />

      <div className={classes.content}>
        {!!product ?
          <div className={classes.card}>
            <Grid
              className={classes.grid}
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={6} md={7} lg={8}>
                <img
                  className={classes.media}
                  src={product.image}
                  title="Contemplative Reptile"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4}>
                <div className={classes.cardContent}>
                  <Typography className={classes.opcionName} gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography className={classes.price} gutterBottom variant="h5" component="h2">
                    {PriceFormat.format(product.price)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.descripcion}
                  </Typography>
                  <List>
                    {product.caracteristicas.map(c => {
                      return (
                        <ListItem>
                          <Typography variant="body2" color="textSecondary" component="p">
                            <strong>{c.tipo}: </strong>{c.value}
                          </Typography>
                        </ListItem>
                      )
                    })}
                  </List>

                  <Button
                    variant="outlined"
                    className={classes.add}
                    fullWidth
                    startIcon={<LocalShipping />}>
                    Agregar
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          : <span>Producto no encontrado</span>
        }
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default ProductView;