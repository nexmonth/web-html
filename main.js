const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
  lineNumbers: true, // Menampilkan nomor baris
  mode: "htmlmixed", // Mode bahasa (JavaScript)
  theme:"monokai",
  // indentUnit: 4, // Indentasi per 4 spasi
  // tabSize: 4, // Ukuran tab
  lineWrapping:true
});