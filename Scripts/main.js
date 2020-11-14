
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}

// Invoked by the "Delete Line using Rebound" command
nova.commands.register("rebound-delete.reboundDelete", (editor) => {
   editor.edit((e) => {
        editor.selectToBeginningOfLine();   
        editor.selectToBeginningOfLine();   
        const lineRange = editor.selectedRange;
        
        if (lineRange.start === lineRange.end) {
            e.delete(new Range(lineRange.start - 1, lineRange.end));    
            editor.selectedRange = new Range(lineRange.start - 1, lineRange.start - 1);
        } else {
            e.delete(lineRange);    
            editor.selectedRange = new Range(lineRange.start, lineRange.start);
        }
    });
});
