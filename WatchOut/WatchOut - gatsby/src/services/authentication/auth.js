export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

// store user info to the local storage (in this way
// user data/info can survive browser reload events)
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  // hardcoded user John Doe
  if (username === `drago` && password === `miki`) {
    setUser({
      username: `Drago`,
      name: `Drago Barisic`,
      email: `db@fesb.hr`
    });

    return {
      error: false
    };
  }

  return {
    error: true,
    message: 'You have entered an invalid username or password'
  };
};

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};

export const handleLogout = callback => {
  setUser({});
  callback && callback();
};