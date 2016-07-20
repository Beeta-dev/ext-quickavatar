import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Post from 'flarum/components/Post'
import Button from 'flarum/components/Button';

app.initializers.add('beeta-quickavatar', () => {
    extend(Post.prototype, 'actionItems', function(items) {
        items.add('quick-avatar', Button.component({
            className: 'Button Button-icon',
            icon: 'bolt',
            children: 'Quick Avatar',
            onclick: "alert('teste')"
        }), 5);
    });
    extend(Post.prototype, 'footerItems', function(items) {
        var user = this.props.user;
        items.add(user.bio());
    });
});