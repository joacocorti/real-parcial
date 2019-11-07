const getView = (properties) => `
  <h2>Propiedades en alquiler</h2>

  <div class="propiedades">
    ${
      properties.map((property) => (`
        <a href="http://localhost:3007/propiedad/${property.slug}">
          <div>
            <center>  
              <img 
                src = "${property.photo}"
                width= "800px"
                height="500px"
              >  
            </center>
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