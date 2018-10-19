module.exports = function(sequelize, DataTypes) {
    var ServiceDepartment = sequelize.define("ServiceDepartment", {
      department: DataTypes.STRING
    });
  
    ServiceDepartment.associate = function(models) {
      ServiceDepartment.hasMany(models.Service, {});
    };
  
    return ServiceDepartment;
  };