/* Custom element definitions */
(function () {
    /* Custom element for uploader */
    var bmUploadFileDialog = document.registerElement('bm-upload-file-dialog', {
        prototype: Object.create(HTMLButtonElement.prototype),
        extends: 'div'
    });

    document.body.appendChild(new bmUploadFileDialog());

    /* Close button for dialog boxes */
    var bmDialogClose = document.registerElement('bm-dialog-close', {
        prototype: Object.create(HTMLButtonElement.prototype),
        extends: 'div'
    });

    document.body.appendChild(new bmDialogClose());

    /* Close button for dialog boxes */
    var bmDialogBody = document.registerElement('bm-dialog-body', {
        prototype: Object.create(HTMLButtonElement.prototype),
        extends: 'div'
    });

    document.body.appendChild(new bmDialogBody());

})(window);

/* Classes for elements - Everything gets attached to App class */
(function () {

    this['App']  = this['App'] || {};
    var App      = this['App'];

    App.bookmarkExplorer = new BookmarkExplorer();
    App.bookMarkUploader = new BookmarkUploader();

    
    /* Code for bookmark explorer */
    function BookmarkExplorer() {
        this.container = document.getElementById('bookmark-list');
        //this.template = App.templates['assets/templates/bookmark-list.hbs.html'];
    }

    BookmarkExplorer.prototype.showBookmarks = function showBookmarks() {
        var bookExp = this;
        var context = ['fuck1', '', 'fuck3', 'fuck4', 'fuck5', '', '']
        //document.getElementById('bookmark-list').innerHTML += this.template(context);
        context.forEach(function (element) {
            if (element) {
                bookExp.printBookmark({book:element});
            }
            else{
                bookExp.printFolder({book:element});
            }
        })
    };

    BookmarkExplorer.prototype.printBookmark = function printBookmark(context) {
        this.template = App.templates['assets/templates/bookmark-item.hbs.html'];
        document.getElementById('bookmark-list').innerHTML += this.template(context);
    };

    BookmarkExplorer.prototype.printFolder = function printFolder(context) {
        this.template = App.templates['assets/templates/bookmark-folder.hbs.html'];
        document.getElementById('bookmark-list').innerHTML += this.template(context);
    };
    
    /* Bookmark uploader */
    function BookmarkUploader() {
        this.container = document.getElementById('bookmark-dialog');
        this.template = App.templates['assets/templates/upload-file.hbs.html'];
    }

    BookmarkUploader.prototype.show = function showBookmarkUploader() {
        if (document.getElementsByTagName('bm-upload-file-dialog').length !== 0) return;
        document.getElementById('bookmark-dialog').innerHTML += this.template();
    };

    BookmarkUploader.prototype.remove = function hideBookmarkUploader() {
        var dialog = document.getElementsByTagName('bm-upload-file-dialog');
        this.container.removeChild(dialog[0]);
    };

})(window);



var bookmarks = {
    parent: null,
    name: 'bar',
    url: '',
    children:[
    {
        parent: 'bar',
        name: 'foo',
        url: '//foo.com',
        children: []
    },{
        parent: 'bar',
        name: 'baz',
        url: '//baz.com',
        children: []
        }
    ]}