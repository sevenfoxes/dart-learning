define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_item', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, id_generator, has_renderer, material_select_item, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_select__material_select_item = material_select_item.material_select__material_select_item;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const material_select__material_select_dropdown_item = Object.create(_root);
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const _generatedId = Symbol('_generatedId');
  const _id = Symbol('_id');
  material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent = class MaterialSelectDropdownItemComponent extends material_select__material_select_item.MaterialSelectItemComponent {
    get id() {
      let l = this[_id];
      return l != null ? l : this[_generatedId];
    }
    set id(id) {
      this[_id] = id;
    }
    preventTextSelectionIfShiftKey(e) {
      if (dart.test(e.shiftKey)) e.preventDefault();
    }
  };
  (material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new = function(element, domService, role, dropdown, activationHandler, idGenerator, cdRef) {
    this[_id] = null;
    this[_generatedId] = (idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID()).nextId();
    material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.__proto__.new.call(this, element, domService, dropdown, activationHandler, cdRef, role != null ? role : "option");
    this.itemRenderer = dart.fn(model__ui__has_renderer.defaultItemRenderer, dynamicToString());
  }).prototype = material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent);
  material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.__proto__),
    preventTextSelectionIfShiftKey: dart.fnType(dart.void, [html.MouseEvent])
  }));
  dart.setGetterSignature(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent, () => ({
    __proto__: dart.getGetters(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.__proto__),
    id: core.String
  }));
  dart.setSetterSignature(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent, () => ({
    __proto__: dart.getSetters(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.__proto__),
    id: core.String
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.__proto__),
    [_generatedId]: dart.finalFieldType(core.String),
    [_id]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_select_dropdown_item.ddc", {
    "package:angular_components/material_select/material_select_dropdown_item.dart": material_select__material_select_dropdown_item
  }, '{"version":3,"sourceRoot":"","sources":["material_select_dropdown_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;cA8DmB,SAAG;6BAAI,kBAAY;;WAE7B,EAAS;AACd,eAAG,GAAG,EAAE;IACV;mCAiBoC,CAAY;AAC9C,oBAAI,CAAC,SAAS,GAAE,CAAC,eAAe;IAClC;;qGAhBI,OAAmB,EACnB,UAAqB,EACrB,IAA8B,EAC9B,QAAmC,EACnC,iBAA+C,EAC/C,WAAmC,EACnC,KAAuB;IAhBpB,SAAG;IAiBJ,kBAAY,GACR,CAAC,WAAW,WAAX,WAAW,GAAI,IAAI,gEAA8B,UAAU;AAChE,gHAAM,OAAO,EAAE,UAAU,EAAE,QAAQ,EAAE,iBAAiB,EAAE,KAAK,EACzD,IAAI,WAAJ,IAAI,GAAI;AAChB,qBAAiB,GAAG,uEAAmB;EACzC","file":"material_select_dropdown_item.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_dropdown_item: material_select__material_select_dropdown_item
  };
});

//# sourceMappingURL=material_select_dropdown_item.ddc.js.map
