// wymeditor/plugins/wymcount/jquery.wymeditor.wymcount.js
// Extend WYM
WYMeditor.editor.prototype.wymcount = function() {
    var wym = this;

    var updateStatusWithCount = function (counter) {
        wym.status(counter.words + ' words / '+ counter.characters +' characters');
    }
    Countable.live(wym._doc, updateStatusWithCount, {'stripTags': true});
};
