const getView = (properties) => `
  <h2>Propiedades en venta</h2>
  <div class="propiedades">

    ${
      properties.map((property) => (`
      <a href="http://localhost:3001/propiedad/${property.id}">
        <div>
          <h1>${property.photo} </h1>
          <h1>${property.description} [${property.type}]</h1>
          <p>${property.price} ${property.currency}</p>
          <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
        </div>
      </a>  
      `)).join('')
    }
  </div>
`;

module.exports = { getView };