const mongoose = require('mongoose');

// Conexión a MongoDB Atlas
const uri = 'mongodb+srv://root:root@electiva.4plmob7.mongodb.net/?retryWrites=true&w=majority&appName=Proyecto';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB Atlas', err));

// Definición del esquema de registros médicos
const medicalRecordSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  visitDate: { type: Date, required: true },
  services: { type: [String], required: true },
  notes: { type: String, required: true },
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true }
});

// Modelo de registros médicos
const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

// Datos de registros médicos a insertar
const medicalRecordsData = [
    {
        "id": "d5fE_asz1",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Vacunación y desparasitación",
          "Control de peso y asesoramiento nutricional"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93da"
      },
      {
        "id": "d5fE_asz2",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Consultas veterinarias",
          "Pruebas diagnósticas (análisis de sangre, radiografías, etc.)"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93db"
      },
      {
        "id": "d5fE_asz3",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Tratamientos dentales",
          "Consejería sobre comportamiento animal"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93dc"
      },
      {
        "id": "d5fE_asz4",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Cirugías y procedimientos médicos",
          "Emergencias veterinarias"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93dd"
      },
      {
        "id": "d5fE_asz5",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Servicios de peluquería y baño",
          "Venta de alimentos y productos para mascotas"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93de"
      },
      {
        "id": "d5fE_asz6",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Microchip y registro de mascotas",
          "Asesoramiento sobre prevención de enfermedades"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93df"
      },
      {
        "id": "d5fE_asz7",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Estética y peluquería para mascotas",
          "Hospitalización y cuidados intensivos"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e0"
      },
      {
        "id": "d5fE_asz8",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Consultas veterinarias",
          "Tratamientos dentales"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e1"
      },
      {
        "id": "d5fE_asz9",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Pruebas diagnósticas (análisis de sangre, radiografías, etc.)",
          "Emergencias veterinarias"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e2"
      },
      {
        "id": "d5fE_asz10",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Control de peso y asesoramiento nutricional",
          "Consejería sobre comportamiento animal"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e3"
      },
      {
        "id": "d5fE_asz11",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Vacunación y desparasitación",
          "Cirugías y procedimientos médicos"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e4"
      },
      {
        "id": "d5fE_asz12",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Asesoramiento sobre prevención de enfermedades",
          "Servicios de peluquería y baño"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e5"
      },
      {
        "id": "d5fE_asz13",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Microchip y registro de mascotas",
          "Venta de alimentos y productos para mascotas"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e6"
      },
      {
        "id": "d5fE_asz14",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Estética y peluquería para mascotas",
          "Hospitalización y cuidados intensivos"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e7"
      },
      {
        "id": "d5fE_asz15",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Consultas veterinarias",
          "Tratamientos dentales"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e8"
      },
      {
        "id": "d5fE_asz16",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Pruebas diagnósticas (análisis de sangre, radiografías, etc.)",
          "Emergencias veterinarias"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93e9"
      },
      {
        "id": "d5fE_asz17",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Control de peso y asesoramiento nutricional",
          "Consejería sobre comportamiento animal"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93ea"
      },
      {
        "id": "d5fE_asz18",
        "visitDate": "2024-08-01T00:00:00.000Z",
        "services": [
          "Vacunación y desparasitación",
          "Cirugías y procedimientos médicos"
        ],
        "notes": "Pet is in good health.",
        "pet": "66b236e061fb0342876b93eb"
      }
  // Agrega más registros según sea necesario
];

// Inserción de datos
MedicalRecord.insertMany(medicalRecordsData)
  .then(docs => {
    console.log('Datos insertados:', docs);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error al insertar datos:', err);
    mongoose.connection.close();
  });
