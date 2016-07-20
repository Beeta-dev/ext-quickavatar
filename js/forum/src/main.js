import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Post from 'flarum/components/Post'
import TextEditor from 'flarum/components/TextEditor'
import Button from 'flarum/components/Button';

import QuickAvatar from 'beeta-dev/ext-quickavatar/components/QuickAvatar';

app.initializers.add('beeta-quickavatar', () => {
    extend(Post.prototype, 'actionItems', function(items) {

        var quickAvatar = new QuickAvatar;
        quickAvatar.textAreaObj = this;
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
        var user = this.props.user;
        items.add("assinatura",user.bio());
    });
});