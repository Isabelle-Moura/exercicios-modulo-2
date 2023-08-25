interface Tasks {
  type: "task"
  description: string
  concluded: boolean
}

interface Events {
    type: "event"
    name: string
    date: string
}

interface Reminders {
    type: "reminder"
    text: string
}

type ItemType = Tasks | Events | Reminders