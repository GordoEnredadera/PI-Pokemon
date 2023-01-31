const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "3",
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "3",
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "3",
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "3",
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "3",
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "3",
    } 
  },
    {
      timestamps:false,
    });
};
