const get = async () => {};

const register = async ({ email, password, user_name }) => {};

const login = async ({ email, password }) => {
  window.Clerk.openSignIn();
};


const logout = async () => {
  await window.Clerk.signOut();
};


// const update = async (data) => {};


const userApi = {
  get,
  register,
  login,
  logout,
};

export default userApi;
