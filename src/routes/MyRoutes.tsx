import Home from '../pages/Home'
import PokeItems from '../pages/PokeItems'
import PokePlaces from '../pages/PokePlaces'
import Pokedex from '../pages/Pokemon/Pokedex'
import PokeData from '../pages/Pokemon/PokeData'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


export default function MyRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' 
        element={<><Navigate to={'/home'}/>
          {console.log('An? Um ovo está prestes a chocar')}
          {console.log('https://mcgen.herokuapp.com/a.php?i=22&h=For%C3%A7ando+a+Barra&t=Egg+%232+---+0b1e0251')}</>
        }/>
        {/* Outro Egg, caramba você tá ficando bom mesmo!!  */}
        {/* Egg: Forçando a Barra (Tentou acessar manualmente a rota '/') */}
        <Route path='/home' element={<Home />}/>
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokesearch' element={<PokeData />} />
        <Route path='/pokeitems' element={<PokeItems />}/>
        <Route path='/pokeplaces' element={<PokePlaces />}/>
      </Routes>
    </BrowserRouter>
  )
}