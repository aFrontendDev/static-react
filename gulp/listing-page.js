'use strict';

var gulp = require('gulp');
const buildFolder = 'page_data/';
const fs = require('fs');
const path = require('path');

gulp.task('listings', function(callback) {
    let filenames = [];
    fs.readdir(buildFolder, (err, files) => {
        files.forEach(file => {
            let fileType = path.extname(file);
            if (fileType === '.html') {
                filenames.push('"' + file + '"');
            }
        });
        console.log(filenames);
        fs.writeFile(buildFolder + 'index.html', '--- \ntitle: Listings \npages: [' + filenames + ']\nrtemplate: test.jsx \n---');
    })
});
