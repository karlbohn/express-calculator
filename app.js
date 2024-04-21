const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { calcMean, calcMedian, calcMode, checkNums } = require('./mathFunctions');

app.get('/mean', function(req, res, next) {
    if (!req.query.nums){
        throw new ExpressError('Array of numbers required as query key');
    }
    
    let splitArray = req.query.nums.split(',');
    let nums = checkNums(splitArray);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: calcMean(nums)
    }

    return res.send(result);
});

app.get('/median', function(req, res, next){
    if (!req.query.nums){
        throw new ExpressError('Array of numbers required as query key');
    }

    let splitArray = req.query.nums.split(',');
    let nums = checkNums(splitArray);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: calcMedian(nums)
    }

    return res.send(result);
});

app.get('/mode', function(req, res, next){
    if (!req.query.nums){
        throw new ExpressError('Array of numbers required as query key');
    }

    let splitArray = req.query.nums.split(',');
    let nums = checkNums(splitArray);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: calcMode(nums)
    }

    return res.send(result);
});

app.get('/all', function(req, res, next){
    if (!req.query.nums){
        throw new ExpressError('Array of numbers required as query key');
    }

    let splitArray = req.query.nums.split(',');
    let nums = checkNums(splitArray);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "all",
        mean: calcMean(nums),
        median: calcMedian(nums),
        mode: calcMode(nums)
    }

    return res.send(result);
});

app.use(function(req,res,next){
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function(){
    console.log('Server started on port 3000')
});