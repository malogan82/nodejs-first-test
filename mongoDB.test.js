const mongoose = require("mongoose")

jest.setTimeout(10000)

var db

beforeAll(() => {
  var mongoDB = 'mongodb+srv://m220student:m220student@mflix.pnhbt.mongodb.net/test?retryWrites=true&w=majority'
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
  db = mongoose.connection;
})

afterAll(() => {
  db.close()
})

test('Should be in connecting state', () => {
  expect(db.readyState).toBe(2);
});


test('Should be in connected state', async() => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  await delay(5000)
  expect(db.readyState).toBe(1);
});