import React, { Component } from 'react';

import { Header } from './components/header/header.component';
import { FirstView } from './components/first-view/first-view.component';
import { CardList } from './components/card-list/card-list.component';
import { Skill } from './components/skill/skill.component';
import { Contact } from './components/contact/contact.component';


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
      products:[
        { id: 1, name: 'Hello Diff.s', url:'https://player.vimeo.com/video/488196210', language:'#Vue.js #Laravel', description:'価値観の固定化や分断を解決するディスカッションサービス' },
        { id: 2, name: 'Lab9 Atelier', url:'', language:'#Laravel', description:'コミュニティ内の作品を個人ごとに管理・シェアできるプロダクト' },
        { id: 3, name: 'リトルトゥースチャンネル', url:'', language:'#HTML/CSS #Javascript', description:'Gs ACADEMYでHTML/CSSを勉強して、制作した処女作。オードリー大好きです。' },
      ],
      biographies:[]
    };
  }

  // マウントするときに、setState()で、this.state.monstersの中身を、jsonで取得及び、格納する
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     // .then(users => console.log(users));
  //     .then(users => this.setState({ monsters: users}));
  // }

  // Viewみたいなもんか
  render() {
    // const { monsters } = this.state;
    const { products } = this.state;
    const { biographies } = this.state;

    return(
      <div className="App">

        <Header /> 
        <FirstView /> 

        {/* propsでcard-listに値を渡す */}
        {/* ↓↓ Products ↓↓ */}
        <h1 id='products'> Products </h1>
        <CardList products= { products }/> 
        {/* ↑↑ Products ↑↑ */}

        {/* ↓↓ Biography ↓↓ */}
        <h1 id='biography'> Biography </h1>
        <CardList products= { products }/> 
        {/* ↑↑ Biography ↑↑ */}

        {/* ↓↓ Skills ↓↓ */}
        <h1 id='skills'> Skills </h1>
        <Skill /> 
        {/* ↑↑ Skills ↑↑ */}

        {/* ↓↓ Contacts ↓↓ */}
        <Contact /> 

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
