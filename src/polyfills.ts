import 'core-js';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';


if (process.env.ENV === 'production') {
    // Production
} else {
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}