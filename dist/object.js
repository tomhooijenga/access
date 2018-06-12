"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var _access = _interopRequireDefault(require("./access"));

_access.default.register(Object, {
  get: function get(obj, key) {
    return obj[key];
  },
  set: function set(obj, key, value) {
    obj[key] = value;
    return obj;
  },
  has: function has(obj, key) {
    return obj[key] !== undefined;
  },
  delete: function _delete(obj, key) {
    return key in obj && delete obj[key];
  },
  clear: function clear(obj) {
    (0, _keys.default)(obj).forEach(function (key) {
      return delete obj[key];
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vYmplY3QuanMiXSwibmFtZXMiOlsiYWNjZXNzIiwicmVnaXN0ZXIiLCJPYmplY3QiLCJnZXQiLCJvYmoiLCJrZXkiLCJzZXQiLCJ2YWx1ZSIsImhhcyIsInVuZGVmaW5lZCIsImRlbGV0ZSIsImNsZWFyIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUFBLGdCQUFPQyxRQUFQLENBQWdCQyxNQUFoQixFQUF3QjtBQUNwQkMsS0FEb0IsZUFDaEJDLEdBRGdCLEVBQ1hDLEdBRFcsRUFDTjtBQUNWLFdBQU9ELElBQUlDLEdBQUosQ0FBUDtBQUNILEdBSG1CO0FBSXBCQyxLQUpvQixlQUloQkYsR0FKZ0IsRUFJWEMsR0FKVyxFQUlORSxLQUpNLEVBSUM7QUFDakJILFFBQUlDLEdBQUosSUFBV0UsS0FBWDtBQUVBLFdBQU9ILEdBQVA7QUFDSCxHQVJtQjtBQVNwQkksS0FUb0IsZUFTaEJKLEdBVGdCLEVBU1hDLEdBVFcsRUFTTjtBQUNWLFdBQU9ELElBQUlDLEdBQUosTUFBYUksU0FBcEI7QUFDSCxHQVhtQjtBQVlwQkMsUUFab0IsbUJBWWJOLEdBWmEsRUFZUkMsR0FaUSxFQVlIO0FBQ2IsV0FBT0EsT0FBT0QsR0FBUCxJQUFjLE9BQU9BLElBQUlDLEdBQUosQ0FBNUI7QUFDSCxHQWRtQjtBQWVwQk0sT0Fmb0IsaUJBZWRQLEdBZmMsRUFlVDtBQUNQLHVCQUNVQSxHQURWLEVBRUtRLE9BRkwsQ0FFYTtBQUFBLGFBQU8sT0FBT1IsSUFBSUMsR0FBSixDQUFkO0FBQUEsS0FGYjtBQUdIO0FBbkJtQixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhY2Nlc3MgZnJvbSBcIi4vYWNjZXNzXCI7XHJcblxyXG5hY2Nlc3MucmVnaXN0ZXIoT2JqZWN0LCB7XHJcbiAgICBnZXQob2JqLCBrZXkpIHtcclxuICAgICAgICByZXR1cm4gb2JqW2tleV07XHJcbiAgICB9LFxyXG4gICAgc2V0KG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9LFxyXG4gICAgaGFzKG9iaiwga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtrZXldICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKG9iaiwga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIGtleSBpbiBvYmogJiYgZGVsZXRlIG9ialtrZXldO1xyXG4gICAgfSxcclxuICAgIGNsZWFyKG9iaikge1xyXG4gICAgICAgIE9iamVjdFxyXG4gICAgICAgICAgICAua2V5cyhvYmopXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiBkZWxldGUgb2JqW2tleV0pO1xyXG4gICAgfVxyXG59KTsiXX0=