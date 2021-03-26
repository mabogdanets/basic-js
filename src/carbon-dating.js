const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) { 
    let res;
    if (typeof sampleActivity !== "string") return false;
    sampleActivity = Number(sampleActivity);
    if (isNaN(sampleActivity) || !isFinite(sampleActivity) || sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY){
        return false;
    } else {
        res = Math.ceil( Math.log( MODERN_ACTIVITY/sampleActivity ) * HALF_LIFE_PERIOD / Math.log(2) );
        return res;

    }
};
