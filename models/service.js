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
      // We're saying that a Service should belong to an Author
      // A Service can't be created without an Author due to the foreign key constraint
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