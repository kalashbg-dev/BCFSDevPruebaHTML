
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:3000', // URL del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Datos de ejemplo
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

let usuarios: Usuario[] = [
  
    { id: 1, nombre: 'Kalash', email: 'kbg1@example.com' },
    { id: 2, nombre: 'Dayana', email: 'daya2@example.com' },
    { id: 3, nombre: 'Sensei', email: 'hatake3@example.com' },
    { id: 4, nombre: 'Mikami', email: 'casafantasmas4@example.com' },
  ];
  
// Rutas de la API REST
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const usuario = usuarios.find(u => u.id === id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
});

app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario: Usuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.put('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const usuarioIndex = usuarios.findIndex(u => u.id === id);
  if (usuarioIndex !== -1) {
    usuarios[usuarioIndex] = { id, ...req.body };
    res.json(usuarios[usuarioIndex]);
  } else {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
});

app.delete('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const usuarioIndex = usuarios.findIndex(u => u.id === id);
  if (usuarioIndex !== -1) {
    const eliminado = usuarios.splice(usuarioIndex, 1);
    res.json(eliminado[0]);
  } else {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
