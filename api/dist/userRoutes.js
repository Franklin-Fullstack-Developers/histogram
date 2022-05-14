"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_client_1 = require("./mysql-client");
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    mysql_client_1.db === null || mysql_client_1.db === void 0 ? void 0 : mysql_client_1.db.query('SELECT * FROM Users');
});
router.post('/', function (req, res) {
    mysql_client_1.db === null || mysql_client_1.db === void 0 ? void 0 : mysql_client_1.db.query('INSERT INTO Users SET ?', req.body);
});
exports.default = router;
