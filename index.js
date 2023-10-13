const watch = require('node-watch');
const { exec } = require("child_process");

const pm = require('picomatch');
let isMatch = pm('*/*.diag');

// filter with regular expression
watch('./source', {  recursive: true }, function (evt, filename) {
  if (!isMatch(filename)) return;
  console.log('%s matched.', filename);

  let command = `blockdiag --no-transparency --size=3200x6000 --antialias -f ./system/fonts/RedditSans-Bold.ttf ./${filename}`;

  exec(command, function (error, stdout, stderr) {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    let pngPath = filename.replace('.diag', '.png');
    let destFilename =
      pngPath.split('/')[pngPath.split('/').length - 1];
    console.log(`destFilename: ${destFilename}`);
    command = `mv ./${pngPath} ./output/${destFilename}`;
    console.log(`command: ${command}`);
    exec(`mv ./${pngPath} ./output/${destFilename}`);
  });
});

console.log('Watching for *.diag changes in ./source');
