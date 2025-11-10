export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('to', to);
  // console.log('from', from);

  const { isLoggedIn, isAdmin } = useAuthentication();
  if (!isLoggedIn.value) {
    return navigateTo('/login');
  }

  if (to.path.startsWith('/dashboard') && !isAdmin.value) {
    return navigateTo('/');
  }

  return;
});
