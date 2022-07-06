const main = async (credentials) => {
  return await fetch("http://localhost:3000/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(credentials),
  });
};

const name = async (credentials) => {
  return await fetch("http://localhost:3000/name", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

export const profileServices = {
  main,
  name,
};
// const age
// const major
// const profile
// const description
