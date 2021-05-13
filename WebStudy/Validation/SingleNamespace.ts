// namespace Validation {
//     export interface StringValidate {
//         isAcceptable(s: string): boolean;
//     }
//
//     const lettersRegexp = /^[A-Za-z]+$/;
//     const numberRegexp = /^[0-9]+$/;
//
//     export class LettersOnlyValidate implements StringValidate {
//         isAcceptable(s: string): boolean {
//             return lettersRegexp.test(s);
//         }
//     }
//
//     export class ZipValidate implements StringValidate {
//         isAcceptable(s: string): boolean {
//             return numberRegexp.test(s);
//         }
//     }
// }
//
// let strings = ["Hello", "98052", "101"];
//
// let validators: { [s:string]: Validation.StringValidate; } = {};
// validators["letters only"] = new Validation.LettersOnlyValidate();
// validators["zip code"] = new Validation.ZipValidate();
//
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`i like this ${s}`);
//         console.log(` "${s}"  - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }