(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    o(s);
  new MutationObserver((s) => {
    for (const h of s)
      if (h.type === "childList")
        for (const y of h.addedNodes)
          y.tagName === "LINK" && y.rel === "modulepreload" && o(y);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(s) {
    const h = {};
    return s.integrity && (h.integrity = s.integrity), s.referrerPolicy && (h.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? h.credentials = "include" : s.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h;
  }
  function o(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const h = f(s);
    fetch(s.href, h);
  }
})();
var yf = { exports: {} }, Ru = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;
function xy() {
  if (bh) return Ru;
  bh = 1;
  var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function f(o, s, h) {
    var y = null;
    if (h !== void 0 && (y = "" + h), s.key !== void 0 && (y = "" + s.key), "key" in s) {
      h = {};
      for (var b in s)
        b !== "key" && (h[b] = s[b]);
    } else h = s;
    return s = h.ref, {
      $$typeof: i,
      type: o,
      key: y,
      ref: s !== void 0 ? s : null,
      props: h
    };
  }
  return Ru.Fragment = r, Ru.jsx = f, Ru.jsxs = f, Ru;
}
var gf = { exports: {} }, ge = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eh;
function Uy() {
  if (Eh) return ge;
  Eh = 1;
  var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), w = Symbol.iterator;
  function D(p) {
    return p === null || typeof p != "object" ? null : (p = w && p[w] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var B = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, H = Object.assign, Z = {};
  function $(p, Y, J) {
    this.props = p, this.context = Y, this.refs = Z, this.updater = J || B;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(p, Y) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, Y, "setState");
  }, $.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function j() {
  }
  j.prototype = $.prototype;
  function ue(p, Y, J) {
    this.props = p, this.context = Y, this.refs = Z, this.updater = J || B;
  }
  var k = ue.prototype = new j();
  k.constructor = ue, H(k, $.prototype), k.isPureReactComponent = !0;
  var he = Array.isArray, W = { H: null, A: null, T: null, S: null, V: null }, U = Object.prototype.hasOwnProperty;
  function ye(p, Y, J, K, le, De) {
    return J = De.ref, {
      $$typeof: i,
      type: p,
      key: Y,
      ref: J !== void 0 ? J : null,
      props: De
    };
  }
  function pe(p, Y) {
    return ye(
      p.type,
      Y,
      void 0,
      void 0,
      void 0,
      p.props
    );
  }
  function me(p) {
    return typeof p == "object" && p !== null && p.$$typeof === i;
  }
  function Ze(p) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(J) {
      return Y[J];
    });
  }
  var tt = /\/+/g;
  function Je(p, Y) {
    return typeof p == "object" && p !== null && p.key != null ? Ze("" + p.key) : Y.toString(36);
  }
  function Ue() {
  }
  function we(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(Ue, Ue) : (p.status = "pending", p.then(
          function(Y) {
            p.status === "pending" && (p.status = "fulfilled", p.value = Y);
          },
          function(Y) {
            p.status === "pending" && (p.status = "rejected", p.reason = Y);
          }
        )), p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function Le(p, Y, J, K, le) {
    var De = typeof p;
    (De === "undefined" || De === "boolean") && (p = null);
    var ce = !1;
    if (p === null) ce = !0;
    else
      switch (De) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case i:
            case r:
              ce = !0;
              break;
            case R:
              return ce = p._init, Le(
                ce(p._payload),
                Y,
                J,
                K,
                le
              );
          }
      }
    if (ce)
      return le = le(p), ce = K === "" ? "." + Je(p, 0) : K, he(le) ? (J = "", ce != null && (J = ce.replace(tt, "$&/") + "/"), Le(le, Y, J, "", function(il) {
        return il;
      })) : le != null && (me(le) && (le = pe(
        le,
        J + (le.key == null || p && p.key === le.key ? "" : ("" + le.key).replace(
          tt,
          "$&/"
        ) + "/") + ce
      )), Y.push(le)), 1;
    ce = 0;
    var bt = K === "" ? "." : K + ":";
    if (he(p))
      for (var Qe = 0; Qe < p.length; Qe++)
        K = p[Qe], De = bt + Je(K, Qe), ce += Le(
          K,
          Y,
          J,
          De,
          le
        );
    else if (Qe = D(p), typeof Qe == "function")
      for (p = Qe.call(p), Qe = 0; !(K = p.next()).done; )
        K = K.value, De = bt + Je(K, Qe++), ce += Le(
          K,
          Y,
          J,
          De,
          le
        );
    else if (De === "object") {
      if (typeof p.then == "function")
        return Le(
          we(p),
          Y,
          J,
          K,
          le
        );
      throw Y = String(p), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function _(p, Y, J) {
    if (p == null) return p;
    var K = [], le = 0;
    return Le(p, K, "", "", function(De) {
      return Y.call(J, De, le++);
    }), K;
  }
  function V(p) {
    if (p._status === -1) {
      var Y = p._result;
      Y = Y(), Y.then(
        function(J) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = J);
        },
        function(J) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = J);
        }
      ), p._status === -1 && (p._status = 0, p._result = Y);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var P = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  };
  function Se() {
  }
  return ge.Children = {
    map: _,
    forEach: function(p, Y, J) {
      _(
        p,
        function() {
          Y.apply(this, arguments);
        },
        J
      );
    },
    count: function(p) {
      var Y = 0;
      return _(p, function() {
        Y++;
      }), Y;
    },
    toArray: function(p) {
      return _(p, function(Y) {
        return Y;
      }) || [];
    },
    only: function(p) {
      if (!me(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  }, ge.Component = $, ge.Fragment = f, ge.Profiler = s, ge.PureComponent = ue, ge.StrictMode = o, ge.Suspense = v, ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, ge.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return W.H.useMemoCache(p);
    }
  }, ge.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, ge.cloneElement = function(p, Y, J) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var K = H({}, p.props), le = p.key, De = void 0;
    if (Y != null)
      for (ce in Y.ref !== void 0 && (De = void 0), Y.key !== void 0 && (le = "" + Y.key), Y)
        !U.call(Y, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && Y.ref === void 0 || (K[ce] = Y[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) K.children = J;
    else if (1 < ce) {
      for (var bt = Array(ce), Qe = 0; Qe < ce; Qe++)
        bt[Qe] = arguments[Qe + 2];
      K.children = bt;
    }
    return ye(p.type, le, void 0, void 0, De, K);
  }, ge.createContext = function(p) {
    return p = {
      $$typeof: y,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: h,
      _context: p
    }, p;
  }, ge.createElement = function(p, Y, J) {
    var K, le = {}, De = null;
    if (Y != null)
      for (K in Y.key !== void 0 && (De = "" + Y.key), Y)
        U.call(Y, K) && K !== "key" && K !== "__self" && K !== "__source" && (le[K] = Y[K]);
    var ce = arguments.length - 2;
    if (ce === 1) le.children = J;
    else if (1 < ce) {
      for (var bt = Array(ce), Qe = 0; Qe < ce; Qe++)
        bt[Qe] = arguments[Qe + 2];
      le.children = bt;
    }
    if (p && p.defaultProps)
      for (K in ce = p.defaultProps, ce)
        le[K] === void 0 && (le[K] = ce[K]);
    return ye(p, De, void 0, void 0, null, le);
  }, ge.createRef = function() {
    return { current: null };
  }, ge.forwardRef = function(p) {
    return { $$typeof: b, render: p };
  }, ge.isValidElement = me, ge.lazy = function(p) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: p },
      _init: V
    };
  }, ge.memo = function(p, Y) {
    return {
      $$typeof: m,
      type: p,
      compare: Y === void 0 ? null : Y
    };
  }, ge.startTransition = function(p) {
    var Y = W.T, J = {};
    W.T = J;
    try {
      var K = p(), le = W.S;
      le !== null && le(J, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(Se, P);
    } catch (De) {
      P(De);
    } finally {
      W.T = Y;
    }
  }, ge.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, ge.use = function(p) {
    return W.H.use(p);
  }, ge.useActionState = function(p, Y, J) {
    return W.H.useActionState(p, Y, J);
  }, ge.useCallback = function(p, Y) {
    return W.H.useCallback(p, Y);
  }, ge.useContext = function(p) {
    return W.H.useContext(p);
  }, ge.useDebugValue = function() {
  }, ge.useDeferredValue = function(p, Y) {
    return W.H.useDeferredValue(p, Y);
  }, ge.useEffect = function(p, Y, J) {
    var K = W.H;
    if (typeof J == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return K.useEffect(p, Y);
  }, ge.useId = function() {
    return W.H.useId();
  }, ge.useImperativeHandle = function(p, Y, J) {
    return W.H.useImperativeHandle(p, Y, J);
  }, ge.useInsertionEffect = function(p, Y) {
    return W.H.useInsertionEffect(p, Y);
  }, ge.useLayoutEffect = function(p, Y) {
    return W.H.useLayoutEffect(p, Y);
  }, ge.useMemo = function(p, Y) {
    return W.H.useMemo(p, Y);
  }, ge.useOptimistic = function(p, Y) {
    return W.H.useOptimistic(p, Y);
  }, ge.useReducer = function(p, Y, J) {
    return W.H.useReducer(p, Y, J);
  }, ge.useRef = function(p) {
    return W.H.useRef(p);
  }, ge.useState = function(p) {
    return W.H.useState(p);
  }, ge.useSyncExternalStore = function(p, Y, J) {
    return W.H.useSyncExternalStore(
      p,
      Y,
      J
    );
  }, ge.useTransition = function() {
    return W.H.useTransition();
  }, ge.version = "19.1.0", ge;
}
var Rh;
function Uf() {
  return Rh || (Rh = 1, gf.exports = Uy()), gf.exports;
}
var Th;
function Ny() {
  return Th || (Th = 1, yf.exports = xy()), yf.exports;
}
var Te = Ny(), C = Uf(), pf = { exports: {} }, Tu = {}, Sf = { exports: {} }, bf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dh;
function Cy() {
  return Dh || (Dh = 1, function(i) {
    function r(_, V) {
      var P = _.length;
      _.push(V);
      e: for (; 0 < P; ) {
        var Se = P - 1 >>> 1, p = _[Se];
        if (0 < s(p, V))
          _[Se] = V, _[P] = p, P = Se;
        else break e;
      }
    }
    function f(_) {
      return _.length === 0 ? null : _[0];
    }
    function o(_) {
      if (_.length === 0) return null;
      var V = _[0], P = _.pop();
      if (P !== V) {
        _[0] = P;
        e: for (var Se = 0, p = _.length, Y = p >>> 1; Se < Y; ) {
          var J = 2 * (Se + 1) - 1, K = _[J], le = J + 1, De = _[le];
          if (0 > s(K, P))
            le < p && 0 > s(De, K) ? (_[Se] = De, _[le] = P, Se = le) : (_[Se] = K, _[J] = P, Se = J);
          else if (le < p && 0 > s(De, P))
            _[Se] = De, _[le] = P, Se = le;
          else break e;
        }
      }
      return V;
    }
    function s(_, V) {
      var P = _.sortIndex - V.sortIndex;
      return P !== 0 ? P : _.id - V.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var y = Date, b = y.now();
      i.unstable_now = function() {
        return y.now() - b;
      };
    }
    var v = [], m = [], R = 1, w = null, D = 3, B = !1, H = !1, Z = !1, $ = !1, j = typeof setTimeout == "function" ? setTimeout : null, ue = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function he(_) {
      for (var V = f(m); V !== null; ) {
        if (V.callback === null) o(m);
        else if (V.startTime <= _)
          o(m), V.sortIndex = V.expirationTime, r(v, V);
        else break;
        V = f(m);
      }
    }
    function W(_) {
      if (Z = !1, he(_), !H)
        if (f(v) !== null)
          H = !0, U || (U = !0, Je());
        else {
          var V = f(m);
          V !== null && Le(W, V.startTime - _);
        }
    }
    var U = !1, ye = -1, pe = 5, me = -1;
    function Ze() {
      return $ ? !0 : !(i.unstable_now() - me < pe);
    }
    function tt() {
      if ($ = !1, U) {
        var _ = i.unstable_now();
        me = _;
        var V = !0;
        try {
          e: {
            H = !1, Z && (Z = !1, ue(ye), ye = -1), B = !0;
            var P = D;
            try {
              t: {
                for (he(_), w = f(v); w !== null && !(w.expirationTime > _ && Ze()); ) {
                  var Se = w.callback;
                  if (typeof Se == "function") {
                    w.callback = null, D = w.priorityLevel;
                    var p = Se(
                      w.expirationTime <= _
                    );
                    if (_ = i.unstable_now(), typeof p == "function") {
                      w.callback = p, he(_), V = !0;
                      break t;
                    }
                    w === f(v) && o(v), he(_);
                  } else o(v);
                  w = f(v);
                }
                if (w !== null) V = !0;
                else {
                  var Y = f(m);
                  Y !== null && Le(
                    W,
                    Y.startTime - _
                  ), V = !1;
                }
              }
              break e;
            } finally {
              w = null, D = P, B = !1;
            }
            V = void 0;
          }
        } finally {
          V ? Je() : U = !1;
        }
      }
    }
    var Je;
    if (typeof k == "function")
      Je = function() {
        k(tt);
      };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), we = Ue.port2;
      Ue.port1.onmessage = tt, Je = function() {
        we.postMessage(null);
      };
    } else
      Je = function() {
        j(tt, 0);
      };
    function Le(_, V) {
      ye = j(function() {
        _(i.unstable_now());
      }, V);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, i.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : pe = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, i.unstable_next = function(_) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = D;
      }
      var P = D;
      D = V;
      try {
        return _();
      } finally {
        D = P;
      }
    }, i.unstable_requestPaint = function() {
      $ = !0;
    }, i.unstable_runWithPriority = function(_, V) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var P = D;
      D = _;
      try {
        return V();
      } finally {
        D = P;
      }
    }, i.unstable_scheduleCallback = function(_, V, P) {
      var Se = i.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? Se + P : Se) : P = Se, _) {
        case 1:
          var p = -1;
          break;
        case 2:
          p = 250;
          break;
        case 5:
          p = 1073741823;
          break;
        case 4:
          p = 1e4;
          break;
        default:
          p = 5e3;
      }
      return p = P + p, _ = {
        id: R++,
        callback: V,
        priorityLevel: _,
        startTime: P,
        expirationTime: p,
        sortIndex: -1
      }, P > Se ? (_.sortIndex = P, r(m, _), f(v) === null && _ === f(m) && (Z ? (ue(ye), ye = -1) : Z = !0, Le(W, P - Se))) : (_.sortIndex = p, r(v, _), H || B || (H = !0, U || (U = !0, Je()))), _;
    }, i.unstable_shouldYield = Ze, i.unstable_wrapCallback = function(_) {
      var V = D;
      return function() {
        var P = D;
        D = V;
        try {
          return _.apply(this, arguments);
        } finally {
          D = P;
        }
      };
    };
  }(bf)), bf;
}
var Mh;
function wy() {
  return Mh || (Mh = 1, Sf.exports = Cy()), Sf.exports;
}
var Ef = { exports: {} }, St = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function Hy() {
  if (Ah) return St;
  Ah = 1;
  var i = Uf();
  function r(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        m += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var o = {
    d: {
      f,
      r: function() {
        throw Error(r(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function h(v, m, R) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: w == null ? null : "" + w,
      children: v,
      containerInfo: m,
      implementation: R
    };
  }
  var y = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(v, m) {
    if (v === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, St.createPortal = function(v, m) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(r(299));
    return h(v, m, null, R);
  }, St.flushSync = function(v) {
    var m = y.T, R = o.p;
    try {
      if (y.T = null, o.p = 2, v) return v();
    } finally {
      y.T = m, o.p = R, o.d.f();
    }
  }, St.preconnect = function(v, m) {
    typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(v, m));
  }, St.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, St.preinit = function(v, m) {
    if (typeof v == "string" && m && typeof m.as == "string") {
      var R = m.as, w = b(R, m.crossOrigin), D = typeof m.integrity == "string" ? m.integrity : void 0, B = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      R === "style" ? o.d.S(
        v,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: w,
          integrity: D,
          fetchPriority: B
        }
      ) : R === "script" && o.d.X(v, {
        crossOrigin: w,
        integrity: D,
        fetchPriority: B,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, St.preinitModule = function(v, m) {
    if (typeof v == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var R = b(
            m.as,
            m.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: R,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && o.d.M(v);
  }, St.preload = function(v, m) {
    if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var R = m.as, w = b(R, m.crossOrigin);
      o.d.L(v, R, {
        crossOrigin: w,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, St.preloadModule = function(v, m) {
    if (typeof v == "string")
      if (m) {
        var R = b(m.as, m.crossOrigin);
        o.d.m(v, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: R,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else o.d.m(v);
  }, St.requestFormReset = function(v) {
    o.d.r(v);
  }, St.unstable_batchedUpdates = function(v, m) {
    return v(m);
  }, St.useFormState = function(v, m, R) {
    return y.H.useFormState(v, m, R);
  }, St.useFormStatus = function() {
    return y.H.useHostTransitionStatus();
  }, St.version = "19.1.0", St;
}
var zh;
function Ly() {
  if (zh) return Ef.exports;
  zh = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), Ef.exports = Hy(), Ef.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oh;
function By() {
  if (Oh) return Tu;
  Oh = 1;
  var i = wy(), r = Uf(), f = Ly();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function h(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function y(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (h(e) !== e)
      throw Error(o(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return b(n), e;
          if (u === a) return b(n), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var c = !1, d = n.child; d; ) {
          if (d === l) {
            c = !0, l = n, a = u;
            break;
          }
          if (d === a) {
            c = !0, a = n, l = u;
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = u.child; d; ) {
            if (d === l) {
              c = !0, l = u, a = n;
              break;
            }
            if (d === a) {
              c = !0, a = u, l = n;
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = m(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var R = Object.assign, w = Symbol.for("react.element"), D = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), ue = Symbol.for("react.consumer"), k = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), me = Symbol.for("react.activity"), Ze = Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
  function Je(e) {
    return e === null || typeof e != "object" ? null : (e = tt && e[tt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ue = Symbol.for("react.client.reference");
  function we(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ue ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case $:
        return "Profiler";
      case Z:
        return "StrictMode";
      case W:
        return "Suspense";
      case U:
        return "SuspenseList";
      case me:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case B:
          return "Portal";
        case k:
          return (e.displayName || "Context") + ".Provider";
        case ue:
          return (e._context.displayName || "Context") + ".Consumer";
        case he:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ye:
          return t = e.displayName || null, t !== null ? t : we(e.type) || "Memo";
        case pe:
          t = e._payload, e = e._init;
          try {
            return we(e(t));
          } catch {
          }
      }
    return null;
  }
  var Le = Array.isArray, _ = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Se = [], p = -1;
  function Y(e) {
    return { current: e };
  }
  function J(e) {
    0 > p || (e.current = Se[p], Se[p] = null, p--);
  }
  function K(e, t) {
    p++, Se[p] = e.current, e.current = t;
  }
  var le = Y(null), De = Y(null), ce = Y(null), bt = Y(null);
  function Qe(e, t) {
    switch (K(ce, t), K(De, e), K(le, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? $d(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = $d(t), e = kd(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    J(le), K(le, e);
  }
  function il() {
    J(le), J(De), J(ce);
  }
  function rt(e) {
    e.memoizedState !== null && K(bt, e);
    var t = le.current, l = kd(t, e.type);
    t !== l && (K(De, e), K(le, l));
  }
  function Pt(e) {
    De.current === e && (J(le), J(De)), bt.current === e && (J(bt), gu._currentValue = P);
  }
  var ja = Object.prototype.hasOwnProperty, Dn = i.unstable_scheduleCallback, It = i.unstable_cancelCallback, cr = i.unstable_shouldYield, fr = i.unstable_requestPaint, xt = i.unstable_now, or = i.unstable_getCurrentPriorityLevel, Lu = i.unstable_ImmediatePriority, Bu = i.unstable_UserBlockingPriority, qa = i.unstable_NormalPriority, yl = i.unstable_LowPriority, wl = i.unstable_IdlePriority, ju = i.log, Mn = i.unstable_setDisableYieldValue, Tt = null, We = null;
  function el(e) {
    if (typeof ju == "function" && Mn(e), We && typeof We.setStrictMode == "function")
      try {
        We.setStrictMode(Tt, e);
      } catch {
      }
  }
  var ht = Math.clz32 ? Math.clz32 : qu, sr = Math.log, rl = Math.LN2;
  function qu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (sr(e) / rl | 0) | 0;
  }
  var da = 256, ha = 4194304;
  function gl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ma(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~u, a !== 0 ? n = gl(a) : (c &= d, c !== 0 ? n = gl(c) : l || (l = d & ~e, l !== 0 && (n = gl(l))))) : (d = a & ~u, d !== 0 ? n = gl(d) : c !== 0 ? n = gl(c) : l || (l = a & ~e, l !== 0 && (n = gl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function cl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Yu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ya() {
    var e = da;
    return da <<= 1, (da & 4194048) === 0 && (da = 256), e;
  }
  function Gu() {
    var e = ha;
    return ha <<= 1, (ha & 62914560) === 0 && (ha = 4194304), e;
  }
  function Ga(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function va(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Xu(e, t, l, a, n, u) {
    var c = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var d = e.entanglements, g = e.expirationTimes, z = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var L = 31 - ht(l), G = 1 << L;
      d[L] = 0, g[L] = -1;
      var O = z[L];
      if (O !== null)
        for (z[L] = null, L = 0; L < O.length; L++) {
          var x = O[L];
          x !== null && (x.lane &= -536870913);
        }
      l &= ~G;
    }
    a !== 0 && ya(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function ya(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - ht(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 4194090;
  }
  function ga(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - ht(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function An(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function zn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function S() {
    var e = V.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : mh(e.type));
  }
  function M(e, t) {
    var l = V.p;
    try {
      return V.p = e, t();
    } finally {
      V.p = l;
    }
  }
  var N = Math.random().toString(36).slice(2), X = "__reactFiber$" + N, Q = "__reactProps$" + N, ee = "__reactContainer$" + N, ie = "__reactEvents$" + N, F = "__reactListeners$" + N, ne = "__reactHandles$" + N, te = "__reactResources$" + N, oe = "__reactMarker$" + N;
  function se(e) {
    delete e[X], delete e[Q], delete e[ie], delete e[F], delete e[ne];
  }
  function ve(e) {
    var t = e[X];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[ee] || l[X]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Id(e); e !== null; ) {
            if (l = e[X]) return l;
            e = Id(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function xe(e) {
    if (e = e[X] || e[ee]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ke(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Fe(e) {
    var t = e[te];
    return t || (t = e[te] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ne(e) {
    e[oe] = !0;
  }
  var Oe = /* @__PURE__ */ new Set(), Hl = {};
  function Et(e, t) {
    Yt(e, t), Yt(e + "Capture", t);
  }
  function Yt(e, t) {
    for (Hl[e] = t, e = 0; e < t.length; e++)
      Oe.add(t[e]);
  }
  var Dt = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ll = {}, Bl = {};
  function On(e) {
    return ja.call(Bl, e) ? !0 : ja.call(Ll, e) ? !1 : Dt.test(e) ? Bl[e] = !0 : (Ll[e] = !0, !1);
  }
  function Gt(e, t, l) {
    if (On(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function pl(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Ee(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  var gt, tl;
  function ll(e) {
    if (gt === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        gt = t && t[1] || "", tl = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + gt + e + tl;
  }
  var pa = !1;
  function $e(e, t) {
    if (!e || pa) return "";
    pa = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (x) {
                  var O = x;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (x) {
                  O = x;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                O = x;
              }
              (G = e()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (x) {
            if (x && O && typeof x.stack == "string")
              return [x.stack, O.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), c = u[0], d = u[1];
      if (c && d) {
        var g = c.split(`
`), z = d.split(`
`);
        for (n = a = 0; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < z.length && !z[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === g.length || n === z.length)
          for (a = g.length - 1, n = z.length - 1; 1 <= a && 0 <= n && g[a] !== z[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (g[a] !== z[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || g[a] !== z[n]) {
                  var L = `
` + g[a].replace(" at new ", " at ");
                  return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), L;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      pa = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? ll(l) : "";
  }
  function jl(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ll(e.type);
      case 16:
        return ll("Lazy");
      case 13:
        return ll("Suspense");
      case 19:
        return ll("SuspenseList");
      case 0:
      case 15:
        return $e(e.type, !1);
      case 11:
        return $e(e.type.render, !1);
      case 1:
        return $e(e.type, !0);
      case 31:
        return ll("Activity");
      default:
        return "";
    }
  }
  function _n(e) {
    try {
      var t = "";
      do
        t += jl(e), e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function Mt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Xf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Mm(e) {
    var t = Xf(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, u = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          a = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Qu(e) {
    e._valueTracker || (e._valueTracker = Mm(e));
  }
  function Qf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Xf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Vu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Am = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(
      Am,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function dr(e, t, l, a, n, u, c, d) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Mt(t)) : e.value !== "" + Mt(t) && (e.value = "" + Mt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? hr(e, c, Mt(t)) : l != null ? hr(e, c, Mt(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Mt(d) : e.removeAttribute("name");
  }
  function Vf(e, t, l, a, n, u, c, d) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null))
        return;
      l = l != null ? "" + Mt(l) : "", t = t != null ? "" + Mt(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c);
  }
  function hr(e, t, l) {
    t === "number" && Vu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Xa(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Mt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zf(e, t, l) {
    if (t != null && (t = "" + Mt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Mt(l) : "";
  }
  function Kf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (Le(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = Mt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a);
  }
  function Qa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var zm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Jf(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || zm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function $f(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && Jf(e, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Jf(e, u, t[u]);
  }
  function mr(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Om = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), _m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zu(e) {
    return _m.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var vr = null;
  function yr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Va = null, Za = null;
  function kf(e) {
    var t = xe(e);
    if (t && (e = t.stateNode)) {
      var l = e[Q] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (dr(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Xt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[Q] || null;
                if (!n) throw Error(o(90));
                dr(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && Qf(a);
          }
          break e;
        case "textarea":
          Zf(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Xa(e, !!l.multiple, t, !1);
      }
    }
  }
  var gr = !1;
  function Wf(e, t, l) {
    if (gr) return e(t, l);
    gr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (gr = !1, (Va !== null || Za !== null) && (xi(), Va && (t = Va, e = Za, Za = Va = null, kf(t), e)))
        for (t = 0; t < e.length; t++) kf(e[t]);
    }
  }
  function xn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[Q] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        o(231, t, typeof l)
      );
    return l;
  }
  var Sl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pr = !1;
  if (Sl)
    try {
      var Un = {};
      Object.defineProperty(Un, "passive", {
        get: function() {
          pr = !0;
        }
      }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
    } catch {
      pr = !1;
    }
  var ql = null, Sr = null, Ku = null;
  function Ff() {
    if (Ku) return Ku;
    var e, t = Sr, l = t.length, a, n = "value" in ql ? ql.value : ql.textContent, u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++) ;
    return Ku = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ju(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $u() {
    return !0;
  }
  function Pf() {
    return !1;
  }
  function At(e) {
    function t(l, a, n, u, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(u) : u[d]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? $u : Pf, this.isPropagationStopped = Pf, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = $u);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = $u);
      },
      persist: function() {
      },
      isPersistent: $u
    }), t;
  }
  var Sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ku = At(Sa), Nn = R({}, Sa, { view: 0, detail: 0 }), xm = At(Nn), br, Er, Cn, Wu = R({}, Nn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Cn && (Cn && e.type === "mousemove" ? (br = e.screenX - Cn.screenX, Er = e.screenY - Cn.screenY) : Er = br = 0, Cn = e), br);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Er;
    }
  }), If = At(Wu), Um = R({}, Wu, { dataTransfer: 0 }), Nm = At(Um), Cm = R({}, Nn, { relatedTarget: 0 }), Rr = At(Cm), wm = R({}, Sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hm = At(wm), Lm = R({}, Sa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Bm = At(Lm), jm = R({}, Sa, { data: 0 }), eo = At(jm), qm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ym = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Xm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gm[e]) ? !!t[e] : !1;
  }
  function Tr() {
    return Xm;
  }
  var Qm = R({}, Nn, {
    key: function(e) {
      if (e.key) {
        var t = qm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ju(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ym[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tr,
    charCode: function(e) {
      return e.type === "keypress" ? Ju(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ju(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Vm = At(Qm), Zm = R({}, Wu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), to = At(Zm), Km = R({}, Nn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tr
  }), Jm = At(Km), $m = R({}, Sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), km = At($m), Wm = R({}, Wu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fm = At(Wm), Pm = R({}, Sa, {
    newState: 0,
    oldState: 0
  }), Im = At(Pm), ev = [9, 13, 27, 32], Dr = Sl && "CompositionEvent" in window, wn = null;
  Sl && "documentMode" in document && (wn = document.documentMode);
  var tv = Sl && "TextEvent" in window && !wn, lo = Sl && (!Dr || wn && 8 < wn && 11 >= wn), ao = " ", no = !1;
  function uo(e, t) {
    switch (e) {
      case "keyup":
        return ev.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function io(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ka = !1;
  function lv(e, t) {
    switch (e) {
      case "compositionend":
        return io(t);
      case "keypress":
        return t.which !== 32 ? null : (no = !0, ao);
      case "textInput":
        return e = t.data, e === ao && no ? null : e;
      default:
        return null;
    }
  }
  function av(e, t) {
    if (Ka)
      return e === "compositionend" || !Dr && uo(e, t) ? (e = Ff(), Ku = Sr = ql = null, Ka = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return lo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var nv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!nv[e.type] : t === "textarea";
  }
  function co(e, t, l, a) {
    Va ? Za ? Za.push(a) : Za = [a] : Va = a, t = Li(t, "onChange"), 0 < t.length && (l = new ku(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var Hn = null, Ln = null;
  function uv(e) {
    Qd(e, 0);
  }
  function Fu(e) {
    var t = Ke(e);
    if (Qf(t)) return e;
  }
  function fo(e, t) {
    if (e === "change") return t;
  }
  var oo = !1;
  if (Sl) {
    var Mr;
    if (Sl) {
      var Ar = "oninput" in document;
      if (!Ar) {
        var so = document.createElement("div");
        so.setAttribute("oninput", "return;"), Ar = typeof so.oninput == "function";
      }
      Mr = Ar;
    } else Mr = !1;
    oo = Mr && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    Hn && (Hn.detachEvent("onpropertychange", mo), Ln = Hn = null);
  }
  function mo(e) {
    if (e.propertyName === "value" && Fu(Ln)) {
      var t = [];
      co(
        t,
        Ln,
        e,
        yr(e)
      ), Wf(uv, t);
    }
  }
  function iv(e, t, l) {
    e === "focusin" ? (ho(), Hn = t, Ln = l, Hn.attachEvent("onpropertychange", mo)) : e === "focusout" && ho();
  }
  function rv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fu(Ln);
  }
  function cv(e, t) {
    if (e === "click") return Fu(t);
  }
  function fv(e, t) {
    if (e === "input" || e === "change")
      return Fu(t);
  }
  function ov(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ut = typeof Object.is == "function" ? Object.is : ov;
  function Bn(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!ja.call(t, n) || !Ut(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function vo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yo(e, t) {
    var l = vo(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = vo(l);
    }
  }
  function go(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? go(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function po(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Vu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Vu(e.document);
    }
    return t;
  }
  function zr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var sv = Sl && "documentMode" in document && 11 >= document.documentMode, Ja = null, Or = null, jn = null, _r = !1;
  function So(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    _r || Ja == null || Ja !== Vu(a) || (a = Ja, "selectionStart" in a && zr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), jn && Bn(jn, a) || (jn = a, a = Li(Or, "onSelect"), 0 < a.length && (t = new ku(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = Ja)));
  }
  function ba(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var $a = {
    animationend: ba("Animation", "AnimationEnd"),
    animationiteration: ba("Animation", "AnimationIteration"),
    animationstart: ba("Animation", "AnimationStart"),
    transitionrun: ba("Transition", "TransitionRun"),
    transitionstart: ba("Transition", "TransitionStart"),
    transitioncancel: ba("Transition", "TransitionCancel"),
    transitionend: ba("Transition", "TransitionEnd")
  }, xr = {}, bo = {};
  Sl && (bo = document.createElement("div").style, "AnimationEvent" in window || (delete $a.animationend.animation, delete $a.animationiteration.animation, delete $a.animationstart.animation), "TransitionEvent" in window || delete $a.transitionend.transition);
  function Ea(e) {
    if (xr[e]) return xr[e];
    if (!$a[e]) return e;
    var t = $a[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in bo)
        return xr[e] = t[l];
    return e;
  }
  var Eo = Ea("animationend"), Ro = Ea("animationiteration"), To = Ea("animationstart"), dv = Ea("transitionrun"), hv = Ea("transitionstart"), mv = Ea("transitioncancel"), Do = Ea("transitionend"), Mo = /* @__PURE__ */ new Map(), Ur = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ur.push("scrollEnd");
  function al(e, t) {
    Mo.set(e, t), Et(t, [e]);
  }
  var Ao = /* @__PURE__ */ new WeakMap();
  function Qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ao.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: _n(t)
      }, Ao.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: _n(t)
    };
  }
  var Vt = [], ka = 0, Nr = 0;
  function Pu() {
    for (var e = ka, t = Nr = ka = 0; t < e; ) {
      var l = Vt[t];
      Vt[t++] = null;
      var a = Vt[t];
      Vt[t++] = null;
      var n = Vt[t];
      Vt[t++] = null;
      var u = Vt[t];
      if (Vt[t++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      u !== 0 && zo(l, n, u);
    }
  }
  function Iu(e, t, l, a) {
    Vt[ka++] = e, Vt[ka++] = t, Vt[ka++] = l, Vt[ka++] = a, Nr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Cr(e, t, l, a) {
    return Iu(e, t, l, a), ei(e);
  }
  function Wa(e, t) {
    return Iu(e, null, null, t), ei(e);
  }
  function zo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - ht(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function ei(e) {
    if (50 < fu)
      throw fu = 0, qc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Fa = {};
  function vv(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Nt(e, t, l, a) {
    return new vv(e, t, l, a);
  }
  function wr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function bl(e, t) {
    var l = e.alternate;
    return l === null ? (l = Nt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Oo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ti(e, t, l, a, n, u) {
    var c = 0;
    if (a = e, typeof e == "function") wr(e) && (c = 1);
    else if (typeof e == "string")
      c = gy(
        e,
        l,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case me:
          return e = Nt(31, l, t, n), e.elementType = me, e.lanes = u, e;
        case H:
          return Ra(l.children, n, u, t);
        case Z:
          c = 8, n |= 24;
          break;
        case $:
          return e = Nt(12, l, t, n | 2), e.elementType = $, e.lanes = u, e;
        case W:
          return e = Nt(13, l, t, n), e.elementType = W, e.lanes = u, e;
        case U:
          return e = Nt(19, l, t, n), e.elementType = U, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case j:
              case k:
                c = 10;
                break e;
              case ue:
                c = 9;
                break e;
              case he:
                c = 11;
                break e;
              case ye:
                c = 14;
                break e;
              case pe:
                c = 16, a = null;
                break e;
            }
          c = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Nt(c, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function Ra(e, t, l, a) {
    return e = Nt(7, e, a, t), e.lanes = l, e;
  }
  function Hr(e, t, l) {
    return e = Nt(6, e, null, t), e.lanes = l, e;
  }
  function Lr(e, t, l) {
    return t = Nt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Pa = [], Ia = 0, li = null, ai = 0, Zt = [], Kt = 0, Ta = null, El = 1, Rl = "";
  function Da(e, t) {
    Pa[Ia++] = ai, Pa[Ia++] = li, li = e, ai = t;
  }
  function _o(e, t, l) {
    Zt[Kt++] = El, Zt[Kt++] = Rl, Zt[Kt++] = Ta, Ta = e;
    var a = El;
    e = Rl;
    var n = 32 - ht(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - ht(t) + n;
    if (30 < u) {
      var c = n - n % 5;
      u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, El = 1 << 32 - ht(t) + n | l << n | a, Rl = u + e;
    } else
      El = 1 << u | l << n | a, Rl = e;
  }
  function Br(e) {
    e.return !== null && (Da(e, 1), _o(e, 1, 0));
  }
  function jr(e) {
    for (; e === li; )
      li = Pa[--Ia], Pa[Ia] = null, ai = Pa[--Ia], Pa[Ia] = null;
    for (; e === Ta; )
      Ta = Zt[--Kt], Zt[Kt] = null, Rl = Zt[--Kt], Zt[Kt] = null, El = Zt[--Kt], Zt[Kt] = null;
  }
  var Rt = null, Ie = null, He = !1, Ma = null, fl = !1, qr = Error(o(519));
  function Aa(e) {
    var t = Error(o(418, ""));
    throw Gn(Qt(t, e)), qr;
  }
  function xo(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[X] = e, t[Q] = a, l) {
      case "dialog":
        Ae("cancel", t), Ae("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < su.length; l++)
          Ae(su[l], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ae("error", t), Ae("load", t);
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        Ae("invalid", t), Vf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Qu(t);
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), Kf(t, a.value, a.defaultValue, a.children), Qu(t);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Jd(t.textContent, l) ? (a.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), a.onScroll != null && Ae("scroll", t), a.onScrollEnd != null && Ae("scrollend", t), a.onClick != null && (t.onclick = Bi), t = !0) : t = !1, t || Aa(e);
  }
  function Uo(e) {
    for (Rt = e.return; Rt; )
      switch (Rt.tag) {
        case 5:
        case 13:
          fl = !1;
          return;
        case 27:
        case 3:
          fl = !0;
          return;
        default:
          Rt = Rt.return;
      }
  }
  function qn(e) {
    if (e !== Rt) return !1;
    if (!He) return Uo(e), He = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || tf(e.type, e.memoizedProps)), l = !l), l && Ie && Aa(e), Uo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (l = e.data, l === "/$") {
              if (t === 0) {
                Ie = ul(e.nextSibling);
                break e;
              }
              t--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || t++;
          e = e.nextSibling;
        }
        Ie = null;
      }
    } else
      t === 27 ? (t = Ie, ta(e.type) ? (e = uf, uf = null, Ie = e) : Ie = t) : Ie = Rt ? ul(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Yn() {
    Ie = Rt = null, He = !1;
  }
  function No() {
    var e = Ma;
    return e !== null && (_t === null ? _t = e : _t.push.apply(
      _t,
      e
    ), Ma = null), e;
  }
  function Gn(e) {
    Ma === null ? Ma = [e] : Ma.push(e);
  }
  var Yr = Y(null), za = null, Tl = null;
  function Yl(e, t, l) {
    K(Yr, t._currentValue), t._currentValue = l;
  }
  function Dl(e) {
    e._currentValue = Yr.current, J(Yr);
  }
  function Gr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Xr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var d = u;
          u = n;
          for (var g = 0; g < t.length; g++)
            if (d.context === t[g]) {
              u.lanes |= l, d = u.alternate, d !== null && (d.lanes |= l), Gr(
                u.return,
                l,
                e
              ), a || (c = null);
              break e;
            }
          u = d.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(o(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Gr(c, l, e), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function Xn(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(o(387));
        if (c = c.memoizedProps, c !== null) {
          var d = n.type;
          Ut(n.pendingProps.value, c.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (n === bt.current) {
        if (c = n.alternate, c === null) throw Error(o(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(gu) : e = [gu]);
      }
      n = n.return;
    }
    e !== null && Xr(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function ni(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ut(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Oa(e) {
    za = e, Tl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return Co(za, e);
  }
  function ui(e, t) {
    return za === null && Oa(e), Co(e, t);
  }
  function Co(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Tl === null) {
      if (e === null) throw Error(o(308));
      Tl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Tl = Tl.next = t;
    return l;
  }
  var yv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, gv = i.unstable_scheduleCallback, pv = i.unstable_NormalPriority, ct = {
    $$typeof: k,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Qr() {
    return {
      controller: new yv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Qn(e) {
    e.refCount--, e.refCount === 0 && gv(pv, function() {
      e.controller.abort();
    });
  }
  var Vn = null, Vr = 0, en = 0, tn = null;
  function Sv(e, t) {
    if (Vn === null) {
      var l = Vn = [];
      Vr = 0, en = Kc(), tn = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Vr++, t.then(wo, wo), t;
  }
  function wo() {
    if (--Vr === 0 && Vn !== null) {
      tn !== null && (tn.status = "fulfilled");
      var e = Vn;
      Vn = null, en = 0, tn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function bv(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < l.length; n++) (0, l[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var Ho = _.S;
  _.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Sv(e, t), Ho !== null && Ho(e, t);
  };
  var _a = Y(null);
  function Zr() {
    var e = _a.current;
    return e !== null ? e : Ve.pooledCache;
  }
  function ii(e, t) {
    t === null ? K(_a, _a.current) : K(_a, t.pool);
  }
  function Lo() {
    var e = Zr();
    return e === null ? null : { parent: ct._currentValue, pool: e };
  }
  var Zn = Error(o(460)), Bo = Error(o(474)), ri = Error(o(542)), Kr = { then: function() {
  } };
  function jo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ci() {
  }
  function qo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(ci, ci), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Go(e), e;
      default:
        if (typeof t.status == "string") t.then(ci, ci);
        else {
          if (e = Ve, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Go(e), e;
        }
        throw Kn = t, Zn;
    }
  }
  var Kn = null;
  function Yo() {
    if (Kn === null) throw Error(o(459));
    var e = Kn;
    return Kn = null, e;
  }
  function Go(e) {
    if (e === Zn || e === ri)
      throw Error(o(483));
  }
  var Gl = !1;
  function Jr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function $r(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Xl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ql(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Be & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = ei(e), zo(e, null, l), t;
    }
    return Iu(e, a, t, l), ei(e);
  }
  function Jn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, ga(e, l);
    }
  }
  function kr(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = c : u = u.next = c, l = l.next;
        } while (l !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Wr = !1;
  function $n() {
    if (Wr) {
      var e = tn;
      if (e !== null) throw e;
    }
  }
  function kn(e, t, l, a) {
    Wr = !1;
    var n = e.updateQueue;
    Gl = !1;
    var u = n.firstBaseUpdate, c = n.lastBaseUpdate, d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var g = d, z = g.next;
      g.next = null, c === null ? u = z : c.next = z, c = g;
      var L = e.alternate;
      L !== null && (L = L.updateQueue, d = L.lastBaseUpdate, d !== c && (d === null ? L.firstBaseUpdate = z : d.next = z, L.lastBaseUpdate = g));
    }
    if (u !== null) {
      var G = n.baseState;
      c = 0, L = z = g = null, d = u;
      do {
        var O = d.lane & -536870913, x = O !== d.lane;
        if (x ? (_e & O) === O : (a & O) === O) {
          O !== 0 && O === en && (Wr = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var de = e, re = d;
            O = t;
            var Ge = l;
            switch (re.tag) {
              case 1:
                if (de = re.payload, typeof de == "function") {
                  G = de.call(Ge, G, O);
                  break e;
                }
                G = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = re.payload, O = typeof de == "function" ? de.call(Ge, G, O) : de, O == null) break e;
                G = R({}, G, O);
                break e;
              case 2:
                Gl = !0;
            }
          }
          O = d.callback, O !== null && (e.flags |= 64, x && (e.flags |= 8192), x = n.callbacks, x === null ? n.callbacks = [O] : x.push(O));
        } else
          x = {
            lane: O,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, L === null ? (z = L = x, g = G) : L = L.next = x, c |= O;
        if (d = d.next, d === null) {
          if (d = n.shared.pending, d === null)
            break;
          x = d, d = x.next, x.next = null, n.lastBaseUpdate = x, n.shared.pending = null;
        }
      } while (!0);
      L === null && (g = G), n.baseState = g, n.firstBaseUpdate = z, n.lastBaseUpdate = L, u === null && (n.shared.lanes = 0), Fl |= c, e.lanes = c, e.memoizedState = G;
    }
  }
  function Xo(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Qo(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Xo(l[e], t);
  }
  var ln = Y(null), fi = Y(0);
  function Vo(e, t) {
    e = Ul, K(fi, e), K(ln, t), Ul = e | t.baseLanes;
  }
  function Fr() {
    K(fi, Ul), K(ln, ln.current);
  }
  function Pr() {
    Ul = fi.current, J(ln), J(fi);
  }
  var Vl = 0, be = null, qe = null, nt = null, oi = !1, an = !1, xa = !1, si = 0, Wn = 0, nn = null, Ev = 0;
  function lt() {
    throw Error(o(321));
  }
  function Ir(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Ut(e[l], t[l])) return !1;
    return !0;
  }
  function ec(e, t, l, a, n, u) {
    return Vl = u, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = e === null || e.memoizedState === null ? zs : Os, xa = !1, u = l(a, n), xa = !1, an && (u = Ko(
      t,
      l,
      a,
      n
    )), Zo(e), u;
  }
  function Zo(e) {
    _.H = gi;
    var t = qe !== null && qe.next !== null;
    if (Vl = 0, nt = qe = be = null, oi = !1, Wn = 0, nn = null, t) throw Error(o(300));
    e === null || ot || (e = e.dependencies, e !== null && ni(e) && (ot = !0));
  }
  function Ko(e, t, l, a) {
    be = e;
    var n = 0;
    do {
      if (an && (nn = null), Wn = 0, an = !1, 25 <= n) throw Error(o(301));
      if (n += 1, nt = qe = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      _.H = Ov, u = t(l, a);
    } while (an);
    return u;
  }
  function Rv() {
    var e = _.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Fn(t) : t, e = e.useState()[0], (qe !== null ? qe.memoizedState : null) !== e && (be.flags |= 1024), t;
  }
  function tc() {
    var e = si !== 0;
    return si = 0, e;
  }
  function lc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function ac(e) {
    if (oi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      oi = !1;
    }
    Vl = 0, nt = qe = be = null, an = !1, Wn = si = 0, nn = null;
  }
  function zt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return nt === null ? be.memoizedState = nt = e : nt = nt.next = e, nt;
  }
  function ut() {
    if (qe === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var t = nt === null ? be.memoizedState : nt.next;
    if (t !== null)
      nt = t, qe = e;
    else {
      if (e === null)
        throw be.alternate === null ? Error(o(467)) : Error(o(310));
      qe = e, e = {
        memoizedState: qe.memoizedState,
        baseState: qe.baseState,
        baseQueue: qe.baseQueue,
        queue: qe.queue,
        next: null
      }, nt === null ? be.memoizedState = nt = e : nt = nt.next = e;
    }
    return nt;
  }
  function nc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fn(e) {
    var t = Wn;
    return Wn += 1, nn === null && (nn = []), e = qo(nn, e, t), t = be, (nt === null ? t.memoizedState : nt.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? zs : Os), e;
  }
  function di(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Fn(e);
      if (e.$$typeof === k) return pt(e);
    }
    throw Error(o(438, String(e)));
  }
  function uc(e) {
    var t = null, l = be.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = be.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = nc(), be.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Ze;
    return t.index++, l;
  }
  function Ml(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hi(e) {
    var t = ut();
    return ic(t, qe, e);
  }
  function ic(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = u.next, u.next = c;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var d = c = null, g = null, z = t, L = !1;
      do {
        var G = z.lane & -536870913;
        if (G !== z.lane ? (_e & G) === G : (Vl & G) === G) {
          var O = z.revertLane;
          if (O === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }), G === en && (L = !0);
          else if ((Vl & O) === O) {
            z = z.next, O === en && (L = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, g === null ? (d = g = G, c = u) : g = g.next = G, be.lanes |= O, Fl |= O;
          G = z.action, xa && l(u, G), u = z.hasEagerState ? z.eagerState : l(u, G);
        } else
          O = {
            lane: G,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }, g === null ? (d = g = O, c = u) : g = g.next = O, be.lanes |= G, Fl |= G;
        z = z.next;
      } while (z !== null && z !== t);
      if (g === null ? c = u : g.next = d, !Ut(u, e.memoizedState) && (ot = !0, L && (l = tn, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = c, e.baseQueue = g, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function rc(e) {
    var t = ut(), l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = n = n.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== n);
      Ut(u, t.memoizedState) || (ot = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Jo(e, t, l) {
    var a = be, n = ut(), u = He;
    if (u) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var c = !Ut(
      (qe || n).memoizedState,
      l
    );
    c && (n.memoizedState = l, ot = !0), n = n.queue;
    var d = Wo.bind(null, a, n, e);
    if (Pn(2048, 8, d, [e]), n.getSnapshot !== t || c || nt !== null && nt.memoizedState.tag & 1) {
      if (a.flags |= 2048, un(
        9,
        mi(),
        ko.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), Ve === null) throw Error(o(349));
      u || (Vl & 124) !== 0 || $o(a, t, l);
    }
    return l;
  }
  function $o(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = be.updateQueue, t === null ? (t = nc(), be.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function ko(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Fo(t) && Po(e);
  }
  function Wo(e, t, l) {
    return l(function() {
      Fo(t) && Po(e);
    });
  }
  function Fo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Ut(e, l);
    } catch {
      return !0;
    }
  }
  function Po(e) {
    var t = Wa(e, 2);
    t !== null && Bt(t, e, 2);
  }
  function cc(e) {
    var t = zt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), xa) {
        el(!0);
        try {
          l();
        } finally {
          el(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ml,
      lastRenderedState: e
    }, t;
  }
  function Io(e, t, l, a) {
    return e.baseState = l, ic(
      e,
      qe,
      typeof a == "function" ? a : Ml
    );
  }
  function Tv(e, t, l, a, n) {
    if (yi(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      _.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, es(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function es(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = _.T, c = {};
      _.T = c;
      try {
        var d = l(n, a), g = _.S;
        g !== null && g(c, d), ts(e, t, d);
      } catch (z) {
        fc(e, t, z);
      } finally {
        _.T = u;
      }
    } else
      try {
        u = l(n, a), ts(e, t, u);
      } catch (z) {
        fc(e, t, z);
      }
  }
  function ts(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        ls(e, t, a);
      },
      function(a) {
        return fc(e, t, a);
      }
    ) : ls(e, t, l);
  }
  function ls(e, t, l) {
    t.status = "fulfilled", t.value = l, as(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, es(e, l)));
  }
  function fc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, as(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function as(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ns(e, t) {
    return t;
  }
  function us(e, t) {
    if (He) {
      var l = Ve.formState;
      if (l !== null) {
        e: {
          var a = be;
          if (He) {
            if (Ie) {
              t: {
                for (var n = Ie, u = fl; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = ul(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Ie = ul(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            Aa(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = zt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ns,
      lastRenderedState: t
    }, l.queue = a, l = Ds.bind(
      null,
      be,
      a
    ), a.dispatch = l, a = cc(!1), u = mc.bind(
      null,
      be,
      !1,
      a.queue
    ), a = zt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = Tv.bind(
      null,
      be,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function is(e) {
    var t = ut();
    return rs(t, qe, e);
  }
  function rs(e, t, l) {
    if (t = ic(
      e,
      t,
      ns
    )[0], e = hi(Ml)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Fn(t);
      } catch (c) {
        throw c === Zn ? ri : c;
      }
    else a = t;
    t = ut();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (be.flags |= 2048, un(
      9,
      mi(),
      Dv.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function Dv(e, t) {
    e.action = t;
  }
  function cs(e) {
    var t = ut(), l = qe;
    if (l !== null)
      return rs(t, l, e);
    ut(), t = t.memoizedState, l = ut();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function un(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = be.updateQueue, t === null && (t = nc(), be.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function mi() {
    return { destroy: void 0, resource: void 0 };
  }
  function fs() {
    return ut().memoizedState;
  }
  function vi(e, t, l, a) {
    var n = zt();
    a = a === void 0 ? null : a, be.flags |= e, n.memoizedState = un(
      1 | t,
      mi(),
      l,
      a
    );
  }
  function Pn(e, t, l, a) {
    var n = ut();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    qe !== null && a !== null && Ir(a, qe.memoizedState.deps) ? n.memoizedState = un(t, u, l, a) : (be.flags |= e, n.memoizedState = un(
      1 | t,
      u,
      l,
      a
    ));
  }
  function os(e, t) {
    vi(8390656, 8, e, t);
  }
  function ss(e, t) {
    Pn(2048, 8, e, t);
  }
  function ds(e, t) {
    return Pn(4, 2, e, t);
  }
  function hs(e, t) {
    return Pn(4, 4, e, t);
  }
  function ms(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function vs(e, t, l) {
    l = l != null ? l.concat([e]) : null, Pn(4, 4, ms.bind(null, t, e), l);
  }
  function oc() {
  }
  function ys(e, t) {
    var l = ut();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Ir(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function gs(e, t) {
    var l = ut();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Ir(t, a[1]))
      return a[0];
    if (a = e(), xa) {
      el(!0);
      try {
        e();
      } finally {
        el(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function sc(e, t, l) {
    return l === void 0 || (Vl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = bd(), be.lanes |= e, Fl |= e, l);
  }
  function ps(e, t, l, a) {
    return Ut(l, t) ? l : ln.current !== null ? (e = sc(e, l, a), Ut(e, t) || (ot = !0), e) : (Vl & 42) === 0 ? (ot = !0, e.memoizedState = l) : (e = bd(), be.lanes |= e, Fl |= e, t);
  }
  function Ss(e, t, l, a, n) {
    var u = V.p;
    V.p = u !== 0 && 8 > u ? u : 8;
    var c = _.T, d = {};
    _.T = d, mc(e, !1, t, l);
    try {
      var g = n(), z = _.S;
      if (z !== null && z(d, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var L = bv(
          g,
          a
        );
        In(
          e,
          t,
          L,
          Lt(e)
        );
      } else
        In(
          e,
          t,
          a,
          Lt(e)
        );
    } catch (G) {
      In(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: G },
        Lt()
      );
    } finally {
      V.p = u, _.T = c;
    }
  }
  function Mv() {
  }
  function dc(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = bs(e).queue;
    Ss(
      e,
      n,
      t,
      P,
      l === null ? Mv : function() {
        return Es(e), l(a);
      }
    );
  }
  function bs(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ml,
        lastRenderedState: P
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ml,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Es(e) {
    var t = bs(e).next.queue;
    In(e, t, {}, Lt());
  }
  function hc() {
    return pt(gu);
  }
  function Rs() {
    return ut().memoizedState;
  }
  function Ts() {
    return ut().memoizedState;
  }
  function Av(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Lt();
          e = Xl(l);
          var a = Ql(t, e, l);
          a !== null && (Bt(a, t, l), Jn(a, t, l)), t = { cache: Qr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function zv(e, t, l) {
    var a = Lt();
    l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yi(e) ? Ms(t, l) : (l = Cr(e, t, l, a), l !== null && (Bt(l, e, a), As(l, t, a)));
  }
  function Ds(e, t, l) {
    var a = Lt();
    In(e, t, l, a);
  }
  function In(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (yi(e)) Ms(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, d = u(c, l);
          if (n.hasEagerState = !0, n.eagerState = d, Ut(d, c))
            return Iu(e, t, n, 0), Ve === null && Pu(), !1;
        } catch {
        } finally {
        }
      if (l = Cr(e, t, n, a), l !== null)
        return Bt(l, e, a), As(l, t, a), !0;
    }
    return !1;
  }
  function mc(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Kc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yi(e)) {
      if (t) throw Error(o(479));
    } else
      t = Cr(
        e,
        l,
        a,
        2
      ), t !== null && Bt(t, e, 2);
  }
  function yi(e) {
    var t = e.alternate;
    return e === be || t !== null && t === be;
  }
  function Ms(e, t) {
    an = oi = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function As(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, ga(e, l);
    }
  }
  var gi = {
    readContext: pt,
    use: di,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt
  }, zs = {
    readContext: pt,
    use: di,
    useCallback: function(e, t) {
      return zt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: os,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, vi(
        4194308,
        4,
        ms.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return vi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      vi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = zt();
      t = t === void 0 ? null : t;
      var a = e();
      if (xa) {
        el(!0);
        try {
          e();
        } finally {
          el(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = zt();
      if (l !== void 0) {
        var n = l(t);
        if (xa) {
          el(!0);
          try {
            l(t);
          } finally {
            el(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = zv.bind(
        null,
        be,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = zt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = cc(e);
      var t = e.queue, l = Ds.bind(null, be, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: oc,
    useDeferredValue: function(e, t) {
      var l = zt();
      return sc(l, e, t);
    },
    useTransition: function() {
      var e = cc(!1);
      return e = Ss.bind(
        null,
        be,
        e.queue,
        !0,
        !1
      ), zt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = be, n = zt();
      if (He) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), Ve === null)
          throw Error(o(349));
        (_e & 124) !== 0 || $o(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, os(Wo.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, un(
        9,
        mi(),
        ko.bind(
          null,
          a,
          u,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = zt(), t = Ve.identifierPrefix;
      if (He) {
        var l = Rl, a = El;
        l = (a & ~(1 << 32 - ht(a) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = si++, 0 < l && (t += "H" + l.toString(32)), t += "»";
      } else
        l = Ev++, t = "«" + t + "r" + l.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: hc,
    useFormState: us,
    useActionState: us,
    useOptimistic: function(e) {
      var t = zt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = mc.bind(
        null,
        be,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: uc,
    useCacheRefresh: function() {
      return zt().memoizedState = Av.bind(
        null,
        be
      );
    }
  }, Os = {
    readContext: pt,
    use: di,
    useCallback: ys,
    useContext: pt,
    useEffect: ss,
    useImperativeHandle: vs,
    useInsertionEffect: ds,
    useLayoutEffect: hs,
    useMemo: gs,
    useReducer: hi,
    useRef: fs,
    useState: function() {
      return hi(Ml);
    },
    useDebugValue: oc,
    useDeferredValue: function(e, t) {
      var l = ut();
      return ps(
        l,
        qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = hi(Ml)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Fn(e),
        t
      ];
    },
    useSyncExternalStore: Jo,
    useId: Rs,
    useHostTransitionStatus: hc,
    useFormState: is,
    useActionState: is,
    useOptimistic: function(e, t) {
      var l = ut();
      return Io(l, qe, e, t);
    },
    useMemoCache: uc,
    useCacheRefresh: Ts
  }, Ov = {
    readContext: pt,
    use: di,
    useCallback: ys,
    useContext: pt,
    useEffect: ss,
    useImperativeHandle: vs,
    useInsertionEffect: ds,
    useLayoutEffect: hs,
    useMemo: gs,
    useReducer: rc,
    useRef: fs,
    useState: function() {
      return rc(Ml);
    },
    useDebugValue: oc,
    useDeferredValue: function(e, t) {
      var l = ut();
      return qe === null ? sc(l, e, t) : ps(
        l,
        qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = rc(Ml)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Fn(e),
        t
      ];
    },
    useSyncExternalStore: Jo,
    useId: Rs,
    useHostTransitionStatus: hc,
    useFormState: cs,
    useActionState: cs,
    useOptimistic: function(e, t) {
      var l = ut();
      return qe !== null ? Io(l, qe, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: uc,
    useCacheRefresh: Ts
  }, rn = null, eu = 0;
  function pi(e) {
    var t = eu;
    return eu += 1, rn === null && (rn = []), qo(rn, e, t);
  }
  function tu(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Si(e, t) {
    throw t.$$typeof === w ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function _s(e) {
    var t = e._init;
    return t(e._payload);
  }
  function xs(e) {
    function t(T, E) {
      if (e) {
        var A = T.deletions;
        A === null ? (T.deletions = [E], T.flags |= 16) : A.push(E);
      }
    }
    function l(T, E) {
      if (!e) return null;
      for (; E !== null; )
        t(T, E), E = E.sibling;
      return null;
    }
    function a(T) {
      for (var E = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
      return E;
    }
    function n(T, E) {
      return T = bl(T, E), T.index = 0, T.sibling = null, T;
    }
    function u(T, E, A) {
      return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < E ? (T.flags |= 67108866, E) : A) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
    }
    function c(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function d(T, E, A, q) {
      return E === null || E.tag !== 6 ? (E = Hr(A, T.mode, q), E.return = T, E) : (E = n(E, A), E.return = T, E);
    }
    function g(T, E, A, q) {
      var I = A.type;
      return I === H ? L(
        T,
        E,
        A.props.children,
        q,
        A.key
      ) : E !== null && (E.elementType === I || typeof I == "object" && I !== null && I.$$typeof === pe && _s(I) === E.type) ? (E = n(E, A.props), tu(E, A), E.return = T, E) : (E = ti(
        A.type,
        A.key,
        A.props,
        null,
        T.mode,
        q
      ), tu(E, A), E.return = T, E);
    }
    function z(T, E, A, q) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== A.containerInfo || E.stateNode.implementation !== A.implementation ? (E = Lr(A, T.mode, q), E.return = T, E) : (E = n(E, A.children || []), E.return = T, E);
    }
    function L(T, E, A, q, I) {
      return E === null || E.tag !== 7 ? (E = Ra(
        A,
        T.mode,
        q,
        I
      ), E.return = T, E) : (E = n(E, A), E.return = T, E);
    }
    function G(T, E, A) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Hr(
          "" + E,
          T.mode,
          A
        ), E.return = T, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case D:
            return A = ti(
              E.type,
              E.key,
              E.props,
              null,
              T.mode,
              A
            ), tu(A, E), A.return = T, A;
          case B:
            return E = Lr(
              E,
              T.mode,
              A
            ), E.return = T, E;
          case pe:
            var q = E._init;
            return E = q(E._payload), G(T, E, A);
        }
        if (Le(E) || Je(E))
          return E = Ra(
            E,
            T.mode,
            A,
            null
          ), E.return = T, E;
        if (typeof E.then == "function")
          return G(T, pi(E), A);
        if (E.$$typeof === k)
          return G(
            T,
            ui(T, E),
            A
          );
        Si(T, E);
      }
      return null;
    }
    function O(T, E, A, q) {
      var I = E !== null ? E.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return I !== null ? null : d(T, E, "" + A, q);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case D:
            return A.key === I ? g(T, E, A, q) : null;
          case B:
            return A.key === I ? z(T, E, A, q) : null;
          case pe:
            return I = A._init, A = I(A._payload), O(T, E, A, q);
        }
        if (Le(A) || Je(A))
          return I !== null ? null : L(T, E, A, q, null);
        if (typeof A.then == "function")
          return O(
            T,
            E,
            pi(A),
            q
          );
        if (A.$$typeof === k)
          return O(
            T,
            E,
            ui(T, A),
            q
          );
        Si(T, A);
      }
      return null;
    }
    function x(T, E, A, q, I) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return T = T.get(A) || null, d(E, T, "" + q, I);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case D:
            return T = T.get(
              q.key === null ? A : q.key
            ) || null, g(E, T, q, I);
          case B:
            return T = T.get(
              q.key === null ? A : q.key
            ) || null, z(E, T, q, I);
          case pe:
            var Re = q._init;
            return q = Re(q._payload), x(
              T,
              E,
              A,
              q,
              I
            );
        }
        if (Le(q) || Je(q))
          return T = T.get(A) || null, L(E, T, q, I, null);
        if (typeof q.then == "function")
          return x(
            T,
            E,
            A,
            pi(q),
            I
          );
        if (q.$$typeof === k)
          return x(
            T,
            E,
            A,
            ui(E, q),
            I
          );
        Si(E, q);
      }
      return null;
    }
    function de(T, E, A, q) {
      for (var I = null, Re = null, ae = E, fe = E = 0, dt = null; ae !== null && fe < A.length; fe++) {
        ae.index > fe ? (dt = ae, ae = null) : dt = ae.sibling;
        var Ce = O(
          T,
          ae,
          A[fe],
          q
        );
        if (Ce === null) {
          ae === null && (ae = dt);
          break;
        }
        e && ae && Ce.alternate === null && t(T, ae), E = u(Ce, E, fe), Re === null ? I = Ce : Re.sibling = Ce, Re = Ce, ae = dt;
      }
      if (fe === A.length)
        return l(T, ae), He && Da(T, fe), I;
      if (ae === null) {
        for (; fe < A.length; fe++)
          ae = G(T, A[fe], q), ae !== null && (E = u(
            ae,
            E,
            fe
          ), Re === null ? I = ae : Re.sibling = ae, Re = ae);
        return He && Da(T, fe), I;
      }
      for (ae = a(ae); fe < A.length; fe++)
        dt = x(
          ae,
          T,
          fe,
          A[fe],
          q
        ), dt !== null && (e && dt.alternate !== null && ae.delete(
          dt.key === null ? fe : dt.key
        ), E = u(
          dt,
          E,
          fe
        ), Re === null ? I = dt : Re.sibling = dt, Re = dt);
      return e && ae.forEach(function(ia) {
        return t(T, ia);
      }), He && Da(T, fe), I;
    }
    function re(T, E, A, q) {
      if (A == null) throw Error(o(151));
      for (var I = null, Re = null, ae = E, fe = E = 0, dt = null, Ce = A.next(); ae !== null && !Ce.done; fe++, Ce = A.next()) {
        ae.index > fe ? (dt = ae, ae = null) : dt = ae.sibling;
        var ia = O(T, ae, Ce.value, q);
        if (ia === null) {
          ae === null && (ae = dt);
          break;
        }
        e && ae && ia.alternate === null && t(T, ae), E = u(ia, E, fe), Re === null ? I = ia : Re.sibling = ia, Re = ia, ae = dt;
      }
      if (Ce.done)
        return l(T, ae), He && Da(T, fe), I;
      if (ae === null) {
        for (; !Ce.done; fe++, Ce = A.next())
          Ce = G(T, Ce.value, q), Ce !== null && (E = u(Ce, E, fe), Re === null ? I = Ce : Re.sibling = Ce, Re = Ce);
        return He && Da(T, fe), I;
      }
      for (ae = a(ae); !Ce.done; fe++, Ce = A.next())
        Ce = x(ae, T, fe, Ce.value, q), Ce !== null && (e && Ce.alternate !== null && ae.delete(Ce.key === null ? fe : Ce.key), E = u(Ce, E, fe), Re === null ? I = Ce : Re.sibling = Ce, Re = Ce);
      return e && ae.forEach(function(_y) {
        return t(T, _y);
      }), He && Da(T, fe), I;
    }
    function Ge(T, E, A, q) {
      if (typeof A == "object" && A !== null && A.type === H && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case D:
            e: {
              for (var I = A.key; E !== null; ) {
                if (E.key === I) {
                  if (I = A.type, I === H) {
                    if (E.tag === 7) {
                      l(
                        T,
                        E.sibling
                      ), q = n(
                        E,
                        A.props.children
                      ), q.return = T, T = q;
                      break e;
                    }
                  } else if (E.elementType === I || typeof I == "object" && I !== null && I.$$typeof === pe && _s(I) === E.type) {
                    l(
                      T,
                      E.sibling
                    ), q = n(E, A.props), tu(q, A), q.return = T, T = q;
                    break e;
                  }
                  l(T, E);
                  break;
                } else t(T, E);
                E = E.sibling;
              }
              A.type === H ? (q = Ra(
                A.props.children,
                T.mode,
                q,
                A.key
              ), q.return = T, T = q) : (q = ti(
                A.type,
                A.key,
                A.props,
                null,
                T.mode,
                q
              ), tu(q, A), q.return = T, T = q);
            }
            return c(T);
          case B:
            e: {
              for (I = A.key; E !== null; ) {
                if (E.key === I)
                  if (E.tag === 4 && E.stateNode.containerInfo === A.containerInfo && E.stateNode.implementation === A.implementation) {
                    l(
                      T,
                      E.sibling
                    ), q = n(E, A.children || []), q.return = T, T = q;
                    break e;
                  } else {
                    l(T, E);
                    break;
                  }
                else t(T, E);
                E = E.sibling;
              }
              q = Lr(A, T.mode, q), q.return = T, T = q;
            }
            return c(T);
          case pe:
            return I = A._init, A = I(A._payload), Ge(
              T,
              E,
              A,
              q
            );
        }
        if (Le(A))
          return de(
            T,
            E,
            A,
            q
          );
        if (Je(A)) {
          if (I = Je(A), typeof I != "function") throw Error(o(150));
          return A = I.call(A), re(
            T,
            E,
            A,
            q
          );
        }
        if (typeof A.then == "function")
          return Ge(
            T,
            E,
            pi(A),
            q
          );
        if (A.$$typeof === k)
          return Ge(
            T,
            E,
            ui(T, A),
            q
          );
        Si(T, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, E !== null && E.tag === 6 ? (l(T, E.sibling), q = n(E, A), q.return = T, T = q) : (l(T, E), q = Hr(A, T.mode, q), q.return = T, T = q), c(T)) : l(T, E);
    }
    return function(T, E, A, q) {
      try {
        eu = 0;
        var I = Ge(
          T,
          E,
          A,
          q
        );
        return rn = null, I;
      } catch (ae) {
        if (ae === Zn || ae === ri) throw ae;
        var Re = Nt(29, ae, null, T.mode);
        return Re.lanes = q, Re.return = T, Re;
      } finally {
      }
    };
  }
  var cn = xs(!0), Us = xs(!1), Jt = Y(null), ol = null;
  function Zl(e) {
    var t = e.alternate;
    K(ft, ft.current & 1), K(Jt, e), ol === null && (t === null || ln.current !== null || t.memoizedState !== null) && (ol = e);
  }
  function Ns(e) {
    if (e.tag === 22) {
      if (K(ft, ft.current), K(Jt, e), ol === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (ol = e);
      }
    } else Kl();
  }
  function Kl() {
    K(ft, ft.current), K(Jt, Jt.current);
  }
  function Al(e) {
    J(Jt), ol === e && (ol = null), J(ft);
  }
  var ft = Y(0);
  function bi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || nf(l)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function vc(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : R({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var yc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Lt(), n = Xl(a);
      n.payload = t, l != null && (n.callback = l), t = Ql(e, n, a), t !== null && (Bt(t, e, a), Jn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Lt(), n = Xl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = Ql(e, n, a), t !== null && (Bt(t, e, a), Jn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Lt(), a = Xl(l);
      a.tag = 2, t != null && (a.callback = t), t = Ql(e, a, l), t !== null && (Bt(t, e, l), Jn(t, e, l));
    }
  };
  function Cs(e, t, l, a, n, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Bn(l, a) || !Bn(n, u) : !0;
  }
  function ws(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && yc.enqueueReplaceState(t, t.state, null);
  }
  function Ua(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = R({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var Ei = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function Hs(e) {
    Ei(e);
  }
  function Ls(e) {
    console.error(e);
  }
  function Bs(e) {
    Ei(e);
  }
  function Ri(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function js(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function gc(e, t, l) {
    return l = Xl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ri(e, t);
    }, l;
  }
  function qs(e) {
    return e = Xl(e), e.tag = 3, e;
  }
  function Ys(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        js(t, l, a);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      js(t, l, a), typeof n != "function" && (Pl === null ? Pl = /* @__PURE__ */ new Set([this]) : Pl.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function _v(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Xn(
        t,
        l,
        n,
        !0
      ), l = Jt.current, l !== null) {
        switch (l.tag) {
          case 13:
            return ol === null ? Gc() : l.alternate === null && et === 0 && (et = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Kr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Qc(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Kr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Qc(e, a, n)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return Qc(e, a, n), Gc(), !1;
    }
    if (He)
      return t = Jt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== qr && (e = Error(o(422), { cause: a }), Gn(Qt(e, l)))) : (a !== qr && (t = Error(o(423), {
        cause: a
      }), Gn(
        Qt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Qt(a, l), n = gc(
        e.stateNode,
        a,
        n
      ), kr(e, n), et !== 4 && (et = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Qt(u, l), cu === null ? cu = [u] : cu.push(u), et !== 4 && (et = 2), t === null) return !0;
    a = Qt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = gc(l.stateNode, a, e), kr(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Pl === null || !Pl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = qs(n), Ys(
              n,
              e,
              l,
              a
            ), kr(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Gs = Error(o(461)), ot = !1;
  function mt(e, t, l, a) {
    t.child = e === null ? Us(t, null, l, a) : cn(
      t,
      e.child,
      l,
      a
    );
  }
  function Xs(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var d in a)
        d !== "ref" && (c[d] = a[d]);
    } else c = a;
    return Oa(t), a = ec(
      e,
      t,
      l,
      c,
      u,
      n
    ), d = tc(), e !== null && !ot ? (lc(e, t, n), zl(e, t, n)) : (He && d && Br(t), t.flags |= 1, mt(e, t, a, n), t.child);
  }
  function Qs(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !wr(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Vs(
        e,
        t,
        u,
        a,
        n
      )) : (e = ti(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Mc(e, n)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Bn, l(c, a) && e.ref === t.ref)
        return zl(e, t, n);
    }
    return t.flags |= 1, e = bl(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Vs(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Bn(u, a) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = a = u, Mc(e, n))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, zl(e, t, n);
    }
    return pc(
      e,
      t,
      l,
      a,
      n
    );
  }
  function Zs(e, t, l) {
    var a = t.pendingProps, n = a.children, u = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = u !== null ? u.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          t.childLanes = u & ~a;
        } else t.childLanes = 0, t.child = null;
        return Ks(
          e,
          t,
          a,
          l
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ii(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Vo(t, u) : Fr(), Ns(t);
      else
        return t.lanes = t.childLanes = 536870912, Ks(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l
        );
    } else
      u !== null ? (ii(t, u.cachePool), Vo(t, u), Kl(), t.memoizedState = null) : (e !== null && ii(t, null), Fr(), Kl());
    return mt(e, t, n, l), t.child;
  }
  function Ks(e, t, l, a) {
    var n = Zr();
    return n = n === null ? null : { parent: ct._currentValue, pool: n }, t.memoizedState = {
      baseLanes: l,
      cachePool: n
    }, e !== null && ii(t, null), Fr(), Ns(t), e !== null && Xn(e, t, a, !0), null;
  }
  function Ti(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function pc(e, t, l, a, n) {
    return Oa(t), l = ec(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = tc(), e !== null && !ot ? (lc(e, t, n), zl(e, t, n)) : (He && a && Br(t), t.flags |= 1, mt(e, t, l, n), t.child);
  }
  function Js(e, t, l, a, n, u) {
    return Oa(t), t.updateQueue = null, l = Ko(
      t,
      a,
      l,
      n
    ), Zo(e), a = tc(), e !== null && !ot ? (lc(e, t, u), zl(e, t, u)) : (He && a && Br(t), t.flags |= 1, mt(e, t, l, u), t.child);
  }
  function $s(e, t, l, a, n) {
    if (Oa(t), t.stateNode === null) {
      var u = Fa, c = l.contextType;
      typeof c == "object" && c !== null && (u = pt(c)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = yc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Jr(t), c = l.contextType, u.context = typeof c == "object" && c !== null ? pt(c) : Fa, u.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (vc(
        t,
        l,
        c,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && yc.enqueueReplaceState(u, u.state, null), kn(t, a, u, n), $n(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var d = t.memoizedProps, g = Ua(l, d);
      u.props = g;
      var z = u.context, L = l.contextType;
      c = Fa, typeof L == "object" && L !== null && (c = pt(L));
      var G = l.getDerivedStateFromProps;
      L = typeof G == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, L || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || z !== c) && ws(
        t,
        u,
        a,
        c
      ), Gl = !1;
      var O = t.memoizedState;
      u.state = O, kn(t, a, u, n), $n(), z = t.memoizedState, d || O !== z || Gl ? (typeof G == "function" && (vc(
        t,
        l,
        G,
        a
      ), z = t.memoizedState), (g = Gl || Cs(
        t,
        l,
        g,
        a,
        O,
        z,
        c
      )) ? (L || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = z), u.props = a, u.state = z, u.context = c, a = g) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, $r(e, t), c = t.memoizedProps, L = Ua(l, c), u.props = L, G = t.pendingProps, O = u.context, z = l.contextType, g = Fa, typeof z == "object" && z !== null && (g = pt(z)), d = l.getDerivedStateFromProps, (z = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== G || O !== g) && ws(
        t,
        u,
        a,
        g
      ), Gl = !1, O = t.memoizedState, u.state = O, kn(t, a, u, n), $n();
      var x = t.memoizedState;
      c !== G || O !== x || Gl || e !== null && e.dependencies !== null && ni(e.dependencies) ? (typeof d == "function" && (vc(
        t,
        l,
        d,
        a
      ), x = t.memoizedState), (L = Gl || Cs(
        t,
        l,
        L,
        a,
        O,
        x,
        g
      ) || e !== null && e.dependencies !== null && ni(e.dependencies)) ? (z || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, x, g), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        x,
        g
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = x), u.props = a, u.state = x, u.context = g, a = L) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Ti(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = cn(
      t,
      e.child,
      null,
      n
    ), t.child = cn(
      t,
      null,
      l,
      n
    )) : mt(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = zl(
      e,
      t,
      n
    ), e;
  }
  function ks(e, t, l, a) {
    return Yn(), t.flags |= 256, mt(e, t, l, a), t.child;
  }
  var Sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bc(e) {
    return { baseLanes: e, cachePool: Lo() };
  }
  function Ec(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= $t), e;
  }
  function Ws(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (ft.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (He) {
        if (n ? Zl(t) : Kl(), He) {
          var d = Ie, g;
          if (g = d) {
            e: {
              for (g = d, d = fl; g.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break e;
                }
                if (g = ul(
                  g.nextSibling
                ), g === null) {
                  d = null;
                  break e;
                }
              }
              d = g;
            }
            d !== null ? (t.memoizedState = {
              dehydrated: d,
              treeContext: Ta !== null ? { id: El, overflow: Rl } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, g = Nt(
              18,
              null,
              null,
              0
            ), g.stateNode = d, g.return = t, t.child = g, Rt = t, Ie = null, g = !0) : g = !1;
          }
          g || Aa(t);
        }
        if (d = t.memoizedState, d !== null && (d = d.dehydrated, d !== null))
          return nf(d) ? t.lanes = 32 : t.lanes = 536870912, null;
        Al(t);
      }
      return d = a.children, a = a.fallback, n ? (Kl(), n = t.mode, d = Di(
        { mode: "hidden", children: d },
        n
      ), a = Ra(
        a,
        n,
        l,
        null
      ), d.return = t, a.return = t, d.sibling = a, t.child = d, n = t.child, n.memoizedState = bc(l), n.childLanes = Ec(
        e,
        c,
        l
      ), t.memoizedState = Sc, a) : (Zl(t), Rc(t, d));
    }
    if (g = e.memoizedState, g !== null && (d = g.dehydrated, d !== null)) {
      if (u)
        t.flags & 256 ? (Zl(t), t.flags &= -257, t = Tc(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Kl(), t.child = e.child, t.flags |= 128, t = null) : (Kl(), n = a.fallback, d = t.mode, a = Di(
          { mode: "visible", children: a.children },
          d
        ), n = Ra(
          n,
          d,
          l,
          null
        ), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, cn(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = bc(l), a.childLanes = Ec(
          e,
          c,
          l
        ), t.memoizedState = Sc, t = n);
      else if (Zl(t), nf(d)) {
        if (c = d.nextSibling && d.nextSibling.dataset, c) var z = c.dgst;
        c = z, a = Error(o(419)), a.stack = "", a.digest = c, Gn({ value: a, source: null, stack: null }), t = Tc(
          e,
          t,
          l
        );
      } else if (ot || Xn(e, t, l, !1), c = (l & e.childLanes) !== 0, ot || c) {
        if (c = Ve, c !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : An(a), a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== g.retryLane))
          throw g.retryLane = a, Wa(e, a), Bt(c, e, a), Gs;
        d.data === "$?" || Gc(), t = Tc(
          e,
          t,
          l
        );
      } else
        d.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Ie = ul(
          d.nextSibling
        ), Rt = t, He = !0, Ma = null, fl = !1, e !== null && (Zt[Kt++] = El, Zt[Kt++] = Rl, Zt[Kt++] = Ta, El = e.id, Rl = e.overflow, Ta = t), t = Rc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Kl(), n = a.fallback, d = t.mode, g = e.child, z = g.sibling, a = bl(g, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = g.subtreeFlags & 65011712, z !== null ? n = bl(z, n) : (n = Ra(
      n,
      d,
      l,
      null
    ), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, a = n, n = t.child, d = e.child.memoizedState, d === null ? d = bc(l) : (g = d.cachePool, g !== null ? (z = ct._currentValue, g = g.parent !== z ? { parent: z, pool: z } : g) : g = Lo(), d = {
      baseLanes: d.baseLanes | l,
      cachePool: g
    }), n.memoizedState = d, n.childLanes = Ec(
      e,
      c,
      l
    ), t.memoizedState = Sc, a) : (Zl(t), l = e.child, e = l.sibling, l = bl(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Rc(e, t) {
    return t = Di(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Di(e, t) {
    return e = Nt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Tc(e, t, l) {
    return cn(t, e.child, null, l), e = Rc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Fs(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Gr(e.return, t, l);
  }
  function Dc(e, t, l, a, n) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = l, u.tailMode = n);
  }
  function Ps(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    if (mt(e, t, a.children, l), a = ft.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Fs(e, l, t);
          else if (e.tag === 19)
            Fs(e, l, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      a &= 1;
    }
    switch (K(ft, a), n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          e = l.alternate, e !== null && bi(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Dc(
          t,
          !1,
          n,
          l,
          u
        );
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && bi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        Dc(
          t,
          !0,
          l,
          null,
          u
        );
        break;
      case "together":
        Dc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function zl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Fl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Xn(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, l = bl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = bl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Mc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ni(e)));
  }
  function xv(e, t, l) {
    switch (t.tag) {
      case 3:
        Qe(t, t.stateNode.containerInfo), Yl(t, ct, e.memoizedState.cache), Yn();
        break;
      case 27:
      case 5:
        rt(t);
        break;
      case 4:
        Qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Yl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Zl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Ws(e, t, l) : (Zl(t), e = zl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Zl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Xn(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return Ps(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), K(ft, ft.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Zs(e, t, l);
      case 24:
        Yl(t, ct, e.memoizedState.cache);
    }
    return zl(e, t, l);
  }
  function Is(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!Mc(e, l) && (t.flags & 128) === 0)
          return ot = !1, xv(
            e,
            t,
            l
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, He && (t.flags & 1048576) !== 0 && _o(t, ai, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType, n = a._init;
          if (a = n(a._payload), t.type = a, typeof a == "function")
            wr(a) ? (e = Ua(a, e), t.tag = 1, t = $s(
              null,
              t,
              a,
              e,
              l
            )) : (t.tag = 0, t = pc(
              null,
              t,
              a,
              e,
              l
            ));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === he) {
                t.tag = 11, t = Xs(
                  null,
                  t,
                  a,
                  e,
                  l
                );
                break e;
              } else if (n === ye) {
                t.tag = 14, t = Qs(
                  null,
                  t,
                  a,
                  e,
                  l
                );
                break e;
              }
            }
            throw t = we(a) || a, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return pc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = Ua(
          a,
          t.pendingProps
        ), $s(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (Qe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, $r(e, t), kn(t, a, null, l);
          var c = t.memoizedState;
          if (a = c.cache, Yl(t, ct, a), a !== u.cache && Xr(
            t,
            [ct],
            l,
            !0
          ), $n(), a = c.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = ks(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Qt(
                Error(o(424)),
                t
              ), Gn(n), t = ks(
                e,
                t,
                a,
                l
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ie = ul(e.firstChild), Rt = t, He = !0, Ma = null, fl = !0, l = Us(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Yn(), a === n) {
              t = zl(
                e,
                t,
                l
              );
              break e;
            }
            mt(
              e,
              t,
              a,
              l
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ti(e, t), e === null ? (l = ah(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : He || (l = t.type, e = t.pendingProps, a = ji(
          ce.current
        ).createElement(l), a[X] = t, a[Q] = e, yt(a, l, e), Ne(a), t.stateNode = a) : t.memoizedState = ah(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return rt(t), e === null && He && (a = t.stateNode = eh(
          t.type,
          t.pendingProps,
          ce.current
        ), Rt = t, fl = !0, n = Ie, ta(t.type) ? (uf = n, Ie = ul(
          a.firstChild
        )) : Ie = n), mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ti(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && He && ((n = a = Ie) && (a = ny(
          a,
          t.type,
          t.pendingProps,
          fl
        ), a !== null ? (t.stateNode = a, Rt = t, Ie = ul(
          a.firstChild
        ), fl = !1, n = !0) : n = !1), n || Aa(t)), rt(t), n = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = u.children, tf(n, u) ? a = null : c !== null && tf(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = ec(
          e,
          t,
          Rv,
          null,
          null,
          l
        ), gu._currentValue = n), Ti(e, t), mt(e, t, a, l), t.child;
      case 6:
        return e === null && He && ((e = l = Ie) && (l = uy(
          l,
          t.pendingProps,
          fl
        ), l !== null ? (t.stateNode = l, Rt = t, Ie = null, e = !0) : e = !1), e || Aa(t)), null;
      case 13:
        return Ws(e, t, l);
      case 4:
        return Qe(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = cn(
          t,
          null,
          a,
          l
        ) : mt(
          e,
          t,
          a,
          l
        ), t.child;
      case 11:
        return Xs(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return mt(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, Yl(t, t.type, a.value), mt(
          e,
          t,
          a.children,
          l
        ), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Oa(t), n = pt(n), a = a(n), t.flags |= 1, mt(e, t, a, l), t.child;
      case 14:
        return Qs(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Vs(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Ps(e, t, l);
      case 31:
        return a = t.pendingProps, l = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, e === null ? (l = Di(
          a,
          l
        ), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = bl(e.child, a), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
      case 22:
        return Zs(e, t, l);
      case 24:
        return Oa(t), a = pt(ct), e === null ? (n = Zr(), n === null && (n = Ve, u = Qr(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = {
          parent: a,
          cache: n
        }, Jr(t), Yl(t, ct, n)) : ((e.lanes & l) !== 0 && ($r(e, t), kn(t, null, null, l), $n()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Yl(t, ct, a)) : (a = u.cache, Yl(t, ct, a), a !== n.cache && Xr(
          t,
          [ct],
          l,
          !0
        ))), mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Ol(e) {
    e.flags |= 4;
  }
  function ed(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !ch(t)) {
      if (t = Jt.current, t !== null && ((_e & 4194048) === _e ? ol !== null : (_e & 62914560) !== _e && (_e & 536870912) === 0 || t !== ol))
        throw Kn = Kr, Bo;
      e.flags |= 8192;
    }
  }
  function Mi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Gu() : 536870912, e.lanes |= t, dn |= t);
  }
  function lu(e, t) {
    if (!He)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function Uv(e, t, l) {
    var a = t.pendingProps;
    switch (jr(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pe(t), null;
      case 1:
        return Pe(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Dl(ct), il(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (qn(t) ? Ol(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, No())), Pe(t), null;
      case 26:
        return l = t.memoizedState, e === null ? (Ol(t), l !== null ? (Pe(t), ed(t, l)) : (Pe(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Ol(t), Pe(t), ed(t, l)) : (Pe(t), t.flags &= -16777217) : (e.memoizedProps !== a && Ol(t), Pe(t), t.flags &= -16777217), null;
      case 27:
        Pt(t), l = ce.current;
        var n = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== a && Ol(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Pe(t), null;
          }
          e = le.current, qn(t) ? xo(t) : (e = eh(n, a, l), t.stateNode = e, Ol(t));
        }
        return Pe(t), null;
      case 5:
        if (Pt(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Ol(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Pe(t), null;
          }
          if (e = le.current, qn(t))
            xo(t);
          else {
            switch (n = ji(
              ce.current
            ), e) {
              case 1:
                e = n.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                e = n.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    e = n.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof a.is == "string" ? n.createElement("select", { is: a.is }) : n.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                    break;
                  default:
                    e = typeof a.is == "string" ? n.createElement(l, { is: a.is }) : n.createElement(l);
                }
            }
            e[X] = t, e[Q] = a;
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6)
                e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                  break e;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
            t.stateNode = e;
            e: switch (yt(e, l, a), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ol(t);
          }
        }
        return Pe(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Ol(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ce.current, qn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = Rt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[X] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Jd(e.nodeValue, l)), e || Aa(t);
          } else
            e = ji(e).createTextNode(
              a
            ), e[X] = t, t.stateNode = e;
        }
        return Pe(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = qn(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[X] = t;
            } else
              Yn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Pe(t), n = !1;
          } else
            n = No(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Al(t), t) : (Al(t), null);
        }
        if (Al(t), (t.flags & 128) !== 0)
          return t.lanes = l, t;
        if (l = a !== null, e = e !== null && e.memoizedState !== null, l) {
          a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048);
        }
        return l !== e && l && (t.child.flags |= 8192), Mi(t, t.updateQueue), Pe(t), null;
      case 4:
        return il(), e === null && Wc(t.stateNode.containerInfo), Pe(t), null;
      case 10:
        return Dl(t.type), Pe(t), null;
      case 19:
        if (J(ft), n = t.memoizedState, n === null) return Pe(t), null;
        if (a = (t.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) lu(n, !1);
          else {
            if (et !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = bi(e), u !== null) {
                  for (t.flags |= 128, lu(n, !1), e = u.updateQueue, t.updateQueue = e, Mi(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Oo(l, e), l = l.sibling;
                  return K(
                    ft,
                    ft.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && xt() > Oi && (t.flags |= 128, a = !0, lu(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = bi(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Mi(t, e), lu(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !He)
                return Pe(t), null;
            } else
              2 * xt() - n.renderingStartTime > Oi && l !== 536870912 && (t.flags |= 128, a = !0, lu(n, !1), t.lanes = 4194304);
          n.isBackwards ? (u.sibling = t.child, t.child = u) : (e = n.last, e !== null ? e.sibling = u : t.child = u, n.last = u);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = xt(), t.sibling = null, e = ft.current, K(ft, a ? e & 1 | 2 : e & 1), t) : (Pe(t), null);
      case 22:
      case 23:
        return Al(t), Pr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), l = t.updateQueue, l !== null && Mi(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && J(_a), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Dl(ct), Pe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Nv(e, t) {
    switch (jr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Dl(ct), il(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Pt(t), null;
      case 13:
        if (Al(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Yn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return J(ft), null;
      case 4:
        return il(), null;
      case 10:
        return Dl(t.type), null;
      case 22:
      case 23:
        return Al(t), Pr(), e !== null && J(_a), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Dl(ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function td(e, t) {
    switch (jr(t), t.tag) {
      case 3:
        Dl(ct), il();
        break;
      case 26:
      case 27:
      case 5:
        Pt(t);
        break;
      case 4:
        il();
        break;
      case 13:
        Al(t);
        break;
      case 19:
        J(ft);
        break;
      case 10:
        Dl(t.type);
        break;
      case 22:
      case 23:
        Al(t), Pr(), e !== null && J(_a);
        break;
      case 24:
        Dl(ct);
    }
  }
  function au(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create, c = l.inst;
            a = u(), c.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      Xe(t, t.return, d);
    }
  }
  function Jl(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst, d = c.destroy;
            if (d !== void 0) {
              c.destroy = void 0, n = t;
              var g = l, z = d;
              try {
                z();
              } catch (L) {
                Xe(
                  n,
                  g,
                  L
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (L) {
      Xe(t, t.return, L);
    }
  }
  function ld(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Qo(t, l);
      } catch (a) {
        Xe(e, e.return, a);
      }
    }
  }
  function ad(e, t, l) {
    l.props = Ua(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Xe(e, t, a);
    }
  }
  function nu(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      Xe(e, t, n);
    }
  }
  function sl(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Xe(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Xe(e, t, n);
        }
      else l.current = null;
  }
  function nd(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Xe(e, e.return, n);
    }
  }
  function Ac(e, t, l) {
    try {
      var a = e.stateNode;
      Iv(a, e.type, l, t), a[Q] = t;
    } catch (n) {
      Xe(e, e.return, n);
    }
  }
  function ud(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ta(e.type) || e.tag === 4;
  }
  function zc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ud(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ta(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Oc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Bi));
    else if (a !== 4 && (a === 27 && ta(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Oc(e, t, l), e = e.sibling; e !== null; )
        Oc(e, t, l), e = e.sibling;
  }
  function Ai(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && ta(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Ai(e, t, l), e = e.sibling; e !== null; )
        Ai(e, t, l), e = e.sibling;
  }
  function id(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      yt(t, a, l), t[X] = e, t[Q] = l;
    } catch (u) {
      Xe(e, e.return, u);
    }
  }
  var _l = !1, at = !1, _c = !1, rd = typeof WeakSet == "function" ? WeakSet : Set, st = null;
  function Cv(e, t) {
    if (e = e.containerInfo, Ic = Vi, e = po(e), zr(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var c = 0, d = -1, g = -1, z = 0, L = 0, G = e, O = null;
            t: for (; ; ) {
              for (var x; G !== l || n !== 0 && G.nodeType !== 3 || (d = c + n), G !== u || a !== 0 && G.nodeType !== 3 || (g = c + a), G.nodeType === 3 && (c += G.nodeValue.length), (x = G.firstChild) !== null; )
                O = G, G = x;
              for (; ; ) {
                if (G === e) break t;
                if (O === l && ++z === n && (d = c), O === u && ++L === a && (g = c), (x = G.nextSibling) !== null) break;
                G = O, O = G.parentNode;
              }
              G = x;
            }
            l = d === -1 || g === -1 ? null : { start: d, end: g };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ef = { focusedElem: e, selectionRange: l }, Vi = !1, st = t; st !== null; )
      if (t = st, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, st = e;
      else
        for (; st !== null; ) {
          switch (t = st, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, l = t, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var de = Ua(
                    l.type,
                    n,
                    l.elementType === l.type
                  );
                  e = a.getSnapshotBeforeUpdate(
                    de,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (re) {
                  Xe(
                    l,
                    l.return,
                    re
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  af(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      af(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, st = e;
            break;
          }
          st = t.return;
        }
  }
  function cd(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        $l(e, l), a & 4 && au(5, l);
        break;
      case 1:
        if ($l(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              Xe(l, l.return, c);
            }
          else {
            var n = Ua(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              Xe(
                l,
                l.return,
                c
              );
            }
          }
        a & 64 && ld(l), a & 512 && nu(l, l.return);
        break;
      case 3:
        if ($l(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Qo(e, t);
          } catch (c) {
            Xe(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && id(l);
      case 26:
      case 5:
        $l(e, l), t === null && a & 4 && nd(l), a & 512 && nu(l, l.return);
        break;
      case 12:
        $l(e, l);
        break;
      case 13:
        $l(e, l), a & 4 && sd(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Xv.bind(
          null,
          l
        ), iy(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || _l, !a) {
          t = t !== null && t.memoizedState !== null || at, n = _l;
          var u = at;
          _l = a, (at = t) && !u ? kl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : $l(e, l), _l = n, at = u;
        }
        break;
      case 30:
        break;
      default:
        $l(e, l);
    }
  }
  function fd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && se(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ke = null, Ot = !1;
  function xl(e, t, l) {
    for (l = l.child; l !== null; )
      od(e, t, l), l = l.sibling;
  }
  function od(e, t, l) {
    if (We && typeof We.onCommitFiberUnmount == "function")
      try {
        We.onCommitFiberUnmount(Tt, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        at || sl(l, t), xl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        at || sl(l, t);
        var a = ke, n = Ot;
        ta(l.type) && (ke = l.stateNode, Ot = !1), xl(
          e,
          t,
          l
        ), hu(l.stateNode), ke = a, Ot = n;
        break;
      case 5:
        at || sl(l, t);
      case 6:
        if (a = ke, n = Ot, ke = null, xl(
          e,
          t,
          l
        ), ke = a, Ot = n, ke !== null)
          if (Ot)
            try {
              (ke.nodeType === 9 ? ke.body : ke.nodeName === "HTML" ? ke.ownerDocument.body : ke).removeChild(l.stateNode);
            } catch (u) {
              Xe(
                l,
                t,
                u
              );
            }
          else
            try {
              ke.removeChild(l.stateNode);
            } catch (u) {
              Xe(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        ke !== null && (Ot ? (e = ke, Pd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Eu(e)) : Pd(ke, l.stateNode));
        break;
      case 4:
        a = ke, n = Ot, ke = l.stateNode.containerInfo, Ot = !0, xl(
          e,
          t,
          l
        ), ke = a, Ot = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        at || Jl(2, l, t), at || Jl(4, l, t), xl(
          e,
          t,
          l
        );
        break;
      case 1:
        at || (sl(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && ad(
          l,
          t,
          a
        )), xl(
          e,
          t,
          l
        );
        break;
      case 21:
        xl(
          e,
          t,
          l
        );
        break;
      case 22:
        at = (a = at) || l.memoizedState !== null, xl(
          e,
          t,
          l
        ), at = a;
        break;
      default:
        xl(
          e,
          t,
          l
        );
    }
  }
  function sd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Eu(e);
      } catch (l) {
        Xe(t, t.return, l);
      }
  }
  function wv(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new rd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new rd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function xc(e, t) {
    var l = wv(e);
    t.forEach(function(a) {
      var n = Qv.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function Ct(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, c = t, d = c;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (ta(d.type)) {
                ke = d.stateNode, Ot = !1;
                break e;
              }
              break;
            case 5:
              ke = d.stateNode, Ot = !1;
              break e;
            case 3:
            case 4:
              ke = d.stateNode.containerInfo, Ot = !0;
              break e;
          }
          d = d.return;
        }
        if (ke === null) throw Error(o(160));
        od(u, c, n), ke = null, Ot = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        dd(t, e), t = t.sibling;
  }
  var nl = null;
  function dd(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ct(t, e), wt(e), a & 4 && (Jl(3, e, e.return), au(3, e), Jl(5, e, e.return));
        break;
      case 1:
        Ct(t, e), wt(e), a & 512 && (at || l === null || sl(l, l.return)), a & 64 && _l && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = nl;
        if (Ct(t, e), wt(e), a & 512 && (at || l === null || sl(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[oe] || u[X] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), yt(u, a, l), u[X] = e, Ne(u), a = u;
                      break e;
                    case "link":
                      var c = ih(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (c) {
                        for (var d = 0; d < c.length; d++)
                          if (u = c[d], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(d, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), yt(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = ih(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (d = 0; d < c.length; d++)
                          if (u = c[d], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(d, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), yt(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  u[X] = e, Ne(u), a = u;
                }
                e.stateNode = a;
              } else
                rh(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = uh(
                n,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? rh(
              n,
              e.type,
              e.stateNode
            ) : uh(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && Ac(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Ct(t, e), wt(e), a & 512 && (at || l === null || sl(l, l.return)), l !== null && a & 4 && Ac(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Ct(t, e), wt(e), a & 512 && (at || l === null || sl(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Qa(n, "");
          } catch (x) {
            Xe(e, e.return, x);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, Ac(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (_c = !0);
        break;
      case 6:
        if (Ct(t, e), wt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (x) {
            Xe(e, e.return, x);
          }
        }
        break;
      case 3:
        if (Gi = null, n = nl, nl = qi(t.containerInfo), Ct(t, e), nl = n, wt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Eu(t.containerInfo);
          } catch (x) {
            Xe(e, e.return, x);
          }
        _c && (_c = !1, hd(e));
        break;
      case 4:
        a = nl, nl = qi(
          e.stateNode.containerInfo
        ), Ct(t, e), wt(e), nl = a;
        break;
      case 12:
        Ct(t, e), wt(e);
        break;
      case 13:
        Ct(t, e), wt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Lc = xt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, xc(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var g = l !== null && l.memoizedState !== null, z = _l, L = at;
        if (_l = z || n, at = L || g, Ct(t, e), at = L, _l = z, wt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || g || _l || at || Na(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                g = l = t;
                try {
                  if (u = g.stateNode, n)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    d = g.stateNode;
                    var G = g.memoizedProps.style, O = G != null && G.hasOwnProperty("display") ? G.display : null;
                    d.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (x) {
                  Xe(g, g.return, x);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = n ? "" : g.memoizedProps;
                } catch (x) {
                  Xe(g, g.return, x);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, xc(e, l))));
        break;
      case 19:
        Ct(t, e), wt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, xc(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), wt(e);
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (ud(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = zc(e);
            Ai(e, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Qa(c, ""), l.flags &= -33);
            var d = zc(e);
            Ai(e, d, c);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo, z = zc(e);
            Oc(
              e,
              z,
              g
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (L) {
        Xe(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        hd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function $l(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        cd(e, t.alternate, t), t = t.sibling;
  }
  function Na(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jl(4, t, t.return), Na(t);
          break;
        case 1:
          sl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && ad(
            t,
            t.return,
            l
          ), Na(t);
          break;
        case 27:
          hu(t.stateNode);
        case 26:
        case 5:
          sl(t, t.return), Na(t);
          break;
        case 22:
          t.memoizedState === null && Na(t);
          break;
        case 30:
          Na(t);
          break;
        default:
          Na(t);
      }
      e = e.sibling;
    }
  }
  function kl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, u = t, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          kl(
            n,
            u,
            l
          ), au(4, u);
          break;
        case 1:
          if (kl(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (z) {
              Xe(a, a.return, z);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var d = a.stateNode;
            try {
              var g = n.shared.hiddenCallbacks;
              if (g !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
                  Xo(g[n], d);
            } catch (z) {
              Xe(a, a.return, z);
            }
          }
          l && c & 64 && ld(u), nu(u, u.return);
          break;
        case 27:
          id(u);
        case 26:
        case 5:
          kl(
            n,
            u,
            l
          ), l && a === null && c & 4 && nd(u), nu(u, u.return);
          break;
        case 12:
          kl(
            n,
            u,
            l
          );
          break;
        case 13:
          kl(
            n,
            u,
            l
          ), l && c & 4 && sd(n, u);
          break;
        case 22:
          u.memoizedState === null && kl(
            n,
            u,
            l
          ), nu(u, u.return);
          break;
        case 30:
          break;
        default:
          kl(
            n,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Uc(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Qn(l));
  }
  function Nc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Qn(e));
  }
  function dl(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        md(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function md(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        dl(
          e,
          t,
          l,
          a
        ), n & 2048 && au(9, t);
        break;
      case 1:
        dl(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        dl(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Qn(e)));
        break;
      case 12:
        if (n & 2048) {
          dl(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, c = u.id, d = u.onPostCommit;
            typeof d == "function" && d(
              c,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (g) {
            Xe(t, t.return, g);
          }
        } else
          dl(
            e,
            t,
            l,
            a
          );
        break;
      case 13:
        dl(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? dl(
          e,
          t,
          l,
          a
        ) : uu(e, t) : u._visibility & 2 ? dl(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, fn(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), n & 2048 && Uc(c, t);
        break;
      case 24:
        dl(
          e,
          t,
          l,
          a
        ), n & 2048 && Nc(t.alternate, t);
        break;
      default:
        dl(
          e,
          t,
          l,
          a
        );
    }
  }
  function fn(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e, c = t, d = l, g = a, z = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          fn(
            u,
            c,
            d,
            g,
            n
          ), au(8, c);
          break;
        case 23:
          break;
        case 22:
          var L = c.stateNode;
          c.memoizedState !== null ? L._visibility & 2 ? fn(
            u,
            c,
            d,
            g,
            n
          ) : uu(
            u,
            c
          ) : (L._visibility |= 2, fn(
            u,
            c,
            d,
            g,
            n
          )), n && z & 2048 && Uc(
            c.alternate,
            c
          );
          break;
        case 24:
          fn(
            u,
            c,
            d,
            g,
            n
          ), n && z & 2048 && Nc(c.alternate, c);
          break;
        default:
          fn(
            u,
            c,
            d,
            g,
            n
          );
      }
      t = t.sibling;
    }
  }
  function uu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            uu(l, a), n & 2048 && Uc(
              a.alternate,
              a
            );
            break;
          case 24:
            uu(l, a), n & 2048 && Nc(a.alternate, a);
            break;
          default:
            uu(l, a);
        }
        t = t.sibling;
      }
  }
  var iu = 8192;
  function on(e) {
    if (e.subtreeFlags & iu)
      for (e = e.child; e !== null; )
        vd(e), e = e.sibling;
  }
  function vd(e) {
    switch (e.tag) {
      case 26:
        on(e), e.flags & iu && e.memoizedState !== null && Sy(
          nl,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        on(e);
        break;
      case 3:
      case 4:
        var t = nl;
        nl = qi(e.stateNode.containerInfo), on(e), nl = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = iu, iu = 16777216, on(e), iu = t) : on(e));
        break;
      default:
        on(e);
    }
  }
  function yd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ru(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          st = a, pd(
            a,
            e
          );
        }
      yd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        gd(e), e = e.sibling;
  }
  function gd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ru(e), e.flags & 2048 && Jl(9, e, e.return);
        break;
      case 3:
        ru(e);
        break;
      case 12:
        ru(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, zi(e)) : ru(e);
        break;
      default:
        ru(e);
    }
  }
  function zi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          st = a, pd(
            a,
            e
          );
        }
      yd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Jl(8, t, t.return), zi(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, zi(t));
          break;
        default:
          zi(t);
      }
      e = e.sibling;
    }
  }
  function pd(e, t) {
    for (; st !== null; ) {
      var l = st;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Jl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Qn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, st = a;
      else
        e: for (l = e; st !== null; ) {
          a = st;
          var n = a.sibling, u = a.return;
          if (fd(a), a === l) {
            st = null;
            break e;
          }
          if (n !== null) {
            n.return = u, st = n;
            break e;
          }
          st = u;
        }
    }
  }
  var Hv = {
    getCacheForType: function(e) {
      var t = pt(ct), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    }
  }, Lv = typeof WeakMap == "function" ? WeakMap : Map, Be = 0, Ve = null, Me = null, _e = 0, je = 0, Ht = null, Wl = !1, sn = !1, Cc = !1, Ul = 0, et = 0, Fl = 0, Ca = 0, wc = 0, $t = 0, dn = 0, cu = null, _t = null, Hc = !1, Lc = 0, Oi = 1 / 0, _i = null, Pl = null, vt = 0, Il = null, hn = null, mn = 0, Bc = 0, jc = null, Sd = null, fu = 0, qc = null;
  function Lt() {
    if ((Be & 2) !== 0 && _e !== 0)
      return _e & -_e;
    if (_.T !== null) {
      var e = en;
      return e !== 0 ? e : Kc();
    }
    return S();
  }
  function bd() {
    $t === 0 && ($t = (_e & 536870912) === 0 || He ? Ya() : 536870912);
    var e = Jt.current;
    return e !== null && (e.flags |= 32), $t;
  }
  function Bt(e, t, l) {
    (e === Ve && (je === 2 || je === 9) || e.cancelPendingCommit !== null) && (vn(e, 0), ea(
      e,
      _e,
      $t,
      !1
    )), va(e, l), ((Be & 2) === 0 || e !== Ve) && (e === Ve && ((Be & 2) === 0 && (Ca |= l), et === 4 && ea(
      e,
      _e,
      $t,
      !1
    )), hl(e));
  }
  function Ed(e, t, l) {
    if ((Be & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || cl(e, t), n = a ? qv(e, t) : Xc(e, t, !0), u = a;
    do {
      if (n === 0) {
        sn && !a && ea(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !Bv(l)) {
          n = Xc(e, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var d = e;
              n = cu;
              var g = d.current.memoizedState.isDehydrated;
              if (g && (vn(d, c).flags |= 256), c = Xc(
                d,
                c,
                !1
              ), c !== 2) {
                if (Cc && !g) {
                  d.errorRecoveryDisabledLanes |= u, Ca |= u, n = 4;
                  break e;
                }
                u = _t, _t = n, u !== null && (_t === null ? _t = u : _t.push.apply(
                  _t,
                  u
                ));
              }
              n = c;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          vn(e, 0), ea(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = n, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ea(
                a,
                t,
                $t,
                !Wl
              );
              break e;
            case 2:
              _t = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = Lc + 300 - xt(), 10 < n)) {
            if (ea(
              a,
              t,
              $t,
              !Wl
            ), ma(a, 0, !0) !== 0) break e;
            a.timeoutHandle = Wd(
              Rd.bind(
                null,
                a,
                l,
                _t,
                _i,
                Hc,
                t,
                $t,
                Ca,
                dn,
                Wl,
                u,
                2,
                -0,
                0
              ),
              n
            );
            break e;
          }
          Rd(
            a,
            l,
            _t,
            _i,
            Hc,
            t,
            $t,
            Ca,
            dn,
            Wl,
            u,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    hl(e);
  }
  function Rd(e, t, l, a, n, u, c, d, g, z, L, G, O, x) {
    if (e.timeoutHandle = -1, G = t.subtreeFlags, (G & 8192 || (G & 16785408) === 16785408) && (yu = { stylesheets: null, count: 0, unsuspend: py }, vd(t), G = by(), G !== null)) {
      e.cancelPendingCommit = G(
        _d.bind(
          null,
          e,
          t,
          u,
          l,
          a,
          n,
          c,
          d,
          g,
          L,
          1,
          O,
          x
        )
      ), ea(e, u, c, !z);
      return;
    }
    _d(
      e,
      t,
      u,
      l,
      a,
      n,
      c,
      d,
      g
    );
  }
  function Bv(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Ut(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ea(e, t, l, a) {
    t &= ~wc, t &= ~Ca, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - ht(n), c = 1 << u;
      a[u] = -1, n &= ~c;
    }
    l !== 0 && ya(e, l, t);
  }
  function xi() {
    return (Be & 6) === 0 ? (ou(0), !1) : !0;
  }
  function Yc() {
    if (Me !== null) {
      if (je === 0)
        var e = Me.return;
      else
        e = Me, Tl = za = null, ac(e), rn = null, eu = 0, e = Me;
      for (; e !== null; )
        td(e.alternate, e), e = e.return;
      Me = null;
    }
  }
  function vn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, ty(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Yc(), Ve = e, Me = l = bl(e.current, null), _e = t, je = 0, Ht = null, Wl = !1, sn = cl(e, t), Cc = !1, dn = $t = wc = Ca = Fl = et = 0, _t = cu = null, Hc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ht(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
    return Ul = t, Pu(), l;
  }
  function Td(e, t) {
    be = null, _.H = gi, t === Zn || t === ri ? (t = Yo(), je = 3) : t === Bo ? (t = Yo(), je = 4) : je = t === Gs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, Me === null && (et = 1, Ri(
      e,
      Qt(t, e.current)
    ));
  }
  function Dd() {
    var e = _.H;
    return _.H = gi, e === null ? gi : e;
  }
  function Md() {
    var e = _.A;
    return _.A = Hv, e;
  }
  function Gc() {
    et = 4, Wl || (_e & 4194048) !== _e && Jt.current !== null || (sn = !0), (Fl & 134217727) === 0 && (Ca & 134217727) === 0 || Ve === null || ea(
      Ve,
      _e,
      $t,
      !1
    );
  }
  function Xc(e, t, l) {
    var a = Be;
    Be |= 2;
    var n = Dd(), u = Md();
    (Ve !== e || _e !== t) && (_i = null, vn(e, t)), t = !1;
    var c = et;
    e: do
      try {
        if (je !== 0 && Me !== null) {
          var d = Me, g = Ht;
          switch (je) {
            case 8:
              Yc(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Jt.current === null && (t = !0);
              var z = je;
              if (je = 0, Ht = null, yn(e, d, g, z), l && sn) {
                c = 0;
                break e;
              }
              break;
            default:
              z = je, je = 0, Ht = null, yn(e, d, g, z);
          }
        }
        jv(), c = et;
        break;
      } catch (L) {
        Td(e, L);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Tl = za = null, Be = a, _.H = n, _.A = u, Me === null && (Ve = null, _e = 0, Pu()), c;
  }
  function jv() {
    for (; Me !== null; ) Ad(Me);
  }
  function qv(e, t) {
    var l = Be;
    Be |= 2;
    var a = Dd(), n = Md();
    Ve !== e || _e !== t ? (_i = null, Oi = xt() + 500, vn(e, t)) : sn = cl(
      e,
      t
    );
    e: do
      try {
        if (je !== 0 && Me !== null) {
          t = Me;
          var u = Ht;
          t: switch (je) {
            case 1:
              je = 0, Ht = null, yn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (jo(u)) {
                je = 0, Ht = null, zd(t);
                break;
              }
              t = function() {
                je !== 2 && je !== 9 || Ve !== e || (je = 7), hl(e);
              }, u.then(t, t);
              break e;
            case 3:
              je = 7;
              break e;
            case 4:
              je = 5;
              break e;
            case 7:
              jo(u) ? (je = 0, Ht = null, zd(t)) : (je = 0, Ht = null, yn(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (Me.tag) {
                case 26:
                  c = Me.memoizedState;
                case 5:
                case 27:
                  var d = Me;
                  if (!c || ch(c)) {
                    je = 0, Ht = null;
                    var g = d.sibling;
                    if (g !== null) Me = g;
                    else {
                      var z = d.return;
                      z !== null ? (Me = z, Ui(z)) : Me = null;
                    }
                    break t;
                  }
              }
              je = 0, Ht = null, yn(e, t, u, 5);
              break;
            case 6:
              je = 0, Ht = null, yn(e, t, u, 6);
              break;
            case 8:
              Yc(), et = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Yv();
        break;
      } catch (L) {
        Td(e, L);
      }
    while (!0);
    return Tl = za = null, _.H = a, _.A = n, Be = l, Me !== null ? 0 : (Ve = null, _e = 0, Pu(), et);
  }
  function Yv() {
    for (; Me !== null && !cr(); )
      Ad(Me);
  }
  function Ad(e) {
    var t = Is(e.alternate, e, Ul);
    e.memoizedProps = e.pendingProps, t === null ? Ui(e) : Me = t;
  }
  function zd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Js(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          _e
        );
        break;
      case 11:
        t = Js(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          _e
        );
        break;
      case 5:
        ac(t);
      default:
        td(l, t), t = Me = Oo(t, Ul), t = Is(l, t, Ul);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ui(e) : Me = t;
  }
  function yn(e, t, l, a) {
    Tl = za = null, ac(t), rn = null, eu = 0;
    var n = t.return;
    try {
      if (_v(
        e,
        n,
        t,
        l,
        _e
      )) {
        et = 1, Ri(
          e,
          Qt(l, e.current)
        ), Me = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw Me = n, u;
      et = 1, Ri(
        e,
        Qt(l, e.current)
      ), Me = null;
      return;
    }
    t.flags & 32768 ? (He || a === 1 ? e = !0 : sn || (_e & 536870912) !== 0 ? e = !1 : (Wl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Jt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Od(t, e)) : Ui(t);
  }
  function Ui(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Od(
          t,
          Wl
        );
        return;
      }
      e = t.return;
      var l = Uv(
        t.alternate,
        t,
        Ul
      );
      if (l !== null) {
        Me = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function Od(e, t) {
    do {
      var l = Nv(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, Me = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        Me = e;
        return;
      }
      Me = e = l;
    } while (e !== null);
    et = 6, Me = null;
  }
  function _d(e, t, l, a, n, u, c, d, g) {
    e.cancelPendingCommit = null;
    do
      Ni();
    while (vt !== 0);
    if ((Be & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Nr, Xu(
        e,
        l,
        u,
        c,
        d,
        g
      ), e === Ve && (Me = Ve = null, _e = 0), hn = t, Il = e, mn = l, Bc = u, jc = n, Sd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Vv(qa, function() {
        return wd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null, n = V.p, V.p = 2, c = Be, Be |= 4;
        try {
          Cv(e, t, l);
        } finally {
          Be = c, V.p = n, _.T = a;
        }
      }
      vt = 1, xd(), Ud(), Nd();
    }
  }
  function xd() {
    if (vt === 1) {
      vt = 0;
      var e = Il, t = hn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = _.T, _.T = null;
        var a = V.p;
        V.p = 2;
        var n = Be;
        Be |= 4;
        try {
          dd(t, e);
          var u = ef, c = po(e.containerInfo), d = u.focusedElem, g = u.selectionRange;
          if (c !== d && d && d.ownerDocument && go(
            d.ownerDocument.documentElement,
            d
          )) {
            if (g !== null && zr(d)) {
              var z = g.start, L = g.end;
              if (L === void 0 && (L = z), "selectionStart" in d)
                d.selectionStart = z, d.selectionEnd = Math.min(
                  L,
                  d.value.length
                );
              else {
                var G = d.ownerDocument || document, O = G && G.defaultView || window;
                if (O.getSelection) {
                  var x = O.getSelection(), de = d.textContent.length, re = Math.min(g.start, de), Ge = g.end === void 0 ? re : Math.min(g.end, de);
                  !x.extend && re > Ge && (c = Ge, Ge = re, re = c);
                  var T = yo(
                    d,
                    re
                  ), E = yo(
                    d,
                    Ge
                  );
                  if (T && E && (x.rangeCount !== 1 || x.anchorNode !== T.node || x.anchorOffset !== T.offset || x.focusNode !== E.node || x.focusOffset !== E.offset)) {
                    var A = G.createRange();
                    A.setStart(T.node, T.offset), x.removeAllRanges(), re > Ge ? (x.addRange(A), x.extend(E.node, E.offset)) : (A.setEnd(E.node, E.offset), x.addRange(A));
                  }
                }
              }
            }
            for (G = [], x = d; x = x.parentNode; )
              x.nodeType === 1 && G.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < G.length; d++) {
              var q = G[d];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Vi = !!Ic, ef = Ic = null;
        } finally {
          Be = n, V.p = a, _.T = l;
        }
      }
      e.current = t, vt = 2;
    }
  }
  function Ud() {
    if (vt === 2) {
      vt = 0;
      var e = Il, t = hn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = _.T, _.T = null;
        var a = V.p;
        V.p = 2;
        var n = Be;
        Be |= 4;
        try {
          cd(e, t.alternate, t);
        } finally {
          Be = n, V.p = a, _.T = l;
        }
      }
      vt = 3;
    }
  }
  function Nd() {
    if (vt === 4 || vt === 3) {
      vt = 0, fr();
      var e = Il, t = hn, l = mn, a = Sd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? vt = 5 : (vt = 0, hn = Il = null, Cd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Pl = null), zn(l), t = t.stateNode, We && typeof We.onCommitFiberRoot == "function")
        try {
          We.onCommitFiberRoot(
            Tt,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = _.T, n = V.p, V.p = 2, _.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
            var d = a[c];
            u(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          _.T = t, V.p = n;
        }
      }
      (mn & 3) !== 0 && Ni(), hl(e), n = e.pendingLanes, (l & 4194090) !== 0 && (n & 42) !== 0 ? e === qc ? fu++ : (fu = 0, qc = e) : fu = 0, ou(0);
    }
  }
  function Cd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Qn(t)));
  }
  function Ni(e) {
    return xd(), Ud(), Nd(), wd();
  }
  function wd() {
    if (vt !== 5) return !1;
    var e = Il, t = Bc;
    Bc = 0;
    var l = zn(mn), a = _.T, n = V.p;
    try {
      V.p = 32 > l ? 32 : l, _.T = null, l = jc, jc = null;
      var u = Il, c = mn;
      if (vt = 0, hn = Il = null, mn = 0, (Be & 6) !== 0) throw Error(o(331));
      var d = Be;
      if (Be |= 4, gd(u.current), md(
        u,
        u.current,
        c,
        l
      ), Be = d, ou(0, !1), We && typeof We.onPostCommitFiberRoot == "function")
        try {
          We.onPostCommitFiberRoot(Tt, u);
        } catch {
        }
      return !0;
    } finally {
      V.p = n, _.T = a, Cd(e, t);
    }
  }
  function Hd(e, t, l) {
    t = Qt(l, t), t = gc(e.stateNode, t, 2), e = Ql(e, t, 2), e !== null && (va(e, 2), hl(e));
  }
  function Xe(e, t, l) {
    if (e.tag === 3)
      Hd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Pl === null || !Pl.has(a))) {
            e = Qt(l, e), l = qs(2), a = Ql(t, l, 2), a !== null && (Ys(
              l,
              a,
              t,
              e
            ), va(a, 2), hl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Lv();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (Cc = !0, n.add(l), e = Gv.bind(null, e, t, l), t.then(e, e));
  }
  function Gv(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ve === e && (_e & l) === l && (et === 4 || et === 3 && (_e & 62914560) === _e && 300 > xt() - Lc ? (Be & 2) === 0 && vn(e, 0) : wc |= l, dn === _e && (dn = 0)), hl(e);
  }
  function Ld(e, t) {
    t === 0 && (t = Gu()), e = Wa(e, t), e !== null && (va(e, t), hl(e));
  }
  function Xv(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Ld(e, l);
  }
  function Qv(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode, n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), Ld(e, l);
  }
  function Vv(e, t) {
    return Dn(e, t);
  }
  var Ci = null, gn = null, Vc = !1, wi = !1, Zc = !1, wa = 0;
  function hl(e) {
    e !== gn && e.next === null && (gn === null ? Ci = gn = e : gn = gn.next = e), wi = !0, Vc || (Vc = !0, Kv());
  }
  function ou(e, t) {
    if (!Zc && wi) {
      Zc = !0;
      do
        for (var l = !1, a = Ci; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes, d = a.pingedLanes;
              u = (1 << 31 - ht(42 | e) + 1) - 1, u &= n & ~(c & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Yd(a, u));
          } else
            u = _e, u = ma(
              a,
              a === Ve ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || cl(a, u) || (l = !0, Yd(a, u));
          a = a.next;
        }
      while (l);
      Zc = !1;
    }
  }
  function Zv() {
    Bd();
  }
  function Bd() {
    wi = Vc = !1;
    var e = 0;
    wa !== 0 && (ey() && (e = wa), wa = 0);
    for (var t = xt(), l = null, a = Ci; a !== null; ) {
      var n = a.next, u = jd(a, t);
      u === 0 ? (a.next = null, l === null ? Ci = n : l.next = n, n === null && (gn = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (wi = !0)), a = n;
    }
    ou(e);
  }
  function jd(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - ht(u), d = 1 << c, g = n[c];
      g === -1 ? ((d & l) === 0 || (d & a) !== 0) && (n[c] = Yu(d, t)) : g <= t && (e.expiredLanes |= d), u &= ~d;
    }
    if (t = Ve, l = _e, l = ma(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (je === 2 || je === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && It(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || cl(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && It(a), zn(l)) {
        case 2:
        case 8:
          l = Bu;
          break;
        case 32:
          l = qa;
          break;
        case 268435456:
          l = wl;
          break;
        default:
          l = qa;
      }
      return a = qd.bind(null, e), l = Dn(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && It(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function qd(e, t) {
    if (vt !== 0 && vt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Ni() && e.callbackNode !== l)
      return null;
    var a = _e;
    return a = ma(
      e,
      e === Ve ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Ed(e, a, t), jd(e, xt()), e.callbackNode != null && e.callbackNode === l ? qd.bind(null, e) : null);
  }
  function Yd(e, t) {
    if (Ni()) return null;
    Ed(e, t, !0);
  }
  function Kv() {
    ly(function() {
      (Be & 6) !== 0 ? Dn(
        Lu,
        Zv
      ) : Bd();
    });
  }
  function Kc() {
    return wa === 0 && (wa = Ya()), wa;
  }
  function Gd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Zu("" + e);
  }
  function Xd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Jv(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Gd(
        (n[Q] || null).action
      ), c = a.submitter;
      c && (t = (t = c[Q] || null) ? Gd(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var d = new ku(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (wa !== 0) {
                  var g = c ? Xd(n, c) : new FormData(n);
                  dc(
                    l,
                    {
                      pending: !0,
                      data: g,
                      method: n.method,
                      action: u
                    },
                    null,
                    g
                  );
                }
              } else
                typeof u == "function" && (d.preventDefault(), g = c ? Xd(n, c) : new FormData(n), dc(
                  l,
                  {
                    pending: !0,
                    data: g,
                    method: n.method,
                    action: u
                  },
                  u,
                  g
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Jc = 0; Jc < Ur.length; Jc++) {
    var $c = Ur[Jc], $v = $c.toLowerCase(), kv = $c[0].toUpperCase() + $c.slice(1);
    al(
      $v,
      "on" + kv
    );
  }
  al(Eo, "onAnimationEnd"), al(Ro, "onAnimationIteration"), al(To, "onAnimationStart"), al("dblclick", "onDoubleClick"), al("focusin", "onFocus"), al("focusout", "onBlur"), al(dv, "onTransitionRun"), al(hv, "onTransitionStart"), al(mv, "onTransitionCancel"), al(Do, "onTransitionEnd"), Yt("onMouseEnter", ["mouseout", "mouseover"]), Yt("onMouseLeave", ["mouseout", "mouseover"]), Yt("onPointerEnter", ["pointerout", "pointerover"]), Yt("onPointerLeave", ["pointerout", "pointerover"]), Et(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Et(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Et("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Et(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Et(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Et(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var su = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Wv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su)
  );
  function Qd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c], g = d.instance, z = d.currentTarget;
            if (d = d.listener, g !== u && n.isPropagationStopped())
              break e;
            u = d, n.currentTarget = z;
            try {
              u(n);
            } catch (L) {
              Ei(L);
            }
            n.currentTarget = null, u = g;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (d = a[c], g = d.instance, z = d.currentTarget, d = d.listener, g !== u && n.isPropagationStopped())
              break e;
            u = d, n.currentTarget = z;
            try {
              u(n);
            } catch (L) {
              Ei(L);
            }
            n.currentTarget = null, u = g;
          }
      }
    }
  }
  function Ae(e, t) {
    var l = t[ie];
    l === void 0 && (l = t[ie] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Vd(t, e, 2, !1), l.add(a));
  }
  function kc(e, t, l) {
    var a = 0;
    t && (a |= 4), Vd(
      l,
      e,
      a,
      t
    );
  }
  var Hi = "_reactListening" + Math.random().toString(36).slice(2);
  function Wc(e) {
    if (!e[Hi]) {
      e[Hi] = !0, Oe.forEach(function(l) {
        l !== "selectionchange" && (Wv.has(l) || kc(l, !1, e), kc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hi] || (t[Hi] = !0, kc("selectionchange", !1, t));
    }
  }
  function Vd(e, t, l, a) {
    switch (mh(t)) {
      case 2:
        var n = Ty;
        break;
      case 8:
        n = Dy;
        break;
      default:
        n = sf;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !pr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function Fc(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var g = c.tag;
              if ((g === 3 || g === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; d !== null; ) {
            if (c = ve(d), c === null) return;
            if (g = c.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              a = u = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Wf(function() {
      var z = u, L = yr(l), G = [];
      e: {
        var O = Mo.get(e);
        if (O !== void 0) {
          var x = ku, de = e;
          switch (e) {
            case "keypress":
              if (Ju(l) === 0) break e;
            case "keydown":
            case "keyup":
              x = Vm;
              break;
            case "focusin":
              de = "focus", x = Rr;
              break;
            case "focusout":
              de = "blur", x = Rr;
              break;
            case "beforeblur":
            case "afterblur":
              x = Rr;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = If;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = Nm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Jm;
              break;
            case Eo:
            case Ro:
            case To:
              x = Hm;
              break;
            case Do:
              x = km;
              break;
            case "scroll":
            case "scrollend":
              x = xm;
              break;
            case "wheel":
              x = Fm;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = Bm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = to;
              break;
            case "toggle":
            case "beforetoggle":
              x = Im;
          }
          var re = (t & 4) !== 0, Ge = !re && (e === "scroll" || e === "scrollend"), T = re ? O !== null ? O + "Capture" : null : O;
          re = [];
          for (var E = z, A; E !== null; ) {
            var q = E;
            if (A = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || A === null || T === null || (q = xn(E, T), q != null && re.push(
              du(E, q, A)
            )), Ge) break;
            E = E.return;
          }
          0 < re.length && (O = new x(
            O,
            de,
            null,
            l,
            L
          ), G.push({ event: O, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", O && l !== vr && (de = l.relatedTarget || l.fromElement) && (ve(de) || de[ee]))
            break e;
          if ((x || O) && (O = L.window === L ? L : (O = L.ownerDocument) ? O.defaultView || O.parentWindow : window, x ? (de = l.relatedTarget || l.toElement, x = z, de = de ? ve(de) : null, de !== null && (Ge = h(de), re = de.tag, de !== Ge || re !== 5 && re !== 27 && re !== 6) && (de = null)) : (x = null, de = z), x !== de)) {
            if (re = If, q = "onMouseLeave", T = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (re = to, q = "onPointerLeave", T = "onPointerEnter", E = "pointer"), Ge = x == null ? O : Ke(x), A = de == null ? O : Ke(de), O = new re(
              q,
              E + "leave",
              x,
              l,
              L
            ), O.target = Ge, O.relatedTarget = A, q = null, ve(L) === z && (re = new re(
              T,
              E + "enter",
              de,
              l,
              L
            ), re.target = A, re.relatedTarget = Ge, q = re), Ge = q, x && de)
              t: {
                for (re = x, T = de, E = 0, A = re; A; A = pn(A))
                  E++;
                for (A = 0, q = T; q; q = pn(q))
                  A++;
                for (; 0 < E - A; )
                  re = pn(re), E--;
                for (; 0 < A - E; )
                  T = pn(T), A--;
                for (; E--; ) {
                  if (re === T || T !== null && re === T.alternate)
                    break t;
                  re = pn(re), T = pn(T);
                }
                re = null;
              }
            else re = null;
            x !== null && Zd(
              G,
              O,
              x,
              re,
              !1
            ), de !== null && Ge !== null && Zd(
              G,
              Ge,
              de,
              re,
              !0
            );
          }
        }
        e: {
          if (O = z ? Ke(z) : window, x = O.nodeName && O.nodeName.toLowerCase(), x === "select" || x === "input" && O.type === "file")
            var I = fo;
          else if (ro(O))
            if (oo)
              I = fv;
            else {
              I = rv;
              var Re = iv;
            }
          else
            x = O.nodeName, !x || x.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? z && mr(z.elementType) && (I = fo) : I = cv;
          if (I && (I = I(e, z))) {
            co(
              G,
              I,
              l,
              L
            );
            break e;
          }
          Re && Re(e, O, z), e === "focusout" && z && O.type === "number" && z.memoizedProps.value != null && hr(O, "number", O.value);
        }
        switch (Re = z ? Ke(z) : window, e) {
          case "focusin":
            (ro(Re) || Re.contentEditable === "true") && (Ja = Re, Or = z, jn = null);
            break;
          case "focusout":
            jn = Or = Ja = null;
            break;
          case "mousedown":
            _r = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            _r = !1, So(G, l, L);
            break;
          case "selectionchange":
            if (sv) break;
          case "keydown":
          case "keyup":
            So(G, l, L);
        }
        var ae;
        if (Dr)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          Ka ? uo(e, l) && (fe = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (fe = "onCompositionStart");
        fe && (lo && l.locale !== "ko" && (Ka || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Ka && (ae = Ff()) : (ql = L, Sr = "value" in ql ? ql.value : ql.textContent, Ka = !0)), Re = Li(z, fe), 0 < Re.length && (fe = new eo(
          fe,
          e,
          null,
          l,
          L
        ), G.push({ event: fe, listeners: Re }), ae ? fe.data = ae : (ae = io(l), ae !== null && (fe.data = ae)))), (ae = tv ? lv(e, l) : av(e, l)) && (fe = Li(z, "onBeforeInput"), 0 < fe.length && (Re = new eo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          L
        ), G.push({
          event: Re,
          listeners: fe
        }), Re.data = ae)), Jv(
          G,
          e,
          z,
          l,
          L
        );
      }
      Qd(G, t);
    });
  }
  function du(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Li(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = xn(e, l), n != null && a.unshift(
        du(e, n, u)
      ), n = xn(e, t), n != null && a.push(
        du(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function pn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Zd(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a; ) {
      var d = l, g = d.alternate, z = d.stateNode;
      if (d = d.tag, g !== null && g === a) break;
      d !== 5 && d !== 26 && d !== 27 || z === null || (g = z, n ? (z = xn(l, u), z != null && c.unshift(
        du(l, z, g)
      )) : n || (z = xn(l, u), z != null && c.push(
        du(l, z, g)
      ))), l = l.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Fv = /\r\n?/g, Pv = /\u0000|\uFFFD/g;
  function Kd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Fv, `
`).replace(Pv, "");
  }
  function Jd(e, t) {
    return t = Kd(t), Kd(e) === t;
  }
  function Bi() {
  }
  function Ye(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Qa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Qa(e, "" + a);
        break;
      case "className":
        pl(e, "class", a);
        break;
      case "tabIndex":
        pl(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pl(e, l, a);
        break;
      case "style":
        $f(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          pl(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = Zu("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (t !== "input" && Ye(e, t, "name", n.name, n, null), Ye(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Ye(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Ye(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Ye(e, t, "encType", n.encType, n, null), Ye(e, t, "method", n.method, n, null), Ye(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = Zu("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Bi);
        break;
      case "onScroll":
        a != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = Zu("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        Ae("beforetoggle", e), Ae("toggle", e), Gt(e, "popover", a);
        break;
      case "xlinkActuate":
        Ee(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ee(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ee(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ee(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ee(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ee(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ee(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ee(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ee(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Gt(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Om.get(l) || l, Gt(e, l, a));
    }
  }
  function Pc(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        $f(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Qa(e, a) : (typeof a == "number" || typeof a == "bigint") && Qa(e, "" + a);
        break;
      case "onScroll":
        a != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ae("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Bi);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Hl.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[Q] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Gt(e, l, a);
          }
    }
  }
  function yt(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ae("error", e), Ae("load", e);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ye(e, t, u, c, l, null);
              }
          }
        n && Ye(e, t, "srcSet", l.srcSet, l, null), a && Ye(e, t, "src", l.src, l, null);
        return;
      case "input":
        Ae("invalid", e);
        var d = u = c = n = null, g = null, z = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var L = l[a];
            if (L != null)
              switch (a) {
                case "name":
                  n = L;
                  break;
                case "type":
                  c = L;
                  break;
                case "checked":
                  g = L;
                  break;
                case "defaultChecked":
                  z = L;
                  break;
                case "value":
                  u = L;
                  break;
                case "defaultValue":
                  d = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ye(e, t, a, L, l, null);
              }
          }
        Vf(
          e,
          u,
          d,
          g,
          z,
          c,
          n,
          !1
        ), Qu(e);
        return;
      case "select":
        Ae("invalid", e), a = c = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (d = l[n], d != null))
            switch (n) {
              case "value":
                u = d;
                break;
              case "defaultValue":
                c = d;
                break;
              case "multiple":
                a = d;
              default:
                Ye(e, t, n, d, l, null);
            }
        t = u, l = c, e.multiple = !!a, t != null ? Xa(e, !!a, t, !1) : l != null && Xa(e, !!a, l, !0);
        return;
      case "textarea":
        Ae("invalid", e), u = n = a = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (d = l[c], d != null))
            switch (c) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                u = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(o(91));
                break;
              default:
                Ye(e, t, c, d, l, null);
            }
        Kf(e, a, n, u), Qu(e);
        return;
      case "option":
        for (g in l)
          if (l.hasOwnProperty(g) && (a = l[g], a != null))
            switch (g) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ye(e, t, g, a, l, null);
            }
        return;
      case "dialog":
        Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < su.length; a++)
          Ae(su[a], e);
        break;
      case "image":
        Ae("error", e), Ae("load", e);
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ae("error", e), Ae("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in l)
          if (l.hasOwnProperty(z) && (a = l[z], a != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ye(e, t, z, a, l, null);
            }
        return;
      default:
        if (mr(t)) {
          for (L in l)
            l.hasOwnProperty(L) && (a = l[L], a !== void 0 && Pc(
              e,
              t,
              L,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && (a = l[d], a != null && Ye(e, t, d, a, l, null));
  }
  function Iv(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, c = null, d = null, g = null, z = null, L = null;
        for (x in l) {
          var G = l[x];
          if (l.hasOwnProperty(x) && G != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = G;
              default:
                a.hasOwnProperty(x) || Ye(e, t, x, null, a, G);
            }
        }
        for (var O in a) {
          var x = a[O];
          if (G = l[O], a.hasOwnProperty(O) && (x != null || G != null))
            switch (O) {
              case "type":
                u = x;
                break;
              case "name":
                n = x;
                break;
              case "checked":
                z = x;
                break;
              case "defaultChecked":
                L = x;
                break;
              case "value":
                c = x;
                break;
              case "defaultValue":
                d = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(o(137, t));
                break;
              default:
                x !== G && Ye(
                  e,
                  t,
                  O,
                  x,
                  a,
                  G
                );
            }
        }
        dr(
          e,
          c,
          d,
          g,
          z,
          L,
          u,
          n
        );
        return;
      case "select":
        x = c = d = O = null;
        for (u in l)
          if (g = l[u], l.hasOwnProperty(u) && g != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                x = g;
              default:
                a.hasOwnProperty(u) || Ye(
                  e,
                  t,
                  u,
                  null,
                  a,
                  g
                );
            }
        for (n in a)
          if (u = a[n], g = l[n], a.hasOwnProperty(n) && (u != null || g != null))
            switch (n) {
              case "value":
                O = u;
                break;
              case "defaultValue":
                d = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== g && Ye(
                  e,
                  t,
                  n,
                  u,
                  a,
                  g
                );
            }
        t = d, l = c, a = x, O != null ? Xa(e, !!l, O, !1) : !!a != !!l && (t != null ? Xa(e, !!l, t, !0) : Xa(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        x = O = null;
        for (d in l)
          if (n = l[d], l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ye(e, t, d, null, a, n);
            }
        for (c in a)
          if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null))
            switch (c) {
              case "value":
                O = n;
                break;
              case "defaultValue":
                x = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== u && Ye(e, t, c, n, a, u);
            }
        Zf(e, O, x);
        return;
      case "option":
        for (var de in l)
          if (O = l[de], l.hasOwnProperty(de) && O != null && !a.hasOwnProperty(de))
            switch (de) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ye(
                  e,
                  t,
                  de,
                  null,
                  a,
                  O
                );
            }
        for (g in a)
          if (O = a[g], x = l[g], a.hasOwnProperty(g) && O !== x && (O != null || x != null))
            switch (g) {
              case "selected":
                e.selected = O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                Ye(
                  e,
                  t,
                  g,
                  O,
                  a,
                  x
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var re in l)
          O = l[re], l.hasOwnProperty(re) && O != null && !a.hasOwnProperty(re) && Ye(e, t, re, null, a, O);
        for (z in a)
          if (O = a[z], x = l[z], a.hasOwnProperty(z) && O !== x && (O != null || x != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  z,
                  O,
                  a,
                  x
                );
            }
        return;
      default:
        if (mr(t)) {
          for (var Ge in l)
            O = l[Ge], l.hasOwnProperty(Ge) && O !== void 0 && !a.hasOwnProperty(Ge) && Pc(
              e,
              t,
              Ge,
              void 0,
              a,
              O
            );
          for (L in a)
            O = a[L], x = l[L], !a.hasOwnProperty(L) || O === x || O === void 0 && x === void 0 || Pc(
              e,
              t,
              L,
              O,
              a,
              x
            );
          return;
        }
    }
    for (var T in l)
      O = l[T], l.hasOwnProperty(T) && O != null && !a.hasOwnProperty(T) && Ye(e, t, T, null, a, O);
    for (G in a)
      O = a[G], x = l[G], !a.hasOwnProperty(G) || O === x || O == null && x == null || Ye(e, t, G, O, a, x);
  }
  var Ic = null, ef = null;
  function ji(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function $d(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function kd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function tf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var lf = null;
  function ey() {
    var e = window.event;
    return e && e.type === "popstate" ? e === lf ? !1 : (lf = e, !0) : (lf = null, !1);
  }
  var Wd = typeof setTimeout == "function" ? setTimeout : void 0, ty = typeof clearTimeout == "function" ? clearTimeout : void 0, Fd = typeof Promise == "function" ? Promise : void 0, ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fd < "u" ? function(e) {
    return Fd.resolve(null).then(e).catch(ay);
  } : Wd;
  function ay(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ta(e) {
    return e === "head";
  }
  function Pd(e, t) {
    var l = t, a = 0, n = 0;
    do {
      var u = l.nextSibling;
      if (e.removeChild(l), u && u.nodeType === 8)
        if (l = u.data, l === "/$") {
          if (0 < a && 8 > a) {
            l = a;
            var c = e.ownerDocument;
            if (l & 1 && hu(c.documentElement), l & 2 && hu(c.body), l & 4)
              for (l = c.head, hu(l), c = l.firstChild; c; ) {
                var d = c.nextSibling, g = c.nodeName;
                c[oe] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c), c = d;
              }
          }
          if (n === 0) {
            e.removeChild(u), Eu(t);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
      else a = 0;
      l = u;
    } while (l);
    Eu(t);
  }
  function af(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          af(l), se(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function ny(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[oe])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = ul(e.nextSibling), e === null) break;
    }
    return null;
  }
  function uy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = ul(e.nextSibling), e === null)) return null;
    return e;
  }
  function nf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function iy(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function ul(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var uf = null;
  function Id(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function eh(e, t, l) {
    switch (t = ji(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function hu(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    se(e);
  }
  var kt = /* @__PURE__ */ new Map(), th = /* @__PURE__ */ new Set();
  function qi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Nl = V.d;
  V.d = {
    f: ry,
    r: cy,
    D: fy,
    C: oy,
    L: sy,
    m: dy,
    X: my,
    S: hy,
    M: vy
  };
  function ry() {
    var e = Nl.f(), t = xi();
    return e || t;
  }
  function cy(e) {
    var t = xe(e);
    t !== null && t.tag === 5 && t.type === "form" ? Es(t) : Nl.r(e);
  }
  var Sn = typeof document > "u" ? null : document;
  function lh(e, t, l) {
    var a = Sn;
    if (a && typeof t == "string" && t) {
      var n = Xt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), th.has(n) || (th.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), yt(t, "link", e), Ne(t), a.head.appendChild(t)));
    }
  }
  function fy(e) {
    Nl.D(e), lh("dns-prefetch", e, null);
  }
  function oy(e, t) {
    Nl.C(e, t), lh("preconnect", e, t);
  }
  function sy(e, t, l) {
    Nl.L(e, t, l);
    var a = Sn;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Xt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Xt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Xt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = bn(e);
          break;
        case "script":
          u = En(e);
      }
      kt.has(u) || (e = R(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), kt.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(mu(u)) || t === "script" && a.querySelector(vu(u)) || (t = a.createElement("link"), yt(t, "link", e), Ne(t), a.head.appendChild(t)));
    }
  }
  function dy(e, t) {
    Nl.m(e, t);
    var l = Sn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Xt(a) + '"][href="' + Xt(e) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = En(e);
      }
      if (!kt.has(u) && (e = R({ rel: "modulepreload", href: e }, t), kt.set(u, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(vu(u)))
              return;
        }
        a = l.createElement("link"), yt(a, "link", e), Ne(a), l.head.appendChild(a);
      }
    }
  }
  function hy(e, t, l) {
    Nl.S(e, t, l);
    var a = Sn;
    if (a && e) {
      var n = Fe(a).hoistableStyles, u = bn(e);
      t = t || "default";
      var c = n.get(u);
      if (!c) {
        var d = { loading: 0, preload: null };
        if (c = a.querySelector(
          mu(u)
        ))
          d.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = kt.get(u)) && rf(e, l);
          var g = c = a.createElement("link");
          Ne(g), yt(g, "link", e), g._p = new Promise(function(z, L) {
            g.onload = z, g.onerror = L;
          }), g.addEventListener("load", function() {
            d.loading |= 1;
          }), g.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, Yi(c, t, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: d
        }, n.set(u, c);
      }
    }
  }
  function my(e, t) {
    Nl.X(e, t);
    var l = Sn;
    if (l && e) {
      var a = Fe(l).hoistableScripts, n = En(e), u = a.get(n);
      u || (u = l.querySelector(vu(n)), u || (e = R({ src: e, async: !0 }, t), (t = kt.get(n)) && cf(e, t), u = l.createElement("script"), Ne(u), yt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function vy(e, t) {
    Nl.M(e, t);
    var l = Sn;
    if (l && e) {
      var a = Fe(l).hoistableScripts, n = En(e), u = a.get(n);
      u || (u = l.querySelector(vu(n)), u || (e = R({ src: e, async: !0, type: "module" }, t), (t = kt.get(n)) && cf(e, t), u = l.createElement("script"), Ne(u), yt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function ah(e, t, l, a) {
    var n = (n = ce.current) ? qi(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = bn(l.href), l = Fe(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = bn(l.href);
          var u = Fe(
            n
          ).hoistableStyles, c = u.get(e);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = n.querySelector(
            mu(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), kt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, kt.set(e, l), u || yy(
            n,
            e,
            l,
            c.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return c;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = En(l), l = Fe(
          n
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function bn(e) {
    return 'href="' + Xt(e) + '"';
  }
  function mu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function nh(e) {
    return R({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function yy(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), yt(t, "link", l), Ne(t), e.head.appendChild(t));
  }
  function En(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function vu(e) {
    return "script[async]" + e;
  }
  function uh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Xt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Ne(a), a;
          var n = R({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Ne(a), yt(a, "style", n), Yi(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = bn(l.href);
          var u = e.querySelector(
            mu(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ne(u), u;
          a = nh(l), (n = kt.get(n)) && rf(a, n), u = (e.ownerDocument || e).createElement("link"), Ne(u);
          var c = u;
          return c._p = new Promise(function(d, g) {
            c.onload = d, c.onerror = g;
          }), yt(u, "link", a), t.state.loading |= 4, Yi(u, l.precedence, e), t.instance = u;
        case "script":
          return u = En(l.src), (n = e.querySelector(
            vu(u)
          )) ? (t.instance = n, Ne(n), n) : (a = l, (n = kt.get(u)) && (a = R({}, l), cf(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ne(n), yt(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Yi(a, l.precedence, e));
    return t.instance;
  }
  function Yi(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
      var d = a[c];
      if (d.dataset.precedence === t) u = d;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function rf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function cf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Gi = null;
  function ih(e, t, l) {
    if (Gi === null) {
      var a = /* @__PURE__ */ new Map(), n = Gi = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Gi, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[oe] || u[X] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var d = a.get(c);
        d ? d.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function rh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function gy(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function ch(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var yu = null;
  function py() {
  }
  function Sy(e, t, l) {
    if (yu === null) throw Error(o(475));
    var a = yu;
    if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = bn(l.href), u = e.querySelector(
          mu(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = Xi.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = u, Ne(u);
          return;
        }
        u = e.ownerDocument || e, l = nh(l), (n = kt.get(n)) && rf(l, n), u = u.createElement("link"), Ne(u);
        var c = u;
        c._p = new Promise(function(d, g) {
          c.onload = d, c.onerror = g;
        }), yt(u, "link", l), t.instance = u;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Xi.bind(a), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function by() {
    if (yu === null) throw Error(o(475));
    var e = yu;
    return e.stylesheets && e.count === 0 && ff(e, e.stylesheets), 0 < e.count ? function(t) {
      var l = setTimeout(function() {
        if (e.stylesheets && ff(e, e.stylesheets), e.unsuspend) {
          var a = e.unsuspend;
          e.unsuspend = null, a();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function Xi() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) ff(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Qi = null;
  function ff(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Qi = /* @__PURE__ */ new Map(), t.forEach(Ey, e), Qi = null, Xi.call(e));
  }
  function Ey(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Qi.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Qi.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
        }
        a && l.set(null, a);
      }
      n = t.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = Xi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var gu = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Ry(e, t, l, a, n, u, c, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ga(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ga(0), this.hiddenUpdates = Ga(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fh(e, t, l, a, n, u, c, d, g, z, L, G) {
    return e = new Ry(
      e,
      t,
      l,
      c,
      d,
      g,
      z,
      G
    ), t = 1, u === !0 && (t |= 24), u = Nt(3, null, null, t), e.current = u, u.stateNode = e, t = Qr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Jr(u), e;
  }
  function oh(e) {
    return e ? (e = Fa, e) : Fa;
  }
  function sh(e, t, l, a, n, u) {
    n = oh(n), a.context === null ? a.context = n : a.pendingContext = n, a = Xl(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Ql(e, a, t), l !== null && (Bt(l, e, t), Jn(l, e, t));
  }
  function dh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function of(e, t) {
    dh(e, t), (e = e.alternate) && dh(e, t);
  }
  function hh(e) {
    if (e.tag === 13) {
      var t = Wa(e, 67108864);
      t !== null && Bt(t, e, 67108864), of(e, 67108864);
    }
  }
  var Vi = !0;
  function Ty(e, t, l, a) {
    var n = _.T;
    _.T = null;
    var u = V.p;
    try {
      V.p = 2, sf(e, t, l, a);
    } finally {
      V.p = u, _.T = n;
    }
  }
  function Dy(e, t, l, a) {
    var n = _.T;
    _.T = null;
    var u = V.p;
    try {
      V.p = 8, sf(e, t, l, a);
    } finally {
      V.p = u, _.T = n;
    }
  }
  function sf(e, t, l, a) {
    if (Vi) {
      var n = df(a);
      if (n === null)
        Fc(
          e,
          t,
          a,
          Zi,
          l
        ), vh(e, a);
      else if (Ay(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (vh(e, a), t & 4 && -1 < My.indexOf(e)) {
        for (; n !== null; ) {
          var u = xe(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = gl(u.pendingLanes);
                  if (c !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; c; ) {
                      var g = 1 << 31 - ht(c);
                      d.entanglements[1] |= g, c &= ~g;
                    }
                    hl(u), (Be & 6) === 0 && (Oi = xt() + 500, ou(0));
                  }
                }
                break;
              case 13:
                d = Wa(u, 2), d !== null && Bt(d, u, 2), xi(), of(u, 2);
            }
          if (u = df(a), u === null && Fc(
            e,
            t,
            a,
            Zi,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Fc(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function df(e) {
    return e = yr(e), hf(e);
  }
  var Zi = null;
  function hf(e) {
    if (Zi = null, e = ve(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = y(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Zi = e, null;
  }
  function mh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (or()) {
          case Lu:
            return 2;
          case Bu:
            return 8;
          case qa:
          case yl:
            return 32;
          case wl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mf = !1, la = null, aa = null, na = null, pu = /* @__PURE__ */ new Map(), Su = /* @__PURE__ */ new Map(), ua = [], My = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function vh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        la = null;
        break;
      case "dragenter":
      case "dragleave":
        aa = null;
        break;
      case "mouseover":
      case "mouseout":
        na = null;
        break;
      case "pointerover":
      case "pointerout":
        pu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Su.delete(t.pointerId);
    }
  }
  function bu(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = xe(t), t !== null && hh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Ay(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return la = bu(
          la,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return aa = bu(
          aa,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return na = bu(
          na,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return pu.set(
          u,
          bu(
            pu.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Su.set(
          u,
          bu(
            Su.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function yh(e) {
    var t = ve(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = y(l), t !== null) {
            e.blockedOn = t, M(e.priority, function() {
              if (l.tag === 13) {
                var a = Lt();
                a = An(a);
                var n = Wa(l, a);
                n !== null && Bt(n, l, a), of(l, a);
              }
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ki(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = df(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        vr = a, l.target.dispatchEvent(a), vr = null;
      } else
        return t = xe(l), t !== null && hh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function gh(e, t, l) {
    Ki(e) && l.delete(t);
  }
  function zy() {
    mf = !1, la !== null && Ki(la) && (la = null), aa !== null && Ki(aa) && (aa = null), na !== null && Ki(na) && (na = null), pu.forEach(gh), Su.forEach(gh);
  }
  function Ji(e, t) {
    e.blockedOn === t && (e.blockedOn = null, mf || (mf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      zy
    )));
  }
  var $i = null;
  function ph(e) {
    $i !== e && ($i = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        $i === e && ($i = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (hf(a || l) === null)
              continue;
            break;
          }
          var u = xe(l);
          u !== null && (e.splice(t, 3), t -= 3, dc(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Eu(e) {
    function t(g) {
      return Ji(g, e);
    }
    la !== null && Ji(la, e), aa !== null && Ji(aa, e), na !== null && Ji(na, e), pu.forEach(t), Su.forEach(t);
    for (var l = 0; l < ua.length; l++) {
      var a = ua[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ua.length && (l = ua[0], l.blockedOn === null); )
      yh(l), l.blockedOn === null && ua.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], c = n[Q] || null;
        if (typeof u == "function")
          c || ph(l);
        else if (c) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, c = u[Q] || null)
              d = c.formAction;
            else if (hf(n) !== null) continue;
          } else d = c.action;
          typeof d == "function" ? l[a + 1] = d : (l.splice(a, 3), a -= 3), ph(l);
        }
      }
  }
  function vf(e) {
    this._internalRoot = e;
  }
  ki.prototype.render = vf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, a = Lt();
    sh(l, a, e, t, null, null);
  }, ki.prototype.unmount = vf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      sh(e.current, 2, null, e, null, null), xi(), t[ee] = null;
    }
  };
  function ki(e) {
    this._internalRoot = e;
  }
  ki.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = S();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ua.length && t !== 0 && t < ua[l].priority; l++) ;
      ua.splice(l, 0, e), l === 0 && yh(e);
    }
  };
  var Sh = r.version;
  if (Sh !== "19.1.0")
    throw Error(
      o(
        527,
        Sh,
        "19.1.0"
      )
    );
  V.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = v(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Oy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wi.isDisabled && Wi.supportsFiber)
      try {
        Tt = Wi.inject(
          Oy
        ), We = Wi;
      } catch {
      }
  }
  return Tu.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var l = !1, a = "", n = Hs, u = Ls, c = Bs, d = null;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (d = t.unstable_transitionCallbacks)), t = fh(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      n,
      u,
      c,
      d,
      null
    ), e[ee] = t.current, Wc(e), new vf(t);
  }, Tu.hydrateRoot = function(e, t, l) {
    if (!s(e)) throw Error(o(299));
    var a = !1, n = "", u = Hs, c = Ls, d = Bs, g = null, z = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (z = l.formState)), t = fh(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      u,
      c,
      d,
      g,
      z
    ), t.context = oh(null), l = t.current, a = Lt(), a = An(a), n = Xl(a), n.callback = null, Ql(l, n, a), l = a, t.current.lanes = l, va(t, l), hl(t), e[ee] = t.current, Wc(e), new ki(t);
  }, Tu.version = "19.1.0", Tu;
}
var _h;
function jy() {
  if (_h) return pf.exports;
  _h = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), pf.exports = By(), pf.exports;
}
var qy = jy(), Du = {}, xh;
function Yy() {
  if (xh) return Du;
  xh = 1, Object.defineProperty(Du, "__esModule", { value: !0 }), Du.parse = y, Du.serialize = m;
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, f = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, o = /^[\u0020-\u003A\u003D-\u007E]*$/, s = Object.prototype.toString, h = /* @__PURE__ */ (() => {
    const D = function() {
    };
    return D.prototype = /* @__PURE__ */ Object.create(null), D;
  })();
  function y(D, B) {
    const H = new h(), Z = D.length;
    if (Z < 2)
      return H;
    const $ = B?.decode || R;
    let j = 0;
    do {
      const ue = D.indexOf("=", j);
      if (ue === -1)
        break;
      const k = D.indexOf(";", j), he = k === -1 ? Z : k;
      if (ue > he) {
        j = D.lastIndexOf(";", ue - 1) + 1;
        continue;
      }
      const W = b(D, j, ue), U = v(D, ue, W), ye = D.slice(W, U);
      if (H[ye] === void 0) {
        let pe = b(D, ue + 1, he), me = v(D, he, pe);
        const Ze = $(D.slice(pe, me));
        H[ye] = Ze;
      }
      j = he + 1;
    } while (j < Z);
    return H;
  }
  function b(D, B, H) {
    do {
      const Z = D.charCodeAt(B);
      if (Z !== 32 && Z !== 9)
        return B;
    } while (++B < H);
    return H;
  }
  function v(D, B, H) {
    for (; B > H; ) {
      const Z = D.charCodeAt(--B);
      if (Z !== 32 && Z !== 9)
        return B + 1;
    }
    return H;
  }
  function m(D, B, H) {
    const Z = H?.encode || encodeURIComponent;
    if (!i.test(D))
      throw new TypeError(`argument name is invalid: ${D}`);
    const $ = Z(B);
    if (!r.test($))
      throw new TypeError(`argument val is invalid: ${B}`);
    let j = D + "=" + $;
    if (!H)
      return j;
    if (H.maxAge !== void 0) {
      if (!Number.isInteger(H.maxAge))
        throw new TypeError(`option maxAge is invalid: ${H.maxAge}`);
      j += "; Max-Age=" + H.maxAge;
    }
    if (H.domain) {
      if (!f.test(H.domain))
        throw new TypeError(`option domain is invalid: ${H.domain}`);
      j += "; Domain=" + H.domain;
    }
    if (H.path) {
      if (!o.test(H.path))
        throw new TypeError(`option path is invalid: ${H.path}`);
      j += "; Path=" + H.path;
    }
    if (H.expires) {
      if (!w(H.expires) || !Number.isFinite(H.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${H.expires}`);
      j += "; Expires=" + H.expires.toUTCString();
    }
    if (H.httpOnly && (j += "; HttpOnly"), H.secure && (j += "; Secure"), H.partitioned && (j += "; Partitioned"), H.priority)
      switch (typeof H.priority == "string" ? H.priority.toLowerCase() : void 0) {
        case "low":
          j += "; Priority=Low";
          break;
        case "medium":
          j += "; Priority=Medium";
          break;
        case "high":
          j += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${H.priority}`);
      }
    if (H.sameSite)
      switch (typeof H.sameSite == "string" ? H.sameSite.toLowerCase() : H.sameSite) {
        case !0:
        case "strict":
          j += "; SameSite=Strict";
          break;
        case "lax":
          j += "; SameSite=Lax";
          break;
        case "none":
          j += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${H.sameSite}`);
      }
    return j;
  }
  function R(D) {
    if (D.indexOf("%") === -1)
      return D;
    try {
      return decodeURIComponent(D);
    } catch {
      return D;
    }
  }
  function w(D) {
    return s.call(D) === "[object Date]";
  }
  return Du;
}
Yy();
/**
 * react-router v7.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var em = (i) => {
  throw TypeError(i);
}, Gy = (i, r, f) => r.has(i) || em("Cannot " + f), Rf = (i, r, f) => (Gy(i, r, "read from private field"), f ? f.call(i) : r.get(i)), Xy = (i, r, f) => r.has(i) ? em("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(i) : r.set(i, f), Uh = "popstate";
function Qy(i = {}) {
  function r(o, s) {
    let { pathname: h, search: y, hash: b } = o.location;
    return xu(
      "",
      { pathname: h, search: y, hash: b },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default"
    );
  }
  function f(o, s) {
    return typeof s == "string" ? s : fa(s);
  }
  return Zy(
    r,
    f,
    null,
    i
  );
}
function ze(i, r) {
  if (i === !1 || i === null || typeof i > "u")
    throw new Error(r);
}
function it(i, r) {
  if (!i) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Vy() {
  return Math.random().toString(36).substring(2, 10);
}
function Nh(i, r) {
  return {
    usr: i.state,
    key: i.key,
    idx: r
  };
}
function xu(i, r, f = null, o) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? oa(r) : r,
    state: f,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || Vy()
  };
}
function fa({
  pathname: i = "/",
  search: r = "",
  hash: f = ""
}) {
  return r && r !== "?" && (i += r.charAt(0) === "?" ? r : "?" + r), f && f !== "#" && (i += f.charAt(0) === "#" ? f : "#" + f), i;
}
function oa(i) {
  let r = {};
  if (i) {
    let f = i.indexOf("#");
    f >= 0 && (r.hash = i.substring(f), i = i.substring(0, f));
    let o = i.indexOf("?");
    o >= 0 && (r.search = i.substring(o), i = i.substring(0, o)), i && (r.pathname = i);
  }
  return r;
}
function Zy(i, r, f, o = {}) {
  let { window: s = document.defaultView, v5Compat: h = !1 } = o, y = s.history, b = "POP", v = null, m = R();
  m == null && (m = 0, y.replaceState({ ...y.state, idx: m }, ""));
  function R() {
    return (y.state || { idx: null }).idx;
  }
  function w() {
    b = "POP";
    let $ = R(), j = $ == null ? null : $ - m;
    m = $, v && v({ action: b, location: Z.location, delta: j });
  }
  function D($, j) {
    b = "PUSH";
    let ue = xu(Z.location, $, j);
    m = R() + 1;
    let k = Nh(ue, m), he = Z.createHref(ue);
    try {
      y.pushState(k, "", he);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      s.location.assign(he);
    }
    h && v && v({ action: b, location: Z.location, delta: 1 });
  }
  function B($, j) {
    b = "REPLACE";
    let ue = xu(Z.location, $, j);
    m = R();
    let k = Nh(ue, m), he = Z.createHref(ue);
    y.replaceState(k, "", he), h && v && v({ action: b, location: Z.location, delta: 0 });
  }
  function H($) {
    return tm($);
  }
  let Z = {
    get action() {
      return b;
    },
    get location() {
      return i(s, y);
    },
    listen($) {
      if (v)
        throw new Error("A history only accepts one active listener");
      return s.addEventListener(Uh, w), v = $, () => {
        s.removeEventListener(Uh, w), v = null;
      };
    },
    createHref($) {
      return r(s, $);
    },
    createURL: H,
    encodeLocation($) {
      let j = H($);
      return {
        pathname: j.pathname,
        search: j.search,
        hash: j.hash
      };
    },
    push: D,
    replace: B,
    go($) {
      return y.go($);
    }
  };
  return Z;
}
function tm(i, r = !1) {
  let f = "http://localhost";
  typeof window < "u" && (f = window.location.origin !== "null" ? window.location.origin : window.location.href), ze(f, "No window.location.(origin|href) available to create URL");
  let o = typeof i == "string" ? i : fa(i);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = f + o), new URL(o, f);
}
var Ou, Ch = class {
  constructor(i) {
    if (Xy(this, Ou, /* @__PURE__ */ new Map()), i)
      for (let [r, f] of i)
        this.set(r, f);
  }
  get(i) {
    if (Rf(this, Ou).has(i))
      return Rf(this, Ou).get(i);
    if (i.defaultValue !== void 0)
      return i.defaultValue;
    throw new Error("No value found for context");
  }
  set(i, r) {
    Rf(this, Ou).set(i, r);
  }
};
Ou = /* @__PURE__ */ new WeakMap();
var Ky = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function Jy(i) {
  return Ky.has(
    i
  );
}
var $y = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children"
]);
function ky(i) {
  return $y.has(
    i
  );
}
function Wy(i) {
  return i.index === !0;
}
function lr(i, r, f = [], o = {}) {
  return i.map((s, h) => {
    let y = [...f, String(h)], b = typeof s.id == "string" ? s.id : y.join("-");
    if (ze(
      s.index !== !0 || !s.children,
      "Cannot specify children on an index route"
    ), ze(
      !o[b],
      `Found a route id collision on id "${b}".  Route id's must be globally unique within Data Router usages`
    ), Wy(s)) {
      let v = {
        ...s,
        ...r(s),
        id: b
      };
      return o[b] = v, v;
    } else {
      let v = {
        ...s,
        ...r(s),
        id: b,
        children: void 0
      };
      return o[b] = v, s.children && (v.children = lr(
        s.children,
        r,
        y,
        o
      )), v;
    }
  });
}
function ca(i, r, f = "/") {
  return Ii(i, r, f, !1);
}
function Ii(i, r, f, o) {
  let s = typeof r == "string" ? oa(r) : r, h = Ft(s.pathname || "/", f);
  if (h == null)
    return null;
  let y = lm(i);
  Py(y);
  let b = null;
  for (let v = 0; b == null && v < y.length; ++v) {
    let m = f0(h);
    b = r0(
      y[v],
      m,
      o
    );
  }
  return b;
}
function Fy(i, r) {
  let { route: f, pathname: o, params: s } = i;
  return {
    id: f.id,
    pathname: o,
    params: s,
    data: r[f.id],
    handle: f.handle
  };
}
function lm(i, r = [], f = [], o = "") {
  let s = (h, y, b) => {
    let v = {
      relativePath: b === void 0 ? h.path || "" : b,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: y,
      route: h
    };
    v.relativePath.startsWith("/") && (ze(
      v.relativePath.startsWith(o),
      `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), v.relativePath = v.relativePath.slice(o.length));
    let m = ml([o, v.relativePath]), R = f.concat(v);
    h.children && h.children.length > 0 && (ze(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
    ), lm(h.children, r, R, m)), !(h.path == null && !h.index) && r.push({
      path: m,
      score: u0(m, h.index),
      routesMeta: R
    });
  };
  return i.forEach((h, y) => {
    if (h.path === "" || !h.path?.includes("?"))
      s(h, y);
    else
      for (let b of am(h.path))
        s(h, y, b);
  }), r;
}
function am(i) {
  let r = i.split("/");
  if (r.length === 0) return [];
  let [f, ...o] = r, s = f.endsWith("?"), h = f.replace(/\?$/, "");
  if (o.length === 0)
    return s ? [h, ""] : [h];
  let y = am(o.join("/")), b = [];
  return b.push(
    ...y.map(
      (v) => v === "" ? h : [h, v].join("/")
    )
  ), s && b.push(...y), b.map(
    (v) => i.startsWith("/") && v === "" ? "/" : v
  );
}
function Py(i) {
  i.sort(
    (r, f) => r.score !== f.score ? f.score - r.score : i0(
      r.routesMeta.map((o) => o.childrenIndex),
      f.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Iy = /^:[\w-]+$/, e0 = 3, t0 = 2, l0 = 1, a0 = 10, n0 = -2, wh = (i) => i === "*";
function u0(i, r) {
  let f = i.split("/"), o = f.length;
  return f.some(wh) && (o += n0), r && (o += t0), f.filter((s) => !wh(s)).reduce(
    (s, h) => s + (Iy.test(h) ? e0 : h === "" ? l0 : a0),
    o
  );
}
function i0(i, r) {
  return i.length === r.length && i.slice(0, -1).every((o, s) => o === r[s]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    i[i.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function r0(i, r, f = !1) {
  let { routesMeta: o } = i, s = {}, h = "/", y = [];
  for (let b = 0; b < o.length; ++b) {
    let v = o[b], m = b === o.length - 1, R = h === "/" ? r : r.slice(h.length) || "/", w = ar(
      { path: v.relativePath, caseSensitive: v.caseSensitive, end: m },
      R
    ), D = v.route;
    if (!w && m && f && !o[o.length - 1].route.index && (w = ar(
      {
        path: v.relativePath,
        caseSensitive: v.caseSensitive,
        end: !1
      },
      R
    )), !w)
      return null;
    Object.assign(s, w.params), y.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: ml([h, w.pathname]),
      pathnameBase: d0(
        ml([h, w.pathnameBase])
      ),
      route: D
    }), w.pathnameBase !== "/" && (h = ml([h, w.pathnameBase]));
  }
  return y;
}
function ar(i, r) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [f, o] = c0(
    i.path,
    i.caseSensitive,
    i.end
  ), s = r.match(f);
  if (!s) return null;
  let h = s[0], y = h.replace(/(.)\/+$/, "$1"), b = s.slice(1);
  return {
    params: o.reduce(
      (m, { paramName: R, isOptional: w }, D) => {
        if (R === "*") {
          let H = b[D] || "";
          y = h.slice(0, h.length - H.length).replace(/(.)\/+$/, "$1");
        }
        const B = b[D];
        return w && !B ? m[R] = void 0 : m[R] = (B || "").replace(/%2F/g, "/"), m;
      },
      {}
    ),
    pathname: h,
    pathnameBase: y,
    pattern: i
  };
}
function c0(i, r = !1, f = !0) {
  it(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`
  );
  let o = [], s = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (y, b, v) => (o.push({ paramName: b, isOptional: v != null }), v ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return i.endsWith("*") ? (o.push({ paramName: "*" }), s += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : f ? s += "\\/*$" : i !== "" && i !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, r ? void 0 : "i"), o];
}
function f0(i) {
  try {
    return i.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return it(
      !1,
      `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), i;
  }
}
function Ft(i, r) {
  if (r === "/") return i;
  if (!i.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let f = r.endsWith("/") ? r.length - 1 : r.length, o = i.charAt(f);
  return o && o !== "/" ? null : i.slice(f) || "/";
}
function o0(i, r = "/") {
  let {
    pathname: f,
    search: o = "",
    hash: s = ""
  } = typeof i == "string" ? oa(i) : i;
  return {
    pathname: f ? f.startsWith("/") ? f : s0(f, r) : r,
    search: h0(o),
    hash: m0(s)
  };
}
function s0(i, r) {
  let f = r.replace(/\/+$/, "").split("/");
  return i.split("/").forEach((s) => {
    s === ".." ? f.length > 1 && f.pop() : s !== "." && f.push(s);
  }), f.length > 1 ? f.join("/") : "/";
}
function Tf(i, r, f, o) {
  return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function nm(i) {
  return i.filter(
    (r, f) => f === 0 || r.route.path && r.route.path.length > 0
  );
}
function Nf(i) {
  let r = nm(i);
  return r.map(
    (f, o) => o === r.length - 1 ? f.pathname : f.pathnameBase
  );
}
function Cf(i, r, f, o = !1) {
  let s;
  typeof i == "string" ? s = oa(i) : (s = { ...i }, ze(
    !s.pathname || !s.pathname.includes("?"),
    Tf("?", "pathname", "search", s)
  ), ze(
    !s.pathname || !s.pathname.includes("#"),
    Tf("#", "pathname", "hash", s)
  ), ze(
    !s.search || !s.search.includes("#"),
    Tf("#", "search", "hash", s)
  ));
  let h = i === "" || s.pathname === "", y = h ? "/" : s.pathname, b;
  if (y == null)
    b = f;
  else {
    let w = r.length - 1;
    if (!o && y.startsWith("..")) {
      let D = y.split("/");
      for (; D[0] === ".."; )
        D.shift(), w -= 1;
      s.pathname = D.join("/");
    }
    b = w >= 0 ? r[w] : "/";
  }
  let v = o0(s, b), m = y && y !== "/" && y.endsWith("/"), R = (h || y === ".") && f.endsWith("/");
  return !v.pathname.endsWith("/") && (m || R) && (v.pathname += "/"), v;
}
var ml = (i) => i.join("/").replace(/\/\/+/g, "/"), d0 = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"), h0 = (i) => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, m0 = (i) => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i, nr = class {
  constructor(i, r, f, o = !1) {
    this.status = i, this.statusText = r || "", this.internal = o, f instanceof Error ? (this.data = f.toString(), this.error = f) : this.data = f;
  }
};
function Uu(i) {
  return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
}
var um = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], v0 = new Set(
  um
), y0 = [
  "GET",
  ...um
], g0 = new Set(y0), p0 = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), S0 = /* @__PURE__ */ new Set([307, 308]), Df = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, b0 = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Mu = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, wf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, E0 = (i) => ({
  hasErrorBoundary: !!i.hasErrorBoundary
}), im = "remix-router-transitions", rm = Symbol("ResetLoaderData");
function R0(i) {
  const r = i.window ? i.window : typeof window < "u" ? window : void 0, f = typeof r < "u" && typeof r.document < "u" && typeof r.document.createElement < "u";
  ze(
    i.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o = i.hydrationRouteProperties || [], s = i.mapRouteProperties || E0, h = {}, y = lr(
    i.routes,
    s,
    void 0,
    h
  ), b, v = i.basename || "/", m = i.dataStrategy || z0, R = {
    unstable_middleware: !1,
    ...i.future
  }, w = null, D = /* @__PURE__ */ new Set(), B = null, H = null, Z = null, $ = i.hydrationData != null, j = ca(y, i.history.location, v), ue = !1, k = null, he;
  if (j == null && !i.patchRoutesOnNavigation) {
    let S = Wt(404, {
      pathname: i.history.location.pathname
    }), { matches: M, route: N } = Kh(y);
    he = !0, j = M, k = { [N.id]: S };
  } else if (j && !i.hydrationData && ya(
    j,
    y,
    i.history.location.pathname
  ).active && (j = null), j)
    if (j.some((S) => S.route.lazy))
      he = !1;
    else if (!j.some((S) => S.route.loader))
      he = !0;
    else {
      let S = i.hydrationData ? i.hydrationData.loaderData : null, M = i.hydrationData ? i.hydrationData.errors : null;
      if (M) {
        let N = j.findIndex(
          (X) => M[X.route.id] !== void 0
        );
        he = j.slice(0, N + 1).every(
          (X) => !Of(X.route, S, M)
        );
      } else
        he = j.every(
          (N) => !Of(N.route, S, M)
        );
    }
  else {
    he = !1, j = [];
    let S = ya(
      null,
      y,
      i.history.location.pathname
    );
    S.active && S.matches && (ue = !0, j = S.matches);
  }
  let W, U = {
    historyAction: i.history.action,
    location: i.history.location,
    matches: j,
    initialized: he,
    navigation: Df,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: i.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: i.hydrationData && i.hydrationData.loaderData || {},
    actionData: i.hydrationData && i.hydrationData.actionData || null,
    errors: i.hydrationData && i.hydrationData.errors || k,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, ye = "POP", pe = !1, me, Ze = !1, tt = /* @__PURE__ */ new Map(), Je = null, Ue = !1, we = !1, Le = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Map(), V = 0, P = -1, Se = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Map(), De, ce = null;
  function bt() {
    if (w = i.history.listen(
      ({ action: S, location: M, delta: N }) => {
        if (De) {
          De(), De = void 0;
          return;
        }
        it(
          le.size === 0 || N != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let X = Yu({
          currentLocation: U.location,
          nextLocation: M,
          historyAction: S
        });
        if (X && N != null) {
          let Q = new Promise((ee) => {
            De = ee;
          });
          i.history.go(N * -1), cl(X, {
            state: "blocked",
            location: M,
            proceed() {
              cl(X, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: M
              }), Q.then(() => i.history.go(N));
            },
            reset() {
              let ee = new Map(U.blockers);
              ee.set(X, Mu), rt({ blockers: ee });
            }
          });
          return;
        }
        return It(S, M);
      }
    ), f) {
      j0(r, tt);
      let S = () => q0(r, tt);
      r.addEventListener("pagehide", S), Je = () => r.removeEventListener("pagehide", S);
    }
    return U.initialized || It("POP", U.location, {
      initialHydration: !0
    }), W;
  }
  function Qe() {
    w && w(), Je && Je(), D.clear(), me && me.abort(), U.fetchers.forEach((S, M) => ht(M)), U.blockers.forEach((S, M) => ma(M));
  }
  function il(S) {
    return D.add(S), () => D.delete(S);
  }
  function rt(S, M = {}) {
    U = {
      ...U,
      ...S
    };
    let N = [], X = [];
    U.fetchers.forEach((Q, ee) => {
      Q.state === "idle" && (K.has(ee) ? N.push(ee) : X.push(ee));
    }), K.forEach((Q) => {
      !U.fetchers.has(Q) && !_.has(Q) && N.push(Q);
    }), [...D].forEach(
      (Q) => Q(U, {
        deletedFetchers: N,
        viewTransitionOpts: M.viewTransitionOpts,
        flushSync: M.flushSync === !0
      })
    ), N.forEach((Q) => ht(Q)), X.forEach((Q) => U.fetchers.delete(Q));
  }
  function Pt(S, M, { flushSync: N } = {}) {
    let X = U.actionData != null && U.navigation.formMethod != null && qt(U.navigation.formMethod) && U.navigation.state === "loading" && S.state?._isRedirect !== !0, Q;
    M.actionData ? Object.keys(M.actionData).length > 0 ? Q = M.actionData : Q = null : X ? Q = U.actionData : Q = null;
    let ee = M.loaderData ? Vh(
      U.loaderData,
      M.loaderData,
      M.matches || [],
      M.errors
    ) : U.loaderData, ie = U.blockers;
    ie.size > 0 && (ie = new Map(ie), ie.forEach((te, oe) => ie.set(oe, Mu)));
    let F = pe === !0 || U.navigation.formMethod != null && qt(U.navigation.formMethod) && S.state?._isRedirect !== !0;
    b && (y = b, b = void 0), Ue || ye === "POP" || (ye === "PUSH" ? i.history.push(S, S.state) : ye === "REPLACE" && i.history.replace(S, S.state));
    let ne;
    if (ye === "POP") {
      let te = tt.get(U.location.pathname);
      te && te.has(S.pathname) ? ne = {
        currentLocation: U.location,
        nextLocation: S
      } : tt.has(S.pathname) && (ne = {
        currentLocation: S,
        nextLocation: U.location
      });
    } else if (Ze) {
      let te = tt.get(U.location.pathname);
      te ? te.add(S.pathname) : (te = /* @__PURE__ */ new Set([S.pathname]), tt.set(U.location.pathname, te)), ne = {
        currentLocation: U.location,
        nextLocation: S
      };
    }
    rt(
      {
        ...M,
        // matches, errors, fetchers go through as-is
        actionData: Q,
        loaderData: ee,
        historyAction: ye,
        location: S,
        initialized: !0,
        navigation: Df,
        revalidation: "idle",
        restoreScrollPosition: Xu(
          S,
          M.matches || U.matches
        ),
        preventScrollReset: F,
        blockers: ie
      },
      {
        viewTransitionOpts: ne,
        flushSync: N === !0
      }
    ), ye = "POP", pe = !1, Ze = !1, Ue = !1, we = !1, ce?.resolve(), ce = null;
  }
  async function ja(S, M) {
    if (typeof S == "number") {
      i.history.go(S);
      return;
    }
    let N = zf(
      U.location,
      U.matches,
      v,
      S,
      M?.fromRouteId,
      M?.relative
    ), { path: X, submission: Q, error: ee } = Hh(
      !1,
      N,
      M
    ), ie = U.location, F = xu(U.location, X, M && M.state);
    F = {
      ...F,
      ...i.history.encodeLocation(F)
    };
    let ne = M && M.replace != null ? M.replace : void 0, te = "PUSH";
    ne === !0 ? te = "REPLACE" : ne === !1 || Q != null && qt(Q.formMethod) && Q.formAction === U.location.pathname + U.location.search && (te = "REPLACE");
    let oe = M && "preventScrollReset" in M ? M.preventScrollReset === !0 : void 0, se = (M && M.flushSync) === !0, ve = Yu({
      currentLocation: ie,
      nextLocation: F,
      historyAction: te
    });
    if (ve) {
      cl(ve, {
        state: "blocked",
        location: F,
        proceed() {
          cl(ve, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F
          }), ja(S, M);
        },
        reset() {
          let xe = new Map(U.blockers);
          xe.set(ve, Mu), rt({ blockers: xe });
        }
      });
      return;
    }
    await It(te, F, {
      submission: Q,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: ee,
      preventScrollReset: oe,
      replace: M && M.replace,
      enableViewTransition: M && M.viewTransition,
      flushSync: se
    });
  }
  function Dn() {
    ce || (ce = Y0()), Mn(), rt({ revalidation: "loading" });
    let S = ce.promise;
    return U.navigation.state === "submitting" ? S : U.navigation.state === "idle" ? (It(U.historyAction, U.location, {
      startUninterruptedRevalidation: !0
    }), S) : (It(
      ye || U.historyAction,
      U.navigation.location,
      {
        overrideNavigation: U.navigation,
        // Proxy through any rending view transition
        enableViewTransition: Ze === !0
      }
    ), S);
  }
  async function It(S, M, N) {
    me && me.abort(), me = null, ye = S, Ue = (N && N.startUninterruptedRevalidation) === !0, va(U.location, U.matches), pe = (N && N.preventScrollReset) === !0, Ze = (N && N.enableViewTransition) === !0;
    let X = b || y, Q = N && N.overrideNavigation, ee = N?.initialHydration && U.matches && U.matches.length > 0 && !ue ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      U.matches
    ) : ca(X, M, v), ie = (N && N.flushSync) === !0;
    if (ee && U.initialized && !we && C0(U.location, M) && !(N && N.submission && qt(N.submission.formMethod))) {
      Pt(M, { matches: ee }, { flushSync: ie });
      return;
    }
    let F = ya(ee, X, M.pathname);
    if (F.active && F.matches && (ee = F.matches), !ee) {
      let { error: Fe, notFoundMatches: Ne, route: Oe } = Ya(
        M.pathname
      );
      Pt(
        M,
        {
          matches: Ne,
          loaderData: {},
          errors: {
            [Oe.id]: Fe
          }
        },
        { flushSync: ie }
      );
      return;
    }
    me = new AbortController();
    let ne = Rn(
      i.history,
      M,
      me.signal,
      N && N.submission
    ), te = new Ch(
      i.unstable_getContext ? await i.unstable_getContext() : void 0
    ), oe;
    if (N && N.pendingError)
      oe = [
        Ha(ee).route.id,
        { type: "error", error: N.pendingError }
      ];
    else if (N && N.submission && qt(N.submission.formMethod)) {
      let Fe = await cr(
        ne,
        M,
        N.submission,
        ee,
        te,
        F.active,
        N && N.initialHydration === !0,
        { replace: N.replace, flushSync: ie }
      );
      if (Fe.shortCircuited)
        return;
      if (Fe.pendingActionResult) {
        let [Ne, Oe] = Fe.pendingActionResult;
        if (jt(Oe) && Uu(Oe.error) && Oe.error.status === 404) {
          me = null, Pt(M, {
            matches: Fe.matches,
            loaderData: {},
            errors: {
              [Ne]: Oe.error
            }
          });
          return;
        }
      }
      ee = Fe.matches || ee, oe = Fe.pendingActionResult, Q = Mf(M, N.submission), ie = !1, F.active = !1, ne = Rn(
        i.history,
        ne.url,
        ne.signal
      );
    }
    let {
      shortCircuited: se,
      matches: ve,
      loaderData: xe,
      errors: Ke
    } = await fr(
      ne,
      M,
      ee,
      te,
      F.active,
      Q,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      N && N.initialHydration === !0,
      ie,
      oe
    );
    se || (me = null, Pt(M, {
      matches: ve || ee,
      ...Zh(oe),
      loaderData: xe,
      errors: Ke
    }));
  }
  async function cr(S, M, N, X, Q, ee, ie, F = {}) {
    Mn();
    let ne = L0(M, N);
    if (rt({ navigation: ne }, { flushSync: F.flushSync === !0 }), ee) {
      let se = await ga(
        X,
        M.pathname,
        S.signal
      );
      if (se.type === "aborted")
        return { shortCircuited: !0 };
      if (se.type === "error") {
        let ve = Ha(se.partialMatches).route.id;
        return {
          matches: se.partialMatches,
          pendingActionResult: [
            ve,
            {
              type: "error",
              error: se.error
            }
          ]
        };
      } else if (se.matches)
        X = se.matches;
      else {
        let { notFoundMatches: ve, error: xe, route: Ke } = Ya(
          M.pathname
        );
        return {
          matches: ve,
          pendingActionResult: [
            Ke.id,
            {
              type: "error",
              error: xe
            }
          ]
        };
      }
    }
    let te, oe = _u(X, M);
    if (!oe.route.action && !oe.route.lazy)
      te = {
        type: "error",
        error: Wt(405, {
          method: S.method,
          pathname: M.pathname,
          routeId: oe.route.id
        })
      };
    else {
      let se = Tn(
        s,
        h,
        S,
        X,
        oe,
        ie ? [] : o,
        Q
      ), ve = await wl(
        S,
        se,
        Q,
        null
      );
      if (te = ve[oe.route.id], !te) {
        for (let xe of X)
          if (ve[xe.route.id]) {
            te = ve[xe.route.id];
            break;
          }
      }
      if (S.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (La(te)) {
      let se;
      return F && F.replace != null ? se = F.replace : se = Gh(
        te.response.headers.get("Location"),
        new URL(S.url),
        v
      ) === U.location.pathname + U.location.search, await yl(S, te, !0, {
        submission: N,
        replace: se
      }), { shortCircuited: !0 };
    }
    if (jt(te)) {
      let se = Ha(X, oe.route.id);
      return (F && F.replace) !== !0 && (ye = "PUSH"), {
        matches: X,
        pendingActionResult: [
          se.route.id,
          te,
          oe.route.id
        ]
      };
    }
    return {
      matches: X,
      pendingActionResult: [oe.route.id, te]
    };
  }
  async function fr(S, M, N, X, Q, ee, ie, F, ne, te, oe, se) {
    let ve = ee || Mf(M, ie), xe = ie || F || $h(ve), Ke = !Ue && !te;
    if (Q) {
      if (Ke) {
        let gt = xt(se);
        rt(
          {
            navigation: ve,
            ...gt !== void 0 ? { actionData: gt } : {}
          },
          {
            flushSync: oe
          }
        );
      }
      let Ee = await ga(
        N,
        M.pathname,
        S.signal
      );
      if (Ee.type === "aborted")
        return { shortCircuited: !0 };
      if (Ee.type === "error") {
        let gt = Ha(Ee.partialMatches).route.id;
        return {
          matches: Ee.partialMatches,
          loaderData: {},
          errors: {
            [gt]: Ee.error
          }
        };
      } else if (Ee.matches)
        N = Ee.matches;
      else {
        let { error: gt, notFoundMatches: tl, route: ll } = Ya(
          M.pathname
        );
        return {
          matches: tl,
          loaderData: {},
          errors: {
            [ll.id]: gt
          }
        };
      }
    }
    let Fe = b || y, { dsMatches: Ne, revalidatingFetchers: Oe } = Lh(
      S,
      X,
      s,
      h,
      i.history,
      U,
      N,
      xe,
      M,
      te ? [] : o,
      te === !0,
      we,
      Le,
      K,
      Y,
      p,
      Fe,
      v,
      i.patchRoutesOnNavigation != null,
      se
    );
    if (P = ++V, !i.dataStrategy && !Ne.some((Ee) => Ee.shouldLoad) && Oe.length === 0) {
      let Ee = da();
      return Pt(
        M,
        {
          matches: N,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: se && jt(se[1]) ? { [se[0]]: se[1].error } : null,
          ...Zh(se),
          ...Ee ? { fetchers: new Map(U.fetchers) } : {}
        },
        { flushSync: oe }
      ), { shortCircuited: !0 };
    }
    if (Ke) {
      let Ee = {};
      if (!Q) {
        Ee.navigation = ve;
        let gt = xt(se);
        gt !== void 0 && (Ee.actionData = gt);
      }
      Oe.length > 0 && (Ee.fetchers = or(Oe)), rt(Ee, { flushSync: oe });
    }
    Oe.forEach((Ee) => {
      rl(Ee.key), Ee.controller && _.set(Ee.key, Ee.controller);
    });
    let Hl = () => Oe.forEach((Ee) => rl(Ee.key));
    me && me.signal.addEventListener(
      "abort",
      Hl
    );
    let { loaderResults: Et, fetcherResults: Yt } = await ju(
      Ne,
      Oe,
      S,
      X
    );
    if (S.signal.aborted)
      return { shortCircuited: !0 };
    me && me.signal.removeEventListener(
      "abort",
      Hl
    ), Oe.forEach((Ee) => _.delete(Ee.key));
    let Dt = Fi(Et);
    if (Dt)
      return await yl(S, Dt.result, !0, {
        replace: ne
      }), { shortCircuited: !0 };
    if (Dt = Fi(Yt), Dt)
      return p.add(Dt.key), await yl(S, Dt.result, !0, {
        replace: ne
      }), { shortCircuited: !0 };
    let { loaderData: Ll, errors: Bl } = Qh(
      U,
      N,
      Et,
      se,
      Oe,
      Yt
    );
    te && U.errors && (Bl = { ...U.errors, ...Bl });
    let On = da(), Gt = ha(P), pl = On || Gt || Oe.length > 0;
    return {
      matches: N,
      loaderData: Ll,
      errors: Bl,
      ...pl ? { fetchers: new Map(U.fetchers) } : {}
    };
  }
  function xt(S) {
    if (S && !jt(S[1]))
      return {
        [S[0]]: S[1].data
      };
    if (U.actionData)
      return Object.keys(U.actionData).length === 0 ? null : U.actionData;
  }
  function or(S) {
    return S.forEach((M) => {
      let N = U.fetchers.get(M.key), X = Au(
        void 0,
        N ? N.data : void 0
      );
      U.fetchers.set(M.key, X);
    }), new Map(U.fetchers);
  }
  async function Lu(S, M, N, X) {
    rl(S);
    let Q = (X && X.flushSync) === !0, ee = b || y, ie = zf(
      U.location,
      U.matches,
      v,
      N,
      M,
      X?.relative
    ), F = ca(ee, ie, v), ne = ya(F, ee, ie);
    if (ne.active && ne.matches && (F = ne.matches), !F) {
      We(
        S,
        M,
        Wt(404, { pathname: ie }),
        { flushSync: Q }
      );
      return;
    }
    let { path: te, submission: oe, error: se } = Hh(
      !0,
      ie,
      X
    );
    if (se) {
      We(S, M, se, { flushSync: Q });
      return;
    }
    let ve = _u(F, te), xe = new Ch(
      i.unstable_getContext ? await i.unstable_getContext() : void 0
    ), Ke = (X && X.preventScrollReset) === !0;
    if (oe && qt(oe.formMethod)) {
      await Bu(
        S,
        M,
        te,
        ve,
        F,
        xe,
        ne.active,
        Q,
        Ke,
        oe
      );
      return;
    }
    Y.set(S, { routeId: M, path: te }), await qa(
      S,
      M,
      te,
      ve,
      F,
      xe,
      ne.active,
      Q,
      Ke,
      oe
    );
  }
  async function Bu(S, M, N, X, Q, ee, ie, F, ne, te) {
    Mn(), Y.delete(S);
    function oe($e) {
      if (!$e.route.action && !$e.route.lazy) {
        let jl = Wt(405, {
          method: te.formMethod,
          pathname: N,
          routeId: M
        });
        return We(S, M, jl, { flushSync: F }), !0;
      }
      return !1;
    }
    if (!ie && oe(X))
      return;
    let se = U.fetchers.get(S);
    Tt(S, B0(te, se), {
      flushSync: F
    });
    let ve = new AbortController(), xe = Rn(
      i.history,
      N,
      ve.signal,
      te
    );
    if (ie) {
      let $e = await ga(
        Q,
        N,
        xe.signal,
        S
      );
      if ($e.type === "aborted")
        return;
      if ($e.type === "error") {
        We(S, M, $e.error, { flushSync: F });
        return;
      } else if ($e.matches) {
        if (Q = $e.matches, X = _u(Q, N), oe(X))
          return;
      } else {
        We(
          S,
          M,
          Wt(404, { pathname: N }),
          { flushSync: F }
        );
        return;
      }
    }
    _.set(S, ve);
    let Ke = V, Fe = Tn(
      s,
      h,
      xe,
      Q,
      X,
      o,
      ee
    ), Oe = (await wl(
      xe,
      Fe,
      ee,
      S
    ))[X.route.id];
    if (xe.signal.aborted) {
      _.get(S) === ve && _.delete(S);
      return;
    }
    if (K.has(S)) {
      if (La(Oe) || jt(Oe)) {
        Tt(S, ra(void 0));
        return;
      }
    } else {
      if (La(Oe))
        if (_.delete(S), P > Ke) {
          Tt(S, ra(void 0));
          return;
        } else
          return p.add(S), Tt(S, Au(te)), yl(xe, Oe, !1, {
            fetcherSubmission: te,
            preventScrollReset: ne
          });
      if (jt(Oe)) {
        We(S, M, Oe.error);
        return;
      }
    }
    let Hl = U.navigation.location || U.location, Et = Rn(
      i.history,
      Hl,
      ve.signal
    ), Yt = b || y, Dt = U.navigation.state !== "idle" ? ca(Yt, U.navigation.location, v) : U.matches;
    ze(Dt, "Didn't find any matches after fetcher action");
    let Ll = ++V;
    Se.set(S, Ll);
    let Bl = Au(te, Oe.data);
    U.fetchers.set(S, Bl);
    let { dsMatches: On, revalidatingFetchers: Gt } = Lh(
      Et,
      ee,
      s,
      h,
      i.history,
      U,
      Dt,
      te,
      Hl,
      o,
      !1,
      we,
      Le,
      K,
      Y,
      p,
      Yt,
      v,
      i.patchRoutesOnNavigation != null,
      [X.route.id, Oe]
    );
    Gt.filter(($e) => $e.key !== S).forEach(($e) => {
      let jl = $e.key, _n = U.fetchers.get(jl), Mt = Au(
        void 0,
        _n ? _n.data : void 0
      );
      U.fetchers.set(jl, Mt), rl(jl), $e.controller && _.set(jl, $e.controller);
    }), rt({ fetchers: new Map(U.fetchers) });
    let pl = () => Gt.forEach(($e) => rl($e.key));
    ve.signal.addEventListener(
      "abort",
      pl
    );
    let { loaderResults: Ee, fetcherResults: gt } = await ju(
      On,
      Gt,
      Et,
      ee
    );
    if (ve.signal.aborted)
      return;
    if (ve.signal.removeEventListener(
      "abort",
      pl
    ), Se.delete(S), _.delete(S), Gt.forEach(($e) => _.delete($e.key)), U.fetchers.has(S)) {
      let $e = ra(Oe.data);
      U.fetchers.set(S, $e);
    }
    let tl = Fi(Ee);
    if (tl)
      return yl(
        Et,
        tl.result,
        !1,
        { preventScrollReset: ne }
      );
    if (tl = Fi(gt), tl)
      return p.add(tl.key), yl(
        Et,
        tl.result,
        !1,
        { preventScrollReset: ne }
      );
    let { loaderData: ll, errors: pa } = Qh(
      U,
      Dt,
      Ee,
      void 0,
      Gt,
      gt
    );
    ha(Ll), U.navigation.state === "loading" && Ll > P ? (ze(ye, "Expected pending action"), me && me.abort(), Pt(U.navigation.location, {
      matches: Dt,
      loaderData: ll,
      errors: pa,
      fetchers: new Map(U.fetchers)
    })) : (rt({
      errors: pa,
      loaderData: Vh(
        U.loaderData,
        ll,
        Dt,
        pa
      ),
      fetchers: new Map(U.fetchers)
    }), we = !1);
  }
  async function qa(S, M, N, X, Q, ee, ie, F, ne, te) {
    let oe = U.fetchers.get(S);
    Tt(
      S,
      Au(
        te,
        oe ? oe.data : void 0
      ),
      { flushSync: F }
    );
    let se = new AbortController(), ve = Rn(
      i.history,
      N,
      se.signal
    );
    if (ie) {
      let Oe = await ga(
        Q,
        N,
        ve.signal,
        S
      );
      if (Oe.type === "aborted")
        return;
      if (Oe.type === "error") {
        We(S, M, Oe.error, { flushSync: F });
        return;
      } else if (Oe.matches)
        Q = Oe.matches, X = _u(Q, N);
      else {
        We(
          S,
          M,
          Wt(404, { pathname: N }),
          { flushSync: F }
        );
        return;
      }
    }
    _.set(S, se);
    let xe = V, Ke = Tn(
      s,
      h,
      ve,
      Q,
      X,
      o,
      ee
    ), Ne = (await wl(
      ve,
      Ke,
      ee,
      S
    ))[X.route.id];
    if (_.get(S) === se && _.delete(S), !ve.signal.aborted) {
      if (K.has(S)) {
        Tt(S, ra(void 0));
        return;
      }
      if (La(Ne))
        if (P > xe) {
          Tt(S, ra(void 0));
          return;
        } else {
          p.add(S), await yl(ve, Ne, !1, {
            preventScrollReset: ne
          });
          return;
        }
      if (jt(Ne)) {
        We(S, M, Ne.error);
        return;
      }
      Tt(S, ra(Ne.data));
    }
  }
  async function yl(S, M, N, {
    submission: X,
    fetcherSubmission: Q,
    preventScrollReset: ee,
    replace: ie
  } = {}) {
    M.response.headers.has("X-Remix-Revalidate") && (we = !0);
    let F = M.response.headers.get("Location");
    ze(F, "Expected a Location header on the redirect Response"), F = Gh(
      F,
      new URL(S.url),
      v
    );
    let ne = xu(U.location, F, {
      _isRedirect: !0
    });
    if (f) {
      let Ke = !1;
      if (M.response.headers.has("X-Remix-Reload-Document"))
        Ke = !0;
      else if (wf.test(F)) {
        const Fe = tm(F, !0);
        Ke = // Hard reload if it's an absolute URL to a new origin
        Fe.origin !== r.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        Ft(Fe.pathname, v) == null;
      }
      if (Ke) {
        ie ? r.location.replace(F) : r.location.assign(F);
        return;
      }
    }
    me = null;
    let te = ie === !0 || M.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: oe, formAction: se, formEncType: ve } = U.navigation;
    !X && !Q && oe && se && ve && (X = $h(U.navigation));
    let xe = X || Q;
    if (S0.has(M.response.status) && xe && qt(xe.formMethod))
      await It(te, ne, {
        submission: {
          ...xe,
          formAction: F
        },
        // Preserve these flags across redirects
        preventScrollReset: ee || pe,
        enableViewTransition: N ? Ze : void 0
      });
    else {
      let Ke = Mf(
        ne,
        X
      );
      await It(te, ne, {
        overrideNavigation: Ke,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: Q,
        // Preserve these flags across redirects
        preventScrollReset: ee || pe,
        enableViewTransition: N ? Ze : void 0
      });
    }
  }
  async function wl(S, M, N, X) {
    let Q, ee = {};
    try {
      Q = await O0(
        m,
        S,
        M,
        X,
        N,
        !1
      );
    } catch (ie) {
      return M.filter((F) => F.shouldLoad).forEach((F) => {
        ee[F.route.id] = {
          type: "error",
          error: ie
        };
      }), ee;
    }
    if (S.signal.aborted)
      return ee;
    for (let [ie, F] of Object.entries(Q))
      if (w0(F)) {
        let ne = F.result;
        ee[ie] = {
          type: "redirect",
          response: U0(
            ne,
            S,
            ie,
            M,
            v
          )
        };
      } else
        ee[ie] = await x0(
          F
        );
    return ee;
  }
  async function ju(S, M, N, X) {
    let Q = wl(
      N,
      S,
      X,
      null
    ), ee = Promise.all(
      M.map(async (ne) => {
        if (ne.matches && ne.match && ne.request && ne.controller) {
          let oe = (await wl(
            ne.request,
            ne.matches,
            X,
            ne.key
          ))[ne.match.route.id];
          return { [ne.key]: oe };
        } else
          return Promise.resolve({
            [ne.key]: {
              type: "error",
              error: Wt(404, {
                pathname: ne.path
              })
            }
          });
      })
    ), ie = await Q, F = (await ee).reduce(
      (ne, te) => Object.assign(ne, te),
      {}
    );
    return {
      loaderResults: ie,
      fetcherResults: F
    };
  }
  function Mn() {
    we = !0, Y.forEach((S, M) => {
      _.has(M) && Le.add(M), rl(M);
    });
  }
  function Tt(S, M, N = {}) {
    U.fetchers.set(S, M), rt(
      { fetchers: new Map(U.fetchers) },
      { flushSync: (N && N.flushSync) === !0 }
    );
  }
  function We(S, M, N, X = {}) {
    let Q = Ha(U.matches, M);
    ht(S), rt(
      {
        errors: {
          [Q.route.id]: N
        },
        fetchers: new Map(U.fetchers)
      },
      { flushSync: (X && X.flushSync) === !0 }
    );
  }
  function el(S) {
    return J.set(S, (J.get(S) || 0) + 1), K.has(S) && K.delete(S), U.fetchers.get(S) || b0;
  }
  function ht(S) {
    let M = U.fetchers.get(S);
    _.has(S) && !(M && M.state === "loading" && Se.has(S)) && rl(S), Y.delete(S), Se.delete(S), p.delete(S), K.delete(S), Le.delete(S), U.fetchers.delete(S);
  }
  function sr(S) {
    let M = (J.get(S) || 0) - 1;
    M <= 0 ? (J.delete(S), K.add(S)) : J.set(S, M), rt({ fetchers: new Map(U.fetchers) });
  }
  function rl(S) {
    let M = _.get(S);
    M && (M.abort(), _.delete(S));
  }
  function qu(S) {
    for (let M of S) {
      let N = el(M), X = ra(N.data);
      U.fetchers.set(M, X);
    }
  }
  function da() {
    let S = [], M = !1;
    for (let N of p) {
      let X = U.fetchers.get(N);
      ze(X, `Expected fetcher: ${N}`), X.state === "loading" && (p.delete(N), S.push(N), M = !0);
    }
    return qu(S), M;
  }
  function ha(S) {
    let M = [];
    for (let [N, X] of Se)
      if (X < S) {
        let Q = U.fetchers.get(N);
        ze(Q, `Expected fetcher: ${N}`), Q.state === "loading" && (rl(N), Se.delete(N), M.push(N));
      }
    return qu(M), M.length > 0;
  }
  function gl(S, M) {
    let N = U.blockers.get(S) || Mu;
    return le.get(S) !== M && le.set(S, M), N;
  }
  function ma(S) {
    U.blockers.delete(S), le.delete(S);
  }
  function cl(S, M) {
    let N = U.blockers.get(S) || Mu;
    ze(
      N.state === "unblocked" && M.state === "blocked" || N.state === "blocked" && M.state === "blocked" || N.state === "blocked" && M.state === "proceeding" || N.state === "blocked" && M.state === "unblocked" || N.state === "proceeding" && M.state === "unblocked",
      `Invalid blocker state transition: ${N.state} -> ${M.state}`
    );
    let X = new Map(U.blockers);
    X.set(S, M), rt({ blockers: X });
  }
  function Yu({
    currentLocation: S,
    nextLocation: M,
    historyAction: N
  }) {
    if (le.size === 0)
      return;
    le.size > 1 && it(!1, "A router only supports one blocker at a time");
    let X = Array.from(le.entries()), [Q, ee] = X[X.length - 1], ie = U.blockers.get(Q);
    if (!(ie && ie.state === "proceeding") && ee({ currentLocation: S, nextLocation: M, historyAction: N }))
      return Q;
  }
  function Ya(S) {
    let M = Wt(404, { pathname: S }), N = b || y, { matches: X, route: Q } = Kh(N);
    return { notFoundMatches: X, route: Q, error: M };
  }
  function Gu(S, M, N) {
    if (B = S, Z = M, H = N || null, !$ && U.navigation === Df) {
      $ = !0;
      let X = Xu(U.location, U.matches);
      X != null && rt({ restoreScrollPosition: X });
    }
    return () => {
      B = null, Z = null, H = null;
    };
  }
  function Ga(S, M) {
    return H && H(
      S,
      M.map((X) => Fy(X, U.loaderData))
    ) || S.key;
  }
  function va(S, M) {
    if (B && Z) {
      let N = Ga(S, M);
      B[N] = Z();
    }
  }
  function Xu(S, M) {
    if (B) {
      let N = Ga(S, M), X = B[N];
      if (typeof X == "number")
        return X;
    }
    return null;
  }
  function ya(S, M, N) {
    if (i.patchRoutesOnNavigation)
      if (S) {
        if (Object.keys(S[0].params).length > 0)
          return { active: !0, matches: Ii(
            M,
            N,
            v,
            !0
          ) };
      } else
        return { active: !0, matches: Ii(
          M,
          N,
          v,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function ga(S, M, N, X) {
    if (!i.patchRoutesOnNavigation)
      return { type: "success", matches: S };
    let Q = S;
    for (; ; ) {
      let ee = b == null, ie = b || y, F = h;
      try {
        await i.patchRoutesOnNavigation({
          signal: N,
          path: M,
          matches: Q,
          fetcherKey: X,
          patch: (oe, se) => {
            N.aborted || Bh(
              oe,
              se,
              ie,
              F,
              s
            );
          }
        });
      } catch (oe) {
        return { type: "error", error: oe, partialMatches: Q };
      } finally {
        ee && !N.aborted && (y = [...y]);
      }
      if (N.aborted)
        return { type: "aborted" };
      let ne = ca(ie, M, v);
      if (ne)
        return { type: "success", matches: ne };
      let te = Ii(
        ie,
        M,
        v,
        !0
      );
      if (!te || Q.length === te.length && Q.every(
        (oe, se) => oe.route.id === te[se].route.id
      ))
        return { type: "success", matches: null };
      Q = te;
    }
  }
  function An(S) {
    h = {}, b = lr(
      S,
      s,
      void 0,
      h
    );
  }
  function zn(S, M) {
    let N = b == null;
    Bh(
      S,
      M,
      b || y,
      h,
      s
    ), N && (y = [...y], rt({}));
  }
  return W = {
    get basename() {
      return v;
    },
    get future() {
      return R;
    },
    get state() {
      return U;
    },
    get routes() {
      return y;
    },
    get window() {
      return r;
    },
    initialize: bt,
    subscribe: il,
    enableScrollRestoration: Gu,
    navigate: ja,
    fetch: Lu,
    revalidate: Dn,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (S) => i.history.createHref(S),
    encodeLocation: (S) => i.history.encodeLocation(S),
    getFetcher: el,
    deleteFetcher: sr,
    dispose: Qe,
    getBlocker: gl,
    deleteBlocker: ma,
    patchRoutes: zn,
    _internalFetchControllers: _,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: An
  }, W;
}
function T0(i) {
  return i != null && ("formData" in i && i.formData != null || "body" in i && i.body !== void 0);
}
function zf(i, r, f, o, s, h) {
  let y, b;
  if (s) {
    y = [];
    for (let m of r)
      if (y.push(m), m.route.id === s) {
        b = m;
        break;
      }
  } else
    y = r, b = r[r.length - 1];
  let v = Cf(
    o || ".",
    Nf(y),
    Ft(i.pathname, f) || i.pathname,
    h === "path"
  );
  if (o == null && (v.search = i.search, v.hash = i.hash), (o == null || o === "" || o === ".") && b) {
    let m = Hf(v.search);
    if (b.route.index && !m)
      v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index";
    else if (!b.route.index && m) {
      let R = new URLSearchParams(v.search), w = R.getAll("index");
      R.delete("index"), w.filter((B) => B).forEach((B) => R.append("index", B));
      let D = R.toString();
      v.search = D ? `?${D}` : "";
    }
  }
  return f !== "/" && (v.pathname = v.pathname === "/" ? f : ml([f, v.pathname])), fa(v);
}
function Hh(i, r, f) {
  if (!f || !T0(f))
    return { path: r };
  if (f.formMethod && !H0(f.formMethod))
    return {
      path: r,
      error: Wt(405, { method: f.formMethod })
    };
  let o = () => ({
    path: r,
    error: Wt(400, { type: "invalid-body" })
  }), h = (f.formMethod || "get").toUpperCase(), y = hm(r);
  if (f.body !== void 0) {
    if (f.formEncType === "text/plain") {
      if (!qt(h))
        return o();
      let w = typeof f.body == "string" ? f.body : f.body instanceof FormData || f.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(f.body.entries()).reduce(
          (D, [B, H]) => `${D}${B}=${H}
`,
          ""
        )
      ) : String(f.body);
      return {
        path: r,
        submission: {
          formMethod: h,
          formAction: y,
          formEncType: f.formEncType,
          formData: void 0,
          json: void 0,
          text: w
        }
      };
    } else if (f.formEncType === "application/json") {
      if (!qt(h))
        return o();
      try {
        let w = typeof f.body == "string" ? JSON.parse(f.body) : f.body;
        return {
          path: r,
          submission: {
            formMethod: h,
            formAction: y,
            formEncType: f.formEncType,
            formData: void 0,
            json: w,
            text: void 0
          }
        };
      } catch {
        return o();
      }
    }
  }
  ze(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let b, v;
  if (f.formData)
    b = xf(f.formData), v = f.formData;
  else if (f.body instanceof FormData)
    b = xf(f.body), v = f.body;
  else if (f.body instanceof URLSearchParams)
    b = f.body, v = Xh(b);
  else if (f.body == null)
    b = new URLSearchParams(), v = new FormData();
  else
    try {
      b = new URLSearchParams(f.body), v = Xh(b);
    } catch {
      return o();
    }
  let m = {
    formMethod: h,
    formAction: y,
    formEncType: f && f.formEncType || "application/x-www-form-urlencoded",
    formData: v,
    json: void 0,
    text: void 0
  };
  if (qt(m.formMethod))
    return { path: r, submission: m };
  let R = oa(r);
  return i && R.search && Hf(R.search) && b.append("index", ""), R.search = `?${b}`, { path: fa(R), submission: m };
}
function Lh(i, r, f, o, s, h, y, b, v, m, R, w, D, B, H, Z, $, j, ue, k) {
  let he = k ? jt(k[1]) ? k[1].error : k[1].data : void 0, W = s.createURL(h.location), U = s.createURL(v), ye;
  if (R && h.errors) {
    let Ue = Object.keys(h.errors)[0];
    ye = y.findIndex((we) => we.route.id === Ue);
  } else if (k && jt(k[1])) {
    let Ue = k[0];
    ye = y.findIndex((we) => we.route.id === Ue) - 1;
  }
  let pe = k ? k[1].statusCode : void 0, me = pe && pe >= 400, Ze = {
    currentUrl: W,
    currentParams: h.matches[0]?.params || {},
    nextUrl: U,
    nextParams: y[0].params,
    ...b,
    actionResult: he,
    actionStatus: pe
  }, tt = y.map((Ue, we) => {
    let { route: Le } = Ue, _ = null;
    if (ye != null && we > ye ? _ = !1 : Le.lazy ? _ = !0 : Le.loader == null ? _ = !1 : R ? _ = Of(
      Le,
      h.loaderData,
      h.errors
    ) : D0(h.loaderData, h.matches[we], Ue) && (_ = !0), _ !== null)
      return _f(
        f,
        o,
        i,
        Ue,
        m,
        r,
        _
      );
    let V = me ? !1 : (
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      w || W.pathname + W.search === U.pathname + U.search || // Search params affect all loaders
      W.search !== U.search || M0(h.matches[we], Ue)
    ), P = {
      ...Ze,
      defaultShouldRevalidate: V
    }, Se = ur(Ue, P);
    return _f(
      f,
      o,
      i,
      Ue,
      m,
      r,
      Se,
      P
    );
  }), Je = [];
  return H.forEach((Ue, we) => {
    if (R || !y.some((J) => J.route.id === Ue.routeId) || B.has(we))
      return;
    let Le = h.fetchers.get(we), _ = Le && Le.state !== "idle" && Le.data === void 0, V = ca($, Ue.path, j);
    if (!V) {
      if (ue && _)
        return;
      Je.push({
        key: we,
        routeId: Ue.routeId,
        path: Ue.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (Z.has(we))
      return;
    let P = _u(V, Ue.path), Se = new AbortController(), p = Rn(
      s,
      Ue.path,
      Se.signal
    ), Y = null;
    if (D.has(we))
      D.delete(we), Y = Tn(
        f,
        o,
        p,
        V,
        P,
        m,
        r
      );
    else if (_)
      w && (Y = Tn(
        f,
        o,
        p,
        V,
        P,
        m,
        r
      ));
    else {
      let J = {
        ...Ze,
        defaultShouldRevalidate: me ? !1 : w
      };
      ur(P, J) && (Y = Tn(
        f,
        o,
        p,
        V,
        P,
        m,
        r,
        J
      ));
    }
    Y && Je.push({
      key: we,
      routeId: Ue.routeId,
      path: Ue.path,
      matches: Y,
      match: P,
      request: p,
      controller: Se
    });
  }), { dsMatches: tt, revalidatingFetchers: Je };
}
function Of(i, r, f) {
  if (i.lazy)
    return !0;
  if (!i.loader)
    return !1;
  let o = r != null && i.id in r, s = f != null && f[i.id] !== void 0;
  return !o && s ? !1 : typeof i.loader == "function" && i.loader.hydrate === !0 ? !0 : !o && !s;
}
function D0(i, r, f) {
  let o = (
    // [a] -> [a, b]
    !r || // [a, b] -> [a, c]
    f.route.id !== r.route.id
  ), s = !i.hasOwnProperty(f.route.id);
  return o || s;
}
function M0(i, r) {
  let f = i.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    i.pathname !== r.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    f != null && f.endsWith("*") && i.params["*"] !== r.params["*"]
  );
}
function ur(i, r) {
  if (i.route.shouldRevalidate) {
    let f = i.route.shouldRevalidate(r);
    if (typeof f == "boolean")
      return f;
  }
  return r.defaultShouldRevalidate;
}
function Bh(i, r, f, o, s) {
  let h;
  if (i) {
    let v = o[i];
    ze(
      v,
      `No route found to patch children into: routeId = ${i}`
    ), v.children || (v.children = []), h = v.children;
  } else
    h = f;
  let y = r.filter(
    (v) => !h.some(
      (m) => cm(v, m)
    )
  ), b = lr(
    y,
    s,
    [i || "_", "patch", String(h?.length || "0")],
    o
  );
  h.push(...b);
}
function cm(i, r) {
  return "id" in i && "id" in r && i.id === r.id ? !0 : i.index === r.index && i.path === r.path && i.caseSensitive === r.caseSensitive ? (!i.children || i.children.length === 0) && (!r.children || r.children.length === 0) ? !0 : i.children.every(
    (f, o) => r.children?.some((s) => cm(f, s))
  ) : !1;
}
var jh = /* @__PURE__ */ new WeakMap(), fm = ({
  key: i,
  route: r,
  manifest: f,
  mapRouteProperties: o
}) => {
  let s = f[r.id];
  if (ze(s, "No route found in manifest"), !s.lazy || typeof s.lazy != "object")
    return;
  let h = s.lazy[i];
  if (!h)
    return;
  let y = jh.get(s);
  y || (y = {}, jh.set(s, y));
  let b = y[i];
  if (b)
    return b;
  let v = (async () => {
    let m = Jy(i), w = s[i] !== void 0 && i !== "hasErrorBoundary";
    if (m)
      it(
        !m,
        "Route property " + i + " is not a supported lazy route property. This property will be ignored."
      ), y[i] = Promise.resolve();
    else if (w)
      it(
        !1,
        `Route "${s.id}" has a static property "${i}" defined. The lazy property will be ignored.`
      );
    else {
      let D = await h();
      D != null && (Object.assign(s, { [i]: D }), Object.assign(s, o(s)));
    }
    typeof s.lazy == "object" && (s.lazy[i] = void 0, Object.values(s.lazy).every((D) => D === void 0) && (s.lazy = void 0));
  })();
  return y[i] = v, v;
}, qh = /* @__PURE__ */ new WeakMap();
function A0(i, r, f, o, s) {
  let h = f[i.id];
  if (ze(h, "No route found in manifest"), !i.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof i.lazy == "function") {
    let R = qh.get(h);
    if (R)
      return {
        lazyRoutePromise: R,
        lazyHandlerPromise: R
      };
    let w = (async () => {
      ze(
        typeof i.lazy == "function",
        "No lazy route function found"
      );
      let D = await i.lazy(), B = {};
      for (let H in D) {
        let Z = D[H];
        if (Z === void 0)
          continue;
        let $ = ky(H), ue = h[H] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        H !== "hasErrorBoundary";
        $ ? it(
          !$,
          "Route property " + H + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : ue ? it(
          !ue,
          `Route "${h.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`
        ) : B[H] = Z;
      }
      Object.assign(h, B), Object.assign(h, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...o(h),
        lazy: void 0
      });
    })();
    return qh.set(h, w), w.catch(() => {
    }), {
      lazyRoutePromise: w,
      lazyHandlerPromise: w
    };
  }
  let y = Object.keys(i.lazy), b = [], v;
  for (let R of y) {
    if (s && s.includes(R))
      continue;
    let w = fm({
      key: R,
      route: i,
      manifest: f,
      mapRouteProperties: o
    });
    w && (b.push(w), R === r && (v = w));
  }
  let m = b.length > 0 ? Promise.all(b).then(() => {
  }) : void 0;
  return m?.catch(() => {
  }), v?.catch(() => {
  }), {
    lazyRoutePromise: m,
    lazyHandlerPromise: v
  };
}
async function Yh(i) {
  let r = i.matches.filter((s) => s.shouldLoad), f = {};
  return (await Promise.all(r.map((s) => s.resolve()))).forEach((s, h) => {
    f[r[h].route.id] = s;
  }), f;
}
async function z0(i) {
  return i.matches.some((r) => r.route.unstable_middleware) ? om(
    i,
    !1,
    () => Yh(i),
    (r, f) => ({ [f]: { type: "error", result: r } })
  ) : Yh(i);
}
async function om(i, r, f, o) {
  let { matches: s, request: h, params: y, context: b } = i, v = {
    handlerResult: void 0
  };
  try {
    let m = s.flatMap(
      (w) => w.route.unstable_middleware ? w.route.unstable_middleware.map((D) => [w.route.id, D]) : []
    ), R = await sm(
      { request: h, params: y, context: b },
      m,
      r,
      v,
      f
    );
    return r ? R : v.handlerResult;
  } catch (m) {
    if (!v.middlewareError)
      throw m;
    let R = await o(
      v.middlewareError.error,
      v.middlewareError.routeId
    );
    return v.handlerResult ? Object.assign(v.handlerResult, R) : R;
  }
}
async function sm(i, r, f, o, s, h = 0) {
  let { request: y } = i;
  if (y.signal.aborted)
    throw y.signal.reason ? y.signal.reason : new Error(
      `Request aborted without an \`AbortSignal.reason\`: ${y.method} ${y.url}`
    );
  let b = r[h];
  if (!b)
    return o.handlerResult = await s(), o.handlerResult;
  let [v, m] = b, R = !1, w, D = async () => {
    if (R)
      throw new Error("You may only call `next()` once per middleware");
    R = !0, await sm(
      i,
      r,
      f,
      o,
      s,
      h + 1
    );
  };
  try {
    let B = await m(
      {
        request: i.request,
        params: i.params,
        context: i.context
      },
      D
    );
    return R ? B === void 0 ? w : B : D();
  } catch (B) {
    throw o.middlewareError ? o.middlewareError.error !== B && (o.middlewareError = { routeId: v, error: B }) : o.middlewareError = { routeId: v, error: B }, B;
  }
}
function dm(i, r, f, o, s) {
  let h = fm({
    key: "unstable_middleware",
    route: o.route,
    manifest: r,
    mapRouteProperties: i
  }), y = A0(
    o.route,
    qt(f.method) ? "action" : "loader",
    r,
    i,
    s
  );
  return {
    middleware: h,
    route: y.lazyRoutePromise,
    handler: y.lazyHandlerPromise
  };
}
function _f(i, r, f, o, s, h, y, b = null) {
  let v = !1, m = dm(
    i,
    r,
    f,
    o,
    s
  );
  return {
    ...o,
    _lazyPromises: m,
    shouldLoad: y,
    unstable_shouldRevalidateArgs: b,
    unstable_shouldCallHandler(R) {
      return v = !0, b ? typeof R == "boolean" ? ur(o, {
        ...b,
        defaultShouldRevalidate: R
      }) : ur(o, b) : y;
    },
    resolve(R) {
      return v || y || R && f.method === "GET" && (o.route.lazy || o.route.loader) ? _0({
        request: f,
        match: o,
        lazyHandlerPromise: m?.handler,
        lazyRoutePromise: m?.route,
        handlerOverride: R,
        scopedContext: h
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function Tn(i, r, f, o, s, h, y, b = null) {
  return o.map((v) => v.route.id !== s.route.id ? {
    ...v,
    shouldLoad: !1,
    unstable_shouldRevalidateArgs: b,
    unstable_shouldCallHandler: () => !1,
    _lazyPromises: dm(
      i,
      r,
      f,
      v,
      h
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : _f(
    i,
    r,
    f,
    v,
    h,
    y,
    !0,
    b
  ));
}
async function O0(i, r, f, o, s, h) {
  f.some((m) => m._lazyPromises?.middleware) && await Promise.all(f.map((m) => m._lazyPromises?.middleware));
  let y = {
    request: r,
    params: f[0].params,
    context: s,
    matches: f
  }, v = await i({
    ...y,
    fetcherKey: o,
    unstable_runClientMiddleware: (m) => {
      let R = y;
      return om(
        R,
        !1,
        () => m({
          ...R,
          fetcherKey: o,
          unstable_runClientMiddleware: () => {
            throw new Error(
              "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
            );
          }
        }),
        (w, D) => ({
          [D]: { type: "error", result: w }
        })
      );
    }
  });
  try {
    await Promise.all(
      f.flatMap((m) => [m._lazyPromises?.handler, m._lazyPromises?.route])
    );
  } catch {
  }
  return v;
}
async function _0({
  request: i,
  match: r,
  lazyHandlerPromise: f,
  lazyRoutePromise: o,
  handlerOverride: s,
  scopedContext: h
}) {
  let y, b, v = qt(i.method), m = v ? "action" : "loader", R = (w) => {
    let D, B = new Promise(($, j) => D = j);
    b = () => D(), i.signal.addEventListener("abort", b);
    let H = ($) => typeof w != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`
      )
    ) : w(
      {
        request: i,
        params: r.params,
        context: h
      },
      ...$ !== void 0 ? [$] : []
    ), Z = (async () => {
      try {
        return { type: "data", result: await (s ? s((j) => H(j)) : H()) };
      } catch ($) {
        return { type: "error", result: $ };
      }
    })();
    return Promise.race([Z, B]);
  };
  try {
    let w = v ? r.route.action : r.route.loader;
    if (f || o)
      if (w) {
        let D, [B] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          R(w).catch((H) => {
            D = H;
          }),
          // Ensure all lazy route promises are resolved before continuing
          f,
          o
        ]);
        if (D !== void 0)
          throw D;
        y = B;
      } else {
        await f;
        let D = v ? r.route.action : r.route.loader;
        if (D)
          [y] = await Promise.all([R(D), o]);
        else if (m === "action") {
          let B = new URL(i.url), H = B.pathname + B.search;
          throw Wt(405, {
            method: i.method,
            pathname: H,
            routeId: r.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (w)
      y = await R(w);
    else {
      let D = new URL(i.url), B = D.pathname + D.search;
      throw Wt(404, {
        pathname: B
      });
    }
  } catch (w) {
    return { type: "error", result: w };
  } finally {
    b && i.signal.removeEventListener("abort", b);
  }
  return y;
}
async function x0(i) {
  let { result: r, type: f } = i;
  if (mm(r)) {
    let o;
    try {
      let s = r.headers.get("Content-Type");
      s && /\bapplication\/json\b/.test(s) ? r.body == null ? o = null : o = await r.json() : o = await r.text();
    } catch (s) {
      return { type: "error", error: s };
    }
    return f === "error" ? {
      type: "error",
      error: new nr(r.status, r.statusText, o),
      statusCode: r.status,
      headers: r.headers
    } : {
      type: "data",
      data: o,
      statusCode: r.status,
      headers: r.headers
    };
  }
  return f === "error" ? Jh(r) ? r.data instanceof Error ? {
    type: "error",
    error: r.data,
    statusCode: r.init?.status,
    headers: r.init?.headers ? new Headers(r.init.headers) : void 0
  } : {
    type: "error",
    error: new nr(
      r.init?.status || 500,
      void 0,
      r.data
    ),
    statusCode: Uu(r) ? r.status : void 0,
    headers: r.init?.headers ? new Headers(r.init.headers) : void 0
  } : {
    type: "error",
    error: r,
    statusCode: Uu(r) ? r.status : void 0
  } : Jh(r) ? {
    type: "data",
    data: r.data,
    statusCode: r.init?.status,
    headers: r.init?.headers ? new Headers(r.init.headers) : void 0
  } : { type: "data", data: r };
}
function U0(i, r, f, o, s) {
  let h = i.headers.get("Location");
  if (ze(
    h,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !wf.test(h)) {
    let y = o.slice(
      0,
      o.findIndex((b) => b.route.id === f) + 1
    );
    h = zf(
      new URL(r.url),
      y,
      s,
      h
    ), i.headers.set("Location", h);
  }
  return i;
}
function Gh(i, r, f) {
  if (wf.test(i)) {
    let o = i, s = o.startsWith("//") ? new URL(r.protocol + o) : new URL(o), h = Ft(s.pathname, f) != null;
    if (s.origin === r.origin && h)
      return s.pathname + s.search + s.hash;
  }
  return i;
}
function Rn(i, r, f, o) {
  let s = i.createURL(hm(r)).toString(), h = { signal: f };
  if (o && qt(o.formMethod)) {
    let { formMethod: y, formEncType: b } = o;
    h.method = y.toUpperCase(), b === "application/json" ? (h.headers = new Headers({ "Content-Type": b }), h.body = JSON.stringify(o.json)) : b === "text/plain" ? h.body = o.text : b === "application/x-www-form-urlencoded" && o.formData ? h.body = xf(o.formData) : h.body = o.formData;
  }
  return new Request(s, h);
}
function xf(i) {
  let r = new URLSearchParams();
  for (let [f, o] of i.entries())
    r.append(f, typeof o == "string" ? o : o.name);
  return r;
}
function Xh(i) {
  let r = new FormData();
  for (let [f, o] of i.entries())
    r.append(f, o);
  return r;
}
function N0(i, r, f, o = !1, s = !1) {
  let h = {}, y = null, b, v = !1, m = {}, R = f && jt(f[1]) ? f[1].error : void 0;
  return i.forEach((w) => {
    if (!(w.route.id in r))
      return;
    let D = w.route.id, B = r[D];
    if (ze(
      !La(B),
      "Cannot handle redirect results in processLoaderData"
    ), jt(B)) {
      let H = B.error;
      if (R !== void 0 && (H = R, R = void 0), y = y || {}, s)
        y[D] = H;
      else {
        let Z = Ha(i, D);
        y[Z.route.id] == null && (y[Z.route.id] = H);
      }
      o || (h[D] = rm), v || (v = !0, b = Uu(B.error) ? B.error.status : 500), B.headers && (m[D] = B.headers);
    } else
      h[D] = B.data, B.statusCode && B.statusCode !== 200 && !v && (b = B.statusCode), B.headers && (m[D] = B.headers);
  }), R !== void 0 && f && (y = { [f[0]]: R }, f[2] && (h[f[2]] = void 0)), {
    loaderData: h,
    errors: y,
    statusCode: b || 200,
    loaderHeaders: m
  };
}
function Qh(i, r, f, o, s, h) {
  let { loaderData: y, errors: b } = N0(
    r,
    f,
    o
  );
  return s.filter((v) => !v.matches || v.matches.some((m) => m.shouldLoad)).forEach((v) => {
    let { key: m, match: R, controller: w } = v, D = h[m];
    if (ze(D, "Did not find corresponding fetcher result"), !(w && w.signal.aborted))
      if (jt(D)) {
        let B = Ha(i.matches, R?.route.id);
        b && b[B.route.id] || (b = {
          ...b,
          [B.route.id]: D.error
        }), i.fetchers.delete(m);
      } else if (La(D))
        ze(!1, "Unhandled fetcher revalidation redirect");
      else {
        let B = ra(D.data);
        i.fetchers.set(m, B);
      }
  }), { loaderData: y, errors: b };
}
function Vh(i, r, f, o) {
  let s = Object.entries(r).filter(([, h]) => h !== rm).reduce((h, [y, b]) => (h[y] = b, h), {});
  for (let h of f) {
    let y = h.route.id;
    if (!r.hasOwnProperty(y) && i.hasOwnProperty(y) && h.route.loader && (s[y] = i[y]), o && o.hasOwnProperty(y))
      break;
  }
  return s;
}
function Zh(i) {
  return i ? jt(i[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [i[0]]: i[1].data
    }
  } : {};
}
function Ha(i, r) {
  return (r ? i.slice(0, i.findIndex((o) => o.route.id === r) + 1) : [...i]).reverse().find((o) => o.route.hasErrorBoundary === !0) || i[0];
}
function Kh(i) {
  let r = i.length === 1 ? i[0] : i.find((f) => f.index || !f.path || f.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: r
      }
    ],
    route: r
  };
}
function Wt(i, {
  pathname: r,
  routeId: f,
  method: o,
  type: s,
  message: h
} = {}) {
  let y = "Unknown Server Error", b = "Unknown @remix-run/router error";
  return i === 400 ? (y = "Bad Request", o && r && f ? b = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${f}", so there is no way to handle the request.` : s === "invalid-body" && (b = "Unable to encode submission body")) : i === 403 ? (y = "Forbidden", b = `Route "${f}" does not match URL "${r}"`) : i === 404 ? (y = "Not Found", b = `No route matches URL "${r}"`) : i === 405 && (y = "Method Not Allowed", o && r && f ? b = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${f}", so there is no way to handle the request.` : o && (b = `Invalid request method "${o.toUpperCase()}"`)), new nr(
    i || 500,
    y,
    new Error(b),
    !0
  );
}
function Fi(i) {
  let r = Object.entries(i);
  for (let f = r.length - 1; f >= 0; f--) {
    let [o, s] = r[f];
    if (La(s))
      return { key: o, result: s };
  }
}
function hm(i) {
  let r = typeof i == "string" ? oa(i) : i;
  return fa({ ...r, hash: "" });
}
function C0(i, r) {
  return i.pathname !== r.pathname || i.search !== r.search ? !1 : i.hash === "" ? r.hash !== "" : i.hash === r.hash ? !0 : r.hash !== "";
}
function w0(i) {
  return mm(i.result) && p0.has(i.result.status);
}
function jt(i) {
  return i.type === "error";
}
function La(i) {
  return (i && i.type) === "redirect";
}
function Jh(i) {
  return typeof i == "object" && i != null && "type" in i && "data" in i && "init" in i && i.type === "DataWithResponseInit";
}
function mm(i) {
  return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.headers == "object" && typeof i.body < "u";
}
function H0(i) {
  return g0.has(i.toUpperCase());
}
function qt(i) {
  return v0.has(i.toUpperCase());
}
function Hf(i) {
  return new URLSearchParams(i).getAll("index").some((r) => r === "");
}
function _u(i, r) {
  let f = typeof r == "string" ? oa(r).search : r.search;
  if (i[i.length - 1].route.index && Hf(f || ""))
    return i[i.length - 1];
  let o = nm(i);
  return o[o.length - 1];
}
function $h(i) {
  let { formMethod: r, formAction: f, formEncType: o, text: s, formData: h, json: y } = i;
  if (!(!r || !f || !o)) {
    if (s != null)
      return {
        formMethod: r,
        formAction: f,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: s
      };
    if (h != null)
      return {
        formMethod: r,
        formAction: f,
        formEncType: o,
        formData: h,
        json: void 0,
        text: void 0
      };
    if (y !== void 0)
      return {
        formMethod: r,
        formAction: f,
        formEncType: o,
        formData: void 0,
        json: y,
        text: void 0
      };
  }
}
function Mf(i, r) {
  return r ? {
    state: "loading",
    location: i,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text
  } : {
    state: "loading",
    location: i,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function L0(i, r) {
  return {
    state: "submitting",
    location: i,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text
  };
}
function Au(i, r) {
  return i ? {
    state: "loading",
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
    data: r
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: r
  };
}
function B0(i, r) {
  return {
    state: "submitting",
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
    data: r ? r.data : void 0
  };
}
function ra(i) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: i
  };
}
function j0(i, r) {
  try {
    let f = i.sessionStorage.getItem(
      im
    );
    if (f) {
      let o = JSON.parse(f);
      for (let [s, h] of Object.entries(o || {}))
        h && Array.isArray(h) && r.set(s, new Set(h || []));
    }
  } catch {
  }
}
function q0(i, r) {
  if (r.size > 0) {
    let f = {};
    for (let [o, s] of r)
      f[o] = [...s];
    try {
      i.sessionStorage.setItem(
        im,
        JSON.stringify(f)
      );
    } catch (o) {
      it(
        !1,
        `Failed to save applied view transitions in sessionStorage (${o}).`
      );
    }
  }
}
function Y0() {
  let i, r, f = new Promise((o, s) => {
    i = async (h) => {
      o(h);
      try {
        await f;
      } catch {
      }
    }, r = async (h) => {
      s(h);
      try {
        await f;
      } catch {
      }
    };
  });
  return {
    promise: f,
    //@ts-ignore
    resolve: i,
    //@ts-ignore
    reject: r
  };
}
var Ba = C.createContext(null);
Ba.displayName = "DataRouter";
var Cu = C.createContext(null);
Cu.displayName = "DataRouterState";
var Lf = C.createContext({
  isTransitioning: !1
});
Lf.displayName = "ViewTransition";
var vm = C.createContext(
  /* @__PURE__ */ new Map()
);
vm.displayName = "Fetchers";
var G0 = C.createContext(null);
G0.displayName = "Await";
var vl = C.createContext(
  null
);
vl.displayName = "Navigation";
var ir = C.createContext(
  null
);
ir.displayName = "Location";
var Cl = C.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Cl.displayName = "Route";
var Bf = C.createContext(null);
Bf.displayName = "RouteError";
function X0(i, { relative: r } = {}) {
  ze(
    wu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: f, navigator: o } = C.useContext(vl), { hash: s, pathname: h, search: y } = Hu(i, { relative: r }), b = h;
  return f !== "/" && (b = h === "/" ? f : ml([f, h])), o.createHref({ pathname: b, search: y, hash: s });
}
function wu() {
  return C.useContext(ir) != null;
}
function sa() {
  return ze(
    wu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), C.useContext(ir).location;
}
var ym = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gm(i) {
  C.useContext(vl).static || C.useLayoutEffect(i);
}
function Q0() {
  let { isDataRoute: i } = C.useContext(Cl);
  return i ? lg() : V0();
}
function V0() {
  ze(
    wu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = C.useContext(Ba), { basename: r, navigator: f } = C.useContext(vl), { matches: o } = C.useContext(Cl), { pathname: s } = sa(), h = JSON.stringify(Nf(o)), y = C.useRef(!1);
  return gm(() => {
    y.current = !0;
  }), C.useCallback(
    (v, m = {}) => {
      if (it(y.current, ym), !y.current) return;
      if (typeof v == "number") {
        f.go(v);
        return;
      }
      let R = Cf(
        v,
        JSON.parse(h),
        s,
        m.relative === "path"
      );
      i == null && r !== "/" && (R.pathname = R.pathname === "/" ? r : ml([r, R.pathname])), (m.replace ? f.replace : f.push)(
        R,
        m.state,
        m
      );
    },
    [
      r,
      f,
      h,
      s,
      i
    ]
  );
}
C.createContext(null);
function Hu(i, { relative: r } = {}) {
  let { matches: f } = C.useContext(Cl), { pathname: o } = sa(), s = JSON.stringify(Nf(f));
  return C.useMemo(
    () => Cf(
      i,
      JSON.parse(s),
      o,
      r === "path"
    ),
    [i, s, o, r]
  );
}
function Z0(i, r, f, o) {
  ze(
    wu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s } = C.useContext(vl), { matches: h } = C.useContext(Cl), y = h[h.length - 1], b = y ? y.params : {}, v = y ? y.pathname : "/", m = y ? y.pathnameBase : "/", R = y && y.route;
  {
    let j = R && R.path || "";
    pm(
      v,
      !R || j.endsWith("*") || j.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j === "/" ? "*" : `${j}/*`}">.`
    );
  }
  let w = sa(), D;
  D = w;
  let B = D.pathname || "/", H = B;
  if (m !== "/") {
    let j = m.replace(/^\//, "").split("/");
    H = "/" + B.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let Z = ca(i, { pathname: H });
  return it(
    R || Z != null,
    `No routes matched location "${D.pathname}${D.search}${D.hash}" `
  ), it(
    Z == null || Z[Z.length - 1].route.element !== void 0 || Z[Z.length - 1].route.Component !== void 0 || Z[Z.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), W0(
    Z && Z.map(
      (j) => Object.assign({}, j, {
        params: Object.assign({}, b, j.params),
        pathname: ml([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          s.encodeLocation ? s.encodeLocation(j.pathname).pathname : j.pathname
        ]),
        pathnameBase: j.pathnameBase === "/" ? m : ml([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          s.encodeLocation ? s.encodeLocation(j.pathnameBase).pathname : j.pathnameBase
        ])
      })
    ),
    h,
    f,
    o
  );
}
function K0() {
  let i = tg(), r = Uu(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), f = i instanceof Error ? i.stack : null, o = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: o }, h = { padding: "2px 4px", backgroundColor: o }, y = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    i
  ), y = /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ C.createElement("code", { style: h }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ C.createElement("code", { style: h }, "errorElement"), " prop on your route.")), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ C.createElement("h3", { style: { fontStyle: "italic" } }, r), f ? /* @__PURE__ */ C.createElement("pre", { style: s }, f) : null, y);
}
var J0 = /* @__PURE__ */ C.createElement(K0, null), $0 = class extends C.Component {
  constructor(i) {
    super(i), this.state = {
      location: i.location,
      revalidation: i.revalidation,
      error: i.error
    };
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, r) {
    return r.location !== i.location || r.revalidation !== "idle" && i.revalidation === "idle" ? {
      error: i.error,
      location: i.location,
      revalidation: i.revalidation
    } : {
      error: i.error !== void 0 ? i.error : r.error,
      location: r.location,
      revalidation: i.revalidation || r.revalidation
    };
  }
  componentDidCatch(i, r) {
    console.error(
      "React Router caught the following error during render",
      i,
      r
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ C.createElement(Cl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ C.createElement(
      Bf.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function k0({ routeContext: i, match: r, children: f }) {
  let o = C.useContext(Ba);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ C.createElement(Cl.Provider, { value: i }, f);
}
function W0(i, r = [], f = null, o = null) {
  if (i == null) {
    if (!f)
      return null;
    if (f.errors)
      i = f.matches;
    else if (r.length === 0 && !f.initialized && f.matches.length > 0)
      i = f.matches;
    else
      return null;
  }
  let s = i, h = f?.errors;
  if (h != null) {
    let v = s.findIndex(
      (m) => m.route.id && h?.[m.route.id] !== void 0
    );
    ze(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, v + 1)
    );
  }
  let y = !1, b = -1;
  if (f)
    for (let v = 0; v < s.length; v++) {
      let m = s[v];
      if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (b = v), m.route.id) {
        let { loaderData: R, errors: w } = f, D = m.route.loader && !R.hasOwnProperty(m.route.id) && (!w || w[m.route.id] === void 0);
        if (m.route.lazy || D) {
          y = !0, b >= 0 ? s = s.slice(0, b + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((v, m, R) => {
    let w, D = !1, B = null, H = null;
    f && (w = h && m.route.id ? h[m.route.id] : void 0, B = m.route.errorElement || J0, y && (b < 0 && R === 0 ? (pm(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), D = !0, H = null) : b === R && (D = !0, H = m.route.hydrateFallbackElement || null)));
    let Z = r.concat(s.slice(0, R + 1)), $ = () => {
      let j;
      return w ? j = B : D ? j = H : m.route.Component ? j = /* @__PURE__ */ C.createElement(m.route.Component, null) : m.route.element ? j = m.route.element : j = v, /* @__PURE__ */ C.createElement(
        k0,
        {
          match: m,
          routeContext: {
            outlet: v,
            matches: Z,
            isDataRoute: f != null
          },
          children: j
        }
      );
    };
    return f && (m.route.ErrorBoundary || m.route.errorElement || R === 0) ? /* @__PURE__ */ C.createElement(
      $0,
      {
        location: f.location,
        revalidation: f.revalidation,
        component: B,
        error: w,
        children: $(),
        routeContext: { outlet: null, matches: Z, isDataRoute: !0 }
      }
    ) : $();
  }, null);
}
function jf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function F0(i) {
  let r = C.useContext(Ba);
  return ze(r, jf(i)), r;
}
function P0(i) {
  let r = C.useContext(Cu);
  return ze(r, jf(i)), r;
}
function I0(i) {
  let r = C.useContext(Cl);
  return ze(r, jf(i)), r;
}
function qf(i) {
  let r = I0(i), f = r.matches[r.matches.length - 1];
  return ze(
    f.route.id,
    `${i} can only be used on routes that contain a unique "id"`
  ), f.route.id;
}
function eg() {
  return qf(
    "useRouteId"
    /* UseRouteId */
  );
}
function tg() {
  let i = C.useContext(Bf), r = P0(
    "useRouteError"
    /* UseRouteError */
  ), f = qf(
    "useRouteError"
    /* UseRouteError */
  );
  return i !== void 0 ? i : r.errors?.[f];
}
function lg() {
  let { router: i } = F0(
    "useNavigate"
    /* UseNavigateStable */
  ), r = qf(
    "useNavigate"
    /* UseNavigateStable */
  ), f = C.useRef(!1);
  return gm(() => {
    f.current = !0;
  }), C.useCallback(
    async (s, h = {}) => {
      it(f.current, ym), f.current && (typeof s == "number" ? i.navigate(s) : await i.navigate(s, { fromRouteId: r, ...h }));
    },
    [i, r]
  );
}
var kh = {};
function pm(i, r, f) {
  !r && !kh[i] && (kh[i] = !0, it(!1, f));
}
var Wh = {};
function Fh(i, r) {
  !i && !Wh[r] && (Wh[r] = !0, console.warn(r));
}
function ag(i) {
  let r = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: i.hasErrorBoundary || i.ErrorBoundary != null || i.errorElement != null
  };
  return i.Component && (i.element && it(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(r, {
    element: C.createElement(i.Component),
    Component: void 0
  })), i.HydrateFallback && (i.hydrateFallbackElement && it(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(r, {
    hydrateFallbackElement: C.createElement(i.HydrateFallback),
    HydrateFallback: void 0
  })), i.ErrorBoundary && (i.errorElement && it(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(r, {
    errorElement: C.createElement(i.ErrorBoundary),
    ErrorBoundary: void 0
  })), r;
}
var ng = [
  "HydrateFallback",
  "hydrateFallbackElement"
], ug = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((i, r) => {
      this.resolve = (f) => {
        this.status === "pending" && (this.status = "resolved", i(f));
      }, this.reject = (f) => {
        this.status === "pending" && (this.status = "rejected", r(f));
      };
    });
  }
};
function ig({
  router: i,
  flushSync: r
}) {
  let [f, o] = C.useState(i.state), [s, h] = C.useState(), [y, b] = C.useState({
    isTransitioning: !1
  }), [v, m] = C.useState(), [R, w] = C.useState(), [D, B] = C.useState(), H = C.useRef(/* @__PURE__ */ new Map()), Z = C.useCallback(
    (k, { deletedFetchers: he, flushSync: W, viewTransitionOpts: U }) => {
      k.fetchers.forEach((pe, me) => {
        pe.data !== void 0 && H.current.set(me, pe.data);
      }), he.forEach((pe) => H.current.delete(pe)), Fh(
        W === !1 || r != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let ye = i.window != null && i.window.document != null && typeof i.window.document.startViewTransition == "function";
      if (Fh(
        U == null || ye,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !U || !ye) {
        r && W ? r(() => o(k)) : C.startTransition(() => o(k));
        return;
      }
      if (r && W) {
        r(() => {
          R && (v && v.resolve(), R.skipTransition()), b({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: U.currentLocation,
            nextLocation: U.nextLocation
          });
        });
        let pe = i.window.document.startViewTransition(() => {
          r(() => o(k));
        });
        pe.finished.finally(() => {
          r(() => {
            m(void 0), w(void 0), h(void 0), b({ isTransitioning: !1 });
          });
        }), r(() => w(pe));
        return;
      }
      R ? (v && v.resolve(), R.skipTransition(), B({
        state: k,
        currentLocation: U.currentLocation,
        nextLocation: U.nextLocation
      })) : (h(k), b({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: U.currentLocation,
        nextLocation: U.nextLocation
      }));
    },
    [i.window, r, R, v]
  );
  C.useLayoutEffect(() => i.subscribe(Z), [i, Z]), C.useEffect(() => {
    y.isTransitioning && !y.flushSync && m(new ug());
  }, [y]), C.useEffect(() => {
    if (v && s && i.window) {
      let k = s, he = v.promise, W = i.window.document.startViewTransition(async () => {
        C.startTransition(() => o(k)), await he;
      });
      W.finished.finally(() => {
        m(void 0), w(void 0), h(void 0), b({ isTransitioning: !1 });
      }), w(W);
    }
  }, [s, v, i.window]), C.useEffect(() => {
    v && s && f.location.key === s.location.key && v.resolve();
  }, [v, R, f.location, s]), C.useEffect(() => {
    !y.isTransitioning && D && (h(D.state), b({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: D.currentLocation,
      nextLocation: D.nextLocation
    }), B(void 0));
  }, [y.isTransitioning, D]);
  let $ = C.useMemo(() => ({
    createHref: i.createHref,
    encodeLocation: i.encodeLocation,
    go: (k) => i.navigate(k),
    push: (k, he, W) => i.navigate(k, {
      state: he,
      preventScrollReset: W?.preventScrollReset
    }),
    replace: (k, he, W) => i.navigate(k, {
      replace: !0,
      state: he,
      preventScrollReset: W?.preventScrollReset
    })
  }), [i]), j = i.basename || "/", ue = C.useMemo(
    () => ({
      router: i,
      navigator: $,
      static: !1,
      basename: j
    }),
    [i, $, j]
  );
  return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(Ba.Provider, { value: ue }, /* @__PURE__ */ C.createElement(Cu.Provider, { value: f }, /* @__PURE__ */ C.createElement(vm.Provider, { value: H.current }, /* @__PURE__ */ C.createElement(Lf.Provider, { value: y }, /* @__PURE__ */ C.createElement(
    fg,
    {
      basename: j,
      location: f.location,
      navigationType: f.historyAction,
      navigator: $
    },
    /* @__PURE__ */ C.createElement(
      rg,
      {
        routes: i.routes,
        future: i.future,
        state: f
      }
    )
  ))))), null);
}
var rg = C.memo(cg);
function cg({
  routes: i,
  future: r,
  state: f
}) {
  return Z0(i, void 0, f, r);
}
function fg({
  basename: i = "/",
  children: r = null,
  location: f,
  navigationType: o = "POP",
  navigator: s,
  static: h = !1
}) {
  ze(
    !wu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let y = i.replace(/^\/*/, "/"), b = C.useMemo(
    () => ({
      basename: y,
      navigator: s,
      static: h,
      future: {}
    }),
    [y, s, h]
  );
  typeof f == "string" && (f = oa(f));
  let {
    pathname: v = "/",
    search: m = "",
    hash: R = "",
    state: w = null,
    key: D = "default"
  } = f, B = C.useMemo(() => {
    let H = Ft(v, y);
    return H == null ? null : {
      location: {
        pathname: H,
        search: m,
        hash: R,
        state: w,
        key: D
      },
      navigationType: o
    };
  }, [y, v, m, R, w, D, o]);
  return it(
    B != null,
    `<Router basename="${y}"> is not able to match the URL "${v}${m}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), B == null ? null : /* @__PURE__ */ C.createElement(vl.Provider, { value: b }, /* @__PURE__ */ C.createElement(ir.Provider, { children: r, value: B }));
}
var er = "get", tr = "application/x-www-form-urlencoded";
function rr(i) {
  return i != null && typeof i.tagName == "string";
}
function og(i) {
  return rr(i) && i.tagName.toLowerCase() === "button";
}
function sg(i) {
  return rr(i) && i.tagName.toLowerCase() === "form";
}
function dg(i) {
  return rr(i) && i.tagName.toLowerCase() === "input";
}
function hg(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function mg(i, r) {
  return i.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !hg(i);
}
var Pi = null;
function vg() {
  if (Pi === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Pi = !1;
    } catch {
      Pi = !0;
    }
  return Pi;
}
var yg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Af(i) {
  return i != null && !yg.has(i) ? (it(
    !1,
    `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tr}"`
  ), null) : i;
}
function gg(i, r) {
  let f, o, s, h, y;
  if (sg(i)) {
    let b = i.getAttribute("action");
    o = b ? Ft(b, r) : null, f = i.getAttribute("method") || er, s = Af(i.getAttribute("enctype")) || tr, h = new FormData(i);
  } else if (og(i) || dg(i) && (i.type === "submit" || i.type === "image")) {
    let b = i.form;
    if (b == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = i.getAttribute("formaction") || b.getAttribute("action");
    if (o = v ? Ft(v, r) : null, f = i.getAttribute("formmethod") || b.getAttribute("method") || er, s = Af(i.getAttribute("formenctype")) || Af(b.getAttribute("enctype")) || tr, h = new FormData(b, i), !vg()) {
      let { name: m, type: R, value: w } = i;
      if (R === "image") {
        let D = m ? `${m}.` : "";
        h.append(`${D}x`, "0"), h.append(`${D}y`, "0");
      } else m && h.append(m, w);
    }
  } else {
    if (rr(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    f = er, o = null, s = tr, y = i;
  }
  return h && s === "text/plain" && (y = h, h = void 0), { action: o, method: f.toLowerCase(), encType: s, formData: h, body: y };
}
function Yf(i, r) {
  if (i === !1 || i === null || typeof i > "u")
    throw new Error(r);
}
async function pg(i, r) {
  if (i.id in r)
    return r[i.id];
  try {
    let f = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      i.module
    );
    return r[i.id] = f, f;
  } catch (f) {
    return console.error(
      `Error loading route module \`${i.module}\`, reloading page...`
    ), console.error(f), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Sg(i) {
  return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
}
async function bg(i, r, f) {
  let o = await Promise.all(
    i.map(async (s) => {
      let h = r.routes[s.route.id];
      if (h) {
        let y = await pg(h, f);
        return y.links ? y.links() : [];
      }
      return [];
    })
  );
  return Dg(
    o.flat(1).filter(Sg).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function Ph(i, r, f, o, s, h) {
  let y = (v, m) => f[m] ? v.route.id !== f[m].route.id : !0, b = (v, m) => (
    // param change, /users/123 -> /users/456
    f[m].pathname !== v.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    f[m].route.path?.endsWith("*") && f[m].params["*"] !== v.params["*"]
  );
  return h === "assets" ? r.filter(
    (v, m) => y(v, m) || b(v, m)
  ) : h === "data" ? r.filter((v, m) => {
    let R = o.routes[v.route.id];
    if (!R || !R.hasLoader)
      return !1;
    if (y(v, m) || b(v, m))
      return !0;
    if (v.route.shouldRevalidate) {
      let w = v.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: f[0]?.params || {},
        nextUrl: new URL(i, window.origin),
        nextParams: v.params,
        defaultShouldRevalidate: !0
      });
      if (typeof w == "boolean")
        return w;
    }
    return !0;
  }) : [];
}
function Eg(i, r, { includeHydrateFallback: f } = {}) {
  return Rg(
    i.map((o) => {
      let s = r.routes[o.route.id];
      if (!s) return [];
      let h = [s.module];
      return s.clientActionModule && (h = h.concat(s.clientActionModule)), s.clientLoaderModule && (h = h.concat(s.clientLoaderModule)), f && s.hydrateFallbackModule && (h = h.concat(s.hydrateFallbackModule)), s.imports && (h = h.concat(s.imports)), h;
    }).flat(1)
  );
}
function Rg(i) {
  return [...new Set(i)];
}
function Tg(i) {
  let r = {}, f = Object.keys(i).sort();
  for (let o of f)
    r[o] = i[o];
  return r;
}
function Dg(i, r) {
  let f = /* @__PURE__ */ new Set();
  return new Set(r), i.reduce((o, s) => {
    let h = JSON.stringify(Tg(s));
    return f.has(h) || (f.add(h), o.push({ key: h, link: s })), o;
  }, []);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Mg = /* @__PURE__ */ new Set([100, 101, 204, 205]);
function Ag(i, r) {
  let f = typeof i == "string" ? new URL(
    i,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : i;
  return f.pathname === "/" ? f.pathname = "_root.data" : r && Ft(f.pathname, r) === "/" ? f.pathname = `${r.replace(/\/$/, "")}/_root.data` : f.pathname = `${f.pathname.replace(/\/$/, "")}.data`, f;
}
function Sm() {
  let i = C.useContext(Ba);
  return Yf(
    i,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), i;
}
function zg() {
  let i = C.useContext(Cu);
  return Yf(
    i,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), i;
}
var Gf = C.createContext(void 0);
Gf.displayName = "FrameworkContext";
function bm() {
  let i = C.useContext(Gf);
  return Yf(
    i,
    "You must render this element inside a <HydratedRouter> element"
  ), i;
}
function Og(i, r) {
  let f = C.useContext(Gf), [o, s] = C.useState(!1), [h, y] = C.useState(!1), { onFocus: b, onBlur: v, onMouseEnter: m, onMouseLeave: R, onTouchStart: w } = r, D = C.useRef(null);
  C.useEffect(() => {
    if (i === "render" && y(!0), i === "viewport") {
      let Z = (j) => {
        j.forEach((ue) => {
          y(ue.isIntersecting);
        });
      }, $ = new IntersectionObserver(Z, { threshold: 0.5 });
      return D.current && $.observe(D.current), () => {
        $.disconnect();
      };
    }
  }, [i]), C.useEffect(() => {
    if (o) {
      let Z = setTimeout(() => {
        y(!0);
      }, 100);
      return () => {
        clearTimeout(Z);
      };
    }
  }, [o]);
  let B = () => {
    s(!0);
  }, H = () => {
    s(!1), y(!1);
  };
  return f ? i !== "intent" ? [h, D, {}] : [
    h,
    D,
    {
      onFocus: zu(b, B),
      onBlur: zu(v, H),
      onMouseEnter: zu(m, B),
      onMouseLeave: zu(R, H),
      onTouchStart: zu(w, B)
    }
  ] : [!1, D, {}];
}
function zu(i, r) {
  return (f) => {
    i && i(f), f.defaultPrevented || r(f);
  };
}
function _g({
  page: i,
  ...r
}) {
  let { router: f } = Sm(), o = C.useMemo(
    () => ca(f.routes, i, f.basename),
    [f.routes, i, f.basename]
  );
  return o ? /* @__PURE__ */ C.createElement(Ug, { page: i, matches: o, ...r }) : null;
}
function xg(i) {
  let { manifest: r, routeModules: f } = bm(), [o, s] = C.useState([]);
  return C.useEffect(() => {
    let h = !1;
    return bg(i, r, f).then(
      (y) => {
        h || s(y);
      }
    ), () => {
      h = !0;
    };
  }, [i, r, f]), o;
}
function Ug({
  page: i,
  matches: r,
  ...f
}) {
  let o = sa(), { manifest: s, routeModules: h } = bm(), { basename: y } = Sm(), { loaderData: b, matches: v } = zg(), m = C.useMemo(
    () => Ph(
      i,
      r,
      v,
      s,
      o,
      "data"
    ),
    [i, r, v, s, o]
  ), R = C.useMemo(
    () => Ph(
      i,
      r,
      v,
      s,
      o,
      "assets"
    ),
    [i, r, v, s, o]
  ), w = C.useMemo(() => {
    if (i === o.pathname + o.search + o.hash)
      return [];
    let H = /* @__PURE__ */ new Set(), Z = !1;
    if (r.forEach((j) => {
      let ue = s.routes[j.route.id];
      !ue || !ue.hasLoader || (!m.some((k) => k.route.id === j.route.id) && j.route.id in b && h[j.route.id]?.shouldRevalidate || ue.hasClientLoader ? Z = !0 : H.add(j.route.id));
    }), H.size === 0)
      return [];
    let $ = Ag(i, y);
    return Z && H.size > 0 && $.searchParams.set(
      "_routes",
      r.filter((j) => H.has(j.route.id)).map((j) => j.route.id).join(",")
    ), [$.pathname + $.search];
  }, [
    y,
    b,
    o,
    s,
    m,
    r,
    i,
    h
  ]), D = C.useMemo(
    () => Eg(R, s),
    [R, s]
  ), B = xg(R);
  return /* @__PURE__ */ C.createElement(C.Fragment, null, w.map((H) => /* @__PURE__ */ C.createElement("link", { key: H, rel: "prefetch", as: "fetch", href: H, ...f })), D.map((H) => /* @__PURE__ */ C.createElement("link", { key: H, rel: "modulepreload", href: H, ...f })), B.map(({ key: H, link: Z }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ C.createElement("link", { key: H, ...Z })
  )));
}
function Ng(...i) {
  return (r) => {
    i.forEach((f) => {
      typeof f == "function" ? f(r) : f != null && (f.current = r);
    });
  };
}
var Em = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Em && (window.__reactRouterVersion = "7.6.1");
} catch {
}
function Cg(i, r) {
  return R0({
    basename: r?.basename,
    unstable_getContext: r?.unstable_getContext,
    future: r?.future,
    history: Qy({ window: r?.window }),
    hydrationData: wg(),
    routes: i,
    mapRouteProperties: ag,
    hydrationRouteProperties: ng,
    dataStrategy: r?.dataStrategy,
    patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
    window: r?.window
  }).initialize();
}
function wg() {
  let i = window?.__staticRouterHydrationData;
  return i && i.errors && (i = {
    ...i,
    errors: Hg(i.errors)
  }), i;
}
function Hg(i) {
  if (!i) return null;
  let r = Object.entries(i), f = {};
  for (let [o, s] of r)
    if (s && s.__type === "RouteErrorResponse")
      f[o] = new nr(
        s.status,
        s.statusText,
        s.data,
        s.internal === !0
      );
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let h = window[s.__subType];
        if (typeof h == "function")
          try {
            let y = new h(s.message);
            y.stack = "", f[o] = y;
          } catch {
          }
      }
      if (f[o] == null) {
        let h = new Error(s.message);
        h.stack = "", f[o] = h;
      }
    } else
      f[o] = s;
  return f;
}
var Rm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Tm = C.forwardRef(
  function({
    onClick: r,
    discover: f = "render",
    prefetch: o = "none",
    relative: s,
    reloadDocument: h,
    replace: y,
    state: b,
    target: v,
    to: m,
    preventScrollReset: R,
    viewTransition: w,
    ...D
  }, B) {
    let { basename: H } = C.useContext(vl), Z = typeof m == "string" && Rm.test(m), $, j = !1;
    if (typeof m == "string" && Z && ($ = m, Em))
      try {
        let me = new URL(window.location.href), Ze = m.startsWith("//") ? new URL(me.protocol + m) : new URL(m), tt = Ft(Ze.pathname, H);
        Ze.origin === me.origin && tt != null ? m = tt + Ze.search + Ze.hash : j = !0;
      } catch {
        it(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let ue = X0(m, { relative: s }), [k, he, W] = Og(
      o,
      D
    ), U = jg(m, {
      replace: y,
      state: b,
      target: v,
      preventScrollReset: R,
      relative: s,
      viewTransition: w
    });
    function ye(me) {
      r && r(me), me.defaultPrevented || U(me);
    }
    let pe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ C.createElement(
        "a",
        {
          ...D,
          ...W,
          href: $ || ue,
          onClick: j || h ? r : ye,
          ref: Ng(B, he),
          target: v,
          "data-discover": !Z && f === "render" ? "true" : void 0
        }
      )
    );
    return k && !Z ? /* @__PURE__ */ C.createElement(C.Fragment, null, pe, /* @__PURE__ */ C.createElement(_g, { page: ue })) : pe;
  }
);
Tm.displayName = "Link";
var Nu = C.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: f = !1,
    className: o = "",
    end: s = !1,
    style: h,
    to: y,
    viewTransition: b,
    children: v,
    ...m
  }, R) {
    let w = Hu(y, { relative: m.relative }), D = sa(), B = C.useContext(Cu), { navigator: H, basename: Z } = C.useContext(vl), $ = B != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Qg(w) && b === !0, j = H.encodeLocation ? H.encodeLocation(w).pathname : w.pathname, ue = D.pathname, k = B && B.navigation && B.navigation.location ? B.navigation.location.pathname : null;
    f || (ue = ue.toLowerCase(), k = k ? k.toLowerCase() : null, j = j.toLowerCase()), k && Z && (k = Ft(k, Z) || k);
    const he = j !== "/" && j.endsWith("/") ? j.length - 1 : j.length;
    let W = ue === j || !s && ue.startsWith(j) && ue.charAt(he) === "/", U = k != null && (k === j || !s && k.startsWith(j) && k.charAt(j.length) === "/"), ye = {
      isActive: W,
      isPending: U,
      isTransitioning: $
    }, pe = W ? r : void 0, me;
    typeof o == "function" ? me = o(ye) : me = [
      o,
      W ? "active" : null,
      U ? "pending" : null,
      $ ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Ze = typeof h == "function" ? h(ye) : h;
    return /* @__PURE__ */ C.createElement(
      Tm,
      {
        ...m,
        "aria-current": pe,
        className: me,
        ref: R,
        style: Ze,
        to: y,
        viewTransition: b
      },
      typeof v == "function" ? v(ye) : v
    );
  }
);
Nu.displayName = "NavLink";
var Lg = C.forwardRef(
  ({
    discover: i = "render",
    fetcherKey: r,
    navigate: f,
    reloadDocument: o,
    replace: s,
    state: h,
    method: y = er,
    action: b,
    onSubmit: v,
    relative: m,
    preventScrollReset: R,
    viewTransition: w,
    ...D
  }, B) => {
    let H = Gg(), Z = Xg(b, { relative: m }), $ = y.toLowerCase() === "get" ? "get" : "post", j = typeof b == "string" && Rm.test(b), ue = (k) => {
      if (v && v(k), k.defaultPrevented) return;
      k.preventDefault();
      let he = k.nativeEvent.submitter, W = he?.getAttribute("formmethod") || y;
      H(he || k.currentTarget, {
        fetcherKey: r,
        method: W,
        navigate: f,
        replace: s,
        state: h,
        relative: m,
        preventScrollReset: R,
        viewTransition: w
      });
    };
    return /* @__PURE__ */ C.createElement(
      "form",
      {
        ref: B,
        method: $,
        action: Z,
        onSubmit: o ? v : ue,
        ...D,
        "data-discover": !j && i === "render" ? "true" : void 0
      }
    );
  }
);
Lg.displayName = "Form";
function Bg(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dm(i) {
  let r = C.useContext(Ba);
  return ze(r, Bg(i)), r;
}
function jg(i, {
  target: r,
  replace: f,
  state: o,
  preventScrollReset: s,
  relative: h,
  viewTransition: y
} = {}) {
  let b = Q0(), v = sa(), m = Hu(i, { relative: h });
  return C.useCallback(
    (R) => {
      if (mg(R, r)) {
        R.preventDefault();
        let w = f !== void 0 ? f : fa(v) === fa(m);
        b(i, {
          replace: w,
          state: o,
          preventScrollReset: s,
          relative: h,
          viewTransition: y
        });
      }
    },
    [
      v,
      b,
      m,
      f,
      o,
      r,
      i,
      s,
      h,
      y
    ]
  );
}
var qg = 0, Yg = () => `__${String(++qg)}__`;
function Gg() {
  let { router: i } = Dm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = C.useContext(vl), f = eg();
  return C.useCallback(
    async (o, s = {}) => {
      let { action: h, method: y, encType: b, formData: v, body: m } = gg(
        o,
        r
      );
      if (s.navigate === !1) {
        let R = s.fetcherKey || Yg();
        await i.fetch(R, f, s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: v,
          body: m,
          formMethod: s.method || y,
          formEncType: s.encType || b,
          flushSync: s.flushSync
        });
      } else
        await i.navigate(s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: v,
          body: m,
          formMethod: s.method || y,
          formEncType: s.encType || b,
          replace: s.replace,
          state: s.state,
          fromRouteId: f,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [i, r, f]
  );
}
function Xg(i, { relative: r } = {}) {
  let { basename: f } = C.useContext(vl), o = C.useContext(Cl);
  ze(o, "useFormAction must be used inside a RouteContext");
  let [s] = o.matches.slice(-1), h = { ...Hu(i || ".", { relative: r }) }, y = sa();
  if (i == null) {
    h.search = y.search;
    let b = new URLSearchParams(h.search), v = b.getAll("index");
    if (v.some((R) => R === "")) {
      b.delete("index"), v.filter((w) => w).forEach((w) => b.append("index", w));
      let R = b.toString();
      h.search = R ? `?${R}` : "";
    }
  }
  return (!i || i === ".") && s.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), f !== "/" && (h.pathname = h.pathname === "/" ? f : ml([f, h.pathname])), fa(h);
}
function Qg(i, r = {}) {
  let f = C.useContext(Lf);
  ze(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Dm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = Hu(i, { relative: r.relative });
  if (!f.isTransitioning)
    return !1;
  let h = Ft(f.currentLocation.pathname, o) || f.currentLocation.pathname, y = Ft(f.nextLocation.pathname, o) || f.nextLocation.pathname;
  return ar(s.pathname, y) != null || ar(s.pathname, h) != null;
}
[
  ...Mg
];
const Ih = (i) => {
  console.log("Home : ", i);
  const [r, f] = C.useState();
  return C.useEffect(() => {
    f(i.data);
  }), /* @__PURE__ */ Te.jsxs(Te.Fragment, { children: [
    /* @__PURE__ */ Te.jsxs("h1", { children: [
      "Home Page : ",
      r?.name
    ] }),
    /* @__PURE__ */ Te.jsx(Nu, { to: "/login", state: {
      loginName: "kumar",
      password: "password"
    }, children: "Login" }),
    "    ",
    /* @__PURE__ */ Te.jsx(Nu, { to: "/dashboard", state: {
      name: r?.name
    }, children: "DashBoard" })
  ] });
}, Vg = (i) => {
  console.log("Login prop - 1: ", i);
  const [r, f] = C.useState(), [o, s] = C.useState(""), [h, y] = C.useState(""), { name: b, info: v } = i.data, R = sa().state;
  C.useEffect(() => {
    console.log("Login prop - 2: ", i.data), console.info("State Location vlaues : ", R), f(i.data);
  });
  const w = (H) => {
    s(H.target.value);
  }, D = (H) => {
    y(H.target.value);
  }, B = () => {
    o && h ? r.onSuccess({ page: "Login", status: "Success", message: "Login successfully by " + o }) : r.onError({ page: "Login", status: "Error", message: "Error while login by " + o });
  };
  return /* @__PURE__ */ Te.jsxs(Te.Fragment, { children: [
    /* @__PURE__ */ Te.jsxs("h1", { children: [
      "Login Page : ",
      v.userId
    ] }),
    /* @__PURE__ */ Te.jsxs("div", { children: [
      /* @__PURE__ */ Te.jsx("input", { type: "text", placeholder: "UserName", value: o, onChange: w }),
      " ",
      /* @__PURE__ */ Te.jsx("br", {}),
      /* @__PURE__ */ Te.jsx("input", { type: "password", placeholder: "Password", value: h, onChange: D }),
      " ",
      /* @__PURE__ */ Te.jsx("br", {}),
      /* @__PURE__ */ Te.jsx("button", { type: "button", onClick: B, children: "Login" }),
      /* @__PURE__ */ Te.jsx("br", {})
    ] }),
    /* @__PURE__ */ Te.jsx(Nu, { to: "/", children: "Go Back" })
  ] });
}, Zg = (i) => {
  const [r, f] = C.useState(), { container: o, name: s, link: h, token: y, userid: b, test: v, info: m } = i.data;
  return C.useEffect(() => {
    console.log("DashBoard prop : ", i), f(i.data), i.data.onSuccess({ page: "DashBoard", status: "Success", message: "OnEffect" });
  }), /* @__PURE__ */ Te.jsxs(Te.Fragment, { children: [
    /* @__PURE__ */ Te.jsxs("h1", { children: [
      "DashBoard Page : ",
      m.userId
    ] }),
    /* @__PURE__ */ Te.jsx("br", {}),
    /* @__PURE__ */ Te.jsx("br", {}),
    /* @__PURE__ */ Te.jsx(Nu, { to: "/", children: "Go Back" })
  ] });
}, Kg = (i) => {
  console.log("Hello App : ", i);
  const r = Cg([
    {
      path: "/",
      element: /* @__PURE__ */ Te.jsx(C.Suspense, { children: /* @__PURE__ */ Te.jsx(Ih, { data: i }) })
    },
    {
      path: "/home",
      element: /* @__PURE__ */ Te.jsx(C.Suspense, { children: /* @__PURE__ */ Te.jsx(Ih, { data: i }) })
    },
    {
      path: "/login",
      element: /* @__PURE__ */ Te.jsx(C.Suspense, { children: /* @__PURE__ */ Te.jsx(Vg, { data: i }) })
    },
    {
      path: "/dashboard",
      element: /* @__PURE__ */ Te.jsx(C.Suspense, { children: /* @__PURE__ */ Te.jsx(Zg, { data: i }) })
    }
  ]);
  return /* @__PURE__ */ Te.jsx(Te.Fragment, { children: /* @__PURE__ */ Te.jsxs("div", { className: "testClass", children: [
    /* @__PURE__ */ Te.jsx("div", { children: "Page Router " }),
    /* @__PURE__ */ Te.jsx("h1", { children: "Testing Page Router.." }),
    /* @__PURE__ */ Te.jsx(ig, { router: r })
  ] }) });
};
qy.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Te.jsx(C.StrictMode, { children: /* @__PURE__ */ Te.jsx(Kg, {}) })
);
