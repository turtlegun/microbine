let firstname;
let email;
let password;
let dob;
let lastname;
let username;

const setdata = (f, e, p, d, l, u) => {
  firstname = f;
  email = e;
  password = p;
  dob = d;
  lastname = l;
  username = u;


  const userData = {
    firstname,
    email,
    password,
    dob,
    lastname,
    username
  };


  sessionStorage.setItem("userData", JSON.stringify(userData));
};

const getdata = () => {

  const storedData = sessionStorage.getItem("userData");
  
  if (storedData) {
    return JSON.parse(storedData); 
  }
  
  return {}; 
};

export { setdata, getdata };
