define(['dart_sdk', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/material_input_multiline', 'packages/angular_forms/src/directives', 'packages/angular_components/utils/angular/properties/properties', 'packages/quiver/strings', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/focus/focus', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, material_input_default_value_accessor, material_input_multiline, directives, properties, strings, base_material_input, focus, reference, change_detection, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input__material_input_multiline = material_input_multiline.material_input__material_input_multiline;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const strings$ = strings.strings;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const focus__focus = focus.focus__focus;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const _root = Object.create(null);
  const material_input__material_input = Object.create(_root);
  const $contains = dartx.contains;
  dart.defineLazy(material_input__material_input, {
    /*material_input__material_input.materialInputDirectives*/get materialInputDirectives() {
      return dart.constList([dart.wrapType(material_input__material_input.MaterialInputComponent), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor), dart.wrapType(material_input__material_input_multiline.MaterialMultilineInputComponent), dart.wrapType(src__directives__ng_model.NgModel)], core.Type);
    },
    /*material_input__material_input.materialInputErrorKey*/get materialInputErrorKey() {
      return "material-input-error";
    }
  });
  const _changeDetector = Symbol('_changeDetector');
  const _leadingText = Symbol('_leadingText');
  const _trailingText = Symbol('_trailingText');
  const _rightAlign = Symbol('_rightAlign');
  let const$;
  material_input__material_input.MaterialInputComponent = class MaterialInputComponent extends material_input__base_material_input.BaseMaterialInput {
    set focusable(value) {
      super.focusable = value;
    }
    get inputEl() {
      return this[inputEl];
    }
    set inputEl(value) {
      this[inputEl] = value;
    }
    get popupSourceEl() {
      return this[popupSourceEl];
    }
    set popupSourceEl(value) {
      this[popupSourceEl] = value;
    }
    get elementRef() {
      return this.popupSourceEl;
    }
    get inputRef() {
      return this.inputEl;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get multiple() {
      return this[multiple$];
    }
    set multiple(value) {
      this[multiple$] = value;
    }
    get inputRole() {
      return this[inputRole$];
    }
    set inputRole(value) {
      super.inputRole = value;
    }
    get leadingText() {
      return this[_leadingText];
    }
    get hasLeadingText() {
      return strings$.isNotEmpty(this.leadingText);
    }
    set leadingText(value) {
      this[_leadingText] = value;
      this[_changeDetector].markForCheck();
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    get hasLeadingGlyph() {
      return strings$.isNotEmpty(this.leadingGlyph);
    }
    get trailingText() {
      return this[_trailingText];
    }
    get hasTrailingText() {
      return strings$.isNotEmpty(this.trailingText);
    }
    set trailingText(value) {
      this[_trailingText] = value;
      this[_changeDetector].markForCheck();
    }
    get trailingGlyph() {
      return this[trailingGlyph];
    }
    set trailingGlyph(value) {
      this[trailingGlyph] = value;
    }
    get hasTrailingGlyph() {
      return strings$.isNotEmpty(this.trailingGlyph);
    }
    get rightAlign() {
      return this[_rightAlign];
    }
    set rightAlign(value) {
      this[_rightAlign] = value;
      this[_changeDetector].markForCheck();
    }
    get inputAriaOwns() {
      return this[inputAriaOwns];
    }
    set inputAriaOwns(value) {
      this[inputAriaOwns] = value;
    }
    get inputAriaActivedescendent() {
      return this[inputAriaActivedescendent];
    }
    set inputAriaActivedescendent(value) {
      this[inputAriaActivedescendent] = value;
    }
    get inputAriaHasPopup() {
      return this[inputAriaHasPopup];
    }
    set inputAriaHasPopup(value) {
      this[inputAriaHasPopup] = value;
    }
    get inputAriaExpanded() {
      return this[inputAriaExpanded];
    }
    set inputAriaExpanded(value) {
      this[inputAriaExpanded] = value;
    }
    get inputAriaAutocomplete() {
      return this[inputAriaAutocomplete];
    }
    set inputAriaAutocomplete(value) {
      this[inputAriaAutocomplete] = value;
    }
    get numeric() {
      return this.type === "number";
    }
    get labelVisible() {
      return !(dart.test(this.numeric) && dart.test(this.invalid)) && dart.test(super.labelVisible);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.inputEl = null;
      this.popupSourceEl = null;
    }
  };
  (material_input__material_input.MaterialInputComponent.new = function(type, multiple, inputRole, cd, changeDetector, validator) {
    this[inputEl] = null;
    this[popupSourceEl] = null;
    this[type$] = null;
    this[multiple$] = false;
    this[_leadingText] = null;
    this[leadingGlyph] = null;
    this[_trailingText] = null;
    this[trailingGlyph] = null;
    this[_rightAlign] = false;
    this[inputAriaOwns] = null;
    this[inputAriaActivedescendent] = null;
    this[inputAriaHasPopup] = null;
    this[inputAriaExpanded] = null;
    this[inputAriaAutocomplete] = null;
    this[inputRole$] = inputRole;
    this[_changeDetector] = changeDetector;
    material_input__material_input.MaterialInputComponent.__proto__.new.call(this, cd, changeDetector, validator);
    if (type == null) {
      this.type = "text";
    } else if (dart.test((const$ || (const$ = dart.constList(["number", "tel"], core.String)))[$contains](type))) {
      this.type = "text";
    } else {
      this.type = type;
    }
    this.multiple = utils__angular__properties__properties.attributeToBool(multiple);
  }).prototype = material_input__material_input.MaterialInputComponent.prototype;
  dart.addTypeTests(material_input__material_input.MaterialInputComponent);
  const inputEl = Symbol("MaterialInputComponent.inputEl");
  const popupSourceEl = Symbol("MaterialInputComponent.popupSourceEl");
  const type$ = Symbol("MaterialInputComponent.type");
  const multiple$ = Symbol("MaterialInputComponent.multiple");
  const inputRole$ = Symbol("MaterialInputComponent.inputRole");
  const leadingGlyph = Symbol("MaterialInputComponent.leadingGlyph");
  const trailingGlyph = Symbol("MaterialInputComponent.trailingGlyph");
  const inputAriaOwns = Symbol("MaterialInputComponent.inputAriaOwns");
  const inputAriaActivedescendent = Symbol("MaterialInputComponent.inputAriaActivedescendent");
  const inputAriaHasPopup = Symbol("MaterialInputComponent.inputAriaHasPopup");
  const inputAriaExpanded = Symbol("MaterialInputComponent.inputAriaExpanded");
  const inputAriaAutocomplete = Symbol("MaterialInputComponent.inputAriaAutocomplete");
  material_input__material_input.MaterialInputComponent[dart.implements] = () => [focus__focus.Focusable, utils__angular__reference__reference.ReferenceDirective, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setGetterSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getGetters(material_input__material_input.MaterialInputComponent.__proto__),
    elementRef: src__core__linker__element_ref.ElementRef,
    leadingText: core.String,
    hasLeadingText: core.bool,
    hasLeadingGlyph: core.bool,
    trailingText: core.String,
    hasTrailingText: core.bool,
    hasTrailingGlyph: core.bool,
    rightAlign: core.bool,
    numeric: core.bool
  }));
  dart.setSetterSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getSetters(material_input__material_input.MaterialInputComponent.__proto__),
    leadingText: core.String,
    trailingText: core.String,
    rightAlign: core.bool
  }));
  dart.setFieldSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getFields(material_input__material_input.MaterialInputComponent.__proto__),
    [_changeDetector]: dart.fieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    inputEl: dart.fieldType(src__core__linker__element_ref.ElementRef),
    popupSourceEl: dart.fieldType(src__core__linker__element_ref.ElementRef),
    type: dart.fieldType(core.String),
    multiple: dart.fieldType(core.bool),
    inputRole: dart.finalFieldType(core.String),
    [_leadingText]: dart.fieldType(core.String),
    leadingGlyph: dart.fieldType(core.String),
    [_trailingText]: dart.fieldType(core.String),
    trailingGlyph: dart.fieldType(core.String),
    [_rightAlign]: dart.fieldType(core.bool),
    inputAriaOwns: dart.fieldType(core.String),
    inputAriaActivedescendent: dart.fieldType(core.String),
    inputAriaHasPopup: dart.fieldType(core.String),
    inputAriaExpanded: dart.fieldType(core.bool),
    inputAriaAutocomplete: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_input/material_input.ddc", {
    "package:angular_components/material_input/material_input.dart": material_input__material_input
  }, '{"version":3,"sourceRoot":"","sources":["material_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAwBM,sDAAuB;YAAG,iBAC9B,oEAAsB,EACtB,sGAAiC,EACjC,mGAA8B,EAC9B,qGAAgC,EAChC,uFAA+B,EAC/B,gDAAO;;MAII,oDAAqB;YAAG;;;;;;;;;kBAwIrB,KAAe;AAC3B,qBAAe,GAAG,KAAK;IACzB;IAGW;;;;;;IAGA;;;;;;;YAIkB,mBAAa;;;YASf,aAAO;;IAM3B;;;;;;IAKF;;;;;;IAGQ;;;;;;;YAGa,mBAAY;;;YAEX,oBAAU,CAAC,gBAAW;IAAC;oBAGlC,KAAY;AAC1B,wBAAY,GAAG,KAAK;AAGpB,2BAAe,aAAa;IAC9B;IAIO;;;;;;;YACqB,oBAAU,CAAC,iBAAY;IAAC;;YAGzB,oBAAa;;;YAEZ,oBAAU,CAAC,iBAAY;IAAC;qBAGnC,KAAY;AAC3B,yBAAa,GAAG,KAAK;AAGrB,2BAAe,aAAa;IAC9B;IAIO;;;;;;;YACsB,oBAAU,CAAC,kBAAa;IAAC;;YAK/B,kBAAW;;mBAInB,KAAU;AACvB,uBAAW,GAAG,KAAK;AAGnB,2BAAe,aAAa;IAC9B;IAKO;;;;;;IAKA;;;;;;IAOA;;;;;;IAKF;;;;;;IAQE;;;;;;;YAwBa,UAAI,KAAI;IAAQ;;YAGW,aAApB,YAAO,eAAI,YAAO,gBAAK,kBAAkB;;;AAIlE,uBAAiB;AACjB,kBAAO,GAAG;AACV,wBAAa,GAAG;IAClB;;wEA/BI,IAA8B,EAC9B,QAAsC,EACtC,SAAiC,EACjC,EAAgC,EAGpB,cAAe,EAD3B,SAA2B;IAtHpB,aAAO;IAGP,mBAAa;IAmBjB,WAAI;IAKN,eAAQ,GAAG;IAOT,kBAAY;IAaZ,kBAAY;IAKZ,mBAAa;IAab,mBAAa;IAOf,iBAAW,GAAG;IAaZ,mBAAa;IAKb,+BAAyB;IAOzB,uBAAiB;IAKnB,uBAAiB;IAQf,2BAAqB;IAKA,gBAAS,GAAT,SAAS;IAE5B,qBAAe,GAER,cAAe;AAAzB,mFAAM,EAAE,EAAE,cAAe,EAAE,SAAS;AACxC,QAAI,IAAI,IAAI,MAAM;AAChB,eAAS,GAAG;UACP,gBAAI,oCAAO,UAAU,iCAAe,CAAC,IAAI,IAAG;AAKjD,eAAS,GAAG;WACP;AACL,eAAS,GAAG,IAAI;;AAElB,iBAAa,GAAG,sDAAe,CAAC,QAAQ;EAC1C","file":"material_input.ddc.js"}');
  // Exports:
  return {
    material_input__material_input: material_input__material_input
  };
});

//# sourceMappingURL=material_input.ddc.js.map
