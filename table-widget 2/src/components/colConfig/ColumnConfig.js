import { useEffect, useState, useRef } from "react";
import DraggableList from "react-draggable-list";
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

import {
    OverflowMenu,
    OverflowMenuItem,
    Checkbox,
} from "carbon-components-react";
import './ColumnConfig.scss'
import { Menu, Draggable} from "@carbon/icons-react"
const data = Array(10)
  .fill(null)
  .map((item, index) => ({ header : index }));
const Item = ({ item, itemSelected, dragHandleProps }) => {
  const { onMouseDown, onTouchStart } = dragHandleProps;

  return (
    <div
      className="disable-select"
      style={{
        border: "1px solid black",
        margin: "4px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        background: "#fff",
        userSelect: "none"
      }}
      onTouchStart={(e) => {
        e.preventDefault();
        console.log("touchStart");
        e.target.style.backgroundColor = "blue";
        document.body.style.overflow = "hidden";
        onTouchStart(e);
      }}
      onMouseDown={(e) => {
        console.log("mouseDown");
        document.body.style.overflow = "hidden";
        onMouseDown(e);
      }}
      onTouchEnd={(e) => {
        e.target.style.backgroundColor = "black";
        document.body.style.overflow = "visible";
      }}
      onMouseUp={() => {
        document.body.style.overflow = "visible";
      }}
    >
    <Draggable />
    <Checkbox labelText={item.header} key={item.header} />
    </div>
  );
};
function ColConfig(props) {
  const [list, setList] = useState(props.header);

  const containerRef = useRef();
  const _onListChange = (newList) => {
    console.log(newList)
    setList(newList);
  };

  function Car(props) {
    return <Dropdown.Item >{props.brand}</Dropdown.Item>;
  }

    return (<>
        {/* deafult table with searching, sorting and pagination */}
    {/* <OverflowMenu >
     <Checkbox labelText={`Checkbox label`} id="checkbox-label-1" />
          <DraggableList  rowSize={5}>
          {list.map((cell) => (
            <div id={cell}>{cell}</div>

                ))}
            <div style={{ width: 300, height: 300, background: 'green' }}>1</div>
            <div style={{ width: 300, height: 300, background: 'blue' }}>2</div>
            <div style={{ width: 300, height: 300, background: 'red' }}>3</div> 
            <OverflowMenuItem itemText="Stop app" > hi</OverflowMenuItem>
      </OverflowMenu>*/}
      {/* <Dropdown autoClose="outside">
        <Dropdown.Toggle  id="dropdown-autoclose-outside">
        <Menu/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {list.map((car) => <Car key={car} brand={car} draggable = "true"/>)}
        </Dropdown.Menu>
      </Dropdown> */}
      <Dropdown autoClose="outside">
        <Dropdown.Toggle  id="dropdown-autoclose-outside">
        <Menu/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <DraggableList
          itemKey="header"
          template={Item}
          list={list}
          onMoveEnd={(newList) => _onListChange(newList)}
          container={() => containerRef.current}
        />        </Dropdown.Menu>
      </Dropdown>
      
    </>);

}
// [{key:'',header:'', sortState:''}, prev_index, new_index]
export default ColConfig;