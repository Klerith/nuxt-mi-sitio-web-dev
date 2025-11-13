export default defineEventHandler(async (event) => {
  // console.log('New request: ' + getRequestURL(event));

  if (!event.path.startsWith('/api/admin')) {
    return;
  }

  const session = await requireUserSession(event);
  // const session = await getUserSession(event);
  const hasAdminRole = session.user.roles.includes('admin');

  if (!hasAdminRole) {
    throw createError({
      statusCode: 401,
      message: `Unauthorized`,
    });
  }

  return;
});
