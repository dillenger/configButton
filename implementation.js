var { ExtensionCommon } = ChromeUtils.importESModule("resource://gre/modules/ExtensionCommon.sys.mjs");

var configButtonApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      configButtonApi: {
        async configButton() {
          let recentWindow = Services.wm.getMostRecentWindow("mail:3pane");
          if (recentWindow) {
            recentWindow.openContentTab("about:config");
          }
        },
      },
    };
  }
};
