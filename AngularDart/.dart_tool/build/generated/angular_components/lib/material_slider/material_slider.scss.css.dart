library asset_angular_components_lib_material_slider_material_slider.scss.css.dart;


const List<dynamic> styles = const ['.container {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 32px;\n}\n\n.track-container {\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 4px;\n}\n\n.track {\n  height: 2px;\n  width: 100%;\n}\n\n.left-track-container > .track {\n  background-color: #4285f4;\n}\n\n.right-track-container > .track {\n  background-color: #9e9e9e;\n}\n\n.knob {\n  height: 16px;\n  position: relative;\n  width: 0;\n}\n\n.knob-real {\n  background-color: #4285f4;\n  border-radius: 50%;\n  cursor: pointer;\n  height: 16px;\n  position: absolute;\n  width: 16px;\n}\n\n.knob-hover-shadow {\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  margin: -8px;\n  position: absolute;\n  transition: background-color 0.5s linear;\n  width: 32px;\n}\n\n.knob-drag-shadow {\n  border-radius: 50%;\n  cursor: pointer;\n  height: 20px;\n  margin: -2px;\n  position: absolute;\n  width: 20px;\n}\n\n.is-dragging.knob-drag-shadow {\n  background-color: #4285f4;\n}\n\n.knob:focus,\n.knob:hover {\n  outline: none;\n}\n.knob:focus .knob-hover-shadow,\n.knob:hover .knob-hover-shadow {\n  background-color: rgba(66, 133, 244, 0.5);\n}\n'];