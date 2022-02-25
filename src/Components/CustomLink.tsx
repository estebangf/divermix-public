import { Link } from "react-router-dom"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: "none",
    }
  })
);

interface CustomLinkProps {
  to: string,
  children: JSX.Element,
  className?: string
}

export default function CustomLink (props: CustomLinkProps) {
  const {
    to,
    children,
    className
  } = props

  const classes = useStyles();

  return (
    <Link
      to={to}
      onClick={() => window.scroll(0, 0)}
      className={!!className ? [className, classes.link].join(" ") : classes.link}
    >
      {children}
    </Link>
  )
}