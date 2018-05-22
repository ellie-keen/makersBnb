'use strict';
module.exports = (sequelize, DataTypes) => {
  var spaces = sequelize.define('spaces', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    nightPrice: DataTypes.INTEGER
  }, {});
  spaces.associate = function(models) {
    // associations can be defined here
  };
  return spaces;
};
