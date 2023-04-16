const fse = require('fs-extra');

const srcDir = `/Users/krishi/final-project/Clone`;
const destDir = `/Users/krishi/final-project/krishijain`;
                                 
try {
  fse.copySync(srcDir, destDir, { overwrite: true|false })
  console.log('replicit-ed!')
} catch (err) {
  console.error(err)
}