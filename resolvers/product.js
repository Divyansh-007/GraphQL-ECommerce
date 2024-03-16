exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    return db.categories.find((i) => i.id === categoryId);
  },
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((i) => {
      if (i.productId === id) {
        return i;
      }
    });
  },
};
