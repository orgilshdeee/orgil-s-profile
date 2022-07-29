const description = async (credentials) => {
  return await fetch("http://35.164.143.162:3001/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const name = async (credentials) => {
  return await fetch("http://35.164.143.162:3001/name", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const age = async (credentials) => {
  return await fetch("http://35.164.143.162:3001/age", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const major = async (credentials) => {
  return await fetch("http://35.164.143.162:3001/major", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const profile = async (credentials) => {
  return await fetch("http://35.164.143.162:3001/profile", {
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
