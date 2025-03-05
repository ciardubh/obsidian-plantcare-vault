// recurring-task-generator.js
// This script generates the next occurrence of a recurring task when marked complete

module.exports = async function(params) {
  const { app, obsidian } = params;
  const moment = window.moment;
  
  console.log("Running plant care recurring task generator...");
  
  // Get all plant files
  const plantFiles = app.vault.getMarkdownFiles().filter(file => 
    file.path.startsWith("01-Plants/"));
  
  let tasksGenerated = 0;
  
  // Process each plant file
  for (const file of plantFiles) {
    try {
      // Read the file content
      const content = await app.vault.read(file);
      let updatedContent = content;
      let hasChanges = false;
      
      // Get the plant nickname from frontmatter or filename
      const nicknameMatch = content.match(/nickname: "([^"]+)"/);
      const plantName = nicknameMatch ? nicknameMatch[1] : file.basename;
      
      // Find completed tasks with recurring tags
      const completedTaskRegex = /- \[x\] (.+?)(?:#recurring\/(\d+)).*?📅 (\d{4}-\d{2}-\d{2})/g;
      let match;
      
      while ((match = completedTaskRegex.exec(content)) !== null) {
        const taskText = match[1].trim();
        const recurringDays = parseInt(match[2]);
        const lastDate = match[3];
        
        // Calculate next date
        const nextDate = moment(lastDate, "YYYY-MM-DD")
          .add(recurringDays, 'days')
          .format('YYYY-MM-DD');
        
        // Create new task
        // Extract the task type from the hashtag
        const taskTypeMatch = taskText.match(/#(\w+)/);
        const taskType = taskTypeMatch ? taskTypeMatch[1] : "task";
        
        // Create the base task text by removing the date part
        const baseTaskText = taskText.replace(/📅 \d{4}-\d{2}-\d{2}/, '').trim();
        
        const newTask = `- [ ] ${baseTaskText} 📅 ${nextDate} #${taskType} #recurring/${recurringDays}`;
        
        // Add the new task under the appropriate section
        const sectionRegex = new RegExp(`## ${taskType.charAt(0).toUpperCase() + taskType.slice(1)} Schedule`);
        const sectionMatch = updatedContent.match(sectionRegex);
        
        if (sectionMatch) {
          const sectionPos = updatedContent.indexOf(sectionMatch[0]) + sectionMatch[0].length;
          updatedContent = updatedContent.slice(0, sectionPos) + 
                         "\n" + newTask + 
                         updatedContent.slice(sectionPos);
          hasChanges = true;
          tasksGenerated++;
          
          console.log(`Generated new ${taskType} task for ${plantName} on ${nextDate}`);
        }
      }
      
      // Save the updated content
      if (hasChanges) {
        await app.vault.modify(file, updatedContent);
      }
      
    } catch (e) {
      console.log(`Error processing file ${file.path}: ${e.message}`);
    }
  }
  
  // Show notification
  if (tasksGenerated > 0) {
    new Notice(`Generated ${tasksGenerated} new plant care tasks`);
  }
  
  console.log("Plant care task generator complete");
};