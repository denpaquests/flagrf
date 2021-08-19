(function(d) {

    /**
     * Registers triggers for down arrows.
     */
    function dnp_arrows__registerTriggers() {
        var triggers = d.querySelectorAll('.dnp__down-arrow-link');

        triggers.forEach( function ( trigger ) {

            trigger.addEventListener( 'click', function ( event ) {
                event.preventDefault();
                dnp_arrows__handleTrigger( event.target );
            } );

        } );
    }

    /**
     * Handles click events for down arrows.
     *
     * @param {Node} trigger Trigger event target.
     */
    function dnp_arrows__handleTrigger( trigger ) {
        var href = trigger.getAttribute( 'href' );
        var menuItem = d.querySelector( '.t607__middle-pos .t-menu__link-item[href="' + href + '"]' );
        menuItem.dispatchEvent( new Event('click') );
    }

    /**
     * Registers triggers for modal windows.
     */
    function dnp_modal__registerTriggers() {
        var triggers = d.querySelectorAll( '.dnp__triggers-modal' );

        triggers.forEach( function( trigger ) {

            trigger.addEventListener( 'click', function( event ) {
                event.preventDefault();
                dnp_modal__handleTrigger( event.target );
            } );

        } );
    }

    /**
     * Handles click events for modal triggers.
     *
     * @param {Node} trigger Trigger event target.
     */
    function dnp_modal__handleTrigger( trigger ) {

        var modal_closeBtn = d.createElement( 'a' );
            modal_closeBtn.className = 'dnp__modal-close-btn';
            modal_closeBtn.setAttribute( 'href', '#' );
            modal_closeBtn.addEventListener( 'click', function ( event ) {
                event.preventDefault();
                var modalHead = event.target.parentElement;
                dnp_modal__handleClose( modalHead.parentElement );
            } );

        var modalHead = d.createElement( 'div' );
            modalHead.className = 'dnp__modal-head';
            modalHead.appendChild( modal_closeBtn );

        var modalIframe = d.createElement( 'iframe' );
            modalIframe.className = 'dnp__modal-body-iframe';
            modalIframe.setAttribute( 'src', trigger.dataset.modalUri );

        var modalBody = d.createElement( 'div' );
            modalBody.className = 'dnp__modal-body';
            modalBody.appendChild( modalIframe );

        var modal = d.createElement( 'div' );
            modal.className = 'dnp__modal';
            modal.appendChild( modalHead );
            modal.appendChild( modalBody );

        var body = d.body || d.getElementsByTagName( 'body' )[0];
            body.appendChild( modal );

        setTimeout( function () {
            modal.className += ' dnp__modal-visible';
        }, 100);
    }

    /**
     * Handles modal window closure.
     *
     * @param {Node} modal Modal window to close.
     */
    function dnp_modal__handleClose( modal ) {
        modal.className = 'dnp__modal';

        setTimeout( function () {
            modal.remove();
        }, 250 );
    }

    /**
     * Register triggers on DOM load.
     */
    d.addEventListener( 'DOMContentLoaded', function () {
        /* register modal triggers */
        dnp_modal__registerTriggers();

        /* register down arrow triggers */
        dnp_arrows__registerTriggers();
    } );

})(document);