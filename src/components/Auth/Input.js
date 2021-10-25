import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core"
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({ half, name, handleChange, label, autoFocus, type, handleShowPassword }) => {


  return (
    <Grid item xs={6} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        autoFocus={autoFocus}
        type={type}
        variant="outlined"
        required
        fullWidth
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        } : null}
      />
    </Grid>
  )
}

export default Input