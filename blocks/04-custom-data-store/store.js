const { data, apiFetch } = wp;
const { registerStore } = data;

const DEFAULT_STATE = {
  prices: {},
  discountPercent: 0
};

const actions = {
  setPrice(item, price) {
    return {
      type: "SET_PRICE",
      item,
      price
    };
  },

  startSale(discountPercent) {
    return {
      type: "START_SALE",
      discountPercent
    };
  },

  fetchFromAPI(path) {
    return {
      type: "FETCH_FROM_API",
      path
    };
  }
};

registerStore("my-shop", {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case "SET_PRICE":
        return {
          ...state,
          prices: {
            ...state.prices,
            [action.item]: action.price
          }
        };

      case "START_SALE":
        return {
          ...state,
          discountPercent: action.discountPercent
        };
    }

    return state;
  },

  actions,

  selectors: {
    getPrice(state, item) {
      const { prices, discountPercent } = state;
      const price = prices[item];

      return price * (1 - 0.01 * discountPercent);
    }
  },

  controls: {
    FETCH_FROM_API(action) {
      return apiFetch({ path: action.path });
    }
  },

  resolvers: {
    *getPrice(item) {
      const path = "/wp/v2/prices/" + item;
      const price = yield actions.fetchFromAPI(path);
      return actions.setPrice(item, price);
    }
  }
});
