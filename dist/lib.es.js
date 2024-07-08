/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var gr = Object.freeze({});
function Ue(t) {
  return t == null;
}
function ie(t) {
  return t != null;
}
function Ct(t) {
  return t === !0;
}
function $m(t) {
  return t === !1;
}
function un(t) {
  return typeof t == "string" || typeof t == "number" || // $flow-disable-line
  typeof t == "symbol" || typeof t == "boolean";
}
function Wt(t) {
  return t !== null && typeof t == "object";
}
var vi = Object.prototype.toString;
function gi(t) {
  return vi.call(t).slice(8, -1);
}
function Qt(t) {
  return vi.call(t) === "[object Object]";
}
function dl(t) {
  return vi.call(t) === "[object RegExp]";
}
function fl(t) {
  var n = parseFloat(String(t));
  return n >= 0 && Math.floor(n) === n && isFinite(t);
}
function pa(t) {
  return ie(t) && typeof t.then == "function" && typeof t.catch == "function";
}
function qm(t) {
  return t == null ? "" : Array.isArray(t) || Qt(t) && t.toString === vi ? JSON.stringify(t, null, 2) : String(t);
}
function vo(t) {
  var n = parseFloat(t);
  return isNaN(n) ? t : n;
}
function lr(t, n) {
  for (var i = /* @__PURE__ */ Object.create(null), c = t.split(","), f = 0; f < c.length; f++)
    i[c[f]] = !0;
  return n ? function(E) {
    return i[E.toLowerCase()];
  } : function(E) {
    return i[E];
  };
}
var Jm = lr("slot,component", !0), hl = lr("key,ref,slot,slot-scope,is");
function qr(t, n) {
  if (t.length) {
    var i = t.indexOf(n);
    if (i > -1)
      return t.splice(i, 1);
  }
}
var Xm = Object.prototype.hasOwnProperty;
function jt(t, n) {
  return Xm.call(t, n);
}
function bn(t) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(c) {
    var f = n[c];
    return f || (n[c] = t(c));
  };
}
var Ym = /-(\w)/g, In = bn(function(t) {
  return t.replace(Ym, function(n, i) {
    return i ? i.toUpperCase() : "";
  });
}), ml = bn(function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}), Qm = /\B([A-Z])/g, Mn = bn(function(t) {
  return t.replace(Qm, "-$1").toLowerCase();
});
function Zm(t, n) {
  function i(c) {
    var f = arguments.length;
    return f ? f > 1 ? t.apply(n, arguments) : t.call(n, c) : t.call(n);
  }
  return i._length = t.length, i;
}
function ev(t, n) {
  return t.bind(n);
}
var tv = Function.prototype.bind ? ev : Zm;
function da(t, n) {
  n = n || 0;
  for (var i = t.length - n, c = new Array(i); i--; )
    c[i] = t[i + n];
  return c;
}
function ft(t, n) {
  for (var i in n)
    t[i] = n[i];
  return t;
}
function vl(t) {
  for (var n = {}, i = 0; i < t.length; i++)
    t[i] && ft(n, t[i]);
  return n;
}
function Gt(t, n, i) {
}
var Bo = function(t, n, i) {
  return !1;
}, gl = function(t) {
  return t;
};
function Sn(t, n) {
  if (t === n)
    return !0;
  var i = Wt(t), c = Wt(n);
  if (i && c)
    try {
      var f = Array.isArray(t), E = Array.isArray(n);
      if (f && E)
        return t.length === n.length && t.every(function(O, N) {
          return Sn(O, n[N]);
        });
      if (t instanceof Date && n instanceof Date)
        return t.getTime() === n.getTime();
      if (!f && !E) {
        var _ = Object.keys(t), I = Object.keys(n);
        return _.length === I.length && _.every(function(O) {
          return Sn(t[O], n[O]);
        });
      } else
        return !1;
    } catch {
      return !1;
    }
  else return !i && !c ? String(t) === String(n) : !1;
}
function El(t, n) {
  for (var i = 0; i < t.length; i++)
    if (Sn(t[i], n))
      return i;
  return -1;
}
function ni(t) {
  var n = !1;
  return function() {
    n || (n = !0, t.apply(this, arguments));
  };
}
var tu = "data-server-rendered", Ei = [
  "component",
  "directive",
  "filter"
], yl = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch"
], ct = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: /* @__PURE__ */ Object.create(null),
  /**
   * Whether to suppress warnings.
   */
  silent: !1,
  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== "production",
  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== "production",
  /**
   * Whether to record perf
   */
  performance: !1,
  /**
   * Error handler for watcher errors
   */
  errorHandler: null,
  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,
  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],
  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: /* @__PURE__ */ Object.create(null),
  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: Bo,
  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: Bo,
  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: Bo,
  /**
   * Get the namespace of an element
   */
  getTagNamespace: Gt,
  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: gl,
  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: Bo,
  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: !0,
  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: yl
}, _l = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function Tl(t) {
  var n = (t + "").charCodeAt(0);
  return n === 36 || n === 95;
}
function Xn(t, n, i, c) {
  Object.defineProperty(t, n, {
    value: i,
    enumerable: !!c,
    writable: !0,
    configurable: !0
  });
}
var rv = new RegExp("[^" + _l.source + ".$_\\d]");
function nv(t) {
  if (!rv.test(t)) {
    var n = t.split(".");
    return function(i) {
      for (var c = 0; c < n.length; c++) {
        if (!i)
          return;
        i = i[n[c]];
      }
      return i;
    };
  }
}
var ov = "__proto__" in {}, ar = typeof window < "u", Fa = typeof WXEnvironment < "u" && !!WXEnvironment.platform, Ol = Fa && WXEnvironment.platform.toLowerCase(), Tr = ar && window.navigator.userAgent.toLowerCase(), to = Tr && /msie|trident/.test(Tr), ro = Tr && Tr.indexOf("msie 9.0") > 0, Rl = Tr && Tr.indexOf("edge/") > 0;
Tr && Tr.indexOf("android") > 0;
var iv = Tr && /iphone|ipad|ipod|ios/.test(Tr) || Ol === "ios", ru = Tr && Tr.match(/firefox\/(\d+)/), fa = {}.watch, Il = !1;
if (ar)
  try {
    var nu = {};
    Object.defineProperty(nu, "passive", {
      get: function() {
        Il = !0;
      }
    }), window.addEventListener("test-passive", null, nu);
  } catch {
  }
var Ho, yi = function() {
  return Ho === void 0 && (!ar && !Fa && typeof global < "u" ? Ho = global.process && global.process.env.VUE_ENV === "server" : Ho = !1), Ho;
}, oi = ar && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function yn(t) {
  return typeof t == "function" && /native code/.test(t.toString());
}
var _i = typeof Symbol < "u" && yn(Symbol) && typeof Reflect < "u" && yn(Reflect.ownKeys), go;
typeof Set < "u" && yn(Set) ? go = Set : go = /* @__PURE__ */ function() {
  function t() {
    this.set = /* @__PURE__ */ Object.create(null);
  }
  return t.prototype.has = function(i) {
    return this.set[i] === !0;
  }, t.prototype.add = function(i) {
    this.set[i] = !0;
  }, t.prototype.clear = function() {
    this.set = /* @__PURE__ */ Object.create(null);
  }, t;
}();
var Oe = Gt, Wa = Gt, Yi = Gt, vn = Gt;
if (process.env.NODE_ENV !== "production") {
  var ou = typeof console < "u", av = /(?:^|[-_])(\w)/g, sv = function(t) {
    return t.replace(av, function(n) {
      return n.toUpperCase();
    }).replace(/[-_]/g, "");
  };
  Oe = function(t, n) {
    var i = n ? Yi(n) : "";
    ct.warnHandler ? ct.warnHandler.call(null, t, n, i) : ou && !ct.silent && console.error("[Vue warn]: " + t + i);
  }, Wa = function(t, n) {
    ou && !ct.silent && console.warn("[Vue tip]: " + t + (n ? Yi(n) : ""));
  }, vn = function(t, n) {
    if (t.$root === t)
      return "<Root>";
    var i = typeof t == "function" && t.cid != null ? t.options : t._isVue ? t.$options || t.constructor.options : t, c = i.name || i._componentTag, f = i.__file;
    if (!c && f) {
      var E = f.match(/([^/\\]+)\.vue$/);
      c = E && E[1];
    }
    return (c ? "<" + sv(c) + ">" : "<Anonymous>") + (f && n !== !1 ? " at " + f : "");
  };
  var cv = function(t, n) {
    for (var i = ""; n; )
      n % 2 === 1 && (i += t), n > 1 && (t += t), n >>= 1;
    return i;
  };
  Yi = function(t) {
    if (t._isVue && t.$parent) {
      for (var n = [], i = 0; t; ) {
        if (n.length > 0) {
          var c = n[n.length - 1];
          if (c.constructor === t.constructor) {
            i++, t = t.$parent;
            continue;
          } else i > 0 && (n[n.length - 1] = [c, i], i = 0);
        }
        n.push(t), t = t.$parent;
      }
      return `

found in

` + n.map(function(f, E) {
        return "" + (E === 0 ? "---> " : cv(" ", 5 + E * 2)) + (Array.isArray(f) ? vn(f[0]) + "... (" + f[1] + " recursive calls)" : vn(f));
      }).join(`
`);
    } else
      return `

(found in ` + vn(t) + ")";
  };
}
var uv = 0, ur = function() {
  this.id = uv++, this.subs = [];
};
ur.prototype.addSub = function(n) {
  this.subs.push(n);
};
ur.prototype.removeSub = function(n) {
  qr(this.subs, n);
};
ur.prototype.depend = function() {
  ur.target && ur.target.addDep(this);
};
ur.prototype.notify = function() {
  var n = this.subs.slice();
  process.env.NODE_ENV !== "production" && !ct.async && n.sort(function(f, E) {
    return f.id - E.id;
  });
  for (var i = 0, c = n.length; i < c; i++)
    n[i].update();
};
ur.target = null;
var Jo = [];
function So(t) {
  Jo.push(t), ur.target = t;
}
function Co() {
  Jo.pop(), ur.target = Jo[Jo.length - 1];
}
var ir = function(n, i, c, f, E, _, I, O) {
  this.tag = n, this.data = i, this.children = c, this.text = f, this.elm = E, this.ns = void 0, this.context = _, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = i && i.key, this.componentOptions = I, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = O, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
}, Sl = { child: { configurable: !0 } };
Sl.child.get = function() {
  return this.componentInstance;
};
Object.defineProperties(ir.prototype, Sl);
var _n = function(t) {
  t === void 0 && (t = "");
  var n = new ir();
  return n.text = t, n.isComment = !0, n;
};
function zn(t) {
  return new ir(void 0, void 0, void 0, String(t));
}
function ha(t) {
  var n = new ir(
    t.tag,
    t.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    t.children && t.children.slice(),
    t.text,
    t.elm,
    t.context,
    t.componentOptions,
    t.asyncFactory
  );
  return n.ns = t.ns, n.isStatic = t.isStatic, n.key = t.key, n.isComment = t.isComment, n.fnContext = t.fnContext, n.fnOptions = t.fnOptions, n.fnScopeId = t.fnScopeId, n.asyncMeta = t.asyncMeta, n.isCloned = !0, n;
}
var Cl = Array.prototype, ii = Object.create(Cl), lv = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
lv.forEach(function(t) {
  var n = Cl[t];
  Xn(ii, t, function() {
    for (var c = [], f = arguments.length; f--; ) c[f] = arguments[f];
    var E = n.apply(this, c), _ = this.__ob__, I;
    switch (t) {
      case "push":
      case "unshift":
        I = c;
        break;
      case "splice":
        I = c.slice(2);
        break;
    }
    return I && _.observeArray(I), _.dep.notify(), E;
  });
});
var pv = Object.getOwnPropertyNames(ii), Va = !0;
function sn(t) {
  Va = t;
}
var ai = function(n) {
  this.value = n, this.dep = new ur(), this.vmCount = 0, Xn(n, "__ob__", this), Array.isArray(n) ? (ov ? dv(n, ii) : fv(n, ii, pv), this.observeArray(n)) : this.walk(n);
};
ai.prototype.walk = function(n) {
  for (var i = Object.keys(n), c = 0; c < i.length; c++)
    br(n, i[c]);
};
ai.prototype.observeArray = function(n) {
  for (var i = 0, c = n.length; i < c; i++)
    Cn(n[i]);
};
function dv(t, n) {
  t.__proto__ = n;
}
function fv(t, n, i) {
  for (var c = 0, f = i.length; c < f; c++) {
    var E = i[c];
    Xn(t, E, n[E]);
  }
}
function Cn(t, n) {
  if (!(!Wt(t) || t instanceof ir)) {
    var i;
    return jt(t, "__ob__") && t.__ob__ instanceof ai ? i = t.__ob__ : Va && !yi() && (Array.isArray(t) || Qt(t)) && Object.isExtensible(t) && !t._isVue && (i = new ai(t)), n && i && i.vmCount++, i;
  }
}
function br(t, n, i, c, f) {
  var E = new ur(), _ = Object.getOwnPropertyDescriptor(t, n);
  if (!(_ && _.configurable === !1)) {
    var I = _ && _.get, O = _ && _.set;
    (!I || O) && arguments.length === 2 && (i = t[n]);
    var N = !f && Cn(i);
    Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var R = I ? I.call(t) : i;
        return ur.target && (E.depend(), N && (N.dep.depend(), Array.isArray(R) && Al(R))), R;
      },
      set: function(R) {
        var A = I ? I.call(t) : i;
        R === A || R !== R && A !== A || (process.env.NODE_ENV !== "production" && c && c(), !(I && !O) && (O ? O.call(t, R) : i = R, N = !f && Cn(R), E.notify()));
      }
    });
  }
}
function Ka(t, n, i) {
  if (process.env.NODE_ENV !== "production" && (Ue(t) || un(t)) && Oe("Cannot set reactive property on undefined, null, or primitive value: " + t), Array.isArray(t) && fl(n))
    return t.length = Math.max(t.length, n), t.splice(n, 1, i), i;
  if (n in t && !(n in Object.prototype))
    return t[n] = i, i;
  var c = t.__ob__;
  return t._isVue || c && c.vmCount ? (process.env.NODE_ENV !== "production" && Oe(
    "Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."
  ), i) : c ? (br(c.value, n, i), c.dep.notify(), i) : (t[n] = i, i);
}
function Nl(t, n) {
  if (process.env.NODE_ENV !== "production" && (Ue(t) || un(t)) && Oe("Cannot delete reactive property on undefined, null, or primitive value: " + t), Array.isArray(t) && fl(n)) {
    t.splice(n, 1);
    return;
  }
  var i = t.__ob__;
  if (t._isVue || i && i.vmCount) {
    process.env.NODE_ENV !== "production" && Oe(
      "Avoid deleting properties on a Vue instance or its root $data - just set it to null."
    );
    return;
  }
  jt(t, n) && (delete t[n], i && i.dep.notify());
}
function Al(t) {
  for (var n = void 0, i = 0, c = t.length; i < c; i++)
    n = t[i], n && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && Al(n);
}
var Er = ct.optionMergeStrategies;
process.env.NODE_ENV !== "production" && (Er.el = Er.propsData = function(t, n, i, c) {
  return i || Oe(
    'option "' + c + '" can only be used during instance creation with the `new` keyword.'
  ), bl(t, n);
});
function ma(t, n) {
  if (!n)
    return t;
  for (var i, c, f, E = _i ? Reflect.ownKeys(n) : Object.keys(n), _ = 0; _ < E.length; _++)
    i = E[_], i !== "__ob__" && (c = t[i], f = n[i], jt(t, i) ? c !== f && Qt(c) && Qt(f) && ma(c, f) : Ka(t, i, f));
  return t;
}
function va(t, n, i) {
  return i ? function() {
    var f = typeof n == "function" ? n.call(i, i) : n, E = typeof t == "function" ? t.call(i, i) : t;
    return f ? ma(f, E) : E;
  } : n ? t ? function() {
    return ma(
      typeof n == "function" ? n.call(this, this) : n,
      typeof t == "function" ? t.call(this, this) : t
    );
  } : n : t;
}
Er.data = function(t, n, i) {
  return i ? va(t, n, i) : n && typeof n != "function" ? (process.env.NODE_ENV !== "production" && Oe(
    'The "data" option should be a function that returns a per-instance value in component definitions.',
    i
  ), t) : va(t, n);
};
function hv(t, n) {
  var i = n ? t ? t.concat(n) : Array.isArray(n) ? n : [n] : t;
  return i && mv(i);
}
function mv(t) {
  for (var n = [], i = 0; i < t.length; i++)
    n.indexOf(t[i]) === -1 && n.push(t[i]);
  return n;
}
yl.forEach(function(t) {
  Er[t] = hv;
});
function vv(t, n, i, c) {
  var f = Object.create(t || null);
  return n ? (process.env.NODE_ENV !== "production" && $a(c, n, i), ft(f, n)) : f;
}
Ei.forEach(function(t) {
  Er[t + "s"] = vv;
});
Er.watch = function(t, n, i, c) {
  if (t === fa && (t = void 0), n === fa && (n = void 0), !n)
    return Object.create(t || null);
  if (process.env.NODE_ENV !== "production" && $a(c, n, i), !t)
    return n;
  var f = {};
  ft(f, t);
  for (var E in n) {
    var _ = f[E], I = n[E];
    _ && !Array.isArray(_) && (_ = [_]), f[E] = _ ? _.concat(I) : Array.isArray(I) ? I : [I];
  }
  return f;
};
Er.props = Er.methods = Er.inject = Er.computed = function(t, n, i, c) {
  if (n && process.env.NODE_ENV !== "production" && $a(c, n, i), !t)
    return n;
  var f = /* @__PURE__ */ Object.create(null);
  return ft(f, t), n && ft(f, n), f;
};
Er.provide = va;
var bl = function(t, n) {
  return n === void 0 ? t : n;
};
function gv(t) {
  for (var n in t.components)
    za(n);
}
function za(t) {
  new RegExp("^[a-zA-Z][\\-\\.0-9_" + _l.source + "]*$").test(t) || Oe(
    'Invalid component name: "' + t + '". Component names should conform to valid custom element name in html5 specification.'
  ), (Jm(t) || ct.isReservedTag(t)) && Oe(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Ev(t, n) {
  var i = t.props;
  if (i) {
    var c = {}, f, E, _;
    if (Array.isArray(i))
      for (f = i.length; f--; )
        E = i[f], typeof E == "string" ? (_ = In(E), c[_] = { type: null }) : process.env.NODE_ENV !== "production" && Oe("props must be strings when using array syntax.");
    else if (Qt(i))
      for (var I in i)
        E = i[I], _ = In(I), c[_] = Qt(E) ? E : { type: E };
    else process.env.NODE_ENV !== "production" && Oe(
      'Invalid value for option "props": expected an Array or an Object, but got ' + gi(i) + ".",
      n
    );
    t.props = c;
  }
}
function yv(t, n) {
  var i = t.inject;
  if (i) {
    var c = t.inject = {};
    if (Array.isArray(i))
      for (var f = 0; f < i.length; f++)
        c[i[f]] = { from: i[f] };
    else if (Qt(i))
      for (var E in i) {
        var _ = i[E];
        c[E] = Qt(_) ? ft({ from: E }, _) : { from: _ };
      }
    else process.env.NODE_ENV !== "production" && Oe(
      'Invalid value for option "inject": expected an Array or an Object, but got ' + gi(i) + ".",
      n
    );
  }
}
function _v(t) {
  var n = t.directives;
  if (n)
    for (var i in n) {
      var c = n[i];
      typeof c == "function" && (n[i] = { bind: c, update: c });
    }
}
function $a(t, n, i) {
  Qt(n) || Oe(
    'Invalid value for option "' + t + '": expected an Object, but got ' + gi(n) + ".",
    i
  );
}
function Nn(t, n, i) {
  if (process.env.NODE_ENV !== "production" && gv(n), typeof n == "function" && (n = n.options), Ev(n, i), yv(n, i), _v(n), !n._base && (n.extends && (t = Nn(t, n.extends, i)), n.mixins))
    for (var c = 0, f = n.mixins.length; c < f; c++)
      t = Nn(t, n.mixins[c], i);
  var E = {}, _;
  for (_ in t)
    I(_);
  for (_ in n)
    jt(t, _) || I(_);
  function I(O) {
    var N = Er[O] || bl;
    E[O] = N(t[O], n[O], i, O);
  }
  return E;
}
function qa(t, n, i, c) {
  if (typeof i == "string") {
    var f = t[n];
    if (jt(f, i))
      return f[i];
    var E = In(i);
    if (jt(f, E))
      return f[E];
    var _ = ml(E);
    if (jt(f, _))
      return f[_];
    var I = f[i] || f[E] || f[_];
    return process.env.NODE_ENV !== "production" && c && !I && Oe(
      "Failed to resolve " + n.slice(0, -1) + ": " + i,
      t
    ), I;
  }
}
function Ja(t, n, i, c) {
  var f = n[t], E = !jt(i, t), _ = i[t], I = au(Boolean, f.type);
  if (I > -1) {
    if (E && !jt(f, "default"))
      _ = !1;
    else if (_ === "" || _ === Mn(t)) {
      var O = au(String, f.type);
      (O < 0 || I < O) && (_ = !0);
    }
  }
  if (_ === void 0) {
    _ = Tv(c, f, t);
    var N = Va;
    sn(!0), Cn(_), sn(N);
  }
  return process.env.NODE_ENV !== "production" && Ov(f, t, _, c, E), _;
}
function Tv(t, n, i) {
  if (jt(n, "default")) {
    var c = n.default;
    return process.env.NODE_ENV !== "production" && Wt(c) && Oe(
      'Invalid default value for prop "' + i + '": Props with type Object/Array must use a factory function to return the default value.',
      t
    ), t && t.$options.propsData && t.$options.propsData[i] === void 0 && t._props[i] !== void 0 ? t._props[i] : typeof c == "function" && si(n.type) !== "Function" ? c.call(t) : c;
  }
}
function Ov(t, n, i, c, f) {
  if (t.required && f) {
    Oe(
      'Missing required prop: "' + n + '"',
      c
    );
    return;
  }
  if (!(i == null && !t.required)) {
    var E = t.type, _ = !E || E === !0, I = [];
    if (E) {
      Array.isArray(E) || (E = [E]);
      for (var O = 0; O < E.length && !_; O++) {
        var N = Iv(i, E[O], c);
        I.push(N.expectedType || ""), _ = N.valid;
      }
    }
    var b = I.some(function(A) {
      return A;
    });
    if (!_ && b) {
      Oe(
        Cv(n, i, I),
        c
      );
      return;
    }
    var R = t.validator;
    R && (R(i) || Oe(
      'Invalid prop: custom validator check failed for prop "' + n + '".',
      c
    ));
  }
}
var Rv = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
function Iv(t, n, i) {
  var c, f = si(n);
  if (Rv.test(f)) {
    var E = typeof t;
    c = E === f.toLowerCase(), !c && E === "object" && (c = t instanceof n);
  } else if (f === "Object")
    c = Qt(t);
  else if (f === "Array")
    c = Array.isArray(t);
  else
    try {
      c = t instanceof n;
    } catch {
      Oe('Invalid prop type: "' + String(n) + '" is not a constructor', i), c = !1;
    }
  return {
    valid: c,
    expectedType: f
  };
}
var Sv = /^\s*function (\w+)/;
function si(t) {
  var n = t && t.toString().match(Sv);
  return n ? n[1] : "";
}
function iu(t, n) {
  return si(t) === si(n);
}
function au(t, n) {
  if (!Array.isArray(n))
    return iu(n, t) ? 0 : -1;
  for (var i = 0, c = n.length; i < c; i++)
    if (iu(n[i], t))
      return i;
  return -1;
}
function Cv(t, n, i) {
  var c = 'Invalid prop: type check failed for prop "' + t + '". Expected ' + i.map(ml).join(", "), f = i[0], E = gi(n);
  return i.length === 1 && Qi(f) && Qi(typeof n) && !Av(f, E) && (c += " with value " + su(n, f)), c += ", got " + E + " ", Qi(E) && (c += "with value " + su(n, E) + "."), c;
}
function su(t, n) {
  return n === "String" ? '"' + t + '"' : n === "Number" ? "" + Number(t) : "" + t;
}
var Nv = ["string", "number", "boolean"];
function Qi(t) {
  return Nv.some(function(n) {
    return t.toLowerCase() === n;
  });
}
function Av() {
  for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
  return t.some(function(i) {
    return i.toLowerCase() === "boolean";
  });
}
function cn(t, n, i) {
  So();
  try {
    if (n)
      for (var c = n; c = c.$parent; ) {
        var f = c.$options.errorCaptured;
        if (f)
          for (var E = 0; E < f.length; E++)
            try {
              var _ = f[E].call(c, t, n, i) === !1;
              if (_)
                return;
            } catch (I) {
              cu(I, c, "errorCaptured hook");
            }
      }
    cu(t, n, i);
  } finally {
    Co();
  }
}
function Qn(t, n, i, c, f) {
  var E;
  try {
    E = i ? t.apply(n, i) : t.call(n), E && !E._isVue && pa(E) && !E._handled && (E.catch(function(_) {
      return cn(_, c, f + " (Promise/async)");
    }), E._handled = !0);
  } catch (_) {
    cn(_, c, f);
  }
  return E;
}
function cu(t, n, i) {
  if (ct.errorHandler)
    try {
      return ct.errorHandler.call(null, t, n, i);
    } catch (c) {
      c !== t && uu(c, null, "config.errorHandler");
    }
  uu(t, n, i);
}
function uu(t, n, i) {
  if (process.env.NODE_ENV !== "production" && Oe("Error in " + i + ': "' + t.toString() + '"', n), (ar || Fa) && typeof console < "u")
    console.error(t);
  else
    throw t;
}
var ga = !1, Ea = [], ya = !1;
function Fo() {
  ya = !1;
  var t = Ea.slice(0);
  Ea.length = 0;
  for (var n = 0; n < t.length; n++)
    t[n]();
}
var po;
if (typeof Promise < "u" && yn(Promise)) {
  var bv = Promise.resolve();
  po = function() {
    bv.then(Fo), iv && setTimeout(Gt);
  }, ga = !0;
} else if (!to && typeof MutationObserver < "u" && (yn(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var Wo = 1, Mv = new MutationObserver(Fo), lu = document.createTextNode(String(Wo));
  Mv.observe(lu, {
    characterData: !0
  }), po = function() {
    Wo = (Wo + 1) % 2, lu.data = String(Wo);
  }, ga = !0;
} else typeof setImmediate < "u" && yn(setImmediate) ? po = function() {
  setImmediate(Fo);
} : po = function() {
  setTimeout(Fo, 0);
};
function Xa(t, n) {
  var i;
  if (Ea.push(function() {
    if (t)
      try {
        t.call(n);
      } catch (c) {
        cn(c, n, "nextTick");
      }
    else i && i(n);
  }), ya || (ya = !0, po()), !t && typeof Promise < "u")
    return new Promise(function(c) {
      i = c;
    });
}
var Ml;
if (process.env.NODE_ENV !== "production") {
  var wv = lr(
    "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"
    // for Webpack/Browserify
  ), pu = function(t, n) {
    Oe(
      'Property or method "' + n + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      t
    );
  }, du = function(t, n) {
    Oe(
      'Property "' + n + '" must be accessed with "$data.' + n + '" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data',
      t
    );
  }, fu = typeof Proxy < "u" && yn(Proxy);
  if (fu) {
    var Uv = lr("stop,prevent,self,ctrl,shift,alt,meta,exact");
    ct.keyCodes = new Proxy(ct.keyCodes, {
      set: function(n, i, c) {
        return Uv(i) ? (Oe("Avoid overwriting built-in modifier in config.keyCodes: ." + i), !1) : (n[i] = c, !0);
      }
    });
  }
  var Pv = {
    has: function(n, i) {
      var c = i in n, f = wv(i) || typeof i == "string" && i.charAt(0) === "_" && !(i in n.$data);
      return !c && !f && (i in n.$data ? du(n, i) : pu(n, i)), c || !f;
    }
  }, kv = {
    get: function(n, i) {
      return typeof i == "string" && !(i in n) && (i in n.$data ? du(n, i) : pu(n, i)), n[i];
    }
  };
  Ml = function(n) {
    if (fu) {
      var i = n.$options, c = i.render && i.render._withStripped ? kv : Pv;
      n._renderProxy = new Proxy(n, c);
    } else
      n._renderProxy = n;
  };
}
var hu = new go();
function ci(t) {
  _a(t, hu), hu.clear();
}
function _a(t, n) {
  var i, c, f = Array.isArray(t);
  if (!(!f && !Wt(t) || Object.isFrozen(t) || t instanceof ir)) {
    if (t.__ob__) {
      var E = t.__ob__.dep.id;
      if (n.has(E))
        return;
      n.add(E);
    }
    if (f)
      for (i = t.length; i--; )
        _a(t[i], n);
    else
      for (c = Object.keys(t), i = c.length; i--; )
        _a(t[c[i]], n);
  }
}
var Gr, ui;
if (process.env.NODE_ENV !== "production") {
  var Kr = ar && window.performance;
  Kr && Kr.mark && Kr.measure && Kr.clearMarks && Kr.clearMeasures && (Gr = function(t) {
    return Kr.mark(t);
  }, ui = function(t, n, i) {
    Kr.measure(t, n, i), Kr.clearMarks(n), Kr.clearMarks(i);
  });
}
var mu = bn(function(t) {
  var n = t.charAt(0) === "&";
  t = n ? t.slice(1) : t;
  var i = t.charAt(0) === "~";
  t = i ? t.slice(1) : t;
  var c = t.charAt(0) === "!";
  return t = c ? t.slice(1) : t, {
    name: t,
    once: i,
    capture: c,
    passive: n
  };
});
function Ta(t, n) {
  function i() {
    var c = arguments, f = i.fns;
    if (Array.isArray(f))
      for (var E = f.slice(), _ = 0; _ < E.length; _++)
        Qn(E[_], null, c, n, "v-on handler");
    else
      return Qn(f, null, arguments, n, "v-on handler");
  }
  return i.fns = t, i;
}
function wl(t, n, i, c, f, E) {
  var _, I, O, N;
  for (_ in t)
    I = t[_], O = n[_], N = mu(_), Ue(I) ? process.env.NODE_ENV !== "production" && Oe(
      'Invalid handler for event "' + N.name + '": got ' + String(I),
      E
    ) : Ue(O) ? (Ue(I.fns) && (I = t[_] = Ta(I, E)), Ct(N.once) && (I = t[_] = f(N.name, I, N.capture)), i(N.name, I, N.capture, N.passive, N.params)) : I !== O && (O.fns = I, t[_] = O);
  for (_ in n)
    Ue(t[_]) && (N = mu(_), c(N.name, n[_], N.capture));
}
function nn(t, n, i) {
  t instanceof ir && (t = t.data.hook || (t.data.hook = {}));
  var c, f = t[n];
  function E() {
    i.apply(this, arguments), qr(c.fns, E);
  }
  Ue(f) ? c = Ta([E]) : ie(f.fns) && Ct(f.merged) ? (c = f, c.fns.push(E)) : c = Ta([f, E]), c.merged = !0, t[n] = c;
}
function Dv(t, n, i) {
  var c = n.options.props;
  if (!Ue(c)) {
    var f = {}, E = t.attrs, _ = t.props;
    if (ie(E) || ie(_))
      for (var I in c) {
        var O = Mn(I);
        if (process.env.NODE_ENV !== "production") {
          var N = I.toLowerCase();
          I !== N && E && jt(E, N) && Wa(
            'Prop "' + N + '" is passed to component ' + vn(i || n) + ', but the declared prop name is "' + I + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + O + '" instead of "' + I + '".'
          );
        }
        vu(f, _, I, O, !0) || vu(f, E, I, O, !1);
      }
    return f;
  }
}
function vu(t, n, i, c, f) {
  if (ie(n)) {
    if (jt(n, i))
      return t[i] = n[i], f || delete n[i], !0;
    if (jt(n, c))
      return t[i] = n[c], f || delete n[c], !0;
  }
  return !1;
}
function Lv(t) {
  for (var n = 0; n < t.length; n++)
    if (Array.isArray(t[n]))
      return Array.prototype.concat.apply([], t);
  return t;
}
function Ya(t) {
  return un(t) ? [zn(t)] : Array.isArray(t) ? Ul(t) : void 0;
}
function co(t) {
  return ie(t) && ie(t.text) && $m(t.isComment);
}
function Ul(t, n) {
  var i = [], c, f, E, _;
  for (c = 0; c < t.length; c++)
    f = t[c], !(Ue(f) || typeof f == "boolean") && (E = i.length - 1, _ = i[E], Array.isArray(f) ? f.length > 0 && (f = Ul(f, (n || "") + "_" + c), co(f[0]) && co(_) && (i[E] = zn(_.text + f[0].text), f.shift()), i.push.apply(i, f)) : un(f) ? co(_) ? i[E] = zn(_.text + f) : f !== "" && i.push(zn(f)) : co(f) && co(_) ? i[E] = zn(_.text + f.text) : (Ct(t._isVList) && ie(f.tag) && Ue(f.key) && ie(n) && (f.key = "__vlist" + n + "_" + c + "__"), i.push(f)));
  return i;
}
function xv(t) {
  var n = t.$options.provide;
  n && (t._provided = typeof n == "function" ? n.call(t) : n);
}
function Gv(t) {
  var n = Pl(t.$options.inject, t);
  n && (sn(!1), Object.keys(n).forEach(function(i) {
    process.env.NODE_ENV !== "production" ? br(t, i, n[i], function() {
      Oe(
        'Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + i + '"',
        t
      );
    }) : br(t, i, n[i]);
  }), sn(!0));
}
function Pl(t, n) {
  if (t) {
    for (var i = /* @__PURE__ */ Object.create(null), c = _i ? Reflect.ownKeys(t) : Object.keys(t), f = 0; f < c.length; f++) {
      var E = c[f];
      if (E !== "__ob__") {
        for (var _ = t[E].from, I = n; I; ) {
          if (I._provided && jt(I._provided, _)) {
            i[E] = I._provided[_];
            break;
          }
          I = I.$parent;
        }
        if (!I)
          if ("default" in t[E]) {
            var O = t[E].default;
            i[E] = typeof O == "function" ? O.call(n) : O;
          } else process.env.NODE_ENV !== "production" && Oe('Injection "' + E + '" not found', n);
      }
    }
    return i;
  }
}
function Qa(t, n) {
  if (!t || !t.length)
    return {};
  for (var i = {}, c = 0, f = t.length; c < f; c++) {
    var E = t[c], _ = E.data;
    if (_ && _.attrs && _.attrs.slot && delete _.attrs.slot, (E.context === n || E.fnContext === n) && _ && _.slot != null) {
      var I = _.slot, O = i[I] || (i[I] = []);
      E.tag === "template" ? O.push.apply(O, E.children || []) : O.push(E);
    } else
      (i.default || (i.default = [])).push(E);
  }
  for (var N in i)
    i[N].every(jv) && delete i[N];
  return i;
}
function jv(t) {
  return t.isComment && !t.asyncFactory || t.text === " ";
}
function Eo(t) {
  return t.isComment && t.asyncFactory;
}
function Xo(t, n, i) {
  var c, f = Object.keys(n).length > 0, E = t ? !!t.$stable : !f, _ = t && t.$key;
  if (!t)
    c = {};
  else {
    if (t._normalized)
      return t._normalized;
    if (E && i && i !== gr && _ === i.$key && !f && !i.$hasNormal)
      return i;
    c = {};
    for (var I in t)
      t[I] && I[0] !== "$" && (c[I] = Bv(n, I, t[I]));
  }
  for (var O in n)
    O in c || (c[O] = Hv(n, O));
  return t && Object.isExtensible(t) && (t._normalized = c), Xn(c, "$stable", E), Xn(c, "$key", _), Xn(c, "$hasNormal", f), c;
}
function Bv(t, n, i) {
  var c = function() {
    var f = arguments.length ? i.apply(null, arguments) : i({});
    f = f && typeof f == "object" && !Array.isArray(f) ? [f] : Ya(f);
    var E = f && f[0];
    return f && (!E || f.length === 1 && E.isComment && !Eo(E)) ? void 0 : f;
  };
  return i.proxy && Object.defineProperty(t, n, {
    get: c,
    enumerable: !0,
    configurable: !0
  }), c;
}
function Hv(t, n) {
  return function() {
    return t[n];
  };
}
function Fv(t, n) {
  var i, c, f, E, _;
  if (Array.isArray(t) || typeof t == "string")
    for (i = new Array(t.length), c = 0, f = t.length; c < f; c++)
      i[c] = n(t[c], c);
  else if (typeof t == "number")
    for (i = new Array(t), c = 0; c < t; c++)
      i[c] = n(c + 1, c);
  else if (Wt(t))
    if (_i && t[Symbol.iterator]) {
      i = [];
      for (var I = t[Symbol.iterator](), O = I.next(); !O.done; )
        i.push(n(O.value, i.length)), O = I.next();
    } else
      for (E = Object.keys(t), i = new Array(E.length), c = 0, f = E.length; c < f; c++)
        _ = E[c], i[c] = n(t[_], _, c);
  return ie(i) || (i = []), i._isVList = !0, i;
}
function Wv(t, n, i, c) {
  var f = this.$scopedSlots[t], E;
  f ? (i = i || {}, c && (process.env.NODE_ENV !== "production" && !Wt(c) && Oe("slot v-bind without argument expects an Object", this), i = ft(ft({}, c), i)), E = f(i) || (typeof n == "function" ? n() : n)) : E = this.$slots[t] || (typeof n == "function" ? n() : n);
  var _ = i && i.slot;
  return _ ? this.$createElement("template", { slot: _ }, E) : E;
}
function Vv(t) {
  return qa(this.$options, "filters", t, !0) || gl;
}
function gu(t, n) {
  return Array.isArray(t) ? t.indexOf(n) === -1 : t !== n;
}
function Kv(t, n, i, c, f) {
  var E = ct.keyCodes[n] || i;
  return f && c && !ct.keyCodes[n] ? gu(f, c) : E ? gu(E, t) : c ? Mn(c) !== n : t === void 0;
}
function zv(t, n, i, c, f) {
  if (i)
    if (!Wt(i))
      process.env.NODE_ENV !== "production" && Oe(
        "v-bind without argument expects an Object or Array value",
        this
      );
    else {
      Array.isArray(i) && (i = vl(i));
      var E, _ = function(O) {
        if (O === "class" || O === "style" || hl(O))
          E = t;
        else {
          var N = t.attrs && t.attrs.type;
          E = c || ct.mustUseProp(n, N, O) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
        }
        var b = In(O), R = Mn(O);
        if (!(b in E) && !(R in E) && (E[O] = i[O], f)) {
          var A = t.on || (t.on = {});
          A["update:" + O] = function(S) {
            i[O] = S;
          };
        }
      };
      for (var I in i) _(I);
    }
  return t;
}
function $v(t, n) {
  var i = this._staticTrees || (this._staticTrees = []), c = i[t];
  return c && !n || (c = i[t] = this.$options.staticRenderFns[t].call(
    this._renderProxy,
    null,
    this
    // for render fns generated for functional component templates
  ), kl(c, "__static__" + t, !1)), c;
}
function qv(t, n, i) {
  return kl(t, "__once__" + n + (i ? "_" + i : ""), !0), t;
}
function kl(t, n, i) {
  if (Array.isArray(t))
    for (var c = 0; c < t.length; c++)
      t[c] && typeof t[c] != "string" && Eu(t[c], n + "_" + c, i);
  else
    Eu(t, n, i);
}
function Eu(t, n, i) {
  t.isStatic = !0, t.key = n, t.isOnce = i;
}
function Jv(t, n) {
  if (n)
    if (!Qt(n))
      process.env.NODE_ENV !== "production" && Oe(
        "v-on without argument expects an Object value",
        this
      );
    else {
      var i = t.on = t.on ? ft({}, t.on) : {};
      for (var c in n) {
        var f = i[c], E = n[c];
        i[c] = f ? [].concat(f, E) : E;
      }
    }
  return t;
}
function Dl(t, n, i, c) {
  n = n || { $stable: !i };
  for (var f = 0; f < t.length; f++) {
    var E = t[f];
    Array.isArray(E) ? Dl(E, n, i) : E && (E.proxy && (E.fn.proxy = !0), n[E.key] = E.fn);
  }
  return c && (n.$key = c), n;
}
function Xv(t, n) {
  for (var i = 0; i < n.length; i += 2) {
    var c = n[i];
    typeof c == "string" && c ? t[n[i]] = n[i + 1] : process.env.NODE_ENV !== "production" && c !== "" && c !== null && Oe(
      "Invalid value for dynamic directive argument (expected string or null): " + c,
      this
    );
  }
  return t;
}
function Yv(t, n) {
  return typeof t == "string" ? n + t : t;
}
function Ll(t) {
  t._o = qv, t._n = vo, t._s = qm, t._l = Fv, t._t = Wv, t._q = Sn, t._i = El, t._m = $v, t._f = Vv, t._k = Kv, t._b = zv, t._v = zn, t._e = _n, t._u = Dl, t._g = Jv, t._d = Xv, t._p = Yv;
}
function Za(t, n, i, c, f) {
  var E = this, _ = f.options, I;
  jt(c, "_uid") ? (I = Object.create(c), I._original = c) : (I = c, c = c._original);
  var O = Ct(_._compiled), N = !O;
  this.data = t, this.props = n, this.children = i, this.parent = c, this.listeners = t.on || gr, this.injections = Pl(_.inject, c), this.slots = function() {
    return E.$slots || Xo(
      t.scopedSlots,
      E.$slots = Qa(i, c)
    ), E.$slots;
  }, Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get: function() {
      return Xo(t.scopedSlots, this.slots());
    }
  }), O && (this.$options = _, this.$slots = this.slots(), this.$scopedSlots = Xo(t.scopedSlots, this.$slots)), _._scopeId ? this._c = function(b, R, A, S) {
    var C = li(I, b, R, A, S, N);
    return C && !Array.isArray(C) && (C.fnScopeId = _._scopeId, C.fnContext = c), C;
  } : this._c = function(b, R, A, S) {
    return li(I, b, R, A, S, N);
  };
}
Ll(Za.prototype);
function Qv(t, n, i, c, f) {
  var E = t.options, _ = {}, I = E.props;
  if (ie(I))
    for (var O in I)
      _[O] = Ja(O, I, n || gr);
  else
    ie(i.attrs) && _u(_, i.attrs), ie(i.props) && _u(_, i.props);
  var N = new Za(
    i,
    _,
    f,
    c,
    t
  ), b = E.render.call(null, N._c, N);
  if (b instanceof ir)
    return yu(b, i, N.parent, E, N);
  if (Array.isArray(b)) {
    for (var R = Ya(b) || [], A = new Array(R.length), S = 0; S < R.length; S++)
      A[S] = yu(R[S], i, N.parent, E, N);
    return A;
  }
}
function yu(t, n, i, c, f) {
  var E = ha(t);
  return E.fnContext = i, E.fnOptions = c, process.env.NODE_ENV !== "production" && ((E.devtoolsMeta = E.devtoolsMeta || {}).renderContext = f), n.slot && ((E.data || (E.data = {})).slot = n.slot), E;
}
function _u(t, n) {
  for (var i in n)
    t[In(i)] = n[i];
}
var es = {
  init: function(n, i) {
    if (n.componentInstance && !n.componentInstance._isDestroyed && n.data.keepAlive) {
      var c = n;
      es.prepatch(c, c);
    } else {
      var f = n.componentInstance = Zv(
        n,
        Tn
      );
      f.$mount(i ? n.elm : void 0, i);
    }
  },
  prepatch: function(n, i) {
    var c = i.componentOptions, f = i.componentInstance = n.componentInstance;
    Eg(
      f,
      c.propsData,
      // updated props
      c.listeners,
      // updated listeners
      i,
      // new parent vnode
      c.children
      // new children
    );
  },
  insert: function(n) {
    var i = n.context, c = n.componentInstance;
    c._isMounted || (c._isMounted = !0, Mr(c, "mounted")), n.data.keepAlive && (i._isMounted ? Og(c) : ts(
      c,
      !0
      /* direct */
    ));
  },
  destroy: function(n) {
    var i = n.componentInstance;
    i._isDestroyed || (n.data.keepAlive ? Wl(
      i,
      !0
      /* direct */
    ) : i.$destroy());
  }
}, Tu = Object.keys(es);
function Ou(t, n, i, c, f) {
  if (!Ue(t)) {
    var E = i.$options._base;
    if (Wt(t) && (t = E.extend(t)), typeof t != "function") {
      process.env.NODE_ENV !== "production" && Oe("Invalid Component definition: " + String(t), i);
      return;
    }
    var _;
    if (Ue(t.cid) && (_ = t, t = ug(_, E), t === void 0))
      return cg(
        _,
        n,
        i,
        c,
        f
      );
    n = n || {}, is(t), ie(n.model) && rg(t.options, n);
    var I = Dv(n, t, f);
    if (Ct(t.options.functional))
      return Qv(t, I, n, i, c);
    var O = n.on;
    if (n.on = n.nativeOn, Ct(t.options.abstract)) {
      var N = n.slot;
      n = {}, N && (n.slot = N);
    }
    eg(n);
    var b = t.options.name || f, R = new ir(
      "vue-component-" + t.cid + (b ? "-" + b : ""),
      n,
      void 0,
      void 0,
      void 0,
      i,
      { Ctor: t, propsData: I, listeners: O, tag: f, children: c },
      _
    );
    return R;
  }
}
function Zv(t, n) {
  var i = {
    _isComponent: !0,
    _parentVnode: t,
    parent: n
  }, c = t.data.inlineTemplate;
  return ie(c) && (i.render = c.render, i.staticRenderFns = c.staticRenderFns), new t.componentOptions.Ctor(i);
}
function eg(t) {
  for (var n = t.hook || (t.hook = {}), i = 0; i < Tu.length; i++) {
    var c = Tu[i], f = n[c], E = es[c];
    f !== E && !(f && f._merged) && (n[c] = f ? tg(E, f) : E);
  }
}
function tg(t, n) {
  var i = function(c, f) {
    t(c, f), n(c, f);
  };
  return i._merged = !0, i;
}
function rg(t, n) {
  var i = t.model && t.model.prop || "value", c = t.model && t.model.event || "input";
  (n.attrs || (n.attrs = {}))[i] = n.model.value;
  var f = n.on || (n.on = {}), E = f[c], _ = n.model.callback;
  ie(E) ? (Array.isArray(E) ? E.indexOf(_) === -1 : E !== _) && (f[c] = [_].concat(E)) : f[c] = _;
}
var ng = 1, xl = 2;
function li(t, n, i, c, f, E) {
  return (Array.isArray(i) || un(i)) && (f = c, c = i, i = void 0), Ct(E) && (f = xl), og(t, n, i, c, f);
}
function og(t, n, i, c, f) {
  if (ie(i) && ie(i.__ob__))
    return process.env.NODE_ENV !== "production" && Oe(
      "Avoid using observed data object as vnode data: " + JSON.stringify(i) + `
Always create fresh vnode data objects in each render!`,
      t
    ), _n();
  if (ie(i) && ie(i.is) && (n = i.is), !n)
    return _n();
  process.env.NODE_ENV !== "production" && ie(i) && ie(i.key) && !un(i.key) && Oe(
    "Avoid using non-primitive value as key, use string/number value instead.",
    t
  ), Array.isArray(c) && typeof c[0] == "function" && (i = i || {}, i.scopedSlots = { default: c[0] }, c.length = 0), f === xl ? c = Ya(c) : f === ng && (c = Lv(c));
  var E, _;
  if (typeof n == "string") {
    var I;
    _ = t.$vnode && t.$vnode.ns || ct.getTagNamespace(n), ct.isReservedTag(n) ? (process.env.NODE_ENV !== "production" && ie(i) && ie(i.nativeOn) && i.tag !== "component" && Oe(
      "The .native modifier for v-on is only valid on components but it was used on <" + n + ">.",
      t
    ), E = new ir(
      ct.parsePlatformTagName(n),
      i,
      c,
      void 0,
      void 0,
      t
    )) : (!i || !i.pre) && ie(I = qa(t.$options, "components", n)) ? E = Ou(I, i, t, c, n) : E = new ir(
      n,
      i,
      c,
      void 0,
      void 0,
      t
    );
  } else
    E = Ou(n, i, t, c);
  return Array.isArray(E) ? E : ie(E) ? (ie(_) && Gl(E, _), ie(i) && ig(i), E) : _n();
}
function Gl(t, n, i) {
  if (t.ns = n, t.tag === "foreignObject" && (n = void 0, i = !0), ie(t.children))
    for (var c = 0, f = t.children.length; c < f; c++) {
      var E = t.children[c];
      ie(E.tag) && (Ue(E.ns) || Ct(i) && E.tag !== "svg") && Gl(E, n, i);
    }
}
function ig(t) {
  Wt(t.style) && ci(t.style), Wt(t.class) && ci(t.class);
}
function ag(t) {
  t._vnode = null, t._staticTrees = null;
  var n = t.$options, i = t.$vnode = n._parentVnode, c = i && i.context;
  t.$slots = Qa(n._renderChildren, c), t.$scopedSlots = gr, t._c = function(E, _, I, O) {
    return li(t, E, _, I, O, !1);
  }, t.$createElement = function(E, _, I, O) {
    return li(t, E, _, I, O, !0);
  };
  var f = i && i.data;
  process.env.NODE_ENV !== "production" ? (br(t, "$attrs", f && f.attrs || gr, function() {
    !_o && Oe("$attrs is readonly.", t);
  }, !0), br(t, "$listeners", n._parentListeners || gr, function() {
    !_o && Oe("$listeners is readonly.", t);
  }, !0)) : (br(t, "$attrs", f && f.attrs || gr, null, !0), br(t, "$listeners", n._parentListeners || gr, null, !0));
}
var Oa = null;
function sg(t) {
  Ll(t.prototype), t.prototype.$nextTick = function(n) {
    return Xa(n, this);
  }, t.prototype._render = function() {
    var n = this, i = n.$options, c = i.render, f = i._parentVnode;
    f && (n.$scopedSlots = Xo(
      f.data.scopedSlots,
      n.$slots,
      n.$scopedSlots
    )), n.$vnode = f;
    var E;
    try {
      Oa = n, E = c.call(n._renderProxy, n.$createElement);
    } catch (_) {
      if (cn(_, n, "render"), process.env.NODE_ENV !== "production" && n.$options.renderError)
        try {
          E = n.$options.renderError.call(n._renderProxy, n.$createElement, _);
        } catch (I) {
          cn(I, n, "renderError"), E = n._vnode;
        }
      else
        E = n._vnode;
    } finally {
      Oa = null;
    }
    return Array.isArray(E) && E.length === 1 && (E = E[0]), E instanceof ir || (process.env.NODE_ENV !== "production" && Array.isArray(E) && Oe(
      "Multiple root nodes returned from render function. Render function should return a single root node.",
      n
    ), E = _n()), E.parent = f, E;
  };
}
function Zi(t, n) {
  return (t.__esModule || _i && t[Symbol.toStringTag] === "Module") && (t = t.default), Wt(t) ? n.extend(t) : t;
}
function cg(t, n, i, c, f) {
  var E = _n();
  return E.asyncFactory = t, E.asyncMeta = { data: n, context: i, children: c, tag: f }, E;
}
function ug(t, n) {
  if (Ct(t.error) && ie(t.errorComp))
    return t.errorComp;
  if (ie(t.resolved))
    return t.resolved;
  var i = Oa;
  if (i && ie(t.owners) && t.owners.indexOf(i) === -1 && t.owners.push(i), Ct(t.loading) && ie(t.loadingComp))
    return t.loadingComp;
  if (i && !ie(t.owners)) {
    var c = t.owners = [i], f = !0, E = null, _ = null;
    i.$on("hook:destroyed", function() {
      return qr(c, i);
    });
    var I = function(R) {
      for (var A = 0, S = c.length; A < S; A++)
        c[A].$forceUpdate();
      R && (c.length = 0, E !== null && (clearTimeout(E), E = null), _ !== null && (clearTimeout(_), _ = null));
    }, O = ni(function(R) {
      t.resolved = Zi(R, n), f ? c.length = 0 : I(!0);
    }), N = ni(function(R) {
      process.env.NODE_ENV !== "production" && Oe(
        "Failed to resolve async component: " + String(t) + (R ? `
Reason: ` + R : "")
      ), ie(t.errorComp) && (t.error = !0, I(!0));
    }), b = t(O, N);
    return Wt(b) && (pa(b) ? Ue(t.resolved) && b.then(O, N) : pa(b.component) && (b.component.then(O, N), ie(b.error) && (t.errorComp = Zi(b.error, n)), ie(b.loading) && (t.loadingComp = Zi(b.loading, n), b.delay === 0 ? t.loading = !0 : E = setTimeout(function() {
      E = null, Ue(t.resolved) && Ue(t.error) && (t.loading = !0, I(!1));
    }, b.delay || 200)), ie(b.timeout) && (_ = setTimeout(function() {
      _ = null, Ue(t.resolved) && N(
        process.env.NODE_ENV !== "production" ? "timeout (" + b.timeout + "ms)" : null
      );
    }, b.timeout)))), f = !1, t.loading ? t.loadingComp : t.resolved;
  }
}
function jl(t) {
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      if (ie(i) && (ie(i.componentOptions) || Eo(i)))
        return i;
    }
}
function lg(t) {
  t._events = /* @__PURE__ */ Object.create(null), t._hasHookEvent = !1;
  var n = t.$options._parentListeners;
  n && Bl(t, n);
}
var yo;
function pg(t, n) {
  yo.$on(t, n);
}
function dg(t, n) {
  yo.$off(t, n);
}
function fg(t, n) {
  var i = yo;
  return function c() {
    var f = n.apply(null, arguments);
    f !== null && i.$off(t, c);
  };
}
function Bl(t, n, i) {
  yo = t, wl(n, i || {}, pg, dg, fg, t), yo = void 0;
}
function hg(t) {
  var n = /^hook:/;
  t.prototype.$on = function(i, c) {
    var f = this;
    if (Array.isArray(i))
      for (var E = 0, _ = i.length; E < _; E++)
        f.$on(i[E], c);
    else
      (f._events[i] || (f._events[i] = [])).push(c), n.test(i) && (f._hasHookEvent = !0);
    return f;
  }, t.prototype.$once = function(i, c) {
    var f = this;
    function E() {
      f.$off(i, E), c.apply(f, arguments);
    }
    return E.fn = c, f.$on(i, E), f;
  }, t.prototype.$off = function(i, c) {
    var f = this;
    if (!arguments.length)
      return f._events = /* @__PURE__ */ Object.create(null), f;
    if (Array.isArray(i)) {
      for (var E = 0, _ = i.length; E < _; E++)
        f.$off(i[E], c);
      return f;
    }
    var I = f._events[i];
    if (!I)
      return f;
    if (!c)
      return f._events[i] = null, f;
    for (var O, N = I.length; N--; )
      if (O = I[N], O === c || O.fn === c) {
        I.splice(N, 1);
        break;
      }
    return f;
  }, t.prototype.$emit = function(i) {
    var c = this;
    if (process.env.NODE_ENV !== "production") {
      var f = i.toLowerCase();
      f !== i && c._events[f] && Wa(
        'Event "' + f + '" is emitted in component ' + vn(c) + ' but the handler is registered for "' + i + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + Mn(i) + '" instead of "' + i + '".'
      );
    }
    var E = c._events[i];
    if (E) {
      E = E.length > 1 ? da(E) : E;
      for (var _ = da(arguments, 1), I = 'event handler for "' + i + '"', O = 0, N = E.length; O < N; O++)
        Qn(E[O], c, _, c, I);
    }
    return c;
  };
}
var Tn = null, _o = !1;
function Hl(t) {
  var n = Tn;
  return Tn = t, function() {
    Tn = n;
  };
}
function mg(t) {
  var n = t.$options, i = n.parent;
  if (i && !n.abstract) {
    for (; i.$options.abstract && i.$parent; )
      i = i.$parent;
    i.$children.push(t);
  }
  t.$parent = i, t.$root = i ? i.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
}
function vg(t) {
  t.prototype._update = function(n, i) {
    var c = this, f = c.$el, E = c._vnode, _ = Hl(c);
    c._vnode = n, E ? c.$el = c.__patch__(E, n) : c.$el = c.__patch__(
      c.$el,
      n,
      i,
      !1
      /* removeOnly */
    ), _(), f && (f.__vue__ = null), c.$el && (c.$el.__vue__ = c), c.$vnode && c.$parent && c.$vnode === c.$parent._vnode && (c.$parent.$el = c.$el);
  }, t.prototype.$forceUpdate = function() {
    var n = this;
    n._watcher && n._watcher.update();
  }, t.prototype.$destroy = function() {
    var n = this;
    if (!n._isBeingDestroyed) {
      Mr(n, "beforeDestroy"), n._isBeingDestroyed = !0;
      var i = n.$parent;
      i && !i._isBeingDestroyed && !n.$options.abstract && qr(i.$children, n), n._watcher && n._watcher.teardown();
      for (var c = n._watchers.length; c--; )
        n._watchers[c].teardown();
      n._data.__ob__ && n._data.__ob__.vmCount--, n._isDestroyed = !0, n.__patch__(n._vnode, null), Mr(n, "destroyed"), n.$off(), n.$el && (n.$el.__vue__ = null), n.$vnode && (n.$vnode.parent = null);
    }
  };
}
function gg(t, n, i) {
  t.$el = n, t.$options.render || (t.$options.render = _n, process.env.NODE_ENV !== "production" && (t.$options.template && t.$options.template.charAt(0) !== "#" || t.$options.el || n ? Oe(
    "You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",
    t
  ) : Oe(
    "Failed to mount component: template or render function not defined.",
    t
  ))), Mr(t, "beforeMount");
  var c;
  return process.env.NODE_ENV !== "production" && ct.performance && Gr ? c = function() {
    var f = t._name, E = t._uid, _ = "vue-perf-start:" + E, I = "vue-perf-end:" + E;
    Gr(_);
    var O = t._render();
    Gr(I), ui("vue " + f + " render", _, I), Gr(_), t._update(O, i), Gr(I), ui("vue " + f + " patch", _, I);
  } : c = function() {
    t._update(t._render(), i);
  }, new Ur(
    t,
    c,
    Gt,
    {
      before: function() {
        t._isMounted && !t._isDestroyed && Mr(t, "beforeUpdate");
      }
    },
    !0
    /* isRenderWatcher */
  ), i = !1, t.$vnode == null && (t._isMounted = !0, Mr(t, "mounted")), t;
}
function Eg(t, n, i, c, f) {
  process.env.NODE_ENV !== "production" && (_o = !0);
  var E = c.data.scopedSlots, _ = t.$scopedSlots, I = !!(E && !E.$stable || _ !== gr && !_.$stable || E && t.$scopedSlots.$key !== E.$key || !E && t.$scopedSlots.$key), O = !!(f || // has new static slots
  t.$options._renderChildren || // has old static slots
  I);
  if (t.$options._parentVnode = c, t.$vnode = c, t._vnode && (t._vnode.parent = c), t.$options._renderChildren = f, t.$attrs = c.data.attrs || gr, t.$listeners = i || gr, n && t.$options.props) {
    sn(!1);
    for (var N = t._props, b = t.$options._propKeys || [], R = 0; R < b.length; R++) {
      var A = b[R], S = t.$options.props;
      N[A] = Ja(A, S, n, t);
    }
    sn(!0), t.$options.propsData = n;
  }
  i = i || gr;
  var C = t.$options._parentListeners;
  t.$options._parentListeners = i, Bl(t, i, C), O && (t.$slots = Qa(f, c.context), t.$forceUpdate()), process.env.NODE_ENV !== "production" && (_o = !1);
}
function Fl(t) {
  for (; t && (t = t.$parent); )
    if (t._inactive)
      return !0;
  return !1;
}
function ts(t, n) {
  if (n) {
    if (t._directInactive = !1, Fl(t))
      return;
  } else if (t._directInactive)
    return;
  if (t._inactive || t._inactive === null) {
    t._inactive = !1;
    for (var i = 0; i < t.$children.length; i++)
      ts(t.$children[i]);
    Mr(t, "activated");
  }
}
function Wl(t, n) {
  if (!(n && (t._directInactive = !0, Fl(t))) && !t._inactive) {
    t._inactive = !0;
    for (var i = 0; i < t.$children.length; i++)
      Wl(t.$children[i]);
    Mr(t, "deactivated");
  }
}
function Mr(t, n) {
  So();
  var i = t.$options[n], c = n + " hook";
  if (i)
    for (var f = 0, E = i.length; f < E; f++)
      Qn(i[f], t, null, t, c);
  t._hasHookEvent && t.$emit("hook:" + n), Co();
}
var yg = 100, zr = [], rs = [], To = {}, Yo = {}, Ra = !1, ns = !1, $n = 0;
function _g() {
  $n = zr.length = rs.length = 0, To = {}, process.env.NODE_ENV !== "production" && (Yo = {}), Ra = ns = !1;
}
var Vl = 0, Ia = Date.now;
if (ar && !to) {
  var ea = window.performance;
  ea && typeof ea.now == "function" && Ia() > document.createEvent("Event").timeStamp && (Ia = function() {
    return ea.now();
  });
}
function Ru() {
  Vl = Ia(), ns = !0;
  var t, n;
  for (zr.sort(function(f, E) {
    return f.id - E.id;
  }), $n = 0; $n < zr.length; $n++)
    if (t = zr[$n], t.before && t.before(), n = t.id, To[n] = null, t.run(), process.env.NODE_ENV !== "production" && To[n] != null && (Yo[n] = (Yo[n] || 0) + 1, Yo[n] > yg)) {
      Oe(
        "You may have an infinite update loop " + (t.user ? 'in watcher with expression "' + t.expression + '"' : "in a component render function."),
        t.vm
      );
      break;
    }
  var i = rs.slice(), c = zr.slice();
  _g(), Rg(i), Tg(c), oi && ct.devtools && oi.emit("flush");
}
function Tg(t) {
  for (var n = t.length; n--; ) {
    var i = t[n], c = i.vm;
    c._watcher === i && c._isMounted && !c._isDestroyed && Mr(c, "updated");
  }
}
function Og(t) {
  t._inactive = !1, rs.push(t);
}
function Rg(t) {
  for (var n = 0; n < t.length; n++)
    t[n]._inactive = !0, ts(
      t[n],
      !0
      /* true */
    );
}
function Ig(t) {
  var n = t.id;
  if (To[n] == null) {
    if (To[n] = !0, !ns)
      zr.push(t);
    else {
      for (var i = zr.length - 1; i > $n && zr[i].id > t.id; )
        i--;
      zr.splice(i + 1, 0, t);
    }
    if (!Ra) {
      if (Ra = !0, process.env.NODE_ENV !== "production" && !ct.async) {
        Ru();
        return;
      }
      Xa(Ru);
    }
  }
}
var Sg = 0, Ur = function(n, i, c, f, E) {
  this.vm = n, E && (n._watcher = this), n._watchers.push(this), f ? (this.deep = !!f.deep, this.user = !!f.user, this.lazy = !!f.lazy, this.sync = !!f.sync, this.before = f.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = c, this.id = ++Sg, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new go(), this.newDepIds = new go(), this.expression = process.env.NODE_ENV !== "production" ? i.toString() : "", typeof i == "function" ? this.getter = i : (this.getter = nv(i), this.getter || (this.getter = Gt, process.env.NODE_ENV !== "production" && Oe(
    'Failed watching path: "' + i + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',
    n
  ))), this.value = this.lazy ? void 0 : this.get();
};
Ur.prototype.get = function() {
  So(this);
  var n, i = this.vm;
  try {
    n = this.getter.call(i, i);
  } catch (c) {
    if (this.user)
      cn(c, i, 'getter for watcher "' + this.expression + '"');
    else
      throw c;
  } finally {
    this.deep && ci(n), Co(), this.cleanupDeps();
  }
  return n;
};
Ur.prototype.addDep = function(n) {
  var i = n.id;
  this.newDepIds.has(i) || (this.newDepIds.add(i), this.newDeps.push(n), this.depIds.has(i) || n.addSub(this));
};
Ur.prototype.cleanupDeps = function() {
  for (var n = this.deps.length; n--; ) {
    var i = this.deps[n];
    this.newDepIds.has(i.id) || i.removeSub(this);
  }
  var c = this.depIds;
  this.depIds = this.newDepIds, this.newDepIds = c, this.newDepIds.clear(), c = this.deps, this.deps = this.newDeps, this.newDeps = c, this.newDeps.length = 0;
};
Ur.prototype.update = function() {
  this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ig(this);
};
Ur.prototype.run = function() {
  if (this.active) {
    var n = this.get();
    if (n !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    Wt(n) || this.deep) {
      var i = this.value;
      if (this.value = n, this.user) {
        var c = 'callback for watcher "' + this.expression + '"';
        Qn(this.cb, this.vm, [n, i], this.vm, c);
      } else
        this.cb.call(this.vm, n, i);
    }
  }
};
Ur.prototype.evaluate = function() {
  this.value = this.get(), this.dirty = !1;
};
Ur.prototype.depend = function() {
  for (var n = this.deps.length; n--; )
    this.deps[n].depend();
};
Ur.prototype.teardown = function() {
  if (this.active) {
    this.vm._isBeingDestroyed || qr(this.vm._watchers, this);
    for (var n = this.deps.length; n--; )
      this.deps[n].removeSub(this);
    this.active = !1;
  }
};
var xr = {
  enumerable: !0,
  configurable: !0,
  get: Gt,
  set: Gt
};
function os(t, n, i) {
  xr.get = function() {
    return this[n][i];
  }, xr.set = function(f) {
    this[n][i] = f;
  }, Object.defineProperty(t, i, xr);
}
function Cg(t) {
  t._watchers = [];
  var n = t.$options;
  n.props && Ng(t, n.props), n.methods && Ug(t, n.methods), n.data ? Ag(t) : Cn(
    t._data = {},
    !0
    /* asRootData */
  ), n.computed && wg(t, n.computed), n.watch && n.watch !== fa && Pg(t, n.watch);
}
function Ng(t, n) {
  var i = t.$options.propsData || {}, c = t._props = {}, f = t.$options._propKeys = [], E = !t.$parent;
  E || sn(!1);
  var _ = function(O) {
    f.push(O);
    var N = Ja(O, n, i, t);
    if (process.env.NODE_ENV !== "production") {
      var b = Mn(O);
      (hl(b) || ct.isReservedAttr(b)) && Oe(
        '"' + b + '" is a reserved attribute and cannot be used as component prop.',
        t
      ), br(c, O, N, function() {
        !E && !_o && Oe(
          `Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "` + O + '"',
          t
        );
      });
    } else
      br(c, O, N);
    O in t || os(t, "_props", O);
  };
  for (var I in n) _(I);
  sn(!0);
}
function Ag(t) {
  var n = t.$options.data;
  n = t._data = typeof n == "function" ? bg(n, t) : n || {}, Qt(n) || (n = {}, process.env.NODE_ENV !== "production" && Oe(
    `data functions should return an object:
https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function`,
    t
  ));
  for (var i = Object.keys(n), c = t.$options.props, f = t.$options.methods, E = i.length; E--; ) {
    var _ = i[E];
    process.env.NODE_ENV !== "production" && f && jt(f, _) && Oe(
      'Method "' + _ + '" has already been defined as a data property.',
      t
    ), c && jt(c, _) ? process.env.NODE_ENV !== "production" && Oe(
      'The data property "' + _ + '" is already declared as a prop. Use prop default value instead.',
      t
    ) : Tl(_) || os(t, "_data", _);
  }
  Cn(
    n,
    !0
    /* asRootData */
  );
}
function bg(t, n) {
  So();
  try {
    return t.call(n, n);
  } catch (i) {
    return cn(i, n, "data()"), {};
  } finally {
    Co();
  }
}
var Mg = { lazy: !0 };
function wg(t, n) {
  var i = t._computedWatchers = /* @__PURE__ */ Object.create(null), c = yi();
  for (var f in n) {
    var E = n[f], _ = typeof E == "function" ? E : E.get;
    process.env.NODE_ENV !== "production" && _ == null && Oe(
      'Getter is missing for computed property "' + f + '".',
      t
    ), c || (i[f] = new Ur(
      t,
      _ || Gt,
      Gt,
      Mg
    )), f in t ? process.env.NODE_ENV !== "production" && (f in t.$data ? Oe('The computed property "' + f + '" is already defined in data.', t) : t.$options.props && f in t.$options.props ? Oe('The computed property "' + f + '" is already defined as a prop.', t) : t.$options.methods && f in t.$options.methods && Oe('The computed property "' + f + '" is already defined as a method.', t)) : Kl(t, f, E);
  }
}
function Kl(t, n, i) {
  var c = !yi();
  typeof i == "function" ? (xr.get = c ? Iu(n) : Su(i), xr.set = Gt) : (xr.get = i.get ? c && i.cache !== !1 ? Iu(n) : Su(i.get) : Gt, xr.set = i.set || Gt), process.env.NODE_ENV !== "production" && xr.set === Gt && (xr.set = function() {
    Oe(
      'Computed property "' + n + '" was assigned to but it has no setter.',
      this
    );
  }), Object.defineProperty(t, n, xr);
}
function Iu(t) {
  return function() {
    var i = this._computedWatchers && this._computedWatchers[t];
    if (i)
      return i.dirty && i.evaluate(), ur.target && i.depend(), i.value;
  };
}
function Su(t) {
  return function() {
    return t.call(this, this);
  };
}
function Ug(t, n) {
  var i = t.$options.props;
  for (var c in n)
    process.env.NODE_ENV !== "production" && (typeof n[c] != "function" && Oe(
      'Method "' + c + '" has type "' + typeof n[c] + '" in the component definition. Did you reference the function correctly?',
      t
    ), i && jt(i, c) && Oe(
      'Method "' + c + '" has already been defined as a prop.',
      t
    ), c in t && Tl(c) && Oe(
      'Method "' + c + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'
    )), t[c] = typeof n[c] != "function" ? Gt : tv(n[c], t);
}
function Pg(t, n) {
  for (var i in n) {
    var c = n[i];
    if (Array.isArray(c))
      for (var f = 0; f < c.length; f++)
        Sa(t, i, c[f]);
    else
      Sa(t, i, c);
  }
}
function Sa(t, n, i, c) {
  return Qt(i) && (c = i, i = i.handler), typeof i == "string" && (i = t[i]), t.$watch(n, i, c);
}
function kg(t) {
  var n = {};
  n.get = function() {
    return this._data;
  };
  var i = {};
  i.get = function() {
    return this._props;
  }, process.env.NODE_ENV !== "production" && (n.set = function() {
    Oe(
      "Avoid replacing instance root $data. Use nested data properties instead.",
      this
    );
  }, i.set = function() {
    Oe("$props is readonly.", this);
  }), Object.defineProperty(t.prototype, "$data", n), Object.defineProperty(t.prototype, "$props", i), t.prototype.$set = Ka, t.prototype.$delete = Nl, t.prototype.$watch = function(c, f, E) {
    var _ = this;
    if (Qt(f))
      return Sa(_, c, f, E);
    E = E || {}, E.user = !0;
    var I = new Ur(_, c, f, E);
    if (E.immediate) {
      var O = 'callback for immediate watcher "' + I.expression + '"';
      So(), Qn(f, _, [I.value], _, O), Co();
    }
    return function() {
      I.teardown();
    };
  };
}
var Dg = 0;
function Lg(t) {
  t.prototype._init = function(n) {
    var i = this;
    i._uid = Dg++;
    var c, f;
    process.env.NODE_ENV !== "production" && ct.performance && Gr && (c = "vue-perf-start:" + i._uid, f = "vue-perf-end:" + i._uid, Gr(c)), i._isVue = !0, n && n._isComponent ? xg(i, n) : i.$options = Nn(
      is(i.constructor),
      n || {},
      i
    ), process.env.NODE_ENV !== "production" ? Ml(i) : i._renderProxy = i, i._self = i, mg(i), lg(i), ag(i), Mr(i, "beforeCreate"), Gv(i), Cg(i), xv(i), Mr(i, "created"), process.env.NODE_ENV !== "production" && ct.performance && Gr && (i._name = vn(i, !1), Gr(f), ui("vue " + i._name + " init", c, f)), i.$options.el && i.$mount(i.$options.el);
  };
}
function xg(t, n) {
  var i = t.$options = Object.create(t.constructor.options), c = n._parentVnode;
  i.parent = n.parent, i._parentVnode = c;
  var f = c.componentOptions;
  i.propsData = f.propsData, i._parentListeners = f.listeners, i._renderChildren = f.children, i._componentTag = f.tag, n.render && (i.render = n.render, i.staticRenderFns = n.staticRenderFns);
}
function is(t) {
  var n = t.options;
  if (t.super) {
    var i = is(t.super), c = t.superOptions;
    if (i !== c) {
      t.superOptions = i;
      var f = Gg(t);
      f && ft(t.extendOptions, f), n = t.options = Nn(i, t.extendOptions), n.name && (n.components[n.name] = t);
    }
  }
  return n;
}
function Gg(t) {
  var n, i = t.options, c = t.sealedOptions;
  for (var f in i)
    i[f] !== c[f] && (n || (n = {}), n[f] = i[f]);
  return n;
}
function yt(t) {
  process.env.NODE_ENV !== "production" && !(this instanceof yt) && Oe("Vue is a constructor and should be called with the `new` keyword"), this._init(t);
}
Lg(yt);
kg(yt);
hg(yt);
vg(yt);
sg(yt);
function jg(t) {
  t.use = function(n) {
    var i = this._installedPlugins || (this._installedPlugins = []);
    if (i.indexOf(n) > -1)
      return this;
    var c = da(arguments, 1);
    return c.unshift(this), typeof n.install == "function" ? n.install.apply(n, c) : typeof n == "function" && n.apply(null, c), i.push(n), this;
  };
}
function Bg(t) {
  t.mixin = function(n) {
    return this.options = Nn(this.options, n), this;
  };
}
function Hg(t) {
  t.cid = 0;
  var n = 1;
  t.extend = function(i) {
    i = i || {};
    var c = this, f = c.cid, E = i._Ctor || (i._Ctor = {});
    if (E[f])
      return E[f];
    var _ = i.name || c.options.name;
    process.env.NODE_ENV !== "production" && _ && za(_);
    var I = function(N) {
      this._init(N);
    };
    return I.prototype = Object.create(c.prototype), I.prototype.constructor = I, I.cid = n++, I.options = Nn(
      c.options,
      i
    ), I.super = c, I.options.props && Fg(I), I.options.computed && Wg(I), I.extend = c.extend, I.mixin = c.mixin, I.use = c.use, Ei.forEach(function(O) {
      I[O] = c[O];
    }), _ && (I.options.components[_] = I), I.superOptions = c.options, I.extendOptions = i, I.sealedOptions = ft({}, I.options), E[f] = I, I;
  };
}
function Fg(t) {
  var n = t.options.props;
  for (var i in n)
    os(t.prototype, "_props", i);
}
function Wg(t) {
  var n = t.options.computed;
  for (var i in n)
    Kl(t.prototype, i, n[i]);
}
function Vg(t) {
  Ei.forEach(function(n) {
    t[n] = function(i, c) {
      return c ? (process.env.NODE_ENV !== "production" && n === "component" && za(i), n === "component" && Qt(c) && (c.name = c.name || i, c = this.options._base.extend(c)), n === "directive" && typeof c == "function" && (c = { bind: c, update: c }), this.options[n + "s"][i] = c, c) : this.options[n + "s"][i];
    };
  });
}
function Cu(t) {
  return t && (t.Ctor.options.name || t.tag);
}
function Vo(t, n) {
  return Array.isArray(t) ? t.indexOf(n) > -1 : typeof t == "string" ? t.split(",").indexOf(n) > -1 : dl(t) ? t.test(n) : !1;
}
function Nu(t, n) {
  var i = t.cache, c = t.keys, f = t._vnode;
  for (var E in i) {
    var _ = i[E];
    if (_) {
      var I = _.name;
      I && !n(I) && Ca(i, E, c, f);
    }
  }
}
function Ca(t, n, i, c) {
  var f = t[n];
  f && (!c || f.tag !== c.tag) && f.componentInstance.$destroy(), t[n] = null, qr(i, n);
}
var Au = [String, RegExp, Array], Kg = {
  name: "keep-alive",
  abstract: !0,
  props: {
    include: Au,
    exclude: Au,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function() {
      var n = this, i = n.cache, c = n.keys, f = n.vnodeToCache, E = n.keyToCache;
      if (f) {
        var _ = f.tag, I = f.componentInstance, O = f.componentOptions;
        i[E] = {
          name: Cu(O),
          tag: _,
          componentInstance: I
        }, c.push(E), this.max && c.length > parseInt(this.max) && Ca(i, c[0], c, this._vnode), this.vnodeToCache = null;
      }
    }
  },
  created: function() {
    this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
  },
  destroyed: function() {
    for (var n in this.cache)
      Ca(this.cache, n, this.keys);
  },
  mounted: function() {
    var n = this;
    this.cacheVNode(), this.$watch("include", function(i) {
      Nu(n, function(c) {
        return Vo(i, c);
      });
    }), this.$watch("exclude", function(i) {
      Nu(n, function(c) {
        return !Vo(i, c);
      });
    });
  },
  updated: function() {
    this.cacheVNode();
  },
  render: function() {
    var n = this.$slots.default, i = jl(n), c = i && i.componentOptions;
    if (c) {
      var f = Cu(c), E = this, _ = E.include, I = E.exclude;
      if (
        // not included
        _ && (!f || !Vo(_, f)) || // excluded
        I && f && Vo(I, f)
      )
        return i;
      var O = this, N = O.cache, b = O.keys, R = i.key == null ? c.Ctor.cid + (c.tag ? "::" + c.tag : "") : i.key;
      N[R] ? (i.componentInstance = N[R].componentInstance, qr(b, R), b.push(R)) : (this.vnodeToCache = i, this.keyToCache = R), i.data.keepAlive = !0;
    }
    return i || n && n[0];
  }
}, zg = {
  KeepAlive: Kg
};
function $g(t) {
  var n = {};
  n.get = function() {
    return ct;
  }, process.env.NODE_ENV !== "production" && (n.set = function() {
    Oe(
      "Do not replace the Vue.config object, set individual fields instead."
    );
  }), Object.defineProperty(t, "config", n), t.util = {
    warn: Oe,
    extend: ft,
    mergeOptions: Nn,
    defineReactive: br
  }, t.set = Ka, t.delete = Nl, t.nextTick = Xa, t.observable = function(i) {
    return Cn(i), i;
  }, t.options = /* @__PURE__ */ Object.create(null), Ei.forEach(function(i) {
    t.options[i + "s"] = /* @__PURE__ */ Object.create(null);
  }), t.options._base = t, ft(t.options.components, zg), jg(t), Bg(t), Hg(t), Vg(t);
}
$g(yt);
Object.defineProperty(yt.prototype, "$isServer", {
  get: yi
});
Object.defineProperty(yt.prototype, "$ssrContext", {
  get: function() {
    return this.$vnode && this.$vnode.ssrContext;
  }
});
Object.defineProperty(yt, "FunctionalRenderContext", {
  value: Za
});
yt.version = "2.6.14";
var qg = lr("style,class"), Jg = lr("input,textarea,option,select,progress"), Xg = function(t, n, i) {
  return i === "value" && Jg(t) && n !== "button" || i === "selected" && t === "option" || i === "checked" && t === "input" || i === "muted" && t === "video";
}, zl = lr("contenteditable,draggable,spellcheck"), Yg = lr("events,caret,typing,plaintext-only"), Qg = function(t, n) {
  return pi(n) || n === "false" ? "false" : t === "contenteditable" && Yg(n) ? n : "true";
}, Zg = lr(
  "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"
), Na = "http://www.w3.org/1999/xlink", as = function(t) {
  return t.charAt(5) === ":" && t.slice(0, 5) === "xlink";
}, $l = function(t) {
  return as(t) ? t.slice(6, t.length) : "";
}, pi = function(t) {
  return t == null || t === !1;
};
function eE(t) {
  for (var n = t.data, i = t, c = t; ie(c.componentInstance); )
    c = c.componentInstance._vnode, c && c.data && (n = bu(c.data, n));
  for (; ie(i = i.parent); )
    i && i.data && (n = bu(n, i.data));
  return tE(n.staticClass, n.class);
}
function bu(t, n) {
  return {
    staticClass: ss(t.staticClass, n.staticClass),
    class: ie(t.class) ? [t.class, n.class] : n.class
  };
}
function tE(t, n) {
  return ie(t) || ie(n) ? ss(t, cs(n)) : "";
}
function ss(t, n) {
  return t ? n ? t + " " + n : t : n || "";
}
function cs(t) {
  return Array.isArray(t) ? rE(t) : Wt(t) ? nE(t) : typeof t == "string" ? t : "";
}
function rE(t) {
  for (var n = "", i, c = 0, f = t.length; c < f; c++)
    ie(i = cs(t[c])) && i !== "" && (n && (n += " "), n += i);
  return n;
}
function nE(t) {
  var n = "";
  for (var i in t)
    t[i] && (n && (n += " "), n += i);
  return n;
}
var oE = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
}, iE = lr(
  "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
), us = lr(
  "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
  !0
), ql = function(t) {
  return iE(t) || us(t);
};
function aE(t) {
  if (us(t))
    return "svg";
  if (t === "math")
    return "math";
}
var Ko = /* @__PURE__ */ Object.create(null);
function sE(t) {
  if (!ar)
    return !0;
  if (ql(t))
    return !1;
  if (t = t.toLowerCase(), Ko[t] != null)
    return Ko[t];
  var n = document.createElement(t);
  return t.indexOf("-") > -1 ? Ko[t] = n.constructor === window.HTMLUnknownElement || n.constructor === window.HTMLElement : Ko[t] = /HTMLUnknownElement/.test(n.toString());
}
var Aa = lr("text,number,password,search,email,tel,url");
function cE(t) {
  if (typeof t == "string") {
    var n = document.querySelector(t);
    return n || (process.env.NODE_ENV !== "production" && Oe(
      "Cannot find element: " + t
    ), document.createElement("div"));
  } else
    return t;
}
function uE(t, n) {
  var i = document.createElement(t);
  return t !== "select" || n.data && n.data.attrs && n.data.attrs.multiple !== void 0 && i.setAttribute("multiple", "multiple"), i;
}
function lE(t, n) {
  return document.createElementNS(oE[t], n);
}
function pE(t) {
  return document.createTextNode(t);
}
function dE(t) {
  return document.createComment(t);
}
function fE(t, n, i) {
  t.insertBefore(n, i);
}
function hE(t, n) {
  t.removeChild(n);
}
function mE(t, n) {
  t.appendChild(n);
}
function vE(t) {
  return t.parentNode;
}
function gE(t) {
  return t.nextSibling;
}
function EE(t) {
  return t.tagName;
}
function yE(t, n) {
  t.textContent = n;
}
function _E(t, n) {
  t.setAttribute(n, "");
}
var TE = /* @__PURE__ */ Object.freeze({
  createElement: uE,
  createElementNS: lE,
  createTextNode: pE,
  createComment: dE,
  insertBefore: fE,
  removeChild: hE,
  appendChild: mE,
  parentNode: vE,
  nextSibling: gE,
  tagName: EE,
  setTextContent: yE,
  setStyleScope: _E
}), OE = {
  create: function(n, i) {
    qn(i);
  },
  update: function(n, i) {
    n.data.ref !== i.data.ref && (qn(n, !0), qn(i));
  },
  destroy: function(n) {
    qn(n, !0);
  }
};
function qn(t, n) {
  var i = t.data.ref;
  if (ie(i)) {
    var c = t.context, f = t.componentInstance || t.elm, E = c.$refs;
    n ? Array.isArray(E[i]) ? qr(E[i], f) : E[i] === f && (E[i] = void 0) : t.data.refInFor ? Array.isArray(E[i]) ? E[i].indexOf(f) < 0 && E[i].push(f) : E[i] = [f] : E[i] = f;
  }
}
var gn = new ir("", {}, []), uo = ["create", "activate", "update", "remove", "destroy"];
function hn(t, n) {
  return t.key === n.key && t.asyncFactory === n.asyncFactory && (t.tag === n.tag && t.isComment === n.isComment && ie(t.data) === ie(n.data) && RE(t, n) || Ct(t.isAsyncPlaceholder) && Ue(n.asyncFactory.error));
}
function RE(t, n) {
  if (t.tag !== "input")
    return !0;
  var i, c = ie(i = t.data) && ie(i = i.attrs) && i.type, f = ie(i = n.data) && ie(i = i.attrs) && i.type;
  return c === f || Aa(c) && Aa(f);
}
function IE(t, n, i) {
  var c, f, E = {};
  for (c = n; c <= i; ++c)
    f = t[c].key, ie(f) && (E[f] = c);
  return E;
}
function SE(t) {
  var n, i, c = {}, f = t.modules, E = t.nodeOps;
  for (n = 0; n < uo.length; ++n)
    for (c[uo[n]] = [], i = 0; i < f.length; ++i)
      ie(f[i][uo[n]]) && c[uo[n]].push(f[i][uo[n]]);
  function _(j) {
    return new ir(E.tagName(j).toLowerCase(), {}, [], void 0, j);
  }
  function I(j, K) {
    function Q() {
      --Q.listeners === 0 && O(j);
    }
    return Q.listeners = K, Q;
  }
  function O(j) {
    var K = E.parentNode(j);
    ie(K) && E.removeChild(K, j);
  }
  function N(j, K) {
    return !K && !j.ns && !(ct.ignoredElements.length && ct.ignoredElements.some(function(Q) {
      return dl(Q) ? Q.test(j.tag) : Q === j.tag;
    })) && ct.isUnknownElement(j.tag);
  }
  var b = 0;
  function R(j, K, Q, se, ce, fe, me) {
    if (ie(j.elm) && ie(fe) && (j = fe[me] = ha(j)), j.isRootInsert = !ce, !A(j, K, Q, se)) {
      var de = j.data, Ee = j.children, Re = j.tag;
      ie(Re) ? (process.env.NODE_ENV !== "production" && (de && de.pre && b++, N(j, b) && Oe(
        "Unknown custom element: <" + Re + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',
        j.context
      )), j.elm = j.ns ? E.createElementNS(j.ns, Re) : E.createElement(Re, j), g(j), P(j, Ee, K), ie(de) && M(j, K), l(Q, j.elm, se), process.env.NODE_ENV !== "production" && de && de.pre && b--) : Ct(j.isComment) ? (j.elm = E.createComment(j.text), l(Q, j.elm, se)) : (j.elm = E.createTextNode(j.text), l(Q, j.elm, se));
    }
  }
  function A(j, K, Q, se) {
    var ce = j.data;
    if (ie(ce)) {
      var fe = ie(j.componentInstance) && ce.keepAlive;
      if (ie(ce = ce.hook) && ie(ce = ce.init) && ce(
        j,
        !1
        /* hydrating */
      ), ie(j.componentInstance))
        return S(j, K), l(Q, j.elm, se), Ct(fe) && C(j, K, Q, se), !0;
    }
  }
  function S(j, K) {
    ie(j.data.pendingInsert) && (K.push.apply(K, j.data.pendingInsert), j.data.pendingInsert = null), j.elm = j.componentInstance.$el, B(j) ? (M(j, K), g(j)) : (qn(j), K.push(j));
  }
  function C(j, K, Q, se) {
    for (var ce, fe = j; fe.componentInstance; )
      if (fe = fe.componentInstance._vnode, ie(ce = fe.data) && ie(ce = ce.transition)) {
        for (ce = 0; ce < c.activate.length; ++ce)
          c.activate[ce](gn, fe);
        K.push(fe);
        break;
      }
    l(Q, j.elm, se);
  }
  function l(j, K, Q) {
    ie(j) && (ie(Q) ? E.parentNode(Q) === j && E.insertBefore(j, K, Q) : E.appendChild(j, K));
  }
  function P(j, K, Q) {
    if (Array.isArray(K)) {
      process.env.NODE_ENV !== "production" && te(K);
      for (var se = 0; se < K.length; ++se)
        R(K[se], Q, j.elm, null, !0, K, se);
    } else un(j.text) && E.appendChild(j.elm, E.createTextNode(String(j.text)));
  }
  function B(j) {
    for (; j.componentInstance; )
      j = j.componentInstance._vnode;
    return ie(j.tag);
  }
  function M(j, K) {
    for (var Q = 0; Q < c.create.length; ++Q)
      c.create[Q](gn, j);
    n = j.data.hook, ie(n) && (ie(n.create) && n.create(gn, j), ie(n.insert) && K.push(j));
  }
  function g(j) {
    var K;
    if (ie(K = j.fnScopeId))
      E.setStyleScope(j.elm, K);
    else
      for (var Q = j; Q; )
        ie(K = Q.context) && ie(K = K.$options._scopeId) && E.setStyleScope(j.elm, K), Q = Q.parent;
    ie(K = Tn) && K !== j.context && K !== j.fnContext && ie(K = K.$options._scopeId) && E.setStyleScope(j.elm, K);
  }
  function x(j, K, Q, se, ce, fe) {
    for (; se <= ce; ++se)
      R(Q[se], fe, j, K, !1, Q, se);
  }
  function h(j) {
    var K, Q, se = j.data;
    if (ie(se))
      for (ie(K = se.hook) && ie(K = K.destroy) && K(j), K = 0; K < c.destroy.length; ++K)
        c.destroy[K](j);
    if (ie(K = j.children))
      for (Q = 0; Q < j.children.length; ++Q)
        h(j.children[Q]);
  }
  function U(j, K, Q) {
    for (; K <= Q; ++K) {
      var se = j[K];
      ie(se) && (ie(se.tag) ? (W(se), h(se)) : O(se.elm));
    }
  }
  function W(j, K) {
    if (ie(K) || ie(j.data)) {
      var Q, se = c.remove.length + 1;
      for (ie(K) ? K.listeners += se : K = I(j.elm, se), ie(Q = j.componentInstance) && ie(Q = Q._vnode) && ie(Q.data) && W(Q, K), Q = 0; Q < c.remove.length; ++Q)
        c.remove[Q](j, K);
      ie(Q = j.data.hook) && ie(Q = Q.remove) ? Q(j, K) : K();
    } else
      O(j.elm);
  }
  function Z(j, K, Q, se, ce) {
    var fe = 0, me = 0, de = K.length - 1, Ee = K[0], Re = K[de], L = Q.length - 1, it = Q[0], _t = Q[L], qt, Pt, Zt, xe, Pr = !ce;
    for (process.env.NODE_ENV !== "production" && te(Q); fe <= de && me <= L; )
      Ue(Ee) ? Ee = K[++fe] : Ue(Re) ? Re = K[--de] : hn(Ee, it) ? (q(Ee, it, se, Q, me), Ee = K[++fe], it = Q[++me]) : hn(Re, _t) ? (q(Re, _t, se, Q, L), Re = K[--de], _t = Q[--L]) : hn(Ee, _t) ? (q(Ee, _t, se, Q, L), Pr && E.insertBefore(j, Ee.elm, E.nextSibling(Re.elm)), Ee = K[++fe], _t = Q[--L]) : hn(Re, it) ? (q(Re, it, se, Q, me), Pr && E.insertBefore(j, Re.elm, Ee.elm), Re = K[--de], it = Q[++me]) : (Ue(qt) && (qt = IE(K, fe, de)), Pt = ie(it.key) ? qt[it.key] : G(it, K, fe, de), Ue(Pt) ? R(it, se, j, Ee.elm, !1, Q, me) : (Zt = K[Pt], hn(Zt, it) ? (q(Zt, it, se, Q, me), K[Pt] = void 0, Pr && E.insertBefore(j, Zt.elm, Ee.elm)) : R(it, se, j, Ee.elm, !1, Q, me)), it = Q[++me]);
    fe > de ? (xe = Ue(Q[L + 1]) ? null : Q[L + 1].elm, x(j, xe, Q, me, L, se)) : me > L && U(K, fe, de);
  }
  function te(j) {
    for (var K = {}, Q = 0; Q < j.length; Q++) {
      var se = j[Q], ce = se.key;
      ie(ce) && (K[ce] ? Oe(
        "Duplicate keys detected: '" + ce + "'. This may cause an update error.",
        se.context
      ) : K[ce] = !0);
    }
  }
  function G(j, K, Q, se) {
    for (var ce = Q; ce < se; ce++) {
      var fe = K[ce];
      if (ie(fe) && hn(j, fe))
        return ce;
    }
  }
  function q(j, K, Q, se, ce, fe) {
    if (j !== K) {
      ie(K.elm) && ie(se) && (K = se[ce] = ha(K));
      var me = K.elm = j.elm;
      if (Ct(j.isAsyncPlaceholder)) {
        ie(K.asyncFactory.resolved) ? y(j.elm, K, Q) : K.isAsyncPlaceholder = !0;
        return;
      }
      if (Ct(K.isStatic) && Ct(j.isStatic) && K.key === j.key && (Ct(K.isCloned) || Ct(K.isOnce))) {
        K.componentInstance = j.componentInstance;
        return;
      }
      var de, Ee = K.data;
      ie(Ee) && ie(de = Ee.hook) && ie(de = de.prepatch) && de(j, K);
      var Re = j.children, L = K.children;
      if (ie(Ee) && B(K)) {
        for (de = 0; de < c.update.length; ++de)
          c.update[de](j, K);
        ie(de = Ee.hook) && ie(de = de.update) && de(j, K);
      }
      Ue(K.text) ? ie(Re) && ie(L) ? Re !== L && Z(me, Re, L, Q, fe) : ie(L) ? (process.env.NODE_ENV !== "production" && te(L), ie(j.text) && E.setTextContent(me, ""), x(me, null, L, 0, L.length - 1, Q)) : ie(Re) ? U(Re, 0, Re.length - 1) : ie(j.text) && E.setTextContent(me, "") : j.text !== K.text && E.setTextContent(me, K.text), ie(Ee) && ie(de = Ee.hook) && ie(de = de.postpatch) && de(j, K);
    }
  }
  function ee(j, K, Q) {
    if (Ct(Q) && ie(j.parent))
      j.parent.data.pendingInsert = K;
    else
      for (var se = 0; se < K.length; ++se)
        K[se].data.hook.insert(K[se]);
  }
  var ne = !1, z = lr("attrs,class,staticClass,staticStyle,key");
  function y(j, K, Q, se) {
    var ce, fe = K.tag, me = K.data, de = K.children;
    if (se = se || me && me.pre, K.elm = j, Ct(K.isComment) && ie(K.asyncFactory))
      return K.isAsyncPlaceholder = !0, !0;
    if (process.env.NODE_ENV !== "production" && !J(j, K, se))
      return !1;
    if (ie(me) && (ie(ce = me.hook) && ie(ce = ce.init) && ce(
      K,
      !0
      /* hydrating */
    ), ie(ce = K.componentInstance)))
      return S(K, Q), !0;
    if (ie(fe)) {
      if (ie(de))
        if (!j.hasChildNodes())
          P(K, de, Q);
        else if (ie(ce = me) && ie(ce = ce.domProps) && ie(ce = ce.innerHTML)) {
          if (ce !== j.innerHTML)
            return process.env.NODE_ENV !== "production" && typeof console < "u" && !ne && (ne = !0, console.warn("Parent: ", j), console.warn("server innerHTML: ", ce), console.warn("client innerHTML: ", j.innerHTML)), !1;
        } else {
          for (var Ee = !0, Re = j.firstChild, L = 0; L < de.length; L++) {
            if (!Re || !y(Re, de[L], Q, se)) {
              Ee = !1;
              break;
            }
            Re = Re.nextSibling;
          }
          if (!Ee || Re)
            return process.env.NODE_ENV !== "production" && typeof console < "u" && !ne && (ne = !0, console.warn("Parent: ", j), console.warn("Mismatching childNodes vs. VNodes: ", j.childNodes, de)), !1;
        }
      if (ie(me)) {
        var it = !1;
        for (var _t in me)
          if (!z(_t)) {
            it = !0, M(K, Q);
            break;
          }
        !it && me.class && ci(me.class);
      }
    } else j.data !== K.text && (j.data = K.text);
    return !0;
  }
  function J(j, K, Q) {
    return ie(K.tag) ? K.tag.indexOf("vue-component") === 0 || !N(K, Q) && K.tag.toLowerCase() === (j.tagName && j.tagName.toLowerCase()) : j.nodeType === (K.isComment ? 8 : 3);
  }
  return function(K, Q, se, ce) {
    if (Ue(Q)) {
      ie(K) && h(K);
      return;
    }
    var fe = !1, me = [];
    if (Ue(K))
      fe = !0, R(Q, me);
    else {
      var de = ie(K.nodeType);
      if (!de && hn(K, Q))
        q(K, Q, me, null, null, ce);
      else {
        if (de) {
          if (K.nodeType === 1 && K.hasAttribute(tu) && (K.removeAttribute(tu), se = !0), Ct(se)) {
            if (y(K, Q, me))
              return ee(Q, me, !0), K;
            process.env.NODE_ENV !== "production" && Oe(
              "The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render."
            );
          }
          K = _(K);
        }
        var Ee = K.elm, Re = E.parentNode(Ee);
        if (R(
          Q,
          me,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          Ee._leaveCb ? null : Re,
          E.nextSibling(Ee)
        ), ie(Q.parent))
          for (var L = Q.parent, it = B(Q); L; ) {
            for (var _t = 0; _t < c.destroy.length; ++_t)
              c.destroy[_t](L);
            if (L.elm = Q.elm, it) {
              for (var qt = 0; qt < c.create.length; ++qt)
                c.create[qt](gn, L);
              var Pt = L.data.hook.insert;
              if (Pt.merged)
                for (var Zt = 1; Zt < Pt.fns.length; Zt++)
                  Pt.fns[Zt]();
            } else
              qn(L);
            L = L.parent;
          }
        ie(Re) ? U([K], 0, 0) : ie(K.tag) && h(K);
      }
    }
    return ee(Q, me, fe), Q.elm;
  };
}
var CE = {
  create: ta,
  update: ta,
  destroy: function(n) {
    ta(n, gn);
  }
};
function ta(t, n) {
  (t.data.directives || n.data.directives) && NE(t, n);
}
function NE(t, n) {
  var i = t === gn, c = n === gn, f = Mu(t.data.directives, t.context), E = Mu(n.data.directives, n.context), _ = [], I = [], O, N, b;
  for (O in E)
    N = f[O], b = E[O], N ? (b.oldValue = N.value, b.oldArg = N.arg, lo(b, "update", n, t), b.def && b.def.componentUpdated && I.push(b)) : (lo(b, "bind", n, t), b.def && b.def.inserted && _.push(b));
  if (_.length) {
    var R = function() {
      for (var A = 0; A < _.length; A++)
        lo(_[A], "inserted", n, t);
    };
    i ? nn(n, "insert", R) : R();
  }
  if (I.length && nn(n, "postpatch", function() {
    for (var A = 0; A < I.length; A++)
      lo(I[A], "componentUpdated", n, t);
  }), !i)
    for (O in f)
      E[O] || lo(f[O], "unbind", t, t, c);
}
var AE = /* @__PURE__ */ Object.create(null);
function Mu(t, n) {
  var i = /* @__PURE__ */ Object.create(null);
  if (!t)
    return i;
  var c, f;
  for (c = 0; c < t.length; c++)
    f = t[c], f.modifiers || (f.modifiers = AE), i[bE(f)] = f, f.def = qa(n.$options, "directives", f.name, !0);
  return i;
}
function bE(t) {
  return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
}
function lo(t, n, i, c, f) {
  var E = t.def && t.def[n];
  if (E)
    try {
      E(i.elm, t, i, c, f);
    } catch (_) {
      cn(_, i.context, "directive " + t.name + " " + n + " hook");
    }
}
var ME = [
  OE,
  CE
];
function wu(t, n) {
  var i = n.componentOptions;
  if (!(ie(i) && i.Ctor.options.inheritAttrs === !1) && !(Ue(t.data.attrs) && Ue(n.data.attrs))) {
    var c, f, E, _ = n.elm, I = t.data.attrs || {}, O = n.data.attrs || {};
    ie(O.__ob__) && (O = n.data.attrs = ft({}, O));
    for (c in O)
      f = O[c], E = I[c], E !== f && Uu(_, c, f, n.data.pre);
    (to || Rl) && O.value !== I.value && Uu(_, "value", O.value);
    for (c in I)
      Ue(O[c]) && (as(c) ? _.removeAttributeNS(Na, $l(c)) : zl(c) || _.removeAttribute(c));
  }
}
function Uu(t, n, i, c) {
  c || t.tagName.indexOf("-") > -1 ? Pu(t, n, i) : Zg(n) ? pi(i) ? t.removeAttribute(n) : (i = n === "allowfullscreen" && t.tagName === "EMBED" ? "true" : n, t.setAttribute(n, i)) : zl(n) ? t.setAttribute(n, Qg(n, i)) : as(n) ? pi(i) ? t.removeAttributeNS(Na, $l(n)) : t.setAttributeNS(Na, n, i) : Pu(t, n, i);
}
function Pu(t, n, i) {
  if (pi(i))
    t.removeAttribute(n);
  else {
    if (to && !ro && t.tagName === "TEXTAREA" && n === "placeholder" && i !== "" && !t.__ieph) {
      var c = function(f) {
        f.stopImmediatePropagation(), t.removeEventListener("input", c);
      };
      t.addEventListener("input", c), t.__ieph = !0;
    }
    t.setAttribute(n, i);
  }
}
var wE = {
  create: wu,
  update: wu
};
function ku(t, n) {
  var i = n.elm, c = n.data, f = t.data;
  if (!(Ue(c.staticClass) && Ue(c.class) && (Ue(f) || Ue(f.staticClass) && Ue(f.class)))) {
    var E = eE(n), _ = i._transitionClasses;
    ie(_) && (E = ss(E, cs(_))), E !== i._prevClass && (i.setAttribute("class", E), i._prevClass = E);
  }
}
var UE = {
  create: ku,
  update: ku
}, ra = "__r", na = "__c";
function PE(t) {
  if (ie(t[ra])) {
    var n = to ? "change" : "input";
    t[n] = [].concat(t[ra], t[n] || []), delete t[ra];
  }
  ie(t[na]) && (t.change = [].concat(t[na], t.change || []), delete t[na]);
}
var Oo;
function kE(t, n, i) {
  var c = Oo;
  return function f() {
    var E = n.apply(null, arguments);
    E !== null && Jl(t, f, i, c);
  };
}
var DE = ga && !(ru && Number(ru[1]) <= 53);
function LE(t, n, i, c) {
  if (DE) {
    var f = Vl, E = n;
    n = E._wrapper = function(_) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        _.target === _.currentTarget || // event is fired after handler attachment
        _.timeStamp >= f || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        _.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        _.target.ownerDocument !== document
      )
        return E.apply(this, arguments);
    };
  }
  Oo.addEventListener(
    t,
    n,
    Il ? { capture: i, passive: c } : i
  );
}
function Jl(t, n, i, c) {
  (c || Oo).removeEventListener(
    t,
    n._wrapper || n,
    i
  );
}
function Du(t, n) {
  if (!(Ue(t.data.on) && Ue(n.data.on))) {
    var i = n.data.on || {}, c = t.data.on || {};
    Oo = n.elm, PE(i), wl(i, c, LE, Jl, kE, n.context), Oo = void 0;
  }
}
var xE = {
  create: Du,
  update: Du
}, zo;
function Lu(t, n) {
  if (!(Ue(t.data.domProps) && Ue(n.data.domProps))) {
    var i, c, f = n.elm, E = t.data.domProps || {}, _ = n.data.domProps || {};
    ie(_.__ob__) && (_ = n.data.domProps = ft({}, _));
    for (i in E)
      i in _ || (f[i] = "");
    for (i in _) {
      if (c = _[i], i === "textContent" || i === "innerHTML") {
        if (n.children && (n.children.length = 0), c === E[i])
          continue;
        f.childNodes.length === 1 && f.removeChild(f.childNodes[0]);
      }
      if (i === "value" && f.tagName !== "PROGRESS") {
        f._value = c;
        var I = Ue(c) ? "" : String(c);
        GE(f, I) && (f.value = I);
      } else if (i === "innerHTML" && us(f.tagName) && Ue(f.innerHTML)) {
        zo = zo || document.createElement("div"), zo.innerHTML = "<svg>" + c + "</svg>";
        for (var O = zo.firstChild; f.firstChild; )
          f.removeChild(f.firstChild);
        for (; O.firstChild; )
          f.appendChild(O.firstChild);
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        c !== E[i]
      )
        try {
          f[i] = c;
        } catch {
        }
    }
  }
}
function GE(t, n) {
  return !t.composing && (t.tagName === "OPTION" || jE(t, n) || BE(t, n));
}
function jE(t, n) {
  var i = !0;
  try {
    i = document.activeElement !== t;
  } catch {
  }
  return i && t.value !== n;
}
function BE(t, n) {
  var i = t.value, c = t._vModifiers;
  if (ie(c)) {
    if (c.number)
      return vo(i) !== vo(n);
    if (c.trim)
      return i.trim() !== n.trim();
  }
  return i !== n;
}
var HE = {
  create: Lu,
  update: Lu
}, FE = bn(function(t) {
  var n = {}, i = /;(?![^(]*\))/g, c = /:(.+)/;
  return t.split(i).forEach(function(f) {
    if (f) {
      var E = f.split(c);
      E.length > 1 && (n[E[0].trim()] = E[1].trim());
    }
  }), n;
});
function oa(t) {
  var n = Xl(t.style);
  return t.staticStyle ? ft(t.staticStyle, n) : n;
}
function Xl(t) {
  return Array.isArray(t) ? vl(t) : typeof t == "string" ? FE(t) : t;
}
function WE(t, n) {
  for (var i = {}, c, f = t; f.componentInstance; )
    f = f.componentInstance._vnode, f && f.data && (c = oa(f.data)) && ft(i, c);
  (c = oa(t.data)) && ft(i, c);
  for (var E = t; E = E.parent; )
    E.data && (c = oa(E.data)) && ft(i, c);
  return i;
}
var VE = /^--/, xu = /\s*!important$/, Gu = function(t, n, i) {
  if (VE.test(n))
    t.style.setProperty(n, i);
  else if (xu.test(i))
    t.style.setProperty(Mn(n), i.replace(xu, ""), "important");
  else {
    var c = KE(n);
    if (Array.isArray(i))
      for (var f = 0, E = i.length; f < E; f++)
        t.style[c] = i[f];
    else
      t.style[c] = i;
  }
}, ju = ["Webkit", "Moz", "ms"], $o, KE = bn(function(t) {
  if ($o = $o || document.createElement("div").style, t = In(t), t !== "filter" && t in $o)
    return t;
  for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < ju.length; i++) {
    var c = ju[i] + n;
    if (c in $o)
      return c;
  }
});
function Bu(t, n) {
  var i = n.data, c = t.data;
  if (!(Ue(i.staticStyle) && Ue(i.style) && Ue(c.staticStyle) && Ue(c.style))) {
    var f, E, _ = n.elm, I = c.staticStyle, O = c.normalizedStyle || c.style || {}, N = I || O, b = Xl(n.data.style) || {};
    n.data.normalizedStyle = ie(b.__ob__) ? ft({}, b) : b;
    var R = WE(n);
    for (E in N)
      Ue(R[E]) && Gu(_, E, "");
    for (E in R)
      f = R[E], f !== N[E] && Gu(_, E, f ?? "");
  }
}
var zE = {
  create: Bu,
  update: Bu
}, Yl = /\s+/;
function Ql(t, n) {
  if (!(!n || !(n = n.trim())))
    if (t.classList)
      n.indexOf(" ") > -1 ? n.split(Yl).forEach(function(c) {
        return t.classList.add(c);
      }) : t.classList.add(n);
    else {
      var i = " " + (t.getAttribute("class") || "") + " ";
      i.indexOf(" " + n + " ") < 0 && t.setAttribute("class", (i + n).trim());
    }
}
function Zl(t, n) {
  if (!(!n || !(n = n.trim())))
    if (t.classList)
      n.indexOf(" ") > -1 ? n.split(Yl).forEach(function(f) {
        return t.classList.remove(f);
      }) : t.classList.remove(n), t.classList.length || t.removeAttribute("class");
    else {
      for (var i = " " + (t.getAttribute("class") || "") + " ", c = " " + n + " "; i.indexOf(c) >= 0; )
        i = i.replace(c, " ");
      i = i.trim(), i ? t.setAttribute("class", i) : t.removeAttribute("class");
    }
}
function ep(t) {
  if (t) {
    if (typeof t == "object") {
      var n = {};
      return t.css !== !1 && ft(n, Hu(t.name || "v")), ft(n, t), n;
    } else if (typeof t == "string")
      return Hu(t);
  }
}
var Hu = bn(function(t) {
  return {
    enterClass: t + "-enter",
    enterToClass: t + "-enter-to",
    enterActiveClass: t + "-enter-active",
    leaveClass: t + "-leave",
    leaveToClass: t + "-leave-to",
    leaveActiveClass: t + "-leave-active"
  };
}), tp = ar && !ro, Vn = "transition", ia = "animation", Qo = "transition", di = "transitionend", ba = "animation", rp = "animationend";
tp && (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && (Qo = "WebkitTransition", di = "webkitTransitionEnd"), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && (ba = "WebkitAnimation", rp = "webkitAnimationEnd"));
var Fu = ar ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
  /* istanbul ignore next */
  function(t) {
    return t();
  }
);
function np(t) {
  Fu(function() {
    Fu(t);
  });
}
function On(t, n) {
  var i = t._transitionClasses || (t._transitionClasses = []);
  i.indexOf(n) < 0 && (i.push(n), Ql(t, n));
}
function $r(t, n) {
  t._transitionClasses && qr(t._transitionClasses, n), Zl(t, n);
}
function op(t, n, i) {
  var c = ip(t, n), f = c.type, E = c.timeout, _ = c.propCount;
  if (!f)
    return i();
  var I = f === Vn ? di : rp, O = 0, N = function() {
    t.removeEventListener(I, b), i();
  }, b = function(R) {
    R.target === t && ++O >= _ && N();
  };
  setTimeout(function() {
    O < _ && N();
  }, E + 1), t.addEventListener(I, b);
}
var $E = /\b(transform|all)(,|$)/;
function ip(t, n) {
  var i = window.getComputedStyle(t), c = (i[Qo + "Delay"] || "").split(", "), f = (i[Qo + "Duration"] || "").split(", "), E = Wu(c, f), _ = (i[ba + "Delay"] || "").split(", "), I = (i[ba + "Duration"] || "").split(", "), O = Wu(_, I), N, b = 0, R = 0;
  n === Vn ? E > 0 && (N = Vn, b = E, R = f.length) : n === ia ? O > 0 && (N = ia, b = O, R = I.length) : (b = Math.max(E, O), N = b > 0 ? E > O ? Vn : ia : null, R = N ? N === Vn ? f.length : I.length : 0);
  var A = N === Vn && $E.test(i[Qo + "Property"]);
  return {
    type: N,
    timeout: b,
    propCount: R,
    hasTransform: A
  };
}
function Wu(t, n) {
  for (; t.length < n.length; )
    t = t.concat(t);
  return Math.max.apply(null, n.map(function(i, c) {
    return Vu(i) + Vu(t[c]);
  }));
}
function Vu(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ma(t, n) {
  var i = t.elm;
  ie(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
  var c = ep(t.data.transition);
  if (!Ue(c) && !(ie(i._enterCb) || i.nodeType !== 1)) {
    for (var f = c.css, E = c.type, _ = c.enterClass, I = c.enterToClass, O = c.enterActiveClass, N = c.appearClass, b = c.appearToClass, R = c.appearActiveClass, A = c.beforeEnter, S = c.enter, C = c.afterEnter, l = c.enterCancelled, P = c.beforeAppear, B = c.appear, M = c.afterAppear, g = c.appearCancelled, x = c.duration, h = Tn, U = Tn.$vnode; U && U.parent; )
      h = U.context, U = U.parent;
    var W = !h._isMounted || !t.isRootInsert;
    if (!(W && !B && B !== "")) {
      var Z = W && N ? N : _, te = W && R ? R : O, G = W && b ? b : I, q = W && P || A, ee = W && typeof B == "function" ? B : S, ne = W && M || C, z = W && g || l, y = vo(
        Wt(x) ? x.enter : x
      );
      process.env.NODE_ENV !== "production" && y != null && sp(y, "enter", t);
      var J = f !== !1 && !ro, j = ls(ee), K = i._enterCb = ni(function() {
        J && ($r(i, G), $r(i, te)), K.cancelled ? (J && $r(i, Z), z && z(i)) : ne && ne(i), i._enterCb = null;
      });
      t.data.show || nn(t, "insert", function() {
        var Q = i.parentNode, se = Q && Q._pending && Q._pending[t.key];
        se && se.tag === t.tag && se.elm._leaveCb && se.elm._leaveCb(), ee && ee(i, K);
      }), q && q(i), J && (On(i, Z), On(i, te), np(function() {
        $r(i, Z), K.cancelled || (On(i, G), j || (cp(y) ? setTimeout(K, y) : op(i, E, K)));
      })), t.data.show && (n && n(), ee && ee(i, K)), !J && !j && K();
    }
  }
}
function ap(t, n) {
  var i = t.elm;
  ie(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
  var c = ep(t.data.transition);
  if (Ue(c) || i.nodeType !== 1)
    return n();
  if (ie(i._leaveCb))
    return;
  var f = c.css, E = c.type, _ = c.leaveClass, I = c.leaveToClass, O = c.leaveActiveClass, N = c.beforeLeave, b = c.leave, R = c.afterLeave, A = c.leaveCancelled, S = c.delayLeave, C = c.duration, l = f !== !1 && !ro, P = ls(b), B = vo(
    Wt(C) ? C.leave : C
  );
  process.env.NODE_ENV !== "production" && ie(B) && sp(B, "leave", t);
  var M = i._leaveCb = ni(function() {
    i.parentNode && i.parentNode._pending && (i.parentNode._pending[t.key] = null), l && ($r(i, I), $r(i, O)), M.cancelled ? (l && $r(i, _), A && A(i)) : (n(), R && R(i)), i._leaveCb = null;
  });
  S ? S(g) : g();
  function g() {
    M.cancelled || (!t.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[t.key] = t), N && N(i), l && (On(i, _), On(i, O), np(function() {
      $r(i, _), M.cancelled || (On(i, I), P || (cp(B) ? setTimeout(M, B) : op(i, E, M)));
    })), b && b(i, M), !l && !P && M());
  }
}
function sp(t, n, i) {
  typeof t != "number" ? Oe(
    "<transition> explicit " + n + " duration is not a valid number - got " + JSON.stringify(t) + ".",
    i.context
  ) : isNaN(t) && Oe(
    "<transition> explicit " + n + " duration is NaN - the duration expression might be incorrect.",
    i.context
  );
}
function cp(t) {
  return typeof t == "number" && !isNaN(t);
}
function ls(t) {
  if (Ue(t))
    return !1;
  var n = t.fns;
  return ie(n) ? ls(
    Array.isArray(n) ? n[0] : n
  ) : (t._length || t.length) > 1;
}
function Ku(t, n) {
  n.data.show !== !0 && Ma(n);
}
var qE = ar ? {
  create: Ku,
  activate: Ku,
  remove: function(n, i) {
    n.data.show !== !0 ? ap(n, i) : i();
  }
} : {}, JE = [
  wE,
  UE,
  xE,
  HE,
  zE,
  qE
], XE = JE.concat(ME), YE = SE({ nodeOps: TE, modules: XE });
ro && document.addEventListener("selectionchange", function() {
  var t = document.activeElement;
  t && t.vmodel && ps(t, "input");
});
var up = {
  inserted: function(n, i, c, f) {
    c.tag === "select" ? (f.elm && !f.elm._vOptions ? nn(c, "postpatch", function() {
      up.componentUpdated(n, i, c);
    }) : zu(n, i, c.context), n._vOptions = [].map.call(n.options, fi)) : (c.tag === "textarea" || Aa(n.type)) && (n._vModifiers = i.modifiers, i.modifiers.lazy || (n.addEventListener("compositionstart", QE), n.addEventListener("compositionend", Ju), n.addEventListener("change", Ju), ro && (n.vmodel = !0)));
  },
  componentUpdated: function(n, i, c) {
    if (c.tag === "select") {
      zu(n, i, c.context);
      var f = n._vOptions, E = n._vOptions = [].map.call(n.options, fi);
      if (E.some(function(I, O) {
        return !Sn(I, f[O]);
      })) {
        var _ = n.multiple ? i.value.some(function(I) {
          return qu(I, E);
        }) : i.value !== i.oldValue && qu(i.value, E);
        _ && ps(n, "change");
      }
    }
  }
};
function zu(t, n, i) {
  $u(t, n, i), (to || Rl) && setTimeout(function() {
    $u(t, n, i);
  }, 0);
}
function $u(t, n, i) {
  var c = n.value, f = t.multiple;
  if (f && !Array.isArray(c)) {
    process.env.NODE_ENV !== "production" && Oe(
      '<select multiple v-model="' + n.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(c).slice(8, -1),
      i
    );
    return;
  }
  for (var E, _, I = 0, O = t.options.length; I < O; I++)
    if (_ = t.options[I], f)
      E = El(c, fi(_)) > -1, _.selected !== E && (_.selected = E);
    else if (Sn(fi(_), c)) {
      t.selectedIndex !== I && (t.selectedIndex = I);
      return;
    }
  f || (t.selectedIndex = -1);
}
function qu(t, n) {
  return n.every(function(i) {
    return !Sn(i, t);
  });
}
function fi(t) {
  return "_value" in t ? t._value : t.value;
}
function QE(t) {
  t.target.composing = !0;
}
function Ju(t) {
  t.target.composing && (t.target.composing = !1, ps(t.target, "input"));
}
function ps(t, n) {
  var i = document.createEvent("HTMLEvents");
  i.initEvent(n, !0, !0), t.dispatchEvent(i);
}
function wa(t) {
  return t.componentInstance && (!t.data || !t.data.transition) ? wa(t.componentInstance._vnode) : t;
}
var ZE = {
  bind: function(n, i, c) {
    var f = i.value;
    c = wa(c);
    var E = c.data && c.data.transition, _ = n.__vOriginalDisplay = n.style.display === "none" ? "" : n.style.display;
    f && E ? (c.data.show = !0, Ma(c, function() {
      n.style.display = _;
    })) : n.style.display = f ? _ : "none";
  },
  update: function(n, i, c) {
    var f = i.value, E = i.oldValue;
    if (!f != !E) {
      c = wa(c);
      var _ = c.data && c.data.transition;
      _ ? (c.data.show = !0, f ? Ma(c, function() {
        n.style.display = n.__vOriginalDisplay;
      }) : ap(c, function() {
        n.style.display = "none";
      })) : n.style.display = f ? n.__vOriginalDisplay : "none";
    }
  },
  unbind: function(n, i, c, f, E) {
    E || (n.style.display = n.__vOriginalDisplay);
  }
}, ey = {
  model: up,
  show: ZE
}, lp = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function Ua(t) {
  var n = t && t.componentOptions;
  return n && n.Ctor.options.abstract ? Ua(jl(n.children)) : t;
}
function pp(t) {
  var n = {}, i = t.$options;
  for (var c in i.propsData)
    n[c] = t[c];
  var f = i._parentListeners;
  for (var E in f)
    n[In(E)] = f[E];
  return n;
}
function Xu(t, n) {
  if (/\d-keep-alive$/.test(n.tag))
    return t("keep-alive", {
      props: n.componentOptions.propsData
    });
}
function ty(t) {
  for (; t = t.parent; )
    if (t.data.transition)
      return !0;
}
function ry(t, n) {
  return n.key === t.key && n.tag === t.tag;
}
var ny = function(t) {
  return t.tag || Eo(t);
}, oy = function(t) {
  return t.name === "show";
}, iy = {
  name: "transition",
  props: lp,
  abstract: !0,
  render: function(n) {
    var i = this, c = this.$slots.default;
    if (c && (c = c.filter(ny), !!c.length)) {
      process.env.NODE_ENV !== "production" && c.length > 1 && Oe(
        "<transition> can only be used on a single element. Use <transition-group> for lists.",
        this.$parent
      );
      var f = this.mode;
      process.env.NODE_ENV !== "production" && f && f !== "in-out" && f !== "out-in" && Oe(
        "invalid <transition> mode: " + f,
        this.$parent
      );
      var E = c[0];
      if (ty(this.$vnode))
        return E;
      var _ = Ua(E);
      if (!_)
        return E;
      if (this._leaving)
        return Xu(n, E);
      var I = "__transition-" + this._uid + "-";
      _.key = _.key == null ? _.isComment ? I + "comment" : I + _.tag : un(_.key) ? String(_.key).indexOf(I) === 0 ? _.key : I + _.key : _.key;
      var O = (_.data || (_.data = {})).transition = pp(this), N = this._vnode, b = Ua(N);
      if (_.data.directives && _.data.directives.some(oy) && (_.data.show = !0), b && b.data && !ry(_, b) && !Eo(b) && // #6687 component root is a comment node
      !(b.componentInstance && b.componentInstance._vnode.isComment)) {
        var R = b.data.transition = ft({}, O);
        if (f === "out-in")
          return this._leaving = !0, nn(R, "afterLeave", function() {
            i._leaving = !1, i.$forceUpdate();
          }), Xu(n, E);
        if (f === "in-out") {
          if (Eo(_))
            return N;
          var A, S = function() {
            A();
          };
          nn(O, "afterEnter", S), nn(O, "enterCancelled", S), nn(R, "delayLeave", function(C) {
            A = C;
          });
        }
      }
      return E;
    }
  }
}, dp = ft({
  tag: String,
  moveClass: String
}, lp);
delete dp.mode;
var ay = {
  props: dp,
  beforeMount: function() {
    var n = this, i = this._update;
    this._update = function(c, f) {
      var E = Hl(n);
      n.__patch__(
        n._vnode,
        n.kept,
        !1,
        // hydrating
        !0
        // removeOnly (!important, avoids unnecessary moves)
      ), n._vnode = n.kept, E(), i.call(n, c, f);
    };
  },
  render: function(n) {
    for (var i = this.tag || this.$vnode.data.tag || "span", c = /* @__PURE__ */ Object.create(null), f = this.prevChildren = this.children, E = this.$slots.default || [], _ = this.children = [], I = pp(this), O = 0; O < E.length; O++) {
      var N = E[O];
      if (N.tag) {
        if (N.key != null && String(N.key).indexOf("__vlist") !== 0)
          _.push(N), c[N.key] = N, (N.data || (N.data = {})).transition = I;
        else if (process.env.NODE_ENV !== "production") {
          var b = N.componentOptions, R = b ? b.Ctor.options.name || b.tag || "" : N.tag;
          Oe("<transition-group> children must be keyed: <" + R + ">");
        }
      }
    }
    if (f) {
      for (var A = [], S = [], C = 0; C < f.length; C++) {
        var l = f[C];
        l.data.transition = I, l.data.pos = l.elm.getBoundingClientRect(), c[l.key] ? A.push(l) : S.push(l);
      }
      this.kept = n(i, null, A), this.removed = S;
    }
    return n(i, null, _);
  },
  updated: function() {
    var n = this.prevChildren, i = this.moveClass || (this.name || "v") + "-move";
    !n.length || !this.hasMove(n[0].elm, i) || (n.forEach(sy), n.forEach(cy), n.forEach(uy), this._reflow = document.body.offsetHeight, n.forEach(function(c) {
      if (c.data.moved) {
        var f = c.elm, E = f.style;
        On(f, i), E.transform = E.WebkitTransform = E.transitionDuration = "", f.addEventListener(di, f._moveCb = function _(I) {
          I && I.target !== f || (!I || /transform$/.test(I.propertyName)) && (f.removeEventListener(di, _), f._moveCb = null, $r(f, i));
        });
      }
    }));
  },
  methods: {
    hasMove: function(n, i) {
      if (!tp)
        return !1;
      if (this._hasMove)
        return this._hasMove;
      var c = n.cloneNode();
      n._transitionClasses && n._transitionClasses.forEach(function(E) {
        Zl(c, E);
      }), Ql(c, i), c.style.display = "none", this.$el.appendChild(c);
      var f = ip(c);
      return this.$el.removeChild(c), this._hasMove = f.hasTransform;
    }
  }
};
function sy(t) {
  t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
}
function cy(t) {
  t.data.newPos = t.elm.getBoundingClientRect();
}
function uy(t) {
  var n = t.data.pos, i = t.data.newPos, c = n.left - i.left, f = n.top - i.top;
  if (c || f) {
    t.data.moved = !0;
    var E = t.elm.style;
    E.transform = E.WebkitTransform = "translate(" + c + "px," + f + "px)", E.transitionDuration = "0s";
  }
}
var ly = {
  Transition: iy,
  TransitionGroup: ay
};
yt.config.mustUseProp = Xg;
yt.config.isReservedTag = ql;
yt.config.isReservedAttr = qg;
yt.config.getTagNamespace = aE;
yt.config.isUnknownElement = sE;
ft(yt.options.directives, ey);
ft(yt.options.components, ly);
yt.prototype.__patch__ = ar ? YE : Gt;
yt.prototype.$mount = function(t, n) {
  return t = t && ar ? cE(t) : void 0, gg(this, t, n);
};
ar && setTimeout(function() {
  ct.devtools && (oi ? oi.emit("init", yt) : process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && console[console.info ? "info" : "log"](
    `Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools`
  )), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ct.productionTip !== !1 && typeof console < "u" && console[console.info ? "info" : "log"](
    `You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html`
  );
}, 0);
var Pa = function(t, n) {
  return Pa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, c) {
    i.__proto__ = c;
  } || function(i, c) {
    for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (i[f] = c[f]);
  }, Pa(t, n);
};
function py(t, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Pa(t, n);
  function i() {
    this.constructor = t;
  }
  t.prototype = n === null ? Object.create(n) : (i.prototype = n.prototype, new i());
}
var ka = function() {
  return ka = Object.assign || function(n) {
    for (var i, c = 1, f = arguments.length; c < f; c++) {
      i = arguments[c];
      for (var E in i) Object.prototype.hasOwnProperty.call(i, E) && (n[E] = i[E]);
    }
    return n;
  }, ka.apply(this, arguments);
};
function fp(t) {
  var n = typeof Symbol == "function" && Symbol.iterator, i = n && t[n], c = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && c >= t.length && (t = void 0), { value: t && t[c++], done: !t };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function dy(t, n) {
  var i = typeof Symbol == "function" && t[Symbol.iterator];
  if (!i) return t;
  var c = i.call(t), f, E = [], _;
  try {
    for (; (n === void 0 || n-- > 0) && !(f = c.next()).done; ) E.push(f.value);
  } catch (I) {
    _ = { error: I };
  } finally {
    try {
      f && !f.done && (i = c.return) && i.call(c);
    } finally {
      if (_) throw _.error;
    }
  }
  return E;
}
function fy(t, n, i) {
  if (arguments.length === 2) for (var c = 0, f = n.length, E; c < f; c++)
    (E || !(c in n)) && (E || (E = Array.prototype.slice.call(n, 0, c)), E[c] = n[c]);
  return t.concat(E || Array.prototype.slice.call(n));
}
function hp(t) {
  var n;
  gt(t, (n = wn()) === null || n === void 0 ? void 0 : n.proxy);
}
var Zn, qo = [], mp = (
  /** @class */
  function() {
    function t(n) {
      this.active = !0, this.effects = [], this.cleanups = [], this.vm = n;
    }
    return t.prototype.run = function(n) {
      if (this.active)
        try {
          return this.on(), n();
        } finally {
          this.off();
        }
      else process.env.NODE_ENV !== "production" && hp("cannot run an inactive effect scope.");
    }, t.prototype.on = function() {
      this.active && (qo.push(this), Zn = this);
    }, t.prototype.off = function() {
      this.active && (qo.pop(), Zn = qo[qo.length - 1]);
    }, t.prototype.stop = function() {
      this.active && (this.vm.$destroy(), this.effects.forEach(function(n) {
        return n.stop();
      }), this.cleanups.forEach(function(n) {
        return n();
      }), this.active = !1);
    }, t;
  }()
), hy = (
  /** @class */
  function(t) {
    py(n, t);
    function n(i) {
      i === void 0 && (i = !1);
      var c = this, f = void 0;
      return Ty(function() {
        f = No(Jr());
      }), c = t.call(this, f) || this, i || vy(c), c;
    }
    return n;
  }(mp)
);
function vy(t, n) {
  var i;
  if (n = n || Zn, n && n.active) {
    n.effects.push(t);
    return;
  }
  var c = (i = wn()) === null || i === void 0 ? void 0 : i.proxy;
  c && c.$on("hook:destroyed", function() {
    return t.stop();
  });
}
function vp(t) {
  return new hy(t);
}
function gp() {
  return Zn;
}
function gy(t) {
  Zn ? Zn.cleanups.push(t) : process.env.NODE_ENV !== "production" && hp("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
function Ep() {
  var t, n;
  return ((t = gp()) === null || t === void 0 ? void 0 : t.vm) || ((n = wn()) === null || n === void 0 ? void 0 : n.proxy);
}
function Ey(t) {
  if (!t.scope) {
    var n = new mp(t.proxy);
    t.scope = n, t.proxy.$on("hook:destroyed", function() {
      return n.stop();
    });
  }
  return t.scope;
}
var Da = void 0;
try {
  var mn = require("vue");
  mn && Yu(mn) ? Da = mn : mn && "default" in mn && Yu(mn.default) && (Da = mn.default);
} catch {
}
var Rn = null, Kn = null, Zo = !0, yp = "__composition_api_installed__";
function Yu(t) {
  return t && yr(t) && t.name === "Vue";
}
function yy(t) {
  return Rn && Or(t, yp);
}
function Jr() {
  return process.env.NODE_ENV !== "production" && Ti(Rn, "must call Vue.use(VueCompositionAPI) before using any function."), Rn;
}
function _p() {
  var t = Rn || Da;
  return process.env.NODE_ENV !== "production" && Ti(t, "No vue dependency found."), t;
}
function _y(t) {
  process.env.NODE_ENV !== "production" && Rn && t.__proto__ !== Rn.__proto__ && gt("[vue-composition-api] another instance of Vue installed"), Rn = t, Object.defineProperty(t, yp, {
    configurable: !0,
    writable: !0,
    value: !0
  });
}
function Ty(t) {
  var n = Zo;
  Zo = !1;
  try {
    t();
  } finally {
    Zo = n;
  }
}
function Qu(t) {
  if (Zo) {
    var n = Kn;
    n == null || n.scope.off(), Kn = t, Kn == null || Kn.scope.on();
  }
}
function wn() {
  return Kn;
}
var aa = /* @__PURE__ */ new WeakMap();
function hi(t) {
  if (aa.has(t))
    return aa.get(t);
  var n = {
    proxy: t,
    update: t.$forceUpdate,
    type: t.$options,
    uid: t._uid,
    // $emit is defined on prototype and it expected to be bound
    emit: t.$emit.bind(t),
    parent: null,
    root: null
    // to be immediately set
  };
  Ey(n);
  var i = [
    "data",
    "props",
    "attrs",
    "refs",
    "vnode",
    "slots"
  ];
  return i.forEach(function(c) {
    Yt(n, c, {
      get: function() {
        return t["$".concat(c)];
      }
    });
  }), Yt(n, "isMounted", {
    get: function() {
      return t._isMounted;
    }
  }), Yt(n, "isUnmounted", {
    get: function() {
      return t._isDestroyed;
    }
  }), Yt(n, "isDeactivated", {
    get: function() {
      return t._inactive;
    }
  }), Yt(n, "emitted", {
    get: function() {
      return t._events;
    }
  }), aa.set(t, n), t.$parent && (n.parent = hi(t.$parent)), t.$root && (n.root = hi(t.$root)), n;
}
var Oy = function(t) {
  return Object.prototype.toString.call(t);
};
function Zu(t) {
  return typeof t == "function" && /native code/.test(t.toString());
}
var Tp = typeof Symbol < "u" && Zu(Symbol) && typeof Reflect < "u" && Zu(Reflect.ownKeys), jr = function(t) {
  return t;
};
function Yt(t, n, i) {
  var c = i.get, f = i.set;
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: c || jr,
    set: f || jr
  });
}
function ds(t, n, i, c) {
  Object.defineProperty(t, n, {
    value: i,
    enumerable: !!c,
    writable: !0,
    configurable: !0
  });
}
function Or(t, n) {
  return Object.hasOwnProperty.call(t, n);
}
function Ti(t, n) {
  if (!t)
    throw new Error("[vue-composition-api] ".concat(n));
}
function Op(t) {
  return typeof t == "string" || typeof t == "number" || // $flow-disable-line
  typeof t == "symbol" || typeof t == "boolean";
}
function wr(t) {
  return Array.isArray(t);
}
var Ry = Object.prototype.toString, Rp = function(t) {
  return Ry.call(t);
}, Iy = function(t) {
  return Rp(t) === "[object Map]";
}, Sy = function(t) {
  return Rp(t) === "[object Set]";
}, Cy = 4294967295;
function Ip(t) {
  var n = parseFloat(String(t));
  return n >= 0 && Math.floor(n) === n && isFinite(t) && n <= Cy;
}
function Ro(t) {
  return t !== null && typeof t == "object";
}
function Hr(t) {
  return Oy(t) === "[object Object]";
}
function yr(t) {
  return typeof t == "function";
}
function Sp(t) {
  return t == null;
}
function gt(t, n) {
  var i = _p();
  !i || !i.util ? console.warn("[vue-composition-api] ".concat(t)) : i.util.warn(t, n);
}
function Ny(t, n, i) {
  if (process.env.NODE_ENV !== "production" && gt("Error in ".concat(i, ': "').concat(t.toString(), '"'), n), typeof window < "u" && typeof console < "u")
    console.error(t);
  else
    throw t;
}
function Ay(t, n) {
  return t === n ? t !== 0 || 1 / t === 1 / n : t !== t && n !== n;
}
function No(t, n) {
  n === void 0 && (n = {});
  var i = t.config.silent;
  t.config.silent = !0;
  var c = new t(n);
  return t.config.silent = i, c;
}
function by(t) {
  var n = Jr();
  return n && t instanceof n;
}
function My(t, n) {
  return function() {
    for (var i = [], c = 0; c < arguments.length; c++)
      i[c] = arguments[c];
    return t.$scopedSlots[n] ? t.$scopedSlots[n].apply(t, i) : process.env.NODE_ENV !== "production" ? gt("slots.".concat(n, '() got called outside of the "render()" scope'), t) : void 0;
  };
}
function wy(t, n) {
  var i;
  if (!t)
    i = {};
  else {
    if (t._normalized)
      return t._normalized;
    i = {};
    for (var c in t)
      t[c] && c[0] !== "$" && (i[c] = !0);
  }
  for (var c in n)
    c in i || (i[c] = !0);
  return i;
}
var sa, Uy = function() {
  if (!sa) {
    var t = No(Jr(), {
      computed: {
        value: function() {
          return 0;
        }
      }
    }), n = t._computedWatchers.value.constructor, i = t._data.__ob__.dep.constructor;
    sa = {
      Watcher: n,
      Dep: i
    }, t.$destroy();
  }
  return sa;
};
function Cp(t) {
  return Tp ? Symbol.for(t) : t;
}
var Yn = Cp("composition-api.preFlushQueue"), ho = Cp("composition-api.postFlushQueue"), mo = "composition-api.refKey", el = /* @__PURE__ */ new WeakMap(), Np = /* @__PURE__ */ new WeakMap(), Py = /* @__PURE__ */ new WeakMap();
function Ar(t, n, i) {
  var c = Jr(), f = c.util, E = f.warn, _ = f.defineReactive;
  process.env.NODE_ENV !== "production" && (Sp(t) || Op(t)) && E("Cannot set reactive property on undefined, null, or primitive value: ".concat(t));
  var I = t.__ob__;
  function O() {
    I && Ro(i) && !Or(i, "__ob__") && ms(i);
  }
  if (wr(t)) {
    if (Ip(n))
      return t.length = Math.max(t.length, n), t.splice(n, 1, i), O(), i;
    if (n === "length" && i !== t.length)
      return t.length = i, I == null || I.dep.notify(), i;
  }
  return n in t && !(n in Object.prototype) ? (t[n] = i, O(), i) : t._isVue || I && I.vmCount ? (process.env.NODE_ENV !== "production" && E("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), i) : I ? (_(I.value, n, i), bp(t, n, i), O(), I.dep.notify(), i) : (t[n] = i, i);
}
var Ap = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(n) {
      var i = n.get, c = n.set;
      Yt(this, "value", {
        get: i,
        set: c
      });
    }
    return t;
  }()
);
function fs(t, n, i) {
  n === void 0 && (n = !1), i === void 0 && (i = !1);
  var c = new Ap(t);
  i && (c.effect = !0);
  var f = Object.seal(c);
  return n && Py.set(f, !0), f;
}
function Rt(t) {
  var n;
  if (Et(t))
    return t;
  var i = Oi((n = {}, n[mo] = t, n));
  return fs({
    get: function() {
      return i[mo];
    },
    set: function(c) {
      return i[mo] = c;
    }
  });
}
function Et(t) {
  return t instanceof Ap;
}
function ky(t) {
  return Et(t) ? t.value : t;
}
function La(t) {
  if (process.env.NODE_ENV !== "production" && !_r(t) && gt("toRefs() expects a reactive object but received a plain one."), !Hr(t))
    return t;
  var n = {};
  for (var i in t)
    n[i] = ei(t, i);
  return n;
}
function ei(t, n) {
  n in t || Ar(t, n, void 0);
  var i = t[n];
  return Et(i) ? i : fs({
    get: function() {
      return t[n];
    },
    set: function(c) {
      return t[n] = c;
    }
  });
}
var hs = "__v_skip";
function An(t) {
  var n;
  return !!(t && Or(t, "__ob__") && typeof t.__ob__ == "object" && (!((n = t.__ob__) === null || n === void 0) && n[hs]));
}
function _r(t) {
  var n;
  return !!(t && Or(t, "__ob__") && typeof t.__ob__ == "object" && !(!((n = t.__ob__) === null || n === void 0) && n[hs]));
}
function xa(t) {
  if (!(!Hr(t) || An(t) || wr(t) || Et(t) || by(t) || el.has(t))) {
    el.set(t, !0);
    for (var n = Object.keys(t), i = 0; i < n.length; i++)
      bp(t, n[i]);
  }
}
function bp(t, n, i) {
  if (n !== "__ob__" && !An(t[n])) {
    var c, f, E = Object.getOwnPropertyDescriptor(t, n);
    if (E) {
      if (E.configurable === !1)
        return;
      c = E.get, f = E.set, (!c || f) && arguments.length === 2 && (i = t[n]);
    }
    xa(i), Yt(t, n, {
      get: function() {
        var I = c ? c.call(t) : i;
        return n !== mo && Et(I) ? I.value : I;
      },
      set: function(I) {
        c && !f || (n !== mo && Et(i) && !Et(I) ? i.value = I : (f && f.call(t, I), i = I), xa(I));
      }
    });
  }
}
function Mp(t) {
  var n = _p(), i;
  if (n.observable)
    i = n.observable(t);
  else {
    var c = No(n, {
      data: {
        $$state: t
      }
    });
    i = c._data.$$state;
  }
  return Or(i, "__ob__") || ms(i), i;
}
function ms(t, n) {
  var i, c;
  if (n === void 0 && (n = /* @__PURE__ */ new Set()), !(n.has(t) || Or(t, "__ob__") || !Object.isExtensible(t))) {
    ds(t, "__ob__", Dy(t)), n.add(t);
    try {
      for (var f = fp(Object.keys(t)), E = f.next(); !E.done; E = f.next()) {
        var _ = E.value, I = t[_];
        !(Hr(I) || wr(I)) || An(I) || !Object.isExtensible(I) || ms(I, n);
      }
    } catch (O) {
      i = { error: O };
    } finally {
      try {
        E && !E.done && (c = f.return) && c.call(f);
      } finally {
        if (i) throw i.error;
      }
    }
  }
}
function Dy(t) {
  return t === void 0 && (t = {}), {
    value: t,
    dep: {
      notify: jr,
      depend: jr,
      addSub: jr,
      removeSub: jr
    }
  };
}
function wp() {
  return Mp({}).__ob__;
}
function Oi(t) {
  if (!Ro(t))
    return process.env.NODE_ENV !== "production" && gt('"reactive()" must be called on an object.'), t;
  if (!(Hr(t) || wr(t)) || An(t) || !Object.isExtensible(t))
    return t;
  var n = Mp(t);
  return xa(n), n;
}
function En(t) {
  if (!(Hr(t) || wr(t)) || !Object.isExtensible(t))
    return t;
  var n = wp();
  return n[hs] = !0, ds(t, "__ob__", n), Np.set(t, !0), t;
}
function Up(t) {
  var n;
  return An(t) || !Object.isExtensible(t) ? t : ((n = t == null ? void 0 : t.__ob__) === null || n === void 0 ? void 0 : n.value) || t;
}
function ca(t, n) {
  var i = Jr(), c = i.util.warn;
  if (process.env.NODE_ENV !== "production" && (Sp(t) || Op(t)) && c("Cannot delete reactive property on undefined, null, or primitive value: ".concat(t)), wr(t) && Ip(n)) {
    t.splice(n, 1);
    return;
  }
  var f = t.__ob__;
  if (t._isVue || f && f.vmCount) {
    process.env.NODE_ENV !== "production" && c("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
    return;
  }
  Or(t, n) && (delete t[n], f && f.dep.notify());
}
var ti;
function Ly() {
  mi(this, Yn);
}
function xy() {
  mi(this, ho);
}
function Gy(t) {
  return t[Yn] !== void 0;
}
function jy(t) {
  t[Yn] = [], t[ho] = [], t.$on("hook:beforeUpdate", Ly), t.$on("hook:updated", xy);
}
function By(t) {
  return ka({
    immediate: !1,
    deep: !1,
    flush: "pre"
  }, t);
}
function Hy() {
  var t = Ep();
  return t ? Gy(t) || jy(t) : (ti || (ti = No(Jr())), t = ti), t;
}
function mi(t, n) {
  for (var i = t[n], c = 0; c < i.length; c++)
    i[c]();
  i.length = 0;
}
function Fy(t, n, i) {
  var c = function() {
    t.$nextTick(function() {
      t[Yn].length && mi(t, Yn), t[ho].length && mi(t, ho);
    });
  };
  switch (i) {
    case "pre":
      c(), t[Yn].push(n);
      break;
    case "post":
      c(), t[ho].push(n);
      break;
    default:
      Ti(!1, 'flush must be one of ["post", "pre", "sync"], but got '.concat(i));
      break;
  }
}
function Wy(t, n, i, c) {
  var f = t._watchers.length;
  return t.$watch(n, i, {
    immediate: c.immediateInvokeCallback,
    deep: c.deep,
    lazy: c.noRun,
    sync: c.sync,
    before: c.before
  }), t._watchers[f];
}
function tl(t, n) {
  var i = t.teardown;
  t.teardown = function() {
    for (var c = [], f = 0; f < arguments.length; f++)
      c[f] = arguments[f];
    i.apply(t, c), n();
  };
}
function Vy(t, n, i, c) {
  var f;
  process.env.NODE_ENV !== "production" && !i && (c.immediate !== void 0 && gt('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), c.deep !== void 0 && gt('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  var E = c.flush, _ = E === "sync", I, O = function(te) {
    I = function() {
      try {
        te();
      } catch (G) {
        Ny(G, t, "onCleanup()");
      }
    };
  }, N = function() {
    I && (I(), I = null);
  }, b = function(te) {
    return _ || /* without a current active instance, ignore pre|post mode */
    t === ti ? te : function() {
      for (var G = [], q = 0; q < arguments.length; q++)
        G[q] = arguments[q];
      return Fy(t, function() {
        te.apply(void 0, fy([], dy(G), !1));
      }, E);
    };
  };
  if (i === null) {
    var R = !1, A = function() {
      if (!R)
        try {
          R = !0, n(O);
        } finally {
          R = !1;
        }
    }, S = Wy(t, A, jr, {
      deep: c.deep || !1,
      sync: _,
      before: N
    });
    tl(S, N), S.lazy = !1;
    var C = S.get.bind(S);
    return S.get = b(C), function() {
      S.teardown();
    };
  }
  var l = c.deep, P = !1, B;
  if (Et(n) ? B = function() {
    return n.value;
  } : _r(n) ? (B = function() {
    return n;
  }, l = !0) : wr(n) ? (P = !0, B = function() {
    return n.map(function(te) {
      return Et(te) ? te.value : _r(te) ? Jn(te) : yr(te) ? te() : (process.env.NODE_ENV !== "production" && gt("Invalid watch source: ".concat(JSON.stringify(te), `.
          A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`), t), jr);
    });
  }) : yr(n) ? B = n : (B = jr, process.env.NODE_ENV !== "production" && gt("Invalid watch source: ".concat(JSON.stringify(n), `.
      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`), t)), l) {
    var M = B;
    B = function() {
      return Jn(M());
    };
  }
  var g = function(te, G) {
    if (!(!l && P && te.every(function(q, ee) {
      return Ay(q, G[ee]);
    })))
      return N(), i(te, G, O);
  }, x = b(g);
  if (c.immediate) {
    var h = x, U = function(te, G) {
      return U = h, g(te, wr(te) ? [] : G);
    };
    x = function(te, G) {
      return U(te, G);
    };
  }
  var W = t.$watch(B, x, {
    immediate: c.immediate,
    deep: l,
    sync: _
  }), Z = t._watchers[t._watchers.length - 1];
  return _r(Z.value) && (!((f = Z.value.__ob__) === null || f === void 0) && f.dep) && l && Z.value.__ob__.dep.addSub({
    update: function() {
      Z.run();
    }
  }), tl(Z, N), function() {
    W();
  };
}
function Pp(t, n, i) {
  var c = null;
  yr(n) ? c = n : (process.env.NODE_ENV !== "production" && gt("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), i = n, c = null);
  var f = By(i), E = Hy();
  return Vy(E, t, c, f);
}
function Jn(t, n) {
  if (n === void 0 && (n = /* @__PURE__ */ new Set()), !Ro(t) || n.has(t) || Np.has(t))
    return t;
  if (n.add(t), Et(t))
    Jn(t.value, n);
  else if (wr(t))
    for (var i = 0; i < t.length; i++)
      Jn(t[i], n);
  else if (Sy(t) || Iy(t))
    t.forEach(function(f) {
      Jn(f, n);
    });
  else if (Hr(t))
    for (var c in t)
      Jn(t[c], n);
  return t;
}
function kp(t) {
  var n = Ep(), i, c;
  yr(t) ? i = t : (i = t.get, c = t.set);
  var f, E;
  if (n && !n.$isServer) {
    var _ = Uy(), I = _.Watcher, O = _.Dep, N;
    E = function() {
      return N || (N = new I(n, i, jr, { lazy: !0 })), N.dirty && N.evaluate(), O.target && N.depend(), N.value;
    }, f = function(R) {
      if (process.env.NODE_ENV !== "production" && !c) {
        gt("Write operation failed: computed value is readonly.", n);
        return;
      }
      c && c(R);
    };
  } else {
    var b = No(Jr(), {
      computed: {
        $$state: {
          get: i,
          set: c
        }
      }
    });
    n && n.$on("hook:destroyed", function() {
      return b.$destroy();
    }), E = function() {
      return b.$$state;
    }, f = function(R) {
      if (process.env.NODE_ENV !== "production" && !c) {
        gt("Write operation failed: computed value is readonly.", n);
        return;
      }
      b.$$state = R;
    };
  }
  return fs({
    get: E,
    set: f
  }, !c, !0);
}
var Dp = {};
function Ky(t, n) {
  for (var i = n; i; ) {
    if (i._provided && Or(i._provided, t))
      return i._provided[t];
    i = i.$parent;
  }
  return Dp;
}
function zy(t, n, i) {
  var c;
  i === void 0 && (i = !1);
  var f = (c = wn()) === null || c === void 0 ? void 0 : c.proxy;
  if (!f) {
    process.env.NODE_ENV !== "production" && gt("inject() can only be used inside setup() or functional components.");
    return;
  }
  if (!t)
    return process.env.NODE_ENV !== "production" && gt('injection "'.concat(String(t), '" not found.'), f), n;
  var E = Ky(t, f);
  if (E !== Dp)
    return E;
  if (arguments.length > 1)
    return i && yr(n) ? n() : n;
  process.env.NODE_ENV !== "production" && gt('Injection "'.concat(String(t), '" not found.'), f);
}
process.env.NODE_ENV !== "production" && Object.freeze({});
var rl = function() {
  for (var n, i = [], c = 0; c < arguments.length; c++)
    i[c] = arguments[c];
  return (n = Jr()) === null || n === void 0 ? void 0 : n.nextTick.apply(this, i);
};
function $y(t, n, i) {
  var c = t.__composition_api_state__ = t.__composition_api_state__ || {};
  c[n] = i;
}
function qy(t, n) {
  return (t.__composition_api_state__ || {})[n];
}
var an = {
  set: $y,
  get: qy
};
function Jy(t, n, i) {
  var c = t.$options.props;
  !(n in t) && !(c && Or(c, n)) ? (Et(i) ? Yt(t, n, {
    get: function() {
      return i.value;
    },
    set: function(f) {
      i.value = f;
    }
  }) : Yt(t, n, {
    get: function() {
      return _r(i) && i.__ob__.dep.depend(), i;
    },
    set: function(f) {
      i = f;
    }
  }), process.env.NODE_ENV !== "production" && t.$nextTick(function() {
    Object.keys(t._data).indexOf(n) === -1 && (Et(i) ? Yt(t._data, n, {
      get: function() {
        return i.value;
      },
      set: function(f) {
        i.value = f;
      }
    }) : Yt(t._data, n, {
      get: function() {
        return i;
      },
      set: function(f) {
        i = f;
      }
    }));
  })) : process.env.NODE_ENV !== "production" && (c && Or(c, n) ? gt('The setup binding property "'.concat(n, '" is already declared as a prop.'), t) : gt('The setup binding property "'.concat(n, '" is already declared.'), t));
}
function Xy(t) {
  var n = an.get(t, "rawBindings") || {};
  if (!(!n || !Object.keys(n).length)) {
    for (var i = t.$refs, c = an.get(t, "refs") || [], f = 0; f < c.length; f++) {
      var E = c[f], _ = n[E];
      !i[E] && _ && Et(_) && (_.value = null);
    }
    for (var I = Object.keys(i), O = [], f = 0; f < I.length; f++) {
      var E = I[f], _ = n[E];
      i[E] && _ && Et(_) && (_.value = i[E], O.push(E));
    }
    an.set(t, "refs", O);
  }
}
function nl(t) {
  for (var n = [t._vnode]; n.length; ) {
    var i = n.pop();
    if (i && (i.context && Xy(i.context), i.children))
      for (var c = 0; c < i.children.length; ++c)
        n.push(i.children[c]);
  }
}
function ol(t, n) {
  var i, c;
  if (t) {
    var f = an.get(t, "attrBindings");
    if (!(!f && !n)) {
      if (!f) {
        var E = Oi({});
        f = { ctx: n, data: E }, an.set(t, "attrBindings", f), Yt(n, "attrs", {
          get: function() {
            return f == null ? void 0 : f.data;
          },
          set: function() {
            process.env.NODE_ENV !== "production" && gt("Cannot assign to '$attrs' because it is a read-only property", t);
          }
        });
      }
      var _ = t.$attrs, I = function(R) {
        Or(f.data, R) || Yt(f.data, R, {
          get: function() {
            return t.$attrs[R];
          }
        });
      };
      try {
        for (var O = fp(Object.keys(_)), N = O.next(); !N.done; N = O.next()) {
          var b = N.value;
          I(b);
        }
      } catch (R) {
        i = { error: R };
      } finally {
        try {
          N && !N.done && (c = O.return) && c.call(O);
        } finally {
          if (i) throw i.error;
        }
      }
    }
  }
}
function il(t, n) {
  var i = t.$options._parentVnode;
  if (i) {
    for (var c = an.get(t, "slots") || [], f = wy(i.data.scopedSlots, t.$slots), E = 0; E < c.length; E++) {
      var _ = c[E];
      f[_] || delete n[_];
    }
    for (var I = Object.keys(f), E = 0; E < I.length; E++) {
      var _ = I[E];
      n[_] || (n[_] = My(t, _));
    }
    an.set(t, "slots", I);
  }
}
function ua(t, n, i) {
  var c = wn();
  Qu(t);
  try {
    return n(t);
  } catch (f) {
    throw f;
  } finally {
    Qu(c);
  }
}
function Yy(t) {
  t.mixin({
    beforeCreate: n,
    mounted: function() {
      nl(this);
    },
    beforeUpdate: function() {
      ol(this);
    },
    updated: function() {
      nl(this);
    }
  });
  function n() {
    var _ = this, I = _.$options, O = I.setup, N = I.render;
    if (N && (I.render = function() {
      for (var R = this, A = [], S = 0; S < arguments.length; S++)
        A[S] = arguments[S];
      return ua(hi(_), function() {
        return N.apply(R, A);
      });
    }), !!O) {
      if (!yr(O)) {
        process.env.NODE_ENV !== "production" && gt('The "setup" option should be a function that returns a object in component definitions.', _);
        return;
      }
      var b = I.data;
      I.data = function() {
        return i(_, _.$props), yr(b) ? b.call(_, _) : b || {};
      };
    }
  }
  function i(_, I) {
    I === void 0 && (I = {});
    var O = _.$options.setup, N = E(_), b = hi(_);
    b.setupContext = N, ds(I, "__ob__", wp()), il(_, N.slots);
    var R;
    if (ua(b, function() {
      R = O(I, N);
    }), !!R) {
      if (yr(R)) {
        var A = R;
        _.$options.render = function() {
          return il(_, N.slots), ua(b, function() {
            return A();
          });
        };
        return;
      } else if (Ro(R)) {
        _r(R) && (R = La(R)), an.set(_, "rawBindings", R);
        var S = R;
        Object.keys(S).forEach(function(C) {
          var l = S[C];
          if (!Et(l))
            if (_r(l))
              wr(l) && (l = Rt(l));
            else if (yr(l)) {
              var P = l;
              l = l.bind(_), Object.keys(P).forEach(function(B) {
                l[B] = P[B];
              });
            } else Ro(l) ? f(l) && c(l) : l = Rt(l);
          Jy(_, C, l);
        });
        return;
      }
      process.env.NODE_ENV !== "production" && Ti(!1, '"setup" must return a "Object" or a "Function", got "'.concat(Object.prototype.toString.call(R).slice(8, -1), '"'));
    }
  }
  function c(_, I) {
    if (I === void 0 && (I = /* @__PURE__ */ new Set()), !I.has(_) && !(!Hr(_) || Et(_) || _r(_) || An(_))) {
      var O = Jr(), N = O.util.defineReactive;
      Object.keys(_).forEach(function(b) {
        var R = _[b];
        N(_, b, R), R && (I.add(R), c(R, I));
      });
    }
  }
  function f(_, I) {
    return I === void 0 && (I = /* @__PURE__ */ new Map()), I.has(_) ? I.get(_) : (I.set(_, !1), wr(_) && _r(_) ? (I.set(_, !0), !0) : !Hr(_) || An(_) || Et(_) ? !1 : Object.keys(_).some(function(O) {
      return f(_[O], I);
    }));
  }
  function E(_) {
    var I = { slots: {} }, O = [
      "root",
      "parent",
      "refs",
      "listeners",
      "isServer",
      "ssrContext"
    ], N = ["emit"];
    return O.forEach(function(b) {
      var R = "$".concat(b);
      Yt(I, b, {
        get: function() {
          return _[R];
        },
        set: function() {
          process.env.NODE_ENV !== "production" && gt("Cannot assign to '".concat(b, "' because it is a read-only property"), _);
        }
      });
    }), ol(_, I), N.forEach(function(b) {
      var R = "$".concat(b);
      Yt(I, b, {
        get: function() {
          return function() {
            for (var A = [], S = 0; S < arguments.length; S++)
              A[S] = arguments[S];
            var C = _[R];
            C.apply(_, A);
          };
        }
      });
    }), process.env.NODE_ENV === "test" && (I._vm = _), I;
  }
}
function Lp(t, n) {
  if (!t)
    return n;
  if (!n)
    return t;
  for (var i, c, f, E = Tp ? Reflect.ownKeys(t) : Object.keys(t), _ = 0; _ < E.length; _++)
    i = E[_], i !== "__ob__" && (c = n[i], f = t[i], Or(n, i) ? c !== f && Hr(c) && !Et(c) && Hr(f) && !Et(f) && Lp(f, c) : n[i] = f);
  return n;
}
function Qy(t) {
  if (yy(t)) {
    process.env.NODE_ENV !== "production" && gt("[vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.");
    return;
  }
  process.env.NODE_ENV !== "production" && (t.version ? (t.version[0] !== "2" || t.version[1] !== ".") && gt("[vue-composition-api] only works with Vue 2, v".concat(t.version, " found.")) : gt("[vue-composition-api] no Vue version found")), t.config.optionMergeStrategies.setup = function(n, i) {
    return function(f, E) {
      return Lp(yr(n) ? n(f, E) || {} : void 0, yr(i) ? i(f, E) || {} : void 0);
    };
  }, _y(t), Yy(t);
}
var xp = {
  install: function(t) {
    return Qy(t);
  }
};
typeof window < "u" && window.Vue && window.Vue.use(xp);
function Zy(t) {
  t = t || yt, t && !t.__composition_api_installed__ && t.use(xp);
}
Zy(yt);
var Gp = !0;
yt.version;
function e_() {
  return !!wn();
}
function t_() {
  return jp().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function jp() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const r_ = typeof Proxy == "function", n_ = "devtools-plugin:setup", o_ = "plugin:settings:set";
let Hn, Ga;
function i_() {
  var t;
  return Hn !== void 0 || (typeof window < "u" && window.performance ? (Hn = !0, Ga = window.performance) : typeof globalThis < "u" && (!((t = globalThis.perf_hooks) === null || t === void 0) && t.performance) ? (Hn = !0, Ga = globalThis.perf_hooks.performance) : Hn = !1), Hn;
}
function a_() {
  return i_() ? Ga.now() : Date.now();
}
class s_ {
  constructor(n, i) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = n, this.hook = i;
    const c = {};
    if (n.settings)
      for (const _ in n.settings) {
        const I = n.settings[_];
        c[_] = I.defaultValue;
      }
    const f = `__vue-devtools-plugin-settings__${n.id}`;
    let E = Object.assign({}, c);
    try {
      const _ = localStorage.getItem(f), I = JSON.parse(_);
      Object.assign(E, I);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return E;
      },
      setSettings(_) {
        try {
          localStorage.setItem(f, JSON.stringify(_));
        } catch {
        }
        E = _;
      },
      now() {
        return a_();
      }
    }, i && i.on(o_, (_, I) => {
      _ === this.plugin.id && this.fallbacks.setSettings(I);
    }), this.proxiedOn = new Proxy({}, {
      get: (_, I) => this.target ? this.target.on[I] : (...O) => {
        this.onQueue.push({
          method: I,
          args: O
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (_, I) => this.target ? this.target[I] : I === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(I) ? (...O) => (this.targetQueue.push({
        method: I,
        args: O,
        resolve: () => {
        }
      }), this.fallbacks[I](...O)) : (...O) => new Promise((N) => {
        this.targetQueue.push({
          method: I,
          args: O,
          resolve: N
        });
      })
    });
  }
  async setRealTarget(n) {
    this.target = n;
    for (const i of this.onQueue)
      this.target.on[i.method](...i.args);
    for (const i of this.targetQueue)
      i.resolve(await this.target[i.method](...i.args));
  }
}
function c_(t, n) {
  const i = t, c = jp(), f = t_(), E = r_ && i.enableEarlyProxy;
  if (f && (c.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !E))
    f.emit(n_, t, n);
  else {
    const _ = E ? new s_(i, f) : null;
    (c.__VUE_DEVTOOLS_PLUGINS__ = c.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: i,
      setupFn: n,
      proxy: _
    }), _ && n(_.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let fo;
const Io = (t) => fo = t, u_ = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function eo(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Br;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Br || (Br = {}));
const vs = typeof window < "u", ri = (process.env.NODE_ENV !== "production" || typeof __VUE_PROD_DEVTOOLS__ < "u" && __VUE_PROD_DEVTOOLS__) && process.env.NODE_ENV !== "test" && vs;
function al(t, n) {
  const i = "🍍 " + t;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(i, n) : console.log(i);
}
function Nr(t) {
  return {
    _custom: {
      display: t
    }
  };
}
function l_(t) {
  return t ? Array.isArray(t) ? t.reduce((n, i) => (n.keys.push(i.key), n.operations.push(i.type), n.oldValue[i.key] = i.oldValue, n.newValue[i.key] = i.newValue, n), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Nr(t.type),
    key: Nr(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function p_(t) {
  switch (t) {
    case Br.direct:
      return "mutation";
    case Br.patchFunction:
      return "$patch";
    case Br.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
const la = [], Fn = "pinia:mutations", rn = "pinia", { assign: d_ } = Object, sl = (t) => "🍍 " + t;
function f_(t, n) {
  la.includes(sl(n.$id)) || la.push(sl(n.$id)), c_({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: la,
    app: t,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (i) => {
    const c = typeof i.now == "function" ? i.now.bind(i) : Date.now;
    n.$onAction(({ after: _, onError: I, name: O, args: N }) => {
      const b = Bp++;
      i.addTimelineEvent({
        layerId: Fn,
        event: {
          time: c(),
          title: "🛫 " + O,
          subtitle: "start",
          data: {
            store: Nr(n.$id),
            action: Nr(O),
            args: N
          },
          groupId: b
        }
      }), _((R) => {
        on = void 0, i.addTimelineEvent({
          layerId: Fn,
          event: {
            time: c(),
            title: "🛬 " + O,
            subtitle: "end",
            data: {
              store: Nr(n.$id),
              action: Nr(O),
              args: N,
              result: R
            },
            groupId: b
          }
        });
      }), I((R) => {
        on = void 0, i.addTimelineEvent({
          layerId: Fn,
          event: {
            time: c(),
            logType: "error",
            title: "💥 " + O,
            subtitle: "end",
            data: {
              store: Nr(n.$id),
              action: Nr(O),
              args: N,
              error: R
            },
            groupId: b
          }
        });
      });
    }, !0), n._customProperties.forEach((_) => {
      Pp(() => ky(n[_]), (I, O) => {
        i.notifyComponentUpdate(), i.sendInspectorState(rn), i.addTimelineEvent({
          layerId: Fn,
          event: {
            time: c(),
            title: "Change",
            subtitle: _,
            data: {
              newValue: I,
              oldValue: O
            },
            groupId: on
          }
        });
      }, { deep: !0 });
    }), n.$subscribe(({ events: _, type: I }, O) => {
      i.notifyComponentUpdate(), i.sendInspectorState(rn);
      const N = {
        time: c(),
        title: p_(I),
        data: d_({ store: Nr(n.$id) }, l_(_)),
        groupId: on
      };
      I === Br.patchFunction ? N.subtitle = "⤵️" : I === Br.patchObject ? N.subtitle = "🧩" : _ && !Array.isArray(_) && (N.subtitle = _.type), _ && (N.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: _
        }
      }), i.addTimelineEvent({
        layerId: Fn,
        event: N
      });
    }, { detached: !0, flush: "sync" });
    const f = n._hotUpdate;
    n._hotUpdate = En((_) => {
      f(_), i.addTimelineEvent({
        layerId: Fn,
        event: {
          time: c(),
          title: "🔥 " + n.$id,
          subtitle: "HMR update",
          data: {
            store: Nr(n.$id),
            info: Nr("HMR update")
          }
        }
      }), i.notifyComponentUpdate(), i.sendInspectorTree(rn), i.sendInspectorState(rn);
    });
    const { $dispose: E } = n;
    n.$dispose = () => {
      E(), i.notifyComponentUpdate(), i.sendInspectorTree(rn), i.sendInspectorState(rn), i.getSettings().logStoreChanges && al(`Disposed "${n.$id}" store 🗑`);
    }, i.notifyComponentUpdate(), i.sendInspectorTree(rn), i.sendInspectorState(rn), i.getSettings().logStoreChanges && al(`"${n.$id}" store installed 🆕`);
  });
}
let Bp = 0, on;
function cl(t, n, i) {
  const c = n.reduce((f, E) => (f[E] = Up(t)[E], f), {});
  for (const f in c)
    t[f] = function() {
      const E = Bp, _ = i ? new Proxy(t, {
        get(...O) {
          return on = E, Reflect.get(...O);
        },
        set(...O) {
          return on = E, Reflect.set(...O);
        }
      }) : t;
      on = E;
      const I = c[f].apply(_, arguments);
      return on = void 0, I;
    };
}
function h_({ app: t, store: n, options: i }) {
  if (n.$id.startsWith("__hot:"))
    return;
  n._isOptionsAPI = !!i.state, cl(n, Object.keys(i.actions), n._isOptionsAPI);
  const c = n._hotUpdate;
  Up(n)._hotUpdate = function(f) {
    c.apply(this, arguments), cl(n, Object.keys(f._hmrPayload.actions), !!n._isOptionsAPI);
  }, f_(
    t,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    n
  );
}
function m_() {
  const t = vp(!0), n = t.run(() => Rt({}));
  let i = [];
  const c = En({
    install(f) {
      Io(c);
    },
    use(f) {
      return !this._a && !Gp || i.push(f), this;
    },
    _p: i,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: n
  });
  return ri && typeof Proxy < "u" && c.use(h_), c;
}
function Hp(t, n) {
  for (const i in n) {
    const c = n[i];
    if (!(i in t))
      continue;
    const f = t[i];
    eo(f) && eo(c) && !Et(c) && !_r(c) ? t[i] = Hp(f, c) : Ar(t, i, c);
  }
  return t;
}
const Fp = () => {
};
function ul(t, n, i, c = Fp) {
  t.push(n);
  const f = () => {
    const E = t.indexOf(n);
    E > -1 && (t.splice(E, 1), c());
  };
  return !i && gp() && gy(f), f;
}
function Wn(t, ...n) {
  t.slice().forEach((i) => {
    i(...n);
  });
}
const v_ = (t) => t();
function ja(t, n) {
  t instanceof Map && n instanceof Map && n.forEach((i, c) => t.set(c, i)), t instanceof Set && n instanceof Set && n.forEach(t.add, t);
  for (const i in n) {
    if (!n.hasOwnProperty(i))
      continue;
    const c = n[i], f = t[i];
    eo(f) && eo(c) && t.hasOwnProperty(i) && !Et(c) && !_r(c) ? t[i] = ja(f, c) : t[i] = c;
  }
  return t;
}
process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
const g_ = /* @__PURE__ */ new WeakMap();
function E_(t) {
  return (
    /* istanbul ignore next */
    !g_.has(t)
  );
}
const { assign: Lr } = Object;
function ll(t) {
  return !!(Et(t) && t.effect);
}
function pl(t, n, i, c) {
  const { state: f, actions: E, getters: _ } = n, I = i.state.value[t];
  let O;
  function N() {
    !I && (process.env.NODE_ENV === "production" || !c) && Ar(i.state.value, t, f ? f() : {});
    const b = process.env.NODE_ENV !== "production" && c ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      La(Rt(f ? f() : {}).value)
    ) : La(i.state.value[t]);
    return Lr(b, E, Object.keys(_ || {}).reduce((R, A) => (process.env.NODE_ENV !== "production" && A in b && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${A}" in store "${t}".`), R[A] = En(kp(() => {
      Io(i);
      const S = i._s.get(t);
      if (S._r)
        return _[A].call(S, S);
    })), R), {}));
  }
  return O = Ba(t, N, n, i, c, !0), O;
}
function Ba(t, n, i = {}, c, f, E) {
  let _;
  const I = Lr({ actions: {} }, i);
  if (process.env.NODE_ENV !== "production" && !c._e.active)
    throw new Error("Pinia destroyed");
  const O = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !Gp && (O.onTrigger = (G) => {
    N ? S = G : N == !1 && !W._hotUpdating && (Array.isArray(S) ? S.push(G) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let N, b, R = [], A = [], S;
  const C = c.state.value[t];
  !E && !C && (process.env.NODE_ENV === "production" || !f) && Ar(c.state.value, t, {});
  const l = Rt({});
  let P;
  function B(G) {
    let q;
    N = b = !1, process.env.NODE_ENV !== "production" && (S = []), typeof G == "function" ? (G(c.state.value[t]), q = {
      type: Br.patchFunction,
      storeId: t,
      events: S
    }) : (ja(c.state.value[t], G), q = {
      type: Br.patchObject,
      payload: G,
      storeId: t,
      events: S
    });
    const ee = P = Symbol();
    rl().then(() => {
      P === ee && (N = !0);
    }), b = !0, Wn(R, q, c.state.value[t]);
  }
  const M = E ? function() {
    const { state: q } = i, ee = q ? q() : {};
    this.$patch((ne) => {
      Lr(ne, ee);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`);
    } : Fp
  );
  function g() {
    _.stop(), R = [], A = [], c._s.delete(t);
  }
  function x(G, q) {
    return function() {
      Io(c);
      const ee = Array.from(arguments), ne = [], z = [];
      function y(K) {
        ne.push(K);
      }
      function J(K) {
        z.push(K);
      }
      Wn(A, {
        args: ee,
        name: G,
        store: W,
        after: y,
        onError: J
      });
      let j;
      try {
        j = q.apply(this && this.$id === t ? this : W, ee);
      } catch (K) {
        throw Wn(z, K), K;
      }
      return j instanceof Promise ? j.then((K) => (Wn(ne, K), K)).catch((K) => (Wn(z, K), Promise.reject(K))) : (Wn(ne, j), j);
    };
  }
  const h = /* @__PURE__ */ En({
    actions: {},
    getters: {},
    state: [],
    hotState: l
  }), U = {
    _p: c,
    // _s: scope,
    $id: t,
    $onAction: ul.bind(null, A),
    $patch: B,
    $reset: M,
    $subscribe(G, q = {}) {
      const ee = ul(R, G, q.detached, () => ne()), ne = _.run(() => Pp(() => c.state.value[t], (z) => {
        (q.flush === "sync" ? b : N) && G({
          storeId: t,
          type: Br.direct,
          events: S
        }, z);
      }, Lr({}, O, q)));
      return ee;
    },
    $dispose: g
  };
  U._r = !1;
  const W = Oi(process.env.NODE_ENV !== "production" || ri ? Lr(
    {
      _hmrPayload: h,
      _customProperties: En(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    U
    // must be added later
    // setupStore
  ) : U);
  c._s.set(t, W);
  const te = (c._a && c._a.runWithContext || v_)(() => c._e.run(() => (_ = vp()).run(n)));
  for (const G in te) {
    const q = te[G];
    if (Et(q) && !ll(q) || _r(q))
      process.env.NODE_ENV !== "production" && f ? Ar(l.value, G, ei(te, G)) : E || (C && E_(q) && (Et(q) ? q.value = C[G] : ja(q, C[G])), Ar(c.state.value[t], G, q)), process.env.NODE_ENV !== "production" && h.state.push(G);
    else if (typeof q == "function") {
      const ee = process.env.NODE_ENV !== "production" && f ? q : x(G, q);
      Ar(te, G, ee), process.env.NODE_ENV !== "production" && (h.actions[G] = q), I.actions[G] = q;
    } else process.env.NODE_ENV !== "production" && ll(q) && (h.getters[G] = E ? (
      // @ts-expect-error
      i.getters[G]
    ) : q, vs && (te._getters || // @ts-expect-error: same
    (te._getters = En([]))).push(G));
  }
  if (Object.keys(te).forEach((G) => {
    Ar(W, G, te[G]);
  }), Object.defineProperty(W, "$state", {
    get: () => process.env.NODE_ENV !== "production" && f ? l.value : c.state.value[t],
    set: (G) => {
      if (process.env.NODE_ENV !== "production" && f)
        throw new Error("cannot set hotState");
      B((q) => {
        Lr(q, G);
      });
    }
  }), process.env.NODE_ENV !== "production" && (W._hotUpdate = En((G) => {
    W._hotUpdating = !0, G._hmrPayload.state.forEach((q) => {
      if (q in W.$state) {
        const ee = G.$state[q], ne = W.$state[q];
        typeof ee == "object" && eo(ee) && eo(ne) ? Hp(ee, ne) : G.$state[q] = ne;
      }
      Ar(W, q, ei(G.$state, q));
    }), Object.keys(W.$state).forEach((q) => {
      q in G.$state || ca(W, q);
    }), N = !1, b = !1, c.state.value[t] = ei(G._hmrPayload, "hotState"), b = !0, rl().then(() => {
      N = !0;
    });
    for (const q in G._hmrPayload.actions) {
      const ee = G[q];
      Ar(W, q, x(q, ee));
    }
    for (const q in G._hmrPayload.getters) {
      const ee = G._hmrPayload.getters[q], ne = E ? (
        // special handling of options api
        kp(() => (Io(c), ee.call(W, W)))
      ) : ee;
      Ar(W, q, ne);
    }
    Object.keys(W._hmrPayload.getters).forEach((q) => {
      q in G._hmrPayload.getters || ca(W, q);
    }), Object.keys(W._hmrPayload.actions).forEach((q) => {
      q in G._hmrPayload.actions || ca(W, q);
    }), W._hmrPayload = G._hmrPayload, W._getters = G._getters, W._hotUpdating = !1;
  })), ri) {
    const G = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((q) => {
      Object.defineProperty(W, q, Lr({ value: W[q] }, G));
    });
  }
  return W._r = !0, c._p.forEach((G) => {
    if (ri) {
      const q = _.run(() => G({
        store: W,
        app: c._a,
        pinia: c,
        options: I
      }));
      Object.keys(q || {}).forEach((ee) => W._customProperties.add(ee)), Lr(W, q);
    } else
      Lr(W, _.run(() => G({
        store: W,
        app: c._a,
        pinia: c,
        options: I
      })));
  }), process.env.NODE_ENV !== "production" && W.$state && typeof W.$state == "object" && typeof W.$state.constructor == "function" && !W.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${W.$id}".`), C && E && i.hydrate && i.hydrate(W.$state, C), N = !0, b = !0, W;
}
function ln(t, n, i) {
  let c, f;
  const E = typeof n == "function";
  if (typeof t == "string")
    c = t, f = E ? i : n;
  else if (f = t, c = t.id, process.env.NODE_ENV !== "production" && typeof c != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function _(I, O) {
    const N = e_();
    if (I = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && fo && fo._testing ? null : I) || (N ? zy(u_, null) : null), I && Io(I), process.env.NODE_ENV !== "production" && !fo)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    I = fo, I._s.has(c) || (E ? Ba(c, n, f, I) : pl(c, f, I), process.env.NODE_ENV !== "production" && (_._pinia = I));
    const b = I._s.get(c);
    if (process.env.NODE_ENV !== "production" && O) {
      const R = "__hot:" + c, A = E ? Ba(R, n, f, I, !0) : pl(R, Lr({}, f), I, !0);
      O._hotUpdate(A), delete I.state.value[R], I._s.delete(R);
    }
    if (process.env.NODE_ENV !== "production" && vs) {
      const R = wn();
      if (R && R.proxy && // avoid adding stores that are just built for hot module replacement
      !O) {
        const A = R.proxy, S = "_pStores" in A ? A._pStores : A._pStores = {};
        S[c] = b;
      }
    }
    return b;
  }
  return _.$id = c, _;
}
const C_ = m_();
function y_(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Wp = { exports: {} };
(function(t, n) {
  (function(i, c) {
    t.exports = c();
  })(self, function() {
    return function() {
      var i = { 887: function(_, I, O) {
        var N, b, R;
        (function(A) {
          if (I != null && typeof I.nodeType != "number") _.exports = A();
          else if (O.amdO != null) b = [], (R = typeof (N = A) == "function" ? N.apply(I, b) : N) === void 0 || (_.exports = R);
          else {
            var S = A(), C = typeof self < "u" ? self : $.global;
            typeof C.btoa != "function" && (C.btoa = S.btoa), typeof C.atob != "function" && (C.atob = S.atob);
          }
        })(function() {
          var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          function S(C) {
            this.message = C;
          }
          return S.prototype = new Error(), S.prototype.name = "InvalidCharacterError", { btoa: function(C) {
            for (var l, P, B = String(C), M = 0, g = A, x = ""; B.charAt(0 | M) || (g = "=", M % 1); x += g.charAt(63 & l >> 8 - M % 1 * 8)) {
              if ((P = B.charCodeAt(M += 0.75)) > 255) throw new S("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
              l = l << 8 | P;
            }
            return x;
          }, atob: function(C) {
            var l = String(C).replace(/[=]+$/, "");
            if (l.length % 4 == 1) throw new S("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var P, B, M = 0, g = 0, x = ""; B = l.charAt(g++); ~B && (P = M % 4 ? 64 * P + B : B, M++ % 4) ? x += String.fromCharCode(255 & P >> (-2 * M & 6)) : 0) B = A.indexOf(B);
            return x;
          } };
        });
      }, 570: function(_) {
        _.exports = O;
        var I = null;
        try {
          I = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch {
        }
        function O(y, J, j) {
          this.low = 0 | y, this.high = 0 | J, this.unsigned = !!j;
        }
        function N(y) {
          return (y && y.__isLong__) === !0;
        }
        O.prototype.__isLong__, Object.defineProperty(O.prototype, "__isLong__", { value: !0 }), O.isLong = N;
        var b = {}, R = {};
        function A(y, J) {
          var j, K, Q;
          return J ? (Q = 0 <= (y >>>= 0) && y < 256) && (K = R[y]) ? K : (j = C(y, (0 | y) < 0 ? -1 : 0, !0), Q && (R[y] = j), j) : (Q = -128 <= (y |= 0) && y < 128) && (K = b[y]) ? K : (j = C(y, y < 0 ? -1 : 0, !1), Q && (b[y] = j), j);
        }
        function S(y, J) {
          if (isNaN(y)) return J ? W : U;
          if (J) {
            if (y < 0) return W;
            if (y >= g) return ee;
          } else {
            if (y <= -x) return ne;
            if (y + 1 >= x) return q;
          }
          return y < 0 ? S(-y, J).neg() : C(y % M | 0, y / M | 0, J);
        }
        function C(y, J, j) {
          return new O(y, J, j);
        }
        O.fromInt = A, O.fromNumber = S, O.fromBits = C;
        var l = Math.pow;
        function P(y, J, j) {
          if (y.length === 0) throw Error("empty string");
          if (y === "NaN" || y === "Infinity" || y === "+Infinity" || y === "-Infinity") return U;
          if (typeof J == "number" ? (j = J, J = !1) : J = !!J, (j = j || 10) < 2 || 36 < j) throw RangeError("radix");
          var K;
          if ((K = y.indexOf("-")) > 0) throw Error("interior hyphen");
          if (K === 0) return P(y.substring(1), J, j).neg();
          for (var Q = S(l(j, 8)), se = U, ce = 0; ce < y.length; ce += 8) {
            var fe = Math.min(8, y.length - ce), me = parseInt(y.substring(ce, ce + fe), j);
            if (fe < 8) {
              var de = S(l(j, fe));
              se = se.mul(de).add(S(me));
            } else se = (se = se.mul(Q)).add(S(me));
          }
          return se.unsigned = J, se;
        }
        function B(y, J) {
          return typeof y == "number" ? S(y, J) : typeof y == "string" ? P(y, J) : C(y.low, y.high, typeof J == "boolean" ? J : y.unsigned);
        }
        O.fromString = P, O.fromValue = B;
        var M = 4294967296, g = M * M, x = g / 2, h = A(1 << 24), U = A(0);
        O.ZERO = U;
        var W = A(0, !0);
        O.UZERO = W;
        var Z = A(1);
        O.ONE = Z;
        var te = A(1, !0);
        O.UONE = te;
        var G = A(-1);
        O.NEG_ONE = G;
        var q = C(-1, 2147483647, !1);
        O.MAX_VALUE = q;
        var ee = C(-1, -1, !0);
        O.MAX_UNSIGNED_VALUE = ee;
        var ne = C(0, -2147483648, !1);
        O.MIN_VALUE = ne;
        var z = O.prototype;
        z.toInt = function() {
          return this.unsigned ? this.low >>> 0 : this.low;
        }, z.toNumber = function() {
          return this.unsigned ? (this.high >>> 0) * M + (this.low >>> 0) : this.high * M + (this.low >>> 0);
        }, z.toString = function(y) {
          if ((y = y || 10) < 2 || 36 < y) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(ne)) {
              var J = S(y), j = this.div(J), K = j.mul(J).sub(this);
              return j.toString(y) + K.toInt().toString(y);
            }
            return "-" + this.neg().toString(y);
          }
          for (var Q = S(l(y, 6), this.unsigned), se = this, ce = ""; ; ) {
            var fe = se.div(Q), me = (se.sub(fe.mul(Q)).toInt() >>> 0).toString(y);
            if ((se = fe).isZero()) return me + ce;
            for (; me.length < 6; ) me = "0" + me;
            ce = "" + me + ce;
          }
        }, z.getHighBits = function() {
          return this.high;
        }, z.getHighBitsUnsigned = function() {
          return this.high >>> 0;
        }, z.getLowBits = function() {
          return this.low;
        }, z.getLowBitsUnsigned = function() {
          return this.low >>> 0;
        }, z.getNumBitsAbs = function() {
          if (this.isNegative()) return this.eq(ne) ? 64 : this.neg().getNumBitsAbs();
          for (var y = this.high != 0 ? this.high : this.low, J = 31; J > 0 && !(y & 1 << J); J--) ;
          return this.high != 0 ? J + 33 : J + 1;
        }, z.isZero = function() {
          return this.high === 0 && this.low === 0;
        }, z.eqz = z.isZero, z.isNegative = function() {
          return !this.unsigned && this.high < 0;
        }, z.isPositive = function() {
          return this.unsigned || this.high >= 0;
        }, z.isOdd = function() {
          return !(1 & ~this.low);
        }, z.isEven = function() {
          return !(1 & this.low);
        }, z.equals = function(y) {
          return N(y) || (y = B(y)), (this.unsigned === y.unsigned || this.high >>> 31 != 1 || y.high >>> 31 != 1) && this.high === y.high && this.low === y.low;
        }, z.eq = z.equals, z.notEquals = function(y) {
          return !this.eq(y);
        }, z.neq = z.notEquals, z.ne = z.notEquals, z.lessThan = function(y) {
          return this.comp(y) < 0;
        }, z.lt = z.lessThan, z.lessThanOrEqual = function(y) {
          return this.comp(y) <= 0;
        }, z.lte = z.lessThanOrEqual, z.le = z.lessThanOrEqual, z.greaterThan = function(y) {
          return this.comp(y) > 0;
        }, z.gt = z.greaterThan, z.greaterThanOrEqual = function(y) {
          return this.comp(y) >= 0;
        }, z.gte = z.greaterThanOrEqual, z.ge = z.greaterThanOrEqual, z.compare = function(y) {
          if (N(y) || (y = B(y)), this.eq(y)) return 0;
          var J = this.isNegative(), j = y.isNegative();
          return J && !j ? -1 : !J && j ? 1 : this.unsigned ? y.high >>> 0 > this.high >>> 0 || y.high === this.high && y.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(y).isNegative() ? -1 : 1;
        }, z.comp = z.compare, z.negate = function() {
          return !this.unsigned && this.eq(ne) ? ne : this.not().add(Z);
        }, z.neg = z.negate, z.add = function(y) {
          N(y) || (y = B(y));
          var J = this.high >>> 16, j = 65535 & this.high, K = this.low >>> 16, Q = 65535 & this.low, se = y.high >>> 16, ce = 65535 & y.high, fe = y.low >>> 16, me = 0, de = 0, Ee = 0, Re = 0;
          return Ee += (Re += Q + (65535 & y.low)) >>> 16, de += (Ee += K + fe) >>> 16, me += (de += j + ce) >>> 16, me += J + se, C((Ee &= 65535) << 16 | (Re &= 65535), (me &= 65535) << 16 | (de &= 65535), this.unsigned);
        }, z.subtract = function(y) {
          return N(y) || (y = B(y)), this.add(y.neg());
        }, z.sub = z.subtract, z.multiply = function(y) {
          if (this.isZero()) return U;
          if (N(y) || (y = B(y)), I) return C(I.mul(this.low, this.high, y.low, y.high), I.get_high(), this.unsigned);
          if (y.isZero()) return U;
          if (this.eq(ne)) return y.isOdd() ? ne : U;
          if (y.eq(ne)) return this.isOdd() ? ne : U;
          if (this.isNegative()) return y.isNegative() ? this.neg().mul(y.neg()) : this.neg().mul(y).neg();
          if (y.isNegative()) return this.mul(y.neg()).neg();
          if (this.lt(h) && y.lt(h)) return S(this.toNumber() * y.toNumber(), this.unsigned);
          var J = this.high >>> 16, j = 65535 & this.high, K = this.low >>> 16, Q = 65535 & this.low, se = y.high >>> 16, ce = 65535 & y.high, fe = y.low >>> 16, me = 65535 & y.low, de = 0, Ee = 0, Re = 0, L = 0;
          return Re += (L += Q * me) >>> 16, Ee += (Re += K * me) >>> 16, Re &= 65535, Ee += (Re += Q * fe) >>> 16, de += (Ee += j * me) >>> 16, Ee &= 65535, de += (Ee += K * fe) >>> 16, Ee &= 65535, de += (Ee += Q * ce) >>> 16, de += J * me + j * fe + K * ce + Q * se, C((Re &= 65535) << 16 | (L &= 65535), (de &= 65535) << 16 | (Ee &= 65535), this.unsigned);
        }, z.mul = z.multiply, z.divide = function(y) {
          if (N(y) || (y = B(y)), y.isZero()) throw Error("division by zero");
          var J, j, K;
          if (I) return this.unsigned || this.high !== -2147483648 || y.low !== -1 || y.high !== -1 ? C((this.unsigned ? I.div_u : I.div_s)(this.low, this.high, y.low, y.high), I.get_high(), this.unsigned) : this;
          if (this.isZero()) return this.unsigned ? W : U;
          if (this.unsigned) {
            if (y.unsigned || (y = y.toUnsigned()), y.gt(this)) return W;
            if (y.gt(this.shru(1))) return te;
            K = W;
          } else {
            if (this.eq(ne)) return y.eq(Z) || y.eq(G) ? ne : y.eq(ne) ? Z : (J = this.shr(1).div(y).shl(1)).eq(U) ? y.isNegative() ? Z : G : (j = this.sub(y.mul(J)), K = J.add(j.div(y)));
            if (y.eq(ne)) return this.unsigned ? W : U;
            if (this.isNegative()) return y.isNegative() ? this.neg().div(y.neg()) : this.neg().div(y).neg();
            if (y.isNegative()) return this.div(y.neg()).neg();
            K = U;
          }
          for (j = this; j.gte(y); ) {
            J = Math.max(1, Math.floor(j.toNumber() / y.toNumber()));
            for (var Q = Math.ceil(Math.log(J) / Math.LN2), se = Q <= 48 ? 1 : l(2, Q - 48), ce = S(J), fe = ce.mul(y); fe.isNegative() || fe.gt(j); ) fe = (ce = S(J -= se, this.unsigned)).mul(y);
            ce.isZero() && (ce = Z), K = K.add(ce), j = j.sub(fe);
          }
          return K;
        }, z.div = z.divide, z.modulo = function(y) {
          return N(y) || (y = B(y)), I ? C((this.unsigned ? I.rem_u : I.rem_s)(this.low, this.high, y.low, y.high), I.get_high(), this.unsigned) : this.sub(this.div(y).mul(y));
        }, z.mod = z.modulo, z.rem = z.modulo, z.not = function() {
          return C(~this.low, ~this.high, this.unsigned);
        }, z.and = function(y) {
          return N(y) || (y = B(y)), C(this.low & y.low, this.high & y.high, this.unsigned);
        }, z.or = function(y) {
          return N(y) || (y = B(y)), C(this.low | y.low, this.high | y.high, this.unsigned);
        }, z.xor = function(y) {
          return N(y) || (y = B(y)), C(this.low ^ y.low, this.high ^ y.high, this.unsigned);
        }, z.shiftLeft = function(y) {
          return N(y) && (y = y.toInt()), (y &= 63) == 0 ? this : y < 32 ? C(this.low << y, this.high << y | this.low >>> 32 - y, this.unsigned) : C(0, this.low << y - 32, this.unsigned);
        }, z.shl = z.shiftLeft, z.shiftRight = function(y) {
          return N(y) && (y = y.toInt()), (y &= 63) == 0 ? this : y < 32 ? C(this.low >>> y | this.high << 32 - y, this.high >> y, this.unsigned) : C(this.high >> y - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        }, z.shr = z.shiftRight, z.shiftRightUnsigned = function(y) {
          if (N(y) && (y = y.toInt()), (y &= 63) == 0) return this;
          var J = this.high;
          return y < 32 ? C(this.low >>> y | J << 32 - y, J >>> y, this.unsigned) : C(y === 32 ? J : J >>> y - 32, 0, this.unsigned);
        }, z.shru = z.shiftRightUnsigned, z.shr_u = z.shiftRightUnsigned, z.toSigned = function() {
          return this.unsigned ? C(this.low, this.high, !1) : this;
        }, z.toUnsigned = function() {
          return this.unsigned ? this : C(this.low, this.high, !0);
        }, z.toBytes = function(y) {
          return y ? this.toBytesLE() : this.toBytesBE();
        }, z.toBytesLE = function() {
          var y = this.high, J = this.low;
          return [255 & J, J >>> 8 & 255, J >>> 16 & 255, J >>> 24, 255 & y, y >>> 8 & 255, y >>> 16 & 255, y >>> 24];
        }, z.toBytesBE = function() {
          var y = this.high, J = this.low;
          return [y >>> 24, y >>> 16 & 255, y >>> 8 & 255, 255 & y, J >>> 24, J >>> 16 & 255, J >>> 8 & 255, 255 & J];
        }, O.fromBytes = function(y, J, j) {
          return j ? O.fromBytesLE(y, J) : O.fromBytesBE(y, J);
        }, O.fromBytesLE = function(y, J) {
          return new O(y[0] | y[1] << 8 | y[2] << 16 | y[3] << 24, y[4] | y[5] << 8 | y[6] << 16 | y[7] << 24, J);
        }, O.fromBytesBE = function(y, J) {
          return new O(y[4] << 24 | y[5] << 16 | y[6] << 8 | y[7], y[0] << 24 | y[1] << 16 | y[2] << 8 | y[3], J);
        };
      }, 87: function(_) {
        function I() {
          this._listeners = {};
        }
        _.exports = I, I.prototype.on = function(O, N, b) {
          return (this._listeners[O] || (this._listeners[O] = [])).push({ fn: N, ctx: b || this }), this;
        }, I.prototype.off = function(O, N) {
          if (O === void 0) this._listeners = {};
          else if (N === void 0) this._listeners[O] = [];
          else for (var b = this._listeners[O], R = 0; R < b.length; ) b[R].fn === N ? b.splice(R, 1) : ++R;
          return this;
        }, I.prototype.emit = function(O) {
          var N = this._listeners[O];
          if (N) {
            for (var b = [], R = 1; R < arguments.length; ) b.push(arguments[R++]);
            for (R = 0; R < N.length; ) N[R].fn.apply(N[R++].ctx, b);
          }
          return this;
        };
      }, 880: function(_) {
        _.exports = function(I, O) {
          for (var N = new Array(arguments.length - 1), b = 0, R = 2, A = !0; R < arguments.length; ) N[b++] = arguments[R++];
          return new Promise(function(S, C) {
            N[b] = function(l) {
              if (A) if (A = !1, l) C(l);
              else {
                for (var P = new Array(arguments.length - 1), B = 0; B < P.length; ) P[B++] = arguments[B];
                S.apply(null, P);
              }
            };
            try {
              I.apply(O || null, N);
            } catch (l) {
              A && (A = !1, C(l));
            }
          });
        };
      }, 986: function(_) {
        var I = _.exports;
        I.length = function(A) {
          var S = A.length;
          if (!S) return 0;
          for (var C = 0; --S % 4 > 1 && A.charAt(S) === "="; ) ++C;
          return Math.ceil(3 * A.length) / 4 - C;
        };
        for (var O = new Array(64), N = new Array(123), b = 0; b < 64; ) N[O[b] = b < 26 ? b + 65 : b < 52 ? b + 71 : b < 62 ? b - 4 : b - 59 | 43] = b++;
        I.encode = function(A, S, C) {
          for (var l, P = null, B = [], M = 0, g = 0; S < C; ) {
            var x = A[S++];
            switch (g) {
              case 0:
                B[M++] = O[x >> 2], l = (3 & x) << 4, g = 1;
                break;
              case 1:
                B[M++] = O[l | x >> 4], l = (15 & x) << 2, g = 2;
                break;
              case 2:
                B[M++] = O[l | x >> 6], B[M++] = O[63 & x], g = 0;
            }
            M > 8191 && ((P || (P = [])).push(String.fromCharCode.apply(String, B)), M = 0);
          }
          return g && (B[M++] = O[l], B[M++] = 61, g === 1 && (B[M++] = 61)), P ? (M && P.push(String.fromCharCode.apply(String, B.slice(0, M))), P.join("")) : String.fromCharCode.apply(String, B.slice(0, M));
        };
        var R = "invalid encoding";
        I.decode = function(A, S, C) {
          for (var l, P = C, B = 0, M = 0; M < A.length; ) {
            var g = A.charCodeAt(M++);
            if (g === 61 && B > 1) break;
            if ((g = N[g]) === void 0) throw Error(R);
            switch (B) {
              case 0:
                l = g, B = 1;
                break;
              case 1:
                S[C++] = l << 2 | (48 & g) >> 4, l = g, B = 2;
                break;
              case 2:
                S[C++] = (15 & l) << 4 | (60 & g) >> 2, l = g, B = 3;
                break;
              case 3:
                S[C++] = (3 & l) << 6 | g, B = 0;
            }
          }
          if (B === 1) throw Error(R);
          return C - P;
        }, I.test = function(A) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(A);
        };
      }, 940: function(_) {
        _.exports = N;
        var I, O = /\/|\./;
        function N(b, R) {
          O.test(b) || (b = "google/protobuf/" + b + ".proto", R = { nested: { google: { nested: { protobuf: { nested: R } } } } }), N[b] = R;
        }
        N("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), N("duration", { Duration: I = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), N("timestamp", { Timestamp: I }), N("empty", { Empty: { fields: {} } }), N("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), N("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), N("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), N.get = function(b) {
          return N[b] || null;
        };
      }, 921: function(_, I, O) {
        var N, b, R = _.exports;
        function A(C, l, P, B) {
          var M = B.m, g = B.d, x = B.types, h = B.ksi, U = h !== void 0;
          if (C.resolvedType) if (C.resolvedType instanceof N) {
            for (var W = U ? g[P][h] : g[P], Z = C.resolvedType.values, te = Object.keys(Z), G = 0; G < te.length; G++) if (!(C.repeated && Z[te[G]] === C.typeDefault || te[G] != W && Z[te[G]] != W)) {
              U ? M[P][h] = Z[te[G]] : M[P] = Z[te[G]];
              break;
            }
          } else {
            if (typeof (U ? g[P][h] : g[P]) != "object") throw TypeError(C.fullName + ": object expected");
            U ? M[P][h] = x[l].fromObject(g[P][h]) : M[P] = x[l].fromObject(g[P]);
          }
          else {
            var q = !1;
            switch (C.type) {
              case "double":
              case "float":
                U ? M[P][h] = Number(g[P][h]) : M[P] = Number(g[P]);
                break;
              case "uint32":
              case "fixed32":
                U ? M[P][h] = g[P][h] >>> 0 : M[P] = g[P] >>> 0;
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                U ? M[P][h] = 0 | g[P][h] : M[P] = 0 | g[P];
                break;
              case "uint64":
                q = !0;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                b.Long ? U ? M[P][h] = b.Long.fromValue(g[P][h]).unsigned = q : M[P] = b.Long.fromValue(g[P]).unsigned = q : typeof (U ? g[P][h] : g[P]) == "string" ? U ? M[P][h] = parseInt(g[P][h], 10) : M[P] = parseInt(g[P], 10) : typeof (U ? g[P][h] : g[P]) == "number" ? U ? M[P][h] = g[P][h] : M[P] = g[P] : typeof (U ? g[P][h] : g[P]) == "object" && (U ? M[P][h] = new b.LongBits(g[P][h].low >>> 0, g[P][h].high >>> 0).toNumber(q) : M[P] = new b.LongBits(g[P].low >>> 0, g[P].high >>> 0).toNumber(q));
                break;
              case "bytes":
                typeof (U ? g[P][h] : g[P]) == "string" ? U ? b.base64.decode(g[P][h], M[P][h] = b.newBuffer(b.base64.length(g[P][h])), 0) : b.base64.decode(g[P], M[P] = b.newBuffer(b.base64.length(g[P])), 0) : (U ? g[P][h] : g[P]).length && (U ? M[P][h] = g[P][h] : M[P] = g[P]);
                break;
              case "string":
                U ? M[P][h] = String(g[P][h]) : M[P] = String(g[P]);
                break;
              case "bool":
                U ? M[P][h] = !!g[P][h] : M[P] = !!g[P];
            }
          }
        }
        function S(C, l, P, B) {
          var M = B.m, g = B.d, x = B.types, h = B.ksi, U = B.o, W = h !== void 0;
          if (C.resolvedType) C.resolvedType instanceof N ? W ? g[P][h] = U.enums === String ? x[l].values[M[P][h]] : M[P][h] : g[P] = U.enums === String ? x[l].values[M[P]] : M[P] : W ? g[P][h] = x[l].toObject(M[P][h], U) : g[P] = x[l].toObject(M[P], U);
          else {
            var Z = !1;
            switch (C.type) {
              case "double":
              case "float":
                W ? g[P][h] = U.json && !isFinite(M[P][h]) ? String(M[P][h]) : M[P][h] : g[P] = U.json && !isFinite(M[P]) ? String(M[P]) : M[P];
                break;
              case "uint64":
                Z = !0;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                typeof M[P][h] == "number" ? W ? g[P][h] = U.longs === String ? String(M[P][h]) : M[P][h] : g[P] = U.longs === String ? String(M[P]) : M[P] : W ? g[P][h] = U.longs === String ? b.Long.prototype.toString.call(M[P][h]) : U.longs === Number ? new b.LongBits(M[P][h].low >>> 0, M[P][h].high >>> 0).toNumber(Z) : M[P][h] : g[P] = U.longs === String ? b.Long.prototype.toString.call(M[P]) : U.longs === Number ? new b.LongBits(M[P].low >>> 0, M[P].high >>> 0).toNumber(Z) : M[P];
                break;
              case "bytes":
                W ? g[P][h] = U.bytes === String ? b.base64.encode(M[P][h], 0, M[P][h].length) : U.bytes === Array ? Array.prototype.slice.call(M[P][h]) : M[P][h] : g[P] = U.bytes === String ? b.base64.encode(M[P], 0, M[P].length) : U.bytes === Array ? Array.prototype.slice.call(M[P]) : M[P];
                break;
              default:
                W ? g[P][h] = M[P][h] : g[P] = M[P];
            }
          }
        }
        R._configure = function() {
          N = O(660), b = O(629);
        }, R.fromObject = function(C) {
          var l = C.fieldsArray;
          return function(P) {
            return function(B) {
              if (B instanceof this.ctor) return B;
              if (!l.length) return new this.ctor();
              for (var M = new this.ctor(), g = 0; g < l.length; ++g) {
                var x, h = l[g].resolve(), U = h.name;
                if (h.map) {
                  if (B[U]) {
                    if (typeof B[U] != "object") throw TypeError(h.fullName + ": object expected");
                    M[U] = {};
                  }
                  var W = Object.keys(B[U]);
                  for (x = 0; x < W.length; ++x) A(h, g, U, b.merge(b.copy(P), { m: M, d: B, ksi: W[x] }));
                } else if (h.repeated) {
                  if (B[U]) {
                    if (!Array.isArray(B[U])) throw TypeError(h.fullName + ": array expected");
                    for (M[U] = [], x = 0; x < B[U].length; ++x) A(h, g, U, b.merge(b.copy(P), { m: M, d: B, ksi: x }));
                  }
                } else (h.resolvedType instanceof N || B[U] != null) && A(h, g, U, b.merge(b.copy(P), { m: M, d: B }));
              }
              return M;
            };
          };
        }, R.toObject = function(C) {
          var l = C.fieldsArray.slice().sort(b.compareFieldsById);
          return function(P) {
            return l.length ? function(B, M) {
              M = M || {};
              for (var g, x, h = {}, U = [], W = [], Z = [], te = 0; te < l.length; ++te) l[te].partOf || (l[te].resolve().repeated ? U : l[te].map ? W : Z).push(l[te]);
              if (U.length && (M.arrays || M.defaults)) for (te = 0; te < U.length; ++te) h[U[te].name] = [];
              if (W.length && (M.objects || M.defaults)) for (te = 0; te < W.length; ++te) h[W[te].name] = {};
              if (Z.length && M.defaults) for (te = 0; te < Z.length; ++te) if (x = (g = Z[te]).name, g.resolvedType instanceof N) h[x] = M.enums = String ? g.resolvedType.valuesById[g.typeDefault] : g.typeDefault;
              else if (g.long) if (b.Long) {
                var G = new b.Long(g.typeDefault.low, g.typeDefault.high, g.typeDefault.unsigned);
                h[x] = M.longs === String ? G.toString() : M.longs === Number ? G.toNumber() : G;
              } else h[x] = M.longs === String ? g.typeDefault.toString() : g.typeDefault.toNumber();
              else g.bytes ? h[x] = M.bytes === String ? String.fromCharCode.apply(String, g.typeDefault) : Array.prototype.slice.call(g.typeDefault).join("*..*").split("*..*") : h[x] = g.typeDefault;
              for (te = 0; te < l.length; ++te) {
                x = (g = l[te]).name;
                var q, ee, ne = C._fieldsArray.indexOf(g);
                if (g.map) {
                  if (B[x] && (q = Object.keys(B[x]).length)) for (h[x] = {}, ee = 0; ee < q.length; ++ee) S(g, ne, x, b.merge(b.copy(P), { m: B, d: h, ksi: q[ee], o: M }));
                } else if (g.repeated) {
                  if (B[x] && B[x].length) for (h[x] = [], ee = 0; ee < B[x].length; ++ee) S(g, ne, x, b.merge(b.copy(P), { m: B, d: h, ksi: ee, o: M }));
                } else B[x] != null && B.hasOwnProperty(x) && S(g, ne, x, b.merge(b.copy(P), { m: B, d: h, o: M })), g.partOf && M.oneofs && (h[g.partOf.name] = x);
              }
              return h;
            } : function() {
              return {};
            };
          };
        };
      }, 801: function(_, I, O) {
        var N, b, R;
        function A(C) {
          return "missing required '" + C.name + "'";
        }
        function S(C) {
          return function(l) {
            var P = l.Reader, B = l.types, M = l.util;
            return function(g, x) {
              g instanceof P || (g = P.create(g));
              for (var h, U = x === void 0 ? g.len : g.pos + x, W = new this.ctor(); g.pos < U; ) {
                var Z = g.uint32();
                if (C.group && (7 & Z) == 4) break;
                for (var te = Z >>> 3, G = 0, q = !1; G < C.fieldsArray.length; ++G) {
                  var ee = C._fieldsArray[G].resolve(), ne = ee.name, z = ee.resolvedType instanceof N ? "int32" : ee.type;
                  if (te == ee.id) {
                    if (q = !0, ee.map) g.skip().pos++, W[ne] === M.emptyObject && (W[ne] = {}), h = g[ee.keyType](), g.pos++, b.long[ee.keyType] != null ? b.basic[z] == null ? W[ne][typeof h == "object" ? M.longToHash(h) : h] = B[G].decode(g, g.uint32()) : W[ne][typeof h == "object" ? M.longToHash(h) : h] = g[z]() : b.basic[z] == null ? W[ne] = B[G].decode(g, g.uint32()) : W[ne] = g[z]();
                    else if (ee.repeated) if (W[ne] && W[ne].length || (W[ne] = []), b.packed[z] != null && (7 & Z) == 2) for (var y = g.uint32() + g.pos; g.pos < y; ) W[ne].push(g[z]());
                    else b.basic[z] == null ? ee.resolvedType.group ? W[ne].push(B[G].decode(g)) : W[ne].push(B[G].decode(g, g.uint32())) : W[ne].push(g[z]());
                    else b.basic[z] == null ? ee.resolvedType.group ? W[ne] = B[G].decode(g) : W[ne] = B[G].decode(g, g.uint32()) : W[ne] = g[z]();
                    break;
                  }
                }
                q || (console.log("t", Z), g.skipType(7 & Z));
              }
              for (G = 0; G < C._fieldsArray.length; ++G) {
                var J = C._fieldsArray[G];
                if (J.required && !W.hasOwnProperty(J.name)) throw R.ProtocolError(A(J), { instance: W });
              }
              return W;
            };
          };
        }
        _.exports = S, S._configure = function() {
          N = O(660), b = O(452), R = O(629);
        };
      }, 229: function(_, I, O) {
        var N, b;
        function R(A) {
          return function(S) {
            var C = S.Writer, l = S.types, P = S.util;
            return function(B, M) {
              M = M || C.create();
              for (var g = A.fieldsArray.slice().sort(P.compareFieldsById), x = 0; x < g.length; x++) {
                var h = g[x], U = A._fieldsArray.indexOf(h), W = h.resolvedType instanceof N ? "uint32" : h.type, Z = b.basic[W], te = B[h.name];
                if (h.resolvedType instanceof N && typeof te == "string" && (te = l[U].values[te]), h.map) {
                  if (te != null && B.hasOwnProperty(h.name)) for (var G = Object.keys(te), q = 0; q < G.length; ++q) M.uint32((h.id << 3 | 2) >>> 0).fork().uint32(8 | b.mapKey[h.keyType])[h.keyType](G[q]), Z === void 0 ? l[U].encode(te[G[q]], M.uint32(18).fork()).ldelim().ldelim() : M.uint32(16 | Z)[W](te[G[q]]).ldelim();
                } else if (h.repeated) {
                  if (te && te.length) if (h.packed && b.packed[W] !== void 0) {
                    M.uint32((h.id << 3 | 2) >>> 0).fork();
                    for (var ee = 0; ee < te.length; ee++) M[W](te[ee]);
                    M.ldelim();
                  } else for (var ne = 0; ne < te.length; ne++) Z === void 0 ? h.resolvedType.group ? l[U].encode(te[ne], M.uint32((h.id << 3 | 3) >>> 0)).uint32((h.id << 3 | 4) >>> 0) : l[U].encode(te[ne], M.uint32((h.id << 3 | 2) >>> 0).fork()).ldelim() : M.uint32((h.id << 3 | Z) >>> 0)[W](te[ne]);
                } else (!h.optional || te != null && B.hasOwnProperty(h.name)) && (h.optional || te != null && B.hasOwnProperty(h.name) || console.warn("注意啦!!!很大概率会报错 类型:", B.$type ? B.$type.name : "不晓得", "没有设置对应的属性:", h.name, "检查是不是proto文件属性设置为了required"), Z === void 0 ? h.resolvedType.group ? l[U].encode(te, M.uint32((h.id << 3 | 3) >>> 0)).uint32((h.id << 3 | 4) >>> 0) : l[U].encode(te, M.uint32((h.id << 3 | 2) >>> 0).fork()).ldelim() : M.uint32((h.id << 3 | Z) >>> 0)[W](te));
              }
              return M;
            };
          };
        }
        _.exports = R, R._configure = function() {
          N = O(660), b = O(452);
        };
      }, 660: function(_, I, O) {
        _.exports = R;
        var N = O(558);
        ((R.prototype = Object.create(N.prototype)).constructor = R).className = "Enum";
        var b = O(694);
        function R(A, S, C, l, P) {
          if (N.call(this, A, C), S && typeof S != "object") throw TypeError("values must be an object");
          if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = l, this.comments = P || {}, this.reserved = void 0, S) for (var B = Object.keys(S), M = 0; M < B.length; ++M) typeof S[B[M]] == "number" && (this.valuesById[this.values[B[M]] = S[B[M]]] = B[M]);
        }
        R.fromJSON = function(A, S) {
          var C = new R(A, S.values, S.options, S.comment, S.comments);
          return C.reserved = S.reserved, C;
        }, R.prototype.toJSON = function(A) {
          var S = !!A && !!A.keepComments;
          return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", S ? this.comment : void 0, "comments", S ? this.comments : void 0]);
        }, R.prototype.add = function(A, S, C) {
          if (!util.isString(A)) throw TypeError("name must be a string");
          if (!util.isInteger(S)) throw TypeError("id must be an integer");
          if (this.values[A] !== void 0) throw Error("duplicate name '" + A + "' in " + this);
          if (this.isReservedId(S)) throw Error("id " + S + " is reserved in " + this);
          if (this.isReservedName(A)) throw Error("name '" + A + "' is reserved in " + this);
          if (this.valuesById[S] !== void 0) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + S + " in " + this);
            this.values[A] = S;
          } else this.valuesById[this.values[A] = S] = A;
          return this.comments[A] = C || null, this;
        }, R.prototype.remove = function(A) {
          if (!util.isString(A)) throw TypeError("name must be a string");
          var S = this.values[A];
          if (S == null) throw Error("name '" + A + "' does not exist in " + this);
          return delete this.valuesById[S], delete this.values[A], delete this.comments[A], this;
        }, R.prototype.isReservedId = function(A) {
          return b.isReservedId(this.reserved, A);
        }, R.prototype.isReservedName = function(A) {
          return b.isReservedName(this.reserved, A);
        };
      }, 101: function(_, I, O) {
        _.exports = l;
        var N, b, R, A, S = O(558);
        ((l.prototype = Object.create(S.prototype)).constructor = l).className = "Field";
        var C = /^required|optional|repeated$/;
        function l(P, B, M, g, x, h, U) {
          if (R.isObject(g) ? (U = x, h = g, g = x = void 0) : R.isObject(x) && (U = h, h = x, x = void 0), S.call(this, P, h), !R.isInteger(B) || B < 0) throw TypeError("id must be a non-negative integer");
          if (!R.isString(M)) throw TypeError("type must be a string");
          if (g !== void 0 && !C.test(g = g.toString().toLowerCase())) throw TypeError("rule must be a string rule");
          if (x !== void 0 && !R.isString(x)) throw TypeError("extend must be a string");
          this.rule = g && g !== "optional" ? g : void 0, this.type = M, this.id = B, this.extend = x || void 0, this.required = g === "required", this.optional = !this.required, this.repeated = g === "repeated", this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!R.Long && b.long[M] !== void 0, this.bytes = M === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = U;
        }
        l.fromJSON = function(P, B) {
          return new l(P, B.id, B.type, B.rule, B.extend, B.options, B.comment);
        }, Object.defineProperty(l.prototype, "packed", { get: function() {
          return this._packed === null && (this._packed = this.getOption("packed") !== !1), this._packed;
        } }), l.prototype.setOption = function(P, B, M) {
          return P === "packed" && (this._packed = null), S.prototype.setOption.call(this, P, B, M);
        }, l.prototype.toJSON = function(P) {
          var B = !!P && !!P.keepComments;
          return R.toObject(["rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", B ? this.comment : void 0]);
        }, l.prototype.resolve = function() {
          if (this.resolved) return this;
          if ((this.typeDefault = b.defaults[this.type]) === void 0 && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof A ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && this.options.default != null && (this.typeDefault = this.options.default, this.resolvedType instanceof N && typeof this.typeDefault == "string" && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (this.options.packed !== !0 && (this.options.packed === void 0 || !this.resolvedType || this.resolvedType instanceof N) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = R.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze && Object.freeze(this.typeDefault);
          else if (this.bytes && typeof this.typeDefault == "string") {
            var P;
            R.utf8.write(this.typeDefault, P = R.newBuffer(R.utf8.length(this.typeDefault)), 0), this.typeDefault = P;
          }
          return this.map ? this.defaultValue = R.emptyObject : this.repeated ? this.defaultValue = R.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof A && (this.parent.ctor.prototype[this.name] = this.defaultValue), S.prototype.resolve.call(this);
        }, l.d = function(P, B, M, g) {
          return typeof B == "function" ? B = R.decorateType(B).name : B && typeof B == "object" && (B = R.decorateEnum(B).name), function(x, h) {
            R.decorateType(x.constructor).add(new l(h, P, B, M, { default: g }));
          };
        }, l._configure = function() {
          A = O(465), N = O(660), b = O(452), R = O(629);
        };
      }, 899: function(_) {
        function I(A) {
          return typeof Float32Array < "u" ? function() {
            var S = new Float32Array([-0]), C = new Uint8Array(S.buffer), l = C[3] === 128;
            function P(x, h, U) {
              S[0] = x, h[U] = C[0], h[U + 1] = C[1], h[U + 2] = C[2], h[U + 3] = C[3];
            }
            function B(x, h, U) {
              S[0] = x, h[U] = C[3], h[U + 1] = C[2], h[U + 2] = C[1], h[U + 3] = C[0];
            }
            function M(x, h) {
              return C[0] = x[h], C[1] = x[h + 1], C[2] = x[h + 2], C[3] = x[h + 3], S[0];
            }
            function g(x, h) {
              return C[3] = x[h], C[2] = x[h + 1], C[1] = x[h + 2], C[0] = x[h + 3], S[0];
            }
            A.writeFloatLE = l ? P : B, A.writeFloatBE = l ? B : P, A.readFloatLE = l ? M : g, A.readFloatBE = l ? g : M;
          }() : function() {
            function S(l, P, B, M) {
              var g = P < 0 ? 1 : 0;
              if (g && (P = -P), P === 0) l(1 / P > 0 ? 0 : 2147483648, B, M);
              else if (isNaN(P)) l(2143289344, B, M);
              else if (P > 34028234663852886e22) l((g << 31 | 2139095040) >>> 0, B, M);
              else if (P < 11754943508222875e-54) l((g << 31 | Math.round(P / 1401298464324817e-60)) >>> 0, B, M);
              else {
                var x = Math.floor(Math.log(P) / Math.LN2);
                l((g << 31 | x + 127 << 23 | 8388607 & Math.round(P * Math.pow(2, -x) * 8388608)) >>> 0, B, M);
              }
            }
            function C(l, P, B) {
              var M = l(P, B), g = 2 * (M >> 31) + 1, x = M >>> 23 & 255, h = 8388607 & M;
              return x === 255 ? h ? NaN : g * (1 / 0) : x === 0 ? 1401298464324817e-60 * g * h : g * Math.pow(2, x - 150) * (h + 8388608);
            }
            A.writeFloatLE = S.bind(null, O), A.writeFloatBE = S.bind(null, N), A.readFloatLE = C.bind(null, b), A.readFloatBE = C.bind(null, R);
          }(), typeof Float64Array < "u" ? function() {
            var S = new Float64Array([-0]), C = new Uint8Array(S.buffer), l = C[7] === 128;
            function P(x, h, U) {
              S[0] = x, h[U] = C[0], h[U + 1] = C[1], h[U + 2] = C[2], h[U + 3] = C[3], h[U + 4] = C[4], h[U + 5] = C[5], h[U + 6] = C[6], h[U + 7] = C[7];
            }
            function B(x, h, U) {
              S[0] = x, h[U] = C[7], h[U + 1] = C[6], h[U + 2] = C[5], h[U + 3] = C[4], h[U + 4] = C[3], h[U + 5] = C[2], h[U + 6] = C[1], h[U + 7] = C[0];
            }
            function M(x, h) {
              return C[0] = x[h], C[1] = x[h + 1], C[2] = x[h + 2], C[3] = x[h + 3], C[4] = x[h + 4], C[5] = x[h + 5], C[6] = x[h + 6], C[7] = x[h + 7], S[0];
            }
            function g(x, h) {
              return C[7] = x[h], C[6] = x[h + 1], C[5] = x[h + 2], C[4] = x[h + 3], C[3] = x[h + 4], C[2] = x[h + 5], C[1] = x[h + 6], C[0] = x[h + 7], S[0];
            }
            A.writeDoubleLE = l ? P : B, A.writeDoubleBE = l ? B : P, A.readDoubleLE = l ? M : g, A.readDoubleBE = l ? g : M;
          }() : function() {
            function S(l, P, B, M, g, x) {
              var h = M < 0 ? 1 : 0;
              if (h && (M = -M), M === 0) l(0, g, x + P), l(1 / M > 0 ? 0 : 2147483648, g, x + B);
              else if (isNaN(M)) l(0, g, x + P), l(2146959360, g, x + B);
              else if (M > 17976931348623157e292) l(0, g, x + P), l((h << 31 | 2146435072) >>> 0, g, x + B);
              else {
                var U;
                if (M < 22250738585072014e-324) l((U = M / 5e-324) >>> 0, g, x + P), l((h << 31 | U / 4294967296) >>> 0, g, x + B);
                else {
                  var W = Math.floor(Math.log(M) / Math.LN2);
                  W === 1024 && (W = 1023), l(4503599627370496 * (U = M * Math.pow(2, -W)) >>> 0, g, x + P), l((h << 31 | W + 1023 << 20 | 1048576 * U & 1048575) >>> 0, g, x + B);
                }
              }
            }
            function C(l, P, B, M, g) {
              var x = l(M, g + P), h = l(M, g + B), U = 2 * (h >> 31) + 1, W = h >>> 20 & 2047, Z = 4294967296 * (1048575 & h) + x;
              return W === 2047 ? Z ? NaN : U * (1 / 0) : W === 0 ? 5e-324 * U * Z : U * Math.pow(2, W - 1075) * (Z + 4503599627370496);
            }
            A.writeDoubleLE = S.bind(null, O, 0, 4), A.writeDoubleBE = S.bind(null, N, 4, 0), A.readDoubleLE = C.bind(null, b, 0, 4), A.readDoubleBE = C.bind(null, R, 4, 0);
          }(), A;
        }
        function O(A, S, C) {
          S[C] = 255 & A, S[C + 1] = A >>> 8 & 255, S[C + 2] = A >>> 16 & 255, S[C + 3] = A >>> 24;
        }
        function N(A, S, C) {
          S[C] = A >>> 24, S[C + 1] = A >>> 16 & 255, S[C + 2] = A >>> 8 & 255, S[C + 3] = 255 & A;
        }
        function b(A, S) {
          return (A[S] | A[S + 1] << 8 | A[S + 2] << 16 | A[S + 3] << 24) >>> 0;
        }
        function R(A, S) {
          return (A[S] << 24 | A[S + 1] << 16 | A[S + 2] << 8 | A[S + 3]) >>> 0;
        }
        _.exports = I(I);
      }, 879: function(_) {
        _.exports = O;
        var I = null;
        try {
          I = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch {
        }
        function O(y, J, j) {
          this.low = 0 | y, this.high = 0 | J, this.unsigned = !!j;
        }
        function N(y) {
          return (y && y.__isLong__) === !0;
        }
        O.prototype.__isLong__, Object.defineProperty(O.prototype, "__isLong__", { value: !0 }), O.isLong = N;
        var b = {}, R = {};
        function A(y, J) {
          var j, K, Q;
          return J ? (Q = 0 <= (y >>>= 0) && y < 256) && (K = R[y]) ? K : (j = C(y, (0 | y) < 0 ? -1 : 0, !0), Q && (R[y] = j), j) : (Q = -128 <= (y |= 0) && y < 128) && (K = b[y]) ? K : (j = C(y, y < 0 ? -1 : 0, !1), Q && (b[y] = j), j);
        }
        function S(y, J) {
          if (isNaN(y)) return J ? W : U;
          if (J) {
            if (y < 0) return W;
            if (y >= g) return ee;
          } else {
            if (y <= -x) return ne;
            if (y + 1 >= x) return q;
          }
          return y < 0 ? S(-y, J).neg() : C(y % M | 0, y / M | 0, J);
        }
        function C(y, J, j) {
          return new O(y, J, j);
        }
        O.fromInt = A, O.fromNumber = S, O.fromBits = C;
        var l = Math.pow;
        function P(y, J, j) {
          if (y.length === 0) throw Error("empty string");
          if (y === "NaN" || y === "Infinity" || y === "+Infinity" || y === "-Infinity") return U;
          if (typeof J == "number" ? (j = J, J = !1) : J = !!J, (j = j || 10) < 2 || 36 < j) throw RangeError("radix");
          var K;
          if ((K = y.indexOf("-")) > 0) throw Error("interior hyphen");
          if (K === 0) return P(y.substring(1), J, j).neg();
          for (var Q = S(l(j, 8)), se = U, ce = 0; ce < y.length; ce += 8) {
            var fe = Math.min(8, y.length - ce), me = parseInt(y.substring(ce, ce + fe), j);
            if (fe < 8) {
              var de = S(l(j, fe));
              se = se.mul(de).add(S(me));
            } else se = (se = se.mul(Q)).add(S(me));
          }
          return se.unsigned = J, se;
        }
        function B(y, J) {
          return typeof y == "number" ? S(y, J) : typeof y == "string" ? P(y, J) : C(y.low, y.high, typeof J == "boolean" ? J : y.unsigned);
        }
        O.fromString = P, O.fromValue = B;
        var M = 4294967296, g = M * M, x = g / 2, h = A(1 << 24), U = A(0);
        O.ZERO = U;
        var W = A(0, !0);
        O.UZERO = W;
        var Z = A(1);
        O.ONE = Z;
        var te = A(1, !0);
        O.UONE = te;
        var G = A(-1);
        O.NEG_ONE = G;
        var q = C(-1, 2147483647, !1);
        O.MAX_VALUE = q;
        var ee = C(-1, -1, !0);
        O.MAX_UNSIGNED_VALUE = ee;
        var ne = C(0, -2147483648, !1);
        O.MIN_VALUE = ne;
        var z = O.prototype;
        z.toInt = function() {
          return this.unsigned ? this.low >>> 0 : this.low;
        }, z.toNumber = function() {
          return this.unsigned ? (this.high >>> 0) * M + (this.low >>> 0) : this.high * M + (this.low >>> 0);
        }, z.toString = function(y) {
          if ((y = y || 10) < 2 || 36 < y) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(ne)) {
              var J = S(y), j = this.div(J), K = j.mul(J).sub(this);
              return j.toString(y) + K.toInt().toString(y);
            }
            return "-" + this.neg().toString(y);
          }
          for (var Q = S(l(y, 6), this.unsigned), se = this, ce = ""; ; ) {
            var fe = se.div(Q), me = (se.sub(fe.mul(Q)).toInt() >>> 0).toString(y);
            if ((se = fe).isZero()) return me + ce;
            for (; me.length < 6; ) me = "0" + me;
            ce = "" + me + ce;
          }
        }, z.getHighBits = function() {
          return this.high;
        }, z.getHighBitsUnsigned = function() {
          return this.high >>> 0;
        }, z.getLowBits = function() {
          return this.low;
        }, z.getLowBitsUnsigned = function() {
          return this.low >>> 0;
        }, z.getNumBitsAbs = function() {
          if (this.isNegative()) return this.eq(ne) ? 64 : this.neg().getNumBitsAbs();
          for (var y = this.high != 0 ? this.high : this.low, J = 31; J > 0 && !(y & 1 << J); J--) ;
          return this.high != 0 ? J + 33 : J + 1;
        }, z.isZero = function() {
          return this.high === 0 && this.low === 0;
        }, z.eqz = z.isZero, z.isNegative = function() {
          return !this.unsigned && this.high < 0;
        }, z.isPositive = function() {
          return this.unsigned || this.high >= 0;
        }, z.isOdd = function() {
          return !(1 & ~this.low);
        }, z.isEven = function() {
          return !(1 & this.low);
        }, z.equals = function(y) {
          return N(y) || (y = B(y)), (this.unsigned === y.unsigned || this.high >>> 31 != 1 || y.high >>> 31 != 1) && this.high === y.high && this.low === y.low;
        }, z.eq = z.equals, z.notEquals = function(y) {
          return !this.eq(y);
        }, z.neq = z.notEquals, z.ne = z.notEquals, z.lessThan = function(y) {
          return this.comp(y) < 0;
        }, z.lt = z.lessThan, z.lessThanOrEqual = function(y) {
          return this.comp(y) <= 0;
        }, z.lte = z.lessThanOrEqual, z.le = z.lessThanOrEqual, z.greaterThan = function(y) {
          return this.comp(y) > 0;
        }, z.gt = z.greaterThan, z.greaterThanOrEqual = function(y) {
          return this.comp(y) >= 0;
        }, z.gte = z.greaterThanOrEqual, z.ge = z.greaterThanOrEqual, z.compare = function(y) {
          if (N(y) || (y = B(y)), this.eq(y)) return 0;
          var J = this.isNegative(), j = y.isNegative();
          return J && !j ? -1 : !J && j ? 1 : this.unsigned ? y.high >>> 0 > this.high >>> 0 || y.high === this.high && y.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(y).isNegative() ? -1 : 1;
        }, z.comp = z.compare, z.negate = function() {
          return !this.unsigned && this.eq(ne) ? ne : this.not().add(Z);
        }, z.neg = z.negate, z.add = function(y) {
          N(y) || (y = B(y));
          var J = this.high >>> 16, j = 65535 & this.high, K = this.low >>> 16, Q = 65535 & this.low, se = y.high >>> 16, ce = 65535 & y.high, fe = y.low >>> 16, me = 0, de = 0, Ee = 0, Re = 0;
          return Ee += (Re += Q + (65535 & y.low)) >>> 16, de += (Ee += K + fe) >>> 16, me += (de += j + ce) >>> 16, me += J + se, C((Ee &= 65535) << 16 | (Re &= 65535), (me &= 65535) << 16 | (de &= 65535), this.unsigned);
        }, z.subtract = function(y) {
          return N(y) || (y = B(y)), this.add(y.neg());
        }, z.sub = z.subtract, z.multiply = function(y) {
          if (this.isZero()) return U;
          if (N(y) || (y = B(y)), I) return C(I.mul(this.low, this.high, y.low, y.high), I.get_high(), this.unsigned);
          if (y.isZero()) return U;
          if (this.eq(ne)) return y.isOdd() ? ne : U;
          if (y.eq(ne)) return this.isOdd() ? ne : U;
          if (this.isNegative()) return y.isNegative() ? this.neg().mul(y.neg()) : this.neg().mul(y).neg();
          if (y.isNegative()) return this.mul(y.neg()).neg();
          if (this.lt(h) && y.lt(h)) return S(this.toNumber() * y.toNumber(), this.unsigned);
          var J = this.high >>> 16, j = 65535 & this.high, K = this.low >>> 16, Q = 65535 & this.low, se = y.high >>> 16, ce = 65535 & y.high, fe = y.low >>> 16, me = 65535 & y.low, de = 0, Ee = 0, Re = 0, L = 0;
          return Re += (L += Q * me) >>> 16, Ee += (Re += K * me) >>> 16, Re &= 65535, Ee += (Re += Q * fe) >>> 16, de += (Ee += j * me) >>> 16, Ee &= 65535, de += (Ee += K * fe) >>> 16, Ee &= 65535, de += (Ee += Q * ce) >>> 16, de += J * me + j * fe + K * ce + Q * se, C((Re &= 65535) << 16 | (L &= 65535), (de &= 65535) << 16 | (Ee &= 65535), this.unsigned);
        }, z.mul = z.multiply, z.divide = function(y) {
          if (N(y) || (y = B(y)), y.isZero()) throw Error("division by zero");
          var J, j, K;
          if (I) return this.unsigned || this.high !== -2147483648 || y.low !== -1 || y.high !== -1 ? C((this.unsigned ? I.div_u : I.div_s)(this.low, this.high, y.low, y.high), I.get_high(), this.unsigned) : this;
          if (this.isZero()) return this.unsigned ? W : U;
          if (this.unsigned) {
            if (y.unsigned || (y = y.toUnsigned()), y.gt(this)) return W;
            if (y.gt(this.shru(1))) return te;
            K = W;
          } else {
            if (this.eq(ne)) return y.eq(Z) || y.eq(G) ? ne : y.eq(ne) ? Z : (J = this.shr(1).div(y).shl(1)).eq(U) ? y.isNegative() ? Z : G : (j = this.sub(y.mul(J)), K = J.add(j.div(y)));
            if (y.eq(ne)) return this.unsigned ? W : U;
            if (this.isNegative()) return y.isNegative() ? this.neg().div(y.neg()) : this.neg().div(y).neg();
            if (y.isNegative()) return this.div(y.neg()).neg();
            K = U;
          }
          for (j = this; j.gte(y); ) {
            J = Math.max(1, Math.floor(j.toNumber() / y.toNumber()));
            for (var Q = Math.ceil(Math.log(J) / Math.LN2), se = Q <= 48 ? 1 : l(2, Q - 48), ce = S(J), fe = ce.mul(y); fe.isNegative() || fe.gt(j); ) fe = (ce = S(J -= se, this.unsigned)).mul(y);
            ce.isZero() && (ce = Z), K = K.add(ce), j = j.sub(fe);
          }
          return K;
        }, z.div = z.divide, z.modulo = function(y) {
          return N(y) || (y = B(y)), I ? C((this.unsigned ? I.rem_u : I.rem_s)(this.low, this.high, y.low, y.high), I.get_high(), this.unsigned) : this.sub(this.div(y).mul(y));
        }, z.mod = z.modulo, z.rem = z.modulo, z.not = function() {
          return C(~this.low, ~this.high, this.unsigned);
        }, z.and = function(y) {
          return N(y) || (y = B(y)), C(this.low & y.low, this.high & y.high, this.unsigned);
        }, z.or = function(y) {
          return N(y) || (y = B(y)), C(this.low | y.low, this.high | y.high, this.unsigned);
        }, z.xor = function(y) {
          return N(y) || (y = B(y)), C(this.low ^ y.low, this.high ^ y.high, this.unsigned);
        }, z.shiftLeft = function(y) {
          return N(y) && (y = y.toInt()), (y &= 63) == 0 ? this : y < 32 ? C(this.low << y, this.high << y | this.low >>> 32 - y, this.unsigned) : C(0, this.low << y - 32, this.unsigned);
        }, z.shl = z.shiftLeft, z.shiftRight = function(y) {
          return N(y) && (y = y.toInt()), (y &= 63) == 0 ? this : y < 32 ? C(this.low >>> y | this.high << 32 - y, this.high >> y, this.unsigned) : C(this.high >> y - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        }, z.shr = z.shiftRight, z.shiftRightUnsigned = function(y) {
          if (N(y) && (y = y.toInt()), (y &= 63) == 0) return this;
          var J = this.high;
          return y < 32 ? C(this.low >>> y | J << 32 - y, J >>> y, this.unsigned) : C(y === 32 ? J : J >>> y - 32, 0, this.unsigned);
        }, z.shru = z.shiftRightUnsigned, z.shr_u = z.shiftRightUnsigned, z.toSigned = function() {
          return this.unsigned ? C(this.low, this.high, !1) : this;
        }, z.toUnsigned = function() {
          return this.unsigned ? this : C(this.low, this.high, !0);
        }, z.toBytes = function(y) {
          return y ? this.toBytesLE() : this.toBytesBE();
        }, z.toBytesLE = function() {
          var y = this.high, J = this.low;
          return [255 & J, J >>> 8 & 255, J >>> 16 & 255, J >>> 24, 255 & y, y >>> 8 & 255, y >>> 16 & 255, y >>> 24];
        }, z.toBytesBE = function() {
          var y = this.high, J = this.low;
          return [y >>> 24, y >>> 16 & 255, y >>> 8 & 255, 255 & y, J >>> 24, J >>> 16 & 255, J >>> 8 & 255, 255 & J];
        }, O.fromBytes = function(y, J, j) {
          return j ? O.fromBytesLE(y, J) : O.fromBytesBE(y, J);
        }, O.fromBytesLE = function(y, J) {
          return new O(y[0] | y[1] << 8 | y[2] << 16 | y[3] << 24, y[4] | y[5] << 8 | y[6] << 16 | y[7] << 24, J);
        }, O.fromBytesBE = function(y, J) {
          return new O(y[4] << 24 | y[5] << 16 | y[6] << 8 | y[7], y[0] << 24 | y[1] << 16 | y[2] << 8 | y[3], J);
        };
      }, 183: function(_, I, O) {
        _.exports = b;
        var N = O(629);
        function b(C, l) {
          this.lo = C >>> 0, this.hi = l >>> 0;
        }
        var R = b.zero = new b(0, 0);
        R.toNumber = function() {
          return 0;
        }, R.zzEncode = R.zzDecode = function() {
          return this;
        }, R.length = function() {
          return 1;
        };
        var A = b.zeroHash = "\0\0\0\0\0\0\0\0";
        b.fromNumber = function(C) {
          if (C === 0) return R;
          var l = C < 0;
          l && (C = -C);
          var P = C >>> 0, B = (C - P) / 4294967296 >>> 0;
          return l && (B = ~B >>> 0, P = ~P >>> 0, ++P > 4294967295 && (P = 0, ++B > 4294967295 && (B = 0))), new b(P, B);
        }, b.from = function(C) {
          if (typeof C == "number") return b.fromNumber(C);
          if (typeof C == "string" || C instanceof String) {
            if (!N.Long) return b.fromNumber(parseInt(C, 10));
            C = N.Long.fromString(C);
          }
          return C.low || C.high ? new b(C.low >>> 0, C.high >>> 0) : R;
        }, b.prototype.toNumber = function(C) {
          if (!C && this.hi >>> 31) {
            var l = 1 + ~this.lo >>> 0, P = ~this.hi >>> 0;
            return l || (P = P + 1 >>> 0), -(l + 4294967296 * P);
          }
          return this.lo + 4294967296 * this.hi;
        }, b.prototype.toLong = function(C) {
          return N.Long ? new N.Long(0 | this.lo, 0 | this.hi, !!C) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!C };
        };
        var S = String.prototype.charCodeAt;
        b.fromHash = function(C) {
          return C === A ? R : new b((S.call(C, 0) | S.call(C, 1) << 8 | S.call(C, 2) << 16 | S.call(C, 3) << 24) >>> 0, (S.call(C, 4) | S.call(C, 5) << 8 | S.call(C, 6) << 16 | S.call(C, 7) << 24) >>> 0);
        }, b.prototype.toHash = function() {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        }, b.prototype.zzEncode = function() {
          var C = this.hi >> 31;
          return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ C) >>> 0, this.lo = (this.lo << 1 ^ C) >>> 0, this;
        }, b.prototype.zzDecode = function() {
          var C = -(1 & this.lo);
          return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ C) >>> 0, this.hi = (this.hi >>> 1 ^ C) >>> 0, this;
        }, b.prototype.length = function() {
          var C = this.lo, l = (this.lo >>> 28 | this.hi << 4) >>> 0, P = this.hi >>> 24;
          return P === 0 ? l === 0 ? C < 16384 ? C < 128 ? 1 : 2 : C < 2097152 ? 3 : 4 : l < 16384 ? l < 128 ? 5 : 6 : l < 2097152 ? 7 : 8 : P < 128 ? 9 : 10;
        };
      }, 83: function(_, I, O) {
        _.exports = A;
        var N, b, R = O(101);
        function A(S, C, l, P, B, M) {
          if (R.call(this, S, C, P, void 0, void 0, B, M), !b.isString(l)) throw TypeError("keyType must be a string");
          this.keyType = l, this.resolvedKeyType = null, this.map = !0;
        }
        ((A.prototype = Object.create(R.prototype)).constructor = A).className = "MapField", A.fromJSON = function(S, C) {
          return new A(S, C.id, C.keyType, C.type, C.options, C.comment);
        }, A.prototype.toJSON = function(S) {
          var C = !!S && !!S.keepComments;
          return b.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", C ? this.comment : void 0]);
        }, A.prototype.resolve = function() {
          if (this.resolved) return this;
          if (N.mapKey[this.keyType] === void 0) throw Error("invalid key type: " + this.keyType);
          return R.prototype.resolve.call(this);
        }, A.d = function(S, C, l) {
          return typeof l == "function" ? l = b.decorateType(l).name : l && typeof l == "object" && (l = b.decorateEnum(l).name), function(P, B) {
            b.decorateType(P.constructor).add(new A(B, S, C, l));
          };
        }, A._configure = function() {
          N = O(452), b = O(629);
        };
      }, 278: function(_, I, O) {
        var N;
        function b(R) {
          if (R) for (var A = Object.keys(R), S = 0; S < A.length; ++S) this[A[S]] = R[A[S]];
        }
        _.exports = b, b.create = function(R) {
          return this.$type.create(R);
        }, b.encode = function(R, A) {
          return arguments.length ? arguments.length == 1 ? this.$type.encode(arguments[0]) : this.$type.encode(arguments[0], arguments[1]) : this.$type.encode(this);
        }, b.encodeDelimited = function(R, A) {
          return this.$type.encodeDelimited(R, A);
        }, b.decode = function(R) {
          return this.$type.decode(R);
        }, b.decodeDelimited = function(R) {
          return this.$type.decodeDelimited(R);
        }, b.verify = function(R) {
          return this.$type.verify(R);
        }, b.fromObject = function(R) {
          return this.$type.fromObject(R);
        }, b.toObject = function(R, A) {
          return R = R || this, this.$type.toObject(R, A);
        }, b.prototype.toJSON = function() {
          return this.$type.toObject(this, N.toJSONOptions);
        }, b.set = function(R, A) {
          b[R] = A;
        }, b.get = function(R) {
          return b[R];
        }, b._configure = function() {
          N = O(629);
        };
      }, 512: function(_, I, O) {
        _.exports = R;
        var N, b = O(558);
        function R(A, S, C, l, P, B, M, g) {
          if (N.isObject(P) ? (M = P, P = B = void 0) : N.isObject(B) && (M = B, B = void 0), S !== void 0 && !N.isString(S)) throw TypeError("type must be a string");
          if (!N.isString(C)) throw TypeError("requestType must be a string");
          if (!N.isString(l)) throw TypeError("responseType must be a string");
          b.call(this, A, M), this.type = S || "rpc", this.requestType = C, this.requestStream = !!P || void 0, this.responseType = l, this.responseStream = !!B || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = g;
        }
        ((R.prototype = Object.create(b.prototype)).constructor = R).className = "Method", R.fromJSON = function(A, S) {
          return new R(A, S.type, S.requestType, S.responseType, S.requestStream, S.responseStream, S.options, S.comment);
        }, R.prototype.toJSON = function(A) {
          var S = !!A && !!A.keepComments;
          return N.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", S ? this.comment : void 0]);
        }, R.prototype.resolve = function() {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), b.prototype.resolve.call(this));
        }, R._configure = function() {
          N = O(629);
        };
      }, 694: function(_, I, O) {
        _.exports = P;
        var N, b, R, A, S, C = O(558);
        function l(M, g) {
          if (M && M.length) {
            for (var x = {}, h = 0; h < M.length; ++h) x[M[h].name] = M[h].toJSON(g);
            return x;
          }
        }
        function P(M, g) {
          C.call(this, M, g), this.nested = void 0, this._nestedArray = null;
        }
        function B(M) {
          return M._nestedArray = null, M;
        }
        ((P.prototype = Object.create(C.prototype)).constructor = P).className = "Namespace", P.fromJSON = function(M, g) {
          return new P(M, g.options).addJSON(g.nested);
        }, P.arrayToJSON = l, P.isReservedId = function(M, g) {
          if (M) {
            for (var x = 0; x < M.length; ++x) if (typeof M[x] != "string" && M[x][0] <= g && M[x][1] >= g) return !0;
          }
          return !1;
        }, P.isReservedName = function(M, g) {
          if (M) {
            for (var x = 0; x < M.length; ++x) if (M[x] === g) return !0;
          }
          return !1;
        }, Object.defineProperty(P.prototype, "nestedArray", { get: function() {
          return this._nestedArray || (this._nestedArray = R.toArray(this.nested));
        } }), P.prototype.toJSON = function(M) {
          return R.toObject(["options", this.options, "nested", l(this.nestedArray, M)]);
        }, P.prototype.addJSON = function(M) {
          if (M) for (var g, x = Object.keys(M), h = 0; h < x.length; ++h) g = M[x[h]], this.add((g.fields !== void 0 ? A.fromJSON : g.values !== void 0 ? N.fromJSON : g.methods !== void 0 ? S.fromJSON : g.id !== void 0 ? b.fromJSON : P.fromJSON)(x[h], g));
          return this;
        }, P.prototype.get = function(M) {
          return this.nested && this.nested[M] || null;
        }, P.prototype.getEnum = function(M) {
          if (this.nested && this.nested[M] instanceof N) return this.nested[M].values;
          throw Error("no such enum: " + M);
        }, P.prototype.add = function(M) {
          if (!(M instanceof b && M.extend !== void 0 || M instanceof A || M instanceof N || M instanceof S || M instanceof P)) throw TypeError("object must be a valid nested object");
          if (this.nested) {
            var g = this.get(M.name);
            if (g) {
              if (!(g instanceof P && M instanceof P) || g instanceof A || g instanceof S) throw Error("duplicate name '" + M.name + "' in " + this);
              for (var x = g.nestedArray, h = 0; h < x.length; ++h) M.add(x[h]);
              this.remove(g), this.nested || (this.nested = {}), M.setOptions(g.options, !0);
            }
          } else this.nested = {};
          return this.nested[M.name] = M, M.onAdd(this), B(this);
        }, P.prototype.remove = function(M) {
          if (!(M instanceof C)) throw TypeError("object must be a ReflectionObject");
          if (M.parent !== this) throw Error(M + " is not a member of " + this);
          return delete this.nested[M.name], Object.keys(this.nested).length || (this.nested = void 0), M.onRemove(this), B(this);
        }, P.prototype.define = function(M, g) {
          if (R.isString(M)) M = M.split(".");
          else if (!Array.isArray(M)) throw TypeError("illegal path");
          if (M && M.length && M[0] === "") throw Error("path must be relative");
          for (var x = this; M.length > 0; ) {
            var h = M.shift();
            if (x.nested && x.nested[h]) {
              if (!((x = x.nested[h]) instanceof P)) throw Error("path conflicts with non-namespace objects");
            } else x.add(x = new P(h));
          }
          return g && x.addJSON(g), x;
        }, P.prototype.resolveAll = function() {
          for (var M = this.nestedArray, g = 0; g < M.length; ) M[g] instanceof P ? M[g++].resolveAll() : M[g++].resolve();
          return this.resolve();
        }, P.prototype.lookup = function(M, g, x) {
          if (typeof g == "boolean" ? (x = g, g = void 0) : g && !Array.isArray(g) && (g = [g]), R.isString(M) && M.length) {
            if (M === ".") return this.root;
            M = M.split(".");
          } else if (!M.length) return this;
          if (M[0] === "") return this.root.lookup(M.slice(1), g);
          var h = this.get(M[0]);
          if (h) {
            if (M.length === 1) {
              if (!g || g.indexOf(h.constructor) > -1) return h;
            } else if (h instanceof P && (h = h.lookup(M.slice(1), g, !0))) return h;
          } else for (var U = 0; U < this.nestedArray.length; ++U) if (this._nestedArray[U] instanceof P && (h = this._nestedArray[U].lookup(M, g, !0))) return h;
          return this.parent === null || x ? null : this.parent.lookup(M, g);
        }, P.prototype.lookupType = function(M) {
          var g = this.lookup(M, [A]);
          if (!g) throw Error("no such type: " + M);
          return g;
        }, P.prototype.lookupEnum = function(M) {
          var g = this.lookup(M, [N]);
          if (!g) throw Error("no such Enum '" + M + "' in " + this);
          return g;
        }, P.prototype.lookupTypeOrEnum = function(M) {
          var g = this.lookup(M, [A, N]);
          if (!g) throw Error("no such Type or Enum '" + M + "' in " + this);
          return g;
        }, P.prototype.lookupService = function(M) {
          var g = this.lookup(M, [S]);
          if (!g) throw Error("no such Service '" + M + "' in " + this);
          return g;
        }, P._configure = function() {
          N = O(660), b = O(101), R = O(629), A = O(465), S = O(177);
        };
      }, 558: function(_, I, O) {
        var N, b;
        function R(A, S) {
          if (!N.isString(A)) throw TypeError("name must be a string");
          if (S && !N.isObject(S)) throw TypeError("options must be an object");
          this.options = S, this.name = A, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null;
        }
        _.exports = R, R.className = "ReflectionObject", Object.defineProperties(R.prototype, { root: { get: function() {
          for (var A = this; A.parent !== null; ) A = A.parent;
          return A;
        } }, fullName: { get: function() {
          for (var A = [this.name], S = this.parent; S; ) A.unshift(S.name), S = S.parent;
          return A.join(".");
        } } }), R.prototype.toJSON = function() {
          throw Error();
        }, R.prototype.onAdd = function(A) {
          this.parent && this.parent !== A && this.parent.remove(this), this.parent = A, this.resolved = !1;
          var S = A.root;
          S instanceof b && S._handleAdd(this);
        }, R.prototype.onRemove = function(A) {
          var S = A.root;
          S instanceof b && S._handleRemove(this), this.parent = null, this.resolved = !1;
        }, R.prototype.resolve = function() {
          return this.resolved || this.root instanceof b && (this.resolved = !0), this;
        }, R.prototype.getOption = function(A) {
          if (this.options) return this.options[A];
        }, R.prototype.setOption = function(A, S, C) {
          return C && this.options && this.options[A] !== void 0 || ((this.options || (this.options = {}))[A] = S), this;
        }, R.prototype.setOptions = function(A, S) {
          if (A) for (var C = Object.keys(A), l = 0; l < C.length; ++l) this.setOption(C[l], A[C[l]], S);
          return this;
        }, R.prototype.toString = function() {
          var A = this.constructor.className, S = this.fullName;
          return S.length ? A + " " + S : A;
        }, R._configure = function(A) {
          b = O(773), N = O(629);
        };
      }, 220: function(_, I, O) {
        _.exports = A;
        var N, b, R = O(558);
        function A(C, l, P, B) {
          if (Array.isArray(l) || (P = l, l = void 0), R.call(this, C, P), l !== void 0 && !Array.isArray(l)) throw TypeError("fieldNames must be an Array");
          this.oneof = l || [], this.fieldsArray = [], this.comment = B;
        }
        function S(C) {
          if (C.parent) for (var l = 0; l < C.fieldsArray.length; ++l) C.fieldsArray[l].parent || C.parent.add(C.fieldsArray[l]);
        }
        ((A.prototype = Object.create(R.prototype)).constructor = A).className = "OneOf", A.fromJSON = function(C, l) {
          return new A(C, l.oneof, l.options, l.comment);
        }, A.prototype.toJSON = function(C) {
          var l = !!C && !!C.keepComments;
          return b.toObject(["options", this.options, "oneof", this.oneof, "comment", l ? this.comment : void 0]);
        }, A.prototype.add = function(C) {
          if (!(C instanceof N)) throw TypeError("field must be a Field");
          return C.parent && C.parent !== this.parent && C.parent.remove(C), this.oneof.push(C.name), this.fieldsArray.push(C), C.partOf = this, S(this), this;
        }, A.prototype.remove = function(C) {
          if (!(C instanceof N)) throw TypeError("field must be a Field");
          var l = this.fieldsArray.indexOf(C);
          if (l < 0) throw Error(C + " is not a member of " + this);
          return this.fieldsArray.splice(l, 1), (l = this.oneof.indexOf(C.name)) > -1 && this.oneof.splice(l, 1), C.partOf = null, this;
        }, A.prototype.onAdd = function(C) {
          R.prototype.onAdd.call(this, C);
          for (var l = 0; l < this.oneof.length; ++l) {
            var P = C.get(this.oneof[l]);
            P && !P.partOf && (P.partOf = this, this.fieldsArray.push(P));
          }
          S(this);
        }, A.prototype.onRemove = function(C) {
          for (var l, P = 0; P < this.fieldsArray.length; ++P) (l = this.fieldsArray[P]).parent && l.parent.remove(l);
          R.prototype.onRemove.call(this, C);
        }, A.d = function() {
          for (var C = new Array(arguments.length), l = 0; l < arguments.length; ) C[l] = arguments[l++];
          return function(P, B) {
            b.decorateType(P.constructor).add(new A(B, C)), Object.defineProperty(P, B, { get: b.oneOfGetter(C), set: b.oneOfSetter(C) });
          };
        }, A._configure = function() {
          N = O(101), b = O(629);
        };
      }, 922: function(_, I, O) {
        var N, b, R, A, S, C, l, P, B, M, g;
        _.exports = z, z.filename = null, z.defaults = { keepCase: !1 };
        var x = /^[1-9][0-9]*$/, h = /^-?[1-9][0-9]*$/, U = /^0[x][0-9a-fA-F]+$/, W = /^-?0[x][0-9a-fA-F]+$/, Z = /^0[0-7]+$/, te = /^-?0[0-7]+$/, G = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, q = /^[a-zA-Z_][a-zA-Z_0-9]*$/, ee = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/, ne = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;
        function z(y, J, j) {
          J instanceof b || (j = J, J = new b()), j || (j = z.defaults);
          var K, Q, se, ce, fe, me = N(y, j.alternateCommentMode || !1), de = me.next, Ee = me.push, Re = me.peek, L = me.skip, it = me.cmnt, _t = !0, qt = !1, Pt = J, Zt = j.keepCase ? function(Ce) {
            return Ce;
          } : g.camelCase;
          function xe(Ce, we, Pe) {
            var Be = z.filename;
            return Pe || (z.filename = null), Error("illegal " + (we || "token") + " '" + Ce + "' (" + (Be ? Be + ", " : "") + "line " + me.line + ")");
          }
          function Pr() {
            var Ce, we = [];
            do {
              if ((Ce = de()) !== '"' && Ce !== "'") throw xe(Ce);
              we.push(de()), L(Ce), Ce = Re();
            } while (Ce === '"' || Ce === "'");
            return we.join("");
          }
          function Ao(Ce) {
            var we = de();
            switch (we) {
              case "'":
              case '"':
                return Ee(we), Pr();
              case "true":
              case "TRUE":
                return !0;
              case "false":
              case "FALSE":
                return !1;
            }
            try {
              return function(Pe, Be) {
                var ke = 1;
                switch (Pe.charAt(0) === "-" && (ke = -1, Pe = Pe.substring(1)), Pe) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return ke * (1 / 0);
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (x.test(Pe)) return ke * parseInt(Pe, 10);
                if (U.test(Pe)) return ke * parseInt(Pe, 16);
                if (Z.test(Pe)) return ke * parseInt(Pe, 8);
                if (G.test(Pe)) return ke * parseFloat(Pe);
                throw xe(Pe, "number", !0);
              }(we);
            } catch {
              if (ee.test(we)) return we;
              throw xe(we, "value");
            }
          }
          function Xr(Ce, we) {
            var Pe, Be;
            do
              !we || (Pe = Re()) !== '"' && Pe !== "'" ? Ce.push([Be = pr(de()), L("to", !0) ? pr(de()) : Be]) : Ce.push(Pr());
            while (L(",", !0));
            L(";");
          }
          function pr(Ce, we) {
            switch (Ce) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }
            if (!we && Ce.charAt(0) === "-") throw xe(Ce, "id");
            if (h.test(Ce)) return parseInt(Ce, 10);
            if (W.test(Ce)) return parseInt(Ce, 16);
            if (te.test(Ce)) return parseInt(Ce, 8);
            throw xe(Ce, "id");
          }
          function Ri() {
            if (K !== void 0) throw xe("package");
            if (K = de(), !ee.test(K)) throw xe(K, "name");
            Pt = Pt.define(K), L(";");
          }
          function no() {
            var Ce, we = Re();
            switch (we) {
              case "weak":
                Ce = se || (se = []), de();
                break;
              case "public":
                de();
              default:
                Ce = Q || (Q = []);
            }
            we = Pr(), L(";"), Ce.push(we);
          }
          function kt() {
            if (L("="), ce = Pr(), !(qt = ce === "proto3") && ce !== "proto2") throw xe(ce, "syntax");
            L(";");
          }
          function Vt(Ce, we) {
            switch (we) {
              case "option":
                return sr(Ce, we), L(";"), !0;
              case "message":
                return function(Pe, Be) {
                  if (!q.test(Be = de())) throw xe(Be, "type name");
                  var ke = new R(Be);
                  re(ke, function($e) {
                    if (!Vt(ke, $e)) switch ($e) {
                      case "map":
                        (function(Mt) {
                          L("<");
                          var ve = de();
                          if (M.mapKey[ve] === void 0) throw xe(ve, "type");
                          L(",");
                          var Tt = de();
                          if (!ee.test(Tt)) throw xe(Tt, "type");
                          L(">");
                          var Ot = de();
                          if (!q.test(Ot)) throw xe(Ot, "name");
                          L("=");
                          var Nt = new S(Zt(Ot), pr(de()), ve, Tt);
                          re(Nt, function(Bt) {
                            if (Bt !== "option") throw xe(Bt);
                            sr(Nt, Bt), L(";");
                          }, function() {
                            oo(Nt);
                          }), Mt.add(Nt);
                        })(ke);
                        break;
                      case "required":
                      case "optional":
                      case "repeated":
                        Fr(ke, $e);
                        break;
                      case "oneof":
                        (function(Mt, ve) {
                          if (!q.test(ve = de())) throw xe(ve, "name");
                          var Tt = new C(Zt(ve));
                          re(Tt, function(Ot) {
                            Ot === "option" ? (sr(Tt, Ot), L(";")) : (Ee(Ot), Fr(Tt, "optional"));
                          }), Mt.add(Tt);
                        })(ke, $e);
                        break;
                      case "extensions":
                        Xr(ke.extensions || (ke.extensions = []));
                        break;
                      case "reserved":
                        Xr(ke.reserved || (ke.reserved = []), !0);
                        break;
                      default:
                        if (!qt || !ee.test($e)) throw xe($e);
                        Ee($e), Fr(ke, "optional");
                    }
                  }), Pe.add(ke);
                }(Ce, we), !0;
              case "enum":
                return function(Pe, Be) {
                  if (!q.test(Be = de())) throw xe(Be, "name");
                  var ke = new l(Be);
                  re(ke, function($e) {
                    switch ($e) {
                      case "option":
                        sr(ke, $e), L(";");
                        break;
                      case "reserved":
                        Xr(ke.reserved || (ke.reserved = []), !0);
                        break;
                      default:
                        (function(Mt, ve) {
                          if (!q.test(ve)) throw xe(ve, "name");
                          L("=");
                          var Tt = pr(de(), !0), Ot = {};
                          re(Ot, function(Nt) {
                            if (Nt !== "option") throw xe(Nt);
                            sr(Ot, Nt), L(";");
                          }, function() {
                            oo(Ot);
                          }), Mt.add(ve, Tt, Ot.comment);
                        })(ke, $e);
                    }
                  }), Pe.add(ke);
                }(Ce, we), !0;
              case "service":
                return function(Pe, Be) {
                  if (!q.test(Be = de())) throw xe(Be, "service name");
                  var ke = new P(Be);
                  re(ke, function($e) {
                    if (!Vt(ke, $e)) {
                      if ($e !== "rpc") throw xe($e);
                      (function(Mt, ve) {
                        var Tt = ve;
                        if (!q.test(ve = de())) throw xe(ve, "name");
                        var Ot, Nt, Bt, dr, qe = ve;
                        if (L("("), L("stream", !0) && (Nt = !0), !ee.test(ve = de()) || (Ot = ve, L(")"), L("returns"), L("("), L("stream", !0) && (dr = !0), !ee.test(ve = de()))) throw xe(ve);
                        Bt = ve, L(")");
                        var Yr = new B(qe, Tt, Ot, Bt, Nt, dr);
                        re(Yr, function(io) {
                          if (io !== "option") throw xe(io);
                          sr(Yr, io), L(";");
                        }), Mt.add(Yr);
                      })(ke, $e);
                    }
                  }), Pe.add(ke);
                }(Ce, we), !0;
              case "extend":
                return function(Pe, Be) {
                  if (!ee.test(Be = de())) throw xe(Be, "reference");
                  var ke = Be;
                  re(null, function($e) {
                    switch ($e) {
                      case "required":
                      case "repeated":
                      case "optional":
                        Fr(Pe, $e, ke);
                        break;
                      default:
                        if (!qt || !ee.test($e)) throw xe($e);
                        Ee($e), Fr(Pe, "optional", ke);
                    }
                  });
                }(Ce, we), !0;
            }
            return !1;
          }
          function re(Ce, we, Pe) {
            var Be = me.line;
            if (Ce && (Ce.comment = it(), Ce.filename = z.filename), L("{", !0)) {
              for (var ke; (ke = de()) !== "}"; ) we(ke);
              L(";", !0);
            } else Pe && Pe(), L(";"), Ce && typeof Ce.comment != "string" && (Ce.comment = it(Be));
          }
          function Fr(Ce, we, Pe) {
            var Be = de();
            if (Be !== "group") {
              if (!ee.test(Be)) throw xe(Be, "type");
              var ke = de();
              if (!q.test(ke)) throw xe(ke, "name");
              ke = Zt(ke), L("=");
              var $e = new A(ke, pr(de()), Be, we, Pe);
              re($e, function(Mt) {
                if (Mt !== "option") throw xe(Mt);
                sr($e, Mt), L(";");
              }, function() {
                oo($e);
              }), Ce.add($e), qt || !$e.repeated || M.packed[Be] === void 0 && M.basic[Be] !== void 0 || $e.setOption("packed", !1, !0);
            } else (function(Mt, ve) {
              var Tt = de();
              if (!q.test(Tt)) throw xe(Tt, "name");
              var Ot = g.lcFirst(Tt);
              Tt === Ot && (Tt = g.ucFirst(Tt)), L("=");
              var Nt = pr(de()), Bt = new R(Tt);
              Bt.group = !0;
              var dr = new A(Ot, Nt, Tt, ve);
              dr.filename = z.filename, re(Bt, function(qe) {
                switch (qe) {
                  case "option":
                    sr(Bt, qe), L(";");
                    break;
                  case "required":
                  case "optional":
                  case "repeated":
                    Fr(Bt, qe);
                    break;
                  default:
                    throw xe(qe);
                }
              }), Mt.add(Bt).add(dr);
            })(Ce, we);
          }
          function sr(Ce, we) {
            var Pe = L("(", !0);
            if (!ee.test(we = de())) throw xe(we, "name");
            var Be = we;
            Pe && (L(")"), Be = "(" + Be + ")", we = Re(), ne.test(we) && (Be += we, de())), L("="), Pn(Ce, Be);
          }
          function Pn(Ce, we) {
            if (L("{", !0)) do {
              if (!q.test(fe = de())) throw xe(fe, "name");
              Re() === "{" ? Pn(Ce, we + "." + fe) : (L(":"), Re() === "{" ? Pn(Ce, we + "." + fe) : je(Ce, we + "." + fe, Ao()));
            } while (!L("}", !0));
            else je(Ce, we, Ao());
          }
          function je(Ce, we, Pe) {
            Ce.setOption && Ce.setOption(we, Pe);
          }
          function oo(Ce) {
            if (L("[", !0)) {
              do
                sr(Ce, "option");
              while (L(",", !0));
              L("]");
            }
            return Ce;
          }
          for (; (fe = de()) !== null; ) switch (fe) {
            case "package":
              if (!_t) throw xe(fe);
              Ri();
              break;
            case "import":
              if (!_t) throw xe(fe);
              no();
              break;
            case "syntax":
              if (!_t) throw xe(fe);
              kt();
              break;
            case "option":
              if (!_t) throw xe(fe);
              sr(Pt, fe), L(";");
              break;
            default:
              if (Vt(Pt, fe)) {
                _t = !1;
                continue;
              }
              throw xe(fe);
          }
          return z.filename = null, { package: K, imports: Q, weakImports: se, syntax: ce, root: J };
        }
        z._configure = function() {
          N = O(496), b = O(773), R = O(465), A = O(101), S = O(83), C = O(220), l = O(660), P = O(177), B = O(512), M = O(452), g = O(629);
        };
      }, 814: function(_) {
        var I = _.exports, O = I.isAbsolute = function(b) {
          return /^(?:\/|\w+:)/.test(b);
        }, N = I.normalize = function(b) {
          var R = (b = b.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), A = O(b), S = "";
          A && (S = R.shift() + "/");
          for (var C = 0; C < R.length; ) R[C] === ".." ? C > 0 && R[C - 1] !== ".." ? R.splice(--C, 2) : A ? R.splice(C, 1) : ++C : R[C] === "." ? R.splice(C, 1) : ++C;
          return S + R.join("/");
        };
        I.resolve = function(b, R, A) {
          return A || (R = N(R)), O(R) ? R : (A || (b = N(b)), (b = b.replace(/(?:\/|^)[^/]+$/, "")).length ? N(b + "/" + R) : R);
        };
      }, 627: function(_) {
        _.exports = function(I, O, N) {
          var b = N || 8192, R = b >>> 1, A = null, S = b;
          return function(C) {
            if (C < 1 || C > R) return I(C);
            S + C > b && (A = I(b), S = 0);
            var l = O.call(A, S, S += C);
            return 7 & S && (S = 1 + (7 | S)), l;
          };
        };
      }, 970: function(_, I, O) {
        _.exports = S;
        var N, b, R = O(629);
        function A(g, x) {
          return RangeError("index out of range: " + g.pos + " + " + (x || 1) + " > " + g.len);
        }
        function S(g) {
          this.buf = g, this.pos = 0, this.len = g.length;
        }
        var C, l = typeof Uint8Array < "u" ? function(g) {
          return g instanceof Uint8Array || Array.isArray(g) ? new S(g) : (typeof ArrayBuffer < "u" && g instanceof ArrayBuffer && console.warn(""), new S(new Uint8Array(g)));
        } : function(g) {
          if (Array.isArray(g)) return new S(g);
        };
        function P() {
          var g = new N(0, 0), x = 0;
          if (!(this.len - this.pos > 4)) {
            for (; x < 3; ++x) {
              if (this.pos >= this.len) throw A(this);
              if (g.lo = (g.lo | (127 & this.buf[this.pos]) << 7 * x) >>> 0, this.buf[this.pos++] < 128) return g;
            }
            return g.lo = (g.lo | (127 & this.buf[this.pos++]) << 7 * x) >>> 0, g;
          }
          for (; x < 4; ++x) if (g.lo = (g.lo | (127 & this.buf[this.pos]) << 7 * x) >>> 0, this.buf[this.pos++] < 128) return g;
          if (g.lo = (g.lo | (127 & this.buf[this.pos]) << 28) >>> 0, g.hi = (g.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return g;
          if (x = 0, this.len - this.pos > 4) {
            for (; x < 5; ++x) if (g.hi = (g.hi | (127 & this.buf[this.pos]) << 7 * x + 3) >>> 0, this.buf[this.pos++] < 128) return g;
          } else for (; x < 5; ++x) {
            if (this.pos >= this.len) throw A(this);
            if (g.hi = (g.hi | (127 & this.buf[this.pos]) << 7 * x + 3) >>> 0, this.buf[this.pos++] < 128) return g;
          }
          throw Error("invalid varint encoding");
        }
        function B(g, x) {
          return (g[x - 4] | g[x - 3] << 8 | g[x - 2] << 16 | g[x - 1] << 24) >>> 0;
        }
        function M() {
          if (this.pos + 8 > this.len) throw A(this, 8);
          return new N(B(this.buf, this.pos += 4), B(this.buf, this.pos += 4));
        }
        S.create = R.Buffer ? function(g) {
          return (S.create = function(x) {
            return R.Buffer.isBuffer(x) ? new (void 0)(x) : l(x);
          })(g);
        } : l, S.prototype._slice = R.Array.prototype.subarray || R.Array.prototype.slice, S.prototype.uint32 = (C = 4294967295, function() {
          if (C = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (C = (C | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) || (C = (C | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) || (C = (C | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) || (C = (C | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)) return C;
          if ((this.pos += 5) > this.len) throw this.pos = this.len, A(this, 10);
          return C;
        }), S.prototype.int32 = function() {
          return 0 | this.uint32();
        }, S.prototype.sint32 = function() {
          var g = this.uint32();
          return g >>> 1 ^ -(1 & g);
        }, S.prototype.bool = function() {
          return this.uint32() !== 0;
        }, S.prototype.fixed32 = function() {
          if (this.pos + 4 > this.len) throw A(this, 4);
          return B(this.buf, this.pos += 4);
        }, S.prototype.sfixed32 = function() {
          if (this.pos + 4 > this.len) throw A(this, 4);
          return 0 | B(this.buf, this.pos += 4);
        }, S.prototype.float = function() {
          if (this.pos + 4 > this.len) throw A(this, 4);
          var g = R.float.readFloatLE(this.buf, this.pos);
          return this.pos += 4, g;
        }, S.prototype.double = function() {
          if (this.pos + 8 > this.len) throw A(this, 4);
          var g = R.float.readDoubleLE(this.buf, this.pos);
          return this.pos += 8, g;
        }, S.prototype.bytes = function() {
          var g = this.uint32(), x = this.pos, h = this.pos + g;
          if (h > this.len) throw A(this, g);
          return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(x, h) : x === h ? new this.buf.constructor(0) : this._slice.call(this.buf, x, h);
        }, S.prototype.string = function() {
          var g = this.bytes();
          return b.read(g, 0, g.length);
        }, S.prototype.skip = function(g) {
          if (typeof g == "number") {
            if (this.pos + g > this.len) throw A(this, g);
            this.pos += g;
          } else do
            if (this.pos >= this.len) throw A(this);
          while (128 & this.buf[this.pos++]);
          return this;
        }, S.prototype.skipType = function(g) {
          switch (g) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; (g = 7 & this.uint32()) != 4; ) this.skipType(g);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + g + " at offset " + this.pos);
          }
          return this;
        }, S._configure = function() {
          N = O(183), b = O(442);
          var g = R.Long ? "toLong" : "toNumber";
          R.merge(S.prototype, { int64: function() {
            return P.call(this)[g](!1);
          }, uint64: function() {
            return P.call(this)[g](!0);
          }, sint64: function() {
            return P.call(this).zzDecode()[g](!1);
          }, fixed64: function() {
            return M.call(this)[g](!0);
          }, sfixed64: function() {
            return M.call(this)[g](!1);
          } });
        };
      }, 773: function(_, I, O) {
        _.exports = B;
        var N = O(694);
        ((B.prototype = Object.create(N.prototype)).constructor = B).className = "Root";
        var b, R, A, S = O(101), C = O(660), l = O(220), P = O(629);
        function B(h) {
          N.call(this, "", h), this.deferred = [], this.files = [], this.names = [];
        }
        function M() {
        }
        B.fromJSON = function(h, U) {
          return h = typeof h == "string" ? JSON.parse(h) : h, U || (U = new B()), h.options && U.setOptions(h.options), U.addJSON(h.nested);
        }, B.prototype.resolvePath = P.path.resolve, B.prototype.parseFromPbString = function h(U, W, Z) {
          typeof W == "function" && (Z = W, W = void 0);
          var te = this;
          if (!Z) return P.asPromise(h, te, U, W);
          var G = null;
          if (typeof U == "string") G = JSON.parse(U);
          else {
            if (typeof U != "object") return void console.log("pb格式转化失败");
            G = U;
          }
          function q(z, y) {
            if (Z) {
              var J = Z;
              Z = null, J(z, y);
            }
          }
          function ee(z, y) {
            try {
              if (P.isString(y) && y.charAt(0) === "{" && (y = JSON.parse(y)), P.isString(y)) {
                R.filename = z;
                var J, j = R(y, te, W), K = 0;
                if (j.imports) for (; K < j.imports.length; ++K) ne(J = j.imports[K]);
                if (j.weakImports) {
                  for (K = 0; K < j.weakImports.length; ++K) J = j.weakImports[K];
                  ne(J);
                }
              } else te.setOptions(y.options).addJSON(y.nested);
            } catch (Q) {
              q(Q);
            }
            q(null, te);
          }
          function ne(z) {
            te.names.indexOf(z) > -1 || (te.names.push(z), z in A && ee(z, A[z]));
          }
          ee(G.name, G.pbJsonStr);
        }, B.prototype.load = function h(U, W, Z) {
          typeof W == "function" && (Z = W, W = void 0);
          var te = this;
          if (!Z) return P.asPromise(h, te, U, W);
          var G = Z === M;
          function q(j, K) {
            if (Z) {
              var Q = Z;
              if (Z = null, G) throw j;
              Q(j, K);
            }
          }
          function ee(j, K) {
            try {
              if (P.isString(K) && K.charAt(0) === "{" && (K = JSON.parse(K)), P.isString(K)) {
                R.filename = j;
                var Q, se = R(K, te, W), ce = 0;
                if (se.imports) for (; ce < se.imports.length; ++ce) (Q = te.resolvePath(j, se.imports[ce])) && ne(Q);
                if (se.weakImports) for (ce = 0; ce < se.weakImports.length; ++ce) (Q = te.resolvePath(j, se.weakImports[ce])) && ne(Q, !0);
              } else te.setOptions(K.options).addJSON(K.nested);
            } catch (fe) {
              q(fe);
            }
            G || z || q(null, te);
          }
          function ne(j, K) {
            var Q = j.lastIndexOf("google/protobuf/");
            if (Q > -1) {
              var se = j.substring(Q);
              se in A && (j = se);
            }
            if (!(te.files.indexOf(j) > -1)) if (te.files.push(j), j in A) G ? ee(j, A[j]) : (++z, setTimeout(function() {
              --z, ee(j, A[j]);
            }));
            else if (G) {
              var ce;
              try {
                ce = P.fs.readFileSync(j).toString("utf8");
              } catch (fe) {
                return void (K || q(fe));
              }
              ee(j, ce);
            } else ++z, P.fetch(j, function(fe, me) {
              --z, Z && (fe ? K ? z || q(null, te) : q(fe) : ee(j, me));
            });
          }
          var z = 0;
          P.isString(U) && (U = [U]);
          for (var y, J = 0; J < U.length; ++J) (y = te.resolvePath("", U[J])) && ne(y);
          if (G) return te;
          z || q(null, te);
        }, B.prototype.loadSync = function(h, U) {
          if (!P.isNode) throw Error("not supported");
          return this.load(h, U, M);
        }, B.prototype.resolveAll = function() {
          if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(h) {
            return "'extend " + h.extend + "' in " + h.parent.fullName;
          }).join(", "));
          return N.prototype.resolveAll.call(this);
        };
        var g = /^[A-Z]/;
        function x(h, U) {
          var W = U.parent.lookup(U.extend);
          if (W) {
            var Z = new S(U.fullName, U.id, U.type, U.rule, void 0, U.options);
            return Z.declaringField = U, U.extensionField = Z, W.add(Z), !0;
          }
          return !1;
        }
        B.prototype._handleAdd = function(h) {
          if (h instanceof S) h.extend === void 0 || h.extensionField || x(0, h) || this.deferred.push(h);
          else if (h instanceof C) g.test(h.name) && (h.parent[h.name] = h.values);
          else if (!(h instanceof l)) {
            if (h instanceof b) for (var U = 0; U < this.deferred.length; ) x(0, this.deferred[U]) ? this.deferred.splice(U, 1) : ++U;
            for (var W = 0; W < h.nestedArray.length; ++W) this._handleAdd(h._nestedArray[W]);
            g.test(h.name) && (h.parent[h.name] = h);
          }
        }, B.prototype._handleRemove = function(h) {
          if (h instanceof S) {
            if (h.extend !== void 0) if (h.extensionField) h.extensionField.parent.remove(h.extensionField), h.extensionField = null;
            else {
              var U = this.deferred.indexOf(h);
              U > -1 && this.deferred.splice(U, 1);
            }
          } else if (h instanceof C) g.test(h.name) && delete h.parent[h.name];
          else if (h instanceof N) {
            for (var W = 0; W < h.nestedArray.length; ++W) this._handleRemove(h._nestedArray[W]);
            g.test(h.name) && delete h.parent[h.name];
          }
        }, B._configure = function() {
          b = O(465), R = O(922), A = O(940), S = O(101), C = O(660), l = O(220), P = O(629);
        };
      }, 896: function(_) {
        _.exports = {};
      }, 470: function(_, I, O) {
        _.exports = b;
        var N = O(629);
        function b(R, A, S) {
          if (typeof R != "function") throw TypeError("rpcImpl must be a function");
          N.EventEmitter.call(this), this.rpcImpl = R, this.requestDelimited = !!A, this.responseDelimited = !!S;
        }
        (b.prototype = Object.create(N.EventEmitter.prototype)).constructor = b, b.prototype.rpcCall = function R(A, S, C, l, P) {
          if (!l) throw TypeError("request must be specified");
          var B = this;
          if (!P) return N.asPromise(R, B, A, S, C, l);
          if (B.rpcImpl) try {
            return B.rpcImpl(A, S[B.requestDelimited ? "encodeDelimited" : "encode"](l).finish(), function(M, g) {
              if (M) return B.emit("error", M, A), P(M);
              if (g !== null) {
                if (!(g instanceof C)) try {
                  g = C[B.responseDelimited ? "decodeDelimited" : "decode"](g);
                } catch (x) {
                  return B.emit("error", x, A), P(x);
                }
                return B.emit("data", g, A), P(null, g);
              }
              B.end(!0);
            });
          } catch (M) {
            return B.emit("error", M, A), void setTimeout(function() {
              P(M);
            }, 0);
          }
          else setTimeout(function() {
            P(Error("already ended"));
          }, 0);
        }, b.prototype.end = function(R) {
          return this.rpcImpl && (R || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
        };
      }, 177: function(_, I, O) {
        _.exports = S;
        var N, b, R, A = O(694);
        function S(l, P) {
          A.call(this, l, P), this.methods = {}, this._methodsArray = null;
        }
        function C(l) {
          return l._methodsArray = null, l;
        }
        ((S.prototype = Object.create(A.prototype)).constructor = S).className = "Service", S.fromJSON = function(l, P) {
          var B = new S(l, P.options);
          if (P.methods) for (var M = Object.keys(P.methods), g = 0; g < M.length; ++g) B.add(N.fromJSON(M[g], P.methods[M[g]]));
          return P.nested && B.addJSON(P.nested), B.comment = P.comment, B;
        }, S.prototype.toJSON = function(l) {
          var P = A.prototype.toJSON.call(this, l), B = !!l && !!l.keepComments;
          return b.toObject(["options", P && P.options || void 0, "methods", A.arrayToJSON(this.methodsArray, l) || {}, "nested", P && P.nested || void 0, "comment", B ? this.comment : void 0]);
        }, Object.defineProperty(S.prototype, "methodsArray", { get: function() {
          return this._methodsArray || (this._methodsArray = b.toArray(this.methods));
        } }), S.prototype.get = function(l) {
          return this.methods[l] || A.prototype.get.call(this, l);
        }, S.prototype.resolveAll = function() {
          for (var l = this.methodsArray, P = 0; P < l.length; ++P) l[P].resolve();
          return A.prototype.resolve.call(this);
        }, S.prototype.add = function(l) {
          if (this.get(l.name)) throw Error("duplicate name '" + l.name + "' in " + this);
          return l instanceof N ? (this.methods[l.name] = l, l.parent = this, C(this)) : A.prototype.add.call(this, l);
        }, S.prototype.remove = function(l) {
          if (l instanceof N) {
            if (this.methods[l.name] !== l) throw Error(l + " is not a member of " + this);
            return delete this.methods[l.name], l.parent = null, C(this);
          }
          return A.prototype.remove.call(this, l);
        }, S.prototype.create = function(l, P, B) {
          for (var M, g = new R.Service(l, P, B), x = 0; x < this.methodsArray.length; ++x) {
            var h = b.lcFirst((M = this._methodsArray[x]).resolve().name).replace(/[^$\w_]/g, "");
            g[h] = b.codegen(["r", "c"], b.isReserved(h) ? h + "_" : h)("return this.rpcCall(m,q,s,r,c)")({ m: M, q: M.resolvedRequestType.ctor, s: M.resolvedResponseType.ctor });
          }
          return g;
        }, S._configure = function() {
          N = O(512), b = O(629), R = O(470);
        };
      }, 496: function(_) {
        _.exports = B;
        var I = /[\s{}=;:[\],'"()<>]/g, O = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, N = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, b = /^ *[*/]+ */, R = /^\s*\*?\/*/, A = /\n/g, S = /\s/, C = /\\(.?)/g, l = { 0: "\0", r: "\r", n: `
`, t: "	" };
        function P(M) {
          return M.replace(C, function(g, x) {
            switch (x) {
              case "\\":
              case "":
                return x;
              default:
                return l[x] || "";
            }
          });
        }
        function B(M, g) {
          M = M.toString();
          var x = 0, h = M.length, U = 1, W = null, Z = null, te = 0, G = !1, q = [], ee = null;
          function ne(ce) {
            return Error("illegal " + ce + " (line " + U + ")");
          }
          function z(ce) {
            return M.charAt(ce);
          }
          function y(ce, fe) {
            W = M.charAt(ce++), te = U, G = !1;
            var me, de = ce - (g ? 2 : 3);
            do
              if (--de < 0 || (me = M.charAt(de)) === `
`) {
                G = !0;
                break;
              }
            while (me === " " || me === "	");
            for (var Ee = M.substring(ce, fe).split(A), Re = 0; Re < Ee.length; ++Re) Ee[Re] = Ee[Re].replace(g ? R : b, "").trim();
            Z = Ee.join(`
`).trim();
          }
          function J(ce) {
            var fe = j(ce), me = M.substring(ce, fe);
            return /^\s*\/{1,2}/.test(me);
          }
          function j(ce) {
            for (var fe = ce; fe < h && z(fe) !== `
`; ) fe++;
            return fe;
          }
          function K() {
            if (q.length > 0) return q.shift();
            if (ee) return function() {
              var it = ee === "'" ? N : O;
              it.lastIndex = x - 1;
              var _t = it.exec(M);
              if (!_t) throw ne("string");
              return x = it.lastIndex, Q(ee), ee = null, P(_t[1]);
            }();
            var ce, fe, me, de, Ee;
            do {
              if (x === h) return null;
              for (ce = !1; S.test(me = z(x)); ) if (me === `
` && ++U, ++x === h) return null;
              if (z(x) === "/") {
                if (++x === h) throw ne("comment");
                if (z(x) === "/") if (g) {
                  if (de = x, Ee = !1, J(x)) {
                    Ee = !0;
                    do {
                      if ((x = j(x)) === h) break;
                      x++;
                    } while (J(x));
                  } else x = Math.min(h, j(x) + 1);
                  Ee && y(de, x), U++, ce = !0;
                } else {
                  for (Ee = z(de = x + 1) === "/"; z(++x) !== `
`; ) if (x === h) return null;
                  ++x, Ee && y(de, x - 1), ++U, ce = !0;
                }
                else {
                  if ((me = z(x)) !== "*") return "/";
                  de = x + 1, Ee = g || z(de) === "*";
                  do {
                    if (me === `
` && ++U, ++x === h) throw ne("comment");
                    fe = me, me = z(x);
                  } while (fe !== "*" || me !== "/");
                  ++x, Ee && y(de, x - 2), ce = !0;
                }
              }
            } while (ce);
            var Re = x;
            if (I.lastIndex = 0, !I.test(z(Re++))) for (; Re < h && !I.test(z(Re)); ) ++Re;
            var L = M.substring(x, x = Re);
            return L !== '"' && L !== "'" || (ee = L), L;
          }
          function Q(ce) {
            q.push(ce);
          }
          function se() {
            if (!q.length) {
              var ce = K();
              if (ce === null) return null;
              Q(ce);
            }
            return q[0];
          }
          return Object.defineProperty({ next: K, peek: se, push: Q, skip: function(ce, fe) {
            var me = se();
            if (me === ce) return K(), !0;
            if (!fe) throw ne("token '" + me + "', '" + ce + "' expected");
            return !1;
          }, cmnt: function(ce) {
            var fe = null;
            return ce === void 0 ? te === U - 1 && (g || W === "*" || G) && (fe = Z) : (te < ce && se(), te !== ce || G || !g && W !== "/" || (fe = Z)), fe;
          } }, "line", { get: function() {
            return U;
          } });
        }
        B.unescape = P;
      }, 465: function(_, I, O) {
        _.exports = Z;
        var N, b, R, A, S, C, l, P, B, M, g, x, h, U, W = O(694);
        function Z(G, q) {
          W.call(this, G, q), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
        }
        function te(G) {
          return G._fieldsById = G._fieldsArray = G._oneofsArray = null, delete G.encode, delete G.decode, delete G.verify, G;
        }
        ((Z.prototype = Object.create(W.prototype)).constructor = Z).className = "Type", Object.defineProperties(Z.prototype, { fieldsById: { get: function() {
          if (this._fieldsById) return this._fieldsById;
          this._fieldsById = {};
          for (var G = Object.keys(this.fields), q = 0; q < G.length; ++q) {
            var ee = this.fields[G[q]], ne = ee.id;
            if (this._fieldsById[ne]) throw Error("duplicate id " + ne + " in " + this);
            this._fieldsById[ne] = ee;
          }
          return this._fieldsById;
        } }, fieldsArray: { get: function() {
          return this._fieldsArray || (this._fieldsArray = l.toArray(this.fields));
        } }, oneofsArray: { get: function() {
          return this._oneofsArray || (this._oneofsArray = l.toArray(this.oneofs));
        } }, ctor: { get: function() {
          return this._ctor || (this.ctor = Z.generateConstructor(this));
        }, set: function(G) {
          var q = G.prototype;
          q instanceof R || ((G.prototype = new R()).constructor = G, l.merge(G.prototype, q)), G.$type = G.prototype.$type = this, l.merge(G, R, !0), l.merge(G.prototype, R, !0), this._ctor = G;
          for (var ee = 0; ee < this.fieldsArray.length; ++ee) this._fieldsArray[ee].resolve();
          var ne = {};
          for (ee = 0; ee < this.oneofsArray.length; ++ee) {
            var z = this._oneofsArray[ee].resolve().name, y = function(J) {
              for (var j = {}, K = 0; K < J.length; ++K) j[J[K]] = 0;
              return { setter: function(Q) {
                if (!(J.indexOf(Q) < 0)) {
                  j[Q] = 1;
                  for (var se = 0; se < J.length; ++se) J[se] !== Q && delete this[J[se]];
                }
              }, getter: function() {
                for (var Q = Object.keys(this), se = Q.length - 1; se > -1; --se) if (j[Q[se]] === 1 && this[Q[se]] !== void 0 && this[Q[se]] !== null) return Q[se];
              } };
            }(this._oneofsArray[ee].oneof);
            ne[z] = { get: y.getter, set: y.setter };
          }
          ee && Object.defineProperties(G.prototype, ne);
        } } }), Z.generateConstructor = function(G) {
          return function(q) {
            for (var ee, ne = 0; ne < G.fieldsArray.length; ne++) (ee = G._fieldsArray[ne]).map ? this[ee.name] = {} : ee.repeated && (this[ee.name] = []);
            if (q) for (var z = Object.keys(q), y = 0; y < z.length; ++y) q[z[y]] != null && (this[z[y]] = q[z[y]]);
          };
        }, Z.fromJSON = function(G, q) {
          var ee = new Z(G, q.options);
          ee.extensions = q.extensions, ee.reserved = q.reserved;
          for (var ne = Object.keys(q.fields), z = 0; z < ne.length; ++z) ee.add((q.fields[ne[z]].keyType !== void 0 ? U.fromJSON : b.fromJSON)(ne[z], q.fields[ne[z]]));
          if (q.oneofs) for (ne = Object.keys(q.oneofs), z = 0; z < ne.length; ++z) ee.add(A.fromJSON(ne[z], q.oneofs[ne[z]]));
          if (q.nested) for (ne = Object.keys(q.nested), z = 0; z < ne.length; ++z) {
            var y = q.nested[ne[z]];
            ee.add((y.id !== void 0 ? b.fromJSON : y.fields !== void 0 ? Z.fromJSON : y.values !== void 0 ? N.fromJSON : y.methods !== void 0 ? g.fromJSON : W.fromJSON)(ne[z], y));
          }
          return q.extensions && q.extensions.length && (ee.extensions = q.extensions), q.reserved && q.reserved.length && (ee.reserved = q.reserved), q.group && (ee.group = !0), q.comment && (ee.comment = q.comment), ee;
        }, Z.prototype.toJSON = function(G) {
          var q = W.prototype.toJSON.call(this, G), ee = !!G && !!G.keepComments;
          return { options: q && q.options || void 0, oneofs: W.arrayToJSON(this.oneofsArray, G), fields: W.arrayToJSON(this.fieldsArray.filter(function(ne) {
            return !ne.declaringField;
          }), G) || {}, extensions: this.extensions && this.extensions.length ? this.extensions : void 0, reserved: this.reserved && this.reserved.length ? this.reserved : void 0, group: this.group || void 0, nested: q && q.nested || void 0, comment: ee ? this.comment : void 0 };
        }, Z.prototype.resolveAll = function() {
          for (var G = this.fieldsArray, q = 0; q < G.length; ) G[q++].resolve();
          var ee = this.oneofsArray;
          for (q = 0; q < ee.length; ) ee[q++].resolve();
          return W.prototype.resolveAll.call(this);
        }, Z.prototype.get = function(G) {
          return this.fields[G] || this.oneofs && this.oneofs[G] || this.nested && this.nested[G] || null;
        }, Z.prototype.add = function(G) {
          if (this.get(G.name)) throw Error("duplicate name '" + G.name + "' in " + this);
          if (G instanceof b && G.extend === void 0) {
            if (this._fieldsById && this._fieldsById[G.id]) throw Error("duplicate id " + G.id + " in " + this);
            if (this.isReservedId(G.id)) throw Error("id " + G.id + " is reserved in " + this);
            if (this.isReservedName(G.name)) throw Error("name '" + G.name + "' is reserved in " + this);
            return G.parent && G.parent.remove(G), this.fields[G.name] = G, G.message = this, G.onAdd(this), te(this);
          }
          return G instanceof A ? (this.oneofs || (this.oneofs = {}), this.oneofs[G.name] = G, G.onAdd(this), te(this)) : W.prototype.add.call(this, G);
        }, Z.prototype.remove = function(G) {
          if (G instanceof b && G.extend === void 0) {
            if (!this.fields || this.fields[G.name] !== G) throw Error(G + " is not a member of " + this);
            return delete this.fields[G.name], G.parent = null, G.onRemove(this), te(this);
          }
          if (G instanceof A) {
            if (!this.oneofs || this.oneofs[G.name] !== G) throw Error(G + " is not a member of " + this);
            return delete this.oneofs[G.name], G.parent = null, G.onRemove(this), te(this);
          }
          return W.prototype.remove.call(this, G);
        }, Z.prototype.isReservedId = function(G) {
          return W.isReservedId(this.reserved, G);
        }, Z.prototype.isReservedName = function(G) {
          return W.isReservedName(this.reserved, G);
        }, Z.prototype.create = function(G) {
          return new this.ctor(G);
        }, Z.prototype.setup = function() {
          for (var G = this.fullName, q = [], ee = 0; ee < this.fieldsArray.length; ++ee) q.push(this._fieldsArray[ee].resolve().resolvedType);
          this.encode = B(this)({ Writer: S, types: q, util: l }), this.decode = M(this)({ Reader: C, types: q, util: l }), this.verify = P(this)({ types: q, util: l }), this.fromObject = h.fromObject(this)({ types: q, util: l }), this.toObject = h.toObject(this)({ types: q, util: l });
          var ne = x[G];
          if (ne) {
            var z = Object.create(this);
            z.fromObject = this.fromObject, this.fromObject = ne.fromObject.bind(z), z.toObject = this.toObject, this.toObject = ne.toObject.bind(z);
          }
          return this;
        }, Z.prototype.encode = function(G, q) {
          return this.setup().encode(G, q);
        }, Z.prototype.encodeDelimited = function(G, q) {
          return this.encode(G, q && q.len ? q.fork() : q).ldelim();
        }, Z.prototype.decode = function(G, q) {
          return this.setup().decode(G, q);
        }, Z.prototype.decodeDelimited = function(G) {
          return G instanceof C || (G = C.create(G)), this.decode(G, G.uint32());
        }, Z.prototype.verify = function(G) {
          return this.setup().verify(G);
        }, Z.prototype.fromObject = function(G) {
          return this.setup().fromObject(G);
        }, Z.prototype.toObject = function(G, q) {
          return this.setup().toObject(G, q);
        }, Z.d = function(G) {
          return function(q) {
            l.decorateType(q, G);
          };
        }, Z._configure = function() {
          N = O(660), b = O(101), R = O(278), A = O(220), S = O(322), C = O(970), l = O(629), P = O(811), B = O(229), M = O(801), g = O(177), x = O(793), h = O(921), U = O(83);
        };
      }, 452: function(_, I, O) {
        var N = _.exports, b = O(629), R = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function A(S, C) {
          var l = 0, P = {};
          for (C |= 0; l < S.length; ) P[R[l + C]] = S[l++];
          return P;
        }
        N.basic = A([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), N.defaults = A([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", b.emptyArray, null]), N.long = A([0, 0, 0, 1, 1], 7), N.mapKey = A([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), N.packed = A([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]), N._configure = function() {
          b = O(629);
        };
      }, 442: function(_) {
        var I = _.exports;
        I.length = function(O) {
          for (var N = 0, b = 0, R = 0; R < O.length; ++R) (b = O.charCodeAt(R)) < 128 ? N += 1 : b < 2048 ? N += 2 : (64512 & b) == 55296 && (64512 & O.charCodeAt(R + 1)) == 56320 ? (++R, N += 4) : N += 3;
          return N;
        }, I.read = function(O, N, b) {
          if (b - N < 1) return "";
          for (var R, A = null, S = [], C = 0; N < b; ) (R = O[N++]) < 128 ? S[C++] = R : R > 191 && R < 224 ? S[C++] = (31 & R) << 6 | 63 & O[N++] : R > 239 && R < 365 ? (R = ((7 & R) << 18 | (63 & O[N++]) << 12 | (63 & O[N++]) << 6 | 63 & O[N++]) - 65536, S[C++] = 55296 + (R >> 10), S[C++] = 56320 + (1023 & R)) : S[C++] = (15 & R) << 12 | (63 & O[N++]) << 6 | 63 & O[N++], C > 8191 && ((A || (A = [])).push(String.fromCharCode.apply(String, S)), C = 0);
          return A ? (C && A.push(String.fromCharCode.apply(String, S.slice(0, C))), A.join("")) : String.fromCharCode.apply(String, S.slice(0, C));
        }, I.write = function(O, N, b) {
          for (var R, A, S = b, C = 0; C < O.length; ++C) (R = O.charCodeAt(C)) < 128 ? N[b++] = R : R < 2048 ? (N[b++] = R >> 6 | 192, N[b++] = 63 & R | 128) : (64512 & R) == 55296 && (64512 & (A = O.charCodeAt(C + 1))) == 56320 ? (R = 65536 + ((1023 & R) << 10) + (1023 & A), ++C, N[b++] = R >> 18 | 240, N[b++] = R >> 12 & 63 | 128, N[b++] = R >> 6 & 63 | 128, N[b++] = 63 & R | 128) : (N[b++] = R >> 12 | 224, N[b++] = R >> 6 & 63 | 128, N[b++] = 63 & R | 128);
          return b - S;
        };
      }, 629: function(_, I, O) {
        var N = _.exports, b = O(896);
        N.LongBits = O(183), N.Long = O(879), N.pool = O(627), N.float = O(899), N.asPromise = O(880), N.EventEmitter = O(87), N.path = O(814), N.base64 = O(986), N.utf8 = O(442), N.compareFieldsById = function(R, A) {
          return R.id - A.id;
        }, N.toArray = function(R) {
          if (R) {
            for (var A = Object.keys(R), S = new Array(A.length), C = 0; C < A.length; ) S[C] = R[A[C++]];
            return S;
          }
          return [];
        }, N.toObject = function(R) {
          for (var A = {}, S = 0; S < R.length; ) {
            var C = R[S++], l = R[S++];
            l !== void 0 && (A[C] = l);
          }
          return A;
        }, N.isString = function(R) {
          return typeof R == "string" || R instanceof String;
        }, N.isReserved = function(R) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(R);
        }, N.isObject = function(R) {
          return R && typeof R == "object";
        }, N.Array = typeof Uint8Array < "u" ? Uint8Array : Array, N.oneOfGetter = function(R) {
          for (var A = {}, S = 0; S < R.length; ++S) A[R[S]] = 1;
          return function() {
            for (var C = Object.keys(this), l = C.length - 1; l > -1; --l) if (A[C[l]] === 1 && this[C[l]] !== void 0 && this[C[l]] !== null) return C[l];
          };
        }, N.oneOfSetter = function(R) {
          return function(A) {
            for (var S = 0; S < R.length; ++S) R[S] !== A && delete this[R[S]];
          };
        }, N.merge = function(R, A, S) {
          for (var C = Object.keys(A), l = 0; l < C.length; ++l) R[C[l]] !== void 0 && S || (R[C[l]] = A[C[l]]);
          return R;
        }, N.decorateType = function(R, A) {
          if (R.$type) return A && R.$type.name !== A && (N.decorateRoot.remove(R.$type), R.$type.name = A, N.decorateRoot.add(R.$type)), R.$type;
          Type || (Type = O(465));
          var S = new Type(A || R.name);
          return N.decorateRoot.add(S), S.ctor = R, Object.defineProperty(R, "$type", { value: S, enumerable: !1 }), Object.defineProperty(R.prototype, "$type", { value: S, enumerable: !1 }), S;
        }, N.emptyArray = Object.freeze ? Object.freeze([]) : [], N.emptyObject = Object.freeze ? Object.freeze({}) : {}, N.longToHash = function(R) {
          return R ? N.LongBits.from(R).toHash() : N.LongBits.zeroHash;
        }, N.copy = function(R) {
          if (typeof R != "object") return R;
          var A = {};
          for (var S in R) A[S] = R[S];
          return A;
        }, N.deepCopy = function R(A) {
          if (typeof A != "object") return A;
          var S = {};
          for (var C in A) S[C] = R(A[C]);
          return S;
        }, N.ProtocolError = function(R) {
          function A(S, C) {
            if (!(this instanceof A)) return new A(S, C);
            Object.defineProperty(this, "message", { get: function() {
              return S;
            } }), Error.captureStackTrace ? Error.captureStackTrace(this, A) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), C && merge(this, C);
          }
          return (A.prototype = Object.create(Error.prototype)).constructor = A, Object.defineProperty(A.prototype, "name", { get: function() {
            return R;
          } }), A.prototype.toString = function() {
            return this.name + ": " + this.message;
          }, A;
        }, N.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, N.Buffer = null, N.newBuffer = function(R) {
          return typeof R == "number" ? new N.Array(R) : typeof Uint8Array > "u" ? R : new Uint8Array(R);
        }, N.stringToBytes = function(R) {
          var A, S, C = [];
          A = R.length;
          for (var l = 0; l < A; l++) (S = R.charCodeAt(l)) >= 65536 && S <= 1114111 ? (C.push(S >> 18 & 7 | 240), C.push(S >> 12 & 63 | 128), C.push(S >> 6 & 63 | 128), C.push(63 & S | 128)) : S >= 2048 && S <= 65535 ? (C.push(S >> 12 & 15 | 224), C.push(S >> 6 & 63 | 128), C.push(63 & S | 128)) : S >= 128 && S <= 2047 ? (C.push(S >> 6 & 31 | 192), C.push(63 & S | 128)) : C.push(255 & S);
          return C;
        }, N.byteToString = function(R) {
          if (typeof R == "string") return R;
          for (var A = "", S = R, C = 0; C < S.length; C++) {
            var l = S[C].toString(2), P = l.match(/^1+?(?=0)/);
            if (P && l.length == 8) {
              for (var B = P[0].length, M = S[C].toString(2).slice(7 - B), g = 1; g < B; g++) M += S[g + C].toString(2).slice(2);
              A += String.fromCharCode(parseInt(M, 2)), C += B - 1;
            } else A += String.fromCharCode(S[C]);
          }
          return A;
        }, N.isInteger = Number.isInteger || function(R) {
          return typeof R == "number" && isFinite(R) && Math.floor(R) === R;
        }, Object.defineProperty(N, "decorateRoot", { get: function() {
          return b.decorated || (b.decorated = new (O(773))());
        } });
      }, 811: function(_, I, O) {
        var N, b;
        function R(l, P) {
          return l.name + ": " + P + (l.repeated && P !== "array" ? "[]" : l.map && P !== "object" ? "{k:" + l.keyType + "}" : "") + " expected";
        }
        function A(l, P, B, M) {
          var g = M.types;
          if (l.resolvedType) if (l.resolvedType instanceof N) {
            if (Object.keys(l.resolvedType.values).indexOf(B) < 0) return R(l, "enum value");
          } else {
            var x = g[P].verify(B);
            if (x) return l.name + "." + x;
          }
          else switch (l.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              if (!b.isInteger(B)) return R(l, "integer");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              if (!(b.isInteger(B) || B && b.isInteger(B.low) && b.isInteger(B.high))) return R(l, "integer|Long");
              break;
            case "float":
            case "double":
              if (typeof B != "number") return R(l, "number");
              break;
            case "bool":
              if (typeof B != "boolean") return R(l, "boolean");
              break;
            case "string":
              if (!b.isString(B)) return R(l, "string");
              break;
            case "bytes":
              if (!(B && typeof B.length == "number" || b.isString(B))) return R(l, "buffer");
          }
        }
        function S(l, P) {
          switch (l.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              if (!b.key32Re.test(P)) return R(l, "integer key");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              if (!b.key64Re.test(P)) return R(l, "integer|Long key");
              break;
            case "bool":
              if (!b.key2Re.test(P)) return R(l, "boolean key");
          }
        }
        function C(l) {
          return function(P) {
            return function(B) {
              var M;
              if (typeof B != "object" || B === null) return "object expected";
              var g, x = {};
              l.oneofsArray.length && (g = {});
              for (var h = 0; h < l.fieldsArray.length; ++h) {
                var U, W = l._fieldsArray[h].resolve(), Z = B[W.name];
                if (!W.optional || Z != null && B.hasOwnProperty(W.name)) if (W.map) {
                  if (!b.isObject(Z)) return R(W, "object");
                  var te = Object.keys(Z);
                  for (U = 0; U < te.length; ++U)
                    if ((M = S(W, te[U])) || (M = A(W, h, Z[te[U]], P))) return M;
                } else if (W.repeated) {
                  if (!Array.isArray(Z)) return R(W, "array");
                  for (U = 0; U < Z.length; ++U) if (M = A(W, h, Z[U], P)) return M;
                } else {
                  if (W.partOf) {
                    var G = W.partOf.name;
                    if (x[W.partOf.name] === 1 && g[G] === 1) return W.partOf.name + ": multiple values";
                    g[G] = 1;
                  }
                  if (M = A(W, h, Z, P)) return M;
                }
              }
            };
          };
        }
        _.exports = C, C._configure = function() {
          N = O(660), b = O(629);
        };
      }, 793: function(_, I, O) {
        var N, b = I;
        b[".google.protobuf.Any"] = { fromObject: function(R) {
          if (R && R["@type"]) {
            var A = this.lookup(R["@type"]);
            if (A) {
              var S = R["@type"].charAt(0) === "." ? R["@type"].substr(1) : R["@type"];
              return this.create({ type_url: "/" + S, value: A.encode(A.fromObject(R)).finish() });
            }
          }
          return this.fromObject(R);
        }, toObject: function(R, A) {
          if (A && A.json && R.type_url && R.value) {
            var S = R.type_url.substring(R.type_url.lastIndexOf("/") + 1), C = this.lookup(S);
            C && (R = C.decode(R.value));
          }
          if (!(R instanceof this.ctor) && R instanceof N) {
            var l = R.$type.toObject(R, A);
            return l["@type"] = R.$type.fullName, l;
          }
          return this.toObject(R, A);
        } }, b._configure = function() {
          N = O(278);
        };
      }, 322: function(_, I, O) {
        _.exports = l;
        var N, b = O(629), R = O(442);
        function A(h, U, W) {
          this.fn = h, this.len = U, this.next = void 0, this.val = W;
        }
        function S() {
        }
        function C(h) {
          this.head = h.head, this.tail = h.tail, this.len = h.len, this.next = h.states;
        }
        function l() {
          this.len = 0, this.head = new A(S, 0, 0), this.tail = this.head, this.states = null;
        }
        function P(h, U, W) {
          U[W] = 255 & h;
        }
        function B(h, U) {
          this.len = h, this.next = void 0, this.val = U;
        }
        function M(h, U, W) {
          for (; h.hi; ) U[W++] = 127 & h.lo | 128, h.lo = (h.lo >>> 7 | h.hi << 25) >>> 0, h.hi >>>= 7;
          for (; h.lo > 127; ) U[W++] = 127 & h.lo | 128, h.lo = h.lo >>> 7;
          U[W++] = h.lo;
        }
        function g(h, U, W) {
          U[W] = 255 & h, U[W + 1] = h >>> 8 & 255, U[W + 2] = h >>> 16 & 255, U[W + 3] = h >>> 24;
        }
        l.create = b.Buffer ? function() {
          return (l.create = function() {
            return new (void 0)();
          })();
        } : function() {
          return new l();
        }, l.alloc = function(h) {
          return new b.Array(h);
        }, b.Array !== Array && (l.alloc = b.pool(l.alloc, b.Array.prototype.subarray)), l.prototype._push = function(h, U, W) {
          return this.tail = this.tail.next = new A(h, U, W), this.len += U, this;
        }, B.prototype = Object.create(A.prototype), B.prototype.fn = function(h, U, W) {
          for (; h > 127; ) U[W++] = 127 & h | 128, h >>>= 7;
          U[W] = h;
        }, l.prototype.uint32 = function(h) {
          return this.len += (this.tail = this.tail.next = new B((h >>>= 0) < 128 ? 1 : h < 16384 ? 2 : h < 2097152 ? 3 : h < 268435456 ? 4 : 5, h)).len, this;
        }, l.prototype.int32 = function(h) {
          return h < 0 ? this._push(M, 10, N.fromNumber(h)) : this.uint32(h);
        }, l.prototype.sint32 = function(h) {
          return this.uint32((h << 1 ^ h >> 31) >>> 0);
        }, l.prototype.uint64 = function(h) {
          var U = N.from(h);
          return this._push(M, U.length(), U);
        }, l.prototype.int64 = l.prototype.uint64, l.prototype.sint64 = function(h) {
          var U = N.from(h).zzEncode();
          return this._push(M, U.length(), U);
        }, l.prototype.bool = function(h) {
          return this._push(P, 1, h ? 1 : 0);
        }, l.prototype.fixed32 = function(h) {
          return this._push(g, 4, h >>> 0);
        }, l.prototype.sfixed32 = l.prototype.fixed32, l.prototype.fixed64 = function(h) {
          var U = N.from(h);
          return this._push(g, 4, U.lo)._push(g, 4, U.hi);
        }, l.prototype.sfixed64 = l.prototype.fixed64, l.prototype.float = function(h) {
          return this._push(b.float.writeFloatLE, 4, h);
        }, l.prototype.double = function(h) {
          return this._push(b.float.writeDoubleLE, 8, h);
        };
        var x = b.Array.prototype.set ? function(h, U, W) {
          U.set(h, W);
        } : function(h, U, W) {
          for (var Z = 0; Z < h.length; ++Z) U[W + Z] = h[Z];
        };
        l.prototype.bytes = function(h) {
          var U = h.length >>> 0;
          if (!U) return this._push(P, 1, 0);
          if (b.isString(h)) {
            var W = l.alloc(U = R.length(h));
            R.write(h, W, 0), h = W;
          }
          return this.uint32(U)._push(x, U, h);
        }, l.prototype.string = function(h) {
          var U = R.length(h);
          return U ? this.uint32(U)._push(R.write, U, h) : this._push(P, 1, 0);
        }, l.prototype.fork = function() {
          return this.states = new C(this), this.head = this.tail = new A(S, 0, 0), this.len = 0, this;
        }, l.prototype.reset = function() {
          return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new A(S, 0, 0), this.len = 0), this;
        }, l.prototype.ldelim = function() {
          var h = this.head, U = this.tail, W = this.len;
          return this.reset().uint32(W), W && (this.tail.next = h.next, this.tail = U, this.len += W), this;
        }, l.prototype.finish = function() {
          for (var h = this.head.next, U = this.constructor.alloc(this.len), W = 0; h; ) h.fn(h.val, U, W), W += h.len, h = h.next;
          return U;
        }, l._configure = function() {
          N = O(183), O(986), R = O(442);
        };
      } }, c = {};
      function f(_) {
        var I = c[_];
        if (I !== void 0) return I.exports;
        var O = c[_] = { exports: {} };
        return i[_](O, O.exports, f), O.exports;
      }
      f.amdO = {}, f.n = function(_) {
        var I = _ && _.__esModule ? function() {
          return _.default;
        } : function() {
          return _;
        };
        return f.d(I, { a: I }), I;
      }, f.d = function(_, I) {
        for (var O in I) f.o(I, O) && !f.o(_, O) && Object.defineProperty(_, O, { enumerable: !0, get: I[O] });
      }, f.g = function() {
        if (typeof globalThis == "object") return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object") return window;
        }
      }(), f.o = function(_, I) {
        return Object.prototype.hasOwnProperty.call(_, I);
      }, f.r = function(_) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_, "__esModule", { value: !0 });
      };
      var E = {};
      return function() {
        f.r(E), f.d(E, { default: function() {
          return Km;
        } });
        var _ = {};
        f.r(_), f.d(_, { acceptContactInvite: function() {
          return Jd;
        }, acceptInvitation: function() {
          return oc;
        }, addContact: function() {
          return $d;
        }, addConversationMark: function() {
          return vf;
        }, addReaction: function() {
          return nf;
        }, addToBlackList: function() {
          return ki;
        }, addUsersToBlacklist: function() {
          return Yd;
        }, addUsersToBlocklist: function() {
          return Qd;
        }, declineContactInvite: function() {
          return Xd;
        }, declineInvitation: function() {
          return ic;
        }, deleteAllMessagesAndConversations: function() {
          return _f;
        }, deleteContact: function() {
          return nc;
        }, deleteConversation: function() {
          return jd;
        }, deleteReaction: function() {
          return of;
        }, deleteSession: function() {
          return tc;
        }, fetchHistoryMessages: function() {
          return Vd;
        }, fetchUserInfoById: function() {
          return Hd;
        }, getAllContacts: function() {
          return hf;
        }, getBlacklist: function() {
          return Qs;
        }, getBlocklist: function() {
          return Pd;
        }, getContacts: function() {
          return Zs;
        }, getContactsWithCursor: function() {
          return mf;
        }, getConversationlist: function() {
          return xd;
        }, getHistoryMessages: function() {
          return zd;
        }, getReactionDetail: function() {
          return sf;
        }, getReactionList: function() {
          return ac;
        }, getReactionlist: function() {
          return af;
        }, getRoster: function() {
          return kd;
        }, getSelfIdsOnOtherPlatform: function() {
          return yf;
        }, getServerConversations: function() {
          return lf;
        }, getServerConversationsByFilter: function() {
          return Ef;
        }, getServerPinnedConversations: function() {
          return pf;
        }, getServerPinnedMessages: function() {
          return Rf;
        }, getSessionList: function() {
          return Ld;
        }, getTokenExpireTimestamp: function() {
          return Wd;
        }, modifyMessage: function() {
          return rf;
        }, pinConversation: function() {
          return df;
        }, pinMessage: function() {
          return Tf;
        }, recallMessage: function() {
          return tf;
        }, removeConversationMark: function() {
          return gf;
        }, removeFromBlackList: function() {
          return Di;
        }, removeHistoryMessages: function() {
          return uf;
        }, removeRoster: function() {
          return qd;
        }, removeUserFromBlackList: function() {
          return Zd;
        }, removeUserFromBlocklist: function() {
          return ef;
        }, reportMessage: function() {
          return cf;
        }, setContactRemark: function() {
          return ff;
        }, unpinMessage: function() {
          return Of;
        }, updateCurrentUserNick: function() {
          return Fd;
        }, updateOwnUserInfo: function() {
          return rc;
        }, updateUserInfo: function() {
          return Bd;
        }, uploadPushToken: function() {
          return Dd;
        }, uploadToken: function() {
          return ec;
        } });
        var I = {};
        f.r(I), f.d(I, { acceptGroupInvite: function() {
          return Vf;
        }, acceptGroupJoinRequest: function() {
          return Ff;
        }, addUsersToGroupAllowlist: function() {
          return ah;
        }, addUsersToGroupWhitelist: function() {
          return wc;
        }, agreeInviteIntoGroup: function() {
          return Tc;
        }, agreeJoinGroup: function() {
          return yc;
        }, blockGroup: function() {
          return lc;
        }, blockGroupMember: function() {
          return Qf;
        }, blockGroupMembers: function() {
          return Zf;
        }, blockGroupMessages: function() {
          return Nf;
        }, changeGroupOwner: function() {
          return wf;
        }, changeOwner: function() {
          return dc;
        }, createGroup: function() {
          return Cf;
        }, createGroupNew: function() {
          return uc;
        }, deleteGroupSharedFile: function() {
          return gh;
        }, destroyGroup: function() {
          return Gf;
        }, disableSendGroupMsg: function() {
          return oh;
        }, dissolveGroup: function() {
          return vc;
        }, downloadGroupSharedFile: function() {
          return yh;
        }, enableSendGroupMsg: function() {
          return ih;
        }, fetchGroupAnnouncement: function() {
          return hh;
        }, fetchGroupSharedFileList: function() {
          return Pc;
        }, getGroup: function() {
          return bf;
        }, getGroupAdmin: function() {
          return Df;
        }, getGroupAllowlist: function() {
          return uh;
        }, getGroupBlacklist: function() {
          return rh;
        }, getGroupBlacklistNew: function() {
          return Gi;
        }, getGroupBlocklist: function() {
          return nh;
        }, getGroupInfo: function() {
          return Uf;
        }, getGroupMemberAttributes: function() {
          return Th;
        }, getGroupMembersAttributes: function() {
          return kc;
        }, getGroupMsgReadUser: function() {
          return fh;
        }, getGroupMuteList: function() {
          return Xf;
        }, getGroupMutelist: function() {
          return Yf;
        }, getGroupSharedFilelist: function() {
          return Eh;
        }, getGroupWhitelist: function() {
          return Uc;
        }, getJoinedGroups: function() {
          return Mf;
        }, getMuted: function() {
          return xi;
        }, getPublicGroups: function() {
          return Af;
        }, groupBlockMulti: function() {
          return Ac;
        }, groupBlockSingle: function() {
          return Nc;
        }, inviteToGroup: function() {
          return Ec;
        }, inviteUsersToGroup: function() {
          return Bf;
        }, isGroupWhiteUser: function() {
          return Bi;
        }, isInGroupAllowlist: function() {
          return ph;
        }, isInGroupMutelist: function() {
          return dh;
        }, isInGroupWhiteList: function() {
          return lh;
        }, joinGroup: function() {
          return Hf;
        }, leaveGroup: function() {
          return jf;
        }, listGroupMember: function() {
          return fc;
        }, listGroupMembers: function() {
          return kf;
        }, listGroups: function() {
          return pc;
        }, modifyGroup: function() {
          return Pf;
        }, mute: function() {
          return Sc;
        }, muteGroupMember: function() {
          return qf;
        }, quitGroup: function() {
          return gc;
        }, rejectGroupInvite: function() {
          return Kf;
        }, rejectGroupJoinRequest: function() {
          return Wf;
        }, rejectInviteIntoGroup: function() {
          return Oc;
        }, rejectJoinGroup: function() {
          return _c;
        }, removeAdmin: function() {
          return mc;
        }, removeGroupAdmin: function() {
          return xf;
        }, removeGroupAllowlistMember: function() {
          return ch;
        }, removeGroupBlockMulti: function() {
          return Mc;
        }, removeGroupBlockSingle: function() {
          return bc;
        }, removeGroupMember: function() {
          return zf;
        }, removeGroupMembers: function() {
          return $f;
        }, removeGroupWhitelistMember: function() {
          return sh;
        }, removeMultiGroupMember: function() {
          return Ic;
        }, removeMute: function() {
          return Cc;
        }, removeSingleGroupMember: function() {
          return Rc;
        }, rmUsersFromGroupWhitelist: function() {
          return ji;
        }, setAdmin: function() {
          return hc;
        }, setGroupAdmin: function() {
          return Lf;
        }, setGroupMemberAttributes: function() {
          return _h;
        }, unblockGroupMember: function() {
          return eh;
        }, unblockGroupMembers: function() {
          return th;
        }, unmuteGroupMember: function() {
          return Jf;
        }, updateGroupAnnouncement: function() {
          return mh;
        }, uploadGroupSharedFile: function() {
          return vh;
        } });
        var O = {};
        f.r(O), f.d(O, { addUsersToChatRoom: function() {
          return bh;
        }, addUsersToChatRoomAllowlist: function() {
          return qh;
        }, addUsersToChatRoomWhitelist: function() {
          return Vc;
        }, blockChatRoomMember: function() {
          return Bh;
        }, blockChatRoomMembers: function() {
          return Hh;
        }, chatRoomBlockMulti: function() {
          return Hc;
        }, chatRoomBlockSingle: function() {
          return Bc;
        }, createChatRoom: function() {
          return Rh;
        }, deleteChatRoomSharedFile: function() {
          return nm;
        }, destroyChatRoom: function() {
          return Ih;
        }, disableSendChatRoomMsg: function() {
          return zh;
        }, enableSendChatRoomMsg: function() {
          return $h;
        }, fetchChatRoomAnnouncement: function() {
          return em;
        }, fetchChatRoomSharedFileList: function() {
          return $c;
        }, getChatRoomAdmin: function() {
          return Ph;
        }, getChatRoomAllowlist: function() {
          return Yh;
        }, getChatRoomAttributes: function() {
          return im;
        }, getChatRoomBlacklist: function() {
          return Vh;
        }, getChatRoomBlacklistNew: function() {
          return Fi;
        }, getChatRoomBlocklist: function() {
          return Kh;
        }, getChatRoomDetails: function() {
          return Sh;
        }, getChatRoomMuteList: function() {
          return Gh;
        }, getChatRoomMuted: function() {
          return Hi;
        }, getChatRoomMutelist: function() {
          return jh;
        }, getChatRoomSharedFilelist: function() {
          return om;
        }, getChatRoomWhitelist: function() {
          return Kc;
        }, getChatRooms: function() {
          return Oh;
        }, getJoinedChatRooms: function() {
          return lm;
        }, isChatRoomWhiteUser: function() {
          return zc;
        }, isInChatRoomAllowlist: function() {
          return Qh;
        }, isInChatRoomMutelist: function() {
          return Zh;
        }, joinChatRoom: function() {
          return Mh;
        }, leaveChatRoom: function() {
          return wh;
        }, listChatRoomMember: function() {
          return Gc;
        }, listChatRoomMembers: function() {
          return Uh;
        }, modifyChatRoom: function() {
          return Ch;
        }, muteChatRoomMember: function() {
          return Lh;
        }, quitChatRoom: function() {
          return xc;
        }, removeChatRoomAdmin: function() {
          return Dh;
        }, removeChatRoomAllowlistMember: function() {
          return Xh;
        }, removeChatRoomAttribute: function() {
          return um;
        }, removeChatRoomAttributes: function() {
          return cm;
        }, removeChatRoomBlockMulti: function() {
          return Wc;
        }, removeChatRoomBlockSingle: function() {
          return Fc;
        }, removeChatRoomMember: function() {
          return Nh;
        }, removeChatRoomMembers: function() {
          return Ah;
        }, removeChatRoomWhitelistMember: function() {
          return Jh;
        }, removeMultiChatRoomMember: function() {
          return Lc;
        }, removeMuteChatRoomMember: function() {
          return jc;
        }, removeSingleChatRoomMember: function() {
          return Dc;
        }, rmUsersFromChatRoomWhitelist: function() {
          return Wi;
        }, setChatRoomAdmin: function() {
          return kh;
        }, setChatRoomAttribute: function() {
          return sm;
        }, setChatRoomAttributes: function() {
          return am;
        }, unblockChatRoomMember: function() {
          return Fh;
        }, unblockChatRoomMembers: function() {
          return Wh;
        }, unmuteChatRoomMember: function() {
          return xh;
        }, updateChatRoomAnnouncement: function() {
          return tm;
        }, uploadChatRoomSharedFile: function() {
          return rm;
        } });
        var N = {};
        f.r(N), f.d(N, { getPresenceStatus: function() {
          return mm;
        }, getSubscribedPresenceList: function() {
          return Xc;
        }, getSubscribedPresencelist: function() {
          return hm;
        }, publishPresence: function() {
          return pm;
        }, subscribePresence: function() {
          return dm;
        }, unsubscribePresence: function() {
          return fm;
        } });
        var b = {};
        f.r(b), f.d(b, { clearRemindTypeForConversation: function() {
          return ym;
        }, getPushPerformLanguage: function() {
          return Rm;
        }, getSilentModeForAll: function() {
          return gm;
        }, getSilentModeForConversation: function() {
          return _m;
        }, getSilentModeForConversations: function() {
          return Tm;
        }, setPushPerformLanguage: function() {
          return Om;
        }, setSilentModeForAll: function() {
          return vm;
        }, setSilentModeForConversation: function() {
          return Em;
        } });
        var R = {};
        f.r(R), f.d(R, { changeChatThreadName: function() {
          return Am;
        }, createChatThread: function() {
          return Im;
        }, destroyChatThread: function() {
          return Nm;
        }, getChatThreadDetail: function() {
          return Dm;
        }, getChatThreadLastMessage: function() {
          return Pm;
        }, getChatThreadMembers: function() {
          return bm;
        }, getChatThreads: function() {
          return Um;
        }, getJoinedChatThreads: function() {
          return wm;
        }, joinChatThread: function() {
          return Sm;
        }, leaveChatThread: function() {
          return Cm;
        }, removeChatThreadMember: function() {
          return Mm;
        } });
        var A = {};
        f.r(A), f.d(A, { getSupportedLanguages: function() {
          return Lm;
        }, translateMessage: function() {
          return xm;
        } });
        var S = {};
        function C() {
          S.converter._configure(), S.decoder._configure(), S.encoder._configure(), S.Field._configure(), S.MapField._configure(), S.Message._configure(), S.Namespace._configure(), S.Method._configure(), S.ReflectionObject._configure(), S.OneOf._configure(), S.parse._configure(), S.Reader._configure(), S.Root._configure(), S.Service._configure(), S.verifier._configure(), S.Type._configure(), S.types._configure(), S.wrappers._configure(), S.Writer._configure();
        }
        S.build = "minimal", S.Writer = f(322), S.encoder = f(229), S.Reader = f(970), S.util = f(629), S.rpc = f(470), S.roots = f(896), S.verifier = f(811), S.tokenize = f(496), S.parse = f(922), S.common = f(940), S.ReflectionObject = f(558), S.Namespace = f(694), S.Root = f(773), S.Enum = f(660), S.Type = f(465), S.Field = f(101), S.OneOf = f(220), S.MapField = f(83), S.Service = f(177), S.Method = f(512), S.converter = f(921), S.decoder = f(801), S.Message = f(278), S.wrappers = f(793), S.types = f(452), S.util = f(629), S.configure = C, S.load = function(e, r, o) {
          return typeof r == "function" ? (o = r, r = new S.Root()) : r || (r = new S.Root()), r.load(e, o);
        }, S.loadSync = function(e, r) {
          return r || (r = new S.Root()), r.loadSync(e);
        }, S.parseFromPbString = function(e, r, o) {
          return typeof r == "function" ? (o = r, r = new S.Root()) : r || (r = new S.Root()), r.parseFromPbString(e, o);
        }, C();
        var l, P = S, B = f(570), M = f.n(B), g = function() {
          function e(r) {
            this.type = r.type, this.message = r.message, this.data = r.data;
          }
          return e.create = function(r) {
            return new e(r);
          }, e;
        }();
        (function(e) {
          e[e.REQUEST_SUCCESS = 0] = "REQUEST_SUCCESS", e[e.REQUEST_TIMEOUT = -1] = "REQUEST_TIMEOUT", e[e.REQUEST_UNKNOWN = -2] = "REQUEST_UNKNOWN", e[e.REQUEST_PARAMETER_ERROR = -3] = "REQUEST_PARAMETER_ERROR", e[e.REQUEST_ABORT = -4] = "REQUEST_ABORT", e[e.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0] = "WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_OPEN_ERROR = 1] = "WEBIM_CONNCTION_OPEN_ERROR", e[e.WEBIM_CONNCTION_AUTH_ERROR = 2] = "WEBIM_CONNCTION_AUTH_ERROR", e[e.WEBIM_CONNCTION_OPEN_USERGRID_ERROR = 3] = "WEBIM_CONNCTION_OPEN_USERGRID_ERROR", e[e.WEBIM_CONNCTION_ATTACH_ERROR = 4] = "WEBIM_CONNCTION_ATTACH_ERROR", e[e.WEBIM_CONNCTION_ATTACH_USERGRID_ERROR = 5] = "WEBIM_CONNCTION_ATTACH_USERGRID_ERROR", e[e.WEBIM_CONNCTION_REOPEN_ERROR = 6] = "WEBIM_CONNCTION_REOPEN_ERROR", e[e.WEBIM_CONNCTION_SERVER_CLOSE_ERROR = 7] = "WEBIM_CONNCTION_SERVER_CLOSE_ERROR", e[e.WEBIM_CONNCTION_SERVER_ERROR = 8] = "WEBIM_CONNCTION_SERVER_ERROR", e[e.WEBIM_CONNCTION_IQ_ERROR = 9] = "WEBIM_CONNCTION_IQ_ERROR", e[e.WEBIM_CONNCTION_PING_ERROR = 10] = "WEBIM_CONNCTION_PING_ERROR", e[e.WEBIM_CONNCTION_NOTIFYVERSION_ERROR = 11] = "WEBIM_CONNCTION_NOTIFYVERSION_ERROR", e[e.WEBIM_CONNCTION_GETROSTER_ERROR = 12] = "WEBIM_CONNCTION_GETROSTER_ERROR", e[e.WEBIM_CONNCTION_CROSSDOMAIN_ERROR = 13] = "WEBIM_CONNCTION_CROSSDOMAIN_ERROR", e[e.WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = 14] = "WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES", e[e.WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR = 15] = "WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR", e[e.WEBIM_CONNCTION_DISCONNECTED = 16] = "WEBIM_CONNCTION_DISCONNECTED", e[e.WEBIM_CONNCTION_AJAX_ERROR = 17] = "WEBIM_CONNCTION_AJAX_ERROR", e[e.WEBIM_CONNCTION_JOINROOM_ERROR = 18] = "WEBIM_CONNCTION_JOINROOM_ERROR", e[e.WEBIM_CONNCTION_GETROOM_ERROR = 19] = "WEBIM_CONNCTION_GETROOM_ERROR", e[e.WEBIM_CONNCTION_GETROOMINFO_ERROR = 20] = "WEBIM_CONNCTION_GETROOMINFO_ERROR", e[e.WEBIM_CONNCTION_GETROOMMEMBER_ERROR = 21] = "WEBIM_CONNCTION_GETROOMMEMBER_ERROR", e[e.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR = 22] = "WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR", e[e.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR = 23] = "WEBIM_CONNCTION_LOAD_CHATROOM_ERROR", e[e.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR = 24] = "WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR", e[e.WEBIM_CONNCTION_JOINCHATROOM_ERROR = 25] = "WEBIM_CONNCTION_JOINCHATROOM_ERROR", e[e.WEBIM_CONNCTION_QUITCHATROOM_ERROR = 26] = "WEBIM_CONNCTION_QUITCHATROOM_ERROR", e[e.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27] = "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28] = "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR = 29] = "WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR = 30] = "WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR", e[e.WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31] = "WEBIM_CONNCTION_CALLBACK_INNER_ERROR", e[e.WEBIM_CONNCTION_CLIENT_OFFLINE = 32] = "WEBIM_CONNCTION_CLIENT_OFFLINE", e[e.WEBIM_CONNCTION_CLIENT_LOGOUT = 33] = "WEBIM_CONNCTION_CLIENT_LOGOUT", e[e.WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR = 34] = "WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR", e[e.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP = 35] = "WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP", e[e.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP = 36] = "WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP", e[e.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP = 37] = "WEBIM_CONNECTION_ACCEPT_JOIN_GROUP", e[e.WEBIM_CONNECTION_DECLINE_JOIN_GROUP = 38] = "WEBIM_CONNECTION_DECLINE_JOIN_GROUP", e[e.WEBIM_CONNECTION_CLOSED = 39] = "WEBIM_CONNECTION_CLOSED", e[e.WEBIM_CONNECTION_ERROR = 40] = "WEBIM_CONNECTION_ERROR", e[e.MAX_LIMIT = 50] = "MAX_LIMIT", e[e.MESSAGE_NOT_FOUND = 51] = "MESSAGE_NOT_FOUND", e[e.NO_PERMISSION = 52] = "NO_PERMISSION", e[e.OPERATION_UNSUPPORTED = 53] = "OPERATION_UNSUPPORTED", e[e.OPERATION_NOT_ALLOWED = 54] = "OPERATION_NOT_ALLOWED", e[e.WEBIM_TOKEN_EXPIRED = 56] = "WEBIM_TOKEN_EXPIRED", e[e.WEBIM_SERVER_SERVING_DISABLED = 57] = "WEBIM_SERVER_SERVING_DISABLED", e[e.WEBIM_UPLOADFILE_BROWSER_ERROR = 100] = "WEBIM_UPLOADFILE_BROWSER_ERROR", e[e.WEBIM_UPLOADFILE_ERROR = 101] = "WEBIM_UPLOADFILE_ERROR", e[e.WEBIM_UPLOADFILE_NO_LOGIN = 102] = "WEBIM_UPLOADFILE_NO_LOGIN", e[e.WEBIM_UPLOADFILE_NO_FILE = 103] = "WEBIM_UPLOADFILE_NO_FILE", e[e.WEBIM_DOWNLOADFILE_ERROR = 200] = "WEBIM_DOWNLOADFILE_ERROR", e[e.WEBIM_DOWNLOADFILE_NO_LOGIN = 201] = "WEBIM_DOWNLOADFILE_NO_LOGIN", e[e.WEBIM_DOWNLOADFILE_BROWSER_ERROR = 202] = "WEBIM_DOWNLOADFILE_BROWSER_ERROR", e[e.PARSE_FILE_ERROR = 203] = "PARSE_FILE_ERROR", e[e.USER_NOT_FOUND = 204] = "USER_NOT_FOUND", e[e.MESSAGE_PARAMETER_ERROR = 205] = "MESSAGE_PARAMETER_ERROR", e[e.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206] = "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE", e[e.WEBIM_CONNCTION_USER_REMOVED = 207] = "WEBIM_CONNCTION_USER_REMOVED", e[e.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216] = "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD", e[e.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217] = "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE", e[e.USER_MUTED_BY_ADMIN = 219] = "USER_MUTED_BY_ADMIN", e[e.USER_NOT_FRIEND = 221] = "USER_NOT_FRIEND", e[e.WEBIM_MESSAGE_REC_TEXT = 300] = "WEBIM_MESSAGE_REC_TEXT", e[e.WEBIM_MESSAGE_REC_TEXT_ERROR = 301] = "WEBIM_MESSAGE_REC_TEXT_ERROR", e[e.WEBIM_MESSAGE_REC_EMOTION = 302] = "WEBIM_MESSAGE_REC_EMOTION", e[e.WEBIM_MESSAGE_REC_PHOTO = 303] = "WEBIM_MESSAGE_REC_PHOTO", e[e.WEBIM_MESSAGE_REC_AUDIO = 304] = "WEBIM_MESSAGE_REC_AUDIO", e[e.WEBIM_MESSAGE_REC_AUDIO_FILE = 305] = "WEBIM_MESSAGE_REC_AUDIO_FILE", e[e.WEBIM_MESSAGE_REC_VEDIO = 306] = "WEBIM_MESSAGE_REC_VEDIO", e[e.WEBIM_MESSAGE_REC_VEDIO_FILE = 307] = "WEBIM_MESSAGE_REC_VEDIO_FILE", e[e.WEBIM_MESSAGE_REC_FILE = 308] = "WEBIM_MESSAGE_REC_FILE", e[e.WEBIM_MESSAGE_SED_TEXT = 309] = "WEBIM_MESSAGE_SED_TEXT", e[e.WEBIM_MESSAGE_SED_EMOTION = 310] = "WEBIM_MESSAGE_SED_EMOTION", e[e.WEBIM_MESSAGE_SED_PHOTO = 311] = "WEBIM_MESSAGE_SED_PHOTO", e[e.WEBIM_MESSAGE_SED_AUDIO = 312] = "WEBIM_MESSAGE_SED_AUDIO", e[e.WEBIM_MESSAGE_SED_AUDIO_FILE = 313] = "WEBIM_MESSAGE_SED_AUDIO_FILE", e[e.WEBIM_MESSAGE_SED_VEDIO = 314] = "WEBIM_MESSAGE_SED_VEDIO", e[e.WEBIM_MESSAGE_SED_VEDIO_FILE = 315] = "WEBIM_MESSAGE_SED_VEDIO_FILE", e[e.WEBIM_MESSAGE_SED_FILE = 316] = "WEBIM_MESSAGE_SED_FILE", e[e.WEBIM_MESSAGE_SED_ERROR = 317] = "WEBIM_MESSAGE_SED_ERROR", e[e.STATUS_INIT = 400] = "STATUS_INIT", e[e.STATUS_DOLOGIN_USERGRID = 401] = "STATUS_DOLOGIN_USERGRID", e[e.STATUS_DOLOGIN_IM = 402] = "STATUS_DOLOGIN_IM", e[e.STATUS_OPENED = 403] = "STATUS_OPENED", e[e.STATUS_CLOSING = 404] = "STATUS_CLOSING", e[e.STATUS_CLOSED = 405] = "STATUS_CLOSED", e[e.STATUS_ERROR = 406] = "STATUS_ERROR", e[e.SERVER_BUSY = 500] = "SERVER_BUSY", e[e.MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501] = "MESSAGE_INCLUDE_ILLEGAL_CONTENT", e[e.MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502] = "MESSAGE_EXTERNAL_LOGIC_BLOCKED", e[e.SERVER_UNKNOWN_ERROR = 503] = "SERVER_UNKNOWN_ERROR", e[e.MESSAGE_RECALL_TIME_LIMIT = 504] = "MESSAGE_RECALL_TIME_LIMIT", e[e.SERVICE_NOT_ENABLED = 505] = "SERVICE_NOT_ENABLED", e[e.SERVICE_NOT_ALLOW_MESSAGING = 506] = "SERVICE_NOT_ALLOW_MESSAGING", e[e.SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507] = "SERVICE_NOT_ALLOW_MESSAGING_MUTE", e[e.MESSAGE_MODERATION_BLOCKED = 508] = "MESSAGE_MODERATION_BLOCKED", e[e.MESSAGE_CURRENT_LIMITING = 509] = "MESSAGE_CURRENT_LIMITING", e[e.MESSAGE_WEBSOCKET_DISCONNECTED = 510] = "MESSAGE_WEBSOCKET_DISCONNECTED", e[e.MESSAGE_SIZE_LIMIT = 511] = "MESSAGE_SIZE_LIMIT", e[e.GROUP_NOT_EXIST = 605] = "GROUP_NOT_EXIST", e[e.GROUP_NOT_JOINED = 602] = "GROUP_NOT_JOINED", e[e.GROUP_MEMBERS_FULL = 606] = "GROUP_MEMBERS_FULL", e[e.PERMISSION_DENIED = 603] = "PERMISSION_DENIED", e[e.WEBIM_LOAD_MSG_ERROR = 604] = "WEBIM_LOAD_MSG_ERROR", e[e.GROUP_ALREADY_JOINED = 601] = "GROUP_ALREADY_JOINED", e[e.GROUP_MEMBERS_LIMIT = 607] = "GROUP_MEMBERS_LIMIT", e[e.GROUP_IS_DISABLED = 608] = "GROUP_IS_DISABLED", e[e.GROUP_MEMBER_ATTRIBUTES_SET_FAILED = 609] = "GROUP_MEMBER_ATTRIBUTES_SET_FAILED", e[e.REST_PARAMS_STATUS = 700] = "REST_PARAMS_STATUS", e[e.CHATROOM_NOT_JOINED = 702] = "CHATROOM_NOT_JOINED", e[e.CHATROOM_MEMBERS_FULL = 704] = "CHATROOM_MEMBERS_FULL", e[e.CHATROOM_NOT_EXIST = 705] = "CHATROOM_NOT_EXIST", e[e.LOCAL_DB_OPERATION_FAILED = 800] = "LOCAL_DB_OPERATION_FAILED", e[e.SDK_RUNTIME_ERROR = 999] = "SDK_RUNTIME_ERROR", e[e.PRESENCE_PARAM_EXCEED = 1100] = "PRESENCE_PARAM_EXCEED", e[e.REACTION_ALREADY_ADDED = 1101] = "REACTION_ALREADY_ADDED", e[e.REACTION_CREATING = 1102] = "REACTION_CREATING", e[e.REACTION_OPERATION_IS_ILLEGAL = 1103] = "REACTION_OPERATION_IS_ILLEGAL", e[e.TRANSLATION_NOT_VALID = 1200] = "TRANSLATION_NOT_VALID", e[e.TRANSLATION_TEXT_TOO_LONG = 1201] = "TRANSLATION_TEXT_TOO_LONG", e[e.TRANSLATION_FAILED = 1204] = "TRANSLATION_FAILED", e[e.THREAD_NOT_EXIST = 1300] = "THREAD_NOT_EXIST", e[e.THREAD_ALREADY_EXIST = 1301] = "THREAD_ALREADY_EXIST", e[e.MODIFY_MESSAGE_NOT_EXIST = 1302] = "MODIFY_MESSAGE_NOT_EXIST", e[e.MODIFY_MESSAGE_FORMAT_ERROR = 1303] = "MODIFY_MESSAGE_FORMAT_ERROR", e[e.MODIFY_MESSAGE_FAILED = 1304] = "MODIFY_MESSAGE_FAILED", e[e.CONVERSATION_NOT_EXIST = 1400] = "CONVERSATION_NOT_EXIST";
        })(l || (l = {}));
        var x, h, U, W, Z, te, G = function() {
          return G = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, G.apply(this, arguments);
        }, q = function(e, r, o, a) {
          var s, d, u, m, p, T, v, D, H, k, w, F, V, ue, pe, le, ge, ye, Ne, Ie, Ae, Te, Ye, Ke, X = e.response;
          X && typeof X == "string" && (X = JSON.parse(X));
          var Se = e.status, Y = { elapse: a, httpCode: Se, errDesc: X == null ? void 0 : X.error_description };
          if (Se === 400) {
            if (X.error_code === 40002) return void r({ type: l.THREAD_ALREADY_EXIST, message: X == null ? void 0 : X.error_description, extraInfo: Y });
            if (X.error_code === 40009) return void r({ type: l.OPERATION_UNSUPPORTED, message: X == null ? void 0 : X.error_description, extraInfo: Y });
            if (X.error_code === 60005) return void r({ type: l.GROUP_MEMBER_ATTRIBUTES_SET_FAILED, message: (X == null ? void 0 : X.desc) || (X == null ? void 0 : X.error_description), extraInfo: Y });
            if (X.error_code === 60010) return void (X != null && X.error_description.includes("exceeds chatgroup user metadata single value limit") ? r({ type: l.MAX_LIMIT, message: (X == null ? void 0 : X.desc) || X.error_description, extraInfo: Y }) : r({ type: l.NO_PERMISSION, message: (X == null ? void 0 : X.desc) || X.error_description, extraInfo: Y }));
            if (X.error_code === 60011) return void r({ type: l.CHATROOM_NOT_JOINED, message: X == null ? void 0 : X.desc, extraInfo: Y });
            if (X.error_code === 14403) return void r({ type: l.WEBIM_UPLOADFILE_ERROR, message: X == null ? void 0 : X.error_description, data: X, extraInfo: Y });
            if (X.error_code === 60006 || X.error_code === 60007 || X.error_code === 60009 || X.error_code === 60012) return void r({ type: l.MAX_LIMIT, message: (X == null ? void 0 : X.desc) || (X == null ? void 0 : X.error_description), extraInfo: Y });
            if (X.error_code === 91104) return void r({ type: l.NO_PERMISSION, message: X == null ? void 0 : X.error_description, extraInfo: Y });
            if (!((s = X.error_description) === null || s === void 0) && s.includes("are not members of this group")) return !((d = e.responseURL) === null || d === void 0) && d.includes("chatgroups") ? r({ type: l.GROUP_NOT_JOINED, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : r({ type: l.CHATROOM_NOT_JOINED, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }), void o({ type: l.WEBIM_CONNCTION_AJAX_ERROR, message: X == null ? void 0 : X.error_description, data: e.responseText, extraInfo: Y });
            if ((X == null ? void 0 : X.result) === "the app not open presence") return void r({ type: l.SERVICE_NOT_ENABLED, message: X == null ? void 0 : X.result, extraInfo: Y });
            if (X != null && X.error_description.includes("remark length must less")) return void r({ type: l.MAX_LIMIT, message: X == null ? void 0 : X.error_description, extraInfo: Y });
            switch (X == null ? void 0 : X.error_description) {
              case "the user is already operation this message":
                r({ type: l.REACTION_ALREADY_ADDED, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "The quantity has exceeded the limit!":
                r({ type: l.MAX_LIMIT, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "The user not in this group!":
                r({ type: l.GROUP_NOT_JOINED, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "the user operation is illegal!":
                r({ type: l.REACTION_OPERATION_IS_ILLEGAL, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "this appKey is not open reaction service!":
              case "this appKey not open message roaming":
                r({ type: l.SERVICE_NOT_ENABLED, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "this message is creating reaction, please try again.":
                r({ type: l.REACTION_CREATING, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "groupId can not be null!":
                r({ type: l.GROUP_NOT_EXIST, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "The input text is too long.":
                r({ type: l.TRANSLATION_TEXT_TOO_LONG, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "The target language is not valid.":
                r({ type: l.TRANSLATION_NOT_VALID, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "report failed, get message by id failed":
                r({ type: l.MESSAGE_NOT_FOUND, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "ext is too big ":
                r({ type: l.PRESENCE_PARAM_EXCEED, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "Request body not readable.Please check content type is correct!":
              case "param mark must be not empty, please check!":
              case "param mark illegal, please check it!":
              case "param pin_msg_id illegal, please check it!":
              case "param type only allow [groupchat,chatroom]!, please check!":
                r({ type: l.REQUEST_PARAMETER_ERROR, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              case "updateRemark | they are not friends, please add as a friend first.":
                r({ type: l.USER_NOT_FRIEND, message: X == null ? void 0 : X.error_description, extraInfo: Y });
                break;
              default:
                r({ type: l.WEBIM_CONNCTION_AJAX_ERROR, message: X == null ? void 0 : X.error_description, data: e.responseText, extraInfo: Y }), o({ type: l.WEBIM_CONNCTION_AJAX_ERROR, message: X == null ? void 0 : X.error_description, data: e.responseText, extraInfo: Y });
            }
          } else if (Se === 401) X.error_code === 40001 || X.error_code === 60001 || X.error_description === "Unable to authenticate (OAuth)" ? r({ type: l.NO_PERMISSION, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : (o({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.responseText, message: e.responseText, extraInfo: Y }), r({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.responseText, message: e.responseText, extraInfo: Y }));
          else if (Se === 403) X.error_code === 4e4 || X.error_code === 60004 || X.error_code === 15002 ? r({ type: l.SERVICE_NOT_ENABLED, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : X.error_code === 40003 || X.error_code === 40004 ? r({ type: l.THREAD_ALREADY_EXIST, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : X.error_code === 40005 || X.error_code === 40007 || X.error_code === 91002 ? r({ type: l.MAX_LIMIT, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : X.error_code === 60002 ? r({ type: l.PERMISSION_DENIED, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : X.error_code === 91101 ? r({ type: l.MAX_LIMIT, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : X.error_code === 91102 && r({ type: l.REQUEST_PARAMETER_ERROR, message: X.error_description, extraInfo: Y }), X.error_description === "group member list is full!" ? !((u = e.responseURL) === null || u === void 0) && u.includes("chatgroups") ? r({ type: l.GROUP_MEMBERS_FULL, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : r({ type: l.CHATROOM_MEMBERS_FULL, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : !((m = X.error_description) === null || m === void 0) && m.includes(X.error_description.includes("already in group")) ? !((p = e.responseURL) === null || p === void 0) && p.includes("chatgroups") && r({ type: l.GROUP_ALREADY_JOINED, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : !((T = X.error_description) === null || T === void 0) && T.includes("are not members of this group") ? !((v = e.responseURL) === null || v === void 0) && v.includes("chatgroups") ? r({ type: l.GROUP_NOT_JOINED, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : r({ type: l.CHATROOM_NOT_JOINED, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : !((D = X.error_description) === null || D === void 0) && D.includes("service not open!") || !((H = X.error_description) === null || H === void 0) && H.includes("message report not open") || !((k = X.error_description) === null || k === void 0) && k.includes("messageroaming function not open") ? r({ type: l.SERVICE_NOT_ENABLED, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : !((w = X.error_description) === null || w === void 0) && w.includes("members size is greater than max user size !") ? r({ type: l.GROUP_MEMBERS_LIMIT, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : !((F = X.error_description) === null || F === void 0) && F.includes("can not operate this group, reason: group is disabled") ? r({ type: l.GROUP_IS_DISABLED, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : !((V = X.error_description) === null || V === void 0) && V.includes("Invitee's contact max count") || !((ue = X.error_description) === null || ue === void 0) && ue.includes("Inviter's contact max count") ? r({ type: l.MAX_LIMIT, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : r({ type: l.PERMISSION_DENIED, data: e.response || e.responseText, message: "permission denied", extraInfo: G(G({}, Y), { errDesc: "permission denied" }) }), o({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.responseText, message: e.responseText, extraInfo: Y });
          else if (Se === 404) X.error_code === 40011 ? r({ type: l.THREAD_NOT_EXIST, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : X.error_code === 40012 ? r({ type: l.NO_PERMISSION, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : X.error_code === 60003 || X.error_code === 20004 ? r({ type: l.GROUP_NOT_JOINED, message: X == null ? void 0 : X.error_description, extraInfo: Y }) : X.error_code === 91001 && r({ type: l.CONVERSATION_NOT_EXIST, message: X == null ? void 0 : X.error_description, extraInfo: Y }), !((pe = X.error_description) === null || pe === void 0) && pe.includes("do not find this group") || !((le = X.error_description) === null || le === void 0) && le.includes("does not exist") ? !((ge = e.responseURL) === null || ge === void 0) && ge.includes("chatgroups") ? r({ type: l.GROUP_NOT_EXIST, data: e.response || e.responseText, message: "The chat room dose not exist.", extraInfo: G(G({}, Y), { errDesc: "The chat room dose not exist." }) }) : r({ type: l.CHATROOM_NOT_EXIST, data: e.response || e.responseText, message: "The chat room dose not exist.", extraInfo: G(G({}, Y), { errDesc: "The chat room dose not exist." }) }) : !((ye = X.error_description) === null || ye === void 0) && ye.includes("username") && (!((Ne = X.error_description) === null || Ne === void 0) && Ne.includes("doesn't exist!'")) || !((Ie = X.error_description) === null || Ie === void 0) && Ie.includes("user not found") || !((Ae = X.error_description) === null || Ae === void 0) && Ae.includes("Service resource not found") && (X == null ? void 0 : X.exception) === "UserNotFoundException" ? r({ type: l.USER_NOT_FOUND, data: e.response || e.responseText, message: X.error_description, extraInfo: Y }) : X.error_description.includes("user session pin message not exist") ? r({ type: l.MESSAGE_NOT_FOUND, message: X.error_description, extraInfo: Y }) : r({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.response || e.responseText, message: e.responseText, extraInfo: Y }), o({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.response || e.responseText, message: e.responseText, extraInfo: Y });
          else if (Se === 406) X.error_code === 90004 && r({ type: l.OPERATION_NOT_ALLOWED, message: X == null ? void 0 : X.error_description, extraInfo: Y });
          else if (Se === 429 || Se === 503) {
            if (!((Te = X.error_description) === null || Te === void 0) && Te.includes("The request has reached the maximum limit")) return void r({ type: l.MAX_LIMIT, message: e.responseText, extraInfo: Y });
            if (!((Ye = X.error_description) === null || Ye === void 0) && Ye.includes("upload client logs reached limit")) return void r({ type: l.MAX_LIMIT, message: e.responseText });
            r({ type: l.SERVER_BUSY, data: e.response || e.responseText, message: "Server is busy.", extraInfo: G(G({}, Y), { errDesc: "Server is busy." }) }), o({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.responseText, message: "Server is busy.", extraInfo: G(G({}, Y), { errDesc: "Server is busy." }) });
          } else if (Se === 500) {
            if (X.error_code === 40006 || X.error_code === 40008 || X.error_code === 40010) return void r({ type: l.SERVER_UNKNOWN_ERROR, message: X == null ? void 0 : X.error_description, extraInfo: Y });
            if (X.error_code === 90005 || X.error_code === 99999) return void r({ type: l.REQUEST_UNKNOWN, message: X == null ? void 0 : X.error_description, extraInfo: Y });
            if (!((Ke = X.error_description) === null || Ke === void 0) && Ke.includes("translte failed!")) return void r({ type: l.TRANSLATION_FAILED, message: e.responseText, extraInfo: Y });
            r({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.responseText, message: "", extraInfo: Y }), o({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.responseText, message: "", extraInfo: Y });
          } else r({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.responseText, message: e.responseText, extraInfo: G(G({}, Y), { errDesc: "ajax error" }) }), o({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: e.responseText, message: e.responseText, extraInfo: G(G({}, Y), { errDesc: "ajax error" }) });
        };
        (function(e) {
          e[e.UNKNOWOPERATION = -1] = "UNKNOWOPERATION", e[e.REST_GET_SESSION_LIST = 1] = "REST_GET_SESSION_LIST", e[e.REST_DEL_SESSION = 2] = "REST_DEL_SESSION", e[e.REST_GET_HISTORY_MESSAGE = 3] = "REST_GET_HISTORY_MESSAGE", e[e.REST_PIN_CONVERSATION = 4] = "REST_PIN_CONVERSATION", e[e.REST_MARK_CONVERSATION = 5] = "REST_MARK_CONVERSATION", e[e.REST_UPLOAD_FILE_IN_PARTS = 6] = "REST_UPLOAD_FILE_IN_PARTS", e[e.REST_DELETE_MESSAGES_CONVERSATIONS = 7] = "REST_DELETE_MESSAGES_CONVERSATIONS", e[e.REST_PIN_MESSAGE = 8] = "REST_PIN_MESSAGE", e[e.REST_FETCH_PINMESSAGES = 9] = "REST_FETCH_PINMESSAGES", e[e.REST_OPERATE = 100] = "REST_OPERATE", e[e.MSYNC_SENDMESSAGE = 101] = "MSYNC_SENDMESSAGE", e[e.MSYNC_RECALLMESSAGE = 102] = "MSYNC_RECALLMESSAGE", e[e.MSYNC_MODIFYMESSAGE = 103] = "MSYNC_MODIFYMESSAGE", e[e.MSYNC_OPERATE = 200] = "MSYNC_OPERATE", e[e.ROSTER_ADD = 201] = "ROSTER_ADD", e[e.ROSTER_REMOVE = 202] = "ROSTER_REMOVE", e[e.ROSTER_ACCEPT = 203] = "ROSTER_ACCEPT", e[e.ROSTER_DECLINE = 204] = "ROSTER_DECLINE", e[e.ROSTER_BAN = 205] = "ROSTER_BAN", e[e.ROSTER_ALLOW = 206] = "ROSTER_ALLOW", e[e.ROSTER_BLACKLIST = 207] = "ROSTER_BLACKLIST", e[e.ROSTER_CONTACTS = 208] = "ROSTER_CONTACTS", e[e.ROSTER_GET_ALL_CONTACTS_REMARKS = 209] = "ROSTER_GET_ALL_CONTACTS_REMARKS", e[e.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE = 210] = "ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE", e[e.ROSTER_SET_CONTACT_REMARK = 211] = "ROSTER_SET_CONTACT_REMARK", e[e.ROSTER_OPERATE = 300] = "ROSTER_OPERATE", e[e.USER_LOGIN = 301] = "USER_LOGIN", e[e.USER_CREATE = 302] = "USER_CREATE", e[e.USER_UPDATE_USERINFO = 303] = "USER_UPDATE_USERINFO", e[e.USER_FETCH_USERINFO = 304] = "USER_FETCH_USERINFO", e[e.USER_UPDATE_NICK = 305] = "USER_UPDATE_NICK", e[e.USER_UPLOAD_PUSH_TOKEN = 306] = "USER_UPLOAD_PUSH_TOKEN", e[e.USER_LOGGEDIN_OTHER_PLATFORM = 307] = "USER_LOGGEDIN_OTHER_PLATFORM", e[e.USER_OPERATE = 400] = "USER_OPERATE", e[e.GROUP_CREATEGROUP = 401] = "GROUP_CREATEGROUP", e[e.GROUP_BLOCK_MESSAGE = 402] = "GROUP_BLOCK_MESSAGE", e[e.GROUP_FETCH_PUBLICGROUPS_WITHCURSOR = 403] = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e[e.GROUP_FETCH_USERS_GROUP = 404] = "GROUP_FETCH_USERS_GROUP", e[e.GROUP_CHANGE_OWNER = 405] = "GROUP_CHANGE_OWNER", e[e.GROUP_FETCH_SPECIFICATION = 406] = "GROUP_FETCH_SPECIFICATION", e[e.GROUP_CHANGE_GROUPATTRIBUTE = 407] = "GROUP_CHANGE_GROUPATTRIBUTE", e[e.GROUP_FETCH_MEMEBERS = 408] = "GROUP_FETCH_MEMEBERS", e[e.GROUP_GET_ADMIN = 409] = "GROUP_GET_ADMIN", e[e.GROUP_SET_ADMIN = 410] = "GROUP_SET_ADMIN", e[e.GROUP_REMOVE_ADMIN = 411] = "GROUP_REMOVE_ADMIN", e[e.GROUP_DESTOTYGROUP = 412] = "GROUP_DESTOTYGROUP", e[e.GROUP_LEAVEGROUP = 413] = "GROUP_LEAVEGROUP", e[e.GROUP_INVITE_TO_GROUP = 414] = "GROUP_INVITE_TO_GROUP", e[e.GROUP_JOIN_PUBLICGROUP = 415] = "GROUP_JOIN_PUBLICGROUP", e[e.GROUP_ACCEPT_JOINPUBLICGROUPAPPL = 416] = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e[e.GROUP_DECLINE_JOINPUBLICGROUPAPPL = 417] = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e[e.GROUP_ACCEPT_INVITATION = 418] = "GROUP_ACCEPT_INVITATION", e[e.GROUP_DECLINE_INVITATION = 419] = "GROUP_DECLINE_INVITATION", e[e.GROUP_REMOVE_MEMBER = 420] = "GROUP_REMOVE_MEMBER", e[e.GROUP_REMOVE_MEMBERS = 421] = "GROUP_REMOVE_MEMBERS", e[e.GROUP_MUTE_MEMBERS = 422] = "GROUP_MUTE_MEMBERS", e[e.GROUP_UNMUTE_MEMBERS = 423] = "GROUP_UNMUTE_MEMBERS", e[e.GROUP_FETCH_MUTES = 424] = "GROUP_FETCH_MUTES", e[e.GROUP_BLOCK_MEMBER = 425] = "GROUP_BLOCK_MEMBER", e[e.GROUP_BLOCK_MEMBERS = 426] = "GROUP_BLOCK_MEMBERS", e[e.GROUP_UNBLOCK_MEMBER = 427] = "GROUP_UNBLOCK_MEMBER", e[e.GROUP_UNBLOCK_MEMBERS = 428] = "GROUP_UNBLOCK_MEMBERS", e[e.GROUP_GET_BLOCK_LIST = 429] = "GROUP_GET_BLOCK_LIST", e[e.GROUP_MUTE_ALLMEMBERS = 430] = "GROUP_MUTE_ALLMEMBERS", e[e.GROUP_UNMUTE_ALLMEMBERS = 431] = "GROUP_UNMUTE_ALLMEMBERS", e[e.GROUP_ADD_WHITELIST = 432] = "GROUP_ADD_WHITELIST", e[e.GROUP_REMOVE_WHITELIST = 433] = "GROUP_REMOVE_WHITELIST", e[e.GROUP_FETCH_WHITELIST = 434] = "GROUP_FETCH_WHITELIST", e[e.GROUP_IS_IN_WHITELIST = 435] = "GROUP_IS_IN_WHITELIST", e[e.GROUP_GET_READ_USERS = 436] = "GROUP_GET_READ_USERS", e[e.GROUP_FETCH_ANNOUNCEMENT = 437] = "GROUP_FETCH_ANNOUNCEMENT", e[e.GROUP_UPDATE_ANNOUNCEMENT = 438] = "GROUP_UPDATE_ANNOUNCEMENT", e[e.GROUP_UPLOAD_SHAREDFILE = 439] = "GROUP_UPLOAD_SHAREDFILE", e[e.GROUP_DELETE_SHAREDFILE = 440] = "GROUP_DELETE_SHAREDFILE", e[e.GROUP_FETCH_SHAREDFILE = 441] = "GROUP_FETCH_SHAREDFILE", e[e.GROUP_DOWNLOAD_SHAREDFILE = 442] = "GROUP_DOWNLOAD_SHAREDFILE", e[e.GROUP_MEMBER_SET_META_DATA = 443] = "GROUP_MEMBER_SET_META_DATA", e[e.GROUP_MEMBER_FETCH_META_DATA = 444] = "GROUP_MEMBER_FETCH_META_DATA", e[e.GROUP_OPERATE = 500] = "GROUP_OPERATE", e[e.CHATROOM_FETCH_CHATROOMSWITHPAGE = 501] = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e[e.CHATROOM_CREATECHATROOM = 502] = "CHATROOM_CREATECHATROOM", e[e.CHATROOM_DESTORYCHATROOM = 503] = "CHATROOM_DESTORYCHATROOM", e[e.CHATROOM_FETCH_SPECIFICATION = 504] = "CHATROOM_FETCH_SPECIFICATION", e[e.CHATROOM_CHANGE_ATTRIBUTE = 505] = "CHATROOM_CHANGE_ATTRIBUTE", e[e.CHATROOM_REMOVE_MEMBER = 506] = "CHATROOM_REMOVE_MEMBER", e[e.CHATROOM_REMOVE_MEMBERS = 507] = "CHATROOM_REMOVE_MEMBERS", e[e.CHATROOM_ADD_MEMBERS = 508] = "CHATROOM_ADD_MEMBERS", e[e.CHATROOM_JOINCAHTROOM = 509] = "CHATROOM_JOINCAHTROOM", e[e.CHATROOM_LEAVECAHTROOM = 510] = "CHATROOM_LEAVECAHTROOM", e[e.CHATROOM_FETCH_MEMBERS = 511] = "CHATROOM_FETCH_MEMBERS", e[e.CHATROOM_GET_ADMIN = 512] = "CHATROOM_GET_ADMIN", e[e.CHATROOM_SET_ADMIN = 513] = "CHATROOM_SET_ADMIN", e[e.CHATROOM_REMOVE_ADMIN = 514] = "CHATROOM_REMOVE_ADMIN", e[e.CHATROOM_MUTE_USER = 515] = "CHATROOM_MUTE_USER", e[e.CHATROOM_UNMUTE_USER = 516] = "CHATROOM_UNMUTE_USER", e[e.CHATROOM_FETCH_MUTES = 517] = "CHATROOM_FETCH_MUTES", e[e.CHATROOM_BLOCK_USER = 518] = "CHATROOM_BLOCK_USER", e[e.CHATROOM_BLOCK_USERS = 519] = "CHATROOM_BLOCK_USERS", e[e.CHATROOM_UNBLOCK_USER = 520] = "CHATROOM_UNBLOCK_USER", e[e.CHATROOM_UNBLOCK_USERS = 521] = "CHATROOM_UNBLOCK_USERS", e[e.CHATROOM_FETCH_BANS = 522] = "CHATROOM_FETCH_BANS", e[e.CHATROOM_MUTE_ALLMEMEBERS = 523] = "CHATROOM_MUTE_ALLMEMEBERS", e[e.CHATROOM_UNMUTE_ALLMEMEBERS = 524] = "CHATROOM_UNMUTE_ALLMEMEBERS", e[e.CHATROOM_ADD_WHITELIST = 525] = "CHATROOM_ADD_WHITELIST", e[e.CHATROOM_REMOVE_WHITELIST = 526] = "CHATROOM_REMOVE_WHITELIST", e[e.CHATROOM_FETCH_WHITELIST = 527] = "CHATROOM_FETCH_WHITELIST", e[e.CHATROOM_FETCH_MEMBERIN_WHITELIST = 528] = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e[e.CHATROOM_FETCH_ANNOUNCEMENT = 529] = "CHATROOM_FETCH_ANNOUNCEMENT", e[e.CHATROOM_UPDATE_ANNOUNCEMENT = 530] = "CHATROOM_UPDATE_ANNOUNCEMENT", e[e.CHATROOM_REMOVE_SHARE_FILE = 531] = "CHATROOM_REMOVE_SHARE_FILE", e[e.CHATROOM_GET_SHARE_FILE_LIST = 532] = "CHATROOM_GET_SHARE_FILE_LIST", e[e.CHATROOM_UPLOAD_FILE = 533] = "CHATROOM_UPLOAD_FILE", e[e.CHATROOM_SET_META_DATA = 534] = "CHATROOM_SET_META_DATA", e[e.CHATROOM_DELETE_META_DATA = 535] = "CHATROOM_DELETE_META_DATA", e[e.CHATROOM_FETCH_META_DATA = 536] = "CHATROOM_FETCH_META_DATA", e[e.CHATROOM_FETCH_USER_JOINED_CHATROOM = 537] = "CHATROOM_FETCH_USER_JOINED_CHATROOM", e[e.CHATROOM_OPERATE = 600] = "CHATROOM_OPERATE";
        })(x || (x = {})), function(e) {
          e.SDK_INTERNAL = "SDK_INTERNAL", e.LOGIN = "USER_LOGIN", e.REGISTER = "USER_CREATE", e.GET_CHATROOM_LIST = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e.CREATE_CHATROOM = "CHATROOM_CREATECHATROOM", e.DESTROY_CHATROOM = "CHATROOM_DESTORYCHATROOM", e.GET_CHATROOM_DETAIL = "CHATROOM_FETCH_SPECIFICATION", e.MODIFY_CHATROOM = "CHATROOM_CHANGE_ATTRIBUTE", e.REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBER", e.MULTI_REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBERS", e.ADD_USERS_TO_CHATROOM = "CHATROOM_ADD_MEMBERS", e.JOIN_CHATROOM = "CHATROOM_JOINCAHTROOM", e.QUIT_CHATROOM = "CHATROOM_LEAVECAHTROOM", e.LIST_CHATROOM_MEMBERS = "CHATROOM_FETCH_MEMBERS", e.GET_CHATROOM_ADMIN = "CHATROOM_GET_ADMIN", e.SET_CHATROOM_ADMIN = "CHATROOM_SET_ADMIN", e.REMOVE_CHATROOM_ADMIN = "CHATROOM_REMOVE_ADMIN", e.MUTE_CHATROOM_MEMBER = "CHATROOM_MUTE_USER", e.REMOVE_MUTE_CHATROOM_MEMBER = "CHATROOM_UNMUTE_USER", e.GET_MUTE_CHATROOM_MEMBERS = "CHATROOM_FETCH_MUTES", e.SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USER", e.MULTI_SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USERS", e.REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USER", e.MULTI_REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USERS", e.GET_CHATROOM_BLOCK_MEMBERS = "CHATROOM_FETCH_BANS", e.DISABLED_CHATROOM_SEND_MSG = "CHATROOM_MUTE_ALLMEMEBERS", e.ENABLE_CHATROOM_SEND_MSG = "CHATROOM_UNMUTE_ALLMEMEBERS", e.ADD_CHATROOM_WHITE_USERS = "CHATROOM_ADD_WHITELIST", e.REMOVE_CHATROOM_WHITE_USERS = "CHATROOM_REMOVE_WHITELIST", e.GET_CHATROOM_WHITE_USERS = "CHATROOM_FETCH_WHITELIST", e.CHECK_CHATROOM_WHITE_USER = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e.GET_CHATROOM_ANN = "CHATROOM_FETCH_ANNOUNCEMENT", e.UPDATE_CHATROOM_ANN = "CHATROOM_UPDATE_ANNOUNCEMENT", e.DELETE_CHATROOM_FILE = "CHATROOM_REMOVE_SHARE_FILE", e.GET_CHATROOM_FILES = "CHATROOM_GET_SHARE_FILE_LIST", e.UPLOAD_CHATROOM_FILE = "CHATROOM_UPLOAD_FILE", e.SET_CHATROOM_ATTR = "CHATROOM_SET_META_DATA", e.DELETE_CHATROOM_ATTR = "CHATROOM_DELETE_META_DATA", e.GET_CHATROOM_ATTR = "CHATROOM_FETCH_META_DATA", e.GET_USER_JOINED_CHATROOM = "CHATROOM_FETCH_USER_JOINED_CHATROOM", e.CREATE_GROUP = "GROUP_CREATEGROUP", e.BLOCK_GROUP = "GROUP_BLOCK_MESSAGE", e.LIST_GROUP = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e.GET_USER_GROUP = "GROUP_FETCH_USERS_GROUP", e.CHANGE_OWNER = "GROUP_CHANGE_OWNER", e.GET_GROUP_INFO = "GROUP_FETCH_SPECIFICATION", e.MODIFY_GROUP = "GROUP_CHANGE_GROUPATTRIBUTE", e.LIST_GROUP_MEMBER = "GROUP_FETCH_MEMEBERS", e.GET_GROUP_ADMIN = "GROUP_GET_ADMIN", e.SET_GROUP_ADMIN = "GROUP_SET_ADMIN", e.REMOVE_GROUP_ADMIN = "GROUP_REMOVE_ADMIN", e.DISSOLVE_GROUP = "GROUP_DESTOTYGROUP", e.QUIT_GROUP = "GROUP_LEAVEGROUP", e.INVITE_TO_GROUP = "GROUP_INVITE_TO_GROUP", e.JOIN_GROUP = "GROUP_JOIN_PUBLICGROUP", e.AGREE_JOIN_GROUP = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e.REJECT_JOIN_GROUP = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e.AGREE_INVITE_GROUP = "GROUP_ACCEPT_INVITATION", e.REJECT_INVITE_GROUP = "GROUP_DECLINE_INVITATION", e.REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBER", e.MULTI_REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBERS", e.MUTE_GROUP_MEMBER = "GROUP_MUTE_MEMBERS", e.UNMUTE_GROUP_MEMBER = "GROUP_UNMUTE_MEMBERS", e.GET_GROUP_MUTE_LIST = "GROUP_FETCH_MUTES", e.BLOCK_GROUP_MEMBER = "GROUP_BLOCK_MEMBER", e.BLOCK_GROUP_MEMBERS = "GROUP_BLOCK_MEMBERS", e.UNBLOCK_GROUP_MEMBER = "GROUP_UNBLOCK_MEMBER", e.UNBLOCK_GROUP_MEMBERS = "GROUP_UNBLOCK_MEMBERS", e.GET_GROUP_BLACK_LIST = "GROUP_GET_BLOCK_LIST", e.DISABLED_SEND_GROUP_MSG = "GROUP_MUTE_ALLMEMBERS", e.ENABLE_SEND_GROUP_MSG = "GROUP_UNMUTE_ALLMEMBERS", e.ADD_USERS_TO_GROUP_WHITE = "GROUP_ADD_WHITELIST", e.REMOVE_GROUP_WHITE_MEMBER = "GROUP_REMOVE_WHITELIST", e.GET_GROUP_WHITE_LIST = "GROUP_FETCH_WHITELIST", e.IS_IN_GROUP_WHITE_LIST = "GROUP_IS_IN_WHITELIST", e.GET_GROUP_MSG_READ_USER = "GROUP_GET_READ_USERS", e.GET_GROUP_ANN = "GROUP_FETCH_ANNOUNCEMENT", e.UPDATE_GROUP_ANN = "GROUP_UPDATE_ANNOUNCEMENT", e.UPLOAD_GROUP_FILE = "GROUP_UPLOAD_SHAREDFILE", e.DELETE_GROUP_FILE = "GROUP_DELETE_SHAREDFILE", e.GET_GROUP_FILE_LIST = "GROUP_FETCH_SHAREDFILE", e.DOWN_GROUP_FILE = "GROUP_DOWNLOAD_SHAREDFILE", e.SET_GROUP_MEMBER_ATTRS = "GROUP_MEMBER_SET_META_DATA", e.GET_GROUP_MEMBER_ATTR = "GROUP_MEMBER_FETCH_META_DATA", e.GET_SESSION_LIST = "REST_GET_SESSION_LIST", e.DELETE_SESSION = "REST_DEL_SESSION", e.GET_HISTORY_MSG = "REST_GET_HISTORY_MESSAGE", e.PIN_CONVERSATION = "REST_PIN_CONVERSATION", e.REST_UPLOAD_FILE_IN_PARTS = "REST_UPLOAD_FILE_IN_PARTS", e.REST_DELETE_MESSAGES_CONVERSATIONS = "REST_DELETE_MESSAGES_CONVERSATIONS", e.MARK_CONVERSATION = "REST_MARK_CONVERSATION", e.REST_FETCH_PINMESSAGES = "REST_FETCH_PINMESSAGES", e.REST_PIN_MESSAGE = "REST_PIN_MESSAGE", e.UPDATE_USER_INFO = "USER_UPDATE_USERINFO", e.GET_USER_INFO = "USER_FETCH_USERINFO", e.UPDATE_USER_NICK = "USER_UPDATE_NICK", e.UPLOAD_PUSH_TOKEN = "USER_UPLOAD_PUSH_TOKEN", e.USER_LOGGEDIN_OTHER_PLATFORM = "USER_LOGGEDIN_OTHER_PLATFORM", e.GET_BLACK_LIST = "ROSTER_BLACKLIST", e.GET_CONTACTS = "ROSTER_CONTACTS", e.ROSTER_GET_ALL_CONTACTS_REMARKS = "ROSTER_GET_ALL_CONTACTS_REMARKS", e.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE = "ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE", e.ROSTER_SET_CONTACT_REMARK = "ROSTER_SET_CONTACT_REMARK", e.ROSTER_ADD = "ROSTER_ADD", e.ROSTER_REMOVE = "ROSTER_REMOVE", e.ROSTER_ACCEPT = "ROSTER_ACCEPT", e.ROSTER_DECLINE = "ROSTER_DECLINE", e.ROSTER_BAN = "ROSTER_BAN", e.ROSTER_ALLOW = "ROSTER_ALLOW", e.SEND_MSG = "MSYNC_SENDMESSAGE", e.UPLOAD_MSG_ATTACH = "UPLOAD_MSG_ATTACH", e.SEND_RECALL_MSG = "MSYNC_RECALLMESSAGE", e.MODIFY_MESSAGE = "MSYNC_MODIFYMESSAGE";
        }(h || (h = {})), function(e) {
          e.GET_DNS = "REST_DNSLIST", e.LOGIN_BY_AGORA_TOKEN = "LOGIN_BY_AGORA_TOKEN", e.LOGIN_BY_PWD = "LOGIN_BY_PWD", e.RESISTER = "REGISTER", e.REST_INIT_UPLOAD_TASK_IN_PARTS = "REST_INIT_UPLOAD_TASK_IN_PARTS", e.REST_UPLOAD_PART = "REST_UPLOAD_PART", e.REST_COMPLETE_UPLOAD_PART = "REST_COMPLETE_UPLOAD_PART", e.REST_ABORT_UPLOAD_PART = "REST_ABORT_UPLOAD_PART";
        }(U || (U = {})), function(e) {
          e[e["5G"] = 7] = "5G", e[e["4G"] = 7] = "4G", e[e["3G"] = 7] = "3G", e[e["2G"] = 7] = "2G", e[e["SLOW-2G"] = 7] = "SLOW-2G", e[e.WIFI = 2] = "WIFI", e[e.LAN = 1] = "LAN", e[e.DISCONNECTED = 0] = "DISCONNECTED", e[e.NONE = 0] = "NONE", e[e.UNKNOWN = -1] = "UNKNOWN", e[e["WEBIM UNABLE TO GET"] = -2] = "WEBIM UNABLE TO GET";
        }(W || (W = {})), function(e) {
          e[e.success = 200] = "success", e[e.failed = 500] = "failed", e[e.disconnect = -1] = "disconnect", e[e.notFound = 404] = "notFound", e[e.reachLimit = 429] = "reachLimit";
        }(Z || (Z = {})), function(e) {
          e[e.web = 0] = "web", e[e.native = 1] = "native";
        }(te || (te = {}));
        var ee = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), z = 1e3, y = 9675, J = -1;
        function j() {
          console.log && (console.log.apply ? console.log.apply(console, Array.prototype.slice.call(arguments)) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
        }
        var K, Q = typeof window < "u" && window.navigator !== void 0 && /Trident\/|MSIE /.test(window.navigator.userAgent), se = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        }, ce = function() {
        }, fe = {};
        (function(e) {
          e[e.TRACE = 0] = "TRACE", e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";
        })(K || (K = {}));
        var me = function() {
          function e(r, o, a) {
            this.name = r || "defaultLogger", this.currentLevel = 0, this.useCookiePersist = !1, this.storageLogLevelKey = "loglevel", this.levels = K, this.consoleLogVisibility = !0, this.logMethods = ["trace", "debug", "info", "warn", "error"], this.methodFactory = a || this.defaultMethodFactory, this.report = !1;
            var s = this._getPersistedLevel();
            s == null && (s = o === null ? "WARN" : o), this.logs = [], this.reportLogs = [], this.reportInterval = 3e5, this.timer = null, this.config = { useCache: !1, maxCache: 3145728, color: "", background: "" }, this.logBytes = 0, this.setLevel(s, !1, "");
          }
          return e.prototype.reportLog = function() {
            var r, o, a, s, d;
            return o = this, a = void 0, d = function() {
              var u, m, p, T, v, D, H, k, w, F, V, ue, pe;
              return se(this, function(le) {
                switch (le.label) {
                  case 0:
                    if (((r = this.reportLogs) === null || r === void 0 ? void 0 : r.length) === 0) return [2];
                    if (u = this.reportLogs.join(`
`), m = de(u), p = [], m > 2097150) {
                      for (T = u.split(`
`), v = "", D = 0; D < T.length; D++) H = T[D], k = de(H), de(v) + k < 2097150 ? v += H + `
` : (v += `
`, p.push(v), v = "");
                      p.push(v);
                    } else p.push(u + `
`);
                    w = function(ge) {
                      return se(this, function(ye) {
                        switch (ye.label) {
                          case 0:
                            return [4, F.reportData(ge)];
                          case 1:
                            return ye.sent(), F.reportLogs = F.reportLogs.filter(function(Ne) {
                              return !ge.includes(Ne);
                            }), [2];
                        }
                      });
                    }, F = this, V = 0, ue = p, le.label = 1;
                  case 1:
                    return V < ue.length ? (pe = ue[V], [5, w(pe)]) : [3, 4];
                  case 2:
                    le.sent(), le.label = 3;
                  case 3:
                    return V++, [3, 1];
                  case 4:
                    return [2];
                }
              });
            }, new ((s = void 0) || (s = Promise))(function(u, m) {
              function p(D) {
                try {
                  v(d.next(D));
                } catch (H) {
                  m(H);
                }
              }
              function T(D) {
                try {
                  v(d.throw(D));
                } catch (H) {
                  m(H);
                }
              }
              function v(D) {
                var H;
                D.done ? u(D.value) : (H = D.value, H instanceof s ? H : new s(function(k) {
                  k(H);
                })).then(p, T);
              }
              v((d = d.apply(o, a || [])).next());
            });
          }, e.prototype.reportData = function(r) {
            var o, a = this;
            if (this.connection) {
              var s = this.connection.context || {}, d = s.orgName, u = s.appName, m = s.accessToken, p = s.userId, T = { url: "".concat((o = this.connection) === null || o === void 0 ? void 0 : o.apiUrl, "/").concat(d, "/").concat(u, "/sdk/users/").concat(p, "/client/logs"), type: "POST", data: JSON.stringify({ resource: this.connection.clientResource, logContent: r }), dataType: "json", headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" } };
              re.call(this.connection, T).then(function(v) {
                a.log("report log success", v);
              }).catch(function(v) {
                a.error("report log error", v);
              });
            } else this.error("report log error", "connection is null");
          }, e.prototype._regularlyReportLogs = function() {
            var r, o = this;
            this.timer && clearInterval(this.timer), ((r = this.reportInterval) !== null && r !== void 0 ? r : 0) < 6e4 && (this.reportInterval = 6e4), this.timer = setInterval(function() {
              o.reportLog();
            }, this.reportInterval || 3e5);
          }, e.prototype._stopReportLogs = function() {
            this.reportLog(), clearInterval(this.timer);
          }, e.prototype.setConfig = function(r) {
            this.config = r;
          }, e.prototype.getLevel = function() {
            return this.currentLevel;
          }, e.prototype.setLevel = function(r, o, a) {
            if (typeof r == "string" && (r = K[r]), r === void 0 && (r = 0), !(typeof r == "number" && r >= 0 && r <= this.levels.SILENT)) throw Error("log.setLevel() called with invalid level: " + r);
            if (this.currentLevel = r, o !== !1 && this._persistLevel(r), this.replaceLoggingMethods(r, a || ""), typeof console > "u" && r < K.SILENT) throw Error("No console available for logging");
          }, e.prototype.setDefaultLevel = function(r) {
            this._getPersistedLevel() || this.setLevel(r, !1, "");
          }, e.prototype.enableAll = function(r) {
            this.setLevel(this.levels.TRACE, !0, "");
          }, e.prototype.disableAll = function(r) {
            this.setLevel(this.levels.SILENT, !0, "");
          }, e.prototype.getLogs = function() {
            return this.logs;
          }, e.prototype.download = function() {
            if (typeof window < "u" && typeof document < "u") {
              var r = this.getLogs().join(`
`), o = new Blob([r], { type: "text/plain;charset=UTF-8" }), a = window.URL.createObjectURL(o), s = document.createElement("a");
              s.style.display = "none", s.href = a, s.setAttribute("download", "sdklog"), document.body.appendChild(s), s.click();
            }
          }, e.prototype.setConsoleLogVisibility = function(r) {
            this.consoleLogVisibility = r;
          }, e.prototype._bindMethod = function(r, o, a) {
            var s = this, d = r[o], u = this.getTime();
            if (a) return this._cacheLog;
            if (typeof d.bind == "function") return function() {
              for (var m = [], p = 0; p < arguments.length; p++) m[p] = arguments[p];
              var T = s.getTime();
              s.consoleLogVisibility && d.call.apply(d, function(v, D, H) {
                if (arguments.length === 2) for (var k, w = 0, F = D.length; w < F; w++) !k && w in D || (k || (k = Array.prototype.slice.call(D, 0, w)), k[w] = D[w]);
                return v.concat(k || Array.prototype.slice.call(D));
              }([r, "".concat(T, " IM SDK [").concat(o === "log" ? "debug" : o, "]: ")], m, !1)), s.onLog && s.onLog({ time: T, level: o === "log" ? "debug" : o, logs: m }), s._cacheReportLogs.apply(s, m);
            };
            try {
              return Function.prototype.bind.call(d, r, "".concat(u, " IM SDK [").concat(o === "log" ? "debug" : o, "]: "));
            } catch {
              return function() {
                return Function.prototype.apply.apply(d, [r, arguments]);
              };
            }
          }, e.prototype.getTime = function() {
            var r = /* @__PURE__ */ new Date();
            return r.toTimeString().split(" ")[0] + ":" + r.getMilliseconds();
          }, e.prototype._cacheLog = function() {
            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            var a = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", s = "";
            r.forEach(function(d) {
              s += typeof d == "object" ? JSON.stringify(d) + " " : d + " ";
            }), this._cacheLogCall(a + s), this._cacheReportLogs.apply(this, r);
          }, e.prototype._cacheLogCall = function(r) {
            var o = de(r), a = this.logBytes + o, s = this.config.maxCache;
            if (!(o >= s)) {
              if (a < s) this.logBytes += o;
              else for (var d = a - s, u = 0; u < d; ) {
                var m = this.logs.shift();
                m !== void 0 && (u += de(m));
              }
              this.logs.push(r);
            }
          }, e.prototype._cacheReportLogs = function() {
            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            if (this.report) {
              var a = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", s = "";
              r.forEach(function(d) {
                s += typeof d == "object" ? JSON.stringify(d) + " " : d + " ";
              }), this.reportLogs.push(a + s);
            }
          }, e.prototype._getPersistedLevel = function() {
            var r;
            if (typeof window > "u") return 5;
            if ((r = window && window.localStorage && window.localStorage[this.storageLogLevelKey]) === "undefined") {
              var o = window.document.cookie, a = o.indexOf(encodeURIComponent(this.storageLogLevelKey));
              a !== -1 && (r = /^([^;]+)/.exec(o.slice(a))[1]);
            }
            return r || 5;
          }, e.prototype._persistLevel = function(r) {
            var o = this.logMethods[r] || "SILENT";
            typeof window < "u" && (window.localStorage && (window.localStorage[this.storageLogLevelKey] = o), this.useCookiePersist && (window.document.cookie = encodeURIComponent(this.storageLogLevelKey) + "=" + o + ";"));
          }, e.prototype.replaceLoggingMethods = function(r, o) {
            for (var a = this, s = 0; s < this.logMethods.length; s++) {
              var d = this.logMethods[s];
              this[d] = s < r ? function() {
                for (var u = [], m = 0; m < arguments.length; m++) u[m] = arguments[m];
                a.report && a._cacheReportLogs.apply(a, u);
              } : this.methodFactory(d, r, o);
            }
            this.log = this.debug;
          }, e.prototype.defaultMethodFactory = function(r, o, a) {
            return this.realMethod(r) || this.enableLoggingWhenConsoleArrives.apply(this, [r, o, a]);
          }, e.prototype.realMethod = function(r) {
            return r === "debug" && (r = "log"), typeof console < "u" && (r === "trace" && Q ? j : console[r] !== void 0 ? this._bindMethod(console, r, this.config.useCache) : console.log !== void 0 ? this._bindMethod(console, "log", this.config.useCache) : ce);
          }, e.prototype.enableLoggingWhenConsoleArrives = function(r, o, a) {
            return (function() {
              typeof console < "u" && (this.replaceLoggingMethods.call(this, o, a), this[r].apply(this, arguments));
            }).bind(this);
          }, e;
        }();
        function de(e) {
          for (var r = e.length, o = 0; o < e.length; o++) e.charCodeAt(o) > 255 && r++;
          return r;
        }
        var Ee = new me();
        Ee.getLogger = function(e) {
          if (typeof e != "string" || e === "") throw new TypeError("You must supply a name when creating a logger.");
          return this;
        };
        var Re = typeof window < "u" ? window.log : void 0;
        Ee.noConflict = function() {
          return typeof window < "u" && window.log === Ee && (window.log = Re), Ee;
        }, Ee.getLoggers = function() {
          return fe;
        }, Ee.initReport = function(e) {
          var r = e.report, o = e.reportInterval, a = e.connection;
          Ee.report = r, Ee.reportInterval = o, Ee.connection = a, r && Ee._regularlyReportLogs();
        };
        var L = Ee, it = 5242880, _t = 5242880, qt = { size: 0 }, Pt = function() {
          return Pt = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, Pt.apply(this, arguments);
        };
        function Zt() {
          var e = this.context, r = e.orgName, o = e.appName, a = e.accessToken, s = { url: "".concat(this.apiUrl, "/").concat(r, "/").concat(o, "/sdk/chatfiles/part-upload"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + a } };
          return L.debug("Call multipartInit"), re.call(this, s, h.SDK_INTERNAL).then(function(d) {
            var u = d.entities[0];
            return { data: { fileMaxSize: u.file_upper_limit, partMinSize: u.part_lower_limit, uuid: u.uuid }, extraInfo: d.extraInfo, type: d.type };
          });
        }
        function xe(e) {
          var r = this;
          return new Promise(function(o, a) {
            var s, d, u = (/* @__PURE__ */ new Date()).getTime(), m = r.context, p = m.orgName, T = m.appName, v = m.accessToken, D = e.uuid, H = e.partNumber, k = e.part, w = e.onProgress, F = "".concat(r.apiUrl, "/").concat(p, "/").concat(T, "/sdk/chatfiles/part-upload/").concat(D), V = new XMLHttpRequest();
            L.debug("Call multipartUpload"), V.upload && ((d = (s = V.upload).addEventListener) === null || d === void 0 || d.call(s, "progress", function(pe) {
              w == null || w(pe);
            }, !1)), V.addEventListener("abort", function() {
              a({ type: l.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: V, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - u, httpCode: V.status || -1, errDesc: "Request Abort", url: F } });
            }, !1), V.addEventListener("error", function() {
              a({ type: l.WEBIM_UPLOADFILE_ERROR, data: V, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - u, httpCode: V.status || -1, errDesc: "request error", url: F } });
            }, !1), V.addEventListener("load", function() {
              try {
                var pe = JSON.parse(V.responseText);
                if (V.status !== 200) return a({ type: l.WEBIM_UPLOADFILE_ERROR, data: pe, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - u, httpCode: V.status || -1, errDesc: "part upload failed", url: F } }), !1;
                try {
                  o(Pt(Pt({}, pe), { extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - u, httpCode: V.status || -1, url: F } }));
                } catch (le) {
                  a({ type: l.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: le, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - u, httpCode: V.status || -1, errDesc: "part upload failed", url: F } });
                }
              } catch {
                a({ type: l.WEBIM_UPLOADFILE_ERROR, data: V.responseText, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - u, httpCode: V.status || -1, errDesc: "part upload failed", url: F } });
              }
            }, !1);
            var ue = new FormData();
            ue.append("part_file", k), ue.append("part_number", H), V.open("PUT", F), V.setRequestHeader("restrict-access", "true"), V.setRequestHeader("Accept", "*/*"), V.setRequestHeader("Authorization", "Bearer " + v), V.send(ue);
          });
        }
        function Pr(e) {
          var r = e.uuid, o = e.thumbnailHeight, a = e.thumbnailWidth, s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/sdk/chatfiles/part-upload/").concat(r, "?restrict-access=true");
          a && (p += "&thumbnail-width=".concat(a)), o && (p += "&thumbnail-height=".concat(o));
          var T = { url: p, dataType: "json", type: "POST", headers: { Authorization: "Bearer " + m } };
          return L.debug("Call multipartComplete"), re.call(this, T, h.SDK_INTERNAL);
        }
        function Ao(e) {
          var r = e.uuid, o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/sdk/chatfiles/part-upload/").concat(r), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + d } };
          return L.debug("Call multipartAbort"), re.call(this, u, h.SDK_INTERNAL);
        }
        var Xr = function(e, r, o, a) {
          return new (o || (o = Promise))(function(s, d) {
            function u(T) {
              try {
                p(a.next(T));
              } catch (v) {
                d(v);
              }
            }
            function m(T) {
              try {
                p(a.throw(T));
              } catch (v) {
                d(v);
              }
            }
            function p(T) {
              var v;
              T.done ? s(T.value) : (v = T.value, v instanceof o ? v : new o(function(D) {
                D(v);
              })).then(u, m);
            }
            p((a = a.apply(e, [])).next());
          });
        }, pr = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        }, Ri = function() {
          function e(r, o) {
            var a = this;
            this.handleUploadProgress = function(s, d) {
              var u, m;
              if (s.total) {
                a.progressArr[d] = s.loaded;
                var p = a.progressArr.reduce(function(T, v) {
                  return T + v;
                }, 0);
                (m = (u = a.options).onFileUploadProgress) === null || m === void 0 || m.call(u, { isTrusted: s.isTrusted, type: s.type, loaded: p > a.file.size ? a.file.size : p, total: a.file.size, lengthComputable: s.lengthComputable });
              }
            }, this.uuid = "", this.pool = [], this.progressArr = [], this.connection = r, this.options = o, this.partSize = it, this.file = o.file, this.init(), this.rpt = this.connection.dataReport.geOperateFun({ operationName: h.REST_UPLOAD_FILE_IN_PARTS });
          }
          return e.prototype.init = function() {
            var r, o, a, s;
            return Xr(this, void 0, void 0, function() {
              var d, u, m, p, T, v, D, H, k, w, F, V, ue, pe, le;
              return pr(this, function(ge) {
                switch (ge.label) {
                  case 0:
                    return ge.trys.push([0, 4, , 6]), [4, Zt.call(this.connection)];
                  case 1:
                    return d = ge.sent(), u = d.data || {}, m = u.fileMaxSize, p = m === void 0 ? 0 : m, T = u.partMinSize, v = T === void 0 ? it : T, D = u.uuid, H = D === void 0 ? "" : D, k = d.extraInfo, V = k.elapse, ue = k.httpCode, le = k.url, this.partSize = v, this.uuid = H, qt.size = v, L.debug("multipartInit success", "uuid: ".concat(H), "fileMaxSize: ".concat(p), "partMinSize: ".concat(v)), this.file.size > p ? [4, this.multipartAbort()] : [3, 3];
                  case 2:
                    return ge.sent(), (o = (r = this.options).onFileUploadError) === null || o === void 0 || o.call(r, { code: l.WEBIM_UPLOADFILE_ERROR, message: "The file size exceeds the maximum limit" }), [2];
                  case 3:
                    return this.rpt({ data: { requestUrl: le, requestName: U.REST_INIT_UPLOAD_TASK_IN_PARTS, requestElapse: V, requestMethod: "POST", isSuccess: 1, code: ue } }), this.upload(), [3, 6];
                  case 4:
                    return w = ge.sent(), F = (w == null ? void 0 : w.extraInfo) || {}, V = F.elapse, ue = F.httpCode, pe = F.errDesc, le = F.url, this.rpt({ data: { requestUrl: le, requestName: U.REST_INIT_UPLOAD_TASK_IN_PARTS, requestElapse: V, requestMethod: "POST", isSuccess: 0, codeDesc: pe, code: ue } }), [4, this.multipartAbort()];
                  case 5:
                    return ge.sent(), (s = (a = this.options) === null || a === void 0 ? void 0 : a.onInitFail) === null || s === void 0 || s.call(a), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }, e.prototype.upload = function() {
            var r, o, a;
            return Xr(this, void 0, void 0, function() {
              var s, d, u, m, p, T, v = this;
              return pr(this, function(D) {
                switch (D.label) {
                  case 0:
                    new FileReader().readAsArrayBuffer(this.file), s = this.file.size, d = Math.ceil(s / this.partSize), D.label = 1;
                  case 1:
                    D.trys.push([1, 7, , 9]), u = function(H) {
                      var k, w, F, V;
                      return pr(this, function(ue) {
                        switch (ue.label) {
                          case 0:
                            return k = H * m.partSize, w = Math.min(s, k + m.partSize), F = (r = m.file) === null || r === void 0 ? void 0 : r.slice(k, w), (V = xe.call(m.connection, { uuid: m.uuid, partNumber: "".concat(H + 1), part: F, onProgress: function(pe) {
                              v.handleUploadProgress(pe, H);
                            } })).then(function(pe) {
                              var le = (pe == null ? void 0 : pe.extraInfo) || {}, ge = le.elapse, ye = le.httpCode, Ne = le.url;
                              v.rpt({ data: { requestUrl: Ne, requestName: U.REST_UPLOAD_PART, requestElapse: ge, isSuccess: 1, requestMethod: "PUT", code: ye } }), v.handleTask(V);
                            }), V.catch(function(pe) {
                              var le = (pe == null ? void 0 : pe.extraInfo) || {}, ge = le.elapse, ye = le.httpCode, Ne = le.url, Ie = le.errDesc;
                              v.rpt({ data: { requestUrl: Ne, requestName: U.REST_UPLOAD_PART, requestElapse: ge, isSuccess: 0, requestMethod: "PUT", code: ye, codeDesc: Ie } }), delete pe.extraInfo;
                            }), m.pool.push(V), m.pool.length !== 4 ? [3, 2] : [4, Promise.race(m.pool)];
                          case 1:
                            ue.sent(), ue.label = 2;
                          case 2:
                            return [2];
                        }
                      });
                    }, m = this, p = 0, D.label = 2;
                  case 2:
                    return p < d ? [5, u(p)] : [3, 5];
                  case 3:
                    D.sent(), D.label = 4;
                  case 4:
                    return p++, [3, 2];
                  case 5:
                    return [4, Promise.all(this.pool)];
                  case 6:
                    return D.sent(), this.multipartComplete(), [3, 9];
                  case 7:
                    return T = D.sent(), [4, this.multipartAbort()];
                  case 8:
                    return D.sent(), this.rpt({ data: { isLastApi: 1, isSuccess: 0 } }), (a = (o = this.options).onFileUploadError) === null || a === void 0 || a.call(o, T), [3, 9];
                  case 9:
                    return [2];
                }
              });
            });
          }, e.prototype.multipartComplete = function() {
            var r, o, a, s;
            return Xr(this, void 0, void 0, function() {
              var d, u, m, p, T, v, D, H, k, w, F;
              return pr(this, function(V) {
                switch (V.label) {
                  case 0:
                    return V.trys.push([0, 2, , 3]), d = this.options.thumbnailInfo || {}, u = d.width, m = d.height, [4, Pr.call(this.connection, { uuid: this.uuid, thumbnailHeight: m, thumbnailWidth: u })];
                  case 1:
                    return p = V.sent(), T = (p == null ? void 0 : p.extraInfo) || {}, H = T.elapse, k = T.httpCode, F = T.url, this.rpt({ data: { requestUrl: F, requestName: U.REST_COMPLETE_UPLOAD_PART, requestElapse: H, requestMethod: "POST", isSuccess: 1, code: k } }), this.rpt({ data: { isLastApi: 1, isSuccess: 1 } }), (o = (r = this.options).onFileUploadComplete) === null || o === void 0 || o.call(r, p), [3, 3];
                  case 2:
                    return v = V.sent(), D = (v == null ? void 0 : v.extraInfo) || {}, H = D.elapse, k = D.httpCode, w = D.errDesc, F = D.url, this.rpt({ data: { requestUrl: F, requestName: U.REST_COMPLETE_UPLOAD_PART, requestElapse: H, requestMethod: "POST", isSuccess: 0, codeDesc: w, code: k } }), this.rpt({ data: { isLastApi: 1, isSuccess: 0 } }), (s = (a = this.options).onFileUploadError) === null || s === void 0 || s.call(a, v), [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          }, e.prototype.multipartAbort = function() {
            return Xr(this, void 0, void 0, function() {
              var r, o, a, s, d, u, m, p;
              return pr(this, function(T) {
                switch (T.label) {
                  case 0:
                    if (!this.uuid) return [2];
                    T.label = 1;
                  case 1:
                    return T.trys.push([1, 3, , 4]), [4, Ao.call(this.connection, { uuid: this.uuid })];
                  case 2:
                    return r = T.sent(), o = (r == null ? void 0 : r.extraInfo) || {}, d = o.elapse, u = o.httpCode, p = o.url, this.rpt({ data: { requestUrl: p, requestName: U.REST_ABORT_UPLOAD_PART, requestElapse: d, requestMethod: "DELETE", isSuccess: 1, code: u } }), [3, 4];
                  case 3:
                    return a = T.sent(), s = (a == null ? void 0 : a.extraInfo) || {}, d = s.elapse, u = s.httpCode, m = s.errDesc, p = s.url, this.rpt({ data: { requestUrl: p, requestName: U.REST_ABORT_UPLOAD_PART, requestElapse: d, requestMethod: "DELETE", isSuccess: 0, codeDesc: m, code: u } }), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }, e.prototype.handleTask = function(r) {
            var o = this.pool.findIndex(function(a) {
              return a === r;
            });
            this.pool.splice(o, 1);
          }, e;
        }(), no = function(e) {
          var r, o, a = this, s = (/* @__PURE__ */ new Date()).getTime(), d = e.apiUrl, u = e.orgName, m = e.appName, p = e.operateName, T = e.accessToken, v = e.uploadUrl || "".concat(d, "/").concat(u, "/").concat(m, "/chatfiles"), D = function(w) {
            var F = (/* @__PURE__ */ new Date()).getTime() - s;
            a.dataReport && p && [h.UPLOAD_MSG_ATTACH, h.UPLOAD_CHATROOM_FILE, h.UPLOAD_GROUP_FILE].includes(p) && a.dataReport.geOperateFun({ operationName: p })({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "POST", requestName: p, requestElapse: F, requestUrl: v, code: (H == null ? void 0 : H.status) || 0, codeDesc: "upload file error" } }), e.onFileUploadError && e.onFileUploadError(w);
          }, H = new XMLHttpRequest();
          H.upload && ((o = (r = H.upload).addEventListener) === null || o === void 0 || o.call(r, "progress", e.onFileUploadProgress || Vt, !1)), H.addEventListener("abort", e.onFileUploadCanceled || Vt, !1), H.addEventListener("error", function(w) {
            D({ type: l.WEBIM_UPLOADFILE_ERROR, data: H });
          }, !1), H.addEventListener("load", function(w) {
            try {
              var F = JSON.parse(H.responseText);
              if (H.status === 400) return D({ type: l.WEBIM_UPLOADFILE_ERROR, data: F }), !1;
              try {
                (function(V) {
                  var ue = (/* @__PURE__ */ new Date()).getTime() - s;
                  a.dataReport && p && [h.UPLOAD_MSG_ATTACH, h.UPLOAD_CHATROOM_FILE, h.UPLOAD_GROUP_FILE].includes(p) && a.dataReport.geOperateFun({ operationName: p })({ isEndApi: !0, data: { isSuccess: V != null && V.error ? 0 : 1, requestMethod: "POST", requestName: p, requestElapse: ue, requestUrl: v, code: H.status, codeDesc: (V == null ? void 0 : V.error_description) || "" } }), e.onFileUploadComplete && e.onFileUploadComplete(V);
                })(F);
              } catch (V) {
                D({ type: l.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: V });
              }
            } catch {
              D({ type: l.WEBIM_UPLOADFILE_ERROR, data: H.responseText });
            }
          }, !1), H.open("POST", v), H.setRequestHeader("restrict-access", "true"), H.setRequestHeader("Accept", "*/*"), H.setRequestHeader("Authorization", "Bearer " + T);
          var k = new FormData();
          k.append("file", e.file.data), e.thumbnailWidth && k.append("thumbnail-width", e.thumbnailWidth + ""), e.thumbnailHeight && k.append("thumbnail-height", e.thumbnailHeight + ""), H.send(k);
        }, kt = function() {
          return kt = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, kt.apply(this, arguments);
        }, Vt = function() {
        };
        function re(e, r) {
          var o, a = this;
          return we().platform === je.WEB ? new Promise(function(s, d) {
            var u = e.dataType || "text", m = e.success || Vt, p = e.error || Vt, T = new XMLHttpRequest();
            T.ontimeout = function() {
              d({ type: l.REQUEST_TIMEOUT, message: "Request Timeout", errorType: "timeout_error", xhr: T });
            }, T.onerror = function() {
              d({ type: l.REQUEST_UNKNOWN, message: "Request Unknow Error", errorType: "onerror", xhr: T });
            }, T.onabort = function() {
              d({ type: l.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: T });
            }, T.onreadystatechange = function() {
              if (T.readyState === 4) {
                var V = (/* @__PURE__ */ new Date()).getTime() - o, ue = T.status || 0, pe = { elapse: V, httpCode: ue };
                if (ue === 200) {
                  ve.ajaxUnconventionalErrorTimes = 0;
                  try {
                    switch (u) {
                      case "text":
                        return m(T.responseText), void s(T.responseText);
                      case "json":
                        var le = JSON.parse(T.responseText);
                        return le.extraInfo = pe, m(le), void s(le);
                      case "xml":
                        return T.responseXML && T.responseXML.documentElement ? (m(T.responseXML.documentElement), void s(T.responseXML.documentElement)) : (p({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: T.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }), void d({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: T.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }));
                      default:
                        p({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: T.responseText, message: "Invalid dataType" }), d({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: T.responseText, message: "Invalid dataType" });
                    }
                    return s(T.response || T.responseText), void m(T.response || T.responseText, T);
                  } catch (ge) {
                    d(ge);
                  }
                  return;
                }
                [400, 401, 403, 404, 429, 500, 503].includes(ue) || (L.debug("rest api request fail status:", ue), ve.ajaxUnconventionalErrorTimes++), q(T, d, p, V);
              }
              T.readyState === 0 && (p({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: T.responseText, message: "Request not initialized" }), d({ type: l.WEBIM_CONNCTION_AJAX_ERROR, data: T.responseText, message: "Request not initialized" }));
            }, e.responseType && T.responseType && (T.responseType = e.responseType), e.mimeType && T.overrideMimeType(e.mimeType);
            var v = e.type || "POST", D = e.data || null, H = "";
            if (v.toLowerCase() === "get" && D) {
              for (var k in D) D.hasOwnProperty(k) && (H += k + "=" + D[k] + "&");
              H = H && H.slice(0, -1), e.url += (e.url.indexOf("?") > 0 ? "&" : "?") + (H && H + "&") + "_v=" + (/* @__PURE__ */ new Date()).getTime(), D = null, H = "";
            }
            o = (/* @__PURE__ */ new Date()).getTime(), T.open(v, e.url);
            var w = e.headers || {};
            for (var F in w["Content-Type"] || (w["Content-Type"] = "application/json"), w) w.hasOwnProperty(F) && T.setRequestHeader(F, w[F]);
            T.send(D);
          }).then(function(s) {
            return a.dataReport && r && r !== h.SDK_INTERNAL && a.dataReport.geOperateFun({ operationName: r })({ isEndApi: !0, data: kt({ isSuccess: 1, requestUrl: e.url, requestName: r, requestMethod: e.type }, $e(s.extraInfo)) }), r === h.SDK_INTERNAL && (s.extraInfo.url = e.url), r !== h.SDK_INTERNAL && delete s.extraInfo, Fr(s) === "Object" ? kt(kt({}, s), { type: l.REQUEST_SUCCESS }) : { data: s, type: l.REQUEST_SUCCESS };
          }).catch(function(s) {
            throw a.dataReport && r && r !== h.SDK_INTERNAL && a.dataReport.geOperateFun({ operationName: r })({ isEndApi: !0, data: kt({ isSuccess: 0, requestUrl: e.url, requestName: r, requestMethod: e.type }, $e(s.extraInfo)) }), r === h.SDK_INTERNAL && (s.extraInfo.url = e.url), r !== h.SDK_INTERNAL && delete s.extraInfo, s;
          }) : sr.call(this, e, r);
        }
        function Fr(e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }
        function sr(e, r) {
          var o = this;
          return new Promise(function(a, s) {
            var d = e.success || Vt, u = e.error || Vt, m = e.type || "POST", p = e.data || null, T = "", v = (/* @__PURE__ */ new Date()).getTime(), D = ve.getEnvInfo();
            if (m.toLowerCase() === "get" && p) {
              for (var H in p) p.hasOwnProperty(H) && (T += H + "=" + p[H] + "&");
              T = T && T.slice(0, -1), e.url += (e.url.indexOf("?") > 0 ? "&" : "?") + (T && T + "&") + "_v=" + (/* @__PURE__ */ new Date()).getTime(), p = null, T = "";
            }
            var k = { url: e.url, data: e.data, method: m, headers: {}, success: function(w) {
              var F, V, ue, pe, le, ge = { elapse: (/* @__PURE__ */ new Date()).getTime() - v, httpCode: Number(((F = w.statusCode) === null || F === void 0 ? void 0 : F.toString()) || ((V = w.status) === null || V === void 0 ? void 0 : V.toString())), errDesc: ((ue = w == null ? void 0 : w.data) === null || ue === void 0 ? void 0 : ue.error_description) || "" };
              if (((pe = w.statusCode) === null || pe === void 0 ? void 0 : pe.toString()) === "200" || ((le = w.status) === null || le === void 0 ? void 0 : le.toString()) === "200") {
                w.data.extraInfo = ge;
                var ye = w.data;
                d(ye), a(ye);
              } else w.extraInfo = ge, u(ye = w), s(ye);
            }, complete: function() {
            }, fail: function(w) {
              var F = { elapse: (/* @__PURE__ */ new Date()).getTime() - v, httpCode: J, errDesc: "request:fail" };
              w.extraInfo = F, w.data = { error: "request:fail", error_description: "request:fail" }, u(w), s(w);
            } };
            if (D.platform === "zfb" || D.platform === "dd" ? k.headers = e.headers : k.header = e.headers, D.platform === "dd") return dd.httpRequest(k);
            D.global.request(k);
          }).then(function(a) {
            return o.dataReport && r && r !== h.SDK_INTERNAL && o.dataReport.geOperateFun({ operationName: r })({ isEndApi: !0, data: kt({ isSuccess: 1, requestUrl: e.url, requestName: r, requestMethod: e.type }, $e(a.extraInfo)) }), r !== h.SDK_INTERNAL && delete a.extraInfo, Fr(a) === "Object" ? kt(kt({}, a), { type: l.REQUEST_SUCCESS }) : { data: a, type: l.REQUEST_SUCCESS };
          }).catch(function(a) {
            throw o.dataReport && r && r !== h.SDK_INTERNAL && o.dataReport.geOperateFun({ operationName: r })({ isEndApi: !0, data: kt({ isSuccess: 0, requestUrl: e.url, requestName: r, requestMethod: e.type }, $e(a.extraInfo)) }), r !== h.SDK_INTERNAL && delete a.extraInfo, a;
          });
        }
        function Pn(e, r) {
          var o;
          return function() {
            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
            if (!e) return o;
            o = e.apply(void 0, a), e = null;
          };
        }
        var je, oo = Pn(function(e, r) {
          var o = we();
          if (o.platform !== je.WEB) {
            var a = o.global, s = function(d) {
              d.isConnected ? e() : r();
            };
            a.offNetworkStatusChange && a.offNetworkStatusChange(s), a.onNetworkStatusChange && a.onNetworkStatusChange(s);
          } else typeof addEventListener < "u" && (window.addEventListener("online", e), window.addEventListener("offline", r));
        }), Ce = Pn(function(e, r) {
          var o, a, s = we();
          if (s.platform === je.WEB) document && document.addEventListener("visibilitychange", function() {
            document.hidden ? r == null || r() : e == null || e();
          }, !1);
          else {
            var d = s.global;
            d.onAppShow && ((o = d.onAppShow) === null || o === void 0 || o.call(d, e)), d.onAppHide && ((a = d.onAppHide) === null || a === void 0 || a.call(d, r));
          }
        });
        function we() {
          return typeof swan < "u" && Pe(swan) ? { platform: je.BAIDU, global: swan } : typeof tt < "u" && Pe(tt) ? { platform: je.TT, global: tt } : typeof dd < "u" && Pe(dd) ? { platform: je.DD, global: dd } : typeof my < "u" && Pe(my) ? { platform: je.ZFB, global: my } : typeof wx < "u" && Pe(wx) ? { platform: je.WX, global: wx } : typeof qq < "u" && Pe(qq) ? { platform: je.QQ, global: qq } : typeof uni < "u" && Pe(uni) ? { platform: je.UNI, global: uni } : typeof window < "u" && window.WebSocket ? { platform: je.WEB, global: window } : { platform: je.NODE, global: f.g || {} };
        }
        function Pe(e) {
          for (var r = ["canIUse", "getSystemInfo"], o = 0, a = r.length; o < a; o++) if (!e[r[o]]) return !1;
          return !0;
        }
        function Be(e, r) {
          var o, a, s, d = this, u = e.accessToken, m = e.appKey, p = (a = (o = e == null ? void 0 : e.file) === null || o === void 0 ? void 0 : o.data) === null || a === void 0 ? void 0 : a.size, T = [], v = "", D = "";
          if (u) if (m && (T = m.split("#"), v = T[0], D = T[1]), v || D) if (p <= 0) e.onFileUploadError && e.onFileUploadError({ type: l.WEBIM_UPLOADFILE_ERROR, message: "fileSize must be greater than 0" });
          else if (e.uploadUrl) no.call(this, kt(kt({}, e), { orgName: v, appName: D, operateName: r }));
          else {
            var H = qt.size || _t;
            this.uploadPartEnable && p > 1.5 * H ? new Ri(this, { file: (s = e == null ? void 0 : e.file) === null || s === void 0 ? void 0 : s.data, onFileUploadProgress: e.onFileUploadProgress || Vt, onFileUploadComplete: e.onFileUploadComplete || Vt, onFileUploadError: e.onFileUploadError || Vt, onFileUploadCanceled: e.onFileUploadCanceled || Vt, onInitFail: function() {
              no.call(d, kt(kt({}, e), { orgName: v, appName: D, operateName: r }));
            }, thumbnailInfo: { width: e.thumbnailWidth, height: e.thumbnailHeight } }) : no.call(this, kt(kt({}, e), { orgName: v, appName: D, operateName: r }));
          }
          else e.onFileUploadError && e.onFileUploadError({ type: l.WEBIM_UPLOADFILE_ERROR, message: "AppKey illegal" });
          else e.onFileUploadError && e.onFileUploadError({ type: l.WEBIM_UPLOADFILE_NO_LOGIN, message: "AccessToken cannot be empty" });
        }
        function ke(e, r) {
          e.onFileDownloadComplete = e.onFileDownloadComplete || Vt, e.onFileDownloadError = e.onFileDownloadError || Vt;
          var o = (/* @__PURE__ */ new Date()).getTime(), a = new XMLHttpRequest(), s = this;
          a.addEventListener("load", function(D) {
            var H = (/* @__PURE__ */ new Date()).getTime() - o;
            s.dataReport && r && r === h.DOWN_GROUP_FILE && s.dataReport.geOperateFun({ operationName: r })({ isEndApi: !0, data: { isSuccess: a.status === 200 ? 1 : 0, requestMethod: "POST", requestName: r, requestElapse: H, requestUrl: e == null ? void 0 : e.url, code: a.status, codeDesc: a.status === 200 ? "" : "download file error" } }), e.onFileDownloadComplete && e.onFileDownloadComplete(a.response);
          }, !1), a.addEventListener("error", function(D) {
            var H = (/* @__PURE__ */ new Date()).getTime() - o;
            s.dataReport && r && r === h.DOWN_GROUP_FILE && s.dataReport.geOperateFun({ operationName: r })({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "POST", requestName: r, requestElapse: H, requestUrl: e == null ? void 0 : e.url, code: (a == null ? void 0 : a.status) || 0, codeDesc: "download file error" } }), e.onFileDownloadError && e.onFileDownloadError({ type: l.WEBIM_DOWNLOADFILE_ERROR, id: e.id, xhr: a });
          }, !1);
          var d = e.method || "GET", u = e.responseType || "blob", m = e.mimeType || "text/plain; charset=x-user-defined";
          a.open(d, e.url), typeof Blob < "u" ? a.responseType = u : a.overrideMimeType(m);
          var p = { "X-Requested-With": "XMLHttpRequest", Accept: "application/octet-stream", "share-secret": e.secret, Authorization: "Bearer " + this.context.accessToken }, T = e.headers || {};
          for (var v in T) p[v] = T[v];
          for (var v in p) p[v] && a.setRequestHeader(v, p[v]);
          a.send(null);
        }
        function $e(e) {
          e === void 0 && (e = {});
          var r = e.elapse, o = r === void 0 ? 0 : r, a = e.httpCode, s = a === void 0 ? 0 : a, d = e.errDesc;
          return { requestElapse: o, code: s, codeDesc: d === void 0 ? "" : d };
        }
        (function(e) {
          e.WEB = "web", e.WX = "wx", e.QQ = "qq", e.ZFB = "zfb", e.DD = "dd", e.TT = "tt", e.BAIDU = "baidu", e.QUICK_APP = "quick_app", e.UNI = "uni", e.NODE = "node";
        })(je || (je = {}));
        var Mt = "localDeviceInfo", ve = { autoIncrement: 0, ajaxUnconventionalErrorTimes: 0, ajax: re, getUniqueId: function() {
          this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
          var e = /* @__PURE__ */ new Date(), r = new Date(2010, 1, 1);
          return (e.getTime() - r.getTime() + this.autoIncrement).toString();
        }, getFileUrl: function(e) {
          var r = { url: "", filename: "", filetype: "", data: {} }, o = typeof e == "string" ? document.getElementById(e) : e;
          if (window.URL.createObjectURL) {
            if (!o.files) throw Error("this is not HTMLInputElement");
            var a = o.files;
            if (a.length > 0) {
              var s = a.item(0);
              r.data = s, r.url = window.URL.createObjectURL(s), r.filename = (s == null ? void 0 : s.name) || "";
            }
          } else {
            if (typeof e != "string") throw Error("in IE fileInputId must be string");
            s = document.getElementById(e).value, r.url = s;
            var d = s.lastIndexOf("/"), u = s.lastIndexOf("\\"), m = Math.max(d, u);
            r.filename = m < 0 ? s : s.substring(m + 1);
          }
          var p = r.filename.lastIndexOf(".");
          return p !== -1 && (r.filetype = r.filename.substring(p + 1).toLowerCase()), r;
        }, uploadFile: Be, flow: function(e) {
          for (var r = e.length, o = r; o--; ) if (typeof e[o] != "function") throw new TypeError("Expected a function");
          return function() {
            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
            for (var d = 0, u = r ? e[d].apply(this, a) : a[0]; ++d < r; ) u = e[d].call(this, u);
            return u;
          };
        }, listenNetwork: oo, listenBrowserVisibility: Ce, getEnvInfo: we, wxRequest: sr, parseDownloadResponse: function(e) {
          if (!window || !window.URL) throw Error("parseDownloadResponse can be used in broswer only");
          return e && e.type && e.type === "application/json" || 0 > Object.prototype.toString.call(e).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(e);
        }, download: ke, parseNotify: function(e) {
          for (var r = "", o = 0; o < e.length; o++) r += "%" + e[o].toString(16);
          return JSON.parse(decodeURIComponent(r));
        }, getExtraData: $e, formatAttachUrl: function(e) {
          return e && typeof e == "string" ? "".concat(this.apiUrl).concat(e.substr(e.indexOf("/", 9))) : "";
        }, Uint8ArrayToString: function(e) {
          for (var r = "", o = 0; o < e.length; o++) r += String.fromCharCode(e[o]);
          return r;
        }, getLocalDeviceInfo: function() {
          var e, r = ve.getEnvInfo(), o = r.platform, a = "";
          o !== je.NODE && o !== je.QUICK_APP || (a = "");
          try {
            o === je.WEB ? a = localStorage.getItem(Mt) || "" : o === je.WX || o === je.QQ || o === je.TT || o === je.BAIDU || o === je.UNI ? a = r.global.getStorageSync(Mt) || "" : o !== je.ZFB && o !== je.DD || (a = ((e = r.global.getStorageSync({ key: Mt })) === null || e === void 0 ? void 0 : e.data) || "");
          } catch (s) {
            L.debug("get local deviceInfo failed: ", s);
          }
          return L.debug("local devInfo", a), a;
        }, setLocalDeviceInfo: function(e) {
          var r = ve.getEnvInfo(), o = r.platform;
          o !== je.NODE && o !== je.QUICK_APP && (o === je.WEB ? localStorage.setItem(Mt, e) : r.global.setStorage({ key: Mt, data: e, success: function(a) {
            L.debug("set local deviceInfo success: ", a);
          }, fail: function(a) {
            L.debug("set local deviceInfo failed: ", a);
          } }));
        }, detectBrowser: function() {
          if (typeof navigator > "u") return "unknown";
          var e = navigator.userAgent;
          return /MicroMessenger/i.test(e) ? "WeChat" : /QQBrowser/i.test(e) ? "QQ" : !/Chrome/i.test(e) || /Edg/i.test(e) || /OPR/i.test(e) ? !/Safari/i.test(e) || /Chrome/i.test(e) || /CriOS/i.test(e) ? /Firefox/i.test(e) ? "Firefox" : /MSIE/i.test(e) || /Trident/i.test(e) ? "IE" : /Edg/i.test(e) ? "Edge" : "unknown" : "Safari" : "Chrome";
        }, getDevicePlatform: function(e) {
          return e.platform === je.WX && typeof uni < "u" && Pe(uni) ? je.UNI : e.platform;
        } }, Tt = f(887), Ot = f.n(Tt), Nt = function() {
          return Nt = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, Nt.apply(this, arguments);
        }, Bt = { chat: "singleChat", chatroom: "chatRoom", groupchat: "groupChat", singleChat: "singleChat", chatRoom: "chatRoom", groupChat: "groupChat" };
        function dr(e, r) {
          var o, a, s, d = r || {}, u = d.formatCustomExts, m = u === void 0 || u, p = d.formatChatType, T = p !== void 0 && p, v = e.id, D = e.payload, H = e.timestamp, k = e.to, w = D.bodies && D.bodies.length > 0 ? D.bodies[0] : {}, F = {}, V = {}, ue = D.type ? D.type : k.indexOf("@conference.easemob.com") > -1 ? "groupChat" : "singleChat";
          ue = ue === "chat" ? "singleChat" : ue, T && D.type && (ue = Bt[D.type]);
          var pe = "";
          switch (w.type) {
            case "txt":
              if (Object.prototype.hasOwnProperty.call(w, "subType") && w.subType === "sub_combine") pe = fr.call(this, { remotePath: w == null ? void 0 : w.url, secret: w == null ? void 0 : w.secret }), F = { id: v, type: "combine", chatType: ue, to: D.to, from: D.from, ext: D.ext, time: H, title: w.title || "", summary: w.summary || "", url: pe || "", secret: w.secret || "", file_length: w.file_length || 0, filename: w.filename || "", compatibleText: w.msg, combineLevel: w.combineLevel || 0 };
              else {
                var le = (o = D == null ? void 0 : D.meta) === null || o === void 0 ? void 0 : o.edit_msg;
                if (F = { id: v, type: "txt", chatType: ue, msg: w.msg || "", to: D.to || "", from: D.from, time: H, ext: D.ext }, le) {
                  var ge = le.edit_time, ye = le.operator, Ne = le.count;
                  F.modifiedInfo = { operationTime: ge, operatorId: ye, operationCount: Ne };
                }
              }
              break;
            case "img":
              pe = this.useOwnUploadFun ? w == null ? void 0 : w.url : fr.call(this, { remotePath: w == null ? void 0 : w.url, secret: w == null ? void 0 : w.secret }), F = { id: v, type: "img", chatType: ue, to: D.to, from: D.from, time: H, ext: D.ext, width: ((a = w.size) === null || a === void 0 ? void 0 : a.width) || 0, height: ((s = w.size) === null || s === void 0 ? void 0 : s.height) || 0, thumb: this.useOwnUploadFun ? "" : "".concat(pe, "&thumbnail=true"), thumb_secret: w.secret, secret: w.secret || "", url: pe || "", file_length: w.file_length || 0, file: {} };
              break;
            case "video":
              pe = this.useOwnUploadFun ? w == null ? void 0 : w.url : fr.call(this, { remotePath: w == null ? void 0 : w.url, secret: w == null ? void 0 : w.secret }), F = { id: v, type: "video", chatType: ue, from: D.from, to: D.to, thumb: ve.formatAttachUrl.call(this, w.thumb), thumb_secret: w.thumb_secret || "", url: pe || "", secret: w.secret || "", filename: w.filename, length: w.length || 0, file: {}, file_length: w.file_length || 0, filetype: D.ext.file_type || "", ext: D.ext, time: H };
              break;
            case "loc":
              F = { id: v, type: "loc", chatType: ue, from: D.from, to: D.to, buildingName: w.buildingName || "", addr: w.addr, lat: w.lat, lng: w.lng, ext: D.ext, time: H };
              break;
            case "audio":
              pe = this.useOwnUploadFun ? w == null ? void 0 : w.url : fr.call(this, { remotePath: w == null ? void 0 : w.url, secret: w == null ? void 0 : w.secret }), F = { id: v, type: "audio", chatType: ue, from: D.from, to: D.to, secret: w.secret || "", ext: D.ext, time: H, url: pe || "", file: {}, filename: w.filename, length: w.length || 0, file_length: w.file_length || 0, filetype: D.ext.file_type || "" };
              break;
            case "file":
              pe = this.useOwnUploadFun ? w == null ? void 0 : w.url : fr.call(this, { remotePath: w == null ? void 0 : w.url, secret: w == null ? void 0 : w.secret }), F = { id: v, type: "file", chatType: ue, from: D.from, to: D.to, ext: D.ext, time: H, url: pe || "", secret: w.secret || "", file: {}, filename: w.filename || "", file_length: w.file_length || 0, filetype: D.ext.file_type || "" };
              break;
            case "cmd":
              F = { id: v, type: "cmd", chatType: ue, from: D.from, to: D.to, ext: D.ext, time: H, action: w.action || "" };
              break;
            case "custom":
              var Ie = w.customExts || {};
              m && w.customExts && (Ie = {}, w.customExts.map(function(Te) {
                Ie = Nt(Nt({}, Ie), Te);
              })), F = { id: v, type: "custom", chatType: ue, from: D.from, to: D.to, ext: D.ext, time: H, customEvent: w.customEvent || "", customExts: Ie };
              break;
            case "combine":
              pe = fr.call(this, { remotePath: w == null ? void 0 : w.url, secret: w == null ? void 0 : w.secret }), F = { id: v, type: "combine", chatType: ue, msg: w.msg || "", to: D.to || "", from: D.from, time: H, ext: D.ext, title: w.title || "", summary: w.summary || "", url: pe || "", compatibleText: w.text, combineLevel: w.combineLevel || 0, secret: w.secret || "", filename: w.filename || "", file_length: w.file_length || 0 };
              break;
            default:
              L.error("unexpected message: ".concat(e));
          }
          if (D.msgConfig && (V.msgConfig = D.msgConfig), D == null ? void 0 : D.meta) {
            var Ae = D.meta;
            Ae.thread && (V.chatThread = { messageId: Ae.thread.msg_parent_id, parentId: Ae.thread.muc_parent_id, chatThreadName: Ae.thread.thread_name }), Ae.reaction && (V.reactions = Ae.reaction), Ae.translations && (V.translations = Ae.translations);
          }
          return Nt(Nt({}, F), V);
        }
        var qe, Yr = function(e) {
          return "".concat(e.conversationType, "-").concat(e.conversationId);
        }, io = function(e) {
          var r = e.isRecallSelfMsg, o = e.conversation, a = e.recalledMsgTime, s = o.unReadCount, d = s === void 0 ? 0 : s, u = o.unreadCountClearTimestamp;
          return r || (u === void 0 ? 0 : u) > a ? d : d && d > 0 ? d - 1 : 0;
        }, Kp = function(e) {
          var r, o = 0;
          if (e.length === 0) return o;
          for (r = 0; r < e.length; r++) o = (o << 5) - o + e.charCodeAt(r), o |= 0;
          return o;
        }, ys = function() {
          function e(r) {
            var o = r.id;
            this.id = o, this.type = r.type;
          }
          return e.prototype.set = function(r) {
            this.body = { id: this.id, ackId: r.id, type: "read", to: r.to, from: r.from || "", chatType: r.chatType };
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), chatType: r.chatType, ackId: r.id, type: "read", to: r.to, from: r.from || "", ackContent: r.ackContent, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly };
          }, e;
        }(), _s = function() {
          function e(r) {
            this.id = r.id, this.type = r.type;
          }
          return e.prototype.set = function(r) {
            this.body = { id: this.id, ackId: r.ackId, type: "delivery", to: r.to, from: r.from || "" };
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), ackId: r.ackId, type: "delivery", to: r.to, from: r.from || "", isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly };
          }, e;
        }(), Ts = function() {
          function e(r) {
            var o = r.type, a = r.id;
            this.id = a, this.type = o;
          }
          return e.prototype.set = function(r) {
            this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "channel", to: r.to, from: r.from || "", time: Date.now() };
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), type: "channel", chatType: r.chatType || "singleChat", to: r.to, from: r.from || "", time: Date.now(), isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly };
          }, e;
        }(), Os = function() {
          function e(r) {
            var o = r.type, a = r.id || ve.getUniqueId();
            this.id = a, this.type = o, this.value = "";
          }
          return e.prototype.set = function(r) {
            this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "txt", to: r.to, msg: r.msg, from: r.from, roomType: r.roomType, success: r.success, fail: r.fail, ext: r.ext, time: Date.now(), isChatThread: r.isChatThread }, this.value = r.msg;
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            var o, a;
            return !((o = r.msgConfig) === null || o === void 0) && o.languages && Array.isArray((a = r.msgConfig) === null || a === void 0 ? void 0 : a.languages), { type: "txt", id: ve.getUniqueId(), msg: r.msg, to: r.to, from: r.from || "", chatType: r.chatType, ext: r.ext, time: Date.now(), msgConfig: r.msgConfig, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList };
          }, e;
        }(), Rs = function() {
          function e(r) {
            var o = r.type, a = r.id;
            this.id = a || ve.getUniqueId(), this.type = o;
          }
          return e.prototype.set = function(r) {
            this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "cmd", to: r.to, action: r.action, from: r.from, roomType: r.roomType, success: r.success, fail: r.fail, ext: r.ext, time: Date.now() };
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), type: "cmd", to: r.to, from: r.from || "", chatType: r.chatType || "singleChat", action: r.action, time: Date.now(), ext: r.ext, msgConfig: r.msgConfig, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList };
          }, e;
        }(), Is = function() {
          function e(r) {
            var o = r.type, a = r.id || ve.getUniqueId();
            this.id = a, this.type = o;
          }
          return e.prototype.set = function(r) {
            this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "custom", to: r.to, customEvent: r.customEvent, customExts: r.customExts, from: r.from, roomType: r.roomType, success: r.success, fail: r.fail, ext: r.ext, time: Date.now() };
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), chatType: r.chatType || "singleChat", type: "custom", to: r.to, customEvent: r.customEvent, customExts: r.customExts, from: r.from || "", ext: r.ext, time: Date.now(), msgConfig: r.msgConfig, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList };
          }, e;
        }(), Ss = function() {
          function e(r) {
            var o = r.type, a = r.id;
            this.id = a || ve.getUniqueId(), this.type = o;
          }
          return e.prototype.set = function(r) {
            this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "loc", to: r.to, addr: r.addr, buildingName: r.buildingName, lat: r.lat, lng: r.lng, from: r.from, roomType: r.roomType, success: r.success, fail: r.fail, ext: r.ext, time: Date.now() };
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), chatType: r.chatType || "singleChat", type: "loc", to: r.to, addr: r.addr, buildingName: r.buildingName, lat: r.lat, lng: r.lng, from: r.from || "", ext: r.ext, time: Date.now(), msgConfig: r.msgConfig, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList };
          }, e;
        }(), Cs = function() {
          function e(r) {
            var o = r.type, a = r.id || ve.getUniqueId();
            this.id = a, this.type = o;
          }
          return e.prototype.set = function(r) {
            r.file = r.file || r.fileInputId && ve.getFileUrl(r.fileInputId), this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "img", file: r.file, width: r.width, height: r.height, to: r.to, from: r.from || "", roomType: r.roomType, success: r.success, fail: r.fail, ext: r.ext, time: Date.now(), onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete, onFileUploadProgress: r.onFileUploadProgress, body: r.body, isChatThread: r.isChatThread };
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), chatType: r.chatType, type: "img", url: r.url, width: r.width, height: r.height, file: r.file, to: r.to, from: r.from || "", ext: r.ext, time: Date.now(), msgConfig: r.msgConfig, file_length: r.file_length, onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete, onFileUploadProgress: r.onFileUploadProgress, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList, thumbnailWidth: r.thumbnailWidth, thumbnailHeight: r.thumbnailHeight };
          }, e;
        }(), Ns = function() {
          function e(r) {
            var o = r.type, a = r.id || ve.getUniqueId();
            this.id = a, this.type = o;
          }
          return e.prototype.set = function(r) {
            r.file = r.file || r.fileInputId && ve.getFileUrl(r.fileInputId), this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "audio", file: r.file, filename: r.filename, length: r.length, file_length: r.file_length, fileInputId: r.fileInputId, to: r.to, from: r.from, roomType: r.roomType, success: r.success, fail: r.fail, ext: r.ext, time: Date.now(), onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete, onFileUploadProgress: r.onFileUploadProgress, body: r.body, isChatThread: r.isChatThread };
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), chatType: r.chatType, type: "audio", filename: r.filename, length: r.length, file: r.file, to: r.to, from: r.from || "", ext: r.ext, time: Date.now(), onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete, onFileUploadProgress: r.onFileUploadProgress, body: r.body, file_length: r.file_length, msgConfig: r.msgConfig, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList };
          }, e;
        }(), As = function() {
          function e(r) {
            var o = r.type, a = r.id;
            this.id = a, this.type = o;
          }
          return e.prototype.set = function(r) {
            r.file = r.file || r.fileInputId && ve.getFileUrl(r.fileInputId), this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "video", file: r.file, filename: r.filename, length: r.length, file_length: r.file_length, fileInputId: r.fileInputId, to: r.to, from: r.from, roomType: r.roomType, success: r.success, fail: r.fail, ext: r.ext, time: Date.now(), apiUrl: r.apiUrl, onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete, onFileUploadProgress: r.onFileUploadProgress, body: r.body, isChatThread: r.isChatThread };
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), chatType: r.chatType || "singleChat", type: "video", file: r.file, filename: r.filename, length: r.length, file_length: r.file_length, fileInputId: r.fileInputId, to: r.to, from: r.from || "", ext: r.ext, time: Date.now(), onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete, onFileUploadProgress: r.onFileUploadProgress, body: r.body, msgConfig: r.msgConfig, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList };
          }, e;
        }(), bs = function() {
          function e(r) {
            var o = r.type, a = r.id;
            this.id = a, this.type = o;
          }
          return e.prototype.set = function(r) {
            r.file = r.file || r.fileInputId && ve.getFileUrl(r.fileInputId), this.body = { id: this.id, chatType: r.chatType || "singleChat", type: "file", file: r.file, filename: r.filename, fileInputId: r.fileInputId, to: r.to, from: r.from, roomType: r.roomType, success: r.success, fail: r.fail, ext: r.ext, time: Date.now(), onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete, onFileUploadProgress: r.onFileUploadProgress, body: r.body, isChatThread: r.isChatThread };
          }, e.prototype.setChatType = function(r) {
            return !!this.body && (this.body.chatType = r, !0);
          }, e.prototype.setGroup = function(r) {
            return !!this.body && (this.body.group = r, !0);
          }, e.create = function(r) {
            return { id: ve.getUniqueId(), chatType: r.chatType || "singleChat", type: "file", file: r.file, filename: r.filename, fileInputId: r.fileInputId, file_length: r.file_length, to: r.to, from: r.from || "", ext: r.ext, onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete, onFileUploadProgress: r.onFileUploadProgress, body: r.body, time: Date.now(), msgConfig: r.msgConfig, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList };
          }, e;
        }(), zp = function() {
          function e(r) {
            var o = r.type, a = r.id || ve.getUniqueId();
            this.id = a, this.type = o, this.value = "";
          }
          return e.create = function(r) {
            return { type: "combine", id: ve.getUniqueId(), to: r.to, from: r.from || "", chatType: r.chatType, ext: r.ext, time: Date.now(), msgConfig: r.msgConfig, isChatThread: r.isChatThread, priority: r.priority, deliverOnlineOnly: r.deliverOnlineOnly, receiverList: r.receiverList, compatibleText: r.compatibleText, title: r.title, summary: r.summary, messageList: r.messageList, onFileUploadError: r.onFileUploadError, onFileUploadComplete: r.onFileUploadComplete };
          }, e;
        }(), Ms = function() {
          function e(r, o) {
            return this.type = r, this.id = o || ve.getUniqueId(), e.createOldMsg({ type: r, id: this.id });
          }
          return e.createOldMsg = function(r) {
            switch (r.type) {
              case "read":
                return new ys({ type: "read", id: r.id });
              case "delivery":
                return new _s({ type: "delivery", id: r.id });
              case "channel":
                return new Ts({ type: "channel", id: r.id });
              case "txt":
                return new Os({ type: "txt", id: r.id });
              case "cmd":
                return new Rs({ type: "cmd", id: r.id });
              case "custom":
                return new Is({ type: "custom", id: r.id });
              case "loc":
                return new Ss({ type: "loc", id: r.id });
              case "img":
                return new Cs({ type: "img", id: r.id });
              case "audio":
                return new Ns({ type: "audio", id: r.id });
              case "video":
                return new As({ type: "video", id: r.id });
              case "file":
                return new bs({ type: "file", id: r.id });
            }
          }, e.create = function(r) {
            return (o = r).type !== "txt" || "version" in o ? function(a) {
              return a.type === "img" && !("version" in a);
            }(r) ? Cs.create(r) : function(a) {
              return a.type === "cmd" && !("version" in a);
            }(r) ? Rs.create(r) : function(a) {
              return a.type === "file" && !("version" in a);
            }(r) ? bs.create(r) : function(a) {
              return a.type === "audio" && !("version" in a);
            }(r) ? Ns.create(r) : function(a) {
              return a.type === "video" && !("version" in a);
            }(r) ? As.create(r) : function(a) {
              return a.type === "custom" && !("version" in a);
            }(r) ? Is.create(r) : function(a) {
              return a.type === "loc" && !("version" in a);
            }(r) ? Ss.create(r) : function(a) {
              return a.type === "channel" && !("version" in a);
            }(r) ? Ts.create(r) : function(a) {
              return a.type === "delivery" && !("version" in a);
            }(r) ? _s.create(r) : function(a) {
              return a.type === "read" && !("version" in a);
            }(r) ? ys.create(r) : function(a) {
              return a.type === "combine" && !("version" in a);
            }(r) ? zp.create(r) : {} : Os.create(r);
            var o;
          }, e.prototype.set = function(r) {
          }, e;
        }();
        (function(e) {
          e[e.CREATE = 0] = "CREATE", e[e.FAIL = 1] = "FAIL", e[e.INPROGRESS = 2] = "INPROGRESS", e[e.SUCCESS = 3] = "SUCCESS";
        })(qe || (qe = {}));
        var kn = function() {
          return kn = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, kn.apply(this, arguments);
        }, ws = function(e, r, o, a) {
          return new (o || (o = Promise))(function(s, d) {
            function u(T) {
              try {
                p(a.next(T));
              } catch (v) {
                d(v);
              }
            }
            function m(T) {
              try {
                p(a.throw(T));
              } catch (v) {
                d(v);
              }
            }
            function p(T) {
              var v;
              T.done ? s(T.value) : (v = T.value, v instanceof o ? v : new o(function(D) {
                D(v);
              })).then(u, m);
            }
            p((a = a.apply(e, [])).next());
          });
        }, Us = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        }, Qr = { 0: "TEXT", 1: "IMAGE", 2: "VIDEO", 3: "LOCATION", 4: "VOICE", 5: "FILE", 6: "COMMAND", 7: "CUSTOM", 8: "COMBINE" };
        function ao(e) {
          for (var r = {}, o = 0; o < e.length; o++) if (e[o].type === 8) r[e[o].key] = JSON.parse(e[o].stringValue);
          else if (e[o].type === 7) r[e[o].key] = e[o].stringValue;
          else if (e[o].type === 6) r[e[o].key] = e[o].doubleValue;
          else if (e[o].type === 5) r[e[o].key] = e[o].floatValue;
          else if (e[o].type === 1) {
            var a = e[o].varintValue, s = new (M())(a.low, a.high, a.unsigned).toString();
            r[e[o].key] = Number(s) !== 0;
          } else e[o].type !== 2 && e[o].type !== 3 && e[o].type !== 4 || (a = e[o].varintValue, s = new (M())(a.low, a.high, a.unsigned).toString(), r[e[o].key] = Number(s));
          return r;
        }
        function fr(e) {
          var r = "";
          return e.remotePath && (r = ve.formatAttachUrl.call(this, e.remotePath), e.remotePath.includes("?em-redirect") || (r = "".concat(r, "?em-redirect=true"), e.secretKey && (r = "".concat(r, "&share-secret=").concat(e.secretKey)))), r;
        }
        function $p(e, r) {
          var o, a, s = r.from && r.from.name;
          if (s === this.context.userId) {
            var d = (o = e == null ? void 0 : e.from) === null || o === void 0 ? void 0 : o.clientResource;
            s === ((a = r == null ? void 0 : r.to) === null || a === void 0 ? void 0 : a.name) && d && d !== this.clientResource && (s = "".concat(s, "/").concat(d));
          }
          return s;
        }
        function qp(e, r) {
          var o, a = r.to && r.to.name;
          return !((o = e == null ? void 0 : e.to) === null || o === void 0) && o.clientResource && (a = "".concat(a, "/").concat(e.to.clientResource)), a;
        }
        function Ps(e) {
          var r, o, a, s, d, u, m, p, T, v, D, H, k, w, F, V, ue, pe, le, ge, ye, Ne, Ie, Ae, Te, Ye, Ke;
          return ws(this, void 0, void 0, function() {
            var X, Se, Y, He, Me, be, We, Qe, Je, Fe, Ge, rt, et, at, Ve, bt, Xe, _e, he, De, oe, zt, nt, st, Ir, Jt, ht, Sr, Ze, Le, mt, lt, hr, mr, en, tn, vr, Vr, wt, It, er, $t, ot, tr, rr, nr, Xt, Ht, fn, ze, Ut, or;
            return Us(this, function(vt) {
              switch (vt.label) {
                case 0:
                  switch (X = e.status, Se = e.thirdMessage, Y = e.msgBody, He = e.msgId, Me = e.type, be = e.from, We = e.to, Qe = e.time, Je = e.onlineState, Fe = e.chatType, Ge = e.ignoreCallback, rt = e.priority, et = e.format, at = e.broadcast, Ve = at !== void 0 && at, bt = e.isContentReplaced, Xe = bt !== void 0 && bt, _e = {}, he = {}, De = X.errorCode > 0, oe = X.errorCode, zt = X.reason, nt = {}, st = [], Ir = [], Jt = {}, ht = "", Sr = 0, Ze = null, Le = null, Se.ext && (nt = ao(Se.ext)), Se.meta && typeof Se.meta == "string" && ((lt = JSON.parse(Se.meta)).reaction && (st = lt.reaction).forEach(function(Dr) {
                    Dr.isAddedBySelf = Dr.state, delete Dr.state;
                  }), lt.translations && (Ir = lt.translations), lt.edit_msg && (hr = lt.edit_msg, mr = hr.count, en = hr.operator, tn = hr.edit_time, vr = hr.sender, Vr = hr.send_time, Jt = { operationTime: tn, operatorId: en, operationCount: mr }, ht = vr, Sr = Vr), lt.thread && JSON.stringify(lt.thread) !== "{}" && (Ze = { messageId: lt.thread.msg_parent_id, parentId: lt.thread.muc_parent_id, chatThreadName: lt.thread.thread_name }), lt.thread_overview && JSON.stringify(lt.thread_overview) !== "{}" && (Le = { id: lt.thread_overview.id, parentId: lt.thread_overview.muc_parent_id, name: lt.thread_overview.name, lastMessage: lt.thread_overview.last_message && JSON.stringify(lt.thread_overview.last_message) !== "{}" ? dr.call(this, lt.thread_overview.last_message) : null, createTimestamp: lt.thread_overview.create_timestamp, updateTimestamp: lt.thread_overview.update_timestamp, messageCount: lt.thread_overview.message_count || 0 })), Y.type) {
                    case 0:
                      return [3, 1];
                    case 1:
                      return [3, 7];
                    case 2:
                      return [3, 10];
                    case 3:
                      return [3, 13];
                    case 4:
                      return [3, 16];
                    case 5:
                      return [3, 19];
                    case 6:
                      return [3, 22];
                    case 7:
                      return [3, 23];
                    case 8:
                      return [3, 26];
                  }
                  return [3, 27];
                case 1:
                  return Object.prototype.hasOwnProperty.call(Y, "subType") && Y.subType === 0 ? (mt = fr.call(this, Y), wt = { id: He, type: "combine", chatType: Fe, to: We, from: be, ext: nt, time: Number(Qe), onlineState: Je, title: Y.title || "", summary: Y.summary || "", url: mt || "", secret: Y.secretKey || "", file_length: Y.fileLength || 0, filename: Y.displayName || "", compatibleText: Y.text, combineLevel: Y.combineLevel || 0 }, _e.msgConfig && (wt.msgConfig = _e.msgConfig), st.length > 0 && (wt.reactions = st), Ze && (wt.chatThread = Ze), Le && (wt.chatThreadOverview = Le), Fe === "chatRoom" && (wt.priority = rt, wt.broadcast = Ve), Xe && (wt.isContentReplaced = Xe), he = wt, Ge ? [3, 3] : [4, (o = (r = this._localCache) === null || r === void 0 ? void 0 : r.getInstance()) === null || o === void 0 ? void 0 : o.storeMessage(wt, qe.SUCCESS)]) : [3, 4];
                case 2:
                  vt.sent(), (a = this.eventHandler) === null || a === void 0 || a.dispatch("onCombineMessage", wt), vt.label = 3;
                case 3:
                  return [3, 28];
                case 4:
                  return !(_e = { id: He, type: Me, contentsType: Qr[Y.type], from: be, to: We, data: Y.text, ext: nt, sourceMsg: Y.text, time: Qe, msgConfig: Se.msgConfig, onlineState: Je }).msgConfig && delete Se.msgConfig, _e.error = De, _e.errorText = zt, _e.errorCode = oe, !Ge && this.onTextMessage && this.onTextMessage(_e), It = { id: He, type: "txt", chatType: Fe, msg: Y.text, to: We, from: be, ext: nt, time: Number(Qe), onlineState: Je }, _e.msgConfig && (It.msgConfig = _e.msgConfig), st.length > 0 && (It.reactions = st), Ze && (It.chatThread = Ze), Le && (It.chatThreadOverview = Le), Ir.length > 0 && (It.translations = Ir), Jt.operationCount > 0 && (It.modifiedInfo = Jt, Se.type === At.EDIT && (It.from = ht, It.time = Sr)), Fe === "chatRoom" && (It.priority = rt, It.broadcast = Ve), Xe && (It.isContentReplaced = Xe), he = It, Ge ? [3, 6] : [4, (d = (s = this._localCache) === null || s === void 0 ? void 0 : s.getInstance()) === null || d === void 0 ? void 0 : d.storeMessage(It, qe.SUCCESS)];
                case 5:
                  vt.sent(), (u = this.eventHandler) === null || u === void 0 || u.dispatch("onTextMessage", It), vt.label = 6;
                case 6:
                  return [3, 28];
                case 7:
                  return er = ((m = Y == null ? void 0 : Y.size) === null || m === void 0 ? void 0 : m.width) || 0, $t = ((p = Y == null ? void 0 : Y.size) === null || p === void 0 ? void 0 : p.height) || 0, mt = this.useOwnUploadFun ? Y.remotePath : fr.call(this, Y), !(_e = { id: He, type: Me, contentsType: Qr[Y.type], from: be, to: We, url: mt, secret: Y.secretKey, filename: Y.displayName, thumb: this.useOwnUploadFun ? "" : "".concat(mt, "&thumbnail=true"), thumb_secret: Y.secretKey, file_length: Y.fileLength || "", width: er, height: $t, filetype: Y.filetype || "", accessToken: this.token, ext: nt, time: Qe, msgConfig: Se.msgConfig, onlineState: Je }).delay && delete _e.delay, !_e.msgConfig && delete Se.msgConfig, _e.error = De, _e.errorText = zt, _e.errorCode = oe, !Ge && this.onPictureMessage && this.onPictureMessage(_e), ot = { id: He, type: "img", chatType: Fe, from: be, to: We, url: mt || "", width: er, height: $t, secret: Y.secretKey || "", thumb: this.useOwnUploadFun ? "" : "".concat(mt, "&thumbnail=true"), thumb_secret: Y.secretKey, file_length: Y.fileLength || 0, ext: nt, time: Number(Qe), onlineState: Je }, _e.msgConfig && (ot.msgConfig = _e.msgConfig), st.length > 0 && (ot.reactions = st), Ze && (ot.chatThread = Ze), Le && (ot.chatThreadOverview = Le), Fe === "chatRoom" && (ot.priority = rt, ot.broadcast = Ve), Xe && (ot.isContentReplaced = Xe), he = ot, Ge ? [3, 9] : [4, (v = (T = this._localCache) === null || T === void 0 ? void 0 : T.getInstance()) === null || v === void 0 ? void 0 : v.storeMessage(ot, qe.SUCCESS)];
                case 8:
                  vt.sent(), (D = this.eventHandler) === null || D === void 0 || D.dispatch("onImageMessage", ot), vt.label = 9;
                case 9:
                  return [3, 28];
                case 10:
                  return mt = this.useOwnUploadFun ? Y.remotePath : fr.call(this, Y), !(_e = { id: He, type: Me, contentsType: Qr[Y.type], from: be, to: We, url: mt, secret: Y.secretKey, filename: Y.displayName, length: Y.duration || "", file_length: Y.fileLength || "", filetype: Y.filetype || "", accessToken: this.token || "", ext: nt, time: Qe, msgConfig: Se.msgConfig, onlineState: Je }).delay && delete _e.delay, !_e.msgConfig && delete Se.msgConfig, _e.error = De, _e.errorText = zt, _e.errorCode = oe, !Ge && this.onVideoMessage && this.onVideoMessage(_e), tr = { id: He, type: "video", chatType: Fe, from: be, to: We, url: mt, secret: Y.secretKey, thumb: ve.formatAttachUrl.call(this, Y.thumbnailRemotePath), thumb_secret: Y.thumbnailSecretKey, filename: Y.displayName, length: Y.duration || 0, file: {}, file_length: Y.fileLength || 0, filetype: Y.filetype || "", accessToken: this.token || "", ext: nt, time: Number(Qe), onlineState: Je }, _e.msgConfig && (tr.msgConfig = _e.msgConfig), st.length > 0 && (tr.reactions = st), Ze && (tr.chatThread = Ze), Le && (tr.chatThreadOverview = Le), Fe === "chatRoom" && (tr.priority = rt, tr.broadcast = Ve), Xe && (tr.isContentReplaced = Xe), he = tr, Ge ? [3, 12] : [4, (k = (H = this._localCache) === null || H === void 0 ? void 0 : H.getInstance()) === null || k === void 0 ? void 0 : k.storeMessage(tr, qe.SUCCESS)];
                case 11:
                  vt.sent(), (w = this.eventHandler) === null || w === void 0 || w.dispatch("onVideoMessage", tr), vt.label = 12;
                case 12:
                  return [3, 28];
                case 13:
                  return !(_e = { id: He, type: Me, contentsType: Qr[Y.type], from: be, to: We, addr: Y.address, buildingName: Y.buildingName, lat: Y.latitude, lng: Y.longitude, ext: nt, time: Qe, msgConfig: Se.msgConfig, onlineState: Je }).delay && delete _e.delay, !_e.msgConfig && delete Se.msgConfig, _e.error = De, _e.errorText = zt, _e.errorCode = oe, !Ge && this.onLocationMessage && this.onLocationMessage(_e), rr = { id: He, type: "loc", chatType: Fe, from: be, to: We, buildingName: Y.buildingName, addr: Y.address, lat: Y.latitude, lng: Y.longitude, ext: nt, time: Number(Qe), onlineState: Je }, _e.msgConfig && (rr.msgConfig = _e.msgConfig), st.length > 0 && (rr.reactions = st), Ze && (rr.chatThread = Ze), Le && (rr.chatThreadOverview = Le), Fe === "chatRoom" && (rr.priority = rt, rr.broadcast = Ve), Xe && (rr.isContentReplaced = Xe), he = rr, Ge ? [3, 15] : [4, (V = (F = this._localCache) === null || F === void 0 ? void 0 : F.getInstance()) === null || V === void 0 ? void 0 : V.storeMessage(rr, qe.SUCCESS)];
                case 14:
                  vt.sent(), (ue = this.eventHandler) === null || ue === void 0 || ue.dispatch("onLocationMessage", rr), vt.label = 15;
                case 15:
                  return [3, 28];
                case 16:
                  return mt = this.useOwnUploadFun ? Y.remotePath : fr.call(this, Y), !(_e = { id: He, type: Me, contentsType: Qr[Y.type], from: be, to: We, url: mt, secret: Y.secretKey, filename: Y.displayName, file_length: Y.fileLength || "", accessToken: this.token || "", ext: nt, length: Y.duration, time: Qe, msgConfig: Se.msgConfig, onlineState: Je }).delay && delete _e.delay, !_e.msgConfig && delete Se.msgConfig, _e.error = De, _e.errorText = zt, _e.errorCode = oe, !Ge && this.onAudioMessage && this.onAudioMessage(_e), nr = { id: He, type: "audio", chatType: Fe, from: be, to: We, url: mt, secret: Y.secretKey, file: {}, filename: Y.displayName, length: Y.duration || 0, file_length: Y.fileLength || 0, filetype: Y.filetype || "", accessToken: this.token || "", ext: nt, time: Number(Qe), onlineState: Je }, _e.msgConfig && (nr.msgConfig = _e.msgConfig), st.length > 0 && (nr.reactions = st), Ze && (nr.chatThread = Ze), Le && (nr.chatThreadOverview = Le), Fe === "chatRoom" && (nr.priority = rt, nr.broadcast = Ve), Xe && (nr.isContentReplaced = Xe), he = nr, Ge ? [3, 18] : [4, (le = (pe = this._localCache) === null || pe === void 0 ? void 0 : pe.getInstance()) === null || le === void 0 ? void 0 : le.storeMessage(nr, qe.SUCCESS)];
                case 17:
                  vt.sent(), (ge = this.eventHandler) === null || ge === void 0 || ge.dispatch("onAudioMessage", nr), vt.label = 18;
                case 18:
                  return [3, 28];
                case 19:
                  return mt = this.useOwnUploadFun ? Y.remotePath : fr.call(this, Y), !(_e = { id: He, type: Me, contentsType: Qr[Y.type], from: be, to: We, url: mt, secret: Y.secretKey, filename: Y.displayName, file_length: Y.fileLength, accessToken: this.token || "", ext: nt, time: Qe, msgConfig: Se.msgConfig, onlineState: Je }).delay && delete _e.delay, !_e.msgConfig && delete Se.msgConfig, _e.error = De, _e.errorText = zt, _e.errorCode = oe, !Ge && this.onFileMessage && this.onFileMessage(_e), Xt = { id: He, type: "file", chatType: Fe, from: be, to: We, url: mt, secret: Y.secretKey, file: {}, filename: Y.displayName, length: Y.duration || 0, file_length: Y.fileLength || 0, filetype: Y.filetype || "", accessToken: this.token || "", ext: nt, time: Number(Qe), onlineState: Je }, _e.msgConfig && (Xt.msgConfig = _e.msgConfig), st.length > 0 && (Xt.reactions = st), Ze && (Xt.chatThread = Ze), Le && (Xt.chatThreadOverview = Le), Fe === "chatRoom" && (Xt.priority = rt, Xt.broadcast = Ve), Xe && (Xt.isContentReplaced = Xe), he = Xt, Ge ? [3, 21] : [4, (Ne = (ye = this._localCache) === null || ye === void 0 ? void 0 : ye.getInstance()) === null || Ne === void 0 ? void 0 : Ne.storeMessage(Xt, qe.SUCCESS)];
                case 20:
                  vt.sent(), (Ie = this.eventHandler) === null || Ie === void 0 || Ie.dispatch("onFileMessage", Xt), vt.label = 21;
                case 21:
                  return [3, 28];
                case 22:
                  return !(_e = { id: He, type: Me, contentsType: Qr[Y.type], from: be, to: We, action: Y.action, ext: nt, time: Qe, msgConfig: Se.msgConfig, onlineState: Je }).msgConfig && delete Se.msgConfig, _e.error = De, _e.errorText = zt, _e.errorCode = oe, !Ge && this.onCmdMessage && this.onCmdMessage(_e), Ht = { id: He, type: "cmd", chatType: Fe, from: be, to: We, action: Y.action, ext: nt, time: Number(Qe), onlineState: Je }, _e.msgConfig && (Ht.msgConfig = _e.msgConfig), st.length > 0 && (Ht.reactions = st), Ze && (Ht.chatThread = Ze), Le && (Ht.chatThreadOverview = Le), Fe === "chatRoom" && (Ht.priority = rt, Ht.broadcast = Ve), Xe && (Ht.isContentReplaced = Xe), he = Ht, Ge || (Ae = this.eventHandler) === null || Ae === void 0 || Ae.dispatch("onCmdMessage", Ht), [3, 28];
                case 23:
                  return fn = {}, ze = {}, Se.contents[0].customExts && (fn = ao(Se.contents[0].customExts)), Se.contents[0].params && (ze = ao(Se.contents[0].params)), _e = { id: He, type: Me, contentsType: Qr[Y.type], from: be, to: We, customEvent: Y.customEvent, params: ze, customExts: fn, ext: nt, time: Qe, onlineState: Je }, !Ge && this.onCustomMessage && this.onCustomMessage(_e), Ut = { id: He, type: "custom", chatType: Fe, from: be, to: We, customEvent: Y.customEvent, params: ze, customExts: fn, ext: nt, time: Number(Qe), onlineState: Je }, _e.msgConfig && (Ut.msgConfig = _e.msgConfig), st.length > 0 && (Ut.reactions = st), Ze && (Ut.chatThread = Ze), Le && (Ut.chatThreadOverview = Le), Jt.operationCount > 0 && (Ut.modifiedInfo = Jt, Se.type === At.EDIT && (Ut.from = ht, Ut.time = Sr)), Fe === "chatRoom" && (Ut.priority = rt, Ut.broadcast = Ve), Xe && (Ut.isContentReplaced = Xe), he = Ut, Ge ? [3, 25] : [4, (Ye = (Te = this._localCache) === null || Te === void 0 ? void 0 : Te.getInstance()) === null || Ye === void 0 ? void 0 : Ye.storeMessage(Ut, qe.SUCCESS)];
                case 24:
                  vt.sent(), (Ke = this.eventHandler) === null || Ke === void 0 || Ke.dispatch("onCustomMessage", Ut), vt.label = 25;
                case 25:
                  return [3, 28];
                case 26:
                  return mt = fr.call(this, Y), or = { id: He, type: "combine", chatType: Fe, to: We, from: be, ext: nt, time: Number(Qe), onlineState: Je, title: Y.title || "", summary: Y.summary || "", url: mt || "", secret: Y.secretKey || "", file_length: Y.fileLength || 0, filename: Y.displayName || "", compatibleText: Y.text, combineLevel: Y.combineLevel || 0 }, _e.msgConfig && (or.msgConfig = _e.msgConfig), st.length > 0 && (or.reactions = st), Ze && (or.chatThread = Ze), Le && (or.chatThreadOverview = Le), Fe === "chatRoom" && (or.priority = rt, or.broadcast = Ve), Xe && (or.isContentReplaced = Xe), he = or, !Ge && this.eventHandler && this.eventHandler.dispatch("onCombineMessage", or), [3, 28];
                case 27:
                  return L.error("Unknow message type, message:", Y), [3, 28];
                case 28:
                  return et ? [2, he] : [2, _e];
              }
            });
          });
        }
        function Jp(e, r, o) {
          if (this.delivery && e !== r) {
            var a = this.getUniqueId(), s = new Ms("delivery", a);
            s.set({ ackId: o, to: e }), L.debug("send delivery ack"), this.send(s.body);
          }
        }
        var Dn = function(e, r, o, a) {
          var s, d, u, m, p, T, v, D, H, k, w, F, V, ue, pe, le, ge, ye, Ne, Ie, Ae, Te, Ye, Ke, X, Se;
          return ws(this, void 0, void 0, function() {
            var Y, He, Me, be, We, Qe, Je, Fe, Ge, rt, et, at, Ve, bt, Xe, _e, he, De, oe, zt, nt, st, Ir, Jt, ht, Sr, Ze, Le, mt, lt, hr, mr, en, tn, vr, Vr, wt, It, er, $t;
            return Us(this, function(ot) {
              switch (ot.label) {
                case 0:
                  if (Y = new (M())(e.timestamp.low, e.timestamp.high, e.timestamp.unsigned).toString(), He = this.root.lookup("easemob.pb.MessageBody"), Me = He.decode(e.payload), be = 3, We = !1, e.meta && e.meta.length) {
                    if (Qe = ve.parseNotify(e.meta), Je = Qe.is_online, Fe = Qe.callback_replace, this.useReplacedMessageContents && Fe && (We = !0), Je || Je === 0) switch (Je) {
                      case 0:
                        be = 0;
                        break;
                      case 1:
                        be = 1;
                        break;
                      default:
                        be = 2;
                    }
                  } else be = 3;
                  switch (Ge = new (M())(e.id.low, e.id.high, e.id.unsigned).toString(), rt = Me.ackMessageId ? new (M())(Me.ackMessageId.low, Me.ackMessageId.high, Me.ackMessageId.unsigned).toString() : "", et = "", at = $p.call(this, e, Me), Ve = qp.call(this, e, Me), L.debug("meta thirdMessage:", { metaId: Ge, metaNs: e.ns, type: Me.type, from: at, to: Ve, contentType: (d = (s = Me.contents) === null || s === void 0 ? void 0 : s[0]) === null || d === void 0 ? void 0 : d.type, contentLen: (u = Me.contents) === null || u === void 0 ? void 0 : u.length }), Me.type) {
                    case At.SINGLECHAT:
                      return [3, 1];
                    case At.GROUPCHAT:
                      return [3, 2];
                    case At.CHATROOM:
                      return [3, 3];
                    case At.READ_ACK:
                      return [3, 4];
                    case At.DELIVER_ACK:
                      return [3, 5];
                    case At.RECALL:
                      return [3, 6];
                    case At.CHANNEL_ACK:
                      return [3, 15];
                    case At.EDIT:
                      return [3, 16];
                  }
                  return [3, 20];
                case 1:
                  return et = "chat", this.grantType === "agoraToken" && (et = "singleChat"), this.delivery && !o && at !== this.context.userId && Jp.call(this, at, Ve, Ge), [3, 21];
                case 2:
                  return et = "groupchat", this.grantType === "agoraToken" && (et = "groupChat"), [3, 21];
                case 3:
                  return et = "chatroom", this.grantType === "agoraToken" && (et = "chatRoom"), be = 1, [3, 21];
                case 4:
                  return et = "read_ack", bt = void 0, Me.ext[0] && JSON.parse(Me.ext[0].stringValue) ? (bt = { id: Ge, type: "read", from: at, to: Ve, mid: rt, groupReadCount: Me.ext[0] && JSON.parse(Me.ext[0].stringValue), ackContent: Me.ackContent, onlineState: be }, this.onReadMessage && this.onReadMessage(bt), (m = this.eventHandler) === null || m === void 0 || m.dispatch("onReadMessage", bt), [2]) : (bt = { id: Ge, type: "read", from: at, to: Ve, mid: rt, onlineState: be }, this.onReadMessage && this.onReadMessage(bt), (p = this.eventHandler) === null || p === void 0 || p.dispatch("onReadMessage", bt), [2]);
                case 5:
                  return et = "deliver_ack", this.onDeliveredMessage && this.onDeliveredMessage({ id: Ge, type: "delivery", from: at, to: Ve, mid: rt, onlineState: be }), Xe = { id: Ge, type: "delivery", from: at, to: Ve, mid: rt, onlineState: be }, (T = this.eventHandler) === null || T === void 0 || T.dispatch("onDeliveredMessage", Xe), [2];
                case 6:
                  return et = "recall", _e = "", e.ext && (_e = ((v = ao(e.ext)) === null || v === void 0 ? void 0 : v.recallMessageExtensionInfo) || ""), he = { id: Ge, from: at || "admin", to: Ve, mid: rt, ext: _e, onlineState: be }, De = Ve === this.user ? at : Ve, [4, (H = (D = this._localCache) === null || D === void 0 ? void 0 : D.getInstance()) === null || H === void 0 ? void 0 : H.getMessageByServerMsgId(he.mid)];
                case 7:
                  return (oe = ot.sent()) ? [4, (w = (k = this._localCache) === null || k === void 0 ? void 0 : k.getInstance()) === null || w === void 0 ? void 0 : w.removeMsgByServerMsgId(he.mid)] : [3, 9];
                case 8:
                  ot.sent(), ot.label = 9;
                case 9:
                  return (oe == null ? void 0 : oe.chatType) !== "singleChat" && (oe == null ? void 0 : oe.chatType) !== "groupChat" ? [3, 14] : (zt = (oe == null ? void 0 : oe.from) === this.user || (oe == null ? void 0 : oe.from) === "", [4, (V = (F = this._localCache) === null || F === void 0 ? void 0 : F.getInstance()) === null || V === void 0 ? void 0 : V.getConversationLastMessage(De, oe.chatType)]);
                case 10:
                  return nt = ot.sent(), [4, (pe = (ue = this._localCache) === null || ue === void 0 ? void 0 : ue.getInstance()) === null || pe === void 0 ? void 0 : pe.getConversationBySessionId(Yr({ conversationId: De, conversationType: oe.chatType }))];
                case 11:
                  return (st = ot.sent()) ? [4, (ge = (le = this._localCache) === null || le === void 0 ? void 0 : le.getInstance()) === null || ge === void 0 ? void 0 : ge.updateLocalConversation(Yr({ conversationId: De, conversationType: oe.chatType }), { lastMessageId: nt == null ? void 0 : nt.serverMsgId, unReadCount: io({ conversation: st, isRecallSelfMsg: zt, recalledMsgTime: oe.time }) })] : [3, 13];
                case 12:
                  ot.sent(), ot.label = 13;
                case 13:
                  ot.label = 14;
                case 14:
                  return this.onRecallMessage && this.onRecallMessage(he), (ye = this.eventHandler) === null || ye === void 0 || ye.dispatch("onRecallMessage", he), [2];
                case 15:
                  return this.onChannelMessage && this.onChannelMessage({ id: Ge, type: "channel", chatType: "singleChat", from: at, to: Ve, time: Number(Y), onlineState: be }), Ir = { id: Ge, type: "channel", chatType: "singleChat", from: at, to: Ve, time: Number(Y), onlineState: be }, (Ne = this.eventHandler) === null || Ne === void 0 || Ne.dispatch("onChannelMessage", Ir), [2];
                case 16:
                  return Jt = { errorCode: 0, reason: "" }, [4, Ps.call(this, { status: Jt, thirdMessage: Me, msgBody: Me.contents[0], msgId: Ge, type: et, from: at, to: Ve, time: Y, onlineState: be, ignoreCallback: !0, format: !0, isContentReplaced: We })];
                case 17:
                  return ht = ot.sent(), Sr = !!e.to && e.to.domain.indexOf("conference") !== -1, ht.chatType = Sr ? "groupChat" : "singleChat", Ze = Me.editMessageId && new (M())(Me.editMessageId.low, Me.editMessageId.high, Me.editMessageId.unsigned).toString(), Le = {}, ht.type === "txt" ? (mt = ht.type, lt = ht.chatType, hr = ht.to, mr = ht.from, en = ht.time, tn = ht.modifiedInfo, Le = { id: Ze, type: mt, chatType: lt, to: hr, from: mr, time: en, modifiedInfo: tn, msg: ht.msg }, ht.translations && (Le.translations = ht.translations)) : ht.type === "custom" && ((Le = ht).id = Ze, delete Le.onlineState), Le ? [4, (Ae = (Ie = this._localCache) === null || Ie === void 0 ? void 0 : Ie.getInstance()) === null || Ae === void 0 ? void 0 : Ae.getMessageByServerMsgId(Ze)] : [3, 19];
                case 18:
                  ((vr = ot.sent()) == null ? void 0 : vr.type) === "txt" && Le.type === "txt" ? (Ye = (Te = this._localCache) === null || Te === void 0 ? void 0 : Te.getInstance()) === null || Ye === void 0 || Ye.putMessageToDB(kn(kn({}, vr), { msg: Le.msg, modifiedInfo: Le.modifiedInfo, translations: Le.translations })) : (vr == null ? void 0 : vr.type) === "custom" && Le.type === "custom" && ((X = (Ke = this._localCache) === null || Ke === void 0 ? void 0 : Ke.getInstance()) === null || X === void 0 || X.putMessageToDB(kn(kn({}, vr), { modifiedInfo: Le.modifiedInfo, customEvent: Le.customEvent, customExts: Le.customExts, ext: Le.ext }))), ot.label = 19;
                case 19:
                  return ht.type !== "txt" && ht.type !== "custom" || (Se = this.eventHandler) === null || Se === void 0 || Se.dispatch("onModifiedMessage", Le), [2];
                case 20:
                  return L.error("unexpected message type: ".concat(Me.type)), [2];
                case 21:
                  Vr = "normal", It = !1, et.toLowerCase() === "chat" || et === "singleChat" ? wt = "singleChat" : et.toLowerCase() === "groupchat" || et === "groupChat" ? wt = "groupChat" : (wt = "chatRoom", be = 1, e.ext && (er = ao(e.ext), It = !!(er != null && er.is_broadcast), Vr = er.chatroom_msg_tag === 0 ? "high" : er.chatroom_msg_tag === 2 ? "low" : "normal")), $t = 0, ot.label = 22;
                case 22:
                  return $t < Me.contents.length ? [4, Ps.call(this, { status: r, thirdMessage: Me, msgBody: Me.contents[$t], msgId: Ge, type: et, from: at, to: Ve, time: Y, onlineState: be, chatType: wt, ignoreCallback: o, priority: Vr, format: a, broadcast: It, isContentReplaced: We })] : [3, 25];
                case 23:
                  return [2, ot.sent()];
                case 24:
                  return $t++, [3, 22];
                case 25:
                  return [2];
              }
            });
          });
        }, Xp = ["public", "members_only", "allow_user_invites", "invite_need_confirm"], Yp = { name: "name", title: "name", description: "description", public: "public", members_only: "approval", allow_user_invites: "allowInvites", max_users: "maxUsers", invite_need_confirm: "inviteNeedConfirm", custom: "ext", last_modified: "lastModified" };
        function Qp(e, r) {
          var o, a, s, d, u, m, p = this, T = this.context, v = T.userId, D = T.jid, H = r.from.name === v && D.clientResource !== r.from.clientResource;
          return r.isThread ? (s = { id: r.mucId.name, name: r.mucName, operation: "", parentId: r.mucParentId.name, operator: r.from.name, userName: r.to.length ? r.to[0].name : "" }, d = { chatThreadId: r.mucId.name, chatThreadName: r.mucName, operation: "", parentId: r.mucParentId.name }) : (a = { type: "", owner: r.from.name, gid: r.mucId.name, from: r.from.name, fromJid: r.from, to: r.to.length ? r.to[0].name : "", toJid: r.to, chatroom: r.isChatroom, status: r.status }, u = { operation: "", id: r.mucId.name, from: r.from.name }, r.isChatroom && (!((o = r == null ? void 0 : r.eventInfo) === null || o === void 0) && o.ext) && (m = JSON.parse(r.eventInfo.ext))), ({ 45: function() {
            var k, w, F;
            u.operation = "memberAttributesUpdate";
            var V = JSON.parse((k = r == null ? void 0 : r.eventInfo) === null || k === void 0 ? void 0 : k.ext) || {};
            u.attributes = V.properties || {}, u.userId = V.username || "", H ? (w = p.eventHandler) === null || w === void 0 || w.dispatch("onMultiDeviceEvent", u) : (F = p.eventHandler) === null || F === void 0 || F.dispatch("onGroupEvent", u);
          }, 44: function() {
            var k;
            u.operation = "removeChatRoomAttributes", u.attributes = m.result.successKeys, m.result.successKeys.length > 0 && ((k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomEvent", u));
          }, 43: function() {
            var k;
            u.operation = "updateChatRoomAttributes";
            var w = {};
            m.result.successKeys.forEach(function(F) {
              w[F] = m.properties[F];
            }), u.attributes = w, m.result.successKeys.length > 0 && ((k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomEvent", u));
          }, 42: function() {
          }, 41: function() {
          }, 40: function() {
          }, 39: function() {
          }, 38: function() {
            var k;
            d.operation = "chatThreadNameUpdate", (k = p.eventHandler) === null || k === void 0 || k.dispatch("onMultiDeviceEvent", d);
          }, 37: function() {
            var k;
            s.operation = "userRemove", (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatThreadChange", s);
          }, 36: function() {
            var k;
            d.operation = "chatThreadLeave", (k = p.eventHandler) === null || k === void 0 || k.dispatch("onMultiDeviceEvent", d);
          }, 35: function() {
            var k;
            d.operation = "chatThreadJoin", (k = p.eventHandler) === null || k === void 0 || k.dispatch("onMultiDeviceEvent", d);
          }, 34: function() {
            var k;
            d.operation = "chatThreadDestroy", (k = p.eventHandler) === null || k === void 0 || k.dispatch("onMultiDeviceEvent", d);
          }, 33: function() {
            var k;
            d.operation = "chatThreadCreate", (k = p.eventHandler) === null || k === void 0 || k.dispatch("onMultiDeviceEvent", d);
          }, 32: function() {
            var k, w, F, V;
            a.type = r.isChatroom ? "rmChatRoomMute" : "rmGroupMute", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "unmuteAllMembers", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 31: function() {
            var k, w, F, V;
            a.type = r.isChatroom ? "muteChatRoom" : "muteGroup", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "muteAllMembers", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 30: function() {
            var k, w, F, V;
            a.type = r.isChatroom ? "rmUserFromChatRoomWhiteList" : "rmUserFromGroupWhiteList", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "removeAllowlistMember", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 29: function() {
            var k, w, F, V;
            a.type = r.isChatroom ? "addUserToChatRoomWhiteList" : "addUserToGroupWhiteList", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "addUserToAllowlist", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 28: function() {
            var k, w, F, V;
            a.type = "deleteFile", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "deleteFile", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 27: function() {
            var k, w, F, V;
            a.type = "uploadFile", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "uploadFile", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 26: function() {
            var k, w, F, V;
            a.type = "deleteAnnouncement", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "deleteAnnouncement", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 25: function() {
            var k, w, F, V;
            a.type = "updateAnnouncement", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "updateAnnouncement", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 24: function() {
            var k, w, F, V;
            a.type = "removeMute", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "unmuteMember", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 23: function() {
            var k, w, F, V;
            a.type = "addMute", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "muteMember", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 22: function() {
            var k, w, F, V;
            a.type = "removeAdmin", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "removeAdmin", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 21: function() {
            var k, w, F, V;
            a.type = "addAdmin", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "setAdmin", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 20: function() {
            var k, w, F, V;
            a.type = "changeOwner", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "changeOwner", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 19: function() {
            var k, w, F, V;
            a.type = "direct_joined", a.groupName = r.mucName, p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "directJoined", u.name = r.mucName, r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 18: function() {
            var k, w, F, V;
            a.type = r.isChatroom ? "leaveChatRoom" : "leaveGroup", p.onPresence && p.onPresence(a);
            var ue = r.mucMemberCount;
            ue && (u.memberCount = ue), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "memberAbsence", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 17: function() {
            var k, w, F, V;
            a.type = r.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", p.onPresence && p.onPresence(a);
            var ue = r.mucMemberCount;
            r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "memberPresence", ue && (u.memberCount = ue), r.isChatroom && r.ext && (u.ext = r.ext), r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 16: function() {
            var k, w;
            a.type = "unblock", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a);
          }, 15: function() {
            var k, w;
            a.type = "block", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a);
          }, 14: function() {
            var k, w, F, V, ue, pe = r.isChatroom;
            if (!pe) {
              var le = JSON.parse(((k = r == null ? void 0 : r.eventInfo) === null || k === void 0 ? void 0 : k.ext) || "{}", function(ge, ye) {
                return ge === "last_modified" ? Number(ye) : Xp.includes(ge) ? ye === "true" || ye === !0 : ye;
              });
              u.detail = a.detail = {}, Object.keys(le).forEach(function(ge) {
                var ye = Yp[ge];
                if (ye) {
                  var Ne = le[ge];
                  u.detail && (u.detail[ye] = Ne), a.detail && (a.detail[ye] = Ne);
                }
              });
            }
            a.type = "update", p.onPresence && p.onPresence(a), pe ? (w = p.eventHandler) === null || w === void 0 || w.dispatch("onChatroomChange", a) : (F = p.eventHandler) === null || F === void 0 || F.dispatch("onGroupChange", a), u.operation = "updateInfo", pe ? (V = p.eventHandler) === null || V === void 0 || V.dispatch("onChatroomEvent", u) : (ue = p.eventHandler) === null || ue === void 0 || ue.dispatch("onGroupEvent", u);
          }, 13: function() {
            var k, w, F, V;
            a.type = "allow", a.reason = r.reason, p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "unblockMember", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 12: function() {
            var k, w;
            a.type = "ban", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a);
          }, 11: function() {
            var k, w;
            a.type = "getBlackList", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a);
          }, 10: function() {
            var k, w, F, V;
            a.type = "removedFromGroup", a.kicked = a.to, p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "removeMember", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 9: function() {
            var k, w, F, V;
            a.type = "invite_decline", a.kicked = a.to, p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "rejectInvite", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 8: function() {
            var k, w, F, V;
            a.type = "invite_accept", a.kicked = a.to, p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "acceptInvite", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 7: function() {
            var k, w, F, V;
            a.type = "invite", a.kicked = a.to, a.groupName = r.mucName, p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "inviteToJoin", u.name = r.mucName, r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 6: function() {
            var k, w, F, V;
            a.type = "joinPublicGroupDeclined", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "joinPublicGroupDeclined", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (u.userId = r.to.length ? r.to[0].name : "", (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u));
          }, 5: function() {
            var k, w, F, V;
            a.type = "joinPublicGroupSuccess", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "acceptRequest", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 4: function() {
            var k, w, F, V;
            a.type = "joinGroupNotifications", a.reason = r.reason, p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "requestToJoin", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 3: function() {
            var k, w;
            a.type = "leave", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a);
          }, 2: function() {
            var k, w;
            a.type = "join", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a);
          }, 1: function() {
            var k, w, F, V;
            a.type = "deleteGroupChat", p.onPresence && p.onPresence(a), r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomChange", a) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupChange", a), u.operation = "destroy", r.isChatroom ? (F = p.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", u) : (V = p.eventHandler) === null || V === void 0 || V.dispatch("onGroupEvent", u);
          }, 0: function() {
            var k, w;
            u.operation = "create", r.isChatroom ? (k = p.eventHandler) === null || k === void 0 || k.dispatch("onChatroomEvent", u) : (w = p.eventHandler) === null || w === void 0 || w.dispatch("onGroupEvent", u);
          } }[e] || function() {
            console.error("No match operation ".concat(e));
          })();
        }
        var Ln, Zp = function(e) {
          var r = this.root.lookup("easemob.pb.MUCBody").decode(e.payload), o = r.operation;
          L.debug("onMucMessage", r), Qp.call(this, o, r);
        }, ed = { handleRosterMsg: function(e) {
          var r, o, a, s, d, u, m = this.root.lookup("easemob.pb.RosterBody").decode(e.payload), p = { type: "", to: m.to[0].name, from: m.from.name, status: m.reason };
          switch (m.operation) {
            case 2:
              p.type = "subscribe", this.onContactInvited && this.onContactInvited(p), (r = this.eventHandler) === null || r === void 0 || r.dispatch("onContactInvited", p);
              break;
            case 3:
              p.type = "unsubscribed", this.onContactDeleted && this.onContactDeleted(p), (o = this.eventHandler) === null || o === void 0 || o.dispatch("onContactDeleted", p);
              break;
            case 4:
              p.type = "subscribed", this.onContactAdded && this.onContactAdded(p), (a = this.eventHandler) === null || a === void 0 || a.dispatch("onContactAdded", p);
              break;
            case 5:
              p.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(p), (s = this.eventHandler) === null || s === void 0 || s.dispatch("onContactRefuse", p);
              break;
            case 6:
            case 7:
              break;
            case 8:
              p.type = "subscribed", this.onContactAgreed && this.onContactAgreed(p), (d = this.eventHandler) === null || d === void 0 || d.dispatch("onContactAgreed", p);
              break;
            case 9:
              p.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(p), (u = this.eventHandler) === null || u === void 0 || u.dispatch("onContactRefuse", p);
              break;
            default:
              L.error("handleRosterMsg:", m);
          }
          this.onPresence && p.type && this.onPresence(p);
        } }, td = function(e) {
          var r, o, a, s, d, u, m = this.root.lookup("easemob.pb.StatisticsBody").decode(e.payload), p = m.operation, T = m.reason;
          switch (p) {
            case 0:
              this.onStatisticMessage && this.onStatisticMessage(m), (r = this.eventHandler) === null || r === void 0 || r.dispatch("onStatisticMessage", m);
              break;
            case 1:
              u = g.create({ type: l.WEBIM_CONNCTION_USER_REMOVED, message: "user has been removed" }), this.disconnectedReason = u, this.logOut = !0, this.onError && this.onError(u), (o = this.eventHandler) === null || o === void 0 || o.dispatch("onError", u);
              break;
            case 2:
              u = g.create({ type: l.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE, message: "the user is already logged on another device" }), T && (u.data = { loginInfoCustomExt: m.reason }), this.disconnectedReason = u, this.logOut = !0, this.onError && this.onError(u), (a = this.eventHandler) === null || a === void 0 || a.dispatch("onError", u);
              break;
            case 3:
              u = g.create({ type: l.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD, message: "the user was kicked by changing password" }), this.disconnectedReason = u, this.logOut = !0, this.onError && this.onError(u), (s = this.eventHandler) === null || s === void 0 || s.dispatch("onError", u);
              break;
            case 4:
              u = g.create({ type: l.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE, message: "the user was kicked by other device" }), this.disconnectedReason = u, this.logOut = !0, this.onError && this.onError(u), (d = this.eventHandler) === null || d === void 0 || d.dispatch("onError", u);
              break;
            default:
              L.error("handleStatisticsMsg:", m);
          }
        };
        function rd(e) {
          var r, o = [], a = [], s = e.data;
          s && s.values && s.values.forEach(function(d) {
            Object.entries(d.status).forEach(function(u) {
              a.push({ device: u[0], status: Number(u[1]) });
            }), o.push({ userId: d.uid, lastTime: Number(d.last_time), expire: Number(d.expiry), ext: d.ext, statusDetails: a });
          }), this.onPresenceStatusChange && this.onPresenceStatusChange(o), (r = this.eventHandler) === null || r === void 0 || r.dispatch("onPresenceStatusChange", o);
        }
        function nd(e) {
          var r = this;
          e.data.forEach(function(o) {
            var a, s = { from: o.from, to: o.to, chatType: o.channel_type === "chat" ? "singleChat" : "groupChat", messageId: o.messageId, reactions: o.reactions, ts: o.ts };
            (a = r.eventHandler) === null || a === void 0 || a.dispatch("onReactionChange", s);
          });
        }
        function od(e) {
          var r, o, a, s;
          if (e.data) {
            var d = e.data, u = { id: d.id || "", name: d.name || "", parentId: d.muc_parent_id || "", messageId: d.msg_parent_id || "", timestamp: d.timestamp || 0, operator: d.from || "", operation: "" };
            switch (d.operation) {
              case "create":
                u.operation = "create", u.createTimestamp = u.timestamp, u.messageCount = 0, (r = this.eventHandler) === null || r === void 0 || r.dispatch("onChatThreadChange", u);
                break;
              case "update_msg":
                u.operation = "update", u.messageCount = d.message_count, d.last_message && JSON.stringify(d.last_message) !== "{}" ? u.lastMessage = dr.call(this, d.last_message) : JSON.stringify(d.last_message) === "{}" && (u.lastMessage = {}), (o = this.eventHandler) === null || o === void 0 || o.dispatch("onChatThreadChange", u);
                break;
              case "update":
                u.operation = "update", u.messageCount = d.message_count, (a = this.eventHandler) === null || a === void 0 || a.dispatch("onChatThreadChange", u);
                break;
              case "delete":
                u.operation = "destroy", (s = this.eventHandler) === null || s === void 0 || s.dispatch("onChatThreadChange", u);
            }
          }
        }
        function id(e) {
          var r, o = e.data;
          if (o.resource !== this.clientResource) {
            var a = { operation: "deleteRoaming", conversationId: o.to, chatType: o.chatType === "chat" ? "singleChat" : "groupChat", resource: o.resource };
            (r = this.eventHandler) === null || r === void 0 || r.dispatch("onMultiDeviceEvent", a);
          }
        }
        function ad(e) {
          var r, o, a = e.data, s = "";
          if (this.clientResource !== a.res) {
            switch (a.op) {
              case "del":
                s = "deleteConversation";
                break;
              case "top":
                s = "pinnedConversation";
                break;
              case "not_top":
                s = "unpinnedConversation";
                break;
              case "mark":
                s = "markConversation";
                break;
              case "mark_delete":
                s = "unMarkConversation";
                break;
              case "pin":
                s = "pin";
                break;
              case "pin_delete":
                s = "unpin";
                break;
              default:
                return void L.error("unexpected conversation op:", a.op);
            }
            if (s !== "pin" && s !== "unpin") {
              var d = { operation: s, conversationId: a.id, conversationType: a.type === "chat" ? "singleChat" : "groupChat", timestamp: a.ts };
              d.operation !== "markConversation" && d.operation !== "unMarkConversation" || a.ext && (d.conversationMark = Ln[a.ext]), (o = this.eventHandler) === null || o === void 0 || o.dispatch("onMultiDeviceEvent", d);
            } else {
              var u = a.ext, m = a.from, p = a.id, T = a.type, v = a.ts, D = { messageId: u || "", conversationId: p, conversationType: Bt[T], operation: s, operatorId: m, time: v };
              (r = this.eventHandler) === null || r === void 0 || r.dispatch("onMessagePinEvent", D);
            }
          }
        }
        (function(e) {
          e[e.mark_0 = 0] = "mark_0", e[e.mark_1 = 1] = "mark_1", e[e.mark_2 = 2] = "mark_2", e[e.mark_3 = 3] = "mark_3", e[e.mark_4 = 4] = "mark_4", e[e.mark_5 = 5] = "mark_5", e[e.mark_6 = 6] = "mark_6", e[e.mark_7 = 7] = "mark_7", e[e.mark_8 = 8] = "mark_8", e[e.mark_9 = 9] = "mark_9", e[e.mark_10 = 10] = "mark_10", e[e.mark_11 = 11] = "mark_11", e[e.mark_12 = 12] = "mark_12", e[e.mark_13 = 13] = "mark_13", e[e.mark_14 = 14] = "mark_14", e[e.mark_15 = 15] = "mark_15", e[e.mark_16 = 16] = "mark_16", e[e.mark_17 = 17] = "mark_17", e[e.mark_18 = 18] = "mark_18", e[e.mark_19 = 19] = "mark_19";
        })(Ln || (Ln = {}));
        var At, Zr, sd = function(e) {
          var r = ve.parseNotify(e.payload);
          switch (r.type) {
            case "presence":
              rd.call(this, r);
              break;
            case "reaction":
              nd.call(this, r);
              break;
            case "thread":
              od.call(this, r);
              break;
            case "roaming_delete":
              id.call(this, r);
              break;
            case "conv":
              ad.call(this, r);
              break;
            default:
              L.error("unexpected notify type: ".concat(r.type));
          }
        }, cd = 2, Dt = function() {
          return Dt = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, Dt.apply(this, arguments);
        }, bo = function(e, r, o, a) {
          return new (o || (o = Promise))(function(s, d) {
            function u(T) {
              try {
                p(a.next(T));
              } catch (v) {
                d(v);
              }
            }
            function m(T) {
              try {
                p(a.throw(T));
              } catch (v) {
                d(v);
              }
            }
            function p(T) {
              var v;
              T.done ? s(T.value) : (v = T.value, v instanceof o ? v : new o(function(D) {
                D(v);
              })).then(u, m);
            }
            p((a = a.apply(e, [])).next());
          });
        }, Mo = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        }, ud = function(e, r, o) {
          for (var a, s = 0, d = r.length; s < d; s++) !a && s in r || (a || (a = Array.prototype.slice.call(r, 0, s)), a[s] = r[s]);
          return e.concat(a || Array.prototype.slice.call(r));
        };
        (function(e) {
          e[e.NORMAL = 0] = "NORMAL", e[e.SINGLECHAT = 1] = "SINGLECHAT", e[e.GROUPCHAT = 2] = "GROUPCHAT", e[e.CHATROOM = 3] = "CHATROOM", e[e.READ_ACK = 4] = "READ_ACK", e[e.DELIVER_ACK = 5] = "DELIVER_ACK", e[e.RECALL = 6] = "RECALL", e[e.CHANNEL_ACK = 7] = "CHANNEL_ACK", e[e.EDIT = 8] = "EDIT";
        })(At || (At = {})), function(e) {
          e[e.OK = 0] = "OK", e[e.FAIL = 1] = "FAIL", e[e.UNAUTHORIZED = 2] = "UNAUTHORIZED", e[e.MISSING_PARAMETER = 3] = "MISSING_PARAMETER", e[e.WRONG_PARAMETER = 4] = "WRONG_PARAMETER", e[e.REDIRECT = 5] = "REDIRECT", e[e.TOKEN_EXPIRED = 6] = "TOKEN_EXPIRED", e[e.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", e[e.NO_ROUTE = 8] = "NO_ROUTE", e[e.UNKNOWN_COMMAND = 9] = "UNKNOWN_COMMAND", e[e.PB_PARSER_ERROR = 10] = "PB_PARSER_ERROR", e[e.BIND_ANOTHER_DEVICE = 11] = "BIND_ANOTHER_DEVICE", e[e.IM_FORBIDDEN = 12] = "IM_FORBIDDEN", e[e.TOO_MANY_DEVICES = 13] = "TOO_MANY_DEVICES", e[e.PLATFORM_LIMIT = 14] = "PLATFORM_LIMIT", e[e.USER_MUTED = 15] = "USER_MUTED", e[e.ENCRYPT_DISABLE = 16] = "ENCRYPT_DISABLE", e[e.ENCRYPT_ENABLE = 17] = "ENCRYPT_ENABLE", e[e.DECRYPT_FAILURE = 18] = "DECRYPT_FAILURE", e[e.PERMISSION_DENIED_EXTERNAL = 19] = "PERMISSION_DENIED_EXTERNAL";
        }(Zr || (Zr = {}));
        var ld = ["txt", "img", "video", "audio", "file", "loc", "custom", "cmd", "combine"], Ii = ve.getEnvInfo();
        function pd() {
          var e = "webim", r = "", o = "", a = [], s = (/* @__PURE__ */ new Date()).valueOf(), d = ve.getDevicePlatform(Ii);
          if (this.isFixedDeviceId) {
            var u = ve.getLocalDeviceInfo();
            if (u) {
              var m = JSON.parse(u);
              e = m.deviceId, r = m.deviceName, o = m.deviceUuid;
            } else this.deviceId === "webim" ? (o = "".concat(d, "_").concat(s.toString()), e = "".concat(this.deviceId, "_").concat(o), r = this.deviceId) : e = r = o = "webim_".concat(d, "_").concat(this.deviceId), ve.setLocalDeviceInfo(JSON.stringify({ deviceId: e, deviceName: r, deviceUuid: o }));
          } else this.deviceId === "webim" ? (o = "random_".concat(d, "_").concat(s.toString()), e = "".concat(this.deviceId, "_").concat(o), r = this.deviceId) : e = r = o = "webim_".concat(d, "_").concat(this.deviceId);
          this.context.jid && (this.context.jid.clientResource = e);
          var p = this.root.lookup("easemob.pb.Provision"), T = p.decode(a);
          T.compressType = this.compressType, T.encryptType = this.encryptType, T.osType = this.osType, T.version = this.version, T.deviceName = r, T.resource = e, T.deviceUuid = o, T.authToken = '{"token":"$t$' + this.token + '"}', T.sessionId = Date.now().toString() + ":", this.loginInfoCustomExt && (T.reason = this.loginInfoCustomExt), L.debug("provision info", { version: this.version, resource: e, isFixedDeviceId: this.isFixedDeviceId, loginInfoCustomExt: !!this.loginInfoCustomExt, token: !!this.token }), T.actionVersion = "v4.0", T = p.encode(T).finish();
          var v = this.root.lookup("easemob.pb.MSync"), D = v.decode(a);
          return D.version = this.version, D.guid = this.context.jid, D.auth = "$t$" + this.token, D.command = 3, D.deviceId = r, D.serviceId = this.dataReport.getServiceId(), D.encryptType = this.encryptType, D.payload = T, v.encode(D).finish();
        }
        function Si(e, r) {
          var o = this, a = ve.getEnvInfo();
          if (a.platform === "web" || a.platform === "zfb" || a.platform === "dd") {
            for (var s = "", d = 0; d < e.length; d++) s += String.fromCharCode(e[d]);
            return s = Ot().btoa(s), a.platform === "web" ? s : { data: s, isBuffer: !1, complete: function() {
            }, fail: function(m) {
              m.errMsg !== "sendSocketMessage:fail taskID not exist" && m.errMsg !== "SocketTast.send:fail SocketTask.readyState is not OPEN" || (L.debug("send message fail and reconnect"), o.reconnecting || o.reconnect()), r && o._msgHash && o._msgHash[r] && o._msgHash[r].fail({ id: r });
            } };
          }
          var u = e;
          return { data: u.buffer.slice(u.byteOffset, u.byteOffset + u.byteLength), fail: function(m) {
            m.errMsg !== "sendSocketMessage:fail taskID not exist" && m.errMsg !== "SocketTast.send:fail SocketTask.readyState is not OPEN" || o.reconnecting || o.reconnect(), r && o._msgHash && o._msgHash[r] && o._msgHash[r].fail({ id: r });
          } };
        }
        function ks(e, r) {
          var o;
          return bo(this, void 0, void 0, function() {
            var a, s, d, u, m, p;
            return Mo(this, function(T) {
              switch (T.label) {
                case 0:
                  for (L.debug("distributeMeta, metas length: ", e.length), a = [], s = function(v) {
                    var D = e[v], H = new (M())(D.id.low, D.id.high, D.id.unsigned).toString(), k = D.from.name, w = D.to ? D.to.name : "", F = !!D.to && D.to.domain.indexOf("conference") !== -1;
                    if (d._load_msg_cache.some(function(V) {
                      return V.msgId === H;
                    })) return "continue";
                    switch (d._load_msg_cache.length <= d.max_cache_length || d._load_msg_cache.shift(), d._load_msg_cache.push({ msgId: H, from: k, to: w, isGroup: F }), D.ns) {
                      case 0:
                        td.call(d, D);
                        break;
                      case 1:
                        a.push(Dn.call(d, D, r, !1, !0));
                        break;
                      case 2:
                        Zp.call(d, D);
                        break;
                      case 3:
                        ed.handleRosterMsg.call(d, D);
                        break;
                      case 4:
                        d.registerConfrIQHandler && d.registerConfrIQHandler(D, r, d);
                        break;
                      case 5:
                        sd.call(d, D);
                        break;
                      default:
                        L.error("distributeMeta", D);
                    }
                  }, d = this, u = 0; u < e.length; u++) s(u);
                  return [4, Promise.all(a)];
                case 1:
                  return m = T.sent(), (p = m.filter(function(v) {
                    return v && v.type !== "cmd";
                  })).length > 0 && ((o = this.eventHandler) === null || o === void 0 || o.dispatch("onMessage", p)), [2];
              }
            });
          });
        }
        function Ds(e, r) {
          ks.call(this, e, r);
        }
        function Ls(e) {
          var r = this.root.lookup("easemob.pb.CommUnreadDL");
          r = r.decode(e.payload);
          var o = new (M())(r.timestamp.low, r.timestamp.high, r.timestamp.unsigned).toString();
          if (this.expirationTime && this.compareTokenExpireTime(Number(o), this.expirationTime), r.unread.length === 0) Ni.call(this);
          else {
            L.debug("pull unread message", r.unread);
            for (var a = 0; a < r.unread.length; a++) {
              var s = so(this._queues, r.unread[a].queue), d = so(this.unSyncQueue, r.unread[a].queue);
              s || d || this.unSyncQueue.push(r.unread[a].queue);
            }
            for (a = 0; a < this.unSyncQueue.length; a++) this.unSyncQueue[a].hasSync || wo.call(this, this.unSyncQueue[a]), this.unSyncQueue[a].hasSync = !0;
          }
          Ni.call(this);
        }
        function xs() {
          var e = [], r = this.root.lookup("easemob.pb.StatisticsBody"), o = r.decode(e);
          o.operation = 0, o = r.encode(o).finish();
          var a = this.root.lookup("easemob.pb.Meta").decode(e);
          a.id = (/* @__PURE__ */ new Date()).valueOf(), a.ns = 0, a.payload = o;
          var s = this.root.lookup("easemob.pb.CommSyncUL"), d = s.decode(e);
          d.meta = a, d = s.encode(d).finish();
          var u = this.root.lookup("easemob.pb.MSync"), m = u.decode(e);
          return m.version = this.version, m.encryptType = [0], m.command = 0, m.payload = d, u.encode(m).finish();
        }
        function fd(e) {
          var r = [], o = this.root.lookup("easemob.pb.CommSyncUL"), a = o.decode(r);
          a.queue = e, a = o.encode(a).finish();
          var s = this.root.lookup("easemob.pb.MSync"), d = s.decode(r);
          return d.version = this.version, d.encryptType = this.encryptType, d.command = 0, d.payload = a, s.encode(d).finish();
        }
        function wo(e) {
          L.debug("sendBackqueue");
          var r = fd.call(this, e);
          Rr.call(this, r);
        }
        function Gs(e, r) {
          var o = [], a = this.root.lookup("easemob.pb.CommSyncUL"), s = a.decode(o);
          s.queue = r, s.key = new (M())(e.low, e.high, e.unsigned).toString(), s = a.encode(s).finish();
          var d = this.root.lookup("easemob.pb.MSync"), u = d.decode(o);
          return u.version = this.version, u.encryptType = this.encryptType, u.command = 0, u.payload = s, d.encode(u).finish();
        }
        function Ci() {
          var e;
          this.times = 1, this.autoReconnectNumTotal = 0, this.onOpened && this.onOpened(), (e = this.eventHandler) === null || e === void 0 || e.dispatch("onConnected"), md.call(this), vd.call(this), Bs.call(this), Ni.call(this);
        }
        function hd(e, r) {
          L.debug("sendLastSession", e);
          var o = Gs.call(this, e, r);
          Rr.call(this, o);
        }
        function js(e) {
          var r, o, a, s, d, u, m, p = this, T = this.root.lookup("easemob.pb.Provision").decode(e.payload);
          if (this.context.jid && (this.context.jid.clientResource = T.resource), this.clientResource = T.resource, T.status.errorCode === Zr.OK) {
            if (this.disconnectedReason = void 0, T.authToken) {
              var v = JSON.parse(T.authToken).expires_in;
              if (!this.tokenExpiredTimer && !this.tokenWillExpireTimer) {
                var D = Date.now();
                this.expirationTime = v;
                var H = this.expirationTime - D;
                this.expiresIn = H < 0 ? 0 : H, this.tokenExpireTimeCountDown(this.expiresIn);
              }
            }
            this.reconnecting = !1, this.logOut = !1, Ii.platform !== "zfb" && Ii.platform !== "dd" || (this.sock.readyState = 1), this._localCache ? !((r = this._localCache) === null || r === void 0) && r.getInstance() ? Ci.call(this) : this._localCache && new this._localCache({ user: this.user, dbName: "cache_".concat(Math.abs(Kp(this.appKey)), "_").concat(this.user), version: cd, onInit: function() {
              return bo(p, void 0, void 0, function() {
                return Mo(this, function(ue) {
                  return L.debug("localCache init success"), Ci.call(this), [2];
                });
              });
            } }) : Ci.call(this);
          } else {
            var k = void 0, w = T.status, F = w.reason, V = w.errorCode;
            switch (L.debug("provision errorCode: ", V), L.debug("provision reason: ", F), V) {
              case Zr.FAIL:
                k = F === "Sorry, user register limit" ? g.create({ type: l.MAX_LIMIT, message: "Sorry, the number of user registrations limit has been reached" }) : F === "Sorry, user register rate limit" ? g.create({ type: l.MAX_LIMIT, message: "Sorry, user register rate limit" }) : F === "Sorry, token expired" ? g.create({ type: l.WEBIM_TOKEN_EXPIRED, message: "Sorry, token expired" }) : F === "Sorry, token or password does not match login info" ? g.create({ type: l.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "INVALID_TOKEN" }) : F === "Sorry, user not found" ? g.create({ type: l.USER_NOT_FOUND, message: "User not found" }) : g.create({ type: l.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), (o = this.eventHandler) === null || o === void 0 || o.dispatch("onError", k);
                break;
              case Zr.WRONG_PARAMETER:
                k = g.create({ type: l.REQUEST_PARAMETER_ERROR, message: "Invalid parameter" }), (a = this.eventHandler) === null || a === void 0 || a.dispatch("onError", k);
                break;
              case Zr.UNAUTHORIZED:
                k = g.create({ type: l.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), (s = this.eventHandler) === null || s === void 0 || s.dispatch("onError", k);
                break;
              case Zr.IM_FORBIDDEN:
                k = g.create({ type: l.WEBIM_SERVER_SERVING_DISABLED, message: "Server serving disabled." }), (d = this.eventHandler) === null || d === void 0 || d.dispatch("onError", k);
                break;
              case Zr.PERMISSION_DENIED:
                k = F === "Sorry, the app month live count limit" ? g.create({ type: l.MAX_LIMIT, message: "Sorry, the monthly active user limit for this app has been reached" }) : F === "Sorry, the app day live count limit" ? g.create({ type: l.MAX_LIMIT, message: "Sorry, the daily active user limit for this app has been reached" }) : F === "Sorry, the app online count limit" ? g.create({ type: l.MAX_LIMIT, message: "Sorry, the maximum number limit of online users for this app has been reached" }) : g.create({ type: l.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), (u = this.eventHandler) === null || u === void 0 || u.dispatch("onError", k);
                break;
              default:
                k = g.create({ type: l.WEBIM_CONNCTION_AUTH_ERROR, message: F }), (m = this.eventHandler) === null || m === void 0 || m.dispatch("onError", k);
            }
            this.disconnectedReason = k;
          }
        }
        function md() {
          var e, r;
          if (((e = this.unMSyncSendMsgMap) === null || e === void 0 ? void 0 : e.size) > 0) {
            for (var o = Array.from(this.unMSyncSendMsgMap.keys()), a = 0; a < o.length; a++) {
              var s = this.unMSyncSendMsgMap.get(o[a]);
              Rr.call(this, s, o[a]);
            }
            (r = this.unMSyncSendMsgMap) === null || r === void 0 || r.clear();
          }
        }
        function Ni() {
          var e = xs.call(this);
          Rr.call(this, e);
        }
        function Bs() {
          L.debug("sendUnreadDeal");
          var e = gd.call(this);
          Rr.call(this, e);
        }
        function vd() {
          var e = this;
          Hs.call(this), this.heartBeatID = setInterval(function() {
            (Date.now() - e.lastHeartbeat) / 1e3 >= 30 && (L.debug("send heart beat"), Bs.call(e), e.lastHeartbeat = Date.now());
          }, this.heartBeatWait);
        }
        function Hs() {
          clearInterval(this.heartBeatID);
        }
        function gd() {
          var e = this.root.lookup("easemob.pb.MSync"), r = e.decode([]);
          return r.version = this.version, r.encryptType = this.encryptType, r.command = 1, e.encode(r).finish();
        }
        function so(e, r) {
          return e.some(function(o) {
            return o.name === r.name;
          });
        }
        function Fs(e) {
          var r = this.root.lookup("easemob.pb.CommNotice"), o = r.decode(e.payload), a = so(this._queues, o.queue);
          L.debug("receive notice", r, this._queues);
          var s = so(this.unSyncQueue, o.queue);
          a || s || this.clientResource === o.queue.clientResource && o.queue.name === this.context.userId || (this._queues.push(o.queue), this._queues.length === 1 && wo.call(this, o.queue));
        }
        function Ai(e) {
          if (typeof e == "string") {
            var r = JSON.parse(e);
            if (Array.isArray(r)) {
              var o = r[0], a = r[1];
              this.closeInfo = { code: o, reason: a };
            }
          }
        }
        function Ed(e) {
          return bo(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p;
            return Mo(this, function(T) {
              if (r = ve.getEnvInfo(), o = this.root.lookup("easemob.pb.MSync"), this.name === "miniCore") {
                try {
                  e.data instanceof ArrayBuffer || (L.debug("received message: ".concat(e.data)), Ai.call(this, e.data)), s = new Uint8Array(e.data), a = o.decode(s);
                } catch {
                  throw new Error("decode message fail.");
                }
                return [2, a];
              }
              if (r.platform === "web" || r.platform === "zfb" || r.platform === "dd") {
                for (e.data === '[401,"normal closed"]' && (L.debug("received message: ".concat(e.data)), Ai.call(this, e.data)), d = Ot().atob(e.data), u = [], m = 0, p = d.length; m < p; ++m) u.push(d.charCodeAt(m));
                return [2, o.decode(u)];
              }
              try {
                e.data instanceof ArrayBuffer || (L.debug("received message: ".concat(e.data)), Ai.call(this, e.data)), a = o.decode(e.data);
              } catch {
                throw new Error("decode message fail.");
              }
              return [2, a];
            });
          });
        }
        function yd(e) {
          var r = this;
          this.lastHeartbeat = Date.now(), e.then(function(o) {
            if (o) switch (o.command) {
              case 0:
                _d.call(r, o);
                break;
              case 1:
                Ls.call(r, o);
                break;
              case 2:
                Fs.call(r, o);
                break;
              case 3:
                js.call(r, o);
                break;
              default:
                L.error("unexpected msync command: ".concat(o.command));
            }
            else L.error("unexpected msync result: ".concat(o));
          });
        }
        function _d(e) {
          var r, o, a, s, d, u, m, p, T, v, D, H, k, w, F, V, ue, pe, le, ge, ye, Ne, Ie, Ae, Te, Ye, Ke, X, Se, Y, He, Me, be, We, Qe, Je, Fe, Ge, rt, et, at, Ve, bt, Xe, _e;
          return bo(this, void 0, void 0, function() {
            var he, De, oe, zt, nt, st, Ir, Jt, ht, Sr, Ze, Le, mt, lt, hr, mr, en, tn, vr, Vr, wt, It, er, $t, ot, tr, rr, nr, Xt, Ht, fn, ze, Ut, or, vt, Dr, St, Lt, Go, $i, jo, qi, Ji, zm = this;
            return Mo(this, function(xt) {
              switch (xt.label) {
                case 0:
                  if (he = (he = this.root.lookup("easemob.pb.CommSyncDL")).decode(e.payload), De = new (M())(he.serverId.low, he.serverId.high, he.serverId.unsigned).toString(), oe = new (M())(he.metaId.low, he.metaId.high, he.metaId.unsigned).toString(), !(Number(oe) > 0)) return [3, 23];
                  if (!he.status) return [3, 22];
                  if (he.status.errorCode !== 0) return [3, 21];
                  if ((zt = this._msgHash[oe]) != null && zt.isHandleChatroom) {
                    try {
                      nt = ((r = this._msgHash[oe]) === null || r === void 0 ? void 0 : r.operation) === "join", ((o = this._msgHash[oe]) === null || o === void 0 ? void 0 : o.resolve) instanceof Function && nt && this._msgHash[oe].resolve({ type: 0, data: { action: "apply", id: this._msgHash[oe].roomId, result: !0, user: this.context.userId } }), ((a = this._msgHash[oe]) === null || a === void 0 ? void 0 : a.success) instanceof Function && nt && this._msgHash[oe].success({ type: 0, data: { action: "apply", id: this._msgHash[oe].roomId, result: !0, user: this.context.userId } }), ((s = this._msgHash[oe]) === null || s === void 0 ? void 0 : s.resolve) instanceof Function && !nt && this._msgHash[oe].resolve({ type: 0, data: { result: !0 } }), ((d = this._msgHash[oe]) === null || d === void 0 ? void 0 : d.success) instanceof Function && !nt && this._msgHash[oe].success({ type: 0, data: { result: !0 } }), ne.has(oe) && (st = ne.get(oe), vt = st.rpt, Dr = st.requestName, vt({ isEndApi: !0, data: { isSuccess: 1, requestName: Dr, requestMethod: "WEBSOCKET", requestUrl: this.url, code: Z.success } }), ne.delete(oe));
                    } catch (Ft) {
                      ne.has(oe) && (Ir = ne.get(oe), vt = Ir.rpt, Dr = Ir.requestName, vt({ isEndApi: !0, data: { isSuccess: 0, requestName: Dr, requestMethod: "WEBSOCKET", requestUrl: this.url, code: Z.failed, codeDesc: "when executing success function error" } }), ne.delete(oe)), Lt = g.create({ type: l.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: Ft }), this.onError && this.onError(Lt), (u = this.eventHandler) === null || u === void 0 || u.dispatch("onError", Lt);
                    }
                    delete this._msgHash[oe];
                  }
                  return !zt || zt.isHandleChatroom ? [3, 20] : (Jt = null, ht = "", Sr = 0, Ze = null, this._msgHash[oe].thirdMessage ? (this._msgHash[oe].thirdMessage.id = he.serverId, this._msgHash[oe].thirdMessage.timestamp = he.timestamp, [4, Dn.call(this, this._msgHash[oe].thirdMessage, he.status, !0, !0)]) : [3, 2]);
                case 1:
                  Ze = xt.sent(), xt.label = 2;
                case 2:
                  if (he.metas.length === 0) return [3, 13];
                  xt.label = 3;
                case 3:
                  switch (xt.trys.push([3, 12, , 13]), Le = he.metas[0], mt = he.status, Le.ns) {
                    case 1:
                      return [3, 4];
                    case 5:
                      return [3, 9];
                  }
                  return [3, 10];
                case 4:
                  return this.useReplacedMessageContents ? [4, Dn.call(this, Le, mt, !0, !0)] : [3, 8];
                case 5:
                  return Ze = xt.sent(), [4, (p = (m = this._localCache) === null || m === void 0 ? void 0 : m.getInstance()) === null || p === void 0 ? void 0 : p.getMessageByServerMsgId(oe)];
                case 6:
                  return (lt = xt.sent()) ? [4, (v = (T = this._localCache) === null || T === void 0 ? void 0 : T.getInstance()) === null || v === void 0 ? void 0 : v.putMessageToDB(Dt(Dt(Dt({}, lt), Ze), { id: oe }))] : [3, 8];
                case 7:
                  xt.sent(), xt.label = 8;
                case 8:
                  return [3, 11];
                case 9:
                  return (hr = ve.parseNotify(he.metas[0].payload)).edit_msg && (mr = hr.edit_msg, en = mr.count, tn = mr.operator, vr = mr.edit_time, Vr = mr.sender, wt = mr.send_time, Jt = { operationTime: vr, operatorId: tn, operationCount: en }, ht = Vr, Sr = Number(wt)), [3, 11];
                case 10:
                  return L.error("decode local meta error", Le), [3, 11];
                case 11:
                  return [3, 13];
                case 12:
                  return It = xt.sent(), Lt = g.create({ type: l.WEBIM_LOAD_MSG_ERROR, message: "decode local meta message error", data: It }), this.onError && this.onError(Lt), (D = this.eventHandler) === null || D === void 0 || D.dispatch("onError", Lt), [3, 13];
                case 13:
                  ee.has(oe) && (ee.get(oe).rpt({ isEndApi: !0, data: { isSuccess: 1, requestMethod: "WEBSOCKET", requestUrl: this.url, code: Z.success, msgId: De } }), ee.delete(oe)), xt.label = 14;
                case 14:
                  return xt.trys.push([14, 18, , 19]), er = { localMsgId: oe, serverMsgId: De }, Jt && (this._msgHash[oe].modifiedInfo = Jt, $t = this._msgHash[oe], ot = $t.editMessageId, ze = $t.type, tr = $t.chatType, rr = $t.msg, nr = $t.to, Xt = $t.translations, Ht = { id: ot, type: ze, chatType: tr, msg: rr, modifiedInfo: Jt, to: nr, from: ht, time: Number(Sr) }, Xt && (Ht.translations = Xt), er.message = Ht, (w = (k = (H = this._localCache) === null || H === void 0 ? void 0 : H.getInstance()) === null || k === void 0 ? void 0 : k.getMessageByServerMsgId(ot)) === null || w === void 0 || w.then(function(Ft) {
                    var Cr, Xi;
                    Ft && Ft.type === "txt" && ((Xi = (Cr = zm._localCache) === null || Cr === void 0 ? void 0 : Cr.getInstance()) === null || Xi === void 0 || Xi.putMessageToDB(Dt(Dt({}, Ft), { msg: Ht.msg, modifiedInfo: Ht.modifiedInfo, translations: Ht.translations })));
                  })), Ze && (er.message = Ze), [4, (V = (F = this._localCache) === null || F === void 0 ? void 0 : F.getInstance()) === null || V === void 0 ? void 0 : V.updateLocalMessage(oe, { serverMsgId: De, status: qe.SUCCESS })];
                case 15:
                  return xt.sent(), ((ue = this._msgHash[oe]) === null || ue === void 0 ? void 0 : ue.success) instanceof Function ? [4, this._msgHash[oe].success(oe, De)] : [3, 17];
                case 16:
                  xt.sent(), xt.label = 17;
                case 17:
                  return ((pe = this._msgHash[oe]) === null || pe === void 0 ? void 0 : pe.resolve) instanceof Function && this._msgHash[oe].resolve(er), [3, 19];
                case 18:
                  return fn = xt.sent(), Lt = g.create({ type: l.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: fn }), this.onError && this.onError(Lt), (le = this.eventHandler) === null || le === void 0 || le.dispatch("onError", Lt), [3, 19];
                case 19:
                  this.onReceivedMessage && this.onReceivedMessage({ id: oe, mid: De, to: this._msgHash[oe].to, time: 0 }), (ge = this.eventHandler) === null || ge === void 0 || ge.dispatch("onReceivedMessage", { id: oe, mid: De, to: this._msgHash[oe].to }), delete this._msgHash[oe], xt.label = 20;
                case 20:
                  return [3, 22];
                case 21:
                  if (he.status.errorCode === 15) ((ye = this._msgHash[oe]) === null || ye === void 0 ? void 0 : ye.fail) instanceof Function && this._msgHash[oe].fail({ type: l.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject({ type: l.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), (Ie = (Ne = this._localCache) === null || Ne === void 0 ? void 0 : Ne.getInstance()) === null || Ie === void 0 || Ie.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL });
                  else if (he.status.errorCode === 1) {
                    switch (ze = void 0, he.status.reason) {
                      case "blocked":
                        ze = l.PERMISSION_DENIED;
                        break;
                      case "group not found":
                        ze = l.GROUP_NOT_EXIST;
                        break;
                      case "not in group or chatroom":
                        ze = l.GROUP_NOT_JOINED;
                        break;
                      case "exceed recall time limit":
                        ze = l.MESSAGE_RECALL_TIME_LIMIT;
                        break;
                      case "message recall disabled":
                        ze = l.SERVICE_NOT_ENABLED;
                        break;
                      case "not in group or chatroom white list":
                        ze = l.SERVICE_NOT_ALLOW_MESSAGING;
                        break;
                      case "nonroster":
                        ze = l.USER_NOT_FRIEND, he.status.reason = "not contact";
                        break;
                      case "group is disabled":
                        ze = l.GROUP_IS_DISABLED, he.status.reason = "group is disabled";
                        break;
                      case "limit directed users":
                        ze = l.MAX_LIMIT;
                        break;
                      case "Sorry, edit limit reached":
                        ze = l.MAX_LIMIT, he.status.reason = "Modify message limit reached";
                        break;
                      case "Sorry, message does not exist":
                        ze = l.MODIFY_MESSAGE_NOT_EXIST, he.status.reason = "The message does not exist.";
                        break;
                      case "Sorry, You do not have permission":
                        ze = l.PERMISSION_DENIED, he.status.reason = "You do not have the modified permission.";
                        break;
                      case "Sorry, format is incorrect":
                        ze = l.MODIFY_MESSAGE_FORMAT_ERROR, he.status.reason = "The modify messaged format error.";
                        break;
                      case "Sorry, edit is not available":
                        ze = l.SERVICE_NOT_ENABLED, he.status.reason = "The message modify function is not activated.";
                        break;
                      case "Sorry, edit fail":
                        ze = l.MODIFY_MESSAGE_FAILED, he.status.reason = "Modify message failed.";
                        break;
                      default:
                        he.status.reason.includes("grpID") && he.status.reason.includes("does not exist!") ? (ze = l.CHATROOM_NOT_EXIST, he.status.reason = "The chat room dose not exist.") : he.status.reason.includes("username") && he.status.reason.includes("doesn't exist!") ? ze = l.USER_NOT_FOUND : he.status.reason === "group member list is full!" ? ze = l.CHATROOM_MEMBERS_FULL : he.status.reason.includes("can not join this group") && he.status.reason.includes("is in the blacklist") ? (ze = l.PERMISSION_DENIED, he.status.reason = "permission denied") : he.status.reason === "can not operate this group, reason: group is disabled" ? ze = l.GROUP_IS_DISABLED : he.status.reason.includes("moderation") ? ze = l.MESSAGE_MODERATION_BLOCKED : he.status.reason.includes("group ID illegal, please check it") ? (ze = l.REQUEST_PARAMETER_ERROR, he.status.reason = "Invalid parameter") : ze = he.status.reason.includes("has create too many chatrooms") || he.status.reason.includes("has joined too many chatrooms") ? l.MAX_LIMIT : he.status.reason.includes("auto create failed") ? l.SERVER_BUSY : l.SERVER_UNKNOWN_ERROR;
                    }
                    this._msgHash[oe] && (!((Ae = this._msgHash[oe]) === null || Ae === void 0) && Ae.isHandleChatroom ? (St = g.create({ type: ze, message: he.status.reason || "", data: "" }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), this._msgHash[oe].error instanceof Function && this._msgHash[oe].error(St), ne.has(oe) && (Ut = Z.failed, ze === l.CHATROOM_NOT_EXIST ? Ut = Z.notFound : ze === l.CHATROOM_MEMBERS_FULL && (Ut = Z.reachLimit), or = ne.get(oe), vt = or.rpt, Dr = or.requestName, vt({ isEndApi: !0, data: { isSuccess: 0, requestName: Dr, requestMethod: "WEBSOCKET", requestUrl: this.url, code: Ut, codeDesc: he.status.reason } }), ne.delete(oe))) : (St = g.create({ type: ze, message: he.status.reason || "", data: { id: oe, mid: De } }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), this._msgHash[oe].fail instanceof Function && this._msgHash[oe].fail({ type: ze, reason: he.status.reason ? he.status.reason : "", data: { id: oe, mid: De } }), (Ye = (Te = this._localCache) === null || Te === void 0 ? void 0 : Te.getInstance()) === null || Ye === void 0 || Ye.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL })), delete this._msgHash[oe]);
                  } else if (he.status.errorCode === 7) he.status.reason === "sensitive words" && this._msgHash[oe] ? (St = g.create({ type: l.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "sensitive words", data: { id: oe, mid: De } }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), this._msgHash[oe].fail instanceof Function && this._msgHash[oe].fail({ type: l.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: oe, mid: De, reason: "sensitive words" } }), (X = (Ke = this._localCache) === null || Ke === void 0 ? void 0 : Ke.getInstance()) === null || X === void 0 || X.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL })) : he.status.reason === "blocked by mod_antispam" && this._msgHash[oe] ? (St = g.create({ type: l.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "blocked by mod_antispam", data: { id: oe, mid: De } }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), this._msgHash[oe].fail instanceof Function && this._msgHash[oe].fail({ type: l.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: oe, mid: De, reason: "blocked by mod_antispam" } }), (Y = (Se = this._localCache) === null || Se === void 0 ? void 0 : Se.getInstance()) === null || Y === void 0 || Y.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL })) : he.status.reason === "user is mute" && this._msgHash[oe] ? (St = g.create({ type: l.USER_MUTED_BY_ADMIN, message: "user is mute", data: { id: oe, mid: De } }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), this._msgHash[oe].fail instanceof Function && this._msgHash[oe].fail(St), (Me = (He = this._localCache) === null || He === void 0 ? void 0 : He.getInstance()) === null || Me === void 0 || Me.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL })) : he.status.reason === "traffic limit" && this._msgHash[oe] ? (St = g.create({ type: l.MESSAGE_CURRENT_LIMITING, message: "traffic limit", data: { id: oe, mid: De } }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), this._msgHash[oe].fail instanceof Function && this._msgHash[oe].fail(St), (We = (be = this._localCache) === null || be === void 0 ? void 0 : be.getInstance()) === null || We === void 0 || We.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL })) : he.status.reason === "Sorry, data is too large" && this._msgHash[oe] && (St = g.create({ type: l.MESSAGE_SIZE_LIMIT, message: "Sorry, data is too large", data: { id: oe, mid: De } }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), this._msgHash[oe].fail instanceof Function && this._msgHash[oe].fail(St), (Je = (Qe = this._localCache) === null || Qe === void 0 ? void 0 : Qe.getInstance()) === null || Je === void 0 || Je.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL }));
                  else if (he.status.errorCode === 19) this._msgHash[oe] && (ee.has(oe) && (ee.get(oe).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: l.MESSAGE_EXTERNAL_LOGIC_BLOCKED, codeDesc: he.status.reason || "", msgId: De } }), ee.delete(oe)), St = g.create({ type: l.MESSAGE_EXTERNAL_LOGIC_BLOCKED, message: he.status.reason || "", data: { id: oe, mid: De } }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), this._msgHash[oe].fail instanceof Function && this._msgHash[oe].fail({ type: l.MESSAGE_EXTERNAL_LOGIC_BLOCKED, data: { id: oe, mid: De, reason: he.status.reason } }), (Ge = (Fe = this._localCache) === null || Fe === void 0 ? void 0 : Fe.getInstance()) === null || Ge === void 0 || Ge.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL }));
                  else if (this._msgHash[oe]) {
                    ee.has(oe) && (ee.get(oe).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: l.WEBIM_LOAD_MSG_ERROR, codeDesc: ((rt = he.status) === null || rt === void 0 ? void 0 : rt.reason) || "", msgId: De } }), ee.delete(oe));
                    try {
                      St = g.create({ type: l.WEBIM_LOAD_MSG_ERROR, message: ((et = he.status) === null || et === void 0 ? void 0 : et.reason) || "", data: { id: oe, mid: De, reason: he.status && he.status.reason } }), this._msgHash[oe].reject instanceof Function && this._msgHash[oe].reject(St), (Ve = (at = this._localCache) === null || at === void 0 ? void 0 : at.getInstance()) === null || Ve === void 0 || Ve.updateLocalMessage(oe, { serverMsgId: De, status: qe.FAIL }), this._msgHash[oe].fail instanceof Function && this._msgHash[oe].fail({ type: l.WEBIM_LOAD_MSG_ERROR, data: { errorCode: he.status && he.status.errorCode, reason: he.status && he.status.reason } });
                    } catch (Ft) {
                      Lt = g.create({ type: l.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing fail function error", data: Ft }), this.onError && this.onError(Lt), (bt = this.eventHandler) === null || bt === void 0 || bt.dispatch("onError", Lt);
                    }
                    delete this._msgHash[oe];
                  } else ee.has(oe) && (ee.get(oe).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: l.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, codeDesc: "on message error", msgId: De } }), ee.delete(oe)), Lt = g.create({ type: l.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "on message error" }), this.onError && this.onError(Lt), (Xe = this.eventHandler) === null || Xe === void 0 || Xe.dispatch("onError", Lt);
                  xt.label = 22;
                case 22:
                  return [2];
                case 23:
                  if (he.metas && he.metas.length !== 0) try {
                    Ds.call(this, he.metas, he.status);
                  } catch (Ft) {
                    Lt = g.create({ type: l.WEBIM_LOAD_MSG_ERROR, message: "decode message error", data: Ft }), this.onError && this.onError(Lt), (_e = this.eventHandler) === null || _e === void 0 || _e.dispatch("onError", Lt);
                  } finally {
                    he.isLast ? (L.debug("metas & CommSyncDLMessage.isLast", he.isLast), Go = -1, this._queues.some(function(Ft, Cr) {
                      return Ft.name === he.name && (Go = Cr, !0);
                    }) && Go > 0 && this._queues.splice(Go, 1), this._queues.length > 0 && wo.call(this, this._queues[0]), $i = -1, this.unSyncQueue.some(function(Ft, Cr) {
                      return Ft.name === he.queue.name && ($i = Cr, !0);
                    }) && this.unSyncQueue.splice($i, 1)) : he.nextKey && (jo = new (M())(he.nextKey.low, he.nextKey.high, he.nextKey.unsigned).toString(), L.debug("nexKey:", jo, "this.nextKey:", this.nexKey), jo !== this.nexKey && (this.nexKey = jo, hd.call(this, he.nextKey, he.queue)));
                  }
                  else he.isLast && (L.debug("CommSyncDLMessage.isLast", he.isLast), qi = -1, this._queues.some(function(Ft, Cr) {
                    return Ft.name === he.queue.name && (qi = Cr, !0);
                  }) && this._queues.splice(qi, 1), this._queues.length > 0 && wo.call(this, this._queues[0]), Ji = -1, this.unSyncQueue.some(function(Ft, Cr) {
                    return Ft.name === he.queue.name && (Ji = Cr, !0);
                  }) && this.unSyncQueue.splice(Ji, 1));
                  return [2];
              }
            });
          });
        }
        function Uo(e) {
          var r = [], o = this.root.lookup("easemob.pb.KeyValue"), a = [];
          for (var s in e) {
            var d = o.decode(r);
            d.key = s, e[s] !== void 0 && (typeof e[s] == "object" ? (d.type = 8, d.stringValue = JSON.stringify(e[s])) : typeof e[s] == "string" ? (d.type = 7, d.stringValue = e[s]) : typeof e[s] == "boolean" ? (d.type = 1, d.varintValue = e[s] === !0 ? 1 : 0) : Number.isInteger(e[s]) ? (d.type = 2, d.varintValue = e[s]) : (d.type = 6, d.doubleValue = e[s]), a.push(d));
          }
          return a;
        }
        function pn(e) {
          var r, o, a, s = [];
          if (this.root) {
            var d, u = this.root.lookup("easemob.pb.MessageBody.Content").decode(s);
            switch (d = !e.group && ((r = e == null ? void 0 : e.chatType) === null || r === void 0 ? void 0 : r.toLowerCase()) !== "groupchat" || e.roomType ? e.group && e.roomType || ((o = e == null ? void 0 : e.chatType) === null || o === void 0 ? void 0 : o.toLowerCase()) === "chatroom" ? "chatRoom" : "singleChat" : "groupChat", e.type) {
              case "txt":
                u.type = 0, u.text = e.msg;
                break;
              case "img":
                u.type = 1, e.body ? (u.displayName = e.body.filename, u.remotePath = e.body.url, u.secretKey = e.body.secret, u.fileLength = e.body.file_length, u.size = e.body.size, u.thumbnailDisplayName = e.body.filename) : e.file ? (u.displayName = e.file.filename, u.remotePath = e.file.url, u.secretKey = e.file.secret, u.fileLength = e.file.file_length, u.size = e.file.size, u.thumbnailDisplayName = e.file.filename) : (u.displayName = e.filename, u.remotePath = e.url, u.secretKey = e.secret, u.fileLength = e.file_length, u.size = e.size, u.thumbnailDisplayName = e.filename), e.isBuildCombinedMsg && (u.remotePath = e.url, u.secretKey = e.secret, u.size = { height: e.height, width: e.width });
                break;
              case "video":
                u.type = 2, e.body ? (u.displayName = e.body.filename, u.remotePath = e.body.url, u.secretKey = e.body.secret, u.fileLength = e.body.file_length, u.duration = e.body.length, u.thumbnailDisplayName = e.body.filename, u.thumbnailRemotePath = this.useOwnUploadFun ? "" : "".concat(e.body.url, "?vframe=true"), u.thumbnailSecretKey = this.useOwnUploadFun ? "" : e.body.secret) : e.isBuildCombinedMsg && (u.displayName = e.filename, u.remotePath = e.url, u.secretKey = e.secret, u.fileLength = e.file_length, u.duration = e.length, u.thumbnailDisplayName = e.filename, u.thumbnailRemotePath = e.thumb, u.thumbnailSecretKey = e.thumb_secret);
                break;
              case "loc":
                u.type = 3, u.latitude = e.lat, u.longitude = e.lng, u.address = e.addr, u.buildingName = e.buildingName, u.latitude = e.lat;
                break;
              case "audio":
                u.type = 4, e.body ? (u.displayName = e.body.filename, u.remotePath = e.body.url, u.secretKey = e.body.secret, u.fileLength = e.body.file_length, u.duration = e.body.length, u.thumbnailDisplayName = e.body.filename) : e.isBuildCombinedMsg && (u.displayName = e.filename, u.remotePath = e.url, u.secretKey = e.secret, u.fileLength = e.file_length, u.duration = e.length, u.thumbnailDisplayName = e.filename);
                break;
              case "file":
                u.type = 5, e.body ? (u.displayName = e.body.filename, u.remotePath = e.body.url, u.secretKey = e.body.secret, u.fileLength = e.body.file_length, u.thumbnailDisplayName = e.body.filename) : e.isBuildCombinedMsg && (u.displayName = e.filename, u.remotePath = e.url, u.secretKey = e.secret, u.fileLength = e.file_length, u.thumbnailDisplayName = e.filename);
                break;
              case "cmd":
                u.type = 6, u.action = e.action;
                break;
              case "custom":
                u.type = 7, u.customEvent = e.customEvent, u.customExts = Uo.call(this, e.customExts);
                break;
              case "combine":
                u.type = 0, u.subType = 0, u.text = e.compatibleText, u.displayName = e.filename, u.remotePath = e.url, u.secretKey = e.secret, u.fileLength = e.file_length, u.title = e.title, u.summary = e.summary, u.combineLevel = e.combineLevel;
            }
            var m = [];
            e.ext && (m = Uo.call(this, e.ext));
            var p = this.root.lookup("easemob.pb.MessageBody"), T = p.decode(s), v = e.from || this.context.jid.name;
            T.from = { name: e.isBuildCombinedMsg ? v : this.context.jid.name };
            var D = e.to.indexOf("/"), H = D > -1 ? e.to.substring(0, D) : e.to;
            if (T.to = { name: H }, e.type === "channel") T.type = At.CHANNEL_ACK;
            else if (e.type === "recall") T.type = At.RECALL, T.ackMessageId = e.ackId;
            else if (e.type === "delivery") T.type = At.DELIVER_ACK, T.ackMessageId = e.ackId;
            else if (e.type === "read") T.type = At.READ_ACK, T.ackMessageId = e.ackId, d === "groupChat" && (T.msgConfig = { allowGroupAck: !0 }, T.ackContent = e.ackContent);
            else if (d === "chatRoom") T.type = At.CHATROOM;
            else if (d === "groupChat") {
              if (T.type = At.GROUPCHAT, e.msgConfig) {
                var k = e.msgConfig.allowGroupAck;
                T.msgConfig = { allowGroupAck: !!k };
              }
            } else d === "singleChat" && (T.type = At.SINGLECHAT);
            e.editMessageId && (T.type = At.EDIT, T.editMessageId = e.editMessageId), T.contents = [u], T.ext = m;
            var w = function(Ne) {
              var Ie = {};
              return "translations" in Ne && (Ie.translations = Ne.translations), "isChatThread" in Ne && Ne.isChatThread && (Ie.thread = {}), Object.keys(Ie).length > 0 ? JSON.stringify(Ie) : "";
            }(e);
            w && (T.meta = w), T = p.encode(T).finish();
            var F = this.root.lookup("easemob.pb.Meta"), V = F.decode(s);
            V.id = e.id;
            var ue = "easemob.com";
            if (d !== "chatRoom" && d !== "groupChat" || (ue = "conference.easemob.com"), V.to = { appKey: this.appKey, name: H, domain: ue }, D > -1 && (V.to.clientResource = e.to.substring(D + 1, e.to.length)), d === "chatRoom" && (V.ext = Uo.call(this, function(Ne) {
              return { chatroom_msg_tag: Ne.priority === "high" ? 0 : Ne.priority === "low" ? 2 : 1 };
            }(e))), e.type === "recall" && e.metaExt && (V.ext = Uo.call(this, { recallMessageExtensionInfo: e.metaExt })), V.ns = 1, V.payload = T, V.routetype = e.deliverOnlineOnly ? 1 : 0, d !== "singleChat" && Array.isArray(e.receiverList) && ((a = e.receiverList) === null || a === void 0 ? void 0 : a.length) > 0 && (V.directedUsers = e.receiverList, V.routetype = 2), e.isBuildCombinedMsg) return V.timestamp = M().fromValue(e.time), F.encode(V).finish();
            var pe = this.root.lookup("easemob.pb.CommSyncUL"), le = pe.decode(s);
            le.meta = V, Td.call(this, e, V), le = pe.encode(le).finish();
            var ge = this.root.lookup("easemob.pb.MSync"), ye = ge.decode(s);
            return ye.version = this.version, ye.encryptType = this.encryptType, ye.command = 0, ye.payload = le, ge.encode(ye).finish();
          }
          e.fail && e.fail({ type: l.WEBIM_CONNCTION_CLIENT_OFFLINE, message: "Not logged in" });
        }
        function Ws(e) {
          var r, o, a = this, s = Dt({}, e);
          if (e.file) return s.accessToken = this.token, s.appKey = this.appKey, s.apiUrl = this.apiUrl, s.body && s.body.url ? pn.call(this, s) : new Promise(function(p, T) {
            var v = s.onFileUploadComplete;
            s.onFileUploadComplete = function(D) {
              var H, k, w, F, V, ue;
              if (D.entities[0]["file-metadata"]) {
                var pe = D.entities[0]["file-metadata"]["content-length"];
                s.file_length = pe, s.filetype = D.entities[0]["file-metadata"]["content-type"], pe > 204800 && (s.thumbnail = !0);
              }
              var le = "".concat(a.apiUrl, "/").concat(a.orgName, "/").concat(a.appName, "/chatfiles/").concat(D.entities[0].uuid);
              s.body = { type: s.type || "file", secret: D.entities[0]["share-secret"], filename: s.file.filename || s.filename, url: le, length: s.length || 0, filetype: s.filetype || s.file.filetype, file_length: ((k = (H = s.file) === null || H === void 0 ? void 0 : H.data) === null || k === void 0 ? void 0 : k.size) || 0, size: { width: s.width || 0, height: s.height || 0 } }, s.file.url = D.uri, e.secret = D.entities[0]["share-secret"], D.url = e.url = "".concat(le, "?em-redirect=true&share-secret=").concat(D.entities[0]["share-secret"]), e.file_length = s.file_length = ((F = (w = s.file) === null || w === void 0 ? void 0 : w.data) === null || F === void 0 ? void 0 : F.size) || 0, s.type === "img" && (e.thumb = "".concat(e.url, "&thumbnail=true"), D.thumb = "".concat(D.url, "&thumbnail=true")), s.type === "video" && (e.thumb = "".concat(e.url, "&vframe=true"), e.thumb_secret = D.entities[0]["share-secret"], D.thumb = "".concat(D.url, "&vframe=true")), v instanceof Function && v(D, s.id);
              var ge = pn.call(a, s);
              ee.size <= z && ee.set(s.id, { rpt: a.dataReport.geOperateFun({ operationName: h.SEND_MSG }) }), (ue = (V = a._localCache) === null || V === void 0 ? void 0 : V.getInstance()) === null || ue === void 0 || ue.storeMessage(e, qe.INPROGRESS), Rr.call(a, ge);
            }, ve.uploadFile.call(a, s, h.UPLOAD_MSG_ATTACH);
          });
          if (e.type === "combine") {
            s.accessToken = this.token, s.appKey = this.appKey, s.apiUrl = this.apiUrl;
            var d = s.onFileUploadComplete, u = s.onFileUploadError;
            return new Promise(function(p, T) {
              var v, D, H, k;
              if (((v = e.messageList) === null || v === void 0 ? void 0 : v.length) > 300 || ((D = e.messageList) === null || D === void 0 ? void 0 : D.length) === 0) return a._msgHash[s.id].reject({ type: l.MAX_LIMIT, message: "The number of combined messages exceeded the limit." });
              var w = ud([], e.messageList), F = 0;
              if (w.forEach(function(Ie) {
                (Ie == null ? void 0 : Ie.combineLevel) > F && (F = Ie == null ? void 0 : Ie.combineLevel);
              }), s.combineLevel = F + 1, s.combineLevel > 10) return a._msgHash[s.id].reject({ type: l.MAX_LIMIT, message: "The level of the merged message exceeded the limit." });
              var V = Od.call(a, w), ue = function(Ie, Ae) {
                var Te, Ye, Ke, X, Se, Y, He = "".concat(a.apiUrl, "/").concat(a.orgName, "/").concat(a.appName, "/chatfiles/").concat(Ie.entities[0].uuid), Me = (Te = Ie.entities[0]) === null || Te === void 0 ? void 0 : Te["share-secret"], be = He + "?em-redirect=true";
                Me && (be = "".concat(be, "&share-secret=").concat(Me)), d instanceof Function && d({ url: be, secret: Me }), e.url = be, e.secret = Me, s.url = be, s.secret = Ie.entities[0]["share-secret"], s.filename = ((Ye = s.file) === null || Ye === void 0 ? void 0 : Ye.filename) || (Ae == null ? void 0 : Ae.fileName), s.file_length = ((X = (Ke = s.file) === null || Ke === void 0 ? void 0 : Ke.data) === null || X === void 0 ? void 0 : X.size) || (Ae == null ? void 0 : Ae.fileLength) || 0, (Y = (Se = a._localCache) === null || Se === void 0 ? void 0 : Se.getInstance()) === null || Y === void 0 || Y.storeMessage(e, qe.INPROGRESS);
                var We = pn.call(a, s);
                Rr.call(a, We);
              }, pe = ve.getEnvInfo();
              if (pe.platform !== "web" && pe.platform !== "node" && pe.platform !== "quick_app" && (!((k = (H = pe.global) === null || H === void 0 ? void 0 : H.canIUse) === null || k === void 0) && k.call(H, "getFileSystemManager"))) {
                var le = pe.global.getFileSystemManager(), ge = "".concat(a.apiUrl, "/").concat(a.orgName, "/").concat(a.appName, "/chatfiles");
                le.writeFile({ filePath: "".concat(pe.global.env.USER_DATA_PATH, "/combine"), data: V.buffer, encoding: "binary", success: function(Ie) {
                  pe.global.uploadFile({ url: ge, filePath: "".concat(pe.global.env.USER_DATA_PATH, "/combine"), name: "file", header: { "Content-Type": "multipart/form-data", Authorization: "Bearer " + s.accessToken }, success: function(Ae) {
                    if (Ae.statusCode === 200) {
                      L.debug("upload success", Ae);
                      var Te = JSON.parse(Ae.data);
                      ue(Te, { fileName: "combine", fileLength: V.length });
                    } else L.debug("upload fail"), s.onFileUploadError instanceof Function && s.onFileUploadError(Ae), this._msgHash[s.id].reject({ type: l.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: Ae });
                  }, fail: function(Ae) {
                    L.debug("upload fail"), s.onFileUploadError instanceof Function && s.onFileUploadError(Ie), this._msgHash[s.id].reject({ type: l.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: Ae });
                  } });
                }, fail: function(Ie) {
                  L.debug("write file fail", Ie), this._msgHash[s.id].reject({ type: l.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: Ie });
                } });
              } else {
                var ye = new File([V], "combine", { type: "application/octet-stream" }), Ne = { url: URL.createObjectURL(ye), filename: s.id, data: ye };
                s.file = Ne, s.onFileUploadComplete = function(Ie) {
                  ue(Ie);
                }, s.onFileUploadError = function(Ie) {
                  u instanceof Function && u(Ie), a._msgHash[s.id].reject({ type: l.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: Ie });
                }, ve.uploadFile.call(a, s, h.UPLOAD_MSG_ATTACH);
              }
            });
          }
          e.type === "img" && (s.body || (s.body = Dt(Dt({}, s), { size: { width: s.width || 0, height: s.height || 0 } }))), (o = (r = this._localCache) === null || r === void 0 ? void 0 : r.getInstance()) === null || o === void 0 || o.storeMessage(e, qe.INPROGRESS);
          var m = pn.call(this, s);
          Rr.call(this, m);
        }
        function Td(e, r) {
          e.editMessageId || ld.includes(e.type) && (this._msgHash[e.id].thirdMessage = r);
        }
        function Od(e) {
          for (var r = Uint8Array.from("cm", function(H) {
            return H.charCodeAt(0);
          }), o = 0; o < e.length; o++) {
            for (var a = e[o], s = Dt(Dt({}, a), { isBuildCombinedMsg: !0 }), d = this.mSync.encodeChatMsg.call(this, s), u = d.length, m = new Uint8Array(4), p = 0; p < 4; p++) m[p] = u >> 8 * (3 - p) & 255;
            L.debug("message length:", m);
            var T = new Uint8Array(r.length + m.length + d.length);
            T.set(r), T.set(m, r.length), T.set(d, r.length + m.length), r = T;
          }
          var v = new Uint8Array(r.length + 1), D = 0;
          for (o = 2; o < r.length; o++) o % 2 == 1 && (D ^= r[o]);
          return v.set(r), L.debug("checkResult:", D), v[r.length] = D, v;
        }
        function Rd(e, r, o) {
          var a = [], s = this.root.lookup("easemob.pb.MUCBody"), d = e.roomId, u = e.ext, m = u === void 0 ? "" : u, p = e.leaveOtherRooms, T = p !== void 0 && p, v = s.decode(a);
          v.mucId = { appKey: this.appKey, name: d, domain: "conference.easemob.com" }, v.operation = o === "join" ? 2 : 3, v.from = { name: this.context.userId }, v.isChatroom = !0, o === "join" && (v.ext = m, v.leaveOtherRooms = T), v = s.encode(v).finish();
          var D = this.root.lookup("easemob.pb.Meta").decode(a);
          D.id = r, D.from = { appKey: this.appKey, name: this.context.userId, domain: "easemob.com", client_resource: this.context.jid.clientResource }, D.to = { domain: "easemob.com" }, D.ns = 2, D.payload = v;
          var H = this.root.lookup("easemob.pb.CommSyncUL"), k = H.decode(a);
          k.meta = D, k = H.encode(k).finish();
          var w = this.root.lookup("easemob.pb.MSync"), F = w.decode(a);
          return F.version = this.version, F.encryptType = this.encryptType, F.command = 0, F.payload = k, w.encode(F).finish();
        }
        function Id(e, r) {
          var o = ve.getUniqueId(), a = Rd.call(this, e, o, r), s = r === "join" ? h.JOIN_CHATROOM : h.QUIT_CHATROOM, d = this.dataReport.geOperateFun({ operationName: s });
          return ne.size <= z && ne.set(o, { rpt: d, requestName: s }), Rr.call(this, Dt(Dt({}, e), { isHandleChatroom: !0, joinMsg: a, id: o, operation: r }), o);
        }
        function bi(e) {
          var r = this;
          return new Promise(function(o, a) {
            var s, d, u, m, p, T;
            if (r.logOut) return a({ type: l.WEBIM_CONNECTION_CLOSED, message: "not login" });
            if (!e.id || typeof e.id != "string" || e.id === "") return a({ type: l.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "id"' });
            if (!e.to || typeof e.to != "string" || e.to === "") return a({ type: l.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "to"' });
            var v = e.type === "file" || e.type === "img" || e.type === "audio" || e.type === "video", D = e.type === "delivery" || e.type === "read" || e.type === "channel", H = e.type === "cmd", k = e.type === "recall", w = e == null ? void 0 : e.editMessageId, F = !(D || k || H || w);
            if (e.id) {
              if (!v && !D || v && r.useOwnUploadFun) {
                var V = e.type === "recall" ? h.SEND_RECALL_MSG : h.SEND_MSG;
                w && (V = h.MODIFY_MESSAGE), ee.size <= z && ee.set(e.id, { rpt: r.dataReport.geOperateFun({ operationName: V }) });
              }
              F && ((d = (s = r._localCache) === null || s === void 0 ? void 0 : s.getInstance()) === null || d === void 0 || d.storeMessage(e, qe.CREATE)), r._msgHash[e.id] = Dt(Dt({}, e), { resolve: o, reject: a });
            }
            if (v || e.type === "combine") return Ws.call(r, e);
            if (e.type === "txt" && (!((u = e.msgConfig) === null || u === void 0) && u.languages) && Array.isArray((m = e.msgConfig) === null || m === void 0 ? void 0 : m.languages) && e.msgConfig.languages.length > 0) {
              var ue = r.translateMessage || r.translation.translateMessage;
              if (!ue) throw new Error("there is no method to translate message");
              ue.call(r, { text: e.msg, languages: e.msgConfig.languages }).then(function(le) {
                var ge, ye, Ne, Ie = (ge = le.data[0]) === null || ge === void 0 ? void 0 : ge.translations;
                Ie = Ie.map(function(Te) {
                  return { code: Te.to, text: Te.text };
                }), e.translations = Ie, r._msgHash[e.id].translations = Ie, (Ne = (ye = r._localCache) === null || ye === void 0 ? void 0 : ye.getInstance()) === null || Ne === void 0 || Ne.storeMessage(e, qe.INPROGRESS);
                var Ae = pn.call(r, e);
                Rr.call(r, Ae, e.id);
              }).catch(function(le) {
                a(le);
              });
            } else {
              F && ((T = (p = r._localCache) === null || p === void 0 ? void 0 : p.getInstance()) === null || T === void 0 || T.storeMessage(e, qe.INPROGRESS));
              var pe = pn.call(r, e);
              Rr.call(r, pe, e.id);
            }
          });
        }
        function Rr(e, r) {
          var o, a, s = this;
          if (e.isHandleChatroom) {
            if (!this.isOpened()) {
              var d = { data: "", type: l.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
              if (ne.has(e.id)) {
                var u = ne.get(e.id);
                (0, u.rpt)({ isEndApi: !0, data: { isSuccess: 0, requestName: u.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: Z.disconnect, codeDesc: "websocket has been disconnected" } }), ne.delete(e.id);
              }
              return Promise.reject(d);
            }
            return new Promise(function(m, p) {
              var T;
              s._msgHash[e.id] = Dt(Dt({}, e), { resolve: m, reject: p }), T = s.name === "miniCore" ? e.joinMsg : Si.call(s, e.joinMsg, r), s.sock.send(T);
            });
          }
          if (!this.isOpened()) return (o = this.unMSyncSendMsgMap) === null || o === void 0 || o.set(r, e), !this.logOut && this.autoReconnectNumTotal < this.autoReconnectNumMax && (this.autoReconnectNumTotal <= this.socketHost.length && this.isHttpDNS || !this.isHttpDNS) && (L.debug("need to reconnect", this.autoReconnectNumTotal, this.autoReconnectNumMax), this.offLineSendConnecting = !0, this.reconnecting || this.reconnect()), void (this.onError && this.onError({ type: l.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }));
          a = this.name === "miniCore" ? e : Si.call(this, e, r), this.sock.send(a);
        }
        var Sd = function(e, r) {
          return e.send = bi, e.sendMsg = bi, L.debug("init Msync by ".concat(e.name)), { generateProvision: pd.bind(e), base64transform: Si.bind(e), distributeMeta: ks.bind(e), decodeMeta: Ds.bind(e), decodeUnreadDL: Ls.bind(e), _rebuild: xs.bind(e), _lastsession: Gs.bind(e), receiveProvision: js.bind(e), isInQueue: so.bind(e), decodeNotice: Fs.bind(e), decodeMSync: Ed.bind(e), distributeMSync: yd.bind(e), encodeChatMsg: pn.bind(e), upLoadFile: Ws.bind(e), send: bi.bind(e), stopHeartBeat: Hs.bind(e), handleChatRoom: Id.bind(e) };
        }, Cd = ["onTextMessage", "onFileMessage", "onAudioMessage", "onVideoMessage", "onImageMessage", "onLocationMessage", "onCustomMessage", "onCMDMessage"], Nd = function() {
          function e(r, o, a) {
            this.handlerData = {}, this.handlerData = {}, r.addEventHandler = this.addEventHandler.bind(this), r.removeEventHandler = this.removeEventHandler.bind(this);
          }
          return e.prototype.addEventHandler = function(r, o) {
            this.handlerData[r] = o;
          }, e.prototype.removeEventHandler = function(r) {
            delete this.handlerData[r];
          }, e.prototype.dispatch = function(r, o) {
            for (var a in Cd.includes(r) && o ? L.debug("dispatch event: " + r, { type: o.type, time: o.time, from: o.from, to: o.to, chatType: o.chatType }) : r === "onMessage" ? L.debug("dispatch event: " + r, o == null ? void 0 : o.map(function(d) {
              return d.id;
            })) : L.debug("dispatch event: " + r, o || ""), this.handlerData) {
              var s = this.handlerData[a][r];
              s && s(o);
            }
          }, e;
        }(), ut = function() {
        };
        function Ad(e) {
          this.onOpened = e.onOpened || ut, this.onPresence = e.onPresence || ut, this.onTextMessage = e.onTextMessage || ut, this.onPictureMessage = e.onPictureMessage || ut, this.onAudioMessage = e.onAudioMessage || ut, this.onVideoMessage = e.onVideoMessage || ut, this.onFileMessage = e.onFileMessage || ut, this.onLocationMessage = e.onLocationMessage || ut, this.onCmdMessage = e.onCmdMessage || ut, this.onCustomMessage = e.onCustomMessage || ut, this.onReceivedMessage = e.onReceivedMessage || ut, this.onDeliveredMessage = e.onDeliveredMessage || ut, this.onReadMessage = e.onReadMessage || ut, this.onRecallMessage = e.onRecallMessage || ut, this.onChannelMessage = e.onChannelMessage || ut, this.onError = e.onError || ut, this.onOffline = e.onOffline || ut, this.onOnline = e.onOnline || ut, this.onStatisticMessage = e.onStatisticMessage || ut, this.onContactInvited = e.onContactInvited || ut, this.onContactAgreed = e.onContactAgreed || ut, this.onContactRefuse = e.onContactRefuse || ut, this.onContactDeleted = e.onContactDeleted || ut, this.onContactAdded = e.onContactAdded || ut, this.onTokenWillExpire = e.onTokenWillExpire || ut, this.onTokenExpired = e.onTokenExpired || ut, this.onClosed = e.onClosed || ut, this.onPresenceStatusChange = e.onPresenceStatusChange || ut;
        }
        var Vs = { biz: "", debug: !1, token: "" }, Ks = "https://data-reporting.agora.io/report", zs = "https://data-reporting.sh.agoralab.co/report", $s = function(e) {
          var r = Number(x[e]);
          return r === x.USER_LOGIN ? "MANUALLOGIN" : r === x.MSYNC_SENDMESSAGE ? "SENDMESSAGE" : r > x.UNKNOWOPERATION && r < x.REST_OPERATE ? "REST" : r > x.REST_OPERATE && r < x.MSYNC_OPERATE ? "MESSAGE" : r > x.MSYNC_OPERATE && r < x.ROSTER_OPERATE ? "ROSTER" : r > x.ROSTER_OPERATE && r < x.USER_OPERATE ? "USER" : r > x.USER_OPERATE && r < x.GROUP_OPERATE ? "GROUP" : r > x.GROUP_OPERATE && r < x.CHATROOM_OPERATE ? "CHATROOM" : "OPERATION";
        }, Po = function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, qs = function(e) {
          return [je.BAIDU, je.WX, je.DD, je.ZFB, je.TT, je.QUICK_APP, je.UNI].includes(e.platform);
        }, ko = function() {
          return e = 1, r = 99999, e = Math.ceil(e), r = Math.floor(r), Math.floor(Math.random() * (r - e)) + e;
          var e, r;
        }, Mi = {}, wi = 1e3, bd = function() {
          function e(r) {
            this.eventQueue = [], this.stock = wi, this.config = r, this.governor();
          }
          return e.prototype.add = function(r) {
            this.stock <= 0 ? console.warn("Event Report limit ".concat(wi, " per minute")) : (this.eventQueue.push(r), this.consume(), this.stock -= 1);
          }, e.prototype.consume = function() {
            var r = this;
            this.eventQueue.length !== 0 && (this.timer && this.eventQueue.length <= 10 && clearTimeout(this.timer), this.timer = setTimeout(function() {
              var o, a = r.eventQueue.splice(0, 10), s = a.filter(function(u) {
                return u.appId === a[0].appId;
              }), d = a.filter(function(u) {
                return u.appId !== a[0].appId;
              });
              (o = r.eventQueue).unshift.apply(o, d), r.batchSend(s);
            }, 1e3));
          }, e.prototype.governor = function() {
            var r = this, o = setInterval(function() {
              r.stock = wi;
            }, 6e4);
            typeof addEventListener < "u" && addEventListener("beforeunload", function() {
              clearInterval(o);
            });
          }, e.prototype.batchSend = function(r) {
            var o, a;
            if (r === void 0 && (r = []), r.length !== 0) try {
              var s = r.map(function(d) {
                d.biz, d.appId;
                var u = d.eventId, m = function(p, T) {
                  var v = {};
                  for (var D in p) Object.prototype.hasOwnProperty.call(p, D) && T.indexOf(D) < 0 && (v[D] = p[D]);
                  if (p != null && typeof Object.getOwnPropertySymbols == "function") {
                    var H = 0;
                    for (D = Object.getOwnPropertySymbols(p); H < D.length; H++) T.indexOf(D[H]) < 0 && Object.prototype.propertyIsEnumerable.call(p, D[H]) && (v[D[H]] = p[D[H]]);
                  }
                  return v;
                }(d, ["biz", "appId", "eventId"]);
                return { eventId: Number(u), body: m };
              });
              (function(d, u) {
                try {
                  var m = u.biz, p = u.appId, T = u.data, v = u.debug, D = u.onSuccess;
                  if (!m) throw new Error("biz is not defined");
                  Mi.global || (Mi = ve.getEnvInfo());
                  var H = Mi;
                  if (qs(H)) {
                    var k = { url: v ? zs : Ks, data: T, method: "POST", success: function() {
                      D == null || D();
                    }, fail: function() {
                    }, complete: function() {
                    } }, w = { token: d, appid: p ?? "", sendts: "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)), biz: m, debug: "".concat(v) };
                    if (H.platform === "zfb" || H.platform === "dd" ? k.headers = w : k.header = w, H.platform === "dd") return H.global.httpRequest(k);
                    H.global.request(k);
                  } else {
                    var F = new XMLHttpRequest();
                    F.onreadystatechange = function() {
                      F.readyState === 2 && (D == null || D());
                    }, F.open("POST", v ? zs : Ks), F.setRequestHeader("Content-Type", "application/json"), F.setRequestHeader("token", d), F.setRequestHeader("appid", p ?? ""), F.setRequestHeader("sendts", "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3))), F.setRequestHeader("biz", m), F.setRequestHeader("debug", "".concat(v)), F.send(JSON.stringify(T));
                  }
                } catch (V) {
                  console.error(V);
                }
              })(this.config.token, { biz: (o = r[0]) === null || o === void 0 ? void 0 : o.biz, appId: (a = r[0]) === null || a === void 0 ? void 0 : a.appId, data: s, debug: this.config.debug, onSuccess: this.consume.bind(this) });
            } catch (d) {
              console.error(d);
            }
          }, e;
        }(), xn = function() {
          return xn = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, xn.apply(this, arguments);
        }, Ui = new (function() {
          function e(r) {
            this.inited = !1, this.appId = "", this.biz = "", this.eventQueue = {}, this.config = Vs, r && this.init(r);
          }
          return e.prototype.init = function(r) {
            var o;
            if (r === void 0 && (r = {}), !r.biz || !r.token) throw new Error("Event Report: biz or token is not defined");
            try {
              this.appId = (o = r.appId) !== null && o !== void 0 ? o : "", this.biz = r.biz, this.config = xn(xn({}, Vs), r), this.eventQueue = new bd(this.config), this.log(r), this.inited = !0;
            } catch (a) {
              console.error(a);
            }
          }, e.prototype.send = function(r, o, a) {
            var s;
            if (o === void 0 && (o = {}), this.inited) {
              var d = xn(xn({}, o), { eventId: Number(r), biz: this.biz, appId: (s = a == null ? void 0 : a.appId) !== null && s !== void 0 ? s : this.appId });
              this.eventQueue.add(d), this.log(d);
            } else console.error("Event Report: init is not called");
          }, e.prototype.log = function(r) {
            try {
              if (this.config.debug) {
                var o = r.payload, a = function(s, d) {
                  var u = {};
                  for (var m in s) Object.prototype.hasOwnProperty.call(s, m) && d.indexOf(m) < 0 && (u[m] = s[m]);
                  if (s != null && typeof Object.getOwnPropertySymbols == "function") {
                    var p = 0;
                    for (m = Object.getOwnPropertySymbols(s); p < m.length; p++) d.indexOf(m[p]) < 0 && Object.prototype.propertyIsEnumerable.call(s, m[p]) && (u[m[p]] = s[m[p]]);
                  }
                  return u;
                }(r, ["payload"]);
                console.log("%c Event Report: ".concat(this.config.biz, " "), "background: #8A97FC; color: #fff"), console.table(a), o && (console.info("payload:"), console.table(o));
              }
            } catch (s) {
              console.error(s);
            }
          }, e;
        }())(), kr = function() {
          return kr = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, kr.apply(this, arguments);
        }, Js = { requestName: "", subrequestid: "1", requestMethod: "GET", requestUrl: "", requestElapse: 0, code: 0, codeDesc: "", isLastApi: 0, isSuccess: 1 }, Md = function() {
          function e(r) {
            this.platform = ve.getEnvInfo(), this.isReportDt = r.isReport || !1, this.isCollectDt = !0, qs(this.platform) && !this.isReportDt && (this.isCollectDt = !1), this.eventQueue = [], this.accessChannel = "direct", this.options = function(o, a) {
              a.platform || (a = ve.getEnvInfo());
              var s = o.org, d = o.appkey, u = o.deviceId, m = o.sdkVersion, p = (navigator == null ? void 0 : navigator.userAgent) || "".concat(a.platform, "_mini_program");
              return { org: s, appkey: d, deviceId: u, sdkServiceId: "sid_".concat(ve.getUniqueId(), "_").concat(ko()), did: p, sdkVersion: m, os: 7, sdkProduct: te.web };
            }(r, this.platform), this.sid = this.options.sdkServiceId, this.init(r);
          }
          return e.getInstance = function() {
            return e.instance;
          }, e.prototype.getServiceId = function() {
            return this.sid || "sid_0";
          }, e.prototype.setIsReportDt = function(r) {
            this.isReportDt = r, r && this.rptEventQueue();
          }, e.prototype.setIsCollectDt = function(r) {
            this.isCollectDt = r, r || (this.eventQueue = []);
          }, e.prototype.rptEventQueue = function() {
            var r = this;
            this.eventQueue.length && this.eventQueue.forEach(function(o, a) {
              Ui.send(o.eventId, o.dt), a >= r.eventQueue.length - 1 && (r.eventQueue = []);
            });
          }, e.prototype.init = function(r) {
            e.instance || (e.instance = this, Ui.init({ biz: "im", token: "32f24ab2ddb74f508aa9286c356cec84", appId: r.appkey, debug: !1 }), this.reportInit());
          }, e.prototype.reportInit = function() {
            if (this.isCollectDt) {
              var r = this.options, o = r.did, a = r.os, s = r.sdkVersion, d = r.deviceId;
              this.reportData(9674, { did: o, os: a, sdkVersion: s, deviceId: d });
            }
          }, e.prototype.geOperateFun = function(r) {
            var o = this;
            if (!this.isCollectDt) return function() {
            };
            var a = 1, s = 0, d = "", u = Po(), m = r.uid, p = r.operationName;
            m && (this.uid = m);
            var T = { uid: this.uid, operationId: "opr_".concat(ve.getUniqueId(), "_").concat(ko()), requestid: "req_".concat(ve.getUniqueId(), "_").concat(ko()), operationName: p };
            return function(v) {
              var D, H, k, w;
              if (v.data.isSuccess ? (s = 0, d = "") : (v.data.code === 0 && (v.data.code = J), s = (D = v.data.code) !== null && D !== void 0 ? D : s, d = (H = v.data.codeDesc) !== null && H !== void 0 ? H : d), !((k = v.data) === null || k === void 0) && k.accessChannel && (o.accessChannel = (w = v.data) === null || w === void 0 ? void 0 : w.accessChannel), v.isRetry ? (a++, v.data.subrequestid = "".concat(a)) : (T.requestid = "req_".concat(ve.getUniqueId(), "_").concat(ko()), a = 1), v.data.isLastApi) {
                var F = Po();
                v.data.requestElapse = F - u, v.data.requestMethod = "", v.data.subrequestid = "0", v.data.code = s === 200 ? 0 : s, v.data.codeDesc = d;
              } else v.data.requestName || (v.data.requestName = p);
              v.data.requestElapse || (v.data.requestElapse = Po() - u), o.reportData.call(o, y, kr(kr(kr(kr({}, Js), T), v.data), { accessChannel: o.accessChannel, operationType: $s(p) })), v.isEndApi && o.reportData.call(o, y, kr(kr(kr({}, T), Js), { isSuccess: v.data.isSuccess, isLastApi: 1, subrequestid: "0", requestMethod: "", code: s === 200 ? 0 : s, codeDesc: d, requestElapse: v.data.requestElapse, accessChannel: o.accessChannel, operationType: $s(p) }));
            };
          }, e.prototype.reportData = function(r, o) {
            return a = this, s = void 0, u = function() {
              var m, p, T, v, D, H, k, w;
              return function(F, V) {
                var ue, pe, le, ge, ye = { label: 0, sent: function() {
                  if (1 & le[0]) throw le[1];
                  return le[1];
                }, trys: [], ops: [] };
                return ge = { next: Ne(0), throw: Ne(1), return: Ne(2) }, typeof Symbol == "function" && (ge[Symbol.iterator] = function() {
                  return this;
                }), ge;
                function Ne(Ie) {
                  return function(Ae) {
                    return function(Te) {
                      if (ue) throw new TypeError("Generator is already executing.");
                      for (; ge && (ge = 0, Te[0] && (ye = 0)), ye; ) try {
                        if (ue = 1, pe && (le = 2 & Te[0] ? pe.return : Te[0] ? pe.throw || ((le = pe.return) && le.call(pe), 0) : pe.next) && !(le = le.call(pe, Te[1])).done) return le;
                        switch (pe = 0, le && (Te = [2 & Te[0], le.value]), Te[0]) {
                          case 0:
                          case 1:
                            le = Te;
                            break;
                          case 4:
                            return ye.label++, { value: Te[1], done: !1 };
                          case 5:
                            ye.label++, pe = Te[1], Te = [0];
                            continue;
                          case 7:
                            Te = ye.ops.pop(), ye.trys.pop();
                            continue;
                          default:
                            if (!((le = (le = ye.trys).length > 0 && le[le.length - 1]) || Te[0] !== 6 && Te[0] !== 2)) {
                              ye = 0;
                              continue;
                            }
                            if (Te[0] === 3 && (!le || Te[1] > le[0] && Te[1] < le[3])) {
                              ye.label = Te[1];
                              break;
                            }
                            if (Te[0] === 6 && ye.label < le[1]) {
                              ye.label = le[1], le = Te;
                              break;
                            }
                            if (le && ye.label < le[2]) {
                              ye.label = le[2], ye.ops.push(Te);
                              break;
                            }
                            le[2] && ye.ops.pop(), ye.trys.pop();
                            continue;
                        }
                        Te = V.call(F, ye);
                      } catch (Ye) {
                        Te = [6, Ye], pe = 0;
                      } finally {
                        ue = le = 0;
                      }
                      if (5 & Te[0]) throw Te[1];
                      return { value: Te[0] ? Te[1] : void 0, done: !0 };
                    }([Ie, Ae]);
                  };
                }
              }(this, function(F) {
                switch (F.label) {
                  case 0:
                    return F.trys.push([0, 3, , 4]), m = Po(), p = 0, r !== y ? [3, 2] : [4, (V = this.platform, new Promise(function(ue) {
                      var pe;
                      V.platform || (V = ve.getEnvInfo());
                      var le = "";
                      if (V.platform === je.WEB) {
                        var ge = navigator.connection;
                        ge != null && ge.type ? (ge == null || ge.type, le = W.WIFI) : ge != null && ge.effectiveType && (le = W[ge.effectiveType.toLocaleUpperCase()]), ue(le);
                      } else V.platform === je.NODE ? (le = W.UNKNOWN, ue(le)) : (pe = V.global) === null || pe === void 0 || pe.getNetworkType({ success: function(ye) {
                        le = W[ye.networkType.toLocaleUpperCase()], ue(le);
                      } });
                    }))];
                  case 1:
                    p = F.sent(), F.label = 2;
                  case 2:
                    return T = this.options, v = T.appkey, D = T.sdkServiceId, H = T.sdkProduct, k = kr({ lts: m, net: p, appkey: v, sdkServiceId: D, sdkProduct: H }, o), this.isReportDt ? Ui.send(r, k) : this.isCollectDt && this.eventQueue.push({ eventId: r, dt: k }), [3, 4];
                  case 3:
                    return w = F.sent(), console.warn(w), [3, 4];
                  case 4:
                    return [2];
                }
                var V;
              });
            }, new ((d = void 0) || (d = Promise))(function(m, p) {
              function T(H) {
                try {
                  D(u.next(H));
                } catch (k) {
                  p(k);
                }
              }
              function v(H) {
                try {
                  D(u.throw(H));
                } catch (k) {
                  p(k);
                }
              }
              function D(H) {
                var k;
                H.done ? m(H.value) : (k = H.value, k instanceof d ? k : new d(function(w) {
                  w(k);
                })).then(T, v);
              }
              D((u = u.apply(a, s || [])).next());
            });
            var a, s, d, u;
          }, e;
        }();
        function wd() {
          var e = this.context.appName, r = this.context.orgName;
          return !(!e || !r) || (this.onError && this.onError({ type: l.WEBIM_CONNCTION_AUTH_ERROR, message: "appName or orgName is illegal" }), !1);
        }
        function Ud() {
          var e;
          if (!this.context.accessToken) {
            var r = g.create({ type: l.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "token not assign error" });
            return this.onError && this.onError(r), (e = this.eventHandler) === null || e === void 0 || e.dispatch("onError", r), !1;
          }
          return !0;
        }
        function ae() {
          return Ud.call(this) && wd.call(this);
        }
        function Xs(e) {
          var r = e.data, o = e.type;
          return { data: { status: Object.keys(r.errorKeys).length > 0 ? "fail" : "success", errorKeys: r.errorKeys, successKeys: r.successKeys }, type: o };
        }
        function Ys(e) {
          var r = e.data, o = void 0;
          return Object.keys(r.errorKeys).length > 0 && Object.keys(r.errorKeys).forEach(function(a) {
            var s = r.errorKeys[a];
            o = s.includes("is not part of you") ? g.create({ type: l.NO_PERMISSION, message: s }) : s.includes("size of metadata for this single chatroom exceeds the user defined limit") || s.includes("total size of chatroom metadata for this app exceeds the user defined limit") || s.includes("is exceeding maximum limit") ? g.create({ type: l.MAX_LIMIT, message: s }) : s.includes("is not Legal") ? g.create({ type: l.REQUEST_PARAMETER_ERROR, message: s }) : s.includes("Failed to update userMetadata. Concurrent updates not allowed") ? g.create({ type: l.OPERATION_NOT_ALLOWED, message: s }) : g.create({ type: l.WEBIM_CONNCTION_AJAX_ERROR, message: s });
          }), o;
        }
        var Gn = function() {
          return Gn = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, Gn.apply(this, arguments);
        }, pt = function(e, r, o, a) {
          return new (o || (o = Promise))(function(s, d) {
            function u(T) {
              try {
                p(a.next(T));
              } catch (v) {
                d(v);
              }
            }
            function m(T) {
              try {
                p(a.throw(T));
              } catch (v) {
                d(v);
              }
            }
            function p(T) {
              var v;
              T.done ? s(T.value) : (v = T.value, v instanceof o ? v : new o(function(D) {
                D(v);
              })).then(u, m);
            }
            p((a = a.apply(e, [])).next());
          });
        }, dt = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        }, Pi = { singleChat: "chat", chatRoom: "chatroom", groupChat: "groupchat" };
        function Qs(e) {
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: this.apiUrl + "/" + a + "/" + s + "/users/" + this.user + "/blocks/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d }, success: function(m) {
            m.data.forEach(function(p) {
            }), typeof (e == null ? void 0 : e.success) == "function" && e.success(m);
          }, error: function(m) {
            typeof (e == null ? void 0 : e.error) == "function" && e.error(m);
          } };
          return L.debug("Call getBlocklist"), re.call(this, u, h.GET_BLACK_LIST);
        }
        var Pd = Qs, kd = Zs;
        function Zs(e) {
          var r = this;
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          var a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = { url: this.apiUrl + "/" + s + "/" + d + "/users/" + this.user + "/contacts/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + u }, success: function(p) {
            var T = [];
            p.data.forEach(function(v) {
              T.push({ name: v, subscription: "both", jid: r.context.jid });
            }), typeof (e == null ? void 0 : e.success) == "function" && e.success(T);
          }, error: function(p) {
            typeof (e == null ? void 0 : e.error) == "function" && e.error(p);
          } };
          return L.debug("Call getContacts"), re.call(this, m, h.GET_CONTACTS);
        }
        function ec(e) {
          if (typeof e.deviceId != "string" || e.deviceId === "") throw Error('Invalid parameter: "deviceId"');
          if (typeof e.deviceToken != "string" || e.deviceToken === "") throw Error('Invalid parameter: "deviceToken"');
          if (typeof e.notifierName != "string" || e.notifierName === "") throw Error('Invalid parameter: "notifierName"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(this.user), type: "PUT", data: JSON.stringify({ device_id: e.deviceId, device_token: e.deviceToken, notifier_name: e.notifierName }), dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call uploadPushToken", e), re.call(this, u, h.UPLOAD_PUSH_TOKEN);
        }
        var Dd = ec;
        function Ld(e) {
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(this.user, "/user_channels"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e && (e == null ? void 0 : e.success), error: e && (e == null ? void 0 : e.error) };
          return L.debug("Call getSessionList"), re.call(this, u, h.GET_SESSION_LIST);
        }
        function xd(e) {
          var r = this;
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          var a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = !!(e && typeof e.pageNum == "number" && typeof e.pageSize == "number" && e.pageNum > 0 && e.pageSize > 0), p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(this.user, "/user_channels").concat(m ? "/page" : ""), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, success: e && (e == null ? void 0 : e.success), error: e && (e == null ? void 0 : e.error) };
          return m && (p.data = { pageNum: e.pageNum, pageSize: e.pageSize }), L.debug("Call getConversationlist"), re.call(this, p, h.GET_SESSION_LIST).then(function(T) {
            return Gd.call(r, T);
          });
        }
        function Gd(e) {
          var r = this, o = e.data.channel_infos;
          return o == null || o.forEach(function(a) {
            a.meta && JSON.stringify(a.meta) !== "{}" ? (a.meta.payload = JSON.parse(a.meta.payload), a.lastMessage = dr.call(r, a.meta, { formatCustomExts: !1 })) : a.lastMessage = a.meta, delete a.meta;
          }), e;
        }
        function tc(e) {
          if (e && typeof e.channel != "string") throw Error("Invalid parameter channel: ".concat(e.channel));
          if (e && e.chatType !== "singleChat" && e.chatType !== "groupChat") throw Error("Invalid parameter chatType: ".concat(e.chatType));
          if (e && typeof e.deleteRoam != "boolean") throw Error("Invalid parameter deleteRoam: ".concat(e.deleteRoam));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o, a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = a.jid;
          o = e.chatType === "singleChat" ? "chat" : "groupChat";
          var p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/user/").concat(this.user, "/user_channel?resource=").concat(m.clientResource), dataType: "json", type: "DELETE", data: JSON.stringify({ channel: e.channel, type: o, delete_roam: e.deleteRoam }), headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call deleteSession", e), re.call(this, p, h.DELETE_SESSION);
        }
        var jd = tc;
        function rc(e, r) {
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          var a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"], p = {}, T = ve.getEnvInfo();
          if (T.platform === "wx" || T.platform === "qq") if (typeof e == "string" && r !== void 0) {
            if (!m.includes(e)) throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
            p[e] = r;
          } else {
            if (Object.prototype.toString.call(e) !== "[object Object]") throw new Error("illegal params");
            m.forEach(function(H) {
              m.includes(H) && e[H] !== void 0 && (p[H] = e[H]);
            });
          }
          else if (typeof e == "string") {
            if (!m.includes(e)) throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
            p = e + "=" + r;
          } else {
            if (Object.prototype.toString.call(e) !== "[object Object]") throw new Error("illegal params");
            var v = [];
            m.forEach(function(H) {
              if (m.includes(H) && e[H] !== void 0) {
                var k = encodeURIComponent(H), w = encodeURIComponent(e[H]);
                v.push(k + "=" + w);
              }
            }), p = v.join("&");
          }
          var D = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/metadata/user/").concat(this.user), type: "PUT", data: p, dataType: "json", headers: { Authorization: "Bearer " + u, "Content-Type": "application/x-www-form-urlencoded" } };
          return L.debug("Call updateOwnUserInfo", e), re.call(this, D, h.UPDATE_USER_INFO);
        }
        var Bd = rc;
        function Hd(e, r) {
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          var a, s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = [];
          if (typeof e == "string") p = [e];
          else {
            if (Object.prototype.toString.call(e) !== "[object Array]") throw new Error("illegal params");
            p = e;
          }
          a = typeof r == "string" ? [r] : r && Object.prototype.toString.call(r) === "[object Array]" ? r : ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"];
          var T = { url: "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/metadata/user/get"), type: "POST", data: JSON.stringify({ targets: p, properties: a }), dataType: "json", headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" } };
          return L.debug("Call fetchUserInfoById", e), re.call(this, T, h.GET_USER_INFO);
        }
        function Fd(e) {
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(this.user), type: "PUT", dataType: "json", data: JSON.stringify({ nickname: e }), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return L.debug("Call updateCurrentUserNick", e), re.call(this, u);
        }
        function Wd(e) {
          if (typeof e != "string" || e === "") throw Error('Invalid parameter: "token"');
          var r = this.context, o = r.orgName, a = r.appName, s = { url: "".concat(this.apiUrl, "/").concat(o, "/").concat(a, "/sdk/users/").concat(this.user, "/token/expires"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + e, "Content-Type": "application/json" } };
          return L.debug("Call getTokenExpireTimestamp", e), re.call(this, s, h.SDK_INTERNAL);
        }
        function Vd(e) {
          var r = this;
          return new Promise(function(o, a) {
            if (!e.queue) throw Error('Invalid parameter: "specified"');
            if (!ae.call(r)) {
              var s = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(s);
            }
            (function d(u) {
              var m = this, p = u.count || 20;
              Kd.call(this, { count: p, isGroup: !!u.isGroup, queue: u.queue, start: u.start, format: u.format, success: function(T) {
                if (T.msgs.length >= p || T.is_last) {
                  var v = T.msgs.splice(0, p).reverse();
                  u.success && u.success(v), o(v);
                } else d.call(m, Gn(Gn({}, u), { start: null }));
              }, fail: function(T) {
                a(T), u.fail && u.fail(T);
              } });
            }).call(r, e), L.debug("Call fetchHistoryMessages", e);
          });
        }
        function Kd(e) {
          var r = this, o = e.queue, a = this.mr_cache[o] || (this.mr_cache[o] = { msgs: [] }), s = this.context.userId, d = e.start || -1, u = e.count || 20;
          if (a.msgs.length >= u || a.is_last) typeof e.success == "function" && e.success(a);
          else {
            a && a.next_key && (d = a.next_key), e.start && (d = e.start);
            var m = { queue: o + (e.isGroup ? "@conference.easemob.com" : "@easemob.com"), start: d, end: -1 }, p = this.context, T = p.orgName, v = p.appName, D = { url: "".concat(this.apiUrl, "/").concat(T, "/").concat(v, "/users/").concat(s, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" }, data: JSON.stringify(m), success: function(H) {
              return pt(r, void 0, void 0, function() {
                var k, w, F, V, ue, pe, le = this;
                return dt(this, function(ge) {
                  switch (ge.label) {
                    case 0:
                      if (k = H == null ? void 0 : H.data, !H.data.msgs) return typeof e.success == "function" && e.success(a), a.is_last = !0, a.next_key = "", [2];
                      w = k.msgs, F = w.length, a.is_last = k.is_last, a.next_key = k.next_key, V = function(ye) {
                        return pt(le, void 0, void 0, function() {
                          var Ne, Ie, Ae, Te, Ye;
                          return dt(this, function(Ke) {
                            switch (Ke.label) {
                              case 0:
                                for (Ne = [], ye = Ot().atob(ye), Ie = 0, Ae = ye.length; Ie < Ae; ++Ie) Ne.push(ye.charCodeAt(Ie));
                                return Te = (Te = this.context.root.lookup("easemob.pb.Meta")).decode(Ne), Ye = { errorCode: 0, reason: "" }, Te.ns !== 1 ? [3, 2] : [4, Dn.call(this, Te, Ye, !0, e.format)];
                              case 1:
                                return [2, Ke.sent()];
                              case 2:
                                return [2];
                            }
                          });
                        });
                      }, ue = 0, ge.label = 1;
                    case 1:
                      return ue < F ? [4, V(w[ue].msg)] : [3, 4];
                    case 2:
                      (pe = ge.sent()) && a.msgs.push(pe), ge.label = 3;
                    case 3:
                      return ue++, [3, 1];
                    case 4:
                      return typeof e.success == "function" && e.success(a), [2];
                  }
                });
              });
            }, error: function(H) {
              if (H.error && H.error_description) {
                var k = g.create({ type: l.WEBIM_CONNCTION_AJAX_ERROR, message: "fetch history messages error", data: H });
                r.onError && r.onError(k);
              }
            } };
            re.call(this, D, h.GET_HISTORY_MSG).catch(function(H) {
              typeof e.fail == "function" && e.fail(H);
            });
          }
        }
        function zd(e) {
          var r = this;
          return new Promise(function(o, a) {
            var s = e.targetId, d = e.cursor, u = d === void 0 ? -1 : d, m = e.pageSize, p = m === void 0 ? 20 : m, T = e.chatType, v = e.searchDirection, D = e.searchOptions, H = D === void 0 ? {} : D, k = H.msgTypes, w = k === void 0 ? [] : k, F = H.startTime, V = F === void 0 ? null : F, ue = H.endTime, pe = ue === void 0 ? null : ue, le = H.from, ge = le === void 0 ? null : le;
            if (typeof s != "string" || s === "") throw Error('"Invalid parameter": "targetId"');
            if (ge && typeof ge != "string") throw Error('"Invalid parameter": "searchOptions.from"');
            if (w && !Array.isArray(w)) throw Error('"Invalid parameter": "searchOptions.msgTypes"');
            if (V && typeof V != "number") throw Error('"Invalid parameter": "searchOptions.startTime"');
            if (pe && typeof V != "number") throw Error('"Invalid parameter": "searchOptions.endTime"');
            if (!ae.call(r)) {
              var ye = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
              return a(ye);
            }
            var Ne = r.context, Ie = Ne.orgName, Ae = Ne.appName, Te = Ne.userId, Ye = e.chatType === "singleChat" ? "@easemob.com" : "@conference.easemob.com", Ke = { queue: "".concat(s).concat(Ye), start: u, pull_number: p, is_positive: v === "down", msgType: w.join(",") || "", end: -1, startTime: V, endTime: pe, userId: T === "singleChat" ? null : ge }, X = { url: "".concat(r.apiUrl, "/").concat(Ie, "/").concat(Ae, "/users/").concat(Te, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + r.token, "Content-Type": "application/json" }, data: JSON.stringify(Ke), success: function(Se) {
              return pt(r, void 0, void 0, function() {
                var Y, He, Me, be, We, Qe, Je, Fe, Ge = this;
                return dt(this, function(rt) {
                  switch (rt.label) {
                    case 0:
                      Y = Se == null ? void 0 : Se.data, He = Y.msgs || [], Me = function(et) {
                        return pt(Ge, void 0, void 0, function() {
                          var at, Ve, bt, Xe, _e;
                          return dt(this, function(he) {
                            switch (he.label) {
                              case 0:
                                for (at = [], et = Ot().atob(et), Ve = 0, bt = et.length; Ve < bt; ++Ve) at.push(et.charCodeAt(Ve));
                                return Xe = (Xe = this.context.root.lookup("easemob.pb.Meta")).decode(at), _e = { errorCode: 0, reason: "" }, Xe.ns !== 1 ? [3, 2] : [4, Dn.call(this, Xe, _e, !0, !0)];
                              case 1:
                                return [2, he.sent()];
                              case 2:
                                return [2];
                            }
                          });
                        });
                      }, be = [], We = 0, rt.label = 1;
                    case 1:
                      return We < He.length ? [4, Me(He[We].msg)] : [3, 4];
                    case 2:
                      (Qe = rt.sent()) && be.push(Qe), rt.label = 3;
                    case 3:
                      return We++, [3, 1];
                    case 4:
                      return Y.msgs = be, Je = { cursor: Y.next_key, messages: be, isLast: Y.is_last }, (Fe = e.success) === null || Fe === void 0 || Fe.call(e, Je), o(Je), [2];
                  }
                });
              });
            }, error: e.fail };
            re.call(r, X).catch(function(Se) {
              a(Se);
            }), L.debug("Call getHistoryMessages", e);
          });
        }
        function $d(e, r) {
          return pt(this, void 0, void 0, function() {
            var o, a, s, d, u, m, p;
            return dt(this, function(T) {
              switch (T.label) {
                case 0:
                  if (!ae.call(this)) return o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(o)];
                  if (typeof e != "string" || e === "") throw Error('"Invalid parameter": "to"');
                  return L.debug("Call addContact", e, r), a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = a.jid, p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(this.user, "/contacts/apply?resource=").concat(m.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ usernames: [e], reason: r }), headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" } }, [4, re.call(this, p, h.ROSTER_ADD)];
                case 1:
                  return T.sent(), [2];
              }
            });
          });
        }
        var qd = nc;
        function nc(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m;
            return dt(this, function(p) {
              switch (p.label) {
                case 0:
                  if (!ae.call(this)) return r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)];
                  if (typeof e != "string" || e === "") throw Error('"Invalid parameter": "to"');
                  return L.debug("Call deleteContact", e), o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(this.user, "/contacts/users/").concat(e, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } }, [4, re.call(this, m, h.ROSTER_REMOVE)];
                case 1:
                  return p.sent(), [2];
              }
            });
          });
        }
        function oc(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m;
            return dt(this, function(p) {
              switch (p.label) {
                case 0:
                  if (!ae.call(this)) return r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)];
                  if (typeof e != "string" || e === "") throw Error('"Invalid parameter": "to"');
                  return L.debug("Call acceptInvitation", e), o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(this.user, "/contacts/accept/users/").concat(e, "?resource=").concat(u.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } }, [4, re.call(this, m, h.ROSTER_ACCEPT)];
                case 1:
                  return p.sent(), [2];
              }
            });
          });
        }
        var Jd = oc;
        function ic(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m;
            return dt(this, function(p) {
              switch (p.label) {
                case 0:
                  if (!ae.call(this)) return r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)];
                  if (typeof e != "string" || e === "") throw Error('"Invalid parameter": "to"');
                  return L.debug("Call declineInvitation", e), o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(this.user, "/contacts/decline/users/").concat(e, "?resource=").concat(u.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } }, [4, re.call(this, m, h.ROSTER_DECLINE)];
                case 1:
                  return p.sent(), [2];
              }
            });
          });
        }
        var Xd = ic;
        function ki(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T;
            return dt(this, function(v) {
              switch (v.label) {
                case 0:
                  if (!ae.call(this)) return r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)];
                  if (o = e.name, a = [], typeof o == "string") {
                    if (o === "") throw Error('"Invalid parameter": "name"');
                    a = [o];
                  } else {
                    if (!Array.isArray(o)) throw Error('"Invalid parameter": "name"');
                    a = o;
                  }
                  return L.debug("Call addToBlockList", e), s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = s.jid, T = { url: "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/sdk/user/").concat(this.user, "/blocks?resource=").concat(p.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ usernames: a }), headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" } }, [4, re.call(this, T, h.ROSTER_BAN).then(function(D) {
                    return { type: D.type, data: { userIds: (D == null ? void 0 : D.data) || [] } };
                  })];
                case 1:
                  return [2, v.sent()];
              }
            });
          });
        }
        var Yd = ki, Qd = ki;
        function Di(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T;
            return dt(this, function(v) {
              switch (v.label) {
                case 0:
                  if (!ae.call(this)) return r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)];
                  if (o = e.name, a = [], typeof o == "string") {
                    if (o === "") throw Error('"Invalid parameter": "name"');
                    a = [o];
                  } else {
                    if (!Array.isArray(o)) throw Error('"Invalid parameter": "name"');
                    a = o;
                  }
                  return L.debug("Call removeFromBlockList", e), s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = s.jid, T = { url: "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/sdk/user/").concat(this.user, "/blocks?resource=").concat(p.clientResource), type: "DELETE", dataType: "json", data: JSON.stringify({ usernames: a }), headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" } }, [4, re.call(this, T, h.ROSTER_ALLOW)];
                case 1:
                  return v.sent(), [2];
              }
            });
          });
        }
        var Zd = Di, ef = Di;
        function tf(e) {
          var r = this, o = (e == null ? void 0 : e.ext) || "";
          if (typeof o != "string") throw Error('"Invalid parameter": "ext"', o);
          var a = this.getUniqueId(), s = { id: a, to: e.to };
          this._msgHash[a] = Gn({}, s);
          var d = "";
          e.chatType !== void 0 ? d = e.chatType : e.type !== void 0 && (d = e.type === "chat" ? "singleChat" : e.type);
          var u = { id: a, type: "recall", chatType: d, ackId: e.mid, to: e.to, isChatThread: e.isChatThread || !1, metaExt: o, success: function(m) {
            return pt(r, void 0, void 0, function() {
              var p, T, v, D, H, k, w, F, V;
              return dt(this, function(ue) {
                switch (ue.label) {
                  case 0:
                    return ue.trys.push([0, 5, , 6]), d !== "singleChat" && d !== "groupChat" ? [3, 4] : [4, (v = (T = this._localCache) === null || T === void 0 ? void 0 : T.getInstance()) === null || v === void 0 ? void 0 : v.removeMsgByServerMsgId(e.mid)];
                  case 1:
                    return ue.sent(), [4, (H = (D = this._localCache) === null || D === void 0 ? void 0 : D.getInstance()) === null || H === void 0 ? void 0 : H.getConversationLastMessage(e.to, d)];
                  case 2:
                    return p = ue.sent(), [4, (w = (k = this._localCache) === null || k === void 0 ? void 0 : k.getInstance()) === null || w === void 0 ? void 0 : w.updateLocalConversation(Yr({ conversationId: e.to, conversationType: d }), { lastMessageId: p == null ? void 0 : p.serverMsgId })];
                  case 3:
                    ue.sent(), ue.label = 4;
                  case 4:
                    return (F = e == null ? void 0 : e.success) === null || F === void 0 || F.call(e, m), [3, 6];
                  case 5:
                    return ue.sent(), (V = e == null ? void 0 : e.success) === null || V === void 0 || V.call(e, m), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }, fail: e.fail };
          return L.debug("Call recallMessage", e), this.mSync.send(u, this);
        }
        function rf(e) {
          var r = e || {}, o = r.messageId, a = r.modifiedMessage;
          if (L.debug("Call modifyMessage", o, a), o === "") throw Error('Invalid parameter: "messageId"');
          if (a.type !== "txt") throw Error('Invalid parameter: "modifiedMessage.type"');
          return this.mSync.send(Gn({ editMessageId: o }, a));
        }
        function nf(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T;
            return dt(this, function(v) {
              switch (v.label) {
                case 0:
                  if (typeof e.messageId != "string" || !e.messageId) throw Error("Invalid parameter messageId: ".concat(e.messageId));
                  if (typeof e.reaction != "string" || !e.reaction) throw Error("Invalid parameter reaction: ".concat(e.reaction));
                  return ae.call(this) ? (o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.reaction, m = e.messageId, p = { msgId: m, message: u }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/reaction/user/").concat(this.user), type: "POST", data: JSON.stringify(p), dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } }, [4, re.call(this, T)]) : (r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)]);
                case 1:
                  return v.sent(), [2];
              }
            });
          });
        }
        function of(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p;
            return dt(this, function(T) {
              switch (T.label) {
                case 0:
                  if (typeof e.reaction != "string" || !e.reaction) throw Error("Invalid parameter reactionId: ".concat(e.reaction));
                  return ae.call(this) ? (o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.messageId, m = e.reaction, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/reaction/user/").concat(this.user, "?msgId=").concat(u, "&message=").concat(m), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } }, [4, re.call(this, p)]) : (r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)]);
                case 1:
                  return T.sent(), [2];
              }
            });
          });
        }
        function ac(e) {
          if (typeof e.chatType != "string" || !e.chatType) throw Error("Invalid parameter chatType: ".concat(e.chatType));
          if (!e.messageId) throw Error("Invalid parameter messageId: ".concat(e.messageId));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.chatType, m = e.messageId, p = { msgIdList: typeof m == "string" ? [m] : m, msgType: u === "singleChat" ? "chat" : "groupchat", groupId: e.groupId || null }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/reaction/user/").concat(this.user), type: "GET", data: p, dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, T).then(function(v) {
            var D = v.data;
            return D == null || D.forEach(function(H) {
              H == null || H.reactionList.forEach(function(k) {
                k.isAddedBySelf = k.state, delete k.state, delete k.reactionId;
              });
            }), v;
          });
        }
        var af = ac;
        function sf(e) {
          if (typeof e.reaction != "string" || !e.reaction) throw Error("Invalid parameter reaction: ".concat(e.reaction));
          if (typeof e.messageId != "string" || !e.messageId) throw Error("Invalid parameter messageId: ".concat(e.messageId));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.cursor, m = e.pageSize, p = { msgId: e.messageId, message: e.reaction, currentPage: u || null, pageSize: m || 20 }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/reaction/user/").concat(this.user, "/detail"), type: "GET", data: p, dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, T).then(function(v) {
            return v.data.isAddedBySelf = v.data.state, delete v.data.state, delete v.data.reactionId, v;
          });
        }
        function cf(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T, v, D;
            return dt(this, function(H) {
              switch (H.label) {
                case 0:
                  if (typeof e.reportType != "string" || !e.reportType) throw Error("Invalid parameter reportType: ".concat(e.reportType));
                  if (typeof e.messageId != "string" || !e.messageId) throw Error("Invalid parameter messageId: ".concat(e.messageId));
                  if (typeof e.reportReason != "string" || !e.reportReason) throw Error("Invalid parameter messageId: ".concat(e.reportReason));
                  return ae.call(this) ? (o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.reportType, m = e.reportReason, p = e.messageId, T = { username: this.user, reportType: u, reportReason: m }, v = "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/user/").concat(this.user, "/moderation/report/message/").concat(p), D = { url: v, type: "POST", data: JSON.stringify(T), dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } }, [4, re.call(this, D)]) : (r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)]);
                case 1:
                  return H.sent(), [2];
              }
            });
          });
        }
        function uf(e) {
          var r;
          return pt(this, void 0, void 0, function() {
            var o, a, s, d, u, m, p, T, v;
            return dt(this, function(D) {
              switch (D.label) {
                case 0:
                  if (typeof e.targetId != "string" || e.targetId === "") throw Error('"Invalid parameter targetId": ' + e.targetId);
                  if (!["singleChat", "groupChat"].includes(e.chatType)) throw Error('"Invalid parameter chatType": ' + e.chatType);
                  if (e.beforeTimeStamp && (typeof e.beforeTimeStamp != "number" || e.beforeTimeStamp < 0 || ((r = e.beforeTimeStamp) === null || r === void 0 ? void 0 : r.toString().length) > 18)) throw Error('"Invalid parameter beforeTimeStamp": ' + e.beforeTimeStamp);
                  if (e.messageIds && !(Array.isArray(e.messageIds) && e.messageIds.length > 0 && e.messageIds.length <= 20)) throw Error('"Invalid parameter messageIds": ' + e.messageIds);
                  if (!e.messageIds && !e.beforeTimeStamp) throw Error("messageIds or beforeTimeStamp field is required.");
                  return ae.call(this) ? (a = this.context, s = a.orgName, d = a.appName, u = a.userId, m = e.chatType === "singleChat" ? "userId" : "groupId", p = e.chatType === "singleChat" ? "chat" : "group", T = e.messageIds ? "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/sdk/message/roaming/").concat(p, "/user/").concat(u, "?").concat(m, "=").concat(e.targetId, "&msgIdList=").concat(e.messageIds, "&resource=").concat(this.clientResource) : "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/sdk/message/roaming/").concat(p, "/user/").concat(u, "/time?").concat(m, "=").concat(e.targetId, "&delTime=").concat(e.beforeTimeStamp, "&&resource=").concat(this.clientResource), v = { url: T, dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" } }, L.debug("Call removeHistoryMessages", e), [4, re.call(this, v)]) : (o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(o)]);
                case 1:
                  return D.sent(), [2];
              }
            });
          });
        }
        function lf(e) {
          var r = this;
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          if (e != null && e.pageSize && typeof e.pageSize != "number") throw Error("Invalid parameter pageSize: ".concat(e.pageSize));
          if (e != null && e.cursor && typeof e.cursor != "string") throw Error("Invalid parameter cursor: ".concat(e.cursor));
          var a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (e == null ? void 0 : e.pageSize) || 20, cursor: (e == null ? void 0 : e.cursor) || "", need_mark: !0 }, headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" } };
          return L.debug("Call getServerConversations", e), new Promise(function(p, T) {
            re.call(r, m, h.GET_SESSION_LIST).then(function(v) {
              return pt(r, void 0, void 0, function() {
                var D, H = this;
                return dt(this, function(k) {
                  switch (k.label) {
                    case 0:
                      return D = Li.call(this, v), this._localCache ? [4, Promise.all(D.data.conversations.map(function(w) {
                        return pt(H, void 0, void 0, function() {
                          var F, V, ue = this;
                          return dt(this, function(pe) {
                            return (V = (F = this._localCache) === null || F === void 0 ? void 0 : F.getInstance()) === null || V === void 0 || V.storeMessage(w.lastMessage, qe.SUCCESS, !0).then(function() {
                              var le, ge;
                              (ge = (le = ue._localCache) === null || le === void 0 ? void 0 : le.getInstance()) === null || ge === void 0 || ge.updateLocalConversation(Yr({ conversationId: w.conversationId, conversationType: w.conversationType }), { unReadCount: w.unReadCount });
                            }), [2];
                          });
                        });
                      }))] : [3, 2];
                    case 1:
                      return k.sent(), p(D), [2];
                    case 2:
                      return p(D), [2];
                  }
                });
              });
            }).catch(function(v) {
              T(v);
            });
          });
        }
        function Li(e) {
          var r = this, o = e.data, a = o.cursor, s = o.channel_infos, d = [];
          s == null || s.forEach(function(m) {
            var p = null;
            m != null && m.meta && JSON.stringify(m.meta) !== "{}" && (m.meta.payload = JSON.parse(m.meta.payload), (p = dr.call(r, m.meta)).type !== "delivery" && p.type !== "read" && p.type !== "channel" && (p.chatType = Bt[p.chatType]));
            var T = { conversationId: m.session_to, conversationType: m.session_type === "chat" ? "singleChat" : "groupChat", isPinned: m.is_top, pinnedTime: m.is_top ? m.update_top_status_time : 0, unReadCount: m.unread_num, lastMessage: p };
            m.marks && (T.marks = m.marks.map(function(v) {
              return Ln[v];
            })), d.push(T);
          });
          var u = { conversations: d, cursor: a || "" };
          return { type: e.type, data: u };
        }
        function pf(e) {
          var r = this;
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          if (e != null && e.pageSize && typeof e.pageSize != "number") throw Error("Invalid parameter pageSize: ".concat(e.pageSize));
          if (e != null && e.cursor && typeof e.cursor != "string") throw Error("Invalid parameter cursor: ".concat(e.cursor));
          var a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (e == null ? void 0 : e.pageSize) || 20, cursor: (e == null ? void 0 : e.cursor) || "", is_top: !0, need_mark: !0 }, headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" } };
          return L.debug("Call getServerPinnedConversations", e), re.call(this, m, h.GET_SESSION_LIST).then(function(p) {
            return Li.call(r, p);
          });
        }
        function df(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T, v, D, H, k, w;
            return dt(this, function(F) {
              if (!ae.call(this)) return r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)];
              if (o = e.conversationId, a = e.conversationType, s = e.isPinned, d = a === "singleChat" ? "chat" : "groupChat", typeof o != "string" || o === "") throw Error("Invalid parameter conversationId: ".concat(o));
              if (!["singleChat", "groupChat"].includes(a)) throw Error("Invalid parameter conversationType: ".concat(a));
              if (typeof s != "boolean") throw Error("Invalid parameter isPinned: ".concat(s));
              return u = this.context, m = u.orgName, p = u.appName, T = u.accessToken, v = u.jid, D = { type: d, to: o }, H = s ? "" : "type=".concat(d, "&to=").concat(o, "&"), k = "".concat(this.apiUrl, "/").concat(m, "/").concat(p, "/sdk/user/").concat(this.user, "/user_channel/top?").concat(H, "resource=").concat(v.clientResource), w = { url: k, type: s ? "POST" : "DELETE", dataType: "json", headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" } }, s && (w.data = JSON.stringify(D)), L.debug("Call pinConversation", e), [2, re.call(this, w, h.PIN_CONVERSATION).then(function(V) {
                var ue = V.type, pe = V.data;
                return { type: ue, data: { isPinned: pe.is_top || !1, pinnedTime: pe.is_top ? pe.update_top_status_time : 0 } };
              })];
            });
          });
        }
        function ff(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T, v;
            return dt(this, function(D) {
              switch (D.label) {
                case 0:
                  if (r = e.userId, o = e.remark, !ae.call(this)) return a = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(a)];
                  if (typeof r != "string" || r === "") throw Error('Invalid parameter: "userId"');
                  if (typeof o != "string") throw Error('Invalid parameter: "remark"');
                  return L.debug("Call setContactRemark", e), s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = s.jid, T = "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/users/").concat(this.context.userId, "/contacts/users/").concat(r, "?resource=").concat(p.clientResource), v = { url: T, type: "PUT", data: JSON.stringify({ remark: o }), dataType: "json", headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" } }, [4, re.call(this, v, h.ROSTER_SET_CONTACT_REMARK)];
                case 1:
                  return D.sent(), [2];
              }
            });
          });
        }
        function hf() {
          if (!ae.call(this)) {
            var e = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(e);
          }
          var r = this.context, o = r.orgName, a = r.appName, s = r.accessToken, d = { url: "".concat(this.apiUrl, "/").concat(o, "/").concat(a, "/users/").concat(this.user, "/contacts/users?needReturnRemark=true"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + s } };
          return L.debug("Call getAllContacts"), re.call(this, d, h.ROSTER_GET_ALL_CONTACTS_REMARKS).then(function(u) {
            var m = ((u == null ? void 0 : u.entities) || []).map(function(p) {
              return { userId: p.username, remark: p.remark };
            });
            return { type: u.type, data: m };
          });
        }
        function mf(e) {
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          L.debug("Call getContactsWithCursor", e);
          var o = e || {}, a = o.pageSize, s = a === void 0 ? 20 : a, d = o.cursor, u = d === void 0 ? "" : d;
          if (s && typeof s != "number") throw Error("Invalid parameter pageSize: ".concat(e.pageSize));
          var m = this.context, p = m.orgName, T = m.appName, v = m.accessToken, D = { url: "".concat(this.apiUrl, "/").concat(p, "/").concat(T, "/users/").concat(this.user, "/contacts?needReturnRemark=true&limit=").concat(s, "&cursor=").concat(u), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + v } };
          return re.call(this, D, h.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE).then(function(H) {
            var k, w, F = ((k = H == null ? void 0 : H.data) === null || k === void 0 ? void 0 : k.contacts) || [], V = ((w = H == null ? void 0 : H.data) === null || w === void 0 ? void 0 : w.cursor) || "", ue = F.map(function(pe) {
              return { userId: pe.username, remark: pe.remark };
            });
            return { type: H.type, data: { cursor: V, contacts: ue } };
          });
        }
        function sc(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T, v, D, H, k, w, F;
            return dt(this, function(V) {
              switch (V.label) {
                case 0:
                  if (!ae.call(this)) return r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)];
                  if (L.debug("Call markConversation", e), a = (o = e || {}).conversations, s = a === void 0 ? [] : a, d = o.mark, u = o.isMarked, !Array.isArray(s)) throw Error("Invalid parameter conversations");
                  if (m = s.map(function(ue) {
                    if (!ue.conversationId || !["singleChat", "groupChat"].includes(ue.conversationType)) throw Error("Invalid parameter conversations");
                    return { to: ue.conversationId, type: Pi[ue.conversationType] };
                  }), typeof u != "boolean") throw Error("Invalid parameter isMarked: ".concat(u));
                  if (typeof d != "number") throw Error("Invalid parameter mark: ".concat(d));
                  return p = this.context, T = p.orgName, v = p.appName, D = p.accessToken, H = p.userId, k = p.jid, w = { mark: Ln[d], targets: m }, F = { url: "".concat(this.apiUrl, "/").concat(T, "/").concat(v, "/sdk/user/").concat(H, "/user_channels/mark?resource=").concat(k.clientResource), dataType: "json", data: JSON.stringify(w), type: u ? "Post" : "Delete", headers: { Authorization: "Bearer " + D } }, [4, re.call(this, F, h.MARK_CONVERSATION).then(function(ue) {
                    var pe, le = ((pe = ue.data) === null || pe === void 0 ? void 0 : pe.ignore) || [];
                    le && Array.isArray(le) && le.length > 0 && L.debug("markConversation has ignored conversations", le.map(function(ge) {
                      return { conversationId: ge.to, conversationType: Bt[ge.type] };
                    }));
                  })];
                case 1:
                  return V.sent(), [2];
              }
            });
          });
        }
        function vf(e) {
          return pt(this, void 0, void 0, function() {
            var r, o;
            return dt(this, function(a) {
              return L.debug("Call addConversationMark", e), r = e.conversations, o = e.mark, [2, sc.call(this, { conversations: r, mark: o, isMarked: !0 })];
            });
          });
        }
        function gf(e) {
          return pt(this, void 0, void 0, function() {
            var r, o;
            return dt(this, function(a) {
              return L.debug("Call removeConversationMark", e), r = e.conversations, o = e.mark, [2, sc.call(this, { conversations: r, mark: o, isMarked: !1 })];
            });
          });
        }
        function Ef(e) {
          var r, o, a = this;
          if (!ae.call(this)) {
            var s = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(s);
          }
          if (L.debug("Call getServerConversationsByFilter", e), (e == null ? void 0 : e.pageSize) && typeof e.pageSize != "number") throw Error("Invalid parameter pageSize: ".concat(e.pageSize));
          if (e != null && e.cursor && typeof e.cursor != "string") throw Error("Invalid parameter cursor: ".concat(e.cursor));
          if (typeof ((r = e == null ? void 0 : e.filter) === null || r === void 0 ? void 0 : r.mark) != "number") throw Error("Invalid parameter mark: ".concat((o = e == null ? void 0 : e.filter) === null || o === void 0 ? void 0 : o.mark));
          var d = this.context, u = d.orgName, m = d.appName, p = d.accessToken, T = "".concat(this.apiUrl, "/").concat(u, "/").concat(m, "/sdk/user/").concat(this.user, "/user_channels/mark/search?"), v = e.pageSize, D = e.cursor, H = ((e == null ? void 0 : e.filter) || {}).mark, k = { url: T, type: "GET", dataType: "json", data: { limit: v || 10, cursor: D || "", need_mark: !0, mark: Ln[H] }, headers: { Authorization: "Bearer " + p, "Content-Type": "application/json" } };
          return re.call(this, k, h.GET_SESSION_LIST).then(function(w) {
            return Li.call(a, w);
          });
        }
        function yf() {
          if (!ae.call(this)) {
            var e = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(e);
          }
          L.debug("Call getSelfIdsOnOtherPlatform");
          var r = this.context, o = r.orgName, a = r.appName, s = r.accessToken, d = r.userId, u = r.jid, m = { url: "".concat(this.apiUrl, "/").concat(o, "/").concat(a, "/users/").concat(d, "/resources"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + s, "Content-Type": "application/json" } };
          return re.call(this, m, h.USER_LOGGEDIN_OTHER_PLATFORM).then(function(p) {
            var T, v = (T = p.data) === null || T === void 0 ? void 0 : T.filter(function(H) {
              return H.res !== u.clientResource;
            }), D = v == null ? void 0 : v.map(function(H) {
              return "".concat(d, "/").concat(H.res);
            });
            return { type: p.type, data: D };
          });
        }
        function _f() {
          var e, r, o, a, s, d;
          return pt(this, void 0, void 0, function() {
            var u, m, p, T, v, D, H, k, w;
            return dt(this, function(F) {
              switch (F.label) {
                case 0:
                  return ae.call(this) ? (L.debug("Call deleteAllMessagesAndConversations"), m = this.context, p = m.orgName, T = m.appName, v = m.accessToken, D = m.userId, H = m.jid, k = "".concat(this.apiUrl, "/").concat(p, "/").concat(T, "/sdk/message/roaming/user/").concat(D, "/delete/all?resource=").concat(H.clientResource), w = { url: k, type: "POST", dataType: "json", headers: { Authorization: "Bearer " + v, "Content-Type": "application/json" } }, [4, re.call(this, w, h.REST_DELETE_MESSAGES_CONVERSATIONS)]) : (u = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(u)]);
                case 1:
                  return F.sent(), (r = (e = this._localCache) === null || e === void 0 ? void 0 : e.getInstance()) === null || r === void 0 || r.clearConversationMap(), [4, (a = (o = this._localCache) === null || o === void 0 ? void 0 : o.getInstance()) === null || a === void 0 ? void 0 : a.clearStoreData("conversationList")];
                case 2:
                  return F.sent(), [4, (d = (s = this._localCache) === null || s === void 0 ? void 0 : s.getInstance()) === null || d === void 0 ? void 0 : d.clearStoreData("message")];
                case 3:
                  return F.sent(), [2];
              }
            });
          });
        }
        function cc(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T, v, D, H, k, w, F;
            return dt(this, function(V) {
              switch (V.label) {
                case 0:
                  if (!ae.call(this)) return r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)];
                  if (L.debug("Call setMessagePinStatus", e), a = (o = e || {}).conversationId, s = a === void 0 ? "" : a, d = o.conversationType, u = o.messageId, m = o.isPinned, typeof s != "string" || s === "") throw Error("Invalid parameter conversationId");
                  if (typeof u != "string" || u === "") throw Error("Invalid parameter messageId");
                  if (typeof m != "boolean") throw Error("Invalid parameter isPinned");
                  return p = this.context, T = p.orgName, v = p.appName, D = p.accessToken, H = p.userId, k = p.jid, w = { to: s, type: Pi[d], pin_msg_id: u }, F = { url: "".concat(this.apiUrl, "/").concat(T, "/").concat(v, "/sdk/user/").concat(H, "/user_channel/pin?resource=").concat(k.clientResource), dataType: "json", data: JSON.stringify(w), type: m ? "Post" : "Delete", headers: { Authorization: "Bearer " + D } }, [4, re.call(this, F, h.REST_PIN_MESSAGE)];
                case 1:
                  return V.sent(), [2];
              }
            });
          });
        }
        function Tf(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s;
            return dt(this, function(d) {
              return L.debug("Call pinMessage", e), o = (r = e || {}).conversationType, a = r.conversationId, s = r.messageId, [2, cc.call(this, { conversationId: a, conversationType: o, messageId: s, isPinned: !0 })];
            });
          });
        }
        function Of(e) {
          return pt(this, void 0, void 0, function() {
            var r, o, a, s;
            return dt(this, function(d) {
              return L.debug("Call unpinMessage", e), o = (r = e || {}).conversationType, a = r.conversationId, s = r.messageId, [2, cc.call(this, { conversationId: a, conversationType: o, messageId: s, isPinned: !1 })];
            });
          });
        }
        function Rf(e) {
          var r = this;
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          L.debug("Call getServerPinnedMessages", e);
          var a = e.conversationId, s = e.conversationType, d = e.pageSize, u = e.cursor;
          if (typeof a != "string" || a === "") throw Error("Invalid parameter conversationId");
          if (d && typeof d != "number") throw Error("Invalid parameter pageSize: ".concat(d));
          if (u && typeof u != "string") throw Error("Invalid parameter cursor: ".concat(u));
          var m = this.context, p = m.orgName, T = m.appName, v = m.accessToken, D = { url: "".concat(this.apiUrl, "/").concat(p, "/").concat(T, "/sdk/user/").concat(this.user, "/user_channel/pin"), type: "GET", dataType: "json", data: { to: a, type: Pi[s], limit: d || 10, cursor: u || "" }, headers: { Authorization: "Bearer " + v, "Content-Type": "application/json" } };
          return re.call(this, D, h.GET_SESSION_LIST).then(function(H) {
            return { type: 0, data: { list: H.data.msg_infos.map(function(k) {
              k.message.payload = JSON.parse(k.message.payload);
              var w = k.message, F = k.pin_opt_at, V = k.pin_operator;
              return { message: dr.call(r, w, { formatChatType: !0 }), pinTime: F, operatorId: V };
            }), cursor: H.data.cursor || "" } };
          });
        }
        var If = function(e, r, o, a) {
          return new (o || (o = Promise))(function(s, d) {
            function u(T) {
              try {
                p(a.next(T));
              } catch (v) {
                d(v);
              }
            }
            function m(T) {
              try {
                p(a.throw(T));
              } catch (v) {
                d(v);
              }
            }
            function p(T) {
              var v;
              T.done ? s(T.value) : (v = T.value, v instanceof o ? v : new o(function(D) {
                D(v);
              })).then(u, m);
            }
            p((a = a.apply(e, [])).next());
          });
        }, Sf = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        };
        function uc(e) {
          if (!e || !e.data) throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups?resource=").concat(u.clientResource), dataType: "json", type: "POST", data: JSON.stringify({ owner: this.user, groupname: e.data.groupname, desc: e.data.desc, members: e.data.members, public: e.data.public, approval: e.data.approval, allowinvites: e.data.allowinvites, invite_need_confirm: e.data.inviteNeedConfirm, maxusers: e.data.maxusers, custom: e.data.ext }), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: function(p) {
            e.success && e.success(p);
          }, error: e.error };
          return L.debug("Call createGroup:", e), re.call(this, m, h.CREATE_GROUP);
        }
        var Cf = uc;
        function lc(e) {
          var r;
          if (typeof e.groupId != "string" || e.groupId === "") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          var a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = a.jid, p = { entities: [(r = {}, r["notification_ignore_" + e.groupId] = !0, r)] }, T = { type: "PUT", url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(this.user, "?resource=").concat(m.clientResource), data: JSON.stringify(p), dataType: "json", headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call blockGroupMessages", e), re.call(this, T, h.BLOCK_GROUP);
        }
        var Nf = lc;
        function pc(e) {
          if (typeof e.limit != "number") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { limit: e.limit, cursor: e.cursor };
          e.cursor || delete u.cursor;
          var m = { url: this.apiUrl + "/" + a + "/" + s + "/publicchatgroups", type: "GET", dataType: "json", data: u, headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call listGroups", e), re.call(this, m, h.LIST_GROUP);
        }
        var Af = pc;
        function bf(e) {
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: this.apiUrl + "/" + a + "/" + s + "/users/" + this.user + "/joined_chatgroups", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e && (e == null ? void 0 : e.success), error: e && (e == null ? void 0 : e.error) };
          return L.debug("Call getJoinedGroups", e), re.call(this, u, h.GET_USER_GROUP);
        }
        function Mf(e) {
          if (typeof e.pageNum != "number" || typeof e.pageSize != "number") throw Error('Invalid parameter: "pageNum or pageSize"');
          if (e.pageNum < 0 || e.pageSize < 0) throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.needAffiliations || e.needRole ? "/chatgroups/user/".concat(this.user, "?pagenum=").concat(e.pageNum, "&pagesize=").concat(e.pageSize, "&needAffiliations=").concat(e.needAffiliations, "&needRole=").concat(e.needRole) : "/users/".concat(this.user, "/joined_chatgroups?pagenum=").concat(e.pageNum, "&pagesize=").concat(e.pageSize), m = { url: this.apiUrl + "/" + a + "/" + s + u, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e && (e == null ? void 0 : e.success), error: e && (e == null ? void 0 : e.error) };
          return L.debug("Call getGroup", e), re.call(this, m, h.GET_USER_GROUP).then(function(p) {
            var T = p.uri, v = p.entities, D = [];
            return T.includes("joined_chatgroups") || (v.forEach(function(H) {
              var k = { affiliationsCount: H.affiliations_count, groupName: H.name, groupId: H.groupId, role: H.permission, disabled: H.disabled, approval: H.membersonly, allowInvites: H.allowinvites, description: H.description, maxUsers: H.maxusers, public: H.public };
              D.push(k);
            }), p.entities = D), p;
          });
        }
        function dc(e) {
          if (typeof e.groupId != "string" || typeof e.newOwner != "string") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = { newowner: e.newOwner }, a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = a.jid, p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/chatgroups/").concat(e.groupId, "?resource=").concat(m.clientResource), type: "PUT", dataType: "json", headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, data: JSON.stringify(o), success: e.success, error: e.error };
          return L.debug("Call changeOwner", e), re.call(this, p, h.CHANGE_OWNER);
        }
        var wf = dc;
        function Uf(e) {
          if (typeof e.groupId != "string" && !Array.isArray(e.groupId)) throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: this.apiUrl + "/" + a + "/" + s + "/chatgroups/" + e.groupId + "?joined_time=true", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getGroupInfo", e), re.call(this, u, h.GET_GROUP_INFO);
        }
        function Pf(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { groupname: e.groupName, description: e.description, custom: e.ext }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "?resource=").concat(u.clientResource), type: "PUT", data: JSON.stringify(p), dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call modifyGroup", e), re.call(this, T, h.MODIFY_GROUP);
        }
        function fc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (isNaN(e.pageNum) || e.pageNum <= 0) throw Error('The parameter "pageNum" should be a positive number');
          if (isNaN(e.pageSize) || e.pageSize <= 0) throw Error('The parameter "pageSize" should be a positive number');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = { pagenum: e.pageNum, pagesize: e.pageSize }, a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = { url: this.apiUrl + "/" + s + "/" + d + "/chatgroups/" + e.groupId + "/users", dataType: "json", type: "GET", data: o, headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call listGroupMember", e), re.call(this, m, h.LIST_GROUP_MEMBER);
        }
        var kf = fc;
        function Df(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.groupId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatgroups/" + u + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getGroupAdmin", e), re.call(this, m, h.GET_GROUP_ADMIN);
        }
        function hc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { newadmin: e.username }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/admin?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call setGroupAdmin", e), re.call(this, T, h.SET_GROUP_ADMIN);
        }
        var Lf = hc;
        function mc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/admin/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call removeAdmin", e), re.call(this, T, h.REMOVE_GROUP_ADMIN);
        }
        var xf = mc;
        function vc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "?version=v3&resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call destroyGroup", e), re.call(this, p, h.DISSOLVE_GROUP);
        }
        var Gf = vc;
        function gc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/quit?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call quitGroup", e), re.call(this, p, h.QUIT_GROUP);
        }
        var jf = gc;
        function Ec(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e.users)) throw Error('Invalid parameter: "users"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = e.groupId, a = { usernames: e.users }, s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = s.jid, T = { url: "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/chatgroups/").concat(o, "/invite?resource=").concat(p.clientResource), type: "POST", data: JSON.stringify(a), dataType: "json", headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call inviteUsersToGroup", e), re.call(this, T, h.INVITE_TO_GROUP);
        }
        var Bf = Ec;
        function Hf(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(e.groupId, "/apply?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ message: e.message || "" }), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call joinGroup", e), re.call(this, m, h.JOIN_GROUP);
        }
        function yc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.applicant != "string" || e.applicant === "") throw Error('Invalid parameter: "applicant"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { applicant: e.applicant, verifyResult: !0, reason: "no clue" }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/apply_verify?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call agreeJoinGroup", e), re.call(this, T, h.AGREE_JOIN_GROUP);
        }
        var Ff = yc;
        function _c(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.applicant != "string" || e.applicant === "") throw Error('Invalid parameter: "applicant"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { applicant: e.applicant, verifyResult: !1, reason: e.reason || "" }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/apply_verify?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call rejectGroupJoinRequest", e), re.call(this, T, h.REJECT_JOIN_GROUP);
        }
        var Wf = _c;
        function Tc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.invitee != "string" || e.invitee === "") throw Error('Invalid parameter: "invitee"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { invitee: e.invitee, verifyResult: !0 }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/invite_verify?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call acceptGroupInvite", e), re.call(this, T, h.AGREE_INVITE_GROUP);
        }
        var Vf = Tc;
        function Oc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.invitee != "string" || e.invitee === "") throw Error('Invalid parameter: "invitee"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { invitee: e.invitee, verifyResult: !1 }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/invite_verify?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call rejectGroupInvite", e), re.call(this, T, h.REJECT_INVITE_GROUP);
        }
        var Kf = Oc;
        function Rc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = e.groupId, a = e.username, s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = s.jid, T = { url: "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/chatgroups/").concat(o, "/users/").concat(a, "?resource=").concat(p.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call removeGroupMember", e), re.call(this, T, h.REMOVE_GROUP_MEMBER);
        }
        var zf = Rc;
        function Ic(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e.users)) throw Error('Invalid parameter: "users"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = e.users.join(","), T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/users/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call removeGroupMembers", e), re.call(this, T, h.MULTI_REMOVE_GROUP_MEMBER);
        }
        var $f = Ic;
        function Sc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!(Array.isArray(e.username) || typeof e.username == "string" && e.username !== "")) throw Error('Invalid parameter: "username"');
          if (typeof e.muteDuration != "number") throw Error('Invalid parameter: "muteDuration"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { usernames: typeof e.username == "string" ? [e.username] : e.username, mute_duration: e.muteDuration }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/mute?resource=").concat(u.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, data: JSON.stringify(p), success: e.success, error: e.error };
          return L.debug("Call muteGroupMember", e), re.call(this, T, h.MUTE_GROUP_MEMBER);
        }
        var qf = Sc;
        function Cc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!(Array.isArray(e.username) || typeof e.username == "string" && e.username !== "")) throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/mute/").concat(p, "?resource=").concat(u.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call unmuteGroupMember", e), re.call(this, T, h.UNMUTE_GROUP_MEMBER);
        }
        var Jf = Cc;
        function xi(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.groupId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatgroups/" + u + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getGroupMuteList", e), re.call(this, m, h.GET_GROUP_MUTE_LIST);
        }
        var Xf = xi, Yf = xi;
        function Nc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/blocks/users/").concat(p, "?resource=").concat(u.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call blockGroupMember", e), re.call(this, T, h.BLOCK_GROUP_MEMBER);
        }
        var Qf = Nc;
        function Ac(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { usernames: e.usernames }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/blocks/users?resource=").concat(u.clientResource), data: JSON.stringify(p), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call blockGroupMembers", e), re.call(this, T, h.BLOCK_GROUP_MEMBERS);
        }
        var Zf = Ac;
        function bc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/blocks/users/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call unblockGroupMember", e), re.call(this, T, h.UNBLOCK_GROUP_MEMBER);
        }
        var eh = bc;
        function Mc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = e.usernames.join(","), T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/blocks/users/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call unblockGroupMembers", e), re.call(this, T, h.UNBLOCK_GROUP_MEMBERS);
        }
        var th = Mc;
        function Gi(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.groupId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatgroups/" + u + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getGroupBlacklist", e), re.call(this, m, h.GET_GROUP_BLACK_LIST);
        }
        var rh = Gi, nh = Gi;
        function oh(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/ban?resource=").concat(u.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call disableSendGroupMsg", e), re.call(this, p, h.DISABLED_SEND_GROUP_MSG);
        }
        function ih(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/ban?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call enableSendGroupMsg", e), re.call(this, p, h.ENABLE_SEND_GROUP_MSG);
        }
        function wc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e.users)) throw Error('Invalid parameter: "users"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { usernames: e.users }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/white/users?resource=").concat(u.clientResource), type: "POST", data: JSON.stringify(p), dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call addUsersToGroupWhitelist", e), re.call(this, T, h.ADD_USERS_TO_GROUP_WHITE);
        }
        var ah = wc;
        function ji(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.userName != "string" || e.userName === "") throw Error('Invalid parameter: "userName"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/white/users/").concat(e.userName, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call removeGroupAllowlistMember", e), re.call(this, p, h.REMOVE_GROUP_WHITE_MEMBER);
        }
        var sh = ji, ch = ji;
        function Uc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.groupId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatgroups/" + u + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getGroupAllowlist", e), re.call(this, m, h.GET_GROUP_WHITE_LIST);
        }
        var uh = Uc;
        function Bi(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.userName != "string" || e.userName === "") throw Error('Invalid parameter: "userName"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.groupId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatgroups/" + u + "/white/users/" + e.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call isInGroupAllowlist", e), re.call(this, m, h.IS_IN_GROUP_WHITE_LIST);
        }
        var lh = Bi, ph = Bi;
        function dh(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.userId, m = { url: this.apiUrl + "/" + a + "/" + s + "/sdk/chatgroups/" + e.groupId + "/mute/" + u, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d } };
          return L.debug("Call isInGroupMutelist", e), re.call(this, m).then(function(p) {
            return { type: p.type, data: p.data };
          });
        }
        function fh(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.msgId != "string" || e.msgId === "") throw Error('Invalid parameter: "msgId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: this.apiUrl + "/" + a + "/" + s + "/chatgroups/" + e.groupId + "/acks/" + e.msgId, dataType: "json", type: "GET", data: { limit: 500, key: void 0 }, headers: { Authorization: "Bearer " + d }, success: e.success, error: e.error };
          return L.debug("Call getGroupMsgReadUser", e), re.call(this, u, h.GET_GROUP_MSG_READ_USER);
        }
        function hh(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.groupId, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(u, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call fetchGroupAnnouncement", e), re.call(this, m, h.GET_GROUP_ANN);
        }
        function mh(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.announcement != "string") throw Error('Invalid parameter: "announcement"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = { announcement: e.announcement }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/announcement?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call updateGroupAnnouncement", e), re.call(this, T, h.UPDATE_GROUP_ANN);
        }
        function vh(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.file != "object") throw Error('Invalid parameter: "file"');
          if (ae.call(this)) {
            var r = this.context, o = r.orgName, a = r.appName, s = r.accessToken, d = r.jid, u = e.groupId;
            Be.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(o, "/").concat(a, "/chatgroups/").concat(u, "/share_files?resource=").concat(d.clientResource), onFileUploadProgress: e.onFileUploadProgress, onFileUploadComplete: e.onFileUploadComplete, onFileUploadError: e.onFileUploadError, onFileUploadCanceled: e.onFileUploadCanceled, accessToken: s, apiUrl: this.apiUrl, file: e.file, appKey: this.context.appKey }, h.UPLOAD_GROUP_FILE), L.debug("Call uploadGroupSharedFile", e);
          }
        }
        function gh(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.fileId != "string" || e.fileId === "") throw Error('Invalid parameter: "file"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.groupId, p = e.fileId, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(m, "/share_files/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call deleteGroupSharedFile", e), re.call(this, T, h.DELETE_GROUP_FILE);
        }
        function Pc(e) {
          if (typeof e.groupId != "string" || e.groupId === "") throw Error('Invalid parameter: "groupId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.pageNum || 1, m = e.pageSize || 10, p = e.groupId, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatgroups/").concat(p, "/share_files?pagenum=").concat(u, "&pagesize=").concat(m), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getGroupSharedFilelist", e), re.call(this, T, h.GET_GROUP_FILE_LIST);
        }
        var Eh = Pc;
        function yh(e) {
          var r = this.context, o = r.orgName, a = r.appName, s = r.accessToken, d = this.apiUrl, u = e.groupId, m = e.fileId;
          ke.call(this, { url: "".concat(d, "/").concat(o, "/").concat(a, "/chatgroups/").concat(u, "/share_files/").concat(m), onFileDownloadComplete: e.onFileDownloadComplete, onFileDownloadError: e.onFileDownloadError, accessToken: s, id: m, secret: e.secret }, h.DOWN_GROUP_FILE), L.debug("Call downloadGroupSharedFile", e);
        }
        function _h(e) {
          return If(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T, v, D;
            return Sf(this, function(H) {
              switch (H.label) {
                case 0:
                  if (r = e.groupId, o = e.userId, a = e.memberAttributes, typeof r != "string" || r === "") throw Error('Invalid parameter: "groupId"');
                  if (typeof o != "string" || o === "") throw Error('Invalid parameter: "userId"');
                  if (typeof a != "object") throw Error('Invalid parameter: "memberAttributes"');
                  return ae.call(this) ? (d = this.context, u = d.orgName, m = d.appName, p = d.accessToken, T = d.jid, v = { metaData: a }, D = { url: "".concat(this.apiUrl, "/").concat(u, "/").concat(m, "/sdk/metadata/chatgroup/").concat(r, "/user/").concat(o, "?resource=").concat(T.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(v), headers: { Authorization: "Bearer " + p, "Content-Type": "application/json" } }, L.debug("Call setGroupMemberAttributes", e), [4, re.call(this, D, h.SET_GROUP_MEMBER_ATTRS)]) : (s = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(s)]);
                case 1:
                  return H.sent(), [2];
              }
            });
          });
        }
        function Th(e) {
          var r = e.groupId, o = e.userId;
          return kc.call(this, { groupId: r, userIds: [o] }).then(function(a) {
            var s;
            return { type: a.type, data: (s = a.data) === null || s === void 0 ? void 0 : s[o] };
          });
        }
        function kc(e) {
          var r = e.groupId, o = e.userIds, a = e.keys, s = a === void 0 ? [] : a;
          if (typeof r != "string" || r === "") throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(o) || (o == null ? void 0 : o.length) <= 0) throw Error('Invalid parameter: "userIds"');
          if (!Array.isArray(s)) throw Error('Invalid parameter: "keys"');
          if (!ae.call(this)) {
            var d = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(d);
          }
          var u = this.context, m = u.orgName, p = u.appName, T = u.accessToken, v = { targets: o, properties: s }, D = { url: "".concat(this.apiUrl, "/").concat(m, "/").concat(p, "/sdk/metadata/chatgroup/").concat(r, "/get"), type: "POST", dataType: "json", data: JSON.stringify(v), headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" } };
          return L.debug("Call getGroupMembersAttributes", e), re.call(this, D, h.GET_GROUP_MEMBER_ATTR).then(function(H) {
            return { type: H.type, data: (H == null ? void 0 : H.data) || {} };
          });
        }
        function Oh(e) {
          var r = this;
          if (typeof e.pagenum != "number" || typeof e.pagesize != "number") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          var a = { pagenum: e.pagenum || 1, pagesize: e.pagesize || 20 }, s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = { url: this.apiUrl + "/" + d + "/" + u + "/chatrooms", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + m }, data: a, success: function(T) {
            typeof e.success == "function" && e.success(T);
          }, error: function(T) {
            T.error && T.error_description && r.onError && r.onError({ type: l.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR, message: T.error_description, data: T }), typeof e.error == "function" && e.error(T);
          } };
          return L.debug("Call getChatRooms", e), re.call(this, p, h.GET_CHATROOM_LIST);
        }
        function Rh(e) {
          if (typeof e.name != "string") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = { name: e.name, description: e.description, maxusers: e.maxusers, owner: this.user, members: e.members }, a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = a.jid, p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/chatrooms?resource=").concat(m.clientResource), dataType: "json", type: "POST", data: JSON.stringify(o), headers: { Authorization: "Bearer " + (e.token || u), "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call createChatRoom", e), re.call(this, p, h.CREATE_CHATROOM);
        }
        function Ih(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(e.chatRoomId, "?resource=").concat(u.clientResource, "&version=v3"), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + (e.token || d) }, success: e.success, error: e.error };
          return L.debug("Call destroyChatRoom", e), re.call(this, m, h.DESTROY_CHATROOM);
        }
        function Sh(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: this.apiUrl + "/" + a + "/" + s + "/chatrooms/" + e.chatRoomId, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getChatRoomDetails", e), re.call(this, u, h.GET_CHATROOM_DETAIL);
        }
        function Ch(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = { groupname: e.chatRoomName, description: e.description, maxusers: e.maxusers }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "?resource=").concat(u.clientResource), type: "PUT", data: JSON.stringify(p), dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call modifyChatRoom", e), re.call(this, T, h.MODIFY_CHATROOM);
        }
        function Dc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "" || typeof e.username != "string") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/users/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call removeChatRoomMember", e), re.call(this, T, h.REMOVE_CHATROOM_MEMBER);
        }
        var Nh = Dc;
        function Lc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "" || !Array.isArray(e.users)) throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = e.chatRoomId, a = e.users.join(","), s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = s.jid, T = { url: "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/chatrooms/").concat(o, "/users/").concat(a, "?resource=").concat(p.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call removeChatRoomMembers", e), re.call(this, T, h.MULTI_REMOVE_CHATROOM_MEMBER);
        }
        var Ah = Lc;
        function bh(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "" || !Array.isArray(e.users)) throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = e.chatRoomId, a = { usernames: e.users }, s = this.context, d = s.orgName, u = s.appName, m = s.accessToken, p = s.jid, T = { url: "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/chatrooms/").concat(o, "/users?resource=").concat(p.clientResource), type: "POST", data: JSON.stringify(a), dataType: "json", headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call addUsersToChatRoom", e), re.call(this, T, h.ADD_USERS_TO_CHATROOM);
        }
        function Mh(e) {
          var r = e.roomId, o = e.message, a = o === void 0 ? "" : o, s = e.ext, d = s === void 0 ? "" : s, u = e.leaveOtherRooms, m = u !== void 0 && u, p = e.success, T = e.error;
          if (typeof r != "string" || r === "") throw Error("Invalid parameter roomId");
          if (typeof d != "string") throw Error("Invalid parameter ext");
          if (typeof m != "boolean") throw Error("Invalid parameter leaveOtherRooms");
          if (!ae.call(this)) {
            var v = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(v);
          }
          return L.debug("Call joinChatRoom", e), this.logOut ? Promise.reject({ type: l.WEBIM_CONNECTION_CLOSED, message: "not login" }) : this.mSync.handleChatRoom({ roomId: r, ext: d, leaveOtherRooms: m, message: a, success: p, error: T }, "join");
        }
        function xc(e) {
          if (typeof e.roomId != "string" || e.roomId === "") throw Error("Invalid parameter");
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          return L.debug("Call leaveChatRoom", e), this.logOut ? Promise.reject({ type: l.WEBIM_CONNECTION_CLOSED, message: "not login" }) : this.mSync.handleChatRoom(e, "leave");
        }
        var wh = xc;
        function Gc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (isNaN(e.pageNum) || e.pageNum <= 0) throw Error('The parameter "pageNum" should be a positive number');
          if (isNaN(e.pageSize) || e.pageSize <= 0) throw Error('The parameter "pageSize" should be a positive number');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = { pagenum: e.pageNum, pagesize: e.pageSize }, a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = { url: this.apiUrl + "/" + s + "/" + d + "/chatrooms/" + e.chatRoomId + "/users", dataType: "json", type: "GET", data: o, headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call listChatRoomMembers", e), re.call(this, m, h.LIST_CHATROOM_MEMBERS);
        }
        var Uh = Gc;
        function Ph(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.chatRoomId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatrooms/" + u + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getChatRoomAdmin", e), re.call(this, m, h.GET_CHATROOM_ADMIN);
        }
        function kh(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = { newadmin: e.username }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/admin?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call setChatRoomAdmin", e), re.call(this, T, h.SET_CHATROOM_ADMIN);
        }
        function Dh(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/admin/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call removeChatRoomAdmin", e), re.call(this, T, h.REMOVE_CHATROOM_ADMIN);
        }
        function Lh(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "groupId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (typeof e.muteDuration != "number") throw Error('Invalid parameter: "muteDuration"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = { usernames: [e.username], mute_duration: e.muteDuration }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/mute?resource=").concat(u.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, data: JSON.stringify(p), success: e.success, error: e.error };
          return L.debug("Call muteChatRoomMember", e), re.call(this, T, h.MUTE_CHATROOM_MEMBER);
        }
        function jc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/mute/").concat(p, "?resource=").concat(u.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call unmuteChatRoomMember", e), re.call(this, T, h.REMOVE_MUTE_CHATROOM_MEMBER);
        }
        var xh = jc;
        function Hi(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.chatRoomId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatrooms/" + u + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getChatRoomMutelist", e), re.call(this, m, h.GET_MUTE_CHATROOM_MEMBERS);
        }
        var Gh = Hi, jh = Hi;
        function Bc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/blocks/users/").concat(p, "?resource=").concat(u.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call blockChatRoomMember", e), re.call(this, T, h.SET_CHATROOM_MEMBER_TO_BLACK);
        }
        var Bh = Bc;
        function Hc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = { usernames: e.usernames }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/blocks/users?resource=").concat(u.clientResource), data: JSON.stringify(p), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Chat blockChatRoomMembers:", T), re.call(this, T, h.MULTI_SET_CHATROOM_MEMBER_TO_BLACK);
        }
        var Hh = Hc;
        function Fc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (typeof e.username != "string" || e.username === "") throw Error('Invalid parameter: "username"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = e.username, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/blocks/users/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call unblockChatRoomMember", e), re.call(this, T, h.REMOVE_CHATROOM_MEMBER_BLACK);
        }
        var Fh = Fc;
        function Wc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = e.usernames.join(","), T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/blocks/users/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call unblockChatRoomMembers", e), re.call(this, T, h.MULTI_REMOVE_CHATROOM_MEMBER_BLACK);
        }
        var Wh = Wc;
        function Fi(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.chatRoomId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatrooms/" + u + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getChatRoomBlocklist", e), re.call(this, m, h.GET_CHATROOM_BLOCK_MEMBERS);
        }
        var Vh = Fi, Kh = Fi;
        function zh(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/ban?resource=").concat(u.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call disableSendChatRoomMsg", e), re.call(this, p, h.DISABLED_CHATROOM_SEND_MSG);
        }
        function $h(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/ban?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call enableSendChatRoomMsg", e), re.call(this, p, h.ENABLE_CHATROOM_SEND_MSG);
        }
        function Vc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(e.users)) throw Error('Invalid parameter: "users"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = { usernames: e.users }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/white/users?resource=").concat(u.clientResource), type: "POST", data: JSON.stringify(p), dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call addUsersToChatRoomWhitelist", e), re.call(this, T, h.ADD_USERS_TO_CHATROOM);
        }
        var qh = Vc;
        function Wi(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (typeof e.userName != "string" || e.userName === "") throw Error('Invalid parameter: "userName"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.chatRoomId, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/white/users/").concat(e.userName, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call removeChatRoomAllowlistMember", e), re.call(this, p, h.REMOVE_CHATROOM_WHITE_USERS);
        }
        var Jh = Wi, Xh = Wi;
        function Kc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.chatRoomId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatrooms/" + u + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getChatRoomAllowlist", e), re.call(this, m, h.GET_CHATROOM_WHITE_USERS);
        }
        var Yh = Kc;
        function zc(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (typeof e.userName != "string" || e.userName === "") throw Error('Invalid parameter: "userName"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.chatRoomId, m = { url: this.apiUrl + "/" + a + "/" + s + "/chatrooms/" + u + "/white/users/" + e.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call isInChatRoomAllowlist", e), re.call(this, m, h.CHECK_CHATROOM_WHITE_USER);
        }
        var Qh = zc;
        function Zh(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error('Invalid parameter: "chatRoomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.userId, m = { url: this.apiUrl + "/" + a + "/" + s + "/sdk/chatrooms/" + e.chatRoomId + "/mute/" + u, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d } };
          return L.debug("Call isInChatRoomMutelist", e), re.call(this, m).then(function(p) {
            return { type: p.type, data: p.data };
          });
        }
        function em(e) {
          if (typeof e.roomId != "string" || e.roomId === "") throw Error('Invalid parameter: "roomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.roomId, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(u, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call fetchChatRoomAnnouncement", e), re.call(this, m, h.GET_CHATROOM_ANN);
        }
        function tm(e) {
          if (typeof e.roomId != "string" || e.roomId === "") throw Error('Invalid parameter: "roomId"');
          if (typeof e.announcement != "string") throw Error('Invalid parameter: "announcement"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.roomId, p = { announcement: e.announcement }, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/announcement?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call updateChatRoomAnnouncement:", e), re.call(this, T, h.UPDATE_CHATROOM_ANN);
        }
        function rm(e) {
          if (typeof e.roomId != "string" || e.roomId === "") throw Error('Invalid parameter: "roomId"');
          if (typeof e.file != "object") throw Error('Invalid parameter: "file"');
          if (ae.call(this)) {
            var r = this.context, o = r.orgName, a = r.appName, s = r.accessToken, d = r.jid, u = e.roomId;
            Be.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(o, "/").concat(a, "/chatrooms/").concat(u, "/share_files?resource=").concat(d.clientResource), onFileUploadProgress: e.onFileUploadProgress, onFileUploadComplete: e.onFileUploadComplete, onFileUploadError: e.onFileUploadError, onFileUploadCanceled: e.onFileUploadCanceled, accessToken: s, apiUrl: this.apiUrl, file: e.file, appKey: this.context.appKey }, h.UPLOAD_CHATROOM_FILE), L.debug("Call uploadChatRoomSharedFile", e);
          }
        }
        function nm(e) {
          if (typeof e.roomId != "string" || e.roomId === "") throw Error('Invalid parameter: "roomId"');
          if (typeof e.fileId != "string" || e.fileId === "") throw Error('Invalid parameter: "fileId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = e.roomId, p = e.fileId, T = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(m, "/share_files/").concat(p, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call deleteChatRoomSharedFile", e), re.call(this, T, h.DELETE_CHATROOM_FILE);
        }
        function $c(e) {
          if (typeof e.roomId != "string" || e.roomId === "") throw Error('Invalid parameter: "roomId"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = e.roomId, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/chatrooms/").concat(u, "/share_files"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json", accept: "application/json" }, success: e.success, error: e.error };
          return L.debug("Call fetchChatRoomSharedFileList", e), re.call(this, m, h.GET_CHATROOM_FILES);
        }
        var om = $c;
        function im(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error("Invalid parameter chatRoomId: " + e.chatRoomId);
          if (e.attributeKeys && !Array.isArray(e.attributeKeys)) throw Error('"Invalid parameter attributeKeys": ' + e.attributeKeys);
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = (o.jid, e.chatRoomId), m = { keys: e.attributeKeys }, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/metadata/chatroom/").concat(u), type: "POST", dataType: "json", data: JSON.stringify(m), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return L.debug("Call getChatRoomAttributes:", e), re.call(this, p, h.GET_CHATROOM_ATTR).then(function(T) {
            return { data: T.data, type: T.type };
          });
        }
        function am(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error("Invalid parameter chatRoomId: " + e.chatRoomId);
          if (typeof e.attributes != "object") throw Error("Invalid parameter attributes: " + e.attributes);
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.userId, m = e.chatRoomId, p = e.attributes, T = e.autoDelete, v = T === void 0 || T, D = e.isForced ? "/forced" : "", H = { metaData: p, autoDelete: v ? "DELETE" : "NO_DELETE" }, k = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/metadata/chatroom/").concat(m, "/user/").concat(u) + D, type: "PUT", dataType: "json", data: JSON.stringify(H), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return L.debug("Call setChatRoomAttributes:", e), re.call(this, k, h.SET_CHATROOM_ATTR).then(function(w) {
            return Xs(w);
          });
        }
        function sm(e) {
          var r;
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error("Invalid parameter chatRoomId: " + e.chatRoomId);
          if (typeof e.attributeKey != "string" || e.attributeKey === "") throw Error("Invalid parameter attributeKey: " + e.attributeKey);
          if (typeof e.attributeValue != "string" || e.attributeValue === "") throw Error("Invalid parameter attributeValue: " + e.attributeValue);
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          var a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = a.userId, p = e.chatRoomId, T = e.attributeKey, v = e.attributeValue, D = e.autoDelete, H = D === void 0 || D, k = e.isForced ? "/forced" : "", w = { metaData: (r = {}, r[T] = v, r), autoDelete: H ? "DELETE" : "NO_DELETE" }, F = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/metadata/chatroom/").concat(p, "/user/").concat(m) + k, type: "PUT", dataType: "json", data: JSON.stringify(w), headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" } };
          return L.debug("Call setChatRoomAttribute:", e), re.call(this, F, h.SET_CHATROOM_ATTR).then(function(V) {
            var ue = Ys(V);
            if (ue) throw ue;
          });
        }
        function cm(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error("Invalid parameter chatRoomId: " + e.chatRoomId);
          if (!Array.isArray(e.attributeKeys)) throw Error('"Invalid parameter attributes": ' + e.attributeKeys);
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.userId, m = e.chatRoomId, p = e.attributeKeys, T = e.isForced ? "/forced" : "", v = { keys: p }, D = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/metadata/chatroom/").concat(m, "/user/").concat(u) + T, type: "DELETE", dataType: "json", data: JSON.stringify(v), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return L.debug("Call removeChatRoomAttributes:", e), re.call(this, D, h.DELETE_CHATROOM_ATTR).then(function(H) {
            return Xs(H);
          });
        }
        function um(e) {
          if (typeof e.chatRoomId != "string" || e.chatRoomId === "") throw Error("Invalid parameter chatRoomId: " + e.chatRoomId);
          if (typeof e.attributeKey != "string" || e.attributeKey === "") throw Error('"Invalid parameter attributeKey": ' + e.attributeKey);
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.userId, m = e.chatRoomId, p = e.attributeKey, T = e.isForced ? "/forced" : "", v = { keys: [p] }, D = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/metadata/chatroom/").concat(m, "/user/").concat(u) + T, type: "DELETE", dataType: "json", data: JSON.stringify(v), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return L.debug("Call removeChatRoomAttribute:", e), re.call(this, D, h.DELETE_CHATROOM_ATTR).then(function(H) {
            var k = Ys(H);
            if (k) throw k;
          });
        }
        function lm(e) {
          var r = this, o = e || {}, a = o.pageNum, s = o.pageSize;
          if (isNaN(a) || a <= 0) throw Error("Invalid parameter pageNum:".concat(a));
          if (isNaN(s) || s <= 0) throw Error("Invalid parameter pageSize:".concat(s));
          if (!ae.call(this)) {
            var d = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(d);
          }
          var u = { pagenum: a, pagesize: s, detail: !0 }, m = this.context, p = m.orgName, T = m.appName, v = m.accessToken, D = { url: "".concat(this.apiUrl, "/").concat(p, "/").concat(T, "/users/").concat(this.user, "/joined_chatrooms"), dataType: "json", type: "GET", data: u, headers: { Authorization: "Bearer " + v, "Content-Type": "application/json" } };
          return L.debug("Call getJoinedChatRooms", e), re.call(this, D, h.GET_USER_JOINED_CHATROOM).then(function(H) {
            var k = (H.data || []).map(function(w) {
              var F = w.id, V = w.title, ue = w.owner, pe = w.created, le = w.description, ge = w.max_users;
              return { id: F, name: V, owner: ue.split("".concat(r.appKey, "_"))[1], created: pe, description: le, maxusers: ge };
            });
            return { type: H.type, data: k };
          });
        }
        var qc = function(e, r, o, a) {
          return new (o || (o = Promise))(function(s, d) {
            function u(T) {
              try {
                p(a.next(T));
              } catch (v) {
                d(v);
              }
            }
            function m(T) {
              try {
                p(a.throw(T));
              } catch (v) {
                d(v);
              }
            }
            function p(T) {
              var v;
              T.done ? s(T.value) : (v = T.value, v instanceof o ? v : new o(function(D) {
                D(v);
              })).then(u, m);
            }
            p((a = a.apply(e, [])).next());
          });
        }, Jc = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        };
        function pm(e) {
          return qc(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m, p, T;
            return Jc(this, function(v) {
              switch (v.label) {
                case 0:
                  if (typeof e.description != "string") throw Error('Invalid parameter: "description"');
                  return ae.call(this) ? (o = this.context, a = o.accessToken, s = o.orgName, d = o.appName, u = o.userId, m = this.context.jid.clientResource, p = { ext: e.description }, T = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(u, "/presence/").concat(m, "/1"), type: "POST", dataType: "json", data: JSON.stringify(p), headers: { Authorization: "Bearer " + a, "Content-Type": "application/json" }, success: e.success, error: e.error }, L.debug("Call publishPresence:", e), [4, re.call(this, T)]) : (r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)]);
                case 1:
                  return v.sent(), [2];
              }
            });
          });
        }
        function dm(e) {
          if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
          if (!e.usernames.length) throw Error('"usernames" can not be empty');
          if (typeof e.expiry != "number") throw Error('Invalid parameter: "expiry"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.userId, u = o.accessToken, m = { usernames: e.usernames }, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(d, "/presence/").concat(e.expiry), type: "POST", dataType: "json", data: JSON.stringify(m), headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call subscribePresence:", e), re.call(this, p).then(function(T) {
            return T.data = { result: T == null ? void 0 : T.result }, T;
          });
        }
        function fm(e) {
          return qc(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m;
            return Jc(this, function(p) {
              switch (p.label) {
                case 0:
                  if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
                  if (!e.usernames.length) throw Error('"usernames" can not be empty');
                  return ae.call(this) ? (o = this.context, a = o.orgName, s = o.appName, d = o.userId, u = o.accessToken, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(d, "/presence"), type: "DELETE", dataType: "json", data: JSON.stringify(e.usernames), headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, success: e.success, error: e.error }, L.debug("Call unsubscribePresence:", e), [4, re.call(this, m)]) : (r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)]);
                case 1:
                  return p.sent(), [2];
              }
            });
          });
        }
        function Xc(e) {
          if (typeof e.pageNum != "number" || typeof e.pageSize != "number") throw Error('Invalid parameter: "pageNum or pageSize"');
          if (e.pageNum < 0 || e.pageSize < 0) throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.userId, u = o.accessToken, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(d, "/presence/sublist?pageNum=").concat(e.pageNum, "&pageSize=").concat(e.pageSize), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getSubscribedPresenceList:", e), re.call(this, m).then(function(p) {
            return p.data = { result: p == null ? void 0 : p.result }, p;
          });
        }
        var hm = Xc;
        function mm(e) {
          if (!Array.isArray(e.usernames)) throw Error('Invalid parameter: "usernames"');
          if (!e.usernames.length) throw Error('"usernames" can not be empty');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = { usernames: e.usernames }, a = this.context, s = a.orgName, d = a.appName, u = a.userId, m = a.accessToken, p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(u, "/presence"), type: "POST", dataType: "json", data: JSON.stringify(o), headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getPresenceStatus:", e), re.call(this, p).then(function(T) {
            return T.data = { result: T == null ? void 0 : T.result }, T;
          });
        }
        function vm(e) {
          if (!(e.options instanceof Object)) throw Error('Invalid parameter: "options"');
          var r = e.options.paramType;
          if (typeof r != "number" || r < 0 || r > 2) throw Error('Invalid parameter: "options of paramType"');
          if (r === 0) {
            if (typeof e.options.remindType != "string") throw Error('Invalid parameter: "options of remindType"');
          } else if (r === 1) {
            if (typeof e.options.duration != "number") throw Error('Invalid parameter: "options of duration"');
          } else if (r === 2) {
            var o = e.options, a = o.startTime, s = o.endTime;
            if (!(a instanceof Object && Object.keys(a).length)) throw Error('Invalid parameter: "options of startTime"');
            if (!a.hours || typeof a.hours != "number" || !a.minutes || typeof a.minutes != "number") throw Error('Invalid parameter: "options of startTime of hours or minutes"');
            if (!(s instanceof Object && Object.keys(s).length)) throw Error('Invalid parameter: "options of endTime"');
            if (!s.hours || typeof s.hours != "number" || !s.minutes || typeof s.minutes != "number") throw Error('Invalid parameter: "options of endTime of hours or minutes"');
          }
          if (!ae.call(this)) {
            var d = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(d);
          }
          var u = this.context, m = u.accessToken, p = u.orgName, T = u.appName, v = u.userId, D = {};
          switch (r) {
            case 0:
              D = { type: e.options.remindType };
              break;
            case 1:
              D = { ignoreDuration: e.options.duration };
              break;
            case 2:
              var H = e.options;
              a = H.startTime, s = H.endTime, D = { ignoreInterval: "".concat(a.hours, ":").concat(a.minutes, "-").concat(s.hours, ":").concat(s.minutes) };
          }
          var k = { url: "".concat(this.apiUrl, "/").concat(p, "/").concat(T, "/users/").concat(v, "/notification/user/").concat(v), type: "PUT", dataType: "json", data: JSON.stringify(D), headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call setSilentModeForAll:", e), re.call(this, k);
        }
        function gm(e) {
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.accessToken, s = o.orgName, d = o.appName, u = o.userId, m = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(u, "/notification/user/").concat(u), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + a, "Content-Type": "application/json" }, success: e == null ? void 0 : e.success, error: e == null ? void 0 : e.error };
          return L.debug("Call getSilentModeForAll:", e), re.call(this, m);
        }
        function Em(e) {
          if (typeof e.conversationId != "string" || !e.conversationId) throw Error('Invalid parameter: "conversationId"');
          if (typeof e.type != "string" || !e.type) throw Error('Invalid parameter: "type"');
          if (!(e.options instanceof Object)) throw Error('Invalid parameter: "options"');
          var r = e.options.paramType;
          if (typeof r != "number" || r < 0 || r > 2) throw Error('Invalid parameter: "options of paramType"');
          if (r === 0) {
            if (typeof e.options.remindType != "string") throw Error('Invalid parameter: "options of remindType"');
          } else if (r === 1) {
            if (typeof e.options.duration != "number") throw Error('Invalid parameter: "options of duration"');
          } else if (r === 2) {
            var o = e.options, a = o.startTime, s = o.endTime;
            if (!(a instanceof Object && Object.keys(a).length)) throw Error('Invalid parameter: "options of startTime"');
            if (!a.hours || typeof a.hours != "number" || !a.minutes || typeof a.minutes != "number") throw Error('Invalid parameter: "options of startTime of hours or minutes"');
            if (!(s instanceof Object && Object.keys(s).length)) throw Error('Invalid parameter: "options of endTime"');
            if (!s.hours || typeof s.hours != "number" || !s.minutes || typeof s.minutes != "number") throw Error('Invalid parameter: "options of endTime of hours or minutes"');
          }
          if (!ae.call(this)) {
            var d = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(d);
          }
          var u = this.context, m = u.accessToken, p = u.orgName, T = u.appName, v = u.userId, D = "chatgroup", H = {};
          switch (r) {
            case 0:
              H = { type: e.options.remindType };
              break;
            case 1:
              H = { ignoreDuration: e.options.duration };
              break;
            case 2:
              var k = e.options;
              a = k.startTime, s = k.endTime, H = { ignoreInterval: "".concat(a.hours, ":").concat(a.minutes, "-").concat(s.hours, ":").concat(s.minutes) };
          }
          e.type === "singleChat" && (D = "user");
          var w = { url: "".concat(this.apiUrl, "/").concat(p, "/").concat(T, "/users/").concat(v, "/notification/").concat(D, "/").concat(e.conversationId), type: "PUT", dataType: "json", data: JSON.stringify(H), headers: { Authorization: "Bearer " + m, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call setSilentModeForConversation:", e), re.call(this, w);
        }
        function ym(e) {
          if (typeof e.conversationId != "string" || !e.conversationId) throw Error('Invalid parameter: "conversationId"');
          if (typeof e.type != "string" || !e.type) throw Error('Invalid parameter: "type"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.accessToken, s = o.orgName, d = o.appName, u = o.userId, m = "chatgroup";
          e.type === "singleChat" && (m = "user");
          var p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(u, "/notification/").concat(m, "/").concat(e.conversationId), type: "PUT", dataType: "json", data: JSON.stringify({ type: "DEFAULT" }), headers: { Authorization: "Bearer " + a, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call clearRemindTypeForConversation:", e), re.call(this, p);
        }
        function _m(e) {
          if (typeof e.conversationId != "string" || !e.conversationId) throw Error('Invalid parameter: "conversationId"');
          if (typeof e.type != "string" || !e.type) throw Error('Invalid parameter: "type"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.accessToken, s = o.orgName, d = o.appName, u = o.userId, m = "chatgroup";
          e.type === "singleChat" && (m = "user");
          var p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(u, "/notification/").concat(m, "/").concat(e.conversationId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + a, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getSilentModeForConversation:", e), re.call(this, p);
        }
        function Tm(e) {
          if (!Array.isArray(e.conversationList)) throw Error('Invalid parameter: "conversationList"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.accessToken, s = o.orgName, d = o.appName, u = o.userId, m = [], p = [];
          e.conversationList.forEach(function(H) {
            H.type === "singleChat" ? m.push(H.id) : p.push(H.id);
          });
          var T = m.length ? m.join(",") : "", v = p.length ? p.join(",") : "", D = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(u, "/notification?user=").concat(T, "&group=").concat(v), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + a, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call getSilentModeForConversations:", e), re.call(this, D);
        }
        function Om(e) {
          if (typeof e.language != "string" || !e.language) throw Error('Invalid parameter: "language"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = { translationLanguage: e.language }, a = this.context, s = a.accessToken, d = a.orgName, u = a.appName, m = a.userId, p = { url: "".concat(this.apiUrl, "/").concat(d, "/").concat(u, "/users/").concat(m, "/notification/language"), type: "PUT", dataType: "json", data: JSON.stringify(o), headers: { Authorization: "Bearer " + s, "Content-Type": "application/json" }, success: e.success, error: e.error };
          return L.debug("Call setPushPerformLanguage:", e), re.call(this, p);
        }
        function Rm(e) {
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.accessToken, s = o.orgName, d = o.appName, u = o.userId, m = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/users/").concat(u, "/notification/language"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + a, "Content-Type": "application/json" }, success: e == null ? void 0 : e.success, error: e == null ? void 0 : e.error };
          return L.debug("Call getPushPerformLanguage:", e), re.call(this, m);
        }
        var Yc = function(e, r, o, a) {
          return new (o || (o = Promise))(function(s, d) {
            function u(T) {
              try {
                p(a.next(T));
              } catch (v) {
                d(v);
              }
            }
            function m(T) {
              try {
                p(a.throw(T));
              } catch (v) {
                d(v);
              }
            }
            function p(T) {
              var v;
              T.done ? s(T.value) : (v = T.value, v instanceof o ? v : new o(function(D) {
                D(v);
              })).then(u, m);
            }
            p((a = a.apply(e, [])).next());
          });
        }, Qc = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        };
        function Im(e) {
          if (typeof e.name != "string" || e.name === "") throw Error("Invalid parameter name: ".concat(e.name));
          if (typeof e.messageId != "string" || e.messageId === "") throw Error("Invalid parameter messageId: ".concat(e.messageId));
          if (typeof e.parentId != "string" || e.parentId === "") throw Error("Invalid parameter parentId: ".concat(e.parentId));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { name: e.name, msg_id: e.messageId, group_id: e.parentId, owner: this.user }, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/thread?resource=").concat(u.clientResource), type: "POST", dataType: "json", data: JSON.stringify(m), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, p).then(function(T) {
            var v = T.data.thread_id;
            return T.data = { chatThreadId: v }, T;
          });
        }
        function Sm(e) {
          if (typeof e.chatThreadId != "string" || e.chatThreadId === "") throw Error("Invalid parameter chatThreadId: ".concat(e.chatThreadId));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/thread/").concat(e.chatThreadId, "/user/").concat(this.user, "/join?resource=").concat(u.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, m).then(function(p) {
            var T = p.data.detail;
            return T.messageId = T.msgId, T.parentId = T.groupId, delete T.msgId, delete T.groupId, p;
          });
        }
        function Cm(e) {
          return Yc(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m;
            return Qc(this, function(p) {
              switch (p.label) {
                case 0:
                  if (typeof e.chatThreadId != "string" || e.chatThreadId === "") throw Error("Invalid parameter chatThreadId: ".concat(e.chatThreadId));
                  return ae.call(this) ? (o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/thread/").concat(e.chatThreadId, "/user/").concat(this.user, "/quit?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } }, [4, re.call(this, m)]) : (r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)]);
                case 1:
                  return p.sent(), [2];
              }
            });
          });
        }
        function Nm(e) {
          return Yc(this, void 0, void 0, function() {
            var r, o, a, s, d, u, m;
            return Qc(this, function(p) {
              switch (p.label) {
                case 0:
                  if (typeof e.chatThreadId != "string" || e.chatThreadId === "") throw Error("Invalid parameter chatThreadId: ".concat(e.chatThreadId));
                  return ae.call(this) ? (o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/thread/").concat(e.chatThreadId, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } }, [4, re.call(this, m)]) : (r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r)]);
                case 1:
                  return p.sent(), [2];
              }
            });
          });
        }
        function Am(e) {
          if (typeof e.chatThreadId != "string" || e.chatThreadId === "") throw Error("Invalid parameter chatThreadId: ".concat(e.chatThreadId));
          if (typeof e.name != "string" || e.name === "") throw Error("Invalid parameter name: ".concat(e.name));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { name: e.name }, p = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/thread/").concat(e.chatThreadId, "?resource=").concat(u.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(m), headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, p);
        }
        function bm(e) {
          if (typeof e.chatThreadId != "string" || e.chatThreadId === "") throw Error("Invalid parameter chatThreadId: ".concat(e.chatThreadId));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { limit: e.pageSize || 20, cursor: e.cursor || "" }, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/thread/").concat(e.chatThreadId, "/users"), type: "GET", dataType: "json", data: u, headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, m);
        }
        function Mm(e) {
          if (typeof e.chatThreadId != "string" || e.chatThreadId === "") throw Error("Invalid parameter chatThreadId: ".concat(e.chatThreadId));
          if (typeof e.username != "string" || e.username === "") throw Error("Invalid parameter username: ".concat(e.username));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = o.jid, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/thread/").concat(e.chatThreadId, "/users/").concat(e.username, "?resource=").concat(u.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, m);
        }
        function wm(e) {
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { limit: e.pageSize || 20, cursor: e.cursor || "" }, m = { url: e.parentId ? "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/threads/chatgroups/").concat(e.parentId, "/user/").concat(this.user) : "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/threads/user/").concat(this.user), type: "GET", dataType: "json", data: u, headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, m).then(function(p) {
            var T = p.entities;
            return T == null || T.forEach(function(v) {
              v.parentId = v.groupId, v.messageId = v.msgId, delete v.groupId, delete v.msgId;
            }), p;
          });
        }
        function Um(e) {
          if (typeof e.parentId != "string" || e.parentId === "") throw Error("Invalid parameter parentId: ".concat(e.parentId));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { cursor: e.cursor || "", limit: e.pageSize || 20 }, m = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/threads/chatgroups/").concat(e.parentId), type: "GET", dataType: "json", data: u, headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, m).then(function(p) {
            var T = p.entities;
            return T == null || T.forEach(function(v) {
              v.parentId = v.groupId, v.messageId = v.msgId, delete v.groupId, delete v.msgId;
            }), p;
          });
        }
        function Pm(e) {
          var r = this;
          if (!Array.isArray(e.chatThreadIds)) throw Error("Invalid parameter chatThreadIds: ".concat(e.chatThreadIds));
          if (!ae.call(this)) {
            var o = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(o);
          }
          var a = this.context, s = a.orgName, d = a.appName, u = a.accessToken, m = { threadIds: e.chatThreadIds }, p = { url: "".concat(this.apiUrl, "/").concat(s, "/").concat(d, "/thread/message"), type: "POST", dataType: "json", data: JSON.stringify(m), headers: { Authorization: "Bearer " + u, "Content-Type": "application/json" } };
          return re.call(this, p).then(function(T) {
            return km.call(r, T);
          });
        }
        function km(e) {
          var r = this, o = e.entities;
          return o == null || o.forEach(function(a) {
            a.chatThreadId = a.thread_id, a.last_message && JSON.stringify(a.last_message) !== "{}" ? a.lastMessage = dr.call(r, a.last_message) : a.lastMessage = a.last_message, delete a.thread_id, delete a.last_message;
          }), e;
        }
        function Dm(e) {
          if (typeof e.chatThreadId != "string" || e.chatThreadId === "") throw Error("Invalid parameter chatThreadId: ".concat(e.chatThreadId));
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = { url: "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/thread/").concat(e.chatThreadId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + d, "Content-Type": "application/json" } };
          return re.call(this, u).then(function(m) {
            return m.data.affiliationsCount = m.data.affiliations_count, m.data.messageId = m.data.msgId, m.data.parentId = m.data.groupId, delete m.data.affiliations_count, delete m.data.msgId, delete m.data.groupId, m;
          });
        }
        function Lm() {
          if (!ae.call(this)) {
            var e = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(e);
          }
          var r = this.context, o = r.orgName, a = r.appName, s = r.accessToken, d = { url: "".concat(this.apiUrl, "/").concat(o, "/").concat(a, "/users/").concat(this.user, "/translate/support/language"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + s } };
          return L.debug("Call getSupportedLanguages"), re.call(this, d);
        }
        function xm(e) {
          if (typeof e.text != "string" || e.text === "") throw Error('Invalid parameter: "text"');
          if (!Array.isArray(e.languages)) throw Error('Invalid parameter: "language"');
          if (!ae.call(this)) {
            var r = g.create({ type: l.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r);
          }
          var o = this.context, a = o.orgName, s = o.appName, d = o.accessToken, u = "".concat(this.apiUrl, "/").concat(a, "/").concat(s, "/users/").concat(this.user, "/translate"), m = { text: e.text, to: e.languages }, p = { url: u, dataType: "json", type: "POST", data: JSON.stringify(m), headers: { Authorization: "Bearer " + d } };
          return L.debug("Call translateMessage"), re.call(this, p);
        }
        var Kt = function() {
          return Kt = Object.assign || function(e) {
            for (var r, o = 1, a = arguments.length; o < a; o++) for (var s in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e;
          }, Kt.apply(this, arguments);
        }, Zc = function(e, r) {
          var o, a, s, d, u = { label: 0, sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
          }, trys: [], ops: [] };
          return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function m(p) {
            return function(T) {
              return function(v) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d && (d = 0, v[0] && (u = 0)), u; ) try {
                  if (o = 1, a && (s = 2 & v[0] ? a.return : v[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, v[1])).done) return s;
                  switch (a = 0, s && (v = [2 & v[0], s.value]), v[0]) {
                    case 0:
                    case 1:
                      s = v;
                      break;
                    case 4:
                      return u.label++, { value: v[1], done: !1 };
                    case 5:
                      u.label++, a = v[1], v = [0];
                      continue;
                    case 7:
                      v = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!((s = (s = u.trys).length > 0 && s[s.length - 1]) || v[0] !== 6 && v[0] !== 2)) {
                        u = 0;
                        continue;
                      }
                      if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                        u.label = v[1];
                        break;
                      }
                      if (v[0] === 6 && u.label < s[1]) {
                        u.label = s[1], s = v;
                        break;
                      }
                      if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(v);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  v = r.call(e, u);
                } catch (D) {
                  v = [6, D], a = 0;
                } finally {
                  o = s = 0;
                }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              }([p, T]);
            };
          }
        }, Wr = ve.getEnvInfo(), Gm = Wr.platform === "web", jm = function() {
        }, dn = { CLOSED: 3, CLOSING: 2, CONNECTING: 0, OPEN: 1 }, jn = function() {
          function e(r) {
            var o, a;
            if (this.name = "connection", this.max_cache_length = 100, this.enableReportLogs = !1, this._reportLogs = !1, this._reportInterval = 3e5, this.unSyncQueue = [], this.lastHeartbeat = Date.now(), this.isDebug = r.isDebug || !1, this.isReport = !1, this.enableReportLogs = r.enableReportLogs || !1, this.uploadPartEnable = !0, this.isHttpDNS = r.isHttpDNS === void 0 ? Gm : r.isHttpDNS, this.heartBeatWait = r.heartBeatWait || 3e4, this.autoReconnectNumMax = r.autoReconnectNumMax || 5, this.refreshDNSIntervals = this.autoReconnectNumMax < 5 ? this.autoReconnectNumMax : 5, this.delivery = r.delivery || !1, this.disconnectedReason = void 0, this.loginInfoCustomExt = void 0, this.dnsArr = ["https://rs.easemob.com", "https://rs.chat.agora.io", "http://59.110.89.59", "http://39.97.193.190", "http://39.97.193.187"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.socketHost = [], this.hostTotal = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.domain = "easemob.com", this.appKey = r.appKey, this.appName = "", this.orgName = "", this.token = "", this.grantType = "", this.apiUrl = r.apiUrl || "", this.url = r.url || "", this.https = r.https || typeof window < "u" && ((o = window.location) === null || o === void 0 ? void 0 : o.protocol) === "https:", this.version = "4.8.0", this.deviceId = r.deviceId || "webim", this.isFixedDeviceId = (a = r.isFixedDeviceId) === null || a === void 0 || a, this.osType = 16, this.useOwnUploadFun = r.useOwnUploadFun || !1, this.compressType = [0], this.encryptType = [0], this.clientResource = "", this.expiresIn = 0, this.expirationTime = 0, this.useReplacedMessageContents = r.useReplacedMessageContents || !1, this.logOut = !0, this.context = { jid: { appKey: "", clientResource: "", domain: "easemob.com", name: "" }, userId: "", appKey: "", status: 0, restTokenData: "", appName: "", orgName: "", root: {}, accessToken: "" }, this._msgHash = {}, this._msgPromiseHash = {}, this._queues = [], this._load_msg_cache = [], this.unMSyncSendMsgMap = /* @__PURE__ */ new Map(), this.mr_cache = {}, this.closeInfo = null, this.reconnecting = !1, typeof this.appKey != "string" || this.appKey.split("#").length !== 2) throw Error("Illegal appKey: ".concat(this.appKey));
            this.devInfos = this.appKey.split("#"), this.orgName = this.devInfos[0], this.appName = this.devInfos[1], this.listen = Ad.bind(this), this.mSync = this.usePlugin(Sd), this.eventHandler = this.usePlugin(Nd), Object.assign(e.prototype, _), Object.assign(e.prototype, I), Object.assign(e.prototype, O), Object.assign(e.prototype, N), Object.assign(e.prototype, b), Object.assign(e.prototype, R), Object.assign(e.prototype, A), this.dataReport = new Md({ appkey: this.appKey, org: this.orgName, sdkVersion: this.version, deviceId: this.deviceId, isReport: this.isReport });
            var s = 0, d = this;
            Object.defineProperty(ve, "ajaxUnconventionalErrorTimes", { set: function(u) {
              u !== 0 && (L.debug("rest api request fail times: ".concat(u)), (s = u) % 5 == 0 && d.isHttpDNS && (L.debug("refresh dns config when rest request fail."), Bn.call(d, "refresh", {}, {})));
            }, get: function() {
              return s;
            } }), L.debug("init SDK: Conn ".concat(this.version, " ").concat(Wr.platform));
          }
          return e.prototype.usePlugin = function(r, o) {
            if (!o) return new r(this);
            this[o] = new r(this);
          }, e.prototype.listen = function(r) {
          }, e.prototype.addEventHandler = function(r, o) {
          }, e.prototype.removeEventHandler = function(r) {
          }, e.prototype.registerUser = function(r) {
            var o = this;
            return new Promise(function(a, s) {
              var d = o.dataReport.geOperateFun({ uid: r.username, operationName: h.REGISTER });
              if (o.isHttpDNS) {
                o.dnsIndex = 0;
                var u = Kt(Kt({}, r), { user: r.username, pwd: r.password, promise: { resolve: a, reject: s } });
                Bn.call(o, "signup", u, { rpt: d });
              } else u = Kt(Kt({}, r), { promise: { resolve: a, reject: s } }), Vi.call(o, u, { rpt: d });
            });
          }, e.prototype.open = function(r) {
            var o = this;
            if (L.debug("open", r.user), Wr.platform === "web") {
              var a = ve.detectBrowser();
              L.debug("browser", a);
            }
            return new Promise(function(s, d) {
              if (eu.call(o, r)) {
                r.accessToken && (o.token = r.accessToken);
                var u = Kt(Kt({}, r), { promise: { resolve: s, reject: d } }), m = o.dataReport.geOperateFun({ uid: r.user, operationName: h.LOGIN });
                if (o.isHttpDNS) Bn.call(o, "login", u, { rpt: m });
                else {
                  if (Wr.platform !== "web" && o.enableReportLogs) return void o.getDNS().then(function() {
                    Do.call(o, u, { rpt: m });
                  });
                  Do.call(o, u, { rpt: m });
                }
              }
            });
          }, e.prototype.getDNS = function() {
            var r = this, o = { url: this.dnsArr[this.dnsIndex] + "/easemob/server.json", dataType: "json", type: "GET", data: { app_key: encodeURIComponent(this.appKey) }, success: function(a) {
              var s = a.enableReportLogs, d = a.reportInterval;
              r._reportLogs = s === "true", r._reportInterval = Number(d || 3e5);
            }, error: function() {
              L.debug("getHttpDNS fail: " + r.dnsIndex), r.dnsIndex++, r.dnsIndex < r.dnsTotal && r.getDNS();
            } };
            return ve.ajax(o).catch(function(a) {
              console.warn(a);
            });
          }, e.prototype.isOpened = function() {
            return this.sock && this.sock.readyState === dn.OPEN || !1;
          }, e.prototype.close = function() {
            var r, o, a;
            L.debug("call close"), L._stopReportLogs(), this.logOut = !0, this.disconnectedReason = void 0, this.reconnecting = !1, this.context.status = l.STATUS_CLOSING, this.sock && this.sock.close(), (r = this.unMSyncSendMsgMap) === null || r === void 0 || r.clear(), this.stopHeartBeat(), this.rejectMessage(), this.context.status = l.STATUS_CLOSED, this._load_msg_cache = [], this._queues = [], this.unSyncQueue = [], this._msgHash = {}, this.mr_cache = {}, this.token = "", this.context.accessToken = "", this.clearTokenTimeout(), (a = (o = this == null ? void 0 : this._localCache) === null || o === void 0 ? void 0 : o.getInstance()) === null || a === void 0 || a.close();
          }, e.prototype.downloadAndParseCombineMessage = function(r) {
            var o = this, a = r.url, s = r.secret;
            return new Promise(function(d, u) {
              var m, p, T = ve.getEnvInfo(), v = T.platform !== "web" && T.platform !== "node" && T.platform !== "quick_app" && ((p = (m = T.global) === null || m === void 0 ? void 0 : m.canIUse) === null || p === void 0 ? void 0 : p.call(m, "getFileSystemManager")), D = function(k) {
                var w = function(le) {
                  u({ type: l.PARSE_FILE_ERROR, message: "Read file failed", data: le });
                }, F = function(le) {
                  return ge = o, ye = void 0, Ie = function() {
                    var Ae, Te, Ye, Ke, X, Se, Y, He, Me, be, We, Qe, Je;
                    return Zc(this, function(Fe) {
                      switch (Fe.label) {
                        case 0:
                          for (Ae = v ? new Uint8Array(le.data) : new Uint8Array(le.target.result), Te = 0, Ye = 0, Ke = 2, X = Ae.subarray(Te, Te + Ke), Se = ve.Uint8ArrayToString(X), L.debug("file header:", Se), Ye += Ke, Y = 0, He = 2; He < Ae.length - 1; He++) He % 2 == 1 && (Y ^= Ae[He]);
                          if (Me = Ae.subarray(Ae.length - 1, Ae.length), L.debug("checkResult:", Y, Me[0] === Y), Me[0] !== Y) return [2, u({ type: l.PARSE_FILE_ERROR, message: "File verification failed" })];
                          if (Se !== "cm") return [3, 7];
                          Fe.label = 1;
                        case 1:
                          Fe.trys.push([1, 5, , 6]), be = [], We = function() {
                            var Ge, rt, et, at;
                            return Zc(this, function(Ve) {
                              switch (Ve.label) {
                                case 0:
                                  return Te += Ke, Ye += Ke = 4, Ge = Ae.subarray(Te, Te + Ke), Te += Ke, Ke = Ge.reduce(function(bt, Xe, _e) {
                                    return bt + (Xe << 8 * (Ge.length - _e - 1));
                                  }, 0), Ye += Ke, rt = Ae.subarray(Te, Te + Ke), et = (et = Qe.root.lookup("easemob.pb.Meta")).decode(rt), [4, Dn.call(Qe, et, 0, !0, !0)];
                                case 1:
                                  return at = Ve.sent(), be.push(at), [2];
                              }
                            });
                          }, Qe = this, Fe.label = 2;
                        case 2:
                          return Ye < Ae.length - 1 ? [5, We()] : [3, 4];
                        case 3:
                          return Fe.sent(), [3, 2];
                        case 4:
                          return [2, d(be)];
                        case 5:
                          return Je = Fe.sent(), u({ type: l.PARSE_FILE_ERROR, message: "Parse file failed", data: Je }), [3, 6];
                        case 6:
                          return [3, 8];
                        case 7:
                          return [2, u({ type: l.PARSE_FILE_ERROR, message: "File verification failed" })];
                        case 8:
                          return [2];
                      }
                    });
                  }, new ((Ne = void 0) || (Ne = Promise))(function(Ae, Te) {
                    function Ye(Se) {
                      try {
                        X(Ie.next(Se));
                      } catch (Y) {
                        Te(Y);
                      }
                    }
                    function Ke(Se) {
                      try {
                        X(Ie.throw(Se));
                      } catch (Y) {
                        Te(Y);
                      }
                    }
                    function X(Se) {
                      var Y;
                      Se.done ? Ae(Se.value) : (Y = Se.value, Y instanceof Ne ? Y : new Ne(function(He) {
                        He(Y);
                      })).then(Ye, Ke);
                    }
                    X((Ie = Ie.apply(ge, ye || [])).next());
                  });
                  var ge, ye, Ne, Ie;
                };
                if (v) {
                  var V = T.global.getFileSystemManager(), ue = k.tempFilePath;
                  V.readFile({ filePath: ue, success: F, fail: w });
                } else if (k instanceof Blob) {
                  var pe = new FileReader();
                  pe.readAsArrayBuffer(k), pe.onerror = w, pe.onload = F;
                }
              }, H = function(k) {
                u({ type: l.WEBIM_DOWNLOADFILE_ERROR, message: "Download failed, please try again", data: k });
              };
              v ? T.global.downloadFile({ url: a, success: D, fail: H }) : ve.download.call(o, { url: a, headers: { Accept: "application/json" }, onFileDownloadComplete: D, onFileDownloadError: H, secret: s, accessToken: o.context.accessToken });
            });
          }, e.prototype.stopHeartBeat = function() {
            clearInterval(this.heartBeatID);
          }, e.prototype.clear = function() {
            this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.hostTotal = 0;
          }, e.prototype.heartBeat = function() {
          }, e.prototype.renewToken = function(r) {
            var o = this;
            return this.isOpened() ? this.getTokenExpireTimestamp(r).then(function(a) {
              var s = a.expire_timestamp, d = Date.now();
              return o.expirationTime = s, o.expiresIn = s - d, o.token = r, o.context.accessToken = r, o.clearTokenTimeout(), o.tokenExpireTimeCountDown(o.expiresIn), { status: !0, token: r, expire: s };
            }) : Promise.reject({ status: !1 });
          }, e.prototype.clearTokenTimeout = function() {
            L.info("clearTokenTimeout"), this.tokenWillExpireTimer && clearTimeout(this.tokenWillExpireTimer), this.tokenExpiredTimer && clearTimeout(this.tokenExpiredTimer), this.tokenWillExpireTimer = null, this.tokenExpiredTimer = null;
          }, e.prototype.tokenExpireTimeCountDown = function(r) {
            var o = this;
            L.info("tokenExpireTimeCountDown", r), r > Math.pow(2, 31) - 1 && (r = Math.pow(2, 31) - 1), this.tokenWillExpireTimer = setTimeout(function() {
              var a;
              o.onTokenWillExpire && o.onTokenWillExpire(), (a = o.eventHandler) === null || a === void 0 || a.dispatch("onTokenWillExpire"), L.info("onTokenWillExpire", Math.floor(r / 2));
            }, r / 2), this.tokenExpiredTimer = setTimeout(function() {
              var a;
              L.info("onTokenExpired", 0), o.onTokenExpired && o.onTokenExpired(), (a = o.eventHandler) === null || a === void 0 || a.dispatch("onTokenExpired"), o.close();
            }, r);
          }, e.prototype.compareTokenExpireTime = function(r, o) {
            var a, s = Number(o) - Number(r);
            L.debug("compareTokenExpireTime", s), s <= this.expiresIn / 2 && s > 0 ? (this.onTokenWillExpire && this.onTokenWillExpire(), (a = this.eventHandler) === null || a === void 0 || a.dispatch("onTokenWillExpire"), L.info("onTokenWillExpire", s)) : s <= 0 && (this.closeByTokenExpired(), L.info("closeByTokenExpired", s));
          }, e.prototype.closeByTokenExpired = function() {
            var r;
            L.info("closed By TokenExpired"), this.onTokenExpired && this.onTokenExpired(), (r = this.eventHandler) === null || r === void 0 || r.dispatch("onTokenExpired"), this.close();
          }, e.prototype.rejectMessage = function() {
            var r = this, o = Object.keys(this._msgHash);
            if (o.length > 0) {
              var a = g.create({ type: l.MESSAGE_WEBSOCKET_DISCONNECTED, message: "websocket disconnected" });
              o.forEach(function(s) {
                var d, u, m;
                !((d = r.unMSyncSendMsgMap) === null || d === void 0) && d.has(s) || (r._msgHash[s].reject instanceof Function && r._msgHash[s].reject(a), (m = (u = r._localCache) === null || u === void 0 ? void 0 : u.getInstance()) === null || m === void 0 || m.updateLocalMessage(s, { serverMsgId: s, status: qe.FAIL }), r._msgHash[s].fail instanceof Function && r._msgHash[s].fail(a), delete r._msgHash[s]);
              });
            }
          }, e.prototype.resetConnState = function() {
            this.mSync.stopHeartBeat(), this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0;
          }, e.prototype.reconnect = function() {
            var r, o = this;
            this.sock.readyState !== dn.CONNECTING && this.sock.readyState !== dn.OPEN && (L.info("reconnect: time", this.times), L.info("reconnect sock.readyState: ", this.sock.readyState), this.reconnecting === !1 && (this.reconnecting = !0), (r = this.eventHandler) === null || r === void 0 || r.dispatch("onReconnecting"), this.rejectMessage(), this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1), setTimeout(function() {
              o.sock.readyState !== dn.OPEN && (L.info("login sock.readyState: ", o.sock.readyState), o.sock.close(), Lo.call(o, { access_token: o.context.accessToken }), o.times++);
            }, 500 * this.times), this.autoReconnectNumTotal++);
          }, e.prototype.send = function(r) {
            return Promise.resolve(null);
          }, e.prototype.setLoginInfoCustomExt = function(r) {
            if (L.debug("setLoginInfoCustomExt", "params:", r), r) {
              if (typeof r != "string") throw new Error("ext must be a string");
              if (r.length > 1024) throw new Error("ext length must be less than 1024");
            }
            this.loginInfoCustomExt = r;
          }, e._getSock = function() {
          }, e;
        }();
        function Vi(e, r) {
          var o = this, a = r.rpt, s = r.isRetry, d = e.promise, u = this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users", m = { requestName: U.RESISTER, requestUrl: u }, p = e.error || jm;
          if (!this.orgName && !this.appName) {
            var T = g.create({ type: l.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "signup error" });
            p(T);
          }
          var v = { headers: { "Content-type": "application/json" }, url: u, dataType: "json", data: JSON.stringify({ username: e.username, password: e.password, nickname: e.nickname || "" }), success: function(D) {
            e.success && e.success(D);
            var H = Kt(Kt({}, D), { type: l.REQUEST_SUCCESS });
            d.resolve && d.resolve(H);
            var k = D.extraInfo, w = k.httpCode, F = k.elapse;
            a({ isEndApi: !0, isRetry: s, data: Kt(Kt({}, { requestElapse: F, isSuccess: 1, code: w }), m) });
          }, error: function(D) {
            var H = D.extraInfo, k = H.elapse, w = H.httpCode, F = H.errDesc;
            return a({ isRetry: s, data: Kt(Kt({}, { requestElapse: k, isSuccess: 0, code: w, codeDesc: F }), m) }), o.isHttpDNS && o.restIndex + 1 < o.restTotal ? (o.restIndex++, Ki.call(o), Vi.call(o, e, { rpt: a, isRetry: s }), Promise.reject(D)) : (a({ data: { isLastApi: 1, isSuccess: 0 } }), o.clear(), d.reject && d.reject(D), p(D));
          } };
          return ve.ajax(v).catch(function(D) {
            d.reject && d.reject(D);
          });
        }
        function Do(e, r) {
          var o = this;
          if (eu.call(this, e) && !this.isOpened()) {
            var a = r.rpt, s = r.isRetry;
            Fm.call(this, e), this.user = e.user;
            var d = e.promise, u = this.context.appName, m = this.context.orgName, p = this.apiUrl + "/" + m + "/" + u + "/token";
            if (e.accessToken) this.grantType = "accessToken", this.token = e.accessToken, this.context.accessToken = e.accessToken, this.context.restTokenData = e.accessToken, d.resolve({ accessToken: e.accessToken }), Lo.call(this, e, a), L.initReport({ report: this._reportLogs, reportInterval: this._reportInterval, connection: this });
            else if (e.agoraToken) this.grantType = "agoraToken", this.token = e.agoraToken, this.context.accessToken = e.agoraToken, this.context.restTokenData = e.agoraToken, d.resolve({ accessToken: e.agoraToken }), Lo.call(this, e, a), L.initReport({ report: this._reportLogs, reportInterval: this._reportInterval, connection: this });
            else {
              this.grantType = "password";
              var T = { grant_type: "password", username: e.user, password: e.pwd, timestamp: +/* @__PURE__ */ new Date() }, v = JSON.stringify(T), D = { headers: { "Content-type": "application/json" }, url: p, dataType: "json", data: v, success: function(H) {
                L.debug("get token success"), typeof e.success == "function" && e.success(H), o.token = H.access_token, o.context.restTokenData = H.access_token, o.context.accessToken = H.access_token, o.expiresIn = H.expires_in, d.resolve({ accessToken: H.access_token, duration: H.expires_in });
                var k = H.extraInfo, w = k.httpCode, F = k.elapse, V = { requestName: U.LOGIN_BY_PWD, requestElapse: F, requestUrl: p, isSuccess: 1, code: w };
                a({ isRetry: s, data: V }), Lo.call(o, H, a), L.initReport({ report: o._reportLogs, reportInterval: o._reportInterval, connection: o });
              }, error: function(H) {
                var k, w = H.extraInfo, F = w.elapse, V = w.httpCode, ue = w.errDesc, pe = { requestName: U.LOGIN_BY_PWD, requestElapse: F, requestUrl: p, isSuccess: 0, code: V, codeDesc: ue };
                if (a({ isRetry: s, data: pe }), o.isHttpDNS && o.restIndex + 1 < o.restTotal) return o.restIndex++, Ki.call(o), void Do.call(o, e, { rpt: a, isRetry: !0 });
                a({ data: { isLastApi: 1, isSuccess: 0 } }), o.clear(), H.error && H.error_description ? (k = g.create({ type: l.WEBIM_CONNCTION_OPEN_USERGRID_ERROR, message: H.error_description, data: H }), o.onError && o.onError(k)) : (k = g.create({ type: l.WEBIM_CONNCTION_OPEN_ERROR, message: H.error_description, data: H }), o.onError && o.onError(k)), typeof e.error == "function" && e.error(k), d.reject(k);
              }, version: "4.3.0" };
              L.debug("start get token"), ve.ajax(D).catch(function(H) {
                console.warn(H);
              });
            }
            L.debug("grantType", this.grantType), ve.listenNetwork(Bm.bind(this), Hm.bind(this)), ve.listenBrowserVisibility(function() {
              L.debug("visibility true");
            }, function() {
              L.debug("visibility false");
            });
          }
        }
        function Bm() {
          var e;
          L.debug("online"), this.onOnline && this.onOnline(), (e = this.eventHandler) === null || e === void 0 || e.dispatch("onOnline"), this.sock && this.sock.readyState !== 1 && (L.debug("sock.readyState:", this.sock.readyState), this.logOut || this.reconnecting || this.reconnect());
        }
        function Hm() {
          var e, r;
          L.debug("offline"), (e = this.sock) === null || e === void 0 || e.close(), this.onOffline && this.onOffline(), (r = this.eventHandler) === null || r === void 0 || r.dispatch("onOffline");
        }
        function Lo(e, r) {
          var o = this, a = this._getSock();
          this.sock = a, L.debug("start connect ws");
          var s = function() {
            var m;
            L.debug("websocket onOpen"), r && r({ data: { isLastApi: 1, isSuccess: 1, accessChannel: (m = o.socketHost[o.hostIndex]) === null || m === void 0 ? void 0 : m.channel } });
            var p = ve.flow([o.mSync.generateProvision, o.mSync.base64transform])();
            try {
              a.send(p);
            } catch (v) {
              var T = g.create({ type: l.SDK_RUNTIME_ERROR, message: "send message error", data: v });
              o.onError && o.onError(T);
            }
          }, d = function(m) {
            setTimeout(function() {
              var p, T, v, D, H, k, w, F, V, ue, pe, le;
              L.debug("websocket onClose", m), Wr.platform !== "zfb" && Wr.platform !== "dd" || (o.sock.readyState = dn.CLOSED);
              var ge = (m == null ? void 0 : m.code) === 401 || ((p = o.closeInfo) === null || p === void 0 ? void 0 : p.code) === 401;
              if (o.logOut) o.clear(), o.resetConnState(), ge && (L.debug("websocket provision error"), o.closeInfo = null), (v = (T = o == null ? void 0 : o._localCache) === null || T === void 0 ? void 0 : T.getInstance()) === null || v === void 0 || v.close(), o.onClosed && o.onClosed(), (D = o.eventHandler) === null || D === void 0 || D.dispatch("onDisconnected", o.disconnectedReason);
              else if (ge) {
                L.debug("websocket provision error");
                var ye = { type: l.WEBIM_CONNECTION_ERROR, message: "provision error", data: m };
                o.closeInfo = null, o.onError && o.onError(ye), (H = o.eventHandler) === null || H === void 0 || H.dispatch("onError", ye), (w = (k = o == null ? void 0 : o._localCache) === null || k === void 0 ? void 0 : k.getInstance()) === null || w === void 0 || w.close(), o.onClosed && o.onClosed(), (F = o.eventHandler) === null || F === void 0 || F.dispatch("onDisconnected", o.disconnectedReason), o.resetConnState();
              } else if (o.autoReconnectNumTotal < o.autoReconnectNumMax) {
                o.reconnect();
                var Ne = { type: l.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                o.onError && o.onError(Ne), o.autoReconnectNumTotal % o.refreshDNSIntervals == 0 && Wr.platform === "web" && o.isHttpDNS && (L.debug("refresh dns config when websocket close"), Bn.call(o, "refresh", {}, {}));
              } else (V = o.unMSyncSendMsgMap) === null || V === void 0 || V.clear(), o.rejectMessage(), Ne = { type: l.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }, o.disconnectedReason = g.create({ type: l.WEBIM_CONNCTION_DISCONNECTED, message: "reconnection failed" }), o.onError && o.onError(Ne), (pe = (ue = o == null ? void 0 : o._localCache) === null || ue === void 0 ? void 0 : ue.getInstance()) === null || pe === void 0 || pe.close(), o.onClosed && o.onClosed(), (le = o.eventHandler) === null || le === void 0 || le.dispatch("onDisconnected", o.disconnectedReason), o.resetConnState(), o.reconnecting = !1, L.debug("reconnect fail");
            }, 0);
          }, u = function(m) {
            var p = o.mSync, T = p.decodeMSync, v = p.distributeMSync;
            ve.flow([T, v])(m);
          };
          Wr.platform === "web" ? (a.onopen = s, a.onclose = d, a.onmessage = u) : (a.onOpen(s), a.onMessage(u), a.onClose(d), typeof window < "u" && window.WebSocket || a.onError(function(m) {
            var p, T, v, D, H;
            if (L.debug("mini program sock on error", m), o.sock.readyState !== dn.CLOSED && (o.sock = Kt(Kt({}, o.sock), { close: o.sock.close, send: o.sock.send, readyState: dn.CLOSED })), o.onError && o.onError({ type: l.WEBIM_CONNECTION_ERROR, message: "on socket error", data: m }), !o.logOut) if (o.autoReconnectNumTotal < o.autoReconnectNumMax) L.debug("sock.onError reconnect", o.autoReconnectNumTotal, o.autoReconnectNumMax), o.reconnect(), o.autoReconnectNumTotal % o.refreshDNSIntervals == 0 && Wr.platform === "web" && o.isHttpDNS && (L.debug("refresh dns config when websocket error"), Bn.call(o, "refresh", {}, {}));
            else {
              var k = { type: l.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
              o.disconnectedReason = g.create({ type: l.WEBIM_CONNCTION_DISCONNECTED, message: "reconnection failed" }), (p = o.unMSyncSendMsgMap) === null || p === void 0 || p.clear(), o.rejectMessage(), o.onError && o.onError(k), (v = (T = o == null ? void 0 : o._localCache) === null || T === void 0 ? void 0 : T.getInstance()) === null || v === void 0 || v.close(), o.onClosed && o.onClosed(), (D = o.eventHandler) === null || D === void 0 || D.dispatch("onDisconnected", o.disconnectedReason), o.resetConnState(), o.reconnecting = !1, L.debug("reconnect fail");
            }
            r && r({ data: { isLastApi: 1, isSuccess: 0, accessChannel: (H = o.socketHost[o.hostIndex]) === null || H === void 0 ? void 0 : H.channel } });
          }));
        }
        function eu(e) {
          if (!e.user || typeof e.user != "string") {
            var r = g.create({ type: l.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR, message: "the user cannot be empty" });
            return L.debug("open params error", r), this.onError && this.onError(r), !1;
          }
          return !(this.devInfos.length !== 2 || !this.orgName || !this.appName) || (r = g.create({ type: l.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "the appKey is illegal" }), L.debug("open params error", r), this.onError && this.onError(r), !1);
        }
        function Fm(e) {
          this.context.jid = { appKey: this.appKey, name: e.user, domain: this.domain, clientResource: this.clientResource }, this.context.root = this.root, this.context.userId = e.user, this.context.appKey = this.appKey, this.context.appName = this.appName, this.context.orgName = this.orgName;
        }
        function Bn(e, r, o) {
          var a = this, s = o.rpt, d = o.isRetry, u = this.dnsArr[this.dnsIndex] + "/easemob/server.json";
          L.debug("call getHttpDNS: " + this.dnsIndex);
          var m = { url: u, dataType: "json", type: "GET", data: { app_key: encodeURIComponent(this.appKey) }, success: function(p) {
            L.debug("getHttpDNS success");
            var T = p.extraInfo, v = T.elapse, D = T.httpCode, H = { requestUrl: u, requestName: U.GET_DNS, requestElapse: v, isSuccess: 1, code: D };
            a._reportLogs = p.enableReportLogs === "true", a._reportInterval = Number(p.reportInterval || 3e5), (p == null ? void 0 : p.enableDataReport) === "true" ? (a.dataReport.setIsCollectDt(!0), a.dataReport.setIsReportDt(!0)) : (a.dataReport.setIsReportDt(!1), a.dataReport.setIsCollectDt(!1)), (p == null ? void 0 : p.uploadinparts_enable) === "false" && (a.uploadPartEnable = !1), s && s({ isRetry: d, data: H });
            var k = p.rest.hosts, w = a.https ? "https" : "http";
            if (L.info("httpType: " + w), !k) return Promise.reject(!1);
            for (var F = k.filter(function(ge) {
              if (ge.protocol === w) return ge;
            }), V = 0; V < F.length; V++) if (F[V].protocol === w) {
              var ue = F[V];
              F.splice(V, 1), F.unshift(ue);
            }
            a.restHosts = F, a.restTotal = F.length;
            var pe = p["msync-ws"].hosts;
            if (!pe) return Promise.reject(!1);
            var le = pe.filter(function(ge) {
              return ge.protocol === w && ge;
            });
            a.socketHost = le, a.hostTotal = le.length, Ki.call(a), e !== "refresh" && (e === "login" ? Do.call(a, r, { rpt: s }) : Vi.call(a, r, { rpt: s }));
          }, error: function(p) {
            var T = p.extraInfo, v = T.elapse, D = T.httpCode, H = T.errDesc, k = { requestUrl: u, requestName: U.GET_DNS, isSuccess: 0, code: D, codeDesc: H, requestElapse: v };
            s && s({ isRetry: d, data: k }), L.debug("getHttpDNS fail: " + a.dnsIndex), a.dnsIndex++, a.dnsIndex < a.dnsTotal && Bn.call(a, e, r, { rpt: s, isRetry: !0 });
          } };
          return ve.ajax(m).catch(function(p) {
            console.warn(p);
          });
        }
        function Ki() {
          var e, r;
          if (this.restIndex > this.restTotal) return L.debug("restIndex > restTotal"), "";
          var o = "", a = this.restHosts[this.restIndex], s = a.domain, d = a.ip, u = a.port, m = this.https ? "https:" : "http:";
          return d && typeof window < "u" && ((e = window == null ? void 0 : window.location) === null || e === void 0 ? void 0 : e.protocol) === "http:" ? o = m + "//" + d + ":" + u : (o = m + "//" + s, u && u !== "80" && u !== "443" && (o += ":".concat(u)), typeof window > "u" || window.location || (o = "https://" + s), typeof window < "u" && window.location && ((r = window.location) === null || r === void 0 ? void 0 : r.protocol) === "file:" && (o = "https://" + s)), typeof window > "u" && (o = m + "//" + s), this.apiUrl = o, o;
        }
        var xo = ve.getEnvInfo(), cr = xo.global;
        P.util.Long = M(), P.configure();
        var Wm = P.Root.fromJSON({ nested: { easemob: { nested: { pb: { nested: { MessageBody: { fields: { type: { type: "Type", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, contents: { rule: "repeated", type: "Content", id: 4 }, ext: { rule: "repeated", type: "KeyValue", id: 5 }, ackMessageId: { type: "uint64", id: 6 }, msgConfig: { type: "MessageConfig", id: 7 }, ackContent: { type: "string", id: 8 }, meta: { type: "string", id: 9 }, editMessageId: { type: "uint64", id: 11 } }, nested: { Content: { fields: { type: { type: "Type", id: 1 }, text: { type: "string", id: 2 }, latitude: { type: "double", id: 3 }, longitude: { type: "double", id: 4 }, address: { type: "string", id: 5 }, displayName: { type: "string", id: 6 }, remotePath: { type: "string", id: 7 }, secretKey: { type: "string", id: 8 }, fileLength: { type: "int32", id: 9 }, action: { type: "string", id: 10 }, params: { rule: "repeated", type: "KeyValue", id: 11 }, duration: { type: "int32", id: 12 }, size: { type: "Size", id: 13 }, thumbnailRemotePath: { type: "string", id: 14 }, thumbnailSecretKey: { type: "string", id: 15 }, thumbnailDisplayName: { type: "string", id: 16 }, thumbnailFileLength: { type: "int32", id: 17 }, thumbnailSize: { type: "Size", id: 18 }, customEvent: { type: "string", id: 19 }, customExts: { rule: "repeated", type: "KeyValue", id: 20 }, buildingName: { type: "string", id: 21 }, subType: { type: "SubType", id: 22 }, title: { type: "string", id: 23 }, summary: { type: "string", id: 24 }, combineLevel: { type: "int32", id: 25 } }, nested: { Type: { values: { TEXT: 0, IMAGE: 1, VIDEO: 2, LOCATION: 3, VOICE: 4, FILE: 5, COMMAND: 6, CUSTOM: 7, COMBINE: 8 } }, Size: { fields: { width: { type: "double", id: 1 }, height: { type: "double", id: 2 } } }, SubType: { values: { COMBINE: 0 } } } }, Type: { values: { NORMAL: 0, CHAT: 1, GROUPCHAT: 2, CHATROOM: 3, READ_ACK: 4, DELIVER_ACK: 5, RECALL: 6, CHANNEL_ACK: 7, EDIT: 8 } }, MessageConfig: { fields: { allowGroupAck: { type: "bool", id: 1 } } } } }, KeyValue: { oneofs: { value: { oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"] } }, fields: { key: { type: "string", id: 1 }, type: { type: "ValueType", id: 2 }, varintValue: { type: "int64", id: 3 }, floatValue: { type: "float", id: 4 }, doubleValue: { type: "double", id: 5 }, stringValue: { type: "string", id: 6 } }, nested: { ValueType: { values: { BOOL: 1, INT: 2, UINT: 3, LLINT: 4, FLOAT: 5, DOUBLE: 6, STRING: 7, JSON_STRING: 8 } } } }, JID: { fields: { appKey: { type: "string", id: 1 }, name: { type: "string", id: 2 }, domain: { type: "string", id: 3 }, clientResource: { type: "string", id: 4 } } }, ConferenceBody: { fields: { sessionId: { type: "string", id: 1 }, operation: { type: "Operation", id: 2 }, conferenceId: { type: "string", id: 3 }, type: { type: "Type", id: 4 }, content: { type: "string", id: 5 }, network: { type: "string", id: 6 }, version: { type: "string", id: 7 }, identity: { type: "Identity", id: 8 }, duration: { type: "string", id: 9 }, peerName: { type: "string", id: 10 }, endReason: { type: "EndReason", id: 11 }, status: { type: "Status", id: 12 }, isDirect: { type: "bool", id: 13 }, controlType: { type: "StreamControlType", id: 14 }, routeFlag: { type: "int32", id: 15 }, routeKey: { type: "string", id: 16 } }, nested: { Status: { fields: { errorCode: { type: "int32", id: 1 } } }, Operation: { values: { JOIN: 0, INITIATE: 1, ACCEPT_INITIATE: 2, ANSWER: 3, TERMINATE: 4, REMOVE: 5, STREAM_CONTROL: 6, MEDIA_REQUEST: 7 } }, Type: { values: { VOICE: 0, VIDEO: 1 } }, Identity: { values: { CALLER: 0, CALLEE: 1 } }, EndReason: { values: { HANGUP: 0, NORESPONSE: 1, REJECT: 2, BUSY: 3, FAIL: 4, UNSUPPORTED: 5, OFFLINE: 6 } }, StreamControlType: { values: { PAUSE_VOICE: 0, RESUME_VOICE: 1, PAUSE_VIDEO: 2, RESUME_VIDEO: 3 } } } }, MSync: { fields: { version: { type: "Version", id: 1, options: { default: "MSYNC_V1" } }, guid: { type: "JID", id: 2 }, auth: { type: "string", id: 3 }, compressAlgorimth: { type: "uint32", id: 4 }, crypto: { type: "uint32", id: 5 }, userAgent: { type: "string", id: 6 }, pov: { type: "uint64", id: 7 }, command: { type: "Command", id: 8 }, deviceId: { type: "uint32", id: 10 }, encryptType: { rule: "repeated", type: "EncryptType", id: 11, options: { packed: !1 } }, encryptKey: { type: "string", id: 12 }, payload: { type: "bytes", id: 9 } }, nested: { Version: { values: { MSYNC_V1: 0, MSYNC_V2: 1 } }, Command: { values: { SYNC: 0, UNREAD: 1, NOTICE: 2, PROVISION: 3 } } } }, EncryptType: { values: { ENCRYPT_NONE: 0, ENCRYPT_AES_128_CBC: 1, ENCRYPT_AES_256_CBC: 2 } }, CommSyncUL: { fields: { meta: { type: "Meta", id: 1 }, key: { type: "uint64", id: 2 }, queue: { type: "JID", id: 3 }, isRoam: { type: "bool", id: 4 }, lastFullRoamKey: { type: "uint64", id: 5 } } }, CommSyncDL: { fields: { status: { type: "Status", id: 1 }, metaId: { type: "uint64", id: 2 }, serverId: { type: "uint64", id: 3 }, metas: { rule: "repeated", type: "Meta", id: 4 }, nextKey: { type: "uint64", id: 5 }, queue: { type: "JID", id: 6 }, isLast: { type: "bool", id: 7 }, timestamp: { type: "uint64", id: 8 }, isRoam: { type: "bool", id: 9 } } }, CommNotice: { fields: { queue: { type: "JID", id: 1 } } }, CommUnreadUL: { fields: {} }, CommUnreadDL: { fields: { status: { type: "Status", id: 1 }, unread: { rule: "repeated", type: "MetaQueue", id: 2 }, timestamp: { type: "uint64", id: 3 } } }, MetaQueue: { fields: { queue: { type: "JID", id: 1 }, n: { type: "uint32", id: 2 } } }, Meta: { fields: { id: { type: "uint64", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, timestamp: { type: "uint64", id: 4 }, ns: { type: "NameSpace", id: 5 }, payload: { type: "bytes", id: 6 }, routetype: { type: "RouteType", id: 7 }, ext: { rule: "repeated", type: "KeyValue", id: 8 }, meta: { type: "bytes", id: 9 }, directedUsers: { rule: "repeated", type: "string", id: 10 } }, nested: { NameSpace: { values: { STATISTIC: 0, CHAT: 1, MUC: 2, ROSTER: 3, CONFERENCE: 4, NOTIFY: 5, QUERY: 6 } }, RouteType: { values: { ROUTE_ALL: 0, ROUTE_ONLINE: 1, ROUTE_DIRECT: 2 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, reason: { type: "string", id: 2 }, redirectInfo: { rule: "repeated", type: "RedirectInfo", id: 3 } }, nested: { ErrorCode: { values: { OK: 0, FAIL: 1, UNAUTHORIZED: 2, MISSING_PARAMETER: 3, WRONG_PARAMETER: 4, REDIRECT: 5, TOKEN_EXPIRED: 6, PERMISSION_DENIED: 7, NO_ROUTE: 8, UNKNOWN_COMMAND: 9, PB_PARSER_ERROR: 10, BIND_ANOTHER_DEVICE: 11, IM_FORBIDDEN: 12, TOO_MANY_DEVICES: 13, PLATFORM_LIMIT: 14, USER_MUTED: 15, ENCRYPT_DISABLE: 16, ENCRYPT_ENABLE: 17, DECRYPT_FAILURE: 18, PERMISSION_DENIED_EXTERNAL: 19 } } } }, RedirectInfo: { fields: { host: { type: "string", id: 1 }, port: { type: "uint32", id: 2 } } }, Provision: { fields: { osType: { type: "OsType", id: 1 }, version: { type: "string", id: 2 }, networkType: { type: "NetworkType", id: 3 }, appSign: { type: "string", id: 4 }, compressType: { rule: "repeated", type: "CompressType", id: 5, options: { packed: !1 } }, encryptType: { rule: "repeated", type: "EncryptType", id: 6, options: { packed: !1 } }, encryptKey: { type: "string", id: 7 }, status: { type: "Status", id: 8 }, deviceUuid: { type: "string", id: 9 }, isManualLogin: { type: "bool", id: 10 }, password: { type: "string", id: 11 }, deviceName: { type: "string", id: 12 }, resource: { type: "string", id: 13 }, auth: { type: "string", id: 14 }, serviceId: { type: "string", id: 16 }, actionVersion: { type: "string", id: 17 }, authToken: { type: "string", id: 18 }, sessionId: { type: "string", id: 20 }, reason: { type: "string", id: 21 } }, nested: { OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } }, CompressType: { values: { COMPRESS_NONE: 0, COMPRESS_ZLIB: 1 } } } }, MUCBody: { fields: { mucId: { type: "JID", id: 1 }, operation: { type: "Operation", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, setting: { type: "Setting", id: 5 }, reason: { type: "string", id: 6 }, isChatroom: { type: "bool", id: 7 }, status: { type: "Status", id: 8 }, isThread: { type: "bool", id: 9 }, mucParentId: { type: "JID", id: 10 }, mucName: { type: "string", id: 11 }, eventInfo: { type: "EventInfo", id: 12 }, mucMemberCount: { type: "int32", id: 13 }, ext: { type: "string", id: 14 }, leaveOtherRooms: { type: "bool", id: 15 } }, nested: { Operation: { values: { CREATE: 0, DESTROY: 1, JOIN: 2, LEAVE: 3, APPLY: 4, APPLY_ACCEPT: 5, APPLY_DECLINE: 6, INVITE: 7, INVITE_ACCEPT: 8, INVITE_DECLINE: 9, KICK: 10, GET_BLACKLIST: 11, BAN: 12, ALLOW: 13, UPDATE: 14, BLOCK: 15, UNBLOCK: 16, PRESENCE: 17, ABSENCE: 18, DIRECT_JOINED: 19, ASSIGN_OWNER: 20, ADD_ADMIN: 21, REMOVE_ADMIN: 22, ADD_MUTE: 23, REMOVE_MUTE: 24, UPDATE_ANNOUNCEMENT: 25, DELETE_ANNOUNCEMENT: 26, UPLOAD_FILE: 27, DELETE_FILE: 28, ADD_USER_WHITE_LIST: 29, REMOVE_USER_WHITE_LIST: 30, BAN_GROUP: 31, REMOVE_BAN_GROUP: 32, THREAD_CREATE: 33, THREAD_DESTROY: 34, THREAD_JOIN: 35, THREAD_LEAVE: 36, THREAD_KICK: 37, THREAD_UPDATE: 38, THREAD_PRESENCE: 39, THREAD_ABSENCE: 40, DISABLE_GROUP: 41, ABLE_GROUP: 42, SET_METADATA: 43, DELETE_METADATA: 44, GROUP_MEMBER_METADATA_UPDATE: 45 } }, Setting: { fields: { name: { type: "string", id: 1 }, desc: { type: "string", id: 2 }, type: { type: "Type", id: 3 }, maxUsers: { type: "int32", id: 4 }, owner: { type: "string", id: 5 } }, nested: { Type: { values: { PRIVATE_OWNER_INVITE: 0, PRIVATE_MEMBER_INVITE: 1, PUBLIC_JOIN_APPROVAL: 2, PUBLIC_JOIN_OPEN: 3, PUBLIC_ANONYMOUS: 4 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, PERMISSION_DENIED: 1, WRONG_PARAMETER: 2, MUC_NOT_EXIST: 3, USER_NOT_EXIST: 4, UNKNOWN: 5 } } } }, EventInfo: { fields: { eventType: { type: "EventType", id: 1, options: { default: "EVENT_NONE" } }, ext: { type: "string", id: 2 } }, nested: { EventType: { values: { EVENT_NONE: 0, CIRCLE_CHANNEL: 1 } } } } } }, RosterBody: { fields: { operation: { type: "Operation", id: 1 }, status: { type: "Status", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, reason: { type: "string", id: 5 }, rosterVer: { type: "string", id: 6 }, biDirection: { type: "bool", id: 7 } }, nested: { Operation: { values: { GET_ROSTER: 0, GET_BLACKLIST: 1, ADD: 2, REMOVE: 3, ACCEPT: 4, DECLINE: 5, BAN: 6, ALLOW: 7, REMOTE_ACCEPT: 8, REMOTE_DECLINE: 9 } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, USER_NOT_EXIST: 1, USER_ALREADY_FRIEND: 2, USER_ALREADY_BLACKLIST: 3 } } } } } }, StatisticsBody: { fields: { operation: { type: "Operation", id: 1 }, os: { type: "OsType", id: 2 }, version: { type: "string", id: 3 }, network: { type: "NetworkType", id: 4 }, imTime: { type: "uint32", id: 5 }, chatTime: { type: "uint32", id: 6 }, location: { type: "string", id: 7 }, reason: { type: "string", id: 10 } }, nested: { Operation: { values: { INFORMATION: 0, USER_REMOVED: 1, USER_LOGIN_ANOTHER_DEVICE: 2, USER_KICKED_BY_CHANGE_PASSWORD: 3, USER_KICKED_BY_OTHER_DEVICE: 4 } }, OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } } } } } } } } } });
        jn.prototype.root = Wm;
        var Vm = function(e) {
          this.onOpen = cr.onSocketOpen, this.onClose = cr.onSocketClose, this.onMessage = cr.onSocketMessage, this.onError = cr.onSocketError, this.close = cr.closeSocket, this.send = cr.sendSocketMessage, this.connectSocket = cr.connectSocket, this.readyState = 3, this.offSocketOpen = cr.offSocketOpen, this.offSocketMessage = cr.offSocketMessage, this.offSocketError = cr.offSocketError, this.offSocketClose = cr.offSocketClose, this.connect = function() {
            this.offSocketOpen(), this.offSocketMessage(), this.offSocketClose(), this.offSocketError(), cr.connectSocket({ url: e.url, header: { "content-type": "application/json" }, success: function(r) {
            }, fail: function() {
            } });
          };
        };
        jn.prototype._getSock = function() {
          var e, r = this;
          return this.sock && this.sock.close && this.sock.close(), (e = xo.platform === "zfb" || xo.platform === "dd" ? new Vm(this) : cr.connectSocket({ url: this.url, header: { "content-type": "application/json" }, success: function(o) {
            L.debug("socket connect success", o);
          }, fail: function(o) {
            L.debug("socket connect fail", o), r.reconnecting = !1, o.errMsg.indexOf("suspend");
          }, complete: function() {
          } })).connect && e.connect(), e;
        }, jn.prototype.getUniqueId = ve.getUniqueId, jn.prototype.deviceId = "miniProgram_" + xo.platform, jn.prototype._localCache = void 0;
        var zi = L.getLogger("defaultLogger");
        zi.setConfig({ useCache: !1, maxCache: 3145728 }), zi.enableAll(), ve.ajax = ve.wxRequest;
        var Km = { connection: jn, message: Ms, utils: ve, logger: zi, statusCode: l };
      }(), E;
    }();
  });
})(Wp);
var __ = Wp.exports;
const gs = /* @__PURE__ */ y_(__);
gs.logger.onLog = (t) => {
  console.log(t.time, t.logs);
};
gs.logger.setConsoleLogVisibility(!1);
const Un = ln("conn", () => {
  let t = null, n = gs;
  const i = (_) => (c(new n.connection(_)), t), c = (_) => {
    t = _, uni.conn = _;
  };
  return {
    conn: t,
    setChatConn: c,
    getChatConn: () => {
      if (t)
        return t;
      throw "conn is not initialized";
    },
    initChatSDK: i,
    getChatSDK: () => {
      if (n)
        return n;
      throw "SDK is not found";
    }
  };
}), Es = ln("appUser", () => {
  const t = Rt(
    /* @__PURE__ */ new Map()
  ), n = Un().getChatConn(), i = (I) => {
    const { userIdList: O = [], withPresence: N = !0 } = I;
    return new Promise((b, R) => {
      const A = [
        "nickname",
        "avatarurl",
        "mail",
        "phone",
        "gender",
        "sign",
        "birth",
        "ext"
      ];
      if (O.length === 0) {
        b({});
        return;
      }
      const S = O.filter((C) => !t.value.has(C));
      if (S.length === 0) {
        b({});
        return;
      }
      n.fetchUserInfoById(S, A).then((C) => {
        C.data && Object.keys(C.data).forEach((l) => {
          var B;
          const P = ((B = C.data) == null ? void 0 : B[l]) || {};
          t.value.set(l, P);
        }), b(C);
      }).catch((C) => {
        R(C);
      });
    });
  }, c = (I) => n.updateUserInfo(I).then((O) => (t.value.set(n.user, O.data || {}), O)), f = (I) => {
    const O = t.value.get(I);
    return {
      name: (O == null ? void 0 : O.nickname) || I,
      nickname: O == null ? void 0 : O.nickname,
      avatar: (O == null ? void 0 : O.avatarurl) || "",
      sign: (O == null ? void 0 : O.sign) || ""
    };
  };
  return {
    appUserInfo: t,
    getUserInfoFromStore: f,
    getUsersInfo: i,
    updateUserInfo: c,
    getSelfUserInfo: () => f(n.user),
    clear: () => {
      t.value.clear();
    }
  };
}), T_ = ln("block", () => {
  const t = Rt([]), n = Un().getChatConn();
  return {
    blockList: t,
    blockUser: (_) => n.addUsersToBlocklist({
      name: _
    }).then((I) => (t.value.unshift(_), I)),
    unBlockUser: (_) => n.removeUserFromBlocklist({
      name: _
    }).then((I) => {
      const O = t.value.findIndex((N) => N === _);
      return O !== -1 && t.value.splice(O, 1), I;
    }),
    getBlockList: () => {
      n.getBlocklist().then((_) => {
        t.value = _.data || [];
      });
    },
    clear: () => {
      t.value = [];
    }
  };
}), Vp = ln("contact", () => {
  const t = Es(), n = Rt([]), i = Rt({
    list: [],
    unReadCount: 0
  }), c = Rt(
    {}
  ), f = Un(), { getChatConn: E } = f, _ = E(), { getUsersInfo: I } = t, O = (h, U = 1) => {
    const Z = h, te = (U - 1) * 100, G = U * 100;
    I({
      userIdList: Z.slice(te, G)
    }).then(() => {
      Z.length > G && O(Z, U + 1);
    });
  }, N = () => {
    _.getAllContacts().then((h) => {
      var U;
      h.data && (O(((U = h == null ? void 0 : h.data) == null ? void 0 : U.map((W) => W.userId)) || []), n.value = h.data);
    });
  }, b = (h) => _.addContact(h, "apply join contact").then((U) => U), R = (h) => _.deleteContact(h).then((U) => (l(h), U)), A = (h) => _.declineContactInvite(h).then((U) => U), S = (h) => _.acceptContactInvite(h).then((U) => U), C = (h) => {
    i.value.list.unshift(h), i.value.unReadCount++;
  }, l = (h) => {
    const U = n.value.findIndex((W) => W.userId === h);
    U !== -1 && n.value.splice(U, 1);
  };
  return {
    contacts: n,
    contactsNoticeInfo: i,
    viewedUserInfo: c,
    getContacts: N,
    addContact: b,
    deleteContact: R,
    addContactNotice: C,
    declineContactInvite: A,
    acceptContactInvite: S,
    addStoreContact: (h) => {
      n.value.find((U) => U.userId === h.userId) || n.value.unshift(h);
    },
    setViewedUserInfo: (h) => {
      c.value = h;
    },
    setContactRemark: (h, U) => _.setContactRemark({
      userId: h,
      remark: U
    }).then((W) => {
      const Z = n.value.findIndex(
        (te) => te.userId === h
      );
      return Z !== -1 && (n.value[Z].remark = U), W;
    }),
    deepGetUserInfo: O,
    clearContactNoticeUnReadCount: () => {
      i.value.unReadCount = 0;
    },
    clear: () => {
      n.value = [], i.value = {
        list: [],
        unReadCount: 0
      }, c.value = {};
    }
  };
}), Ha = ln("conversation", () => {
  const { getChatConn: t, getChatSDK: n } = Un(), { deepGetUserInfo: i } = Vp();
  let c = Rt(null);
  const f = t(), E = n(), _ = Rt({
    pageSize: 50,
    cursor: ""
  }), I = Rt([]), O = (U) => {
    if (!Array.isArray(U))
      return console.error("Invalid parameter: conversations");
    let W = I.value.map(
      (G) => G.conversationId
    ), Z = U.filter(
      ({ conversationId: G }) => !W.find((q) => q === G)
    );
    const te = Z.filter((G) => G.conversationType === "singleChat").map((G) => G.conversationId);
    i(te), Z.forEach((G) => {
      I.value.push(G);
    });
  }, N = (U) => {
    _.value.cursor = U.cursor, _.value.pageSize = U.pageSize;
  }, b = () => f.getServerConversations(_.value).then((U) => {
    var W, Z, te;
    return O(((W = U.data) == null ? void 0 : W.conversations) || []), _.value.cursor = (Z = U.data) == null ? void 0 : Z.cursor, (te = U.data) != null && te.cursor && b(), U;
  }), R = (U) => {
    const W = I.value.findIndex((Z) => Z.conversationType == U.conversationType && Z.conversationId == U.conversationId);
    W > -1 && I.value.splice(W, 1);
  }, A = async (U, W) => {
    if (typeof U != "object")
      return console.error("Invalid parameter: conversation");
    await f.deleteConversation({
      channel: U.conversationId,
      chatType: U.conversationType,
      deleteRoam: W || !1
    }), R(U);
  }, S = (U) => {
    const W = I.value.find((Z) => Z.conversationId === U);
    if (W)
      return W;
  };
  return {
    conversationList: I,
    conversationParams: _,
    currConversation: c,
    clear: () => {
      I.value = [], _.value = {
        pageSize: 50,
        cursor: ""
      }, c.value = null;
    },
    setConversationParams: N,
    getConversationList: b,
    deleteConversation: A,
    getConversationById: S,
    getConversationTime: (U) => {
      if (!U)
        return "";
      const W = U.time;
      return W || "";
    },
    markConversationRead: async (U) => {
      const W = E.message.create({
        type: "channel",
        chatType: U.conversationType,
        to: U.conversationId
      });
      await f.send(W);
      const Z = S(U.conversationId);
      Z && (Z.unReadCount = 0);
    },
    setCurrentConversation: (U) => {
      U ? c.value = Oi(U) : c.value = null;
    },
    moveConversationTop: (U) => {
      if (S(U.conversationId)) {
        const Z = I.value.findIndex((te) => te.conversationId === U.conversationId);
        Z > -1 && (I.value.splice(Z, 1), I.value.unshift(U));
      } else
        I.value.unshift(U);
    },
    createConversation: (U, W, Z) => {
      const te = {
        conversationId: U.conversationId,
        conversationType: U.conversationType,
        lastMessage: W,
        unReadCount: Z || 0
      };
      return U.conversationType === "singleChat" && i([U.conversationId]), te;
    },
    updateConversationLastMessage: (U, W, Z) => {
      const te = S(U.conversationId);
      te && (te.lastMessage = W, te.unReadCount = Z || 0);
    },
    getCvsIdFromMessage: (U) => {
      let W = "";
      return U.chatType === "groupChat" || U.chatType === "chatRoom" || U.from === f.user || U.from === "" ? W = U.to : W = U.from || "", W;
    }
  };
}), O_ = ln("message", () => {
  const { getChatConn: t } = Un(), {
    getConversationById: n,
    createConversation: i,
    updateConversationLastMessage: c,
    moveConversationTop: f,
    getCvsIdFromMessage: E,
    markConversationRead: _
  } = Ha(), I = Rt(/* @__PURE__ */ new Map()), O = Rt(
    /* @__PURE__ */ new Map()
  ), N = t(), b = Rt(null), R = (x) => {
    b.value = x;
  }, A = async (x, h) => {
    const U = await t().getHistoryMessages({
      targetId: x.conversationId,
      chatType: x.conversationType,
      pageSize: 50,
      cursor: h || ""
    });
    if (U.messages.forEach((W) => {
      I.value.set(W.id, W);
    }), O.value.has(x.conversationId)) {
      const W = O.value.get(
        x.conversationId
      );
      W && (W.messages.unshift(...U.messages.reverse()), W.cursor = U.cursor || "", W.isLast = U.isLast);
      return;
    }
    O.value.set(x.conversationId, {
      //@ts-ignore
      messages: U.messages.reverse(),
      cursor: U.cursor || "",
      isLast: U.isLast
    });
  }, S = (x) => {
    let h = E(x);
    if (O.value.has(h)) {
      const U = O.value.get(h);
      U && U.messages.push(x);
      return;
    }
  }, C = (x) => t().send(x).then((h) => {
    if (x.type !== "delivery" && x.type !== "read" && x.type !== "channel") {
      if (h.message && I.value.set(h.serverMsgId, h.message), S(h.message), x.chatType === "chatRoom")
        return h;
      const U = E(x), W = n(U);
      W && (c(
        {
          conversationId: U,
          conversationType: x.chatType
        },
        x,
        W.unReadCount
      ), f(W)), i(
        {
          conversationId: U,
          conversationType: x.chatType
        },
        x,
        0
      );
    }
    return h;
  }), l = (x) => {
    const { currConversation: h } = Ha();
    if (I.value.set(x.id, x), S(x), x.chatType === "chatRoom")
      return;
    const U = E(x), W = n(U);
    if (W) {
      c(
        {
          conversationId: U,
          conversationType: x.chatType
        },
        x,
        x.from !== t().user ? W.unReadCount + 1 : W.unReadCount
      ), f(W), (h == null ? void 0 : h.conversationId) === U && _({
        conversationId: U,
        conversationType: x.chatType
      });
      return;
    }
    const Z = i(
      {
        conversationId: U,
        conversationType: x.chatType
      },
      x,
      x.from !== t().user ? 1 : 0
    );
    f(Z);
  }, P = (x) => t().recallMessage(x).then((h) => (B(x.mid, N.user), h)), B = (x, h) => {
    var W, Z;
    const U = I.value.get(x);
    if (U) {
      const te = E(U), G = ((W = O.value.get(te)) == null ? void 0 : W.messages.findIndex((ee) => ee.id === x)) || -1;
      if (G > -1 && ((Z = O.value.get(te)) == null || Z.messages.splice(G, 1, {
        ...U,
        noticeInfo: {
          type: "notice",
          noticeType: "recall",
          ext: {
            isRecalled: !0,
            from: h
          }
        }
      })), U.chatType === "chatRoom")
        return;
      const q = n(te);
      q && c(
        {
          conversationId: te,
          conversationType: U.chatType
        },
        null,
        q.unReadCount - 1
      );
    }
  };
  return {
    messageMap: I,
    conversationMessagesMap: O,
    audioInstance: b,
    getHistoryMessages: A,
    insertMessage: S,
    sendMessage: C,
    onMessage: l,
    onRecallMessage: B,
    setAudioInstance: R,
    recallMessage: P,
    insertNoticeMessage: (x) => {
      var U;
      const h = E(x);
      O.value.has(h) && ((U = O.value.get(h)) == null || U.messages.push(x));
    },
    clear: () => {
      I.value.clear(), O.value.clear(), b.value = null;
    }
  };
}), R_ = 3, I_ = 100, S_ = ln("group", () => {
  const t = Rt([]), n = Rt(
    /* @__PURE__ */ new Map()
  ), i = Rt({
    list: [],
    unReadCount: 0
  }), c = Es(), { getUsersInfo: f } = c, E = Rt(
    {}
  ), { getChatConn: _ } = Un(), I = _(), O = Rt(!0), N = Rt({
    pageSize: 20,
    // 最大支持20
    pageNum: 0,
    needAffiliations: !0,
    needRole: !0
  }), b = () => {
    I.getJoinedGroups(N.value).then((G) => {
      G.entities && (R(G.entities), G.entities.length < N.value.pageSize ? O.value = !0 : (N.value.pageNum++, b()));
    });
  }, R = (G) => {
    let q = t.value.map((ne) => ne.groupId);
    G.filter(
      ({ groupId: ne }) => !q.find((z) => z === ne)
    ).forEach((ne) => {
      t.value.push(ne);
    });
  }, A = (G) => I.joinGroup({
    groupId: G,
    message: "apply join group"
  }).then((q) => q), S = (G) => I.createGroup({
    ...G
  }).then((q) => {
    var ee;
    return t.value.unshift({
      groupId: ((ee = q == null ? void 0 : q.data) == null ? void 0 : ee.groupid) || "",
      groupName: G.data.groupname,
      role: "owner",
      disabled: !1,
      public: G.data.public
    }), q;
  }), C = (G) => {
    let q = t.value.findIndex(
      (ee) => ee.groupId === G
    );
    q !== -1 && t.value.splice(q, 1);
  }, l = (G, q) => {
    let ee = n.value.get(G);
    ee && (ee.affiliations = ee.affiliations.filter((ne) => !q.includes(ne.member || ne.owner)), ee.affiliations_count = ee.affiliations_count - q.length, n.value.set(G, ee));
  };
  return {
    joinedGroupList: t,
    getJoinedGroupListParams: N,
    viewedGroupInfo: E,
    groupNoticeInfo: i,
    groupDetailMap: n,
    destroyGroup: (G) => I.destroyGroup({
      groupId: G
    }).then((q) => (C(G), q)),
    setViewedGroupInfo: (G) => {
      E.value = G;
    },
    getJoinedGroupList: b,
    applyJoinGroup: A,
    createGroup: S,
    getGroupInfo: (G) => I.getGroupInfo({
      groupId: G
    }).then((q) => {
      var ee;
      return (ee = q.data) == null || ee.forEach((ne) => {
        n.value.set(ne.id, ne);
        const z = ne.affiliations.map((y) => y.member || y.owner).slice(0, R_);
        f({
          userIdList: z
        });
      }), q;
    }),
    setJoinedGroupList: R,
    addGroupNotice: (G) => {
      i.value.list.unshift(G), i.value.unReadCount++;
    },
    removeStoreGroup: C,
    inviteJoinGroup: (G, q) => I.inviteUsersToGroup({
      groupId: G,
      users: q
    }),
    removeUserFromGroup: (G, q) => I.removeGroupMembers({
      groupId: G,
      users: q
    }).then((ee) => (l(G, q), ee)),
    getGroupMembers: (G, q) => I.listGroupMembers({
      groupId: G,
      pageNum: q,
      pageSize: I_
    }).then((ee) => (f({
      //@ts-ignore
      userIdList: ee.data.map((ne) => ne.member || ne.owner) || []
    }), ee)),
    clearGroupNoticeUnReadCount: () => {
      i.value.unReadCount = 0;
    },
    leaveGroup: (G) => I.leaveGroup({
      groupId: G
    }).then((q) => (C(G), q)),
    clear: () => {
      t.value = [], i.value = {
        list: [],
        unReadCount: 0
      }, n.value.clear(), E.value = {};
    }
  };
}), N_ = ln("chat", () => {
  const { getChatConn: t, getChatSDK: n } = Un(), {
    getConversationById: i,
    deleteConversation: c,
    getConversationList: f,
    clear: E
  } = Ha(), {
    onMessage: _,
    clear: I,
    onRecallMessage: O,
    insertNoticeMessage: N
  } = O_(), b = Vp(), {
    addContactNotice: R,
    addStoreContact: A,
    getContacts: S,
    clear: C
  } = b, {
    getJoinedGroupList: l,
    clear: P,
    addGroupNotice: B,
    getGroupInfo: M,
    setJoinedGroupList: g,
    removeStoreGroup: x
  } = S_(), { getBlockList: h, clear: U } = T_(), W = t(), Z = n(), { getUsersInfo: te, clear: G } = Es(), q = Rt(!1), ee = (J) => W.open(J).then((j) => (f(), S(), l(), h(), te({
    userIdList: [J.user]
  }), j)), ne = () => {
    E(), I(), C(), P(), U(), G();
  }, z = () => (ne(), W.close());
  return (() => {
    q.value || (q.value = !0, W.addEventHandler("STORE_MULTI_DEVICE", {
      onMultiDeviceEvent: (J) => {
        if (J.operation === "deleteConversation") {
          let j = i(J.conversationId);
          j && c(j);
        }
      }
    }), W.addEventHandler("STORE_MESSAGE", {
      onTextMessage: (J) => {
        _(J);
      },
      onImageMessage: (J) => {
        _(J);
      },
      onVideoMessage: (J) => {
        _(J);
      },
      onAudioMessage: (J) => {
        _(J);
      },
      onRecallMessage: (J) => {
        O(J.mid, J.from);
      }
    }), W.addEventHandler("STORE_CONNECTION_STATE", {
      onConnected: () => {
      },
      onDisconnected: () => {
      },
      //@ts-ignore
      onReconnecting: () => {
      },
      onOnline: () => {
      },
      onOffline: () => {
      }
    }), W.addEventHandler("STORE_CONTACT", {
      onContactInvited: (J) => {
        const j = {
          ...J,
          ext: "invited",
          time: (/* @__PURE__ */ new Date()).getTime()
        };
        R(j);
      },
      onContactAgreed: (J) => {
        ({
          ...J,
          time: (/* @__PURE__ */ new Date()).getTime()
        }, A({
          userId: J.from,
          remark: ""
        }));
      },
      onContactRefuse: (J) => {
        const j = {
          ...J,
          ext: "refused",
          time: (/* @__PURE__ */ new Date()).getTime()
        };
        R(j);
      },
      onContactDeleted: (J) => {
        const j = {
          ...J,
          ext: "deleted",
          time: (/* @__PURE__ */ new Date()).getTime()
        };
        R(j);
      },
      onContactAdded: (J) => {
        const j = {
          ...J,
          ext: "added",
          time: (/* @__PURE__ */ new Date()).getTime()
        };
        A({
          userId: J.from,
          remark: ""
        }), R(j);
      }
    }), W.addEventHandler("STORE_GROUP", {
      onGroupEvent: async (J) => {
        var K;
        switch (J.operation) {
          case "directJoined":
          case "create":
          case "acceptRequest":
            const se = (K = (await M(J.id)).data) == null ? void 0 : K[0];
            se && g([
              {
                groupId: se.id,
                groupName: se.name,
                public: se.public,
                description: se.description,
                disabled: !0,
                allowInvites: se.allowinvites,
                maxUsers: se.maxusers,
                approval: se.membersonly
              }
            ]);
            break;
          case "removeMember":
          case "destroy":
            x(J.id);
        }
        B({
          ...J,
          time: (/* @__PURE__ */ new Date()).getTime()
        });
        const j = Z.message.create({
          type: "txt",
          to: J.id,
          chatType: "groupChat",
          msg: ""
        });
        j.noticeInfo = {
          type: "notice",
          noticeType: "group",
          ext: {
            from: J.from,
            operation: J.operation
          }
        }, N(j);
      }
    }));
  })(), {
    conn: W,
    login: ee,
    close: z,
    getChatConn: t
  };
});
export {
  C_ as default,
  Es as useAppUserStore,
  T_ as useBlockStore,
  N_ as useChatStore,
  Un as useConnStore,
  Vp as useContactStore,
  Ha as useConversationStore,
  S_ as useGroupStore,
  O_ as useMessageStore
};
