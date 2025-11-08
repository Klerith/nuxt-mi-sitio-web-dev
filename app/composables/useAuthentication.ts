export const useAuthentication = () => {
  const { loggedIn, session, user, clear, fetch } = useUserSession();

  const login = async (email: string, password: string) => {
    const { data, error } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: { email, password },
    });

    if (error.value) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad credentials',
        message: error.value?.data.message ?? 'Bad credentials',
      });
    }

    await fetch();
    navigateTo('/?message=Login successful');
    return data;
  };

  const register = async (email: string, name: string, password: string) => {
    const { data, error } = await useFetch('/api/auth/register', {
      method: 'POST',
      body: { email, password },
    });
  };

  const logout = async () => {
    await clear();
    navigateTo('/?message=Logout successful');
  };

  return {
    // Properties, Getters
    loggedIn,
    session,
    user,

    // Methods, Actions
    login,
    register,
    logout,
    clear,
    fetch,
  };
};
