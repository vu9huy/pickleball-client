export async function generateMetadata() {
    return {
        title: "",
        description: ""
    };
}

export default function BlogsLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}