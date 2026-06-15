// Larder — application shell (CONTRACTS.md §5).
//
// Layout: sticky header (wordmark links to /, BasketButton with live count
// links to /basket), <main> with the routed <Outlet/>, footer with a footer
// SourceCredit and a link to /sources. Defines the five routes, importing each
// screen from ./screens/* (those files are owned by the screens deliverable).

import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'

import BasketButton from './components/BasketButton.jsx'
import SourceCredit from './components/SourceCredit.jsx'
import { useBasket } from './state/basket.js'

import Browse from './screens/Browse.jsx'
import Meal from './screens/Meal.jsx'
import Basket from './screens/Basket.jsx'
import ShoppingList from './screens/ShoppingList.jsx'
import Sources from './screens/Sources.jsx'

function Header() {
  const { count } = useBasket()
  const navigate = useNavigate()

  return (
    <header className="larder-header">
      <div className="larder-container larder-header__inner">
        <Link to="/" className="larder-wordmark" aria-label="Larder — home">
          <span className="larder-wordmark__mark" aria-hidden="true">
            ◖
          </span>
          <span>Larder</span>
        </Link>

        <BasketButton count={count} onClick={() => navigate('/basket')} />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="larder-footer">
      <div className="larder-container larder-footer__inner">
        <SourceCredit variant="footer" />
        <Link to="/sources">View all sources and credits</Link>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="larder-app">
      <Header />

      <main className="larder-main">
        <Routes>
          <Route element={<Outlet />}>
            <Route index element={<Browse />} />
            <Route path="meal/:id" element={<Meal />} />
            <Route path="basket" element={<Basket />} />
            <Route path="list" element={<ShoppingList />} />
            <Route path="sources" element={<Sources />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
