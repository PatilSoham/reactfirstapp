

const float = {

    width: '32%',
    border: '1px solid black',
    float: 'left',
    height: '275px',
    display: 'inline-block',
    margin: '5px',
    marginTop: '50px',
    padding: '10px',
    boxSizing:'border-box'

}
const img = {
    height: '100%',
    width: '100%',

}
const float1 = {
    width: '32%',
    border: '1px solid black',
    float: 'left',
    height: '275px',
    display: 'inline-block',
   
    margin:'5px',
    padding: '10px',
    boxSizing:'border-box'
}

const img1 = {
    width: '100%',
    height: '100%'
}
const margin = {
    marginLeft: '10px',

}


function Card(props) {
    return (
        <div>
            

            <div  >
                <div style={float}>
                    <h1 style={margin}>{props.name}</h1>
                    <h2 style={{ marginLeft: '220px' }}>{props.title}</h2>
                </div>

                <div style={float}>
                    <h1>{props.crcinfo}</h1>
                    <p style={{ marginLeft: '20px', marginRight: '20px', }}>{props.cricketinfo}</p>
                </div>


            <div style={float}>
                <img src={props.image1} alt="Cricketimg" style={img} />
            </div>

            </div>

            <div style={{ clear: 'both' }}>
                <div style={float1}>
                    <h2 > {props.playername}</h2>
                    <p >{props.playerinfo}</p>
                </div>

                <div style={float1}>
                    <img src={props.playerimg} alt="playerimg" style={img1} />
                </div>
                <div style={float1}>
                    <h4>{props.playerstatus}</h4>
                    <h4>{props.playercarrierrunes}</h4>
                    <h4>{props.playerbestScores}</h4>
                    <h4>{props.playerODIrunesandRank}</h4>
                    <h4>{props.playerTtwentyrunesandRank}</h4>
                    <h4>{props.playerTESTrunesandRank}</h4>
                </div>
            </div>

        </div>

    )


}
export default Card;