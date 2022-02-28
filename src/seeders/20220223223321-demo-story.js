'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('listener_story', 
     [
       {
        listener_story_content: 'First Story',
        language: 'English',
        country: 'USA',
        communication_source: 'Facebook',
        story_source: 'Facebook',
        created_at: new Date(),
      updated_at: new Date()
     },
     {
      listener_story_content: 'Second Story',
      language: 'Spanish',
      country: 'Spain',
      communication_source: 'twitter',
      story_source: 'twitter',
      created_at: new Date(),
      updated_at: new Date()
   },

    ], {});


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('listener_story', null, {});
  }
};
