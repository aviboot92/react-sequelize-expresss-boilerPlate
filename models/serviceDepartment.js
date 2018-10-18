module.exports = function(sequelize, DataTypes) {
    var ServiceDepartment = sequelize.define("ServiceDepartment", {
      // Giving the ServiceDepartment model a name of type STRING
      department: DataTypes.STRING
    });
  
    ServiceDepartment.associate = function(models) {
      // Associating ServiceDepartment with Posts
      // When an ServiceDepartment is deleted, also delete any associated Posts
      ServiceDepartment.hasMany(models.Service, {
        // onDelete: "cascade"
      });
    };
  
    return ServiceDepartment;
  };