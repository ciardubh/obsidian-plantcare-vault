## Overdue - Root Bound Alert!
```tasks
not done
due before today
path includes 01-Plants
tags include repotting
```

## Due Today
```tasks
not done
due today
path includes 01-Plants
tags include repotting
```

## Next 7 Days
```tasks
not done
due after today
due before in 7 days
path includes 01-Plants
tags include repotting
group by due
```

## Last Repotted
```dataview
TABLE
file.link as Plant,
location as Location,
file.tasks.completion as "Completion Dates"
FROM "01-Plants"
WHERE contains(join(file.tasks.text), "#repotting") AND length(file.tasks.completion) > 0
SORT file.tasks.completion DESC
```

## Plants by Repotting Frequency
```dataview
TABLE
file.link as Plant,
location as Location,
filter(file.tasks.text, (t) => contains(t, "#repotting") AND contains(t, "#recurring/")) as "Repotting Tasks"
FROM "01-Plants"
WHERE contains(join(file.tasks.text), "#repotting")
```

## Pot Size History
```dataview
TABLE
file.link as Plant,
location as Location,
potSize as "Current Pot Size"
FROM "01-Plants"
WHERE potSize
SORT file.path ASC
```
