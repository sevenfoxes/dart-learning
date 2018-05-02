define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/annotations/rtl_annotation'], function(dart_sdk, alignment, dom_ruler, rtl_annotation) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const annotations__rtl_annotation = rtl_annotation.annotations__rtl_annotation;
  const _root = Object.create(null);
  const src__laminate__popup__popup_source = Object.create(_root);
  const src__laminate__popup__dom_popup_source = Object.create(_root);
  const $toString = dartx.toString;
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let JSArrayOfRectangleOfnum = () => (JSArrayOfRectangleOfnum = dart.constFn(_interceptors.JSArray$(RectangleOfnum())))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  let PointOfnum = () => (PointOfnum = dart.constFn(math.Point$(core.num)))();
  let IdentityMapOfString$Alignment = () => (IdentityMapOfString$Alignment = dart.constFn(_js_helper.IdentityMap$(core.String, laminate__enums__alignment.Alignment)))();
  let HtmlElement__ToStreamOfRectangleOfnum = () => (HtmlElement__ToStreamOfRectangleOfnum = dart.constFn(dart.fnType(StreamOfRectangleOfnum(), [html.HtmlElement], {track: core.bool})))();
  src__laminate__popup__popup_source.PopupSource = class PopupSource extends core.Object {
    static fromRectangle(rectangle, opts) {
      let alignX = opts && 'alignX' in opts ? opts.alignX : laminate__enums__alignment.Alignment.Start;
      let alignY = opts && 'alignY' in opts ? opts.alignY : laminate__enums__alignment.Alignment.Start;
      return new src__laminate__popup__popup_source._RectanglePopupSource.new(rectangle, {alignOriginX: alignX, alignOriginY: alignY});
    }
  };
  (src__laminate__popup__popup_source.PopupSource[dart.mixinNew] = function() {
  }).prototype = src__laminate__popup__popup_source.PopupSource.prototype;
  dart.addTypeTests(src__laminate__popup__popup_source.PopupSource);
  src__laminate__popup__popup_source.ElementPopupSource = class ElementPopupSource extends core.Object {
    get dimensions() {
      return this.sourceElement.getBoundingClientRect();
    }
  };
  (src__laminate__popup__popup_source.ElementPopupSource.new = function() {
  }).prototype = src__laminate__popup__popup_source.ElementPopupSource.prototype;
  dart.addTypeTests(src__laminate__popup__popup_source.ElementPopupSource);
  src__laminate__popup__popup_source.ElementPopupSource[dart.implements] = () => [src__laminate__popup__popup_source.PopupSource];
  dart.setGetterSignature(src__laminate__popup__popup_source.ElementPopupSource, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_source.ElementPopupSource.__proto__),
    dimensions: math.Rectangle$(core.num)
  }));
  const _predefinedRectangle = Symbol('_predefinedRectangle');
  src__laminate__popup__popup_source._RectanglePopupSource = class _RectanglePopupSource extends core.Object {
    onDimensionsChanged(opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      return StreamOfRectangleOfnum().fromIterable(JSArrayOfRectangleOfnum().of([this[_predefinedRectangle]]));
    }
    get dimensions() {
      return this[_predefinedRectangle];
    }
    set popupId(id) {}
  };
  (src__laminate__popup__popup_source._RectanglePopupSource.new = function(predefinedRectangle, opts) {
    let alignOriginX = opts && 'alignOriginX' in opts ? opts.alignOriginX : null;
    let alignOriginY = opts && 'alignOriginY' in opts ? opts.alignOriginY : null;
    this.isRtl = false;
    this[_predefinedRectangle] = predefinedRectangle;
    this.alignOriginX = alignOriginX;
    this.alignOriginY = alignOriginY;
  }).prototype = src__laminate__popup__popup_source._RectanglePopupSource.prototype;
  dart.addTypeTests(src__laminate__popup__popup_source._RectanglePopupSource);
  src__laminate__popup__popup_source._RectanglePopupSource[dart.implements] = () => [src__laminate__popup__popup_source.PopupSource];
  dart.setMethodSignature(src__laminate__popup__popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_source._RectanglePopupSource.__proto__),
    onDimensionsChanged: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [], {track: core.bool})
  }));
  dart.setGetterSignature(src__laminate__popup__popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_source._RectanglePopupSource.__proto__),
    dimensions: math.Rectangle$(core.num)
  }));
  dart.setSetterSignature(src__laminate__popup__popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_source._RectanglePopupSource.__proto__),
    popupId: core.String
  }));
  dart.setFieldSignature(src__laminate__popup__popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_source._RectanglePopupSource.__proto__),
    alignOriginX: dart.finalFieldType(laminate__enums__alignment.Alignment),
    alignOriginY: dart.finalFieldType(laminate__enums__alignment.Alignment),
    [_predefinedRectangle]: dart.finalFieldType(RectangleOfnum()),
    isRtl: dart.finalFieldType(core.bool)
  }));
  src__laminate__popup__dom_popup_source.AsyncMeasureSize$ = dart.generic(E => {
    const AsyncMeasureSize = dart.typedef('AsyncMeasureSize', () => dart.fnType(async.Stream$(math.Rectangle$(core.num)), [E], {track: core.bool}));
    return AsyncMeasureSize;
  });
  src__laminate__popup__dom_popup_source.AsyncMeasureSize = src__laminate__popup__dom_popup_source.AsyncMeasureSize$();
  const _domRuler = Symbol('_domRuler');
  const _asyncMeasureSize = Symbol('_asyncMeasureSize');
  src__laminate__popup__dom_popup_source.DomPopupSourceFactory = class DomPopupSourceFactory extends core.Object {
    createPopupSource(sourceElement, opts) {
      let alignOriginX = opts && 'alignOriginX' in opts ? opts.alignOriginX : laminate__enums__alignment.Alignment.Start;
      let alignOriginY = opts && 'alignOriginY' in opts ? opts.alignOriginY : laminate__enums__alignment.Alignment.Start;
      return new src__laminate__popup__dom_popup_source.DomPopupSource.new(dart.bind(this, _asyncMeasureSize), sourceElement, {alignOriginX: alignOriginX, alignOriginY: alignOriginY});
    }
    [_asyncMeasureSize](element, opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      if (dart.test(track)) {
        return this[_domRuler].track(element);
      } else {
        return this[_domRuler].measure(element).asStream();
      }
    }
  };
  (src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new = function(domRuler) {
    this[_domRuler] = domRuler;
  }).prototype = src__laminate__popup__dom_popup_source.DomPopupSourceFactory.prototype;
  dart.addTypeTests(src__laminate__popup__dom_popup_source.DomPopupSourceFactory);
  dart.setMethodSignature(src__laminate__popup__dom_popup_source.DomPopupSourceFactory, () => ({
    __proto__: dart.getMethods(src__laminate__popup__dom_popup_source.DomPopupSourceFactory.__proto__),
    createPopupSource: dart.fnType(src__laminate__popup__dom_popup_source.DomPopupSource, [html.HtmlElement], {alignOriginX: laminate__enums__alignment.Alignment, alignOriginY: laminate__enums__alignment.Alignment}),
    [_asyncMeasureSize]: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [html.HtmlElement], {track: core.bool})
  }));
  dart.setFieldSignature(src__laminate__popup__dom_popup_source.DomPopupSourceFactory, () => ({
    __proto__: dart.getFields(src__laminate__popup__dom_popup_source.DomPopupSourceFactory.__proto__),
    [_domRuler]: dart.finalFieldType(laminate__ruler__dom_ruler.DomRuler)
  }));
  let const$;
  const _alignOriginX = Symbol('_alignOriginX');
  const _alignOriginY = Symbol('_alignOriginY');
  src__laminate__popup__dom_popup_source.DomPopupSource = class DomPopupSource extends core.Object {
    get sourceElement() {
      return this[sourceElement$];
    }
    set sourceElement(value) {
      super.sourceElement = value;
    }
    get alignOriginX() {
      return this[_alignOriginX];
    }
    get alignOriginY() {
      return this[_alignOriginY];
    }
    onDimensionsChanged(opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      return this[_asyncMeasureSize](this.sourceElement, {track: track});
    }
    get dimensions() {
      return this.sourceElement.getBoundingClientRect();
    }
    get isRtl() {
      return src__laminate__popup__dom_popup_source.DomPopupSource._isRtl;
    }
    set popupId(id) {
      if (id == null) return;
      this.sourceElement.setAttribute("aria-owns", id);
      this.sourceElement.setAttribute("aria-haspopup", "true");
    }
    toString() {
      return "DomPopupSource " + dart.notNull(new (IdentityMapOfString$Alignment()).from(["alignOriginX", this.alignOriginX, "alignOriginY", this.alignOriginY])[$toString]());
    }
  };
  (src__laminate__popup__dom_popup_source.DomPopupSource.new = function(asyncMeasureSize, sourceElement, opts) {
    let alignOriginX = opts && 'alignOriginX' in opts ? opts.alignOriginX : laminate__enums__alignment.Alignment.Start;
    let alignOriginY = opts && 'alignOriginY' in opts ? opts.alignOriginY : laminate__enums__alignment.Alignment.Start;
    let transform = opts && 'transform' in opts ? opts.transform : const$ || (const$ = dart.const(new (PointOfnum()).new(0, 0)));
    this[_alignOriginX] = null;
    this[_alignOriginY] = null;
    this[_asyncMeasureSize] = asyncMeasureSize;
    this[sourceElement$] = sourceElement;
    this[_alignOriginX] = alignOriginX;
    this[_alignOriginY] = alignOriginY;
  }).prototype = src__laminate__popup__dom_popup_source.DomPopupSource.prototype;
  dart.addTypeTests(src__laminate__popup__dom_popup_source.DomPopupSource);
  const sourceElement$ = Symbol("DomPopupSource.sourceElement");
  src__laminate__popup__dom_popup_source.DomPopupSource[dart.implements] = () => [src__laminate__popup__popup_source.ElementPopupSource];
  dart.setMethodSignature(src__laminate__popup__dom_popup_source.DomPopupSource, () => ({
    __proto__: dart.getMethods(src__laminate__popup__dom_popup_source.DomPopupSource.__proto__),
    onDimensionsChanged: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [], {track: core.bool})
  }));
  dart.setGetterSignature(src__laminate__popup__dom_popup_source.DomPopupSource, () => ({
    __proto__: dart.getGetters(src__laminate__popup__dom_popup_source.DomPopupSource.__proto__),
    alignOriginX: laminate__enums__alignment.Alignment,
    alignOriginY: laminate__enums__alignment.Alignment,
    dimensions: math.Rectangle$(core.num),
    isRtl: core.bool
  }));
  dart.setSetterSignature(src__laminate__popup__dom_popup_source.DomPopupSource, () => ({
    __proto__: dart.getSetters(src__laminate__popup__dom_popup_source.DomPopupSource.__proto__),
    popupId: core.String
  }));
  dart.setFieldSignature(src__laminate__popup__dom_popup_source.DomPopupSource, () => ({
    __proto__: dart.getFields(src__laminate__popup__dom_popup_source.DomPopupSource.__proto__),
    [_asyncMeasureSize]: dart.finalFieldType(HtmlElement__ToStreamOfRectangleOfnum()),
    sourceElement: dart.finalFieldType(html.HtmlElement),
    [_alignOriginX]: dart.fieldType(laminate__enums__alignment.Alignment),
    [_alignOriginY]: dart.fieldType(laminate__enums__alignment.Alignment)
  }));
  dart.defineExtensionMethods(src__laminate__popup__dom_popup_source.DomPopupSource, ['toString']);
  dart.defineLazy(src__laminate__popup__dom_popup_source.DomPopupSource, {
    /*src__laminate__popup__dom_popup_source.DomPopupSource._isRtl*/get _isRtl() {
      return annotations__rtl_annotation.determineRtl(html.document);
    }
  });
  dart.trackLibraries("packages/angular_components/src/laminate/popup/dom_popup_source.ddc", {
    "package:angular_components/src/laminate/popup/popup_source.dart": src__laminate__popup__popup_source,
    "package:angular_components/src/laminate/popup/dom_popup_source.dart": src__laminate__popup__dom_popup_source
  }, '{"version":3,"sourceRoot":"","sources":["popup_source.dart","dom_popup_source.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;yBAiBoC,SAAmB;UACtC,kDAAQ,oCAAS,MAAM;UAAY,kDAAQ,oCAAS,MAAM;AAAG,AAC1E,YAAO,KAAI,4DAAqB,CAAC,SAAS,iBACxB,MAAM,gBAAgB,MAAM;IAChD;;;;;;;YAkD4B,mBAAa,sBAAsB;IAAE;;;EACnE;;;;;;;;;;UAgB8C,+CAAO;AAIjD,YAAO,AAAI,sCAA8B,CAAC,8BAAC,0BAAoB;IACjE;;YAG4B,2BAAoB;;gBAMpC,EAAS,GAErB;;2EApB2B,mBAAoB;QACrC;QAAmB;IAclB,UAAK,GAAG;IAfQ,0BAAoB,GAApB,mBAAoB;IACrC,iBAAY,GAAZ,YAAY;IAAO,iBAAY,GAAZ,YAAY;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBCzDV,aAAyB;UAC3C,oEAAc,oCAAS,MAAM;UAC9B,oEAAc,oCAAS,MAAM;AACzC,YAAO,KAAI,yDAAc,CAAC,kCAAiB,EAAE,aAAa,iBACxC,YAAY,gBAAgB,YAAY;IAC5D;wBAOoC,OAAmB;UAC7C,+CAAO;AACf,oBAAI,KAAK,GAAE;AACT,cAAO,gBAAS,MAAM,CAAC,OAAO;aACzB;AACL,cAAO,gBAAS,QAAQ,CAAC,OAAO,UAAU;;IAE9C;;+EAtB2B,QAAS;IAAT,eAAS,GAAT,QAAS;EAAC;;;;;;;;;;;;;;;IA8BnB;;;;;;;YAkBY,oBAAa;;;YAGb,oBAAa;;;UAGM,+CAAO;AACtD,YAAO,wBAAiB,CAAC,kBAAa,UAAS,KAAK;IACtD;;YAG4B,mBAAa,sBAAsB;IAAE;;YAG/C,6DAAM;;gBAGZ,EAAS;AACnB,UAAI,EAAE,IAAI,MAAM;AAChB,MACE,AAAE,+BAAY,CAAC,aAAa,EAAE;MAC9B,AAAE,+BAAY,CAAC,iBAAiB;IACpC;;YAII,AAAkB,kCAClB,4CAAC,gBAAgB,iBAAY,EAAE,gBAAgB,iBAAY,aAAU;IAAE;;wEAvCvD,gBAAiB,EAAE,aAAkB;QAC1C,oEAAc,oCAAS,MAAM;QAC9B,oEAAc,oCAAS,MAAM;QACjC,2DAAW,mCAAM,kBAAK,CAAC,GAAG;IAK1B,mBAAa;IACb,mBAAa;IATH,uBAAiB,GAAjB,gBAAiB;IAAO,oBAAa,GAAb,aAAa;AAIvD,uBAAa,GAAG,YAAY;AAC5B,uBAAa,GAAG,YAAY;EAC9B;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAfkB,4DAAM;YAAG,yCAAY,CAAC,aAAQ","file":"dom_popup_source.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_source: src__laminate__popup__popup_source,
    src__laminate__popup__dom_popup_source: src__laminate__popup__dom_popup_source
  };
});

//# sourceMappingURL=dom_popup_source.ddc.js.map
