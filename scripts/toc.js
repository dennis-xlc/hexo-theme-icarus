

hexo.extend.helper.register('renderToc', function(toc, catalogue){
	var tableOfContents = null;
	tableOfContents = '<div id="toc" class="toc-article">';
	tableOfContents += '<strong class="toc-title">' + catalogue + '</strong>';
	tableOfContents += toc;
    tableOfContents += '</div>';
    return tableOfContents;
});