export class App {
  message = 'Hello World!';


  public attached() : void
  {
 requirejs(['vs/editor/editor.main'], function() {
            
            var element = document.getElementById('container');            
            var editor = monaco.editor.create(document.getElementById('container'), {
                value: [
                    'function x() {',
                    '\tconsole.log("Hello world!");',
                    '}'
                ].join('\n'),
                language: 'javascript'
            });
        });

  }
}
