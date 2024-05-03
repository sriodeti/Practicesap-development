sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel) {
        "use strict";

        return Controller.extend("pos.pos.controller.View1", {

            onInit: function () {
                var oModel = this.getOwnerComponent().getModel();
oModel.read("/Products", {
    success: function(oData) {
        this.getView().setModel(oData)
        console.log("Success");
    },
    error: function(oError) {
        console.error(oError);
    }
});
            },
           onpress : function(oEvent){
                var obut = oEvent.getSource();
                var oContext = obut.getBindingContext("prodmodel");
                var pname = oContext.getObject();

                var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Cart",{})
               
                  
                
            console.log(oData);
            
               
        }
        });
    });
