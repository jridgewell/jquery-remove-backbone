require.config({
    // Paths are relative to this
    paths: {
        'jquery.cleandata'             : '../src/jquery.cleanData',
        'backbone.remove'              : '../src/backbone.remove',

        // Testing libs
        'common'                       : 'common',
        'chai'                         : 'support/chai/chai',
        'sinon'                        : 'support/sinon',
        'sinon-chai'                   : 'support/sinon-chai/lib/sinon-chai',
        'jquery'                       : 'support/jquery/jquery',
        'underscore'                   : 'support/underscore/underscore',
        'backbone'                     : 'support/backbone/backbone',

        'sinon-commonjs'               : 'support/sinon/lib/sinon',
        'sinon/match'                  : 'support/sinon/lib/sinon/match',
        'sinon/spy'                    : 'support/sinon/lib/sinon/spy',
        'sinon/call'                   : 'support/sinon/lib/sinon/call',
        'sinon/stub'                   : 'support/sinon/lib/sinon/stub',
        'sinon/mock'                   : 'support/sinon/lib/sinon/mock',
        'sinon/assert'                 : 'support/sinon/lib/sinon/assert',
        'sinon/event'                  : 'support/sinon/lib/sinon/util/event',
        'sinon/fake_xml_http_request'  : 'support/sinon/lib/sinon/util/fake_xml_http_request',
        'sinon/fake_timers'            : 'support/sinon/lib/sinon/util/fake_timers',
        'sinon/xhr_ie'                 : 'support/sinon/lib/sinon/util/xhr_ie',
        'sinon/timers_ie'              : 'support/sinon/lib/sinon/util/timers_ie',
        'sinon/fake_server'            : 'support/sinon/lib/sinon/util/fake_server',
        'sinon/fake_server_with_clock' : 'support/sinon/lib/sinon/util/fake_server_with_clock',
        'sinon/collection'             : 'support/sinon/lib/sinon/collection',
        'sinon/sandbox'                : 'support/sinon/lib/sinon/sandbox',
        'sinon/test'                   : 'support/sinon/lib/sinon/test',
        'sinon/test_case'              : 'support/sinon/lib/sinon/test_case'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: 'jQuery'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery.cleandata': {
            deps: ['jquery']
        },
        'backbone.remove': {
            deps: ['underscore', 'backbone']
        },

        'sinon-commonjs': {
            exports: 'sinon'
        },
        'sinon/match'                  : {deps : ['sinon-commonjs']},
        'sinon/spy'                    : {deps : ['sinon-commonjs']},
        'sinon/call'                   : {deps : ['sinon-commonjs']},
        'sinon/stub'                   : {deps : ['sinon-commonjs']},
        'sinon/mock'                   : {deps : ['sinon-commonjs']},
        'sinon/assert'                 : {deps : ['sinon-commonjs']},
        'sinon/event'                  : {deps : ['sinon-commonjs']},
        'sinon/fake_xml_http_request'  : {deps : ['sinon-commonjs']},
        'sinon/fake_timers'            : {deps : ['sinon-commonjs']},
        'sinon/xhr_ie'                 : {deps : ['sinon-commonjs']},
        'sinon/timers_ie'              : {deps : ['sinon-commonjs']},
        'sinon/fake_server'            : {deps : ['sinon-commonjs']},
        'sinon/fake_server_with_clock' : {deps : ['sinon-commonjs']},
        'sinon/collection'             : {deps : ['sinon-commonjs']},
        'sinon/sandbox'                : {deps : ['sinon-commonjs']},
        'sinon/test'                   : {deps : ['sinon-commonjs']},
        'sinon/test_case'              : {deps : ['sinon-commonjs']}
    },
    priority: [
        'common',
        'jquery',
        'underscore',
        'backbone'
    ]
});
