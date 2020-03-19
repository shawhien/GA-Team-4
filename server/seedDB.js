const db = require('./models');

db.Event.create({
    eventname: 'World Relief Volunteer Orientation',
    eventdate: '3/28/2020',
    eventlocation: 'World Relief Seattle',
    website: 'https://worldreliefseattle.org/volunteer',
    details: 'This is an orientation for volunteers who wish to come alongside new refugees, asylees, and immigrants in vulnerable situations in Western Washington. We will be learning about who we serve, what the journey and resettlement process looks like for refugees and asylees, and how the local community can come alongside in support and care.',
    organization: 'World Relief Seattle'
})
.then(result => {
    console.log(`${eventname} has been created!`);
})
.catch(err => {
    console.log('Error Message', err);
});

db.Event.create({
    eventname: 'Heritage Park Spring Clean',
    eventdate: '4/8/2020',
    eventlocation: 'Heritage Park',
    website: '',
    details: 'Gather your family, friends and coworkers and volunteer at Heritage Park at our Spring Clean event. Volunteers will have the opportunity to do some inside cleaning of park buildings and work outside weeding, landscaping and hauling. No equipment needed. Hope to see you there!',
    organization: 'Heritage Park'
})
.then(result => {
    console.log(`${eventname} has been created!`);
})
.catch(err => {
    console.log('Error Message', err)
});

db.Event.create({
    eventname: 'Volunteer on the Farm',
    eventdate: '3/21/2020',
    eventlocation: 'Des Moines Area Food Bank',
    website: 'http://www.myfoodbank.org/',
    details: 'Help Des Moines Area Food Bank and PCC by packaging bulk, nutritious foods into family-sized portions! Des Moines Area Food Bank Food Bank uses the portioned food during regular distribution for those in need.',
    organization: 'Des Moines Area Food Bank'
})
.then(result => {
    console.log(`${eventname} has been created!`);
})
.catch(err => {
    console.log('Error Message', err)
});

db.Event.create({
    eventname: 'Red Cross - Home Fire Campaign',
    eventdate: '4/18/2020',
    eventlocation: 'American Red Cross - Seattle',
    website: 'https://www.seattleworks.org/opportunity/a0C3m00000fXjuUEAS?layoutViewMode=tablet',
    details: 'Join us for this one-day event as we go door-to-door in our communities to provide Home Fire Preparedness education materials and free Smoke Alarm installations!',
    organization: 'American Red Cross'
})
.then(result => {
    console.log(`${eventname} has been created!`);
})
.catch(err => {
    console.log('Error Message', err)
});

db.Event.create({
    eventname: 'Westcress Park - Forest Restoration Work Party',
    eventdate: '3/28/2020',
    eventlocation: 'P-Patch Gardens at Westcress Park',
    website: 'http://www.thedirtcorps.com/',
    details: 'Let’s work together to transform and maintain Westcrest Park into an even greater public space for everyone to enjoy.  Dirt Corps leads volunteer parties at Westcrest every month!  We get outside and learn about restoration methods while improving the health of a forested neighborhood park. Help us protect our plantings so they can compete with Himalayan blackberries and other invasives! It\'s up to us and our volunteers to keep them under control! ',
    organization: 'Dirt Corps'
})
.then(result => {
    console.log(`${eventname} has been created!`);
})
.catch(err => {
    console.log('Error Message', err)
});