define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const _root = Object.create(null);
  const src__core__application_tokens = Object.create(_root);
  const src__core__change_detection__component_state = Object.create(_root);
  const src__core__change_detection = Object.create(_root);
  const src__core__render__api = Object.create(_root);
  const src__core__render = Object.create(_root);
  const src__core__zone = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $replaceAll = dartx.replaceAll;
  const $add = dartx.add;
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  dart.defineLazy(src__core__application_tokens, {
    /*src__core__application_tokens.APP_ID*/get APP_ID() {
      return dart.const(new (OpaqueTokenOfString()).new("APP_ID"));
    }
  });
  const _stateChangeCallback = Symbol('_stateChangeCallback');
  src__core__change_detection__component_state.ComponentState = class ComponentState extends core.Object {
    setState(fn) {
      fn();
      this.deliverStateChanges();
    }
    set stateChangeCallback(callback) {
      this[_stateChangeCallback] = callback;
    }
    deliverStateChanges() {
      if (this[_stateChangeCallback] != null) {
        this[_stateChangeCallback]();
      }
    }
  };
  (src__core__change_detection__component_state.ComponentState.new = function() {
    this[_stateChangeCallback] = null;
  }).prototype = src__core__change_detection__component_state.ComponentState.prototype;
  dart.addTypeTests(src__core__change_detection__component_state.ComponentState);
  dart.setMethodSignature(src__core__change_detection__component_state.ComponentState, () => ({
    __proto__: dart.getMethods(src__core__change_detection__component_state.ComponentState.__proto__),
    setState: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    deliverStateChanges: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__core__change_detection__component_state.ComponentState, () => ({
    __proto__: dart.getSetters(src__core__change_detection__component_state.ComponentState.__proto__),
    stateChangeCallback: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__core__change_detection__component_state.ComponentState, () => ({
    __proto__: dart.getFields(src__core__change_detection__component_state.ComponentState.__proto__),
    [_stateChangeCallback]: dart.fieldType(VoidTovoid())
  }));
  src__core__change_detection__component_state.ComponentStateCallback = dart.typedef('ComponentStateCallback', () => dart.fnType(dart.void, []));
  src__core__render__api.SharedStylesHost = class SharedStylesHost extends core.Object {};
  (src__core__render__api.SharedStylesHost.new = function() {
  }).prototype = src__core__render__api.SharedStylesHost.prototype;
  dart.addTypeTests(src__core__render__api.SharedStylesHost);
  dart.defineLazy(src__core__render__api, {
    /*src__core__render__api.sharedStylesHost*/get sharedStylesHost() {
      return null;
    },
    set sharedStylesHost(_) {},
    /*src__core__render__api._componentIdPlaceholder*/get _componentIdPlaceholder() {
      return core.RegExp.new("%COMP%");
    }
  });
  const _viewAttr = Symbol('_viewAttr');
  const _hostAttr = Symbol('_hostAttr');
  const _styles = Symbol('_styles');
  const _flattenStyles = Symbol('_flattenStyles');
  src__core__render__api.RenderComponentType = class RenderComponentType extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get templateUrl() {
      return this[templateUrl$];
    }
    set templateUrl(value) {
      super.templateUrl = value;
    }
    get encapsulation() {
      return this[encapsulation$];
    }
    set encapsulation(value) {
      super.encapsulation = value;
    }
    get templateStyles() {
      return this[templateStyles$];
    }
    set templateStyles(value) {
      this[templateStyles$] = value;
    }
    get stylesShimmed() {
      return this[stylesShimmed];
    }
    set stylesShimmed(value) {
      this[stylesShimmed] = value;
    }
    shimStyles(stylesHost) {
      this[_styles] = this[_flattenStyles](this.id, this.templateStyles, JSArrayOfString().of([]));
      stylesHost.addStyles(this[_styles]);
      if (this.encapsulation === src__core__metadata__view.ViewEncapsulation.Emulated) {
        this[_hostAttr] = dart.str`${"_nghost-"}${this.id}`;
        this[_viewAttr] = dart.str`${"_ngcontent-"}${this.id}`;
      }
    }
    get contentAttr() {
      return this[_viewAttr];
    }
    get hostAttr() {
      return this[_hostAttr];
    }
    get styles() {
      return this[_styles];
    }
    [_flattenStyles](compId, styles, target) {
      if (styles == null) return target;
      let styleCount = styles[$length];
      for (let i = 0; i < dart.notNull(styleCount); i++) {
        let style = styles[$_get](i);
        if (core.List.is(style)) {
          this[_flattenStyles](compId, style, target);
        } else {
          let styleString = src__runtime__optimizations.unsafeCast(core.String, style);
          styleString = styleString[$replaceAll](src__core__render__api._componentIdPlaceholder, compId);
          target[$add](styleString);
        }
      }
      return target;
    }
  };
  (src__core__render__api.RenderComponentType.new = function(id, templateUrl, encapsulation, templateStyles) {
    this[_viewAttr] = null;
    this[_hostAttr] = null;
    this[_styles] = null;
    this[stylesShimmed] = false;
    this[id$] = id;
    this[templateUrl$] = templateUrl;
    this[encapsulation$] = encapsulation;
    this[templateStyles$] = templateStyles;
  }).prototype = src__core__render__api.RenderComponentType.prototype;
  dart.addTypeTests(src__core__render__api.RenderComponentType);
  const id$ = Symbol("RenderComponentType.id");
  const templateUrl$ = Symbol("RenderComponentType.templateUrl");
  const encapsulation$ = Symbol("RenderComponentType.encapsulation");
  const templateStyles$ = Symbol("RenderComponentType.templateStyles");
  const stylesShimmed = Symbol("RenderComponentType.stylesShimmed");
  dart.setMethodSignature(src__core__render__api.RenderComponentType, () => ({
    __proto__: dart.getMethods(src__core__render__api.RenderComponentType.__proto__),
    shimStyles: dart.fnType(dart.void, [src__core__render__api.SharedStylesHost]),
    [_flattenStyles]: dart.fnType(core.List$(core.String), [core.String, core.List, core.List$(core.String)])
  }));
  dart.setGetterSignature(src__core__render__api.RenderComponentType, () => ({
    __proto__: dart.getGetters(src__core__render__api.RenderComponentType.__proto__),
    contentAttr: core.String,
    hostAttr: core.String,
    styles: core.List$(core.String)
  }));
  dart.setFieldSignature(src__core__render__api.RenderComponentType, () => ({
    __proto__: dart.getFields(src__core__render__api.RenderComponentType.__proto__),
    id: dart.finalFieldType(core.String),
    templateUrl: dart.finalFieldType(core.String),
    encapsulation: dart.finalFieldType(src__core__metadata__view.ViewEncapsulation),
    templateStyles: dart.fieldType(core.List),
    [_viewAttr]: dart.fieldType(core.String),
    [_hostAttr]: dart.fieldType(core.String),
    [_styles]: dart.fieldType(ListOfString()),
    stylesShimmed: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__core__render__api.RenderComponentType, {
    /*src__core__render__api.RenderComponentType._hostClassPrefix*/get _hostClassPrefix() {
      return "_nghost-";
    },
    /*src__core__render__api.RenderComponentType._viewClassPrefix*/get _viewClassPrefix() {
      return "_ngcontent-";
    }
  });
  src__core__render__api.RenderDebugInfo = class RenderDebugInfo extends core.Object {};
  (src__core__render__api.RenderDebugInfo.new = function() {
  }).prototype = src__core__render__api.RenderDebugInfo.prototype;
  dart.addTypeTests(src__core__render__api.RenderDebugInfo);
  dart.trackLibraries("packages/angular/src/core/application_tokens.ddc", {
    "package:angular/src/core/application_tokens.dart": src__core__application_tokens,
    "package:angular/src/core/change_detection/component_state.dart": src__core__change_detection__component_state,
    "package:angular/src/core/change_detection.dart": src__core__change_detection,
    "package:angular/src/core/render/api.dart": src__core__render__api,
    "package:angular/src/core/render.dart": src__core__render,
    "package:angular/src/core/zone.dart": src__core__zone
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.dart","change_detection/component_state.dart","render/api.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;MAeM,oCAAM;YAAG,gBAAM,2BAAmB,CAAC;;;;;aCCzB,EAAS;AACrB,QAAE;AACF,8BAAmB;IACrB;4BAMwB,QAA+B;AACrD,gCAAoB,GAAG,QAAQ;IACjC;;AAME,UAAI,0BAAoB,IAAI,MAAM;AAChC,kCAAoB;;IAExB;;;IA9BuB,0BAAoB;EA+B7C;;;;;;;;;;;;;;;;;;EC7BA;;;MAKiB,uCAAgB;;;;MAG3B,8CAAuB;YAAG,AAAI,gBAAM,CAAC;;;;;;;;IAM5B;;;;;;IAEA;;;;;;IACW;;;;;;IACuB;;;;;;IAgB1C;;;;;;eAKW,UAA2B;AACzC,mBAAO,GAAG,oBAAc,CAAC,OAAE,EAAE,mBAAc,EAAE;AAC7C,gBAAU,UAAU,CAAC,aAAY;AACjC,UAAI,kBAAa,KAAI,2CAAiB,SAAS,EAAE;AAC/C,uBAAS,GAAG,WAAE,UAAgB,GAAC,OAAE;AACjC,uBAAS,GAAG,WAAE,aAAgB,GAAC,OAAE;;IAErC;;YAE0B,gBAAS;;;YAEZ,gBAAS;;;YAEL,cAAO;;qBAG9B,MAAa,EACb,MAAsD,EACtD,MAAmB;AACrB,UAAI,MAAM,IAAI,MAAM,MAAO,OAAM;AACjC,UAAI,aAAa,MAAM,SAAO;AAC9B,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,UAAU,GAAE,CAAC,IAAI;AACnC,YAAI,QAAQ,MAAM,QAAC,CAAC;AACpB,yBAAI,KAAK,GAAU;AACjB,8BAAc,CAAC,MAAM,EAAE,KAAK,EAAE,MAAM;eAC/B;AACL,cAAI,cAAc,sCAAU,cAAS,KAAK;AAC1C,qBAAW,GAAG,WAAW,aAAW,CAAC,8CAAuB,EAAE,MAAM;AACpE,gBAAM,MAAI,CAAC,WAAW;;;AAG1B,YAAO,OAAM;IACf;;6DAlCI,EAAO,EAAE,WAAgB,EAAE,aAAkB,EAAE,cAAmB;IAT/D,eAAS;IAGT,eAAS;IAEH,aAAO;IACf,mBAAa,GAAG;IAGZ,SAAE,GAAF,EAAE;IAAO,kBAAW,GAAX,WAAW;IAAO,oBAAa,GAAb,aAAa;IAAO,qBAAc,GAAd,cAAc;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhB1D,2DAAgB;YAAG;;MAGnB,2DAAgB;YAAG;;;;;EA4DlC","file":"application_tokens.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens: src__core__application_tokens,
    src__core__change_detection__component_state: src__core__change_detection__component_state,
    src__core__change_detection: src__core__change_detection,
    src__core__render__api: src__core__render__api,
    src__core__render: src__core__render,
    src__core__zone: src__core__zone
  };
});

//# sourceMappingURL=application_tokens.ddc.js.map
