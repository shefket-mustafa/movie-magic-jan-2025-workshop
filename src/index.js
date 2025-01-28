import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';
import showRatingHelper from './helpers/rating-helper.js';


const app = express();

//db configuration
try{
  const uri = 'mongodb://localhost:27017/magic-movies-jan2025';
  await mongoose.connect(uri);

  console.log('DB connected successfully!');
}catch(err){
  console.log('Cannot connect to DB!');
  console.error(err.message);
};


//handlebars configuration
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  helpers: {
    showRating: showRatingHelper
  }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');


//express configuration
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({extended: false})); // Learn express to parse form data

//setting up routes
app.use(routes);

app.get('*', (req,res)=>{
  res.render('404');
})

//starting server
app.listen(5001, ()=> console.log('Server is listening on http://localhost:5001...'));