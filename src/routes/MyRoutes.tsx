import Home from '../pages/Home'
import PokeItems from '../pages/PokeItems'
import PokePlaces from '../pages/PokePlaces'
import Pokedex from '../pages/Pokemon/Pokedex'
import PokeData from '../pages/Pokemon/PokeData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function OtherRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokesearch' element={<PokeData />} />
        <Route path='/pokeitems' element={<PokeItems />}/>
        <Route path='/pokeplaces' element={<PokePlaces />}/>
      </Routes>
    </BrowserRouter>
  )
}