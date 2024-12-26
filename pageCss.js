const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
  lineNumbers: true, // Menampilkan nomor baris
  mode: "css", // Mode bahasa (JavaScript)
  theme:"monokai",
  // indentUnit: 4, // Indentasi per 4 spasi
  // tabSize: 4, // Ukuran tab
  lineWrapping:true
});