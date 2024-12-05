<?php
session_start(); // Assuming the session has user data

// PDO database connection setup (Make sure to configure these parameters)
try {
  $pdo = new PDO('mysql:host=localhost;dbname=your_db', 'username', 'password');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo json_encode(["error" => "Database connection failed"]);
  exit;
}

if (isset($_SESSION['user_id'])) {
  // Fetch user details from database
  $user_id = $_SESSION['user_id'];
  $query = "SELECT first_name FROM users WHERE id = ?";
  $stmt = $pdo->prepare($query);
  $stmt->execute([$user_id]);
  
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($user) {
    echo json_encode($user);
  } else {
    echo json_encode(["error" => "User not found"]);
  }
} else {
  echo json_encode(["error" => "Not logged in"]);
}
?>
