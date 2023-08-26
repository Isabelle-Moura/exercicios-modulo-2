interface ErrorNotification {
    type: "error"
    message: string    
}
interface WarningNotification {
    type: "warning"
    message: string    
}

interface InfoNotification {
    type: "info"
    message: string    
}

type Notifications = ErrorNotification | WarningNotification | InfoNotification