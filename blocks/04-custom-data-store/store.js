const { data, apiFetch } = wp;
const { registerStore, select: selectData } = data;

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
  },

  select(reducer, selector, ...args) {
    return {
      type: "SELECT",
      reducer,
      selector,
      args
    };
  },

  *persistSetting() {
    const existingSetting = yield actions.select("my-shop", "getSetting");
    const path = "/jsforwpadvgb/v1/block-setting";
    const newSetting = yield actions.saveToAPI(path, existingSetting);
    return actions.setSetting(newSetting);
  }
};

registerStore("my-shop", {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case "SET_SETTING":
        // you should only return new state here if the existing setting does
        // not match the new setting.
        // console.log(action.setting, state.setting);
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
    },

    SELECT(action) {
      return selectData(action.reducer)[action.selectorName](...action.args);
    }
  },

  resolvers: {
    *getSetting() {
      const path = "/jsforwpadvgb/v1/block-setting";
      const setting = yield actions.fetchFromAPI(path);
      return actions.select(setting);
    }
  }
});
