'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addConstraint('Users', ['addressId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Users_Addresses',
      references: {
        table: 'Addresses',
        field: 'id'
      }
    });

    queryInterface.addConstraint('OrderLines', ['orderId'], {
      type: 'FOREIGN KEY',
      name: 'fk_OrderLines_Orders',
      references: {
        table: 'Orders',
        field: 'id'
      }
    });

    queryInterface.addConstraint('OrderLines', ['productId'], {
      type: 'FOREIGN KEY',
      name: 'fk_OrderLines_Products',
      references: {
        table: 'Products',
        field: 'id'
      }
    });

    queryInterface.addConstraint('CartLines', ['productId'], {
      type: 'FOREIGN KEY',
      name: 'fk_CartLines_Products',
      references: {
        table: 'Products',
        field: 'id'
      }
    });

    queryInterface.addConstraint('CartLines', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'fk_CartLines_Users',
      references: {
        table: 'Users',
        field: 'id'
      }
    });

    queryInterface.addConstraint('Comments', ['productId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Comments_Products',
      references: {
        table: 'Products',
        field: 'id'
      }
    });

    queryInterface.addConstraint('Comments', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Comments_Users',
      references: {
        table: 'Users',
        field: 'id'
      }
    });

    queryInterface.addConstraint('Orders', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Orders_Users',
      references: {
        table: 'Users',
        field: 'id'
      }
    });

    queryInterface.addConstraint('Orders', ['billingAddressId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Orders_Addresses_1',
      references: {
        table: 'Addresses',
        field: 'id'
      }
    });

    queryInterface.addConstraint('Orders', ['deliveryAddressId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Orders_Addresses_2',
      references: {
        table: 'Addresses',
        field: 'id'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('Users', 'fk_Users_Addresses');
    queryInterface.removeConstraint('OrderLines', 'fk_OrderLines_Orders');
    queryInterface.removeConstraint('OrderLines', 'fk_OrderLines_Products');
    queryInterface.removeConstraint('CartLines', 'fk_CartLines_Products');
    queryInterface.removeConstraint('CartLines', 'fk_CartLines_Users');
    queryInterface.removeConstraint('Comments', 'fk_Comments_Products');
    queryInterface.removeConstraint('Comments', 'fk_Comments_Users');
    queryInterface.removeConstraint('Orders', 'fk_Orders_Users');
    queryInterface.removeConstraint('Addresses', 'fk_Orders_Addresses_1');
    queryInterface.removeConstraint('Addresses', 'fk_Orders_Addresses_2');
  }
};
