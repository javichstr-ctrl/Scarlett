export default function handler(req, res) {
  const API_KEY = process.env.API_KEY || "clave-demo";

  // Validar API Key
  const provided = req.headers["x-api-key"];
  if (provided !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Memoria simulada (puedes reemplazar luego con una base real)
  const progreso = {
    nombre: "Scarlett",
    edad: 4,
    nivel: "Inicial 1/10",
    letras_aprendidas: ["A"],
    palabras_aprendidas: ["apple"],
    idiomas: ["español", "inglés"],
    ultima_leccion: "Letra B",
    comentarios: "Reconoce la A y la palabra apple 🍎"
  };

  if (req.method === "GET") {
    return res.status(200).json(progreso);
  }

  if (req.method === "POST") {
    const body = req.body || {};
    return res.status(200).json({
      ...progreso,
      ...body,
      updatedAt: new Date().toISOString(),
    });
  }

  res.status(405).json({ error: "Método no permitido" });
}
