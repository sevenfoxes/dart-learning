define(['dart_sdk', 'packages/english_words/english_words', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, english_words, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__word_pair = english_words.src__word_pair;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  const $toList = dartx.toList;
  const $take = dartx.take;
  let JSArrayOfWordPair = () => (JSArrayOfWordPair = dart.constFn(_interceptors.JSArray$(src__word_pair.WordPair)))();
  let _HashSetOfWordPair = () => (_HashSetOfWordPair = dart.constFn(collection._HashSet$(src__word_pair.WordPair)))();
  let ListOfWordPair = () => (ListOfWordPair = dart.constFn(core.List$(src__word_pair.WordPair)))();
  let SetOfWordPair = () => (SetOfWordPair = dart.constFn(core.Set$(src__word_pair.WordPair)))();
  app_component.AppComponent = class AppComponent extends core.Object {
    get names() {
      return this[names];
    }
    set names(value) {
      this[names] = value;
    }
    generateNames() {
      this.names = src__word_pair.generateWordPairs()[$take](5)[$toList]();
    }
    addToSaved(name) {
      this.savedNames.add(name);
    }
    removeFromSaved(name) {
      this.savedNames.remove(name);
    }
    toggleSavedState(name) {
      if (dart.test(this.savedNames.contains(name))) {
        this.removeFromSaved(name);
        return;
      }
      this.addToSaved(name);
    }
    ngOnInit() {
      this.generateNames();
    }
    get savedNames() {
      return this[savedNames];
    }
    set savedNames(value) {
      super.savedNames = value;
    }
  };
  (app_component.AppComponent.new = function() {
    this[names] = JSArrayOfWordPair().of([]);
    this[savedNames] = new (_HashSetOfWordPair()).new();
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const names = Symbol("AppComponent.names");
  const savedNames = Symbol("AppComponent.savedNames");
  app_component.AppComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    generateNames: dart.fnType(dart.void, []),
    addToSaved: dart.fnType(dart.void, [src__word_pair.WordPair]),
    removeFromSaved: dart.fnType(dart.void, [src__word_pair.WordPair]),
    toggleSavedState: dart.fnType(dart.void, [src__word_pair.WordPair]),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    names: dart.fieldType(ListOfWordPair()),
    savedNames: dart.finalFieldType(SetOfWordPair())
  }));
  dart.trackLibraries("packages/dart_learnin/app_component.ddc", {
    "package:dart_learnin/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAeM;;;;;;;AAGF,gBAAK,GAAG,gCAAiB,SAAO,CAAC,WAAS;IAC5C;eAEgB,IAAa;AAC3B,qBAAU,IAAI,CAAC,IAAI;IACrB;oBAEqB,IAAa;AAChC,qBAAU,OAAO,CAAC,IAAI;IACxB;qBAEsB,IAAa;AACjC,oBAAI,eAAU,SAAS,CAAC,IAAI,IAAG;AAC7B,4BAAe,CAAC,IAAI;AACpB;;AAGF,qBAAU,CAAC,IAAI;IACjB;;AAIE,wBAAa;IACf;IAEM;;;;;;;;IA5BF,WAAK,GAAG;IA4BN,gBAAU,GAAG;EACrB","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
