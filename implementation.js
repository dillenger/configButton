var ExtensionCommon = globalThis.ExtensionCommon || ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm");

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
