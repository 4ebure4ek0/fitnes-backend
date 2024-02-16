require('dotenv').config()
const express = require('express'),
  cors = require('cors'),
  cookieParser = require('cookie-parser'),
  sequelize = require('./models'),
  router = require('./router/index')

const app = express();
const PORT = process.env.PORT || 3010;
 
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// const courses = require('./courses.json');
// app.get('/api/courses', (req, res) => {
//   res.json({ courses: courses });
// });
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


const start = async () => {
  try{
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    await app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch(e){
    console.log(e)
  }
}