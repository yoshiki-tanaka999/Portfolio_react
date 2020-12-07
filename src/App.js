import React, { Component } from 'react';

import { Header } from './components/header/header.component';
import { FirstView } from './components/first-view/first-view.component';
import { CardList } from './components/card-list/card-list.component';



import { Footer } from './components/footer/footer.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // クラス継承
  constructor() {
    super();

    this.state = {
      string: 'My Portfolio',
      monsters:[],
      searchField:''
    };
  }

  // マウントするときに、setState()で、this.state.monstersの中身を、jsonで取得及び、格納する
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // .then(users => console.log(users));
      .then(users => this.setState({ monsters: users}));
  }

  // Viewみたいなもんか
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
      <div className="App">


        <Header /> 
        <FirstView /> 

        {/* propsでcard-listに値を渡す */}
        {/* ↓↓ Products ↓↓ */}
        <h1 id='products'> Products </h1>
        <CardList monsters= { filteredMonsters }/> 
        {/* ↑↑ Products ↑↑ */}

        {/* ↓↓ Biography ↓↓ */}
        <h1 id='biography'> Biography </h1>
        <CardList monsters= { filteredMonsters }/> 
        {/* ↑↑ Biography ↑↑ */}

        {/* ↓↓ Skills ↓↓ */}
        <h1 id='skills'> Skills </h1>
        <p> Collection of works </p>
        {/* ↑↑ Skills ↑↑ */}

        {/* ↓↓ Contacts ↓↓ */}
        <h1 id='contact'> Contact </h1>
        <p> ご気軽にご連絡下さい。 </p>

        {/* ↑↑ Contacts ↑↑ */}

        {/* ↓↓ About me ↓↓ */}
        <h1 id='aboutme'> About me </h1>
        <p> 田中喜規 </p>
        {/* ↑↑ About me ↑↑ */}        

        <Footer /> 
        <p> © Yoshiki Tanaka </p>

      </div>
    );
  }
}

export default App;
