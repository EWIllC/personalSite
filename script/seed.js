const { green, red } = require('chalk');
const { db,
    models: {
    Property
}, } = require('../server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });
    // seed your database here!
    await Property.create({ name: "Sean Collins Smith", description: "this is a description", imageURL: "https://images.squarespace-cdn.com/content/v1/5f9218812c6b19296efe6688/1630427198615-F1VT8CSPWBZRNMXRT3NM/sean-collins-smith-1.jpeg?format=1500w"});

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    })
};
