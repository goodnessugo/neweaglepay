import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navigation from './assets/components/Navigation'
import Overview from './assets/components/Overview'
import Heading from './assets/components/Heading'
import SideNavigation from './assets/components/SideNavigation'
import Transaction from './assets/components/Transaction'
import Bills from './assets/components/Bills'
import Transfer from './assets/components/Transfer'
import CustomerTransaction from './assets/components/CustomerTransaction'
import BillsCollection from './assets/components/BillsCollection'
import Airtime from './assets/components/Airtime'
import AddMoney from './assets/components/AddMoney'
import Balance from './assets/components/Balance'
import TestPage from './assets/components/TestPage'


function App() {






  return (
    <div className=' '>

      <BrowserRouter>
        <Heading />

        {/* testing linking */}
        
        {/* end of testing linking */}
        <Routes>

          <Route path="/" element={<Overview />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/heading" element={<Heading />} />
          <Route path="/sidenavigation" element={<SideNavigation />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/customertransaction" element={<CustomerTransaction />} />
          <Route path="/billscollection" element={<BillsCollection />} />
          <Route path="/airtime" element={<Airtime />} />
          <Route path="/addmoney" element={<AddMoney />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/testpage" element={<TestPage />} />

        </Routes>
        <Navigation />
      </BrowserRouter>




    </div>
  )
}

export default App
