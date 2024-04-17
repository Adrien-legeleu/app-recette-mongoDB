"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeModel = exports.RecipeStatusEnum = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var RecipeStatusEnum;
(function (RecipeStatusEnum) {
    RecipeStatusEnum["NOT_DONE"] = "not done";
    RecipeStatusEnum["DONE"] = "done";
})(RecipeStatusEnum || (exports.RecipeStatusEnum = RecipeStatusEnum = {}));
const RecipeSchema = new mongoose_1.default.Schema({
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: [RecipeStatusEnum.NOT_DONE, RecipeStatusEnum.DONE],
        default: RecipeStatusEnum.NOT_DONE,
        required: true,
    },
    userId: {
        type: String,
        ref: "users",
        required: true,
    },
}, {
    timestamps: true,
});
exports.RecipeModel = mongoose_1.default.model("recipe", RecipeSchema);
