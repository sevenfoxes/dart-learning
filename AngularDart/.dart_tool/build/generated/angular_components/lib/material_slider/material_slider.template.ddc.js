define(['dart_sdk', 'packages/angular_components/material_slider/material_slider.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_slider/material_slider', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, material_slider$46scss$46css, view_type, change_detection, modules, material_slider, dom_service, angular, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_slider__material_slider$46scss$46css$46shim = material_slider$46scss$46css.material_slider__material_slider$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_slider__material_slider = material_slider.material_slider__material_slider;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = angular.angular$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const material_slider__material_slider$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfMaterialSliderComponent = () => (ComponentRefOfMaterialSliderComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_slider__material_slider.MaterialSliderComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialSliderComponent = () => (ComponentFactoryOfMaterialSliderComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_slider__material_slider.MaterialSliderComponent)))();
  dart.defineLazy(material_slider__material_slider$46template, {
    /*material_slider__material_slider$46template.styles$MaterialSliderComponent*/get styles$MaterialSliderComponent() {
      return dart.constList([material_slider__material_slider$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_container_1_0_isDirty = Symbol('_query_container_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _el_6 = Symbol('_el_6');
  const _el_7 = Symbol('_el_7');
  const _el_8 = Symbol('_el_8');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  let const$;
  material_slider__material_slider$46template.ViewMaterialSliderComponent0 = class ViewMaterialSliderComponent0 extends src__core__linker__app_view.AppView$(material_slider__material_slider.MaterialSliderComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "container";
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "track-container left-track-container";
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = "track";
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_3].className = "knob";
      this.createAttr(this[_el_3], "role", "slider");
      this[_el_3].tabIndex = 1;
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      this[_el_4].className = "knob-real";
      this.addShimC(this[_el_4]);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      this[_el_5].className = "knob-hover-shadow";
      this.addShimC(this[_el_5]);
      this[_el_6] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      this[_el_6].className = "knob-drag-shadow";
      this.addShimC(this[_el_6]);
      this[_el_7] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_7].className = "track-container right-track-container";
      this.addShimC(this[_el_7]);
      this[_el_8] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_7]);
      this[_el_8].className = "track";
      this.addShimC(this[_el_8]);
      this[_el_1][$addEventListener]("mousedown", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this.ctx, 'mouseDown')));
      this[_el_3][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'knobKeyDown')));
      this[_el_3][$addEventListener]("mousedown", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this.ctx, 'mouseDown')));
      this[_el_7][$addEventListener]("mousedown", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this.ctx, 'mouseDown')));
      this.ctx.container = this[_el_0];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.progressPercent;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_el_1].style[$setProperty]("width", (currVal_0 == null ? null : dart.toString(currVal_0)) == null ? null : dart.notNull(currVal_0 == null ? null : dart.toString(currVal_0)) + "%");
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.test(_ctx.isRtl) ? 0 : 0 - 8;
      if (!(this[_expr_1] === currVal_1)) {
        this[_el_3].style[$setProperty]("margin-left", currVal_1[$toString]() === null ? null : currVal_1[$toString]() + "px");
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.isRtl) ? 0 - 8 : 0;
      if (!(this[_expr_2] === currVal_2)) {
        this[_el_3].style[$setProperty]("margin-right", currVal_2[$toString]() === null ? null : currVal_2[$toString]() + "px");
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.min;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this.setAttr(this[_el_3], "aria-valuemin", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.max;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this.setAttr(this[_el_3], "aria-valuemax", currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.value;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this.setAttr(this[_el_3], "aria-valuenow", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isDragging;
      if (!(this[_expr_6] == currVal_6)) {
        this.updateClass(this[_el_6], "is-dragging", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate1("calc(", 100 - dart.notNull(_ctx.progressPercent), "% + 8px)");
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_el_7].style[$setProperty]("width", currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
    }
  };
  (material_slider__material_slider$46template.ViewMaterialSliderComponent0.new = function(parentView, parentIndex) {
    this[_query_container_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    this[_el_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_slider__material_slider$46template.ViewMaterialSliderComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-slider"));
    let t = material_slider__material_slider$46template.ViewMaterialSliderComponent0._renderType;
    t == null ? material_slider__material_slider$46template.ViewMaterialSliderComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.Emulated, material_slider__material_slider$46template.styles$MaterialSliderComponent) : t;
    this.setupComponentType(material_slider__material_slider$46template.ViewMaterialSliderComponent0._renderType);
  }).prototype = material_slider__material_slider$46template.ViewMaterialSliderComponent0.prototype;
  dart.addTypeTests(material_slider__material_slider$46template.ViewMaterialSliderComponent0);
  dart.setMethodSignature(material_slider__material_slider$46template.ViewMaterialSliderComponent0, () => ({
    __proto__: dart.getMethods(material_slider__material_slider$46template.ViewMaterialSliderComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_slider__material_slider.MaterialSliderComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_slider__material_slider$46template.ViewMaterialSliderComponent0, () => ({
    __proto__: dart.getFields(material_slider__material_slider$46template.ViewMaterialSliderComponent0.__proto__),
    [_query_container_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.DivElement),
    [_el_8]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_slider__material_slider$46template.ViewMaterialSliderComponent0, {
    /*material_slider__material_slider$46template.ViewMaterialSliderComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_slider__material_slider$46template.viewFactory_MaterialSliderComponent0 = function(parentView, parentIndex) {
    return new material_slider__material_slider$46template.ViewMaterialSliderComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_slider__material_slider$46template, {
    /*material_slider__material_slider$46template.styles$MaterialSliderComponentHost*/get styles$MaterialSliderComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSliderComponent_0_5 = Symbol('_MaterialSliderComponent_0_5');
  material_slider__material_slider$46template._ViewMaterialSliderComponentHost0 = class _ViewMaterialSliderComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_slider__material_slider$46template.ViewMaterialSliderComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSliderComponent_0_5] = new material_slider__material_slider.MaterialSliderComponent.new(this[_compView_0].ref, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialSliderComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialSliderComponent()).new(0, this, this.rootEl, this[_MaterialSliderComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_slider__material_slider.MaterialSliderComponent) && 0 === nodeIndex) {
        return this[_MaterialSliderComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSliderComponent_0_5] = null;
    material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.prototype;
  dart.addTypeTests(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0);
  dart.setMethodSignature(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0, () => ({
    __proto__: dart.getMethods(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0, () => ({
    __proto__: dart.getFields(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_slider__material_slider$46template.ViewMaterialSliderComponent0),
    [_MaterialSliderComponent_0_5]: dart.fieldType(material_slider__material_slider.MaterialSliderComponent)
  }));
  material_slider__material_slider$46template.viewFactory_MaterialSliderComponentHost0 = function(parentView, parentIndex) {
    return new material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_slider__material_slider$46template, {
    /*material_slider__material_slider$46template.MaterialSliderComponentNgFactory*/get MaterialSliderComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSliderComponent()).new("material-slider", dart.fn(material_slider__material_slider$46template.viewFactory_MaterialSliderComponentHost0, AppViewAndintToAppView()), material_slider__material_slider$46template._MaterialSliderComponentMetadata));
    },
    /*material_slider__material_slider$46template._MaterialSliderComponentMetadata*/get _MaterialSliderComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_slider__material_slider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_slider__material_slider$46template.initReflector = function() {
    if (dart.test(material_slider__material_slider$46template._visited)) {
      return;
    }
    material_slider__material_slider$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_slider__material_slider.MaterialSliderComponent), material_slider__material_slider$46template.MaterialSliderComponentNgFactory);
    angular$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_slider/material_slider.template.ddc", {
    "package:angular_components/material_slider/material_slider.template.dart": material_slider__material_slider$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_slider.template.dart"],"names":[],"mappings":"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","file":"material_slider.template.ddc.js"}');
  // Exports:
  return {
    material_slider__material_slider$46template: material_slider__material_slider$46template
  };
});

//# sourceMappingURL=material_slider.template.ddc.js.map
