define([
    'js/postmonger'
], function(
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
    var toJbPayload = {};
    var step = 1;

    $(window).ready(onRender);

    connection.on('initActivity', function(payload) {
        var message;

        if (payload) {
            toJbPayload = payload;
        }

        if (toJbPayload['arguments'] && toJbPayload['arguments'].execute && toJbPayload['arguments'].execute.inArguments) {
            message = toJbPayload['arguments'].execute.inArguments.message;
        }

        // If there is no message selected, disable the next button
        //if (!message) {
        //    step = 1;
        //    gotoStep(step);
        //    connection.trigger('updateButton', { button: 'next', enabled: false });
        // If there is a message, skip to the summary step
        //} else {
        //    step = 3;
        //    $('#select1').find('option[value='+ message +']').attr('selected', 'selected');
        //    $('#message').html(message);
        //    gotoStep(step);
        //}
    });

    connection.on('requestedTokens', function(tokens) {
        // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
        // console.log(tokens);
    });

    connection.on('requestedTokens', function(endpoints) {
        // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
        // console.log(endpoints);
    });

    connection.on('clickedNext', function() {
       // step++;
       // gotoStep(step);
       connection.trigger('ready');
    });

    connection.on('clickedBack', function() {
       // step--;
       // gotoStep(step);
       // connection.trigger('ready');
    });

    function onRender() {
        connection.trigger('ready');

        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');

        //connection.trigger('updateButton', { button: 'next', enabled: false });
    }

    function gotoStep(step) {
        //$(‘.step').hide();

	//save();
    }

    function save() {
       
        //toJbPayload['arguments'].execute.inArguments.deviceEventPayload = "{{Event.CONTACT-EVENT-1a6c325c-a03a-da04-e430-02f96ef91c2d.deviceEventPayload}}";
 
        //connection.trigger('updateActivity', toJbPayload);
    }

});