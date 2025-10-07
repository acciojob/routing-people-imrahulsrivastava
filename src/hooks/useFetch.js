import React, { useEffect, useState } from "react";

function useFetch(id) {
  const [data, setData] = useState();

  useEffect(() => {
    function getData() {
      let url = "https://jsonplaceholder.typicode.com/users";
      if (id) url += `/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setData(null));
    }
    getData();
  }, [id]);

  return data;
}

export default useFetch;
