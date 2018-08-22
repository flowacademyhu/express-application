const models = require('./app/models');
const Category = models.Category;

const getCategories = (req, res, next) => {
  Category.findAll().then((list) => {
    let output = generate(list, 0);
    res.locals = {sidebar: output};
    next();
  });
};

const generate = (list, id) => {
  let result = '';
  let subCategory = list.filter(item => (item.parentId === id));
  if (subCategory.length > 0) {
    result += '\r\n<ul>\r\n';
    for (let i in subCategory) {
      let item = subCategory[i];
      result += '<li><a href="/categories/' + item.id + '">' + item.name + '</a>';
      result += generate(list, item.id);
    }
    result += '</ul>\r\n';
  } else {
    return '</li>\r\n';
  }
  return result;
};

module.exports = getCategories;
