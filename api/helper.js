const elements = {
  textField: "Text Field",
  submitButton: "Submit Button",
  radioButton: "Radio Button",
  checkBox: "Check Box",
  textArea: "Text Area",
  fileInput: "File Input"
};

const generateBody = function(elements) {
  let body = '<form action="" method="post">';
  elements.forEach(ele => {
    let tag = getElementTags(ele);
    body = body + tag;
  });
  body = body + "</form>";
  return body;
};

const getElementTags = function(element) {
  switch (element.type) {
    case elements.textField: {
      let tag = "<div>";
      if (element.properties.name) {
        tag =
          tag +
          `<label for=${element.properties.name}>${element.properties.name}</label>`;
      }
      return (
        tag +
        `<input id=${element.properties.identifier} name=${element.properties.name} type="text" value=""></div>  <br/>`
      );
    }
    case elements.submitButton: {
      return `<div><input id=${element.properties.identifier} name=${element.properties.name} type="submit" value="Submit"></div>  <br/>`;
    }
    case elements.radioButton: {
      return `<div><input id=${element.properties.identifier} name=${element.properties.name} type="radio" value="${element.properties.name}">${element.properties.name}</div>  <br/>`;
    }
    case elements.checkBox: {
      return `<div><input id=${element.properties.identifier} name=${element.properties.name} type="checkbox" value="${element.properties.name}">${element.properties.name}</div>  <br/>`;
    }
    case elements.textArea: {
      let tag = "<div>";
      if (element.properties.name) {
        tag =
          tag +
          `<label for=${element.properties.name}>${element.properties.name}</label>`;
      }
      return (
        tag +
        `<textarea id=${element.properties.identifier} name=${element.properties.name}></textarea></div>  <br/>`
      );
    }
    case elements.fileInput: {
      let tag = "<div>";
      if (element.properties.name) {
        tag =
          tag +
          `<label for=${element.properties.name}>${element.properties.name}</label>`;
      }
      return (
        tag +
        `<input id=${element.properties.identifier} name=${element.properties.name} type="file"></div>  <br/>`
      );
    }
  }
};

const buildHtml = function(body, title) {
  let html = `<!DOCTYPE html> <html><header><title>${title}</title></header><body>${body}</body></html>`;
  return html;
};

module.exports = {
  generateBody,
  buildHtml
};
