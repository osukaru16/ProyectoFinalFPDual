


addEventListener("message", archivoMidi, false);






function archivoMidi(event){

	var reader = new FileReader();
	/*reader.onload = function(e){
				
		var partsData = MidiConvert.parse(e.target.result);
				
		document.querySelector(resultado).value = JSON.stringify(partsData, undefined, 2);

		//resultado = JSON.stringify(partsData, undefined, 2);
				
	};*/
	reader.readAsBinaryString(event.data);


	JSON.stringify(MidiConvert.parse(reader.result), undefined, 2);


}






/*

self.onmessage = function(e) {
    // TODO: do something interesting with the files.
    postMessage(e.data); // Pass through.
  };




document.querySelector('input[type="file"]').addEventListener('change', function(e) {
  var files = this.files;
  loadInlineWorker('#fileListWorker', function(worker) {

    // Setup handler to process messages from the worker.
    worker.onmessage = function(e) {

      // Read each file aysnc. as an array buffer.
      for (var i = 0, file; file = files[i]; ++i) {
        var reader = new FileReader();
        reader.onload = function(e) {
          console.log(this.result); // this.result is the read file as an ArrayBuffer.
        };
        reader.onerror = function(e) {
          console.log(e);
        };
        reader.readAsArrayBuffer(file);
      }

    };

    worker.postMessage(files);
  });
}, false);

function loadInlineWorker(selector, callback) {
  window.URL = window.URL || window.webkitURL || null;

  var script = document.querySelector(selector);
  if (script.type === 'javascript/worker') {
    var blob = new Blob([script.textContent]);
    callback(new Worker(window.URL.createObjectURL(blob));
  }
}




*/


/*
self.onmessage = function(e) {
    // TODO: do something interesting with the files.
    postMessage(e.data); // Pass through.
  };

*/



