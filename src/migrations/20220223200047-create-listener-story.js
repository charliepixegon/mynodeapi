'use strict'
const { DataTypes } = require('sequelize')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listener_story', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      listener_story_content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      communication_source: {
        type: Sequelize.STRING,
      },
      story_source: {
        type: Sequelize.STRING,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      file_url: {
        type: Sequelize.STRING,
      },
      story_date: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('listener_story')
  },
}
