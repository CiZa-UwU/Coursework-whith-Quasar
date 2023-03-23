const login = async ({ email, password }) => {
  window.Clerk.openSignIn();
};

const logout = async () => {
  await window.Clerk.signOut();
};


const userApi = {
  login,
  logout,
};

export default userApi;
