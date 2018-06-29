const fs = require('fs');

const agmCoreAfter = "agm-2mundos-core/core.umd";
const agmOverlayComponentFile = 'dist/AgmOverlay.component.js';
const agmOverlayDefinitionFile = 'dist/AgmOverlay.component.d.ts';
const agmOverlayMetadataFile = 'dist/AgmOverlay.component.metadata.json';

function replaceContent(filename) {
    let agmOverlayContent = fs.readFileSync(filename, {encoding: 'utf-8'});
    let agmOverlayResult = agmOverlayContent.replace(/agm-2mundos-core/g, agmCoreAfter);
    
    fs.writeFile(filename, agmOverlayResult, 'utf8', function (err) {
        if (err) {
            throw err;
        }
        console.log(`File replaced: ` + filename);
    });
}

replaceContent(agmOverlayComponentFile);
replaceContent(agmOverlayDefinitionFile);
replaceContent(agmOverlayMetadataFile);
