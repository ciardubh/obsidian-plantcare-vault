## Overdue - Shape Up Time!
```tasks
not done
due before today
path includes 01-Plants
tags include pruning
```

## Due Today
```tasks
not done
due today
path includes 01-Plants
tags include pruning
```

## Next 7 Days
```tasks
not done
due after today
due before in 7 days
path includes 01-Plants
tags include pruning
group by due
```

## Last Pruned
```dataview
TABLE
file.link as Plant,
location as Location,
file.tasks.completion as "Completion Dates"
FROM "01-Plants"
WHERE contains(join(file.tasks.text), "#pruning") AND length(file.tasks.completion) > 0
SORT file.tasks.completion DESC
```

## Plants by Pruning Frequency
```dataview
TABLE
file.link as Plant,
location as Location,
filter(file.tasks.text, (t) => contains(t, "#pruning") AND contains(t, "#recurring/")) as "Pruning Tasks"
FROM "01-Plants"
WHERE contains(join(file.tasks.text), "#pruning")
```
