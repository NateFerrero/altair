import {
  Component,
  OnInit,
  Input,
  ViewChild,
  OnChanges
} from '@angular/core';

// Import the codemirror packages
import Codemirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnChanges {

  @Input() showResult = false;
  @Input() queryResult = '';

  @ViewChild('editor') editor;

  resultEditorConfig = {
    mode: 'javascript',
    json: true,
    lineWrapping: true,
    lineNumbers: true,
    foldGutter: true,
    readOnly: true,
    autoRefresh: true,
    theme: 'default query-result',
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
  };

  constructor() {}

  ngOnChanges() {
    // Refresh the query result editor view when there are any changes
    // to fix any broken UI issues in it
    if (this.editor.instance) {
      this.editor.instance.refresh();
    }
  }
}
