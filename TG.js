
const SQUARES =  [];
const PLAYER = {
	pos: 55,
	health: 100,
	weapon: 1,
	XP: 0
}

const MAX_SQUARES = 3000;



const HEALTH_ITEMS = [];

for(let i = 0; i<= 12; i++){
	HEALTH_ITEMS.push(Math.round(Math.random() * MAX_SQUARES));
}

const ENNEMIES = [];
for(let i = 0; i<= 12; i++){
	ENNEMIES.push(Math.round(Math.random() * MAX_SQUARES));
}

const WEAPON_ITEMS = [];
for(let i = 0; i<= 12; i++){
	WEAPON_ITEMS.push(Math.round(Math.random() * MAX_SQUARES));
}

const SIDE_SQUARES_LEFT = [];
for(let i = 0; i<= MAX_SQUARES; i+= 50){
	SIDE_SQUARES_LEFT.push(i);
}


for(let i = 0; i< MAX_SQUARES; i++){
	if( (i>= 0 && i < 50) || (i>= 4950 && i<= MAX_SQUARES) ){
		SQUARES.push({
			id:i,
			item:'void',
			visible: true
		});
	}else if(SIDE_SQUARES_LEFT.indexOf(i)>= 0){
		SQUARES.push({
			id:i,
			item:'void',
			visible: true
		});
	}else if( (i>= 15 && i<= 30) || (i>= 65 && i<= 80) || (i>= 115 && i<= 130) ||
			(i>= 165 && i<= 180) || (i>= 215 && i<= 230) || (i>= 265 && i<= 280)
			|| (i>= 315 && i<= 330) || (i>= 365 && i<= 380) || (i>= 415 && i<= 430) 
			|| (i>=400 && i<= 413) || (i>=350 &&  i<=363) || (i>=450 && i<=463)
			|| (i>=500 && i<=513) || (i>=550 && i<=563) || (i>=600 && i<= 613) ||
			(i>=650 && i<=663) || (i>=700 && i<=713) || (i>=750 && i<=763) ||
			(i>= 432 && i<= 450) || (i>= 482 && i<= 500) || (i>= 532 && i<=550)
			|| (i>=582 && i<= 600) || (i>=632 && i<=650) || (i>=682 && i<= 700)
			|| (i>=732 && i<= 750) || (i>=782 && i<= 800) || (i>= 2890 && i<= 2900)
			|| (i>= 2990 && i<=3000) || (i>=2940 && i<=2950) || (i>=2840 && i<=2850)
			|| (i>=2790 && i<=2800) || (i>=2737 && i<= 2750) || (i>=2715 && i<=2736)
			|| (i>=2665 && i<= 2700) || (i>=2615 && i<=2650) || (i>=2586 && i<= 2588)
			|| (i>=2536 && i<=2538) || (i>=2486 && i<=2488) || (i>=2436 && i<=2438) ||
			(i>=2386 && i<=2388) || (i>=2336 && i<=2338) || (i>=2286 && i<=2288) ||
			(i>=2236 && i<=2238) || (i>=2186 && i<=2188) || (i>=2136 && i<=2138) 
			|| (i>=2086 && i<=2088) || (i>=2036 && i<=2038) || (i>=1986 && i<=1988) ||
			(i>=1936 && i<=1938) || (i>=1886 && i<=1888) || (i>=1836 && i<=1838) ||
			(i>=1786 && i<=1788) || (i>=1736 && i<=1738) || (i>=1686 && i<=1688) ||
			(i>=1586 && i<=1600) || (i>=1536 && i<=1550) || (i>=1486 && i<=1500) ||
			(i>=2000 && i<= 2032) || (i>=2050 && i<=2082) || (i>=2100 && i<=2132) ||
			(i>=1965 && i<=1967) || (i>=1915 && i<=1917) || (i>=1865 && i<=1867) ||
			(i>=1815 && i<=1817) || (i>=1765 && i<=1767) || (i>=1715 && i<=1717) ||
			(i>=1665 && i<=1667) || (i>=1615 && i<=1617) || (i>=1565 && i<=1567) ||
			(i>=1515 && i<=1517) || (i>=1465 && i<=1467) || (i>=1415 && i<=1417) ||
			(i>=1365 && i<=1367) || (i>=1300 && i<=1312) || (i>=1314 && i<=1317) ||
			(i>=1250 && i<=1262) || (i>=1264 && i<=1267) || (i>= 1436 && i<=1450) ||
			(i>=1386 && i<=1400) || (i>=1336 && i<=1350) || (i>=1286 && i<=1288) ||
			(i>=1236 && i<=1238) || (i>=1186 && i<=1188) || (i>=1136 && i<= 1138) ||
			(i>=1086 && i<=1088) || (i>= 986 && i<=988) || (i>=936 && i<=938) ||
			(i>=886 && i<=888) || (i>=836 && i<=838) || (i>= 1319 && i<= 1334) ||
			(i>=715 && i<= 730) || (i>=765 && i<=780)){
		SQUARES.push({
			id:i,
			item:'void',
			visible: true
		});

	}else if(i == PLAYER.pos){
		SQUARES.push({
			id:i,
			item: 'player',
			visible: true
		});
	}else if(HEALTH_ITEMS.indexOf(i) >= 0){
		SQUARES.push({
			id: i,			
			item: 'health',
			visible: true
		});
	}else if(ENNEMIES.indexOf(i) >= 0){
		SQUARES.push({
			id: i,
			item: 'ennemy',
			health: 50,
			weapon: 1,
			visible: true
		});
	}else if(WEAPON_ITEMS.indexOf(i) >= 0){
		SQUARES.push({
			id: i,
			item: 'weapon',
			visible: true
		});
	}else if(i == 2886){
		SQUARES.push({
			id: i,
			item: 'boss',
			weapon: 3,
			health: 200,
			visible: true
		});
	}else{
		SQUARES.push({
			id: i,			
			item: 'none',
			visible: true
		});
		
	}
}


const App = React.createClass({
  getInitialState: function(){
    return {squares: this.props.squares, player: this.props.player, darkness: true};
  },
  handleKey: function(e){
    e = e || window.event;
    let charcode = e.charCode || e.keyCode;
    switch(charcode){
      case 38:
        let currPosUp = this.state.player.pos;
        let posUp = this.state.player.pos - 50;
        this.changePlayerPos(posUp, currPosUp);
        break;

      case 37:
        let currPosLeft = this.state.player.pos;
        let posLeft = this.state.player.pos - 1;
        this.changePlayerPos(posLeft, currPosLeft);
        break;

      case 39:
        let currPosRight = this.state.player.pos;
        let posRight = this.state.player.pos + 1;
        this.changePlayerPos(posRight, currPosRight);
        break;

      case 40: 
        let currPosDown = this.state.player.pos;
        let posDown= this.state.player.pos + 50;
        this.changePlayerPos(posDown, currPosDown);
        break;
    }
  },

  componentDidMount: function(){
    if(this.state.darkness){
      this.changeDarkness(this.state.player.pos);
      
    }
  },

  changePlayerPos: function(newPos, prevPos){
    if(this.state.squares[newPos].item == 'health'){
      this.handleHealthItem(newPos, prevPos);

    }else if(this.state.squares[newPos].item == 'weapon'){
      this.handleWeaponItem(newPos, prevPos);

    }else if(this.state.squares[newPos].item == 'ennemy' ||
      this.state.squares[newPos].item == 'boss'){
      let fight = this.handleFight(newPos, prevPos);

    }else if(this.state.squares[newPos].item == 'none'){
      this.state.player.pos = newPos;
      this.state.squares[prevPos].item = 'none';
      this.state.squares[newPos].item = 'player';
     if(this.state.darkness){
      this.changeDarkness(newPos);
      
     }
    }
  },

  handleHealthItem: function(newPos, prevPos){
    this.state.player.health += 20;
    this.state.player.pos = newPos;
    this.state.squares[prevPos].item = 'none';
    this.state.squares[newPos].item = 'player';
    this.setState(this.state);
  },

  handleWeaponItem: function(newPos, prevPos){
    this.state.player.weapon += 1;
    this.state.player.pos = newPos;
    this.state.squares[prevPos].item = 'none';
    this.state.squares[newPos].item= 'player'; 
    this.setState(this.state);
  },

  handleFight: function(newPos, prevPos){
    let ennemyHealth = this.state.squares[newPos].health;
    ennemyHealth -= this.state.player.weapon * 5;  
    if(ennemyHealth <= 0){
      if(this.state.squares[newPos].item == 'boss'){
        alert('CONGRATS, YOU WON!!!');
        window.location.replace(true);
      }else{

        this.state.player.pos = newPos;
        this.state.player.XP += 20;
        this.state.squares[prevPos].item = 'none';
        this.state.squares[newPos].item = 'player'; 
        this.setState(this.state);
      }
    }else{
      this.state.player.health -= 10 * this.state.squares[newPos].weapon;
      if(this.state.player.health <= 0){
        alert('YOU LOST');
        window.location.replace(true);
      }
      this.state.squares[newPos].health -= this.state.player.weapon * 5;
      this.setState(this.state);
    }
    
    
  },

  changeDarkness: function(newPos){
    let posToDisplay = [];
    //horizontal row
    for(let i = newPos - 3; i <= newPos + 3; i++){
      posToDisplay.push(i);
    }

    for( let i = newPos-53; i<= newPos - 47; i++){
      posToDisplay.push(i);
    }

    for(let i = newPos-102; i<= newPos - 98; i++){
      posToDisplay.push(i); 
    }

    for(let i = newPos-151; i<= newPos - 149; i++){
      posToDisplay.push(i); 
    }

    for(let i = newPos+47; i<= newPos + 53; i++){
      posToDisplay.push(i); 
    }

    for(let i = newPos+98; i<= newPos + 102; i++){
      posToDisplay.push(i); 
    }

    for(let i = newPos+149; i<= newPos + 151; i++){
      posToDisplay.push(i); 
    }

    this.state.squares.map((square)=>{
      if(posToDisplay.indexOf(square.id) >= 0){
        this.state.squares[square.id].visible = true;
      }else{
        this.state.squares[square.id].visible = false;
      }
    });

    this.setState(this.state);
  },
  toggleDarkness: function(){
    if(!this.state.darkness){
      this.state.squares.map((square)=>{
        square.visible = true;
      });
      this.state.darkness = true;
      this.setState(this.state);
    }else{
    this.state.darkness = false;
    this.setState(this.state);
    this.changeDarkness(this.state.player.pos);
  }
},

  render: function(){
    return (
        <div>
          <Score health={this.state.player.health}
                XP={this.state.player.XP}
                weapon={this.state.player.weapon}
                toggleDarkness={this.toggleDarkness} />
          <div contentEditable className="board" onKeyDown={this.handleKey}>
            {this.state.squares.map((square)=>{
              return (
                  <Square key={square.id} id={square.id} item={square.item} visible={square.visible}/>
                )
            })}
          </div>
        </div>
      )
  }
});

const Square = React.createClass({

	render: function(){
		let classes;
		if(this.props.item == 'none'){
			classes = 'square empty';
		}else if(this.props.item == 'health'){
			classes = 'square health';
		}else if(this.props.item == 'ennemy'){
			classes = 'square ennemy';
		}else if(this.props.item == 'weapon'){
			classes = 'square weapon';
		}else if(this.props.item == 'player'){
			classes = 'square player';
		}else if(this.props.item == 'void'){
			classes = 'square void';
		}else if(this.props.item == 'boss'){
			classes = 'square boss';
		}

		if(this.props.visible){
			classes += ' visible';
		}else{
			classes += ' invisible';
		}		
		return (
			<span className={classes}></span>
		)
	}
});

const Score = React.createClass({
	toggleDarkness: function(){
		this.props.toggleDarkness();
	},
	render: function(){
		let level;
		if(this.props.XP < 50){
			level = 1;
		}else if(this.props.XP < 100){
			level = 2;
		}else if(this.props.XP < 150){
			level=3;
		}else if(this.props.XP <200){
			level=4;
		}
		return(
			<div>
				<span>Health : {this.props.health}</span>
				&nbsp;
				&nbsp;
				&nbsp;
				<span>XP: {this.props.XP}</span>
				&nbsp;
				&nbsp;
				&nbsp;
				<span> Level: {level} </span>
				&nbsp;
				&nbsp;
				&nbsp;
				<span>Weapon: {this.props.weapon}</span>
				<button onClick={this.toggleDarkness}>Toggle Darkness</button>
			</div>
		)
	}
});


ReactDOM.render(
  <App squares={SQUARES} player={PLAYER}/>,
  document.getElementById('root')
);
