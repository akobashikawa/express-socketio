const { DataTypes, Model } = require('sequelize');

class NodoModel extends Model {

  static init(sequelize) {
    return super.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      texto: { type: DataTypes.STRING },
    }, {
      sequelize,
      modelName: 'Nodo',
      tableName: 'Nodos',
    });
  }
};

module.exports = NodoModel;