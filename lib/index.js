"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convert(blob, type) {
    var method = type === 'arrayBuffer' || type === 'buffer' ? 'readAsArrayBuffer' :
        type === 'binary' || type === 'binaryString' ? 'readAsBinaryString' :
            type === 'dataURL' || type === 'base64' ? 'readAsDataURL' :
                'readAsText';
    return new Promise(function (resolve, reject) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            resolve(e.target.result);
        };
        fileReader.onerror = function (e) {
            reject(e.target.error);
        };
        fileReader[method](blob);
    });
}
exports.convert = convert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxpQkFBOEMsSUFBVSxFQUFFLElBQU87SUFDL0QsSUFBTSxNQUFNLEdBQ1YsSUFBSSxLQUFLLGFBQWEsSUFBSSxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNyRSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMzRCxZQUFZLENBQUE7SUFDZCxPQUFPLElBQUksT0FBTyxDQUFzQixVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3RELElBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7UUFDbkMsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFDLENBQU07WUFDekIsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFBO1FBQ0QsVUFBVSxDQUFDLE9BQU8sR0FBRyxVQUFDLENBQU07WUFDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEIsQ0FBQyxDQUFBO1FBQ0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQWhCRCwwQkFnQkMifQ==