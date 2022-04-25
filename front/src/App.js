import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandindPage/LandingPage';
import { BrowserRouter, Route } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import CreateNote from './screens/createNote/CreateNote';
import SingleNote from './screens/SingleNote/SingleNote';
import { useState } from 'react';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';


const App=()=>{

  const [search, setSearch] = useState("")
  return (
    <BrowserRouter forceRefresh={true}>
      
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen}  />
        <Route path="/profile" component={ProfileScreen}  />
        <Route path="/register" component={RegisterScreen}  />
        <Route path="/createnote" component={CreateNote}  />
        <Route path="/note/:id" component={SingleNote}  />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
