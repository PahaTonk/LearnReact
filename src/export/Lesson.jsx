import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';

const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)
const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Спартак</li>
      <li>6/8 vs Зенит</li>
      <li>6/14 @ Рубин</li>
    </ul>
  </div>
)
const Home = () => (
  <div>
    <h1>Добро пожаловать на наш сайт!</h1>
  </div>
)

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  console.log(player);
  console.log(props);
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
      <div>
        <h1>{player.name} (#{player.number})</h1>
        <h2>{player.position}</h2>
      </div>
  )
}

const Roster = () => (
  <Switch>
    <Route exact page="/roster" component={FullRoster} />
    <Route page='/roster/:number' component={Player}/>
  </Switch>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/roster" component={Roster}/>
      <Route path="/schedule" component={Schedule} />
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
