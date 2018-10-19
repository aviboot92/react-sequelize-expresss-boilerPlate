module.exports = function(sequelize, DataTypes) {
    var Service = sequelize.define("Service", {
      service: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    Service.associate = function(models) {
 
      Service.belongsTo(models.CarMake, {
        foreignKey: {
          allowNull: false
        }
      });
      Service.belongsTo(models.ServiceDepartment, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Service;
  };