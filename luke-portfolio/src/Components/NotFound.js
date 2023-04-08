import BackHomeButton from "./BackHomeButton";

function NotFound() {
    return (
        <div className="no-project">
            <h1>Page not found</h1>
            <p>The deployed application is likely under maintenance. Please check back later.</p>
            <BackHomeButton/>
        </div>
    )
}

export default NotFound;