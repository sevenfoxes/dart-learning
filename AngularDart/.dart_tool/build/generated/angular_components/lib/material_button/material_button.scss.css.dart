library asset_angular_components_lib_material_button_material_button.scss.css.dart;


const List<dynamic> styles = const [':host {\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  user-select: none;\n  background: transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  letter-spacing: 0.01em;\n  line-height: normal;\n  outline: none;\n  position: relative;\n  text-align: center;\n}\n:host.acx-theme-dark {\n  color: #fff;\n}\n:host:not([icon]) {\n  margin: 0 0.29em;\n}\n:host[dense]:not([icon]) {\n  height: 32px;\n  font-size: 13px;\n}\n:host[compact]:not([icon]) {\n  padding: 0 8px;\n}\n:host[disabled] {\n  color: rgba(0, 0, 0, 0.26);\n  cursor: not-allowed;\n}\n:host[disabled].acx-theme-dark {\n  color: rgba(255, 255, 255, 0.3);\n}\n:host[disabled] > * {\n  pointer-events: none;\n}\n:host:not([disabled]):not([icon]):hover::after, :host.is-focused::after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: currentColor;\n  opacity: 0.12;\n  border-radius: inherit;\n  pointer-events: none;\n}\n:host[raised][animated] {\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host[raised][elevation="1"] {\n  /*! @noflip */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n:host[raised][elevation="2"] {\n  /*! @noflip */\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n}\n:host[raised][elevation="3"] {\n  /*! @noflip */\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n}\n:host[raised][elevation="4"] {\n  /*! @noflip */\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n:host[raised][elevation="5"] {\n  /*! @noflip */\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n:host[raised][elevation="6"] {\n  /*! @noflip */\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n}\n:host[raised].acx-theme-dark {\n  background-color: #4285f4;\n}\n:host[raised][disabled] {\n  background: rgba(0, 0, 0, 0.12);\n  box-shadow: none;\n}\n:host[raised][disabled].acx-theme-dark {\n  background: rgba(255, 255, 255, 0.12);\n}\n:host[raised].highlighted:not([disabled]) {\n  background-color: #4285f4;\n  color: #fff;\n}\n:host[no-ink] material-ripple {\n  display: none;\n}\n:host[clear-size] {\n  margin: 0;\n}\n:host .content {\n  display: inline-flex;\n  align-items: center;\n}\n:host:not([icon]) {\n  border-radius: 2px;\n  min-width: 64px;\n}\n:host:not([icon]) .content {\n  padding: 0.7em 0.57em;\n}\n:host[icon] {\n  border-radius: 50%;\n}\n:host[icon] .content {\n  padding: 8px;\n}\n:host[clear-size] {\n  min-width: 0;\n}\n'];
