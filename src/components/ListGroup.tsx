import { MouseEvent } from 'react';
function ListGroup() {
  let items = ['Los Angeles', 'Seoul', 'Tokyo', 'Cologne', 'Buenos Aires'];
  // items = [];
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No cities found.</p> : null;
  // };

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>Group List</h1>
  //       <p>No items found</p>
  //     </>
  //   );

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event.target);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No cities found.</p> : null} */}
      {items.length === 0 && <p>No cities found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
