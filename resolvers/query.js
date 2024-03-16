exports.Query = {
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;

    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredProducts = filteredProducts.filter((i) => {
          if (i.onSale) {
            return i;
          }
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((i) => {
          let totalRating = 0;
          let numberOfReviews = 0;

          db.reviews.forEach((r) => {
            if (r.productId === i.id) {
              totalRating += r.rating;
              numberOfReviews += 1;
            }
          });

          const productAvgRating = totalRating / numberOfReviews;

          if (productAvgRating >= avgRating) {
            return i;
          }
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, { id }, { db }) => {
    return db.products.find((i) => i.id === id);
  },
  categories: (parent, args, { db }) => {
    return db.categories;
  },
  category: (parent, { id }, { db }) => {
    return db.categories.find((i) => i.id === id);
  },
};
