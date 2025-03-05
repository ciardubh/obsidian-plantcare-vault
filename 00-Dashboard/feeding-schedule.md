## Overdue - Hungry Plants!
```tasks
not done
due before today
path includes 01-Plants
tags include feeding
```

## Due Today
```tasks
not done
due today
path includes 01-Plants
tags include feeding
```

## Next 7 Days
```tasks
not done
due after today
due before in 7 days
path includes 01-Plants
tags include feeding
group by due
```

## Last Fed
```dataview
TABLE
file.link as Plant,
location as Location,
file.tasks.completion as "Completion Dates"
FROM "01-Plants"
WHERE contains(join(file.tasks.text), "#feeding") AND length(file.tasks.completion) > 0
SORT file.tasks.completion DESC
```

## Plants by Feeding Frequency
```dataview
TABLE
file.link as Plant,
location as Location,
filter(file.tasks.text, (t) => contains(t, "#feeding") AND contains(t, "#recurring/")) as "Feeding Tasks"
FROM "01-Plants"
WHERE contains(join(file.tasks.text), "#feeding")
```

## Fertilizer Types
```dataview
TABLE
file.link as Plant,
location as Location,
fertilizer as "Fertilizer Type"
FROM "01-Plants"
WHERE fertilizer
SORT fertilizer ASC
```
