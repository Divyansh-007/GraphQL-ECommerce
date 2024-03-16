exports.Category = {
  products: ({ id }, args, { db }) => {
    return db.products.filter((i) => {
      if (i.categoryId === id) {
        return i;
      }
    });
  },
};
