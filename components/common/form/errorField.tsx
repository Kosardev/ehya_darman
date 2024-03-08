type ErrorFieldT = {
    error?: string
}

function ErrorField({ error }: ErrorFieldT) {
    if (!error) return null
    return (
        <span className={"flex items-center my-2 text-red-ehya text-xs font-bold"}>{error}</span>
    )
}

export default ErrorField