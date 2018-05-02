define(['dart_sdk', 'packages/dart_learnin/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/dart_learnin/app_component', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_list/material_list_item', 'packages/english_words/english_words', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/angular.template', 'packages/angular_components/angular_components.template'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, material_button, dark_theme, material_button$, glyph, glyph$, material_list, material_list$, app_component, button_decorator, material_list_item, dom_service, material_dropdown_base, material_list_item$, english_words, alignment, module, disposer, ng_zone, angular_2, imperative_view, dom_ruler, angular_2$, module$, overlay_ref, zindexer, dom_popup_source, time, managed_zone, angular, angular_components) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const app_component$ = app_component.app_component;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_list__material_list_item = material_list_item$.material_list__material_list_item;
  const src__word_pair = english_words.src__word_pair;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const time$ = time.time;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const angular$46template = angular.angular$46template;
  const angular_components$46template = angular_components.angular_components$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([app_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _GlyphComponent_1_5 = Symbol('_GlyphComponent_1_5');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _MaterialListComponent_3_5 = Symbol('_MaterialListComponent_3_5');
  const _el_4 = Symbol('_el_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgFor_5_9 = Symbol('_NgFor_5_9');
  const _el_6 = Symbol('_el_6');
  const _el_7 = Symbol('_el_7');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgFor_9_9 = Symbol('_NgFor_9_9');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  let const$0;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref, null);
      this[_compView_1] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.createAttr(this[_el_1], "icon", "lightbulb_outline");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_GlyphComponent_1_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_GlyphComponent_1_5], []);
      let _text_2 = html.Text.new("Get new ideas");
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfNode().of([this[_el_1], _text_2])]);
      this[_compView_3] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_MaterialListComponent_3_5] = new material_list__material_list.MaterialListComponent.new();
      let doc = html.document;
      this[_el_4] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_4], "group", "");
      this.addShimC(this[_el_4]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_4][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(app_component$46template.viewFactory_AppComponent1, AppViewAndintToAppViewOfAppComponent()));
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this[_el_6] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_6], "group", "");
      this.addShimC(this[_el_6]);
      this[_el_7] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_6]);
      this.createAttr(this[_el_7], "label", "");
      this.addShimC(this[_el_7]);
      let _text_8 = html.Text.new("Saved Names");
      this[_el_7][$append](_text_8);
      let _anchor_9 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_6][$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 6, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(app_component$46template.viewFactory_AppComponent2, AppViewAndintToAppViewOfAppComponent()));
      this[_NgFor_9_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_9], _TemplateRef_9_8);
      this[_compView_3].create(this[_MaterialListComponent_3_5], [JSArrayOfDivElement().of([this[_el_4], this[_el_6]])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'generateNames')));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_1_5].icon = "lightbulb_outline";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      let currVal_1 = _ctx.names;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_5_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_5_9].ngDoCheck();
      if (firstCheck) {
        if (!(_ctx.savedNames == null)) {
          this[_NgFor_9_9].ngForOf = _ctx.savedNames;
        }
      }
      this[_NgFor_9_9].ngDoCheck();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_3].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_9];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_1];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_3];
      t$2 == null ? null : t$2.destroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_GlyphComponent_1_5] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_MaterialListComponent_3_5] = null;
    this[_el_4] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    this[_appEl_9] = null;
    this[_NgFor_9_9] = null;
    this[_expr_1] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_1_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_3_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_el_4]: dart.fieldType(html.DivElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_6]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.DivElement),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_9_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  const _MaterialListItemComponent_0_5 = Symbol('_MaterialListItemComponent_0_5');
  const _text_2 = Symbol('_text_2');
  const _text_3 = Symbol('_text_3');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  app_component$46template._ViewAppComponent1 = class _ViewAppComponent1 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialListItemComponent_0_5] = new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      let doc = html.document;
      this[_el_1] = doc[$createElement]("span");
      this[_el_1].className = "first";
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this[_text_3] = html.Text.new("");
      let _text_4 = html.Text.new(".com");
      this[_compView_0].create(this[_MaterialListItemComponent_0_5], [JSArrayOfNode().of([this[_el_1], this[_text_3], _text_4])]);
      let subscription_0 = this[_MaterialListItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = src__word_pair.WordPair._check(this.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.savedNames.contains(local_item);
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], "is-saved", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item.first);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_item.second);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_3][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialListItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_item = src__word_pair.WordPair._check(this.locals[$_get]("$implicit"));
      this.ctx.toggleSavedState(local_item);
    }
  };
  (app_component$46template._ViewAppComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialListItemComponent_0_5] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    app_component$46template._ViewAppComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent1.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent1);
  dart.setMethodSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_0_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  app_component$46template.viewFactory_AppComponent1 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent1.new(parentView, parentIndex);
  };
  app_component$46template._ViewAppComponent2 = class _ViewAppComponent2 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialListItemComponent_0_5] = new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      let doc = html.document;
      this[_el_1] = doc[$createElement]("span");
      this[_el_1].className = "first";
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this[_text_3] = html.Text.new("");
      let _text_4 = html.Text.new(".com");
      this[_compView_0].create(this[_MaterialListItemComponent_0_5], [JSArrayOfNode().of([this[_el_1], this[_text_3], _text_4])]);
      let subscription_0 = this[_MaterialListItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = src__word_pair.WordPair._check(this.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_item.first);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item.second);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_3][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialListItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_item = src__word_pair.WordPair._check(this.locals[$_get]("$implicit"));
      this.ctx.removeFromSaved(local_item);
    }
  };
  (app_component$46template._ViewAppComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialListItemComponent_0_5] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    app_component$46template._ViewAppComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent2.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent2);
  dart.setMethodSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_0_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  app_component$46template.viewFactory_AppComponent2 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  const __defaultPopupPositions_0_6 = Symbol('__defaultPopupPositions_0_6');
  const __Window_0_7 = Symbol('__Window_0_7');
  const __DomService_0_8 = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9 = Symbol('__AcxImperativeViewUtils_0_9');
  const __Document_0_10 = Symbol('__Document_0_10');
  const __DomRuler_0_11 = Symbol('__DomRuler_0_11');
  const __ManagedZone_0_12 = Symbol('__ManagedZone_0_12');
  const __overlayContainerName_0_13 = Symbol('__overlayContainerName_0_13');
  const __overlayContainerParent_0_14 = Symbol('__overlayContainerParent_0_14');
  const __overlayContainer_0_15 = Symbol('__overlayContainer_0_15');
  const __overlaySyncDom_0_16 = Symbol('__overlaySyncDom_0_16');
  const __overlayRepositionLoop_0_17 = Symbol('__overlayRepositionLoop_0_17');
  const __OverlayStyleConfig_0_18 = Symbol('__OverlayStyleConfig_0_18');
  const __ZIndexer_0_19 = Symbol('__ZIndexer_0_19');
  const __OverlayDomRenderService_0_20 = Symbol('__OverlayDomRenderService_0_20');
  const __OverlayService_0_21 = Symbol('__OverlayService_0_21');
  const __DomPopupSourceFactory_0_22 = Symbol('__DomPopupSourceFactory_0_22');
  const __Clock_0_23 = Symbol('__Clock_0_23');
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  const _defaultPopupPositions_0_6 = Symbol('_defaultPopupPositions_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _Document_0_10 = Symbol('_Document_0_10');
  const _DomRuler_0_11 = Symbol('_DomRuler_0_11');
  const _ManagedZone_0_12 = Symbol('_ManagedZone_0_12');
  let const$15;
  const _overlayContainerName_0_13 = Symbol('_overlayContainerName_0_13');
  let const$16;
  const _overlayContainerParent_0_14 = Symbol('_overlayContainerParent_0_14');
  let const$17;
  const _overlayContainer_0_15 = Symbol('_overlayContainer_0_15');
  const _overlaySyncDom_0_16 = Symbol('_overlaySyncDom_0_16');
  const _overlayRepositionLoop_0_17 = Symbol('_overlayRepositionLoop_0_17');
  const _OverlayStyleConfig_0_18 = Symbol('_OverlayStyleConfig_0_18');
  const _ZIndexer_0_19 = Symbol('_ZIndexer_0_19');
  const _OverlayDomRenderService_0_20 = Symbol('_OverlayDomRenderService_0_20');
  const _OverlayService_0_21 = Symbol('_OverlayService_0_21');
  const _DomPopupSourceFactory_0_22 = Symbol('_DomPopupSourceFactory_0_22');
  let const$18;
  const _Clock_0_23 = Symbol('_Clock_0_23');
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    get [_defaultPopupPositions_0_6]() {
      if (this[__defaultPopupPositions_0_6] == null) {
        this[__defaultPopupPositions_0_6] = const$14 || (const$14 = dart.constList([const$1 || (const$1 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$3 || (const$3 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$2 || (const$2 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$5 || (const$5 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$4 || (const$4 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$7 || (const$7 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$6 || (const$6 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$10 || (const$10 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$8 || (const$8 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$9 || (const$9 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$13 || (const$13 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$11 || (const$11 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$12 || (const$12 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_6];
    }
    get [_Window_0_7]() {
      if (this[__Window_0_7] == null) {
        this[__Window_0_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7];
    }
    get [_DomService_0_8]() {
      if (this[__DomService_0_8] == null) {
        this[__DomService_0_8] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7]));
      }
      return this[__DomService_0_8];
    }
    get [_AcxImperativeViewUtils_0_9]() {
      if (this[__AcxImperativeViewUtils_0_9] == null) {
        this[__AcxImperativeViewUtils_0_9] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__AcxImperativeViewUtils_0_9];
    }
    get [_Document_0_10]() {
      if (this[__Document_0_10] == null) {
        this[__Document_0_10] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_10];
    }
    get [_DomRuler_0_11]() {
      if (this[__DomRuler_0_11] == null) {
        this[__DomRuler_0_11] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_10]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__DomRuler_0_11];
    }
    get [_ManagedZone_0_12]() {
      if (this[__ManagedZone_0_12] == null) {
        this[__ManagedZone_0_12] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_12];
    }
    get [_overlayContainerName_0_13]() {
      if (this[__overlayContainerName_0_13] == null) {
        this[__overlayContainerName_0_13] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$15 || (const$15 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_13];
    }
    get [_overlayContainerParent_0_14]() {
      if (this[__overlayContainerParent_0_14] == null) {
        this[__overlayContainerParent_0_14] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_10]), this.injectorGet(const$16 || (const$16 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_14];
    }
    get [_overlayContainer_0_15]() {
      if (this[__overlayContainer_0_15] == null) {
        this[__overlayContainer_0_15] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_13]), html.HtmlElement._check(this[_overlayContainerParent_0_14]), this.injectorGet(const$17 || (const$17 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_15];
    }
    get [_overlaySyncDom_0_16]() {
      if (this[__overlaySyncDom_0_16] == null) {
        this[__overlaySyncDom_0_16] = true;
      }
      return this[__overlaySyncDom_0_16];
    }
    get [_overlayRepositionLoop_0_17]() {
      if (this[__overlayRepositionLoop_0_17] == null) {
        this[__overlayRepositionLoop_0_17] = true;
      }
      return this[__overlayRepositionLoop_0_17];
    }
    get [_OverlayStyleConfig_0_18]() {
      if (this[__OverlayStyleConfig_0_18] == null) {
        this[__OverlayStyleConfig_0_18] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_10]));
      }
      return this[__OverlayStyleConfig_0_18];
    }
    get [_ZIndexer_0_19]() {
      if (this[__ZIndexer_0_19] == null) {
        this[__ZIndexer_0_19] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_19];
    }
    get [_OverlayDomRenderService_0_20]() {
      if (this[__OverlayDomRenderService_0_20] == null) {
        this[__OverlayDomRenderService_0_20] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_18], html.HtmlElement._check(this[_overlayContainer_0_15]), core.String._check(this[_overlayContainerName_0_13]), this[_DomRuler_0_11], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]), this[_AcxImperativeViewUtils_0_9], this[_overlaySyncDom_0_16], this[_overlayRepositionLoop_0_17], this[_ZIndexer_0_19]);
      }
      return this[__OverlayDomRenderService_0_20];
    }
    get [_OverlayService_0_21]() {
      if (this[__OverlayService_0_21] == null) {
        this[__OverlayService_0_21] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_16], this[_OverlayDomRenderService_0_20], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_21];
    }
    get [_DomPopupSourceFactory_0_22]() {
      if (this[__DomPopupSourceFactory_0_22] == null) {
        this[__DomPopupSourceFactory_0_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_11]);
      }
      return this[__DomPopupSourceFactory_0_22];
    }
    get [_Clock_0_23]() {
      if (this[__Clock_0_23] == null) {
        this[__Clock_0_23] = const$18 || (const$18 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_23];
    }
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$19 || (const$19 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_6];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9];
      }
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_10];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_11];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_12];
      }
      if (token === (const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_13];
      }
      if (token === (const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_14];
      }
      if (token === (const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_15];
      }
      if (token === (const$23 || (const$23 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_16];
      }
      if (token === (const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_17];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_18];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_20];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_22];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$25 || (const$25 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))))) && 0 === nodeIndex) {
        return this[_Clock_0_23];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_AppComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    this[__defaultPopupPositions_0_6] = null;
    this[__Window_0_7] = null;
    this[__DomService_0_8] = null;
    this[__AcxImperativeViewUtils_0_9] = null;
    this[__Document_0_10] = null;
    this[__DomRuler_0_11] = null;
    this[__ManagedZone_0_12] = null;
    this[__overlayContainerName_0_13] = null;
    this[__overlayContainerParent_0_14] = null;
    this[__overlayContainer_0_15] = null;
    this[__overlaySyncDom_0_16] = null;
    this[__overlayRepositionLoop_0_17] = null;
    this[__OverlayStyleConfig_0_18] = null;
    this[__ZIndexer_0_19] = null;
    this[__OverlayDomRenderService_0_20] = null;
    this[__OverlayService_0_21] = null;
    this[__DomPopupSourceFactory_0_22] = null;
    this[__Clock_0_23] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponentHost0.__proto__),
    [_defaultPopupPositions_0_6]: core.List$(laminate__enums__alignment.RelativePosition),
    [_Window_0_7]: dart.dynamic,
    [_DomService_0_8]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9]: utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils,
    [_Document_0_10]: dart.dynamic,
    [_DomRuler_0_11]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_12]: utils__angular__managed_zone__angular_2.Angular2ManagedZone,
    [_overlayContainerName_0_13]: dart.dynamic,
    [_overlayContainerParent_0_14]: dart.dynamic,
    [_overlayContainer_0_15]: dart.dynamic,
    [_overlaySyncDom_0_16]: core.bool,
    [_overlayRepositionLoop_0_17]: core.bool,
    [_OverlayStyleConfig_0_18]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_19]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_20]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_21]: src__laminate__overlay__overlay_service.OverlayService,
    [_DomPopupSourceFactory_0_22]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory,
    [_Clock_0_23]: time$.Clock
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent),
    [__defaultPopupPositions_0_6]: dart.fieldType(ListOfRelativePosition()),
    [__Window_0_7]: dart.fieldType(dart.dynamic),
    [__DomService_0_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__Document_0_10]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_11]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_12]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_14]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_15]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_16]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_17]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_18]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_19]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_20]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_21]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__DomPopupSourceFactory_0_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_0_23]: dart.fieldType(time$.Clock)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("my-app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView()), app_component$46template._AppComponentMetadata));
    },
    /*app_component$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
  };
  dart.trackLibraries("packages/dart_learnin/app_component.template.ddc", {
    "package:dart_learnin/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":";;;;QAkTc,IAAO;;;;QAvP4B,0BAAO;;;;;;QAwBpC,iCAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iFA+Nd,IAAO;;;6FAAP,IAAO;;;;;;;MAvPD,4CAAmB;YAAG,iBAAO,AAAQ,0BAAD,OAAO;;;;;;;;;;;;;;;;;;;;;;;;;AA6B3D,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,uBAAW,GAAG,IAAI,4EAAoC,CAAC,MAAM;AAC7D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,sBAAgB,SAAO,CAAC,WAAK;AAC7B,mBAAQ,CAAC,AAqNC,IAAO,oBArNR,WAAK;AACd,6BAAiB,GAAG,IAAI,kCAAoB,kBAAC,eAAU,YAAY,CAAC,mCAAM,2CAAoB,CAAC,mBAAiB,aAAQ,YAAY,EAAE;AACtI,wCAA4B,GAAG,IAAI,4DAA+B,CAAC,AAmNzD,IAAO,oBAnNkD,WAAK,GAAE,uBAAiB,EAAE,iBAAW,IAAI,EAAE;AAC9G,uBAAW,GAAG,IAAI,+CAA2B,CAAC,MAAM;AACpD,iBAAK,GAAG,iBAAW,OAAO;AAC1B,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,mBAAQ,CAAC,AA+MC,IAAO,oBA/MR,WAAK;AACd,+BAAmB,GAAG,IAAI,+BAAsB,CAAC,AA8MvC,IAAO,oBA9MgC,WAAK;AACtD,uBAAW,OAAO,CAAC,yBAAmB,EAAE;AACxC,UAAa,UAAU,AAAI,AA4MjB,IAAO,SA5MsB,CAAC;AACxC,uBAAW,OAAO,CAAC,kCAA4B,EAAE,CAC/C,oBAAC,WAAK,EAAE,OAAO;AAEjB,uBAAW,GAAG,IAAI,sEAAkC,CAAC,MAAM;AAC3D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,sBAAgB,SAAO,CAAC,WAAK;AAC7B,mBAAQ,CAAC,AAqMC,IAAO,oBArMR,WAAK;AACd,sCAA0B,GAAG,IAAI,sDAA8B;AAC/D,UAAI,MAAc,AAmMR,IAAO,SAnMS;AAC1B,iBAAK,GAAG,AAkME,IAAO,mBAlMT,GAAG,gBAAc,CAAC;AAC1B,qBAAU,CAAC,WAAK,EAAE,SAAS;AAC3B,mBAAQ,CAAC,WAAK;AACd,UAAM,YAAY,qDAAyB;AAC3C,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,mGAAyB;AAClF,sBAAU,GAAG,IAAI,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AAC1D,iBAAK,GAAG,AA0LE,IAAO,mBA1LT,GAAG,gBAAc,CAAC;AAC1B,qBAAU,CAAC,WAAK,EAAE,SAAS;AAC3B,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,qBAAU,CAAC,WAAK,EAAE,SAAS;AAC3B,mBAAQ,CAAC,WAAK;AACd,UAAa,UAAU,AAAI,AAoLjB,IAAO,SApLsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,UAAM,YAAY,qDAAyB;AAC3C,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,mGAAyB;AAClF,sBAAU,GAAG,IAAI,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AAC1D,uBAAW,OAAO,CAAC,gCAA0B,EAAE,CAC7C,0BAAC,WAAK,EAAE,WAAK;AAEf,UAAM,iBAAiB,kCAA4B,QAAQ,OAAO,CAAC,kBAAa,CA0KtE,IAAO,oBA1KgE,QAAG;AACpF,eAAI,CAAC,yDAAU,CAAC,cAAc;AAC9B,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,6CAAY,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AACtF,cAAO,wBAAiB;;AAE1B,WAAM,AAAU,KAAK,KAAU,uEAAuB,IAAK,AAAU,KAAK,KAAW,iEAAe,KAAQ,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AACjJ,cAAO,mCAA4B;;AAErC,YAAO,eAAc;IACvB;;AAIE,UAA2B,OAAO,QAAG;AACrC,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,aAAO,GAAG;AACV,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,iCAAmB,KAAK,GAAG;AAC3B,eAAO,GAAG;;AAEZ,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,aAAO,GAAG;AACV,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,UAAM,YAAY,IAAI,MAAM;AAC5B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,IAAI,WAAW,IAAE,OAAO;AACrC,UAAC,gBAAU,QAAQ,GAAG,IAAI,WAAW;;;AAGzC,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;AACnC,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;AACzB,uBAAW,cAAc;AACzB,uBAAW,cAAc;IAC3B;;AAIE,4BAAQ;;AACR,6BAAQ;;AACR,iCAAW;;AACX,iCAAW;;AACX,iCAAW;;IACb;;6DAxHkB,UAA2B,EAAE,WAAe;IAnB9C,WAAK;IACgB,iBAAW;IAC3B,uBAAiB;IACN,kCAA4B;IAC5C,WAAK;IACO,iBAAW;IAChB,yBAAmB;IAC1B,WAAK;IACc,iBAAW;IACf,gCAA0B;IACtC,WAAK;IACV,cAAQ;IACP,gBAAU;IACN,WAAK;IACL,WAAK;IACV,cAAQ;IACP,gBAAU;IACrB,aAAO;AAEuD,wEAAM,qCAAiB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACnK,eAAM,GAAG,AAgOC,IAAO,oBAhOR,AAAQ,AAgOP,IAAO,SAhOQ,gBAAc,CAAC;AACxC,kEAAW;gBAAX,sDAAW,GAAK,AAAA,AAAS,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,4CAAmB;AAC1G,2BAAkB,CAAC,sDAAW;EAChC;;;;;;;;;;;4BA6NY,IAAO;;;;4BAAP,IAAO;;;4BAAP,IAAO;;;4BAAP,IAAO;;;4BAAP,IAAO;4BAAP,IAAO;;;;;;MAlOQ,sDAAW;;;;;gEA4HgB,UAA2B,EAAE,WAAe;AAClG,UAAO,KAAI,8CAAiB,CAAC,UAAU,EAAE,WAAW;EACtD;;;;;;;;;AAiBI,uBAAW,GAAG,IAAI,+EAAuC,CAAC,MAAM;AAChE,iBAAK,GAAG,iBAAW,OAAO;AAC1B,mBAAQ,CAAC,AAiFC,IAAO,oBAjFR,WAAK;AACd,0CAA8B,GAAG,IAAI,+DAAkC,CAAC,AAgF9D,IAAO,oBAhFuD,WAAK,8DAAE,eAAU,WAAW,YAAY,CAAU,kEAAU,EAAE,eAAU,SAAS,YAAY,yDAAG,eAAU,WAAW,YAAY,CAAU,4DAAc,EAAE,eAAU,SAAS,YAAY,EAAE,QAAO,MAAM;AACjR,UAAI,MAAc,AA+ER,IAAO,SA/ES;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAAG,AAAI,AA2EJ,IAAO,SA3ES,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,mBAAO,GAAG,AAAI,AAyEJ,IAAO,SAzES,CAAC;AAC3B,UAAa,UAAU,AAAI,AAwEjB,IAAO,SAxEsB,CAAC;AACxC,uBAAW,OAAO,CAAC,oCAA8B,EAAE,CACjD,oBAAC,WAAK,EAAE,aAAO,EAAE,OAAO;AAE1B,UAAM,iBAAiB,oCAA8B,QAAQ,OAAO,CAAC,kBAAa,CAoExE,IAAO,UAAP,IAAO,UApEkE,oCAAmB;AACtG,eAAI,CAAC,CAAC,WAAK,GAAG,CAAC,cAAc;AAC7B,YAAO;IACT;;AAIE,UAA2B,OAAO,QAAG;AACrC,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAwB,4CAAa,WAAM,QAAC;AAC5C,aAAO,GAAG;AACV,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,UAAM,YAAY,IAAI,WAAW,SAAS,CAAC,UAAU;AACrD,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,WAAK,EAAE,YAAY,SAAS;AAC5C,qBAAO,GAAG,SAAS;;AAErB,uBAAW,kBAAkB,CAAC,UAAU;AACxC,UAAM,YAhLU,AAgLE,AAAS,iCAhLH,aAgLe,CAAC,UAAU,MAAM;AACxD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;AAErB,UAAM,YArLU,AAqLE,AAAS,iCArLH,aAqLe,CAAC,UAAU,OAAO;AACzD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;AAErB,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;AACX,0CAA8B,YAAY;IAC5C;0BAEyB,MAAM;AAC7B,UAAwB,4CAAa,WAAM,QAAC;AAC5C,cAAG,iBAAiB,CAAC,UAAU;IACjC;;8DA/DmB,UAA2B,EAAE,WAAe;IAT/C,WAAK;IACmB,iBAAW;IAChB,oCAA8B;IACjD,WAAK;IACR,aAAO;IACP,aAAO;IACf,aAAO;IACR,aAAO;IACP,aAAO;AACwD,yEAAM,qCAAiB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACrL,sBAAa,GAAG,0CAAiB,YAAY;EAC/C;;;;;;;;;;;4BAsFY,IAAO;;;4BAAP,IAAO;8BAAP,IAAO;8BAAP,IAAO;;;;;gEAtBmC,UAA2B,EAAE,WAAe;AAClG,UAAO,KAAI,+CAAkB,CAAC,UAAU,EAAE,WAAW;EACvD;;;AAgBI,uBAAW,GAAG,IAAI,+EAAuC,CAAC,MAAM;AAChE,iBAAK,GAAG,iBAAW,OAAO;AAC1B,mBAAQ,CAAC,AAEC,IAAO,oBAFR,WAAK;AACd,0CAA8B,GAAG,IAAI,+DAAkC,CAAC,AAC9D,IAAO,oBADuD,WAAK,8DAAE,eAAU,WAAW,YAAY,CAAU,kEAAU,EAAE,eAAU,SAAS,YAAY,yDAAG,eAAU,WAAW,YAAY,CAAU,4DAAc,EAAE,eAAU,SAAS,YAAY,EAAE,QAAO,MAAM;AACjR,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAJG,AAIA,AAAI,IAJG,SAIS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,mBAAO,GANG,AAMA,AAAI,IANG,SAMS,CAAC;AAC3B,UAAa,UAPH,AAOa,AAAI,IAPV,SAOsB,CAAC;AACxC,uBAAW,OAAO,CAAC,oCAA8B,EAAE,CACjD,oBAAC,WAAK,EAAE,aAAO,EAAE,OAAO;AAE1B,UAAM,iBAAiB,oCAA8B,QAAQ,OAAO,CAAC,kBAAa,CAXxE,IAAO,UAAP,IAAO,UAWkE,oCAAmB;AACtG,eAAI,CAAC,CAAC,WAAK,GAAG,CAAC,cAAc;AAC7B,YAAO;IACT;;AAIE,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAwB,4CAAa,WAAM,QAAC;AAC5C,aAAO,GAAG;AACV,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,kBAAkB,CAAC,UAAU;AACxC,UAAM,YAzPU,AAyPE,AAAS,iCAzPH,aAyPe,CAAC,UAAU,MAAM;AACxD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;AAErB,UAAM,YA9PU,AA8PE,AAAS,iCA9PH,aA8Pe,CAAC,UAAU,OAAO;AACzD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;AAErB,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;AACX,0CAA8B,YAAY;IAC5C;0BAEyB,MAAM;AAC7B,UAAwB,4CAAa,WAAM,QAAC;AAC5C,cAAG,gBAAgB,CAAC,UAAU;IAChC;;8DAzDmB,UAA2B,EAAE,WAAe;IAR/C,WAAK;IACmB,iBAAW;IAChB,oCAA8B;IACjD,WAAK;IACR,aAAO;IACP,aAAO;IAChB,aAAO;IACP,aAAO;AACwD,yEAAM,qCAAiB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACrL,sBAAa,GAAG,0CAAiB,YAAY;EAC/C;;;;;;;;;;;4BAOY,IAAO;;;4BAAP,IAAO;8BAAP,IAAO;8BAAP,IAAO;;;;gEAmDmC,UAA2B,EAAE,WAAe;AAClG,UAAO,KAAI,+CAAkB,CAAC,UAAU,EAAE,WAAW;EACvD;;MAEoB,gDAAuB;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyB1C,UAAK,iCAAgC,IAAI,MAAO;AAC9C,QAAC,iCAA2B,GAAG,wCAAO,qCAAM,+CAAyB,mBAAkB,kBAAe,qCAAM,+CAAyB,mBAAkB,sBAAsB,qCAAM,wCAAkB,CAAC,OAAO,mBAAc,qCAAM,+CAAyB,mBAAkB,qBAAqB,qCAAM,wCAAkB,CAAC,SAAS,qBAAgB,qCAAM,+CAAyB,mBAAkB,0BAA0B,qCAAM,wCAAkB,CAAC,OAAO,mBAAc,uCAAM,+CAAyB,mBAAkB,yBAAyB,qCAAM,wCAAkB,CAAC,OAAO,wBAAsB,qCAAM,wCAAkB,CAAC,OAAO,mBAAc,uCAAM,+CAAyB,mBAAkB,wBAAwB,uCAAM,wCAAkB,CAAC,SAAS,0BAAwB,uCAAM,wCAAkB,CAAC,OAAO;;AAE/xB,YAAO,kCAAgC;IACzC;;AAGE,UAAK,kBAAiB,IAAI,MAAO;AAC/B,QAAC,kBAAY,GAAG,AAAS,wCAAS;;AAEpC,YAAO,mBAAiB;IAC1B;;AAGE,UAAK,sBAAqB,IAAI,MAAO;AACnC,QAAC,sBAAgB,GAAG,AAAS,uDAAgB,4DAAC,gBAAgB,CAAU,kEAAU,EAAE,aAAa,YAAY,EAAE,kDAAO,gBAAgB,CAAU,iDAAQ,EAAE,aAAa,YAAY,EAAE,+CAAO,gBAAgB,CAAU,8CAAM,EAAE,aAAa,YAAY,IA/F/O,AA+FkP,IA/F3O,eA+F2O,iBAAgB;;AAE5Q,YAAO,uBAAqB;IAC9B;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG,IAAI,2EAA+B,4DAAC,gBAAgB,CAAU,kEAAe,EAAE,aAAa,YAAY,+DAAG,qBAAoB;;AAEjK,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAS,0CAAW;;AAEzC,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAI,uCAAiB,CApHhC,AAoHiC,IApH1B,iBAoH0B,oBAAmB,8DAAE,qBAAoB;;AAEpF,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,wBAAuB,IAAI,MAAO;AACrC,QAAC,wBAAkB,GAAG,IAAI,+DAA4B,wCAAC,gBAAgB,CAAU,8CAAM,EAAE,aAAa,YAAY;;AAEpH,YAAO,yBAAuB;IAChC;;AAGE,UAAK,iCAAgC,IAAI,MAAO;AAC9C,QAAC,iCAA2B,GAAG,AAAS,iDAAuB,CAAC,gBAAgB,CAAC,uCAAM,2CAAoB,CAAC,2BAAyB,aAAa,YAAY,EAAE;;AAElK,YAAO,kCAAgC;IACzC;;AAGE,UAAK,mCAAkC,IAAI,MAAO;AAChD,QAAC,mCAA6B,GAAG,AAAS,mDAAyB,CAzI3D,AAyI4D,IAzIrD,iBAyIqD,oBAAmB,GAAE,gBAAgB,CAAC,uCAAM,2CAAoB,CAAC,6BAA2B,aAAa,YAAY,EAAE;;AAE7L,YAAO,oCAAkC;IAC3C;;AAGE,UAAK,6BAA4B,IAAI,MAAO;AAC1C,QAAC,6BAAuB,GAAG,AAAS,6CAAmB,oBAAC,gCAA+B,GAhJ/E,AAgJiF,IAhJ1E,oBAgJ0E,kCAAiC,GAAE,gBAAgB,CAAC,uCAAM,2CAAoB,CAAC,uBAAqB,aAAa,YAAY,EAAE;;AAE1N,YAAO,8BAA4B;IACrC;;AAGE,UAAK,2BAA0B,IAAI,MAAO;AACxC,QAAC,2BAAqB,GAAG;;AAE3B,YAAO,4BAA0B;IACnC;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG;;AAElC,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,+BAA8B,IAAI,MAAO;AAC5C,QAAC,+BAAyB,GAAG,IAAI,2EAA2B,CArKpD,AAqKqD,IArK9C,iBAqK8C,oBAAmB;;AAElF,YAAO,gCAA8B;IACvC;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAI,wCAAiB;;AAE1C,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,oCAAmC,IAAI,MAAO;AACjD,QAAC,oCAA8B,GAAG,IAAI,sFAAgC,CAAC,8BAA6B,EAnL5F,AAmL8F,IAnLvF,oBAmLuF,4BAA2B,sBAAE,gCAA+B,GAAE,oBAAmB,6DAAE,qBAAoB,GAAE,iCAAgC,EAAE,0BAAyB,EAAE,iCAAgC,EAAE,oBAAmB;;AAEnU,YAAO,qCAAmC;IAC5C;;AAGE,UAAK,2BAA0B,IAAI,MAAO;AACxC,QAAC,2BAAqB,GAAG,IAAI,0DAAuB,wCAAC,gBAAgB,CAAU,8CAAM,EAAE,aAAa,YAAY,IAAG,0BAAyB,EAAE,mCAAkC,gEAAE,gBAAgB,CAAU,qEAAc,EAAE,aAAa,YAAY,EAAE;;AAEzP,YAAO,4BAA0B;IACnC;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG,IAAI,gEAA8B,CAAC,oBAAmB;;AAExF,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,kBAAiB,IAAI,MAAO;AAC/B,QAAC,kBAAY,GAAG,uCAAM,eAAc;;AAEtC,YAAO,mBAAiB;IAC1B;;AAIE,uBAAW,GAAG,IAAI,8CAAiB,CAAC,MAAM;AAC1C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,6BAAiB,GAAG,IAAI,+BAAoB;AAC5C,uBAAW,OAAO,CAAC,uBAAiB,EAAE,qBAAgB;AACtD,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,kCAAkC,CAAC,GAAG,MAAM,WAAM,EAAE,uBAAiB;IAClF;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAqD,CAAC,+BAA8B,MAAK,SAAS,EAAI;AAChI,cAAO,iCAA0B;;AAEnC,UAAK,AAAU,KAAK,KAAU,cA5NpB,IAAO,QA4NmB,IAAM,MAAK,SAAS,EAAI;AAC1D,cAAO,kBAAW;;AAEpB,UAAK,AAAU,KAAK,KAAW,kEAAU,IAAM,MAAK,SAAS,EAAI;AAC/D,cAAO,sBAAe;;AAExB,UAAK,AAAU,KAAK,KAAW,sFAAsB,IAAM,MAAK,SAAS,EAAI;AAC3E,cAAO,kCAA2B;;AAEpC,UAAK,AAAU,KAAK,KAAU,cArOpB,IAAO,UAqOqB,IAAM,MAAK,SAAS,EAAI;AAC5D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAW,kDAAQ,IAAM,MAAK,SAAS,EAAI;AAC7D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAW,0EAAW,IAAM,MAAK,SAAS,EAAI;AAChE,cAAO,wBAAiB;;AAE1B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,8BAA6B,MAAK,SAAS,EAAI;AAC9F,cAAO,iCAA0B;;AAEnC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,gCAA+B,MAAK,SAAS,EAAI;AAChG,cAAO,mCAA4B;;AAErC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,0BAAyB,MAAK,SAAS,EAAI;AAC1F,cAAO,6BAAsB;;AAE/B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,wBAAuB,MAAK,SAAS,EAAI;AACxF,cAAO,2BAAoB;;AAE7B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,+BAA8B,MAAK,SAAS,EAAI;AAC/F,cAAO,kCAA2B;;AAEpC,UAAK,AAAU,KAAK,KAAW,sFAAkB,IAAM,MAAK,SAAS,EAAI;AACvE,cAAO,+BAAwB;;AAEjC,UAAK,AAAU,KAAK,KAAW,mDAAQ,IAAM,MAAK,SAAS,EAAI;AAC7D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAW,iGAAuB,IAAM,MAAK,SAAS,EAAI;AAC5E,cAAO,oCAA6B;;AAEtC,UAAK,AAAU,KAAK,KAAW,qEAAc,IAAM,MAAK,SAAS,EAAI;AACnE,cAAO,2BAAoB;;AAE7B,UAAK,AAAU,KAAK,KAAW,2EAAqB,IAAM,MAAK,SAAS,EAAI;AAC1E,cAAO,kCAA2B;;AAEpC,WAAM,AAAU,KAAK,KAAW,0BAAK,IAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,uEAAsE,MAAK,SAAS,EAAI;AAC5K,cAAO,kBAAW;;AAEpB,YAAO,eAAc;IACvB;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,+BAAiB,SAAS;;AAE5B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;kEAhNuB,UAA2B,EAAE,WAAe;IApBjD,iBAAW;IACR,uBAAiB;IACN,iCAA2B;IACnD,kBAAY;IACZ,sBAAgB;IACQ,kCAA4B;IACpD,qBAAe;IACL,qBAAe;IACJ,wBAAkB;IACvC,iCAA2B;IAC3B,mCAA6B;IAC7B,6BAAuB;IAC1B,2BAAqB;IACrB,kCAA4B;IACL,+BAAyB;IACnC,qBAAe;IACA,oCAA8B;IACvC,2BAAqB;IACd,kCAA4B;IAC5C,kBAAY;AAC4C,6EAAM,qCAAiB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oEAmNlI,UAA2B,EAAE,WAAe;AAChF,UAAO,KAAI,mDAAsB,CAAC,UAAU,EAAE,WAAW;EAC3D;;MAE6C,8CAAqB;YAAG,gBAAM,sCAAsC,CAAC,UAAU,yFAA6B,EAAE,8CAAqB;;MAC1K,8CAAqB;YAAG;;MAC1B,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAO,oCAAiB,CAAC,0CAAY,EAAE,8CAAqB;AAC5D,IAAM,gCAAa;AACnB,IAAM,2CAAa;EACrB","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
