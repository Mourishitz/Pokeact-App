import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function OtherRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>Pikachu!</>}/>
      </Routes>
    </BrowserRouter>
  )
}