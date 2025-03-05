
## Today's Plant Tasks
```tasks
not done
due today
path includes 01-Plants
```

## Overdue Plant Care
```tasks
not done
due before today
path includes 01-Plants
```

## Upcoming Care (Next 7 Days)
```tasks
not done
due after today
due before in 7 days
path includes 01-Plants
group by tags
```

## Plants by Location
```dataview
TABLE
location as "Location",
species as "Species"
FROM "01-Plants"
SORT location DESC
```



## Quick Links
- [[watering-schedule|Watering Schedule]]
- [[feeding-schedule|Feeding Schedule]]
- [[pruning-schedule|Pruning Schedule]]
- [[repotting-schedule|Repotting Schedule]]

## Recently Added Plants
```dataview
TABLE
file.link as "Plant",
species as "Species",
location as "Location",
acquired as "Added"
FROM "01-Plants"
SORT acquired DESC
LIMIT 5
```

## Plant Health Concerns
```tasks
not done
path includes 01-Plants
tags include health-issue
```

