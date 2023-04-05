import { useState } from "react";

//using interface in typescript we can define the name or the shape of an object, by default we use props but some prefer to prefix it with the name of the component.
interface props {
  //here we are using type annotation to specify the type of various properties
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: props) {
  //Hook: It is a function that allows us to tap into built in features in react. It tells react that the component can have data or state that will change overtime. eg. useState(-1);
  const [selectedIndex, setSelectedIndex ] = useState(-1);
  //variable (selectedIndex)  arr[0]
  //updater function (setSelectedIndex) arr[1]

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index, ) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
