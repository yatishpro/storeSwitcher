require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function (
        $,
        modal
    ) {
    var  options = {
        type: 'popup',
        responsive: true,
        innerScroll: true,
        title: "Store Switcher",
        buttons: [{
            text: $.mage.__('Continue'),
            class: '',
            click:function () {
                this.closeModal();
            }
        }]
    };
    let $myModal = $("#popup-modal");
    var popup = modal(options, $myModal);
       $myModal.modal("openModal");


});
