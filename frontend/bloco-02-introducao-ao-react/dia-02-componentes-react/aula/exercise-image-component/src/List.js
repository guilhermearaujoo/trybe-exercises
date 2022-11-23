import React from 'react';

class List extends React.Component {
  render() {
    const list = this.props.list;
    const items = list.map((element, index) => {
      return (<li key={index} >{element}</li>)
      });
    return (
      <div>
        <h2>
          Grocery List
        </h2>
        <ul>
          { items }
        </ul>
      </div>
    )
  }
}

export default List;