//const REACT_APP_API_URL = "https://bp-pokemons.herokuapp.com/";
const REACT_APP_API_URL =
  "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon/";

export function getAll() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(REACT_APP_API_URL + "?idAuthor=1");
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.log("get all", error);
      reject(error);
    }
  });
}

export function create(pokemon) {
  return new Promise(async (resolve, reject) => {
    try {
      // post request
      const response = await fetch(REACT_APP_API_URL + "?idAuthor=1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemon),
      });
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

export function getOne(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(REACT_APP_API_URL + id);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

export function update(pokemon) {
  return new Promise(async (resolve, reject) => {
    try {
      //console.log("update", pokemon);
      const response = await fetch(REACT_APP_API_URL + pokemon.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemon),
      });
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

export function deleteOne(id) {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(REACT_APP_API_URL + id, {
        method: "DELETE",
      });

      //const data = await response.json();
      resolve(true);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
