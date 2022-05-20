import React, { useEffect } from 'react';
import Navbar from './layouts/Navbar';
import Home from './views/Home';
import AdminBoard from './views/AdminBoard';
import tr from './assets/img/tr.png'
import adminPagebg from './assets/img/adminbg.png'
import pic from './assets/img/clientbg.png'
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LoginModal from './components/LoginModal';
import ClientBoard from './views/ClientBoard';
import BeComeClientModal from './components/BeComeClientModal';
import CodeVerificationModal from './components/CodeVerificationModal';
import PasswordModal from './components/PasswordModal';
import MobileMenuDrawer from './components/MobileMenuDrawer';
import AminLoginModal from './components/AminLoginModal';
import EditModal from './components/EditModal';
import DataModal from './components/DataModal';
import Recharge from './views/ClientBoard/Recharge';
import Forfait from './views/ClientBoard/Forfait';
import Personaliser from './views/ClientBoard/Personaliser';
import History from './views/ClientBoard/History';
import Profile from './views/ClientBoard/Profile';
import ChangePassword from './views/ClientBoard/ChangePassword';

function App() {

  const url = useSelector(state => state.app.location)

  const { role } = useSelector(state => state.authentication.authedClientData)



  return (
    <div className='' style={role === "admin" || role === "" ? {
      backgroundImage:
        `url(
      ${url === '/' ? tr : ''}
      ${url === '/admin' ? adminPagebg : ''}
      ${url === '/client' ? pic : ''}
      )`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'
    } : { background: "#00306D" }} >
      <Router>

        {
          role === "client" ? null : <Navbar />
        }

        <Switch>
          <Route path='/admin' component={AdminBoard} />
          <Route path='/client' component={ClientBoard} />
          <Route path='/recharge' component={Recharge} />
          <Route path='/forfaits' component={Forfait} />
          <Route path='/personaliser' component={Personaliser} />
          <Route path='/historique' component={History} />
          <Route path='/profile' component={Profile} />
          <Route path='/changePassword' component={ChangePassword} />
          <Route path={'/'} component={Home} />
        </Switch>

        {
          role === "client" ? null : <Footer />
        }

        <LoginModal />
        <BeComeClientModal />
        <CodeVerificationModal />
        <MobileMenuDrawer />
        <AminLoginModal />
        <PasswordModal />
        <EditModal />
        <DataModal />
      </Router>

    </div>
  );
}

export default App;