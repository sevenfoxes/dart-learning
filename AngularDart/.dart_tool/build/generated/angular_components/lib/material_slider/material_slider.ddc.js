define(['dart_sdk', 'packages/quiver/check', 'packages/intl/intl', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, check, intl, change_detection, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check$ = check.check;
  const intl$ = intl.intl;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const material_slider__material_slider = Object.create(_root);
  const $modulo = dartx['%'];
  const $left = dartx.left;
  const $scrollX = dartx.scrollX;
  const $round = dartx.round;
  const $truncate = dartx.truncate;
  const $page = dartx.page;
  const $onMouseMove = dartx.onMouseMove;
  const $onMouseUp = dartx.onMouseUp;
  const $ceil = dartx.ceil;
  let StreamControllerOfint = () => (StreamControllerOfint = dart.constFn(async.StreamController$(core.int)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  const _changeDetector = Symbol('_changeDetector');
  const _domService = Symbol('_domService');
  const _changeController = Symbol('_changeController');
  const _setValueToMousePosition = Symbol('_setValueToMousePosition');
  material_slider__material_slider.MaterialSliderComponent = class MaterialSliderComponent extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get valueChange() {
      return this[_changeController].stream;
    }
    get min() {
      return this[min];
    }
    set min(value) {
      this[min] = value;
    }
    get max() {
      return this[max];
    }
    set max(value) {
      this[max] = value;
    }
    get step() {
      return this[step];
    }
    set step(value) {
      this[step] = value;
    }
    get progressPercent() {
      return 100.0 * (dart.notNull(this.value) - dart.notNull(this.min)) / (dart.notNull(this.max) - dart.notNull(this.min));
    }
    ngAfterChanges() {
      check$.checkArgument(dart.notNull(this.min) < dart.notNull(this.max), {message: dart.str`Failed assertion: ${this.min} < ${this.max}`});
      check$.checkArgument(dart.notNull(this.step) > 0, {message: dart.str`Failed assertion: ${this.step} > 0`});
      check$.checkArgument((dart.notNull(this.max) - dart.notNull(this.min))[$modulo](this.step) === 0, {message: dart.str`Failed assertion: (${this.max} - ${this.min}) % ${this.step} == 0.`});
      check$.checkArgument(dart.notNull(this.value) >= dart.notNull(this.min), {message: dart.str`Failed assertion: ${this.value} >= ${this.min}`});
      check$.checkArgument(dart.notNull(this.value) <= dart.notNull(this.max), {message: dart.str`Failed assertion: ${this.value} <= ${this.max}`});
      check$.checkArgument((dart.notNull(this.value) - dart.notNull(this.min))[$modulo](this.step) === 0, {message: dart.str`Failed assertion: (${this.value} - ${this.min}) % ${this.step} == 0.`});
    }
    get container() {
      return this[container];
    }
    set container(value) {
      this[container] = value;
    }
    get isRtl() {
      return intl$.Bidi.isRtlLanguage((() => {
        let l = intl$.Intl.defaultLocale;
        return l != null ? l : "";
      })());
    }
    [_setValueToMousePosition](position) {
      this[_domService].scheduleRead(dart.fn(() => {
        let containerWidth = this.container.clientWidth;
        if (containerWidth === 0) return;
        let containerLeft = dart.notNull(this.container.getBoundingClientRect()[$left]) + dart.notNull(html.window[$scrollX]);
        let fractionOfTrackLtr = (dart.notNull(position) - containerLeft) / dart.notNull(containerWidth);
        let fractionOfTrack = dart.test(this.isRtl) ? 1.0 - fractionOfTrackLtr : fractionOfTrackLtr;
        let scaledValue = (fractionOfTrack * (dart.notNull(this.max) - dart.notNull(this.min)))[$round]();
        let unboundedValue = dart.notNull(this.min) + (scaledValue / dart.notNull(this.step))[$truncate]() * dart.notNull(this.step);
        let newValue = math.max(core.int, this.min, math.min(core.int, this.max, unboundedValue));
        if (newValue !== this.value) {
          this.value = newValue;
          this[_changeController].add(this.value);
        }
      }, VoidToNull()));
    }
    get isDragging() {
      return this[isDragging];
    }
    set isDragging(value) {
      this[isDragging] = value;
    }
    mouseDown(event) {
      if (event.button !== 0) return;
      event.preventDefault();
      this[_setValueToMousePosition](dart.asInt(event[$page].x));
      this.isDragging = true;
      this[_changeDetector].markForCheck();
      let mouseMoveSubscription = html.document[$onMouseMove].listen(dart.fn(event => {
        event.preventDefault();
        this[_setValueToMousePosition](dart.asInt(event[$page].x));
      }, MouseEventToNull()));
      html.document[$onMouseUp].take(1).listen(dart.fn(event => {
        event.preventDefault();
        mouseMoveSubscription.cancel();
        this.isDragging = false;
        this[_changeDetector].markForCheck();
      }, MouseEventToNull()));
    }
    knobKeyDown(event) {
      let newValue = this.value;
      let bigStepSize = ((dart.notNull(this.max) - dart.notNull(this.min)) / 10.0)[$ceil]();
      let sign = dart.test(this.isRtl) ? -1 : 1;
      switch (event.keyCode) {
        case html.KeyCode.DOWN:
        case html.KeyCode.LEFT:
        {
          newValue = math.max(core.int, this.min, math.min(core.int, this.max, dart.notNull(this.value) - dart.notNull(this.step) * sign));
          break;
        }
        case html.KeyCode.UP:
        case html.KeyCode.RIGHT:
        {
          newValue = math.max(core.int, this.min, math.min(core.int, this.max, dart.notNull(this.value) + dart.notNull(this.step) * sign));
          break;
        }
        case html.KeyCode.PAGE_UP:
        {
          newValue = math.max(core.int, this.min, math.min(core.int, this.max, dart.notNull(this.value) + dart.notNull(this.step) * bigStepSize));
          break;
        }
        case html.KeyCode.PAGE_DOWN:
        {
          newValue = math.max(core.int, this.min, math.min(core.int, this.max, dart.notNull(this.value) - dart.notNull(this.step) * bigStepSize));
          break;
        }
      }
      if (newValue != this.value) {
        this.value = newValue;
        this[_changeController].add(this.value);
      }
    }
  };
  (material_slider__material_slider.MaterialSliderComponent.new = function(changeDetector, domService) {
    this[value$] = 0;
    this[_changeController] = StreamControllerOfint().broadcast({sync: true});
    this[min] = 0;
    this[max] = 100;
    this[step] = 1;
    this[container] = null;
    this[isDragging] = false;
    this[_changeDetector] = changeDetector;
    this[_domService] = domService;
  }).prototype = material_slider__material_slider.MaterialSliderComponent.prototype;
  dart.addTypeTests(material_slider__material_slider.MaterialSliderComponent);
  const value$ = Symbol("MaterialSliderComponent.value");
  const min = Symbol("MaterialSliderComponent.min");
  const max = Symbol("MaterialSliderComponent.max");
  const step = Symbol("MaterialSliderComponent.step");
  const container = Symbol("MaterialSliderComponent.container");
  const isDragging = Symbol("MaterialSliderComponent.isDragging");
  material_slider__material_slider.MaterialSliderComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(material_slider__material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getMethods(material_slider__material_slider.MaterialSliderComponent.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    [_setValueToMousePosition]: dart.fnType(dart.void, [core.int]),
    mouseDown: dart.fnType(dart.void, [html.MouseEvent]),
    knobKeyDown: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(material_slider__material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getGetters(material_slider__material_slider.MaterialSliderComponent.__proto__),
    valueChange: async.Stream$(core.int),
    progressPercent: core.double,
    isRtl: core.bool
  }));
  dart.setFieldSignature(material_slider__material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getFields(material_slider__material_slider.MaterialSliderComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    value: dart.fieldType(core.int),
    [_changeController]: dart.finalFieldType(StreamControllerOfint()),
    min: dart.fieldType(core.int),
    max: dart.fieldType(core.int),
    step: dart.fieldType(core.int),
    container: dart.fieldType(html.Element),
    isDragging: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_slider/material_slider.ddc", {
    "package:angular_components/material_slider/material_slider.dart": material_slider__material_slider
  }, '{"version":3,"sourceRoot":"","sources":["material_slider.dart"],"names":[],"mappings":"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","file":"material_slider.ddc.js"}');
  // Exports:
  return {
    material_slider__material_slider: material_slider__material_slider
  };
});

//# sourceMappingURL=material_slider.ddc.js.map
