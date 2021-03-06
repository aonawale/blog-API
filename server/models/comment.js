'use strict';

module.exports = function (sequelize, DataTypes) {
  let Comment = sequelize.define('comment', {
    id: {
      type: DataTypes.UUID,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Comment.belongsTo(models.article, {
          foreignKey: {
            name: 'articleId',
            allowNull: false
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        });
      }
    },
    defaultScope: {
      exclude: ['articleId']
    }
  });
  return Comment;
};