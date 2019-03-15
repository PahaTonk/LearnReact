import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const propsValues = {
    title: "Список смартфонов",
    items: [
            "HTC U Ultra",
            "iPhone 7",
            "Google Pixel",
            "Hawei P9",
            "Meizu Pro 6",
            "Asus Zenfone 3"
    ]
};

class Item extends Component {
  render () {
    return <li>{this.props.name}</li>;
  }
}

class ItemsList extends Component {
  constructor (props) {
    super(props);
    this.state = {items : this.props.data.items};
    this.filterList = this.filterList.bind(this);
  }
  filterList (e) {
    this.setState({items : this.props.data.items.filter((item) => item.toLowerCase().search(e.target.value.toLowerCase()) !== -1)});
  }
  render () {
    return (
      <div>
        <h2>{this.props.data.title}</h2>
        <input placeholder="Поиск" onChange={this.filterList} />
        <ul>
          {
            this.state.items.map((item) => <Item name={item} key={item} />)
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ItemsList data={propsValues}/> ,  document.getElementById('root'));
