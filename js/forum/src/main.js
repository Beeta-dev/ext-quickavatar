import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Post from 'flarum/components/Post'
import TextEditor from 'flarum/components/TextEditor'
import Button from 'flarum/components/Button';

import QuickAvatar from 'beeta-dev/ext-quickavatar/components/QuickAvatar';

app.initializers.add('beeta-quickavatar', () => {
    var quickAvatar;
    extend(TextEditor.prototype, 'controlItems', function() {
        var quickAvatar = new QuickAvatar;
        quickAvatar.textAreaObj = this;
        quickAvatar.include.push('quickAvatar');
    });
    extend(Post.prototype, 'actionItems', function(items) {
        items.add('beeta-quickavatar', quickAvatar, 5);
        /*
        items.add('quick-avatar', Button.component({
            className: 'Button Button-icon',
            icon: 'bolt',
            children: 'Quick Avatar',
            onclick: "alert('teste')"
        }), 5);
        */
    });
    extend(Post.prototype, 'footerItems', function(items) {
        //var user = this.props.user;
        items.add("assinatura",'Assinatura');
    });
});