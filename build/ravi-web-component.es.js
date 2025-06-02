function Bv(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Ef = { exports: {} }, ge = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function jv() {
  if (Ah) return ge;
  Ah = 1;
  var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), v = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), N = Symbol.iterator;
  function D(p) {
    return p === null || typeof p != "object" ? null : (p = N && p[N] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var L = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _ = Object.assign, Q = {};
  function Z(p, q, $) {
    this.props = p, this.context = q, this.refs = Q, this.updater = $ || L;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(p, q) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, q, "setState");
  }, Z.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function B() {
  }
  B.prototype = Z.prototype;
  function ee(p, q, $) {
    this.props = p, this.context = q, this.refs = Q, this.updater = $ || L;
  }
  var k = ee.prototype = new B();
  k.constructor = ee, _(k, Z.prototype), k.isPureReactComponent = !0;
  var he = Array.isArray, W = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function ve(p, q, $, J, ae, Te) {
    return $ = Te.ref, {
      $$typeof: u,
      type: p,
      key: q,
      ref: $ !== void 0 ? $ : null,
      props: Te
    };
  }
  function pe(p, q) {
    return ve(
      p.type,
      q,
      void 0,
      void 0,
      void 0,
      p.props
    );
  }
  function me(p) {
    return typeof p == "object" && p !== null && p.$$typeof === u;
  }
  function Ze(p) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function($) {
      return q[$];
    });
  }
  var tt = /\/+/g;
  function Je(p, q) {
    return typeof p == "object" && p !== null && p.key != null ? Ze("" + p.key) : q.toString(36);
  }
  function Ue() {
  }
  function Ne(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(Ue, Ue) : (p.status = "pending", p.then(
          function(q) {
            p.status === "pending" && (p.status = "fulfilled", p.value = q);
          },
          function(q) {
            p.status === "pending" && (p.status = "rejected", p.reason = q);
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
  function Le(p, q, $, J, ae) {
    var Te = typeof p;
    (Te === "undefined" || Te === "boolean") && (p = null);
    var ce = !1;
    if (p === null) ce = !0;
    else
      switch (Te) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case u:
            case r:
              ce = !0;
              break;
            case R:
              return ce = p._init, Le(
                ce(p._payload),
                q,
                $,
                J,
                ae
              );
          }
      }
    if (ce)
      return ae = ae(p), ce = J === "" ? "." + Je(p, 0) : J, he(ae) ? ($ = "", ce != null && ($ = ce.replace(tt, "$&/") + "/"), Le(ae, q, $, "", function(il) {
        return il;
      })) : ae != null && (me(ae) && (ae = pe(
        ae,
        $ + (ae.key == null || p && p.key === ae.key ? "" : ("" + ae.key).replace(
          tt,
          "$&/"
        ) + "/") + ce
      )), q.push(ae)), 1;
    ce = 0;
    var St = J === "" ? "." : J + ":";
    if (he(p))
      for (var Qe = 0; Qe < p.length; Qe++)
        J = p[Qe], Te = St + Je(J, Qe), ce += Le(
          J,
          q,
          $,
          Te,
          ae
        );
    else if (Qe = D(p), typeof Qe == "function")
      for (p = Qe.call(p), Qe = 0; !(J = p.next()).done; )
        J = J.value, Te = St + Je(J, Qe++), ce += Le(
          J,
          q,
          $,
          Te,
          ae
        );
    else if (Te === "object") {
      if (typeof p.then == "function")
        return Le(
          Ne(p),
          q,
          $,
          J,
          ae
        );
      throw q = String(p), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function x(p, q, $) {
    if (p == null) return p;
    var J = [], ae = 0;
    return Le(p, J, "", "", function(Te) {
      return q.call($, Te, ae++);
    }), J;
  }
  function K(p) {
    if (p._status === -1) {
      var q = p._result;
      q = q(), q.then(
        function($) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = $);
        },
        function($) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = $);
        }
      ), p._status === -1 && (p._status = 0, p._result = q);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var P = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  };
  function be() {
  }
  return ge.Children = {
    map: x,
    forEach: function(p, q, $) {
      x(
        p,
        function() {
          q.apply(this, arguments);
        },
        $
      );
    },
    count: function(p) {
      var q = 0;
      return x(p, function() {
        q++;
      }), q;
    },
    toArray: function(p) {
      return x(p, function(q) {
        return q;
      }) || [];
    },
    only: function(p) {
      if (!me(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  }, ge.Component = Z, ge.Fragment = c, ge.Profiler = s, ge.PureComponent = ee, ge.StrictMode = o, ge.Suspense = y, ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, ge.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return W.H.useMemoCache(p);
    }
  }, ge.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, ge.cloneElement = function(p, q, $) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var J = _({}, p.props), ae = p.key, Te = void 0;
    if (q != null)
      for (ce in q.ref !== void 0 && (Te = void 0), q.key !== void 0 && (ae = "" + q.key), q)
        !w.call(q, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && q.ref === void 0 || (J[ce] = q[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) J.children = $;
    else if (1 < ce) {
      for (var St = Array(ce), Qe = 0; Qe < ce; Qe++)
        St[Qe] = arguments[Qe + 2];
      J.children = St;
    }
    return ve(p.type, ae, void 0, void 0, Te, J);
  }, ge.createContext = function(p) {
    return p = {
      $$typeof: v,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: h,
      _context: p
    }, p;
  }, ge.createElement = function(p, q, $) {
    var J, ae = {}, Te = null;
    if (q != null)
      for (J in q.key !== void 0 && (Te = "" + q.key), q)
        w.call(q, J) && J !== "key" && J !== "__self" && J !== "__source" && (ae[J] = q[J]);
    var ce = arguments.length - 2;
    if (ce === 1) ae.children = $;
    else if (1 < ce) {
      for (var St = Array(ce), Qe = 0; Qe < ce; Qe++)
        St[Qe] = arguments[Qe + 2];
      ae.children = St;
    }
    if (p && p.defaultProps)
      for (J in ce = p.defaultProps, ce)
        ae[J] === void 0 && (ae[J] = ce[J]);
    return ve(p, Te, void 0, void 0, null, ae);
  }, ge.createRef = function() {
    return { current: null };
  }, ge.forwardRef = function(p) {
    return { $$typeof: b, render: p };
  }, ge.isValidElement = me, ge.lazy = function(p) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: p },
      _init: K
    };
  }, ge.memo = function(p, q) {
    return {
      $$typeof: m,
      type: p,
      compare: q === void 0 ? null : q
    };
  }, ge.startTransition = function(p) {
    var q = W.T, $ = {};
    W.T = $;
    try {
      var J = p(), ae = W.S;
      ae !== null && ae($, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(be, P);
    } catch (Te) {
      P(Te);
    } finally {
      W.T = q;
    }
  }, ge.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, ge.use = function(p) {
    return W.H.use(p);
  }, ge.useActionState = function(p, q, $) {
    return W.H.useActionState(p, q, $);
  }, ge.useCallback = function(p, q) {
    return W.H.useCallback(p, q);
  }, ge.useContext = function(p) {
    return W.H.useContext(p);
  }, ge.useDebugValue = function() {
  }, ge.useDeferredValue = function(p, q) {
    return W.H.useDeferredValue(p, q);
  }, ge.useEffect = function(p, q, $) {
    var J = W.H;
    if (typeof $ == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return J.useEffect(p, q);
  }, ge.useId = function() {
    return W.H.useId();
  }, ge.useImperativeHandle = function(p, q, $) {
    return W.H.useImperativeHandle(p, q, $);
  }, ge.useInsertionEffect = function(p, q) {
    return W.H.useInsertionEffect(p, q);
  }, ge.useLayoutEffect = function(p, q) {
    return W.H.useLayoutEffect(p, q);
  }, ge.useMemo = function(p, q) {
    return W.H.useMemo(p, q);
  }, ge.useOptimistic = function(p, q) {
    return W.H.useOptimistic(p, q);
  }, ge.useReducer = function(p, q, $) {
    return W.H.useReducer(p, q, $);
  }, ge.useRef = function(p) {
    return W.H.useRef(p);
  }, ge.useState = function(p) {
    return W.H.useState(p);
  }, ge.useSyncExternalStore = function(p, q, $) {
    return W.H.useSyncExternalStore(
      p,
      q,
      $
    );
  }, ge.useTransition = function() {
    return W.H.useTransition();
  }, ge.version = "19.1.0", ge;
}
var zh;
function Bf() {
  return zh || (zh = 1, Ef.exports = jv()), Ef.exports;
}
var H = Bf();
const im = /* @__PURE__ */ Bv(H);
var Rf = { exports: {} }, Du = {}, Tf = { exports: {} }, Df = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oh;
function Yv() {
  return Oh || (Oh = 1, function(u) {
    function r(x, K) {
      var P = x.length;
      x.push(K);
      e: for (; 0 < P; ) {
        var be = P - 1 >>> 1, p = x[be];
        if (0 < s(p, K))
          x[be] = K, x[P] = p, P = be;
        else break e;
      }
    }
    function c(x) {
      return x.length === 0 ? null : x[0];
    }
    function o(x) {
      if (x.length === 0) return null;
      var K = x[0], P = x.pop();
      if (P !== K) {
        x[0] = P;
        e: for (var be = 0, p = x.length, q = p >>> 1; be < q; ) {
          var $ = 2 * (be + 1) - 1, J = x[$], ae = $ + 1, Te = x[ae];
          if (0 > s(J, P))
            ae < p && 0 > s(Te, J) ? (x[be] = Te, x[ae] = P, be = ae) : (x[be] = J, x[$] = P, be = $);
          else if (ae < p && 0 > s(Te, P))
            x[be] = Te, x[ae] = P, be = ae;
          else break e;
        }
      }
      return K;
    }
    function s(x, K) {
      var P = x.sortIndex - K.sortIndex;
      return P !== 0 ? P : x.id - K.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var v = Date, b = v.now();
      u.unstable_now = function() {
        return v.now() - b;
      };
    }
    var y = [], m = [], R = 1, N = null, D = 3, L = !1, _ = !1, Q = !1, Z = !1, B = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function he(x) {
      for (var K = c(m); K !== null; ) {
        if (K.callback === null) o(m);
        else if (K.startTime <= x)
          o(m), K.sortIndex = K.expirationTime, r(y, K);
        else break;
        K = c(m);
      }
    }
    function W(x) {
      if (Q = !1, he(x), !_)
        if (c(y) !== null)
          _ = !0, w || (w = !0, Je());
        else {
          var K = c(m);
          K !== null && Le(W, K.startTime - x);
        }
    }
    var w = !1, ve = -1, pe = 5, me = -1;
    function Ze() {
      return Z ? !0 : !(u.unstable_now() - me < pe);
    }
    function tt() {
      if (Z = !1, w) {
        var x = u.unstable_now();
        me = x;
        var K = !0;
        try {
          e: {
            _ = !1, Q && (Q = !1, ee(ve), ve = -1), L = !0;
            var P = D;
            try {
              t: {
                for (he(x), N = c(y); N !== null && !(N.expirationTime > x && Ze()); ) {
                  var be = N.callback;
                  if (typeof be == "function") {
                    N.callback = null, D = N.priorityLevel;
                    var p = be(
                      N.expirationTime <= x
                    );
                    if (x = u.unstable_now(), typeof p == "function") {
                      N.callback = p, he(x), K = !0;
                      break t;
                    }
                    N === c(y) && o(y), he(x);
                  } else o(y);
                  N = c(y);
                }
                if (N !== null) K = !0;
                else {
                  var q = c(m);
                  q !== null && Le(
                    W,
                    q.startTime - x
                  ), K = !1;
                }
              }
              break e;
            } finally {
              N = null, D = P, L = !1;
            }
            K = void 0;
          }
        } finally {
          K ? Je() : w = !1;
        }
      }
    }
    var Je;
    if (typeof k == "function")
      Je = function() {
        k(tt);
      };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), Ne = Ue.port2;
      Ue.port1.onmessage = tt, Je = function() {
        Ne.postMessage(null);
      };
    } else
      Je = function() {
        B(tt, 0);
      };
    function Le(x, K) {
      ve = B(function() {
        x(u.unstable_now());
      }, K);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, u.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : pe = 0 < x ? Math.floor(1e3 / x) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, u.unstable_next = function(x) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = D;
      }
      var P = D;
      D = K;
      try {
        return x();
      } finally {
        D = P;
      }
    }, u.unstable_requestPaint = function() {
      Z = !0;
    }, u.unstable_runWithPriority = function(x, K) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var P = D;
      D = x;
      try {
        return K();
      } finally {
        D = P;
      }
    }, u.unstable_scheduleCallback = function(x, K, P) {
      var be = u.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? be + P : be) : P = be, x) {
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
      return p = P + p, x = {
        id: R++,
        callback: K,
        priorityLevel: x,
        startTime: P,
        expirationTime: p,
        sortIndex: -1
      }, P > be ? (x.sortIndex = P, r(m, x), c(y) === null && x === c(m) && (Q ? (ee(ve), ve = -1) : Q = !0, Le(W, P - be))) : (x.sortIndex = p, r(y, x), _ || L || (_ = !0, w || (w = !0, Je()))), x;
    }, u.unstable_shouldYield = Ze, u.unstable_wrapCallback = function(x) {
      var K = D;
      return function() {
        var P = D;
        D = K;
        try {
          return x.apply(this, arguments);
        } finally {
          D = P;
        }
      };
    };
  }(Df)), Df;
}
var _h;
function qv() {
  return _h || (_h = 1, Tf.exports = Yv()), Tf.exports;
}
var Mf = { exports: {} }, bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xh;
function Gv() {
  if (xh) return bt;
  xh = 1;
  var u = Bf();
  function r(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        m += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + y + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var o = {
    d: {
      f: c,
      r: function() {
        throw Error(r(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function h(y, m, R) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: N == null ? null : "" + N,
      children: y,
      containerInfo: m,
      implementation: R
    };
  }
  var v = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(y, m) {
    if (y === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, bt.createPortal = function(y, m) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(r(299));
    return h(y, m, null, R);
  }, bt.flushSync = function(y) {
    var m = v.T, R = o.p;
    try {
      if (v.T = null, o.p = 2, y) return y();
    } finally {
      v.T = m, o.p = R, o.d.f();
    }
  }, bt.preconnect = function(y, m) {
    typeof y == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(y, m));
  }, bt.prefetchDNS = function(y) {
    typeof y == "string" && o.d.D(y);
  }, bt.preinit = function(y, m) {
    if (typeof y == "string" && m && typeof m.as == "string") {
      var R = m.as, N = b(R, m.crossOrigin), D = typeof m.integrity == "string" ? m.integrity : void 0, L = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      R === "style" ? o.d.S(
        y,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: N,
          integrity: D,
          fetchPriority: L
        }
      ) : R === "script" && o.d.X(y, {
        crossOrigin: N,
        integrity: D,
        fetchPriority: L,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, bt.preinitModule = function(y, m) {
    if (typeof y == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var R = b(
            m.as,
            m.crossOrigin
          );
          o.d.M(y, {
            crossOrigin: R,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && o.d.M(y);
  }, bt.preload = function(y, m) {
    if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var R = m.as, N = b(R, m.crossOrigin);
      o.d.L(y, R, {
        crossOrigin: N,
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
  }, bt.preloadModule = function(y, m) {
    if (typeof y == "string")
      if (m) {
        var R = b(m.as, m.crossOrigin);
        o.d.m(y, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: R,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else o.d.m(y);
  }, bt.requestFormReset = function(y) {
    o.d.r(y);
  }, bt.unstable_batchedUpdates = function(y, m) {
    return y(m);
  }, bt.useFormState = function(y, m, R) {
    return v.H.useFormState(y, m, R);
  }, bt.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, bt.version = "19.1.0", bt;
}
var Uh;
function Xv() {
  if (Uh) return Mf.exports;
  Uh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), Mf.exports = Gv(), Mf.exports;
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
var wh;
function Qv() {
  if (wh) return Du;
  wh = 1;
  var u = qv(), r = Bf(), c = Xv();
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
  function v(e) {
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
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return b(n), e;
          if (i === a) return b(n), t;
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var f = !1, d = n.child; d; ) {
          if (d === l) {
            f = !0, l = n, a = i;
            break;
          }
          if (d === a) {
            f = !0, a = n, l = i;
            break;
          }
          d = d.sibling;
        }
        if (!f) {
          for (d = i.child; d; ) {
            if (d === l) {
              f = !0, l = i, a = n;
              break;
            }
            if (d === a) {
              f = !0, a = i, l = n;
              break;
            }
            d = d.sibling;
          }
          if (!f) throw Error(o(189));
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
  var R = Object.assign, N = Symbol.for("react.element"), D = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), ee = Symbol.for("react.consumer"), k = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), me = Symbol.for("react.activity"), Ze = Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
  function Je(e) {
    return e === null || typeof e != "object" ? null : (e = tt && e[tt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ue = Symbol.for("react.client.reference");
  function Ne(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ue ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _:
        return "Fragment";
      case Z:
        return "Profiler";
      case Q:
        return "StrictMode";
      case W:
        return "Suspense";
      case w:
        return "SuspenseList";
      case me:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case L:
          return "Portal";
        case k:
          return (e.displayName || "Context") + ".Provider";
        case ee:
          return (e._context.displayName || "Context") + ".Consumer";
        case he:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ve:
          return t = e.displayName || null, t !== null ? t : Ne(e.type) || "Memo";
        case pe:
          t = e._payload, e = e._init;
          try {
            return Ne(e(t));
          } catch {
          }
      }
    return null;
  }
  var Le = Array.isArray, x = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, be = [], p = -1;
  function q(e) {
    return { current: e };
  }
  function $(e) {
    0 > p || (e.current = be[p], be[p] = null, p--);
  }
  function J(e, t) {
    p++, be[p] = e.current, e.current = t;
  }
  var ae = q(null), Te = q(null), ce = q(null), St = q(null);
  function Qe(e, t) {
    switch (J(ce, t), J(Te, e), J(ae, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? eh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = eh(t), e = th(t, e);
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
    $(ae), J(ae, e);
  }
  function il() {
    $(ae), $(Te), $(ce);
  }
  function rt(e) {
    e.memoizedState !== null && J(St, e);
    var t = ae.current, l = th(t, e.type);
    t !== l && (J(Te, e), J(ae, l));
  }
  function Pt(e) {
    Te.current === e && ($(ae), $(Te)), St.current === e && ($(St), bu._currentValue = P);
  }
  var qa = Object.prototype.hasOwnProperty, An = u.unstable_scheduleCallback, It = u.unstable_cancelCallback, hr = u.unstable_shouldYield, mr = u.unstable_requestPaint, xt = u.unstable_now, yr = u.unstable_getCurrentPriorityLevel, ju = u.unstable_ImmediatePriority, Yu = u.unstable_UserBlockingPriority, Ga = u.unstable_NormalPriority, vl = u.unstable_LowPriority, Hl = u.unstable_IdlePriority, qu = u.log, zn = u.unstable_setDisableYieldValue, Tt = null, We = null;
  function el(e) {
    if (typeof qu == "function" && zn(e), We && typeof We.setStrictMode == "function")
      try {
        We.setStrictMode(Tt, e);
      } catch {
      }
  }
  var ht = Math.clz32 ? Math.clz32 : Gu, vr = Math.log, rl = Math.LN2;
  function Gu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vr(e) / rl | 0) | 0;
  }
  var ha = 256, ma = 4194304;
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
  function ya(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~i, a !== 0 ? n = gl(a) : (f &= d, f !== 0 ? n = gl(f) : l || (l = d & ~e, l !== 0 && (n = gl(l))))) : (d = a & ~i, d !== 0 ? n = gl(d) : f !== 0 ? n = gl(f) : l || (l = a & ~e, l !== 0 && (n = gl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function cl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Xu(e, t) {
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
  function Xa() {
    var e = ha;
    return ha <<= 1, (ha & 4194048) === 0 && (ha = 256), e;
  }
  function Qu() {
    var e = ma;
    return ma <<= 1, (ma & 62914560) === 0 && (ma = 4194304), e;
  }
  function Qa(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function va(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Vu(e, t, l, a, n, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var d = e.entanglements, g = e.expirationTimes, z = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var j = 31 - ht(l), G = 1 << j;
      d[j] = 0, g[j] = -1;
      var O = z[j];
      if (O !== null)
        for (z[j] = null, j = 0; j < O.length; j++) {
          var U = O[j];
          U !== null && (U.lane &= -536870913);
        }
      l &= ~G;
    }
    a !== 0 && ga(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function ga(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - ht(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 4194090;
  }
  function pa(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - ht(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function On(e) {
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
  function _n(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function S() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Sh(e.type));
  }
  function M(e, t) {
    var l = K.p;
    try {
      return K.p = e, t();
    } finally {
      K.p = l;
    }
  }
  var C = Math.random().toString(36).slice(2), X = "__reactFiber$" + C, V = "__reactProps$" + C, te = "__reactContainer$" + C, ie = "__reactEvents$" + C, F = "__reactListeners$" + C, ue = "__reactHandles$" + C, le = "__reactResources$" + C, oe = "__reactMarker$" + C;
  function se(e) {
    delete e[X], delete e[V], delete e[ie], delete e[F], delete e[ue];
  }
  function ye(e) {
    var t = e[X];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[te] || l[X]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = uh(e); e !== null; ) {
            if (l = e[X]) return l;
            e = uh(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function xe(e) {
    if (e = e[X] || e[te]) {
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
    var t = e[le];
    return t || (t = e[le] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function we(e) {
    e[oe] = !0;
  }
  var ze = /* @__PURE__ */ new Set(), Ll = {};
  function Et(e, t) {
    qt(e, t), qt(e + "Capture", t);
  }
  function qt(e, t) {
    for (Ll[e] = t, e = 0; e < t.length; e++)
      ze.add(t[e]);
  }
  var Dt = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Bl = {}, jl = {};
  function xn(e) {
    return qa.call(jl, e) ? !0 : qa.call(Bl, e) ? !1 : Dt.test(e) ? jl[e] = !0 : (Bl[e] = !0, !1);
  }
  function Gt(e, t, l) {
    if (xn(t))
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
  var ba = !1;
  function $e(e, t) {
    if (!e || ba) return "";
    ba = !0;
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
                } catch (U) {
                  var O = U;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (U) {
                  O = U;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                O = U;
              }
              (G = e()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (U) {
            if (U && O && typeof U.stack == "string")
              return [U.stack, O.stack];
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
      var i = a.DetermineComponentFrameRoot(), f = i[0], d = i[1];
      if (f && d) {
        var g = f.split(`
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
                  var j = `
` + g[a].replace(" at new ", " at ");
                  return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ba = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? ll(l) : "";
  }
  function Yl(e) {
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
  function Un(e) {
    try {
      var t = "";
      do
        t += Yl(e), e = e.return;
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
  function $f(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function wm(e) {
    var t = $f(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, i = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(f) {
          a = "" + f, i.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Zu(e) {
    e._valueTracker || (e._valueTracker = wm(e));
  }
  function kf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = $f(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Ku(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Cm = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(
      Cm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function gr(e, t, l, a, n, i, f, d) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Mt(t)) : e.value !== "" + Mt(t) && (e.value = "" + Mt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? pr(e, f, Mt(t)) : l != null ? pr(e, f, Mt(l)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Mt(d) : e.removeAttribute("name");
  }
  function Wf(e, t, l, a, n, i, f, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null))
        return;
      l = l != null ? "" + Mt(l) : "", t = t != null ? "" + Mt(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f);
  }
  function pr(e, t, l) {
    t === "number" && Ku(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Va(e, t, l, a) {
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
  function Ff(e, t, l) {
    if (t != null && (t = "" + Mt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Mt(l) : "";
  }
  function Pf(e, t, l, a) {
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
  function Za(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Nm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function If(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Nm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function eo(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && If(e, n, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && If(e, i, t[i]);
  }
  function br(e) {
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
  var Hm = /* @__PURE__ */ new Map([
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
  ]), Lm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ju(e) {
    return Lm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Sr = null;
  function Er(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ka = null, Ja = null;
  function to(e) {
    var t = xe(e);
    if (t && (e = t.stateNode)) {
      var l = e[V] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (gr(
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
                var n = a[V] || null;
                if (!n) throw Error(o(90));
                gr(
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
              a = l[t], a.form === e.form && kf(a);
          }
          break e;
        case "textarea":
          Ff(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Va(e, !!l.multiple, t, !1);
      }
    }
  }
  var Rr = !1;
  function lo(e, t, l) {
    if (Rr) return e(t, l);
    Rr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Rr = !1, (Ka !== null || Ja !== null) && (wi(), Ka && (t = Ka, e = Ja, Ja = Ka = null, to(t), e)))
        for (t = 0; t < e.length; t++) to(e[t]);
    }
  }
  function wn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[V] || null;
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
  var bl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Tr = !1;
  if (bl)
    try {
      var Cn = {};
      Object.defineProperty(Cn, "passive", {
        get: function() {
          Tr = !0;
        }
      }), window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
    } catch {
      Tr = !1;
    }
  var ql = null, Dr = null, $u = null;
  function ao() {
    if ($u) return $u;
    var e, t = Dr, l = t.length, a, n = "value" in ql ? ql.value : ql.textContent, i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === n[i - a]; a++) ;
    return $u = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function ku(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Wu() {
    return !0;
  }
  function no() {
    return !1;
  }
  function At(e) {
    function t(l, a, n, i, f) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Wu : no, this.isPropagationStopped = no, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Wu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Wu);
      },
      persist: function() {
      },
      isPersistent: Wu
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
  }, Fu = At(Sa), Nn = R({}, Sa, { view: 0, detail: 0 }), Bm = At(Nn), Mr, Ar, Hn, Pu = R({}, Nn, {
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
    getModifierState: Or,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (Mr = e.screenX - Hn.screenX, Ar = e.screenY - Hn.screenY) : Ar = Mr = 0, Hn = e), Mr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ar;
    }
  }), uo = At(Pu), jm = R({}, Pu, { dataTransfer: 0 }), Ym = At(jm), qm = R({}, Nn, { relatedTarget: 0 }), zr = At(qm), Gm = R({}, Sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xm = At(Gm), Qm = R({}, Sa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Vm = At(Qm), Zm = R({}, Sa, { data: 0 }), io = At(Zm), Km = {
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
  }, Jm = {
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
  }, $m = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function km(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $m[e]) ? !!t[e] : !1;
  }
  function Or() {
    return km;
  }
  var Wm = R({}, Nn, {
    key: function(e) {
      if (e.key) {
        var t = Km[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ku(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Or,
    charCode: function(e) {
      return e.type === "keypress" ? ku(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ku(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Fm = At(Wm), Pm = R({}, Pu, {
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
  }), ro = At(Pm), Im = R({}, Nn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Or
  }), ey = At(Im), ty = R({}, Sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ly = At(ty), ay = R({}, Pu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ny = At(ay), uy = R({}, Sa, {
    newState: 0,
    oldState: 0
  }), iy = At(uy), ry = [9, 13, 27, 32], _r = bl && "CompositionEvent" in window, Ln = null;
  bl && "documentMode" in document && (Ln = document.documentMode);
  var cy = bl && "TextEvent" in window && !Ln, co = bl && (!_r || Ln && 8 < Ln && 11 >= Ln), fo = " ", oo = !1;
  function so(e, t) {
    switch (e) {
      case "keyup":
        return ry.indexOf(t.keyCode) !== -1;
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
  function ho(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $a = !1;
  function fy(e, t) {
    switch (e) {
      case "compositionend":
        return ho(t);
      case "keypress":
        return t.which !== 32 ? null : (oo = !0, fo);
      case "textInput":
        return e = t.data, e === fo && oo ? null : e;
      default:
        return null;
    }
  }
  function oy(e, t) {
    if ($a)
      return e === "compositionend" || !_r && so(e, t) ? (e = ao(), $u = Dr = ql = null, $a = !1, e) : null;
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
        return co && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sy = {
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
  function mo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sy[e.type] : t === "textarea";
  }
  function yo(e, t, l, a) {
    Ka ? Ja ? Ja.push(a) : Ja = [a] : Ka = a, t = ji(t, "onChange"), 0 < t.length && (l = new Fu(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var Bn = null, jn = null;
  function dy(e) {
    kd(e, 0);
  }
  function Iu(e) {
    var t = Ke(e);
    if (kf(t)) return e;
  }
  function vo(e, t) {
    if (e === "change") return t;
  }
  var go = !1;
  if (bl) {
    var xr;
    if (bl) {
      var Ur = "oninput" in document;
      if (!Ur) {
        var po = document.createElement("div");
        po.setAttribute("oninput", "return;"), Ur = typeof po.oninput == "function";
      }
      xr = Ur;
    } else xr = !1;
    go = xr && (!document.documentMode || 9 < document.documentMode);
  }
  function bo() {
    Bn && (Bn.detachEvent("onpropertychange", So), jn = Bn = null);
  }
  function So(e) {
    if (e.propertyName === "value" && Iu(jn)) {
      var t = [];
      yo(
        t,
        jn,
        e,
        Er(e)
      ), lo(dy, t);
    }
  }
  function hy(e, t, l) {
    e === "focusin" ? (bo(), Bn = t, jn = l, Bn.attachEvent("onpropertychange", So)) : e === "focusout" && bo();
  }
  function my(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Iu(jn);
  }
  function yy(e, t) {
    if (e === "click") return Iu(t);
  }
  function vy(e, t) {
    if (e === "input" || e === "change")
      return Iu(t);
  }
  function gy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ut = typeof Object.is == "function" ? Object.is : gy;
  function Yn(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!qa.call(t, n) || !Ut(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Eo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ro(e, t) {
    var l = Eo(e);
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
      l = Eo(l);
    }
  }
  function To(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? To(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Do(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ku(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Ku(e.document);
    }
    return t;
  }
  function wr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var py = bl && "documentMode" in document && 11 >= document.documentMode, ka = null, Cr = null, qn = null, Nr = !1;
  function Mo(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Nr || ka == null || ka !== Ku(a) || (a = ka, "selectionStart" in a && wr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), qn && Yn(qn, a) || (qn = a, a = ji(Cr, "onSelect"), 0 < a.length && (t = new Fu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = ka)));
  }
  function Ea(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Wa = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionrun: Ea("Transition", "TransitionRun"),
    transitionstart: Ea("Transition", "TransitionStart"),
    transitioncancel: Ea("Transition", "TransitionCancel"),
    transitionend: Ea("Transition", "TransitionEnd")
  }, Hr = {}, Ao = {};
  bl && (Ao = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function Ra(e) {
    if (Hr[e]) return Hr[e];
    if (!Wa[e]) return e;
    var t = Wa[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Ao)
        return Hr[e] = t[l];
    return e;
  }
  var zo = Ra("animationend"), Oo = Ra("animationiteration"), _o = Ra("animationstart"), by = Ra("transitionrun"), Sy = Ra("transitionstart"), Ey = Ra("transitioncancel"), xo = Ra("transitionend"), Uo = /* @__PURE__ */ new Map(), Lr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Lr.push("scrollEnd");
  function al(e, t) {
    Uo.set(e, t), Et(t, [e]);
  }
  var wo = /* @__PURE__ */ new WeakMap();
  function Qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = wo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Un(t)
      }, wo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Un(t)
    };
  }
  var Vt = [], Fa = 0, Br = 0;
  function ei() {
    for (var e = Fa, t = Br = Fa = 0; t < e; ) {
      var l = Vt[t];
      Vt[t++] = null;
      var a = Vt[t];
      Vt[t++] = null;
      var n = Vt[t];
      Vt[t++] = null;
      var i = Vt[t];
      if (Vt[t++] = null, a !== null && n !== null) {
        var f = a.pending;
        f === null ? n.next = n : (n.next = f.next, f.next = n), a.pending = n;
      }
      i !== 0 && Co(l, n, i);
    }
  }
  function ti(e, t, l, a) {
    Vt[Fa++] = e, Vt[Fa++] = t, Vt[Fa++] = l, Vt[Fa++] = a, Br |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function jr(e, t, l, a) {
    return ti(e, t, l, a), li(e);
  }
  function Pa(e, t) {
    return ti(e, null, null, t), li(e);
  }
  function Co(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - ht(l), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), i) : null;
  }
  function li(e) {
    if (50 < su)
      throw su = 0, Vc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ia = {};
  function Ry(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wt(e, t, l, a) {
    return new Ry(e, t, l, a);
  }
  function Yr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Sl(e, t) {
    var l = e.alternate;
    return l === null ? (l = wt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function No(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ai(e, t, l, a, n, i) {
    var f = 0;
    if (a = e, typeof e == "function") Yr(e) && (f = 1);
    else if (typeof e == "string")
      f = Dv(
        e,
        l,
        ae.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case me:
          return e = wt(31, l, t, n), e.elementType = me, e.lanes = i, e;
        case _:
          return Ta(l.children, n, i, t);
        case Q:
          f = 8, n |= 24;
          break;
        case Z:
          return e = wt(12, l, t, n | 2), e.elementType = Z, e.lanes = i, e;
        case W:
          return e = wt(13, l, t, n), e.elementType = W, e.lanes = i, e;
        case w:
          return e = wt(19, l, t, n), e.elementType = w, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case B:
              case k:
                f = 10;
                break e;
              case ee:
                f = 9;
                break e;
              case he:
                f = 11;
                break e;
              case ve:
                f = 14;
                break e;
              case pe:
                f = 16, a = null;
                break e;
            }
          f = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = wt(f, l, t, n), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function Ta(e, t, l, a) {
    return e = wt(7, e, a, t), e.lanes = l, e;
  }
  function qr(e, t, l) {
    return e = wt(6, e, null, t), e.lanes = l, e;
  }
  function Gr(e, t, l) {
    return t = wt(
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
  var en = [], tn = 0, ni = null, ui = 0, Zt = [], Kt = 0, Da = null, El = 1, Rl = "";
  function Ma(e, t) {
    en[tn++] = ui, en[tn++] = ni, ni = e, ui = t;
  }
  function Ho(e, t, l) {
    Zt[Kt++] = El, Zt[Kt++] = Rl, Zt[Kt++] = Da, Da = e;
    var a = El;
    e = Rl;
    var n = 32 - ht(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - ht(t) + n;
    if (30 < i) {
      var f = n - n % 5;
      i = (a & (1 << f) - 1).toString(32), a >>= f, n -= f, El = 1 << 32 - ht(t) + n | l << n | a, Rl = i + e;
    } else
      El = 1 << i | l << n | a, Rl = e;
  }
  function Xr(e) {
    e.return !== null && (Ma(e, 1), Ho(e, 1, 0));
  }
  function Qr(e) {
    for (; e === ni; )
      ni = en[--tn], en[tn] = null, ui = en[--tn], en[tn] = null;
    for (; e === Da; )
      Da = Zt[--Kt], Zt[Kt] = null, Rl = Zt[--Kt], Zt[Kt] = null, El = Zt[--Kt], Zt[Kt] = null;
  }
  var Rt = null, Ie = null, He = !1, Aa = null, fl = !1, Vr = Error(o(519));
  function za(e) {
    var t = Error(o(418, ""));
    throw Qn(Qt(t, e)), Vr;
  }
  function Lo(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[X] = e, t[V] = a, l) {
      case "dialog":
        Me("cancel", t), Me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Me("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < hu.length; l++)
          Me(hu[l], t);
        break;
      case "source":
        Me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Me("error", t), Me("load", t);
        break;
      case "details":
        Me("toggle", t);
        break;
      case "input":
        Me("invalid", t), Wf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Zu(t);
        break;
      case "select":
        Me("invalid", t);
        break;
      case "textarea":
        Me("invalid", t), Pf(t, a.value, a.defaultValue, a.children), Zu(t);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Id(t.textContent, l) ? (a.popover != null && (Me("beforetoggle", t), Me("toggle", t)), a.onScroll != null && Me("scroll", t), a.onScrollEnd != null && Me("scrollend", t), a.onClick != null && (t.onclick = Yi), t = !0) : t = !1, t || za(e);
  }
  function Bo(e) {
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
  function Gn(e) {
    if (e !== Rt) return !1;
    if (!He) return Bo(e), He = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || rf(e.type, e.memoizedProps)), l = !l), l && Ie && za(e), Bo(e), t === 13) {
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
      t === 27 ? (t = Ie, la(e.type) ? (e = sf, sf = null, Ie = e) : Ie = t) : Ie = Rt ? ul(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xn() {
    Ie = Rt = null, He = !1;
  }
  function jo() {
    var e = Aa;
    return e !== null && (_t === null ? _t = e : _t.push.apply(
      _t,
      e
    ), Aa = null), e;
  }
  function Qn(e) {
    Aa === null ? Aa = [e] : Aa.push(e);
  }
  var Zr = q(null), Oa = null, Tl = null;
  function Gl(e, t, l) {
    J(Zr, t._currentValue), t._currentValue = l;
  }
  function Dl(e) {
    e._currentValue = Zr.current, $(Zr);
  }
  function Kr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Jr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var f = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = n;
          for (var g = 0; g < t.length; g++)
            if (d.context === t[g]) {
              i.lanes |= l, d = i.alternate, d !== null && (d.lanes |= l), Kr(
                i.return,
                l,
                e
              ), a || (f = null);
              break e;
            }
          i = d.next;
        }
      } else if (n.tag === 18) {
        if (f = n.return, f === null) throw Error(o(341));
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), Kr(f, l, e), f = null;
      } else f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (n = f.sibling, n !== null) {
            n.return = f.return, f = n;
            break;
          }
          f = f.return;
        }
      n = f;
    }
  }
  function Vn(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var d = n.type;
          Ut(n.pendingProps.value, f.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (n === St.current) {
        if (f = n.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(bu) : e = [bu]);
      }
      n = n.return;
    }
    e !== null && Jr(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function ii(e) {
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
  function _a(e) {
    Oa = e, Tl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return Yo(Oa, e);
  }
  function ri(e, t) {
    return Oa === null && _a(e), Yo(e, t);
  }
  function Yo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Tl === null) {
      if (e === null) throw Error(o(308));
      Tl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Tl = Tl.next = t;
    return l;
  }
  var Ty = typeof AbortController < "u" ? AbortController : function() {
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
  }, Dy = u.unstable_scheduleCallback, My = u.unstable_NormalPriority, ct = {
    $$typeof: k,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function $r() {
    return {
      controller: new Ty(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Zn(e) {
    e.refCount--, e.refCount === 0 && Dy(My, function() {
      e.controller.abort();
    });
  }
  var Kn = null, kr = 0, ln = 0, an = null;
  function Ay(e, t) {
    if (Kn === null) {
      var l = Kn = [];
      kr = 0, ln = Fc(), an = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return kr++, t.then(qo, qo), t;
  }
  function qo() {
    if (--kr === 0 && Kn !== null) {
      an !== null && (an.status = "fulfilled");
      var e = Kn;
      Kn = null, ln = 0, an = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function zy(e, t) {
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
  var Go = x.S;
  x.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Ay(e, t), Go !== null && Go(e, t);
  };
  var xa = q(null);
  function Wr() {
    var e = xa.current;
    return e !== null ? e : Ve.pooledCache;
  }
  function ci(e, t) {
    t === null ? J(xa, xa.current) : J(xa, t.pool);
  }
  function Xo() {
    var e = Wr();
    return e === null ? null : { parent: ct._currentValue, pool: e };
  }
  var Jn = Error(o(460)), Qo = Error(o(474)), fi = Error(o(542)), Fr = { then: function() {
  } };
  function Vo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function oi() {
  }
  function Zo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(oi, oi), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Jo(e), e;
      default:
        if (typeof t.status == "string") t.then(oi, oi);
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
            throw e = t.reason, Jo(e), e;
        }
        throw $n = t, Jn;
    }
  }
  var $n = null;
  function Ko() {
    if ($n === null) throw Error(o(459));
    var e = $n;
    return $n = null, e;
  }
  function Jo(e) {
    if (e === Jn || e === fi)
      throw Error(o(483));
  }
  var Xl = !1;
  function Pr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ir(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ql(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Vl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Be & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = li(e), Co(e, null, l), t;
    }
    return ti(e, a, t, l), li(e);
  }
  function kn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, pa(e, l);
    }
  }
  function ec(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = f : i = i.next = f, l = l.next;
        } while (l !== null);
        i === null ? n = i = t : i = i.next = t;
      } else n = i = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var tc = !1;
  function Wn() {
    if (tc) {
      var e = an;
      if (e !== null) throw e;
    }
  }
  function Fn(e, t, l, a) {
    tc = !1;
    var n = e.updateQueue;
    Xl = !1;
    var i = n.firstBaseUpdate, f = n.lastBaseUpdate, d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var g = d, z = g.next;
      g.next = null, f === null ? i = z : f.next = z, f = g;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, d = j.lastBaseUpdate, d !== f && (d === null ? j.firstBaseUpdate = z : d.next = z, j.lastBaseUpdate = g));
    }
    if (i !== null) {
      var G = n.baseState;
      f = 0, j = z = g = null, d = i;
      do {
        var O = d.lane & -536870913, U = O !== d.lane;
        if (U ? (_e & O) === O : (a & O) === O) {
          O !== 0 && O === ln && (tc = !0), j !== null && (j = j.next = {
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
                Xl = !0;
            }
          }
          O = d.callback, O !== null && (e.flags |= 64, U && (e.flags |= 8192), U = n.callbacks, U === null ? n.callbacks = [O] : U.push(O));
        } else
          U = {
            lane: O,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, j === null ? (z = j = U, g = G) : j = j.next = U, f |= O;
        if (d = d.next, d === null) {
          if (d = n.shared.pending, d === null)
            break;
          U = d, d = U.next, U.next = null, n.lastBaseUpdate = U, n.shared.pending = null;
        }
      } while (!0);
      j === null && (g = G), n.baseState = g, n.firstBaseUpdate = z, n.lastBaseUpdate = j, i === null && (n.shared.lanes = 0), Pl |= f, e.lanes = f, e.memoizedState = G;
    }
  }
  function $o(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function ko(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        $o(l[e], t);
  }
  var nn = q(null), si = q(0);
  function Wo(e, t) {
    e = Ul, J(si, e), J(nn, t), Ul = e | t.baseLanes;
  }
  function lc() {
    J(si, Ul), J(nn, nn.current);
  }
  function ac() {
    Ul = si.current, $(nn), $(si);
  }
  var Zl = 0, Se = null, Ye = null, nt = null, di = !1, un = !1, Ua = !1, hi = 0, Pn = 0, rn = null, Oy = 0;
  function lt() {
    throw Error(o(321));
  }
  function nc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Ut(e[l], t[l])) return !1;
    return !0;
  }
  function uc(e, t, l, a, n, i) {
    return Zl = i, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = e === null || e.memoizedState === null ? Cs : Ns, Ua = !1, i = l(a, n), Ua = !1, un && (i = Po(
      t,
      l,
      a,
      n
    )), Fo(e), i;
  }
  function Fo(e) {
    x.H = bi;
    var t = Ye !== null && Ye.next !== null;
    if (Zl = 0, nt = Ye = Se = null, di = !1, Pn = 0, rn = null, t) throw Error(o(300));
    e === null || ot || (e = e.dependencies, e !== null && ii(e) && (ot = !0));
  }
  function Po(e, t, l, a) {
    Se = e;
    var n = 0;
    do {
      if (un && (rn = null), Pn = 0, un = !1, 25 <= n) throw Error(o(301));
      if (n += 1, nt = Ye = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      x.H = Hy, i = t(l, a);
    } while (un);
    return i;
  }
  function _y() {
    var e = x.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? In(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (Se.flags |= 1024), t;
  }
  function ic() {
    var e = hi !== 0;
    return hi = 0, e;
  }
  function rc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function cc(e) {
    if (di) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      di = !1;
    }
    Zl = 0, nt = Ye = Se = null, un = !1, Pn = hi = 0, rn = null;
  }
  function zt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return nt === null ? Se.memoizedState = nt = e : nt = nt.next = e, nt;
  }
  function ut() {
    if (Ye === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = nt === null ? Se.memoizedState : nt.next;
    if (t !== null)
      nt = t, Ye = e;
    else {
      if (e === null)
        throw Se.alternate === null ? Error(o(467)) : Error(o(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, nt === null ? Se.memoizedState = nt = e : nt = nt.next = e;
    }
    return nt;
  }
  function fc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function In(e) {
    var t = Pn;
    return Pn += 1, rn === null && (rn = []), e = Zo(rn, e, t), t = Se, (nt === null ? t.memoizedState : nt.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? Cs : Ns), e;
  }
  function mi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return In(e);
      if (e.$$typeof === k) return pt(e);
    }
    throw Error(o(438, String(e)));
  }
  function oc(e) {
    var t = null, l = Se.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = Se.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = fc(), Se.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Ze;
    return t.index++, l;
  }
  function Ml(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yi(e) {
    var t = ut();
    return sc(t, Ye, e);
  }
  function sc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var f = n.next;
        n.next = i.next, i.next = f;
      }
      t.baseQueue = n = i, a.pending = null;
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var d = f = null, g = null, z = t, j = !1;
      do {
        var G = z.lane & -536870913;
        if (G !== z.lane ? (_e & G) === G : (Zl & G) === G) {
          var O = z.revertLane;
          if (O === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }), G === ln && (j = !0);
          else if ((Zl & O) === O) {
            z = z.next, O === ln && (j = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, g === null ? (d = g = G, f = i) : g = g.next = G, Se.lanes |= O, Pl |= O;
          G = z.action, Ua && l(i, G), i = z.hasEagerState ? z.eagerState : l(i, G);
        } else
          O = {
            lane: G,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }, g === null ? (d = g = O, f = i) : g = g.next = O, Se.lanes |= G, Pl |= G;
        z = z.next;
      } while (z !== null && z !== t);
      if (g === null ? f = i : g.next = d, !Ut(i, e.memoizedState) && (ot = !0, j && (l = an, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = g, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function dc(e) {
    var t = ut(), l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var f = n = n.next;
      do
        i = e(i, f.action), f = f.next;
      while (f !== n);
      Ut(i, t.memoizedState) || (ot = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function Io(e, t, l) {
    var a = Se, n = ut(), i = He;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !Ut(
      (Ye || n).memoizedState,
      l
    );
    f && (n.memoizedState = l, ot = !0), n = n.queue;
    var d = ls.bind(null, a, n, e);
    if (eu(2048, 8, d, [e]), n.getSnapshot !== t || f || nt !== null && nt.memoizedState.tag & 1) {
      if (a.flags |= 2048, cn(
        9,
        vi(),
        ts.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), Ve === null) throw Error(o(349));
      i || (Zl & 124) !== 0 || es(a, t, l);
    }
    return l;
  }
  function es(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = Se.updateQueue, t === null ? (t = fc(), Se.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function ts(e, t, l, a) {
    t.value = l, t.getSnapshot = a, as(t) && ns(e);
  }
  function ls(e, t, l) {
    return l(function() {
      as(t) && ns(e);
    });
  }
  function as(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Ut(e, l);
    } catch {
      return !0;
    }
  }
  function ns(e) {
    var t = Pa(e, 2);
    t !== null && Bt(t, e, 2);
  }
  function hc(e) {
    var t = zt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Ua) {
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
  function us(e, t, l, a) {
    return e.baseState = l, sc(
      e,
      Ye,
      typeof a == "function" ? a : Ml
    );
  }
  function xy(e, t, l, a, n) {
    if (pi(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          i.listeners.push(f);
        }
      };
      x.T !== null ? l(!0) : i.isTransition = !1, a(i), l = t.pending, l === null ? (i.next = t.pending = i, is(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function is(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var i = x.T, f = {};
      x.T = f;
      try {
        var d = l(n, a), g = x.S;
        g !== null && g(f, d), rs(e, t, d);
      } catch (z) {
        mc(e, t, z);
      } finally {
        x.T = i;
      }
    } else
      try {
        i = l(n, a), rs(e, t, i);
      } catch (z) {
        mc(e, t, z);
      }
  }
  function rs(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        cs(e, t, a);
      },
      function(a) {
        return mc(e, t, a);
      }
    ) : cs(e, t, l);
  }
  function cs(e, t, l) {
    t.status = "fulfilled", t.value = l, fs(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, is(e, l)));
  }
  function mc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, fs(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function fs(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function os(e, t) {
    return t;
  }
  function ss(e, t) {
    if (He) {
      var l = Ve.formState;
      if (l !== null) {
        e: {
          var a = Se;
          if (He) {
            if (Ie) {
              t: {
                for (var n = Ie, i = fl; n.nodeType !== 8; ) {
                  if (!i) {
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
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Ie = ul(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            za(a);
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
      lastRenderedReducer: os,
      lastRenderedState: t
    }, l.queue = a, l = xs.bind(
      null,
      Se,
      a
    ), a.dispatch = l, a = hc(!1), i = bc.bind(
      null,
      Se,
      !1,
      a.queue
    ), a = zt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = xy.bind(
      null,
      Se,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function ds(e) {
    var t = ut();
    return hs(t, Ye, e);
  }
  function hs(e, t, l) {
    if (t = sc(
      e,
      t,
      os
    )[0], e = yi(Ml)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = In(t);
      } catch (f) {
        throw f === Jn ? fi : f;
      }
    else a = t;
    t = ut();
    var n = t.queue, i = n.dispatch;
    return l !== t.memoizedState && (Se.flags |= 2048, cn(
      9,
      vi(),
      Uy.bind(null, n, l),
      null
    )), [a, i, e];
  }
  function Uy(e, t) {
    e.action = t;
  }
  function ms(e) {
    var t = ut(), l = Ye;
    if (l !== null)
      return hs(t, l, e);
    ut(), t = t.memoizedState, l = ut();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function cn(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = Se.updateQueue, t === null && (t = fc(), Se.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function vi() {
    return { destroy: void 0, resource: void 0 };
  }
  function ys() {
    return ut().memoizedState;
  }
  function gi(e, t, l, a) {
    var n = zt();
    a = a === void 0 ? null : a, Se.flags |= e, n.memoizedState = cn(
      1 | t,
      vi(),
      l,
      a
    );
  }
  function eu(e, t, l, a) {
    var n = ut();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Ye !== null && a !== null && nc(a, Ye.memoizedState.deps) ? n.memoizedState = cn(t, i, l, a) : (Se.flags |= e, n.memoizedState = cn(
      1 | t,
      i,
      l,
      a
    ));
  }
  function vs(e, t) {
    gi(8390656, 8, e, t);
  }
  function gs(e, t) {
    eu(2048, 8, e, t);
  }
  function ps(e, t) {
    return eu(4, 2, e, t);
  }
  function bs(e, t) {
    return eu(4, 4, e, t);
  }
  function Ss(e, t) {
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
  function Es(e, t, l) {
    l = l != null ? l.concat([e]) : null, eu(4, 4, Ss.bind(null, t, e), l);
  }
  function yc() {
  }
  function Rs(e, t) {
    var l = ut();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && nc(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function Ts(e, t) {
    var l = ut();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && nc(t, a[1]))
      return a[0];
    if (a = e(), Ua) {
      el(!0);
      try {
        e();
      } finally {
        el(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function vc(e, t, l) {
    return l === void 0 || (Zl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ad(), Se.lanes |= e, Pl |= e, l);
  }
  function Ds(e, t, l, a) {
    return Ut(l, t) ? l : nn.current !== null ? (e = vc(e, l, a), Ut(e, t) || (ot = !0), e) : (Zl & 42) === 0 ? (ot = !0, e.memoizedState = l) : (e = Ad(), Se.lanes |= e, Pl |= e, t);
  }
  function Ms(e, t, l, a, n) {
    var i = K.p;
    K.p = i !== 0 && 8 > i ? i : 8;
    var f = x.T, d = {};
    x.T = d, bc(e, !1, t, l);
    try {
      var g = n(), z = x.S;
      if (z !== null && z(d, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var j = zy(
          g,
          a
        );
        tu(
          e,
          t,
          j,
          Lt(e)
        );
      } else
        tu(
          e,
          t,
          a,
          Lt(e)
        );
    } catch (G) {
      tu(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: G },
        Lt()
      );
    } finally {
      K.p = i, x.T = f;
    }
  }
  function wy() {
  }
  function gc(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = As(e).queue;
    Ms(
      e,
      n,
      t,
      P,
      l === null ? wy : function() {
        return zs(e), l(a);
      }
    );
  }
  function As(e) {
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
  function zs(e) {
    var t = As(e).next.queue;
    tu(e, t, {}, Lt());
  }
  function pc() {
    return pt(bu);
  }
  function Os() {
    return ut().memoizedState;
  }
  function _s() {
    return ut().memoizedState;
  }
  function Cy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Lt();
          e = Ql(l);
          var a = Vl(t, e, l);
          a !== null && (Bt(a, t, l), kn(a, t, l)), t = { cache: $r() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ny(e, t, l) {
    var a = Lt();
    l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pi(e) ? Us(t, l) : (l = jr(e, t, l, a), l !== null && (Bt(l, e, a), ws(l, t, a)));
  }
  function xs(e, t, l) {
    var a = Lt();
    tu(e, t, l, a);
  }
  function tu(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (pi(e)) Us(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, d = i(f, l);
          if (n.hasEagerState = !0, n.eagerState = d, Ut(d, f))
            return ti(e, t, n, 0), Ve === null && ei(), !1;
        } catch {
        } finally {
        }
      if (l = jr(e, t, n, a), l !== null)
        return Bt(l, e, a), ws(l, t, a), !0;
    }
    return !1;
  }
  function bc(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Fc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pi(e)) {
      if (t) throw Error(o(479));
    } else
      t = jr(
        e,
        l,
        a,
        2
      ), t !== null && Bt(t, e, 2);
  }
  function pi(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function Us(e, t) {
    un = di = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function ws(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, pa(e, l);
    }
  }
  var bi = {
    readContext: pt,
    use: mi,
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
  }, Cs = {
    readContext: pt,
    use: mi,
    useCallback: function(e, t) {
      return zt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: vs,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, gi(
        4194308,
        4,
        Ss.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return gi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      gi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = zt();
      t = t === void 0 ? null : t;
      var a = e();
      if (Ua) {
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
        if (Ua) {
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
      }, a.queue = e, e = e.dispatch = Ny.bind(
        null,
        Se,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = zt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = hc(e);
      var t = e.queue, l = xs.bind(null, Se, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: yc,
    useDeferredValue: function(e, t) {
      var l = zt();
      return vc(l, e, t);
    },
    useTransition: function() {
      var e = hc(!1);
      return e = Ms.bind(
        null,
        Se,
        e.queue,
        !0,
        !1
      ), zt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = Se, n = zt();
      if (He) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), Ve === null)
          throw Error(o(349));
        (_e & 124) !== 0 || es(a, t, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return n.queue = i, vs(ls.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, cn(
        9,
        vi(),
        ts.bind(
          null,
          a,
          i,
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
        l = (a & ~(1 << 32 - ht(a) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = hi++, 0 < l && (t += "H" + l.toString(32)), t += "»";
      } else
        l = Oy++, t = "«" + t + "r" + l.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: pc,
    useFormState: ss,
    useActionState: ss,
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
      return t.queue = l, t = bc.bind(
        null,
        Se,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: oc,
    useCacheRefresh: function() {
      return zt().memoizedState = Cy.bind(
        null,
        Se
      );
    }
  }, Ns = {
    readContext: pt,
    use: mi,
    useCallback: Rs,
    useContext: pt,
    useEffect: gs,
    useImperativeHandle: Es,
    useInsertionEffect: ps,
    useLayoutEffect: bs,
    useMemo: Ts,
    useReducer: yi,
    useRef: ys,
    useState: function() {
      return yi(Ml);
    },
    useDebugValue: yc,
    useDeferredValue: function(e, t) {
      var l = ut();
      return Ds(
        l,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = yi(Ml)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : In(e),
        t
      ];
    },
    useSyncExternalStore: Io,
    useId: Os,
    useHostTransitionStatus: pc,
    useFormState: ds,
    useActionState: ds,
    useOptimistic: function(e, t) {
      var l = ut();
      return us(l, Ye, e, t);
    },
    useMemoCache: oc,
    useCacheRefresh: _s
  }, Hy = {
    readContext: pt,
    use: mi,
    useCallback: Rs,
    useContext: pt,
    useEffect: gs,
    useImperativeHandle: Es,
    useInsertionEffect: ps,
    useLayoutEffect: bs,
    useMemo: Ts,
    useReducer: dc,
    useRef: ys,
    useState: function() {
      return dc(Ml);
    },
    useDebugValue: yc,
    useDeferredValue: function(e, t) {
      var l = ut();
      return Ye === null ? vc(l, e, t) : Ds(
        l,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = dc(Ml)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : In(e),
        t
      ];
    },
    useSyncExternalStore: Io,
    useId: Os,
    useHostTransitionStatus: pc,
    useFormState: ms,
    useActionState: ms,
    useOptimistic: function(e, t) {
      var l = ut();
      return Ye !== null ? us(l, Ye, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: oc,
    useCacheRefresh: _s
  }, fn = null, lu = 0;
  function Si(e) {
    var t = lu;
    return lu += 1, fn === null && (fn = []), Zo(fn, e, t);
  }
  function au(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ei(e, t) {
    throw t.$$typeof === N ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Hs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ls(e) {
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
      return T = Sl(T, E), T.index = 0, T.sibling = null, T;
    }
    function i(T, E, A) {
      return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < E ? (T.flags |= 67108866, E) : A) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function d(T, E, A, Y) {
      return E === null || E.tag !== 6 ? (E = qr(A, T.mode, Y), E.return = T, E) : (E = n(E, A), E.return = T, E);
    }
    function g(T, E, A, Y) {
      var I = A.type;
      return I === _ ? j(
        T,
        E,
        A.props.children,
        Y,
        A.key
      ) : E !== null && (E.elementType === I || typeof I == "object" && I !== null && I.$$typeof === pe && Hs(I) === E.type) ? (E = n(E, A.props), au(E, A), E.return = T, E) : (E = ai(
        A.type,
        A.key,
        A.props,
        null,
        T.mode,
        Y
      ), au(E, A), E.return = T, E);
    }
    function z(T, E, A, Y) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== A.containerInfo || E.stateNode.implementation !== A.implementation ? (E = Gr(A, T.mode, Y), E.return = T, E) : (E = n(E, A.children || []), E.return = T, E);
    }
    function j(T, E, A, Y, I) {
      return E === null || E.tag !== 7 ? (E = Ta(
        A,
        T.mode,
        Y,
        I
      ), E.return = T, E) : (E = n(E, A), E.return = T, E);
    }
    function G(T, E, A) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = qr(
          "" + E,
          T.mode,
          A
        ), E.return = T, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case D:
            return A = ai(
              E.type,
              E.key,
              E.props,
              null,
              T.mode,
              A
            ), au(A, E), A.return = T, A;
          case L:
            return E = Gr(
              E,
              T.mode,
              A
            ), E.return = T, E;
          case pe:
            var Y = E._init;
            return E = Y(E._payload), G(T, E, A);
        }
        if (Le(E) || Je(E))
          return E = Ta(
            E,
            T.mode,
            A,
            null
          ), E.return = T, E;
        if (typeof E.then == "function")
          return G(T, Si(E), A);
        if (E.$$typeof === k)
          return G(
            T,
            ri(T, E),
            A
          );
        Ei(T, E);
      }
      return null;
    }
    function O(T, E, A, Y) {
      var I = E !== null ? E.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return I !== null ? null : d(T, E, "" + A, Y);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case D:
            return A.key === I ? g(T, E, A, Y) : null;
          case L:
            return A.key === I ? z(T, E, A, Y) : null;
          case pe:
            return I = A._init, A = I(A._payload), O(T, E, A, Y);
        }
        if (Le(A) || Je(A))
          return I !== null ? null : j(T, E, A, Y, null);
        if (typeof A.then == "function")
          return O(
            T,
            E,
            Si(A),
            Y
          );
        if (A.$$typeof === k)
          return O(
            T,
            E,
            ri(T, A),
            Y
          );
        Ei(T, A);
      }
      return null;
    }
    function U(T, E, A, Y, I) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return T = T.get(A) || null, d(E, T, "" + Y, I);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case D:
            return T = T.get(
              Y.key === null ? A : Y.key
            ) || null, g(E, T, Y, I);
          case L:
            return T = T.get(
              Y.key === null ? A : Y.key
            ) || null, z(E, T, Y, I);
          case pe:
            var Re = Y._init;
            return Y = Re(Y._payload), U(
              T,
              E,
              A,
              Y,
              I
            );
        }
        if (Le(Y) || Je(Y))
          return T = T.get(A) || null, j(E, T, Y, I, null);
        if (typeof Y.then == "function")
          return U(
            T,
            E,
            A,
            Si(Y),
            I
          );
        if (Y.$$typeof === k)
          return U(
            T,
            E,
            A,
            ri(E, Y),
            I
          );
        Ei(E, Y);
      }
      return null;
    }
    function de(T, E, A, Y) {
      for (var I = null, Re = null, ne = E, fe = E = 0, dt = null; ne !== null && fe < A.length; fe++) {
        ne.index > fe ? (dt = ne, ne = null) : dt = ne.sibling;
        var Ce = O(
          T,
          ne,
          A[fe],
          Y
        );
        if (Ce === null) {
          ne === null && (ne = dt);
          break;
        }
        e && ne && Ce.alternate === null && t(T, ne), E = i(Ce, E, fe), Re === null ? I = Ce : Re.sibling = Ce, Re = Ce, ne = dt;
      }
      if (fe === A.length)
        return l(T, ne), He && Ma(T, fe), I;
      if (ne === null) {
        for (; fe < A.length; fe++)
          ne = G(T, A[fe], Y), ne !== null && (E = i(
            ne,
            E,
            fe
          ), Re === null ? I = ne : Re.sibling = ne, Re = ne);
        return He && Ma(T, fe), I;
      }
      for (ne = a(ne); fe < A.length; fe++)
        dt = U(
          ne,
          T,
          fe,
          A[fe],
          Y
        ), dt !== null && (e && dt.alternate !== null && ne.delete(
          dt.key === null ? fe : dt.key
        ), E = i(
          dt,
          E,
          fe
        ), Re === null ? I = dt : Re.sibling = dt, Re = dt);
      return e && ne.forEach(function(ra) {
        return t(T, ra);
      }), He && Ma(T, fe), I;
    }
    function re(T, E, A, Y) {
      if (A == null) throw Error(o(151));
      for (var I = null, Re = null, ne = E, fe = E = 0, dt = null, Ce = A.next(); ne !== null && !Ce.done; fe++, Ce = A.next()) {
        ne.index > fe ? (dt = ne, ne = null) : dt = ne.sibling;
        var ra = O(T, ne, Ce.value, Y);
        if (ra === null) {
          ne === null && (ne = dt);
          break;
        }
        e && ne && ra.alternate === null && t(T, ne), E = i(ra, E, fe), Re === null ? I = ra : Re.sibling = ra, Re = ra, ne = dt;
      }
      if (Ce.done)
        return l(T, ne), He && Ma(T, fe), I;
      if (ne === null) {
        for (; !Ce.done; fe++, Ce = A.next())
          Ce = G(T, Ce.value, Y), Ce !== null && (E = i(Ce, E, fe), Re === null ? I = Ce : Re.sibling = Ce, Re = Ce);
        return He && Ma(T, fe), I;
      }
      for (ne = a(ne); !Ce.done; fe++, Ce = A.next())
        Ce = U(ne, T, fe, Ce.value, Y), Ce !== null && (e && Ce.alternate !== null && ne.delete(Ce.key === null ? fe : Ce.key), E = i(Ce, E, fe), Re === null ? I = Ce : Re.sibling = Ce, Re = Ce);
      return e && ne.forEach(function(Lv) {
        return t(T, Lv);
      }), He && Ma(T, fe), I;
    }
    function Ge(T, E, A, Y) {
      if (typeof A == "object" && A !== null && A.type === _ && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case D:
            e: {
              for (var I = A.key; E !== null; ) {
                if (E.key === I) {
                  if (I = A.type, I === _) {
                    if (E.tag === 7) {
                      l(
                        T,
                        E.sibling
                      ), Y = n(
                        E,
                        A.props.children
                      ), Y.return = T, T = Y;
                      break e;
                    }
                  } else if (E.elementType === I || typeof I == "object" && I !== null && I.$$typeof === pe && Hs(I) === E.type) {
                    l(
                      T,
                      E.sibling
                    ), Y = n(E, A.props), au(Y, A), Y.return = T, T = Y;
                    break e;
                  }
                  l(T, E);
                  break;
                } else t(T, E);
                E = E.sibling;
              }
              A.type === _ ? (Y = Ta(
                A.props.children,
                T.mode,
                Y,
                A.key
              ), Y.return = T, T = Y) : (Y = ai(
                A.type,
                A.key,
                A.props,
                null,
                T.mode,
                Y
              ), au(Y, A), Y.return = T, T = Y);
            }
            return f(T);
          case L:
            e: {
              for (I = A.key; E !== null; ) {
                if (E.key === I)
                  if (E.tag === 4 && E.stateNode.containerInfo === A.containerInfo && E.stateNode.implementation === A.implementation) {
                    l(
                      T,
                      E.sibling
                    ), Y = n(E, A.children || []), Y.return = T, T = Y;
                    break e;
                  } else {
                    l(T, E);
                    break;
                  }
                else t(T, E);
                E = E.sibling;
              }
              Y = Gr(A, T.mode, Y), Y.return = T, T = Y;
            }
            return f(T);
          case pe:
            return I = A._init, A = I(A._payload), Ge(
              T,
              E,
              A,
              Y
            );
        }
        if (Le(A))
          return de(
            T,
            E,
            A,
            Y
          );
        if (Je(A)) {
          if (I = Je(A), typeof I != "function") throw Error(o(150));
          return A = I.call(A), re(
            T,
            E,
            A,
            Y
          );
        }
        if (typeof A.then == "function")
          return Ge(
            T,
            E,
            Si(A),
            Y
          );
        if (A.$$typeof === k)
          return Ge(
            T,
            E,
            ri(T, A),
            Y
          );
        Ei(T, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, E !== null && E.tag === 6 ? (l(T, E.sibling), Y = n(E, A), Y.return = T, T = Y) : (l(T, E), Y = qr(A, T.mode, Y), Y.return = T, T = Y), f(T)) : l(T, E);
    }
    return function(T, E, A, Y) {
      try {
        lu = 0;
        var I = Ge(
          T,
          E,
          A,
          Y
        );
        return fn = null, I;
      } catch (ne) {
        if (ne === Jn || ne === fi) throw ne;
        var Re = wt(29, ne, null, T.mode);
        return Re.lanes = Y, Re.return = T, Re;
      } finally {
      }
    };
  }
  var on = Ls(!0), Bs = Ls(!1), Jt = q(null), ol = null;
  function Kl(e) {
    var t = e.alternate;
    J(ft, ft.current & 1), J(Jt, e), ol === null && (t === null || nn.current !== null || t.memoizedState !== null) && (ol = e);
  }
  function js(e) {
    if (e.tag === 22) {
      if (J(ft, ft.current), J(Jt, e), ol === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (ol = e);
      }
    } else Jl();
  }
  function Jl() {
    J(ft, ft.current), J(Jt, Jt.current);
  }
  function Al(e) {
    $(Jt), ol === e && (ol = null), $(ft);
  }
  var ft = q(0);
  function Ri(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || of(l)))
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
  function Sc(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : R({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ec = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Lt(), n = Ql(a);
      n.payload = t, l != null && (n.callback = l), t = Vl(e, n, a), t !== null && (Bt(t, e, a), kn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Lt(), n = Ql(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = Vl(e, n, a), t !== null && (Bt(t, e, a), kn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Lt(), a = Ql(l);
      a.tag = 2, t != null && (a.callback = t), t = Vl(e, a, l), t !== null && (Bt(t, e, l), kn(t, e, l));
    }
  };
  function Ys(e, t, l, a, n, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, f) : t.prototype && t.prototype.isPureReactComponent ? !Yn(l, a) || !Yn(n, i) : !0;
  }
  function qs(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Ec.enqueueReplaceState(t, t.state, null);
  }
  function wa(e, t) {
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
  var Ti = typeof reportError == "function" ? reportError : function(e) {
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
  function Gs(e) {
    Ti(e);
  }
  function Xs(e) {
    console.error(e);
  }
  function Qs(e) {
    Ti(e);
  }
  function Di(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Vs(e, t, l) {
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
  function Rc(e, t, l) {
    return l = Ql(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Di(e, t);
    }, l;
  }
  function Zs(e) {
    return e = Ql(e), e.tag = 3, e;
  }
  function Ks(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        Vs(t, l, a);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Vs(t, l, a), typeof n != "function" && (Il === null ? Il = /* @__PURE__ */ new Set([this]) : Il.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Ly(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Vn(
        t,
        l,
        n,
        !0
      ), l = Jt.current, l !== null) {
        switch (l.tag) {
          case 13:
            return ol === null ? Kc() : l.alternate === null && et === 0 && (et = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Fr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), $c(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Fr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), $c(e, a, n)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return $c(e, a, n), Kc(), !1;
    }
    if (He)
      return t = Jt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Vr && (e = Error(o(422), { cause: a }), Qn(Qt(e, l)))) : (a !== Vr && (t = Error(o(423), {
        cause: a
      }), Qn(
        Qt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Qt(a, l), n = Rc(
        e.stateNode,
        a,
        n
      ), ec(e, n), et !== 4 && (et = 2)), !1;
    var i = Error(o(520), { cause: a });
    if (i = Qt(i, l), ou === null ? ou = [i] : ou.push(i), et !== 4 && (et = 2), t === null) return !0;
    a = Qt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Rc(l.stateNode, a, e), ec(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Il === null || !Il.has(i))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = Zs(n), Ks(
              n,
              e,
              l,
              a
            ), ec(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Js = Error(o(461)), ot = !1;
  function mt(e, t, l, a) {
    t.child = e === null ? Bs(t, null, l, a) : on(
      t,
      e.child,
      l,
      a
    );
  }
  function $s(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var d in a)
        d !== "ref" && (f[d] = a[d]);
    } else f = a;
    return _a(t), a = uc(
      e,
      t,
      l,
      f,
      i,
      n
    ), d = ic(), e !== null && !ot ? (rc(e, t, n), zl(e, t, n)) : (He && d && Xr(t), t.flags |= 1, mt(e, t, a, n), t.child);
  }
  function ks(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !Yr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Ws(
        e,
        t,
        i,
        a,
        n
      )) : (e = ai(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !xc(e, n)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Yn, l(f, a) && e.ref === t.ref)
        return zl(e, t, n);
    }
    return t.flags |= 1, e = Sl(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ws(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Yn(i, a) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = a = i, xc(e, n))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, zl(e, t, n);
    }
    return Tc(
      e,
      t,
      l,
      a,
      n
    );
  }
  function Fs(e, t, l) {
    var a = t.pendingProps, n = a.children, i = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = i !== null ? i.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, i = 0; n !== null; )
            i = i | n.lanes | n.childLanes, n = n.sibling;
          t.childLanes = i & ~a;
        } else t.childLanes = 0, t.child = null;
        return Ps(
          e,
          t,
          a,
          l
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ci(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Wo(t, i) : lc(), js(t);
      else
        return t.lanes = t.childLanes = 536870912, Ps(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l
        );
    } else
      i !== null ? (ci(t, i.cachePool), Wo(t, i), Jl(), t.memoizedState = null) : (e !== null && ci(t, null), lc(), Jl());
    return mt(e, t, n, l), t.child;
  }
  function Ps(e, t, l, a) {
    var n = Wr();
    return n = n === null ? null : { parent: ct._currentValue, pool: n }, t.memoizedState = {
      baseLanes: l,
      cachePool: n
    }, e !== null && ci(t, null), lc(), js(t), e !== null && Vn(e, t, a, !0), null;
  }
  function Mi(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Tc(e, t, l, a, n) {
    return _a(t), l = uc(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = ic(), e !== null && !ot ? (rc(e, t, n), zl(e, t, n)) : (He && a && Xr(t), t.flags |= 1, mt(e, t, l, n), t.child);
  }
  function Is(e, t, l, a, n, i) {
    return _a(t), t.updateQueue = null, l = Po(
      t,
      a,
      l,
      n
    ), Fo(e), a = ic(), e !== null && !ot ? (rc(e, t, i), zl(e, t, i)) : (He && a && Xr(t), t.flags |= 1, mt(e, t, l, i), t.child);
  }
  function ed(e, t, l, a, n) {
    if (_a(t), t.stateNode === null) {
      var i = Ia, f = l.contextType;
      typeof f == "object" && f !== null && (i = pt(f)), i = new l(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ec, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Pr(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? pt(f) : Ia, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Sc(
        t,
        l,
        f,
        a
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Ec.enqueueReplaceState(i, i.state, null), Fn(t, a, i, n), Wn(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps, g = wa(l, d);
      i.props = g;
      var z = i.context, j = l.contextType;
      f = Ia, typeof j == "object" && j !== null && (f = pt(j));
      var G = l.getDerivedStateFromProps;
      j = typeof G == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, j || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || z !== f) && qs(
        t,
        i,
        a,
        f
      ), Xl = !1;
      var O = t.memoizedState;
      i.state = O, Fn(t, a, i, n), Wn(), z = t.memoizedState, d || O !== z || Xl ? (typeof G == "function" && (Sc(
        t,
        l,
        G,
        a
      ), z = t.memoizedState), (g = Xl || Ys(
        t,
        l,
        g,
        a,
        O,
        z,
        f
      )) ? (j || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = z), i.props = a, i.state = z, i.context = f, a = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Ir(e, t), f = t.memoizedProps, j = wa(l, f), i.props = j, G = t.pendingProps, O = i.context, z = l.contextType, g = Ia, typeof z == "object" && z !== null && (g = pt(z)), d = l.getDerivedStateFromProps, (z = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== G || O !== g) && qs(
        t,
        i,
        a,
        g
      ), Xl = !1, O = t.memoizedState, i.state = O, Fn(t, a, i, n), Wn();
      var U = t.memoizedState;
      f !== G || O !== U || Xl || e !== null && e.dependencies !== null && ii(e.dependencies) ? (typeof d == "function" && (Sc(
        t,
        l,
        d,
        a
      ), U = t.memoizedState), (j = Xl || Ys(
        t,
        l,
        j,
        a,
        O,
        U,
        g
      ) || e !== null && e.dependencies !== null && ii(e.dependencies)) ? (z || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, U, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        U,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = U), i.props = a, i.state = U, i.context = g, a = j) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, Mi(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = on(
      t,
      e.child,
      null,
      n
    ), t.child = on(
      t,
      null,
      l,
      n
    )) : mt(e, t, l, n), t.memoizedState = i.state, e = t.child) : e = zl(
      e,
      t,
      n
    ), e;
  }
  function td(e, t, l, a) {
    return Xn(), t.flags |= 256, mt(e, t, l, a), t.child;
  }
  var Dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mc(e) {
    return { baseLanes: e, cachePool: Xo() };
  }
  function Ac(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= $t), e;
  }
  function ld(e, t, l) {
    var a = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (ft.current & 2) !== 0), f && (n = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (He) {
        if (n ? Kl(t) : Jl(), He) {
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
              treeContext: Da !== null ? { id: El, overflow: Rl } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, g = wt(
              18,
              null,
              null,
              0
            ), g.stateNode = d, g.return = t, t.child = g, Rt = t, Ie = null, g = !0) : g = !1;
          }
          g || za(t);
        }
        if (d = t.memoizedState, d !== null && (d = d.dehydrated, d !== null))
          return of(d) ? t.lanes = 32 : t.lanes = 536870912, null;
        Al(t);
      }
      return d = a.children, a = a.fallback, n ? (Jl(), n = t.mode, d = Ai(
        { mode: "hidden", children: d },
        n
      ), a = Ta(
        a,
        n,
        l,
        null
      ), d.return = t, a.return = t, d.sibling = a, t.child = d, n = t.child, n.memoizedState = Mc(l), n.childLanes = Ac(
        e,
        f,
        l
      ), t.memoizedState = Dc, a) : (Kl(t), zc(t, d));
    }
    if (g = e.memoizedState, g !== null && (d = g.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (Kl(t), t.flags &= -257, t = Oc(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Jl(), t.child = e.child, t.flags |= 128, t = null) : (Jl(), n = a.fallback, d = t.mode, a = Ai(
          { mode: "visible", children: a.children },
          d
        ), n = Ta(
          n,
          d,
          l,
          null
        ), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, on(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = Mc(l), a.childLanes = Ac(
          e,
          f,
          l
        ), t.memoizedState = Dc, t = n);
      else if (Kl(t), of(d)) {
        if (f = d.nextSibling && d.nextSibling.dataset, f) var z = f.dgst;
        f = z, a = Error(o(419)), a.stack = "", a.digest = f, Qn({ value: a, source: null, stack: null }), t = Oc(
          e,
          t,
          l
        );
      } else if (ot || Vn(e, t, l, !1), f = (l & e.childLanes) !== 0, ot || f) {
        if (f = Ve, f !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : On(a), a = (a & (f.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== g.retryLane))
          throw g.retryLane = a, Pa(e, a), Bt(f, e, a), Js;
        d.data === "$?" || Kc(), t = Oc(
          e,
          t,
          l
        );
      } else
        d.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Ie = ul(
          d.nextSibling
        ), Rt = t, He = !0, Aa = null, fl = !1, e !== null && (Zt[Kt++] = El, Zt[Kt++] = Rl, Zt[Kt++] = Da, El = e.id, Rl = e.overflow, Da = t), t = zc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Jl(), n = a.fallback, d = t.mode, g = e.child, z = g.sibling, a = Sl(g, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = g.subtreeFlags & 65011712, z !== null ? n = Sl(z, n) : (n = Ta(
      n,
      d,
      l,
      null
    ), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, a = n, n = t.child, d = e.child.memoizedState, d === null ? d = Mc(l) : (g = d.cachePool, g !== null ? (z = ct._currentValue, g = g.parent !== z ? { parent: z, pool: z } : g) : g = Xo(), d = {
      baseLanes: d.baseLanes | l,
      cachePool: g
    }), n.memoizedState = d, n.childLanes = Ac(
      e,
      f,
      l
    ), t.memoizedState = Dc, a) : (Kl(t), l = e.child, e = l.sibling, l = Sl(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function zc(e, t) {
    return t = Ai(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ai(e, t) {
    return e = wt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Oc(e, t, l) {
    return on(t, e.child, null, l), e = zc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function ad(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Kr(e.return, t, l);
  }
  function _c(e, t, l, a, n) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n);
  }
  function nd(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, i = a.tail;
    if (mt(e, t, a.children, l), a = ft.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ad(e, l, t);
          else if (e.tag === 19)
            ad(e, l, t);
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
    switch (J(ft, a), n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          e = l.alternate, e !== null && Ri(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), _c(
          t,
          !1,
          n,
          l,
          i
        );
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Ri(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        _c(
          t,
          !0,
          l,
          null,
          i
        );
        break;
      case "together":
        _c(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function zl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Pl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Vn(
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
      for (e = t.child, l = Sl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Sl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function xc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ii(e)));
  }
  function By(e, t, l) {
    switch (t.tag) {
      case 3:
        Qe(t, t.stateNode.containerInfo), Gl(t, ct, e.memoizedState.cache), Xn();
        break;
      case 27:
      case 5:
        rt(t);
        break;
      case 4:
        Qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Gl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Kl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ld(e, t, l) : (Kl(t), e = zl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Kl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Vn(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return nd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), J(ft, ft.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Fs(e, t, l);
      case 24:
        Gl(t, ct, e.memoizedState.cache);
    }
    return zl(e, t, l);
  }
  function ud(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!xc(e, l) && (t.flags & 128) === 0)
          return ot = !1, By(
            e,
            t,
            l
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, He && (t.flags & 1048576) !== 0 && Ho(t, ui, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType, n = a._init;
          if (a = n(a._payload), t.type = a, typeof a == "function")
            Yr(a) ? (e = wa(a, e), t.tag = 1, t = ed(
              null,
              t,
              a,
              e,
              l
            )) : (t.tag = 0, t = Tc(
              null,
              t,
              a,
              e,
              l
            ));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === he) {
                t.tag = 11, t = $s(
                  null,
                  t,
                  a,
                  e,
                  l
                );
                break e;
              } else if (n === ve) {
                t.tag = 14, t = ks(
                  null,
                  t,
                  a,
                  e,
                  l
                );
                break e;
              }
            }
            throw t = Ne(a) || a, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Tc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = wa(
          a,
          t.pendingProps
        ), ed(
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
          var i = t.memoizedState;
          n = i.element, Ir(e, t), Fn(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, Gl(t, ct, a), a !== i.cache && Jr(
            t,
            [ct],
            l,
            !0
          ), Wn(), a = f.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = td(
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
              ), Qn(n), t = td(
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
              for (Ie = ul(e.firstChild), Rt = t, He = !0, Aa = null, fl = !0, l = Bs(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Xn(), a === n) {
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
        return Mi(e, t), e === null ? (l = fh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : He || (l = t.type, e = t.pendingProps, a = qi(
          ce.current
        ).createElement(l), a[X] = t, a[V] = e, vt(a, l, e), we(a), t.stateNode = a) : t.memoizedState = fh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return rt(t), e === null && He && (a = t.stateNode = ih(
          t.type,
          t.pendingProps,
          ce.current
        ), Rt = t, fl = !0, n = Ie, la(t.type) ? (sf = n, Ie = ul(
          a.firstChild
        )) : Ie = n), mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Mi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && He && ((n = a = Ie) && (a = sv(
          a,
          t.type,
          t.pendingProps,
          fl
        ), a !== null ? (t.stateNode = a, Rt = t, Ie = ul(
          a.firstChild
        ), fl = !1, n = !0) : n = !1), n || za(t)), rt(t), n = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = i.children, rf(n, i) ? a = null : f !== null && rf(n, f) && (t.flags |= 32), t.memoizedState !== null && (n = uc(
          e,
          t,
          _y,
          null,
          null,
          l
        ), bu._currentValue = n), Mi(e, t), mt(e, t, a, l), t.child;
      case 6:
        return e === null && He && ((e = l = Ie) && (l = dv(
          l,
          t.pendingProps,
          fl
        ), l !== null ? (t.stateNode = l, Rt = t, Ie = null, e = !0) : e = !1), e || za(t)), null;
      case 13:
        return ld(e, t, l);
      case 4:
        return Qe(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = on(
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
        return $s(
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
        return a = t.pendingProps, Gl(t, t.type, a.value), mt(
          e,
          t,
          a.children,
          l
        ), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, _a(t), n = pt(n), a = a(n), t.flags |= 1, mt(e, t, a, l), t.child;
      case 14:
        return ks(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Ws(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return nd(e, t, l);
      case 31:
        return a = t.pendingProps, l = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, e === null ? (l = Ai(
          a,
          l
        ), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Sl(e.child, a), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
      case 22:
        return Fs(e, t, l);
      case 24:
        return _a(t), a = pt(ct), e === null ? (n = Wr(), n === null && (n = Ve, i = $r(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), t.memoizedState = {
          parent: a,
          cache: n
        }, Pr(t), Gl(t, ct, n)) : ((e.lanes & l) !== 0 && (Ir(e, t), Fn(t, null, null, l), Wn()), n = e.memoizedState, i = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Gl(t, ct, a)) : (a = i.cache, Gl(t, ct, a), a !== n.cache && Jr(
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
  function id(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !mh(t)) {
      if (t = Jt.current, t !== null && ((_e & 4194048) === _e ? ol !== null : (_e & 62914560) !== _e && (_e & 536870912) === 0 || t !== ol))
        throw $n = Fr, Qo;
      e.flags |= 8192;
    }
  }
  function zi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Qu() : 536870912, e.lanes |= t, mn |= t);
  }
  function nu(e, t) {
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
  function jy(e, t, l) {
    var a = t.pendingProps;
    switch (Qr(t), t.tag) {
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
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Dl(ct), il(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Gn(t) ? Ol(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, jo())), Pe(t), null;
      case 26:
        return l = t.memoizedState, e === null ? (Ol(t), l !== null ? (Pe(t), id(t, l)) : (Pe(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Ol(t), Pe(t), id(t, l)) : (Pe(t), t.flags &= -16777217) : (e.memoizedProps !== a && Ol(t), Pe(t), t.flags &= -16777217), null;
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
          e = ae.current, Gn(t) ? Lo(t) : (e = ih(n, a, l), t.stateNode = e, Ol(t));
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
          if (e = ae.current, Gn(t))
            Lo(t);
          else {
            switch (n = qi(
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
            e[X] = t, e[V] = a;
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
            e: switch (vt(e, l, a), l) {
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
          if (e = ce.current, Gn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = Rt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[X] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Id(e.nodeValue, l)), e || za(t);
          } else
            e = qi(e).createTextNode(
              a
            ), e[X] = t, t.stateNode = e;
        }
        return Pe(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Gn(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[X] = t;
            } else
              Xn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Pe(t), n = !1;
          } else
            n = jo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Al(t), t) : (Al(t), null);
        }
        if (Al(t), (t.flags & 128) !== 0)
          return t.lanes = l, t;
        if (l = a !== null, e = e !== null && e.memoizedState !== null, l) {
          a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048);
        }
        return l !== e && l && (t.child.flags |= 8192), zi(t, t.updateQueue), Pe(t), null;
      case 4:
        return il(), e === null && tf(t.stateNode.containerInfo), Pe(t), null;
      case 10:
        return Dl(t.type), Pe(t), null;
      case 19:
        if ($(ft), n = t.memoizedState, n === null) return Pe(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) nu(n, !1);
          else {
            if (et !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Ri(e), i !== null) {
                  for (t.flags |= 128, nu(n, !1), e = i.updateQueue, t.updateQueue = e, zi(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    No(l, e), l = l.sibling;
                  return J(
                    ft,
                    ft.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && xt() > xi && (t.flags |= 128, a = !0, nu(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Ri(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, zi(t, e), nu(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !He)
                return Pe(t), null;
            } else
              2 * xt() - n.renderingStartTime > xi && l !== 536870912 && (t.flags |= 128, a = !0, nu(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = xt(), t.sibling = null, e = ft.current, J(ft, a ? e & 1 | 2 : e & 1), t) : (Pe(t), null);
      case 22:
      case 23:
        return Al(t), ac(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), l = t.updateQueue, l !== null && zi(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && $(xa), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Dl(ct), Pe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Yy(e, t) {
    switch (Qr(t), t.tag) {
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
          Xn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return $(ft), null;
      case 4:
        return il(), null;
      case 10:
        return Dl(t.type), null;
      case 22:
      case 23:
        return Al(t), ac(), e !== null && $(xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Dl(ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function rd(e, t) {
    switch (Qr(t), t.tag) {
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
        $(ft);
        break;
      case 10:
        Dl(t.type);
        break;
      case 22:
      case 23:
        Al(t), ac(), e !== null && $(xa);
        break;
      case 24:
        Dl(ct);
    }
  }
  function uu(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create, f = l.inst;
            a = i(), f.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      Xe(t, t.return, d);
    }
  }
  function $l(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst, d = f.destroy;
            if (d !== void 0) {
              f.destroy = void 0, n = t;
              var g = l, z = d;
              try {
                z();
              } catch (j) {
                Xe(
                  n,
                  g,
                  j
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (j) {
      Xe(t, t.return, j);
    }
  }
  function cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        ko(t, l);
      } catch (a) {
        Xe(e, e.return, a);
      }
    }
  }
  function fd(e, t, l) {
    l.props = wa(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Xe(e, t, a);
    }
  }
  function iu(e, t) {
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
  function od(e) {
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
  function Uc(e, t, l) {
    try {
      var a = e.stateNode;
      iv(a, e.type, l, t), a[V] = t;
    } catch (n) {
      Xe(e, e.return, n);
    }
  }
  function sd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && la(e.type) || e.tag === 4;
  }
  function wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || sd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && la(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Cc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Yi));
    else if (a !== 4 && (a === 27 && la(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Cc(e, t, l), e = e.sibling; e !== null; )
        Cc(e, t, l), e = e.sibling;
  }
  function Oi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && la(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Oi(e, t, l), e = e.sibling; e !== null; )
        Oi(e, t, l), e = e.sibling;
  }
  function dd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      vt(t, a, l), t[X] = e, t[V] = l;
    } catch (i) {
      Xe(e, e.return, i);
    }
  }
  var _l = !1, at = !1, Nc = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, st = null;
  function qy(e, t) {
    if (e = e.containerInfo, nf = Ki, e = Do(e), wr(e)) {
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
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0, d = -1, g = -1, z = 0, j = 0, G = e, O = null;
            t: for (; ; ) {
              for (var U; G !== l || n !== 0 && G.nodeType !== 3 || (d = f + n), G !== i || a !== 0 && G.nodeType !== 3 || (g = f + a), G.nodeType === 3 && (f += G.nodeValue.length), (U = G.firstChild) !== null; )
                O = G, G = U;
              for (; ; ) {
                if (G === e) break t;
                if (O === l && ++z === n && (d = f), O === i && ++j === a && (g = f), (U = G.nextSibling) !== null) break;
                G = O, O = G.parentNode;
              }
              G = U;
            }
            l = d === -1 || g === -1 ? null : { start: d, end: g };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (uf = { focusedElem: e, selectionRange: l }, Ki = !1, st = t; st !== null; )
      if (t = st, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, st = e;
      else
        for (; st !== null; ) {
          switch (t = st, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var de = wa(
                    l.type,
                    n,
                    l.elementType === l.type
                  );
                  e = a.getSnapshotBeforeUpdate(
                    de,
                    i
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
                  ff(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ff(e);
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
  function md(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        kl(e, l), a & 4 && uu(5, l);
        break;
      case 1:
        if (kl(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Xe(l, l.return, f);
            }
          else {
            var n = wa(
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
            } catch (f) {
              Xe(
                l,
                l.return,
                f
              );
            }
          }
        a & 64 && cd(l), a & 512 && iu(l, l.return);
        break;
      case 3:
        if (kl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
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
            ko(e, t);
          } catch (f) {
            Xe(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && dd(l);
      case 26:
      case 5:
        kl(e, l), t === null && a & 4 && od(l), a & 512 && iu(l, l.return);
        break;
      case 12:
        kl(e, l);
        break;
      case 13:
        kl(e, l), a & 4 && gd(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = ky.bind(
          null,
          l
        ), hv(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || _l, !a) {
          t = t !== null && t.memoizedState !== null || at, n = _l;
          var i = at;
          _l = a, (at = t) && !i ? Wl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : kl(e, l), _l = n, at = i;
        }
        break;
      case 30:
        break;
      default:
        kl(e, l);
    }
  }
  function yd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && se(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ke = null, Ot = !1;
  function xl(e, t, l) {
    for (l = l.child; l !== null; )
      vd(e, t, l), l = l.sibling;
  }
  function vd(e, t, l) {
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
        la(l.type) && (ke = l.stateNode, Ot = !1), xl(
          e,
          t,
          l
        ), yu(l.stateNode), ke = a, Ot = n;
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
            } catch (i) {
              Xe(
                l,
                t,
                i
              );
            }
          else
            try {
              ke.removeChild(l.stateNode);
            } catch (i) {
              Xe(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        ke !== null && (Ot ? (e = ke, nh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Tu(e)) : nh(ke, l.stateNode));
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
        at || $l(2, l, t), at || $l(4, l, t), xl(
          e,
          t,
          l
        );
        break;
      case 1:
        at || (sl(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && fd(
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
  function gd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Tu(e);
      } catch (l) {
        Xe(t, t.return, l);
      }
  }
  function Gy(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new hd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new hd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Hc(e, t) {
    var l = Gy(e);
    t.forEach(function(a) {
      var n = Wy.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function Ct(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], i = e, f = t, d = f;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (la(d.type)) {
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
        vd(i, f, n), ke = null, Ot = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        pd(t, e), t = t.sibling;
  }
  var nl = null;
  function pd(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ct(t, e), Nt(e), a & 4 && ($l(3, e, e.return), uu(3, e), $l(5, e, e.return));
        break;
      case 1:
        Ct(t, e), Nt(e), a & 512 && (at || l === null || sl(l, l.return)), a & 64 && _l && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = nl;
        if (Ct(t, e), Nt(e), a & 512 && (at || l === null || sl(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[oe] || i[X] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), vt(i, a, l), i[X] = e, we(i), a = i;
                      break e;
                    case "link":
                      var f = dh(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (f) {
                        for (var d = 0; d < f.length; d++)
                          if (i = f[d], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(d, 1);
                            break t;
                          }
                      }
                      i = n.createElement(a), vt(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = dh(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (d = 0; d < f.length; d++)
                          if (i = f[d], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(d, 1);
                            break t;
                          }
                      }
                      i = n.createElement(a), vt(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  i[X] = e, we(i), a = i;
                }
                e.stateNode = a;
              } else
                hh(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = sh(
                n,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? hh(
              n,
              e.type,
              e.stateNode
            ) : sh(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && Uc(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Ct(t, e), Nt(e), a & 512 && (at || l === null || sl(l, l.return)), l !== null && a & 4 && Uc(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Ct(t, e), Nt(e), a & 512 && (at || l === null || sl(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Za(n, "");
          } catch (U) {
            Xe(e, e.return, U);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, Uc(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Nc = !0);
        break;
      case 6:
        if (Ct(t, e), Nt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (U) {
            Xe(e, e.return, U);
          }
        }
        break;
      case 3:
        if (Qi = null, n = nl, nl = Gi(t.containerInfo), Ct(t, e), nl = n, Nt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Tu(t.containerInfo);
          } catch (U) {
            Xe(e, e.return, U);
          }
        Nc && (Nc = !1, bd(e));
        break;
      case 4:
        a = nl, nl = Gi(
          e.stateNode.containerInfo
        ), Ct(t, e), Nt(e), nl = a;
        break;
      case 12:
        Ct(t, e), Nt(e);
        break;
      case 13:
        Ct(t, e), Nt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Gc = xt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Hc(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var g = l !== null && l.memoizedState !== null, z = _l, j = at;
        if (_l = z || n, at = j || g, Ct(t, e), at = j, _l = z, Nt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || g || _l || at || Ca(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                g = l = t;
                try {
                  if (i = g.stateNode, n)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    d = g.stateNode;
                    var G = g.memoizedProps.style, O = G != null && G.hasOwnProperty("display") ? G.display : null;
                    d.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (U) {
                  Xe(g, g.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = n ? "" : g.memoizedProps;
                } catch (U) {
                  Xe(g, g.return, U);
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
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Hc(e, l))));
        break;
      case 19:
        Ct(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Hc(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (sd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, i = wc(e);
            Oi(e, i, n);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Za(f, ""), l.flags &= -33);
            var d = wc(e);
            Oi(e, d, f);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo, z = wc(e);
            Cc(
              e,
              z,
              g
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        Xe(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        bd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function kl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        md(e, t.alternate, t), t = t.sibling;
  }
  function Ca(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $l(4, t, t.return), Ca(t);
          break;
        case 1:
          sl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && fd(
            t,
            t.return,
            l
          ), Ca(t);
          break;
        case 27:
          yu(t.stateNode);
        case 26:
        case 5:
          sl(t, t.return), Ca(t);
          break;
        case 22:
          t.memoizedState === null && Ca(t);
          break;
        case 30:
          Ca(t);
          break;
        default:
          Ca(t);
      }
      e = e.sibling;
    }
  }
  function Wl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Wl(
            n,
            i,
            l
          ), uu(4, i);
          break;
        case 1:
          if (Wl(
            n,
            i,
            l
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (z) {
              Xe(a, a.return, z);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var d = a.stateNode;
            try {
              var g = n.shared.hiddenCallbacks;
              if (g !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
                  $o(g[n], d);
            } catch (z) {
              Xe(a, a.return, z);
            }
          }
          l && f & 64 && cd(i), iu(i, i.return);
          break;
        case 27:
          dd(i);
        case 26:
        case 5:
          Wl(
            n,
            i,
            l
          ), l && a === null && f & 4 && od(i), iu(i, i.return);
          break;
        case 12:
          Wl(
            n,
            i,
            l
          );
          break;
        case 13:
          Wl(
            n,
            i,
            l
          ), l && f & 4 && gd(n, i);
          break;
        case 22:
          i.memoizedState === null && Wl(
            n,
            i,
            l
          ), iu(i, i.return);
          break;
        case 30:
          break;
        default:
          Wl(
            n,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Lc(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Zn(l));
  }
  function Bc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Zn(e));
  }
  function dl(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Sd(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function Sd(e, t, l, a) {
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
        ), n & 2048 && uu(9, t);
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
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Zn(e)));
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
            var i = t.memoizedProps, f = i.id, d = i.onPostCommit;
            typeof d == "function" && d(
              f,
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
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? dl(
          e,
          t,
          l,
          a
        ) : ru(e, t) : i._visibility & 2 ? dl(
          e,
          t,
          l,
          a
        ) : (i._visibility |= 2, sn(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), n & 2048 && Lc(f, t);
        break;
      case 24:
        dl(
          e,
          t,
          l,
          a
        ), n & 2048 && Bc(t.alternate, t);
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
  function sn(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e, f = t, d = l, g = a, z = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          sn(
            i,
            f,
            d,
            g,
            n
          ), uu(8, f);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null ? j._visibility & 2 ? sn(
            i,
            f,
            d,
            g,
            n
          ) : ru(
            i,
            f
          ) : (j._visibility |= 2, sn(
            i,
            f,
            d,
            g,
            n
          )), n && z & 2048 && Lc(
            f.alternate,
            f
          );
          break;
        case 24:
          sn(
            i,
            f,
            d,
            g,
            n
          ), n && z & 2048 && Bc(f.alternate, f);
          break;
        default:
          sn(
            i,
            f,
            d,
            g,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ru(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            ru(l, a), n & 2048 && Lc(
              a.alternate,
              a
            );
            break;
          case 24:
            ru(l, a), n & 2048 && Bc(a.alternate, a);
            break;
          default:
            ru(l, a);
        }
        t = t.sibling;
      }
  }
  var cu = 8192;
  function dn(e) {
    if (e.subtreeFlags & cu)
      for (e = e.child; e !== null; )
        Ed(e), e = e.sibling;
  }
  function Ed(e) {
    switch (e.tag) {
      case 26:
        dn(e), e.flags & cu && e.memoizedState !== null && Av(
          nl,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        dn(e);
        break;
      case 3:
      case 4:
        var t = nl;
        nl = Gi(e.stateNode.containerInfo), dn(e), nl = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = cu, cu = 16777216, dn(e), cu = t) : dn(e));
        break;
      default:
        dn(e);
    }
  }
  function Rd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function fu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          st = a, Dd(
            a,
            e
          );
        }
      Rd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Td(e), e = e.sibling;
  }
  function Td(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        fu(e), e.flags & 2048 && $l(9, e, e.return);
        break;
      case 3:
        fu(e);
        break;
      case 12:
        fu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, _i(e)) : fu(e);
        break;
      default:
        fu(e);
    }
  }
  function _i(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          st = a, Dd(
            a,
            e
          );
        }
      Rd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          $l(8, t, t.return), _i(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, _i(t));
          break;
        default:
          _i(t);
      }
      e = e.sibling;
    }
  }
  function Dd(e, t) {
    for (; st !== null; ) {
      var l = st;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          $l(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Zn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, st = a;
      else
        e: for (l = e; st !== null; ) {
          a = st;
          var n = a.sibling, i = a.return;
          if (yd(a), a === l) {
            st = null;
            break e;
          }
          if (n !== null) {
            n.return = i, st = n;
            break e;
          }
          st = i;
        }
    }
  }
  var Xy = {
    getCacheForType: function(e) {
      var t = pt(ct), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    }
  }, Qy = typeof WeakMap == "function" ? WeakMap : Map, Be = 0, Ve = null, De = null, _e = 0, je = 0, Ht = null, Fl = !1, hn = !1, jc = !1, Ul = 0, et = 0, Pl = 0, Na = 0, Yc = 0, $t = 0, mn = 0, ou = null, _t = null, qc = !1, Gc = 0, xi = 1 / 0, Ui = null, Il = null, yt = 0, ea = null, yn = null, vn = 0, Xc = 0, Qc = null, Md = null, su = 0, Vc = null;
  function Lt() {
    if ((Be & 2) !== 0 && _e !== 0)
      return _e & -_e;
    if (x.T !== null) {
      var e = ln;
      return e !== 0 ? e : Fc();
    }
    return S();
  }
  function Ad() {
    $t === 0 && ($t = (_e & 536870912) === 0 || He ? Xa() : 536870912);
    var e = Jt.current;
    return e !== null && (e.flags |= 32), $t;
  }
  function Bt(e, t, l) {
    (e === Ve && (je === 2 || je === 9) || e.cancelPendingCommit !== null) && (gn(e, 0), ta(
      e,
      _e,
      $t,
      !1
    )), va(e, l), ((Be & 2) === 0 || e !== Ve) && (e === Ve && ((Be & 2) === 0 && (Na |= l), et === 4 && ta(
      e,
      _e,
      $t,
      !1
    )), hl(e));
  }
  function zd(e, t, l) {
    if ((Be & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || cl(e, t), n = a ? Ky(e, t) : Jc(e, t, !0), i = a;
    do {
      if (n === 0) {
        hn && !a && ta(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !Vy(l)) {
          n = Jc(e, t, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var d = e;
              n = ou;
              var g = d.current.memoizedState.isDehydrated;
              if (g && (gn(d, f).flags |= 256), f = Jc(
                d,
                f,
                !1
              ), f !== 2) {
                if (jc && !g) {
                  d.errorRecoveryDisabledLanes |= i, Na |= i, n = 4;
                  break e;
                }
                i = _t, _t = n, i !== null && (_t === null ? _t = i : _t.push.apply(
                  _t,
                  i
                ));
              }
              n = f;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          gn(e, 0), ta(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = n, i) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ta(
                a,
                t,
                $t,
                !Fl
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
          if ((t & 62914560) === t && (n = Gc + 300 - xt(), 10 < n)) {
            if (ta(
              a,
              t,
              $t,
              !Fl
            ), ya(a, 0, !0) !== 0) break e;
            a.timeoutHandle = lh(
              Od.bind(
                null,
                a,
                l,
                _t,
                Ui,
                qc,
                t,
                $t,
                Na,
                mn,
                Fl,
                i,
                2,
                -0,
                0
              ),
              n
            );
            break e;
          }
          Od(
            a,
            l,
            _t,
            Ui,
            qc,
            t,
            $t,
            Na,
            mn,
            Fl,
            i,
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
  function Od(e, t, l, a, n, i, f, d, g, z, j, G, O, U) {
    if (e.timeoutHandle = -1, G = t.subtreeFlags, (G & 8192 || (G & 16785408) === 16785408) && (pu = { stylesheets: null, count: 0, unsuspend: Mv }, Ed(t), G = zv(), G !== null)) {
      e.cancelPendingCommit = G(
        Hd.bind(
          null,
          e,
          t,
          i,
          l,
          a,
          n,
          f,
          d,
          g,
          j,
          1,
          O,
          U
        )
      ), ta(e, i, f, !z);
      return;
    }
    Hd(
      e,
      t,
      i,
      l,
      a,
      n,
      f,
      d,
      g
    );
  }
  function Vy(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!Ut(i(), n)) return !1;
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
  function ta(e, t, l, a) {
    t &= ~Yc, t &= ~Na, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var i = 31 - ht(n), f = 1 << i;
      a[i] = -1, n &= ~f;
    }
    l !== 0 && ga(e, l, t);
  }
  function wi() {
    return (Be & 6) === 0 ? (du(0), !1) : !0;
  }
  function Zc() {
    if (De !== null) {
      if (je === 0)
        var e = De.return;
      else
        e = De, Tl = Oa = null, cc(e), fn = null, lu = 0, e = De;
      for (; e !== null; )
        rd(e.alternate, e), e = e.return;
      De = null;
    }
  }
  function gn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, cv(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Zc(), Ve = e, De = l = Sl(e.current, null), _e = t, je = 0, Ht = null, Fl = !1, hn = cl(e, t), jc = !1, mn = $t = Yc = Na = Pl = et = 0, _t = ou = null, qc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ht(a), i = 1 << n;
        t |= e[n], a &= ~i;
      }
    return Ul = t, ei(), l;
  }
  function _d(e, t) {
    Se = null, x.H = bi, t === Jn || t === fi ? (t = Ko(), je = 3) : t === Qo ? (t = Ko(), je = 4) : je = t === Js ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, De === null && (et = 1, Di(
      e,
      Qt(t, e.current)
    ));
  }
  function xd() {
    var e = x.H;
    return x.H = bi, e === null ? bi : e;
  }
  function Ud() {
    var e = x.A;
    return x.A = Xy, e;
  }
  function Kc() {
    et = 4, Fl || (_e & 4194048) !== _e && Jt.current !== null || (hn = !0), (Pl & 134217727) === 0 && (Na & 134217727) === 0 || Ve === null || ta(
      Ve,
      _e,
      $t,
      !1
    );
  }
  function Jc(e, t, l) {
    var a = Be;
    Be |= 2;
    var n = xd(), i = Ud();
    (Ve !== e || _e !== t) && (Ui = null, gn(e, t)), t = !1;
    var f = et;
    e: do
      try {
        if (je !== 0 && De !== null) {
          var d = De, g = Ht;
          switch (je) {
            case 8:
              Zc(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Jt.current === null && (t = !0);
              var z = je;
              if (je = 0, Ht = null, pn(e, d, g, z), l && hn) {
                f = 0;
                break e;
              }
              break;
            default:
              z = je, je = 0, Ht = null, pn(e, d, g, z);
          }
        }
        Zy(), f = et;
        break;
      } catch (j) {
        _d(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Tl = Oa = null, Be = a, x.H = n, x.A = i, De === null && (Ve = null, _e = 0, ei()), f;
  }
  function Zy() {
    for (; De !== null; ) wd(De);
  }
  function Ky(e, t) {
    var l = Be;
    Be |= 2;
    var a = xd(), n = Ud();
    Ve !== e || _e !== t ? (Ui = null, xi = xt() + 500, gn(e, t)) : hn = cl(
      e,
      t
    );
    e: do
      try {
        if (je !== 0 && De !== null) {
          t = De;
          var i = Ht;
          t: switch (je) {
            case 1:
              je = 0, Ht = null, pn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Vo(i)) {
                je = 0, Ht = null, Cd(t);
                break;
              }
              t = function() {
                je !== 2 && je !== 9 || Ve !== e || (je = 7), hl(e);
              }, i.then(t, t);
              break e;
            case 3:
              je = 7;
              break e;
            case 4:
              je = 5;
              break e;
            case 7:
              Vo(i) ? (je = 0, Ht = null, Cd(t)) : (je = 0, Ht = null, pn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (De.tag) {
                case 26:
                  f = De.memoizedState;
                case 5:
                case 27:
                  var d = De;
                  if (!f || mh(f)) {
                    je = 0, Ht = null;
                    var g = d.sibling;
                    if (g !== null) De = g;
                    else {
                      var z = d.return;
                      z !== null ? (De = z, Ci(z)) : De = null;
                    }
                    break t;
                  }
              }
              je = 0, Ht = null, pn(e, t, i, 5);
              break;
            case 6:
              je = 0, Ht = null, pn(e, t, i, 6);
              break;
            case 8:
              Zc(), et = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Jy();
        break;
      } catch (j) {
        _d(e, j);
      }
    while (!0);
    return Tl = Oa = null, x.H = a, x.A = n, Be = l, De !== null ? 0 : (Ve = null, _e = 0, ei(), et);
  }
  function Jy() {
    for (; De !== null && !hr(); )
      wd(De);
  }
  function wd(e) {
    var t = ud(e.alternate, e, Ul);
    e.memoizedProps = e.pendingProps, t === null ? Ci(e) : De = t;
  }
  function Cd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Is(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          _e
        );
        break;
      case 11:
        t = Is(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          _e
        );
        break;
      case 5:
        cc(t);
      default:
        rd(l, t), t = De = No(t, Ul), t = ud(l, t, Ul);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ci(e) : De = t;
  }
  function pn(e, t, l, a) {
    Tl = Oa = null, cc(t), fn = null, lu = 0;
    var n = t.return;
    try {
      if (Ly(
        e,
        n,
        t,
        l,
        _e
      )) {
        et = 1, Di(
          e,
          Qt(l, e.current)
        ), De = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw De = n, i;
      et = 1, Di(
        e,
        Qt(l, e.current)
      ), De = null;
      return;
    }
    t.flags & 32768 ? (He || a === 1 ? e = !0 : hn || (_e & 536870912) !== 0 ? e = !1 : (Fl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Jt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Nd(t, e)) : Ci(t);
  }
  function Ci(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Nd(
          t,
          Fl
        );
        return;
      }
      e = t.return;
      var l = jy(
        t.alternate,
        t,
        Ul
      );
      if (l !== null) {
        De = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function Nd(e, t) {
    do {
      var l = Yy(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, De = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        De = e;
        return;
      }
      De = e = l;
    } while (e !== null);
    et = 6, De = null;
  }
  function Hd(e, t, l, a, n, i, f, d, g) {
    e.cancelPendingCommit = null;
    do
      Ni();
    while (yt !== 0);
    if ((Be & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= Br, Vu(
        e,
        l,
        i,
        f,
        d,
        g
      ), e === Ve && (De = Ve = null, _e = 0), yn = t, ea = e, vn = l, Xc = i, Qc = n, Md = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Fy(Ga, function() {
        return qd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = x.T, x.T = null, n = K.p, K.p = 2, f = Be, Be |= 4;
        try {
          qy(e, t, l);
        } finally {
          Be = f, K.p = n, x.T = a;
        }
      }
      yt = 1, Ld(), Bd(), jd();
    }
  }
  function Ld() {
    if (yt === 1) {
      yt = 0;
      var e = ea, t = yn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = x.T, x.T = null;
        var a = K.p;
        K.p = 2;
        var n = Be;
        Be |= 4;
        try {
          pd(t, e);
          var i = uf, f = Do(e.containerInfo), d = i.focusedElem, g = i.selectionRange;
          if (f !== d && d && d.ownerDocument && To(
            d.ownerDocument.documentElement,
            d
          )) {
            if (g !== null && wr(d)) {
              var z = g.start, j = g.end;
              if (j === void 0 && (j = z), "selectionStart" in d)
                d.selectionStart = z, d.selectionEnd = Math.min(
                  j,
                  d.value.length
                );
              else {
                var G = d.ownerDocument || document, O = G && G.defaultView || window;
                if (O.getSelection) {
                  var U = O.getSelection(), de = d.textContent.length, re = Math.min(g.start, de), Ge = g.end === void 0 ? re : Math.min(g.end, de);
                  !U.extend && re > Ge && (f = Ge, Ge = re, re = f);
                  var T = Ro(
                    d,
                    re
                  ), E = Ro(
                    d,
                    Ge
                  );
                  if (T && E && (U.rangeCount !== 1 || U.anchorNode !== T.node || U.anchorOffset !== T.offset || U.focusNode !== E.node || U.focusOffset !== E.offset)) {
                    var A = G.createRange();
                    A.setStart(T.node, T.offset), U.removeAllRanges(), re > Ge ? (U.addRange(A), U.extend(E.node, E.offset)) : (A.setEnd(E.node, E.offset), U.addRange(A));
                  }
                }
              }
            }
            for (G = [], U = d; U = U.parentNode; )
              U.nodeType === 1 && G.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < G.length; d++) {
              var Y = G[d];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          Ki = !!nf, uf = nf = null;
        } finally {
          Be = n, K.p = a, x.T = l;
        }
      }
      e.current = t, yt = 2;
    }
  }
  function Bd() {
    if (yt === 2) {
      yt = 0;
      var e = ea, t = yn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = x.T, x.T = null;
        var a = K.p;
        K.p = 2;
        var n = Be;
        Be |= 4;
        try {
          md(e, t.alternate, t);
        } finally {
          Be = n, K.p = a, x.T = l;
        }
      }
      yt = 3;
    }
  }
  function jd() {
    if (yt === 4 || yt === 3) {
      yt = 0, mr();
      var e = ea, t = yn, l = vn, a = Md;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? yt = 5 : (yt = 0, yn = ea = null, Yd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Il = null), _n(l), t = t.stateNode, We && typeof We.onCommitFiberRoot == "function")
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
        t = x.T, n = K.p, K.p = 2, x.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < a.length; f++) {
            var d = a[f];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          x.T = t, K.p = n;
        }
      }
      (vn & 3) !== 0 && Ni(), hl(e), n = e.pendingLanes, (l & 4194090) !== 0 && (n & 42) !== 0 ? e === Vc ? su++ : (su = 0, Vc = e) : su = 0, du(0);
    }
  }
  function Yd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Zn(t)));
  }
  function Ni(e) {
    return Ld(), Bd(), jd(), qd();
  }
  function qd() {
    if (yt !== 5) return !1;
    var e = ea, t = Xc;
    Xc = 0;
    var l = _n(vn), a = x.T, n = K.p;
    try {
      K.p = 32 > l ? 32 : l, x.T = null, l = Qc, Qc = null;
      var i = ea, f = vn;
      if (yt = 0, yn = ea = null, vn = 0, (Be & 6) !== 0) throw Error(o(331));
      var d = Be;
      if (Be |= 4, Td(i.current), Sd(
        i,
        i.current,
        f,
        l
      ), Be = d, du(0, !1), We && typeof We.onPostCommitFiberRoot == "function")
        try {
          We.onPostCommitFiberRoot(Tt, i);
        } catch {
        }
      return !0;
    } finally {
      K.p = n, x.T = a, Yd(e, t);
    }
  }
  function Gd(e, t, l) {
    t = Qt(l, t), t = Rc(e.stateNode, t, 2), e = Vl(e, t, 2), e !== null && (va(e, 2), hl(e));
  }
  function Xe(e, t, l) {
    if (e.tag === 3)
      Gd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Il === null || !Il.has(a))) {
            e = Qt(l, e), l = Zs(2), a = Vl(t, l, 2), a !== null && (Ks(
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
  function $c(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Qy();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (jc = !0, n.add(l), e = $y.bind(null, e, t, l), t.then(e, e));
  }
  function $y(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ve === e && (_e & l) === l && (et === 4 || et === 3 && (_e & 62914560) === _e && 300 > xt() - Gc ? (Be & 2) === 0 && gn(e, 0) : Yc |= l, mn === _e && (mn = 0)), hl(e);
  }
  function Xd(e, t) {
    t === 0 && (t = Qu()), e = Pa(e, t), e !== null && (va(e, t), hl(e));
  }
  function ky(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Xd(e, l);
  }
  function Wy(e, t) {
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
    a !== null && a.delete(t), Xd(e, l);
  }
  function Fy(e, t) {
    return An(e, t);
  }
  var Hi = null, bn = null, kc = !1, Li = !1, Wc = !1, Ha = 0;
  function hl(e) {
    e !== bn && e.next === null && (bn === null ? Hi = bn = e : bn = bn.next = e), Li = !0, kc || (kc = !0, Iy());
  }
  function du(e, t) {
    if (!Wc && Li) {
      Wc = !0;
      do
        for (var l = !1, a = Hi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var f = a.suspendedLanes, d = a.pingedLanes;
              i = (1 << 31 - ht(42 | e) + 1) - 1, i &= n & ~(f & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Kd(a, i));
          } else
            i = _e, i = ya(
              a,
              a === Ve ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || cl(a, i) || (l = !0, Kd(a, i));
          a = a.next;
        }
      while (l);
      Wc = !1;
    }
  }
  function Py() {
    Qd();
  }
  function Qd() {
    Li = kc = !1;
    var e = 0;
    Ha !== 0 && (rv() && (e = Ha), Ha = 0);
    for (var t = xt(), l = null, a = Hi; a !== null; ) {
      var n = a.next, i = Vd(a, t);
      i === 0 ? (a.next = null, l === null ? Hi = n : l.next = n, n === null && (bn = l)) : (l = a, (e !== 0 || (i & 3) !== 0) && (Li = !0)), a = n;
    }
    du(e);
  }
  function Vd(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - ht(i), d = 1 << f, g = n[f];
      g === -1 ? ((d & l) === 0 || (d & a) !== 0) && (n[f] = Xu(d, t)) : g <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = Ve, l = _e, l = ya(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (je === 2 || je === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && It(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || cl(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && It(a), _n(l)) {
        case 2:
        case 8:
          l = Yu;
          break;
        case 32:
          l = Ga;
          break;
        case 268435456:
          l = Hl;
          break;
        default:
          l = Ga;
      }
      return a = Zd.bind(null, e), l = An(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && It(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Zd(e, t) {
    if (yt !== 0 && yt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Ni() && e.callbackNode !== l)
      return null;
    var a = _e;
    return a = ya(
      e,
      e === Ve ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (zd(e, a, t), Vd(e, xt()), e.callbackNode != null && e.callbackNode === l ? Zd.bind(null, e) : null);
  }
  function Kd(e, t) {
    if (Ni()) return null;
    zd(e, t, !0);
  }
  function Iy() {
    fv(function() {
      (Be & 6) !== 0 ? An(
        ju,
        Py
      ) : Qd();
    });
  }
  function Fc() {
    return Ha === 0 && (Ha = Xa()), Ha;
  }
  function Jd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ju("" + e);
  }
  function $d(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function ev(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = Jd(
        (n[V] || null).action
      ), f = a.submitter;
      f && (t = (t = f[V] || null) ? Jd(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var d = new Fu(
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
                if (Ha !== 0) {
                  var g = f ? $d(n, f) : new FormData(n);
                  gc(
                    l,
                    {
                      pending: !0,
                      data: g,
                      method: n.method,
                      action: i
                    },
                    null,
                    g
                  );
                }
              } else
                typeof i == "function" && (d.preventDefault(), g = f ? $d(n, f) : new FormData(n), gc(
                  l,
                  {
                    pending: !0,
                    data: g,
                    method: n.method,
                    action: i
                  },
                  i,
                  g
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Pc = 0; Pc < Lr.length; Pc++) {
    var Ic = Lr[Pc], tv = Ic.toLowerCase(), lv = Ic[0].toUpperCase() + Ic.slice(1);
    al(
      tv,
      "on" + lv
    );
  }
  al(zo, "onAnimationEnd"), al(Oo, "onAnimationIteration"), al(_o, "onAnimationStart"), al("dblclick", "onDoubleClick"), al("focusin", "onFocus"), al("focusout", "onBlur"), al(by, "onTransitionRun"), al(Sy, "onTransitionStart"), al(Ey, "onTransitionCancel"), al(xo, "onTransitionEnd"), qt("onMouseEnter", ["mouseout", "mouseover"]), qt("onMouseLeave", ["mouseout", "mouseover"]), qt("onPointerEnter", ["pointerout", "pointerover"]), qt("onPointerLeave", ["pointerout", "pointerover"]), Et(
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
  var hu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), av = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu)
  );
  function kd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var d = a[f], g = d.instance, z = d.currentTarget;
            if (d = d.listener, g !== i && n.isPropagationStopped())
              break e;
            i = d, n.currentTarget = z;
            try {
              i(n);
            } catch (j) {
              Ti(j);
            }
            n.currentTarget = null, i = g;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (d = a[f], g = d.instance, z = d.currentTarget, d = d.listener, g !== i && n.isPropagationStopped())
              break e;
            i = d, n.currentTarget = z;
            try {
              i(n);
            } catch (j) {
              Ti(j);
            }
            n.currentTarget = null, i = g;
          }
      }
    }
  }
  function Me(e, t) {
    var l = t[ie];
    l === void 0 && (l = t[ie] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Wd(t, e, 2, !1), l.add(a));
  }
  function ef(e, t, l) {
    var a = 0;
    t && (a |= 4), Wd(
      l,
      e,
      a,
      t
    );
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(e) {
    if (!e[Bi]) {
      e[Bi] = !0, ze.forEach(function(l) {
        l !== "selectionchange" && (av.has(l) || ef(l, !1, e), ef(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bi] || (t[Bi] = !0, ef("selectionchange", !1, t));
    }
  }
  function Wd(e, t, l, a) {
    switch (Sh(t)) {
      case 2:
        var n = xv;
        break;
      case 8:
        n = Uv;
        break;
      default:
        n = vf;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !Tr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function lf(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var g = f.tag;
              if ((g === 3 || g === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; d !== null; ) {
            if (f = ye(d), f === null) return;
            if (g = f.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              a = i = f;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    lo(function() {
      var z = i, j = Er(l), G = [];
      e: {
        var O = Uo.get(e);
        if (O !== void 0) {
          var U = Fu, de = e;
          switch (e) {
            case "keypress":
              if (ku(l) === 0) break e;
            case "keydown":
            case "keyup":
              U = Fm;
              break;
            case "focusin":
              de = "focus", U = zr;
              break;
            case "focusout":
              de = "blur", U = zr;
              break;
            case "beforeblur":
            case "afterblur":
              U = zr;
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
              U = uo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Ym;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = ey;
              break;
            case zo:
            case Oo:
            case _o:
              U = Xm;
              break;
            case xo:
              U = ly;
              break;
            case "scroll":
            case "scrollend":
              U = Bm;
              break;
            case "wheel":
              U = ny;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Vm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = ro;
              break;
            case "toggle":
            case "beforetoggle":
              U = iy;
          }
          var re = (t & 4) !== 0, Ge = !re && (e === "scroll" || e === "scrollend"), T = re ? O !== null ? O + "Capture" : null : O;
          re = [];
          for (var E = z, A; E !== null; ) {
            var Y = E;
            if (A = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || A === null || T === null || (Y = wn(E, T), Y != null && re.push(
              mu(E, Y, A)
            )), Ge) break;
            E = E.return;
          }
          0 < re.length && (O = new U(
            O,
            de,
            null,
            l,
            j
          ), G.push({ event: O, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", O && l !== Sr && (de = l.relatedTarget || l.fromElement) && (ye(de) || de[te]))
            break e;
          if ((U || O) && (O = j.window === j ? j : (O = j.ownerDocument) ? O.defaultView || O.parentWindow : window, U ? (de = l.relatedTarget || l.toElement, U = z, de = de ? ye(de) : null, de !== null && (Ge = h(de), re = de.tag, de !== Ge || re !== 5 && re !== 27 && re !== 6) && (de = null)) : (U = null, de = z), U !== de)) {
            if (re = uo, Y = "onMouseLeave", T = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (re = ro, Y = "onPointerLeave", T = "onPointerEnter", E = "pointer"), Ge = U == null ? O : Ke(U), A = de == null ? O : Ke(de), O = new re(
              Y,
              E + "leave",
              U,
              l,
              j
            ), O.target = Ge, O.relatedTarget = A, Y = null, ye(j) === z && (re = new re(
              T,
              E + "enter",
              de,
              l,
              j
            ), re.target = A, re.relatedTarget = Ge, Y = re), Ge = Y, U && de)
              t: {
                for (re = U, T = de, E = 0, A = re; A; A = Sn(A))
                  E++;
                for (A = 0, Y = T; Y; Y = Sn(Y))
                  A++;
                for (; 0 < E - A; )
                  re = Sn(re), E--;
                for (; 0 < A - E; )
                  T = Sn(T), A--;
                for (; E--; ) {
                  if (re === T || T !== null && re === T.alternate)
                    break t;
                  re = Sn(re), T = Sn(T);
                }
                re = null;
              }
            else re = null;
            U !== null && Fd(
              G,
              O,
              U,
              re,
              !1
            ), de !== null && Ge !== null && Fd(
              G,
              Ge,
              de,
              re,
              !0
            );
          }
        }
        e: {
          if (O = z ? Ke(z) : window, U = O.nodeName && O.nodeName.toLowerCase(), U === "select" || U === "input" && O.type === "file")
            var I = vo;
          else if (mo(O))
            if (go)
              I = vy;
            else {
              I = my;
              var Re = hy;
            }
          else
            U = O.nodeName, !U || U.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? z && br(z.elementType) && (I = vo) : I = yy;
          if (I && (I = I(e, z))) {
            yo(
              G,
              I,
              l,
              j
            );
            break e;
          }
          Re && Re(e, O, z), e === "focusout" && z && O.type === "number" && z.memoizedProps.value != null && pr(O, "number", O.value);
        }
        switch (Re = z ? Ke(z) : window, e) {
          case "focusin":
            (mo(Re) || Re.contentEditable === "true") && (ka = Re, Cr = z, qn = null);
            break;
          case "focusout":
            qn = Cr = ka = null;
            break;
          case "mousedown":
            Nr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Nr = !1, Mo(G, l, j);
            break;
          case "selectionchange":
            if (py) break;
          case "keydown":
          case "keyup":
            Mo(G, l, j);
        }
        var ne;
        if (_r)
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
          $a ? so(e, l) && (fe = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (fe = "onCompositionStart");
        fe && (co && l.locale !== "ko" && ($a || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && $a && (ne = ao()) : (ql = j, Dr = "value" in ql ? ql.value : ql.textContent, $a = !0)), Re = ji(z, fe), 0 < Re.length && (fe = new io(
          fe,
          e,
          null,
          l,
          j
        ), G.push({ event: fe, listeners: Re }), ne ? fe.data = ne : (ne = ho(l), ne !== null && (fe.data = ne)))), (ne = cy ? fy(e, l) : oy(e, l)) && (fe = ji(z, "onBeforeInput"), 0 < fe.length && (Re = new io(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          j
        ), G.push({
          event: Re,
          listeners: fe
        }), Re.data = ne)), ev(
          G,
          e,
          z,
          l,
          j
        );
      }
      kd(G, t);
    });
  }
  function mu(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function ji(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = wn(e, l), n != null && a.unshift(
        mu(e, n, i)
      ), n = wn(e, t), n != null && a.push(
        mu(e, n, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Sn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Fd(e, t, l, a, n) {
    for (var i = t._reactName, f = []; l !== null && l !== a; ) {
      var d = l, g = d.alternate, z = d.stateNode;
      if (d = d.tag, g !== null && g === a) break;
      d !== 5 && d !== 26 && d !== 27 || z === null || (g = z, n ? (z = wn(l, i), z != null && f.unshift(
        mu(l, z, g)
      )) : n || (z = wn(l, i), z != null && f.push(
        mu(l, z, g)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var nv = /\r\n?/g, uv = /\u0000|\uFFFD/g;
  function Pd(e) {
    return (typeof e == "string" ? e : "" + e).replace(nv, `
`).replace(uv, "");
  }
  function Id(e, t) {
    return t = Pd(t), Pd(e) === t;
  }
  function Yi() {
  }
  function qe(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Za(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Za(e, "" + a);
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
        eo(e, a, i);
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
        a = Ju("" + a), e.setAttribute(l, a);
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
          typeof i == "function" && (l === "formAction" ? (t !== "input" && qe(e, t, "name", n.name, n, null), qe(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), qe(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), qe(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (qe(e, t, "encType", n.encType, n, null), qe(e, t, "method", n.method, n, null), qe(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = Ju("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Yi);
        break;
      case "onScroll":
        a != null && Me("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Me("scrollend", e);
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
        l = Ju("" + a), e.setAttributeNS(
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
        Me("beforetoggle", e), Me("toggle", e), Gt(e, "popover", a);
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Hm.get(l) || l, Gt(e, l, a));
    }
  }
  function af(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        eo(e, a, i);
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
        typeof a == "string" ? Za(e, a) : (typeof a == "number" || typeof a == "bigint") && Za(e, "" + a);
        break;
      case "onScroll":
        a != null && Me("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Me("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Yi);
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
        if (!Ll.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), i = e[V] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Gt(e, l, a);
          }
    }
  }
  function vt(e, t, l) {
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
        Me("error", e), Me("load", e);
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var f = l[i];
            if (f != null)
              switch (i) {
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
                  qe(e, t, i, f, l, null);
              }
          }
        n && qe(e, t, "srcSet", l.srcSet, l, null), a && qe(e, t, "src", l.src, l, null);
        return;
      case "input":
        Me("invalid", e);
        var d = i = f = n = null, g = null, z = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var j = l[a];
            if (j != null)
              switch (a) {
                case "name":
                  n = j;
                  break;
                case "type":
                  f = j;
                  break;
                case "checked":
                  g = j;
                  break;
                case "defaultChecked":
                  z = j;
                  break;
                case "value":
                  i = j;
                  break;
                case "defaultValue":
                  d = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null)
                    throw Error(o(137, t));
                  break;
                default:
                  qe(e, t, a, j, l, null);
              }
          }
        Wf(
          e,
          i,
          d,
          g,
          z,
          f,
          n,
          !1
        ), Zu(e);
        return;
      case "select":
        Me("invalid", e), a = f = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (d = l[n], d != null))
            switch (n) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                f = d;
                break;
              case "multiple":
                a = d;
              default:
                qe(e, t, n, d, l, null);
            }
        t = i, l = f, e.multiple = !!a, t != null ? Va(e, !!a, t, !1) : l != null && Va(e, !!a, l, !0);
        return;
      case "textarea":
        Me("invalid", e), i = n = a = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (d = l[f], d != null))
            switch (f) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(o(91));
                break;
              default:
                qe(e, t, f, d, l, null);
            }
        Pf(e, a, n, i), Zu(e);
        return;
      case "option":
        for (g in l)
          if (l.hasOwnProperty(g) && (a = l[g], a != null))
            switch (g) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                qe(e, t, g, a, l, null);
            }
        return;
      case "dialog":
        Me("beforetoggle", e), Me("toggle", e), Me("cancel", e), Me("close", e);
        break;
      case "iframe":
      case "object":
        Me("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < hu.length; a++)
          Me(hu[a], e);
        break;
      case "image":
        Me("error", e), Me("load", e);
        break;
      case "details":
        Me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Me("error", e), Me("load", e);
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
                qe(e, t, z, a, l, null);
            }
        return;
      default:
        if (br(t)) {
          for (j in l)
            l.hasOwnProperty(j) && (a = l[j], a !== void 0 && af(
              e,
              t,
              j,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && (a = l[d], a != null && qe(e, t, d, a, l, null));
  }
  function iv(e, t, l, a) {
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
        var n = null, i = null, f = null, d = null, g = null, z = null, j = null;
        for (U in l) {
          var G = l[U];
          if (l.hasOwnProperty(U) && G != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = G;
              default:
                a.hasOwnProperty(U) || qe(e, t, U, null, a, G);
            }
        }
        for (var O in a) {
          var U = a[O];
          if (G = l[O], a.hasOwnProperty(O) && (U != null || G != null))
            switch (O) {
              case "type":
                i = U;
                break;
              case "name":
                n = U;
                break;
              case "checked":
                z = U;
                break;
              case "defaultChecked":
                j = U;
                break;
              case "value":
                f = U;
                break;
              case "defaultValue":
                d = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(o(137, t));
                break;
              default:
                U !== G && qe(
                  e,
                  t,
                  O,
                  U,
                  a,
                  G
                );
            }
        }
        gr(
          e,
          f,
          d,
          g,
          z,
          j,
          i,
          n
        );
        return;
      case "select":
        U = f = d = O = null;
        for (i in l)
          if (g = l[i], l.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                U = g;
              default:
                a.hasOwnProperty(i) || qe(
                  e,
                  t,
                  i,
                  null,
                  a,
                  g
                );
            }
        for (n in a)
          if (i = a[n], g = l[n], a.hasOwnProperty(n) && (i != null || g != null))
            switch (n) {
              case "value":
                O = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== g && qe(
                  e,
                  t,
                  n,
                  i,
                  a,
                  g
                );
            }
        t = d, l = f, a = U, O != null ? Va(e, !!l, O, !1) : !!a != !!l && (t != null ? Va(e, !!l, t, !0) : Va(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        U = O = null;
        for (d in l)
          if (n = l[d], l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, d, null, a, n);
            }
        for (f in a)
          if (n = a[f], i = l[f], a.hasOwnProperty(f) && (n != null || i != null))
            switch (f) {
              case "value":
                O = n;
                break;
              case "defaultValue":
                U = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== i && qe(e, t, f, n, a, i);
            }
        Ff(e, O, U);
        return;
      case "option":
        for (var de in l)
          if (O = l[de], l.hasOwnProperty(de) && O != null && !a.hasOwnProperty(de))
            switch (de) {
              case "selected":
                e.selected = !1;
                break;
              default:
                qe(
                  e,
                  t,
                  de,
                  null,
                  a,
                  O
                );
            }
        for (g in a)
          if (O = a[g], U = l[g], a.hasOwnProperty(g) && O !== U && (O != null || U != null))
            switch (g) {
              case "selected":
                e.selected = O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                qe(
                  e,
                  t,
                  g,
                  O,
                  a,
                  U
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
          O = l[re], l.hasOwnProperty(re) && O != null && !a.hasOwnProperty(re) && qe(e, t, re, null, a, O);
        for (z in a)
          if (O = a[z], U = l[z], a.hasOwnProperty(z) && O !== U && (O != null || U != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  z,
                  O,
                  a,
                  U
                );
            }
        return;
      default:
        if (br(t)) {
          for (var Ge in l)
            O = l[Ge], l.hasOwnProperty(Ge) && O !== void 0 && !a.hasOwnProperty(Ge) && af(
              e,
              t,
              Ge,
              void 0,
              a,
              O
            );
          for (j in a)
            O = a[j], U = l[j], !a.hasOwnProperty(j) || O === U || O === void 0 && U === void 0 || af(
              e,
              t,
              j,
              O,
              a,
              U
            );
          return;
        }
    }
    for (var T in l)
      O = l[T], l.hasOwnProperty(T) && O != null && !a.hasOwnProperty(T) && qe(e, t, T, null, a, O);
    for (G in a)
      O = a[G], U = l[G], !a.hasOwnProperty(G) || O === U || O == null && U == null || qe(e, t, G, O, a, U);
  }
  var nf = null, uf = null;
  function qi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function eh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function th(e, t) {
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
  function rf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var cf = null;
  function rv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === cf ? !1 : (cf = e, !0) : (cf = null, !1);
  }
  var lh = typeof setTimeout == "function" ? setTimeout : void 0, cv = typeof clearTimeout == "function" ? clearTimeout : void 0, ah = typeof Promise == "function" ? Promise : void 0, fv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ah < "u" ? function(e) {
    return ah.resolve(null).then(e).catch(ov);
  } : lh;
  function ov(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function la(e) {
    return e === "head";
  }
  function nh(e, t) {
    var l = t, a = 0, n = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$") {
          if (0 < a && 8 > a) {
            l = a;
            var f = e.ownerDocument;
            if (l & 1 && yu(f.documentElement), l & 2 && yu(f.body), l & 4)
              for (l = f.head, yu(l), f = l.firstChild; f; ) {
                var d = f.nextSibling, g = f.nodeName;
                f[oe] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && f.rel.toLowerCase() === "stylesheet" || l.removeChild(f), f = d;
              }
          }
          if (n === 0) {
            e.removeChild(i), Tu(t);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
      else a = 0;
      l = i;
    } while (l);
    Tu(t);
  }
  function ff(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ff(l), se(l);
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
  function sv(e, t, l, a) {
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
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = ul(e.nextSibling), e === null) break;
    }
    return null;
  }
  function dv(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = ul(e.nextSibling), e === null)) return null;
    return e;
  }
  function of(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function hv(e, t) {
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
  var sf = null;
  function uh(e) {
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
  function ih(e, t, l) {
    switch (t = qi(l), e) {
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
  function yu(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    se(e);
  }
  var kt = /* @__PURE__ */ new Map(), rh = /* @__PURE__ */ new Set();
  function Gi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var wl = K.d;
  K.d = {
    f: mv,
    r: yv,
    D: vv,
    C: gv,
    L: pv,
    m: bv,
    X: Ev,
    S: Sv,
    M: Rv
  };
  function mv() {
    var e = wl.f(), t = wi();
    return e || t;
  }
  function yv(e) {
    var t = xe(e);
    t !== null && t.tag === 5 && t.type === "form" ? zs(t) : wl.r(e);
  }
  var En = typeof document > "u" ? null : document;
  function ch(e, t, l) {
    var a = En;
    if (a && typeof t == "string" && t) {
      var n = Xt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), rh.has(n) || (rh.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), vt(t, "link", e), we(t), a.head.appendChild(t)));
    }
  }
  function vv(e) {
    wl.D(e), ch("dns-prefetch", e, null);
  }
  function gv(e, t) {
    wl.C(e, t), ch("preconnect", e, t);
  }
  function pv(e, t, l) {
    wl.L(e, t, l);
    var a = En;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Xt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Xt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Xt(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = Rn(e);
          break;
        case "script":
          i = Tn(e);
      }
      kt.has(i) || (e = R(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), kt.set(i, e), a.querySelector(n) !== null || t === "style" && a.querySelector(vu(i)) || t === "script" && a.querySelector(gu(i)) || (t = a.createElement("link"), vt(t, "link", e), we(t), a.head.appendChild(t)));
    }
  }
  function bv(e, t) {
    wl.m(e, t);
    var l = En;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Xt(a) + '"][href="' + Xt(e) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Tn(e);
      }
      if (!kt.has(i) && (e = R({ rel: "modulepreload", href: e }, t), kt.set(i, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(gu(i)))
              return;
        }
        a = l.createElement("link"), vt(a, "link", e), we(a), l.head.appendChild(a);
      }
    }
  }
  function Sv(e, t, l) {
    wl.S(e, t, l);
    var a = En;
    if (a && e) {
      var n = Fe(a).hoistableStyles, i = Rn(e);
      t = t || "default";
      var f = n.get(i);
      if (!f) {
        var d = { loading: 0, preload: null };
        if (f = a.querySelector(
          vu(i)
        ))
          d.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = kt.get(i)) && df(e, l);
          var g = f = a.createElement("link");
          we(g), vt(g, "link", e), g._p = new Promise(function(z, j) {
            g.onload = z, g.onerror = j;
          }), g.addEventListener("load", function() {
            d.loading |= 1;
          }), g.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, Xi(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: d
        }, n.set(i, f);
      }
    }
  }
  function Ev(e, t) {
    wl.X(e, t);
    var l = En;
    if (l && e) {
      var a = Fe(l).hoistableScripts, n = Tn(e), i = a.get(n);
      i || (i = l.querySelector(gu(n)), i || (e = R({ src: e, async: !0 }, t), (t = kt.get(n)) && hf(e, t), i = l.createElement("script"), we(i), vt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Rv(e, t) {
    wl.M(e, t);
    var l = En;
    if (l && e) {
      var a = Fe(l).hoistableScripts, n = Tn(e), i = a.get(n);
      i || (i = l.querySelector(gu(n)), i || (e = R({ src: e, async: !0, type: "module" }, t), (t = kt.get(n)) && hf(e, t), i = l.createElement("script"), we(i), vt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function fh(e, t, l, a) {
    var n = (n = ce.current) ? Gi(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Rn(l.href), l = Fe(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Rn(l.href);
          var i = Fe(
            n
          ).hoistableStyles, f = i.get(e);
          if (f || (n = n.ownerDocument || n, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = n.querySelector(
            vu(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), kt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, kt.set(e, l), i || Tv(
            n,
            e,
            l,
            f.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Tn(l), l = Fe(
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
  function Rn(e) {
    return 'href="' + Xt(e) + '"';
  }
  function vu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function oh(e) {
    return R({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Tv(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), vt(t, "link", l), we(t), e.head.appendChild(t));
  }
  function Tn(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function gu(e) {
    return "script[async]" + e;
  }
  function sh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Xt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, we(a), a;
          var n = R({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), we(a), vt(a, "style", n), Xi(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = Rn(l.href);
          var i = e.querySelector(
            vu(n)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, we(i), i;
          a = oh(l), (n = kt.get(n)) && df(a, n), i = (e.ownerDocument || e).createElement("link"), we(i);
          var f = i;
          return f._p = new Promise(function(d, g) {
            f.onload = d, f.onerror = g;
          }), vt(i, "link", a), t.state.loading |= 4, Xi(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Tn(l.src), (n = e.querySelector(
            gu(i)
          )) ? (t.instance = n, we(n), n) : (a = l, (n = kt.get(i)) && (a = R({}, l), hf(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), we(n), vt(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Xi(a, l.precedence, e));
    return t.instance;
  }
  function Xi(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, f = 0; f < a.length; f++) {
      var d = a[f];
      if (d.dataset.precedence === t) i = d;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function df(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function hf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Qi = null;
  function dh(e, t, l) {
    if (Qi === null) {
      var a = /* @__PURE__ */ new Map(), n = Qi = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Qi, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[oe] || i[X] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var d = a.get(f);
        d ? d.push(i) : a.set(f, [i]);
      }
    }
    return a;
  }
  function hh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Dv(e, t, l) {
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
  function mh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var pu = null;
  function Mv() {
  }
  function Av(e, t, l) {
    if (pu === null) throw Error(o(475));
    var a = pu;
    if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Rn(l.href), i = e.querySelector(
          vu(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = Vi.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = i, we(i);
          return;
        }
        i = e.ownerDocument || e, l = oh(l), (n = kt.get(n)) && df(l, n), i = i.createElement("link"), we(i);
        var f = i;
        f._p = new Promise(function(d, g) {
          f.onload = d, f.onerror = g;
        }), vt(i, "link", l), t.instance = i;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Vi.bind(a), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function zv() {
    if (pu === null) throw Error(o(475));
    var e = pu;
    return e.stylesheets && e.count === 0 && mf(e, e.stylesheets), 0 < e.count ? function(t) {
      var l = setTimeout(function() {
        if (e.stylesheets && mf(e, e.stylesheets), e.unsuspend) {
          var a = e.unsuspend;
          e.unsuspend = null, a();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function Vi() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) mf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Zi = null;
  function mf(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Zi = /* @__PURE__ */ new Map(), t.forEach(Ov, e), Zi = null, Vi.call(e));
  }
  function Ov(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Zi.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Zi.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var f = n[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f);
        }
        a && l.set(null, a);
      }
      n = t.instance, f = n.getAttribute("data-precedence"), i = l.get(f) || a, i === a && l.set(null, n), l.set(f, n), this.count++, a = Vi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var bu = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function _v(e, t, l, a, n, i, f, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qa(0), this.hiddenUpdates = Qa(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function yh(e, t, l, a, n, i, f, d, g, z, j, G) {
    return e = new _v(
      e,
      t,
      l,
      f,
      d,
      g,
      z,
      G
    ), t = 1, i === !0 && (t |= 24), i = wt(3, null, null, t), e.current = i, i.stateNode = e, t = $r(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Pr(i), e;
  }
  function vh(e) {
    return e ? (e = Ia, e) : Ia;
  }
  function gh(e, t, l, a, n, i) {
    n = vh(n), a.context === null ? a.context = n : a.pendingContext = n, a = Ql(t), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = Vl(e, a, t), l !== null && (Bt(l, e, t), kn(l, e, t));
  }
  function ph(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function yf(e, t) {
    ph(e, t), (e = e.alternate) && ph(e, t);
  }
  function bh(e) {
    if (e.tag === 13) {
      var t = Pa(e, 67108864);
      t !== null && Bt(t, e, 67108864), yf(e, 67108864);
    }
  }
  var Ki = !0;
  function xv(e, t, l, a) {
    var n = x.T;
    x.T = null;
    var i = K.p;
    try {
      K.p = 2, vf(e, t, l, a);
    } finally {
      K.p = i, x.T = n;
    }
  }
  function Uv(e, t, l, a) {
    var n = x.T;
    x.T = null;
    var i = K.p;
    try {
      K.p = 8, vf(e, t, l, a);
    } finally {
      K.p = i, x.T = n;
    }
  }
  function vf(e, t, l, a) {
    if (Ki) {
      var n = gf(a);
      if (n === null)
        lf(
          e,
          t,
          a,
          Ji,
          l
        ), Eh(e, a);
      else if (Cv(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (Eh(e, a), t & 4 && -1 < wv.indexOf(e)) {
        for (; n !== null; ) {
          var i = xe(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = gl(i.pendingLanes);
                  if (f !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; f; ) {
                      var g = 1 << 31 - ht(f);
                      d.entanglements[1] |= g, f &= ~g;
                    }
                    hl(i), (Be & 6) === 0 && (xi = xt() + 500, du(0));
                  }
                }
                break;
              case 13:
                d = Pa(i, 2), d !== null && Bt(d, i, 2), wi(), yf(i, 2);
            }
          if (i = gf(a), i === null && lf(
            e,
            t,
            a,
            Ji,
            l
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        lf(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function gf(e) {
    return e = Er(e), pf(e);
  }
  var Ji = null;
  function pf(e) {
    if (Ji = null, e = ye(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ji = e, null;
  }
  function Sh(e) {
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
        switch (yr()) {
          case ju:
            return 2;
          case Yu:
            return 8;
          case Ga:
          case vl:
            return 32;
          case Hl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bf = !1, aa = null, na = null, ua = null, Su = /* @__PURE__ */ new Map(), Eu = /* @__PURE__ */ new Map(), ia = [], wv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Eh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        aa = null;
        break;
      case "dragenter":
      case "dragleave":
        na = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        Su.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Eu.delete(t.pointerId);
    }
  }
  function Ru(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, t !== null && (t = xe(t), t !== null && bh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Cv(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return aa = Ru(
          aa,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return na = Ru(
          na,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return ua = Ru(
          ua,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Su.set(
          i,
          Ru(
            Su.get(i) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Eu.set(
          i,
          Ru(
            Eu.get(i) || null,
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
  function Rh(e) {
    var t = ye(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = v(l), t !== null) {
            e.blockedOn = t, M(e.priority, function() {
              if (l.tag === 13) {
                var a = Lt();
                a = On(a);
                var n = Pa(l, a);
                n !== null && Bt(n, l, a), yf(l, a);
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
  function $i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = gf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Sr = a, l.target.dispatchEvent(a), Sr = null;
      } else
        return t = xe(l), t !== null && bh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Th(e, t, l) {
    $i(e) && l.delete(t);
  }
  function Nv() {
    bf = !1, aa !== null && $i(aa) && (aa = null), na !== null && $i(na) && (na = null), ua !== null && $i(ua) && (ua = null), Su.forEach(Th), Eu.forEach(Th);
  }
  function ki(e, t) {
    e.blockedOn === t && (e.blockedOn = null, bf || (bf = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      Nv
    )));
  }
  var Wi = null;
  function Dh(e) {
    Wi !== e && (Wi = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        Wi === e && (Wi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (pf(a || l) === null)
              continue;
            break;
          }
          var i = xe(l);
          i !== null && (e.splice(t, 3), t -= 3, gc(
            i,
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
  function Tu(e) {
    function t(g) {
      return ki(g, e);
    }
    aa !== null && ki(aa, e), na !== null && ki(na, e), ua !== null && ki(ua, e), Su.forEach(t), Eu.forEach(t);
    for (var l = 0; l < ia.length; l++) {
      var a = ia[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ia.length && (l = ia[0], l.blockedOn === null); )
      Rh(l), l.blockedOn === null && ia.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], f = n[V] || null;
        if (typeof i == "function")
          f || Dh(l);
        else if (f) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, f = i[V] || null)
              d = f.formAction;
            else if (pf(n) !== null) continue;
          } else d = f.action;
          typeof d == "function" ? l[a + 1] = d : (l.splice(a, 3), a -= 3), Dh(l);
        }
      }
  }
  function Sf(e) {
    this._internalRoot = e;
  }
  Fi.prototype.render = Sf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, a = Lt();
    gh(l, a, e, t, null, null);
  }, Fi.prototype.unmount = Sf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      gh(e.current, 2, null, e, null, null), wi(), t[te] = null;
    }
  };
  function Fi(e) {
    this._internalRoot = e;
  }
  Fi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = S();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ia.length && t !== 0 && t < ia[l].priority; l++) ;
      ia.splice(l, 0, e), l === 0 && Rh(e);
    }
  };
  var Mh = r.version;
  if (Mh !== "19.1.0")
    throw Error(
      o(
        527,
        Mh,
        "19.1.0"
      )
    );
  K.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = y(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Hv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber)
      try {
        Tt = Pi.inject(
          Hv
        ), We = Pi;
      } catch {
      }
  }
  return Du.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var l = !1, a = "", n = Gs, i = Xs, f = Qs, d = null;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (d = t.unstable_transitionCallbacks)), t = yh(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      n,
      i,
      f,
      d,
      null
    ), e[te] = t.current, tf(e), new Sf(t);
  }, Du.hydrateRoot = function(e, t, l) {
    if (!s(e)) throw Error(o(299));
    var a = !1, n = "", i = Gs, f = Xs, d = Qs, g = null, z = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (z = l.formState)), t = yh(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      i,
      f,
      d,
      g,
      z
    ), t.context = vh(null), l = t.current, a = Lt(), a = On(a), n = Ql(a), n.callback = null, Vl(l, n, a), l = a, t.current.lanes = l, va(t, l), hl(t), e[te] = t.current, tf(e), new Fi(t);
  }, Du.version = "19.1.0", Du;
}
var Ch;
function Vv() {
  if (Ch) return Rf.exports;
  Ch = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), Rf.exports = Qv(), Rf.exports;
}
var Zv = Vv(), Kv = Object.defineProperty, Jv = (u, r, c) => r in u ? Kv(u, r, { enumerable: !0, configurable: !0, writable: !0, value: c }) : u[r] = c, Ii = (u, r, c) => Jv(u, typeof r != "symbol" ? r + "" : r, c);
const $v = {
  stringify: (u) => u ? "true" : "false",
  parse: (u) => /^[ty1-9]/i.test(u)
}, kv = {
  stringify: (u) => u.name,
  parse: (u, r, c) => {
    const o = (() => {
      if (typeof window < "u" && u in window)
        return window[u];
      if (typeof global < "u" && u in global)
        return global[u];
    })();
    return typeof o == "function" ? o.bind(c) : void 0;
  }
}, Wv = {
  stringify: (u) => JSON.stringify(u),
  parse: (u) => JSON.parse(u)
}, Fv = {
  stringify: (u) => `${u}`,
  parse: (u) => parseFloat(u)
}, Pv = {
  stringify: (u) => u,
  parse: (u) => u
}, Af = {
  string: Pv,
  number: Fv,
  boolean: $v,
  function: kv,
  json: Wv
};
function Iv(u) {
  return u.replace(
    /([a-z0-9])([A-Z])/g,
    (r, c, o) => `${c}-${o.toLowerCase()}`
  );
}
const er = Symbol.for("r2wc.render"), tr = Symbol.for("r2wc.connected"), La = Symbol.for("r2wc.context"), Cl = Symbol.for("r2wc.props");
function e0(u, r, c) {
  var o, s, h;
  r.props || (r.props = u.propTypes ? Object.keys(u.propTypes) : []), r.events || (r.events = []);
  const v = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), b = Array.isArray(r.events) ? r.events.slice() : Object.keys(r.events), y = {}, m = {}, R = {}, N = {};
  for (const L of v) {
    y[L] = Array.isArray(r.props) ? "string" : r.props[L];
    const _ = Iv(L);
    R[L] = _, N[_] = L;
  }
  for (const L of b)
    m[L] = Array.isArray(r.events) ? {} : r.events[L];
  class D extends HTMLElement {
    constructor() {
      super(), Ii(this, h, !0), Ii(this, s), Ii(this, o, {}), Ii(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[Cl].container = this.container;
      for (const _ of v) {
        const Q = R[_], Z = this.getAttribute(Q), B = y[_], ee = B ? Af[B] : null;
        ee != null && ee.parse && Z && (this[Cl][_] = ee.parse(Z, Q, this));
      }
      for (const _ of b)
        this[Cl][_] = (Q) => {
          const Z = _.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Z, { detail: Q, ...m[_] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(N);
    }
    connectedCallback() {
      this[tr] = !0, this[er]();
    }
    disconnectedCallback() {
      this[tr] = !1, this[La] && c.unmount(this[La]), delete this[La];
    }
    attributeChangedCallback(_, Q, Z) {
      const B = N[_], ee = y[B], k = ee ? Af[ee] : null;
      B in y && k != null && k.parse && Z && (this[Cl][B] = k.parse(Z, _, this), this[er]());
    }
    [(h = tr, s = La, o = Cl, er)]() {
      this[tr] && (this[La] ? c.update(this[La], this[Cl]) : this[La] = c.mount(
        this.container,
        u,
        this[Cl]
      ));
    }
  }
  for (const L of v) {
    const _ = R[L], Q = y[L];
    Object.defineProperty(D.prototype, L, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Cl][L];
      },
      set(Z) {
        this[Cl][L] = Z;
        const B = Q ? Af[Q] : null;
        if (B != null && B.stringify) {
          const ee = B.stringify(Z, _, this);
          this.getAttribute(_) !== ee && this.setAttribute(_, ee);
        } else
          this[er]();
      }
    });
  }
  return D;
}
function t0(u, r, c) {
  const o = Zv.createRoot(u), s = im.createElement(r, c);
  return o.render(s), {
    root: o,
    ReactComponent: r
  };
}
function l0({ root: u, ReactComponent: r }, c) {
  const o = im.createElement(r, c);
  u.render(o);
}
function a0({ root: u }) {
  u.unmount();
}
function n0(u, r = {}) {
  return e0(u, r, { mount: t0, update: l0, unmount: a0 });
}
var zf = { exports: {} }, Mu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh;
function u0() {
  if (Nh) return Mu;
  Nh = 1;
  var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function c(o, s, h) {
    var v = null;
    if (h !== void 0 && (v = "" + h), s.key !== void 0 && (v = "" + s.key), "key" in s) {
      h = {};
      for (var b in s)
        b !== "key" && (h[b] = s[b]);
    } else h = s;
    return s = h.ref, {
      $$typeof: u,
      type: o,
      key: v,
      ref: s !== void 0 ? s : null,
      props: h
    };
  }
  return Mu.Fragment = r, Mu.jsx = c, Mu.jsxs = c, Mu;
}
var Hh;
function i0() {
  return Hh || (Hh = 1, zf.exports = u0()), zf.exports;
}
var Oe = i0(), Au = {}, Lh;
function r0() {
  if (Lh) return Au;
  Lh = 1, Object.defineProperty(Au, "__esModule", { value: !0 }), Au.parse = v, Au.serialize = m;
  const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, o = /^[\u0020-\u003A\u003D-\u007E]*$/, s = Object.prototype.toString, h = /* @__PURE__ */ (() => {
    const D = function() {
    };
    return D.prototype = /* @__PURE__ */ Object.create(null), D;
  })();
  function v(D, L) {
    const _ = new h(), Q = D.length;
    if (Q < 2)
      return _;
    const Z = L?.decode || R;
    let B = 0;
    do {
      const ee = D.indexOf("=", B);
      if (ee === -1)
        break;
      const k = D.indexOf(";", B), he = k === -1 ? Q : k;
      if (ee > he) {
        B = D.lastIndexOf(";", ee - 1) + 1;
        continue;
      }
      const W = b(D, B, ee), w = y(D, ee, W), ve = D.slice(W, w);
      if (_[ve] === void 0) {
        let pe = b(D, ee + 1, he), me = y(D, he, pe);
        const Ze = Z(D.slice(pe, me));
        _[ve] = Ze;
      }
      B = he + 1;
    } while (B < Q);
    return _;
  }
  function b(D, L, _) {
    do {
      const Q = D.charCodeAt(L);
      if (Q !== 32 && Q !== 9)
        return L;
    } while (++L < _);
    return _;
  }
  function y(D, L, _) {
    for (; L > _; ) {
      const Q = D.charCodeAt(--L);
      if (Q !== 32 && Q !== 9)
        return L + 1;
    }
    return _;
  }
  function m(D, L, _) {
    const Q = _?.encode || encodeURIComponent;
    if (!u.test(D))
      throw new TypeError(`argument name is invalid: ${D}`);
    const Z = Q(L);
    if (!r.test(Z))
      throw new TypeError(`argument val is invalid: ${L}`);
    let B = D + "=" + Z;
    if (!_)
      return B;
    if (_.maxAge !== void 0) {
      if (!Number.isInteger(_.maxAge))
        throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);
      B += "; Max-Age=" + _.maxAge;
    }
    if (_.domain) {
      if (!c.test(_.domain))
        throw new TypeError(`option domain is invalid: ${_.domain}`);
      B += "; Domain=" + _.domain;
    }
    if (_.path) {
      if (!o.test(_.path))
        throw new TypeError(`option path is invalid: ${_.path}`);
      B += "; Path=" + _.path;
    }
    if (_.expires) {
      if (!N(_.expires) || !Number.isFinite(_.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${_.expires}`);
      B += "; Expires=" + _.expires.toUTCString();
    }
    if (_.httpOnly && (B += "; HttpOnly"), _.secure && (B += "; Secure"), _.partitioned && (B += "; Partitioned"), _.priority)
      switch (typeof _.priority == "string" ? _.priority.toLowerCase() : void 0) {
        case "low":
          B += "; Priority=Low";
          break;
        case "medium":
          B += "; Priority=Medium";
          break;
        case "high":
          B += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${_.priority}`);
      }
    if (_.sameSite)
      switch (typeof _.sameSite == "string" ? _.sameSite.toLowerCase() : _.sameSite) {
        case !0:
        case "strict":
          B += "; SameSite=Strict";
          break;
        case "lax":
          B += "; SameSite=Lax";
          break;
        case "none":
          B += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${_.sameSite}`);
      }
    return B;
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
  function N(D) {
    return s.call(D) === "[object Date]";
  }
  return Au;
}
r0();
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
var rm = (u) => {
  throw TypeError(u);
}, c0 = (u, r, c) => r.has(u) || rm("Cannot " + c), Of = (u, r, c) => (c0(u, r, "read from private field"), c ? c.call(u) : r.get(u)), f0 = (u, r, c) => r.has(u) ? rm("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(u) : r.set(u, c), Bh = "popstate";
function o0(u = {}) {
  function r(o, s) {
    let { pathname: h, search: v, hash: b } = o.location;
    return wu(
      "",
      { pathname: h, search: v, hash: b },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default"
    );
  }
  function c(o, s) {
    return typeof s == "string" ? s : oa(s);
  }
  return d0(
    r,
    c,
    null,
    u
  );
}
function Ae(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function it(u, r) {
  if (!u) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function s0() {
  return Math.random().toString(36).substring(2, 10);
}
function jh(u, r) {
  return {
    usr: u.state,
    key: u.key,
    idx: r
  };
}
function wu(u, r, c = null, o) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? sa(r) : r,
    state: c,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || s0()
  };
}
function oa({
  pathname: u = "/",
  search: r = "",
  hash: c = ""
}) {
  return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
}
function sa(u) {
  let r = {};
  if (u) {
    let c = u.indexOf("#");
    c >= 0 && (r.hash = u.substring(c), u = u.substring(0, c));
    let o = u.indexOf("?");
    o >= 0 && (r.search = u.substring(o), u = u.substring(0, o)), u && (r.pathname = u);
  }
  return r;
}
function d0(u, r, c, o = {}) {
  let { window: s = document.defaultView, v5Compat: h = !1 } = o, v = s.history, b = "POP", y = null, m = R();
  m == null && (m = 0, v.replaceState({ ...v.state, idx: m }, ""));
  function R() {
    return (v.state || { idx: null }).idx;
  }
  function N() {
    b = "POP";
    let Z = R(), B = Z == null ? null : Z - m;
    m = Z, y && y({ action: b, location: Q.location, delta: B });
  }
  function D(Z, B) {
    b = "PUSH";
    let ee = wu(Q.location, Z, B);
    m = R() + 1;
    let k = jh(ee, m), he = Q.createHref(ee);
    try {
      v.pushState(k, "", he);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      s.location.assign(he);
    }
    h && y && y({ action: b, location: Q.location, delta: 1 });
  }
  function L(Z, B) {
    b = "REPLACE";
    let ee = wu(Q.location, Z, B);
    m = R();
    let k = jh(ee, m), he = Q.createHref(ee);
    v.replaceState(k, "", he), h && y && y({ action: b, location: Q.location, delta: 0 });
  }
  function _(Z) {
    return cm(Z);
  }
  let Q = {
    get action() {
      return b;
    },
    get location() {
      return u(s, v);
    },
    listen(Z) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return s.addEventListener(Bh, N), y = Z, () => {
        s.removeEventListener(Bh, N), y = null;
      };
    },
    createHref(Z) {
      return r(s, Z);
    },
    createURL: _,
    encodeLocation(Z) {
      let B = _(Z);
      return {
        pathname: B.pathname,
        search: B.search,
        hash: B.hash
      };
    },
    push: D,
    replace: L,
    go(Z) {
      return v.go(Z);
    }
  };
  return Q;
}
function cm(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href), Ae(c, "No window.location.(origin|href) available to create URL");
  let o = typeof u == "string" ? u : oa(u);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = c + o), new URL(o, c);
}
var xu, Yh = class {
  constructor(u) {
    if (f0(this, xu, /* @__PURE__ */ new Map()), u)
      for (let [r, c] of u)
        this.set(r, c);
  }
  get(u) {
    if (Of(this, xu).has(u))
      return Of(this, xu).get(u);
    if (u.defaultValue !== void 0)
      return u.defaultValue;
    throw new Error("No value found for context");
  }
  set(u, r) {
    Of(this, xu).set(u, r);
  }
};
xu = /* @__PURE__ */ new WeakMap();
var h0 = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function m0(u) {
  return h0.has(
    u
  );
}
var y0 = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children"
]);
function v0(u) {
  return y0.has(
    u
  );
}
function g0(u) {
  return u.index === !0;
}
function rr(u, r, c = [], o = {}) {
  return u.map((s, h) => {
    let v = [...c, String(h)], b = typeof s.id == "string" ? s.id : v.join("-");
    if (Ae(
      s.index !== !0 || !s.children,
      "Cannot specify children on an index route"
    ), Ae(
      !o[b],
      `Found a route id collision on id "${b}".  Route id's must be globally unique within Data Router usages`
    ), g0(s)) {
      let y = {
        ...s,
        ...r(s),
        id: b
      };
      return o[b] = y, y;
    } else {
      let y = {
        ...s,
        ...r(s),
        id: b,
        children: void 0
      };
      return o[b] = y, s.children && (y.children = rr(
        s.children,
        r,
        v,
        o
      )), y;
    }
  });
}
function fa(u, r, c = "/") {
  return nr(u, r, c, !1);
}
function nr(u, r, c, o) {
  let s = typeof r == "string" ? sa(r) : r, h = Ft(s.pathname || "/", c);
  if (h == null)
    return null;
  let v = fm(u);
  b0(v);
  let b = null;
  for (let y = 0; b == null && y < v.length; ++y) {
    let m = x0(h);
    b = O0(
      v[y],
      m,
      o
    );
  }
  return b;
}
function p0(u, r) {
  let { route: c, pathname: o, params: s } = u;
  return {
    id: c.id,
    pathname: o,
    params: s,
    data: r[c.id],
    handle: c.handle
  };
}
function fm(u, r = [], c = [], o = "") {
  let s = (h, v, b) => {
    let y = {
      relativePath: b === void 0 ? h.path || "" : b,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: v,
      route: h
    };
    y.relativePath.startsWith("/") && (Ae(
      y.relativePath.startsWith(o),
      `Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), y.relativePath = y.relativePath.slice(o.length));
    let m = ml([o, y.relativePath]), R = c.concat(y);
    h.children && h.children.length > 0 && (Ae(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
    ), fm(h.children, r, R, m)), !(h.path == null && !h.index) && r.push({
      path: m,
      score: A0(m, h.index),
      routesMeta: R
    });
  };
  return u.forEach((h, v) => {
    if (h.path === "" || !h.path?.includes("?"))
      s(h, v);
    else
      for (let b of om(h.path))
        s(h, v, b);
  }), r;
}
function om(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...o] = r, s = c.endsWith("?"), h = c.replace(/\?$/, "");
  if (o.length === 0)
    return s ? [h, ""] : [h];
  let v = om(o.join("/")), b = [];
  return b.push(
    ...v.map(
      (y) => y === "" ? h : [h, y].join("/")
    )
  ), s && b.push(...v), b.map(
    (y) => u.startsWith("/") && y === "" ? "/" : y
  );
}
function b0(u) {
  u.sort(
    (r, c) => r.score !== c.score ? c.score - r.score : z0(
      r.routesMeta.map((o) => o.childrenIndex),
      c.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var S0 = /^:[\w-]+$/, E0 = 3, R0 = 2, T0 = 1, D0 = 10, M0 = -2, qh = (u) => u === "*";
function A0(u, r) {
  let c = u.split("/"), o = c.length;
  return c.some(qh) && (o += M0), r && (o += R0), c.filter((s) => !qh(s)).reduce(
    (s, h) => s + (S0.test(h) ? E0 : h === "" ? T0 : D0),
    o
  );
}
function z0(u, r) {
  return u.length === r.length && u.slice(0, -1).every((o, s) => o === r[s]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    u[u.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function O0(u, r, c = !1) {
  let { routesMeta: o } = u, s = {}, h = "/", v = [];
  for (let b = 0; b < o.length; ++b) {
    let y = o[b], m = b === o.length - 1, R = h === "/" ? r : r.slice(h.length) || "/", N = cr(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: m },
      R
    ), D = y.route;
    if (!N && m && c && !o[o.length - 1].route.index && (N = cr(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      R
    )), !N)
      return null;
    Object.assign(s, N.params), v.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: ml([h, N.pathname]),
      pathnameBase: C0(
        ml([h, N.pathnameBase])
      ),
      route: D
    }), N.pathnameBase !== "/" && (h = ml([h, N.pathnameBase]));
  }
  return v;
}
function cr(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, o] = _0(
    u.path,
    u.caseSensitive,
    u.end
  ), s = r.match(c);
  if (!s) return null;
  let h = s[0], v = h.replace(/(.)\/+$/, "$1"), b = s.slice(1);
  return {
    params: o.reduce(
      (m, { paramName: R, isOptional: N }, D) => {
        if (R === "*") {
          let _ = b[D] || "";
          v = h.slice(0, h.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const L = b[D];
        return N && !L ? m[R] = void 0 : m[R] = (L || "").replace(/%2F/g, "/"), m;
      },
      {}
    ),
    pathname: h,
    pathnameBase: v,
    pattern: u
  };
}
function _0(u, r = !1, c = !0) {
  it(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let o = [], s = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (v, b, y) => (o.push({ paramName: b, isOptional: y != null }), y ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return u.endsWith("*") ? (o.push({ paramName: "*" }), s += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? s += "\\/*$" : u !== "" && u !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, r ? void 0 : "i"), o];
}
function x0(u) {
  try {
    return u.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return it(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), u;
  }
}
function Ft(u, r) {
  if (r === "/") return u;
  if (!u.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let c = r.endsWith("/") ? r.length - 1 : r.length, o = u.charAt(c);
  return o && o !== "/" ? null : u.slice(c) || "/";
}
function U0(u, r = "/") {
  let {
    pathname: c,
    search: o = "",
    hash: s = ""
  } = typeof u == "string" ? sa(u) : u;
  return {
    pathname: c ? c.startsWith("/") ? c : w0(c, r) : r,
    search: N0(o),
    hash: H0(s)
  };
}
function w0(u, r) {
  let c = r.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((s) => {
    s === ".." ? c.length > 1 && c.pop() : s !== "." && c.push(s);
  }), c.length > 1 ? c.join("/") : "/";
}
function _f(u, r, c, o) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function sm(u) {
  return u.filter(
    (r, c) => c === 0 || r.route.path && r.route.path.length > 0
  );
}
function jf(u) {
  let r = sm(u);
  return r.map(
    (c, o) => o === r.length - 1 ? c.pathname : c.pathnameBase
  );
}
function Yf(u, r, c, o = !1) {
  let s;
  typeof u == "string" ? s = sa(u) : (s = { ...u }, Ae(
    !s.pathname || !s.pathname.includes("?"),
    _f("?", "pathname", "search", s)
  ), Ae(
    !s.pathname || !s.pathname.includes("#"),
    _f("#", "pathname", "hash", s)
  ), Ae(
    !s.search || !s.search.includes("#"),
    _f("#", "search", "hash", s)
  ));
  let h = u === "" || s.pathname === "", v = h ? "/" : s.pathname, b;
  if (v == null)
    b = c;
  else {
    let N = r.length - 1;
    if (!o && v.startsWith("..")) {
      let D = v.split("/");
      for (; D[0] === ".."; )
        D.shift(), N -= 1;
      s.pathname = D.join("/");
    }
    b = N >= 0 ? r[N] : "/";
  }
  let y = U0(s, b), m = v && v !== "/" && v.endsWith("/"), R = (h || v === ".") && c.endsWith("/");
  return !y.pathname.endsWith("/") && (m || R) && (y.pathname += "/"), y;
}
var ml = (u) => u.join("/").replace(/\/\/+/g, "/"), C0 = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), N0 = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, H0 = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, fr = class {
  constructor(u, r, c, o = !1) {
    this.status = u, this.statusText = r || "", this.internal = o, c instanceof Error ? (this.data = c.toString(), this.error = c) : this.data = c;
  }
};
function Cu(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
var dm = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], L0 = new Set(
  dm
), B0 = [
  "GET",
  ...dm
], j0 = new Set(B0), Y0 = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), q0 = /* @__PURE__ */ new Set([307, 308]), xf = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, G0 = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, zu = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, qf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, X0 = (u) => ({
  hasErrorBoundary: !!u.hasErrorBoundary
}), hm = "remix-router-transitions", mm = Symbol("ResetLoaderData");
function Q0(u) {
  const r = u.window ? u.window : typeof window < "u" ? window : void 0, c = typeof r < "u" && typeof r.document < "u" && typeof r.document.createElement < "u";
  Ae(
    u.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o = u.hydrationRouteProperties || [], s = u.mapRouteProperties || X0, h = {}, v = rr(
    u.routes,
    s,
    void 0,
    h
  ), b, y = u.basename || "/", m = u.dataStrategy || $0, R = {
    unstable_middleware: !1,
    ...u.future
  }, N = null, D = /* @__PURE__ */ new Set(), L = null, _ = null, Q = null, Z = u.hydrationData != null, B = fa(v, u.history.location, y), ee = !1, k = null, he;
  if (B == null && !u.patchRoutesOnNavigation) {
    let S = Wt(404, {
      pathname: u.history.location.pathname
    }), { matches: M, route: C } = Ph(v);
    he = !0, B = M, k = { [C.id]: S };
  } else if (B && !u.hydrationData && ga(
    B,
    v,
    u.history.location.pathname
  ).active && (B = null), B)
    if (B.some((S) => S.route.lazy))
      he = !1;
    else if (!B.some((S) => S.route.loader))
      he = !0;
    else {
      let S = u.hydrationData ? u.hydrationData.loaderData : null, M = u.hydrationData ? u.hydrationData.errors : null;
      if (M) {
        let C = B.findIndex(
          (X) => M[X.route.id] !== void 0
        );
        he = B.slice(0, C + 1).every(
          (X) => !Nf(X.route, S, M)
        );
      } else
        he = B.every(
          (C) => !Nf(C.route, S, M)
        );
    }
  else {
    he = !1, B = [];
    let S = ga(
      null,
      v,
      u.history.location.pathname
    );
    S.active && S.matches && (ee = !0, B = S.matches);
  }
  let W, w = {
    historyAction: u.history.action,
    location: u.history.location,
    matches: B,
    initialized: he,
    navigation: xf,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: u.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: u.hydrationData && u.hydrationData.loaderData || {},
    actionData: u.hydrationData && u.hydrationData.actionData || null,
    errors: u.hydrationData && u.hydrationData.errors || k,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, ve = "POP", pe = !1, me, Ze = !1, tt = /* @__PURE__ */ new Map(), Je = null, Ue = !1, Ne = !1, Le = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Map(), K = 0, P = -1, be = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Set(), ae = /* @__PURE__ */ new Map(), Te, ce = null;
  function St() {
    if (N = u.history.listen(
      ({ action: S, location: M, delta: C }) => {
        if (Te) {
          Te(), Te = void 0;
          return;
        }
        it(
          ae.size === 0 || C != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let X = Xu({
          currentLocation: w.location,
          nextLocation: M,
          historyAction: S
        });
        if (X && C != null) {
          let V = new Promise((te) => {
            Te = te;
          });
          u.history.go(C * -1), cl(X, {
            state: "blocked",
            location: M,
            proceed() {
              cl(X, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: M
              }), V.then(() => u.history.go(C));
            },
            reset() {
              let te = new Map(w.blockers);
              te.set(X, zu), rt({ blockers: te });
            }
          });
          return;
        }
        return It(S, M);
      }
    ), c) {
      ug(r, tt);
      let S = () => ig(r, tt);
      r.addEventListener("pagehide", S), Je = () => r.removeEventListener("pagehide", S);
    }
    return w.initialized || It("POP", w.location, {
      initialHydration: !0
    }), W;
  }
  function Qe() {
    N && N(), Je && Je(), D.clear(), me && me.abort(), w.fetchers.forEach((S, M) => ht(M)), w.blockers.forEach((S, M) => ya(M));
  }
  function il(S) {
    return D.add(S), () => D.delete(S);
  }
  function rt(S, M = {}) {
    w = {
      ...w,
      ...S
    };
    let C = [], X = [];
    w.fetchers.forEach((V, te) => {
      V.state === "idle" && (J.has(te) ? C.push(te) : X.push(te));
    }), J.forEach((V) => {
      !w.fetchers.has(V) && !x.has(V) && C.push(V);
    }), [...D].forEach(
      (V) => V(w, {
        deletedFetchers: C,
        viewTransitionOpts: M.viewTransitionOpts,
        flushSync: M.flushSync === !0
      })
    ), C.forEach((V) => ht(V)), X.forEach((V) => w.fetchers.delete(V));
  }
  function Pt(S, M, { flushSync: C } = {}) {
    let X = w.actionData != null && w.navigation.formMethod != null && Yt(w.navigation.formMethod) && w.navigation.state === "loading" && S.state?._isRedirect !== !0, V;
    M.actionData ? Object.keys(M.actionData).length > 0 ? V = M.actionData : V = null : X ? V = w.actionData : V = null;
    let te = M.loaderData ? Wh(
      w.loaderData,
      M.loaderData,
      M.matches || [],
      M.errors
    ) : w.loaderData, ie = w.blockers;
    ie.size > 0 && (ie = new Map(ie), ie.forEach((le, oe) => ie.set(oe, zu)));
    let F = pe === !0 || w.navigation.formMethod != null && Yt(w.navigation.formMethod) && S.state?._isRedirect !== !0;
    b && (v = b, b = void 0), Ue || ve === "POP" || (ve === "PUSH" ? u.history.push(S, S.state) : ve === "REPLACE" && u.history.replace(S, S.state));
    let ue;
    if (ve === "POP") {
      let le = tt.get(w.location.pathname);
      le && le.has(S.pathname) ? ue = {
        currentLocation: w.location,
        nextLocation: S
      } : tt.has(S.pathname) && (ue = {
        currentLocation: S,
        nextLocation: w.location
      });
    } else if (Ze) {
      let le = tt.get(w.location.pathname);
      le ? le.add(S.pathname) : (le = /* @__PURE__ */ new Set([S.pathname]), tt.set(w.location.pathname, le)), ue = {
        currentLocation: w.location,
        nextLocation: S
      };
    }
    rt(
      {
        ...M,
        // matches, errors, fetchers go through as-is
        actionData: V,
        loaderData: te,
        historyAction: ve,
        location: S,
        initialized: !0,
        navigation: xf,
        revalidation: "idle",
        restoreScrollPosition: Vu(
          S,
          M.matches || w.matches
        ),
        preventScrollReset: F,
        blockers: ie
      },
      {
        viewTransitionOpts: ue,
        flushSync: C === !0
      }
    ), ve = "POP", pe = !1, Ze = !1, Ue = !1, Ne = !1, ce?.resolve(), ce = null;
  }
  async function qa(S, M) {
    if (typeof S == "number") {
      u.history.go(S);
      return;
    }
    let C = Cf(
      w.location,
      w.matches,
      y,
      S,
      M?.fromRouteId,
      M?.relative
    ), { path: X, submission: V, error: te } = Gh(
      !1,
      C,
      M
    ), ie = w.location, F = wu(w.location, X, M && M.state);
    F = {
      ...F,
      ...u.history.encodeLocation(F)
    };
    let ue = M && M.replace != null ? M.replace : void 0, le = "PUSH";
    ue === !0 ? le = "REPLACE" : ue === !1 || V != null && Yt(V.formMethod) && V.formAction === w.location.pathname + w.location.search && (le = "REPLACE");
    let oe = M && "preventScrollReset" in M ? M.preventScrollReset === !0 : void 0, se = (M && M.flushSync) === !0, ye = Xu({
      currentLocation: ie,
      nextLocation: F,
      historyAction: le
    });
    if (ye) {
      cl(ye, {
        state: "blocked",
        location: F,
        proceed() {
          cl(ye, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F
          }), qa(S, M);
        },
        reset() {
          let xe = new Map(w.blockers);
          xe.set(ye, zu), rt({ blockers: xe });
        }
      });
      return;
    }
    await It(le, F, {
      submission: V,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: te,
      preventScrollReset: oe,
      replace: M && M.replace,
      enableViewTransition: M && M.viewTransition,
      flushSync: se
    });
  }
  function An() {
    ce || (ce = rg()), zn(), rt({ revalidation: "loading" });
    let S = ce.promise;
    return w.navigation.state === "submitting" ? S : w.navigation.state === "idle" ? (It(w.historyAction, w.location, {
      startUninterruptedRevalidation: !0
    }), S) : (It(
      ve || w.historyAction,
      w.navigation.location,
      {
        overrideNavigation: w.navigation,
        // Proxy through any rending view transition
        enableViewTransition: Ze === !0
      }
    ), S);
  }
  async function It(S, M, C) {
    me && me.abort(), me = null, ve = S, Ue = (C && C.startUninterruptedRevalidation) === !0, va(w.location, w.matches), pe = (C && C.preventScrollReset) === !0, Ze = (C && C.enableViewTransition) === !0;
    let X = b || v, V = C && C.overrideNavigation, te = C?.initialHydration && w.matches && w.matches.length > 0 && !ee ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      w.matches
    ) : fa(X, M, y), ie = (C && C.flushSync) === !0;
    if (te && w.initialized && !Ne && eg(w.location, M) && !(C && C.submission && Yt(C.submission.formMethod))) {
      Pt(M, { matches: te }, { flushSync: ie });
      return;
    }
    let F = ga(te, X, M.pathname);
    if (F.active && F.matches && (te = F.matches), !te) {
      let { error: Fe, notFoundMatches: we, route: ze } = Xa(
        M.pathname
      );
      Pt(
        M,
        {
          matches: we,
          loaderData: {},
          errors: {
            [ze.id]: Fe
          }
        },
        { flushSync: ie }
      );
      return;
    }
    me = new AbortController();
    let ue = Dn(
      u.history,
      M,
      me.signal,
      C && C.submission
    ), le = new Yh(
      u.unstable_getContext ? await u.unstable_getContext() : void 0
    ), oe;
    if (C && C.pendingError)
      oe = [
        Ba(te).route.id,
        { type: "error", error: C.pendingError }
      ];
    else if (C && C.submission && Yt(C.submission.formMethod)) {
      let Fe = await hr(
        ue,
        M,
        C.submission,
        te,
        le,
        F.active,
        C && C.initialHydration === !0,
        { replace: C.replace, flushSync: ie }
      );
      if (Fe.shortCircuited)
        return;
      if (Fe.pendingActionResult) {
        let [we, ze] = Fe.pendingActionResult;
        if (jt(ze) && Cu(ze.error) && ze.error.status === 404) {
          me = null, Pt(M, {
            matches: Fe.matches,
            loaderData: {},
            errors: {
              [we]: ze.error
            }
          });
          return;
        }
      }
      te = Fe.matches || te, oe = Fe.pendingActionResult, V = Uf(M, C.submission), ie = !1, F.active = !1, ue = Dn(
        u.history,
        ue.url,
        ue.signal
      );
    }
    let {
      shortCircuited: se,
      matches: ye,
      loaderData: xe,
      errors: Ke
    } = await mr(
      ue,
      M,
      te,
      le,
      F.active,
      V,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      C && C.initialHydration === !0,
      ie,
      oe
    );
    se || (me = null, Pt(M, {
      matches: ye || te,
      ...Fh(oe),
      loaderData: xe,
      errors: Ke
    }));
  }
  async function hr(S, M, C, X, V, te, ie, F = {}) {
    zn();
    let ue = ag(M, C);
    if (rt({ navigation: ue }, { flushSync: F.flushSync === !0 }), te) {
      let se = await pa(
        X,
        M.pathname,
        S.signal
      );
      if (se.type === "aborted")
        return { shortCircuited: !0 };
      if (se.type === "error") {
        let ye = Ba(se.partialMatches).route.id;
        return {
          matches: se.partialMatches,
          pendingActionResult: [
            ye,
            {
              type: "error",
              error: se.error
            }
          ]
        };
      } else if (se.matches)
        X = se.matches;
      else {
        let { notFoundMatches: ye, error: xe, route: Ke } = Xa(
          M.pathname
        );
        return {
          matches: ye,
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
    let le, oe = Uu(X, M);
    if (!oe.route.action && !oe.route.lazy)
      le = {
        type: "error",
        error: Wt(405, {
          method: S.method,
          pathname: M.pathname,
          routeId: oe.route.id
        })
      };
    else {
      let se = Mn(
        s,
        h,
        S,
        X,
        oe,
        ie ? [] : o,
        V
      ), ye = await Hl(
        S,
        se,
        V,
        null
      );
      if (le = ye[oe.route.id], !le) {
        for (let xe of X)
          if (ye[xe.route.id]) {
            le = ye[xe.route.id];
            break;
          }
      }
      if (S.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (ja(le)) {
      let se;
      return F && F.replace != null ? se = F.replace : se = Jh(
        le.response.headers.get("Location"),
        new URL(S.url),
        y
      ) === w.location.pathname + w.location.search, await vl(S, le, !0, {
        submission: C,
        replace: se
      }), { shortCircuited: !0 };
    }
    if (jt(le)) {
      let se = Ba(X, oe.route.id);
      return (F && F.replace) !== !0 && (ve = "PUSH"), {
        matches: X,
        pendingActionResult: [
          se.route.id,
          le,
          oe.route.id
        ]
      };
    }
    return {
      matches: X,
      pendingActionResult: [oe.route.id, le]
    };
  }
  async function mr(S, M, C, X, V, te, ie, F, ue, le, oe, se) {
    let ye = te || Uf(M, ie), xe = ie || F || em(ye), Ke = !Ue && !le;
    if (V) {
      if (Ke) {
        let gt = xt(se);
        rt(
          {
            navigation: ye,
            ...gt !== void 0 ? { actionData: gt } : {}
          },
          {
            flushSync: oe
          }
        );
      }
      let Ee = await pa(
        C,
        M.pathname,
        S.signal
      );
      if (Ee.type === "aborted")
        return { shortCircuited: !0 };
      if (Ee.type === "error") {
        let gt = Ba(Ee.partialMatches).route.id;
        return {
          matches: Ee.partialMatches,
          loaderData: {},
          errors: {
            [gt]: Ee.error
          }
        };
      } else if (Ee.matches)
        C = Ee.matches;
      else {
        let { error: gt, notFoundMatches: tl, route: ll } = Xa(
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
    let Fe = b || v, { dsMatches: we, revalidatingFetchers: ze } = Xh(
      S,
      X,
      s,
      h,
      u.history,
      w,
      C,
      xe,
      M,
      le ? [] : o,
      le === !0,
      Ne,
      Le,
      J,
      q,
      p,
      Fe,
      y,
      u.patchRoutesOnNavigation != null,
      se
    );
    if (P = ++K, !u.dataStrategy && !we.some((Ee) => Ee.shouldLoad) && ze.length === 0) {
      let Ee = ha();
      return Pt(
        M,
        {
          matches: C,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: se && jt(se[1]) ? { [se[0]]: se[1].error } : null,
          ...Fh(se),
          ...Ee ? { fetchers: new Map(w.fetchers) } : {}
        },
        { flushSync: oe }
      ), { shortCircuited: !0 };
    }
    if (Ke) {
      let Ee = {};
      if (!V) {
        Ee.navigation = ye;
        let gt = xt(se);
        gt !== void 0 && (Ee.actionData = gt);
      }
      ze.length > 0 && (Ee.fetchers = yr(ze)), rt(Ee, { flushSync: oe });
    }
    ze.forEach((Ee) => {
      rl(Ee.key), Ee.controller && x.set(Ee.key, Ee.controller);
    });
    let Ll = () => ze.forEach((Ee) => rl(Ee.key));
    me && me.signal.addEventListener(
      "abort",
      Ll
    );
    let { loaderResults: Et, fetcherResults: qt } = await qu(
      we,
      ze,
      S,
      X
    );
    if (S.signal.aborted)
      return { shortCircuited: !0 };
    me && me.signal.removeEventListener(
      "abort",
      Ll
    ), ze.forEach((Ee) => x.delete(Ee.key));
    let Dt = lr(Et);
    if (Dt)
      return await vl(S, Dt.result, !0, {
        replace: ue
      }), { shortCircuited: !0 };
    if (Dt = lr(qt), Dt)
      return p.add(Dt.key), await vl(S, Dt.result, !0, {
        replace: ue
      }), { shortCircuited: !0 };
    let { loaderData: Bl, errors: jl } = kh(
      w,
      C,
      Et,
      se,
      ze,
      qt
    );
    le && w.errors && (jl = { ...w.errors, ...jl });
    let xn = ha(), Gt = ma(P), pl = xn || Gt || ze.length > 0;
    return {
      matches: C,
      loaderData: Bl,
      errors: jl,
      ...pl ? { fetchers: new Map(w.fetchers) } : {}
    };
  }
  function xt(S) {
    if (S && !jt(S[1]))
      return {
        [S[0]]: S[1].data
      };
    if (w.actionData)
      return Object.keys(w.actionData).length === 0 ? null : w.actionData;
  }
  function yr(S) {
    return S.forEach((M) => {
      let C = w.fetchers.get(M.key), X = Ou(
        void 0,
        C ? C.data : void 0
      );
      w.fetchers.set(M.key, X);
    }), new Map(w.fetchers);
  }
  async function ju(S, M, C, X) {
    rl(S);
    let V = (X && X.flushSync) === !0, te = b || v, ie = Cf(
      w.location,
      w.matches,
      y,
      C,
      M,
      X?.relative
    ), F = fa(te, ie, y), ue = ga(F, te, ie);
    if (ue.active && ue.matches && (F = ue.matches), !F) {
      We(
        S,
        M,
        Wt(404, { pathname: ie }),
        { flushSync: V }
      );
      return;
    }
    let { path: le, submission: oe, error: se } = Gh(
      !0,
      ie,
      X
    );
    if (se) {
      We(S, M, se, { flushSync: V });
      return;
    }
    let ye = Uu(F, le), xe = new Yh(
      u.unstable_getContext ? await u.unstable_getContext() : void 0
    ), Ke = (X && X.preventScrollReset) === !0;
    if (oe && Yt(oe.formMethod)) {
      await Yu(
        S,
        M,
        le,
        ye,
        F,
        xe,
        ue.active,
        V,
        Ke,
        oe
      );
      return;
    }
    q.set(S, { routeId: M, path: le }), await Ga(
      S,
      M,
      le,
      ye,
      F,
      xe,
      ue.active,
      V,
      Ke,
      oe
    );
  }
  async function Yu(S, M, C, X, V, te, ie, F, ue, le) {
    zn(), q.delete(S);
    function oe($e) {
      if (!$e.route.action && !$e.route.lazy) {
        let Yl = Wt(405, {
          method: le.formMethod,
          pathname: C,
          routeId: M
        });
        return We(S, M, Yl, { flushSync: F }), !0;
      }
      return !1;
    }
    if (!ie && oe(X))
      return;
    let se = w.fetchers.get(S);
    Tt(S, ng(le, se), {
      flushSync: F
    });
    let ye = new AbortController(), xe = Dn(
      u.history,
      C,
      ye.signal,
      le
    );
    if (ie) {
      let $e = await pa(
        V,
        C,
        xe.signal,
        S
      );
      if ($e.type === "aborted")
        return;
      if ($e.type === "error") {
        We(S, M, $e.error, { flushSync: F });
        return;
      } else if ($e.matches) {
        if (V = $e.matches, X = Uu(V, C), oe(X))
          return;
      } else {
        We(
          S,
          M,
          Wt(404, { pathname: C }),
          { flushSync: F }
        );
        return;
      }
    }
    x.set(S, ye);
    let Ke = K, Fe = Mn(
      s,
      h,
      xe,
      V,
      X,
      o,
      te
    ), ze = (await Hl(
      xe,
      Fe,
      te,
      S
    ))[X.route.id];
    if (xe.signal.aborted) {
      x.get(S) === ye && x.delete(S);
      return;
    }
    if (J.has(S)) {
      if (ja(ze) || jt(ze)) {
        Tt(S, ca(void 0));
        return;
      }
    } else {
      if (ja(ze))
        if (x.delete(S), P > Ke) {
          Tt(S, ca(void 0));
          return;
        } else
          return p.add(S), Tt(S, Ou(le)), vl(xe, ze, !1, {
            fetcherSubmission: le,
            preventScrollReset: ue
          });
      if (jt(ze)) {
        We(S, M, ze.error);
        return;
      }
    }
    let Ll = w.navigation.location || w.location, Et = Dn(
      u.history,
      Ll,
      ye.signal
    ), qt = b || v, Dt = w.navigation.state !== "idle" ? fa(qt, w.navigation.location, y) : w.matches;
    Ae(Dt, "Didn't find any matches after fetcher action");
    let Bl = ++K;
    be.set(S, Bl);
    let jl = Ou(le, ze.data);
    w.fetchers.set(S, jl);
    let { dsMatches: xn, revalidatingFetchers: Gt } = Xh(
      Et,
      te,
      s,
      h,
      u.history,
      w,
      Dt,
      le,
      Ll,
      o,
      !1,
      Ne,
      Le,
      J,
      q,
      p,
      qt,
      y,
      u.patchRoutesOnNavigation != null,
      [X.route.id, ze]
    );
    Gt.filter(($e) => $e.key !== S).forEach(($e) => {
      let Yl = $e.key, Un = w.fetchers.get(Yl), Mt = Ou(
        void 0,
        Un ? Un.data : void 0
      );
      w.fetchers.set(Yl, Mt), rl(Yl), $e.controller && x.set(Yl, $e.controller);
    }), rt({ fetchers: new Map(w.fetchers) });
    let pl = () => Gt.forEach(($e) => rl($e.key));
    ye.signal.addEventListener(
      "abort",
      pl
    );
    let { loaderResults: Ee, fetcherResults: gt } = await qu(
      xn,
      Gt,
      Et,
      te
    );
    if (ye.signal.aborted)
      return;
    if (ye.signal.removeEventListener(
      "abort",
      pl
    ), be.delete(S), x.delete(S), Gt.forEach(($e) => x.delete($e.key)), w.fetchers.has(S)) {
      let $e = ca(ze.data);
      w.fetchers.set(S, $e);
    }
    let tl = lr(Ee);
    if (tl)
      return vl(
        Et,
        tl.result,
        !1,
        { preventScrollReset: ue }
      );
    if (tl = lr(gt), tl)
      return p.add(tl.key), vl(
        Et,
        tl.result,
        !1,
        { preventScrollReset: ue }
      );
    let { loaderData: ll, errors: ba } = kh(
      w,
      Dt,
      Ee,
      void 0,
      Gt,
      gt
    );
    ma(Bl), w.navigation.state === "loading" && Bl > P ? (Ae(ve, "Expected pending action"), me && me.abort(), Pt(w.navigation.location, {
      matches: Dt,
      loaderData: ll,
      errors: ba,
      fetchers: new Map(w.fetchers)
    })) : (rt({
      errors: ba,
      loaderData: Wh(
        w.loaderData,
        ll,
        Dt,
        ba
      ),
      fetchers: new Map(w.fetchers)
    }), Ne = !1);
  }
  async function Ga(S, M, C, X, V, te, ie, F, ue, le) {
    let oe = w.fetchers.get(S);
    Tt(
      S,
      Ou(
        le,
        oe ? oe.data : void 0
      ),
      { flushSync: F }
    );
    let se = new AbortController(), ye = Dn(
      u.history,
      C,
      se.signal
    );
    if (ie) {
      let ze = await pa(
        V,
        C,
        ye.signal,
        S
      );
      if (ze.type === "aborted")
        return;
      if (ze.type === "error") {
        We(S, M, ze.error, { flushSync: F });
        return;
      } else if (ze.matches)
        V = ze.matches, X = Uu(V, C);
      else {
        We(
          S,
          M,
          Wt(404, { pathname: C }),
          { flushSync: F }
        );
        return;
      }
    }
    x.set(S, se);
    let xe = K, Ke = Mn(
      s,
      h,
      ye,
      V,
      X,
      o,
      te
    ), we = (await Hl(
      ye,
      Ke,
      te,
      S
    ))[X.route.id];
    if (x.get(S) === se && x.delete(S), !ye.signal.aborted) {
      if (J.has(S)) {
        Tt(S, ca(void 0));
        return;
      }
      if (ja(we))
        if (P > xe) {
          Tt(S, ca(void 0));
          return;
        } else {
          p.add(S), await vl(ye, we, !1, {
            preventScrollReset: ue
          });
          return;
        }
      if (jt(we)) {
        We(S, M, we.error);
        return;
      }
      Tt(S, ca(we.data));
    }
  }
  async function vl(S, M, C, {
    submission: X,
    fetcherSubmission: V,
    preventScrollReset: te,
    replace: ie
  } = {}) {
    M.response.headers.has("X-Remix-Revalidate") && (Ne = !0);
    let F = M.response.headers.get("Location");
    Ae(F, "Expected a Location header on the redirect Response"), F = Jh(
      F,
      new URL(S.url),
      y
    );
    let ue = wu(w.location, F, {
      _isRedirect: !0
    });
    if (c) {
      let Ke = !1;
      if (M.response.headers.has("X-Remix-Reload-Document"))
        Ke = !0;
      else if (qf.test(F)) {
        const Fe = cm(F, !0);
        Ke = // Hard reload if it's an absolute URL to a new origin
        Fe.origin !== r.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        Ft(Fe.pathname, y) == null;
      }
      if (Ke) {
        ie ? r.location.replace(F) : r.location.assign(F);
        return;
      }
    }
    me = null;
    let le = ie === !0 || M.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: oe, formAction: se, formEncType: ye } = w.navigation;
    !X && !V && oe && se && ye && (X = em(w.navigation));
    let xe = X || V;
    if (q0.has(M.response.status) && xe && Yt(xe.formMethod))
      await It(le, ue, {
        submission: {
          ...xe,
          formAction: F
        },
        // Preserve these flags across redirects
        preventScrollReset: te || pe,
        enableViewTransition: C ? Ze : void 0
      });
    else {
      let Ke = Uf(
        ue,
        X
      );
      await It(le, ue, {
        overrideNavigation: Ke,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: V,
        // Preserve these flags across redirects
        preventScrollReset: te || pe,
        enableViewTransition: C ? Ze : void 0
      });
    }
  }
  async function Hl(S, M, C, X) {
    let V, te = {};
    try {
      V = await k0(
        m,
        S,
        M,
        X,
        C,
        !1
      );
    } catch (ie) {
      return M.filter((F) => F.shouldLoad).forEach((F) => {
        te[F.route.id] = {
          type: "error",
          error: ie
        };
      }), te;
    }
    if (S.signal.aborted)
      return te;
    for (let [ie, F] of Object.entries(V))
      if (tg(F)) {
        let ue = F.result;
        te[ie] = {
          type: "redirect",
          response: P0(
            ue,
            S,
            ie,
            M,
            y
          )
        };
      } else
        te[ie] = await F0(
          F
        );
    return te;
  }
  async function qu(S, M, C, X) {
    let V = Hl(
      C,
      S,
      X,
      null
    ), te = Promise.all(
      M.map(async (ue) => {
        if (ue.matches && ue.match && ue.request && ue.controller) {
          let oe = (await Hl(
            ue.request,
            ue.matches,
            X,
            ue.key
          ))[ue.match.route.id];
          return { [ue.key]: oe };
        } else
          return Promise.resolve({
            [ue.key]: {
              type: "error",
              error: Wt(404, {
                pathname: ue.path
              })
            }
          });
      })
    ), ie = await V, F = (await te).reduce(
      (ue, le) => Object.assign(ue, le),
      {}
    );
    return {
      loaderResults: ie,
      fetcherResults: F
    };
  }
  function zn() {
    Ne = !0, q.forEach((S, M) => {
      x.has(M) && Le.add(M), rl(M);
    });
  }
  function Tt(S, M, C = {}) {
    w.fetchers.set(S, M), rt(
      { fetchers: new Map(w.fetchers) },
      { flushSync: (C && C.flushSync) === !0 }
    );
  }
  function We(S, M, C, X = {}) {
    let V = Ba(w.matches, M);
    ht(S), rt(
      {
        errors: {
          [V.route.id]: C
        },
        fetchers: new Map(w.fetchers)
      },
      { flushSync: (X && X.flushSync) === !0 }
    );
  }
  function el(S) {
    return $.set(S, ($.get(S) || 0) + 1), J.has(S) && J.delete(S), w.fetchers.get(S) || G0;
  }
  function ht(S) {
    let M = w.fetchers.get(S);
    x.has(S) && !(M && M.state === "loading" && be.has(S)) && rl(S), q.delete(S), be.delete(S), p.delete(S), J.delete(S), Le.delete(S), w.fetchers.delete(S);
  }
  function vr(S) {
    let M = ($.get(S) || 0) - 1;
    M <= 0 ? ($.delete(S), J.add(S)) : $.set(S, M), rt({ fetchers: new Map(w.fetchers) });
  }
  function rl(S) {
    let M = x.get(S);
    M && (M.abort(), x.delete(S));
  }
  function Gu(S) {
    for (let M of S) {
      let C = el(M), X = ca(C.data);
      w.fetchers.set(M, X);
    }
  }
  function ha() {
    let S = [], M = !1;
    for (let C of p) {
      let X = w.fetchers.get(C);
      Ae(X, `Expected fetcher: ${C}`), X.state === "loading" && (p.delete(C), S.push(C), M = !0);
    }
    return Gu(S), M;
  }
  function ma(S) {
    let M = [];
    for (let [C, X] of be)
      if (X < S) {
        let V = w.fetchers.get(C);
        Ae(V, `Expected fetcher: ${C}`), V.state === "loading" && (rl(C), be.delete(C), M.push(C));
      }
    return Gu(M), M.length > 0;
  }
  function gl(S, M) {
    let C = w.blockers.get(S) || zu;
    return ae.get(S) !== M && ae.set(S, M), C;
  }
  function ya(S) {
    w.blockers.delete(S), ae.delete(S);
  }
  function cl(S, M) {
    let C = w.blockers.get(S) || zu;
    Ae(
      C.state === "unblocked" && M.state === "blocked" || C.state === "blocked" && M.state === "blocked" || C.state === "blocked" && M.state === "proceeding" || C.state === "blocked" && M.state === "unblocked" || C.state === "proceeding" && M.state === "unblocked",
      `Invalid blocker state transition: ${C.state} -> ${M.state}`
    );
    let X = new Map(w.blockers);
    X.set(S, M), rt({ blockers: X });
  }
  function Xu({
    currentLocation: S,
    nextLocation: M,
    historyAction: C
  }) {
    if (ae.size === 0)
      return;
    ae.size > 1 && it(!1, "A router only supports one blocker at a time");
    let X = Array.from(ae.entries()), [V, te] = X[X.length - 1], ie = w.blockers.get(V);
    if (!(ie && ie.state === "proceeding") && te({ currentLocation: S, nextLocation: M, historyAction: C }))
      return V;
  }
  function Xa(S) {
    let M = Wt(404, { pathname: S }), C = b || v, { matches: X, route: V } = Ph(C);
    return { notFoundMatches: X, route: V, error: M };
  }
  function Qu(S, M, C) {
    if (L = S, Q = M, _ = C || null, !Z && w.navigation === xf) {
      Z = !0;
      let X = Vu(w.location, w.matches);
      X != null && rt({ restoreScrollPosition: X });
    }
    return () => {
      L = null, Q = null, _ = null;
    };
  }
  function Qa(S, M) {
    return _ && _(
      S,
      M.map((X) => p0(X, w.loaderData))
    ) || S.key;
  }
  function va(S, M) {
    if (L && Q) {
      let C = Qa(S, M);
      L[C] = Q();
    }
  }
  function Vu(S, M) {
    if (L) {
      let C = Qa(S, M), X = L[C];
      if (typeof X == "number")
        return X;
    }
    return null;
  }
  function ga(S, M, C) {
    if (u.patchRoutesOnNavigation)
      if (S) {
        if (Object.keys(S[0].params).length > 0)
          return { active: !0, matches: nr(
            M,
            C,
            y,
            !0
          ) };
      } else
        return { active: !0, matches: nr(
          M,
          C,
          y,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function pa(S, M, C, X) {
    if (!u.patchRoutesOnNavigation)
      return { type: "success", matches: S };
    let V = S;
    for (; ; ) {
      let te = b == null, ie = b || v, F = h;
      try {
        await u.patchRoutesOnNavigation({
          signal: C,
          path: M,
          matches: V,
          fetcherKey: X,
          patch: (oe, se) => {
            C.aborted || Qh(
              oe,
              se,
              ie,
              F,
              s
            );
          }
        });
      } catch (oe) {
        return { type: "error", error: oe, partialMatches: V };
      } finally {
        te && !C.aborted && (v = [...v]);
      }
      if (C.aborted)
        return { type: "aborted" };
      let ue = fa(ie, M, y);
      if (ue)
        return { type: "success", matches: ue };
      let le = nr(
        ie,
        M,
        y,
        !0
      );
      if (!le || V.length === le.length && V.every(
        (oe, se) => oe.route.id === le[se].route.id
      ))
        return { type: "success", matches: null };
      V = le;
    }
  }
  function On(S) {
    h = {}, b = rr(
      S,
      s,
      void 0,
      h
    );
  }
  function _n(S, M) {
    let C = b == null;
    Qh(
      S,
      M,
      b || v,
      h,
      s
    ), C && (v = [...v], rt({}));
  }
  return W = {
    get basename() {
      return y;
    },
    get future() {
      return R;
    },
    get state() {
      return w;
    },
    get routes() {
      return v;
    },
    get window() {
      return r;
    },
    initialize: St,
    subscribe: il,
    enableScrollRestoration: Qu,
    navigate: qa,
    fetch: ju,
    revalidate: An,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (S) => u.history.createHref(S),
    encodeLocation: (S) => u.history.encodeLocation(S),
    getFetcher: el,
    deleteFetcher: vr,
    dispose: Qe,
    getBlocker: gl,
    deleteBlocker: ya,
    patchRoutes: _n,
    _internalFetchControllers: x,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: On
  }, W;
}
function V0(u) {
  return u != null && ("formData" in u && u.formData != null || "body" in u && u.body !== void 0);
}
function Cf(u, r, c, o, s, h) {
  let v, b;
  if (s) {
    v = [];
    for (let m of r)
      if (v.push(m), m.route.id === s) {
        b = m;
        break;
      }
  } else
    v = r, b = r[r.length - 1];
  let y = Yf(
    o || ".",
    jf(v),
    Ft(u.pathname, c) || u.pathname,
    h === "path"
  );
  if (o == null && (y.search = u.search, y.hash = u.hash), (o == null || o === "" || o === ".") && b) {
    let m = Gf(y.search);
    if (b.route.index && !m)
      y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index";
    else if (!b.route.index && m) {
      let R = new URLSearchParams(y.search), N = R.getAll("index");
      R.delete("index"), N.filter((L) => L).forEach((L) => R.append("index", L));
      let D = R.toString();
      y.search = D ? `?${D}` : "";
    }
  }
  return c !== "/" && (y.pathname = y.pathname === "/" ? c : ml([c, y.pathname])), oa(y);
}
function Gh(u, r, c) {
  if (!c || !V0(c))
    return { path: r };
  if (c.formMethod && !lg(c.formMethod))
    return {
      path: r,
      error: Wt(405, { method: c.formMethod })
    };
  let o = () => ({
    path: r,
    error: Wt(400, { type: "invalid-body" })
  }), h = (c.formMethod || "get").toUpperCase(), v = Sm(r);
  if (c.body !== void 0) {
    if (c.formEncType === "text/plain") {
      if (!Yt(h))
        return o();
      let N = typeof c.body == "string" ? c.body : c.body instanceof FormData || c.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(c.body.entries()).reduce(
          (D, [L, _]) => `${D}${L}=${_}
`,
          ""
        )
      ) : String(c.body);
      return {
        path: r,
        submission: {
          formMethod: h,
          formAction: v,
          formEncType: c.formEncType,
          formData: void 0,
          json: void 0,
          text: N
        }
      };
    } else if (c.formEncType === "application/json") {
      if (!Yt(h))
        return o();
      try {
        let N = typeof c.body == "string" ? JSON.parse(c.body) : c.body;
        return {
          path: r,
          submission: {
            formMethod: h,
            formAction: v,
            formEncType: c.formEncType,
            formData: void 0,
            json: N,
            text: void 0
          }
        };
      } catch {
        return o();
      }
    }
  }
  Ae(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let b, y;
  if (c.formData)
    b = Lf(c.formData), y = c.formData;
  else if (c.body instanceof FormData)
    b = Lf(c.body), y = c.body;
  else if (c.body instanceof URLSearchParams)
    b = c.body, y = $h(b);
  else if (c.body == null)
    b = new URLSearchParams(), y = new FormData();
  else
    try {
      b = new URLSearchParams(c.body), y = $h(b);
    } catch {
      return o();
    }
  let m = {
    formMethod: h,
    formAction: v,
    formEncType: c && c.formEncType || "application/x-www-form-urlencoded",
    formData: y,
    json: void 0,
    text: void 0
  };
  if (Yt(m.formMethod))
    return { path: r, submission: m };
  let R = sa(r);
  return u && R.search && Gf(R.search) && b.append("index", ""), R.search = `?${b}`, { path: oa(R), submission: m };
}
function Xh(u, r, c, o, s, h, v, b, y, m, R, N, D, L, _, Q, Z, B, ee, k) {
  let he = k ? jt(k[1]) ? k[1].error : k[1].data : void 0, W = s.createURL(h.location), w = s.createURL(y), ve;
  if (R && h.errors) {
    let Ue = Object.keys(h.errors)[0];
    ve = v.findIndex((Ne) => Ne.route.id === Ue);
  } else if (k && jt(k[1])) {
    let Ue = k[0];
    ve = v.findIndex((Ne) => Ne.route.id === Ue) - 1;
  }
  let pe = k ? k[1].statusCode : void 0, me = pe && pe >= 400, Ze = {
    currentUrl: W,
    currentParams: h.matches[0]?.params || {},
    nextUrl: w,
    nextParams: v[0].params,
    ...b,
    actionResult: he,
    actionStatus: pe
  }, tt = v.map((Ue, Ne) => {
    let { route: Le } = Ue, x = null;
    if (ve != null && Ne > ve ? x = !1 : Le.lazy ? x = !0 : Le.loader == null ? x = !1 : R ? x = Nf(
      Le,
      h.loaderData,
      h.errors
    ) : Z0(h.loaderData, h.matches[Ne], Ue) && (x = !0), x !== null)
      return Hf(
        c,
        o,
        u,
        Ue,
        m,
        r,
        x
      );
    let K = me ? !1 : (
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      N || W.pathname + W.search === w.pathname + w.search || // Search params affect all loaders
      W.search !== w.search || K0(h.matches[Ne], Ue)
    ), P = {
      ...Ze,
      defaultShouldRevalidate: K
    }, be = or(Ue, P);
    return Hf(
      c,
      o,
      u,
      Ue,
      m,
      r,
      be,
      P
    );
  }), Je = [];
  return _.forEach((Ue, Ne) => {
    if (R || !v.some(($) => $.route.id === Ue.routeId) || L.has(Ne))
      return;
    let Le = h.fetchers.get(Ne), x = Le && Le.state !== "idle" && Le.data === void 0, K = fa(Z, Ue.path, B);
    if (!K) {
      if (ee && x)
        return;
      Je.push({
        key: Ne,
        routeId: Ue.routeId,
        path: Ue.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (Q.has(Ne))
      return;
    let P = Uu(K, Ue.path), be = new AbortController(), p = Dn(
      s,
      Ue.path,
      be.signal
    ), q = null;
    if (D.has(Ne))
      D.delete(Ne), q = Mn(
        c,
        o,
        p,
        K,
        P,
        m,
        r
      );
    else if (x)
      N && (q = Mn(
        c,
        o,
        p,
        K,
        P,
        m,
        r
      ));
    else {
      let $ = {
        ...Ze,
        defaultShouldRevalidate: me ? !1 : N
      };
      or(P, $) && (q = Mn(
        c,
        o,
        p,
        K,
        P,
        m,
        r,
        $
      ));
    }
    q && Je.push({
      key: Ne,
      routeId: Ue.routeId,
      path: Ue.path,
      matches: q,
      match: P,
      request: p,
      controller: be
    });
  }), { dsMatches: tt, revalidatingFetchers: Je };
}
function Nf(u, r, c) {
  if (u.lazy)
    return !0;
  if (!u.loader)
    return !1;
  let o = r != null && u.id in r, s = c != null && c[u.id] !== void 0;
  return !o && s ? !1 : typeof u.loader == "function" && u.loader.hydrate === !0 ? !0 : !o && !s;
}
function Z0(u, r, c) {
  let o = (
    // [a] -> [a, b]
    !r || // [a, b] -> [a, c]
    c.route.id !== r.route.id
  ), s = !u.hasOwnProperty(c.route.id);
  return o || s;
}
function K0(u, r) {
  let c = u.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    u.pathname !== r.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    c != null && c.endsWith("*") && u.params["*"] !== r.params["*"]
  );
}
function or(u, r) {
  if (u.route.shouldRevalidate) {
    let c = u.route.shouldRevalidate(r);
    if (typeof c == "boolean")
      return c;
  }
  return r.defaultShouldRevalidate;
}
function Qh(u, r, c, o, s) {
  let h;
  if (u) {
    let y = o[u];
    Ae(
      y,
      `No route found to patch children into: routeId = ${u}`
    ), y.children || (y.children = []), h = y.children;
  } else
    h = c;
  let v = r.filter(
    (y) => !h.some(
      (m) => ym(y, m)
    )
  ), b = rr(
    v,
    s,
    [u || "_", "patch", String(h?.length || "0")],
    o
  );
  h.push(...b);
}
function ym(u, r) {
  return "id" in u && "id" in r && u.id === r.id ? !0 : u.index === r.index && u.path === r.path && u.caseSensitive === r.caseSensitive ? (!u.children || u.children.length === 0) && (!r.children || r.children.length === 0) ? !0 : u.children.every(
    (c, o) => r.children?.some((s) => ym(c, s))
  ) : !1;
}
var Vh = /* @__PURE__ */ new WeakMap(), vm = ({
  key: u,
  route: r,
  manifest: c,
  mapRouteProperties: o
}) => {
  let s = c[r.id];
  if (Ae(s, "No route found in manifest"), !s.lazy || typeof s.lazy != "object")
    return;
  let h = s.lazy[u];
  if (!h)
    return;
  let v = Vh.get(s);
  v || (v = {}, Vh.set(s, v));
  let b = v[u];
  if (b)
    return b;
  let y = (async () => {
    let m = m0(u), N = s[u] !== void 0 && u !== "hasErrorBoundary";
    if (m)
      it(
        !m,
        "Route property " + u + " is not a supported lazy route property. This property will be ignored."
      ), v[u] = Promise.resolve();
    else if (N)
      it(
        !1,
        `Route "${s.id}" has a static property "${u}" defined. The lazy property will be ignored.`
      );
    else {
      let D = await h();
      D != null && (Object.assign(s, { [u]: D }), Object.assign(s, o(s)));
    }
    typeof s.lazy == "object" && (s.lazy[u] = void 0, Object.values(s.lazy).every((D) => D === void 0) && (s.lazy = void 0));
  })();
  return v[u] = y, y;
}, Zh = /* @__PURE__ */ new WeakMap();
function J0(u, r, c, o, s) {
  let h = c[u.id];
  if (Ae(h, "No route found in manifest"), !u.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof u.lazy == "function") {
    let R = Zh.get(h);
    if (R)
      return {
        lazyRoutePromise: R,
        lazyHandlerPromise: R
      };
    let N = (async () => {
      Ae(
        typeof u.lazy == "function",
        "No lazy route function found"
      );
      let D = await u.lazy(), L = {};
      for (let _ in D) {
        let Q = D[_];
        if (Q === void 0)
          continue;
        let Z = v0(_), ee = h[_] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        _ !== "hasErrorBoundary";
        Z ? it(
          !Z,
          "Route property " + _ + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : ee ? it(
          !ee,
          `Route "${h.id}" has a static property "${_}" defined but its lazy function is also returning a value for this property. The lazy route property "${_}" will be ignored.`
        ) : L[_] = Q;
      }
      Object.assign(h, L), Object.assign(h, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...o(h),
        lazy: void 0
      });
    })();
    return Zh.set(h, N), N.catch(() => {
    }), {
      lazyRoutePromise: N,
      lazyHandlerPromise: N
    };
  }
  let v = Object.keys(u.lazy), b = [], y;
  for (let R of v) {
    if (s && s.includes(R))
      continue;
    let N = vm({
      key: R,
      route: u,
      manifest: c,
      mapRouteProperties: o
    });
    N && (b.push(N), R === r && (y = N));
  }
  let m = b.length > 0 ? Promise.all(b).then(() => {
  }) : void 0;
  return m?.catch(() => {
  }), y?.catch(() => {
  }), {
    lazyRoutePromise: m,
    lazyHandlerPromise: y
  };
}
async function Kh(u) {
  let r = u.matches.filter((s) => s.shouldLoad), c = {};
  return (await Promise.all(r.map((s) => s.resolve()))).forEach((s, h) => {
    c[r[h].route.id] = s;
  }), c;
}
async function $0(u) {
  return u.matches.some((r) => r.route.unstable_middleware) ? gm(
    u,
    !1,
    () => Kh(u),
    (r, c) => ({ [c]: { type: "error", result: r } })
  ) : Kh(u);
}
async function gm(u, r, c, o) {
  let { matches: s, request: h, params: v, context: b } = u, y = {
    handlerResult: void 0
  };
  try {
    let m = s.flatMap(
      (N) => N.route.unstable_middleware ? N.route.unstable_middleware.map((D) => [N.route.id, D]) : []
    ), R = await pm(
      { request: h, params: v, context: b },
      m,
      r,
      y,
      c
    );
    return r ? R : y.handlerResult;
  } catch (m) {
    if (!y.middlewareError)
      throw m;
    let R = await o(
      y.middlewareError.error,
      y.middlewareError.routeId
    );
    return y.handlerResult ? Object.assign(y.handlerResult, R) : R;
  }
}
async function pm(u, r, c, o, s, h = 0) {
  let { request: v } = u;
  if (v.signal.aborted)
    throw v.signal.reason ? v.signal.reason : new Error(
      `Request aborted without an \`AbortSignal.reason\`: ${v.method} ${v.url}`
    );
  let b = r[h];
  if (!b)
    return o.handlerResult = await s(), o.handlerResult;
  let [y, m] = b, R = !1, N, D = async () => {
    if (R)
      throw new Error("You may only call `next()` once per middleware");
    R = !0, await pm(
      u,
      r,
      c,
      o,
      s,
      h + 1
    );
  };
  try {
    let L = await m(
      {
        request: u.request,
        params: u.params,
        context: u.context
      },
      D
    );
    return R ? L === void 0 ? N : L : D();
  } catch (L) {
    throw o.middlewareError ? o.middlewareError.error !== L && (o.middlewareError = { routeId: y, error: L }) : o.middlewareError = { routeId: y, error: L }, L;
  }
}
function bm(u, r, c, o, s) {
  let h = vm({
    key: "unstable_middleware",
    route: o.route,
    manifest: r,
    mapRouteProperties: u
  }), v = J0(
    o.route,
    Yt(c.method) ? "action" : "loader",
    r,
    u,
    s
  );
  return {
    middleware: h,
    route: v.lazyRoutePromise,
    handler: v.lazyHandlerPromise
  };
}
function Hf(u, r, c, o, s, h, v, b = null) {
  let y = !1, m = bm(
    u,
    r,
    c,
    o,
    s
  );
  return {
    ...o,
    _lazyPromises: m,
    shouldLoad: v,
    unstable_shouldRevalidateArgs: b,
    unstable_shouldCallHandler(R) {
      return y = !0, b ? typeof R == "boolean" ? or(o, {
        ...b,
        defaultShouldRevalidate: R
      }) : or(o, b) : v;
    },
    resolve(R) {
      return y || v || R && c.method === "GET" && (o.route.lazy || o.route.loader) ? W0({
        request: c,
        match: o,
        lazyHandlerPromise: m?.handler,
        lazyRoutePromise: m?.route,
        handlerOverride: R,
        scopedContext: h
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function Mn(u, r, c, o, s, h, v, b = null) {
  return o.map((y) => y.route.id !== s.route.id ? {
    ...y,
    shouldLoad: !1,
    unstable_shouldRevalidateArgs: b,
    unstable_shouldCallHandler: () => !1,
    _lazyPromises: bm(
      u,
      r,
      c,
      y,
      h
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : Hf(
    u,
    r,
    c,
    y,
    h,
    v,
    !0,
    b
  ));
}
async function k0(u, r, c, o, s, h) {
  c.some((m) => m._lazyPromises?.middleware) && await Promise.all(c.map((m) => m._lazyPromises?.middleware));
  let v = {
    request: r,
    params: c[0].params,
    context: s,
    matches: c
  }, y = await u({
    ...v,
    fetcherKey: o,
    unstable_runClientMiddleware: (m) => {
      let R = v;
      return gm(
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
        (N, D) => ({
          [D]: { type: "error", result: N }
        })
      );
    }
  });
  try {
    await Promise.all(
      c.flatMap((m) => [m._lazyPromises?.handler, m._lazyPromises?.route])
    );
  } catch {
  }
  return y;
}
async function W0({
  request: u,
  match: r,
  lazyHandlerPromise: c,
  lazyRoutePromise: o,
  handlerOverride: s,
  scopedContext: h
}) {
  let v, b, y = Yt(u.method), m = y ? "action" : "loader", R = (N) => {
    let D, L = new Promise((Z, B) => D = B);
    b = () => D(), u.signal.addEventListener("abort", b);
    let _ = (Z) => typeof N != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`
      )
    ) : N(
      {
        request: u,
        params: r.params,
        context: h
      },
      ...Z !== void 0 ? [Z] : []
    ), Q = (async () => {
      try {
        return { type: "data", result: await (s ? s((B) => _(B)) : _()) };
      } catch (Z) {
        return { type: "error", result: Z };
      }
    })();
    return Promise.race([Q, L]);
  };
  try {
    let N = y ? r.route.action : r.route.loader;
    if (c || o)
      if (N) {
        let D, [L] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          R(N).catch((_) => {
            D = _;
          }),
          // Ensure all lazy route promises are resolved before continuing
          c,
          o
        ]);
        if (D !== void 0)
          throw D;
        v = L;
      } else {
        await c;
        let D = y ? r.route.action : r.route.loader;
        if (D)
          [v] = await Promise.all([R(D), o]);
        else if (m === "action") {
          let L = new URL(u.url), _ = L.pathname + L.search;
          throw Wt(405, {
            method: u.method,
            pathname: _,
            routeId: r.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (N)
      v = await R(N);
    else {
      let D = new URL(u.url), L = D.pathname + D.search;
      throw Wt(404, {
        pathname: L
      });
    }
  } catch (N) {
    return { type: "error", result: N };
  } finally {
    b && u.signal.removeEventListener("abort", b);
  }
  return v;
}
async function F0(u) {
  let { result: r, type: c } = u;
  if (Em(r)) {
    let o;
    try {
      let s = r.headers.get("Content-Type");
      s && /\bapplication\/json\b/.test(s) ? r.body == null ? o = null : o = await r.json() : o = await r.text();
    } catch (s) {
      return { type: "error", error: s };
    }
    return c === "error" ? {
      type: "error",
      error: new fr(r.status, r.statusText, o),
      statusCode: r.status,
      headers: r.headers
    } : {
      type: "data",
      data: o,
      statusCode: r.status,
      headers: r.headers
    };
  }
  return c === "error" ? Ih(r) ? r.data instanceof Error ? {
    type: "error",
    error: r.data,
    statusCode: r.init?.status,
    headers: r.init?.headers ? new Headers(r.init.headers) : void 0
  } : {
    type: "error",
    error: new fr(
      r.init?.status || 500,
      void 0,
      r.data
    ),
    statusCode: Cu(r) ? r.status : void 0,
    headers: r.init?.headers ? new Headers(r.init.headers) : void 0
  } : {
    type: "error",
    error: r,
    statusCode: Cu(r) ? r.status : void 0
  } : Ih(r) ? {
    type: "data",
    data: r.data,
    statusCode: r.init?.status,
    headers: r.init?.headers ? new Headers(r.init.headers) : void 0
  } : { type: "data", data: r };
}
function P0(u, r, c, o, s) {
  let h = u.headers.get("Location");
  if (Ae(
    h,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !qf.test(h)) {
    let v = o.slice(
      0,
      o.findIndex((b) => b.route.id === c) + 1
    );
    h = Cf(
      new URL(r.url),
      v,
      s,
      h
    ), u.headers.set("Location", h);
  }
  return u;
}
function Jh(u, r, c) {
  if (qf.test(u)) {
    let o = u, s = o.startsWith("//") ? new URL(r.protocol + o) : new URL(o), h = Ft(s.pathname, c) != null;
    if (s.origin === r.origin && h)
      return s.pathname + s.search + s.hash;
  }
  return u;
}
function Dn(u, r, c, o) {
  let s = u.createURL(Sm(r)).toString(), h = { signal: c };
  if (o && Yt(o.formMethod)) {
    let { formMethod: v, formEncType: b } = o;
    h.method = v.toUpperCase(), b === "application/json" ? (h.headers = new Headers({ "Content-Type": b }), h.body = JSON.stringify(o.json)) : b === "text/plain" ? h.body = o.text : b === "application/x-www-form-urlencoded" && o.formData ? h.body = Lf(o.formData) : h.body = o.formData;
  }
  return new Request(s, h);
}
function Lf(u) {
  let r = new URLSearchParams();
  for (let [c, o] of u.entries())
    r.append(c, typeof o == "string" ? o : o.name);
  return r;
}
function $h(u) {
  let r = new FormData();
  for (let [c, o] of u.entries())
    r.append(c, o);
  return r;
}
function I0(u, r, c, o = !1, s = !1) {
  let h = {}, v = null, b, y = !1, m = {}, R = c && jt(c[1]) ? c[1].error : void 0;
  return u.forEach((N) => {
    if (!(N.route.id in r))
      return;
    let D = N.route.id, L = r[D];
    if (Ae(
      !ja(L),
      "Cannot handle redirect results in processLoaderData"
    ), jt(L)) {
      let _ = L.error;
      if (R !== void 0 && (_ = R, R = void 0), v = v || {}, s)
        v[D] = _;
      else {
        let Q = Ba(u, D);
        v[Q.route.id] == null && (v[Q.route.id] = _);
      }
      o || (h[D] = mm), y || (y = !0, b = Cu(L.error) ? L.error.status : 500), L.headers && (m[D] = L.headers);
    } else
      h[D] = L.data, L.statusCode && L.statusCode !== 200 && !y && (b = L.statusCode), L.headers && (m[D] = L.headers);
  }), R !== void 0 && c && (v = { [c[0]]: R }, c[2] && (h[c[2]] = void 0)), {
    loaderData: h,
    errors: v,
    statusCode: b || 200,
    loaderHeaders: m
  };
}
function kh(u, r, c, o, s, h) {
  let { loaderData: v, errors: b } = I0(
    r,
    c,
    o
  );
  return s.filter((y) => !y.matches || y.matches.some((m) => m.shouldLoad)).forEach((y) => {
    let { key: m, match: R, controller: N } = y, D = h[m];
    if (Ae(D, "Did not find corresponding fetcher result"), !(N && N.signal.aborted))
      if (jt(D)) {
        let L = Ba(u.matches, R?.route.id);
        b && b[L.route.id] || (b = {
          ...b,
          [L.route.id]: D.error
        }), u.fetchers.delete(m);
      } else if (ja(D))
        Ae(!1, "Unhandled fetcher revalidation redirect");
      else {
        let L = ca(D.data);
        u.fetchers.set(m, L);
      }
  }), { loaderData: v, errors: b };
}
function Wh(u, r, c, o) {
  let s = Object.entries(r).filter(([, h]) => h !== mm).reduce((h, [v, b]) => (h[v] = b, h), {});
  for (let h of c) {
    let v = h.route.id;
    if (!r.hasOwnProperty(v) && u.hasOwnProperty(v) && h.route.loader && (s[v] = u[v]), o && o.hasOwnProperty(v))
      break;
  }
  return s;
}
function Fh(u) {
  return u ? jt(u[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [u[0]]: u[1].data
    }
  } : {};
}
function Ba(u, r) {
  return (r ? u.slice(0, u.findIndex((o) => o.route.id === r) + 1) : [...u]).reverse().find((o) => o.route.hasErrorBoundary === !0) || u[0];
}
function Ph(u) {
  let r = u.length === 1 ? u[0] : u.find((c) => c.index || !c.path || c.path === "/") || {
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
function Wt(u, {
  pathname: r,
  routeId: c,
  method: o,
  type: s,
  message: h
} = {}) {
  let v = "Unknown Server Error", b = "Unknown @remix-run/router error";
  return u === 400 ? (v = "Bad Request", o && r && c ? b = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${c}", so there is no way to handle the request.` : s === "invalid-body" && (b = "Unable to encode submission body")) : u === 403 ? (v = "Forbidden", b = `Route "${c}" does not match URL "${r}"`) : u === 404 ? (v = "Not Found", b = `No route matches URL "${r}"`) : u === 405 && (v = "Method Not Allowed", o && r && c ? b = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${c}", so there is no way to handle the request.` : o && (b = `Invalid request method "${o.toUpperCase()}"`)), new fr(
    u || 500,
    v,
    new Error(b),
    !0
  );
}
function lr(u) {
  let r = Object.entries(u);
  for (let c = r.length - 1; c >= 0; c--) {
    let [o, s] = r[c];
    if (ja(s))
      return { key: o, result: s };
  }
}
function Sm(u) {
  let r = typeof u == "string" ? sa(u) : u;
  return oa({ ...r, hash: "" });
}
function eg(u, r) {
  return u.pathname !== r.pathname || u.search !== r.search ? !1 : u.hash === "" ? r.hash !== "" : u.hash === r.hash ? !0 : r.hash !== "";
}
function tg(u) {
  return Em(u.result) && Y0.has(u.result.status);
}
function jt(u) {
  return u.type === "error";
}
function ja(u) {
  return (u && u.type) === "redirect";
}
function Ih(u) {
  return typeof u == "object" && u != null && "type" in u && "data" in u && "init" in u && u.type === "DataWithResponseInit";
}
function Em(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.headers == "object" && typeof u.body < "u";
}
function lg(u) {
  return j0.has(u.toUpperCase());
}
function Yt(u) {
  return L0.has(u.toUpperCase());
}
function Gf(u) {
  return new URLSearchParams(u).getAll("index").some((r) => r === "");
}
function Uu(u, r) {
  let c = typeof r == "string" ? sa(r).search : r.search;
  if (u[u.length - 1].route.index && Gf(c || ""))
    return u[u.length - 1];
  let o = sm(u);
  return o[o.length - 1];
}
function em(u) {
  let { formMethod: r, formAction: c, formEncType: o, text: s, formData: h, json: v } = u;
  if (!(!r || !c || !o)) {
    if (s != null)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: s
      };
    if (h != null)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: h,
        json: void 0,
        text: void 0
      };
    if (v !== void 0)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: void 0,
        json: v,
        text: void 0
      };
  }
}
function Uf(u, r) {
  return r ? {
    state: "loading",
    location: u,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text
  } : {
    state: "loading",
    location: u,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function ag(u, r) {
  return {
    state: "submitting",
    location: u,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text
  };
}
function Ou(u, r) {
  return u ? {
    state: "loading",
    formMethod: u.formMethod,
    formAction: u.formAction,
    formEncType: u.formEncType,
    formData: u.formData,
    json: u.json,
    text: u.text,
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
function ng(u, r) {
  return {
    state: "submitting",
    formMethod: u.formMethod,
    formAction: u.formAction,
    formEncType: u.formEncType,
    formData: u.formData,
    json: u.json,
    text: u.text,
    data: r ? r.data : void 0
  };
}
function ca(u) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: u
  };
}
function ug(u, r) {
  try {
    let c = u.sessionStorage.getItem(
      hm
    );
    if (c) {
      let o = JSON.parse(c);
      for (let [s, h] of Object.entries(o || {}))
        h && Array.isArray(h) && r.set(s, new Set(h || []));
    }
  } catch {
  }
}
function ig(u, r) {
  if (r.size > 0) {
    let c = {};
    for (let [o, s] of r)
      c[o] = [...s];
    try {
      u.sessionStorage.setItem(
        hm,
        JSON.stringify(c)
      );
    } catch (o) {
      it(
        !1,
        `Failed to save applied view transitions in sessionStorage (${o}).`
      );
    }
  }
}
function rg() {
  let u, r, c = new Promise((o, s) => {
    u = async (h) => {
      o(h);
      try {
        await c;
      } catch {
      }
    }, r = async (h) => {
      s(h);
      try {
        await c;
      } catch {
      }
    };
  });
  return {
    promise: c,
    //@ts-ignore
    resolve: u,
    //@ts-ignore
    reject: r
  };
}
var Ya = H.createContext(null);
Ya.displayName = "DataRouter";
var Hu = H.createContext(null);
Hu.displayName = "DataRouterState";
var Xf = H.createContext({
  isTransitioning: !1
});
Xf.displayName = "ViewTransition";
var Rm = H.createContext(
  /* @__PURE__ */ new Map()
);
Rm.displayName = "Fetchers";
var cg = H.createContext(null);
cg.displayName = "Await";
var yl = H.createContext(
  null
);
yl.displayName = "Navigation";
var sr = H.createContext(
  null
);
sr.displayName = "Location";
var Nl = H.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Nl.displayName = "Route";
var Qf = H.createContext(null);
Qf.displayName = "RouteError";
function fg(u, { relative: r } = {}) {
  Ae(
    Lu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: o } = H.useContext(yl), { hash: s, pathname: h, search: v } = Bu(u, { relative: r }), b = h;
  return c !== "/" && (b = h === "/" ? c : ml([c, h])), o.createHref({ pathname: b, search: v, hash: s });
}
function Lu() {
  return H.useContext(sr) != null;
}
function da() {
  return Ae(
    Lu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), H.useContext(sr).location;
}
var Tm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Dm(u) {
  H.useContext(yl).static || H.useLayoutEffect(u);
}
function og() {
  let { isDataRoute: u } = H.useContext(Nl);
  return u ? Tg() : sg();
}
function sg() {
  Ae(
    Lu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = H.useContext(Ya), { basename: r, navigator: c } = H.useContext(yl), { matches: o } = H.useContext(Nl), { pathname: s } = da(), h = JSON.stringify(jf(o)), v = H.useRef(!1);
  return Dm(() => {
    v.current = !0;
  }), H.useCallback(
    (y, m = {}) => {
      if (it(v.current, Tm), !v.current) return;
      if (typeof y == "number") {
        c.go(y);
        return;
      }
      let R = Yf(
        y,
        JSON.parse(h),
        s,
        m.relative === "path"
      );
      u == null && r !== "/" && (R.pathname = R.pathname === "/" ? r : ml([r, R.pathname])), (m.replace ? c.replace : c.push)(
        R,
        m.state,
        m
      );
    },
    [
      r,
      c,
      h,
      s,
      u
    ]
  );
}
H.createContext(null);
function Bu(u, { relative: r } = {}) {
  let { matches: c } = H.useContext(Nl), { pathname: o } = da(), s = JSON.stringify(jf(c));
  return H.useMemo(
    () => Yf(
      u,
      JSON.parse(s),
      o,
      r === "path"
    ),
    [u, s, o, r]
  );
}
function dg(u, r, c, o) {
  Ae(
    Lu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s } = H.useContext(yl), { matches: h } = H.useContext(Nl), v = h[h.length - 1], b = v ? v.params : {}, y = v ? v.pathname : "/", m = v ? v.pathnameBase : "/", R = v && v.route;
  {
    let B = R && R.path || "";
    Mm(
      y,
      !R || B.endsWith("*") || B.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B === "/" ? "*" : `${B}/*`}">.`
    );
  }
  let N = da(), D;
  D = N;
  let L = D.pathname || "/", _ = L;
  if (m !== "/") {
    let B = m.replace(/^\//, "").split("/");
    _ = "/" + L.replace(/^\//, "").split("/").slice(B.length).join("/");
  }
  let Q = fa(u, { pathname: _ });
  return it(
    R || Q != null,
    `No routes matched location "${D.pathname}${D.search}${D.hash}" `
  ), it(
    Q == null || Q[Q.length - 1].route.element !== void 0 || Q[Q.length - 1].route.Component !== void 0 || Q[Q.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), gg(
    Q && Q.map(
      (B) => Object.assign({}, B, {
        params: Object.assign({}, b, B.params),
        pathname: ml([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          s.encodeLocation ? s.encodeLocation(B.pathname).pathname : B.pathname
        ]),
        pathnameBase: B.pathnameBase === "/" ? m : ml([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          s.encodeLocation ? s.encodeLocation(B.pathnameBase).pathname : B.pathnameBase
        ])
      })
    ),
    h,
    c,
    o
  );
}
function hg() {
  let u = Rg(), r = Cu(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, o = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: o }, h = { padding: "2px 4px", backgroundColor: o }, v = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), v = /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ H.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ H.createElement("code", { style: h }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ H.createElement("code", { style: h }, "errorElement"), " prop on your route.")), /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ H.createElement("h3", { style: { fontStyle: "italic" } }, r), c ? /* @__PURE__ */ H.createElement("pre", { style: s }, c) : null, v);
}
var mg = /* @__PURE__ */ H.createElement(hg, null), yg = class extends H.Component {
  constructor(u) {
    super(u), this.state = {
      location: u.location,
      revalidation: u.revalidation,
      error: u.error
    };
  }
  static getDerivedStateFromError(u) {
    return { error: u };
  }
  static getDerivedStateFromProps(u, r) {
    return r.location !== u.location || r.revalidation !== "idle" && u.revalidation === "idle" ? {
      error: u.error,
      location: u.location,
      revalidation: u.revalidation
    } : {
      error: u.error !== void 0 ? u.error : r.error,
      location: r.location,
      revalidation: u.revalidation || r.revalidation
    };
  }
  componentDidCatch(u, r) {
    console.error(
      "React Router caught the following error during render",
      u,
      r
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ H.createElement(Nl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ H.createElement(
      Qf.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function vg({ routeContext: u, match: r, children: c }) {
  let o = H.useContext(Ya);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ H.createElement(Nl.Provider, { value: u }, c);
}
function gg(u, r = [], c = null, o = null) {
  if (u == null) {
    if (!c)
      return null;
    if (c.errors)
      u = c.matches;
    else if (r.length === 0 && !c.initialized && c.matches.length > 0)
      u = c.matches;
    else
      return null;
  }
  let s = u, h = c?.errors;
  if (h != null) {
    let y = s.findIndex(
      (m) => m.route.id && h?.[m.route.id] !== void 0
    );
    Ae(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, y + 1)
    );
  }
  let v = !1, b = -1;
  if (c)
    for (let y = 0; y < s.length; y++) {
      let m = s[y];
      if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (b = y), m.route.id) {
        let { loaderData: R, errors: N } = c, D = m.route.loader && !R.hasOwnProperty(m.route.id) && (!N || N[m.route.id] === void 0);
        if (m.route.lazy || D) {
          v = !0, b >= 0 ? s = s.slice(0, b + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((y, m, R) => {
    let N, D = !1, L = null, _ = null;
    c && (N = h && m.route.id ? h[m.route.id] : void 0, L = m.route.errorElement || mg, v && (b < 0 && R === 0 ? (Mm(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), D = !0, _ = null) : b === R && (D = !0, _ = m.route.hydrateFallbackElement || null)));
    let Q = r.concat(s.slice(0, R + 1)), Z = () => {
      let B;
      return N ? B = L : D ? B = _ : m.route.Component ? B = /* @__PURE__ */ H.createElement(m.route.Component, null) : m.route.element ? B = m.route.element : B = y, /* @__PURE__ */ H.createElement(
        vg,
        {
          match: m,
          routeContext: {
            outlet: y,
            matches: Q,
            isDataRoute: c != null
          },
          children: B
        }
      );
    };
    return c && (m.route.ErrorBoundary || m.route.errorElement || R === 0) ? /* @__PURE__ */ H.createElement(
      yg,
      {
        location: c.location,
        revalidation: c.revalidation,
        component: L,
        error: N,
        children: Z(),
        routeContext: { outlet: null, matches: Q, isDataRoute: !0 }
      }
    ) : Z();
  }, null);
}
function Vf(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function pg(u) {
  let r = H.useContext(Ya);
  return Ae(r, Vf(u)), r;
}
function bg(u) {
  let r = H.useContext(Hu);
  return Ae(r, Vf(u)), r;
}
function Sg(u) {
  let r = H.useContext(Nl);
  return Ae(r, Vf(u)), r;
}
function Zf(u) {
  let r = Sg(u), c = r.matches[r.matches.length - 1];
  return Ae(
    c.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), c.route.id;
}
function Eg() {
  return Zf(
    "useRouteId"
    /* UseRouteId */
  );
}
function Rg() {
  let u = H.useContext(Qf), r = bg(
    "useRouteError"
    /* UseRouteError */
  ), c = Zf(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : r.errors?.[c];
}
function Tg() {
  let { router: u } = pg(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Zf(
    "useNavigate"
    /* UseNavigateStable */
  ), c = H.useRef(!1);
  return Dm(() => {
    c.current = !0;
  }), H.useCallback(
    async (s, h = {}) => {
      it(c.current, Tm), c.current && (typeof s == "number" ? u.navigate(s) : await u.navigate(s, { fromRouteId: r, ...h }));
    },
    [u, r]
  );
}
var tm = {};
function Mm(u, r, c) {
  !r && !tm[u] && (tm[u] = !0, it(!1, c));
}
var lm = {};
function am(u, r) {
  !u && !lm[r] && (lm[r] = !0, console.warn(r));
}
function Dg(u) {
  let r = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: u.hasErrorBoundary || u.ErrorBoundary != null || u.errorElement != null
  };
  return u.Component && (u.element && it(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(r, {
    element: H.createElement(u.Component),
    Component: void 0
  })), u.HydrateFallback && (u.hydrateFallbackElement && it(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(r, {
    hydrateFallbackElement: H.createElement(u.HydrateFallback),
    HydrateFallback: void 0
  })), u.ErrorBoundary && (u.errorElement && it(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(r, {
    errorElement: H.createElement(u.ErrorBoundary),
    ErrorBoundary: void 0
  })), r;
}
var Mg = [
  "HydrateFallback",
  "hydrateFallbackElement"
], Ag = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((u, r) => {
      this.resolve = (c) => {
        this.status === "pending" && (this.status = "resolved", u(c));
      }, this.reject = (c) => {
        this.status === "pending" && (this.status = "rejected", r(c));
      };
    });
  }
};
function zg({
  router: u,
  flushSync: r
}) {
  let [c, o] = H.useState(u.state), [s, h] = H.useState(), [v, b] = H.useState({
    isTransitioning: !1
  }), [y, m] = H.useState(), [R, N] = H.useState(), [D, L] = H.useState(), _ = H.useRef(/* @__PURE__ */ new Map()), Q = H.useCallback(
    (k, { deletedFetchers: he, flushSync: W, viewTransitionOpts: w }) => {
      k.fetchers.forEach((pe, me) => {
        pe.data !== void 0 && _.current.set(me, pe.data);
      }), he.forEach((pe) => _.current.delete(pe)), am(
        W === !1 || r != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let ve = u.window != null && u.window.document != null && typeof u.window.document.startViewTransition == "function";
      if (am(
        w == null || ve,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !w || !ve) {
        r && W ? r(() => o(k)) : H.startTransition(() => o(k));
        return;
      }
      if (r && W) {
        r(() => {
          R && (y && y.resolve(), R.skipTransition()), b({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: w.currentLocation,
            nextLocation: w.nextLocation
          });
        });
        let pe = u.window.document.startViewTransition(() => {
          r(() => o(k));
        });
        pe.finished.finally(() => {
          r(() => {
            m(void 0), N(void 0), h(void 0), b({ isTransitioning: !1 });
          });
        }), r(() => N(pe));
        return;
      }
      R ? (y && y.resolve(), R.skipTransition(), L({
        state: k,
        currentLocation: w.currentLocation,
        nextLocation: w.nextLocation
      })) : (h(k), b({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: w.currentLocation,
        nextLocation: w.nextLocation
      }));
    },
    [u.window, r, R, y]
  );
  H.useLayoutEffect(() => u.subscribe(Q), [u, Q]), H.useEffect(() => {
    v.isTransitioning && !v.flushSync && m(new Ag());
  }, [v]), H.useEffect(() => {
    if (y && s && u.window) {
      let k = s, he = y.promise, W = u.window.document.startViewTransition(async () => {
        H.startTransition(() => o(k)), await he;
      });
      W.finished.finally(() => {
        m(void 0), N(void 0), h(void 0), b({ isTransitioning: !1 });
      }), N(W);
    }
  }, [s, y, u.window]), H.useEffect(() => {
    y && s && c.location.key === s.location.key && y.resolve();
  }, [y, R, c.location, s]), H.useEffect(() => {
    !v.isTransitioning && D && (h(D.state), b({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: D.currentLocation,
      nextLocation: D.nextLocation
    }), L(void 0));
  }, [v.isTransitioning, D]);
  let Z = H.useMemo(() => ({
    createHref: u.createHref,
    encodeLocation: u.encodeLocation,
    go: (k) => u.navigate(k),
    push: (k, he, W) => u.navigate(k, {
      state: he,
      preventScrollReset: W?.preventScrollReset
    }),
    replace: (k, he, W) => u.navigate(k, {
      replace: !0,
      state: he,
      preventScrollReset: W?.preventScrollReset
    })
  }), [u]), B = u.basename || "/", ee = H.useMemo(
    () => ({
      router: u,
      navigator: Z,
      static: !1,
      basename: B
    }),
    [u, Z, B]
  );
  return /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(Ya.Provider, { value: ee }, /* @__PURE__ */ H.createElement(Hu.Provider, { value: c }, /* @__PURE__ */ H.createElement(Rm.Provider, { value: _.current }, /* @__PURE__ */ H.createElement(Xf.Provider, { value: v }, /* @__PURE__ */ H.createElement(
    xg,
    {
      basename: B,
      location: c.location,
      navigationType: c.historyAction,
      navigator: Z
    },
    /* @__PURE__ */ H.createElement(
      Og,
      {
        routes: u.routes,
        future: u.future,
        state: c
      }
    )
  ))))), null);
}
var Og = H.memo(_g);
function _g({
  routes: u,
  future: r,
  state: c
}) {
  return dg(u, void 0, c, r);
}
function xg({
  basename: u = "/",
  children: r = null,
  location: c,
  navigationType: o = "POP",
  navigator: s,
  static: h = !1
}) {
  Ae(
    !Lu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let v = u.replace(/^\/*/, "/"), b = H.useMemo(
    () => ({
      basename: v,
      navigator: s,
      static: h,
      future: {}
    }),
    [v, s, h]
  );
  typeof c == "string" && (c = sa(c));
  let {
    pathname: y = "/",
    search: m = "",
    hash: R = "",
    state: N = null,
    key: D = "default"
  } = c, L = H.useMemo(() => {
    let _ = Ft(y, v);
    return _ == null ? null : {
      location: {
        pathname: _,
        search: m,
        hash: R,
        state: N,
        key: D
      },
      navigationType: o
    };
  }, [v, y, m, R, N, D, o]);
  return it(
    L != null,
    `<Router basename="${v}"> is not able to match the URL "${y}${m}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), L == null ? null : /* @__PURE__ */ H.createElement(yl.Provider, { value: b }, /* @__PURE__ */ H.createElement(sr.Provider, { children: r, value: L }));
}
var ur = "get", ir = "application/x-www-form-urlencoded";
function dr(u) {
  return u != null && typeof u.tagName == "string";
}
function Ug(u) {
  return dr(u) && u.tagName.toLowerCase() === "button";
}
function wg(u) {
  return dr(u) && u.tagName.toLowerCase() === "form";
}
function Cg(u) {
  return dr(u) && u.tagName.toLowerCase() === "input";
}
function Ng(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Hg(u, r) {
  return u.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Ng(u);
}
var ar = null;
function Lg() {
  if (ar === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ar = !1;
    } catch {
      ar = !0;
    }
  return ar;
}
var Bg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function wf(u) {
  return u != null && !Bg.has(u) ? (it(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ir}"`
  ), null) : u;
}
function jg(u, r) {
  let c, o, s, h, v;
  if (wg(u)) {
    let b = u.getAttribute("action");
    o = b ? Ft(b, r) : null, c = u.getAttribute("method") || ur, s = wf(u.getAttribute("enctype")) || ir, h = new FormData(u);
  } else if (Ug(u) || Cg(u) && (u.type === "submit" || u.type === "image")) {
    let b = u.form;
    if (b == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = u.getAttribute("formaction") || b.getAttribute("action");
    if (o = y ? Ft(y, r) : null, c = u.getAttribute("formmethod") || b.getAttribute("method") || ur, s = wf(u.getAttribute("formenctype")) || wf(b.getAttribute("enctype")) || ir, h = new FormData(b, u), !Lg()) {
      let { name: m, type: R, value: N } = u;
      if (R === "image") {
        let D = m ? `${m}.` : "";
        h.append(`${D}x`, "0"), h.append(`${D}y`, "0");
      } else m && h.append(m, N);
    }
  } else {
    if (dr(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    c = ur, o = null, s = ir, v = u;
  }
  return h && s === "text/plain" && (v = h, h = void 0), { action: o, method: c.toLowerCase(), encType: s, formData: h, body: v };
}
function Kf(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
async function Yg(u, r) {
  if (u.id in r)
    return r[u.id];
  try {
    let c = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      u.module
    );
    return r[u.id] = c, c;
  } catch (c) {
    return console.error(
      `Error loading route module \`${u.module}\`, reloading page...`
    ), console.error(c), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function qg(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Gg(u, r, c) {
  let o = await Promise.all(
    u.map(async (s) => {
      let h = r.routes[s.route.id];
      if (h) {
        let v = await Yg(h, c);
        return v.links ? v.links() : [];
      }
      return [];
    })
  );
  return Zg(
    o.flat(1).filter(qg).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function nm(u, r, c, o, s, h) {
  let v = (y, m) => c[m] ? y.route.id !== c[m].route.id : !0, b = (y, m) => (
    // param change, /users/123 -> /users/456
    c[m].pathname !== y.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    c[m].route.path?.endsWith("*") && c[m].params["*"] !== y.params["*"]
  );
  return h === "assets" ? r.filter(
    (y, m) => v(y, m) || b(y, m)
  ) : h === "data" ? r.filter((y, m) => {
    let R = o.routes[y.route.id];
    if (!R || !R.hasLoader)
      return !1;
    if (v(y, m) || b(y, m))
      return !0;
    if (y.route.shouldRevalidate) {
      let N = y.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: c[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof N == "boolean")
        return N;
    }
    return !0;
  }) : [];
}
function Xg(u, r, { includeHydrateFallback: c } = {}) {
  return Qg(
    u.map((o) => {
      let s = r.routes[o.route.id];
      if (!s) return [];
      let h = [s.module];
      return s.clientActionModule && (h = h.concat(s.clientActionModule)), s.clientLoaderModule && (h = h.concat(s.clientLoaderModule)), c && s.hydrateFallbackModule && (h = h.concat(s.hydrateFallbackModule)), s.imports && (h = h.concat(s.imports)), h;
    }).flat(1)
  );
}
function Qg(u) {
  return [...new Set(u)];
}
function Vg(u) {
  let r = {}, c = Object.keys(u).sort();
  for (let o of c)
    r[o] = u[o];
  return r;
}
function Zg(u, r) {
  let c = /* @__PURE__ */ new Set();
  return new Set(r), u.reduce((o, s) => {
    let h = JSON.stringify(Vg(s));
    return c.has(h) || (c.add(h), o.push({ key: h, link: s })), o;
  }, []);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Kg = /* @__PURE__ */ new Set([100, 101, 204, 205]);
function Jg(u, r) {
  let c = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return c.pathname === "/" ? c.pathname = "_root.data" : r && Ft(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
}
function Am() {
  let u = H.useContext(Ya);
  return Kf(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function $g() {
  let u = H.useContext(Hu);
  return Kf(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var Jf = H.createContext(void 0);
Jf.displayName = "FrameworkContext";
function zm() {
  let u = H.useContext(Jf);
  return Kf(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function kg(u, r) {
  let c = H.useContext(Jf), [o, s] = H.useState(!1), [h, v] = H.useState(!1), { onFocus: b, onBlur: y, onMouseEnter: m, onMouseLeave: R, onTouchStart: N } = r, D = H.useRef(null);
  H.useEffect(() => {
    if (u === "render" && v(!0), u === "viewport") {
      let Q = (B) => {
        B.forEach((ee) => {
          v(ee.isIntersecting);
        });
      }, Z = new IntersectionObserver(Q, { threshold: 0.5 });
      return D.current && Z.observe(D.current), () => {
        Z.disconnect();
      };
    }
  }, [u]), H.useEffect(() => {
    if (o) {
      let Q = setTimeout(() => {
        v(!0);
      }, 100);
      return () => {
        clearTimeout(Q);
      };
    }
  }, [o]);
  let L = () => {
    s(!0);
  }, _ = () => {
    s(!1), v(!1);
  };
  return c ? u !== "intent" ? [h, D, {}] : [
    h,
    D,
    {
      onFocus: _u(b, L),
      onBlur: _u(y, _),
      onMouseEnter: _u(m, L),
      onMouseLeave: _u(R, _),
      onTouchStart: _u(N, L)
    }
  ] : [!1, D, {}];
}
function _u(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function Wg({
  page: u,
  ...r
}) {
  let { router: c } = Am(), o = H.useMemo(
    () => fa(c.routes, u, c.basename),
    [c.routes, u, c.basename]
  );
  return o ? /* @__PURE__ */ H.createElement(Pg, { page: u, matches: o, ...r }) : null;
}
function Fg(u) {
  let { manifest: r, routeModules: c } = zm(), [o, s] = H.useState([]);
  return H.useEffect(() => {
    let h = !1;
    return Gg(u, r, c).then(
      (v) => {
        h || s(v);
      }
    ), () => {
      h = !0;
    };
  }, [u, r, c]), o;
}
function Pg({
  page: u,
  matches: r,
  ...c
}) {
  let o = da(), { manifest: s, routeModules: h } = zm(), { basename: v } = Am(), { loaderData: b, matches: y } = $g(), m = H.useMemo(
    () => nm(
      u,
      r,
      y,
      s,
      o,
      "data"
    ),
    [u, r, y, s, o]
  ), R = H.useMemo(
    () => nm(
      u,
      r,
      y,
      s,
      o,
      "assets"
    ),
    [u, r, y, s, o]
  ), N = H.useMemo(() => {
    if (u === o.pathname + o.search + o.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), Q = !1;
    if (r.forEach((B) => {
      let ee = s.routes[B.route.id];
      !ee || !ee.hasLoader || (!m.some((k) => k.route.id === B.route.id) && B.route.id in b && h[B.route.id]?.shouldRevalidate || ee.hasClientLoader ? Q = !0 : _.add(B.route.id));
    }), _.size === 0)
      return [];
    let Z = Jg(u, v);
    return Q && _.size > 0 && Z.searchParams.set(
      "_routes",
      r.filter((B) => _.has(B.route.id)).map((B) => B.route.id).join(",")
    ), [Z.pathname + Z.search];
  }, [
    v,
    b,
    o,
    s,
    m,
    r,
    u,
    h
  ]), D = H.useMemo(
    () => Xg(R, s),
    [R, s]
  ), L = Fg(R);
  return /* @__PURE__ */ H.createElement(H.Fragment, null, N.map((_) => /* @__PURE__ */ H.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...c })), D.map((_) => /* @__PURE__ */ H.createElement("link", { key: _, rel: "modulepreload", href: _, ...c })), L.map(({ key: _, link: Q }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ H.createElement("link", { key: _, ...Q })
  )));
}
function Ig(...u) {
  return (r) => {
    u.forEach((c) => {
      typeof c == "function" ? c(r) : c != null && (c.current = r);
    });
  };
}
var Om = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Om && (window.__reactRouterVersion = "7.6.1");
} catch {
}
function ep(u, r) {
  return Q0({
    basename: r?.basename,
    unstable_getContext: r?.unstable_getContext,
    future: r?.future,
    history: o0({ window: r?.window }),
    hydrationData: tp(),
    routes: u,
    mapRouteProperties: Dg,
    hydrationRouteProperties: Mg,
    dataStrategy: r?.dataStrategy,
    patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
    window: r?.window
  }).initialize();
}
function tp() {
  let u = window?.__staticRouterHydrationData;
  return u && u.errors && (u = {
    ...u,
    errors: lp(u.errors)
  }), u;
}
function lp(u) {
  if (!u) return null;
  let r = Object.entries(u), c = {};
  for (let [o, s] of r)
    if (s && s.__type === "RouteErrorResponse")
      c[o] = new fr(
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
            let v = new h(s.message);
            v.stack = "", c[o] = v;
          } catch {
          }
      }
      if (c[o] == null) {
        let h = new Error(s.message);
        h.stack = "", c[o] = h;
      }
    } else
      c[o] = s;
  return c;
}
var _m = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, xm = H.forwardRef(
  function({
    onClick: r,
    discover: c = "render",
    prefetch: o = "none",
    relative: s,
    reloadDocument: h,
    replace: v,
    state: b,
    target: y,
    to: m,
    preventScrollReset: R,
    viewTransition: N,
    ...D
  }, L) {
    let { basename: _ } = H.useContext(yl), Q = typeof m == "string" && _m.test(m), Z, B = !1;
    if (typeof m == "string" && Q && (Z = m, Om))
      try {
        let me = new URL(window.location.href), Ze = m.startsWith("//") ? new URL(me.protocol + m) : new URL(m), tt = Ft(Ze.pathname, _);
        Ze.origin === me.origin && tt != null ? m = tt + Ze.search + Ze.hash : B = !0;
      } catch {
        it(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let ee = fg(m, { relative: s }), [k, he, W] = kg(
      o,
      D
    ), w = up(m, {
      replace: v,
      state: b,
      target: y,
      preventScrollReset: R,
      relative: s,
      viewTransition: N
    });
    function ve(me) {
      r && r(me), me.defaultPrevented || w(me);
    }
    let pe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ H.createElement(
        "a",
        {
          ...D,
          ...W,
          href: Z || ee,
          onClick: B || h ? r : ve,
          ref: Ig(L, he),
          target: y,
          "data-discover": !Q && c === "render" ? "true" : void 0
        }
      )
    );
    return k && !Q ? /* @__PURE__ */ H.createElement(H.Fragment, null, pe, /* @__PURE__ */ H.createElement(Wg, { page: ee })) : pe;
  }
);
xm.displayName = "Link";
var Nu = H.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: c = !1,
    className: o = "",
    end: s = !1,
    style: h,
    to: v,
    viewTransition: b,
    children: y,
    ...m
  }, R) {
    let N = Bu(v, { relative: m.relative }), D = da(), L = H.useContext(Hu), { navigator: _, basename: Q } = H.useContext(yl), Z = L != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    op(N) && b === !0, B = _.encodeLocation ? _.encodeLocation(N).pathname : N.pathname, ee = D.pathname, k = L && L.navigation && L.navigation.location ? L.navigation.location.pathname : null;
    c || (ee = ee.toLowerCase(), k = k ? k.toLowerCase() : null, B = B.toLowerCase()), k && Q && (k = Ft(k, Q) || k);
    const he = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
    let W = ee === B || !s && ee.startsWith(B) && ee.charAt(he) === "/", w = k != null && (k === B || !s && k.startsWith(B) && k.charAt(B.length) === "/"), ve = {
      isActive: W,
      isPending: w,
      isTransitioning: Z
    }, pe = W ? r : void 0, me;
    typeof o == "function" ? me = o(ve) : me = [
      o,
      W ? "active" : null,
      w ? "pending" : null,
      Z ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Ze = typeof h == "function" ? h(ve) : h;
    return /* @__PURE__ */ H.createElement(
      xm,
      {
        ...m,
        "aria-current": pe,
        className: me,
        ref: R,
        style: Ze,
        to: v,
        viewTransition: b
      },
      typeof y == "function" ? y(ve) : y
    );
  }
);
Nu.displayName = "NavLink";
var ap = H.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: r,
    navigate: c,
    reloadDocument: o,
    replace: s,
    state: h,
    method: v = ur,
    action: b,
    onSubmit: y,
    relative: m,
    preventScrollReset: R,
    viewTransition: N,
    ...D
  }, L) => {
    let _ = cp(), Q = fp(b, { relative: m }), Z = v.toLowerCase() === "get" ? "get" : "post", B = typeof b == "string" && _m.test(b), ee = (k) => {
      if (y && y(k), k.defaultPrevented) return;
      k.preventDefault();
      let he = k.nativeEvent.submitter, W = he?.getAttribute("formmethod") || v;
      _(he || k.currentTarget, {
        fetcherKey: r,
        method: W,
        navigate: c,
        replace: s,
        state: h,
        relative: m,
        preventScrollReset: R,
        viewTransition: N
      });
    };
    return /* @__PURE__ */ H.createElement(
      "form",
      {
        ref: L,
        method: Z,
        action: Q,
        onSubmit: o ? y : ee,
        ...D,
        "data-discover": !B && u === "render" ? "true" : void 0
      }
    );
  }
);
ap.displayName = "Form";
function np(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Um(u) {
  let r = H.useContext(Ya);
  return Ae(r, np(u)), r;
}
function up(u, {
  target: r,
  replace: c,
  state: o,
  preventScrollReset: s,
  relative: h,
  viewTransition: v
} = {}) {
  let b = og(), y = da(), m = Bu(u, { relative: h });
  return H.useCallback(
    (R) => {
      if (Hg(R, r)) {
        R.preventDefault();
        let N = c !== void 0 ? c : oa(y) === oa(m);
        b(u, {
          replace: N,
          state: o,
          preventScrollReset: s,
          relative: h,
          viewTransition: v
        });
      }
    },
    [
      y,
      b,
      m,
      c,
      o,
      r,
      u,
      s,
      h,
      v
    ]
  );
}
var ip = 0, rp = () => `__${String(++ip)}__`;
function cp() {
  let { router: u } = Um(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = H.useContext(yl), c = Eg();
  return H.useCallback(
    async (o, s = {}) => {
      let { action: h, method: v, encType: b, formData: y, body: m } = jg(
        o,
        r
      );
      if (s.navigate === !1) {
        let R = s.fetcherKey || rp();
        await u.fetch(R, c, s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: y,
          body: m,
          formMethod: s.method || v,
          formEncType: s.encType || b,
          flushSync: s.flushSync
        });
      } else
        await u.navigate(s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: y,
          body: m,
          formMethod: s.method || v,
          formEncType: s.encType || b,
          replace: s.replace,
          state: s.state,
          fromRouteId: c,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [u, r, c]
  );
}
function fp(u, { relative: r } = {}) {
  let { basename: c } = H.useContext(yl), o = H.useContext(Nl);
  Ae(o, "useFormAction must be used inside a RouteContext");
  let [s] = o.matches.slice(-1), h = { ...Bu(u || ".", { relative: r }) }, v = da();
  if (u == null) {
    h.search = v.search;
    let b = new URLSearchParams(h.search), y = b.getAll("index");
    if (y.some((R) => R === "")) {
      b.delete("index"), y.filter((N) => N).forEach((N) => b.append("index", N));
      let R = b.toString();
      h.search = R ? `?${R}` : "";
    }
  }
  return (!u || u === ".") && s.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (h.pathname = h.pathname === "/" ? c : ml([c, h.pathname])), oa(h);
}
function op(u, r = {}) {
  let c = H.useContext(Xf);
  Ae(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Um(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = Bu(u, { relative: r.relative });
  if (!c.isTransitioning)
    return !1;
  let h = Ft(c.currentLocation.pathname, o) || c.currentLocation.pathname, v = Ft(c.nextLocation.pathname, o) || c.nextLocation.pathname;
  return cr(s.pathname, v) != null || cr(s.pathname, h) != null;
}
[
  ...Kg
];
const um = (u) => {
  console.log("Home : ", u);
  const [r, c] = H.useState();
  return H.useEffect(() => {
    c(u.data);
  }), /* @__PURE__ */ Oe.jsxs(Oe.Fragment, { children: [
    /* @__PURE__ */ Oe.jsxs("h1", { children: [
      "Home Page : ",
      r?.name
    ] }),
    /* @__PURE__ */ Oe.jsx(Nu, { to: "/login", state: {
      loginName: "kumar",
      password: "password"
    }, children: "Login" }),
    "    ",
    /* @__PURE__ */ Oe.jsx(Nu, { to: "/dashboard", state: {
      name: r?.name
    }, children: "DashBoard" })
  ] });
}, sp = (u) => {
  console.log("Login prop - 1: ", u);
  const [r, c] = H.useState(), [o, s] = H.useState(""), [h, v] = H.useState(""), { name: b, info: y } = u.data, R = da().state;
  H.useEffect(() => {
    console.log("Login prop - 2: ", u.data), console.info("State Location vlaues : ", R), c(u.data);
  });
  const N = (_) => {
    s(_.target.value);
  }, D = (_) => {
    v(_.target.value);
  }, L = () => {
    o && h ? r.onSuccess({ page: "Login", status: "Success", message: "Login successfully by " + o }) : r.onError({ page: "Login", status: "Error", message: "Error while login by " + o });
  };
  return /* @__PURE__ */ Oe.jsxs(Oe.Fragment, { children: [
    /* @__PURE__ */ Oe.jsxs("h1", { children: [
      "Login Page : ",
      y.userId
    ] }),
    /* @__PURE__ */ Oe.jsxs("div", { children: [
      /* @__PURE__ */ Oe.jsx("input", { type: "text", placeholder: "UserName", value: o, onChange: N }),
      " ",
      /* @__PURE__ */ Oe.jsx("br", {}),
      /* @__PURE__ */ Oe.jsx("input", { type: "password", placeholder: "Password", value: h, onChange: D }),
      " ",
      /* @__PURE__ */ Oe.jsx("br", {}),
      /* @__PURE__ */ Oe.jsx("button", { type: "button", onClick: L, children: "Login" }),
      /* @__PURE__ */ Oe.jsx("br", {})
    ] }),
    /* @__PURE__ */ Oe.jsx(Nu, { to: "/", children: "Go Back" })
  ] });
}, dp = (u) => {
  const [r, c] = H.useState(), { container: o, name: s, link: h, token: v, userid: b, test: y, info: m } = u.data;
  return H.useEffect(() => {
    console.log("DashBoard prop : ", u), c(u.data), u.data.onSuccess({ page: "DashBoard", status: "Success", message: "OnEffect" });
  }), /* @__PURE__ */ Oe.jsxs(Oe.Fragment, { children: [
    /* @__PURE__ */ Oe.jsxs("h1", { children: [
      "DashBoard Page : ",
      m.userId
    ] }),
    /* @__PURE__ */ Oe.jsx("br", {}),
    /* @__PURE__ */ Oe.jsx("br", {}),
    /* @__PURE__ */ Oe.jsx(Nu, { to: "/", children: "Go Back" })
  ] });
}, hp = (u) => {
  console.log("Hello App : ", u);
  const r = ep([
    {
      path: "/",
      element: /* @__PURE__ */ Oe.jsx(H.Suspense, { children: /* @__PURE__ */ Oe.jsx(um, { data: u }) })
    },
    {
      path: "/home",
      element: /* @__PURE__ */ Oe.jsx(H.Suspense, { children: /* @__PURE__ */ Oe.jsx(um, { data: u }) })
    },
    {
      path: "/login",
      element: /* @__PURE__ */ Oe.jsx(H.Suspense, { children: /* @__PURE__ */ Oe.jsx(sp, { data: u }) })
    },
    {
      path: "/dashboard",
      element: /* @__PURE__ */ Oe.jsx(H.Suspense, { children: /* @__PURE__ */ Oe.jsx(dp, { data: u }) })
    }
  ]);
  return /* @__PURE__ */ Oe.jsx(Oe.Fragment, { children: /* @__PURE__ */ Oe.jsxs("div", { className: "testClass", children: [
    /* @__PURE__ */ Oe.jsx("div", { children: "Page Router " }),
    /* @__PURE__ */ Oe.jsx(zg, { router: r })
  ] }) });
}, mp = n0(hp, {
  // shadow: "open",  
  props: {
    onSuccess: "function",
    onError: "function",
    name: "string",
    link: "string",
    token: "string",
    info: "json"
  }
});
customElements.define("hello-wc", mp);
