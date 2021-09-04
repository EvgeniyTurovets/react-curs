import './App.css';
import Dialogs from './component/dialogs/Dialogs';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import Profile from './component/profile/Profile';
import {BrowserRouter,Route} from 'react-router-dom';

const App = (props) =>{

  return(
    <BrowserRouter>
      <div className="app-wraper">
        <Header />     
        <Navbar />    
        
        <div className="content">
          <Route path="/profile" render={ () => 
            <Profile 
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch}
            />    
          }/>
          <Route path="/dialogs" render={ () => <Dialogs store={props.store}  state={props.state.dialogsPage} state={props.state.dialogsPage} />}/>
        </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
