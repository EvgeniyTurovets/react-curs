import './App.css';
import Dialogs from './component/dialogs/Dialogs';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import Profile from './component/profile/Profile';
import {BrowserRouter,Route} from 'react-router-dom';
import DialogsContainer from './component/dialogs/DialogsContainer';

const App = (props) =>{

  return(
    <BrowserRouter>
      <div className="app-wraper">
        <Header />     
        <Navbar />    
        
        <div className="content">
          <Route path="/profile" render={ () => <Profile /> }/>
          <Route path="/dialogs" render={ () => <DialogsContainer store={props.store}/>}/>
        </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
