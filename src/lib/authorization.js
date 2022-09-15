const auth = () => {
    const user = JSON.parse(localStorage.getItem("portfolio_token"));
    if (user && user.isLogged) {
      // console.log(user.isLogged);
      return user.isLogged;
    }
    return false;
  };
  
  export default auth;