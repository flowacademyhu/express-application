'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let promises = [];

    promises.push(queryInterface.addConstraint('Users', ['addressId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Users_Addresses',
      references: {
        table: 'Addresses',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('OrderLines', ['orderId'], {
      type: 'FOREIGN KEY',
      name: 'fk_OrderLines_Orders',
      references: {
        table: 'Orders',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('OrderLines', ['productId'], {
      type: 'FOREIGN KEY',
      name: 'fk_OrderLines_Products',
      references: {
        table: 'Products',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('CartLines', ['productId'], {
      type: 'FOREIGN KEY',
      name: 'fk_CartLines_Products',
      references: {
        table: 'Products',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('CartLines', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'fk_CartLines_Users',
      references: {
        table: 'Users',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('Comments', ['productId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Comments_Products',
      references: {
        table: 'Products',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('Comments', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Comments_Users',
      references: {
        table: 'Users',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('Orders', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Orders_Users',
      references: {
        table: 'Users',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('Orders', ['billingAddressId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Orders_Addresses_1',
      references: {
        table: 'Addresses',
        field: 'id'
      }
    }));

    promises.push(queryInterface.addConstraint('Orders', ['deliveryAddressId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Orders_Addresses_2',
      references: {
        table: 'Addresses',
        field: 'id'
      }
    }));
    return Promise.all(promises);
  },

  down: (queryInterface, Sequelize) => {
    let promises = [];
    promises.push(queryInterface.removeConstraint('Users', 'fk_Users_Addresses'));
    promises.push(queryInterface.removeConstraint('OrderLines', 'fk_OrderLines_Orders'));
    promises.push(queryInterface.removeConstraint('OrderLines', 'fk_OrderLines_Products'));
    promises.push(queryInterface.removeConstraint('CartLines', 'fk_CartLines_Products'));
    promises.push(queryInterface.removeConstraint('CartLines', 'fk_CartLines_Users'));
    promises.push(queryInterface.removeConstraint('Comments', 'fk_Comments_Products'));
    promises.push(queryInterface.removeConstraint('Comments', 'fk_Comments_Users'));
    promises.push(queryInterface.removeConstraint('Orders', 'fk_Orders_Users'));
    promises.push(queryInterface.removeConstraint('Addresses', 'fk_Orders_Addresses_1'));
    promises.push(queryInterface.removeConstraint('Addresses', 'fk_Orders_Addresses_2'));
    return Promise.all(promises);
  }
};
