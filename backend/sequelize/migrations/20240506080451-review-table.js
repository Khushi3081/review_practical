'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("review",{
        uuid:{
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
        },
        title:{
          type:Sequelize.STRING,
          allowNull:false
        },
        content:{
          type:Sequelize.TEXT('long'),
          allowNull:false
        },
          created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          allowNull: true,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        },
        deleted_at: { type: Sequelize.Sequelize.DATE, allowNull: true },
      
      })})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable('review', { transaction: t });
    });
  }
};
