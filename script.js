document.getElementById('gantt-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var tasks = document.getElementById('tasks').value.split('\n');
    var startDates = document.getElementById('start-dates').value.split('\n');
    var endDates = document.getElementById('end-dates').value.split('\n');
    var dependencies = document.getElementById('dependencies').value.split('\n');
  
    var ganttChart = document.getElementById('gantt-chart');
    ganttChart.innerHTML = '';
  
    var taskElems = [];
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      var startDate = new Date(startDates[i]);
      var endDate = new Date(endDates[i]);
      var taskElem = document.createElement('div');
      taskElem.className = 'task';
      taskElem.style.width = (endDate - startDate) + 'px';
      taskElem.style.left = startDate + 'px';
      taskElem.textContent = task;
      ganttChart.appendChild(taskElem);
      taskElems.push(taskElem);
    }
  
    for (var i = 0; i < dependencies.length; i++) {
      var dependency = dependencies[i].split(' -> ');
      var taskIndex1 = taskElems.findIndex(function(taskElem) {
        return taskElem.textContent.trim() === dependency[0].trim();
      });
      var taskIndex2 = taskElems.findIndex(function(taskElem) {
        return taskElem.textContent.trim() === dependency[1].trim();
      });
      if (taskIndex1 !== -1 && taskIndex2 !== -1) {
        var dependencyElem = document.createElement('div');
        dependencyElem.className = 'dependency';
        dependencyElem.style.left = taskElems[taskIndex1].offsetLeft + 'px';
        dependencyElem.style.width = (taskElems[taskIndex2].offsetLeft - taskElems[taskIndex1].offsetLeft) + 'px';
        ganttChart.appendChild(dependencyElem);
      }
    }
  });
  