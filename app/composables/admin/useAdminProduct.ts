// Not auto imported
// https://nuxt.com/docs/4.x/guide/directory-structure/app/composables#how-files-are-scanned

export const useAdminProduct = async (id: string) => {
  const { data, error, status, execute, refresh, pending } = await useFetch(
    `/api/admin/product/${id}`
  );

  return {
    data,
    product: data,
    error,
    status,
    execute,
    refresh,
    pending,
  };
};
