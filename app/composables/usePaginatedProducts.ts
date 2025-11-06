export const usePaginatedProducts = async () => {
  const route = useRoute();

  const page = computed(() => {
    const pageParam = route.query.page as string;
    return isNaN(+pageParam) ? 1 : +pageParam;
  });

  const limit = computed(() => {
    const limitParam = route.query.limit as string;
    return isNaN(+limitParam) ? 10 : +limitParam;
  });

  const offset = computed(() => {
    return (page.value - 1) * limit.value;
  });

  const { data, error, status, execute, refresh, pending } = await useFetch(
    '/api/products',
    {
      query: {
        limit,
        offset,
      },
      // https://nuxt.com/docs/4.x/getting-started/data-fetching#watch
      watch: [page, limit],
    }
  );

  if (error.value) {
    throw createError({
      statusCode: status.value === 'error' ? 500 : 400,
      statusMessage: error.value?.message ?? 'Error al obtener los productos',
    });
  }

  // watch(data, () => {
  //   console.log('data', data.value);
  // });

  return {
    data,

    // Getters
    products: computed(() => data.value?.products || []),
    totalPages: computed(() => data.value?.totalPages || 0),
    currentPage: computed(() => data.value?.currentPage || 1),
    perPage: computed(() => data.value?.perPage || 10),
    total: computed(() => data.value?.total || 0),

    // Actions
    execute,
    refresh,
    pending,
    error,
  };
};
