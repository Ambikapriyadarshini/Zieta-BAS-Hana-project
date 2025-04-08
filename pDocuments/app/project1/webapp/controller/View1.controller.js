
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v4/ODataModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
], (Controller, JSONModel, ODataModel, MessageToast, MessageBox) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
            var oModel = this.getOwnerComponent().getModel();
            console.log(oModel);
            // var oListBinding = oModel.bindList("/GPHeaders");

            // oListBinding.requestContexts().then(function (aContexts) {
            //     // Iterate through the contexts and get the data
            //     var aData = aContexts.map(function (oContext) {
            //         return oContext.getObject();  // Gets the JSON representation of the data
            //     });
            //     var oJsonModel = new JSONModel();
            //     oJsonModel.setData({ items: aData });
            //     that.getView().setModel(oJsonModel, "myJsonModel");

            // }).catch(function (oError) {
            //     console.error("Failed to load data:", oError);
            // });

            // var oModel = this.getOwnerComponent().getModel();


        },
        onComboSelectionChange: function () {
            var selkey = this.byId("idDocComboBox").getSelectedItem().getKey();
            if (selkey === "01") {
                this.getView().byId("idSelTableList").setVisible(true);


            } else {
                MessageBox.error("Please select the valid value");
            }
        },
        onSelectionChange: function (oEvent) {
            var that = this;
            var oModel = this.getOwnerComponent().getModel();
            // this.getOwnerComponent().setModel(oModel, "G");

            var selValue = this.byId("idTable").getSelectedItem().getBindingContext().getObject().RGP_DOC_NUM;
            this.byId("idKeyinc").setValue(selValue);

            var selItem = this.byId("idTable").getSelectedItem();
            this.sHeaderPath = this.byId("idTable").getSelectedItem().getBindingContext().getPath();

            if (selItem === null) {
                MessageBox.error("Please select row");
            }
            else {
                //read model data to set json
                oModel.bindContext("/GPHeaders('" + selValue + "')?$expand=toGPItems").requestObject().then(function (oData) {
                    console.log("Data retrieved:", oData);

                    // bind to json model if not odata
                    var oJsonModel = new JSONModel();
                    oJsonModel.setData(oData);
                    that.getView().setModel(oJsonModel, "myJsonModel");

                    //Binded directly with Odata v4 model

                    var oTable = that.byId("productEditTable");
                    // var sOrderPath = "/GPHeaders('" + selValue + "')";
                    oTable.bindItems({
                        path: that.sHeaderPath + "/toGPItems",
                        template: oTable.getBindingInfo("items").template
                    });

                }).catch(function (oError) {
                    console.error("Error retrieving data:", oError);
                });

                // setting selected data to Form

                var oContext = selItem.getBindingContext();
                this.byId("idform").setBindingContext(oContext);
                this.getView().byId("idPanelButtons").setVisible(true);
                this.getView().byId("idHeadeForm").setVisible(true);
                this.getView().byId("idItemTable").setVisible(true);
                this.getView().byId("idUpdateHeader").setVisible(true);
                this.getView().byId("idCancel").setVisible(true);
                //this.getView().byId("idUpdateItem").setVisible(true);
                this.getView().byId("idSelTableList").setVisible(false);
                
            }

        },
        onCreateNew: function () {
            var that = this;
            this.getView().byId("idHeadeForm").setVisible(true);
            this.getView().byId("idUpdateHeader").setVisible(false);
            this.getView().byId("idItemTable").setVisible(true);
            this.getView().byId("idSelTableList").setVisible(false);
            this.getView().byId("idCreateNew").setVisible(true);
            this.getView().byId("idPanelButtons").setVisible(true);
            //this.getView().byId("idUpdateItem").setVisible(false);
            this.getView().byId("TableCreate").setVisible(true);
            this.getView().byId("tableContainer").setVisible(false);
            this.getView().byId("idCancel").setVisible(true);


            var selItem = this.byId("idTable").getSelectedItem();
            var oBinding = this.byId("idTable").getBinding("items");
            if (oBinding) {
                // Fetch all data contexts
                oBinding.requestContexts(0, oBinding.getLength()).then(function (aContexts) {
                    // Process the data
                    that.aData = aContexts.map(function (oContext) {
                        return oContext.getObject(); // Get the raw object data
                    });

                    console.log("All rows data:", that.aData);
                    that.AddRowithkeyValue(that.aData);


                });
                // .catch(function (oError) {
                //     console.error("Error fetching all rows data:", oError);
                // });

            } else {
                console.warn("Table binding not found.");
            }

        },
        AddRowithkeyValue: function (odata) {
            if (odata) {
                var currentvalue = odata[odata.length - 1].RGP_DOC_NUM;
                var latestval = parseInt(currentvalue) + 1;
                this.byId("idKeyinc").setValue(latestval);
            }
            //1st column
            this.byId("rgpDocDateEdit").setValue("");
            this.byId("myComboBox").setValue("");
            this.byId("billtoPName").setValue("");
            this.byId("myComboBox2").setValue("");
            this.byId("shipToPartyNameEdit").setValue("");
            this.byId("addressEdit").setValue("");
            this.byId("stateCodeEdit").setValue("");
            this.byId("transporterEdit").setValue("");
            this.byId("transporterNameEdit").setValue("");
            this.byId("transporterNoteEdit").setValue("");
            this.byId("transporterEdit").setValue("");
            this.byId("transporterEdit").setValue("");
            //2ns column
            this.byId("noteOfNrgpEdit").setValue("");
            this.byId("remarksEdit").setValue("");
            this.byId("noContainsEdit").setValue("");
            this.byId("approxValueEdit").setValue("");
            this.byId("weightEdit").setValue("");
            this.byId("storeEdit").setValue("");
            this.byId("planReturnDateEdit").setValue("");
            this.byId("vehicleNoEdit").setValue("");
            this.byId("idReqBy").setValue("");

            //3rd column
            this.byId("recievedByEdit").setValue("");
            this.byId("departmentEdit").setValue("");
            this.byId("ewayBillNoEdit").setValue("");
            this.byId("lrNoEdit").setValue("");
            this.byId("lrDateEdit").setValue("");
            this.byId("contactNoEdit").setValue("");
            this.byId("modeOfTransEdit").setValue("");
            this.byId("placeOfSupplyEdit").setValue("");

            // var latestValue = this.getView().byId("idKeyinc").getValue();
            // var sHeaderPath = "/GPHeaders('" + latestValue + "')";

            // var oTable = this.byId("productEditTable");

            // // var sOrderPath = "/GPHeaders('" + selValue + "')";
            // oTable.bindItems({
            //     path: sHeaderPath + "/toGPItems",
            //     template: oTable.getBindingInfo("items").template
            // });
            // var oBinding = oTable.getBinding("items");
            // oBinding.refresh();

            var lItems = this.byId("ItemCreateTab").getItems();
            if (lItems) {
                for (var i = 0; i < lItems.length; i++) {
                    var index = lItems[i].getBindingContext("myJsonModel").getPath().split("/")[2];
                    this.getView().getModel("myJsonModel").getData().toGPItems.splice(index, 1);
                    this.getView().getModel("myJsonModel").refresh(true);
                }

               
            }
            this.CreateJsonRow(latestval);


        },
        onAddItemRow: function (keyValue) {
            var oTable = this.byId("productEditTable");
            var latestValue = this.getView().byId("idKeyinc").getValue();

            var oBinding = oTable.getBinding("items");


            oBinding.create({
                REFERENCE_TYPE: "",
                RGP_DOC_NUM: latestValue,
                DOC_DATE: "2021-06-27",
                ITEM_NO: "",
                MATERIAL_NO: "",
                MATERIAL_DESC: "",
                ITEM_TEXT: "",
                QUANTITY: "",
                PLANT: "",
                STORE_LOCATION: "",
                RATE: null,
                VALUE: null,
                UOM: "",
                TAXCODE: "",
                CGST: null,
                SGST: null,
                IGST: null,
                CESS: null
            }, true);

            oBinding.refresh();

        },
        CreateJsonRow: function () {
            var latestValue = this.getView().byId("idKeyinc").getValue();
            var arry = {
                toGPItems: []
            };
            var newRecord = {
                REFERENCE_TYPE: "",
                RGP_DOC_NUM: latestValue,
                DOC_DATE: "2021-06-27",
                ITEM_NO: "",
                MATERIAL_NO: "",
                MATERIAL_DESC: "",
                ITEM_TEXT: "",
                QUANTITY: "",
                PLANT: "",
                STORE_LOCATION: "",
                RATE: null,
                VALUE: null,
                UOM: "",
                TAXCODE: "",
                CGST: null,
                SGST: null,
                IGST: null,
                CESS: null
            };
            if (this.getView().getModel("myJsonModel") === undefined) {
                var oJsonModel = new JSONModel();
                oJsonModel.setData(arry);
                this.getView().setModel(oJsonModel, "myJsonModel");
                this.getView().getModel("myJsonModel").getData().toGPItems.push(newRecord);
                this.getView().getModel("myJsonModel").refresh(true);
                MessageToast.show("New row added")
            }
            else{
                this.getView().getModel("myJsonModel").getData().toGPItems.push(newRecord);
                this.getView().getModel("myJsonModel").refresh(true);
                MessageToast.show("New row added");
            }
        },
        onSaveDeep: function () {
            var that = this
            var headerData = {
                "RGP_DOC_NUM": this.getView().byId("idKeyinc").getValue(),
                "REFERENCE_TYPE": "01",
                "RGP_NRGP_DATE": "2021-06-27",
                "DOC_DATE": "2021-06-27",
                "BILL_TO_PARTY": "122",
                "BILL_TO_PARTY_NAME": "Lupin Limited",
                "SHIP_TO_PARTY": "5000",
                "SHIP_TO_PARTY_NAME": "Zim Laboratories Limited",
                "ADDRESS": "ameerpet",
                "STATE_CODE": "01",
                "GSTIN": "27AAAAP0267H2ZN",
                "TRANSPORTER_CODE": "1334",
                "TRANSPORTER_NAME": "Parryware Transports",
                "TRANSPORTER_NOTE": "Quick Delivery",
                "NOTE_NRGP": "OUCO",
                "REMARK": "Volatile",
                "CONTNR": "200",
                "APPRX_VALUE": "2000",
                "WEIGHT": "200",
                "STORE": "PM10",
                "PLANNED_RETURN_DATE": "2021-06-27",
                "VEHICLE_NO": "MH31FU0030",
                "REQUESTED_BY": this.getView().byId("idReqBy").getValue(),
                "RECEIVED_BY": "James",
                "DEPARTMENT": "Production",
                "EWAYBILL_NO": "AB123456",
                "LR_NO": "fbn123",
                "LR_DATE": "2021-06-27",
                "CONTACT_NO": "9975086538",
                "TRANSPORT_MODE": "Road",
                "PLACE_OF_SUPPLY": "Whitefield",

            }
            var oModel = this.getOwnerComponent().getModel();
            var selItem = this.byId("idTable").getSelectedItem();
            // var oContext = selItem.getBindingContext();

            var oTable = this.byId("idTable");
            // var itemData = this.byId("idform").getBindingContext().getObject();
            var oBindings = oTable.getBinding("items");
            //fetching form data ad header data
            // var headerData = this.byId("idform").getBindingContext().getObject();
            //fetching table as item data
            var oTable = this.byId("idTable");
            //var itemData = this.byId("idform").getBindingContext().getObject();
            var itemdata = this.byId("productEditTable").getModel("myJsonModel").getData().toGPItems;
            headerData.toGPItems = itemdata;

            for (var i = 0; i < headerData.toGPItems.length; i++) {
                headerData.toGPItems[i].RGP_DOC_NUM = headerData.RGP_DOC_NUM;
            }

            var oContext = oBindings.create(headerData);
            oModel.submitBatch("$auto").then(
                function (oContext) {
                    // Success callback
                    MessageBox.success("Record created successfully!");
                },
                function (oError) {
                    // Error callback
                    MessageBox.error("Error creating record: " + oError.message);
                    console.error("Details:", oError);
                });

            oContext.created().then(
                function () {
                MessageBox.success("Header with Item data Created");
            }, 
            function () {
                MessageBox.success("Oops Error / Entity already exists");
            });
        },
        onCancel: function () {
            this.getView().byId("idHeadeForm").setVisible(false);
            this.getView().byId("idItemTable").setVisible(false);
            this.getView().byId("idSelTableList").setVisible(true);
            this.getView().byId("idCreateNew").setVisible(false);
            this.getView().byId("idCancel").setVisible(false);
            this.getView().byId("idUpdateHeader").setVisible(false);
            this.getView().byId("tableContainer").setVisible(true);
            this.getView().byId("TableCreate").setVisible(false);

        },
        onSaveHeaderData: function () {
            var oModel = this.getOwnerComponent().getModel();
            var selItem = this.byId("idTable").getSelectedItem();
            var oContext = selItem.getBindingContext();

            var oTable = this.byId("idTable");
            var itemData = this.byId("idform").getBindingContext().getObject();
            var oBindings = oTable.getBinding("items");
            var oContext = oBindings.create(itemData);
            if (oModel.hasPendingChanges()) {
                oModel.submitBatch("$auto").then(function () {

                }, function () {

                });

                oContext.created().then(function () {
                    MessageBox.success("Doc Item data Created");
                }, function () {
                    MessageBox.success("Oops Error");
                });
            }
            else {
                MessageBox.success("Oops Error / Entity already exists");
            }
        },
        onSaveItemData: function () {
            var selItem = this.byId("idTable").getSelectedItem();

            if (selItem === null) {
                MessageBox.error("Please select row to add item");
            }
            else {
                var oModel = this.getOwnerComponent().getModel();
                var selItem = this.byId("idTable").getSelectedItem();
                var oContext = selItem.getBindingContext();

                var oTable = this.byId("idTable");
                //var itemData = this.byId("idform").getBindingContext().getObject();
                var itemdata = this.byId("productEditTable").getModel("myJsonModel").getData()

                var oBindings = oTable.getBinding("items");

                var oContext = oBindings.create(itemdata);
                oModel.submitBatch("$auto").then(function () {

                }, function () {

                });

                oContext.created().then(function () {
                    MessageBox.success("Document Created");
                }, function () {
                    MessageBox.success("Oops Error");
                });
            }
        },
        onUpdateHeaderdata: function () {
            var that = this;
            var oModel = this.getOwnerComponent().getModel();
            var itemData = this.byId("idform").getBindingContext().getObject();
            if (oModel.hasPendingChanges()) {

                var oContext = oModel.bindContext("/GPHeaders(" + itemData.RGP_DOC_NUM + ")", null,);
                oModel.submitBatch("$auto").then(function () {
                    MessageBox.success("Document Updated Successfully");
                    var that = this;
                    that.onCancel();
                }, function () {
                    MessageBox.error("Oops Error while updating");
                });
            }
            else {
                MessageBox.error("No new changes to update");
            }


        },
        updateItemdata: function () {
            var sPath = "/Products(1)";
            var oModel = this.getOwnerComponent().getModel();
            oModel.update(sPath, oPayload, {
                success: function () {
                    sap.m.MessageToast.show("Entity updated successfully!");
                },
                error: function (oError) {
                    console.error("Error updating entity:", oError);
                    sap.m.MessageBox.error("Failed to update the entity.");
                }
            });
        },

        onDeleteRow: function (oEvent) {
            var index = oEvent.getSource().getParent().getBindingContext("myJsonModel").getPath().split("/")[2];
            this.getView().getModel("myJsonModel").getData().toGPItems.splice(index, 1);
            this.getView().getModel("myJsonModel").refresh(true);
            MessageToast.show("Selected row deleted")
        },
        onDeleteOdataRow: function (oEvent) {
            var oTable = this.byId("productEditTable"); // Get the table
            var oButton = oEvent.getSource();

            // Get the context of the clicked row
            var oContext = oButton.getBindingContext();
            // Perform the delete operation
            oContext.delete().then(function () {
                sap.m.MessageToast.show("Row deleted successfully.");

            }).catch(function (oError) {
                sap.m.MessageBox.error("Failed to delete the row. " + oError.message);
            });
        },
        onchangeShtoP: function () {
            var oComboBox = this.byId("myComboBox2");
            var oSelectedItem = oComboBox.getSelectedItem();
            if (oSelectedItem) {
                var selectedArry = oSelectedItem.getKey().split(",");
                var name = selectedArry[0];
                var address = selectedArry[1];
                var code = selectedArry[2];

                this.getView().byId("shipToPartyNameEdit").setValue(name);
                this.getView().byId("addressEdit").setValue(address);
                this.getView().byId("stateCodeEdit").setValue(code);
            } else {
                console.log("No item selected.");
            }
        },
        onchangeBilltoP: function () {
            var selectedItem = this.byId("myComboBox").getSelectedItem();
            if (selectedItem) {
                var selectedKey = selectedItem.getKey();
                this.getView().byId("billtoPName").setValue(selectedKey);
            } else {
                console.log("No item selected.");
            }
        }



    });
});