import { STATUSES } from "types"

const getStatusColor = (status: STATUSES) => {
    switch (status) {
        case (STATUSES.APPROVED || STATUSES.SUCCESS):
            return 'success'
        case STATUSES.PENDING:
            return 'warning'
        default:
            return 'secondary'
    }
}

export default getStatusColor