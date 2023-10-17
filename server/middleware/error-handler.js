"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_api_1 = require("../error/custom-api");
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof custom_api_1.CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res
        .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "INTERNAL SERVER ERROR" });
};
exports.default = errorHandlerMiddleware;
