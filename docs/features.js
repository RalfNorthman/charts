(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $author$project$Section$Interactivity$init = {hovering: _List_Nil};
var $author$project$Features$init = {exploration: $elm$core$Dict$empty, hoveringBars: _List_Nil, hoveringBinnedBars: _List_Nil, hoveringScatter: _List_Nil, hoveringStackedBars: _List_Nil, interactivity: $author$project$Section$Interactivity$init, rangeMax: 1640908800000, rangeMin: 1262217600000, salaryHovering: _List_Nil, salarySelection: $elm$core$Maybe$Nothing, salaryWindow: $elm$core$Maybe$Nothing, salaryYear: 2019, select: $elm$core$Maybe$Nothing};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$sandbox = function (impl) {
	return _Browser_element(
		{
			init: function (_v0) {
				return _Utils_Tuple2(impl.init, $elm$core$Platform$Cmd$none);
			},
			subscriptions: function (_v1) {
				return $elm$core$Platform$Sub$none;
			},
			update: F2(
				function (msg, model) {
					return _Utils_Tuple2(
						A2(impl.update, msg, model),
						$elm$core$Platform$Cmd$none);
				}),
			view: impl.view
		});
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $author$project$Section$Interactivity$update = F2(
	function (msg, model) {
		var products = msg.a;
		return _Utils_update(
			model,
			{hovering: products});
	});
var $author$project$Features$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'OnExploration':
				var title = msg.a;
				var selected = msg.b;
				return _Utils_update(
					model,
					{
						exploration: A3($elm$core$Dict$insert, title, selected, model.exploration)
					});
			case 'OnInteractivity':
				var subMsg = msg.a;
				return _Utils_update(
					model,
					{
						interactivity: A2($author$project$Section$Interactivity$update, subMsg, model.interactivity)
					});
			case 'OnMouseDown':
				var coords = msg.a;
				return _Utils_update(
					model,
					{
						select: $elm$core$Maybe$Just(
							{a: coords.x, b: coords.x})
					});
			case 'OnMouseMove':
				var coords = msg.a;
				var _v1 = model.select;
				if (_v1.$ === 'Nothing') {
					return model;
				} else {
					var select = _v1.a;
					return _Utils_update(
						model,
						{
							select: $elm$core$Maybe$Just(
								_Utils_update(
									select,
									{b: coords.x}))
						});
				}
			case 'OnMouseUp':
				var coords = msg.a;
				var _v2 = model.select;
				if (_v2.$ === 'Nothing') {
					return model;
				} else {
					var select = _v2.a;
					return _Utils_update(
						model,
						{
							rangeMax: A2($elm$core$Basics$max, select.a, coords.x),
							rangeMin: A2($elm$core$Basics$min, select.a, coords.x),
							select: $elm$core$Maybe$Nothing
						});
				}
			case 'OnReset':
				return $author$project$Features$init;
			case 'OnHoverScatter':
				var hovering = msg.a;
				return _Utils_update(
					model,
					{hoveringScatter: hovering});
			case 'OnHoverBars':
				var hovering = msg.a;
				return _Utils_update(
					model,
					{hoveringBars: hovering});
			case 'OnHoverStackedBars':
				var hovering = msg.a;
				return _Utils_update(
					model,
					{hoveringStackedBars: hovering});
			case 'OnHoverBinnedBars':
				var hovering = msg.a;
				return _Utils_update(
					model,
					{hoveringBinnedBars: hovering});
			case 'OnHoverSalary':
				var hovering = msg.a;
				var coords = msg.b;
				var _v3 = model.salarySelection;
				if (_v3.$ === 'Nothing') {
					return _Utils_update(
						model,
						{salaryHovering: hovering});
				} else {
					var select = _v3.a;
					return _Utils_update(
						model,
						{
							salaryHovering: _List_Nil,
							salarySelection: $elm$core$Maybe$Just(
								_Utils_update(
									select,
									{b: coords}))
						});
				}
			case 'OnMouseDownSalary':
				var coords = msg.a;
				return _Utils_update(
					model,
					{
						salarySelection: $elm$core$Maybe$Just(
							{a: coords, b: coords})
					});
			case 'OnMouseUpSalary':
				var coords = msg.a;
				var _v4 = model.salarySelection;
				if (_v4.$ === 'Nothing') {
					return model;
				} else {
					var select = _v4.a;
					return _Utils_eq(select.a, coords) ? _Utils_update(
						model,
						{salarySelection: $elm$core$Maybe$Nothing, salaryWindow: $elm$core$Maybe$Nothing}) : _Utils_update(
						model,
						{
							salarySelection: $elm$core$Maybe$Nothing,
							salaryWindow: $elm$core$Maybe$Just(
								{
									x1: A2($elm$core$Basics$min, select.a.x, coords.x),
									x2: A2($elm$core$Basics$max, select.a.x, coords.x),
									y1: A2($elm$core$Basics$min, select.a.y, coords.y),
									y2: A2($elm$core$Basics$max, select.a.y, coords.y)
								})
						});
				}
			case 'OnResetSalary':
				return _Utils_update(
					model,
					{salaryHovering: _List_Nil});
			case 'OnResetSalaryWindow':
				return _Utils_update(
					model,
					{salaryWindow: $elm$core$Maybe$Nothing});
			default:
				var year = msg.a;
				return _Utils_update(
					model,
					{salaryYear: year});
		}
	});
var $author$project$Features$OnExploration = F2(
	function (a, b) {
		return {$: 'OnExploration', a: a, b: b};
	});
var $author$project$Features$OnInteractivity = function (a) {
	return {$: 'OnInteractivity', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$Right);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Element$alignTop = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$Top);
var $mdgriffith$elm_ui$Internal$Model$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$CenterX);
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
var $mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputLabel: 'lbl', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.column);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.grid);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.page);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.row);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.row) + ('-' + ($elm$core$String$fromInt(pos.col) + ('-' + ($elm$core$String$fromInt(pos.width) + ('-' + $elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.blur) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 'AllChildren', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[$mdgriffith$elm_ui$Internal$Style$Top, $mdgriffith$elm_ui$Internal$Style$Bottom, $mdgriffith$elm_ui$Internal$Style$Right, $mdgriffith$elm_ui$Internal$Style$Left, $mdgriffith$elm_ui$Internal$Style$CenterX, $mdgriffith$elm_ui$Internal$Style$CenterY]);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(
					$mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = $mdgriffith$elm_ui$Internal$Style$Above;
	var _v0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[$mdgriffith$elm_ui$Internal$Style$Above, $mdgriffith$elm_ui$Internal$Style$Below, $mdgriffith$elm_ui$Internal$Style$OnRight, $mdgriffith$elm_ui$Internal$Style$OnLeft, $mdgriffith$elm_ui$Internal$Style$Within, $mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'AllChildren':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.props;
		if (!_v2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0.a;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.others)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.mode;
	switch (_v0.$) {
		case 'Layout':
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _v2 = options.hover;
					switch (_v2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.any;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 'Nothing') {
										if (_v2.b.$ === 'Nothing') {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 'Nothing') {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 'Nothing') {
										if (_v7.b.$ === 'Nothing') {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 'Nothing') {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.row) + (' / ' + ($elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.col) + (' / ' + ($elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.row) + ('-' + ($elm$core$String$fromInt(position.col) + ('-' + ($elm$core$String$fromInt(position.width) + ('-' + $elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((_v12.a.$ === 'Just') && (_v12.b.$ === 'Just')) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.descender,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.baseline,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.capital,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _v2 = _with.adjustment;
						if (_v2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _v0.topLevel;
		var rules = _v0.rules;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.mode;
		switch (_v0.$) {
			case 'Layout':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$core$Basics$not = _Basics_not;
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$core$Bitwise$and = _Bitwise_and;
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return $elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $elm$core$Basics$ge = _Utils_ge;
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 'Nothing') {
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _v1.a;
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var $mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: $elm$core$Maybe$Nothing,
	borderColor: $elm$core$Maybe$Nothing,
	shadow: $elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _v4 = record.hover;
					if (_v4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _v5 = record.focus;
					if (_v5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.mode;
					if (_v6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _v0 = record.focus;
				if (_v0.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _v1 = record.hover;
				if (_v1.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _v2 = record.mode;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{focus: $elm$core$Maybe$Nothing, hover: $elm$core$Maybe$Nothing, mode: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.mode;
			if (_v0.$ === 'NoStaticStyleSheet') {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.options;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.root, $mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{options: _List_Nil});
var $mdgriffith$elm_ui$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 'Max', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$maximum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Max, i, l);
	});
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Font$sansSerif = $mdgriffith$elm_ui$Internal$Model$SansSerif;
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Element$spaceEvenly = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$spacing, $mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly);
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$Internal$Property$Property = function (a) {
	return {$: 'Property', a: a};
};
var $author$project$Internal$Property$property = F4(
	function (value, meta, inter, attrs) {
		return $author$project$Internal$Property$Property(
			{
				attrs: attrs,
				extra: $elm$core$Basics$always(_List_Nil),
				inter: inter,
				meta: meta,
				value: value,
				visual: value
			});
	});
var $author$project$Chart$bar = F2(
	function (y_, name_) {
		return A3($author$project$Internal$Property$property, y_, name_, _List_Nil);
	});
var $author$project$Chart$Item$BarConfig = function (a) {
	return {$: 'BarConfig', a: a};
};
var $author$project$Chart$BarsElement = F4(
	function (a, b, c, d) {
		return {$: 'BarsElement', a: a, b: b, c: c, d: d};
	});
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $author$project$Chart$Item$getLimits = function (_v0) {
	var config = _v0.a;
	return config.limits(config.details);
};
var $author$project$Chart$Item$getProducts = function (_v0) {
	var item = _v0.a;
	return item.details.items;
};
var $author$project$Chart$Item$getX1 = F2(
	function (plane, _v0) {
		var config = _v0.a;
		var pos = A2(config.position, plane, config.details);
		return pos.x1;
	});
var $author$project$Chart$Item$getX2 = F2(
	function (plane, _v0) {
		var config = _v0.a;
		var pos = A2(config.position, plane, config.details);
		return pos.x2;
	});
var $author$project$Chart$Item$Item = function (a) {
	return {$: 'Item', a: a};
};
var $author$project$Chart$Item$render = F2(
	function (plane, _v0) {
		var config = _v0.a;
		return A3(
			config.render,
			plane,
			config.details,
			A2(config.position, plane, config.details));
	});
var $author$project$Chart$Item$groupBy = F2(
	function (_v0, products_) {
		var grouping = _v0.a.grouping;
		var toPosition = _v0.a.toPosition;
		var toLimits = _v0.a.toLimits;
		var toGroup = function (_v2) {
			var config = _v2.a;
			var items = _v2.b;
			return $author$project$Chart$Item$Item(
				{
					details: {config: config, items: items},
					limits: function (c) {
						return A2(toLimits, c.config, c.items);
					},
					position: F2(
						function (plane, c) {
							return A3(toPosition, plane, c.config, c.items);
						}),
					render: F3(
						function (plane, c, _v1) {
							return A2(
								$elm$svg$Svg$g,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$class('elm-charts__collection')
									]),
								A2(
									$elm$core$List$map,
									$author$project$Chart$Item$render(plane),
									c.items));
						})
				});
		};
		return A2(
			$elm$core$List$map,
			toGroup,
			grouping(products_));
	});
var $author$project$Chart$Item$Grouping = function (a) {
	return {$: 'Grouping', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $author$project$Chart$Item$gatherWith = F2(
	function (testFn, list) {
		var helper = F2(
			function (scattered, gathered) {
				if (!scattered.b) {
					return $elm$core$List$reverse(gathered);
				} else {
					var toGather = scattered.a;
					var population = scattered.b;
					var _v1 = A2(
						$elm$core$List$partition,
						testFn(toGather),
						population);
					var gathering = _v1.a;
					var remaining = _v1.b;
					return A2(
						helper,
						remaining,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(toGather, gathering),
							gathered));
				}
			});
		return A2(helper, list, _List_Nil);
	});
var $author$project$Chart$Item$collector = function (config) {
	return $author$project$Chart$Item$Grouping(
		{
			grouping: A2(
				$elm$core$Basics$composeR,
				$elm$core$List$map(
					function (i) {
						return _Utils_Tuple2(
							config.commonality(i),
							i);
					}),
				A2(
					$elm$core$Basics$composeR,
					$author$project$Chart$Item$gatherWith(
						F2(
							function (_v0, _v1) {
								var a = _v0.a;
								var b = _v1.a;
								return A2(config.grouping, a, b);
							})),
					$elm$core$List$map(
						function (_v2) {
							var _v3 = _v2.a;
							var inter = _v3.a;
							var first = _v3.b;
							var rest = _v2.b;
							return _Utils_Tuple2(
								inter,
								A2(
									$elm$core$List$cons,
									first,
									A2($elm$core$List$map, $elm$core$Tuple$second, rest)));
						}))),
			toLimits: config.limits,
			toPosition: config.position
		});
};
var $author$project$Svg$Coordinates$Position = F4(
	function (x1, x2, y1, y2) {
		return {x1: x1, x2: x2, y1: y1, y2: y2};
	});
var $author$project$Svg$Coordinates$foldPosition = F2(
	function (func, data) {
		var fold = F2(
			function (datum, posM) {
				if (posM.$ === 'Just') {
					var pos = posM.a;
					return $elm$core$Maybe$Just(
						{
							x1: A2(
								$elm$core$Basics$min,
								func(datum).x1,
								pos.x1),
							x2: A2(
								$elm$core$Basics$max,
								func(datum).x2,
								pos.x2),
							y1: A2(
								$elm$core$Basics$min,
								func(datum).y1,
								pos.y1),
							y2: A2(
								$elm$core$Basics$max,
								func(datum).y2,
								pos.y2)
						});
				} else {
					return $elm$core$Maybe$Just(
						func(datum));
				}
			});
		return A2(
			$elm$core$Maybe$withDefault,
			A4($author$project$Svg$Coordinates$Position, 0, 0, 0, 0),
			A3($elm$core$List$foldl, fold, $elm$core$Maybe$Nothing, data));
	});
var $author$project$Chart$Item$getPosition = F2(
	function (plane, _v0) {
		var config = _v0.a;
		return A2(config.position, plane, config.details);
	});
var $author$project$Chart$Item$isSameBin = $author$project$Chart$Item$collector(
	{
		commonality: function (_v0) {
			var details = _v0.a.details;
			return {datum: details.datum, end: details.x2, start: details.x1};
		},
		grouping: F2(
			function (a, b) {
				return _Utils_eq(a.start, b.start) && (_Utils_eq(a.end, b.end) && _Utils_eq(a.datum, b.datum));
			}),
		limits: F2(
			function (bin, products_) {
				var pos = A2($author$project$Svg$Coordinates$foldPosition, $author$project$Chart$Item$getLimits, products_);
				return _Utils_update(
					pos,
					{x1: bin.start, x2: bin.end});
			}),
		position: F3(
			function (plane, bin, products_) {
				var pos = A2(
					$author$project$Svg$Coordinates$foldPosition,
					$author$project$Chart$Item$getPosition(plane),
					products_);
				return _Utils_update(
					pos,
					{x1: bin.start, x2: bin.end});
			})
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$svg$Svg$map = $elm$virtual_dom$VirtualDom$map;
var $author$project$Chart$Item$apply = F2(
	function (funcs, _default) {
		var apply_ = F2(
			function (f, a) {
				return f(a);
			});
		return A3($elm$core$List$foldl, apply_, _default, funcs);
	});
var $author$project$Svg$Commands$Arc = F7(
	function (a, b, c, d, e, f, g) {
		return {$: 'Arc', a: a, b: b, c: c, d: d, e: e, f: f, g: g};
	});
var $author$project$Svg$Commands$Line = F2(
	function (a, b) {
		return {$: 'Line', a: a, b: b};
	});
var $author$project$Svg$Commands$Move = F2(
	function (a, b) {
		return {$: 'Move', a: a, b: b};
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $author$project$Chart$Svg$apply = F2(
	function (funcs, _default) {
		var apply_ = F2(
			function (f, a) {
				return f(a);
			});
		return A3($elm$core$List$foldl, apply_, _default, funcs);
	});
var $author$project$Chart$Svg$blue = '#1976d2';
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $author$project$Svg$Coordinates$innerWidth = function (plane) {
	return A2($elm$core$Basics$max, 1, (plane.width - plane.margin.left) - plane.margin.right);
};
var $author$project$Svg$Coordinates$range = function (limits) {
	var diff = limits.max - limits.min;
	return (diff > 0) ? diff : 1;
};
var $author$project$Svg$Coordinates$scaleSVGX = F2(
	function (plane, value) {
		return (value * $author$project$Svg$Coordinates$innerWidth(plane)) / $author$project$Svg$Coordinates$range(plane.x);
	});
var $author$project$Svg$Coordinates$innerHeight = function (plane) {
	return A2($elm$core$Basics$max, 1, (plane.height - plane.margin.top) - plane.margin.bottom);
};
var $author$project$Svg$Coordinates$scaleSVGY = F2(
	function (plane, value) {
		return (value * $author$project$Svg$Coordinates$innerHeight(plane)) / $author$project$Svg$Coordinates$range(plane.y);
	});
var $author$project$Chart$Svg$clipperStyle = F2(
	function (plane, limits) {
		var y1 = limits.y2 - plane.y.max;
		var y2 = y1 + $elm$core$Basics$abs(plane.y.max - plane.y.min);
		var x1 = plane.x.min - limits.x1;
		var x2 = x1 + $elm$core$Basics$abs(plane.x.max - plane.x.min);
		var path = A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					'M' + ($elm$core$String$fromFloat(
					A2($author$project$Svg$Coordinates$scaleSVGX, plane, x1)) + (' ' + $elm$core$String$fromFloat(
					A2($author$project$Svg$Coordinates$scaleSVGY, plane, y1)))),
					'V' + $elm$core$String$fromFloat(
					A2($author$project$Svg$Coordinates$scaleSVGY, plane, y2)),
					'H' + $elm$core$String$fromFloat(
					A2($author$project$Svg$Coordinates$scaleSVGX, plane, x2)),
					'V' + $elm$core$String$fromFloat(
					A2($author$project$Svg$Coordinates$scaleSVGY, plane, y1)),
					'H' + $elm$core$String$fromFloat(
					A2($author$project$Svg$Coordinates$scaleSVGY, plane, x1))
				]));
		return 'clip-path: path(\'' + (path + '\');');
	});
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $author$project$Svg$Commands$joinCommands = function (commands) {
	return A2($elm$core$String$join, ' ', commands);
};
var $author$project$Svg$Commands$stringBoolInt = function (bool) {
	return bool ? '1' : '0';
};
var $author$project$Svg$Commands$stringPoint = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return $elm$core$String$fromFloat(x) + (' ' + $elm$core$String$fromFloat(y));
};
var $author$project$Svg$Commands$stringPoints = function (points) {
	return A2(
		$elm$core$String$join,
		',',
		A2($elm$core$List$map, $author$project$Svg$Commands$stringPoint, points));
};
var $author$project$Svg$Commands$stringCommand = function (command) {
	switch (command.$) {
		case 'Move':
			var x = command.a;
			var y = command.b;
			return 'M' + $author$project$Svg$Commands$stringPoint(
				_Utils_Tuple2(x, y));
		case 'Line':
			var x = command.a;
			var y = command.b;
			return 'L' + $author$project$Svg$Commands$stringPoint(
				_Utils_Tuple2(x, y));
		case 'CubicBeziers':
			var cx1 = command.a;
			var cy1 = command.b;
			var cx2 = command.c;
			var cy2 = command.d;
			var x = command.e;
			var y = command.f;
			return 'C' + $author$project$Svg$Commands$stringPoints(
				_List_fromArray(
					[
						_Utils_Tuple2(cx1, cy1),
						_Utils_Tuple2(cx2, cy2),
						_Utils_Tuple2(x, y)
					]));
		case 'CubicBeziersShort':
			var cx1 = command.a;
			var cy1 = command.b;
			var x = command.c;
			var y = command.d;
			return 'Q' + $author$project$Svg$Commands$stringPoints(
				_List_fromArray(
					[
						_Utils_Tuple2(cx1, cy1),
						_Utils_Tuple2(x, y)
					]));
		case 'QuadraticBeziers':
			var cx1 = command.a;
			var cy1 = command.b;
			var x = command.c;
			var y = command.d;
			return 'Q' + $author$project$Svg$Commands$stringPoints(
				_List_fromArray(
					[
						_Utils_Tuple2(cx1, cy1),
						_Utils_Tuple2(x, y)
					]));
		case 'QuadraticBeziersShort':
			var x = command.a;
			var y = command.b;
			return 'T' + $author$project$Svg$Commands$stringPoint(
				_Utils_Tuple2(x, y));
		case 'Arc':
			var rx = command.a;
			var ry = command.b;
			var xAxisRotation = command.c;
			var largeArcFlag = command.d;
			var sweepFlag = command.e;
			var x = command.f;
			var y = command.g;
			return 'A ' + $author$project$Svg$Commands$joinCommands(
				_List_fromArray(
					[
						$author$project$Svg$Commands$stringPoint(
						_Utils_Tuple2(rx, ry)),
						$elm$core$String$fromInt(xAxisRotation),
						$author$project$Svg$Commands$stringBoolInt(largeArcFlag),
						$author$project$Svg$Commands$stringBoolInt(sweepFlag),
						$author$project$Svg$Commands$stringPoint(
						_Utils_Tuple2(x, y))
					]));
		default:
			return 'Z';
	}
};
var $author$project$Svg$Commands$Close = {$: 'Close'};
var $author$project$Svg$Commands$CubicBeziers = F6(
	function (a, b, c, d, e, f) {
		return {$: 'CubicBeziers', a: a, b: b, c: c, d: d, e: e, f: f};
	});
var $author$project$Svg$Commands$CubicBeziersShort = F4(
	function (a, b, c, d) {
		return {$: 'CubicBeziersShort', a: a, b: b, c: c, d: d};
	});
var $author$project$Svg$Commands$QuadraticBeziers = F4(
	function (a, b, c, d) {
		return {$: 'QuadraticBeziers', a: a, b: b, c: c, d: d};
	});
var $author$project$Svg$Commands$QuadraticBeziersShort = F2(
	function (a, b) {
		return {$: 'QuadraticBeziersShort', a: a, b: b};
	});
var $author$project$Svg$Coordinates$toSVGX = F2(
	function (plane, value) {
		return A2($author$project$Svg$Coordinates$scaleSVGX, plane, value - plane.x.min) + plane.margin.left;
	});
var $author$project$Svg$Coordinates$toSVGY = F2(
	function (plane, value) {
		return A2($author$project$Svg$Coordinates$scaleSVGY, plane, plane.y.max - value) + plane.margin.top;
	});
var $author$project$Svg$Commands$translate = F2(
	function (plane, command) {
		switch (command.$) {
			case 'Move':
				var x = command.a;
				var y = command.b;
				return A2(
					$author$project$Svg$Commands$Move,
					A2($author$project$Svg$Coordinates$toSVGX, plane, x),
					A2($author$project$Svg$Coordinates$toSVGY, plane, y));
			case 'Line':
				var x = command.a;
				var y = command.b;
				return A2(
					$author$project$Svg$Commands$Line,
					A2($author$project$Svg$Coordinates$toSVGX, plane, x),
					A2($author$project$Svg$Coordinates$toSVGY, plane, y));
			case 'CubicBeziers':
				var cx1 = command.a;
				var cy1 = command.b;
				var cx2 = command.c;
				var cy2 = command.d;
				var x = command.e;
				var y = command.f;
				return A6(
					$author$project$Svg$Commands$CubicBeziers,
					A2($author$project$Svg$Coordinates$toSVGX, plane, cx1),
					A2($author$project$Svg$Coordinates$toSVGY, plane, cy1),
					A2($author$project$Svg$Coordinates$toSVGX, plane, cx2),
					A2($author$project$Svg$Coordinates$toSVGY, plane, cy2),
					A2($author$project$Svg$Coordinates$toSVGX, plane, x),
					A2($author$project$Svg$Coordinates$toSVGY, plane, y));
			case 'CubicBeziersShort':
				var cx1 = command.a;
				var cy1 = command.b;
				var x = command.c;
				var y = command.d;
				return A4(
					$author$project$Svg$Commands$CubicBeziersShort,
					A2($author$project$Svg$Coordinates$toSVGX, plane, cx1),
					A2($author$project$Svg$Coordinates$toSVGY, plane, cy1),
					A2($author$project$Svg$Coordinates$toSVGX, plane, x),
					A2($author$project$Svg$Coordinates$toSVGY, plane, y));
			case 'QuadraticBeziers':
				var cx1 = command.a;
				var cy1 = command.b;
				var x = command.c;
				var y = command.d;
				return A4(
					$author$project$Svg$Commands$QuadraticBeziers,
					A2($author$project$Svg$Coordinates$toSVGX, plane, cx1),
					A2($author$project$Svg$Coordinates$toSVGY, plane, cy1),
					A2($author$project$Svg$Coordinates$toSVGX, plane, x),
					A2($author$project$Svg$Coordinates$toSVGY, plane, y));
			case 'QuadraticBeziersShort':
				var x = command.a;
				var y = command.b;
				return A2(
					$author$project$Svg$Commands$QuadraticBeziersShort,
					A2($author$project$Svg$Coordinates$toSVGX, plane, x),
					A2($author$project$Svg$Coordinates$toSVGY, plane, y));
			case 'Arc':
				var rx = command.a;
				var ry = command.b;
				var xAxisRotation = command.c;
				var largeArcFlag = command.d;
				var sweepFlag = command.e;
				var x = command.f;
				var y = command.g;
				return A7(
					$author$project$Svg$Commands$Arc,
					rx,
					ry,
					xAxisRotation,
					largeArcFlag,
					sweepFlag,
					A2($author$project$Svg$Coordinates$toSVGX, plane, x),
					A2($author$project$Svg$Coordinates$toSVGY, plane, y));
			default:
				return $author$project$Svg$Commands$Close;
		}
	});
var $author$project$Svg$Commands$description = F2(
	function (plane, commands) {
		return $author$project$Svg$Commands$joinCommands(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$author$project$Svg$Commands$translate(plane),
					$author$project$Svg$Commands$stringCommand),
				commands));
	});
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $author$project$Svg$Coordinates$scaleCartesianX = F2(
	function (plane, value) {
		return (value * $author$project$Svg$Coordinates$range(plane.x)) / $author$project$Svg$Coordinates$innerWidth(plane);
	});
var $author$project$Svg$Coordinates$scaleCartesianY = F2(
	function (plane, value) {
		return (value * $author$project$Svg$Coordinates$range(plane.y)) / $author$project$Svg$Coordinates$innerHeight(plane);
	});
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$defs = $elm$svg$Svg$trustedNode('defs');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $elm$svg$Svg$linearGradient = $elm$svg$Svg$trustedNode('linearGradient');
var $elm$svg$Svg$Attributes$offset = _VirtualDom_attribute('offset');
var $elm$svg$Svg$pattern = $elm$svg$Svg$trustedNode('pattern');
var $elm$svg$Svg$Attributes$patternTransform = _VirtualDom_attribute('patternTransform');
var $elm$svg$Svg$Attributes$patternUnits = _VirtualDom_attribute('patternUnits');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm$svg$Svg$stop = $elm$svg$Svg$trustedNode('stop');
var $elm$svg$Svg$Attributes$stopColor = _VirtualDom_attribute('stop-color');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $author$project$Chart$Svg$toPattern = F2(
	function (defaultColor, design) {
		var toPatternId = function (props) {
			return A3(
				$elm$core$String$replace,
				'(',
				'-',
				A3(
					$elm$core$String$replace,
					')',
					'-',
					A3(
						$elm$core$String$replace,
						'.',
						'-',
						A3(
							$elm$core$String$replace,
							',',
							'-',
							A3(
								$elm$core$String$replace,
								' ',
								'-',
								A2(
									$elm$core$String$join,
									'-',
									_Utils_ap(
										_List_fromArray(
											[
												'elm-charts__pattern',
												function () {
												switch (design.$) {
													case 'Striped':
														return 'striped';
													case 'Dotted':
														return 'dotted';
													default:
														return 'gradient';
												}
											}()
											]),
										props)))))));
		};
		var toPatternDefs = F4(
			function (id, space, rotate, inside) {
				return A2(
					$elm$svg$Svg$defs,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$pattern,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$id(id),
									$elm$svg$Svg$Attributes$patternUnits('userSpaceOnUse'),
									$elm$svg$Svg$Attributes$width(
									$elm$core$String$fromFloat(space)),
									$elm$svg$Svg$Attributes$height(
									$elm$core$String$fromFloat(space)),
									$elm$svg$Svg$Attributes$patternTransform(
									'rotate(' + ($elm$core$String$fromFloat(rotate) + ')'))
								]),
							_List_fromArray(
								[inside]))
						]));
			});
		var _v0 = function () {
			switch (design.$) {
				case 'Striped':
					var edits = design.a;
					var config = A2(
						$author$project$Chart$Svg$apply,
						edits,
						{color: defaultColor, rotate: 45, space: 4, width: 3});
					var theId = toPatternId(
						_List_fromArray(
							[
								config.color,
								$elm$core$String$fromFloat(config.width),
								$elm$core$String$fromFloat(config.space),
								$elm$core$String$fromFloat(config.rotate)
							]));
					return _Utils_Tuple2(
						A4(
							toPatternDefs,
							theId,
							config.space,
							config.rotate,
							A2(
								$elm$svg$Svg$line,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$x1('0'),
										$elm$svg$Svg$Attributes$y('0'),
										$elm$svg$Svg$Attributes$x2('0'),
										$elm$svg$Svg$Attributes$y2(
										$elm$core$String$fromFloat(config.space)),
										$elm$svg$Svg$Attributes$stroke(config.color),
										$elm$svg$Svg$Attributes$strokeWidth(
										$elm$core$String$fromFloat(config.width))
									]),
								_List_Nil)),
						theId);
				case 'Dotted':
					var edits = design.a;
					var config = A2(
						$author$project$Chart$Svg$apply,
						edits,
						{color: defaultColor, rotate: 45, space: 4, width: 3});
					var theId = toPatternId(
						_List_fromArray(
							[
								config.color,
								$elm$core$String$fromFloat(config.width),
								$elm$core$String$fromFloat(config.space),
								$elm$core$String$fromFloat(config.rotate)
							]));
					return _Utils_Tuple2(
						A4(
							toPatternDefs,
							theId,
							config.space,
							config.rotate,
							A2(
								$elm$svg$Svg$circle,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$fill(config.color),
										$elm$svg$Svg$Attributes$cx(
										$elm$core$String$fromFloat(config.width / 3)),
										$elm$svg$Svg$Attributes$cy(
										$elm$core$String$fromFloat(config.width / 3)),
										$elm$svg$Svg$Attributes$r(
										$elm$core$String$fromFloat(config.width / 3))
									]),
								_List_Nil)),
						theId);
				default:
					var edits = design.a;
					var config = A2(
						$author$project$Chart$Svg$apply,
						edits,
						{bottom: 'transparent', top: defaultColor});
					var theId = toPatternId(
						_List_fromArray(
							[config.top, config.bottom]));
					return _Utils_Tuple2(
						A2(
							$elm$svg$Svg$defs,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$svg$Svg$linearGradient,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id(theId),
											$elm$svg$Svg$Attributes$x1('0'),
											$elm$svg$Svg$Attributes$x2('0'),
											$elm$svg$Svg$Attributes$y1('0'),
											$elm$svg$Svg$Attributes$y2('1')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$stop,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$offset('0%'),
													$elm$svg$Svg$Attributes$stopColor(config.top)
												]),
											_List_Nil),
											A2(
											$elm$svg$Svg$stop,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$offset('100%'),
													$elm$svg$Svg$Attributes$stopColor(config.bottom)
												]),
											_List_Nil)
										]))
								])),
						theId);
			}
		}();
		var patternDefs = _v0.a;
		var patternId = _v0.b;
		return _Utils_Tuple2(patternDefs, 'url(#' + (patternId + ')'));
	});
var $author$project$Chart$Svg$bar = F3(
	function (plane, edits, point) {
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{border: 'white', borderWidth: 0, color: $author$project$Chart$Svg$blue, design: $elm$core$Maybe$Nothing, opacity: 1, roundBottom: 0, roundTop: 0});
		var x1_ = point.x1 + A2($author$project$Svg$Coordinates$scaleCartesianX, plane, config.borderWidth / 2);
		var x_ = x1_;
		var x2_ = point.x2 - A2($author$project$Svg$Coordinates$scaleCartesianX, plane, config.borderWidth / 2);
		var w = x2_ - x_;
		var y1_ = point.y1 + A2($author$project$Svg$Coordinates$scaleCartesianY, plane, config.borderWidth / 2);
		var y2_ = point.y2 - A2($author$project$Svg$Coordinates$scaleCartesianY, plane, config.borderWidth / 2);
		var y_ = A2($elm$core$Basics$max, y1_, y2_);
		var ys = $elm$core$Basics$abs(
			A2($author$project$Svg$Coordinates$scaleSVGY, plane, y_));
		var bs = A2($elm$core$Basics$min, y1_, y2_);
		var bT = (A2($author$project$Svg$Coordinates$scaleSVGX, plane, w) * 0.5) * A3($elm$core$Basics$clamp, 0, 1, config.roundTop);
		var rxT = A2($author$project$Svg$Coordinates$scaleCartesianX, plane, bT);
		var ryT = A2($author$project$Svg$Coordinates$scaleCartesianY, plane, bT);
		var bB = (A2($author$project$Svg$Coordinates$scaleSVGX, plane, w) * 0.5) * A3($elm$core$Basics$clamp, 0, 1, config.roundBottom);
		var rxB = A2($author$project$Svg$Coordinates$scaleCartesianX, plane, bB);
		var ryB = A2($author$project$Svg$Coordinates$scaleCartesianY, plane, bB);
		var commands = function () {
			if (_Utils_eq(bs, y_)) {
				return _List_Nil;
			} else {
				var _v2 = _Utils_Tuple2(config.roundTop > 0, config.roundBottom > 0);
				if (!_v2.a) {
					if (!_v2.b) {
						return _List_fromArray(
							[
								A2($author$project$Svg$Commands$Move, x_, bs),
								A2($author$project$Svg$Commands$Line, x_, y_),
								A2($author$project$Svg$Commands$Line, x_ + w, y_),
								A2($author$project$Svg$Commands$Line, x_ + w, bs),
								A2($author$project$Svg$Commands$Line, x_, bs)
							]);
					} else {
						return _List_fromArray(
							[
								A2($author$project$Svg$Commands$Move, x_ + rxB, bs),
								A7($author$project$Svg$Commands$Arc, bB, bB, -45, false, true, x_, bs + ryB),
								A2($author$project$Svg$Commands$Line, x_, y_),
								A2($author$project$Svg$Commands$Line, x_ + w, y_),
								A2($author$project$Svg$Commands$Line, x_ + w, bs + ryB),
								A7($author$project$Svg$Commands$Arc, bB, bB, -45, false, true, (x_ + w) - rxB, bs),
								A2($author$project$Svg$Commands$Line, x_ + rxB, bs)
							]);
					}
				} else {
					if (!_v2.b) {
						return _List_fromArray(
							[
								A2($author$project$Svg$Commands$Move, x_, bs),
								A2($author$project$Svg$Commands$Line, x_, y_ + (-ryT)),
								A7($author$project$Svg$Commands$Arc, bT, bT, -45, false, true, x_ + rxT, y_),
								A2($author$project$Svg$Commands$Line, (x_ + w) - rxT, y_),
								A7($author$project$Svg$Commands$Arc, bT, bT, -45, false, true, x_ + w, y_ + (-ryT)),
								A2($author$project$Svg$Commands$Line, x_ + w, bs),
								A2($author$project$Svg$Commands$Line, x_, bs)
							]);
					} else {
						return _List_fromArray(
							[
								A2($author$project$Svg$Commands$Move, x_ + rxB, bs),
								A7($author$project$Svg$Commands$Arc, bB, bB, -45, false, true, x_, bs + ryB),
								A2($author$project$Svg$Commands$Line, x_, y_ - ryT),
								A7($author$project$Svg$Commands$Arc, bT, bT, -45, false, true, x_ + rxT, y_),
								A2($author$project$Svg$Commands$Line, (x_ + w) - rxT, y_),
								A7($author$project$Svg$Commands$Arc, bT, bT, -45, false, true, x_ + w, y_ - ryT),
								A2($author$project$Svg$Commands$Line, x_ + w, bs + ryB),
								A7($author$project$Svg$Commands$Arc, bB, bB, -45, false, true, (x_ + w) - rxB, bs),
								A2($author$project$Svg$Commands$Line, x_ + rxB, bs)
							]);
					}
				}
			}
		}();
		var actualBar = function (fill) {
			return A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__bar'),
						$elm$svg$Svg$Attributes$fill(fill),
						$elm$svg$Svg$Attributes$fillOpacity(
						$elm$core$String$fromFloat(config.opacity)),
						$elm$svg$Svg$Attributes$stroke(config.border),
						$elm$svg$Svg$Attributes$strokeWidth(
						$elm$core$String$fromFloat(config.borderWidth)),
						$elm$svg$Svg$Attributes$d(
						A2($author$project$Svg$Commands$description, plane, commands)),
						$elm$svg$Svg$Attributes$style(
						A2(
							$author$project$Chart$Svg$clipperStyle,
							plane,
							A4($author$project$Svg$Coordinates$Position, x1_, x2_, bs, y_)))
					]),
				_List_Nil);
		};
		var _v0 = config.design;
		if (_v0.$ === 'Nothing') {
			return actualBar(config.color);
		} else {
			var design = _v0.a;
			var _v1 = A2($author$project$Chart$Svg$toPattern, config.color, design);
			var patternDefs = _v1.a;
			var fill = _v1.b;
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__bar-with-pattern')
					]),
				_List_fromArray(
					[
						patternDefs,
						actualBar(fill)
					]));
		}
	});
var $author$project$Chart$Attributes$color = F2(
	function (v, config) {
		return (v === '') ? config : _Utils_update(
			config,
			{color: v});
	});
var $author$project$Chart$Attributes$roundBottom = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{roundBottom: v});
	});
var $author$project$Chart$Attributes$roundTop = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{roundTop: v});
	});
var $author$project$Internal$Property$toConfigs = function (prop) {
	if (prop.$ === 'Property') {
		var config = prop.a;
		return _List_fromArray(
			[config]);
	} else {
		var configs = prop.a;
		return configs;
	}
};
var $author$project$Chart$Attributes$blue = '#1976d2';
var $author$project$Chart$Attributes$green = '#388e3c';
var $author$project$Chart$Attributes$orange = '#e47d32';
var $author$project$Chart$Attributes$pink = '#ec407a';
var $author$project$Chart$Attributes$purple = '#7c29ed';
var $author$project$Chart$Attributes$red = '#d32f2f';
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $author$project$Chart$Item$toDefault = F3(
	function (_default, items, index) {
		var dict = $elm$core$Dict$fromList(
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, items));
		var numOfItems = $elm$core$Dict$size(dict);
		var itemIndex = index % numOfItems;
		return A2(
			$elm$core$Maybe$withDefault,
			_default,
			A2($elm$core$Dict$get, itemIndex, dict));
	});
var $author$project$Chart$Attributes$turquoise = '#4eaea7';
var $author$project$Chart$Item$toDefaultColor = A2(
	$author$project$Chart$Item$toDefault,
	$author$project$Chart$Attributes$blue,
	_List_fromArray(
		[$author$project$Chart$Attributes$blue, $author$project$Chart$Attributes$turquoise, $author$project$Chart$Attributes$purple, $author$project$Chart$Attributes$orange, $author$project$Chart$Attributes$pink, $author$project$Chart$Attributes$green, $author$project$Chart$Attributes$red]));
var $author$project$Chart$Item$withSurround = F2(
	function (all, func) {
		var fold = F4(
			function (index, prev, acc, list) {
				fold:
				while (true) {
					if (list.b) {
						if (list.b.b) {
							var a = list.a;
							var _v1 = list.b;
							var b = _v1.a;
							var rest = _v1.b;
							var $temp$index = index + 1,
								$temp$prev = $elm$core$Maybe$Just(a),
								$temp$acc = _Utils_ap(
								acc,
								_List_fromArray(
									[
										A4(
										func,
										index,
										prev,
										a,
										$elm$core$Maybe$Just(b))
									])),
								$temp$list = A2($elm$core$List$cons, b, rest);
							index = $temp$index;
							prev = $temp$prev;
							acc = $temp$acc;
							list = $temp$list;
							continue fold;
						} else {
							var a = list.a;
							return _Utils_ap(
								acc,
								_List_fromArray(
									[
										A4(func, index, prev, a, $elm$core$Maybe$Nothing)
									]));
						}
					} else {
						return acc;
					}
				}
			});
		return A4(fold, 0, $elm$core$Maybe$Nothing, _List_Nil, all);
	});
var $author$project$Chart$Item$toBarSeries = F3(
	function (barsAttrs, properties, data) {
		var barsConfig = A2(
			$author$project$Chart$Item$apply,
			barsAttrs,
			{grouped: true, margin: 0.1, roundBottom: 0, roundTop: 0, spacing: 0.05, x1: $elm$core$Maybe$Nothing, x2: $elm$core$Maybe$Nothing});
		var toBarItem = F5(
			function (sections, barIndex, sectionIndex, section, bin) {
				var visual = section.visual(bin.datum);
				var value = section.value(bin.datum);
				var start = bin.start;
				var numOfSections = $elm$core$List$length(sections);
				var numOfBars = barsConfig.grouped ? $elm$core$List$length(properties) : 1;
				var minY = (numOfSections > 1) ? $elm$core$Basics$max(0) : $elm$core$Basics$identity;
				var y1 = minY(
					A2($elm$core$Maybe$withDefault, 0, visual) - A2($elm$core$Maybe$withDefault, 0, value));
				var y2 = minY(
					A2($elm$core$Maybe$withDefault, 0, visual));
				var isSingle = numOfSections === 1;
				var isLast = _Utils_eq(sectionIndex, numOfSections - 1);
				var roundTop = (isSingle || isLast) ? barsConfig.roundTop : 0;
				var isFirst = !sectionIndex;
				var roundBottom = (isSingle || isFirst) ? barsConfig.roundBottom : 0;
				var end = bin.end;
				var length = end - start;
				var margin = length * barsConfig.margin;
				var spacing = length * barsConfig.spacing;
				var width = ((length - (margin * 2)) - ((numOfBars - 1) * spacing)) / numOfBars;
				var offset = barsConfig.grouped ? ((barIndex * width) + (barIndex * spacing)) : 0;
				var x1 = (start + margin) + offset;
				var x2 = ((start + margin) + offset) + width;
				var color = $author$project$Chart$Item$toDefaultColor(barIndex + sectionIndex);
				var defaultAttrs = _List_fromArray(
					[
						$author$project$Chart$Attributes$roundTop(roundTop),
						$author$project$Chart$Attributes$roundBottom(roundBottom),
						$author$project$Chart$Attributes$color(color)
					]);
				var attrs = _Utils_ap(
					defaultAttrs,
					_Utils_ap(
						section.attrs,
						section.extra(bin.datum)));
				return $author$project$Chart$Item$Item(
					{
						details: {
							config: A2(
								$author$project$Chart$Item$apply,
								attrs,
								{border: 'white', borderWidth: 0, color: color, design: $elm$core$Maybe$Nothing, opacity: 1, roundBottom: 0, roundTop: 0}),
							datum: bin.datum,
							name: section.meta,
							property: barIndex,
							stack: sectionIndex,
							x1: start,
							x2: end,
							y: value
						},
						limits: function (config) {
							return {
								x1: x1,
								x2: x2,
								y1: A2($elm$core$Basics$min, y1, y2),
								y2: A2($elm$core$Basics$max, y1, y2)
							};
						},
						position: F2(
							function (_v14, config) {
								return {x1: x1, x2: x2, y1: y1, y2: y2};
							}),
						render: F3(
							function (plane, config, position) {
								return A3($author$project$Chart$Svg$bar, plane, attrs, position);
							})
					});
			});
		var toSeriesItem = F5(
			function (bins, sections, barIndex, sectionIndex, section) {
				return $author$project$Chart$Item$Item(
					{
						details: {
							config: _Utils_Tuple0,
							items: A2(
								$elm$core$List$map,
								A4(toBarItem, sections, barIndex, sectionIndex, section),
								bins)
						},
						limits: function (c) {
							return A2($author$project$Svg$Coordinates$foldPosition, $author$project$Chart$Item$getLimits, c.items);
						},
						position: F2(
							function (plane, c) {
								return A2(
									$author$project$Svg$Coordinates$foldPosition,
									$author$project$Chart$Item$getPosition(plane),
									c.items);
							}),
						render: F3(
							function (plane, config, _v13) {
								return A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$class('elm-charts__bar-series')
										]),
									A2(
										$elm$core$List$map,
										$author$project$Chart$Item$render(plane),
										config.items));
							})
					});
			});
		var toBin = F4(
			function (index, prevM, curr, nextM) {
				var _v0 = _Utils_Tuple2(barsConfig.x1, barsConfig.x2);
				if (_v0.a.$ === 'Nothing') {
					if (_v0.b.$ === 'Nothing') {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						return {datum: curr, end: (index + 1) + 0.5, start: (index + 1) - 0.5};
					} else {
						var _v8 = _v0.a;
						var toEnd = _v0.b.a;
						var _v9 = _Utils_Tuple2(prevM, nextM);
						if (_v9.a.$ === 'Just') {
							var prev = _v9.a.a;
							return {
								datum: curr,
								end: toEnd(curr),
								start: toEnd(prev)
							};
						} else {
							if (_v9.b.$ === 'Just') {
								var _v10 = _v9.a;
								var next = _v9.b.a;
								return {
									datum: curr,
									end: toEnd(curr),
									start: toEnd(curr) - (toEnd(next) - toEnd(curr))
								};
							} else {
								var _v11 = _v9.a;
								var _v12 = _v9.b;
								return {
									datum: curr,
									end: toEnd(curr),
									start: toEnd(curr) - 1
								};
							}
						}
					}
				} else {
					if (_v0.b.$ === 'Nothing') {
						var toStart = _v0.a.a;
						var _v3 = _v0.b;
						var _v4 = _Utils_Tuple2(prevM, nextM);
						if (_v4.b.$ === 'Just') {
							var next = _v4.b.a;
							return {
								datum: curr,
								end: toStart(next),
								start: toStart(curr)
							};
						} else {
							if (_v4.a.$ === 'Just') {
								var prev = _v4.a.a;
								var _v5 = _v4.b;
								return {
									datum: curr,
									end: toStart(curr) + (toStart(curr) - toStart(prev)),
									start: toStart(curr)
								};
							} else {
								var _v6 = _v4.a;
								var _v7 = _v4.b;
								return {
									datum: curr,
									end: toStart(curr) + 1,
									start: toStart(curr)
								};
							}
						}
					} else {
						var toStart = _v0.a.a;
						var toEnd = _v0.b.a;
						return {
							datum: curr,
							end: toEnd(curr),
							start: toStart(curr)
						};
					}
				}
			});
		return function (bins) {
			return $elm$core$List$concat(
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (barIndex, props) {
							return A2(
								$elm$core$List$indexedMap,
								A3(toSeriesItem, bins, props, barIndex),
								$elm$core$List$reverse(props));
						}),
					A2($elm$core$List$map, $author$project$Internal$Property$toConfigs, properties)));
		}(
			A2($author$project$Chart$Item$withSurround, data, toBin));
	});
var $author$project$Chart$Svg$isWithinPlane = F3(
	function (plane, x, y) {
		return _Utils_eq(
			A3($elm$core$Basics$clamp, plane.x.min, plane.x.max, x),
			x) && _Utils_eq(
			A3($elm$core$Basics$clamp, plane.y.min, plane.y.max, y),
			y);
	});
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$Chart$Svg$plusPath = F4(
	function (area_, off, x_, y_) {
		var side = $elm$core$Basics$sqrt(area_ / 4) + off;
		var r6 = side / 2;
		var r3 = side;
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					'M' + ($elm$core$String$fromFloat(x_ - r6) + (' ' + $elm$core$String$fromFloat(((y_ - r3) - r6) + off))),
					'v' + $elm$core$String$fromFloat(r3 - off),
					'h' + $elm$core$String$fromFloat((-r3) + off),
					'v' + $elm$core$String$fromFloat(r3),
					'h' + $elm$core$String$fromFloat(r3 - off),
					'v' + $elm$core$String$fromFloat(r3 - off),
					'h' + $elm$core$String$fromFloat(r3),
					'v' + $elm$core$String$fromFloat((-r3) + off),
					'h' + $elm$core$String$fromFloat(r3 - off),
					'v' + $elm$core$String$fromFloat(-r3),
					'h' + $elm$core$String$fromFloat((-r3) + off),
					'v' + $elm$core$String$fromFloat((-r3) + off),
					'h' + $elm$core$String$fromFloat(-r3),
					'v' + $elm$core$String$fromFloat(r3 - off)
				]));
	});
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $elm$core$Basics$tan = _Basics_tan;
var $author$project$Chart$Svg$trianglePath = F4(
	function (area_, off, x_, y_) {
		var side = $elm$core$Basics$sqrt(
			(area_ * 4) / $elm$core$Basics$sqrt(3)) + (off * $elm$core$Basics$sqrt(3));
		var height = ($elm$core$Basics$sqrt(3) * side) / 2;
		var fromMiddle = height - (($elm$core$Basics$tan(
			$elm$core$Basics$degrees(30)) * side) / 2);
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					'M' + ($elm$core$String$fromFloat(x_) + (' ' + $elm$core$String$fromFloat(y_ - fromMiddle))),
					'l' + ($elm$core$String$fromFloat((-side) / 2) + (' ' + $elm$core$String$fromFloat(height))),
					'h' + $elm$core$String$fromFloat(side),
					'z'
				]));
	});
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $author$project$Chart$Svg$dot = F5(
	function (plane, toX, toY, edits, datum_) {
		var y_ = A2(
			$author$project$Svg$Coordinates$toSVGY,
			plane,
			toY(datum_));
		var x_ = A2(
			$author$project$Svg$Coordinates$toSVGX,
			plane,
			toX(datum_));
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{aura: 0, auraWidth: 5, border: '', borderWidth: 1, color: $author$project$Chart$Svg$blue, opacity: 1, shape: $elm$core$Maybe$Nothing, size: 6});
		var styleAttrs = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$stroke(
				(config.border === '') ? config.color : config.border),
				$elm$svg$Svg$Attributes$strokeWidth(
				$elm$core$String$fromFloat(config.borderWidth)),
				$elm$svg$Svg$Attributes$fillOpacity(
				$elm$core$String$fromFloat(config.opacity)),
				$elm$svg$Svg$Attributes$fill(config.color),
				$elm$svg$Svg$Attributes$class('elm-charts__dot')
			]);
		var auraAttrs = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$stroke(config.color),
				$elm$svg$Svg$Attributes$strokeWidth(
				$elm$core$String$fromFloat(config.auraWidth)),
				$elm$svg$Svg$Attributes$strokeOpacity(
				$elm$core$String$fromFloat(config.aura)),
				$elm$svg$Svg$Attributes$fill('transparent'),
				$elm$svg$Svg$Attributes$class('elm-charts__dot-aura')
			]);
		var view = F3(
			function (toEl, auraOff, toAttrs) {
				return (config.aura > 0) ? A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__dot-container')
						]),
					_List_fromArray(
						[
							A2(
							toEl,
							_Utils_ap(
								toAttrs(auraOff),
								auraAttrs),
							_List_Nil),
							A2(
							toEl,
							_Utils_ap(
								toAttrs(0),
								styleAttrs),
							_List_Nil)
						])) : A2(
					toEl,
					_Utils_ap(
						toAttrs(0),
						styleAttrs),
					_List_Nil);
			});
		var area_ = (2 * $elm$core$Basics$pi) * config.size;
		if (!A3(
			$author$project$Chart$Svg$isWithinPlane,
			plane,
			toX(datum_),
			toY(datum_))) {
			return $elm$svg$Svg$text('');
		} else {
			var _v0 = config.shape;
			if (_v0.$ === 'Nothing') {
				return $elm$svg$Svg$text('');
			} else {
				switch (_v0.a.$) {
					case 'Circle':
						var _v1 = _v0.a;
						var radiusAura = config.auraWidth / 2;
						var radius = $elm$core$Basics$sqrt(area_ / $elm$core$Basics$pi);
						var toAttrs = function (off) {
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$cx(
									$elm$core$String$fromFloat(x_)),
									$elm$svg$Svg$Attributes$cy(
									$elm$core$String$fromFloat(y_)),
									$elm$svg$Svg$Attributes$r(
									$elm$core$String$fromFloat(radius + off))
								]);
						};
						return A3(view, $elm$svg$Svg$circle, radiusAura, toAttrs);
					case 'Triangle':
						var _v2 = _v0.a;
						var toAttrs = function (off) {
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$d(
									A4($author$project$Chart$Svg$trianglePath, area_, off, x_, y_))
								]);
						};
						return A3(view, $elm$svg$Svg$path, config.auraWidth, toAttrs);
					case 'Square':
						var _v3 = _v0.a;
						var side = $elm$core$Basics$sqrt(area_);
						var toAttrs = function (off) {
							var sideOff = side + off;
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$x(
									$elm$core$String$fromFloat(x_ - (sideOff / 2))),
									$elm$svg$Svg$Attributes$y(
									$elm$core$String$fromFloat(y_ - (sideOff / 2))),
									$elm$svg$Svg$Attributes$width(
									$elm$core$String$fromFloat(sideOff)),
									$elm$svg$Svg$Attributes$height(
									$elm$core$String$fromFloat(sideOff))
								]);
						};
						return A3(view, $elm$svg$Svg$rect, config.auraWidth, toAttrs);
					case 'Diamond':
						var _v4 = _v0.a;
						var side = $elm$core$Basics$sqrt(area_);
						var rotation = 'rotate(45 ' + ($elm$core$String$fromFloat(x_) + (' ' + ($elm$core$String$fromFloat(y_) + ')')));
						var toAttrs = function (off) {
							var sideOff = side + off;
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$x(
									$elm$core$String$fromFloat(x_ - (sideOff / 2))),
									$elm$svg$Svg$Attributes$y(
									$elm$core$String$fromFloat(y_ - (sideOff / 2))),
									$elm$svg$Svg$Attributes$width(
									$elm$core$String$fromFloat(sideOff)),
									$elm$svg$Svg$Attributes$height(
									$elm$core$String$fromFloat(sideOff)),
									$elm$svg$Svg$Attributes$transform(rotation)
								]);
						};
						return A3(view, $elm$svg$Svg$rect, config.auraWidth, toAttrs);
					case 'Cross':
						var _v5 = _v0.a;
						var rotation = 'rotate(45 ' + ($elm$core$String$fromFloat(x_) + (' ' + ($elm$core$String$fromFloat(y_) + ')')));
						var toAttrs = function (off) {
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$d(
									A4($author$project$Chart$Svg$plusPath, area_, off, x_, y_)),
									$elm$svg$Svg$Attributes$transform(rotation)
								]);
						};
						return A3(view, $elm$svg$Svg$path, config.auraWidth, toAttrs);
					default:
						var _v6 = _v0.a;
						var toAttrs = function (off) {
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$d(
									A4($author$project$Chart$Svg$plusPath, area_, off, x_, y_))
								]);
						};
						return A3(view, $elm$svg$Svg$path, config.auraWidth, toAttrs);
				}
			}
		}
	});
var $author$project$Chart$Attributes$border = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{border: v});
	});
var $author$project$Chart$Attributes$borderWidth = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{borderWidth: v});
	});
var $author$project$Chart$Item$toBarAttrs = function (bar) {
	return _List_fromArray(
		[
			$author$project$Chart$Attributes$color(bar.color),
			$author$project$Chart$Attributes$roundTop(bar.roundTop),
			$author$project$Chart$Attributes$roundBottom(bar.roundBottom),
			$author$project$Chart$Attributes$border(bar.border),
			$author$project$Chart$Attributes$borderWidth(bar.borderWidth)
		]);
};
var $author$project$Chart$Attributes$aura = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{aura: v});
	});
var $author$project$Chart$Attributes$auraWidth = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{auraWidth: v});
	});
var $author$project$Chart$Attributes$opacity = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{opacity: v});
	});
var $author$project$Chart$Attributes$shape = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{shape: v});
	});
var $author$project$Chart$Attributes$size = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{size: v});
	});
var $author$project$Chart$Item$toDotAttrs = function (dot) {
	return _List_fromArray(
		[
			$author$project$Chart$Attributes$color(dot.color),
			$author$project$Chart$Attributes$opacity(dot.opacity),
			$author$project$Chart$Attributes$size(dot.size),
			$author$project$Chart$Attributes$border(dot.border),
			$author$project$Chart$Attributes$borderWidth(dot.borderWidth),
			$author$project$Chart$Attributes$aura(dot.aura),
			$author$project$Chart$Attributes$auraWidth(dot.auraWidth),
			$author$project$Chart$Attributes$shape(dot.shape)
		]);
};
var $author$project$Chart$Item$toGeneral = F2(
	function (generalize, _v0) {
		var product = _v0.a;
		return $author$project$Chart$Item$Item(
			{
				details: {
					config: {
						border: product.details.config.border,
						borderWidth: product.details.config.borderWidth,
						color: product.details.config.color,
						real: generalize(product.details.config)
					},
					datum: product.details.datum,
					name: product.details.name,
					property: product.details.property,
					stack: product.details.stack,
					x1: product.details.x1,
					x2: product.details.x2,
					y: product.details.y
				},
				limits: function (_v1) {
					return product.limits(product.details);
				},
				position: F2(
					function (plane, _v2) {
						return A2(product.position, plane, product.details);
					}),
				render: F3(
					function (plane, details, position) {
						var _v3 = details.y;
						if (_v3.$ === 'Nothing') {
							return $elm$svg$Svg$text('');
						} else {
							var y = _v3.a;
							var _v4 = details.config.real;
							if (_v4.$ === 'BarConfig') {
								var bar = _v4.a;
								return A3(
									$author$project$Chart$Svg$bar,
									plane,
									$author$project$Chart$Item$toBarAttrs(bar),
									position);
							} else {
								var dot = _v4.a;
								return A5(
									$author$project$Chart$Svg$dot,
									plane,
									function ($) {
										return $.x;
									},
									function ($) {
										return $.y;
									},
									$author$project$Chart$Item$toDotAttrs(dot),
									{x: details.x1, y: y});
							}
						}
					})
			});
	});
var $author$project$Chart$bars = F3(
	function (edits, properties, data) {
		var items = A3($author$project$Chart$Item$toBarSeries, edits, properties, data);
		var generalized = A2(
			$elm$core$List$map,
			$author$project$Chart$Item$toGeneral($author$project$Chart$Item$BarConfig),
			A2($elm$core$List$concatMap, $author$project$Chart$Item$getProducts, items));
		var bins = A2(
			$author$project$Chart$Item$groupBy,
			$author$project$Chart$Item$isSameBin,
			A2($elm$core$List$concatMap, $author$project$Chart$Item$getProducts, items));
		var toLimits = A2($elm$core$List$map, $author$project$Chart$Item$getLimits, bins);
		var toTicks = F2(
			function (plane, acc) {
				return _Utils_update(
					acc,
					{
						xs: A2(
							$elm$core$List$concatMap,
							function (i) {
								return _List_fromArray(
									[
										A2($author$project$Chart$Item$getX1, plane, i),
										A2($author$project$Chart$Item$getX2, plane, i)
									]);
							},
							bins)
					});
			});
		return A4(
			$author$project$Chart$BarsElement,
			toLimits,
			generalized,
			toTicks,
			function (plane) {
				return A2(
					$elm$svg$Svg$map,
					$elm$core$Basics$never,
					A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$class('elm-charts__bar-series')
							]),
						A2(
							$elm$core$List$map,
							$author$project$Chart$Item$render(plane),
							items)));
			});
	});
var $author$project$Chart$Svg$Event = F2(
	function (name, handler) {
		return {handler: handler, name: name};
	});
var $author$project$Chart$applyAttrs = F2(
	function (funcs, _default) {
		var apply = F2(
			function (f, a) {
				return f(a);
			});
		return A3($elm$core$List$foldl, apply, _default, funcs);
	});
var $author$project$Chart$Attributes$attrs = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{attrs: v});
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $debois$elm_dom$DOM$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetWidth = A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$float);
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map4 = _Json_map4;
var $debois$elm_dom$DOM$offsetLeft = A2($elm$json$Json$Decode$field, 'offsetLeft', $elm$json$Json$Decode$float);
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $debois$elm_dom$DOM$offsetParent = F2(
	function (x, decoder) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$field,
					'offsetParent',
					$elm$json$Json$Decode$null(x)),
					A2($elm$json$Json$Decode$field, 'offsetParent', decoder)
				]));
	});
var $debois$elm_dom$DOM$offsetTop = A2($elm$json$Json$Decode$field, 'offsetTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollLeft = A2($elm$json$Json$Decode$field, 'scrollLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollTop = A2($elm$json$Json$Decode$field, 'scrollTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$position = F2(
	function (x, y) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (_v0) {
				var x_ = _v0.a;
				var y_ = _v0.b;
				return A2(
					$debois$elm_dom$DOM$offsetParent,
					_Utils_Tuple2(x_, y_),
					A2($debois$elm_dom$DOM$position, x_, y_));
			},
			A5(
				$elm$json$Json$Decode$map4,
				F4(
					function (scrollLeftP, scrollTopP, offsetLeftP, offsetTopP) {
						return _Utils_Tuple2((x + offsetLeftP) - scrollLeftP, (y + offsetTopP) - scrollTopP);
					}),
				$debois$elm_dom$DOM$scrollLeft,
				$debois$elm_dom$DOM$scrollTop,
				$debois$elm_dom$DOM$offsetLeft,
				$debois$elm_dom$DOM$offsetTop));
	});
var $debois$elm_dom$DOM$boundingClientRect = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (_v0, width, height) {
			var x = _v0.a;
			var y = _v0.b;
			return {height: height, left: x, top: y, width: width};
		}),
	A2($debois$elm_dom$DOM$position, 0, 0),
	$debois$elm_dom$DOM$offsetWidth,
	$debois$elm_dom$DOM$offsetHeight);
var $elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		$elm$json$Json$Decode$andThen,
		thunk,
		$elm$json$Json$Decode$succeed(_Utils_Tuple0));
};
var $debois$elm_dom$DOM$parentElement = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'parentElement', decoder);
};
function $author$project$Chart$Svg$cyclic$decodePosition() {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$debois$elm_dom$DOM$boundingClientRect,
				$elm$json$Json$Decode$lazy(
				function (_v0) {
					return $debois$elm_dom$DOM$parentElement(
						$author$project$Chart$Svg$cyclic$decodePosition());
				})
			]));
}
try {
	var $author$project$Chart$Svg$decodePosition = $author$project$Chart$Svg$cyclic$decodePosition();
	$author$project$Chart$Svg$cyclic$decodePosition = function () {
		return $author$project$Chart$Svg$decodePosition;
	};
} catch ($) {
	throw 'Some top-level definitions from `Chart.Svg` are causing infinite recursion:\n\n  ┌─────┐\n  │    decodePosition\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $debois$elm_dom$DOM$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $author$project$Chart$Svg$decoder = F2(
	function (plane, toMsg) {
		var handle = F3(
			function (mouseX, mouseY, box) {
				var yPrev = plane.y;
				var xPrev = plane.x;
				var widthPercent = box.width / plane.width;
				var heightPercent = box.height / plane.height;
				var newPlane = _Utils_update(
					plane,
					{
						height: box.height,
						margin: {bottom: plane.margin.bottom * heightPercent, left: plane.margin.left * widthPercent, right: plane.margin.right * widthPercent, top: plane.margin.top * heightPercent},
						width: box.width
					});
				return A2(
					toMsg,
					newPlane,
					{x: mouseX - box.left, y: mouseY - box.top});
			});
		return A4(
			$elm$json$Json$Decode$map3,
			handle,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
			$debois$elm_dom$DOM$target($author$project$Chart$Svg$decodePosition));
	});
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$svg$Svg$Events$on = $elm$html$Html$Events$on;
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $author$project$Chart$Svg$container = F5(
	function (plane, edits, below, chartEls, above) {
		var toEvent = function (event) {
			return A2(
				$elm$svg$Svg$Events$on,
				event.name,
				A2($author$project$Chart$Svg$decoder, plane, event.handler));
		};
		var htmlAttrsDef = _List_fromArray(
			[
				$elm$html$Html$Attributes$class('elm-charts__container'),
				A2($elm$html$Html$Attributes$style, 'position', 'relative')
			]);
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{attrs: _List_Nil, events: _List_Nil, htmlAttrs: _List_Nil, responsive: true});
		var htmlAttrsSize = config.responsive ? _List_Nil : _List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'width',
				$elm$core$String$fromFloat(plane.width) + 'px'),
				A2(
				$elm$html$Html$Attributes$style,
				'height',
				$elm$core$String$fromFloat(plane.height) + 'px')
			]);
		var htmlAttrs = _Utils_ap(
			config.htmlAttrs,
			_Utils_ap(htmlAttrsDef, htmlAttrsSize));
		var svgAttrsSize = config.responsive ? _List_fromArray(
			[
				$elm$svg$Svg$Attributes$viewBox(
				'0 0 ' + ($elm$core$String$fromFloat(plane.width) + (' ' + $elm$core$String$fromFloat(plane.height))))
			]) : _List_fromArray(
			[
				$elm$svg$Svg$Attributes$width(
				$elm$core$String$fromFloat(plane.width)),
				$elm$svg$Svg$Attributes$height(
				$elm$core$String$fromFloat(plane.height))
			]);
		var chartPosition = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$x(
				$elm$core$String$fromFloat(plane.margin.left)),
				$elm$svg$Svg$Attributes$y(
				$elm$core$String$fromFloat(plane.margin.top)),
				$elm$svg$Svg$Attributes$width(
				$elm$core$String$fromFloat((plane.width - plane.margin.left) - plane.margin.right)),
				$elm$svg$Svg$Attributes$height(
				$elm$core$String$fromFloat((plane.height - plane.margin.bottom) - plane.margin.top)),
				$elm$svg$Svg$Attributes$fill('transparent')
			]);
		var catcher = A2(
			$elm$svg$Svg$rect,
			_Utils_ap(
				chartPosition,
				A2($elm$core$List$map, toEvent, config.events)),
			_List_Nil);
		var chart = A2(
			$elm$svg$Svg$svg,
			_Utils_ap(svgAttrsSize, config.attrs),
			_Utils_ap(
				chartEls,
				_List_fromArray(
					[catcher])));
		return A2(
			$elm$html$Html$div,
			htmlAttrs,
			_Utils_ap(
				below,
				_Utils_ap(
					_List_fromArray(
						[chart]),
					above)));
	});
var $author$project$Chart$lowest = F3(
	function (x, edit, b) {
		return _Utils_update(
			b,
			{
				min: A3(edit, x, b.min, b.dataMin)
			});
	});
var $author$project$Chart$orLower = F3(
	function (least, real, _v0) {
		return (_Utils_cmp(real, least) > 0) ? least : real;
	});
var $author$project$Chart$definePlane = F2(
	function (config, elements) {
		var toLimit = F2(
			function (min, max) {
				return {dataMax: max, dataMin: min, max: max, min: min};
			});
		var margin = {bottom: config.marginBottom, left: config.marginLeft, right: config.marginRight, top: config.marginTop};
		var fixSingles = function (bs) {
			return _Utils_eq(bs.min, bs.max) ? _Utils_update(
				bs,
				{max: bs.min + 10}) : bs;
		};
		var collectLimits = F2(
			function (el, acc) {
				switch (el.$) {
					case 'SeriesElement':
						var lims = el.a;
						return _Utils_ap(acc, lims);
					case 'BarsElement':
						var lims = el.a;
						return _Utils_ap(acc, lims);
					case 'AxisElement':
						return acc;
					case 'TicksElement':
						return acc;
					case 'TickElement':
						return acc;
					case 'LabelsElement':
						return acc;
					case 'LabelElement':
						return acc;
					case 'GridElement':
						return acc;
					case 'SubElements':
						return acc;
					case 'ListOfElements':
						return acc;
					case 'SvgElement':
						return acc;
					default:
						return acc;
				}
			});
		var limits_ = function (pos) {
			return function (_v2) {
				var x = _v2.x;
				var y = _v2.y;
				return {
					x: fixSingles(x),
					y: fixSingles(y)
				};
			}(
				{
					x: A2(toLimit, pos.x1, pos.x2),
					y: A2(toLimit, pos.y1, pos.y2)
				});
		}(
			A2(
				$author$project$Svg$Coordinates$foldPosition,
				$elm$core$Basics$identity,
				A3($elm$core$List$foldl, collectLimits, _List_Nil, elements)));
		var calcRange = function () {
			var _v1 = config.range;
			if (_v1.$ === 'Just') {
				var edit = _v1.a;
				return edit(limits_.x);
			} else {
				return limits_.x;
			}
		}();
		var calcDomain = function () {
			var _v0 = config.domain;
			if (_v0.$ === 'Just') {
				var edit = _v0.a;
				return edit(limits_.y);
			} else {
				return A3($author$project$Chart$lowest, 0, $author$project$Chart$orLower, limits_.y);
			}
		}();
		var unpadded = {
			height: A2($elm$core$Basics$max, 1, (config.height - config.paddingBottom) - config.paddingTop),
			margin: margin,
			width: A2($elm$core$Basics$max, 1, (config.width - config.paddingLeft) - config.paddingRight),
			x: calcRange,
			y: calcDomain
		};
		var scalePadX = $author$project$Svg$Coordinates$scaleCartesianX(unpadded);
		var scalePadY = $author$project$Svg$Coordinates$scaleCartesianY(unpadded);
		return {
			height: config.height,
			margin: margin,
			width: config.width,
			x: _Utils_update(
				calcRange,
				{
					max: calcRange.max + scalePadX(config.paddingRight),
					min: calcRange.min - scalePadX(config.paddingLeft)
				}),
			y: _Utils_update(
				calcDomain,
				{
					max: calcDomain.max + scalePadY(config.paddingTop),
					min: calcDomain.min - scalePadY(config.paddingBottom)
				})
		};
	});
var $author$project$Chart$Attributes$events = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{events: v});
	});
var $author$project$Chart$getItems = F2(
	function (plane, elements) {
		var toItems = F2(
			function (el, acc) {
				switch (el.$) {
					case 'SeriesElement':
						var items = el.b;
						return _Utils_ap(acc, items);
					case 'BarsElement':
						var items = el.b;
						return _Utils_ap(acc, items);
					case 'AxisElement':
						return acc;
					case 'TicksElement':
						return acc;
					case 'TickElement':
						return acc;
					case 'LabelsElement':
						return acc;
					case 'LabelElement':
						return acc;
					case 'GridElement':
						return acc;
					case 'SubElements':
						return acc;
					case 'ListOfElements':
						return acc;
					case 'SvgElement':
						return acc;
					default:
						return acc;
				}
			});
		return A3($elm$core$List$foldl, toItems, _List_Nil, elements);
	});
var $author$project$Chart$TickValues = F2(
	function (xs, ys) {
		return {xs: xs, ys: ys};
	});
var $author$project$Chart$getTickValues = F3(
	function (plane, items, elements) {
		var toValues = F2(
			function (el, acc) {
				switch (el.$) {
					case 'SeriesElement':
						return acc;
					case 'BarsElement':
						var func = el.c;
						return A2(func, plane, acc);
					case 'AxisElement':
						return acc;
					case 'TicksElement':
						var func = el.a;
						return A2(func, plane, acc);
					case 'TickElement':
						var toC = el.a;
						var func = el.b;
						return A3(
							func,
							plane,
							toC(plane),
							acc);
					case 'LabelsElement':
						var toC = el.a;
						var func = el.b;
						return A3(
							func,
							plane,
							toC(plane),
							acc);
					case 'LabelElement':
						var toC = el.a;
						var func = el.b;
						return A3(
							func,
							plane,
							toC(plane),
							acc);
					case 'GridElement':
						return acc;
					case 'SubElements':
						var func = el.a;
						return A3(
							$elm$core$List$foldl,
							toValues,
							acc,
							A2(func, plane, items));
					case 'ListOfElements':
						return acc;
					case 'SvgElement':
						return acc;
					default:
						return acc;
				}
			});
		return A3(
			$elm$core$List$foldl,
			toValues,
			A2($author$project$Chart$TickValues, _List_Nil, _List_Nil),
			elements);
	});
var $author$project$Chart$Attributes$htmlAttrs = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{htmlAttrs: v});
	});
var $author$project$Chart$Attributes$static = function (config) {
	return _Utils_update(
		config,
		{responsive: false});
};
var $author$project$Chart$viewElements = F5(
	function (config, plane, tickValues, allItems, elements) {
		var viewOne = F2(
			function (el, _v0) {
				var before = _v0.a;
				var chart_ = _v0.b;
				var after = _v0.c;
				switch (el.$) {
					case 'SeriesElement':
						var view = el.c;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'BarsElement':
						var view = el.d;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'AxisElement':
						var view = el.a;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'TicksElement':
						var view = el.b;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'TickElement':
						var toC = el.a;
						var view = el.c;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								A2(
									view,
									plane,
									toC(plane)),
								chart_),
							after);
					case 'LabelsElement':
						var toC = el.a;
						var view = el.c;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								A2(
									view,
									plane,
									toC(plane)),
								chart_),
							after);
					case 'LabelElement':
						var toC = el.a;
						var view = el.c;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								A2(
									view,
									plane,
									toC(plane)),
								chart_),
							after);
					case 'GridElement':
						var view = el.a;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								A2(view, plane, tickValues),
								chart_),
							after);
					case 'SubElements':
						var func = el.a;
						return A3(
							$elm$core$List$foldr,
							viewOne,
							_Utils_Tuple3(before, chart_, after),
							A2(func, plane, allItems));
					case 'ListOfElements':
						var els = el.a;
						return A3(
							$elm$core$List$foldr,
							viewOne,
							_Utils_Tuple3(before, chart_, after),
							els);
					case 'SvgElement':
						var view = el.a;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					default:
						var view = el.a;
						return _Utils_Tuple3(
							($elm$core$List$length(chart_) > 0) ? before : A2(
								$elm$core$List$cons,
								view(plane),
								before),
							chart_,
							($elm$core$List$length(chart_) > 0) ? A2(
								$elm$core$List$cons,
								view(plane),
								after) : after);
				}
			});
		return A3(
			$elm$core$List$foldr,
			viewOne,
			_Utils_Tuple3(_List_Nil, _List_Nil, _List_Nil),
			elements);
	});
var $author$project$Chart$chart = F2(
	function (edits, elements) {
		var config = A2(
			$author$project$Chart$applyAttrs,
			edits,
			{
				attrs: _List_fromArray(
					[
						$elm$svg$Svg$Attributes$style('overflow: visible;')
					]),
				domain: $elm$core$Maybe$Nothing,
				events: _List_Nil,
				height: 200,
				htmlAttrs: _List_Nil,
				marginBottom: 0,
				marginLeft: 0,
				marginRight: 0,
				marginTop: 0,
				paddingBottom: 0,
				paddingLeft: 0,
				paddingRight: 10,
				paddingTop: 10,
				range: $elm$core$Maybe$Nothing,
				responsive: true,
				width: 500
			});
		var plane = A2($author$project$Chart$definePlane, config, elements);
		var items = A2($author$project$Chart$getItems, plane, elements);
		var toEvent = function (_v2) {
			var event_ = _v2.a;
			var _v1 = event_.decoder;
			var decoder = _v1.a;
			return A2(
				$author$project$Chart$Svg$Event,
				event_.name,
				decoder(items));
		};
		var tickValues = A3($author$project$Chart$getTickValues, plane, items, elements);
		var _v0 = A5($author$project$Chart$viewElements, config, plane, tickValues, items, elements);
		var beforeEls = _v0.a;
		var chartEls = _v0.b;
		var afterEls = _v0.c;
		return A5(
			$author$project$Chart$Svg$container,
			plane,
			_List_fromArray(
				[
					$author$project$Chart$Attributes$attrs(config.attrs),
					$author$project$Chart$Attributes$htmlAttrs(config.htmlAttrs),
					config.responsive ? $elm$core$Basics$identity : $author$project$Chart$Attributes$static,
					$author$project$Chart$Attributes$events(
					A2($elm$core$List$map, toEvent, config.events))
				]),
			beforeEls,
			chartEls,
			afterEls);
	});
var $author$project$Section$BarChart$Datum = F9(
	function (x, x1, x2, y, z, v, w, p, q) {
		return {p: p, q: q, v: v, w: w, x: x, x1: x1, x2: x2, y: y, z: z};
	});
var $author$project$Section$BarChart$data = function () {
	var toDatum = F8(
		function (x, x1, y, z, v, w, p, q) {
			return A9(
				$author$project$Section$BarChart$Datum,
				x,
				x1,
				x1,
				$elm$core$Maybe$Just(y),
				$elm$core$Maybe$Just(z),
				$elm$core$Maybe$Just(v),
				$elm$core$Maybe$Just(w),
				$elm$core$Maybe$Just(p),
				$elm$core$Maybe$Just(q));
		});
	return _List_fromArray(
		[
			A8(toDatum, 0.0, 0.0, 1.2, 4.0, 4.6, 6.9, 7.3, 8.0),
			A8(toDatum, 1.0, 0.4, 2.2, 4.2, 5.3, 5.7, 6.2, 7.8),
			A8(toDatum, 2.0, 0.6, 1.0, 3.2, 4.8, 5.4, 7.2, 8.3),
			A8(toDatum, 3.0, 0.8, 2.3, 3.6, 5.8, 4.6, 6.5, 6.9),
			A8(toDatum, 4.0, 1.1, 1.0, 4.2, 4.5, 5.3, 6.3, 7.0)
		]);
}();
var $author$project$Chart$Attributes$Dotted = function (a) {
	return {$: 'Dotted', a: a};
};
var $author$project$Chart$Attributes$dotted = F2(
	function (attrs_, config) {
		return _Utils_update(
			config,
			{
				design: $elm$core$Maybe$Just(
					$author$project$Chart$Attributes$Dotted(attrs_)),
				opacity: (!config.opacity) ? 1 : config.opacity
			});
	});
var $author$project$Chart$GridElement = function (a) {
	return {$: 'GridElement', a: a};
};
var $author$project$Chart$Attributes$Circle = {$: 'Circle'};
var $author$project$Chart$Attributes$circle = function (config) {
	return _Utils_update(
		config,
		{
			shape: $elm$core$Maybe$Just($author$project$Chart$Attributes$Circle)
		});
};
var $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var $author$project$Chart$Svg$line = F2(
	function (plane, edits) {
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{_break: false, color: 'rgb(210, 210, 210)', dashed: _List_Nil, opacity: 1, width: 1, x1: $elm$core$Maybe$Nothing, x2: $elm$core$Maybe$Nothing, y1: $elm$core$Maybe$Nothing, y2: $elm$core$Maybe$Nothing});
		var _v0 = function () {
			var _v3 = _Utils_Tuple2(
				_Utils_Tuple2(config.x1, config.x2),
				_Utils_Tuple2(config.y1, config.y2));
			_v3$11:
			while (true) {
				if (_v3.a.a.$ === 'Just') {
					if (_v3.a.b.$ === 'Nothing') {
						if (_v3.b.a.$ === 'Nothing') {
							if (_v3.b.b.$ === 'Nothing') {
								var _v8 = _v3.a;
								var a = _v8.a.a;
								var _v9 = _v8.b;
								var _v10 = _v3.b;
								var _v11 = _v10.a;
								var _v12 = _v10.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(a, a),
									_Utils_Tuple2(plane.y.min, plane.y.max));
							} else {
								break _v3$11;
							}
						} else {
							if (_v3.b.b.$ === 'Just') {
								var _v35 = _v3.a;
								var c = _v35.a.a;
								var _v36 = _v35.b;
								var _v37 = _v3.b;
								var a = _v37.a.a;
								var b = _v37.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(c, c),
									_Utils_Tuple2(a, b));
							} else {
								break _v3$11;
							}
						}
					} else {
						if (_v3.b.a.$ === 'Nothing') {
							if (_v3.b.b.$ === 'Nothing') {
								var _v4 = _v3.a;
								var a = _v4.a.a;
								var b = _v4.b.a;
								var _v5 = _v3.b;
								var _v6 = _v5.a;
								var _v7 = _v5.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(a, b),
									_Utils_Tuple2(plane.y.min, plane.y.min));
							} else {
								var _v38 = _v3.a;
								var a = _v38.a.a;
								var b = _v38.b.a;
								var _v39 = _v3.b;
								var _v40 = _v39.a;
								var c = _v39.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(a, b),
									_Utils_Tuple2(c, c));
							}
						} else {
							if (_v3.b.b.$ === 'Nothing') {
								var _v41 = _v3.a;
								var a = _v41.a.a;
								var b = _v41.b.a;
								var _v42 = _v3.b;
								var c = _v42.a.a;
								var _v43 = _v42.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(a, b),
									_Utils_Tuple2(c, c));
							} else {
								break _v3$11;
							}
						}
					}
				} else {
					if (_v3.a.b.$ === 'Just') {
						if (_v3.b.a.$ === 'Nothing') {
							if (_v3.b.b.$ === 'Nothing') {
								var _v13 = _v3.a;
								var _v14 = _v13.a;
								var b = _v13.b.a;
								var _v15 = _v3.b;
								var _v16 = _v15.a;
								var _v17 = _v15.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(b, b),
									_Utils_Tuple2(plane.y.min, plane.y.max));
							} else {
								break _v3$11;
							}
						} else {
							if (_v3.b.b.$ === 'Just') {
								var _v32 = _v3.a;
								var _v33 = _v32.a;
								var c = _v32.b.a;
								var _v34 = _v3.b;
								var a = _v34.a.a;
								var b = _v34.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(c, c),
									_Utils_Tuple2(a, b));
							} else {
								break _v3$11;
							}
						}
					} else {
						if (_v3.b.a.$ === 'Just') {
							if (_v3.b.b.$ === 'Just') {
								var _v18 = _v3.a;
								var _v19 = _v18.a;
								var _v20 = _v18.b;
								var _v21 = _v3.b;
								var a = _v21.a.a;
								var b = _v21.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(plane.x.min, plane.x.min),
									_Utils_Tuple2(a, b));
							} else {
								var _v22 = _v3.a;
								var _v23 = _v22.a;
								var _v24 = _v22.b;
								var _v25 = _v3.b;
								var a = _v25.a.a;
								var _v26 = _v25.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(plane.x.min, plane.x.max),
									_Utils_Tuple2(a, a));
							}
						} else {
							if (_v3.b.b.$ === 'Just') {
								var _v27 = _v3.a;
								var _v28 = _v27.a;
								var _v29 = _v27.b;
								var _v30 = _v3.b;
								var _v31 = _v30.a;
								var b = _v30.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(plane.x.min, plane.x.max),
									_Utils_Tuple2(b, b));
							} else {
								var _v44 = _v3.a;
								var _v45 = _v44.a;
								var _v46 = _v44.b;
								var _v47 = _v3.b;
								var _v48 = _v47.a;
								var _v49 = _v47.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(plane.x.min, plane.x.max),
									_Utils_Tuple2(plane.y.min, plane.y.max));
							}
						}
					}
				}
			}
			return _Utils_Tuple2(
				_Utils_Tuple2(
					A2($elm$core$Maybe$withDefault, plane.x.min, config.x1),
					A2($elm$core$Maybe$withDefault, plane.x.max, config.x2)),
				_Utils_Tuple2(
					A2($elm$core$Maybe$withDefault, plane.y.min, config.y1),
					A2($elm$core$Maybe$withDefault, plane.y.max, config.y2)));
		}();
		var _v1 = _v0.a;
		var x1_ = _v1.a;
		var x2_ = _v1.b;
		var _v2 = _v0.b;
		var y1_ = _v2.a;
		var y2_ = _v2.b;
		var cmds = _Utils_ap(
			_List_fromArray(
				[
					A2($author$project$Svg$Commands$Move, x1_, y1_),
					A2($author$project$Svg$Commands$Line, x1_, y1_)
				]),
			config._break ? _List_fromArray(
				[
					A2($author$project$Svg$Commands$Line, x1_, y2_),
					A2($author$project$Svg$Commands$Line, x2_, y2_)
				]) : _List_fromArray(
				[
					A2($author$project$Svg$Commands$Line, x2_, y2_)
				]));
		return A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-charts__line'),
					$elm$svg$Svg$Attributes$fill('transparent'),
					$elm$svg$Svg$Attributes$stroke(config.color),
					$elm$svg$Svg$Attributes$strokeWidth(
					$elm$core$String$fromFloat(config.width)),
					$elm$svg$Svg$Attributes$strokeOpacity(
					$elm$core$String$fromFloat(config.opacity)),
					$elm$svg$Svg$Attributes$strokeDasharray(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, $elm$core$String$fromFloat, config.dashed))),
					$elm$svg$Svg$Attributes$d(
					A2($author$project$Svg$Commands$description, plane, cmds))
				]),
			_List_Nil);
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$Chart$Attributes$width = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{width: v});
	});
var $author$project$Chart$Attributes$x1 = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				x1: $elm$core$Maybe$Just(v)
			});
	});
var $author$project$Chart$Attributes$y1 = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				y1: $elm$core$Maybe$Just(v)
			});
	});
var $author$project$Chart$zero = function (b) {
	return A3($elm$core$Basics$clamp, b.min, b.max, 0);
};
var $author$project$Chart$grid = function (edits) {
	var config = A2(
		$author$project$Chart$applyAttrs,
		edits,
		{
			color: '#EFF2FA',
			dotted: false,
			filterX: A2($elm$core$Basics$composeR, $author$project$Chart$zero, $elm$core$List$singleton),
			filterY: A2($elm$core$Basics$composeR, $author$project$Chart$zero, $elm$core$List$singleton),
			width: 1
		});
	var notTheseX = function (p) {
		return config.filterX(p.x);
	};
	var notTheseY = function (p) {
		return config.filterY(p.y);
	};
	var toDot = F3(
		function (p, x, y) {
			return (A2(
				$elm$core$List$member,
				x,
				notTheseX(p)) || A2(
				$elm$core$List$member,
				y,
				notTheseY(p))) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A5(
					$author$project$Chart$Svg$dot,
					p,
					function ($) {
						return $.x;
					},
					function ($) {
						return $.y;
					},
					_List_fromArray(
						[
							$author$project$Chart$Attributes$color(config.color),
							$author$project$Chart$Attributes$size(config.width),
							$author$project$Chart$Attributes$circle
						]),
					{x: x, y: y}));
		});
	var toXGrid = F2(
		function (p, v) {
			return A2(
				$elm$core$List$member,
				v,
				notTheseX(p)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A2(
					$author$project$Chart$Svg$line,
					p,
					_List_fromArray(
						[
							$author$project$Chart$Attributes$color(config.color),
							$author$project$Chart$Attributes$width(config.width),
							$author$project$Chart$Attributes$x1(v)
						])));
		});
	var toYGrid = F2(
		function (p, v) {
			return A2(
				$elm$core$List$member,
				v,
				notTheseY(p)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A2(
					$author$project$Chart$Svg$line,
					p,
					_List_fromArray(
						[
							$author$project$Chart$Attributes$color(config.color),
							$author$project$Chart$Attributes$width(config.width),
							$author$project$Chart$Attributes$y1(v)
						])));
		});
	return $author$project$Chart$GridElement(
		F2(
			function (p, vs) {
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__grid')
						]),
					config.dotted ? A2(
						$elm$core$List$concatMap,
						function (x) {
							return A2(
								$elm$core$List$filterMap,
								A2(toDot, p, x),
								vs.ys);
						},
						vs.xs) : _List_fromArray(
						[
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$class('elm-charts__x-grid')
								]),
							A2(
								$elm$core$List$filterMap,
								toXGrid(p),
								vs.xs)),
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$class('elm-charts__y-grid')
								]),
							A2(
								$elm$core$List$filterMap,
								toYGrid(p),
								vs.ys))
						]));
			}));
};
var $author$project$Chart$Attributes$height = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{height: v});
	});
var $author$project$Chart$Attributes$margin = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{margin: v});
	});
var $author$project$Chart$Attributes$spacing = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{spacing: v});
	});
var $author$project$Internal$Property$Stacked = function (a) {
	return {$: 'Stacked', a: a};
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $author$project$Internal$Property$stacked = function (properties) {
	var toVisual = F2(
		function (toYs_, datum) {
			var vs = A2(
				$elm$core$List$filterMap,
				function (toY) {
					return toY(datum);
				},
				toYs_);
			return (!_Utils_eq(
				$elm$core$List$length(vs),
				$elm$core$List$length(toYs_))) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				$elm$core$List$sum(vs));
		});
	var stack = F3(
		function (list, prev, result) {
			stack:
			while (true) {
				if (list.b) {
					var one = list.a;
					var rest = list.b;
					var toYs_ = A2($elm$core$List$cons, one.value, prev);
					var $temp$list = rest,
						$temp$prev = toYs_,
						$temp$result = A2(
						$elm$core$List$cons,
						_Utils_update(
							one,
							{
								visual: toVisual(toYs_)
							}),
						result);
					list = $temp$list;
					prev = $temp$prev;
					result = $temp$result;
					continue stack;
				} else {
					return result;
				}
			}
		});
	var configs = A2(
		$elm$core$List$concatMap,
		$author$project$Internal$Property$toConfigs,
		$elm$core$List$reverse(properties));
	return $author$project$Internal$Property$Stacked(
		A3(stack, configs, _List_Nil, _List_Nil));
};
var $author$project$Chart$stacked = $author$project$Internal$Property$stacked;
var $author$project$Chart$Attributes$Striped = function (a) {
	return {$: 'Striped', a: a};
};
var $author$project$Chart$Attributes$striped = F2(
	function (attrs_, config) {
		return _Utils_update(
			config,
			{
				design: $elm$core$Maybe$Just(
					$author$project$Chart$Attributes$Striped(attrs_)),
				opacity: (!config.opacity) ? 1 : config.opacity
			});
	});
var $author$project$Chart$Attributes$ungroup = function (config) {
	return _Utils_update(
		config,
		{grouped: false});
};
var $author$project$Internal$Property$variation = F2(
	function (attrs, prop) {
		if (prop.$ === 'Property') {
			var c = prop.a;
			return $author$project$Internal$Property$Property(
				_Utils_update(
					c,
					{extra: attrs}));
		} else {
			var cs = prop.a;
			return $author$project$Internal$Property$Stacked(
				A2(
					$elm$core$List$map,
					function (c) {
						return _Utils_update(
							c,
							{extra: attrs});
					},
					cs));
		}
	});
var $author$project$Chart$variation = $author$project$Internal$Property$variation;
var $author$project$Ui$Section$Configuration = F3(
	function (title, code, chart) {
		return {chart: chart, code: code, title: title};
	});
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 'Button'};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 'NoAttribute'};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 'StyleClass') && (attr.b.$ === 'PseudoSelector')) && (attr.b.a.$ === 'Focus')) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 'Nothing') {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorPointer);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.onPress;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.seButton + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.noTextSelection)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 'Nothing') {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode = function (a) {
	return {$: 'HCode', a: a};
};
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1 = {$: 'Style1'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2 = {$: 'Style2'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3 = {$: 'Style3'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4 = {$: 'Style4'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5 = {$: 'Style5'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6 = {$: 'Style6'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'elm-s');
		case 'BasicSymbol':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'elm-bs');
		case 'GroupSymbol':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'elm-gs');
		case 'Capitalized':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6, 'elm-c');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'elm-k');
		case 'Function':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'elm-f');
		case 'TypeSignature':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'elm-ts');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'elm-n');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine = function (fragments) {
	return {fragments: fragments, highlight: $elm$core$Maybe$Nothing};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak = {$: 'LineBreak'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Comment = {$: 'Comment'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default = {$: 'Default'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment = F2(
	function (toStyle, _v0) {
		var syntax = _v0.a;
		var text = _v0.b;
		switch (syntax.$) {
			case 'Normal':
				return {additionalClass: '', requiredStyle: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, text: text};
			case 'Comment':
				return {additionalClass: '', requiredStyle: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Comment, text: text};
			case 'LineBreak':
				return {additionalClass: '', requiredStyle: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, text: text};
			default:
				var c = syntax.a;
				var _v2 = toStyle(c);
				var requiredStyle = _v2.a;
				var additionalClass = _v2.b;
				return {additionalClass: additionalClass, requiredStyle: requiredStyle, text: text};
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLinesHelp = F3(
	function (toStyle, _v0, _v1) {
		var syntax = _v0.a;
		var text = _v0.b;
		var lines = _v1.a;
		var fragments = _v1.b;
		var maybeLastSyntax = _v1.c;
		if (_Utils_eq(syntax, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak)) {
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine(fragments),
					lines),
				_List_fromArray(
					[
						A2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
						toStyle,
						_Utils_Tuple2(syntax, text))
					]),
				$elm$core$Maybe$Nothing);
		} else {
			if (_Utils_eq(
				$elm$core$Maybe$Just(syntax),
				maybeLastSyntax)) {
				if (fragments.b) {
					var headFrag = fragments.a;
					var tailFrags = fragments.b;
					return _Utils_Tuple3(
						lines,
						A2(
							$elm$core$List$cons,
							_Utils_update(
								headFrag,
								{
									text: _Utils_ap(text, headFrag.text)
								}),
							tailFrags),
						maybeLastSyntax);
				} else {
					return _Utils_Tuple3(
						lines,
						A2(
							$elm$core$List$cons,
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
								toStyle,
								_Utils_Tuple2(syntax, text)),
							fragments),
						maybeLastSyntax);
				}
			} else {
				return _Utils_Tuple3(
					lines,
					A2(
						$elm$core$List$cons,
						A2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
							toStyle,
							_Utils_Tuple2(syntax, text)),
						fragments),
					$elm$core$Maybe$Just(syntax));
			}
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines = F2(
	function (toStyle, revTokens) {
		return function (_v0) {
			var lines = _v0.a;
			var frags = _v0.b;
			return A2(
				$elm$core$List$cons,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine(frags),
				lines);
		}(
			A3(
				$elm$core$List$foldl,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLinesHelp(toStyle),
				_Utils_Tuple3(_List_Nil, _List_Nil, $elm$core$Maybe$Nothing),
				revTokens));
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment = {$: 'Comment'};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\n'));
};
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile = F2(
	function (isNotRelevant, previousParser) {
		return A2(
			$elm$parser$Parser$ignorer,
			previousParser,
			$elm$parser$Parser$chompWhile(isNotRelevant));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$inlineComment = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b)
			]);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak),
			$elm$parser$Parser$symbol('--'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen = F3(
	function (f, list, plist) {
		return A2(
			$elm$parser$Parser$andThen,
			function (n) {
				return f(
					_Utils_ap(n, list));
			},
			plist);
	});
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen = F3(
	function (f, list, pn) {
		return A2(
			$elm$parser$Parser$andThen,
			function (n) {
				return f(
					A2($elm$core$List$cons, n, list));
			},
			pn);
	});
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable = F2(
	function (options, revAList) {
		var defaultMap = options.defaultMap;
		var isNotRelevant = options.isNotRelevant;
		var end = options.end;
		var innerParsers = options.innerParsers;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							defaultMap(end),
							revAList)),
					$elm$parser$Parser$symbol(end)),
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(revAList),
					$elm$parser$Parser$end),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					$elm$parser$Parser$oneOf(innerParsers)),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$always(true))))))
				]));
	});
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable = F3(
	function (nestLevel, options, revAList) {
		var defaultMap = options.defaultMap;
		var isNotRelevant = options.isNotRelevant;
		var start = options.start;
		var end = options.end;
		var innerParsers = options.innerParsers;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return (nestLevel === 1) ? $elm$parser$Parser$succeed(n) : A3($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel - 1, options, n);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								defaultMap(end),
								revAList)),
						$elm$parser$Parser$symbol(end))),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel + 1, options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$symbol(start))))),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					$elm$parser$Parser$oneOf(innerParsers)),
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(revAList),
					$elm$parser$Parser$end),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel, options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$always(true))))))
				]));
	});
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedHelp = F2(
	function (options, revAList) {
		var start = options.start;
		var end = options.end;
		var isNotRelevant = options.isNotRelevant;
		var _v0 = _Utils_Tuple2(
			$elm$core$String$uncons(options.start),
			$elm$core$String$uncons(options.end));
		if (_v0.a.$ === 'Nothing') {
			var _v1 = _v0.a;
			return $elm$parser$Parser$problem('Trying to parse a delimited helper, but the start token cannot be an empty string!');
		} else {
			if (_v0.b.$ === 'Nothing') {
				var _v2 = _v0.b;
				return $elm$parser$Parser$problem('Trying to parse a delimited helper, but the end token cannot be an empty string!');
			} else {
				var _v3 = _v0.a.a;
				var startChar = _v3.a;
				var _v4 = _v0.b.a;
				var endChar = _v4.a;
				return options.isNestable ? A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable,
					1,
					_Utils_update(
						options,
						{
							isNotRelevant: function (c) {
								return isNotRelevant(c) && ((!_Utils_eq(c, startChar)) && (!_Utils_eq(c, endChar)));
							}
						}),
					revAList) : A2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable,
					_Utils_update(
						options,
						{
							isNotRelevant: function (c) {
								return isNotRelevant(c) && (!_Utils_eq(c, endChar));
							}
						}),
					revAList);
			}
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited = function (options) {
	var start = options.start;
	var isNotRelevant = options.isNotRelevant;
	var defaultMap = options.defaultMap;
	return A2(
		$elm$parser$Parser$andThen,
		function (n) {
			return A2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedHelp,
				options,
				_List_fromArray(
					[n]));
		},
		A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				defaultMap(start)),
			$elm$parser$Parser$symbol(start)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n')
			]);
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$multilineComment = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	{
		defaultMap: function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
		},
		end: '-}',
		innerParsers: _List_fromArray(
			[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList]),
		isNestable: true,
		isNotRelevant: function (c) {
			return !$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
		},
		start: '{-'
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$inlineComment, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$multilineComment]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol = {$: 'BasicSymbol'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C = function (a) {
	return {$: 'C', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized = {$: 'Capitalized'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$GroupSymbol = {$: 'GroupSymbol'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword = {$: 'Keyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal = {$: 'Normal'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Number = {$: 'Number'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile = function (isNotRelevant) {
	return A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf(isNotRelevant)),
		$elm$parser$Parser$chompWhile(isNotRelevant));
};
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbols = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('|'),
			_Utils_chr('.'),
			_Utils_chr('='),
			_Utils_chr('\\'),
			_Utils_chr('/'),
			_Utils_chr('('),
			_Utils_chr(')'),
			_Utils_chr('-'),
			_Utils_chr('>'),
			_Utils_chr('<'),
			_Utils_chr(':'),
			_Utils_chr('+'),
			_Utils_chr('!'),
			_Utils_chr('$'),
			_Utils_chr('%'),
			_Utils_chr('&'),
			_Utils_chr('*')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbols);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbol = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbols = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr(','),
			_Utils_chr('['),
			_Utils_chr(']'),
			_Utils_chr('{'),
			_Utils_chr('}')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbols);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isStringLiteralChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\"')) || _Utils_eq(
		c,
		_Utils_chr('\''));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr(' ')) || _Utils_eq(
		c,
		_Utils_chr('\t'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isStringLiteralChar(c))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$capitalized = $elm$parser$Parser$getChompedString(
	A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar,
		$elm$parser$Parser$chompIf($elm$core$Char$isUpper)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbol = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function = {$: 'Function'};
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('+'),
			_Utils_chr('-'),
			_Utils_chr('/'),
			_Utils_chr('*'),
			_Utils_chr('='),
			_Utils_chr('.'),
			_Utils_chr('$'),
			_Utils_chr('<'),
			_Utils_chr('>'),
			_Utils_chr(':'),
			_Utils_chr('&'),
			_Utils_chr('|'),
			_Utils_chr('^'),
			_Utils_chr('?'),
			_Utils_chr('%'),
			_Utils_chr('#'),
			_Utils_chr('@'),
			_Utils_chr('~'),
			_Utils_chr('!'),
			_Utils_chr(',')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isInfixChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function),
			b);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(_Utils_Tuple0),
					$elm$parser$Parser$backtrackable(
						$elm$parser$Parser$symbol('('))),
				$elm$parser$Parser$backtrackable(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isInfixChar))),
			$elm$parser$Parser$backtrackable(
				$elm$parser$Parser$symbol(')')))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$keywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['as', 'where', 'let', 'in', 'if', 'else', 'then', 'case', 'of', 'type', 'alias']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword = function (str) {
	return A2($elm$core$Set$member, str, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$keywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber = function (c) {
	return $elm$core$Char$isDigit(c) || _Utils_eq(
		c,
		_Utils_chr('.'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber)),
	$elm$parser$Parser$chompWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$negativeNumber = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$symbol('-'))),
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$negativeNumber]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable = $elm$parser$Parser$getChompedString(
	A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar,
		$elm$parser$Parser$chompIf($elm$core$Char$isLower)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$weirdText = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Number),
					b);
			},
			$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number)),
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized),
					'()')),
			$elm$parser$Parser$symbol('()')),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser,
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbol),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$GroupSymbol),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbol),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$capitalized),
			A2(
			$elm$parser$Parser$map,
			function (n) {
				return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword(n) ? _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					n) : _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, n);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$weirdText)
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$String = {$: 'String'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapableSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('\''),
			_Utils_chr('\"'),
			_Utils_chr('\\'),
			_Utils_chr('n'),
			_Utils_chr('r'),
			_Utils_chr('t'),
			_Utils_chr('b'),
			_Utils_chr('f'),
			_Utils_chr('v')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapableChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapableSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$symbol('\\'))),
	$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapableChar));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$elmEscapable = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized),
				b)
			]);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\\'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter = {
	defaultMap: function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$String),
			b);
	},
	end: '\"',
	innerParsers: _List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$elmEscapable]),
	isNestable: false,
	isNotRelevant: function (c) {
		return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
	},
	start: '\"'
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$doubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$quote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter,
		{end: '\'', start: '\''}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$tripleDoubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter,
		{end: '\"\"\"', start: '\"\"\"'}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$tripleDoubleQuote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$doubleQuote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$quote]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n');
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContext = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContext,
				A2(
					$elm$parser$Parser$map,
					function (n) {
						return A2($elm$core$List$cons, n, revTokens);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak)),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature = {$: 'TypeSignature'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || (_Utils_eq(
		c,
		_Utils_chr('(')) || (_Utils_eq(
		c,
		_Utils_chr(')')) || (_Utils_eq(
		c,
		_Utils_chr('-')) || _Utils_eq(
		c,
		_Utils_chr(','))))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContentHelp = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature),
					'()')),
			$elm$parser$Parser$symbol('()')),
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol),
					'->')),
			$elm$parser$Parser$symbol('->')),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$elm$parser$Parser$getChompedString(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
					function (c) {
						return _Utils_eq(
							c,
							_Utils_chr('(')) || (_Utils_eq(
							c,
							_Utils_chr(')')) || (_Utils_eq(
							c,
							_Utils_chr('-')) || _Utils_eq(
							c,
							_Utils_chr(','))));
					}))),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature),
					b);
			},
			$elm$parser$Parser$getChompedString(
				A2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant,
					$elm$parser$Parser$chompIf($elm$core$Char$isUpper)))),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$elm$parser$Parser$getChompedString(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant)))
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContent = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContentHelp),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$andThen,
					function (ns) {
						return A2($elm$parser$Parser$loop, ns, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContent);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol),
									':'),
								revTokens)),
						$elm$parser$Parser$symbol(':')))),
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2($elm$parser$Parser$loop, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('-')) || _Utils_eq(
		c,
		_Utils_chr('{'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar = $elm$parser$Parser$getChompedString(
	$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar));
var $elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 'ExpectingKeyword', a: a};
};
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return (_Utils_eq(newOffset, -1) || (0 <= A3(
				$elm$parser$Parser$Advanced$isSubChar,
				function (c) {
					return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('_'));
				},
				newOffset,
				s.src))) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$keyword = function (kwd) {
	return $elm$parser$Parser$Advanced$keyword(
		A2(
			$elm$parser$Parser$Advanced$Token,
			kwd,
			$elm$parser$Parser$ExpectingKeyword(kwd)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || _Utils_eq(
		c,
		_Utils_chr('('))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || (_Utils_eq(
		c,
		_Utils_chr('(')) || (_Utils_eq(
		c,
		_Utils_chr(')')) || (_Utils_eq(
		c,
		_Utils_chr(',')) || _Utils_eq(
		c,
		_Utils_chr('.')))))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpnIsSpecialChar = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || (_Utils_eq(
		c,
		_Utils_chr('(')) || _Utils_eq(
		c,
		_Utils_chr(')'))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContextNested = function (_v1) {
	var nestLevel = _v1.a;
	var revTokens = _v1.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested(
				_Utils_Tuple2(nestLevel, revTokens)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested = function (_v0) {
	var nestLevel = _v0.a;
	var revTokens = _v0.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens)));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContextNested,
				A2(
					$elm$parser$Parser$map,
					function (n) {
						return _Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens));
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak)),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							_Utils_ap(n, revTokens)));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParNest = function (_v0) {
	var nestLevel = _v0.a;
	var revTokens = _v0.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested(
				_Utils_Tuple2(nestLevel, revTokens)),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(nestLevel + 1, ns));
				},
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
							revTokens)),
					$elm$parser$Parser$symbol('('))),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return (!nestLevel) ? $elm$parser$Parser$Done(ns) : $elm$parser$Parser$Loop(
						_Utils_Tuple2(nestLevel - 1, ns));
				},
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, ')'),
							revTokens)),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens)));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							function (s) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, s);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpnIsSpecialChar))))
						]))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParentheses = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, ')'),
							revTokens)),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser,
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									function (c) {
										return _Utils_eq(
											c,
											_Utils_chr(',')) || _Utils_eq(
											c,
											_Utils_chr('.'));
									}))),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature),
									b);
							},
							$elm$parser$Parser$getChompedString(
								A2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant,
									$elm$parser$Parser$chompIf($elm$core$Char$isUpper)))),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function),
									b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant)))
						]))),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return A2(
							$elm$parser$Parser$loop,
							_Utils_Tuple2(0, n),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParNest);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens)),
						$elm$parser$Parser$symbol('(')))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return A2($elm$parser$Parser$loop, n, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParentheses);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens)),
						$elm$parser$Parser$symbol('(')))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							$elm$core$Basics$always(
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
									'exposing')),
							$elm$parser$Parser$keyword('exposing')),
							A2(
							$elm$parser$Parser$map,
							$elm$core$Basics$always(
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
									'as')),
							$elm$parser$Parser$keyword('as')),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecIsNotRelevant)))
						]))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclarationHelp = F2(
	function (revTokens, str) {
		return (str === 'module') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					str),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration) : A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function),
					str),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature);
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclaration = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclarationHelp(revTokens),
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2($elm$parser$Parser$loop, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineStartVariable = F2(
	function (revTokens, n) {
		return ((n === 'module') || (n === 'import')) ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration) : ((n === 'port') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclaration) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword(n) ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody) : A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature)));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineStartVariable(revTokens),
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (s) {
						return A2(
							$elm$parser$Parser$loop,
							_Utils_ap(s, revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (s) {
						return A2(
							$elm$parser$Parser$loop,
							A2($elm$core$List$cons, s, revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toLines,
	$elm$core$Result$map($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode));
var $mdgriffith$elm_ui$Element$fillPortion = $mdgriffith$elm_ui$Internal$Model$Fill;
var $elm$core$String$lines = _String_lines;
var $elm$core$String$trimLeft = _String_trimLeft;
var $author$project$Ui$Section$fixIndent = function (code) {
	return function (xs) {
		var smallest = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$minimum(
				A2($elm$core$List$map, $elm$core$Tuple$first, xs)));
		return A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				function (_v0) {
					var x = _v0.b;
					return A2($elm$core$String$dropLeft, smallest, x);
				},
				xs));
	}(
		A2(
			$elm$core$List$map,
			function (x) {
				var trimmed = $elm$core$String$trimLeft(x);
				var indent = $elm$core$String$length(x) - $elm$core$String$length(trimmed);
				return _Utils_Tuple2(indent, x);
			},
			A2(
				$elm$core$List$drop,
				1,
				$elm$core$String$lines(code))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme = function (a) {
	return {$: 'Theme', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex = function (a) {
	return {$: 'Hex', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor = {$: 'DefaultColor'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor = function (background) {
	return {background: background, isBold: false, isItalic: false, isUnderline: false, text: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$noEmphasis = F2(
	function (text, background) {
		return {background: background, isBold: false, isItalic: false, isUnderline: false, text: text};
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor = function (text) {
	return {background: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor, isBold: false, isItalic: false, isUnderline: false, text: text};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$requiredStyles = {
	addition: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#eaffea')),
	comment: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#969896')),
	_default: A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$noEmphasis,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#24292e'),
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#ffffff')),
	deletion: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#ffecec')),
	highlight: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#fffbdd')),
	style1: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#005cc5')),
	style2: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#df5000')),
	style3: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#d73a49')),
	style4: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#0086b3')),
	style5: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#63a35c')),
	style6: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#005cc5')),
	style7: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#795da3'))
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$theme = {customStyles: _List_Nil, requiredStyles: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$requiredStyles};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleToFragment = function (a) {
	switch (a.$) {
		case 'Identifier':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-ar-i');
		case 'Prefix':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'css-ar-p');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-ar-k');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'css-ar-v');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7 = {$: 'Style7'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorToFragment = function (att) {
	switch (att.$) {
		case 'AttributeName':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'css-s-a-an');
		case 'AttributeValue':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'css-s-a-av');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-s-a-o');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorToFragment = function (s) {
	switch (s.$) {
		case 'Element':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-s-e');
		case 'Id':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'css-s-i');
		case 'Class':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'css-s-cl');
		case 'Combinator':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7, 'css-s-c');
		case 'Universal':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-s-u');
		case 'AttributeSelector':
			var att = s.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorToFragment(att);
		case 'PseudoElement':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'css-s-pe');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'css-s-pc');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'css-s');
		case 'AtRule':
			var a = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleToFragment(a);
		case 'Selector':
			var s = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorToFragment(s);
		case 'Property':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'css-p');
		case 'PropertyValue':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'css-pv');
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'css-n');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-u');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'js-n');
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'js-s');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'js-k');
		case 'DeclarationKeyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'js-dk');
		case 'FunctionEval':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'js-fe');
		case 'Function':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'js-f');
		case 'LiteralKeyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6, 'js-lk');
		case 'Param':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7, 'js-p');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'js-ce');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$NoLang$syntaxToStyle = function (syntax) {
	return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'nolang');
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'py-n');
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'py-s');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'py-k');
		case 'DeclarationKeyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'py-dk');
		case 'Function':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'py-f');
		case 'LiteralKeyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6, 'py-lk');
		case 'Param':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7, 'py-p');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'py-fe');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'sql-n');
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'sql-s');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'sql-k');
		case 'Operator':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'sql-o');
		case 'Function':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'sql-f');
		case 'Punctuation':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6, 'sql-p');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7, 'sql-l');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'Tag':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'xml-t');
		case 'Attribute':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'xml-a');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'xlm-av');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxToSelector = function (syntax) {
	switch (syntax.$) {
		case 'Elm':
			var elmSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle(elmSyntax).b;
		case 'Xml':
			var xmlSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle(xmlSyntax).b;
		case 'Javascript':
			var jsSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle(jsSyntax).b;
		case 'Css':
			var cssSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle(cssSyntax).b;
		case 'Python':
			var pythonSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle(pythonSyntax).b;
		case 'Sql':
			var sqlSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$syntaxToStyle(sqlSyntax).b;
		default:
			var noLangSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$NoLang$syntaxToStyle(noLangSyntax).b;
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxesToSelectors = function (syntaxes) {
	return $elm$core$String$concat(
		A2(
			$elm$core$List$intersperse,
			', ',
			A2(
				$elm$core$List$map,
				$elm$core$Basics$append('.elmsh-'),
				A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxToSelector, syntaxes))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss = F2(
	function (property, color) {
		switch (color.$) {
			case 'DefaultColor':
				return '';
			case 'Hex':
				var hex = color.a;
				return property + (hex + ';');
			case 'Rgb':
				var r = color.a;
				var g = color.b;
				var b = color.c;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							property,
							'rgb(',
							$elm$core$String$fromInt(r),
							', ',
							$elm$core$String$fromInt(g),
							',',
							$elm$core$String$fromInt(b),
							');'
						]));
			default:
				var r = color.a;
				var g = color.b;
				var b = color.c;
				var a = color.d;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							property,
							'rgba(',
							$elm$core$String$fromInt(r),
							', ',
							$elm$core$String$fromInt(g),
							',',
							$elm$core$String$fromInt(b),
							', ',
							$elm$core$String$fromFloat(a),
							');'
						]));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse = F2(
	function (bool, str) {
		return bool ? str : '';
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$styleToCss = function (_v0) {
	var isBold = _v0.isBold;
	var isItalic = _v0.isItalic;
	var isUnderline = _v0.isUnderline;
	var text = _v0.text;
	var background = _v0.background;
	return $elm$core$String$concat(
		_List_fromArray(
			[
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isBold, 'font-weight: bold;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isItalic, 'font-style: italic;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isUnderline, 'text-decoration: underline;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss, 'color: ', text),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss, 'background: ', background)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCssClass = function (_v0) {
	var selectors = _v0.a;
	var style = _v0.b;
	return $elm$core$String$isEmpty(selectors) ? '' : (selectors + (' {' + ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$styleToCss(style) + '}')));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCss = function (classes) {
	return $elm$core$String$concat(
		A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCssClass, classes));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$toCss = function (_v0) {
	var requiredStyles = _v0.requiredStyles;
	var customStyles = _v0.customStyles;
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCss(
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2('.elmsh', requiredStyles._default),
					_Utils_Tuple2('.elmsh-hl', requiredStyles.highlight),
					_Utils_Tuple2('.elmsh-add', requiredStyles.addition),
					_Utils_Tuple2('.elmsh-del', requiredStyles.deletion),
					_Utils_Tuple2('.elmsh-comm', requiredStyles.comment),
					_Utils_Tuple2('.elmsh1', requiredStyles.style1),
					_Utils_Tuple2('.elmsh2', requiredStyles.style2),
					_Utils_Tuple2('.elmsh3', requiredStyles.style3),
					_Utils_Tuple2('.elmsh4', requiredStyles.style4),
					_Utils_Tuple2('.elmsh5', requiredStyles.style5),
					_Utils_Tuple2('.elmsh6', requiredStyles.style6),
					_Utils_Tuple2('.elmsh7', requiredStyles.style7)
				]),
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$mapFirst($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxesToSelectors),
				customStyles)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$css = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$toCss($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$theme);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$gitHub = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$css;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$gitHub = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$gitHub);
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Internal$Model$Monospace = {$: 'Monospace'};
var $mdgriffith$elm_ui$Element$Font$monospace = $mdgriffith$elm_ui$Internal$Model$Monospace;
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$scrollbarX = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Add = {$: 'Add'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Del = {$: 'Del'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Normal = {$: 'Normal'};
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$requiredStyleToString = function (required) {
	return 'elmsh' + function () {
		switch (required.$) {
			case 'Default':
				return '0';
			case 'Comment':
				return '-comm';
			case 'Style1':
				return '1';
			case 'Style2':
				return '2';
			case 'Style3':
				return '3';
			case 'Style4':
				return '4';
			case 'Style5':
				return '5';
			case 'Style6':
				return '6';
			default:
				return '7';
		}
	}();
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView = function (_v0) {
	var text = _v0.text;
	var requiredStyle = _v0.requiredStyle;
	var additionalClass = _v0.additionalClass;
	return (_Utils_eq(requiredStyle, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default) && $elm$core$String$isEmpty(additionalClass)) ? $elm$html$Html$text(text) : A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$requiredStyleToString(requiredStyle),
						!_Utils_eq(requiredStyle, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default)),
						_Utils_Tuple2('elmsh-' + additionalClass, additionalClass !== '')
					]))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(text)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$lineView = F3(
	function (start, index, _v0) {
		var fragments = _v0.fragments;
		var highlight = _v0.highlight;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('elmsh-line', true),
							_Utils_Tuple2(
							'elmsh-hl',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Normal))),
							_Utils_Tuple2(
							'elmsh-add',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Add))),
							_Utils_Tuple2(
							'elmsh-del',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Del)))
						])),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-elmsh-lc',
					$elm$core$String$fromInt(start + index))
				]),
			A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toInlineHtml = function (lines) {
	return A2(
		$elm$html$Html$code,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elmsh')
			]),
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var highlight = _v0.highlight;
					var fragments = _v0.fragments;
					return _Utils_eq(highlight, $elm$core$Maybe$Nothing) ? A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments) : _List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$classList(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'elmsh-hl',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Normal))),
											_Utils_Tuple2(
											'elmsh-add',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Add))),
											_Utils_Tuple2(
											'elmsh-del',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Del)))
										]))
								]),
							A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments))
						]);
				},
				lines)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toBlockHtml = F2(
	function (maybeStart, lines) {
		if (maybeStart.$ === 'Nothing') {
			return A2(
				$elm$html$Html$pre,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elmsh')
					]),
				_List_fromArray(
					[
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toInlineHtml(lines)
					]));
		} else {
			var start = maybeStart.a;
			return A2(
				$elm$html$Html$pre,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elmsh')
					]),
				$elm$core$List$singleton(
					A2(
						$elm$html$Html$code,
						_List_Nil,
						A2(
							$elm$core$List$indexedMap,
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$lineView(start),
							lines))));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml = F2(
	function (maybeStart, _v0) {
		var lines = _v0.a;
		return A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toBlockHtml, maybeStart, lines);
	});
var $elm$core$String$trim = _String_trim;
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme = function (_v0) {
	var theme = _v0.a;
	return A3(
		$elm$html$Html$node,
		'style',
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(theme)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Padding = F5(
	function (a, b, c, d, e) {
		return {$: 'Padding', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Model$Spaced = F3(
	function (a, b, c) {
		return {$: 'Spaced', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, _v0) {
				var pad = _v0.a;
				var spacing = _v0.b;
				return _Utils_Tuple2(
					function () {
						if (pad.$ === 'Just') {
							var x = pad.a;
							return pad;
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'PaddingStyle')) {
								var _v3 = attr.b;
								var name = _v3.a;
								var t = _v3.b;
								var r = _v3.c;
								var b = _v3.d;
								var l = _v3.e;
								return $elm$core$Maybe$Just(
									A5($mdgriffith$elm_ui$Internal$Model$Padding, name, t, r, b, l));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}(),
					function () {
						if (spacing.$ === 'Just') {
							var x = spacing.a;
							return spacing;
						} else {
							if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
								var _v6 = attr.b;
								var name = _v6.a;
								var x = _v6.b;
								var y = _v6.c;
								return $elm$core$Maybe$Just(
									A3($mdgriffith$elm_ui$Internal$Model$Spaced, name, x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}());
			}),
		_Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
		attrs);
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
	});
var $mdgriffith$elm_ui$Element$wrappedRow = F2(
	function (attrs, children) {
		var _v0 = $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding(attrs);
		var padded = _v0.a;
		var spaced = _v0.b;
		if (spaced.$ === 'Nothing') {
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asRow,
				$mdgriffith$elm_ui$Internal$Model$div,
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							attrs))),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
		} else {
			var _v2 = spaced.a;
			var spaceName = _v2.a;
			var x = _v2.b;
			var y = _v2.c;
			var newPadding = function () {
				if (padded.$ === 'Just') {
					var _v5 = padded.a;
					var name = _v5.a;
					var t = _v5.b;
					var r = _v5.c;
					var b = _v5.d;
					var l = _v5.e;
					if ((_Utils_cmp(r, x / 2) > -1) && (_Utils_cmp(b, y / 2) > -1)) {
						var newTop = t - (y / 2);
						var newRight = r - (x / 2);
						var newLeft = l - (x / 2);
						var newBottom = b - (y / 2);
						return $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, newRight, newBottom, newLeft),
									newTop,
									newRight,
									newBottom,
									newLeft)));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}();
			if (newPadding.$ === 'Just') {
				var pad = newPadding.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asRow,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								_Utils_ap(
									attrs,
									_List_fromArray(
										[pad]))))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
			} else {
				var halfY = -(y / 2);
				var halfX = -(x / 2);
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					attrs,
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asRow,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.wrapped)))),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											A2(
												$elm$html$Html$Attributes$style,
												'margin',
												$elm$core$String$fromFloat(halfY) + ('px' + (' ' + ($elm$core$String$fromFloat(halfX) + 'px'))))),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Internal$Model$Attr(
												A2(
													$elm$html$Html$Attributes$style,
													'width',
													'calc(100% + ' + ($elm$core$String$fromInt(x) + 'px)'))),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$Attr(
													A2(
														$elm$html$Html$Attributes$style,
														'height',
														'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))),
												A2(
													$elm$core$List$cons,
													A2(
														$mdgriffith$elm_ui$Internal$Model$StyleClass,
														$mdgriffith$elm_ui$Internal$Flag$spacing,
														A3($mdgriffith$elm_ui$Internal$Model$SpacingStyle, spaceName, x, y)),
													_List_Nil))))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(children))
							])));
			}
		}
	});
var $author$project$Ui$Section$view = function (config) {
	var selectedId = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2($elm$core$Dict$get, config.title, config.selected));
	var selectedConfig = A2(
		$elm$core$Maybe$withDefault,
		A3(
			$author$project$Ui$Section$Configuration,
			'',
			'',
			function (_v0) {
				return $elm$html$Html$text('');
			}),
		$elm$core$List$head(
			A2($elm$core$List$drop, selectedId, config.configs)));
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$paddingEach(
				{bottom: 25, left: 0, right: 0, top: 25})
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$size(28),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$paddingEach(
						{bottom: 25, left: 0, right: 0, top: 30})
					]),
				$mdgriffith$elm_ui$Element$text(config.title)),
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$alignTop
							]),
						$mdgriffith$elm_ui$Element$html(
							selectedConfig.chart(_Utils_Tuple0))),
						A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width(
								$mdgriffith$elm_ui$Element$fillPortion(2)),
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Element$alignTop
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$wrappedRow,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$spacing(15),
										A2($mdgriffith$elm_ui$Element$paddingXY, 0, 15)
									]),
								A2(
									$elm$core$List$indexedMap,
									F2(
										function (i, c) {
											return A2(
												$mdgriffith$elm_ui$Element$Input$button,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$Font$size(14),
														_Utils_eq(i, selectedId) ? $mdgriffith$elm_ui$Element$Font$color(
														A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0)) : $mdgriffith$elm_ui$Element$Font$color(
														A3($mdgriffith$elm_ui$Element$rgb255, 80, 80, 80))
													]),
												{
													label: $mdgriffith$elm_ui$Element$text(c.title),
													onPress: $elm$core$Maybe$Just(
														A2(config.onSelect, config.title, i))
												});
										}),
									config.configs)),
								A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$Border$color(
										A3($mdgriffith$elm_ui$Element$rgb255, 210, 210, 210)),
										$mdgriffith$elm_ui$Element$Border$rounded(3),
										$mdgriffith$elm_ui$Element$Border$width(1),
										A2($mdgriffith$elm_ui$Element$paddingXY, 15, 0),
										$mdgriffith$elm_ui$Element$htmlAttribute(
										A2($elm$html$Html$Attributes$style, 'white-space', 'pre')),
										$mdgriffith$elm_ui$Element$Font$size(14),
										$mdgriffith$elm_ui$Element$Font$family(
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$typeface('Source Code Pro'),
												$mdgriffith$elm_ui$Element$Font$monospace
											])),
										$mdgriffith$elm_ui$Element$alignTop,
										$mdgriffith$elm_ui$Element$scrollbarX
									]),
								$mdgriffith$elm_ui$Element$html(
									A2(
										$elm$html$Html$div,
										_List_Nil,
										_List_fromArray(
											[
												$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$gitHub),
												A2(
												$elm$core$Result$withDefault,
												A2(
													$elm$html$Html$pre,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$code,
															_List_Nil,
															_List_fromArray(
																[
																	$elm$html$Html$text(config.frame)
																]))
														])),
												A2(
													$elm$core$Result$map,
													$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml(
														$elm$core$Maybe$Just(1)),
													$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm(
														$author$project$Ui$Section$fixIndent(
															A3(
																$elm$core$String$replace,
																'{{CONFIG}}',
																$elm$core$String$trim(selectedConfig.code),
																config.frame)))))
											]))))
							]))
					]))
			]));
};
var $author$project$Chart$Attributes$x2 = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				x2: $elm$core$Maybe$Just(v)
			});
	});
var $author$project$Chart$LabelsElement = F3(
	function (a, b, c) {
		return {$: 'LabelsElement', a: a, b: b, c: c};
	});
var $author$project$Chart$Attributes$Middle = {$: 'Middle'};
var $author$project$Chart$Attributes$Start = {$: 'Start'};
var $author$project$Chart$Attributes$alignLeft = function (config) {
	return _Utils_update(
		config,
		{anchor: $author$project$Chart$Attributes$Start});
};
var $author$project$Chart$Attributes$End = {$: 'End'};
var $author$project$Chart$Attributes$alignRight = function (config) {
	return _Utils_update(
		config,
		{anchor: $author$project$Chart$Attributes$End});
};
var $author$project$Chart$Svg$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $terezka$intervals$Intervals$Around = function (a) {
	return {$: 'Around', a: a};
};
var $terezka$intervals$Intervals$around = $terezka$intervals$Intervals$Around;
var $terezka$intervals$Intervals$ceilingTo = F2(
	function (prec, number) {
		return prec * $elm$core$Basics$ceiling(number / prec);
	});
var $terezka$intervals$Intervals$getBeginning = F2(
	function (min, interval) {
		var multiple = min / interval;
		return _Utils_eq(
			multiple,
			$elm$core$Basics$round(multiple)) ? min : A2($terezka$intervals$Intervals$ceilingTo, interval, min);
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			$elm$core$List$any,
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('0'))) && (!_Utils_eq(
					c,
					_Utils_chr('.')));
			},
			$elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$Char$fromCode = _Char_fromCode;
var $myrho$elm_round$Round$increaseNum = function (_v0) {
	var head = _v0.a;
	var tail = _v0.b;
	if (_Utils_eq(
		head,
		_Utils_chr('9'))) {
		var _v1 = $elm$core$String$uncons(tail);
		if (_v1.$ === 'Nothing') {
			return '01';
		} else {
			var headtail = _v1.a;
			return A2(
				$elm$core$String$cons,
				_Utils_chr('0'),
				$myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = $elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			$elm$core$String$cons,
			$elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $elm$core$String$reverse = _String_reverse;
var $myrho$elm_round$Round$splitComma = function (str) {
	var _v0 = A2($elm$core$String$split, '.', str);
	if (_v0.b) {
		if (_v0.b.b) {
			var before = _v0.a;
			var _v1 = _v0.b;
			var after = _v1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _v0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var $myrho$elm_round$Round$toDecimal = function (fl) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(
			$elm$core$Basics$abs(fl)));
	if (_v0.b) {
		if (_v0.b.b) {
			var num = _v0.a;
			var _v1 = _v0.b;
			var exp = _v1.a;
			var e = A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(
					A2($elm$core$String$startsWith, '+', exp) ? A2($elm$core$String$dropLeft, 1, exp) : exp));
			var _v2 = $myrho$elm_round$Round$splitComma(num);
			var before = _v2.a;
			var after = _v2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				$elm$core$Maybe$withDefault,
				'0',
				A2(
					$elm$core$Maybe$map,
					function (_v3) {
						var a = _v3.a;
						var b = _v3.b;
						return a + ('.' + b);
					},
					A2(
						$elm$core$Maybe$map,
						$elm$core$Tuple$mapFirst($elm$core$String$fromChar),
						$elm$core$String$uncons(
							_Utils_ap(
								A2(
									$elm$core$String$repeat,
									$elm$core$Basics$abs(e),
									'0'),
								total))))) : A3(
				$elm$core$String$padRight,
				e + 1,
				_Utils_chr('0'),
				total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _v0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var $myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if ($elm$core$Basics$isInfinite(fl) || $elm$core$Basics$isNaN(fl)) {
			return $elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _v0 = $myrho$elm_round$Round$splitComma(
				$myrho$elm_round$Round$toDecimal(
					$elm$core$Basics$abs(fl)));
			var before = _v0.a;
			var after = _v0.b;
			var r = $elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2($elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					$elm$core$String$padRight,
					r,
					_Utils_chr('0'),
					_Utils_ap(before, after)));
			var totalLen = $elm$core$String$length(normalized);
			var roundDigitIndex = A2($elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3($elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3($elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? $elm$core$String$reverse(
				A2(
					$elm$core$Maybe$withDefault,
					'1',
					A2(
						$elm$core$Maybe$map,
						$myrho$elm_round$Round$increaseNum,
						$elm$core$String$uncons(
							$elm$core$String$reverse(remains))))) : remains;
			var numLen = $elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					$elm$core$String$repeat,
					$elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				$elm$core$String$length(after)) < 0) ? (A3($elm$core$String$slice, 0, numLen - s, num) + ('.' + A3($elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3(
					$elm$core$String$padRight,
					s,
					_Utils_chr('0'),
					after))));
			return A2($myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var $myrho$elm_round$Round$round = $myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _v0 = $elm$core$String$uncons(str);
			if (_v0.$ === 'Nothing') {
				return false;
			} else {
				if ('5' === _v0.a.a.valueOf()) {
					if (_v0.a.b === '') {
						var _v1 = _v0.a;
						return !signed;
					} else {
						var _v2 = _v0.a;
						return true;
					}
				} else {
					var _v3 = _v0.a;
					var _int = _v3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						$elm$core$Char$toCode(_int));
				}
			}
		}));
var $elm$core$String$toFloat = _String_toFloat;
var $terezka$intervals$Intervals$correctFloat = function (prec) {
	return A2(
		$elm$core$Basics$composeR,
		$myrho$elm_round$Round$round(prec),
		A2(
			$elm$core$Basics$composeR,
			$elm$core$String$toFloat,
			$elm$core$Maybe$withDefault(0)));
};
var $terezka$intervals$Intervals$getMultiples = F3(
	function (magnitude, allowDecimals, hasTickAmount) {
		var defaults = hasTickAmount ? _List_fromArray(
			[1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) : _List_fromArray(
			[1, 2, 2.5, 5, 10]);
		return allowDecimals ? defaults : ((magnitude === 1) ? A2(
			$elm$core$List$filter,
			function (n) {
				return _Utils_eq(
					$elm$core$Basics$round(n),
					n);
			},
			defaults) : ((magnitude <= 0.1) ? _List_fromArray(
			[1 / magnitude]) : defaults));
	});
var $terezka$intervals$Intervals$getPrecision = function (number) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(number));
	if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
		var before = _v0.a;
		var _v1 = _v0.b;
		var after = _v1.a;
		return $elm$core$Basics$abs(
			A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(after)));
	} else {
		var _v2 = A2(
			$elm$core$String$split,
			'.',
			$elm$core$String$fromFloat(number));
		if ((_v2.b && _v2.b.b) && (!_v2.b.b.b)) {
			var before = _v2.a;
			var _v3 = _v2.b;
			var after = _v3.a;
			return $elm$core$String$length(after);
		} else {
			return 0;
		}
	}
};
var $elm$core$Basics$e = _Basics_e;
var $elm$core$Basics$pow = _Basics_pow;
var $terezka$intervals$Intervals$toMagnitude = function (num) {
	return A2(
		$elm$core$Basics$pow,
		10,
		$elm$core$Basics$floor(
			A2($elm$core$Basics$logBase, $elm$core$Basics$e, num) / A2($elm$core$Basics$logBase, $elm$core$Basics$e, 10)));
};
var $terezka$intervals$Intervals$getInterval = F3(
	function (intervalRaw, allowDecimals, hasTickAmount) {
		var magnitude = $terezka$intervals$Intervals$toMagnitude(intervalRaw);
		var multiples = A3($terezka$intervals$Intervals$getMultiples, magnitude, allowDecimals, hasTickAmount);
		var normalized = intervalRaw / magnitude;
		var findMultipleExact = function (multiples_) {
			findMultipleExact:
			while (true) {
				if (multiples_.b) {
					var m1 = multiples_.a;
					var rest = multiples_.b;
					if (_Utils_cmp(m1 * magnitude, intervalRaw) > -1) {
						return m1;
					} else {
						var $temp$multiples_ = rest;
						multiples_ = $temp$multiples_;
						continue findMultipleExact;
					}
				} else {
					return 1;
				}
			}
		};
		var findMultiple = function (multiples_) {
			findMultiple:
			while (true) {
				if (multiples_.b) {
					if (multiples_.b.b) {
						var m1 = multiples_.a;
						var _v2 = multiples_.b;
						var m2 = _v2.a;
						var rest = _v2.b;
						if (_Utils_cmp(normalized, (m1 + m2) / 2) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = A2($elm$core$List$cons, m2, rest);
							multiples_ = $temp$multiples_;
							continue findMultiple;
						}
					} else {
						var m1 = multiples_.a;
						var rest = multiples_.b;
						if (_Utils_cmp(normalized, m1) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = rest;
							multiples_ = $temp$multiples_;
							continue findMultiple;
						}
					}
				} else {
					return 1;
				}
			}
		};
		var multiple = hasTickAmount ? findMultipleExact(multiples) : findMultiple(multiples);
		var precision = $terezka$intervals$Intervals$getPrecision(magnitude) + $terezka$intervals$Intervals$getPrecision(multiple);
		return A2($terezka$intervals$Intervals$correctFloat, precision, multiple * magnitude);
	});
var $terezka$intervals$Intervals$positions = F5(
	function (range, beginning, interval, m, acc) {
		positions:
		while (true) {
			var nextPosition = A2(
				$terezka$intervals$Intervals$correctFloat,
				$terezka$intervals$Intervals$getPrecision(interval),
				beginning + (m * interval));
			if (_Utils_cmp(nextPosition, range.max) > 0) {
				return acc;
			} else {
				var $temp$range = range,
					$temp$beginning = beginning,
					$temp$interval = interval,
					$temp$m = m + 1,
					$temp$acc = _Utils_ap(
					acc,
					_List_fromArray(
						[nextPosition]));
				range = $temp$range;
				beginning = $temp$beginning;
				interval = $temp$interval;
				m = $temp$m;
				acc = $temp$acc;
				continue positions;
			}
		}
	});
var $terezka$intervals$Intervals$values = F4(
	function (allowDecimals, exact, amountRough, range) {
		var intervalRough = (range.max - range.min) / amountRough;
		var interval = A3($terezka$intervals$Intervals$getInterval, intervalRough, allowDecimals, exact);
		var intervalSafe = (!interval) ? 1 : interval;
		var beginning = A2($terezka$intervals$Intervals$getBeginning, range.min, intervalSafe);
		var amountRoughSafe = (!amountRough) ? 1 : amountRough;
		return A5($terezka$intervals$Intervals$positions, range, beginning, intervalSafe, 0, _List_Nil);
	});
var $terezka$intervals$Intervals$floats = function (amount) {
	if (amount.$ === 'Exactly') {
		var number = amount.a;
		return A3($terezka$intervals$Intervals$values, true, true, number);
	} else {
		var number = amount.a;
		return A3($terezka$intervals$Intervals$values, true, false, number);
	}
};
var $author$project$Chart$Svg$floats = $author$project$Chart$Svg$Generator(
	F2(
		function (i, b) {
			return A2(
				$terezka$intervals$Intervals$floats,
				$terezka$intervals$Intervals$around(i),
				{max: b.max, min: b.min});
		}));
var $author$project$Chart$Svg$produce = F3(
	function (amount, _v0, limits) {
		var func = _v0.a;
		return A2(func, amount, limits);
	});
var $author$project$Chart$Svg$toTickValues = F2(
	function (toValue, toString) {
		return $elm$core$List$map(
			function (i) {
				return {
					label: toString(i),
					value: toValue(i)
				};
			});
	});
var $author$project$Chart$floats = function (config) {
	return _Utils_update(
		config,
		{
			produce: function (a) {
				return A2(
					$elm$core$Basics$composeR,
					A2($author$project$Chart$Svg$produce, a, $author$project$Chart$Svg$floats),
					A2($author$project$Chart$Svg$toTickValues, $elm$core$Basics$identity, $elm$core$String$fromFloat));
			}
		});
};
var $author$project$Chart$Svg$position = F6(
	function (plane, rotation, x_, y_, xOff_, yOff_) {
		return $elm$svg$Svg$Attributes$transform(
			'translate(' + ($elm$core$String$fromFloat(
				A2($author$project$Svg$Coordinates$toSVGX, plane, x_) + xOff_) + (',' + ($elm$core$String$fromFloat(
				A2($author$project$Svg$Coordinates$toSVGY, plane, y_) + yOff_) + (') rotate(' + ($elm$core$String$fromFloat(rotation) + ')'))))));
	});
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$tspan = $elm$svg$Svg$trustedNode('tspan');
var $author$project$Chart$Svg$label = F4(
	function (plane, edits, inner, point) {
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{anchor: $author$project$Chart$Attributes$Middle, border: 'white', borderWidth: 0.1, color: '#808BAB', fontSize: $elm$core$Maybe$Nothing, rotate: 0, xOff: 0, yOff: 0});
		var fontStyle = function () {
			var _v1 = config.fontSize;
			if (_v1.$ === 'Just') {
				var size_ = _v1.a;
				return 'font-size: ' + ($elm$core$String$fromInt(size_) + ';');
			} else {
				return '';
			}
		}();
		var anchorStyle = function () {
			var _v0 = config.anchor;
			switch (_v0.$) {
				case 'End':
					return 'text-anchor: end;';
				case 'Start':
					return 'text-anchor: start;';
				default:
					return 'text-anchor: middle;';
			}
		}();
		return A2(
			$elm$svg$Svg$text_,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-charts__label'),
					$elm$svg$Svg$Attributes$stroke(config.border),
					$elm$svg$Svg$Attributes$strokeWidth(
					$elm$core$String$fromFloat(config.borderWidth)),
					$elm$svg$Svg$Attributes$fill(config.color),
					A6($author$project$Chart$Svg$position, plane, -config.rotate, point.x, point.y, config.xOff, config.yOff),
					$elm$svg$Svg$Attributes$style(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							['pointer-events: none;', fontStyle, anchorStyle])))
				]),
			_List_fromArray(
				[
					A2($elm$svg$Svg$tspan, _List_Nil, inner)
				]));
	});
var $author$project$Chart$Attributes$xOff = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{xOff: config.xOff + v});
	});
var $author$project$Chart$Attributes$yOff = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{yOff: config.yOff + v});
	});
var $author$project$Chart$xLabels = function (edits) {
	var toTicks = F2(
		function (p, config) {
			return A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeL,
					config.only,
					function ($) {
						return $.value;
					}),
				A2(
					config.produce,
					config.amount,
					config.limits(p.x)));
		});
	var toTickValues = F3(
		function (p, config, ts) {
			return _Utils_update(
				ts,
				{
					xs: _Utils_ap(
						ts.xs,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.value;
							},
							A2(toTicks, p, config)))
				});
		});
	var toConfig = function (p) {
		return A2(
			$author$project$Chart$applyAttrs,
			_Utils_ap(
				_List_fromArray(
					[$author$project$Chart$floats]),
				edits),
			{
				amount: 5,
				anchor: $author$project$Chart$Attributes$Middle,
				color: '#808BAB',
				flip: false,
				limits: $elm$core$Basics$identity,
				only: function (_v1) {
					return true;
				},
				pinned: $author$project$Chart$zero,
				produce: F2(
					function (a, b) {
						return _List_Nil;
					}),
				xOff: 0,
				yOff: 18
			});
	};
	return A3(
		$author$project$Chart$LabelsElement,
		toConfig,
		toTickValues,
		F2(
			function (p, config) {
				var toLabel = function (item) {
					return A4(
						$author$project$Chart$Svg$label,
						p,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$color(config.color),
								$author$project$Chart$Attributes$xOff(config.xOff),
								$author$project$Chart$Attributes$yOff(
								config.flip ? ((-config.yOff) + 10) : config.yOff),
								function () {
								var _v0 = config.anchor;
								switch (_v0.$) {
									case 'Middle':
										return $elm$core$Basics$identity;
									case 'End':
										return $author$project$Chart$Attributes$alignLeft;
									default:
										return $author$project$Chart$Attributes$alignRight;
								}
							}()
							]),
						_List_fromArray(
							[
								$elm$svg$Svg$text(item.label)
							]),
						{
							x: item.value,
							y: config.pinned(p.y)
						});
				};
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__x-labels')
						]),
					A2(
						$elm$core$List$map,
						toLabel,
						A2(toTicks, p, config)));
			}));
};
var $author$project$Chart$yLabels = function (edits) {
	var toTicks = F2(
		function (p, config) {
			return A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeL,
					config.only,
					function ($) {
						return $.value;
					}),
				A2(
					config.produce,
					config.amount,
					config.limits(p.y)));
		});
	var toTickValues = F3(
		function (p, config, ts) {
			return _Utils_update(
				ts,
				{
					ys: _Utils_ap(
						ts.ys,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.value;
							},
							A2(toTicks, p, config)))
				});
		});
	var toConfig = function (p) {
		return A2(
			$author$project$Chart$applyAttrs,
			_Utils_ap(
				_List_fromArray(
					[$author$project$Chart$floats]),
				edits),
			{
				amount: 5,
				anchor: $author$project$Chart$Attributes$Middle,
				color: '#808BAB',
				flip: false,
				limits: $elm$core$Basics$identity,
				only: function (_v1) {
					return true;
				},
				pinned: $author$project$Chart$zero,
				produce: F2(
					function (a, b) {
						return _List_Nil;
					}),
				xOff: -8,
				yOff: 3
			});
	};
	return A3(
		$author$project$Chart$LabelsElement,
		toConfig,
		toTickValues,
		F2(
			function (p, config) {
				var toLabel = function (item) {
					return A4(
						$author$project$Chart$Svg$label,
						p,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$color(config.color),
								$author$project$Chart$Attributes$xOff(
								config.flip ? (-config.xOff) : config.xOff),
								$author$project$Chart$Attributes$yOff(config.yOff),
								function () {
								var _v0 = config.anchor;
								switch (_v0.$) {
									case 'Middle':
										return $elm$core$Basics$identity;
									case 'End':
										return $author$project$Chart$Attributes$alignLeft;
									default:
										return $author$project$Chart$Attributes$alignRight;
								}
							}()
							]),
						_List_fromArray(
							[
								$elm$svg$Svg$text(item.label)
							]),
						{
							x: config.pinned(p.x),
							y: item.value
						});
				};
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__y-labels')
						]),
					A2(
						$elm$core$List$map,
						toLabel,
						A2(toTicks, p, config)));
			}));
};
var $author$project$Section$BarChart$view = F2(
	function (onSelect, selected) {
		var frame = F2(
			function (attrs, props) {
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', '300px'),
							A2($elm$html$Html$Attributes$style, 'height', '300px')
						]),
					_List_fromArray(
						[
							A2(
							$author$project$Chart$chart,
							_List_fromArray(
								[
									$author$project$Chart$Attributes$height(300),
									$author$project$Chart$Attributes$width(300)
								]),
							_List_fromArray(
								[
									$author$project$Chart$grid(_List_Nil),
									$author$project$Chart$xLabels(_List_Nil),
									$author$project$Chart$yLabels(_List_Nil),
									A3($author$project$Chart$bars, attrs, props, $author$project$Section$BarChart$data)
								]))
						]));
			});
		return $author$project$Ui$Section$view(
			{
				configs: _List_fromArray(
					[
						{
						chart: function (_v0) {
							return A2(
								frame,
								_List_Nil,
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil)
									]));
						},
						code: '\n              []\n              [ C.bar .y "y" []\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Basic'
					},
						{
						chart: function (_v1) {
							return A2(
								frame,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$margin(0.2)
									]),
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil)
									]));
						},
						code: '\n              [ CA.margin 0.2 ] -- Number is percentage of bin width\n              [ C.bar .y "y" []\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Margin'
					},
						{
						chart: function (_v2) {
							return A2(
								frame,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$spacing(0.1)
									]),
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil)
									]));
						},
						code: '\n              [ CA.spacing 0.1 ] -- Number is percentage of bin width\n              [ C.bar .y "y" []\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Spacing'
					},
						{
						chart: function (_v3) {
							return A2(
								frame,
								_List_Nil,
								_List_fromArray(
									[
										$author$project$Chart$stacked(
										_List_fromArray(
											[
												A3(
												$author$project$Chart$bar,
												function ($) {
													return $.y;
												},
												'y',
												_List_Nil),
												A3(
												$author$project$Chart$bar,
												function ($) {
													return $.z;
												},
												'z',
												_List_Nil)
											]))
									]));
						},
						code: '\n              []\n              [ C.stacked\n                  [ C.bar .y "y" []\n                  , C.bar .z "z" []\n                  ]\n              ]\n              ',
						title: 'Stacked'
					},
						{
						chart: function (_v4) {
							return A2(
								frame,
								_List_fromArray(
									[$author$project$Chart$Attributes$ungroup]),
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil)
									]));
						},
						code: '\n              [ CA.ungroup ]\n              [ C.bar .y "y" []\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Ungroup'
					},
						{
						chart: function (_v5) {
							return A2(
								frame,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$roundTop(0.5)
									]),
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$roundBottom(0.5)
											]))
									]));
						},
						code: '\n              [ CA.roundTop 0.5 ]\n              [ C.bar .y "y" []\n              , C.bar .z "z" [ CA.roundBottom 0.5 ]\n              ]\n              ',
						title: 'Corners'
					},
						{
						chart: function (_v6) {
							return A2(
								frame,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$x1(
										function ($) {
											return $.x1;
										}),
										$author$project$Chart$Attributes$x2(
										function (d) {
											return d.x1 + 0.2;
										})
									]),
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil)
									]));
						},
						code: '\n              [ CA.x1 .x1\n              , CA.x2 (\\d -> d.x1 + 0.2)\n              ]\n              [ C.bar .y "y" []\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Set x1/x2'
					},
						{
						chart: function (_v7) {
							return A2(
								frame,
								_List_Nil,
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$border('red'),
												$author$project$Chart$Attributes$borderWidth(2)
											])),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil)
									]));
						},
						code: '\n              []\n              [ C.bar .y "y" [ CA.border "red", CA.borderWidth 2 ]\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Borders'
					},
						{
						chart: function (_v8) {
							return A2(
								frame,
								_List_Nil,
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$color('pink')
											])),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil)
									]));
						},
						code: '\n              []\n              [ C.bar .y "y" [ CA.color "pink" ]\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Color'
					},
						{
						chart: function (_v9) {
							return A2(
								frame,
								_List_Nil,
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$opacity(0.25)
											])),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil)
									]));
						},
						code: '\n              []\n              [ C.bar .y "y" [ CA.opacity 0.25 ]\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Opacity'
					},
						{
						chart: function (_v10) {
							return A2(
								frame,
								_List_Nil,
								_List_fromArray(
									[
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$striped(_List_Nil)
											])),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$dotted(_List_Nil)
											]))
									]));
						},
						code: '\n              []\n              [ C.bar .y "y" [ CA.striped [] ]\n              , C.bar .z "z" [ CA.dotted [] ]\n              ]\n              ',
						title: 'Pattern'
					},
						{
						chart: function (_v11) {
							return A2(
								frame,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$author$project$Chart$variation,
										function (d) {
											return (d.x === 3) ? _List_fromArray(
												[
													$author$project$Chart$Attributes$color('red')
												]) : _List_Nil;
										},
										A3(
											$author$project$Chart$bar,
											function ($) {
												return $.y;
											},
											'y',
											_List_Nil)),
										A3(
										$author$project$Chart$bar,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil)
									]));
						},
						code: '\n              []\n              [ C.bar .y "y" []\n                  |> C.variation (\\d -> if d.x == 3 then [ CA.color "red" ] else [])\n              , C.bar .z "z" []\n              ]\n              ',
						title: 'Data dependent'
					}
					]),
				frame: '\n        C.chart\n          [ CA.height 300\n          , CA.width 300\n          ]\n          [ C.grid []\n          , C.xLabels []\n          , C.yLabels []\n          , C.bars\n              {{CONFIG}}\n              data\n          ]\n        ',
				onSelect: onSelect,
				selected: selected,
				title: 'Bar charts'
			});
	});
var $author$project$Chart$amount = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{amount: value});
	});
var $author$project$Chart$SubElements = function (a) {
	return {$: 'SubElements', a: a};
};
var $author$project$Chart$each = F2(
	function (toItems, func) {
		return $author$project$Chart$SubElements(
			F2(
				function (p, _v0) {
					return A2(
						$elm$core$List$concatMap,
						func(p),
						toItems(p));
				}));
	});
var $author$project$Chart$Attributes$flip = function (config) {
	return _Utils_update(
		config,
		{flip: true});
};
var $terezka$intervals$Intervals$ints = F2(
	function (amount, range) {
		return A2(
			$elm$core$List$map,
			$elm$core$Basics$round,
			function () {
				if (amount.$ === 'Exactly') {
					var number = amount.a;
					return A4($terezka$intervals$Intervals$values, false, true, number, range);
				} else {
					var number = amount.a;
					return A4($terezka$intervals$Intervals$values, false, false, number, range);
				}
			}());
	});
var $author$project$Chart$Svg$ints = $author$project$Chart$Svg$Generator(
	F2(
		function (i, b) {
			return A2(
				$terezka$intervals$Intervals$ints,
				$terezka$intervals$Intervals$around(i),
				{max: b.max, min: b.min});
		}));
var $author$project$Chart$intsCustom = F2(
	function (formatter, config) {
		return _Utils_update(
			config,
			{
				produce: function (a) {
					return A2(
						$elm$core$Basics$composeR,
						A2($author$project$Chart$Svg$produce, a, $author$project$Chart$Svg$ints),
						A2($author$project$Chart$Svg$toTickValues, $elm$core$Basics$toFloat, formatter));
				}
			});
	});
var $author$project$Chart$ints = $author$project$Chart$intsCustom($elm$core$String$fromInt);
var $author$project$Chart$marginTop = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{marginTop: value});
	});
var $author$project$Chart$noArrow = function (config) {
	return _Utils_update(
		config,
		{arrow: false});
};
var $author$project$Chart$pinned = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{pinned: value});
	});
var $author$project$Chart$Attributes$x = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{x: v});
	});
var $author$project$Chart$AxisElement = function (a) {
	return {$: 'AxisElement', a: a};
};
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$polygon = $elm$svg$Svg$trustedNode('polygon');
var $author$project$Chart$Svg$arrow = F3(
	function (plane, edits, point) {
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{color: 'rgb(210, 210, 210)', length: 7, rotate: 0, width: 4, xOff: 0, yOff: 0});
		var points_ = '0,0 ' + ($elm$core$String$fromFloat(config.length) + (',' + ($elm$core$String$fromFloat(config.width) + (' 0, ' + $elm$core$String$fromFloat(config.width * 2)))));
		var commands = 'rotate(' + ($elm$core$String$fromFloat(config.rotate) + (') translate(0 ' + ($elm$core$String$fromFloat(-config.width) + ') ')));
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-charts__arrow'),
					A6($author$project$Chart$Svg$position, plane, 0, point.x, point.y, config.xOff, config.yOff)
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$polygon,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill(config.color),
							$elm$svg$Svg$Attributes$points(points_),
							$elm$svg$Svg$Attributes$transform(commands)
						]),
					_List_Nil)
				]));
	});
var $author$project$Chart$xAxis = function (edits) {
	var config = A2(
		$author$project$Chart$applyAttrs,
		edits,
		{arrow: true, color: '', limits: $elm$core$Basics$identity, pinned: $author$project$Chart$zero});
	return $author$project$Chart$AxisElement(
		function (p) {
			var xLimit = config.limits(p.x);
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__x-axis')
					]),
				_List_fromArray(
					[
						A2(
						$author$project$Chart$Svg$line,
						p,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$color(config.color),
								$author$project$Chart$Attributes$y1(
								config.pinned(p.y)),
								$author$project$Chart$Attributes$x1(
								A2($elm$core$Basics$max, p.x.min, xLimit.min)),
								$author$project$Chart$Attributes$x2(
								A2($elm$core$Basics$min, p.x.max, xLimit.max))
							])),
						config.arrow ? A3(
						$author$project$Chart$Svg$arrow,
						p,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$color(config.color)
							]),
						{
							x: xLimit.max,
							y: config.pinned(p.y)
						}) : $elm$svg$Svg$text('')
					]));
		});
};
var $author$project$Chart$LabelElement = F3(
	function (a, b, c) {
		return {$: 'LabelElement', a: a, b: b, c: c};
	});
var $author$project$Chart$Attributes$fontSize = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				fontSize: $elm$core$Maybe$Just(v)
			});
	});
var $author$project$Chart$middle = function (b) {
	return b.min + ((b.max - b.min) / 2);
};
var $author$project$Chart$Attributes$rotate = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{rotate: config.rotate + v});
	});
var $author$project$Chart$xLabel = F2(
	function (edits, inner) {
		var toTickValues = F3(
			function (p, config, ts) {
				return _Utils_update(
					ts,
					{
						xs: _Utils_ap(
							ts.xs,
							_List_fromArray(
								[config.x]))
					});
			});
		var toConfig = function (p) {
			return A2(
				$author$project$Chart$applyAttrs,
				edits,
				{
					anchor: $author$project$Chart$Attributes$Middle,
					border: 'white',
					borderWidth: 0.1,
					color: '#808BAB',
					flip: false,
					fontSize: $elm$core$Maybe$Nothing,
					rotate: 0,
					x: $author$project$Chart$middle(p.x),
					xOff: 0,
					y: $author$project$Chart$zero(p.y),
					yOff: 20
				});
		};
		return A3(
			$author$project$Chart$LabelElement,
			toConfig,
			toTickValues,
			F2(
				function (p, config) {
					var string = _Utils_eq(inner, _List_Nil) ? _List_fromArray(
						[
							$elm$svg$Svg$text(
							$elm$core$String$fromFloat(config.x))
						]) : inner;
					return A4(
						$author$project$Chart$Svg$label,
						p,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$xOff(config.xOff),
								$author$project$Chart$Attributes$yOff(
								config.flip ? ((-config.yOff) + 10) : config.yOff),
								$author$project$Chart$Attributes$border(config.border),
								$author$project$Chart$Attributes$borderWidth(config.borderWidth),
								function () {
								var _v0 = config.fontSize;
								if (_v0.$ === 'Just') {
									var s = _v0.a;
									return $author$project$Chart$Attributes$fontSize(s);
								} else {
									return $elm$core$Basics$identity;
								}
							}(),
								$author$project$Chart$Attributes$color(config.color),
								function () {
								var _v1 = config.anchor;
								switch (_v1.$) {
									case 'Middle':
										return $elm$core$Basics$identity;
									case 'End':
										return $author$project$Chart$Attributes$alignRight;
									default:
										return $author$project$Chart$Attributes$alignLeft;
								}
							}(),
								$author$project$Chart$Attributes$rotate(config.rotate)
							]),
						string,
						{x: config.x, y: config.y});
				}));
	});
var $author$project$Chart$TickElement = F3(
	function (a, b, c) {
		return {$: 'TickElement', a: a, b: b, c: c};
	});
var $author$project$Chart$Attributes$length = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{length: v});
	});
var $author$project$Chart$Svg$tick = F4(
	function (plane, edits, isX, point) {
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{color: 'rgb(210, 210, 210)', length: 5, width: 1});
		return A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-charts__tick'),
					$elm$svg$Svg$Attributes$stroke(config.color),
					$elm$svg$Svg$Attributes$strokeWidth(
					$elm$core$String$fromFloat(config.width)),
					$elm$svg$Svg$Attributes$x1(
					$elm$core$String$fromFloat(
						A2($author$project$Svg$Coordinates$toSVGX, plane, point.x))),
					$elm$svg$Svg$Attributes$x2(
					$elm$core$String$fromFloat(
						A2($author$project$Svg$Coordinates$toSVGX, plane, point.x) + (isX ? 0 : (-config.length)))),
					$elm$svg$Svg$Attributes$y1(
					$elm$core$String$fromFloat(
						A2($author$project$Svg$Coordinates$toSVGY, plane, point.y))),
					$elm$svg$Svg$Attributes$y2(
					$elm$core$String$fromFloat(
						A2($author$project$Svg$Coordinates$toSVGY, plane, point.y) + (isX ? config.length : 0)))
				]),
			_List_Nil);
	});
var $author$project$Chart$Svg$xTick = F3(
	function (plane, edits, point) {
		return A4($author$project$Chart$Svg$tick, plane, edits, true, point);
	});
var $author$project$Chart$xTick = function (edits) {
	var toTickValues = F3(
		function (p, config, ts) {
			return _Utils_update(
				ts,
				{
					xs: _Utils_ap(
						ts.xs,
						_List_fromArray(
							[config.x]))
				});
		});
	var toConfig = function (p) {
		return A2(
			$author$project$Chart$applyAttrs,
			edits,
			{
				color: 'rgb(210, 210, 210)',
				flip: false,
				length: 5,
				width: 1,
				x: $author$project$Chart$middle(p.x),
				y: $author$project$Chart$zero(p.y)
			});
	};
	return A3(
		$author$project$Chart$TickElement,
		toConfig,
		toTickValues,
		F2(
			function (p, config) {
				return A3(
					$author$project$Chart$Svg$xTick,
					p,
					_List_fromArray(
						[
							$author$project$Chart$Attributes$length(
							config.flip ? (-config.length) : config.length),
							$author$project$Chart$Attributes$color(config.color),
							$author$project$Chart$Attributes$width(config.width)
						]),
					{x: config.x, y: config.y});
			}));
};
var $author$project$Chart$TicksElement = F2(
	function (a, b) {
		return {$: 'TicksElement', a: a, b: b};
	});
var $author$project$Chart$xTicks = function (edits) {
	var config = A2(
		$author$project$Chart$applyAttrs,
		_Utils_ap(
			_List_fromArray(
				[$author$project$Chart$floats]),
			edits),
		{
			amount: 5,
			color: '',
			flip: false,
			height: 5,
			limits: $elm$core$Basics$identity,
			only: function (_v0) {
				return true;
			},
			pinned: $author$project$Chart$zero,
			produce: F2(
				function (a, b) {
					return _List_Nil;
				}),
			width: 1
		});
	var toTicks = function (p) {
		return A2(
			$elm$core$List$filter,
			config.only,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.value;
				},
				A2(
					config.produce,
					config.amount,
					config.limits(p.x))));
	};
	var addTickValues = F2(
		function (p, ts) {
			return _Utils_update(
				ts,
				{
					xs: _Utils_ap(
						ts.xs,
						toTicks(p))
				});
		});
	return A2(
		$author$project$Chart$TicksElement,
		addTickValues,
		function (p) {
			var toTick = function (x) {
				return A3(
					$author$project$Chart$Svg$xTick,
					p,
					_List_fromArray(
						[
							$author$project$Chart$Attributes$color(config.color),
							$author$project$Chart$Attributes$length(
							config.flip ? (-config.height) : config.height),
							$author$project$Chart$Attributes$width(config.width)
						]),
					{
						x: x,
						y: config.pinned(p.y)
					});
			};
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__x-ticks')
					]),
				A2(
					$elm$core$List$map,
					toTick,
					toTicks(p)));
		});
};
var $author$project$Section$CustomAxes$view = F2(
	function (onSelect, selected) {
		var frame = function (props) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '300px'),
						A2($elm$html$Html$Attributes$style, 'height', '300px')
					]),
				_List_fromArray(
					[
						A2(
						$author$project$Chart$chart,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$height(300),
								$author$project$Chart$Attributes$width(300),
								$author$project$Chart$marginTop(15)
							]),
						_Utils_ap(
							_List_fromArray(
								[
									$author$project$Chart$grid(_List_Nil)
								]),
							props))
					]));
		};
		return $author$project$Ui$Section$view(
			{
				configs: _List_fromArray(
					[
						{
						chart: function (_v0) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$xAxis(_List_Nil),
										$author$project$Chart$xTicks(_List_Nil),
										$author$project$Chart$xLabels(_List_Nil)
									]));
						},
						code: '\n          , C.xAxis []\n          , C.xTicks []\n          , C.xLabels []\n              ',
						title: 'Basic'
					},
						{
						chart: function (_v1) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$xAxis(
										_List_fromArray(
											[
												$author$project$Chart$Attributes$color('blue')
											])),
										$author$project$Chart$xTicks(
										_List_fromArray(
											[
												$author$project$Chart$Attributes$color('blue')
											])),
										$author$project$Chart$xLabels(
										_List_fromArray(
											[
												$author$project$Chart$Attributes$color('blue')
											]))
									]));
						},
						code: '\n          , C.xAxis [ CA.color "blue" ]\n          , C.xTicks [ CA.color "blue" ]\n          , C.xLabels [ CA.color "blue" ]\n              ',
						title: 'Color'
					},
						{
						chart: function (_v2) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$xAxis(
										_List_fromArray(
											[
												$author$project$Chart$pinned(
												function ($) {
													return $.max;
												})
											])),
										$author$project$Chart$xTicks(
										_List_fromArray(
											[
												$author$project$Chart$pinned(
												function ($) {
													return $.max;
												}),
												$author$project$Chart$Attributes$flip
											])),
										$author$project$Chart$xLabels(
										_List_fromArray(
											[
												$author$project$Chart$pinned(
												function ($) {
													return $.max;
												}),
												$author$project$Chart$Attributes$flip
											]))
									]));
						},
						code: '\n          , C.xAxis [ C.pinned .max ]\n          , C.xTicks [ C.pinned .max, CA.flip  ]\n          , C.xLabels [ C.pinned .max, CA.flip ]\n              ',
						title: 'Position'
					},
						{
						chart: function (_v3) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$xLabels(
										_List_fromArray(
											[
												$author$project$Chart$Attributes$xOff(5),
												$author$project$Chart$Attributes$yOff(-20),
												$author$project$Chart$Attributes$alignRight
											]))
									]));
						},
						code: '\n          , C.xLabels [ CA.xOff 5, CA.yOff 0, CA.alignRight ]\n              ',
						title: 'Offset'
					},
						{
						chart: function (_v4) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$xAxis(
										_List_fromArray(
											[$author$project$Chart$noArrow])),
										$author$project$Chart$xTicks(_List_Nil),
										$author$project$Chart$xLabels(_List_Nil)
									]));
						},
						code: '\n          , C.xAxis [ C.noArrow ]\n          , C.xTicks []\n          , C.xLabels []\n              ',
						title: 'No arrow'
					},
						{
						chart: function (_v5) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$xAxis(_List_Nil),
										$author$project$Chart$xTicks(
										_List_fromArray(
											[
												$author$project$Chart$amount(4)
											])),
										$author$project$Chart$xLabels(
										_List_fromArray(
											[
												$author$project$Chart$amount(4)
											]))
									]));
						},
						code: '\n          , C.xAxis []\n          , C.xTicks [ C.amount 4 ]\n          , C.xLabels [ C.amount 4 ]\n              ',
						title: 'Amount'
					},
						{
						chart: function (_v6) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$xAxis(_List_Nil),
										$author$project$Chart$xTicks(
										_List_fromArray(
											[
												$author$project$Chart$amount(4),
												$author$project$Chart$ints
											])),
										$author$project$Chart$xLabels(
										_List_fromArray(
											[
												$author$project$Chart$amount(4),
												$author$project$Chart$ints
											]))
									]));
						},
						code: '\n          , C.xAxis []\n          , C.xTicks [ C.amount 4, C.ints ]\n          , C.xLabels [ C.amount 4, C.ints ]\n              ',
						title: 'Only ints'
					},
						{
						chart: function (_v7) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$xAxis(_List_Nil),
										A2(
										$author$project$Chart$each,
										A2(
											$elm$core$Basics$composeL,
											A2($author$project$Chart$Svg$produce, 12, $author$project$Chart$Svg$ints),
											function ($) {
												return $.x;
											}),
										F2(
											function (p, num) {
												return _List_fromArray(
													[
														$author$project$Chart$xTick(
														_List_fromArray(
															[
																$author$project$Chart$Attributes$x(num)
															])),
														A2(
														$author$project$Chart$xLabel,
														_List_fromArray(
															[
																$author$project$Chart$Attributes$x(num)
															]),
														_List_fromArray(
															[
																$elm$svg$Svg$text(
																$elm$core$String$fromInt(num)),
																$elm$svg$Svg$text('°')
															]))
													]);
											}))
									]));
						},
						code: '\n          , C.xAxis []\n          , C.each (CS.produce 12 CS.ints << .x) <| \\p num ->\n              [ C.xTick [ CA.x (toFloat num) ]\n              , C.xLabel [ CA.x (toFloat num) ]\n                  [ S.text (String.fromInt num), S.text "°" ]\n              ]\n              ',
						title: 'Custom'
					}
					]),
				frame: '\n        C.chart\n          [ CA.height 300\n          , CA.width 300\n          ]\n          [ C.grid []\n          {{CONFIG}}\n          ]\n        ',
				onSelect: onSelect,
				selected: selected,
				title: 'Custom axes'
			});
	});
var $author$project$Section$Interactivity$OnHover = function (a) {
	return {$: 'OnHover', a: a};
};
var $author$project$Chart$Attributes$background = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{background: v});
	});
var $author$project$Section$Interactivity$Datum = F7(
	function (x, y, z, v, w, p, q) {
		return {p: p, q: q, v: v, w: w, x: x, y: y, z: z};
	});
var $author$project$Section$Interactivity$data = function () {
	var toDatum = F7(
		function (x, y, z, v, w, p, q) {
			return A7(
				$author$project$Section$Interactivity$Datum,
				x,
				$elm$core$Maybe$Just(y),
				$elm$core$Maybe$Just(z),
				$elm$core$Maybe$Just(v),
				$elm$core$Maybe$Just(w),
				$elm$core$Maybe$Just(p),
				$elm$core$Maybe$Just(q));
		});
	return _List_fromArray(
		[
			A7(toDatum, 0.0, 2.0, 4.0, 4.6, 6.9, 7.3, 8.0),
			A7(toDatum, 0.2, 3.0, 4.2, 5.2, 6.2, 7.0, 8.7),
			A7(toDatum, 0.8, 4.0, 4.6, 5.5, 5.2, 7.2, 8.1),
			A7(toDatum, 1.0, 2.0, 4.2, 5.3, 5.7, 6.2, 7.8),
			A7(toDatum, 1.2, 5.0, 3.5, 4.9, 5.9, 6.7, 8.2),
			A7(toDatum, 2.0, 2.0, 3.2, 4.8, 5.4, 7.2, 8.3),
			A7(toDatum, 2.3, 1.0, 4.3, 5.3, 5.1, 7.8, 7.1),
			A7(toDatum, 2.8, 3.0, 2.9, 5.4, 3.9, 7.6, 8.5),
			A7(toDatum, 3.0, 2.0, 3.6, 5.8, 4.6, 6.5, 6.9),
			A7(toDatum, 4.0, 1.0, 4.2, 4.5, 5.3, 6.3, 7.0)
		]);
}();
var $author$project$Chart$Event = function (a) {
	return {$: 'Event', a: a};
};
var $author$project$Chart$event = F2(
	function (name_, decoder) {
		return $author$project$Chart$Event(
			{decoder: decoder, name: name_});
	});
var $author$project$Chart$Item$getCenter = F2(
	function (plane, _v0) {
		var config = _v0.a;
		var pos = A2(config.position, plane, config.details);
		return {x: pos.x1 + ((pos.x2 - pos.x1) / 2), y: pos.y1 + ((pos.y2 - pos.y1) / 2)};
	});
var $author$project$Chart$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $author$project$Svg$Coordinates$toCartesianX = F2(
	function (plane, value) {
		return A2($author$project$Svg$Coordinates$scaleCartesianX, plane, value - plane.margin.left) + plane.x.min;
	});
var $author$project$Svg$Coordinates$toCartesianY = F2(
	function (plane, value) {
		return ($author$project$Svg$Coordinates$range(plane.y) - A2($author$project$Svg$Coordinates$scaleCartesianY, plane, value - plane.margin.top)) + plane.y.min;
	});
var $author$project$Chart$getCoords = $author$project$Chart$Decoder(
	F3(
		function (_v0, plane, searched) {
			return {
				x: A2($author$project$Svg$Coordinates$toCartesianX, plane, searched.x),
				y: A2($author$project$Svg$Coordinates$toCartesianY, plane, searched.y)
			};
		}));
var $author$project$Chart$Item$getInd = function (_v0) {
	var config = _v0.a;
	return config.details.x1;
};
var $author$project$Chart$Svg$distanceX = F3(
	function (plane, searched, point) {
		return $elm$core$Basics$abs(
			A2($author$project$Svg$Coordinates$toSVGX, plane, point.x) - A2($author$project$Svg$Coordinates$toSVGX, plane, searched.x));
	});
var $author$project$Chart$Svg$distanceY = F3(
	function (plane, searched, point) {
		return $elm$core$Basics$abs(
			A2($author$project$Svg$Coordinates$toSVGY, plane, point.y) - A2($author$project$Svg$Coordinates$toSVGY, plane, searched.y));
	});
var $author$project$Chart$Svg$distance = F3(
	function (plane, searched, point) {
		return $elm$core$Basics$sqrt(
			A2(
				$elm$core$Basics$pow,
				A3($author$project$Chart$Svg$distanceX, plane, searched, point),
				2) + A2(
				$elm$core$Basics$pow,
				A3($author$project$Chart$Svg$distanceY, plane, searched, point),
				2));
	});
var $author$project$Chart$Svg$getNearestHelp = F4(
	function (toPoint, items, plane, searched) {
		var distance_ = A2($author$project$Chart$Svg$distance, plane, searched);
		var getClosest = F2(
			function (item, allClosest) {
				var _v0 = $elm$core$List$head(allClosest);
				if (_v0.$ === 'Just') {
					var closest = _v0.a;
					return _Utils_eq(
						toPoint(closest),
						toPoint(item)) ? A2($elm$core$List$cons, item, allClosest) : ((_Utils_cmp(
						distance_(
							toPoint(closest)),
						distance_(
							toPoint(item))) > 0) ? _List_fromArray(
						[item]) : allClosest);
				} else {
					return _List_fromArray(
						[item]);
				}
			});
		return A3($elm$core$List$foldl, getClosest, _List_Nil, items);
	});
var $author$project$Chart$Svg$getNearest = F4(
	function (toPoint, items, plane, searchedSvg) {
		var searched = {
			x: A2($author$project$Svg$Coordinates$toCartesianX, plane, searchedSvg.x),
			y: A2($author$project$Svg$Coordinates$toCartesianY, plane, searchedSvg.y)
		};
		return A4($author$project$Chart$Svg$getNearestHelp, toPoint, items, plane, searched);
	});
var $author$project$Chart$getNearest = F2(
	function (toPoint, filterItems) {
		return $author$project$Chart$Decoder(
			F2(
				function (items, plane) {
					return A3(
						$author$project$Chart$Svg$getNearest,
						toPoint(plane),
						filterItems(items),
						plane);
				}));
	});
var $author$project$Chart$Item$getValue = function (_v0) {
	var config = _v0.a;
	return config.details.y;
};
var $author$project$Chart$map = F2(
	function (f, _v0) {
		var a = _v0.a;
		return $author$project$Chart$Decoder(
			F3(
				function (ps, s, p) {
					return f(
						A3(a, ps, s, p));
				}));
	});
var $author$project$Chart$Attributes$noPointer = function (config) {
	return _Utils_update(
		config,
		{pointer: false});
};
var $author$project$Chart$Attributes$offset = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{offset: v});
	});
var $author$project$Chart$Attributes$Left = {$: 'Left'};
var $author$project$Chart$Attributes$onLeft = function (config) {
	return _Utils_update(
		config,
		{
			direction: $elm$core$Maybe$Just($author$project$Chart$Attributes$Left)
		});
};
var $author$project$Chart$Attributes$LeftOrRight = {$: 'LeftOrRight'};
var $author$project$Chart$Attributes$onLeftOrRight = function (config) {
	return _Utils_update(
		config,
		{
			direction: $elm$core$Maybe$Just($author$project$Chart$Attributes$LeftOrRight)
		});
};
var $author$project$Chart$Attributes$TopOrBottom = {$: 'TopOrBottom'};
var $author$project$Chart$Attributes$onTopOrBottom = function (config) {
	return _Utils_update(
		config,
		{
			direction: $elm$core$Maybe$Just($author$project$Chart$Attributes$TopOrBottom)
		});
};
var $author$project$Chart$property = F2(
	function (y_, name_) {
		return A2($author$project$Internal$Property$property, y_, name_);
	});
var $author$project$Chart$Item$DotConfig = function (a) {
	return {$: 'DotConfig', a: a};
};
var $author$project$Chart$SeriesElement = F3(
	function (a, b, c) {
		return {$: 'SeriesElement', a: a, b: b, c: c};
	});
var $elm$svg$Svg$Attributes$fillRule = _VirtualDom_attribute('fill-rule');
var $author$project$Svg$Coordinates$fromProps = F3(
	function (xs, ys, data) {
		var getValues = F2(
			function (vs, datum) {
				return A2(
					$elm$core$List$filterMap,
					function (v) {
						return v(datum);
					},
					vs);
			});
		var getMin = A2(
			$elm$core$Basics$composeL,
			$elm$core$Maybe$withDefault(0),
			$elm$core$List$minimum);
		var getMax = A2(
			$elm$core$Basics$composeL,
			$elm$core$Maybe$withDefault(1),
			$elm$core$List$maximum);
		var toPosition = function (datum) {
			var vsY = A2(getValues, ys, datum);
			var vsX = A2(getValues, xs, datum);
			return {
				x1: getMin(vsX),
				x2: getMax(vsX),
				y1: getMin(vsY),
				y2: getMax(vsY)
			};
		};
		return A2($author$project$Svg$Coordinates$foldPosition, toPosition, data);
	});
var $author$project$Internal$Interpolation$linear = $elm$core$List$map(
	$elm$core$List$map(
		function (_v0) {
			var x = _v0.x;
			var y = _v0.y;
			return A2($author$project$Svg$Commands$Line, x, y);
		}));
var $author$project$Internal$Interpolation$First = {$: 'First'};
var $author$project$Internal$Interpolation$Previous = function (a) {
	return {$: 'Previous', a: a};
};
var $author$project$Internal$Interpolation$monotoneCurve = F4(
	function (point0, point1, tangent0, tangent1) {
		var dx = (point1.x - point0.x) / 3;
		return A6($author$project$Svg$Commands$CubicBeziers, point0.x + dx, point0.y + (dx * tangent0), point1.x - dx, point1.y - (dx * tangent1), point1.x, point1.y);
	});
var $author$project$Internal$Interpolation$slope2 = F3(
	function (point0, point1, t) {
		var h = point1.x - point0.x;
		return (!(!h)) ? ((((3 * (point1.y - point0.y)) / h) - t) / 2) : t;
	});
var $author$project$Internal$Interpolation$sign = function (x) {
	return (x < 0) ? (-1) : 1;
};
var $author$project$Internal$Interpolation$toH = F2(
	function (h0, h1) {
		return (!h0) ? ((h1 < 0) ? (0 * (-1)) : h1) : h0;
	});
var $author$project$Internal$Interpolation$slope3 = F3(
	function (point0, point1, point2) {
		var h1 = point2.x - point1.x;
		var h0 = point1.x - point0.x;
		var s0h = A2($author$project$Internal$Interpolation$toH, h0, h1);
		var s0 = (point1.y - point0.y) / s0h;
		var s1h = A2($author$project$Internal$Interpolation$toH, h1, h0);
		var s1 = (point2.y - point1.y) / s1h;
		var p = ((s0 * h1) + (s1 * h0)) / (h0 + h1);
		var slope = ($author$project$Internal$Interpolation$sign(s0) + $author$project$Internal$Interpolation$sign(s1)) * A2(
			$elm$core$Basics$min,
			A2(
				$elm$core$Basics$min,
				$elm$core$Basics$abs(s0),
				$elm$core$Basics$abs(s1)),
			0.5 * $elm$core$Basics$abs(p));
		return $elm$core$Basics$isNaN(slope) ? 0 : slope;
	});
var $author$project$Internal$Interpolation$monotonePart = F2(
	function (points, _v0) {
		var tangent = _v0.a;
		var commands = _v0.b;
		var _v1 = _Utils_Tuple2(tangent, points);
		_v1$4:
		while (true) {
			if (_v1.a.$ === 'First') {
				if (_v1.b.b && _v1.b.b.b) {
					if (_v1.b.b.b.b) {
						var _v2 = _v1.a;
						var _v3 = _v1.b;
						var p0 = _v3.a;
						var _v4 = _v3.b;
						var p1 = _v4.a;
						var _v5 = _v4.b;
						var p2 = _v5.a;
						var rest = _v5.b;
						var t1 = A3($author$project$Internal$Interpolation$slope3, p0, p1, p2);
						var t0 = A3($author$project$Internal$Interpolation$slope2, p0, p1, t1);
						return A2(
							$author$project$Internal$Interpolation$monotonePart,
							A2(
								$elm$core$List$cons,
								p1,
								A2($elm$core$List$cons, p2, rest)),
							_Utils_Tuple2(
								$author$project$Internal$Interpolation$Previous(t1),
								_Utils_ap(
									commands,
									_List_fromArray(
										[
											A4($author$project$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1)
										]))));
					} else {
						var _v9 = _v1.a;
						var _v10 = _v1.b;
						var p0 = _v10.a;
						var _v11 = _v10.b;
						var p1 = _v11.a;
						var t1 = A3($author$project$Internal$Interpolation$slope3, p0, p1, p1);
						return _Utils_Tuple2(
							$author$project$Internal$Interpolation$Previous(t1),
							_Utils_ap(
								commands,
								_List_fromArray(
									[
										A4($author$project$Internal$Interpolation$monotoneCurve, p0, p1, t1, t1),
										A2($author$project$Svg$Commands$Line, p1.x, p1.y)
									])));
					}
				} else {
					break _v1$4;
				}
			} else {
				if (_v1.b.b && _v1.b.b.b) {
					if (_v1.b.b.b.b) {
						var t0 = _v1.a.a;
						var _v6 = _v1.b;
						var p0 = _v6.a;
						var _v7 = _v6.b;
						var p1 = _v7.a;
						var _v8 = _v7.b;
						var p2 = _v8.a;
						var rest = _v8.b;
						var t1 = A3($author$project$Internal$Interpolation$slope3, p0, p1, p2);
						return A2(
							$author$project$Internal$Interpolation$monotonePart,
							A2(
								$elm$core$List$cons,
								p1,
								A2($elm$core$List$cons, p2, rest)),
							_Utils_Tuple2(
								$author$project$Internal$Interpolation$Previous(t1),
								_Utils_ap(
									commands,
									_List_fromArray(
										[
											A4($author$project$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1)
										]))));
					} else {
						var t0 = _v1.a.a;
						var _v12 = _v1.b;
						var p0 = _v12.a;
						var _v13 = _v12.b;
						var p1 = _v13.a;
						var t1 = A3($author$project$Internal$Interpolation$slope3, p0, p1, p1);
						return _Utils_Tuple2(
							$author$project$Internal$Interpolation$Previous(t1),
							_Utils_ap(
								commands,
								_List_fromArray(
									[
										A4($author$project$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1),
										A2($author$project$Svg$Commands$Line, p1.x, p1.y)
									])));
					}
				} else {
					break _v1$4;
				}
			}
		}
		return _Utils_Tuple2(tangent, commands);
	});
var $author$project$Internal$Interpolation$monotoneSection = F2(
	function (points, _v0) {
		var tangent = _v0.a;
		var acc = _v0.b;
		var _v1 = function () {
			if (points.b) {
				var p0 = points.a;
				var rest = points.b;
				return A2(
					$author$project$Internal$Interpolation$monotonePart,
					A2($elm$core$List$cons, p0, rest),
					_Utils_Tuple2(
						tangent,
						_List_fromArray(
							[
								A2($author$project$Svg$Commands$Line, p0.x, p0.y)
							])));
			} else {
				return _Utils_Tuple2(tangent, _List_Nil);
			}
		}();
		var t0 = _v1.a;
		var commands = _v1.b;
		return _Utils_Tuple2(
			t0,
			A2($elm$core$List$cons, commands, acc));
	});
var $author$project$Internal$Interpolation$monotone = function (sections) {
	return A3(
		$elm$core$List$foldr,
		$author$project$Internal$Interpolation$monotoneSection,
		_Utils_Tuple2($author$project$Internal$Interpolation$First, _List_Nil),
		sections).b;
};
var $author$project$Chart$Svg$last = function (list) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$drop,
			$elm$core$List$length(list) - 1,
			list));
};
var $author$project$Chart$Svg$withBorder = F2(
	function (stuff, func) {
		if (stuff.b) {
			var first = stuff.a;
			var rest = stuff.b;
			return $elm$core$Maybe$Just(
				A2(
					func,
					first,
					A2(
						$elm$core$Maybe$withDefault,
						first,
						$author$project$Chart$Svg$last(rest))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Chart$Svg$toCommands = F4(
	function (method, toX, toY, data) {
		var toSets = F2(
			function (ps, cmds) {
				return A2(
					$author$project$Chart$Svg$withBorder,
					ps,
					F2(
						function (first, last_) {
							return _Utils_Tuple3(first, cmds, last_);
						}));
			});
		var fold = F2(
			function (datum_, acc) {
				var _v1 = toY(datum_);
				if (_v1.$ === 'Just') {
					var y_ = _v1.a;
					if (acc.b) {
						var latest = acc.a;
						var rest = acc.b;
						return A2(
							$elm$core$List$cons,
							_Utils_ap(
								latest,
								_List_fromArray(
									[
										{
										x: toX(datum_),
										y: y_
									}
									])),
							rest);
					} else {
						return A2(
							$elm$core$List$cons,
							_List_fromArray(
								[
									{
									x: toX(datum_),
									y: y_
								}
								]),
							acc);
					}
				} else {
					return A2($elm$core$List$cons, _List_Nil, acc);
				}
			});
		var points = $elm$core$List$reverse(
			A3($elm$core$List$foldl, fold, _List_Nil, data));
		var commands = function () {
			if (method.$ === 'Linear') {
				return $author$project$Internal$Interpolation$linear(points);
			} else {
				return $author$project$Internal$Interpolation$monotone(points);
			}
		}();
		return A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A3($elm$core$List$map2, toSets, points, commands));
	});
var $author$project$Chart$Svg$area = F6(
	function (plane, toX, toY2M, toY, edits, data) {
		var limits = A3(
			$author$project$Svg$Coordinates$fromProps,
			_List_fromArray(
				[
					A2($elm$core$Basics$composeR, toX, $elm$core$Maybe$Just)
				]),
			_List_fromArray(
				[
					toY,
					A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Basics$always(
						$elm$core$Maybe$Just(0)),
					toY2M)
				]),
			data);
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{color: $author$project$Chart$Svg$blue, dashed: _List_Nil, design: $elm$core$Maybe$Nothing, method: $elm$core$Maybe$Nothing, opacity: 0.2, width: 1});
		var _v0 = function () {
			var _v1 = config.design;
			if (_v1.$ === 'Nothing') {
				return _Utils_Tuple2(
					$elm$svg$Svg$text(''),
					config.color);
			} else {
				var design = _v1.a;
				return A2($author$project$Chart$Svg$toPattern, config.color, design);
			}
		}();
		var patternDefs = _v0.a;
		var fill = _v0.b;
		var view = function (cmds) {
			return A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__area-section'),
						$elm$svg$Svg$Attributes$fill(fill),
						$elm$svg$Svg$Attributes$fillOpacity(
						$elm$core$String$fromFloat(config.opacity)),
						$elm$svg$Svg$Attributes$strokeWidth('0'),
						$elm$svg$Svg$Attributes$fillRule('evenodd'),
						$elm$svg$Svg$Attributes$d(
						A2($author$project$Svg$Commands$description, plane, cmds)),
						$elm$svg$Svg$Attributes$style(
						A2($author$project$Chart$Svg$clipperStyle, plane, limits))
					]),
				_List_Nil);
		};
		var withUnder = F2(
			function (_v5, _v6) {
				var firstBottom = _v5.a;
				var cmdsBottom = _v5.b;
				var endBottom = _v5.c;
				var firstTop = _v6.a;
				var cmdsTop = _v6.b;
				var endTop = _v6.c;
				return view(
					_Utils_ap(
						_List_fromArray(
							[
								A2($author$project$Svg$Commands$Move, firstBottom.x, firstBottom.y),
								A2($author$project$Svg$Commands$Line, firstTop.x, firstTop.y)
							]),
						_Utils_ap(
							cmdsTop,
							_Utils_ap(
								_List_fromArray(
									[
										A2($author$project$Svg$Commands$Move, firstBottom.x, firstBottom.y)
									]),
								_Utils_ap(
									cmdsBottom,
									_List_fromArray(
										[
											A2($author$project$Svg$Commands$Line, endTop.x, endTop.y)
										]))))));
			});
		var withoutUnder = function (_v4) {
			var first = _v4.a;
			var cmds = _v4.b;
			var end = _v4.c;
			return view(
				_Utils_ap(
					_List_fromArray(
						[
							A2($author$project$Svg$Commands$Move, first.x, 0),
							A2($author$project$Svg$Commands$Line, first.x, first.y)
						]),
					_Utils_ap(
						cmds,
						_List_fromArray(
							[
								A2($author$project$Svg$Commands$Line, end.x, 0)
							]))));
		};
		if (config.opacity <= 0) {
			return $elm$svg$Svg$text('');
		} else {
			var _v2 = config.method;
			if (_v2.$ === 'Nothing') {
				return $elm$svg$Svg$text('');
			} else {
				var method = _v2.a;
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__area-sections')
						]),
					function () {
						if (toY2M.$ === 'Nothing') {
							return A2(
								$elm$core$List$cons,
								patternDefs,
								A2(
									$elm$core$List$map,
									withoutUnder,
									A4($author$project$Chart$Svg$toCommands, method, toX, toY, data)));
						} else {
							var toY2 = toY2M.a;
							return A2(
								$elm$core$List$cons,
								patternDefs,
								A3(
									$elm$core$List$map2,
									withUnder,
									A4($author$project$Chart$Svg$toCommands, method, toX, toY2, data),
									A4($author$project$Chart$Svg$toCommands, method, toX, toY, data)));
						}
					}());
			}
		}
	});
var $author$project$Chart$Svg$interpolation = F5(
	function (plane, toX, toY, edits, data) {
		var limits = A3(
			$author$project$Svg$Coordinates$fromProps,
			_List_fromArray(
				[
					A2($elm$core$Basics$composeR, toX, $elm$core$Maybe$Just)
				]),
			_List_fromArray(
				[toY]),
			data);
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{color: $author$project$Chart$Svg$blue, dashed: _List_Nil, design: $elm$core$Maybe$Nothing, method: $elm$core$Maybe$Nothing, opacity: 0, width: 1});
		var view = function (_v1) {
			var first = _v1.a;
			var cmds = _v1.b;
			return A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__interpolation-section'),
						$elm$svg$Svg$Attributes$fill('transparent'),
						$elm$svg$Svg$Attributes$stroke(config.color),
						$elm$svg$Svg$Attributes$strokeDasharray(
						A2(
							$elm$core$String$join,
							' ',
							A2($elm$core$List$map, $elm$core$String$fromFloat, config.dashed))),
						$elm$svg$Svg$Attributes$strokeWidth(
						$elm$core$String$fromFloat(config.width)),
						$elm$svg$Svg$Attributes$d(
						A2(
							$author$project$Svg$Commands$description,
							plane,
							A2(
								$elm$core$List$cons,
								A2($author$project$Svg$Commands$Move, first.x, first.y),
								cmds))),
						$elm$svg$Svg$Attributes$style(
						A2($author$project$Chart$Svg$clipperStyle, plane, limits))
					]),
				_List_Nil);
		};
		var _v0 = config.method;
		if (_v0.$ === 'Nothing') {
			return $elm$svg$Svg$text('');
		} else {
			var method = _v0.a;
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__interpolation-sections')
					]),
				A2(
					$elm$core$List$map,
					view,
					A4($author$project$Chart$Svg$toCommands, method, toX, toY, data)));
		}
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $author$project$Chart$Svg$toRadius = F2(
	function (size_, shape) {
		var area_ = (2 * $elm$core$Basics$pi) * size_;
		switch (shape.$) {
			case 'Circle':
				return $elm$core$Basics$sqrt(area_ / $elm$core$Basics$pi);
			case 'Triangle':
				var side = $elm$core$Basics$sqrt(
					(area_ * 4) / $elm$core$Basics$sqrt(3));
				return $elm$core$Basics$sqrt(3) * side;
			case 'Square':
				return $elm$core$Basics$sqrt(area_) / 2;
			case 'Diamond':
				return $elm$core$Basics$sqrt(area_) / 2;
			case 'Cross':
				return $elm$core$Basics$sqrt(area_ / 4);
			default:
				return $elm$core$Basics$sqrt(area_ / 4);
		}
	});
var $author$project$Chart$Item$toDotSeries = F3(
	function (toX, properties, data) {
		var toInterConfig = function (attrs) {
			return A2(
				$author$project$Chart$Item$apply,
				attrs,
				{color: $author$project$Chart$Attributes$blue, dashed: _List_Nil, design: $elm$core$Maybe$Nothing, method: $elm$core$Maybe$Nothing, opacity: 0, width: 1});
		};
		var toDotConfig = function (attrs) {
			return A2(
				$author$project$Chart$Item$apply,
				attrs,
				{aura: 0, auraWidth: 10, border: 'white', borderWidth: 1, color: $author$project$Chart$Attributes$blue, opacity: 1, shape: $elm$core$Maybe$Nothing, size: 6});
		};
		var toDotItem = F5(
			function (lineIndex, sublineIndex, prop, interConfig, datum_) {
				var y_ = A2(
					$elm$core$Maybe$withDefault,
					0,
					prop.visual(datum_));
				var x_ = toX(datum_);
				var defaultAttrs = _List_fromArray(
					[
						$author$project$Chart$Attributes$color(interConfig.color),
						_Utils_eq(interConfig.method, $elm$core$Maybe$Nothing) ? $author$project$Chart$Attributes$circle : $elm$core$Basics$identity
					]);
				var dotAttrs = _Utils_ap(
					defaultAttrs,
					_Utils_ap(
						prop.attrs,
						prop.extra(datum_)));
				var config = toDotConfig(dotAttrs);
				return $author$project$Chart$Item$Item(
					{
						details: {
							config: config,
							datum: datum_,
							name: prop.meta,
							property: lineIndex,
							stack: sublineIndex,
							x1: x_,
							x2: x_,
							y: prop.value(datum_)
						},
						limits: function (_v2) {
							return {x1: x_, x2: x_, y1: y_, y2: y_};
						},
						position: F2(
							function (plane, _v3) {
								var radius = A2(
									$elm$core$Maybe$withDefault,
									0,
									A2(
										$elm$core$Maybe$map,
										$author$project$Chart$Svg$toRadius(config.size),
										config.shape));
								var radiusX_ = A2($author$project$Svg$Coordinates$scaleCartesianX, plane, radius);
								var radiusY_ = A2($author$project$Svg$Coordinates$scaleCartesianY, plane, radius);
								return {x1: x_ - radiusX_, x2: x_ + radiusX_, y1: y_ - radiusY_, y2: y_ + radiusY_};
							}),
						render: F3(
							function (plane, _v4, _v5) {
								var _v6 = prop.value(datum_);
								if (_v6.$ === 'Nothing') {
									return $elm$svg$Svg$text('');
								} else {
									return A5(
										$author$project$Chart$Svg$dot,
										plane,
										function ($) {
											return $.x;
										},
										function ($) {
											return $.y;
										},
										dotAttrs,
										{x: x_, y: y_});
								}
							})
					});
			});
		var toSeriesItem = F3(
			function (lineIndex, sublineIndex, prop) {
				var interAttr = _Utils_ap(
					_List_fromArray(
						[
							$author$project$Chart$Attributes$color(
							$author$project$Chart$Item$toDefaultColor(lineIndex)),
							$author$project$Chart$Attributes$opacity(0)
						]),
					prop.inter);
				var interConfig = toInterConfig(interAttr);
				var dotItems = A2(
					$elm$core$List$map,
					A4(toDotItem, lineIndex, sublineIndex, prop, interConfig),
					data);
				return $author$project$Chart$Item$Item(
					{
						details: {config: interConfig, items: dotItems},
						limits: function (c) {
							return A2($author$project$Svg$Coordinates$foldPosition, $author$project$Chart$Item$getLimits, c.items);
						},
						position: F2(
							function (plane, c) {
								return A2(
									$author$project$Svg$Coordinates$foldPosition,
									$author$project$Chart$Item$getPosition(plane),
									c.items);
							}),
						render: F3(
							function (plane, _v0, _v1) {
								var toBottom = function (datum_) {
									return A3(
										$elm$core$Maybe$map2,
										F2(
											function (real, visual) {
												return visual - real;
											}),
										prop.value(datum_),
										prop.visual(datum_));
								};
								return A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$class('elm-charts__series')
										]),
									_List_fromArray(
										[
											A6(
											$author$project$Chart$Svg$area,
											plane,
											toX,
											$elm$core$Maybe$Just(toBottom),
											prop.visual,
											interAttr,
											data),
											A5($author$project$Chart$Svg$interpolation, plane, toX, prop.visual, interAttr, data),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$class('elm-charts__dots')
												]),
											A2(
												$elm$core$List$map,
												$author$project$Chart$Item$render(plane),
												dotItems))
										]));
							})
					});
			});
		return $elm$core$List$concat(
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (lineIndex, ps) {
						return A2(
							$elm$core$List$indexedMap,
							toSeriesItem(lineIndex),
							ps);
					}),
				A2($elm$core$List$map, $author$project$Internal$Property$toConfigs, properties)));
	});
var $author$project$Chart$series = F3(
	function (toX, properties, data) {
		var items = A3($author$project$Chart$Item$toDotSeries, toX, properties, data);
		var toLimits = A2($elm$core$List$map, $author$project$Chart$Item$getLimits, items);
		var generalized = A2(
			$elm$core$List$map,
			$author$project$Chart$Item$toGeneral($author$project$Chart$Item$DotConfig),
			A2($elm$core$List$concatMap, $author$project$Chart$Item$getProducts, items));
		return A3(
			$author$project$Chart$SeriesElement,
			toLimits,
			generalized,
			function (p) {
				return A2(
					$elm$svg$Svg$map,
					$elm$core$Basics$never,
					A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$class('elm-charts__dot-series')
							]),
						A2(
							$elm$core$List$map,
							$author$project$Chart$Item$render(p),
							items)));
			});
	});
var $author$project$Chart$HtmlElement = function (a) {
	return {$: 'HtmlElement', a: a};
};
var $author$project$Chart$html = function (func) {
	return $author$project$Chart$HtmlElement(
		function (p) {
			return func(p);
		});
};
var $author$project$Chart$Attributes$Bottom = {$: 'Bottom'};
var $author$project$Chart$Attributes$Right = {$: 'Right'};
var $author$project$Chart$Attributes$Top = {$: 'Top'};
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $author$project$Chart$Svg$positionHtml = F7(
	function (plane, x, y, xOff, yOff, attrs, content) {
		var yPercentage = ((A2($author$project$Svg$Coordinates$toSVGY, plane, y) + (-yOff)) * 100) / plane.height;
		var xPercentage = ((A2($author$project$Svg$Coordinates$toSVGX, plane, x) + xOff) * 100) / plane.width;
		var posititonStyles = _List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'left',
				$elm$core$String$fromFloat(xPercentage) + '%'),
				A2(
				$elm$html$Html$Attributes$style,
				'top',
				$elm$core$String$fromFloat(yPercentage) + '%'),
				A2($elm$html$Html$Attributes$style, 'margin-right', '-400px'),
				A2($elm$html$Html$Attributes$style, 'position', 'absolute')
			]);
		return A2(
			$elm$html$Html$div,
			_Utils_ap(posititonStyles, attrs),
			content);
	});
var $author$project$Chart$Svg$tooltipPointerStyle = F4(
	function (direction, className, background, borderColor) {
		var config = function () {
			switch (direction.$) {
				case 'Top':
					return {a: 'right', b: 'top', c: 'left'};
				case 'Bottom':
					return {a: 'right', b: 'bottom', c: 'left'};
				case 'Left':
					return {a: 'bottom', b: 'left', c: 'top'};
				case 'Right':
					return {a: 'bottom', b: 'right', c: 'top'};
				case 'LeftOrRight':
					return {a: 'bottom', b: 'left', c: 'top'};
				default:
					return {a: 'right', b: 'top', c: 'left'};
			}
		}();
		return '\n  .' + (className + (':before, .' + (className + (':after {\n    content: "";\n    position: absolute;\n    border-' + (config.c + (': 5px solid transparent;\n    border-' + (config.a + (': 5px solid transparent;\n    ' + (config.b + (': 100%;\n    ' + (config.c + (': 50%;\n    margin-' + (config.c + (': -5px;\n  }\n\n  .' + (className + (':after {\n    border-' + (config.b + (': 5px solid ' + (background + (';\n    margin-' + (config.b + (': -1px;\n    z-index: 1;\n  }\n\n  .' + (className + (':before {\n    border-' + (config.b + (': 5px solid ' + (borderColor + ';\n  }\n  ')))))))))))))))))))))))))));
	});
var $author$project$Chart$Svg$tooltip = F5(
	function (plane, pos, edits, htmlAttrs, content) {
		var distanceTop = A2($author$project$Svg$Coordinates$toSVGY, plane, pos.y2);
		var distanceRight = plane.width - A2($author$project$Svg$Coordinates$toSVGX, plane, pos.x1);
		var distanceLeft = A2($author$project$Svg$Coordinates$toSVGX, plane, pos.x2);
		var distanceBottom = plane.height - A2($author$project$Svg$Coordinates$toSVGY, plane, pos.y1);
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{background: 'white', border: '#D8D8D8', direction: $elm$core$Maybe$Nothing, height: 0, offset: 12, pointer: true, width: 0});
		var direction = function () {
			var _v4 = config.direction;
			if (_v4.$ === 'Just') {
				switch (_v4.a.$) {
					case 'LeftOrRight':
						var _v5 = _v4.a;
						return (config.width > 0) ? ((_Utils_cmp(distanceLeft, config.width + config.offset) > 0) ? $author$project$Chart$Attributes$Left : $author$project$Chart$Attributes$Right) : ((_Utils_cmp(distanceLeft, distanceRight) > 0) ? $author$project$Chart$Attributes$Left : $author$project$Chart$Attributes$Right);
					case 'TopOrBottom':
						var _v6 = _v4.a;
						return (config.height > 0) ? ((_Utils_cmp(distanceTop, config.height + config.offset) > 0) ? $author$project$Chart$Attributes$Top : $author$project$Chart$Attributes$Bottom) : ((_Utils_cmp(distanceTop, distanceBottom) > 0) ? $author$project$Chart$Attributes$Top : $author$project$Chart$Attributes$Bottom);
					default:
						var dir = _v4.a;
						return dir;
				}
			} else {
				var isLargest = function (a) {
					return $elm$core$List$all(
						function (b) {
							return _Utils_cmp(a, b) > -1;
						});
				};
				return A2(
					isLargest,
					distanceTop,
					_List_fromArray(
						[distanceBottom, distanceLeft, distanceRight])) ? $author$project$Chart$Attributes$Top : (A2(
					isLargest,
					distanceBottom,
					_List_fromArray(
						[distanceTop, distanceLeft, distanceRight])) ? $author$project$Chart$Attributes$Bottom : (A2(
					isLargest,
					distanceLeft,
					_List_fromArray(
						[distanceTop, distanceBottom, distanceRight])) ? $author$project$Chart$Attributes$Left : $author$project$Chart$Attributes$Right));
			}
		}();
		var _v0 = function () {
			switch (direction.$) {
				case 'Top':
					return _Utils_Tuple2(pos.x1 + ((pos.x2 - pos.x1) / 2), pos.y2);
				case 'Bottom':
					return _Utils_Tuple2(pos.x1 + ((pos.x2 - pos.x1) / 2), pos.y1);
				case 'Left':
					return _Utils_Tuple2(pos.x1, pos.y1 + ((pos.y2 - pos.y1) / 2));
				case 'Right':
					return _Utils_Tuple2(pos.x2, pos.y1 + ((pos.y2 - pos.y1) / 2));
				case 'LeftOrRight':
					return _Utils_Tuple2(pos.x2, pos.y1 + ((pos.y2 - pos.y1) / 2));
				default:
					return _Utils_Tuple2(pos.x1 + ((pos.x2 - pos.x1) / 2), pos.y2);
			}
		}();
		var x = _v0.a;
		var y = _v0.b;
		var _v2 = function () {
			switch (direction.$) {
				case 'Top':
					return {className: 'elm-charts__tooltip-top', transformation: 'translate(-50%, -100%)', xOff: 0, yOff: config.offset};
				case 'Bottom':
					return {className: 'elm-charts__tooltip-bottom', transformation: 'translate(-50%, 0%)', xOff: 0, yOff: -config.offset};
				case 'Left':
					return {className: 'elm-charts__tooltip-left', transformation: 'translate(-100%, -50%)', xOff: -config.offset, yOff: 0};
				case 'Right':
					return {className: 'elm-charts__tooltip-right', transformation: 'translate(0, -50%)', xOff: config.offset, yOff: 0};
				case 'LeftOrRight':
					return {className: 'elm-charts__tooltip-leftOrRight', transformation: 'translate(0, -50%)', xOff: -config.offset, yOff: 0};
				default:
					return {className: 'elm-charts__tooltip-topOrBottom', transformation: 'translate(-50%, -100%)', xOff: 0, yOff: config.offset};
			}
		}();
		var xOff = _v2.xOff;
		var yOff = _v2.yOff;
		var transformation = _v2.transformation;
		var className = _v2.className;
		var children = config.pointer ? A2(
			$elm$core$List$cons,
			A3(
				$elm$html$Html$node,
				'style',
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						A4($author$project$Chart$Svg$tooltipPointerStyle, direction, className, config.background, config.border))
					])),
			content) : content;
		var attributes = _Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(className),
					A2($elm$html$Html$Attributes$style, 'transform', transformation),
					A2($elm$html$Html$Attributes$style, 'padding', '5px 10px'),
					A2($elm$html$Html$Attributes$style, 'background', config.background),
					A2($elm$html$Html$Attributes$style, 'border', '1px solid ' + config.border),
					A2($elm$html$Html$Attributes$style, 'border-radius', '3px'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none')
				]),
			htmlAttrs);
		return A2(
			$elm$html$Html$map,
			$elm$core$Basics$never,
			A7($author$project$Chart$Svg$positionHtml, plane, x, y, xOff, yOff, attributes, children));
	});
var $author$project$Chart$tooltip = F4(
	function (i, edits, attrs_, content) {
		return $author$project$Chart$html(
			function (p) {
				var pos = $author$project$Chart$Item$getLimits(i);
				return A3($author$project$Chart$Svg$isWithinPlane, p, pos.x1, pos.y2) ? A5(
					$author$project$Chart$Svg$tooltip,
					p,
					A2($author$project$Chart$Item$getPosition, p, i),
					edits,
					attrs_,
					content) : $elm$html$Html$text('');
			});
	});
var $author$project$Section$Interactivity$view = F4(
	function (onSelect, selected, onMsg, model) {
		var frame = function (tooltip) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '300px'),
						A2($elm$html$Html$Attributes$style, 'height', '300px')
					]),
				_List_fromArray(
					[
						A2(
						$author$project$Chart$chart,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$height(300),
								$author$project$Chart$Attributes$width(300),
								$author$project$Chart$Attributes$events(
								_List_fromArray(
									[
										A2(
										$author$project$Chart$event,
										'mousemove',
										A2(
											$author$project$Chart$map,
											A2($elm$core$Basics$composeR, $author$project$Section$Interactivity$OnHover, onMsg),
											A2($author$project$Chart$getNearest, $author$project$Chart$Item$getCenter, $elm$core$Basics$identity))),
										A2(
										$author$project$Chart$event,
										'mouseleave',
										A2(
											$author$project$Chart$map,
											function (_v16) {
												return onMsg(
													$author$project$Section$Interactivity$OnHover(_List_Nil));
											},
											$author$project$Chart$getCoords))
									]))
							]),
						_List_fromArray(
							[
								$author$project$Chart$grid(_List_Nil),
								$author$project$Chart$xLabels(_List_Nil),
								$author$project$Chart$yLabels(_List_Nil),
								A3(
								$author$project$Chart$series,
								function ($) {
									return $.x;
								},
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil,
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil,
										_List_Nil)
									]),
								$author$project$Section$Interactivity$data),
								tooltip
							]))
					]));
		};
		return $author$project$Ui$Section$view(
			{
				configs: _List_fromArray(
					[
						{
						chart: function (_v0) {
							return frame(
								A2(
									$author$project$Chart$each,
									function (_v1) {
										return model.hovering;
									},
									F2(
										function (p, item) {
											return _List_fromArray(
												[
													A4(
													$author$project$Chart$tooltip,
													item,
													_List_Nil,
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																$author$project$Chart$Item$getInd(item))),
															$elm$html$Html$text(', '),
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																A2(
																	$elm$core$Maybe$withDefault,
																	0,
																	$author$project$Chart$Item$getValue(item))))
														]))
												]);
										})));
						},
						code: '\n          C.each (always model.hovering) <| \\p item ->\n            [ C.tooltip item [] []\n                [ H.text <| String.fromFloat (CI.getInd item)\n                , H.text ", "\n                , H.text <| String.fromFloat (CI.getValue item)\n                ]\n            ]\n              ',
						title: 'Basic'
					},
						{
						chart: function (_v2) {
							return frame(
								A2(
									$author$project$Chart$each,
									function (_v3) {
										return model.hovering;
									},
									F2(
										function (p, item) {
											return _List_fromArray(
												[
													A4(
													$author$project$Chart$tooltip,
													item,
													_List_fromArray(
														[$author$project$Chart$Attributes$onLeft]),
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																$author$project$Chart$Item$getInd(item))),
															$elm$html$Html$text(', '),
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																A2(
																	$elm$core$Maybe$withDefault,
																	0,
																	$author$project$Chart$Item$getValue(item))))
														]))
												]);
										})));
						},
						code: '\n          C.each (always model.hovering) <| \\p item ->\n            [ C.tooltip item [ CA.onLeft ] []\n                [ H.text <| String.fromFloat (CI.getInd item)\n                , H.text ", "\n                , H.text <| String.fromFloat (CI.getValue item)\n                ]\n            ]\n              ',
						title: 'Direction'
					},
						{
						chart: function (_v4) {
							return frame(
								A2(
									$author$project$Chart$each,
									function (_v5) {
										return model.hovering;
									},
									F2(
										function (p, item) {
											return _List_fromArray(
												[
													A4(
													$author$project$Chart$tooltip,
													item,
													_List_fromArray(
														[$author$project$Chart$Attributes$noPointer]),
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																$author$project$Chart$Item$getInd(item))),
															$elm$html$Html$text(', '),
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																A2(
																	$elm$core$Maybe$withDefault,
																	0,
																	$author$project$Chart$Item$getValue(item))))
														]))
												]);
										})));
						},
						code: '\n          C.each (always model.hovering) <| \\p item ->\n            [ C.tooltip item [ CA.noPointer ] []\n                [ H.text <| String.fromFloat (CI.getInd item)\n                , H.text ", "\n                , H.text <| String.fromFloat (CI.getValue item)\n                ]\n            ]\n              ',
						title: 'No arrow'
					},
						{
						chart: function (_v6) {
							return frame(
								A2(
									$author$project$Chart$each,
									function (_v7) {
										return model.hovering;
									},
									F2(
										function (p, item) {
											return _List_fromArray(
												[
													A4(
													$author$project$Chart$tooltip,
													item,
													_List_fromArray(
														[
															$author$project$Chart$Attributes$offset(0)
														]),
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																$author$project$Chart$Item$getInd(item))),
															$elm$html$Html$text(', '),
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																A2(
																	$elm$core$Maybe$withDefault,
																	0,
																	$author$project$Chart$Item$getValue(item))))
														]))
												]);
										})));
						},
						code: '\n          C.each (always model.hovering) <| \\p item ->\n            [ C.tooltip item [ CA.offset 0 ] []\n                [ H.text <| String.fromFloat (CI.getInd item)\n                , H.text ", "\n                , H.text <| String.fromFloat (CI.getValue item)\n                ]\n            ]\n              ',
						title: 'Offset'
					},
						{
						chart: function (_v8) {
							return frame(
								A2(
									$author$project$Chart$each,
									function (_v9) {
										return model.hovering;
									},
									F2(
										function (p, item) {
											return _List_fromArray(
												[
													A4(
													$author$project$Chart$tooltip,
													item,
													_List_fromArray(
														[
															$author$project$Chart$Attributes$width(20),
															$author$project$Chart$Attributes$onLeftOrRight
														]),
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																$author$project$Chart$Item$getInd(item))),
															$elm$html$Html$text(', '),
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																A2(
																	$elm$core$Maybe$withDefault,
																	0,
																	$author$project$Chart$Item$getValue(item))))
														]))
												]);
										})));
						},
						code: '\n          C.each (always model.hovering) <| \\p item ->\n            [ C.tooltip item [ CA.width 20, CA.onLeftOrRight ] []\n                [ H.text <| String.fromFloat (CI.getInd item)\n                , H.text ", "\n                , H.text <| String.fromFloat (CI.getValue item)\n                ]\n            ]\n              ',
						title: 'Width'
					},
						{
						chart: function (_v10) {
							return frame(
								A2(
									$author$project$Chart$each,
									function (_v11) {
										return model.hovering;
									},
									F2(
										function (p, item) {
											return _List_fromArray(
												[
													A4(
													$author$project$Chart$tooltip,
													item,
													_List_fromArray(
														[
															$author$project$Chart$Attributes$height(20),
															$author$project$Chart$Attributes$onTopOrBottom
														]),
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																$author$project$Chart$Item$getInd(item))),
															$elm$html$Html$text(', '),
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																A2(
																	$elm$core$Maybe$withDefault,
																	0,
																	$author$project$Chart$Item$getValue(item))))
														]))
												]);
										})));
						},
						code: '\n          C.each (always model.hovering) <| \\p item ->\n            [ C.tooltip item [ CA.height 20, CA.onTopOrBottom ] []\n                [ H.text <| String.fromFloat (CI.getInd item)\n                , H.text ", "\n                , H.text <| String.fromFloat (CI.getValue item)\n                ]\n            ]\n              ',
						title: 'Height'
					},
						{
						chart: function (_v12) {
							return frame(
								A2(
									$author$project$Chart$each,
									function (_v13) {
										return model.hovering;
									},
									F2(
										function (p, item) {
											return _List_fromArray(
												[
													A4(
													$author$project$Chart$tooltip,
													item,
													_List_fromArray(
														[
															$author$project$Chart$Attributes$border('red')
														]),
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																$author$project$Chart$Item$getInd(item))),
															$elm$html$Html$text(', '),
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																A2(
																	$elm$core$Maybe$withDefault,
																	0,
																	$author$project$Chart$Item$getValue(item))))
														]))
												]);
										})));
						},
						code: '\n          C.each (always model.hovering) <| \\p item ->\n            [ C.tooltip item [ CA.border "red" ] []\n                [ H.text <| String.fromFloat (CI.getInd item)\n                , H.text ", "\n                , H.text <| String.fromFloat (CI.getValue item)\n                ]\n            ]\n              ',
						title: 'Border'
					},
						{
						chart: function (_v14) {
							return frame(
								A2(
									$author$project$Chart$each,
									function (_v15) {
										return model.hovering;
									},
									F2(
										function (p, item) {
											return _List_fromArray(
												[
													A4(
													$author$project$Chart$tooltip,
													item,
													_List_fromArray(
														[
															$author$project$Chart$Attributes$background('beige')
														]),
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																$author$project$Chart$Item$getInd(item))),
															$elm$html$Html$text(', '),
															$elm$html$Html$text(
															$elm$core$String$fromFloat(
																A2(
																	$elm$core$Maybe$withDefault,
																	0,
																	$author$project$Chart$Item$getValue(item))))
														]))
												]);
										})));
						},
						code: '\n          C.each (always model.hovering) <| \\p item ->\n            [ C.tooltip item [ CA.background "beige" ] []\n                [ H.text <| String.fromFloat (CI.getInd item)\n                , H.text ", "\n                , H.text <| String.fromFloat (CI.getValue item)\n                ]\n            ]\n              ',
						title: 'Background'
					}
					]),
				frame: '\n        C.chart\n          [ CA.height 300\n          , CA.width 300\n          , CA.events\n              [ C.event "mousemove" <|\n                  C.map OnHover (C.getNearest CI.getCenter identity)\n              , C.event "mouseleave" <|\n                  C.map OnReset C.getCoords\n              ]\n          ]\n          [ C.grid []\n          , C.xLabels []\n          , C.yLabels []\n          , C.series .x props data\n          , {{CONFIG}}\n          ]\n        ',
				onSelect: onSelect,
				selected: selected,
				title: 'Interactivity'
			});
	});
var $author$project$Chart$Attributes$bottom = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{bottom: value});
	});
var $author$project$Chart$Attributes$dashed = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{dashed: value});
	});
var $author$project$Section$LineChart$Datum = F7(
	function (x, y, z, v, w, p, q) {
		return {p: p, q: q, v: v, w: w, x: x, y: y, z: z};
	});
var $author$project$Section$LineChart$data = function () {
	var toDatum = F7(
		function (x, y, z, v, w, p, q) {
			return A7(
				$author$project$Section$LineChart$Datum,
				x,
				$elm$core$Maybe$Just(y),
				$elm$core$Maybe$Just(z),
				$elm$core$Maybe$Just(v),
				$elm$core$Maybe$Just(w),
				$elm$core$Maybe$Just(p),
				$elm$core$Maybe$Just(q));
		});
	return _List_fromArray(
		[
			A7(toDatum, 1, 2, 1, 4.6, 6.9, 7.3, 8.0),
			A7(toDatum, 2, 3, 2, 5.2, 6.2, 7.0, 8.7),
			A7(toDatum, 3, 4, 3, 5.5, 5.2, 7.2, 8.1),
			A7(toDatum, 4, 3, 4, 5.3, 5.7, 6.2, 7.8),
			A7(toDatum, 5, 2, 3, 4.9, 5.9, 6.7, 8.2),
			A7(toDatum, 6, 4, 1, 4.8, 5.4, 7.2, 8.3),
			A7(toDatum, 7, 5, 2, 5.3, 5.1, 7.8, 7.1),
			A7(toDatum, 8, 6, 3, 5.4, 3.9, 7.6, 8.5),
			A7(toDatum, 9, 5, 4, 5.8, 4.6, 6.5, 6.9),
			A7(toDatum, 10, 4, 3, 4.5, 5.3, 6.3, 7.0)
		]);
}();
var $author$project$Chart$Attributes$Gradient = function (a) {
	return {$: 'Gradient', a: a};
};
var $author$project$Chart$Attributes$gradient = F2(
	function (attrs_, config) {
		return _Utils_update(
			config,
			{
				design: $elm$core$Maybe$Just(
					$author$project$Chart$Attributes$Gradient(attrs_)),
				opacity: (!config.opacity) ? 1 : config.opacity
			});
	});
var $author$project$Chart$Attributes$Linear = {$: 'Linear'};
var $author$project$Chart$Attributes$linear = function (config) {
	return _Utils_update(
		config,
		{
			method: $elm$core$Maybe$Just($author$project$Chart$Attributes$Linear)
		});
};
var $author$project$Chart$Attributes$Monotone = {$: 'Monotone'};
var $author$project$Chart$Attributes$monotone = function (config) {
	return _Utils_update(
		config,
		{
			method: $elm$core$Maybe$Just($author$project$Chart$Attributes$Monotone)
		});
};
var $author$project$Chart$Attributes$space = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{space: value});
	});
var $author$project$Section$LineChart$view = F2(
	function (onSelect, selected) {
		var frame = function (props) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '300px'),
						A2($elm$html$Html$Attributes$style, 'height', '300px')
					]),
				_List_fromArray(
					[
						A2(
						$author$project$Chart$chart,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$height(300),
								$author$project$Chart$Attributes$width(300)
							]),
						_List_fromArray(
							[
								$author$project$Chart$grid(_List_Nil),
								$author$project$Chart$xLabels(_List_Nil),
								$author$project$Chart$yLabels(_List_Nil),
								A3(
								$author$project$Chart$series,
								function ($) {
									return $.x;
								},
								props,
								$author$project$Section$LineChart$data)
							]))
					]));
		};
		return $author$project$Ui$Section$view(
			{
				configs: _List_fromArray(
					[
						{
						chart: function (_v0) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[$author$project$Chart$Attributes$linear]),
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_fromArray(
											[$author$project$Chart$Attributes$linear]),
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [ CA.linear ] []\n              , C.property .z "z" [ CA.linear ] []\n              ]\n              ',
						title: 'Basic'
					},
						{
						chart: function (_v1) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$stacked(
										_List_fromArray(
											[
												A4(
												$author$project$Chart$property,
												function ($) {
													return $.y;
												},
												'y',
												_List_fromArray(
													[$author$project$Chart$Attributes$linear]),
												_List_Nil),
												A4(
												$author$project$Chart$property,
												function ($) {
													return $.z;
												},
												'z',
												_List_fromArray(
													[
														$author$project$Chart$Attributes$linear,
														$author$project$Chart$Attributes$color($author$project$Chart$Attributes$green)
													]),
												_List_Nil)
											]))
									]));
						},
						code: '\n              [ C.stacked\n                [ C.property .y "y" [ CA.linear ] []\n                , C.property .z "z" [ CA.linear ] []\n                ]\n              ]\n              ',
						title: 'Stacked'
					},
						{
						chart: function (_v2) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[$author$project$Chart$Attributes$monotone]),
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_fromArray(
											[$author$project$Chart$Attributes$monotone]),
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [ CA.monotone ] []\n              , C.property .z "z" [ CA.monotone ] []\n              ]\n              ',
						title: 'Montone'
					},
						{
						chart: function (_v3) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$linear,
												$author$project$Chart$Attributes$color('purple')
											]),
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_fromArray(
											[$author$project$Chart$Attributes$linear]),
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [ CA.linear, CA.color "purple" ] []\n              , C.property .z "z" [ CA.linear ] []\n              ]\n              ',
						title: 'Color'
					},
						{
						chart: function (_v4) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$linear,
												$author$project$Chart$Attributes$width(3)
											]),
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_fromArray(
											[$author$project$Chart$Attributes$linear]),
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [ CA.linear, CA.width 3 ] []\n              , C.property .z "z" [ CA.linear ] []\n              ]\n              ',
						title: 'Width'
					},
						{
						chart: function (_v5) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$linear,
												$author$project$Chart$Attributes$opacity(0.2)
											]),
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$linear,
												$author$project$Chart$Attributes$opacity(0.2)
											]),
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [ CA.linear, CA.opacity 0.2 ] []\n              , C.property .z "z" [ CA.linear, CA.opacity 0.2 ] []\n              ]\n              ',
						title: 'Area'
					},
						{
						chart: function (_v6) {
							return frame(
								_List_fromArray(
									[
										$author$project$Chart$stacked(
										_List_fromArray(
											[
												A4(
												$author$project$Chart$property,
												function ($) {
													return $.y;
												},
												'y',
												_List_fromArray(
													[
														$author$project$Chart$Attributes$linear,
														$author$project$Chart$Attributes$striped(
														_List_fromArray(
															[
																$author$project$Chart$Attributes$width(3),
																$author$project$Chart$Attributes$space(4),
																$author$project$Chart$Attributes$rotate(90)
															]))
													]),
												_List_Nil),
												A4(
												$author$project$Chart$property,
												function ($) {
													return $.z;
												},
												'z',
												_List_fromArray(
													[
														$author$project$Chart$Attributes$linear,
														$author$project$Chart$Attributes$dotted(
														_List_fromArray(
															[
																$author$project$Chart$Attributes$width(3),
																$author$project$Chart$Attributes$space(4)
															]))
													]),
												_List_Nil)
											]))
									]));
						},
						code: '\n              [ C.stacked\n                [ C.property .y "y" [ CA.linear, CA.striped [ CA.width 3, CA.space 4, CA.rotate 90 ] ] []\n                , C.property .z "z" [ CA.linear, CA.dotted [ CA.width 3, CA.space 4 ] ] []\n                ]\n              ]\n              ',
						title: 'Pattern'
					},
						{
						chart: function (_v7) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$linear,
												$author$project$Chart$Attributes$opacity(0.6),
												$author$project$Chart$Attributes$gradient(
												_List_fromArray(
													[
														$author$project$Chart$Attributes$bottom('lightblue')
													]))
											]),
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [ CA.linear, CA.opacity 0.6, CA.gradient [ CA.bottom "lightblue" ] ] []\n              ]\n              ',
						title: 'Gradient'
					},
						{
						chart: function (_v8) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$linear,
												$author$project$Chart$Attributes$dashed(
												_List_fromArray(
													[2, 2]))
											]),
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_fromArray(
											[
												$author$project$Chart$Attributes$linear,
												$author$project$Chart$Attributes$dashed(
												_List_fromArray(
													[5, 2]))
											]),
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [ CA.linear, CA.dashed [ 2, 2 ] ] []\n              , C.property .z "z" [ CA.linear, CA.dashed [ 5, 2 ] ] []\n              ]\n              ',
						title: 'Dashed'
					},
						{
						chart: function (_v9) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_fromArray(
											[$author$project$Chart$Attributes$linear]),
										_List_fromArray(
											[$author$project$Chart$Attributes$circle]))
									]));
						},
						code: '\n              [ C.property .y "y" [ CA.linear ] [ CA.circle ]\n              ]\n              ',
						title: 'Dots'
					}
					]),
				frame: '\n        C.chart\n          [ CA.height 300\n          , CA.width 300\n          ]\n          [ C.grid []\n          , C.xLabels []\n          , C.yLabels []\n          , C.series .x\n              {{CONFIG}}\n              data\n          ]\n        ',
				onSelect: onSelect,
				selected: selected,
				title: 'Line charts'
			});
	});
var $author$project$Section$ScatterChart$Datum = F7(
	function (x, y, z, v, w, p, q) {
		return {p: p, q: q, v: v, w: w, x: x, y: y, z: z};
	});
var $author$project$Section$ScatterChart$data = function () {
	var toDatum = F7(
		function (x, y, z, v, w, p, q) {
			return A7(
				$author$project$Section$ScatterChart$Datum,
				x,
				$elm$core$Maybe$Just(y),
				$elm$core$Maybe$Just(z),
				$elm$core$Maybe$Just(v),
				$elm$core$Maybe$Just(w),
				$elm$core$Maybe$Just(p),
				$elm$core$Maybe$Just(q));
		});
	return _List_fromArray(
		[
			A7(toDatum, 0.0, 2.0, 4.0, 4.6, 6.9, 7.3, 8.0),
			A7(toDatum, 0.2, 3.0, 4.2, 5.2, 6.2, 7.0, 8.7),
			A7(toDatum, 0.8, 4.0, 4.6, 5.5, 5.2, 7.2, 8.1),
			A7(toDatum, 1.0, 2.0, 4.2, 5.3, 5.7, 6.2, 7.8),
			A7(toDatum, 1.2, 5.0, 3.5, 4.9, 5.9, 6.7, 8.2),
			A7(toDatum, 2.0, 2.0, 3.2, 4.8, 5.4, 7.2, 8.3),
			A7(toDatum, 2.3, 1.0, 4.3, 5.3, 5.1, 7.8, 7.1),
			A7(toDatum, 2.8, 3.0, 2.9, 5.4, 3.9, 7.6, 8.5),
			A7(toDatum, 3.0, 2.0, 3.6, 5.8, 4.6, 6.5, 6.9),
			A7(toDatum, 4.0, 1.0, 4.2, 4.5, 5.3, 6.3, 7.0)
		]);
}();
var $author$project$Chart$Attributes$Square = {$: 'Square'};
var $author$project$Chart$Attributes$square = function (config) {
	return _Utils_update(
		config,
		{
			shape: $elm$core$Maybe$Just($author$project$Chart$Attributes$Square)
		});
};
var $author$project$Chart$Attributes$Triangle = {$: 'Triangle'};
var $author$project$Chart$Attributes$triangle = function (config) {
	return _Utils_update(
		config,
		{
			shape: $elm$core$Maybe$Just($author$project$Chart$Attributes$Triangle)
		});
};
var $author$project$Section$ScatterChart$view = F2(
	function (onSelect, selected) {
		var frame = function (props) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '300px'),
						A2($elm$html$Html$Attributes$style, 'height', '300px')
					]),
				_List_fromArray(
					[
						A2(
						$author$project$Chart$chart,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$height(300),
								$author$project$Chart$Attributes$width(300)
							]),
						_List_fromArray(
							[
								$author$project$Chart$grid(_List_Nil),
								$author$project$Chart$xLabels(_List_Nil),
								$author$project$Chart$yLabels(_List_Nil),
								A3(
								$author$project$Chart$series,
								function ($) {
									return $.x;
								},
								props,
								$author$project$Section$ScatterChart$data)
							]))
					]));
		};
		return $author$project$Ui$Section$view(
			{
				configs: _List_fromArray(
					[
						{
						chart: function (_v0) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil,
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil,
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [] []\n              , C.property .z "z" [] []\n              ]\n              ',
						title: 'Basic'
					},
						{
						chart: function (_v1) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil,
										_List_fromArray(
											[$author$project$Chart$Attributes$circle])),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil,
										_List_fromArray(
											[$author$project$Chart$Attributes$square])),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.w;
										},
										'w',
										_List_Nil,
										_List_fromArray(
											[$author$project$Chart$Attributes$triangle]))
									]));
						},
						code: '\n              [ C.property .y "y" [] [ CA.circle ]\n              , C.property .z "z" [] [ CA.square ]\n              , C.property .w "w" [] [ CA.cross ]\n              ]\n              ',
						title: 'Shapes'
					},
						{
						chart: function (_v2) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Chart$Attributes$color('red')
											])),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Chart$Attributes$color('blue')
											]))
									]));
						},
						code: '\n              [ C.property .y "y" [] [ CA.color "red" ]\n              , C.property .z "z" [] [ CA.color "blue" ]\n              ]\n              ',
						title: 'Colors'
					},
						{
						chart: function (_v3) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Chart$Attributes$size(12)
											])),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Chart$Attributes$size(3)
											]))
									]));
						},
						code: '\n              [ C.property .y "y" [] [ CA.size 12 ]\n              , C.property .z "z" [] [ CA.size 3 ]\n              ]\n              ',
						title: 'Sizes'
					},
						{
						chart: function (_v4) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Chart$Attributes$opacity(0.5)
											])),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Chart$Attributes$opacity(0.5)
											]))
									]));
						},
						code: '\n              [ C.property .y "y" [] [ CA.opacity 0.5 ]\n              , C.property .z "z" [] [ CA.opacity 0.5 ]\n              ]\n              ',
						title: 'Opacity'
					},
						{
						chart: function (_v5) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Chart$Attributes$borderWidth(2),
												$author$project$Chart$Attributes$border('red')
											])),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil,
										_List_Nil)
									]));
						},
						code: '\n              [ C.property .y "y" [] [ CA.borderWidth 2, CA.border "red" ]\n              , C.property .z "z" [] []\n              ]\n              ',
						title: 'Borders'
					},
						{
						chart: function (_v6) {
							return frame(
								_List_fromArray(
									[
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.y;
										},
										'y',
										_List_Nil,
										_List_Nil),
										A4(
										$author$project$Chart$property,
										function ($) {
											return $.z;
										},
										'z',
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Chart$Attributes$aura(0.5)
											]))
									]));
						},
						code: '\n              [ C.property .y "y" [] []\n              , C.property .z "z" [] [ CA.aura 0.5  ]\n              ]\n              ',
						title: 'Highlight'
					},
						{
						chart: function (_v7) {
							return frame(
								_List_fromArray(
									[
										A2(
										$author$project$Chart$variation,
										function (d) {
											return _List_fromArray(
												[
													$author$project$Chart$Attributes$aura(
													(d.x === 3) ? 0.5 : 0)
												]);
										},
										A4(
											$author$project$Chart$property,
											function ($) {
												return $.y;
											},
											'y',
											_List_Nil,
											_List_Nil)),
										A2(
										$author$project$Chart$variation,
										function (d) {
											return _List_fromArray(
												[
													$author$project$Chart$Attributes$size((d.x * 2) + 2)
												]);
										},
										A4(
											$author$project$Chart$property,
											function ($) {
												return $.z;
											},
											'z',
											_List_Nil,
											_List_Nil))
									]));
						},
						code: '\n              [ C.property .y "y" [] []\n                  |> C.variation (\\d -> [ CA.aura (if d.x == 3 then 0.5 else 0) ])\n                  -- If particular data point, add highlight\n              , C.property .z "z" [] []\n                  |> C.variation (\\d -> [ CA.size (d.x * 2 + 2) ])\n                  -- Base size on data point characteristic\n              ]\n              ',
						title: 'Data dependent'
					}
					]),
				frame: '\n        C.chart\n          [ CA.height 300\n          , CA.width 300\n          ]\n          [ C.grid []\n          , C.xLabels []\n          , C.yLabels []\n          , C.series .x\n              {{CONFIG}}\n              data\n          ]\n        ',
				onSelect: onSelect,
				selected: selected,
				title: 'Scatter charts'
			});
	});
var $author$project$Features$OnHoverSalary = F2(
	function (a, b) {
		return {$: 'OnHoverSalary', a: a, b: b};
	});
var $author$project$Features$OnMouseDownSalary = function (a) {
	return {$: 'OnMouseDownSalary', a: a};
};
var $author$project$Features$OnMouseUpSalary = function (a) {
	return {$: 'OnMouseUpSalary', a: a};
};
var $author$project$Features$OnResetSalary = {$: 'OnResetSalary'};
var $author$project$Features$OnResetSalaryWindow = {$: 'OnResetSalaryWindow'};
var $author$project$Features$OnSalaryYear = function (a) {
	return {$: 'OnSalaryYear', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNamesFromFirstRow = {$: 'FieldNamesFromFirstRow'};
var $BrianHicks$elm_csv$Csv$Decode$ParsingError = function (a) {
	return {$: 'ParsingError', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$DecodingErrors = function (a) {
	return {$: 'DecodingErrors', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$OnlyColumn_ = {$: 'OnlyColumn_'};
var $BrianHicks$elm_csv$Csv$Decode$NoFieldNamesOnFirstRow = {$: 'NoFieldNamesOnFirstRow'};
var $BrianHicks$elm_csv$Csv$Decode$getFieldNames = F2(
	function (headers, rows) {
		var fromList = function (names) {
			return A3(
				$elm$core$List$foldl,
				F2(
					function (name, _v2) {
						var soFar = _v2.a;
						var i = _v2.b;
						return _Utils_Tuple2(
							A3($elm$core$Dict$insert, name, i, soFar),
							i + 1);
					}),
				_Utils_Tuple2($elm$core$Dict$empty, 0),
				names).a;
		};
		switch (headers.$) {
			case 'NoFieldNames':
				return $elm$core$Result$Ok(
					_Utils_Tuple3($elm$core$Dict$empty, 0, rows));
			case 'CustomFieldNames':
				var names = headers.a;
				return $elm$core$Result$Ok(
					_Utils_Tuple3(
						fromList(names),
						0,
						rows));
			default:
				if (!rows.b) {
					return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Decode$NoFieldNamesOnFirstRow);
				} else {
					var first = rows.a;
					var rest = rows.b;
					return $elm$core$Result$Ok(
						_Utils_Tuple3(
							fromList(
								A2($elm$core$List$map, $elm$core$String$trim, first)),
							1,
							rest));
				}
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$applyDecoder = F3(
	function (fieldNames, _v0, allRows) {
		var decode = _v0.a;
		var defaultLocation = $BrianHicks$elm_csv$Csv$Decode$OnlyColumn_;
		return A2(
			$elm$core$Result$andThen,
			function (_v1) {
				var resolvedNames = _v1.a;
				var firstRowNumber = _v1.b;
				var rows = _v1.c;
				return A2(
					$elm$core$Result$mapError,
					A2($elm$core$Basics$composeL, $BrianHicks$elm_csv$Csv$Decode$DecodingErrors, $elm$core$List$reverse),
					A2(
						$elm$core$Result$map,
						$elm$core$List$reverse,
						A3(
							$elm$core$List$foldl,
							F2(
								function (row, _v2) {
									var soFar = _v2.a;
									var rowNum = _v2.b;
									return _Utils_Tuple2(
										function () {
											var _v3 = A4(decode, defaultLocation, resolvedNames, rowNum, row);
											if (_v3.$ === 'Ok') {
												var val = _v3.a;
												if (soFar.$ === 'Ok') {
													var values = soFar.a;
													return $elm$core$Result$Ok(
														A2($elm$core$List$cons, val, values));
												} else {
													var errs = soFar.a;
													return $elm$core$Result$Err(errs);
												}
											} else {
												var err = _v3.a;
												if (soFar.$ === 'Ok') {
													return $elm$core$Result$Err(
														_List_fromArray(
															[err]));
												} else {
													var errs = soFar.a;
													return $elm$core$Result$Err(
														A2($elm$core$List$cons, err, errs));
												}
											}
										}(),
										rowNum + 1);
								}),
							_Utils_Tuple2(
								$elm$core$Result$Ok(_List_Nil),
								firstRowNumber),
							rows).a));
			},
			A2($BrianHicks$elm_csv$Csv$Decode$getFieldNames, fieldNames, allRows));
	});
var $BrianHicks$elm_csv$Csv$Parser$AdditionalCharactersAfterClosingQuote = function (a) {
	return {$: 'AdditionalCharactersAfterClosingQuote', a: a};
};
var $BrianHicks$elm_csv$Csv$Parser$SourceEndedWithoutClosingQuote = function (a) {
	return {$: 'SourceEndedWithoutClosingQuote', a: a};
};
var $BrianHicks$elm_csv$Csv$Parser$parse = F2(
	function (config, source) {
		var finalLength = $elm$core$String$length(source);
		var parseQuotedField = F4(
			function (isFieldSeparator, soFar, startOffset, endOffset) {
				parseQuotedField:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Parser$SourceEndedWithoutClosingQuote);
					} else {
						if (A3($elm$core$String$slice, endOffset, endOffset + 1, source) === '\"') {
							var segment = A3($elm$core$String$slice, startOffset, endOffset, source);
							if (((endOffset + 2) - finalLength) >= 0) {
								return $elm$core$Result$Ok(
									_Utils_Tuple3(
										_Utils_ap(soFar, segment),
										endOffset + 1,
										false));
							} else {
								var next = A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source);
								if (next === '\"') {
									var newPos = endOffset + 2;
									var $temp$isFieldSeparator = isFieldSeparator,
										$temp$soFar = soFar + (segment + '\"'),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									isFieldSeparator = $temp$isFieldSeparator;
									soFar = $temp$soFar;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseQuotedField;
								} else {
									if (isFieldSeparator(next)) {
										return $elm$core$Result$Ok(
											_Utils_Tuple3(
												_Utils_ap(soFar, segment),
												endOffset + 2,
												false));
									} else {
										if (next === '\n') {
											return $elm$core$Result$Ok(
												_Utils_Tuple3(
													_Utils_ap(soFar, segment),
													endOffset + 2,
													true));
										} else {
											if ((next === '\u000D') && (A3($elm$core$String$slice, endOffset + 2, endOffset + 3, source) === '\n')) {
												return $elm$core$Result$Ok(
													_Utils_Tuple3(
														_Utils_ap(soFar, segment),
														endOffset + 3,
														true));
											} else {
												return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Parser$AdditionalCharactersAfterClosingQuote);
											}
										}
									}
								}
							}
						} else {
							var $temp$isFieldSeparator = isFieldSeparator,
								$temp$soFar = soFar,
								$temp$startOffset = startOffset,
								$temp$endOffset = endOffset + 1;
							isFieldSeparator = $temp$isFieldSeparator;
							soFar = $temp$soFar;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseQuotedField;
						}
					}
				}
			});
		var parseComma = F4(
			function (row, rows, startOffset, endOffset) {
				parseComma:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (first === ',') {
							var newPos = endOffset + 1;
							var $temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseComma;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseComma;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseComma;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v0 = A4(
											parseQuotedField,
											function (c) {
												return c === ',';
											},
											'',
											newPos,
											newPos);
										if (_v0.$ === 'Ok') {
											var _v1 = _v0.a;
											var value = _v1.a;
											var afterQuotedField = _v1.b;
											var rowEnded = _v1.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseComma;
												} else {
													var $temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseComma;
												}
											}
										} else {
											var problem = _v0.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseComma;
									}
								}
							}
						}
					}
				}
			});
		var parseHelp = F5(
			function (isFieldSeparator, row, rows, startOffset, endOffset) {
				parseHelp:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (isFieldSeparator(first)) {
							var newPos = endOffset + 1;
							var $temp$isFieldSeparator = isFieldSeparator,
								$temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							isFieldSeparator = $temp$isFieldSeparator;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseHelp;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$isFieldSeparator = isFieldSeparator,
									$temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								isFieldSeparator = $temp$isFieldSeparator;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseHelp;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$isFieldSeparator = isFieldSeparator,
										$temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									isFieldSeparator = $temp$isFieldSeparator;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseHelp;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v2 = A4(parseQuotedField, isFieldSeparator, '', newPos, newPos);
										if (_v2.$ === 'Ok') {
											var _v3 = _v2.a;
											var value = _v3.a;
											var afterQuotedField = _v3.b;
											var rowEnded = _v3.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$isFieldSeparator = isFieldSeparator,
														$temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													isFieldSeparator = $temp$isFieldSeparator;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseHelp;
												} else {
													var $temp$isFieldSeparator = isFieldSeparator,
														$temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													isFieldSeparator = $temp$isFieldSeparator;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseHelp;
												}
											}
										} else {
											var problem = _v2.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$isFieldSeparator = isFieldSeparator,
											$temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										isFieldSeparator = $temp$isFieldSeparator;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseHelp;
									}
								}
							}
						}
					}
				}
			});
		var parseSemicolon = F4(
			function (row, rows, startOffset, endOffset) {
				parseSemicolon:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (first === ';') {
							var newPos = endOffset + 1;
							var $temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseSemicolon;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseSemicolon;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseSemicolon;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v4 = A4(
											parseQuotedField,
											function (c) {
												return c === ';';
											},
											'',
											newPos,
											newPos);
										if (_v4.$ === 'Ok') {
											var _v5 = _v4.a;
											var value = _v5.a;
											var afterQuotedField = _v5.b;
											var rowEnded = _v5.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseSemicolon;
												} else {
													var $temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseSemicolon;
												}
											}
										} else {
											var problem = _v4.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseSemicolon;
									}
								}
							}
						}
					}
				}
			});
		var fieldSeparator = $elm$core$String$fromChar(config.fieldSeparator);
		return $elm$core$String$isEmpty(source) ? $elm$core$Result$Ok(_List_Nil) : (_Utils_eq(
			config.fieldSeparator,
			_Utils_chr(',')) ? A4(parseComma, _List_Nil, _List_Nil, 0, 0) : (_Utils_eq(
			config.fieldSeparator,
			_Utils_chr(';')) ? A4(parseSemicolon, _List_Nil, _List_Nil, 0, 0) : A5(
			parseHelp,
			function (s) {
				return _Utils_eq(s, fieldSeparator);
			},
			_List_Nil,
			_List_Nil,
			0,
			0)));
	});
var $BrianHicks$elm_csv$Csv$Decode$decodeCustom = F4(
	function (config, fieldNames, decoder, source) {
		return A2(
			$elm$core$Result$andThen,
			A2($BrianHicks$elm_csv$Csv$Decode$applyDecoder, fieldNames, decoder),
			A2(
				$elm$core$Result$mapError,
				$BrianHicks$elm_csv$Csv$Decode$ParsingError,
				A2($BrianHicks$elm_csv$Csv$Parser$parse, config, source)));
	});
var $author$project$Data$Salary$Raw = F7(
	function (group, sector, year, work, salary, gender, contents) {
		return {contents: contents, gender: gender, group: group, salary: salary, sector: sector, work: work, year: year};
	});
var $BrianHicks$elm_csv$Csv$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$Field_ = function (a) {
	return {$: 'Field_', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$field = F2(
	function (name, _v0) {
		var decoder = _v0.a;
		return $BrianHicks$elm_csv$Csv$Decode$Decoder(
			F3(
				function (_v1, fieldNames, row) {
					return A3(
						decoder,
						$BrianHicks$elm_csv$Csv$Decode$Field_(name),
						fieldNames,
						row);
				}));
	});
var $BrianHicks$elm_csv$Csv$Decode$succeed = function (value) {
	return $BrianHicks$elm_csv$Csv$Decode$Decoder(
		F4(
			function (_v0, _v1, _v2, _v3) {
				return $elm$core$Result$Ok(value);
			}));
};
var $BrianHicks$elm_csv$Csv$Decode$into = $BrianHicks$elm_csv$Csv$Decode$succeed;
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$map2 = F3(
	function (transform, _v0, _v1) {
		var decodeA = _v0.a;
		var decodeB = _v1.a;
		return $BrianHicks$elm_csv$Csv$Decode$Decoder(
			F4(
				function (location, fieldNames, rowNum, row) {
					return A3(
						$elm$core$Result$map2,
						transform,
						A4(decodeA, location, fieldNames, rowNum, row),
						A4(decodeB, location, fieldNames, rowNum, row));
				}));
	});
var $BrianHicks$elm_csv$Csv$Decode$pipeline = $BrianHicks$elm_csv$Csv$Decode$map2(
	F2(
		function (value, fn) {
			return fn(value);
		}));
var $BrianHicks$elm_csv$Csv$Decode$ColumnNotFound = function (a) {
	return {$: 'ColumnNotFound', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$ExpectedOneColumn = function (a) {
	return {$: 'ExpectedOneColumn', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNotFound = function (a) {
	return {$: 'FieldNotFound', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNotProvided = function (a) {
	return {$: 'FieldNotProvided', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$Column = function (a) {
	return {$: 'Column', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $BrianHicks$elm_csv$Csv$Decode$OnlyColumn = {$: 'OnlyColumn'};
var $BrianHicks$elm_csv$Csv$Decode$locationToColumn = F2(
	function (fieldNames, location) {
		switch (location.$) {
			case 'Column_':
				var i = location.a;
				return $BrianHicks$elm_csv$Csv$Decode$Column(i);
			case 'Field_':
				var name = location.a;
				return A2(
					$BrianHicks$elm_csv$Csv$Decode$Field,
					name,
					A2($elm$core$Dict$get, name, fieldNames));
			default:
				return $BrianHicks$elm_csv$Csv$Decode$OnlyColumn;
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$fromString = function (convert) {
	return $BrianHicks$elm_csv$Csv$Decode$Decoder(
		F4(
			function (location, fieldNames, rowNum, row) {
				switch (location.$) {
					case 'Column_':
						var colNum = location.a;
						var _v1 = $elm$core$List$head(
							A2($elm$core$List$drop, colNum, row));
						if (_v1.$ === 'Just') {
							var value = _v1.a;
							var _v2 = convert(value);
							if (_v2.$ === 'Ok') {
								var converted = _v2.a;
								return $elm$core$Result$Ok(converted);
							} else {
								var problem = _v2.a;
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[problem]),
										row: rowNum
									});
							}
						} else {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$ColumnNotFound(colNum)
										]),
									row: rowNum
								});
						}
					case 'Field_':
						var name = location.a;
						var _v3 = A2($elm$core$Dict$get, name, fieldNames);
						if (_v3.$ === 'Just') {
							var colNum = _v3.a;
							var _v4 = $elm$core$List$head(
								A2($elm$core$List$drop, colNum, row));
							if (_v4.$ === 'Just') {
								var value = _v4.a;
								var _v5 = convert(value);
								if (_v5.$ === 'Ok') {
									var converted = _v5.a;
									return $elm$core$Result$Ok(converted);
								} else {
									var problem = _v5.a;
									return $elm$core$Result$Err(
										{
											column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
											problems: _List_fromArray(
												[problem]),
											row: rowNum
										});
								}
							} else {
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[
												$BrianHicks$elm_csv$Csv$Decode$FieldNotFound(name)
											]),
										row: rowNum
									});
							}
						} else {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$FieldNotProvided(name)
										]),
									row: rowNum
								});
						}
					default:
						if (!row.b) {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$ColumnNotFound(0)
										]),
									row: rowNum
								});
						} else {
							if (!row.b.b) {
								var only = row.a;
								var _v7 = convert(only);
								if (_v7.$ === 'Ok') {
									var converted = _v7.a;
									return $elm$core$Result$Ok(converted);
								} else {
									var problem = _v7.a;
									return $elm$core$Result$Err(
										{
											column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
											problems: _List_fromArray(
												[problem]),
											row: rowNum
										});
								}
							} else {
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[
												$BrianHicks$elm_csv$Csv$Decode$ExpectedOneColumn(
												$elm$core$List$length(row))
											]),
										row: rowNum
									});
							}
						}
				}
			}));
};
var $BrianHicks$elm_csv$Csv$Decode$string = $BrianHicks$elm_csv$Csv$Decode$fromString($elm$core$Result$Ok);
var $author$project$Data$Salary$decoder = A2(
	$BrianHicks$elm_csv$Csv$Decode$pipeline,
	A2($BrianHicks$elm_csv$Csv$Decode$field, 'INDHOLD', $BrianHicks$elm_csv$Csv$Decode$string),
	A2(
		$BrianHicks$elm_csv$Csv$Decode$pipeline,
		A2($BrianHicks$elm_csv$Csv$Decode$field, 'KØN', $BrianHicks$elm_csv$Csv$Decode$string),
		A2(
			$BrianHicks$elm_csv$Csv$Decode$pipeline,
			A2($BrianHicks$elm_csv$Csv$Decode$field, 'LØNMÅL', $BrianHicks$elm_csv$Csv$Decode$string),
			A2(
				$BrianHicks$elm_csv$Csv$Decode$pipeline,
				A2($BrianHicks$elm_csv$Csv$Decode$field, 'ARBF', $BrianHicks$elm_csv$Csv$Decode$string),
				A2(
					$BrianHicks$elm_csv$Csv$Decode$pipeline,
					A2($BrianHicks$elm_csv$Csv$Decode$field, 'TID', $BrianHicks$elm_csv$Csv$Decode$string),
					A2(
						$BrianHicks$elm_csv$Csv$Decode$pipeline,
						A2($BrianHicks$elm_csv$Csv$Decode$field, 'SEKTOR', $BrianHicks$elm_csv$Csv$Decode$string),
						A2(
							$BrianHicks$elm_csv$Csv$Decode$pipeline,
							A2($BrianHicks$elm_csv$Csv$Decode$field, 'LONGRP', $BrianHicks$elm_csv$Csv$Decode$string),
							$BrianHicks$elm_csv$Csv$Decode$into($author$project$Data$Salary$Raw))))))));
var $author$project$Data$Salary$danishNumber = function (str) {
	if (str === '..') {
		return $elm$core$Maybe$Just(0);
	} else {
		return $elm$core$String$toFloat(
			A3($elm$core$String$replace, ',', '.', str));
	}
};
var $author$project$Data$Salary$process = function () {
	var processSet = F6(
		function (a, b, c, d, e, f) {
			var numbers = _List_fromArray(
				[
					$author$project$Data$Salary$danishNumber(a.year),
					$author$project$Data$Salary$danishNumber(a.contents),
					$author$project$Data$Salary$danishNumber(b.contents),
					$author$project$Data$Salary$danishNumber(c.contents),
					$author$project$Data$Salary$danishNumber(d.contents),
					$author$project$Data$Salary$danishNumber(e.contents),
					$author$project$Data$Salary$danishNumber(f.contents)
				]);
			if ((((((((((((((numbers.b && (numbers.a.$ === 'Just')) && numbers.b.b) && (numbers.b.a.$ === 'Just')) && numbers.b.b.b) && (numbers.b.b.a.$ === 'Just')) && numbers.b.b.b.b) && (numbers.b.b.b.a.$ === 'Just')) && numbers.b.b.b.b.b) && (numbers.b.b.b.b.a.$ === 'Just')) && numbers.b.b.b.b.b.b) && (numbers.b.b.b.b.b.a.$ === 'Just')) && numbers.b.b.b.b.b.b.b) && (numbers.b.b.b.b.b.b.a.$ === 'Just')) && (!numbers.b.b.b.b.b.b.b.b)) {
				var year = numbers.a.a;
				var _v8 = numbers.b;
				var salaryBoth = _v8.a.a;
				var _v9 = _v8.b;
				var salaryMen = _v9.a.a;
				var _v10 = _v9.b;
				var salaryWomen = _v10.a.a;
				var _v11 = _v10.b;
				var numOfBoth = _v11.a.a;
				var _v12 = _v11.b;
				var numOfMen = _v12.a.a;
				var _v13 = _v12.b;
				var numOfWomen = _v13.a.a;
				return $elm$core$Maybe$Just(
					{numOfBoth: numOfBoth, numOfMen: numOfMen, numOfWomen: numOfWomen, salaryBoth: salaryBoth, salaryMen: salaryMen, salaryWomen: salaryWomen, sector: a.work, year: year});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		});
	var fold = F2(
		function (acc, list) {
			fold:
			while (true) {
				if (((((list.b && list.b.b) && list.b.b.b) && list.b.b.b.b) && list.b.b.b.b.b) && list.b.b.b.b.b.b) {
					var a = list.a;
					var _v1 = list.b;
					var b = _v1.a;
					var _v2 = _v1.b;
					var c = _v2.a;
					var _v3 = _v2.b;
					var d = _v3.a;
					var _v4 = _v3.b;
					var e = _v4.a;
					var _v5 = _v4.b;
					var f = _v5.a;
					var rest = _v5.b;
					var _v6 = A6(processSet, a, b, c, d, e, f);
					if (_v6.$ === 'Just') {
						var datum = _v6.a;
						var $temp$acc = A2($elm$core$List$cons, datum, acc),
							$temp$list = rest;
						acc = $temp$acc;
						list = $temp$list;
						continue fold;
					} else {
						var $temp$acc = acc,
							$temp$list = rest;
						acc = $temp$acc;
						list = $temp$list;
						continue fold;
					}
				} else {
					return acc;
				}
			}
		});
	return A2(
		$elm$core$Basics$composeR,
		fold(_List_Nil),
		$elm$core$List$reverse);
}();
var $author$project$Data$Salary$data = A2(
	$elm$core$Result$withDefault,
	_List_Nil,
	A2(
		$elm$core$Result$map,
		$author$project$Data$Salary$process,
		A4(
			$BrianHicks$elm_csv$Csv$Decode$decodeCustom,
			{
				fieldSeparator: _Utils_chr(';')
			},
			$BrianHicks$elm_csv$Csv$Decode$FieldNamesFromFirstRow,
			$author$project$Data$Salary$decoder,
			$author$project$Data$Salary$csv)));
var $author$project$Data$Salary$avgSalaryMen = function () {
	var totalSalary = $elm$core$List$sum(
		A2(
			$elm$core$List$map,
			function (d) {
				return d.salaryMen * d.numOfMen;
			},
			$author$project$Data$Salary$data));
	var totalMen = $elm$core$List$sum(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.numOfMen;
			},
			$author$project$Data$Salary$data));
	return totalSalary / totalMen;
}();
var $author$project$Data$Salary$avgSalaryWomen = function () {
	var totalWomen = $elm$core$List$sum(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.numOfWomen;
			},
			$author$project$Data$Salary$data));
	var totalSalary = $elm$core$List$sum(
		A2(
			$elm$core$List$map,
			function (d) {
				return d.salaryWomen * d.numOfWomen;
			},
			$author$project$Data$Salary$data));
	return totalSalary / totalWomen;
}();
var $author$project$Chart$Attributes$break = function (config) {
	return _Utils_update(
		config,
		{_break: true});
};
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$Chart$domain = F2(
	function (fs, config) {
		return _Utils_update(
			config,
			{
				domain: $elm$core$Maybe$Just(
					function (i) {
						return A3(
							$elm$core$List$foldl,
							F2(
								function (f, b) {
									return f(b);
								}),
							i,
							fs);
					})
			});
	});
var $author$project$Chart$eachProduct = function (func) {
	return $author$project$Chart$SubElements(
		F2(
			function (p, is) {
				return A2(
					$elm$core$List$concatMap,
					func(p),
					is);
			}));
};
var $author$project$Chart$exactly = F3(
	function (exact, _v0, _v1) {
		return exact;
	});
var $author$project$Chart$Item$getColor = function (_v0) {
	var config = _v0.a;
	return config.details.config.color;
};
var $author$project$Chart$Item$getDatum = function (_v0) {
	var config = _v0.a;
	return config.details.datum;
};
var $author$project$Chart$Item$getTop = F2(
	function (plane, _v0) {
		var config = _v0.a;
		var pos = A2(config.position, plane, config.details);
		return {x: pos.x1 + ((pos.x2 - pos.x1) / 2), y: pos.y2};
	});
var $author$project$Chart$highest = F3(
	function (x, edit, b) {
		return _Utils_update(
			b,
			{
				max: A3(edit, x, b.max, b.dataMax)
			});
	});
var $author$project$Chart$htmlAt = F6(
	function (toX, toY, xOff, yOff, att, view) {
		return $author$project$Chart$HtmlElement(
			function (p) {
				return A7(
					$author$project$Chart$Svg$positionHtml,
					p,
					toX(p.x),
					toY(p.y),
					xOff,
					yOff,
					att,
					view);
			});
	});
var $author$project$Chart$SvgElement = function (a) {
	return {$: 'SvgElement', a: a};
};
var $author$project$Chart$line = function (attrs) {
	return $author$project$Chart$SvgElement(
		function (p) {
			return A2($author$project$Chart$Svg$line, p, attrs);
		});
};
var $author$project$Chart$map2 = F3(
	function (f, _v0, _v1) {
		var a = _v0.a;
		var b = _v1.a;
		return $author$project$Chart$Decoder(
			F3(
				function (ps, s, p) {
					return A2(
						f,
						A3(a, ps, s, p),
						A3(b, ps, s, p));
				}));
	});
var $author$project$Chart$marginLeft = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{marginLeft: value});
	});
var $author$project$Chart$marginRight = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{marginRight: value});
	});
var $author$project$Chart$none = $author$project$Chart$HtmlElement(
	function (_v0) {
		return $elm$html$Html$text('');
	});
var $author$project$Chart$orHigher = F3(
	function (most, real, _v0) {
		return (_Utils_cmp(real, most) < 0) ? most : real;
	});
var $author$project$Chart$paddingTop = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{paddingTop: value});
	});
var $author$project$Chart$range = F2(
	function (fs, config) {
		return _Utils_update(
			config,
			{
				range: $elm$core$Maybe$Just(
					function (i) {
						return A3(
							$elm$core$List$foldl,
							F2(
								function (f, b) {
									return f(b);
								}),
							i,
							fs);
					})
			});
	});
var $author$project$Chart$Svg$rect = F2(
	function (plane, edits) {
		var config = A2(
			$author$project$Chart$Svg$apply,
			edits,
			{border: 'rgba(210, 210, 210, 1)', borderWidth: 1, color: 'rgba(210, 210, 210, 0.5)', opacity: 1, x1: $elm$core$Maybe$Nothing, x2: $elm$core$Maybe$Nothing, y1: $elm$core$Maybe$Nothing, y2: $elm$core$Maybe$Nothing});
		var _v0 = function () {
			var _v3 = _Utils_Tuple2(
				_Utils_Tuple2(config.x1, config.x2),
				_Utils_Tuple2(config.y1, config.y2));
			_v3$11:
			while (true) {
				if (_v3.a.a.$ === 'Just') {
					if (_v3.a.b.$ === 'Nothing') {
						if (_v3.b.a.$ === 'Nothing') {
							if (_v3.b.b.$ === 'Nothing') {
								var _v8 = _v3.a;
								var a = _v8.a.a;
								var _v9 = _v8.b;
								var _v10 = _v3.b;
								var _v11 = _v10.a;
								var _v12 = _v10.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(a, a),
									_Utils_Tuple2(plane.y.min, plane.y.max));
							} else {
								break _v3$11;
							}
						} else {
							if (_v3.b.b.$ === 'Just') {
								var _v35 = _v3.a;
								var c = _v35.a.a;
								var _v36 = _v35.b;
								var _v37 = _v3.b;
								var a = _v37.a.a;
								var b = _v37.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(c, c),
									_Utils_Tuple2(a, b));
							} else {
								break _v3$11;
							}
						}
					} else {
						if (_v3.b.a.$ === 'Nothing') {
							if (_v3.b.b.$ === 'Nothing') {
								var _v4 = _v3.a;
								var a = _v4.a.a;
								var b = _v4.b.a;
								var _v5 = _v3.b;
								var _v6 = _v5.a;
								var _v7 = _v5.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(a, b),
									_Utils_Tuple2(plane.y.min, plane.y.max));
							} else {
								var _v38 = _v3.a;
								var a = _v38.a.a;
								var b = _v38.b.a;
								var _v39 = _v3.b;
								var _v40 = _v39.a;
								var c = _v39.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(a, b),
									_Utils_Tuple2(c, c));
							}
						} else {
							if (_v3.b.b.$ === 'Nothing') {
								var _v41 = _v3.a;
								var a = _v41.a.a;
								var b = _v41.b.a;
								var _v42 = _v3.b;
								var c = _v42.a.a;
								var _v43 = _v42.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(a, b),
									_Utils_Tuple2(c, c));
							} else {
								break _v3$11;
							}
						}
					}
				} else {
					if (_v3.a.b.$ === 'Just') {
						if (_v3.b.a.$ === 'Nothing') {
							if (_v3.b.b.$ === 'Nothing') {
								var _v13 = _v3.a;
								var _v14 = _v13.a;
								var b = _v13.b.a;
								var _v15 = _v3.b;
								var _v16 = _v15.a;
								var _v17 = _v15.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(b, b),
									_Utils_Tuple2(plane.y.min, plane.y.max));
							} else {
								break _v3$11;
							}
						} else {
							if (_v3.b.b.$ === 'Just') {
								var _v32 = _v3.a;
								var _v33 = _v32.a;
								var c = _v32.b.a;
								var _v34 = _v3.b;
								var a = _v34.a.a;
								var b = _v34.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(c, c),
									_Utils_Tuple2(a, b));
							} else {
								break _v3$11;
							}
						}
					} else {
						if (_v3.b.a.$ === 'Just') {
							if (_v3.b.b.$ === 'Just') {
								var _v18 = _v3.a;
								var _v19 = _v18.a;
								var _v20 = _v18.b;
								var _v21 = _v3.b;
								var a = _v21.a.a;
								var b = _v21.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(plane.x.min, plane.x.min),
									_Utils_Tuple2(a, b));
							} else {
								var _v22 = _v3.a;
								var _v23 = _v22.a;
								var _v24 = _v22.b;
								var _v25 = _v3.b;
								var a = _v25.a.a;
								var _v26 = _v25.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(plane.x.min, plane.x.max),
									_Utils_Tuple2(a, a));
							}
						} else {
							if (_v3.b.b.$ === 'Just') {
								var _v27 = _v3.a;
								var _v28 = _v27.a;
								var _v29 = _v27.b;
								var _v30 = _v3.b;
								var _v31 = _v30.a;
								var b = _v30.b.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(plane.x.min, plane.x.max),
									_Utils_Tuple2(b, b));
							} else {
								var _v44 = _v3.a;
								var _v45 = _v44.a;
								var _v46 = _v44.b;
								var _v47 = _v3.b;
								var _v48 = _v47.a;
								var _v49 = _v47.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(plane.x.min, plane.x.max),
									_Utils_Tuple2(plane.y.min, plane.y.max));
							}
						}
					}
				}
			}
			return _Utils_Tuple2(
				_Utils_Tuple2(
					A2($elm$core$Maybe$withDefault, plane.x.min, config.x1),
					A2($elm$core$Maybe$withDefault, plane.x.max, config.x2)),
				_Utils_Tuple2(
					A2($elm$core$Maybe$withDefault, plane.y.min, config.y1),
					A2($elm$core$Maybe$withDefault, plane.y.max, config.y2)));
		}();
		var _v1 = _v0.a;
		var x1_ = _v1.a;
		var x2_ = _v1.b;
		var _v2 = _v0.b;
		var y1_ = _v2.a;
		var y2_ = _v2.b;
		var cmds = _List_fromArray(
			[
				A2($author$project$Svg$Commands$Move, x1_, y1_),
				A2($author$project$Svg$Commands$Line, x1_, y1_),
				A2($author$project$Svg$Commands$Line, x2_, y1_),
				A2($author$project$Svg$Commands$Line, x2_, y2_),
				A2($author$project$Svg$Commands$Line, x1_, y2_),
				A2($author$project$Svg$Commands$Line, x1_, y1_)
			]);
		return A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-charts__rect'),
					$elm$svg$Svg$Attributes$fill(config.color),
					$elm$svg$Svg$Attributes$fillOpacity(
					$elm$core$String$fromFloat(config.opacity)),
					$elm$svg$Svg$Attributes$stroke(config.border),
					$elm$svg$Svg$Attributes$strokeWidth(
					$elm$core$String$fromFloat(config.borderWidth)),
					$elm$svg$Svg$Attributes$d(
					A2($author$project$Svg$Commands$description, plane, cmds))
				]),
			_List_Nil);
	});
var $author$project$Chart$rect = function (attrs) {
	return $author$project$Chart$SvgElement(
		function (p) {
			return A2($author$project$Chart$Svg$rect, p, attrs);
		});
};
var $author$project$Data$Salary$womenPerc = function (datum) {
	return ((!datum.numOfBoth) || (!datum.numOfWomen)) ? 0 : ((datum.numOfWomen / datum.numOfBoth) * 100);
};
var $author$project$Data$Salary$womenSalaryPerc = function (datum) {
	return ((!datum.salaryWomen) || (!datum.salaryMen)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just((datum.salaryWomen / datum.salaryMen) * 100);
};
var $author$project$Features$salarySeries = F4(
	function (model, border, auraSize, size) {
		return A3(
			$author$project$Chart$series,
			function ($) {
				return $.salaryBoth;
			},
			_List_fromArray(
				[
					A2(
					$author$project$Chart$variation,
					function (d) {
						var precentOfWomen = $author$project$Data$Salary$womenPerc(d);
						var isHovered = A2(
							$elm$core$List$any,
							A2(
								$elm$core$Basics$composeR,
								$author$project$Chart$Item$getDatum,
								$elm$core$Basics$eq(d)),
							model.salaryHovering);
						var color = (precentOfWomen < 20) ? _List_fromArray(
							[
								$author$project$Chart$Attributes$border('#58a9f6'),
								$author$project$Chart$Attributes$color('#58a9f6')
							]) : ((precentOfWomen < 40) ? _List_fromArray(
							[
								$author$project$Chart$Attributes$border('#8a91f7'),
								$author$project$Chart$Attributes$color('#8a91f7')
							]) : ((precentOfWomen < 60) ? _List_fromArray(
							[
								$author$project$Chart$Attributes$border('#c579f2'),
								$author$project$Chart$Attributes$color('#c579f2')
							]) : ((precentOfWomen < 80) ? _List_fromArray(
							[
								$author$project$Chart$Attributes$border('#de74d7'),
								$author$project$Chart$Attributes$color('#de74d7')
							]) : _List_fromArray(
							[
								$author$project$Chart$Attributes$border('#f56dbc'),
								$author$project$Chart$Attributes$color('#f56dbc')
							]))));
						var aura = isHovered ? _List_fromArray(
							[
								$author$project$Chart$Attributes$aura(0.4),
								$author$project$Chart$Attributes$auraWidth(auraSize),
								$author$project$Chart$Attributes$opacity(0.7)
							]) : _List_Nil;
						return _Utils_ap(
							_List_fromArray(
								[
									$author$project$Chart$Attributes$size(d.numOfBoth / size)
								]),
							_Utils_ap(color, aura));
					},
					A4(
						$author$project$Chart$property,
						$author$project$Data$Salary$womenSalaryPerc,
						'percentage',
						_List_Nil,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$opacity(0.5),
								$author$project$Chart$Attributes$circle,
								$author$project$Chart$Attributes$border($author$project$Chart$Attributes$blue),
								$author$project$Chart$Attributes$borderWidth(border)
							])))
				]),
			A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.year;
					},
					$elm$core$Basics$eq(model.salaryYear)),
				$author$project$Data$Salary$data));
	});
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $author$project$Data$Salary$menSalaryPerc = function (datum) {
	return ((!datum.salaryWomen) || (!datum.salaryMen)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just((datum.salaryMen / datum.salaryWomen) * 100);
};
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$th = _VirtualDom_node('th');
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $author$project$Features$salaryTooltip = function (hovered) {
	var datum = $author$project$Chart$Item$getDatum(hovered);
	var percentOfSalary = $elm$core$Basics$round(
		A2(
			$elm$core$Maybe$withDefault,
			0,
			$author$project$Data$Salary$womenSalaryPerc(datum)));
	var percentOfSalaryMen = $elm$core$Basics$round(
		A2(
			$elm$core$Maybe$withDefault,
			0,
			$author$project$Data$Salary$menSalaryPerc(datum)));
	var precentOfWomen = $elm$core$Basics$round(
		$author$project$Data$Salary$womenPerc(datum));
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h4,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '240px'),
						A2($elm$html$Html$Attributes$style, 'margin-top', '5px'),
						A2($elm$html$Html$Attributes$style, 'margin-bottom', '5px'),
						A2($elm$html$Html$Attributes$style, 'line-break', 'normal'),
						A2($elm$html$Html$Attributes$style, 'white-space', 'normal'),
						A2($elm$html$Html$Attributes$style, 'line-height', '1.25'),
						A2(
						$elm$html$Html$Attributes$style,
						'color',
						$author$project$Chart$Item$getColor(hovered))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(datum.sector)
					])),
				A2(
				$elm$html$Html$table,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'color', 'rgb(90, 90, 90)'),
						A2($elm$html$Html$Attributes$style, 'width', '100%'),
						A2($elm$html$Html$Attributes$style, 'font-size', '11px')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$tr,
						_List_Nil,
						_List_fromArray(
							[
								A2($elm$html$Html$th, _List_Nil, _List_Nil),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Women')
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('%')
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Men')
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('%')
									]))
							])),
						A2(
						$elm$html$Html$tr,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'left')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Salary')
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(
											$elm$core$Basics$round(datum.salaryWomen)))
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(percentOfSalary))
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(
											$elm$core$Basics$round(datum.salaryMen)))
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(percentOfSalaryMen))
									]))
							])),
						A2(
						$elm$html$Html$tr,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'left')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Distribution')
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromFloat(datum.numOfWomen))
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(precentOfWomen))
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromFloat(datum.numOfMen))
									])),
								A2(
								$elm$html$Html$th,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'text-align', 'right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromInt(100 - precentOfWomen))
									]))
							]))
					]))
			]));
};
var $author$project$Chart$svg = function (func) {
	return $author$project$Chart$SvgElement(
		function (p) {
			return func(p);
		});
};
var $author$project$Chart$title = F3(
	function (attrs, inner, point) {
		return $author$project$Chart$SvgElement(
			function (p) {
				return A4($author$project$Chart$Svg$label, p, attrs, inner, point);
			});
	});
var $author$project$Chart$marginBottom = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{marginBottom: value});
	});
var $author$project$Chart$Attributes$y = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{y: v});
	});
var $author$project$Chart$Attributes$y2 = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				y2: $elm$core$Maybe$Just(v)
			});
	});
var $author$project$Chart$yLabel = F2(
	function (edits, inner) {
		var toTickValues = F3(
			function (p, config, ts) {
				return _Utils_update(
					ts,
					{
						ys: _Utils_ap(
							ts.ys,
							_List_fromArray(
								[config.y]))
					});
			});
		var toConfig = function (p) {
			return A2(
				$author$project$Chart$applyAttrs,
				edits,
				{
					anchor: $author$project$Chart$Attributes$Start,
					border: 'white',
					borderWidth: 0.1,
					color: '#808BAB',
					flip: false,
					fontSize: $elm$core$Maybe$Nothing,
					rotate: 0,
					x: $author$project$Chart$zero(p.x),
					xOff: -8,
					y: $author$project$Chart$middle(p.y),
					yOff: 3
				});
		};
		return A3(
			$author$project$Chart$LabelElement,
			toConfig,
			toTickValues,
			F2(
				function (p, config) {
					var string = _Utils_eq(inner, _List_Nil) ? _List_fromArray(
						[
							$elm$svg$Svg$text(
							$elm$core$String$fromFloat(config.y))
						]) : inner;
					return A4(
						$author$project$Chart$Svg$label,
						p,
						_List_fromArray(
							[
								$author$project$Chart$Attributes$xOff(
								config.flip ? (-config.xOff) : config.xOff),
								$author$project$Chart$Attributes$yOff(config.yOff),
								$author$project$Chart$Attributes$border(config.border),
								$author$project$Chart$Attributes$borderWidth(config.borderWidth),
								function () {
								var _v0 = config.fontSize;
								if (_v0.$ === 'Just') {
									var s = _v0.a;
									return $author$project$Chart$Attributes$fontSize(s);
								} else {
									return $elm$core$Basics$identity;
								}
							}(),
								$author$project$Chart$Attributes$color(config.color),
								function () {
								var _v1 = config.anchor;
								switch (_v1.$) {
									case 'Middle':
										return $elm$core$Basics$identity;
									case 'End':
										return $author$project$Chart$Attributes$alignRight;
									default:
										return $author$project$Chart$Attributes$alignLeft;
								}
							}(),
								$author$project$Chart$Attributes$rotate(config.rotate)
							]),
						string,
						{x: config.x, y: config.y});
				}));
	});
var $author$project$Features$viewSalaryDiscrepancyMini = function (model) {
	return A2(
		$author$project$Chart$chart,
		_List_fromArray(
			[
				$author$project$Chart$Attributes$height(100),
				$author$project$Chart$Attributes$width(167),
				$author$project$Chart$Attributes$static,
				$author$project$Chart$marginLeft(0),
				$author$project$Chart$marginBottom(0),
				$author$project$Chart$marginTop(0),
				$author$project$Chart$marginRight(0),
				$author$project$Chart$paddingTop(15),
				$author$project$Chart$range(
				_List_fromArray(
					[
						A2($author$project$Chart$lowest, 20000, $author$project$Chart$orHigher)
					])),
				$author$project$Chart$domain(
				_List_fromArray(
					[
						A2($author$project$Chart$lowest, 76, $author$project$Chart$orHigher)
					]))
			]),
		_List_fromArray(
			[
				A2(
				$author$project$Chart$each,
				A2(
					$elm$core$Basics$composeL,
					A2($author$project$Chart$Svg$produce, 10, $author$project$Chart$Svg$ints),
					function ($) {
						return $.x;
					}),
				F2(
					function (p, t) {
						return _List_fromArray(
							[
								A2(
								$author$project$Chart$xLabel,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$alignLeft,
										$author$project$Chart$Attributes$yOff(15),
										$author$project$Chart$Attributes$x(t)
									]),
								_List_fromArray(
									[
										$elm$svg$Svg$text('')
									]))
							]);
					})),
				A2(
				$author$project$Chart$each,
				A2(
					$elm$core$Basics$composeL,
					A2($author$project$Chart$Svg$produce, 8, $author$project$Chart$Svg$ints),
					function ($) {
						return $.y;
					}),
				F2(
					function (p, t) {
						return _List_fromArray(
							[
								A2(
								$author$project$Chart$yLabel,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$alignLeft,
										$author$project$Chart$Attributes$yOff(-5),
										$author$project$Chart$Attributes$y(t)
									]),
								_List_fromArray(
									[
										$elm$svg$Svg$text('')
									]))
							]);
					})),
				$author$project$Chart$line(
				_List_fromArray(
					[
						$author$project$Chart$Attributes$dashed(
						_List_fromArray(
							[3, 3])),
						$author$project$Chart$Attributes$y1(100),
						$author$project$Chart$Attributes$width(0.5)
					])),
				function () {
				var _v0 = model.salaryWindow;
				if (_v0.$ === 'Just') {
					var select = _v0.a;
					return $author$project$Chart$rect(
						_List_fromArray(
							[
								$author$project$Chart$Attributes$borderWidth(0),
								$author$project$Chart$Attributes$x1(select.x1),
								$author$project$Chart$Attributes$x2(select.x2),
								$author$project$Chart$Attributes$y1(select.y1),
								$author$project$Chart$Attributes$y2(select.y2)
							]));
				} else {
					return $author$project$Chart$none;
				}
			}(),
				A4($author$project$Features$salarySeries, model, 0.5, 3, 4000)
			]));
};
var $author$project$Chart$withPlane = function (func) {
	return $author$project$Chart$SubElements(
		F2(
			function (p, is) {
				return func(p);
			}));
};
var $author$project$Features$viewSalaryDiscrepancy = function (model) {
	return A2(
		$author$project$Chart$chart,
		_List_fromArray(
			[
				$author$project$Chart$Attributes$height(560),
				$author$project$Chart$Attributes$width(1000),
				$author$project$Chart$Attributes$static,
				$author$project$Chart$marginLeft(0),
				$author$project$Chart$marginRight(0),
				$author$project$Chart$paddingTop(15),
				$author$project$Chart$range(
				function () {
					var _v0 = model.salaryWindow;
					if (_v0.$ === 'Just') {
						var window = _v0.a;
						return _List_fromArray(
							[
								A2($author$project$Chart$lowest, window.x1, $author$project$Chart$exactly),
								A2($author$project$Chart$highest, window.x2, $author$project$Chart$exactly)
							]);
					} else {
						return _List_fromArray(
							[
								A2($author$project$Chart$lowest, 20000, $author$project$Chart$orHigher)
							]);
					}
				}()),
				$author$project$Chart$domain(
				function () {
					var _v1 = model.salaryWindow;
					if (_v1.$ === 'Just') {
						var window = _v1.a;
						return _List_fromArray(
							[
								A2($author$project$Chart$lowest, window.y1, $author$project$Chart$exactly),
								A2($author$project$Chart$highest, window.y2, $author$project$Chart$exactly)
							]);
					} else {
						return _List_fromArray(
							[
								A2($author$project$Chart$lowest, 76, $author$project$Chart$orHigher)
							]);
					}
				}()),
				$author$project$Chart$Attributes$events(
				_List_fromArray(
					[
						A2(
						$author$project$Chart$event,
						'mousemove',
						A3(
							$author$project$Chart$map2,
							$author$project$Features$OnHoverSalary,
							A2($author$project$Chart$getNearest, $author$project$Chart$Item$getCenter, $elm$core$Basics$identity),
							$author$project$Chart$getCoords)),
						A2(
						$author$project$Chart$event,
						'mouseleave',
						A2(
							$author$project$Chart$map,
							function (_v2) {
								return $author$project$Features$OnResetSalary;
							},
							$author$project$Chart$getCoords)),
						A2(
						$author$project$Chart$event,
						'mousedown',
						A2($author$project$Chart$map, $author$project$Features$OnMouseDownSalary, $author$project$Chart$getCoords)),
						A2(
						$author$project$Chart$event,
						'mouseup',
						A2($author$project$Chart$map, $author$project$Features$OnMouseUpSalary, $author$project$Chart$getCoords))
					])),
				$author$project$Chart$Attributes$htmlAttrs(
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'cursor', 'crosshair')
					]))
			]),
		_List_fromArray(
			[
				$author$project$Chart$grid(_List_Nil),
				A2(
				$author$project$Chart$each,
				A2(
					$elm$core$Basics$composeL,
					A2($author$project$Chart$Svg$produce, 10, $author$project$Chart$Svg$ints),
					function ($) {
						return $.x;
					}),
				F2(
					function (p, t) {
						return _List_fromArray(
							[
								A2(
								$author$project$Chart$xLabel,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$alignLeft,
										$author$project$Chart$Attributes$yOff(-20),
										$author$project$Chart$Attributes$xOff(3),
										$author$project$Chart$Attributes$x(t)
									]),
								_List_fromArray(
									[
										$elm$svg$Svg$text(
										$elm$core$String$fromInt(t))
									]))
							]);
					})),
				A2(
				$author$project$Chart$each,
				A2(
					$elm$core$Basics$composeL,
					A2($author$project$Chart$Svg$produce, 8, $author$project$Chart$Svg$ints),
					function ($) {
						return $.y;
					}),
				F2(
					function (p, t) {
						return _List_fromArray(
							[
								(t === 100) ? A3(
								$author$project$Chart$title,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$alignLeft,
										$author$project$Chart$Attributes$yOff(-7),
										$author$project$Chart$Attributes$xOff(1)
									]),
								_List_fromArray(
									[
										$elm$svg$Svg$text(
										$elm$core$String$fromInt(t))
									]),
								{x: p.x.min, y: t}) : A2(
								$author$project$Chart$yLabel,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$alignLeft,
										$author$project$Chart$Attributes$yOff(-10),
										$author$project$Chart$Attributes$xOff(10),
										$author$project$Chart$Attributes$y(t)
									]),
								_List_fromArray(
									[
										$elm$svg$Svg$text(
										$elm$core$String$fromInt(t))
									]))
							]);
					})),
				$author$project$Chart$withPlane(
				function (p) {
					return _List_fromArray(
						[
							A3(
							$author$project$Chart$title,
							_List_fromArray(
								[
									$author$project$Chart$Attributes$fontSize(14),
									$author$project$Chart$Attributes$yOff(-3)
								]),
							_List_fromArray(
								[
									$elm$svg$Svg$text(
									'Salary distribution in Denmark ' + $elm$core$String$fromFloat(model.salaryYear))
								]),
							{
								x: $author$project$Chart$middle(p.x),
								y: p.y.max
							}),
							A3(
							$author$project$Chart$title,
							_List_fromArray(
								[
									$author$project$Chart$Attributes$fontSize(11),
									$author$project$Chart$Attributes$yOff(12)
								]),
							_List_fromArray(
								[
									$elm$svg$Svg$text('Data from Danmarks Statestik')
								]),
							{
								x: $author$project$Chart$middle(p.x),
								y: p.y.max
							}),
							A3(
							$author$project$Chart$title,
							_List_fromArray(
								[
									$author$project$Chart$Attributes$fontSize(12),
									$author$project$Chart$Attributes$yOff(35)
								]),
							_List_fromArray(
								[
									$elm$svg$Svg$text('Average salary in DKK')
								]),
							{
								x: $author$project$Chart$middle(p.x),
								y: p.y.min
							}),
							A3(
							$author$project$Chart$title,
							_List_fromArray(
								[
									$author$project$Chart$Attributes$fontSize(12),
									$author$project$Chart$Attributes$xOff(-15),
									$author$project$Chart$Attributes$rotate(90)
								]),
							_List_fromArray(
								[
									$elm$svg$Svg$text('Womens percentage of mens salary')
								]),
							{
								x: p.x.min,
								y: $author$project$Chart$middle(p.y)
							}),
							$author$project$Chart$line(
							_List_fromArray(
								[
									$author$project$Chart$Attributes$dashed(
									_List_fromArray(
										[4, 2])),
									$author$project$Chart$Attributes$opacity(0.7),
									$author$project$Chart$Attributes$color('#f56dbc'),
									$author$project$Chart$Attributes$x1($author$project$Data$Salary$avgSalaryWomen)
								])),
							$author$project$Chart$line(
							_List_fromArray(
								[
									$author$project$Chart$Attributes$dashed(
									_List_fromArray(
										[4, 2])),
									$author$project$Chart$Attributes$opacity(0.7),
									$author$project$Chart$Attributes$color('#58a9f6'),
									$author$project$Chart$Attributes$x1($author$project$Data$Salary$avgSalaryMen)
								]))
						]);
				}),
				$author$project$Chart$line(
				_List_fromArray(
					[
						$author$project$Chart$Attributes$dashed(
						_List_fromArray(
							[3, 3])),
						$author$project$Chart$Attributes$y1(100)
					])),
				A4($author$project$Features$salarySeries, model, 0.7, 5, 200),
				$author$project$Chart$eachProduct(
				F2(
					function (p, product) {
						var top = A2($author$project$Chart$Item$getTop, p, product);
						var toSvgY = $author$project$Svg$Coordinates$scaleCartesianY(p);
						var toSvgX = $author$project$Svg$Coordinates$scaleCartesianX(p);
						var datum = $author$project$Chart$Item$getDatum(product);
						var color = $author$project$Chart$Item$getColor(product);
						return A2($elm$core$String$startsWith, '251 ', datum.sector) ? _List_fromArray(
							[
								$author$project$Chart$line(
								_List_fromArray(
									[
										$author$project$Chart$Attributes$color(color),
										$author$project$Chart$Attributes$break,
										$author$project$Chart$Attributes$x1(top.x),
										$author$project$Chart$Attributes$x2(
										top.x + toSvgX(10)),
										$author$project$Chart$Attributes$y1(top.y),
										$author$project$Chart$Attributes$y2(
										top.y + toSvgY(10))
									])),
								A3(
								$author$project$Chart$title,
								_List_fromArray(
									[
										$author$project$Chart$Attributes$color(color),
										$author$project$Chart$Attributes$alignLeft,
										$author$project$Chart$Attributes$xOff(5),
										$author$project$Chart$Attributes$yOff(3)
									]),
								_List_fromArray(
									[
										$elm$svg$Svg$text('Software engineering')
									]),
								{
									x: top.x + toSvgX(10),
									y: top.y + toSvgY(10)
								})
							]) : _List_Nil;
					})),
				function () {
				var _v3 = model.salaryWindow;
				if (_v3.$ === 'Just') {
					return A6(
						$author$project$Chart$htmlAt,
						function ($) {
							return $.max;
						},
						function ($) {
							return $.min;
						},
						-10,
						10,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'transform', 'translate(-100%, -100%)'),
								A2($elm$html$Html$Attributes$style, 'background', 'white'),
								A2($elm$html$Html$Attributes$style, 'border', '1px solid rgb(210, 210, 210)')
							]),
						_List_fromArray(
							[
								$author$project$Features$viewSalaryDiscrepancyMini(model),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
										A2($elm$html$Html$Attributes$style, 'top', '0'),
										A2($elm$html$Html$Attributes$style, 'right', '0'),
										A2($elm$html$Html$Attributes$style, 'background', 'transparent'),
										A2($elm$html$Html$Attributes$style, 'color', 'rgb(100, 100, 100)'),
										A2($elm$html$Html$Attributes$style, 'border', '0'),
										A2($elm$html$Html$Attributes$style, 'height', '30px'),
										A2($elm$html$Html$Attributes$style, 'width', '30px'),
										A2($elm$html$Html$Attributes$style, 'padding', '0'),
										A2($elm$html$Html$Attributes$style, 'margin', '0'),
										A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
										$elm$html$Html$Events$onClick($author$project$Features$OnResetSalaryWindow)
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$span,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-size', '28px'),
												A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
												A2($elm$html$Html$Attributes$style, 'top', '40%'),
												A2($elm$html$Html$Attributes$style, 'left', '50%'),
												A2($elm$html$Html$Attributes$style, 'transform', 'translate(-50%, -50%)'),
												A2($elm$html$Html$Attributes$style, 'line-height', '10px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('⨯')
											]))
									]))
							]));
				} else {
					return $author$project$Chart$none;
				}
			}(),
				A2(
				$author$project$Chart$each,
				$elm$core$Basics$always(model.salaryHovering),
				F2(
					function (p, item) {
						return _List_fromArray(
							[
								A4(
								$author$project$Chart$tooltip,
								item,
								_List_Nil,
								_List_Nil,
								_List_fromArray(
									[
										$author$project$Features$salaryTooltip(item)
									]))
							]);
					})),
				function () {
				var _v4 = model.salarySelection;
				if (_v4.$ === 'Just') {
					var select = _v4.a;
					return $author$project$Chart$rect(
						_List_fromArray(
							[
								$author$project$Chart$Attributes$opacity(0.5),
								$author$project$Chart$Attributes$x1(select.a.x),
								$author$project$Chart$Attributes$x2(select.b.x),
								$author$project$Chart$Attributes$y1(select.a.y),
								$author$project$Chart$Attributes$y2(select.b.y)
							]));
				} else {
					return $author$project$Chart$none;
				}
			}(),
				$author$project$Chart$svg(
				function (_v5) {
					return A2(
						$elm$svg$Svg$defs,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$svg$Svg$linearGradient,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$id('colorscale'),
										$elm$svg$Svg$Attributes$x1('0'),
										$elm$svg$Svg$Attributes$x2('100%'),
										$elm$svg$Svg$Attributes$y1('0'),
										$elm$svg$Svg$Attributes$y2('0')
									]),
								_List_fromArray(
									[
										A2(
										$elm$svg$Svg$stop,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$offset('0%'),
												$elm$svg$Svg$Attributes$stopColor('#f56dbc')
											]),
										_List_Nil),
										A2(
										$elm$svg$Svg$stop,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$offset('30%'),
												$elm$svg$Svg$Attributes$stopColor('#de74d7')
											]),
										_List_Nil),
										A2(
										$elm$svg$Svg$stop,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$offset('50%'),
												$elm$svg$Svg$Attributes$stopColor('#c579f2')
											]),
										_List_Nil),
										A2(
										$elm$svg$Svg$stop,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$offset('70%'),
												$elm$svg$Svg$Attributes$stopColor('#8a91f7')
											]),
										_List_Nil),
										A2(
										$elm$svg$Svg$stop,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$offset('100%'),
												$elm$svg$Svg$Attributes$stopColor('#58a9f6')
											]),
										_List_Nil)
									]))
							]));
				}),
				$author$project$Chart$withPlane(
				function (p) {
					var toSvgY = $author$project$Svg$Coordinates$scaleCartesianY(p);
					var y1 = p.y.max - toSvgY(13);
					var y2 = p.y.max - toSvgY(10);
					var toSvgX = $author$project$Svg$Coordinates$scaleCartesianX(p);
					var x1 = p.x.max - toSvgX(150);
					var x2 = p.x.max - toSvgX(20);
					return _List_fromArray(
						[
							$author$project$Chart$rect(
							_List_fromArray(
								[
									$author$project$Chart$Attributes$borderWidth(0),
									$author$project$Chart$Attributes$x1(x1),
									$author$project$Chart$Attributes$x2(x2),
									$author$project$Chart$Attributes$y1(y1),
									$author$project$Chart$Attributes$y2(y2),
									$author$project$Chart$Attributes$color('url(#colorscale)')
								])),
							A3(
							$author$project$Chart$title,
							_List_fromArray(
								[
									$author$project$Chart$Attributes$fontSize(10)
								]),
							_List_fromArray(
								[
									$elm$svg$Svg$text('more women')
								]),
							{
								x: x1,
								y: p.y.max - toSvgY(25)
							}),
							A3(
							$author$project$Chart$title,
							_List_fromArray(
								[
									$author$project$Chart$Attributes$fontSize(10)
								]),
							_List_fromArray(
								[
									$elm$svg$Svg$text('more men')
								]),
							{
								x: x2,
								y: p.y.max - toSvgY(25)
							}),
							A6(
							$author$project$Chart$htmlAt,
							function ($) {
								return $.max;
							},
							function ($) {
								return $.max;
							},
							-45,
							-45,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'rgb(90 90 90)'),
									A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Events$onClick(
											$author$project$Features$OnSalaryYear(2016))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('2016')
										])),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Events$onClick(
											$author$project$Features$OnSalaryYear(2017))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('2017')
										])),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Events$onClick(
											$author$project$Features$OnSalaryYear(2018))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('2018')
										])),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Events$onClick(
											$author$project$Features$OnSalaryYear(2019))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('2019')
										]))
								]))
						]);
				})
			]));
};
var $mdgriffith$elm_ui$Element$Border$widthXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$borderWidth,
			A5(
				$mdgriffith$elm_ui$Internal$Model$BorderWidth,
				'b-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var $mdgriffith$elm_ui$Element$Border$widthEach = function (_v0) {
	var bottom = _v0.bottom;
	var top = _v0.top;
	var left = _v0.left;
	var right = _v0.right;
	return (_Utils_eq(top, bottom) && _Utils_eq(left, right)) ? (_Utils_eq(top, right) ? $mdgriffith$elm_ui$Element$Border$width(top) : A2($mdgriffith$elm_ui$Element$Border$widthXY, left, top)) : A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left))))))),
			top,
			right,
			bottom,
			left));
};
var $author$project$Features$view = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$layout,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$typeface('IBM Plex Sans'),
						$mdgriffith$elm_ui$Element$Font$sansSerif
					]))
			]),
		A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					A2($mdgriffith$elm_ui$Element$maximum, 1000, $mdgriffith$elm_ui$Element$fill)),
					$mdgriffith$elm_ui$Element$paddingEach(
					{bottom: 30, left: 0, right: 0, top: 30}),
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$Font$size(12),
					$mdgriffith$elm_ui$Element$Font$color(
					A3($mdgriffith$elm_ui$Element$rgb255, 80, 80, 80))
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$html(
					$author$project$Features$viewSalaryDiscrepancy(model)),
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$size(50),
							$mdgriffith$elm_ui$Element$paddingEach(
							{bottom: 10, left: 0, right: 0, top: 50})
						]),
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text('elm-charts'),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 130, 130, 130))
								]),
							$mdgriffith$elm_ui$Element$text('-alpha'))
						])),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$paddingEach(
							{bottom: 25, left: 0, right: 0, top: 0}),
							$mdgriffith$elm_ui$Element$Font$color(
							A3($mdgriffith$elm_ui$Element$rgb255, 130, 130, 130)),
							$mdgriffith$elm_ui$Element$Font$size(14)
						]),
					$mdgriffith$elm_ui$Element$text('Alpha version. Feel free to use, but please do not share publicly yet. Documentation is unfinished/wrong and API liable to breaking changes.')),
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$spaceEvenly,
							$mdgriffith$elm_ui$Element$width(
							A2($mdgriffith$elm_ui$Element$maximum, 600, $mdgriffith$elm_ui$Element$fill))
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$alignTop,
									$mdgriffith$elm_ui$Element$spacing(5)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(16),
											$mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 10, left: 0, right: 0, top: 0})
										]),
									$mdgriffith$elm_ui$Element$text('Explore')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Scatter charts')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Line charts')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Bar charts')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Interactivity')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Custom axes')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Custom labels'))
								])),
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$alignTop,
									$mdgriffith$elm_ui$Element$spacing(5)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(16),
											$mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 10, left: 0, right: 0, top: 0})
										]),
									$mdgriffith$elm_ui$Element$text('Real life examples')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Salary distribution in Denmark')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Perceptions of Probability')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Community examples'))
								])),
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$alignTop,
									$mdgriffith$elm_ui$Element$spacing(5)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(16),
											$mdgriffith$elm_ui$Element$paddingEach(
											{bottom: 10, left: 0, right: 0, top: 0})
										]),
									$mdgriffith$elm_ui$Element$text('Administration')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Roadmap')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Donating')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Consulting')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Github')),
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$Font$size(13)
										]),
									$mdgriffith$elm_ui$Element$text('Twitter'))
								]))
						])),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$size(12),
							$mdgriffith$elm_ui$Element$Font$color(
							A3($mdgriffith$elm_ui$Element$rgb255, 180, 180, 180)),
							$mdgriffith$elm_ui$Element$paddingEach(
							{bottom: 20, left: 0, right: 0, top: 20}),
							$mdgriffith$elm_ui$Element$alignRight
						]),
					$mdgriffith$elm_ui$Element$text('Designed and developed by Tereza Sokol © 2021')),
					A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Border$widthEach(
							{bottom: 0, left: 0, right: 0, top: 1}),
							$mdgriffith$elm_ui$Element$Border$color(
							A3($mdgriffith$elm_ui$Element$rgb255, 210, 210, 210)),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							A2($author$project$Section$ScatterChart$view, $author$project$Features$OnExploration, model.exploration),
							A2($author$project$Section$LineChart$view, $author$project$Features$OnExploration, model.exploration),
							A2($author$project$Section$BarChart$view, $author$project$Features$OnExploration, model.exploration),
							A2($author$project$Section$CustomAxes$view, $author$project$Features$OnExploration, model.exploration),
							A4($author$project$Section$Interactivity$view, $author$project$Features$OnExploration, model.exploration, $author$project$Features$OnInteractivity, model.interactivity)
						]))
				])));
};
var $author$project$Features$main = $elm$browser$Browser$sandbox(
	{init: $author$project$Features$init, update: $author$project$Features$update, view: $author$project$Features$view});
_Platform_export({'Features':{'init':$author$project$Features$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));