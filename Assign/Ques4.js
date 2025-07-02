// D. Backup System for .txt FilesMore actions
// Create a Node.js script that:
// 
// Scans the folder myNotes/
// 
// Finds all .txt files
// 
// Copies them into a new folder backupNotes/
// 
// Skips non-.txt files
// 
// Creates the destination folder if it doesn't exist
// Requirements
// 1. Source folder: myNotes/
// o Located in the same directory as your script
// o Contains various file types (e.g., .txt, .pdf, .jpg)
// 2. Destination folder: backupNotes/
// o Created automatically if it doesn’t exist
// 3. Copy only files that end with .txt
// 4. Print a success message for each file copied

const fs = require('fs');
const path = require('path');

const sourceFolder = path.join(__dirname, 'myNotes');
const destFolder = path.join(__dirname, 'backupNotes');

//source folder exists or not CHECK IT 
if (!fs.existsSync(sourceFolder)) {
  console.error('Source folder "myNotes/" does not exist.');
  process.exit(1);
}

//  Create destination folder
if (!fs.existsSync(destFolder)) {
  fs.mkdirSync(destFolder);
}

// Step 3: Read all files from source folder
fs.readdir(sourceFolder, (err, files) => {
  if (err) {
    console.error('Error reading myNotes folder:', err);
    return;
  }

  files.forEach((file) => {
    //  file ends with .txt
    if (file.endsWith('.txt')) {
      const sourcePath = path.join(sourceFolder, file);
      const destPath = path.join(destFolder, file);

      fs.copyFile(sourcePath, destPath, (err) => {
        if (err) {
          console.error(`Error copying ${file}:`, err);
        } else {
          console.log(`Copied: ${file} ➝ backupNotes/`);
        }
      });
    }
  });
});