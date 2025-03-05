# Plant Care Vault Setup Instructions

This Obsidian vault is designed to help you manage and track your houseplant care. The system includes dashboards for different plant care activities, templates for plant and species information, and a recurring task generation system.

## Getting Started

### Step 1: Install Obsidian
1. Download and install [Obsidian](https://obsidian.md/) for your platform
2. Create a new vault for your plant care system

### Step 2: Set Up Folder Structure
Create the following folders in your vault:
- `00-Dashboard` - For plant care dashboards and overview
- `01-Plants` - Individual plant files with care schedules
- `02-Species` - Plant species care guides
- `03-Resources` - General resources and references
- `04-PhotoVault` - Plant photos and images
- `05-Templates` - Templates for new plants, species, etc.

### Step 3: Install Required Plugins
Go to Settings → Community Plugins → Browse, and install:

1. **Tasks** - For managing plant care tasks
   - Enable setting for recognizing dates in `📅 YYYY-MM-DD` format
   - Enable "Group Headings" in Task settings

2. **Dataview** - For creating dynamic plant dashboards
   - No special configuration required

3. **Templater** - For using templates
   - Enable "Trigger Templater on new file creation"
   - Set template folder to `05-Templates`

4. **QuickAdd** - For quickly adding new plants and running scripts
   - We'll configure this in Step 5

Optional but recommended plugins:
- **Calendar** - For visualizing tasks on a calendar
- **Periodic Notes** - For seasonal care notes

### Step 4: Add Templates
Copy the provided templates to your `05-Templates` folder:
- `plant-template.md` - For new plants
- `species-template.md` - For new plant species guides

### Step 5: Configure QuickAdd for Task Generation
1. Go to Settings → Community Plugins → QuickAdd
2. Click "Manage Macros"
3. Click "Add Macro" and name it "Generate Plant Tasks"
4. Click on the new macro to configure it
5. Click "Add Action" → "User Script"
6. In Script Path, enter `05-Templates/recurring-task-generator.js`
7. Save the configuration
8. Back on the main QuickAdd screen, under "Choices":
9. Click "Add Choice"
10. Name it "Process Plant Tasks"
11. Select "Macro" as the type
12. Choose "Generate Plant Tasks" from the dropdown
13. Save the configuration

### Step 6: Add Dashboard Files
Copy the provided dashboard files to your `00-Dashboard` folder:
- `plant-dashboard-main.md` - Main plant dashboard
- `watering-schedule.md` - Watering schedule
- `feeding-schedule.md` - Feeding schedule
- `pruning-schedule.md` - Pruning schedule
- `repotting-schedule.md` - Repotting schedule

### Step 7: Add Species Guides
Copy the provided species guides to your `02-Species` folder. These include:
- `Aloe Vera.md`
- `Monstera Deliciosa.md`
- `Pothos.md`
- `Snake Plant.md`
- `Spider Plant.md`
- `String of Hearts.md`
- `String of Pearls.md`

### Step 8: Add Sample Plants
Copy the sample plant files to your `01-Plants` folder to see how the system works:
- `Aloe.md`
- `Barbie.md`
- `SCindy.md`

## Using the System

### Adding a New Plant
1. Press `Ctrl+P` (or `Cmd+P` on Mac) to open the Command Palette
2. Type "Templater" and select "Templater: Create new note from template"
3. Choose `plant-template.md`
4. Enter a name for your plant
5. Fill in the template with your plant's details
6. Add watering, feeding, and maintenance tasks using the `#recurring/X` tag format

### Adding a New Species Guide
1. Press `Ctrl+P` (or `Cmd+P` on Mac) to open the Command Palette
2. Type "Templater" and select "Templater: Create new note from template"
3. Choose `species-template.md`
4. Enter the species name
5. Fill in the template with care information for this plant species

### Processing Recurring Tasks
After completing tasks (like watering your plants):
1. Mark the tasks as complete in your plant files
2. Press `Ctrl+P` (or `Cmd+P` on Mac) to open the Command Palette
3. Type "QuickAdd" and select it
4. Choose "Process Plant Tasks"
5. The script will generate new tasks based on your recurring schedule

### Using Dashboards
1. Open dashboards from the `00-Dashboard` folder
2. The main dashboard shows all upcoming tasks
3. Specialized dashboards show activities by type (watering, feeding, etc.)
4. Tasks will update automatically as you add new plants and complete care activities

## Customizing the System

### Adjusting Watering Schedules
- Edit the `#recurring/X` tag where X is the number of days between waterings
- Different plants will have different watering needs based on species, season, and environment

### Adding Custom Fields
- You can add new fields to the plant template frontmatter as needed
- Common additions include pest history, propagation dates, and growth measurements

### Creating New Dashboards
- Create new dashboard views based on your specific needs
- Use Dataview queries to filter and display plants by any frontmatter property

### Adding Photos
1. Place plant photos in the `04-PhotoVault` folder
2. Reference them in plant files using the format `![[photo-name.jpg]]`

## Troubleshooting

### Task Generation Issues
- Ensure tasks have the `#recurring/X` tag where X is the number of days
- Verify that completed tasks are marked with an `x` in the checkbox
- Check that dates use the format `📅 YYYY-MM-DD`

### Dashboard Display Problems
- Make sure Dataview plugin is enabled
- Try restarting Obsidian if queries aren't updating
- Start with simple queries and build up to more complex ones
- Check your plant frontmatter for consistent formatting

### Template Issues
- Verify that Templater plugin is properly configured
- Check that templates are in the correct folder
- Make sure templates use standard YAML frontmatter format

## License

This Obsidian Plant Care System is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).

[![CC BY-NC 4.0][cc-by-nc-image]][cc-by-nc]

[cc-by-nc]: http://creativecommons.org/licenses/by-nc/4.0/
[cc-by-nc-image]: https://licensebuttons.net/l/by-nc/4.0/88x31.png

This means you are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- NonCommercial — You may not use the material for commercial purposes.

See the [LICENSE.md](LICENSE.md) file for the full license text.

Obsidian itself and any plugins mentioned are subject to their own licenses. This license only covers the content created specifically for this plant care system.

## AI Assistance
Parts of this project were created with the assistance of Claude, an AI assistant by Anthropic.  While I designed the system requirements and functionality, Claude helped generate significant portions of the code, templates, and documentation. Once a core template had been finalised, for example, Claude was used to quickly create variations (such as the plant species files) to provide a good start-up pack for users who may be less familiar with Obsidian. The JavaScript for updating the plant schedule was primarily AI-generated with minimal modifications.

As the tools we use to create continue to evolve, so do our concepts of authorship and collaboration. Until we have reached a consensus on labelling and management of AI-created artifacts, this is my attempt to be as fair and transparent as possible.

## Credits

This plant care system was created by Rosa Devine (ciardubh). Feel free to modify and adapt it to your own needs. If you have suggestions for improvements, please open an issue or submit a pull request on GitHub.

Happy plant parenting!

