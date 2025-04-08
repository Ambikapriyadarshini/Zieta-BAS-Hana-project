sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("crossappnavnew.controller.View1", {
        onInit() {
        },
        onNavigateToSO: function () {
            sap.ushell.Container.getServiceAsync("CrossApplicationNavigation").then(function (oCrossAppNav) {
                oCrossAppNav.toExternal({
                    target: {
                        semanticObject: "SalesOrder",
                        action: "manage"
                    },
                    params: {
                        SalesOrganization: ["1710"]
                    }
                });
            });
        }
        
    });
});