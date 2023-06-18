import { useState, useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'


const App = () =>{
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then((users)=>{
        setMonsters(users);
      });
  },[])
  useEffect(()=>{
    let newFilteredMonsters = monsters.filter((monster)=> monster.name.toLowerCase().includes(searchField));
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])
  const OnSearchChange=(event) =>{
    let searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }
  return(
    <div className="App">
      <h1 className='app-title'>
        Monsters Rolodex
      </h1>
        <SearchBox onChangeHandler={OnSearchChange} placeholder='Search Monster' className='monsters-search-box'/>
            <CardList monsters={filteredMonsters}/>
          
      </div>
  );
}
// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       monster: [],
//       searchField: ''
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>response.json())
//     .then((data)=>{
//       this.setState(()=>{
//         return {
//           monster:data
//         }
//       })
//     });
//   }

//   OnSearchChange = (event) =>{
//     let searchField = event.target.value.toLowerCase();
//     this.setState(()=>{
//       return { searchField }
//     })
//   };
//   render(){
//     let filteredMonsters = this.state.monster.filter((monster)=> monster.name.toLowerCase().includes(this.state.searchField));
//     return (
//       <div className="App">
//       <h1 className='app-title'>
//         Monsters Rolodex
//       </h1>
//         <SearchBox onChangeHandler={this.OnSearchChange} placeholder='Search Monster' className='monsters-search-box'/>
//             <CardList monsters={filteredMonsters}/>
          
//       </div>
//     );
//   }
// }

export default App;
