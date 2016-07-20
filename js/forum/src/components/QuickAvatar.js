import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';

export default class QuickAvatar extends Component {

    init() {
        this.textAreaObj = null;
    }

    view() {
        return m('div', {
            className: 'Button hasIcon beeta-quickavatar Button--icon',
            icon: 'bolt',
            children: 'Quick Avatar',
            onclick: this.onclick.bind(this)
        });
    }

    onclick(image) {

        var link = 'avatar';
        var markdownString = '\n![image ' + link + '](' + link + ')\n';
        this.textAreaObj.insertAtCursor(markdownString);
        if (typeof this.textAreaObj.props.preview !== 'undefined') {
            this.textAreaObj.props.preview();
        }
    }
}