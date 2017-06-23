exports.myDateTime = function () {
   var date = new Date();
   return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
};

exports.myName = function () {
   return "Arjan de Ruijter";
}