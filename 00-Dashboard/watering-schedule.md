## Overdue - Thirty Plant Alert!
```tasks
not done
due before today
path includes 01-Plants
tags include watering
```

## Due Today
```tasks
not done
due today
path includes 01-Plants
tags include watering
```

## Next 7 Days
```tasks
not done
due after today
due before in 7 days
path includes 01-Plants
tags include watering
group by due
```

## Last Watered
```dataview
TABLE
file.link as Plant,
location as Location,
file.tasks.completion as "Completion Dates"
FROM "01-Plants"
WHERE contains(join(file.tasks.text), "#watering") AND length(file.tasks.completion) > 0
SORT file.tasks.completion DESC
```


## Plants by Watering Frequency
```dataview
TABLE
file.link as Plant,
location as Location,
filter(file.tasks.text, (t) => contains(t, "#watering") AND contains(t, "#recurring/")) as "Watering Tasks"
FROM "01-Plants"
WHERE contains(join(file.tasks.text), "#watering")
```


