define(['dart_sdk', 'packages/angular_components/material_chips/material_chip.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_chip$46scss$46css, view_type, change_detection, modules, material_chip, button_decorator, button_decorator$, has_renderer, angular, focus, selection_model, has_renderer$, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_chips__material_chip$46scss$46css$46shim = material_chip$46scss$46css.material_chips__material_chip$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_chips__material_chip = material_chip.material_chips__material_chip;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_chips__material_chip$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  const $createElementNS = dartx.createElementNS;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialChipComponent = () => (AppViewOfMaterialChipComponent = dart.constFn(src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent)))();
  let AppViewAndintToAppViewOfMaterialChipComponent = () => (AppViewAndintToAppViewOfMaterialChipComponent = dart.constFn(dart.fnType(AppViewOfMaterialChipComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialChipComponent = () => (ComponentRefOfMaterialChipComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_chips__material_chip.MaterialChipComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialChipComponent = () => (ComponentFactoryOfMaterialChipComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_chips__material_chip.MaterialChipComponent)))();
  dart.defineLazy(material_chips__material_chip$46template, {
    /*material_chips__material_chip$46template.styles$MaterialChipComponent*/get styles$MaterialChipComponent() {
      return dart.constList([material_chips__material_chip$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  material_chips__material_chip$46template.ViewMaterialChipComponent0 = class ViewMaterialChipComponent0 extends src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_chips__material_chip$46template.viewFactory_MaterialChipComponent1, AppViewAndintToAppViewOfMaterialChipComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_1].className = "content";
      this.addShimC(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this.project(this[_el_1], 1);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_chips__material_chip$46template.viewFactory_MaterialChipComponent2, AppViewAndintToAppViewOfMaterialChipComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.hasLeftIcon;
      this[_NgIf_3_9].ngIf = _ctx.removable;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      let currVal_1 = _ctx.uuid;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setProp(this[_el_1], "id", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.label;
      let currVal_2 = l != null ? l : "";
      if (!(this[_expr_2] === currVal_2)) {
        this[_text_2][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_chips__material_chip$46template.ViewMaterialChipComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_chips__material_chip$46template.ViewMaterialChipComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-chip"));
    this.rootEl.className = "themeable";
    let t = material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType;
    t == null ? material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.Emulated, material_chips__material_chip$46template.styles$MaterialChipComponent) : t;
    this.setupComponentType(material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType);
  }).prototype = material_chips__material_chip$46template.ViewMaterialChipComponent0.prototype;
  dart.addTypeTests(material_chips__material_chip$46template.ViewMaterialChipComponent0);
  dart.setMethodSignature(material_chips__material_chip$46template.ViewMaterialChipComponent0, () => ({
    __proto__: dart.getMethods(material_chips__material_chip$46template.ViewMaterialChipComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chip.MaterialChipComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chip$46template.ViewMaterialChipComponent0, () => ({
    __proto__: dart.getFields(material_chips__material_chip$46template.ViewMaterialChipComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_1]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_chips__material_chip$46template.ViewMaterialChipComponent0, {
    /*material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_chips__material_chip$46template.viewFactory_MaterialChipComponent0 = function(parentView, parentIndex) {
    return new material_chips__material_chip$46template.ViewMaterialChipComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  material_chips__material_chip$46template._ViewMaterialChipComponent1 = class _ViewMaterialChipComponent1 extends src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "left-icon";
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (material_chips__material_chip$46template._ViewMaterialChipComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_chips__material_chip$46template._ViewMaterialChipComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType;
  }).prototype = material_chips__material_chip$46template._ViewMaterialChipComponent1.prototype;
  dart.addTypeTests(material_chips__material_chip$46template._ViewMaterialChipComponent1);
  dart.setMethodSignature(material_chips__material_chip$46template._ViewMaterialChipComponent1, () => ({
    __proto__: dart.getMethods(material_chips__material_chip$46template._ViewMaterialChipComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chip.MaterialChipComponent), [])
  }));
  dart.setFieldSignature(material_chips__material_chip$46template._ViewMaterialChipComponent1, () => ({
    __proto__: dart.getFields(material_chips__material_chip$46template._ViewMaterialChipComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_chips__material_chip$46template.viewFactory_MaterialChipComponent1 = function(parentView, parentIndex) {
    return new material_chips__material_chip$46template._ViewMaterialChipComponent1.new(parentView, parentIndex);
  };
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _expr_0 = Symbol('_expr_0');
  material_chips__material_chip$46template._ViewMaterialChipComponent2 = class _ViewMaterialChipComponent2 extends src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this.createAttr(this[_el_0], "class", "delete-icon");
      this.createAttr(this[_el_0], "height", "24");
      this.createAttr(this[_el_0], "viewBox", "0 0 24 24");
      this.createAttr(this[_el_0], "width", "24");
      this.createAttr(this[_el_0], "xmlns", "http://www.w3.org/2000/svg");
      this.addShimE(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_el_1] = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      this[_el_0][$append](this[_el_1]);
      this.createAttr(this[_el_1], "d", "M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5\n               13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59\n               3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z");
      this.addShimE(this[_el_1]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'removeChip')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.chipDeleteButtonMessage;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], "aria-label", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.uuid;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_0], "aria-describedby", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
    }
  };
  (material_chips__material_chip$46template._ViewMaterialChipComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_el_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_chips__material_chip$46template._ViewMaterialChipComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType;
  }).prototype = material_chips__material_chip$46template._ViewMaterialChipComponent2.prototype;
  dart.addTypeTests(material_chips__material_chip$46template._ViewMaterialChipComponent2);
  dart.setMethodSignature(material_chips__material_chip$46template._ViewMaterialChipComponent2, () => ({
    __proto__: dart.getMethods(material_chips__material_chip$46template._ViewMaterialChipComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chip.MaterialChipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chip$46template._ViewMaterialChipComponent2, () => ({
    __proto__: dart.getFields(material_chips__material_chip$46template._ViewMaterialChipComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_el_1]: dart.fieldType(html.Element),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_chips__material_chip$46template.viewFactory_MaterialChipComponent2 = function(parentView, parentIndex) {
    return new material_chips__material_chip$46template._ViewMaterialChipComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(material_chips__material_chip$46template, {
    /*material_chips__material_chip$46template.styles$MaterialChipComponentHost*/get styles$MaterialChipComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialChipComponent_0_5 = Symbol('_MaterialChipComponent_0_5');
  material_chips__material_chip$46template._ViewMaterialChipComponentHost0 = class _ViewMaterialChipComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_chips__material_chip$46template.ViewMaterialChipComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialChipComponent_0_5] = new material_chips__material_chip.MaterialChipComponent.new(this.rootEl);
      this[_compView_0].create(this[_MaterialChipComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialChipComponent()).new(0, this, this.rootEl, this[_MaterialChipComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(model__ui__has_renderer.HasRenderer) && 0 === nodeIndex) {
        return this[_MaterialChipComponent_0_5];
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
  (material_chips__material_chip$46template._ViewMaterialChipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialChipComponent_0_5] = null;
    material_chips__material_chip$46template._ViewMaterialChipComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_chips__material_chip$46template._ViewMaterialChipComponentHost0.prototype;
  dart.addTypeTests(material_chips__material_chip$46template._ViewMaterialChipComponentHost0);
  dart.setMethodSignature(material_chips__material_chip$46template._ViewMaterialChipComponentHost0, () => ({
    __proto__: dart.getMethods(material_chips__material_chip$46template._ViewMaterialChipComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chip$46template._ViewMaterialChipComponentHost0, () => ({
    __proto__: dart.getFields(material_chips__material_chip$46template._ViewMaterialChipComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_chips__material_chip$46template.ViewMaterialChipComponent0),
    [_MaterialChipComponent_0_5]: dart.fieldType(material_chips__material_chip.MaterialChipComponent)
  }));
  material_chips__material_chip$46template.viewFactory_MaterialChipComponentHost0 = function(parentView, parentIndex) {
    return new material_chips__material_chip$46template._ViewMaterialChipComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_chips__material_chip$46template, {
    /*material_chips__material_chip$46template.MaterialChipComponentNgFactory*/get MaterialChipComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialChipComponent()).new("material-chip", dart.fn(material_chips__material_chip$46template.viewFactory_MaterialChipComponentHost0, AppViewAndintToAppView()), material_chips__material_chip$46template._MaterialChipComponentMetadata));
    },
    /*material_chips__material_chip$46template._MaterialChipComponentMetadata*/get _MaterialChipComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_chips__material_chip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_chips__material_chip$46template.initReflector = function() {
    if (dart.test(material_chips__material_chip$46template._visited)) {
      return;
    }
    material_chips__material_chip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_chips__material_chip.MaterialChipComponent), material_chips__material_chip$46template.MaterialChipComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    focus__focus$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_chips/material_chip.template.ddc", {
    "package:angular_components/material_chips/material_chip.template.dart": material_chips__material_chip$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_chip.template.dart"],"names":[],"mappings":"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","file":"material_chip.template.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chip$46template: material_chips__material_chip$46template
  };
});

//# sourceMappingURL=material_chip.template.ddc.js.map