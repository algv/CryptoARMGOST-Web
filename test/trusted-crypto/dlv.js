"use strict";

var assert = require("assert");
var trusted = require("../index.js");

describe("DLV", function () {
    var module;

    module = new trusted.utils.Dlv();

    describe("licenseValidateFormat", function () {
        var license_correct = "CASWW-WPVVJ-DCRGT-QJFHV-AMQMX-XTAAP-VHDCX";
        var format_1 = module.licenseValidateFormat(license_correct);
        it("License" + " -> " + license_correct, function () {
            assert.equal(format_1, true, "Error in verify format of correct license");
        });
        var license_incorrect = "CASLK-GVAP83P-GGJMJ-KGCFQ-PDDWJ-XRKJDGA-JQPWT";
        var format_2 = module.licenseValidateFormat(license_incorrect);
        it("License" + " -> " + license_incorrect, function () {
            assert.equal(format_2, false, "Error in verify format of incorect license");
        });
    });
    describe("checkLicense", function () {
        var license_correct = "CASWW-WPVVJ-DCRGT-QJFHV-AMQMX-XTAAP-VHDCX";
        var result_check = module.checkLicense(license_correct);
        var licenseObj = JSON.parse(result_check);
        it("License" + " -> " + license_correct + "\n        JSON -> " + result_check, function () {
            assert.equal(licenseObj.verify, true, "Error in verify format license");
        });
    });

});
