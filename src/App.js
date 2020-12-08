import React, { Component } from 'react';

import { Header } from './components/header/header.component';
import { FirstView } from './components/first-view/first-view.component';
import { CardList } from './components/card-list/card-list.component';
import { CardListBio } from './components/card-list-bio/card-list-bio.component';
import { Skill } from './components/skill/skill.component';
import { Contact } from './components/contact/contact.component';
import { AboutMe } from './components/about-me/about-me.component';

// import  { Image01 } from './components/card-bio/thumbnail01.jpeg';

import { Footer } from './components/footer/footer.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // クラス継承
  constructor() {
    super();

    this.state = {
      string: 'My Portfolio',
      products:[
        { id: 1, 
          name: 'Hello Diff.s', 
          url:'https://player.vimeo.com/video/488196210', 
          language:'#Vue.js #Laravel', 
          description:'価値観の固定化や分断を解決するディスカッションサービス。私の価値観を表出させた文字通り、大切な我が子です。' 
        },
        { id: 2, 
          name: 'Lab9 Atelier', 
          url:'', 
          language:'#Laravel', 
          description:'コミュニティ内の不便さから着想を得て、作品を個人ごとに管理・シェアできるプロダクトをチームで開発。' 
        },
        { id: 3, 
          name: 'リトルトゥースチャンネル', 
          url:'https://player.vimeo.com/video/488334255', 
          language:'#HTML #CSS #Javascript', 
          description:'Gs ACADEMYでHTML/CSSを勉強して、1週間で制作した完全にネタの処女作。日向坂46とオードリー大好きです。' 
        },
      ],
      biographies:[
        { id: 1, 
          name: '我が闘争~学生時代編~', 
          img:'https://drive.google.com/file/d/1dYs97MlQSdIAFpB_bNdfBYRZqQcUkFJB/view?usp=sharing', 
          url:'https://drive.google.com/file/d/156dIQhnX_E1XRX5X561Ilfrl0oxFfheq/view?usp=sharing', 
          description:'現在の私の考え方や生き方の原点となる出来事を中心にまとめています。内定を頂いた大学3年辺りまでの伝記です。' 
        },
        { id: 2, 
          name: '我が闘争~MEJ編~', 
          img:'', url:'https://drive.google.com/file/d/1SJ65FIuDMEXQ7_Mv4Nvk_XhuAgb-xWAv/view?usp=sharing', 
          description:'組織崩壊をしたMEJでの出来事を中心にまとめています。社会人としてのマインドセットの原点だとと思います。' 
        },
        { id: 3, 
          name: "我が闘争~G's ACADEMY編~",
          img:'', url:'https://drive.google.com/file/d/1ikTXvwn8H6XNiR9uT5CqkJIPIZEfdNC3/view?usp=sharing', 
          description:'コロナという特殊な状況の中、(オンラインで)半年間通ったGs ACADEMYについての備忘録兼反省のまとめです。' 
        },
      ]
  }
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
        
        <div id='products-text'>
          <h4>「サムネイル」をクリックすると動画でプロダクトを見られます！</h4>     
        </div>

        <CardList products= { products }/> 
        {/* ↑↑ Products ↑↑ */}

        {/* ↓↓ Biography ↓↓ */}
        <h1 id='biographies'> Biographies </h1>
        
        <div id='biographies-text'>
          <h4>人生の足跡を残したいという想いから、「我が闘争」というこれまでの人生の伝記を作成しています。</h4>
          <h4>それぞれ、70〜130Pありますので、お読みになる際は、心してかかって下さい。</h4>        
        </div>
        {/* <CardList products= { products }/>  */}
        <CardListBio biographies= { biographies }/>         
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
        <AboutMe /> 
        {/* ↑↑ About me ↑↑ */}        

        <Footer /> 
        <div id='footer-end'>
          <p> © Yoshiki Tanaka </p>
        </div>
      </div>
    );
  }
}

export default App;
