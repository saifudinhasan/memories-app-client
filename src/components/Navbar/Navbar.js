import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import useStyles from './styles'
import memories from '../../images/memories.png'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import decode from 'jwt-decode'

const Navbar = () => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  useEffect(() => {
    const token = user?.token
    // Check jwt expiration
    if (token) {
      const decodedToken = decode(token)
      // Check expiration of 1 hour
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    // JWT ...
    setUser(JSON.parse(localStorage.getItem('profile')))

  }, [location])

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/')
    setUser(null)
  }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img className={classes.image} src={memories} alt="memories" height="30" />
        <Typography className={classes.heading} variant="h4" align="center">Memories</Typography>
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button onClick={logout} variant="contained" className={classes.logout} color="secondary">Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar