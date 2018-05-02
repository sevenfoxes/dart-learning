define(['dart_sdk', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/material_tree/group/material_tree_group', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/material_radio/material_radio.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, select, selection_container, has_factory, angular, selection_model, selection_options, async, disposer, view_type, change_detection, modules, material_tree_group, button_decorator, button_decorator$, dom_service, keyboard_only_focus_indicator, material_checkbox, material_checkbox$, material_icon, material_icon$, dynamic_component, dynamic_component$, material_dropdown_base, selection_options$, keyboard_only_focus_indicator$, material_dropdown_base$, material_radio, ng_zone, material_radio$, material_input, material_input$, deferred_validator, directives, material_input_default_value_accessor, reference, focus, base_material_input, material_popup, dom_popup_source, popup_hierarchy, material_popup$, overlay_ref, zindexer, alignment, deferred_content, deferred_content_aware, deferred_content$, focus$, alignment$, has_renderer, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
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
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__material_tree__group__material_tree_group = material_tree_group.src__material_tree__group__material_tree_group;
  const src__material_tree__material_tree_root = material_tree_group.src__material_tree__material_tree_root;
  const src__material_tree__group__material_tree_group_flat = material_tree_group.src__material_tree__group__material_tree_group_flat;
  const src__material_tree__material_tree_impl = material_tree_group.src__material_tree__material_tree_impl;
  const src__material_tree__material_tree_filter = material_tree_group.src__material_tree__material_tree_filter;
  const src__material_tree__material_tree_dropdown = material_tree_group.src__material_tree__material_tree_dropdown;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const model__selection__selection_options = selection_options$.model__selection__selection_options;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const material_radio__material_radio_group$46template = material_radio.material_radio__material_radio_group$46template;
  const material_radio__material_radio$46template = material_radio.material_radio__material_radio$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const material_radio__material_radio_group = material_radio$.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio$.material_radio__material_radio;
  const material_input__material_input = material_input.material_input__material_input;
  const material_input__material_input$46template = material_input$.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus = focus.focus__focus;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const src__material_tree__material_tree_expand_state$46template = Object.create(_root);
  const src__material_tree__material_tree_root$46template = Object.create(_root);
  const src__material_tree__material_tree_node$46template = Object.create(_root);
  const src__material_tree__group__material_tree_group$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__group__material_tree_group$46template = Object.create(_root);
  const src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__group__material_tree_group_flat$46template = Object.create(_root);
  const src__material_tree__material_tree_rendering_options$46template = Object.create(_root);
  const src__material_tree__material_tree_impl$46template = Object.create(_root);
  const src__material_tree__material_tree_filter$46template = Object.create(_root);
  const src__material_tree__material_tree_dropdown$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__material_tree_dropdown$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  const $text = dartx.text;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialTreeGroupComponent = () => (AppViewOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupComponent = () => (ComponentRefOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTreeGroupComponent = () => (ComponentFactoryOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let AppViewOfMaterialTreeGroupFlatListComponent = () => (AppViewOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupFlatListComponent = () => (ComponentRefOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let ComponentFactoryOfMaterialTreeGroupFlatListComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let AppViewOfMaterialTreeGroupFlatRadioComponent = () => (AppViewOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatRadioComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let ListOfMaterialRadioComponent = () => (ListOfMaterialRadioComponent = dart.constFn(core.List$(material_radio__material_radio.MaterialRadioComponent)))();
  let _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = () => (_ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1])))();
  let ComponentRefOfMaterialTreeGroupFlatRadioComponent = () => (ComponentRefOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let AppViewOfMaterialTreeGroupFlatCheckComponent = () => (AppViewOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatCheckComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupFlatCheckComponent = () => (ComponentRefOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let AppViewOfMaterialTreeComponent = () => (AppViewOfMaterialTreeComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeComponent = () => (AppViewAndintToAppViewOfMaterialTreeComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialTreeGroupComponent = () => (JSArrayOfMaterialTreeGroupComponent = dart.constFn(_interceptors.JSArray$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let ListOfMaterialTreeGroupComponent = () => (ListOfMaterialTreeGroupComponent = dart.constFn(core.List$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2])))();
  let _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1])))();
  let ComponentRefOfMaterialTreeComponent = () => (ComponentRefOfMaterialTreeComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let ComponentFactoryOfMaterialTreeComponent = () => (ComponentFactoryOfMaterialTreeComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let AppViewOfMaterialTreeFilterComponent = () => (AppViewOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeFilterComponent = () => (AppViewAndintToAppViewOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeFilterComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialInputComponent = () => (JSArrayOfMaterialInputComponent = dart.constFn(_interceptors.JSArray$(material_input__material_input.MaterialInputComponent)))();
  let ListOfMaterialInputComponent = () => (ListOfMaterialInputComponent = dart.constFn(core.List$(material_input__material_input.MaterialInputComponent)))();
  let _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = () => (_ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = dart.constFn(dart.fnType(ListOfMaterialInputComponent(), [src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1])))();
  let ComponentRefOfMaterialTreeFilterComponent = () => (ComponentRefOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let ComponentFactoryOfMaterialTreeFilterComponent = () => (ComponentFactoryOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let AppViewOfMaterialTreeDropdownComponent = () => (AppViewOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeDropdownComponent = () => (AppViewAndintToAppViewOfMaterialTreeDropdownComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeDropdownComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let JSArrayOfMaterialTreeFilterComponent = () => (JSArrayOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let ListOfMaterialTreeFilterComponent = () => (ListOfMaterialTreeFilterComponent = dart.constFn(core.List$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3])))();
  let _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4])))();
  let JSArrayOfListOfMaterialTreeFilterComponent = () => (JSArrayOfListOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(ListOfMaterialTreeFilterComponent())))();
  let ComponentRefOfMaterialTreeDropdownComponent = () => (ComponentRefOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  let ComponentFactoryOfMaterialTreeDropdownComponent = () => (ComponentFactoryOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  src__material_tree__material_tree_expand_state$46template.initReflector = function() {
  };
  dart.defineLazy(src__material_tree__material_tree_root$46template, {
    /*src__material_tree__material_tree_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_root$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_root$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_root$46template._visited = true;
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_node$46template, {
    /*src__material_tree__material_tree_node$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_node$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_node$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_node$46template._visited = true;
    angular$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    src__material_tree__material_tree_expand_state$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group$46scss$46css$46shim.styles*/get styles() {
      return dart.constList(["._nghost-%COMP%:first-of-type li:first-of-type._ngcontent-%COMP% .root-border._ngcontent-%COMP% { opacity:0; } .material-tree-border._ngcontent-%COMP% { background:#e0e0e0; display:none; height:1px; left:0; pointer-events:none; position:absolute; right:0; top:0; } ul._ngcontent-%COMP% { list-style:none; margin:0; padding:0; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP% { display:block; font-family:inherit; font-size:15px; line-height:32px; padding:0 24px; position:relative; white-space:nowrap; display:flex; align-items:center; color:rgba(0, 0, 0, 0.87); cursor:pointer; padding-right:16px; } ul._ngcontent-%COMP% .material-tree-item.disabled._ngcontent-%COMP% { pointer-events:none; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP%  .material-list-item-primary { color:rgba(0, 0, 0, 0.54); width:40px; } ul._ngcontent-%COMP% .material-tree-item.disabled._ngcontent-%COMP%  .material-list-item-primary { color:rgba(0, 0, 0, 0.38); } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP%  .material-list-item-secondary { color:rgba(0, 0, 0, 0.54); margin-left:auto; } ul._ngcontent-%COMP% .material-tree-item.disabled._ngcontent-%COMP%  .material-list-item-secondary { color:rgba(0, 0, 0, 0.38); } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP%  .submenu-icon { transform:rotate(-90deg); } ul._ngcontent-%COMP% .material-tree-item:not([separator=present]):hover._ngcontent-%COMP%,ul._ngcontent-%COMP% .material-tree-item:not([separator=present]):focus._ngcontent-%COMP%,ul._ngcontent-%COMP% .material-tree-item:not([separator=present]).active._ngcontent-%COMP% { background:#eee; } ul._ngcontent-%COMP% .material-tree-item:not([separator=present]).disabled._ngcontent-%COMP% { background:none; color:rgba(0, 0, 0, 0.38); cursor:default; pointer-events:all; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP% > .material-tree-shift._ngcontent-%COMP% { position:relative; flex-grow:1; display:flex; align-items:center; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP% > .material-tree-shift._ngcontent-%COMP% > *._ngcontent-%COMP% { flex-shrink:0; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP% > .material-tree-shift._ngcontent-%COMP% .tree-selection-state._ngcontent-%COMP% + .material-tree-border._ngcontent-%COMP% { left:40px; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP% .tree-expansion-state._ngcontent-%COMP% { display:inline-flex; margin-left:auto; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP% .tree-selection-state._ngcontent-%COMP% { display:inline-flex; vertical-align:middle; width:40px; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP% .disabled-item._ngcontent-%COMP% { color:#9e9e9e; } ul._ngcontent-%COMP% .material-tree-item._ngcontent-%COMP% material-icon._ngcontent-%COMP% { opacity:0.54; } .view-more-link-item._ngcontent-%COMP% { padding:8px 0; } .view-more-link._ngcontent-%COMP% { color:#4285f4; text-decoration:none; }"], dart.dynamic);
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponent*/get styles$MaterialTreeGroupComponent() {
      return dart.constList([src__material_tree__group__material_tree_group$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0 = class ViewMaterialTreeGroupComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", parentRenderNode));
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.visibleGroup;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_1_9].ngDoCheck();
      this[_NgIf_2_9].ngIf = _ctx.viewMoreLinkVisible;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, "material-tree-group", this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group"));
    this.createAttr(this.rootEl, "role", "group");
    let t = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__),
    [_el_0]: dart.fieldType(html.UListElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, {
    /*src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(parentView, parentIndex);
  };
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _el_4 = Symbol('_el_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _appEl_8 = Symbol('_appEl_8');
  const _NgFor_8_9 = Symbol('_NgFor_8_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_12 = Symbol('_expr_12');
  const _handle_click_0_1 = Symbol('_handle_click_0_1');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1 = class _ViewMaterialTreeGroupComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("li");
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "material-tree-option";
      this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimE(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "material-tree-item";
      this.createAttr(this[_el_1], "role", "treeitem");
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = "material-tree-shift";
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_4].className = "material-tree-border";
      this.addShimC(this[_el_4]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 2, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 2, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 2, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _anchor_8 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_8);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgFor_8_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_8], _TemplateRef_8_8);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]("$implicit");
      this[_NgIf_3_9].ngIf = _ctx.showCheckbox(local_option);
      this[_NgIf_5_9].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_6_9].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_NgIf_7_9].ngIf = _ctx.hasChildren(local_option);
      let currVal_12 = _ctx.getChildGroups(local_option);
      if (!core.identical(this[_expr_12], currVal_12)) {
        this[_NgFor_8_9].ngForOf = currVal_12;
        this[_expr_12] = currVal_12;
      }
      this[_NgFor_8_9].ngDoCheck();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "selected", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "selectable", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_2 = _ctx.getIndent(local_option);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_el_1].style[$setProperty]("padding-left", currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.isSelected(local_option));
      if (!core.identical(this[_expr_3], currVal_3)) {
        this.setAttr(this[_el_1], "aria-selected", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      if (firstCheck) {
        if (!(_ctx.fixedPadding == null)) {
          this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding == null ? null : dart.toString(_ctx.fixedPadding));
        }
      }
      let currVal_6 = _ctx.hasChildren(local_option);
      if (!(this[_expr_6] == currVal_6)) {
        this.updateClass(this[_el_4], "is-parent", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.isExpanded(local_option);
      if (!(this[_expr_7] == currVal_7)) {
        this.updateClass(this[_el_4], "is-expanded", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.level === 0;
      if (!(this[_expr_8] === currVal_8)) {
        this.updateClass(this[_el_4], "root-border", currVal_8);
        this[_expr_8] = currVal_8;
      }
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_6];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_7];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_8];
      t$2 == null ? null : t$2.destroyNestedViews();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = this.locals[$_get]("$implicit");
      this.ctx.handleSelectionOrExpansion(html.Event._check($event), local_option);
    }
    [_handle_click_0_1]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].hideOutline();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_el_4] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8] = null;
    this[_NgFor_8_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_12] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_4]: dart.fieldType(html.DivElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_8_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.new(parentView, parentIndex);
  };
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2 = class _ViewMaterialTreeGroupComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "tree-selection-state";
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      this[_NgIf_1_9].ngIf = _ctx.isMultiSelect;
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.isMultiSelect) && dart.test(_ctx.isSelected(local_option));
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _MaterialCheckboxComponent_0_5 = Symbol('_MaterialCheckboxComponent_0_5');
  let const$0;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3 = class _ViewMaterialTreeGroupComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "tree-selection-state themeable";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, null, null, null);
      this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      if (firstCheck) {
        this[_MaterialCheckboxComponent_0_5].readOnly = true;
        changed = true;
      }
      let currVal_0 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialCheckboxComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_2 = _ctx.isSelected(local_option);
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialCheckboxComponent_0_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialCheckboxComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4 = class _ViewMaterialTreeGroupComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "tree-selection-state";
      this.createAttr(this[_el_0], "icon", "check");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_5].icon = "check";
        changed = true;
      }
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
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.new(parentView, parentIndex);
  };
  const _appEl_0 = Symbol('_appEl_0');
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5 = class _ViewMaterialTreeGroupComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "item component";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], []);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_DynamicComponent_0_8].value = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8].ngAfterChanges();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6 = class _ViewMaterialTreeGroupComponent6 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "text";
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = !dart.test(_ctx.showDisabledCheckbox(local_option));
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "item", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.showDisabledCheckbox(local_option);
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "disabled-item", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_1][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_6 = Symbol('_MaterialIconComponent_0_6');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7 = class _ViewMaterialTreeGroupComponent7 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "tree-expansion-state";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_1 = dart.test(_ctx.isExpanded(local_option)) ? "expand_less" : "expand_more";
      if (!(this[_expr_1] === currVal_1)) {
        this[_MaterialIconComponent_0_6].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded(local_option);
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], "expanded", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = this.parentView.locals[$_get]("$implicit");
      this.ctx.handleExpansion(html.Event._check($event), local_option);
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.new(parentView, parentIndex);
  };
  const _MaterialTreeGroupComponent_0_5 = Symbol('_MaterialTreeGroupComponent_0_5');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  let const$1;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8 = class _ViewMaterialTreeGroupComponent8 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "child-tree";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialTreeGroupComponent_0_5] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.viewData.parentIndex, null)), core.int._check(this.parentView.parentView.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.parentView.parentView.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_subGroup = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = local_subGroup;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialTreeGroupComponent_0_5].group = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.notNull(_ctx.level) + 1;
      if (!(this[_expr_1] === currVal_1)) {
        this[_MaterialTreeGroupComponent_0_5].level = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.showCheckbox(local_option);
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialTreeGroupComponent_0_5].parentHasCheckbox = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.allowParentSingleSelection;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialTreeGroupComponent_0_5].allowParentSingleSelection = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.maxInitialOptionsShown;
      if (!(this[_expr_4] == currVal_4)) {
        this[_MaterialTreeGroupComponent_0_5].maxInitialOptionsShown = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.expandAll;
      if (!(this[_expr_5] == currVal_5)) {
        this[_MaterialTreeGroupComponent_0_5].expandAll = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeGroupComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.new(parentView, parentIndex);
  };
  const _el_3 = Symbol('_el_3');
  const _ButtonDirective_3_5 = Symbol('_ButtonDirective_3_5');
  const _text_4 = Symbol('_text_4');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9 = class _ViewMaterialTreeGroupComponent9 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("li");
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "view-more-link-item";
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = "material-tree-shift";
      this.addShimC(this[_el_2]);
      this[_el_3] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_2]));
      this.createAttr(this[_el_3], "buttonDecorator", "");
      this[_el_3].className = "view-more-link";
      this.createAttr(this[_el_3], "href", "#");
      this.addShimC(this[_el_3]);
      this[_ButtonDirective_3_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_3], null));
      this[_text_4] = html.Text.new(this.ctx.viewMoreMsg != null ? this.ctx.viewMoreMsg : "");
      this[_el_3][$append](this[_text_4]);
      this[_el_3][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleClick')));
      this[_el_3][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_3_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'viewMoreOptions')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_3_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_el_1].style[$setProperty]("padding-left", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        if (!(_ctx.fixedPadding == null)) {
          this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding == null ? null : dart.toString(_ctx.fixedPadding));
        }
      }
      this[_ButtonDirective_3_5].detectHostChanges(this, this[_el_3]);
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_ButtonDirective_3_5] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.AnchorElement),
    [_ButtonDirective_3_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponentHost*/get styles$MaterialTreeGroupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  let const$2;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0 = class _ViewMaterialTreeGroupComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeGroupComponent_0_5] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), core.int._check(this.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeGroupComponent_0_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.MaterialTreeGroupComponentNgFactory*/get MaterialTreeGroupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupComponent()).new("material-tree-group", dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0, AppViewAndintToAppView()), src__material_tree__group__material_tree_group$46template._MaterialTreeGroupComponentMetadata));
    },
    /*src__material_tree__group__material_tree_group$46template._MaterialTreeGroupComponentMetadata*/get _MaterialTreeGroupComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__group__material_tree_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__group__material_tree_group$46template.initReflector = function() {
    if (dart.test(src__material_tree__group__material_tree_group$46template._visited)) {
      return;
    }
    src__material_tree__group__material_tree_group$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), src__material_tree__group__material_tree_group$46template.MaterialTreeGroupComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    src__material_tree__material_tree_node$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim.styles*/get styles() {
      return dart.constList(["div._ngcontent-%COMP% { display:block; font-family:inherit; font-size:15px; line-height:32px; padding:0 24px; position:relative; white-space:nowrap; } div.disabled._ngcontent-%COMP% { pointer-events:none; } div._ngcontent-%COMP%  .material-list-item-primary { color:rgba(0, 0, 0, 0.54); width:40px; } div.disabled._ngcontent-%COMP%  .material-list-item-primary { color:rgba(0, 0, 0, 0.38); } div._ngcontent-%COMP%  .material-list-item-secondary { color:rgba(0, 0, 0, 0.54); margin-left:auto; } div.disabled._ngcontent-%COMP%  .material-list-item-secondary { color:rgba(0, 0, 0, 0.38); } div._ngcontent-%COMP%  .submenu-icon { transform:rotate(-90deg); }"], dart.dynamic);
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim.styles*/get styles() {
      return dart.constList(["material-radio._ngcontent-%COMP% { display:block; font-family:inherit; font-size:15px; line-height:32px; padding:0 24px; position:relative; white-space:nowrap; display:flex; align-items:center; color:rgba(0, 0, 0, 0.87); cursor:pointer; } material-radio.disabled._ngcontent-%COMP% { pointer-events:none; } material-radio._ngcontent-%COMP%  .material-list-item-primary { color:rgba(0, 0, 0, 0.54); width:40px; } material-radio.disabled._ngcontent-%COMP%  .material-list-item-primary { color:rgba(0, 0, 0, 0.38); } material-radio._ngcontent-%COMP%  .material-list-item-secondary { color:rgba(0, 0, 0, 0.54); margin-left:auto; } material-radio.disabled._ngcontent-%COMP%  .material-list-item-secondary { color:rgba(0, 0, 0, 0.38); } material-radio._ngcontent-%COMP%  .submenu-icon { transform:rotate(-90deg); } material-radio:not([separator=present]):hover._ngcontent-%COMP%,material-radio:not([separator=present]):focus._ngcontent-%COMP%,material-radio:not([separator=present]).active._ngcontent-%COMP% { background:#eee; } material-radio:not([separator=present]).disabled._ngcontent-%COMP% { background:none; color:rgba(0, 0, 0, 0.38); cursor:default; pointer-events:all; }"], dart.dynamic);
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim.styles*/get styles() {
      return dart.constList(["material-checkbox._ngcontent-%COMP% { display:block; font-family:inherit; font-size:15px; line-height:32px; padding:0 24px; position:relative; white-space:nowrap; display:flex; align-items:center; color:rgba(0, 0, 0, 0.87); cursor:pointer; } material-checkbox.disabled._ngcontent-%COMP% { pointer-events:none; } material-checkbox._ngcontent-%COMP%  .material-list-item-primary { color:rgba(0, 0, 0, 0.54); width:40px; } material-checkbox.disabled._ngcontent-%COMP%  .material-list-item-primary { color:rgba(0, 0, 0, 0.38); } material-checkbox._ngcontent-%COMP%  .material-list-item-secondary { color:rgba(0, 0, 0, 0.54); margin-left:auto; } material-checkbox.disabled._ngcontent-%COMP%  .material-list-item-secondary { color:rgba(0, 0, 0, 0.38); } material-checkbox._ngcontent-%COMP%  .submenu-icon { transform:rotate(-90deg); } material-checkbox:not([separator=present]):hover._ngcontent-%COMP%,material-checkbox:not([separator=present]):focus._ngcontent-%COMP%,material-checkbox:not([separator=present]).active._ngcontent-%COMP% { background:#eee; } material-checkbox:not([separator=present]).disabled._ngcontent-%COMP% { background:none; color:rgba(0, 0, 0, 0.38); cursor:default; pointer-events:all; }"], dart.dynamic);
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent*/get styles$MaterialTreeGroupFlatListComponent() {
      return dart.constList([src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0$ = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0$ = Symbol('_expr_0');
  let const$3;
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0 = class ViewMaterialTreeGroupFlatListComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent()));
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
      this.init(const$3 || (const$3 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.group;
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0$].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, "material-tree-group", this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-list"));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(parentView, parentIndex);
  };
  const _el_0$ = Symbol('_el_0');
  const _appEl_1$ = Symbol('_appEl_1');
  const _NgIf_1_9$ = Symbol('_NgIf_1_9');
  const _appEl_2$ = Symbol('_appEl_2');
  const _NgIf_2_9$ = Symbol('_NgIf_2_9');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1 = class _ViewMaterialTreeGroupFlatListComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0$].className = "material-tree-option";
      this.addShimC(this[_el_0$]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$][$append](_anchor_1);
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent()));
      this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$][$append](_anchor_2);
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent()));
      this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2$];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.DivElement),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.new(parentView, parentIndex);
  };
  const _compView_0$ = Symbol('_compView_0');
  const _DynamicComponent_0_8$ = Symbol('_DynamicComponent_0_8');
  const _expr_1$ = Symbol('_expr_1');
  const _expr_2$ = Symbol('_expr_2');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2 = class _ViewMaterialTreeGroupFlatListComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "item component";
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_DynamicComponent_0_8$] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0$].ref, this[_appEl_0$]);
      this[_compView_0$].create(this[_DynamicComponent_0_8$], []);
      this.init0(this[_appEl_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_DynamicComponent_0_8$].componentType = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (!core.identical(this[_expr_1$], currVal_1)) {
        this[_DynamicComponent_0_8$].componentFactory = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2$], currVal_2)) {
        this[_DynamicComponent_0_8$].value = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8$].ngAfterChanges();
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0$];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8$].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_DynamicComponent_0_8$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.new(parentView, parentIndex);
  };
  const _text_1$ = Symbol('_text_1');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3 = class _ViewMaterialTreeGroupFlatListComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("span");
      this[_el_0$].className = "item text";
      this.addShimE(this[_el_0$]);
      this[_text_1$] = html.Text.new("");
      this[_el_0$][$append](this[_text_1$]);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_text_1$][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_text_1$] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_text_1$]: dart.fieldType(html.Text),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponentHost*/get styles$MaterialTreeGroupFlatListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatListComponent_0_5 = Symbol('_MaterialTreeGroupFlatListComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0 = class _ViewMaterialTreeGroupFlatListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialTreeGroupFlatListComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$].ref);
      this[_compView_0$].create(this[_MaterialTreeGroupFlatListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatListComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatListComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialTreeGroupFlatListComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0),
    [_MaterialTreeGroupFlatListComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatListComponentNgFactory*/get MaterialTreeGroupFlatListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatListComponent()).new("material-tree-group-flat-list", dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0, AppViewAndintToAppView()), src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentMetadata));
    },
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent*/get styles$MaterialTreeGroupFlatRadioComponent() {
      return dart.constList([src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _MaterialRadioGroupComponent_0_5 = Symbol('_MaterialRadioGroupComponent_0_5');
  const _query_MaterialRadioComponent_0_0_isDirty = Symbol('_query_MaterialRadioComponent_0_0_isDirty');
  const _NgFor_1_9$ = Symbol('_NgFor_1_9');
  let const$4;
  const _MaterialRadioComponent_0_5 = Symbol('_MaterialRadioComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0 = class ViewMaterialTreeGroupFlatRadioComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      parentRenderNode[$append](this[_el_0$]);
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialRadioGroupComponent_0_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent()));
      this[_NgFor_1_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1$], _TemplateRef_1_8);
      this[_compView_0$].create(this[_MaterialRadioGroupComponent_0_5], [JSArrayOfViewContainer().of([this[_appEl_1$]])]);
      this.init(const$4 || (const$4 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialRadioGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(_ctx.selectionModel == null)) {
          this[_MaterialRadioGroupComponent_0_5].valueSelection = _ctx.selectionModel;
          changed = true;
        }
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      let currVal_1 = _ctx.group;
      if (!core.identical(this[_expr_1$], currVal_1)) {
        this[_NgFor_1_9$].ngForOf = currVal_1;
        this[_expr_1$] = currVal_1;
      }
      this[_NgFor_1_9$].ngDoCheck();
      this[_appEl_1$].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialRadioComponent_0_0_isDirty])) {
        this[_MaterialRadioGroupComponent_0_5].list = this[_appEl_1$].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_0_0_isDirty] = false;
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0$];
      t$ == null ? null : t$.destroy();
      this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, "material-tree-group", this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialRadioGroupComponent_0_5] = null;
    this[_query_MaterialRadioComponent_0_0_isDirty] = true;
    this[_appEl_1$] = null;
    this[_NgFor_1_9$] = null;
    this[_expr_1$] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-radio"));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_0_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_0_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(parentView, parentIndex);
  };
  const _expr_3$ = Symbol('_expr_3');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1 = class _ViewMaterialTreeGroupFlatRadioComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      this[_compView_0$] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "material-tree-option tree-selection-state themeable";
      this.createAttr(this[_el_0$], "role", "option");
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0$]), this[_compView_0$].ref, src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.as(this.parentView)[_MaterialRadioGroupComponent_0_5], null, "option");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent()));
      this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent()));
      this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      this[_compView_0$].create(this[_MaterialRadioComponent_0_5], [JSArrayOfViewContainer().of([this[_appEl_1$], this[_appEl_2$]])]);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]("$implicit");
      changed = false;
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2$], currVal_2)) {
        this[_MaterialRadioComponent_0_5].value = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isReadOnly;
      if (!(this[_expr_3$] == currVal_3)) {
        this[_MaterialRadioComponent_0_5].disabled = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (!(this[_expr_0$] == currVal_0)) {
        this.updateElemClass(this[_el_0$], "selected", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (!(this[_expr_1$] == currVal_1)) {
        this.updateElemClass(this[_el_0$], "selectable", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.as(this.parentView)[_query_MaterialRadioComponent_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2$];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0$];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.new(parentView, parentIndex);
  };
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2 = class _ViewMaterialTreeGroupFlatRadioComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "item component";
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_DynamicComponent_0_8$] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$].ref, this[_appEl_0$]);
      this[_compView_0$].create(this[_DynamicComponent_0_8$], []);
      this.init0(this[_appEl_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_DynamicComponent_0_8$].componentType = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (!core.identical(this[_expr_1$], currVal_1)) {
        this[_DynamicComponent_0_8$].componentFactory = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2$], currVal_2)) {
        this[_DynamicComponent_0_8$].value = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8$].ngAfterChanges();
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0$];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8$].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_DynamicComponent_0_8$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.new(parentView, parentIndex);
  };
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3 = class _ViewMaterialTreeGroupFlatRadioComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("span");
      this[_el_0$].className = "item text";
      this.addShimE(this[_el_0$]);
      this[_text_1$] = html.Text.new("");
      this[_el_0$][$append](this[_text_1$]);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_text_1$][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_text_1$] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_text_1$]: dart.fieldType(html.Text),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponentHost*/get styles$MaterialTreeGroupFlatRadioComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatRadioComponent_0_5 = Symbol('_MaterialTreeGroupFlatRadioComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0 = class _ViewMaterialTreeGroupFlatRadioComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialTreeGroupFlatRadioComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0$].create(this[_MaterialTreeGroupFlatRadioComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatRadioComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatRadioComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialTreeGroupFlatRadioComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0),
    [_MaterialTreeGroupFlatRadioComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatRadioComponentNgFactory*/get MaterialTreeGroupFlatRadioComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent()).new("material-tree-group-flat-radio", dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0, AppViewAndintToAppView()), src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentMetadata));
    },
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent*/get styles$MaterialTreeGroupFlatCheckComponent() {
      return dart.constList([src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  let const$5;
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0 = class ViewMaterialTreeGroupFlatCheckComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent()));
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
      this.init(const$5 || (const$5 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.group;
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0$].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, "material-tree-group", this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-check"));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(parentView, parentIndex);
  };
  const _MaterialCheckboxComponent_0_5$ = Symbol('_MaterialCheckboxComponent_0_5');
  const _handle_checkedChange_0_0 = Symbol('_handle_checkedChange_0_0');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1 = class _ViewMaterialTreeGroupFlatCheckComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      this[_compView_0$] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "material-tree-option tree-selection-state themeable";
      this.createAttr(this[_el_0$], "role", "option");
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialCheckboxComponent_0_5$] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0$]), this[_compView_0$].ref, null, null, "option");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent()));
      this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent()));
      this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      this[_compView_0$].create(this[_MaterialCheckboxComponent_0_5$], [JSArrayOfViewContainer().of([this[_appEl_1$], this[_appEl_2$]])]);
      let subscription_0 = this[_MaterialCheckboxComponent_0_5$].onChecked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0$]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]("$implicit");
      changed = false;
      let currVal_2 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
      if (!(this[_expr_2$] === currVal_2)) {
        this[_MaterialCheckboxComponent_0_5$].disabled = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isSelected(local_option);
      if (!(this[_expr_3$] == currVal_3)) {
        this[_MaterialCheckboxComponent_0_5$].checked = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (!(this[_expr_0$] == currVal_0)) {
        this.updateElemClass(this[_el_0$], "selected", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (!(this[_expr_1$] == currVal_1)) {
        this.updateElemClass(this[_el_0$], "selectable", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2$];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0$];
      t$0 == null ? null : t$0.destroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_option = this.locals[$_get]("$implicit");
      this.ctx.setSelectionState(local_option, core.bool._check($event));
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialCheckboxComponent_0_5$] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5$]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2$]: dart.fieldType(core.bool),
    [_expr_3$]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.new(parentView, parentIndex);
  };
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2 = class _ViewMaterialTreeGroupFlatCheckComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "item component";
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_DynamicComponent_0_8$] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0$].ref, this[_appEl_0$]);
      this[_compView_0$].create(this[_DynamicComponent_0_8$], []);
      this.init0(this[_appEl_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_DynamicComponent_0_8$].componentType = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (!core.identical(this[_expr_1$], currVal_1)) {
        this[_DynamicComponent_0_8$].componentFactory = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2$], currVal_2)) {
        this[_DynamicComponent_0_8$].value = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8$].ngAfterChanges();
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0$];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8$].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_DynamicComponent_0_8$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.new(parentView, parentIndex);
  };
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3 = class _ViewMaterialTreeGroupFlatCheckComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("span");
      this[_el_0$].className = "item text";
      this.addShimE(this[_el_0$]);
      this[_text_1$] = html.Text.new("");
      this[_el_0$][$append](this[_text_1$]);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_text_1$][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_text_1$] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_text_1$]: dart.fieldType(html.Text),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponentHost*/get styles$MaterialTreeGroupFlatCheckComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatCheckComponent_0_5 = Symbol('_MaterialTreeGroupFlatCheckComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0 = class _ViewMaterialTreeGroupFlatCheckComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialTreeGroupFlatCheckComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0$].create(this[_MaterialTreeGroupFlatCheckComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatCheckComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatCheckComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialTreeGroupFlatCheckComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0),
    [_MaterialTreeGroupFlatCheckComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatCheckComponentNgFactory*/get MaterialTreeGroupFlatCheckComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent()).new("material-tree-group-flat-check", dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0, AppViewAndintToAppView()), src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentMetadata));
    },
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentMetadata*/get _MaterialTreeGroupFlatListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentMetadata*/get _MaterialTreeGroupFlatRadioComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentMetadata*/get _MaterialTreeGroupFlatCheckComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__group__material_tree_group_flat$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.initReflector = function() {
    if (dart.test(src__material_tree__group__material_tree_group_flat$46template._visited)) {
      return;
    }
    src__material_tree__group__material_tree_group_flat$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatListComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatRadioComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatCheckComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_radio__material_radio$46template.initReflector();
    material_radio__material_radio_group$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    src__material_tree__material_tree_node$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_rendering_options$46template, {
    /*src__material_tree__material_tree_rendering_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_rendering_options$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_rendering_options$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_rendering_options$46template._visited = true;
    model__selection__selection_options$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponent*/get styles$MaterialTreeComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_MaterialTreeGroupComponent_1_0_isDirty = Symbol('_query_MaterialTreeGroupComponent_1_0_isDirty');
  const _appEl_0$0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_1$0 = Symbol('_appEl_1');
  const _NgIf_1_9$0 = Symbol('_NgIf_1_9');
  const _expr_2$0 = Symbol('_expr_2');
  const _expr_3$0 = Symbol('_expr_3');
  const _expr_4$ = Symbol('_expr_4');
  let const$6;
  const _MaterialTreeGroupComponent_0_5$ = Symbol('_MaterialTreeGroupComponent_0_5');
  src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0 = class ViewMaterialTreeComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1$0] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_1_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
      this.init(const$6 || (const$6 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.supportsHierarchy;
      this[_NgIf_1_9$0].ngIf = !dart.test(_ctx.supportsHierarchy);
      this[_appEl_0$0].detectChangesInNestedViews();
      this[_appEl_1$0].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialTreeGroupComponent_1_0_isDirty])) {
        this.ctx.treeGroupNodes = this[_appEl_0$0].mapNestedViews(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, dart.fn(nestedView => nestedView[_appEl_0$0].mapNestedViews(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, dart.fn(nestedView => JSArrayOfMaterialTreeGroupComponent().of([nestedView[_MaterialTreeGroupComponent_0_5$]]), _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent())), _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent()));
        this[_query_MaterialTreeGroupComponent_1_0_isDirty] = false;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1$0];
      t$ == null ? null : t$.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_2 = this.ctx.role;
      if (!core.identical(this[_expr_2$0], currVal_2)) {
        this.setAttr(this.rootEl, "role", currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = dart.test(this.ctx.showFlatCheck) ? "true" : "false";
      if (!(this[_expr_3$0] === currVal_3)) {
        this.setAttr(this.rootEl, "aria-multiselectable", currVal_3[$toString]());
        this[_expr_3$0] = currVal_3;
      }
      let currVal_4 = dart.test(this.ctx.showFlatList) ? "true" : "false";
      if (!(this[_expr_4$] === currVal_4)) {
        this.setAttr(this.rootEl, "aria-readonly", currVal_4[$toString]());
        this[_expr_4$] = currVal_4;
      }
    }
  };
  (src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
    this[_appEl_0$0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1$0] = null;
    this[_NgIf_1_9$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$] = null;
    src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree"));
    let t = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
    t == null ? src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.None, src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType);
  }).prototype = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__),
    [_query_MaterialTreeGroupComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, {
    /*src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(parentView, parentIndex);
  };
  const _NgFor_0_9$ = Symbol('_NgFor_0_9');
  const _expr_0$0 = Symbol('_expr_0');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1 = class _ViewMaterialTreeComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this.init0(this[_appEl_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_NgFor_0_9$].ngDoCheck();
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.new(parentView, parentIndex);
  };
  const _el_0$0 = Symbol('_el_0');
  const _compView_0$0 = Symbol('_compView_0');
  const _expr_1$0 = Symbol('_expr_1');
  let const$7;
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2 = class _ViewMaterialTreeComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_MaterialTreeGroupComponent_0_5$] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), core.int._check(this.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.viewData.parentIndex, null)));
      this[_compView_0$0].create(this[_MaterialTreeGroupComponent_0_5$], []);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let local_optionIndex = core.int._check(this.locals[$_get]("index"));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_MaterialTreeGroupComponent_0_5$].group = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.allowParentSingleSelection;
      if (!(this[_expr_1$0] == currVal_1)) {
        this[_MaterialTreeGroupComponent_0_5$].allowParentSingleSelection = currVal_1;
        this[_expr_1$0] = currVal_1;
      }
      let currVal_2 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
      if (!(this[_expr_2$0] == currVal_2)) {
        this[_MaterialTreeGroupComponent_0_5$].maxInitialOptionsShown = currVal_2;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.shouldExpand(local_group, local_optionIndex);
      if (!(this[_expr_3$0] == currVal_3)) {
        this[_MaterialTreeGroupComponent_0_5$].expandAll = currVal_3;
        this[_expr_3$0] = currVal_3;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.as(this.parentView.parentView)[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5$].ngOnDestroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialTreeGroupComponent_0_5$] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "index", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5$]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(core.bool),
    [_expr_2$0]: dart.fieldType(core.int),
    [_expr_3$0]: dart.fieldType(core.bool)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.new(parentView, parentIndex);
  };
  const _appEl_2$0 = Symbol('_appEl_2');
  const _NgIf_2_9$0 = Symbol('_NgIf_2_9');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3 = class _ViewMaterialTreeComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$0] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_1_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2$0] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_2_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
      this.init([this[_appEl_0$0], this[_appEl_1$0], this[_appEl_2$0]], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.showFlatList;
      this[_NgIf_1_9$0].ngIf = _ctx.showFlatRadio;
      this[_NgIf_2_9$0].ngIf = _ctx.showFlatCheck;
      this[_appEl_0$0].detectChangesInNestedViews();
      this[_appEl_1$0].detectChangesInNestedViews();
      this[_appEl_2$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1$0];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_2$0];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1$0] = null;
    this[_NgIf_1_9$0] = null;
    this[_appEl_2$0] = null;
    this[_NgIf_2_9$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.new(parentView, parentIndex);
  };
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4 = class _ViewMaterialTreeComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this.init0(this[_appEl_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_NgFor_0_9$].ngDoCheck();
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatListComponent_0_5$ = Symbol('_MaterialTreeGroupFlatListComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5 = class _ViewMaterialTreeComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_MaterialTreeGroupFlatListComponent_0_5$] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0].ref);
      this[_compView_0$0].create(this[_MaterialTreeGroupFlatListComponent_0_5$], []);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_MaterialTreeGroupFlatListComponent_0_5$].group = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialTreeGroupFlatListComponent_0_5$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0),
    [_MaterialTreeGroupFlatListComponent_0_5$]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.new(parentView, parentIndex);
  };
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6 = class _ViewMaterialTreeComponent6 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this.init0(this[_appEl_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_NgFor_0_9$].ngDoCheck();
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatRadioComponent_0_5$ = Symbol('_MaterialTreeGroupFlatRadioComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7 = class _ViewMaterialTreeComponent7 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_MaterialTreeGroupFlatRadioComponent_0_5$] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0$0].create(this[_MaterialTreeGroupFlatRadioComponent_0_5$], []);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_MaterialTreeGroupFlatRadioComponent_0_5$].group = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialTreeGroupFlatRadioComponent_0_5$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0),
    [_MaterialTreeGroupFlatRadioComponent_0_5$]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.new(parentView, parentIndex);
  };
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8 = class _ViewMaterialTreeComponent8 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this.init0(this[_appEl_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_NgFor_0_9$].ngDoCheck();
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatCheckComponent_0_5$ = Symbol('_MaterialTreeGroupFlatCheckComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9 = class _ViewMaterialTreeComponent9 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_MaterialTreeGroupFlatCheckComponent_0_5$] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0$0].create(this[_MaterialTreeGroupFlatCheckComponent_0_5$], []);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_MaterialTreeGroupFlatCheckComponent_0_5$].group = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialTreeGroupFlatCheckComponent_0_5$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0),
    [_MaterialTreeGroupFlatCheckComponent_0_5$]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponentHost*/get styles$MaterialTreeComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeComponent_0_5 = Symbol('_MaterialTreeComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0 = class _ViewMaterialTreeComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$0] = new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_MaterialTreeComponent_0_5] = new src__material_tree__material_tree_impl.MaterialTreeComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex, null)), null);
      this[_compView_0$0].create(this[_MaterialTreeComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeComponent()).new(0, this, this.rootEl, this[_MaterialTreeComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot) && 0 === nodeIndex) {
        return this[_MaterialTreeComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MaterialTreeComponent_0_5] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0),
    [_MaterialTreeComponent_0_5]: dart.fieldType(src__material_tree__material_tree_impl.MaterialTreeComponent)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.MaterialTreeComponentNgFactory*/get MaterialTreeComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeComponent()).new("material-tree", dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0, AppViewAndintToAppView()), src__material_tree__material_tree_impl$46template._MaterialTreeComponentMetadata));
    },
    /*src__material_tree__material_tree_impl$46template._MaterialTreeComponentMetadata*/get _MaterialTreeComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__material_tree_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_impl$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_impl$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_impl$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_impl.MaterialTreeComponent), src__material_tree__material_tree_impl$46template.MaterialTreeComponentNgFactory);
    angular$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    src__material_tree__group__material_tree_group$46template.initReflector();
    src__material_tree__group__material_tree_group_flat$46template.initReflector();
    src__material_tree__material_tree_rendering_options$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponent*/get styles$MaterialTreeFilterComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_materialInput_1_0_isDirty = Symbol('_query_materialInput_1_0_isDirty');
  const _appEl_0$1 = Symbol('_appEl_0');
  const _NgIf_0_9$ = Symbol('_NgIf_0_9');
  let const$8;
  const _MaterialInputComponent_0_9 = Symbol('_MaterialInputComponent_0_9');
  src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0 = class ViewMaterialTreeFilterComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$1] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$1], dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1, AppViewAndintToAppViewOfMaterialTreeFilterComponent()));
      this[_NgIf_0_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$1], _TemplateRef_0_8);
      this.init(const$8 || (const$8 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9$].ngIf = _ctx.hasFilterable;
      this[_appEl_0$1].detectChangesInNestedViews();
      if (dart.test(this[_query_materialInput_1_0_isDirty])) {
        this.ctx.materialInput = dart.test(this[_appEl_0$1].mapNestedViews(material_input__material_input.MaterialInputComponent, src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_0_9]]), _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent()))[$isNotEmpty]) ? this[_appEl_0$1].mapNestedViews(material_input__material_input.MaterialInputComponent, src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_0_9]]), _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent()))[$first] : null;
        this[_query_materialInput_1_0_isDirty] = false;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0$1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new = function(parentView, parentIndex) {
    this[_query_materialInput_1_0_isDirty] = true;
    this[_appEl_0$1] = null;
    this[_NgIf_0_9$] = null;
    src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-filter"));
    let t = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType;
    t == null ? src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.None, src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType);
  }).prototype = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    [_query_materialInput_1_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_0$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, {
    /*src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(parentView, parentIndex);
  };
  const _el_0$1 = Symbol('_el_0');
  const _compView_0$1 = Symbol('_compView_0');
  const _DeferredValidator_0_5 = Symbol('_DeferredValidator_0_5');
  const _NgValidators_0_6 = Symbol('_NgValidators_0_6');
  const _NgModel_0_7 = Symbol('_NgModel_0_7');
  const _NgControl_0_8 = Symbol('_NgControl_0_8');
  const _BaseMaterialInput_0_10 = Symbol('_BaseMaterialInput_0_10');
  const _MaterialInputDefaultValueAccessor_0_11 = Symbol('_MaterialInputDefaultValueAccessor_0_11');
  const _expr_1$1 = Symbol('_expr_1');
  const _expr_3$1 = Symbol('_expr_3');
  let const$9;
  const _handle_inputKeyPress_0_1 = Symbol('_handle_inputKeyPress_0_1');
  let const$10;
  src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1 = class _ViewMaterialTreeFilterComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      this[_compView_0$1] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      this[_el_0$1] = this[_compView_0$1].rootEl;
      this.createAttr(this[_el_0$1], "style", "width: 100%;");
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_NgControl_0_8] = this[_NgModel_0_7];
      this[_MaterialInputComponent_0_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_0_8], this[_compView_0$1].ref, this[_DeferredValidator_0_5]);
      this[_BaseMaterialInput_0_10] = this[_MaterialInputComponent_0_9];
      this[_MaterialInputDefaultValueAccessor_0_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_0_10], this[_NgControl_0_8]);
      this[_compView_0$1].create(this[_MaterialInputComponent_0_9], [const$9 || (const$9 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(this.ctx, 'handleFocus')));
      let subscription_1 = this[_MaterialInputComponent_0_9].onKeypress.listen(this.eventHandler1(core.String, core.String, dart.bind(this, _handle_inputKeyPress_0_1)));
      this.init([this[_el_0$1]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 0 === nodeIndex) {
        return this[_DeferredValidator_0_5];
      }
      if (token === (const$10 || (const$10 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 0 === nodeIndex) {
        return this[_NgValidators_0_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 0 === nodeIndex) {
        return this[_NgModel_0_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 0 === nodeIndex) {
        return this[_NgControl_0_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus.Focusable)) && 0 === nodeIndex) {
        return this[_MaterialInputComponent_0_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 0 === nodeIndex) {
        return this[_BaseMaterialInput_0_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 0 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_0_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_0_7].model = _ctx.inputText;
      this[_NgModel_0_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_0_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_1 = _ctx.placeholder;
      if (!(this[_expr_1$1] == currVal_1)) {
        this[_MaterialInputComponent_0_9].label = currVal_1;
        changed = true;
        this[_expr_1$1] = currVal_1;
      }
      let currVal_3 = _ctx.leadingGlyph;
      if (!(this[_expr_3$1] == currVal_3)) {
        this[_MaterialInputComponent_0_9].leadingGlyph = currVal_3;
        changed = true;
        this[_expr_3$1] = currVal_3;
      }
      if (changed) {
        this[_compView_0$1].markAsCheckOnce();
      }
      this[_compView_0$1].detectChanges();
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.as(this.parentView)[_query_materialInput_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$1];
      t == null ? null : t.destroy();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
    }
    [_handle_inputKeyPress_0_1]($event) {
      this.ctx.inputText = core.String._check($event);
    }
  };
  (src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new = function(parentView, parentIndex) {
    this[_el_0$1] = null;
    this[_compView_0$1] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_NgControl_0_8] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_BaseMaterialInput_0_10] = null;
    this[_MaterialInputDefaultValueAccessor_0_11] = null;
    this[_expr_1$1] = null;
    this[_expr_3$1] = null;
    src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType;
  }).prototype = src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_inputKeyPress_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    [_el_0$1]: dart.fieldType(html.Element),
    [_compView_0$1]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_0_6]: dart.fieldType(core.List),
    [_NgModel_0_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_0_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_0_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_0_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_1$1]: dart.fieldType(core.String),
    [_expr_3$1]: dart.fieldType(core.String)
  }));
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponentHost*/get styles$MaterialTreeFilterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeFilterComponent_0_5 = Symbol('_MaterialTreeFilterComponent_0_5');
  src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0 = class _ViewMaterialTreeFilterComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$1] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_MaterialTreeFilterComponent_0_5] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex, null)));
      this[_compView_0$1].create(this[_MaterialTreeFilterComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeFilterComponent()).new(0, this, this.rootEl, this[_MaterialTreeFilterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$1];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_MaterialTreeFilterComponent_0_5] = null;
    src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)
  }));
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.MaterialTreeFilterComponentNgFactory*/get MaterialTreeFilterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeFilterComponent()).new("material-tree-filter", dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0, AppViewAndintToAppView()), src__material_tree__material_tree_filter$46template._MaterialTreeFilterComponentMetadata));
    },
    /*src__material_tree__material_tree_filter$46template._MaterialTreeFilterComponentMetadata*/get _MaterialTreeFilterComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__material_tree_filter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_filter$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_filter$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_filter$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), src__material_tree__material_tree_filter$46template.MaterialTreeFilterComponentNgFactory);
    angular$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__selection__select$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__async__async$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46scss$46css$46shim, {
    /*src__material_tree__material_tree_dropdown$46scss$46css$46shim.styles*/get styles() {
      return dart.constList(["._nghost-%COMP% { display:inline-flex; } .button._ngcontent-%COMP% { display:flex; align-items:center; flex-grow:1; cursor:pointer; padding-right:48px; position:relative; } .button.border._ngcontent-%COMP% { border-bottom:1px solid rgba(0, 0, 0, 0.12); padding-bottom:1px; } .icon._ngcontent-%COMP% { opacity:0.54; position:absolute; right:0; top:calc(50% - 13px); } .search-box._ngcontent-%COMP% { width:100%; }"], dart.dynamic);
    }
  });
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent*/get styles$MaterialTreeDropdownComponent() {
      return dart.constList([src__material_tree__material_tree_dropdown$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_MaterialTreeFilterComponent_1_0_isDirty = Symbol('_query_MaterialTreeFilterComponent_1_0_isDirty');
  const _el_0$2 = Symbol('_el_0');
  const _KeyboardOnlyFocusIndicatorDirective_0_5 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_5');
  const _PopupSourceDirective_0_6 = Symbol('_PopupSourceDirective_0_6');
  const _appEl_1$1 = Symbol('_appEl_1');
  const _NgIf_1_9$1 = Symbol('_NgIf_1_9');
  const _appEl_2$1 = Symbol('_appEl_2');
  const _NgIf_2_9$1 = Symbol('_NgIf_2_9');
  const _appEl_3$ = Symbol('_appEl_3');
  const _NgIf_3_9$ = Symbol('_NgIf_3_9');
  const _el_4$ = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _appEl_4 = Symbol('_appEl_4');
  const _MaterialPopupComponent_4_8 = Symbol('_MaterialPopupComponent_4_8');
  const __PopupHierarchy_4_11 = Symbol('__PopupHierarchy_4_11');
  const __PopupRef_4_12 = Symbol('__PopupRef_4_12');
  const _el_5 = Symbol('_el_5');
  const _appEl_6$ = Symbol('_appEl_6');
  const _NgIf_6_9$ = Symbol('_NgIf_6_9');
  const _appEl_7$ = Symbol('_appEl_7');
  const _DeferredContentDirective_7_9 = Symbol('_DeferredContentDirective_7_9');
  const _expr_0$1 = Symbol('_expr_0');
  const _expr_5$ = Symbol('_expr_5');
  const _expr_6$ = Symbol('_expr_6');
  const _expr_8$ = Symbol('_expr_8');
  const _PopupHierarchy_4_11 = Symbol('_PopupHierarchy_4_11');
  const _PopupRef_4_12 = Symbol('_PopupRef_4_12');
  let const$11;
  let const$12;
  let const$13;
  const _handle_focus_0_0 = Symbol('_handle_focus_0_0');
  const _handle_click_0_1$ = Symbol('_handle_click_0_1');
  const _handle_visibleChange_4_1 = Symbol('_handle_visibleChange_4_1');
  let const$14;
  const _MaterialTreeFilterComponent_0_5$ = Symbol('_MaterialTreeFilterComponent_0_5');
  src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0 = class ViewMaterialTreeDropdownComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    get [_PopupHierarchy_4_11]() {
      if (this[__PopupHierarchy_4_11] == null) {
        this[__PopupHierarchy_4_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_4_8]);
      }
      return this[__PopupHierarchy_4_11];
    }
    get [_PopupRef_4_12]() {
      if (this[__PopupRef_4_12] == null) {
        this[__PopupRef_4_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_4_8]);
      }
      return this[__PopupRef_4_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0$2].className = "button";
      this.createAttr(this[_el_0$2], "keyboardOnlyFocusIndicator", "");
      this.createAttr(this[_el_0$2], "popupSource", "");
      this.addShimC(this[_el_0$2]);
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0$2], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_PopupSourceDirective_0_6] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0$2], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$2][$append](_anchor_1);
      this[_appEl_1$1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$1], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_NgIf_1_9$1] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$2][$append](_anchor_2);
      this[_appEl_2$1] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$1], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_NgIf_2_9$1] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$2][$append](_anchor_3);
      this[_appEl_3$] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_NgIf_3_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
      this[_compView_4] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 4);
      this[_el_4$] = this[_compView_4].rootEl;
      parentRenderNode[$append](this[_el_4$]);
      this.createAttr(this[_el_4$], "enforceSpaceConstraints", "");
      this.createAttr(this[_el_4$], "trackLayoutChanges", "");
      this.addShimC(html.HtmlElement._check(this[_el_4$]));
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, this[_el_4$]);
      this[_MaterialPopupComponent_4_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$11 || (const$11 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_4].ref, this[_appEl_4], new src__core__linker__element_ref.ElementRef.new(this[_el_4$]));
      this[_el_5] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_5], "header", "");
      this.addShimC(this[_el_5]);
      this.project(this[_el_5], 0);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_5][$append](_anchor_6);
      this[_appEl_6$] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6$], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_NgIf_6_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6$], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_7$] = new src__core__linker__view_container.ViewContainer.new(7, 4, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7$], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_DeferredContentDirective_7_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_7$], _TemplateRef_7_8, this[_MaterialPopupComponent_4_8]);
      this[_compView_4].create(this[_MaterialPopupComponent_4_8], [JSArrayOfDivElement().of([this[_el_5]]), JSArrayOfViewContainer().of([this[_appEl_7$]]), const$13 || (const$13 = dart.constList([], dart.dynamic))]);
      this[_el_0$2][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_0)));
      this[_el_0$2][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1$)));
      this[_el_0$2][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0$2][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0$2][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      let subscription_0 = this[_MaterialPopupComponent_4_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_4_1)));
      let subscription_1 = this[_MaterialPopupComponent_4_8].onOpened.listen(this.eventHandler0(core.Null, dart.bind(this.ctx, 'focus')));
      this.init(const$14 || (const$14 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialPopupComponent_4_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupHierarchy_4_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupRef_4_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_button = this[_PopupSourceDirective_0_6];
      this[_NgIf_1_9$1].ngIf = !dart.test(_ctx.showFilterInsideButton);
      this[_NgIf_2_9$1].ngIf = !dart.test(_ctx.showFilterInsideButton);
      this[_NgIf_3_9$].ngIf = _ctx.showFilterInsideButton;
      if (firstCheck) {
        this[_MaterialPopupComponent_4_8].enforceSpaceConstraints = true;
        this[_MaterialPopupComponent_4_8].trackLayoutChanges = true;
      }
      let currVal_5 = _ctx.popupPositions;
      if (!core.identical(this[_expr_5$], currVal_5)) {
        this[_MaterialPopupComponent_4_8].preferredPositions = currVal_5;
        this[_expr_5$] = currVal_5;
      }
      let currVal_6 = local_button;
      if (!core.identical(this[_expr_6$], currVal_6)) {
        this[_MaterialPopupComponent_4_8].source = currVal_6;
        this[_expr_6$] = currVal_6;
      }
      let currVal_8 = _ctx.visible;
      if (!(this[_expr_8$] == currVal_8)) {
        this[_MaterialPopupComponent_4_8].visible = currVal_8;
        this[_expr_8$] = currVal_8;
      }
      this[_NgIf_6_9$].ngIf = dart.test(_ctx.supportsFiltering) && dart.test(_ctx.showFilterInsidePopup);
      if (firstCheck) {
        this[_DeferredContentDirective_7_9].preserveDimensions = true;
      }
      this[_appEl_1$1].detectChangesInNestedViews();
      this[_appEl_2$1].detectChangesInNestedViews();
      this[_appEl_3$].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_6$].detectChangesInNestedViews();
      this[_appEl_7$].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialTreeFilterComponent_1_0_isDirty])) {
        this.ctx.materialTreeFilterComponent = dart.test(src__core__linker__app_view_utils.flattenNodes(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, JSArrayOfListOfMaterialTreeFilterComponent().of([this[_appEl_3$].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5$]]), _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent())), this[_appEl_6$].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5$]]), _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent()))]))[$isNotEmpty]) ? src__core__linker__app_view_utils.flattenNodes(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, JSArrayOfListOfMaterialTreeFilterComponent().of([this[_appEl_3$].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5$]]), _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent())), this[_appEl_6$].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5$]]), _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent()))]))[$first] : null;
        this[_query_MaterialTreeFilterComponent_1_0_isDirty] = false;
      }
      let currVal_0 = !dart.test(_ctx.showFilterInsideButton);
      if (!(this[_expr_0$1] === currVal_0)) {
        this.updateClass(this[_el_0$2], "border", currVal_0);
        this[_expr_0$1] = currVal_0;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      if (firstCheck) {
        this[_PopupSourceDirective_0_6].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_4_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1$1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2$1];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_3$];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_4];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_6$];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_7$];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_compView_4];
      t$4 == null ? null : t$4.destroy();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
      this[_DeferredContentDirective_7_9].ngOnDestroy();
      this[_MaterialPopupComponent_4_8].ngOnDestroy();
    }
    [_handle_focus_0_0]($event) {
      this.ctx.visible = true;
    }
    [_handle_click_0_1$]($event) {
      this.ctx.visible = !dart.test(this.ctx.visible);
      this[_KeyboardOnlyFocusIndicatorDirective_0_5].hideOutline();
    }
    [_handle_visibleChange_4_1]($event) {
      this.ctx.visible = core.bool._check($event);
    }
  };
  (src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    this[_el_0$2] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_appEl_1$1] = null;
    this[_NgIf_1_9$1] = null;
    this[_appEl_2$1] = null;
    this[_NgIf_2_9$1] = null;
    this[_appEl_3$] = null;
    this[_NgIf_3_9$] = null;
    this[_el_4$] = null;
    this[_compView_4] = null;
    this[_appEl_4] = null;
    this[_MaterialPopupComponent_4_8] = null;
    this[__PopupHierarchy_4_11] = null;
    this[__PopupRef_4_12] = null;
    this[_el_5] = null;
    this[_appEl_6$] = null;
    this[_NgIf_6_9$] = null;
    this[_appEl_7$] = null;
    this[_DeferredContentDirective_7_9] = null;
    this[_expr_0$1] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
    this[_expr_8$] = null;
    src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-dropdown"));
    let t = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
    t == null ? src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType("", src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType);
  }).prototype = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_1$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_visibleChange_4_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    [_PopupHierarchy_4_11]: dart.dynamic,
    [_PopupRef_4_12]: dart.dynamic
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    [_query_MaterialTreeFilterComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0$2]: dart.fieldType(html.DivElement),
    [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_PopupSourceDirective_0_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_appEl_1$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$1]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$1]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_4$]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_4_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_4_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_4_12]: dart.fieldType(dart.dynamic),
    [_el_5]: dart.fieldType(html.DivElement),
    [_appEl_6$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_7_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_0$1]: dart.fieldType(core.bool),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_expr_8$]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, {
    /*src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new(parentView, parentIndex);
  };
  const _text_1$0 = Symbol('_text_1');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1 = class _ViewMaterialTreeDropdownComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      let doc = html.document;
      this[_el_0$2] = doc[$createElement]("span");
      this[_el_0$2].className = "button-text";
      this.addShimE(this[_el_0$2]);
      this[_text_1$0] = html.Text.new("");
      this[_el_0$2][$append](this[_text_1$0]);
      this.init0(this[_el_0$2]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.placeholder;
      let currVal_0 = l != null ? l : "";
      if (!(this[_expr_0$1] === currVal_0)) {
        this[_text_1$0][$text] = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_text_1$0] = null;
    this[_expr_0$1] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_text_1$0]: dart.fieldType(html.Text),
    [_expr_0$1]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.new(parentView, parentIndex);
  };
  const _compView_0$2 = Symbol('_compView_0');
  const _MaterialIconComponent_0_5$ = Symbol('_MaterialIconComponent_0_5');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2 = class _ViewMaterialTreeDropdownComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$2] = this[_compView_0$2].rootEl;
      this[_el_0$2].className = "icon";
      this.createAttr(this[_el_0$2], "icon", "arrow_drop_down");
      this.addShimC(html.HtmlElement._check(this[_el_0$2]));
      this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0$2]));
      this[_compView_0$2].create(this[_MaterialIconComponent_0_5$], []);
      this.init0(this[_el_0$2]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_5$].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_0$2].markAsCheckOnce();
      }
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_compView_0$2] = null;
    this[_MaterialIconComponent_0_5$] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_compView_0$2]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.new(parentView, parentIndex);
  };
  const _expr_1$2 = Symbol('_expr_1');
  const _handle_filter_0_0 = Symbol('_handle_filter_0_0');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3 = class _ViewMaterialTreeDropdownComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this[_el_0$2] = this[_compView_0$2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0$2]));
      this[_MaterialTreeFilterComponent_0_5$] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)));
      this[_compView_0$2].create(this[_MaterialTreeFilterComponent_0_5$], []);
      let subscription_0 = this[_MaterialTreeFilterComponent_0_5$].onFiltered.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_filter_0_0)));
      this.init([this[_el_0$2]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.placeholder;
      if (!(this[_expr_0$1] == currVal_0)) {
        this[_MaterialTreeFilterComponent_0_5$].placeholder = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
      let currVal_1 = _ctx.filterableOptions;
      if (!core.identical(this[_expr_1$2], currVal_1)) {
        this[_MaterialTreeFilterComponent_0_5$].filterable = currVal_1;
        this[_expr_1$2] = currVal_1;
      }
      this[_compView_0$2].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.as(this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
    [_handle_filter_0_0]($event) {
      this.ctx.visible = true;
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_compView_0$2] = null;
    this[_MaterialTreeFilterComponent_0_5$] = null;
    this[_expr_0$1] = null;
    this[_expr_1$2] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_filter_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5$]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
    [_expr_0$1]: dart.fieldType(core.String),
    [_expr_1$2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.new(parentView, parentIndex);
  };
  const _expr_2$1 = Symbol('_expr_2');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4 = class _ViewMaterialTreeDropdownComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this[_el_0$2] = this[_compView_0$2].rootEl;
      this[_el_0$2].className = "search-box";
      this.createAttr(this[_el_0$2], "leadingGlyph", "search");
      this.addShimC(html.HtmlElement._check(this[_el_0$2]));
      this[_MaterialTreeFilterComponent_0_5$] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)));
      this[_compView_0$2].create(this[_MaterialTreeFilterComponent_0_5$], []);
      this.init0(this[_el_0$2]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialTreeFilterComponent_0_5$].leadingGlyph = "search";
      }
      let currVal_1 = _ctx.placeholder;
      if (!(this[_expr_1$2] == currVal_1)) {
        this[_MaterialTreeFilterComponent_0_5$].placeholder = currVal_1;
        this[_expr_1$2] = currVal_1;
      }
      let currVal_2 = _ctx.filterableOptions;
      if (!core.identical(this[_expr_2$1], currVal_2)) {
        this[_MaterialTreeFilterComponent_0_5$].filterable = currVal_2;
        this[_expr_2$1] = currVal_2;
      }
      this[_compView_0$2].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.as(this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_compView_0$2] = null;
    this[_MaterialTreeFilterComponent_0_5$] = null;
    this[_expr_1$2] = null;
    this[_expr_2$1] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5$]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
    [_expr_1$2]: dart.fieldType(core.String),
    [_expr_2$1]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.new(parentView, parentIndex);
  };
  const _MaterialTreeComponent_0_5$ = Symbol('_MaterialTreeComponent_0_5');
  const _expr_3$2 = Symbol('_expr_3');
  const _expr_4$0 = Symbol('_expr_4');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5 = class _ViewMaterialTreeDropdownComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(this, 0);
      this[_el_0$2] = this[_compView_0$2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0$2]));
      this[_MaterialTreeComponent_0_5$] = new src__material_tree__material_tree_impl.MaterialTreeComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)), null);
      this[_compView_0$2].create(this[_MaterialTreeComponent_0_5$], []);
      this.init0(this[_el_0$2]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot) && 0 === nodeIndex) {
        return this[_MaterialTreeComponent_0_5$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.expandAll;
      if (!(this[_expr_0$1] == currVal_0)) {
        this[_MaterialTreeComponent_0_5$].expandAll = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
      let currVal_1 = _ctx.componentRenderer;
      if (!core.identical(this[_expr_1$2], currVal_1)) {
        this[_MaterialTreeComponent_0_5$].componentRenderer = currVal_1;
        this[_expr_1$2] = currVal_1;
      }
      let currVal_2 = _ctx.itemRenderer;
      if (!core.identical(this[_expr_2$1], currVal_2)) {
        this[_MaterialTreeComponent_0_5$].itemRenderer = currVal_2;
        this[_expr_2$1] = currVal_2;
      }
      let currVal_3 = _ctx.options;
      if (!core.identical(this[_expr_3$2], currVal_3)) {
        this[_MaterialTreeComponent_0_5$].options = currVal_3;
        this[_expr_3$2] = currVal_3;
      }
      let currVal_4 = _ctx.selection;
      if (!core.identical(this[_expr_4$0], currVal_4)) {
        this[_MaterialTreeComponent_0_5$].selection = currVal_4;
        this[_expr_4$0] = currVal_4;
      }
      this[_compView_0$2].detectHostChanges(firstCheck);
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_compView_0$2] = null;
    this[_MaterialTreeComponent_0_5$] = null;
    this[_expr_0$1] = null;
    this[_expr_1$2] = null;
    this[_expr_2$1] = null;
    this[_expr_3$2] = null;
    this[_expr_4$0] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0),
    [_MaterialTreeComponent_0_5$]: dart.fieldType(src__material_tree__material_tree_impl.MaterialTreeComponent),
    [_expr_0$1]: dart.fieldType(core.bool),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_expr_2$1]: dart.fieldType(dart.dynamic),
    [_expr_3$2]: dart.fieldType(dart.dynamic),
    [_expr_4$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponentHost*/get styles$MaterialTreeDropdownComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeDropdownComponent_0_5 = Symbol('_MaterialTreeDropdownComponent_0_5');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0 = class _ViewMaterialTreeDropdownComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$2] = new src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new(this, 0);
      this.rootEl = this[_compView_0$2].rootEl;
      this[_MaterialTreeDropdownComponent_0_5] = new src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.new(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0$2].create(this[_MaterialTreeDropdownComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeDropdownComponent()).new(0, this, this.rootEl, this[_MaterialTreeDropdownComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) || token === dart.wrapType(focus__focus.Focusable) || token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot)) && 0 === nodeIndex) {
        return this[_MaterialTreeDropdownComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialTreeDropdownComponent_0_5].ngOnInit();
      }
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_MaterialTreeDropdownComponent_0_5] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__),
    [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0),
    [_MaterialTreeDropdownComponent_0_5]: dart.fieldType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.MaterialTreeDropdownComponentNgFactory*/get MaterialTreeDropdownComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeDropdownComponent()).new("material-tree-dropdown", dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0, AppViewAndintToAppView()), src__material_tree__material_tree_dropdown$46template._MaterialTreeDropdownComponentMetadata));
    },
    /*src__material_tree__material_tree_dropdown$46template._MaterialTreeDropdownComponentMetadata*/get _MaterialTreeDropdownComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__material_tree_dropdown$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_dropdown$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_dropdown$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_dropdown$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), src__material_tree__material_tree_dropdown$46template.MaterialTreeDropdownComponentNgFactory);
    src__material_tree__material_tree_impl$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    src__material_tree__material_tree_filter$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group.scss.css.shim.ddc", {
    "package:angular_components/src/material_tree/material_tree_expand_state.template.dart": src__material_tree__material_tree_expand_state$46template,
    "package:angular_components/src/material_tree/material_tree_root.template.dart": src__material_tree__material_tree_root$46template,
    "package:angular_components/src/material_tree/material_tree_node.template.dart": src__material_tree__material_tree_node$46template,
    "package:angular_components/src/material_tree/group/material_tree_group.scss.css.shim.dart": src__material_tree__group__material_tree_group$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group.template.dart": src__material_tree__group__material_tree_group$46template,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart": src__material_tree__group__material_tree_group_flat$46template,
    "package:angular_components/src/material_tree/material_tree_rendering_options.template.dart": src__material_tree__material_tree_rendering_options$46template,
    "package:angular_components/src/material_tree/material_tree_impl.template.dart": src__material_tree__material_tree_impl$46template,
    "package:angular_components/src/material_tree/material_tree_filter.template.dart": src__material_tree__material_tree_filter$46template,
    "package:angular_components/src/material_tree/material_tree_dropdown.scss.css.shim.dart": src__material_tree__material_tree_dropdown$46scss$46css$46shim,
    "package:angular_components/src/material_tree/material_tree_dropdown.template.dart": src__material_tree__material_tree_dropdown$46template
  }, '{"version":3,"sourceRoot":"","sources":["../material_tree_dropdown.template.dart","material_tree_group.template.dart","material_tree_group_flat.template.dart","../material_tree_expand_state.template.dart","../material_tree_root.template.dart","../material_tree_node.template.dart","material_tree_group.scss.css.shim.dart","material_tree_group_flat_list.scss.css.shim.dart","material_tree_group_flat_radio.scss.css.shim.dart","material_tree_group_flat_check.scss.css.shim.dart","../material_tree_rendering_options.template.dart","../material_tree_impl.template.dart","../material_tree_filter.template.dart","../material_tree_dropdown.scss.css.shim.dart"],"names":[],"mappings":"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","file":"material_tree_group.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_expand_state$46template: src__material_tree__material_tree_expand_state$46template,
    src__material_tree__material_tree_root$46template: src__material_tree__material_tree_root$46template,
    src__material_tree__material_tree_node$46template: src__material_tree__material_tree_node$46template,
    src__material_tree__group__material_tree_group$46scss$46css$46shim: src__material_tree__group__material_tree_group$46scss$46css$46shim,
    src__material_tree__group__material_tree_group$46template: src__material_tree__group__material_tree_group$46template,
    src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat$46template: src__material_tree__group__material_tree_group_flat$46template,
    src__material_tree__material_tree_rendering_options$46template: src__material_tree__material_tree_rendering_options$46template,
    src__material_tree__material_tree_impl$46template: src__material_tree__material_tree_impl$46template,
    src__material_tree__material_tree_filter$46template: src__material_tree__material_tree_filter$46template,
    src__material_tree__material_tree_dropdown$46scss$46css$46shim: src__material_tree__material_tree_dropdown$46scss$46css$46shim,
    src__material_tree__material_tree_dropdown$46template: src__material_tree__material_tree_dropdown$46template
  };
});

//# sourceMappingURL=material_tree_group.scss.css.shim.ddc.js.map
