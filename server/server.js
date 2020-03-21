// Require needed node modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./models');


// Create an instance of express
const app = express();

// Middleware, etc
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Declare controllers/route
app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))
app.use('/organizations', require('./routes/organizations'))
app.use('/events', require('./routes/events'))

// Landing page route
// app.get('/', (req, res) =>{
//   res.render('landing');
// });

//1:M Relationship between Organization and Event
const createOrganization = function(organization)  {
  return db.Organization.create(organization).then(docOrganization => {
    console.log("\n>> Created Organization:\n", docOrganization);
  });
};

const newEvent = function(organizationId, event) {
  console.log("\n>>  Add Event:\n", event);
  return db.Organization.findByIdAndUpdate(
    organizationId,
    {
      $push: {
        events: {
          eventname: event.name,
          eventdate: event.date,
          eventlocation: event.eventlocation,
          city: event.city,
          state: event.state,
          website: event.website,
          details: event.details,
        }
      }
    },
    { new: true, useFindAndModify: false }
  );
};

// //TEST INFO for 1:M
// const run = async function() {
//   var organization = await createOrganization({
//     orgname: 'Shawhizzles Shack of Splendor',
//     email: 'shawhizzle@shackofsplendor.com',
//     password: 'bringcats',
//     image: 'http://placecage.com/200/200',
//   });
//   console.log('\n>> Organization:\n', organization);

//   organization = await newEvent(organization._id, {
//     eventname: "Cat Collection",
//     eventdate: '4/20/2020',
//     eventlocation: 'Shawhizzles Shack',
//     city: 'Seattle',
//     state: 'WA',
//     website: 'www.shawhizzleshouseofsplendor.com',
//     details: 'This may sound creepy, but we do NOT harm cats. We love them and want to catch em all and love them forever'
//   });
//   console.log("\n>> Organization:\n", organization)
// };


//M:M Relationship between User and Event
const createEvent = function(event) {
  return db.Event.create(event).then(docEvent => {
    console.log("\n>> Created Event:\n", docEvent);
    return docEvent;
  });
};

const createUser = function(user) {
  return db.User.create(user).then(docUser => {
    console.log("\n>> Created User:\n", docUser);
    return docUser;
  });
};

const addUserToEvent = function(eventId, user) {
  return db.Event.findByIdAndUpdate(
    eventId,
    // $ appends the aray to a single element
    { $push: { users: user._id } },
    { new: true, useFindandModify: false }
  );
};

const addEventToUser = function(userId, event) {
  return db.User.findByIdAndUpdate(
  userId,
  { $push: { events: event._id }},
  { new: true, useFindAndModify: false }
  );
};

// //TEST INFO for M:M
// const run = async function() {
//   var event1 = await createEvent({
//    eventname: 'event1',
//    eventdate: "4/20/2020",
//    eventlocation: 'Yo boys crib',
//    city: 'Seattle',
//    state: "WA",
//    details: 'Come hang with yo boy at his crib.',
//    firstname: 'Shawhizzle'
//   });

//   var userA = await createUser({
//     firstname: 'Shawhizzle',
//     lastname: "Sohrahizzle",
//     password: 'manizzle',
//     email: 'shawhizzle@manizzzzzzle.com',
//     details: 'yo, i got hella cute cats, and im cool af. Come visit!',
//     eventname: 'event1'
//   });

//   var userB = await createUser({
//     firstname: 'Eros',
//     lastname: 'Boo',
//     password: 'mydadisthebest',
//     email: 'erosboo@shawhizzzzzzzle.com',
//     details: 'yeah, you heard my dad. Come visit us. We cute af and hes the coolest cat we know.',
//     eventname: 'event1'
//   });
    
    var event = await addUserToEvent(event1._id, userA);
    console.log("\n>> event1:\n", event);
    
    var user =  await addEventToUser(userA._id, event1);
    console.log("\n>> userA:\n", user);
    
    event = await addUserToEvent(event1._id, userB);
    console.log("\n>> event1:\n", event);
    
    user = await addEventToUser(userB._id, event1);
    console.log('\n userB:\n', user);

  var event2 = await createEvent({
    firstname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });

  event = await addUserToEvent(event2._id, userB);
  console.log('\n>> event2:\n', event);

  user = await addEventToUser(userB_.id, event2);
  console.log("\n>> userB:\n", user);
};

run();

// Make 404 route
app.get('/', (req, res) => {
  res.send({'error': 'page not found'});
});

// Listen
app.listen(process.env.PORT || 3000, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${process.env.PORT || 3000} ☕️`)
});