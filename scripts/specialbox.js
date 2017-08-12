'use strict';

function getBoxClass (type, icon) {

	if (type == 'default' &&
        icon == 'default') {
		return 'blank';
	}
    return type + ' icon icon-' + icon;
}




var rTitle = /\s*title:(\S+)/i;
var rType = /\s*type:(\w+)/i;
var rIcon = /\s*icon:(\w+)/i;

/**
 * box block tag
 *
 * Syntax:
 *   {% boxblock [title:title] [type:type] [icon:icon] %}
 *   content
 *   {% boxblock %}
 */

function boxblock(args, content) {
    var arg = args.join(' ');

    var title = '';
    var type = '';
    var icon = '';
    var mark = [];
    var match;

    if (rTitle.test(arg)) {
      arg = arg.replace(rTitle, function() {
        title = arguments[1];
        return '';
      });
    }

    if (rType.test(arg)) {
      arg = arg.replace(rType, function() {
        type = arguments[1];
        return '';
      });
    }

    if (rIcon.test(arg)) {
      arg = arg.replace(rIcon, function() {
        icon = arguments[1];
        return '';
      });
    }

    var header = '<box class="' + getBoxClass(type, icon) + '">';
    if (title) {
        header += '<title>';
        header += title;
        header += '</title>';
    }
    header += '<content>';
    var footer = '</content></box>';

    return header + hexo.render.renderSync({text: content, engine: 'markdown'}) + footer;
  };

hexo.extend.tag.register('boxblock', boxblock, true);