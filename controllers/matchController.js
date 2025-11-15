const Match = require('../models/matchModel');

exports.getAllMatches = async (req, res, next) => {
    try{
       
       const matches = await Match.find();

       res.status(200).json({
        status: 'success',
        results: matches.length,
        data: {
            matches
        }
       })
    }catch(err){
        console.log(err);
    }
}


exports.createMatch = async (req, res) => {
 
    try{
        
        const {
          home,
          away,
          league,time, tipOdd, bestTip, date, listOfPrediction
       } = req.body;

       

    const match = await Match.create({
           home,
           away,
           league,
           time,
           tipOdd: Number(tipOdd),
           bestTip,
           date,
           predictions: listOfPrediction
        });

        res.status(201).json({
            status: 'success',
            data: {
             match
           }
        })
    }catch(err){
        console.log(err);
    }

}

exports.clearDataCollection = async (req, res) => {
    try{
        await Match.deleteMany({});
        res.status(202).json({status: 'success', data: null})
    }catch(err){
        console.log(err);
    }
}