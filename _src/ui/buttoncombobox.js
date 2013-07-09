/**
 * Combox 抽象基类
 * User: hn
 * Date: 13-5-29
 * Time: 下午8:01
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var widgetName = 'buttoncombobox';

    UE.ui.define( widgetName, ( function(){

        return {
            defaultOpt: {
                //按钮初始文字
                label: '',
                title: ''
            },
            init: function( options ) {

                var me = this;

                var btnWidget = $.eduibutton({
                    caret: true,
                    title: options.title,
                    mode: options.mode,
                    text: options.label
                });

                me.supper.init.call( me, options );

                me.attachTo( btnWidget );

                //监听change， 改变button显示内容
                me.on('changebefore', function( e, label ){
                    btnWidget.eduibutton('label', label );
                });

                me.data( 'button', btnWidget );

            },
            button: function(){
                return this.data( 'button' );
            }
        }

    } )(), 'combobox' );

})();
