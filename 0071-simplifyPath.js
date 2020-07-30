/**
 * 以 Unix 风格给出一个文件的绝对路径，简化它，即将其转换为规范路径。
 * 输入："/home//foo/"  输出："/home/foo"
 * 输入"/a/./b/../../c/"  输出："/c"
 * @param {string} path
 * @return {string}
 */

let simplifyPath = function(path) {
   let stark = [];
   const carry = path.split("/")
   for (let i of carry) {
       if (i === "" || i === ".") {
           continue;
       } else if (i === "..") {
           stark.pop();
       } else {
           stark.push(i);
       }
   } 
   return "/" + stark.join("/")
};

console.log(simplifyPath("/home/"))