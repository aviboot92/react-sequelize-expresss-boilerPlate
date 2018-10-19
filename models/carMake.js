module.exports = function(sequelize, DataTypes) {
    var CarMake = sequelize.define("CarMake", {
   
      make: DataTypes.STRING
    });
  
    CarMake.associate = function(models) {
 
      CarMake.hasMany(models.Service, {
        onDelete: "cascade"
      });
    };
  
    return CarMake;
  };