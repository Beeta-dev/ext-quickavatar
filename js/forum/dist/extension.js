System.register('beeta-dev/ext-quickavatar/components/QuickAvatar', ['flarum/Component', 'flarum/helpers/icon', 'flarum/components/TextEditor'], function (_export) {
    'use strict';

    var Component, icon, TextEditor, QuickAvatar;
    return {
        setters: [function (_flarumComponent) {
            Component = _flarumComponent['default'];
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon['default'];
        }, function (_flarumComponentsTextEditor) {
            TextEditor = _flarumComponentsTextEditor['default'];
        }],
        execute: function () {
            QuickAvatar = (function (_Component) {
                babelHelpers.inherits(QuickAvatar, _Component);

                function QuickAvatar() {
                    babelHelpers.classCallCheck(this, QuickAvatar);
                    babelHelpers.get(Object.getPrototypeOf(QuickAvatar.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(QuickAvatar, [{
                    key: 'init',
                    value: function init() {
                        var TextEditor = new TextEditor();
                        this.textAreaObj = TextEditor;
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        return m('button', {
                            className: 'Button beeta-quickavatar hasIcon',
                            onclick: function onclick() {
                                this.onclick.bind(this);
                            } }, [m('i', { className: 'icon fa fa-fw fa-bolt Button-icon' }, ''), m('span', { className: 'button-label' }, 'Quick Avatar')]);
                    }

                    //<i class="icon fa fa-fw fa-bolt Button-icon"></i><span class="button-label">Quick Avatar</span>

                }, {
                    key: 'onclick',
                    value: function onclick(image) {
                        var link = 'avatar';
                        var markdownString = '\n![image ' + link + '](' + link + ')\n';
                        this.textAreaObj.insertAtCursor(markdownString);
                        if (typeof this.textAreaObj.props.preview !== 'undefined') {
                            this.textAreaObj.props.preview();
                        }
                    }
                }]);
                return QuickAvatar;
            })(Component);

            _export('default', QuickAvatar);
        }
    };
});;
System.register('beeta-dev/ext-quickavatar/main', ['flarum/extend', 'flarum/app', 'flarum/components/Post', 'flarum/components/Button', 'beeta-dev/ext-quickavatar/components/QuickAvatar'], function (_export) {
    'use strict';

    var extend, app, Post, Button, QuickAvatar;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsPost) {
            Post = _flarumComponentsPost['default'];
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton['default'];
        }, function (_beetaDevExtQuickavatarComponentsQuickAvatar) {
            QuickAvatar = _beetaDevExtQuickavatarComponentsQuickAvatar['default'];
        }],
        execute: function () {

            app.initializers.add('beeta-quickavatar', function () {
                extend(Post.prototype, 'actionItems', function (items) {
                    var quickAvatar = new QuickAvatar();
                    //quickAvatar.textAreaObj = this;
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
                extend(Post.prototype, 'footerItems', function (items) {
                    //var user = this.props.user;
                    items.add("assinatura", 'Assinatura');
                });
            });
        }
    };
});