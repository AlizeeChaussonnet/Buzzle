const path = require('path');
const cors = require('cors');
const express = require('express');
const { connect } = require('./db');

const app = express();
const port = process.env.PORT || 3001;

// Chargement des variables d'environnement
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Gestion des CORS
app.use(cors({}));

// Traitement des requêtes POST
app.use(express.json());

// On définit le dossier build comme statique, ce qui permet de publier
// l'application REACT
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

// Connection à la BDD
const db = connect({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Page d'accueil de l'API (on renvoie simplement le contenu d'index.html)
app.use('/api', express.static(path.join(__dirname, 'index.html')));

// Endpoint qui renvoie la liste de TOUS les scores
app.get('/api/leaderboard', async (req, res) => {
  try {
    const [leaderboard] = await db.query('SELECT * FROM leaderboard');
    res.send(leaderboard);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Endpoint qui créé un utilisateur
app.post('/api/leaderboard', async (req, res) => {
  // Récupérer les données postées
  const { username } = req.body;
  const { score } = req.body;

  // Exécuter la requete d'insertion en BDD
  try {
    await db.query('INSERT INTO leaderboard (username, score) VALUES (?, ?)', [
      username,
      score,
    ]);

    res.status(201).send('OK');
  } catch (e) {
    res.status(500).send('Cannot create user');
  }
});

app.get('/api/leaderboard/order', async (req, res) => {
  // Exécuter la requête de lecture des données avec tri
  try {
    const [leaderboardOrder] = await db.query(
      'SELECT username, score FROM leaderboard ORDER BY score DESC LIMIT 5'
    );
    res.send(leaderboardOrder);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
