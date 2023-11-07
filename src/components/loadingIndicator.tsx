interface LoadingIndicatorProps {
    loadingStatus: string
}

const LoadingIndicator = ({loadingStatus} : LoadingIndicatorProps) => {
    return <h3>{loadingStatus}</h3>;
}

export default LoadingIndicator;