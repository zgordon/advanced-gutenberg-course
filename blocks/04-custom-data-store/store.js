const { data, apiFetch } = wp;
const { registerStore } = data;

const DEFAULT_STATE = {
  setting: ""
};

const actions = {
  setSetting(setting) {
    return {
      type: "SET_SETTING",
      setting
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
      case "SET_SETTING":
        return {
          ...state,
          setting: action.setting
        };
    }

    return state;
  },

  actions,

  selectors: {
    getSetting(state) {
      const { setting } = state;
      return setting;
    }
  },

  controls: {
    FETCH_FROM_API(action) {
      return apiFetch({ path: action.path });
    }
  },

  resolvers: {
    *getSetting() {
      const path = "/jsforwpadvgb/v1/block-setting";
      const setting = yield actions.fetchFromAPI(path);
      return actions.setSetting(setting);
    }
  }
});
