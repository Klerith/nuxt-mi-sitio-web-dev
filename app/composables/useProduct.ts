export const useProduct = async (slug: string) => {
  const { data, error, status, execute, refresh, pending } = await useFetch(
    `/api/product/${slug}`,
    {
      server: false,
    }
  );

  // console.log('Suggestions fetching');

  return {
    data,
    // product: computed(() => data.value?.product || null),
    product: data,
    error,
    status,
    execute,
    refresh,
    pending,
  };
};
