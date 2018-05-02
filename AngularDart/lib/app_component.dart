import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:english_words/english_words.dart';

@Component(
  selector: 'my-app',
  styleUrls: const ['app_component.css'],
  templateUrl: './app_component.html',
  directives: const [
    coreDirectives,
    materialDirectives
  ],
  providers: const [materialProviders],
)
class AppComponent implements OnInit {
  var names = <WordPair>[];

  void generateNames() {
    names = generateWordPairs().take(5).toList();
  }

  void addToSaved(WordPair name) {
    savedNames.add(name);
  }
  
  void removeFromSaved(WordPair name) {
    savedNames.remove(name);
  }

  void toggleSavedState(WordPair name) {
    if (savedNames.contains(name)) {
      removeFromSaved(name);
      return;
    }

    addToSaved(name);
  }

  @override
  ngOnInit() {
    generateNames();
  }

  final savedNames = new Set<WordPair>();
}
