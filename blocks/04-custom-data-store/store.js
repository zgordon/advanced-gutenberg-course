const { data, apiFetch } = wp;
const { registerStore } = data;

const DEFAULT_STATE = {
  setting: "START"
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
  },

  saveToAPI(path, setting) {
    return {
      type: "SAVE_TO_API",
      path,
      setting
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
    },

    SAVE_TO_API(action) {
      return apiFetch({
        path: action.path,
        method: "post",
        body: JSON.stringify(action.setting)
      });
    }
  },

  resolvers: {
    *getSetting() {
      const path = "/jsforwpadvgb/v1/block-setting";
      const setting = yield actions.fetchFromAPI(path);
      return actions.getSetting(setting);
    },
    *setSetting() {
      const path = "/jsforwpadvgb/v1/block-setting";
      // ??????
      // How do I get access to the settings here
      const newSetting = yield actions.saveToAPI(path, setting);
      // ??????
      return actions.setSetting(path, newSetting);
    }
  }
});
