import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'
import Team from './routes/Team'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'
import Member from './routes/Member';
import './App.css';

function App() {
  let [members, setMembers] = useState(/* JSON.parse(localStorage.getItem('members')) ||  */[])

    useEffect(()=> {
      /* if(!localStorage.getItem('members')){ */

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setMembers(data))
      /* } */
    // const fetchData = async function(){
    //   try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const dataJson = await response.json();
    //     setMembers(dataJson);
    //   } catch(error){
    //     console.log(error);
    //   }
    // }
    // fetchData()
    }, [])

    /* useEffect(() => {
      localStorage.setItem('members', JSON.stringify(members))
    }, [members]) */



  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team members={members} />}>
            <Route index element={
            <main style={{ padding: "1rem" }}>
              <h2>Insert team picture here</h2>
            </main>
          } />
              <Route path=":memberId" element={<Member members={members} setMembers={setMembers} />}/>
            </Route>
            <Route path="contact" element={<Contact />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
