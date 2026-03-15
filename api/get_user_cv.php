<?php
session_start();
require_once 'db.php';

header('Content-Type: application/json');

// On vérifie si l'utilisateur est réellement connecté via sa session
if(!isset($_SESSION['user_id'])){
    http_response_code(401);
    echo json_encode(['error' => 'Accès non autorisé']);
    exit;
}

$user_id = $_SESSION['user_id']; // On utilise l'ID stocké sur le serveur

try {
    // La requête ne récupérera QUE les CV de la personne connectée
    $stmt = $pdo->prepare("SELECT id, template, created_at, updated_at FROM cvs WHERE user_id = ? ORDER BY created_at DESC");
    $stmt->execute([$user_id]);
    $cvs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($cvs);

} catch(PDOException $e){
    echo json_encode(['error' => 'Erreur : ' . $e->getMessage()]);
}
?>