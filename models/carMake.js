module.exports = function(sequelize, DataTypes) {
    var CarMake = sequelize.define("CarMake", {
      // Giving the Author model a name of type STRING
      make: DataTypes.STRING
    });
  
    CarMake.associate = function(models) {
      // Associating CarMake with Posts
      // When an CarMake is deleted, also delete any associated Posts
      CarMake.hasMany(models.Service, {
        onDelete: "cascade"
      });
    };
  
    return CarMake;
  };