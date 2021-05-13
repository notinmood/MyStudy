// /// <reference path="./Validation.ts" />
// /// <reference path="./LettersOnlyValidator.ts" />
// /// <reference path="./ZipCodeValidator.ts" />
//
// // Some samples to try
// import {StringValidator,Validation} from "./Validation";
// import ZipCodeValidator = Validation.ZipCodeValidator;
// import LettersOnlyValidator = Validation.LettersOnlyValidator;
//
//
// let strings = ["Hello", "98052", "101"];
//
// // Validators to use
// let validators: { [s: string]: StringValidator; } = {};
// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();
// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }
//# sourceMappingURL=Client.js.map