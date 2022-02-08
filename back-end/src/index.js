require("dotenv").config();
const bcrypt = require("bcrypt");
const { schema, clearSchema } = require("./user.schema");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const Prisma = require("@prisma/client");
const db = new Prisma.PrismaClient();

/////////////    PROJETS     ///////////////////

// Voir tous les projets

app.get("/api/projets", async (req, res) => {
  res.send(await db.projet.findMany({ include: { technos: true } }));
});

// Créer un projet

app.post("/api/projets", async (req, res) => {
  const { name, picture, link, github, description, explanation, technos } =
    req.body;
  return res.send(
    await db.projet.create({
      data: {
        name: name,
        picture: picture,
        link: link,
        github: github,
        description: description,
        explanation: explanation,
        technos: {
          create: [
            {
              techno_name: technos[0].techno_name,
            },
            {
              techno_name: technos[1].techno_name,
            },
          ],
        },
      },
    })
  );
  res.status(201).send("created");
});

/////////////    USERS     ///////////////////

// Voir tous les users

app.get("/api/users", async (req, res) => {
  try {
    res.send(await db.user.findMany());
  } catch (e) {
    res.status(500).send("Unexpected error");
  }
});

// Créer un user

app.post("/api/users", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    await db.user.create({
      data: {
        email: email,
        password: password,
        role: role,
      },
    });
    res.status(201).send("created");
  } catch (e) {
    res.status(500).send("Unexpected error");
  }
});

// Modifier un user

app.put("/api/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { email, password, role } = req.body;
  try {
    await db.user.update({
      where: { id: id },
      data: {
        email: email,
        password: password,
        role: role,
      },
    });
    res.status(200).send("update");
  } catch (e) {
    res.status(500).send("Unexpected error");
  }
});

// Supprimer un user

app.delete("/api/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await db.user.delete({
      where: {
        id: id,
      },
    });
    res.status(204).send("no content");
  } catch (e) {
    res.status(500).send("Unexpected error");
  }
});

/////////////    CONTACT FORM     ///////////////////

// Voir tous les messages

app.get("/api/contact", async (req, res) => {
  try {
    res.send(await db.contact.findMany());
  } catch (e) {
    res.status(500).send("Unexpected error");
  }
});

// Créer un user

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await db.contact.create({
      data: { name, email, message },
    });
    res.status(201).send("created");
  } catch (e) {
    res.status(500).send("Unexpected error");
  }
});

app.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
