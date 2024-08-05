const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const ownerRoutes = require('./routes/ownerRoutes');
const petRoutes = require('./routes/petRoutes');
const medicalRecordRoutes = require('./routes/medicalRecordRoutes');




require('./drivers/connect-db')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.set('PORT', process.env.PORT || 3000)

//app.use('/api/products', require('./routes/routes-products'))
// Rutas
app.use('/api/owners', ownerRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/medical-records', medicalRecordRoutes);

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

app.listen(app.get('PORT'), () => console.log(`Server Ready al port http://localhost:${app.get('PORT')}`))