const { DataTypes, Model } = require('sequelize');

class TareaModel extends Model {

  static init(sequelize) {
    return super.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      texto: { type: DataTypes.STRING },
    }, {
      sequelize,
      modelName: 'Tarea',
      tableName: 'Tareas',
    });
  }
};

module.exports = TareaModel;