import React from "react";

const ListGroup = ({ title, items }) => (
  <div className="ListGroup">
    <h4>{title}</h4>
    <ul className="list-group list-group-horizontal-xl">
      {items.map(item => (
        <li className="list-group-item" key={`${title}_${item}`}>
          {item}
        </li>
      ))}

      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
    </ul>
  </div>
);

export default ListGroup;
