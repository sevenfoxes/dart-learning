import 'package:build_runner/build_runner.dart' as _i1;
import 'package:sass_builder/sass_builder.dart' as _i2;
import 'package:angular_components/builder.dart' as _i3;
import 'package:angular/builder.dart' as _i4;
import 'package:build_test/builder.dart' as _i5;
import 'package:build_config/build_config.dart' as _i6;
import 'package:build_modules/builders.dart' as _i7;
import 'package:build_web_compilers/builders.dart' as _i8;
import 'package:build/build.dart' as _i9;
import 'dart:convert' as _i10;
import 'dart:isolate' as _i11;

final _builders = [
  _i1.apply('sass_builder|sass_builder', [_i2.sassBuilder],
      _i1.toDependentsOf('sass_builder'),
      hideOutput: true),
  _i1.apply('angular_components|scss_builder', [_i3.scssBuilder],
      _i1.toNoneByDefault(),
      hideOutput: true),
  _i1.apply(
      'angular|angular',
      [_i4.templatePlaceholder, _i4.templateCompiler, _i4.stylesheetCompiler],
      _i1.toDependentsOf('angular'),
      isOptional: true,
      hideOutput: true),
  _i1.apply(
      'build_test|test_bootstrap',
      [_i5.debugIndexBuilder, _i5.debugTestBuilder, _i5.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i6.InputSet(include: const ['test/**'])),
  _i1.apply(
      'build_modules|modules',
      [
        _i7.metaModuleBuilder,
        _i7.metaModuleCleanBuilder,
        _i7.moduleBuilder,
        _i7.unlinkedSummaryBuilder,
        _i7.linkedSummaryBuilder
      ],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_web_compilers|ddc', [_i8.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true, hideOutput: true),
  _i1.apply('build_web_compilers|entrypoint', [_i8.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i6.InputSet(include: const [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: const [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: new _i9.BuilderOptions(
          _i10.json.decode('{"dart2js_args":["--minify"]}')),
      defaultReleaseOptions:
          new _i9.BuilderOptions(_i10.json.decode('{"compiler":"dart2js"}')),
      appliesBuilders: ['build_web_compilers|dart2js_archive_extractor']),
  _i1.applyPostProcess('build_modules|module_cleanup', _i7.moduleCleanup,
      defaultGenerateFor: const _i6.InputSet()),
  _i1.applyPostProcess('build_web_compilers|dart2js_archive_extractor',
      _i8.dart2JsArchiveExtractor,
      defaultGenerateFor: const _i6.InputSet())
];
main(List<String> args, [_i11.SendPort sendPort]) async {
  var result = await _i1.run(args, _builders);
  sendPort?.send(result);
}
