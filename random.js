var words = [];

function loadCSV() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "english_list.csv", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var lines = xhr.responseText.split("\n");
      for (var i = 0; i < lines.length; i++) {
        var columns = lines[i].split(",");
        if (columns.length === 4) { // 必須有 4 列
          var word = {
            word: columns[0],
            pos: columns[1],
            definition: columns[2],
            example: columns[3]
          };
          words.push(word);
        }
      }
      generateRandomWord(); // AJAX 請求完成後，直接生成隨機詞彙
    }
  };
  xhr.send();
}

loadCSV();