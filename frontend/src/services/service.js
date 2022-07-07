const description = async (credentials) => {
  return await fetch("http://localhost:3000/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const name = async (credentials) => {
  return await fetch("http://localhost:3000/name", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const age = async (credentials) => {
  return await fetch("http://localhost:3000/age", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const major = async (credentials) => {
  return await fetch("http://localhost:3000/major", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const profile = async (credentials) => {
  return await fetch("http://localhost:3000/profile", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const profileServices = {
  description,
  name,
  age,
  major,
  profile,
};
