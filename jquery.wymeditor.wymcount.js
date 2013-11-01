// wymeditor/plugins/wymcount/jquery.wymeditor.wymcount.js
// Extend WYM
WYMeditor.editor.prototype.wymcount = function() {
  var wym = this;
  // FIre the counter to start with
  WYMcounter(wym);
  // Bind the counter to the keyup command.
  jQuery(wym._doc).bind('keyup', function(){
    WYMcounter(wym);
  });
};

// The count function.
function WYMcounter(wym){
  var txtVal =wym.xhtml(content);
  // Normailze the Text
  var words = txtVal.replace(/(\r\n|\n|\r)/gm, "").
                        replace(/^\s+|\s+$/g, "").
                        replace("&nbsp;", " ");
  words = words.trim();
  // Replace back to back html tags with a space.
  words = words.replace(/(<([^>]+)><([^>]+)>)/ig," ");
  // Strip all the rest of the tags.
  words = jQuery(words).text();
  // Split words 
  words = words.split(/\s+/).length;

  var chars = jQuery(txtVal).text().length;
  if(chars===0){words=0;}
  wym.status(words+' words / '+ chars +' characters');
}
