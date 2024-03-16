<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<title>Gantt Chart Generator</title>
</head>
<body>
  <div class="main">
    <div class="register">
      <h2>Gantt Chart Generator</h2>
      <form id="register" method="post">
        <label>Task Name:</label>
        <br>
        <input type="text" name="tname" id="name" placeholder="Enter your task name">
        <br><br>
        <label for="start_date">Start Date:</label>
        <br>
        <input type="date" id="start_date" name="start_date[]" required>
        <br><br>
        <label for="end_date">End Date:</label>
        <br>
        <input type="date" id="end_date" name="end_date[]" required>
        <br><br>
        <label for="dependency">Dependency (Optional):</label>
        <br>
        <input type="text" id="dependency" name="dependency[]" placeholder="Enter dependency if any:">
        <br><br>
        <button type="button" id="add_task">Add Task</button>
        <br><br>
        <button type="submit" name="submit" id="submit">Generate Gantt Chart</button>
      </form>
    </div>
  </div>

  <div id="gantt_chart">
    <?php
    // PHP code for generating Gantt chart will go here
    ?>
  </div>

  <script src="script.js"></script>
</body>
</html>
