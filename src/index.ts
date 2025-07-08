import express from 'express';
import { connectDB } from './config/db';
import bookRoutes from "./routes/bookRoutes";

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 3000;
app.use('/api', bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
