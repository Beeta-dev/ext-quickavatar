import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import TextEditor from 'flarum/components/TextEditor'

export default class QuickAvatar extends Component {

    init() {
        var TextEditor = new TextEditor;
        this.textAreaObj = TextEditor;
    }

    view() {
        return m('button', {
            className: 'Button beeta-quickavatar hasIcon',
            onclick: function() { this.onclick.bind(this); } },
            [
                m('i', {className: 'icon fa fa-fw fa-bolt Button-icon'}, ''),
                m('span', {className: 'button-label'}, 'Quick Avatar')
            ]);
    }
    //<i class="icon fa fa-fw fa-bolt Button-icon"></i><span class="button-label">Quick Avatar</span>

    onclick(image) {
        var link = 'avatar';
        var markdownString = '\n![image ' + link + '](' + link + ')\n';
        this.textAreaObj.insertAtCursor(markdownString);
        if (typeof this.textAreaObj.props.preview !== 'undefined') {
            this.textAreaObj.props.preview();
        }
    }
}