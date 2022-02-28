'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListenerStory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListenerStory.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      listenerStoryContent: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'listener_story_content',
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      communicationSource: {
        type: DataTypes.STRING,
        field: 'communication_source',
      },
      storySource: {
        type: DataTypes.STRING,
        field: 'story_source',
      },
      tags: DataTypes.ARRAY(DataTypes.STRING),
      fileUrl: {
        type: DataTypes.STRING,
        field: 'file_url',
      },
      storyDate: {
        type: DataTypes.DATE,
        field: 'story_date',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      sequelize,
      modelName: 'ListenerStory',
      tableName: 'listener_stories',
    }
  );
  return ListenerStory;
};
