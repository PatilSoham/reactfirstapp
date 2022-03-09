import logo from './logo.svg';
import './App.css';
// import Card from './Card';
import Data from './Data';
import Card from './Card';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
        <Card

        name={Data[0].name}
        title={Data[0].title}
        crcinfo={Data[0].crcinfo}
        cricketinfo={Data[0].cricketinfo}
        image1={Data[0].image1}
        playername={Data[0].playername}
        playerimg={Data[0].playerimg}
        playerinfo={Data[0].playerinfo}
        playerstatus={Data[0].playerstatus}
        playercarrierrunes={Data[0].playercarrierrunes}
        playerODIrunesandRank={Data[0].playerODIrunesandRank}
        playerTtwentyrunesandRank={Data[0].playerTtwentyrunesandRank}
        playerTESTrunesandRank={Data[0].playerTESTrunesandRank}
        playerbestScores={Data[0].playerbestScores}

        />
      

        <Card

        name={Data[1].name}
        title={Data[1].title}
        crcinfo={Data[1].crcinfo}
        cricketinfo={Data[1].cricketinfo}
        image1={Data[1].image1}
        playername={Data[1].playername}
        playerimg={Data[1].playerimg}
        playerinfo={Data[1].playerinfo}
        playerstatus={Data[1].playerstatus}
        playercarrierrunes={Data[1].playercarrierrunes}
        playerODIrunesandRank={Data[1].playerODIrunesandRank}
        playerTtwentyrunesandRank={Data[1].playerTtwentyrunesandRank}
        playerTESTrunesandRank={Data[1].playerTESTrunesandRank}
        playerbestScores={Data[1].playerbestScores}

        />
        <Card

        name={Data[2].name}
        title={Data[2].title}
        crcinfo={Data[2].crcinfo}
        cricketinfo={Data[2].cricketinfo}
        image1={Data[2].image1}
        playername={Data[2].playername}
        playerimg={Data[2].playerimg}
        playerinfo={Data[2].playerinfo}
        playerstatus={Data[2].playerstatus}
        playercarrierrunes={Data[2].playercarrierrunes}
        playerODIrunesandRank={Data[2].playerODIrunesandRank}
        playerTtwentyrunesandRank={Data[2].playerTtwentyrunesandRank}
        playerTESTrunesandRank={Data[2].playerTESTrunesandRank}
        playerbestScores={Data[2].playerbestScores}

        />

    </div>
  );
}

export default App;
