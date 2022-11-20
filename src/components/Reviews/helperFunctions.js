const checkMediaExists = async (mediaId) => {
  const existInFavoritesResponse = await axios.head(
    `${BACKEND_URL}/${category}/exists/${mediaId}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
};
