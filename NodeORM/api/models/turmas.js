'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turmas.hasMany(models.Matriculas, {foreignKey: 'turma_id'}) //conectando tabela Turmas com Matriculas

      Turmas.belongsTo(models.Pessoas, {foreignKey: 'docente_id'}) //conectando tabela Turmas com Pessoas (recebendo)
      Turmas.belongsTo(models.Niveis, {foreignKey: 'nivel_id'}) //conectando tabela Turmas com Niveis (recebendo)
    }
  };
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};