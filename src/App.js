import React, {Component} from 'react';
import ItemList from './components/List';
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      item:"",
      itemList: []
    }
  }

  // NEED TO ADD A SHOULDCOMPONENTUPDATE LIFECYCLE METHOD + KEYDOWN ATTRIBUTE ON INPUT FOR ENTER KEY

  handleInput(e){
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
  }

  addItem(e){
    e.preventDefault();
    let itemToAdd = this.state.item;
    return this.setState({itemList: [...this.state.itemList, itemToAdd], item:""});
  }

  // handleKeyPress = (event) => {
  //   if(event.key === 'Enter'){
  //     console.log('enter press here! ')
  //   }
  // }

  render(){
  return (
    <div>
      <header>
        <h1>My To-Do List</h1> 
      </header>
      <main>
        <section id="add-item-section" className="container">
          <div>
            <input id="add-item-input" type="text" name="item" value={this.state.item} onKeyPress={(e)=> e.key === 'Enter' ? this.addItem(e):""} onChange={(e)=>this.handleInput(e)}/> 
          </div>
          <div>
            <input id="add-item-btn" type="button" value="Add" onClick={(e)=>this.addItem(e)}/>
          </div>
        </section>
        <section id="item-list-section" className="container">
         
          {this.state.itemList.map((item,index)=>(
            <ItemList key={index} item={item} />
          ))}
                 
        </section>
    
      </main>
    </div>
  )
}
}


export default App;
