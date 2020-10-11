import React, { useState, useEffect } from "react";

function Item() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState();
  const fetchItem = async () => {};

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default Item;
