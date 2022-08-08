import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'
import {TbPokeball} from 'react-icons/tb'


type Anchor = 'top' | 'left' | 'bottom' | 'right'

const pokeBall = require("../../images/pokeBall.png")
const masterBall = require("../../images/masterBall.png")

export default function ToggleDrawer(){
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }
  
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Pokedex', 'PokeSearch', 'PokeItems', 'PokePlaces'].map((text, index) => (
          <Link to={`/${text.toLowerCase()}`}>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={pokeBall} alt="pokeIcon" width="30" height="30"/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Contact PokeDev', 'Easter PokeEggs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={masterBall} alt="pokeMasterIcon" width="30" height="30"/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button hidden={false} onClick={toggleDrawer(anchor, true)}><TbPokeball className='headerIcon' /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
