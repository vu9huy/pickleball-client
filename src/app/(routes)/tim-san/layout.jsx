export async function generateMetadata() {
    const product = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());
    return {
        title: product.title,
        description: product.body
    };
}

export default function TimSanLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}