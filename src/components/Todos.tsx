import React from "react";

//... React.FC  ===   function component 
// which is yet another type definition built
// into this React package.
// that receives a props object
// as a first argument,
// which will be an object that always has a children property,

// ...React.FC  generic because 
// different functional components
// have different props definitions.

//... via <{ items: string[] }> 
// we r merging
// our own prop object definition
// with that base prop object definition.

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos