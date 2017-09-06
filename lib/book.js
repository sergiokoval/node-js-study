var book = {	
	
	_pages : [],
	
	addPage : function (content){
		this._pages.push(content);
	},
	
	getPageCount : function (){
		return this._pages.length;
	
	}
}

exports.book = book;