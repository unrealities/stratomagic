// Return a positive integer less than or equal to the max value passed.
export function RandomPositiveInteger(max) {
    let randomDecimal = Math.random() * max;
    return Math.floor(randomDecimal) + 1;
}

// Generate cartesian product of given iterables
// Blatantly stolen from Stack Overflow: 
// https://stackoverflow.com/a/44012184
var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(cartesian);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Generate cartesian product of given iterables:
export function cartesian(head) {
  var _len,
      tail,
      _key,
      remainder,
      _iteratorNormalCompletion,
      _didIteratorError,
      _iteratorError,
      _iterator,
      _step,
      r,
      _iteratorNormalCompletion2,
      _didIteratorError2,
      _iteratorError2,
      _iterator2,
      _step2,
      h,
      _args = arguments;

  return regeneratorRuntime.wrap(function cartesian$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          for (_len = _args.length, tail = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            tail[_key - 1] = _args[_key];
          }

          remainder = tail.length > 0 ? cartesian.apply(void 0, tail) : [[]];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 5;
          _iterator = remainder[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 38;
            break;
          }

          r = _step.value;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 12;
          _iterator2 = head[Symbol.iterator]();

        case 14:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context.next = 21;
            break;
          }

          h = _step2.value;
          _context.next = 18;
          return [h].concat(_toConsumableArray(r));

        case 18:
          _iteratorNormalCompletion2 = true;
          _context.next = 14;
          break;

        case 21:
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](12);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t0;

        case 27:
          _context.prev = 27;
          _context.prev = 28;

          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }

        case 30:
          _context.prev = 30;

          if (!_didIteratorError2) {
            _context.next = 33;
            break;
          }

          throw _iteratorError2;

        case 33:
          return _context.finish(30);

        case 34:
          return _context.finish(27);

        case 35:
          _iteratorNormalCompletion = true;
          _context.next = 7;
          break;

        case 38:
          _context.next = 44;
          break;

        case 40:
          _context.prev = 40;
          _context.t1 = _context["catch"](5);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 44:
          _context.prev = 44;
          _context.prev = 45;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 47:
          _context.prev = 47;

          if (!_didIteratorError) {
            _context.next = 50;
            break;
          }

          throw _iteratorError;

        case 50:
          return _context.finish(47);

        case 51:
          return _context.finish(44);

        case 52:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[5, 40, 44, 52], [12, 23, 27, 35], [28,, 30, 34], [45,, 47, 51]]);
}
