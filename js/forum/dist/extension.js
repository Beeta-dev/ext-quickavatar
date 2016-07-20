System.register('beeta-dev/ext-quickavatar/main', ['flarum/extend', 'flarum/app', 'flarum/components/Post', 'flarum/components/Button'], function (_export) {
    'use strict';

    var extend, app, Post, Button;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsPost) {
            Post = _flarumComponentsPost['default'];
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton['default'];
        }],
        execute: function () {

            app.initializers.add('beeta-quickavatar', function () {
                extend(Post.prototype, 'footerItems', function (items) {
                    items.add('quick-avatar', Button.component({
                        className: 'Button Button-icon',
                        icon: 'bolt',
                        children: 'Quick Avatar',
                        onclick: alert('teste')
                    }), 5);
                });
            });
        }
    };
});