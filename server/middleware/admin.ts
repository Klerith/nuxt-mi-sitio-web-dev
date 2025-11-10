export default defineEventHandler(async (event) => {
  // console.log('New request: ' + getRequestURL(event));
  console.log('checking admin middleware');

  if (!event.path.startsWith('/api/admin')) {
    return;
  }

  const session = await requireUserSession(event);

  const hasAdminRole = session.user.roles?.includes('admin');

  if (!hasAdminRole) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
      message: 'Admin role required',
    });
  }

  return;
});
