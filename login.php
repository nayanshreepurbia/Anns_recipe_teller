<?php

$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = sprintf("SELECT * FROM user
                    WHERE email = '%s'",
                   $mysqli->real_escape_string($_POST["email"]));
    
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
    
    if ($user) {
        
        if (password_verify($_POST["password"], $user["password_hash"])) {
            
            session_start();
            
            session_regenerate_id();
            
            $_SESSION["user_id"] = $user["id"];
            
            header("Location: index.html");
            exit;
        }
    }
    
    $is_invalid = true;
}

?>
<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>login</title>
  <link rel="stylesheet" href="login.css">
  <style>
    body {
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:linear-gradient(to right,white,rgb(231, 193, 255) );
  }
  
  .container {
    background-color: white;
    width: 500px;
    margin: 75px auto;
    border: 1px solid #ccc;
    padding: 20px;
    align-items: center;
  }

  .container1 {
    margin:50px;
  }

  nav {
    float: right;
  }
  
  nav a {
    font-size:large;
    text-decoration: none;
    color: #000;
    padding: 0 10px;
    margin-left:15px;
  }

  nav a:hover{
    color:rgb(187, 91, 255);
  }

  .fa-solid{
    
    padding:10px;
    font-size:65px;
  }
  .logo{
   
    width:200px;
  }
  
  h1 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 7px;
  }
  
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
  }
  
  .button {
    background-color: rgb(123, 15, 123);
    color: white;
    padding: 7px 20px;
    border: none;
    cursor: pointer;
    margin-top: 40px;
  }
  
    </style>

</head>
<body>
  <header>
    <div class="container1">
        <img src="logo.jpg" class="logo" alt="logo"> 
        <nav class="flex items-center justify-between">
            <div class="left flex justify-right">
                </div>
                <div>
                    
                  <a href="index.html">Home</a> 
                  
                    </div>
                </div>
                
        </nav>
    </div>
  </header>
  <div class="container">
    <h1>Login</h1>-->

    <?php if ($is_invalid): ?>
        <em>Invalid login</em>
    <?php endif; ?>
    
    <!-- <form method="post" action ="login.php">
        <label for="email">email</label>
        <input type="email" name="email" id="email"  value="<?= isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "" ?>">
        <br><br>
        
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        <br><br>

        <button class="button" type="submit">Login</button>
    </form>
  </div>
</body>
</html>  -->







