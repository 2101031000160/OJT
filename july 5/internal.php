<?php
    if( $_GET["name"] || $_GET["age"] )
    {
        echo "welcome " . $_GET["name"]. "<br/>";
        echo "you are " . $_GET["age"]. " old. ";
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php $_PHP_SELF ?>" methode="GET">
        name: <input type="text" name="name"/>
        age: <input type="text" name="age" />
        <input type="submit" />

    </form>
</body>
</html>