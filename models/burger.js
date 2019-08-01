module.exports = function (sequelize, DataTypes) {
  let burger = sequelize.define("Burger", {
      burger_name: DataTypes.STRING,
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  });
  return burger;
} 