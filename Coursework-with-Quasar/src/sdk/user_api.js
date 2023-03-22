const login = async ({ email, password }) => {
  window.Clerk.openSignIn();
};

const logout = async () => {
  await window.Clerk.signOut();
  window.location.reload()
};


const userApi = {
  login,
  logout,
};

export default userApi;
