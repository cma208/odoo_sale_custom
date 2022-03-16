console.log('Point of sale javascript loaded sale custom');

odoo.define('pos_demo.custom', function(require){
    "use strict";

    const PosComponet=require('point_of_sale.PosComponent');
    const PoductScreen=require('point_of_sale.ProductScreen');
    const Registries=require('point_of_sale.Registries');

    class PosDiscountButton extends PosComponent{
        async onClick(){
            const order=this.env.pos.get_order();
            if(order.selected_orderline){
                order.selected_orderline.set_discount(5);
            }
        }
    }
    PosDiscountButton.template = 'PosDiscountButton';
    ProductScreen.addControlButton({
        component: PosDiscountButton,
        condition: function () {
            return true;
        },
    });
    Registries.Component.add(PosDiscountButton);
    return PosDiscountButton;
});
